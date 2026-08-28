import { DIFFERENTIAL_BRANCHES } from "@/data/differentialQuestions";
import {
  detectNewCrossMatches,
  getAdaptiveQuestion,
  scoresFromAdaptiveAnswers,
} from "@/lib/adaptive/scoring";
import {
  missingRequiredIds,
  pickNextQuestionIds,
  usesAdaptiveFlow,
  validateQueue,
} from "@/lib/adaptive/selector";
import { resolveBranch } from "@/lib/adaptive/stage2";
import {
  addWeights,
  emptyScores,
  questionBank,
  selectBranches,
} from "@/lib/engine";
import { effectiveOptions, SKIP_INDEX } from "@/lib/options";
import { addVisualToScores } from "@/lib/visual";
import type { AnswerMap, ScanState, Scores } from "@/lib/types";

function scoresFromLegacyAnswers(state: ScanState, answers: AnswerMap): {
  scores: Scores;
  subtypeTags: string[];
} {
  let scores = emptyScores();
  const subtypeTags: string[] = [];
  const skipped = new Set(state.skipped);

  for (const question of questionBank(state.audience)) {
    if (skipped.has(question.id)) continue;
    const index = answers[question.id];
    if (index === undefined || index === SKIP_INDEX) continue;
    const option = effectiveOptions(question)[index];
    if (!option) continue;
    scores = addWeights(scores, option.weights);
  }

  for (const branch of Object.values(DIFFERENTIAL_BRANCHES)) {
    for (const question of branch.questions) {
      const index = answers[question.id];
      if (index === undefined) continue;
      const option = question.options[index];
      if (!option) continue;
      scores = addWeights(scores, option.points);
      if (option.subTypeTag) subtypeTags.push(option.subTypeTag);
    }
  }

  if (state.audience === "adult") {
    scores = addVisualToScores(scores, state.visual);
  }

  return { scores, subtypeTags };
}

export function scoresFromAnswers(state: ScanState, answers: AnswerMap): {
  scores: Scores;
  subtypeTags: string[];
  axisScores: Record<string, number>;
  crossMatchApplied: string[];
} {
  if (usesAdaptiveFlow(state)) {
    const newCross = detectNewCrossMatches(answers, state.crossMatchApplied);
    const crossMatchApplied = [
      ...new Set([...state.crossMatchApplied, ...newCross]),
    ];
    const { scores, axisScores } = scoresFromAdaptiveAnswers(
      answers,
      crossMatchApplied,
    );

    let merged = { ...scores };
    const subtypeTags: string[] = [];

    for (const branchId of state.branches) {
      const branch = resolveBranch(branchId);
      if (!branch) continue;
      for (const question of branch.questions) {
        const index = answers[question.id];
        if (index === undefined) continue;
        const option = question.options[index];
        if (!option) continue;
        merged = addWeights(merged, option.points);
        if (option.subTypeTag) subtypeTags.push(option.subTypeTag);
      }
    }

    return { scores: merged, subtypeTags, axisScores, crossMatchApplied };
  }

  const legacy = scoresFromLegacyAnswers(state, answers);
  return {
    ...legacy,
    axisScores: {},
    crossMatchApplied: [],
  };
}

function afterBaseComplete(state: ScanState, answers: AnswerMap): ScanState {
  const { scores, subtypeTags, axisScores, crossMatchApplied } =
    scoresFromAnswers(state, answers);
  const next = {
    ...state,
    answers,
    scores,
    subtypeTags,
    axisScores,
    crossMatchApplied,
  };
  let branches: string[] = [];
  try {
    branches = selectBranches(next);
  } catch (error) {
    console.error("9spectrum: selectBranches failed", error);
  }
  return {
    ...next,
    branches,
    branchIndex: 0,
    diffQuestionIndex: 0,
    phase: branches.length > 0 ? "bridge" : "done",
  };
}

function applyAdaptiveAnswer(
  state: ScanState,
  optionIndex: number,
): ScanState {
  const ready = validateQueue(state);
  const qid = ready.adaptiveQueue[ready.baseIndex];
  if (!qid) {
    // Kuyruk boş/taşmış — onarım sonrası hâlâ yoksa ve zorunlular bittiyse bitir
    const repaired = validateQueue({
      ...ready,
      baseIndex: Math.min(ready.baseIndex, Math.max(0, ready.adaptiveQueue.length - 1)),
    });
    const still = repaired.adaptiveQueue[repaired.baseIndex];
    if (!still) {
      if (missingRequiredIds(repaired.answers).length === 0) {
        return afterBaseComplete(repaired, repaired.answers);
      }
      const missing = missingRequiredIds(repaired.answers);
      return {
        ...repaired,
        adaptiveQueue: [...repaired.adaptiveQueue, ...missing],
        baseIndex: repaired.adaptiveQueue.length,
        phase: "base",
      };
    }
    return applyAdaptiveAnswer(repaired, optionIndex);
  }

  const skipped = ready.skipped.filter((id) => id !== qid);

  // İleri cevapları temizle (geri + yeniden cevap) — kuyruğu ASLA kesme
  const answers: AnswerMap = { ...ready.answers, [qid]: optionIndex };
  if (ready.answers[qid] !== undefined) {
    for (let i = ready.baseIndex + 1; i < ready.adaptiveQueue.length; i += 1) {
      const forwardId = ready.adaptiveQueue[i];
      delete answers[forwardId];
    }
  }

  const adaptiveQueue = [...ready.adaptiveQueue];
  const interim = { ...ready, skipped, answers, adaptiveQueue };
  const { scores, subtypeTags, axisScores, crossMatchApplied } =
    scoresFromAnswers(interim, answers);

  const scored: ScanState = {
    ...interim,
    scores,
    subtypeTags,
    axisScores,
    crossMatchApplied,
    adaptiveQueue,
  };

  if (ready.baseIndex < adaptiveQueue.length - 1) {
    return {
      ...scored,
      baseIndex: ready.baseIndex + 1,
      phase: "base",
    };
  }

  // Kuyruk sonu: eksik zorunlu + gated + ext
  const nextIds = pickNextQuestionIds(scored);
  if (nextIds.length > 0) {
    return {
      ...scored,
      adaptiveQueue: [...adaptiveQueue, ...nextIds],
      baseIndex: ready.baseIndex + 1,
      phase: "base",
    };
  }

  // Zorunlu sorular bitmeden sonuç yok
  const missing = missingRequiredIds(answers);
  if (missing.length > 0) {
    const toAdd = missing.filter((id) => !adaptiveQueue.includes(id));
    if (toAdd.length > 0) {
      return {
        ...scored,
        adaptiveQueue: [...adaptiveQueue, ...toAdd],
        baseIndex: ready.baseIndex + 1,
        phase: "base",
      };
    }
    // Kuyrukta var ama index taşmış — başa sarılacak sonraki cevapsız
    const nextIdx = adaptiveQueue.findIndex(
      (id, i) => i >= ready.baseIndex && answers[id] === undefined,
    );
    if (nextIdx >= 0) {
      return { ...scored, baseIndex: nextIdx, phase: "base" };
    }
    const anyMissing = adaptiveQueue.findIndex((id) => answers[id] === undefined);
    if (anyMissing >= 0) {
      return { ...scored, baseIndex: anyMissing, phase: "base" };
    }
  }

  return afterBaseComplete(scored, answers);
}

export function applyBaseAnswer(
  state: ScanState,
  optionIndex: number,
): ScanState {
  if (usesAdaptiveFlow(state)) {
    return applyAdaptiveAnswer(state, optionIndex);
  }

  const bank = questionBank(state.audience);
  const question = bank[state.baseIndex];
  const skipped = state.skipped.filter((id) => id !== question.id);
  const answers = { ...state.answers, [question.id]: optionIndex };
  const nextState = { ...state, skipped, answers };
  const { scores, subtypeTags, axisScores, crossMatchApplied } =
    scoresFromAnswers(nextState, answers);
  const last = state.baseIndex >= bank.length - 1;

  if (!last) {
    return {
      ...nextState,
      scores,
      subtypeTags,
      axisScores,
      crossMatchApplied,
      baseIndex: state.baseIndex + 1,
      phase: "base",
    };
  }

  return afterBaseComplete(nextState, answers);
}

export function applySkip(state: ScanState): ScanState {
  if (usesAdaptiveFlow(state)) {
    const ready = validateQueue(state);
    const qid = ready.adaptiveQueue[ready.baseIndex];
    if (!qid) return state;
    const adaptiveQuestion = getAdaptiveQuestion(qid, "tr");
    if (!adaptiveQuestion?.skippable) return state;
    const skipped = [...new Set([...ready.skipped, qid])];
    const answers = { ...ready.answers, [qid]: SKIP_INDEX };
    const interim = { ...ready, skipped, answers };
    const { scores, subtypeTags, axisScores, crossMatchApplied } =
      scoresFromAnswers(interim, answers);
    const scored: ScanState = {
      ...interim,
      scores,
      subtypeTags,
      axisScores,
      crossMatchApplied,
      adaptiveQueue: [...ready.adaptiveQueue],
    };

    if (ready.baseIndex < scored.adaptiveQueue.length - 1) {
      return { ...scored, baseIndex: ready.baseIndex + 1 };
    }

    const nextIds = pickNextQuestionIds(scored);
    if (nextIds.length > 0) {
      return {
        ...scored,
        adaptiveQueue: [...scored.adaptiveQueue, ...nextIds],
        baseIndex: ready.baseIndex + 1,
      };
    }

    return afterBaseComplete(scored, answers);
  }

  const bank = questionBank(state.audience);
  const question = bank[state.baseIndex];
  if (!question?.skippable) return state;
  const skipped = [...new Set([...state.skipped, question.id])];
  const answers = { ...state.answers, [question.id]: SKIP_INDEX };
  const nextState = { ...state, skipped, answers };
  const last = state.baseIndex >= bank.length - 1;
  if (!last) {
    const { scores, subtypeTags, axisScores, crossMatchApplied } =
      scoresFromAnswers(nextState, answers);
    return {
      ...nextState,
      scores,
      subtypeTags,
      axisScores,
      crossMatchApplied,
      baseIndex: state.baseIndex + 1,
    };
  }
  return afterBaseComplete(nextState, answers);
}

export function finishVisual(state: ScanState): ScanState {
  const { scores, subtypeTags, axisScores, crossMatchApplied } =
    scoresFromAnswers(state, state.answers);
  const next = { ...state, scores, subtypeTags, axisScores, crossMatchApplied };
  const branches = selectBranches(next);
  return {
    ...next,
    branches,
    branchIndex: 0,
    diffQuestionIndex: 0,
    phase: branches.length > 0 ? "bridge" : "done",
  };
}

export function applyDiffAnswer(
  state: ScanState,
  optionIndex: number,
): ScanState {
  const branch = resolveBranch(state.branches[state.branchIndex]);
  if (!branch) return { ...state, phase: "done" };

  const question = branch.questions[state.diffQuestionIndex];
  const answers = { ...state.answers, [question.id]: optionIndex };
  const { scores, subtypeTags, axisScores, crossMatchApplied } =
    scoresFromAnswers({ ...state, answers }, answers);
  const lastInBranch = state.diffQuestionIndex >= branch.questions.length - 1;
  const lastBranch = state.branchIndex >= state.branches.length - 1;

  if (!lastInBranch) {
    return {
      ...state,
      answers,
      scores,
      subtypeTags,
      axisScores,
      crossMatchApplied,
      diffQuestionIndex: state.diffQuestionIndex + 1,
    };
  }

  if (!lastBranch) {
    return {
      ...state,
      answers,
      scores,
      subtypeTags,
      axisScores,
      crossMatchApplied,
      branchIndex: state.branchIndex + 1,
      diffQuestionIndex: 0,
    };
  }

  return {
    ...state,
    answers,
    scores,
    subtypeTags,
    axisScores,
    crossMatchApplied,
    phase: "done",
  };
}

export function goBack(state: ScanState): ScanState {
  if (usesAdaptiveFlow(state)) {
    if (state.phase === "bridge") {
      const lastIndex = Math.max(0, state.adaptiveQueue.length - 1);
      return { ...state, phase: "base", baseIndex: lastIndex };
    }
    if (state.phase === "base") {
      if (state.baseIndex === 0) {
        return { ...state, phase: "intro" };
      }
      return { ...state, baseIndex: state.baseIndex - 1 };
    }
    if (state.phase === "diff") {
      if (state.diffQuestionIndex > 0) {
        return { ...state, diffQuestionIndex: state.diffQuestionIndex - 1 };
      }
      if (state.branchIndex > 0) {
        const prevId = state.branches[state.branchIndex - 1];
        const prev = resolveBranch(prevId);
        return {
          ...state,
          branchIndex: state.branchIndex - 1,
          diffQuestionIndex: Math.max(0, (prev?.questions.length ?? 1) - 1),
        };
      }
      return { ...state, phase: "bridge" };
    }
    return state;
  }

  const bank = questionBank(state.audience);

  if (state.phase === "bridge") {
    return { ...state, phase: "base", baseIndex: bank.length - 1 };
  }

  if (state.phase === "base") {
    if (state.baseIndex === 0) {
      return { ...state, phase: "intro" };
    }
    return { ...state, baseIndex: state.baseIndex - 1 };
  }

  if (state.phase === "diff") {
    if (state.diffQuestionIndex > 0) {
      return { ...state, diffQuestionIndex: state.diffQuestionIndex - 1 };
    }
    if (state.branchIndex > 0) {
      const prevId = state.branches[state.branchIndex - 1];
      const prev = resolveBranch(prevId);
      return {
        ...state,
        branchIndex: state.branchIndex - 1,
        diffQuestionIndex: Math.max(0, (prev?.questions.length ?? 1) - 1),
      };
    }
    return { ...state, phase: "bridge" };
  }

  return state;
}

export function enterDiff(state: ScanState): ScanState {
  return { ...state, phase: "diff", branchIndex: 0, diffQuestionIndex: 0 };
}
