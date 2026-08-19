import { DIFFERENTIAL_BRANCHES } from "@/data/differentialQuestions";
import {
  addWeights,
  emptyScores,
  questionBank,
  selectBranches,
} from "@/lib/engine";
import { effectiveOptions, SKIP_INDEX } from "@/lib/options";
import { addVisualToScores } from "@/lib/visual";
import type { AnswerMap, ScanState, Scores } from "@/lib/types";

export function scoresFromAnswers(state: ScanState, answers: AnswerMap): {
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

function afterBaseComplete(state: ScanState, answers: AnswerMap): ScanState {
  const { scores, subtypeTags } = scoresFromAnswers(state, answers);
  const next = { ...state, answers, scores, subtypeTags };
  if (state.audience === "adult") {
    return { ...next, phase: "visual", visualIndex: 0 };
  }
  const branches = selectBranches(next);
  return {
    ...next,
    branches,
    branchIndex: 0,
    diffQuestionIndex: 0,
    phase: branches.length > 0 ? "bridge" : "done",
  };
}

export function applyBaseAnswer(
  state: ScanState,
  optionIndex: number,
): ScanState {
  const bank = questionBank(state.audience);
  const question = bank[state.baseIndex];
  const skipped = state.skipped.filter((id) => id !== question.id);
  const answers = { ...state.answers, [question.id]: optionIndex };
  const nextState = { ...state, skipped, answers };
  const { scores, subtypeTags } = scoresFromAnswers(nextState, answers);
  const last = state.baseIndex >= bank.length - 1;

  if (!last) {
    return {
      ...nextState,
      scores,
      subtypeTags,
      baseIndex: state.baseIndex + 1,
      phase: "base",
    };
  }

  return afterBaseComplete(nextState, answers);
}

export function applySkip(state: ScanState): ScanState {
  const bank = questionBank(state.audience);
  const question = bank[state.baseIndex];
  if (!question?.skippable) return state;
  const skipped = [...new Set([...state.skipped, question.id])];
  const answers = { ...state.answers, [question.id]: SKIP_INDEX };
  const nextState = { ...state, skipped, answers };
  const last = state.baseIndex >= bank.length - 1;
  if (!last) {
    const { scores, subtypeTags } = scoresFromAnswers(nextState, answers);
    return {
      ...nextState,
      scores,
      subtypeTags,
      baseIndex: state.baseIndex + 1,
    };
  }
  return afterBaseComplete(nextState, answers);
}

export function finishVisual(state: ScanState): ScanState {
  const { scores, subtypeTags } = scoresFromAnswers(state, state.answers);
  const next = { ...state, scores, subtypeTags };
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
  const branch = DIFFERENTIAL_BRANCHES[state.branches[state.branchIndex]];
  if (!branch) return { ...state, phase: "done" };

  const question = branch.questions[state.diffQuestionIndex];
  const answers = { ...state.answers, [question.id]: optionIndex };
  const { scores, subtypeTags } = scoresFromAnswers(
    { ...state, answers },
    answers,
  );
  const lastInBranch = state.diffQuestionIndex >= branch.questions.length - 1;
  const lastBranch = state.branchIndex >= state.branches.length - 1;

  if (!lastInBranch) {
    return {
      ...state,
      answers,
      scores,
      subtypeTags,
      diffQuestionIndex: state.diffQuestionIndex + 1,
    };
  }

  if (!lastBranch) {
    return {
      ...state,
      answers,
      scores,
      subtypeTags,
      branchIndex: state.branchIndex + 1,
      diffQuestionIndex: 0,
    };
  }

  return {
    ...state,
    answers,
    scores,
    subtypeTags,
    phase: "done",
  };
}

export function goBack(state: ScanState): ScanState {
  const bank = questionBank(state.audience);

  if (state.phase === "visual") {
    if (state.visualIndex === 0) {
      return { ...state, phase: "base", baseIndex: bank.length - 1 };
    }
    return { ...state, visualIndex: state.visualIndex - 1 };
  }

  if (state.phase === "bridge") {
    if (state.audience === "adult") {
      return { ...state, phase: "visual", visualIndex: 3 };
    }
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
      const prev = DIFFERENTIAL_BRANCHES[prevId];
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
