import { BASE_QUESTIONS } from "@/data/baseQuestions";
import { BASE_QUESTIONS_EN } from "@/data/baseQuestions.en";
import { CHILD_QUESTIONS } from "@/data/childQuestions";
import { CHILD_QUESTIONS_EN } from "@/data/childQuestions.en";
import { DIFFERENTIAL_BRANCHES } from "@/data/differentialQuestions";
import {
  adaptiveMaxScores,
  countAdaptiveAnswered,
  getAdaptiveQuestion,
  scoresFromAdaptiveAnswers,
} from "@/lib/adaptive";
import {
  selectStage2Branches,
  usesAdaptiveFlow,
} from "@/lib/adaptive/selector";
import { resolveBranch } from "@/lib/adaptive/stage2";
import { effectiveOptions, SKIP_INDEX } from "@/lib/options";
import { emptyVisual, visualMax, visualUsed } from "@/lib/visual";
import type {
  BaseQuestion,
  DimensionId,
  DimensionResult,
  DiffBranch,
  EngineResult,
  Scores,
  ScanState,
  Weights,
} from "@/lib/types";
import { DIMENSIONS } from "@/lib/types";

const ELEVATED_RATIO = 0.4;
const MIX_RATIO = 0.45;
const HIGH_ADHD_RATIO = 0.5;

const BRANCH_RULES: { id: string; dims: DimensionId[] }[] = [
  { id: "adhd_vs_ocd", dims: ["adhd", "ocd"] },
  { id: "adhd_vs_bipolar", dims: ["adhd", "bipolar"] },
  { id: "adhd_vs_depression", dims: ["adhd", "depression"] },
  { id: "social_anxiety_vs_autism", dims: ["social_anxiety", "autism_sensory"] },
  { id: "ocd_vs_anxiety", dims: ["ocd", "anxiety"] },
  { id: "bipolar_vs_bpd", dims: ["bipolar", "bpd_emotional"] },
  { id: "trauma_vs_anxiety", dims: ["trauma_ptsd", "anxiety"] },
];

const CHILD_SKIP_BRANCHES = new Set(["adhd_vs_bipolar", "bipolar_vs_bpd"]);

export const VISUAL_COUNT = 0;

export function emptyScores(): Scores {
  return {
    adhd: 0,
    ocd: 0,
    depression: 0,
    anxiety: 0,
    bipolar: 0,
    autism_sensory: 0,
    social_anxiety: 0,
    trauma_ptsd: 0,
    bpd_emotional: 0,
  };
}

export function questionBank(
  audience: ScanState["audience"],
  lang: "tr" | "en" = "tr",
): BaseQuestion[] {
  if (lang === "en") {
    return audience === "child" ? CHILD_QUESTIONS_EN : BASE_QUESTIONS_EN;
  }
  return audience === "child" ? CHILD_QUESTIONS : BASE_QUESTIONS;
}

export function createInitialState(
  audience: ScanState["audience"] = "adult",
): ScanState {
  return {
    phase: "intro",
    baseIndex: 0,
    answers: {},
    scores: emptyScores(),
    branches: [],
    branchIndex: 0,
    diffQuestionIndex: 0,
    subtypeTags: [],
    startedAt: new Date().toISOString(),
    skipped: [],
    visualIndex: 0,
    visual: emptyVisual(),
    audience,
    adaptiveQueue: [],
    crossMatchApplied: [],
    axisScores: {},
  };
}

export function addWeights(target: Scores, weights: Weights): Scores {
  const next = { ...target };
  for (const dim of DIMENSIONS) {
    next[dim] += weights[dim] ?? 0;
  }
  return next;
}

function maxFromWeightsList(lists: Weights[]): Scores {
  const max = emptyScores();
  for (const weights of lists) {
    for (const dim of DIMENSIONS) {
      max[dim] = Math.max(max[dim], weights[dim] ?? 0);
    }
  }
  return max;
}

export function maxFromBaseQuestions(state: ScanState): Scores {
  if (usesAdaptiveFlow(state)) {
    return adaptiveMaxScores(state);
  }
  const max = emptyScores();
  const skipped = new Set(state.skipped);
  for (const question of questionBank(state.audience)) {
    if (skipped.has(question.id)) continue;
    const local = maxFromWeightsList(
      effectiveOptions(question).map((option) => option.weights),
    );
    for (const dim of DIMENSIONS) {
      max[dim] += local[dim];
    }
  }
  return max;
}

export function maxFromBranches(branchIds: string[]): Scores {
  const max = emptyScores();
  for (const id of branchIds) {
    const branch = resolveBranch(id);
    if (!branch) continue;
    for (const question of branch.questions) {
      const local = maxFromWeightsList(question.options.map((o) => o.points));
      for (const dim of DIMENSIONS) {
        max[dim] += local[dim];
      }
    }
  }
  return max;
}

export function combinedMax(state: ScanState): Scores {
  const base = maxFromBaseQuestions(state);
  const extra = maxFromBranches(state.branches);
  const visual =
    state.audience === "adult" && visualUsed(state.visual)
      ? visualMax()
      : emptyScores();
  const max = emptyScores();
  for (const dim of DIMENSIONS) {
    max[dim] = base[dim] + extra[dim] + visual[dim];
  }
  return max;
}

function ratioOf(dim: DimensionId, scores: Scores, max: Scores): number {
  return max[dim] > 0 ? scores[dim] / max[dim] : 0;
}

function isElevated(dim: DimensionId, scores: Scores, max: Scores): boolean {
  return ratioOf(dim, scores, max) >= ELEVATED_RATIO;
}

function isMixedPair(
  a: DimensionId,
  b: DimensionId,
  scores: Scores,
  max: Scores,
): boolean {
  if (!isElevated(a, scores, max) || !isElevated(b, scores, max)) return false;
  const ra = ratioOf(a, scores, max);
  const rb = ratioOf(b, scores, max);
  const high = Math.max(ra, rb);
  const low = Math.min(ra, rb);
  return high > 0 && low / high >= MIX_RATIO;
}

export function selectBranches(state: ScanState): string[] {
  if (usesAdaptiveFlow(state)) {
    const { moduleScores100 } = scoresFromAdaptiveAnswers(
      state.answers,
      state.crossMatchApplied,
    );
    return selectStage2Branches(state.axisScores, moduleScores100);
  }

  const max = combinedMax({ ...state, branches: [] });
  const scores = state.scores;
  const ids: string[] = [];

  for (const rule of BRANCH_RULES) {
    if (state.audience === "child" && CHILD_SKIP_BRANCHES.has(rule.id)) continue;
    const [a, b] = rule.dims;
    if (isMixedPair(a, b, scores, max)) ids.push(rule.id);
  }

  if (ratioOf("adhd", scores, max) >= HIGH_ADHD_RATIO) {
    ids.push("adhd_deep_dive");
  }

  return ids.filter((id) => DIFFERENTIAL_BRANCHES[id]);
}

function bandFor(ratio: number): DimensionResult["band"] {
  if (ratio >= 0.68) return "yuksek";
  if (ratio >= 0.4) return "belirgin";
  if (ratio >= 0.22) return "belirsiz";
  return "dusuk";
}

export function rankDimensions(scores: Scores, max: Scores): DimensionResult[] {
  return DIMENSIONS.map((id) => {
    const ratio = max[id] > 0 ? Math.min(1, scores[id] / max[id]) : 0;
    return {
      id,
      score: scores[id],
      max: max[id],
      ratio,
      band: bandFor(ratio),
    };
  }).sort((a, b) => b.ratio - a.ratio || b.score - a.score);
}

export function buildResult(state: ScanState): EngineResult {
  const max = combinedMax(state);
  const ranked = rankDimensions(state.scores, max);
  const elevated = ranked
    .filter((row) => row.band === "belirgin" || row.band === "yuksek")
    .map((row) => row.id);
  const uncertain = ranked
    .filter((row) => row.band === "belirsiz")
    .map((row) => row.id);

  const branchesUsed: DiffBranch[] = state.branches
    .map((id) => resolveBranch(id))
    .filter((b): b is DiffBranch => Boolean(b));

  return {
    scores: state.scores,
    max,
    ranked,
    branchesUsed,
    subtypeTags: state.subtypeTags,
    elevated,
    uncertain,
  };
}

export function currentDiffContext(state: ScanState): {
  branch: DiffBranch;
  questionIndex: number;
  totalInBranch: number;
} | null {
  const branch = resolveBranch(state.branches[state.branchIndex]);
  if (!branch) return null;
  return {
    branch,
    questionIndex: state.diffQuestionIndex,
    totalInBranch: branch.questions.length,
  };
}

export function totalQuestionCount(state: ScanState): number {
  if (usesAdaptiveFlow(state)) {
    const diffCount = state.branches.reduce((sum, id) => {
      return sum + (resolveBranch(id)?.questions.length ?? 0);
    }, 0);
    const planned = Math.max(
      state.adaptiveQueue.length,
      countAdaptiveAnswered(state.answers),
      33,
    );
    return Math.min(planned + diffCount, 48);
  }
  const bank = questionBank(state.audience);
  const visual = state.audience === "adult" ? VISUAL_COUNT : 0;
  const diffCount = state.branches.reduce((sum, id) => {
    return sum + (resolveBranch(id)?.questions.length ?? 0);
  }, 0);
  return bank.length + visual + diffCount;
}

export function answeredCount(state: ScanState): number {
  if (usesAdaptiveFlow(state)) {
    const visual = 0;
    if (state.phase === "intro") return 0;
    if (state.phase === "base") return state.baseIndex;
    if (state.phase === "bridge") return countAdaptiveAnswered(state.answers) + visual;
    if (state.phase === "diff") {
      let prior = countAdaptiveAnswered(state.answers) + visual;
      for (let i = 0; i < state.branchIndex; i += 1) {
        prior += resolveBranch(state.branches[i])?.questions.length ?? 0;
      }
      return prior + state.diffQuestionIndex;
    }
    return totalQuestionCount(state);
  }
  const bank = questionBank(state.audience);
  const visual = state.audience === "adult" ? VISUAL_COUNT : 0;
  if (state.phase === "intro") return 0;
  if (state.phase === "base") return state.baseIndex;
  if (state.phase === "visual") return bank.length + state.visualIndex;
  if (state.phase === "bridge") return bank.length + visual;
  if (state.phase === "diff") {
    let prior = bank.length + visual;
    for (let i = 0; i < state.branchIndex; i += 1) {
      prior += resolveBranch(state.branches[i])?.questions.length ?? 0;
    }
    return prior + state.diffQuestionIndex;
  }
  return totalQuestionCount(state);
}

export function crisisFlag(ranked: DimensionResult[]): boolean {
  return ranked.some(
    (row) =>
      (row.id === "depression" || row.id === "trauma_ptsd") &&
      row.ratio >= 0.7,
  );
}

export function isSkippedAnswer(index: number | undefined): boolean {
  return index === SKIP_INDEX;
}

export function currentAdaptiveQuestion(
  state: ScanState,
  lang: "tr" | "en" = "tr",
) {
  if (!usesAdaptiveFlow(state)) return null;
  const id = state.adaptiveQueue[state.baseIndex];
  if (!id) return null;
  return getAdaptiveQuestion(id, lang) ?? null;
}
