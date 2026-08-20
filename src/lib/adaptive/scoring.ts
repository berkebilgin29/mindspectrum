import {
  ADAPTIVE_BY_ID,
  ADAPTIVE_QUESTIONS_TR,
  CROSS_MATCH_RULES,
} from "@/lib/adaptive/pool";
import type { AdaptiveModuleId, AdaptiveQuestion } from "@/lib/adaptive/types";
import {
  ADAPTIVE_MODULES,
  MODULE_AXIS_WEIGHTS,
  MODULE_TO_DIMENSION,
} from "@/lib/adaptive/types";
import { SKIP_INDEX } from "@/lib/options";
import type { AnswerMap, Scores, ScanState } from "@/lib/types";
import { DIMENSIONS } from "@/lib/types";

function emptyScores(): Scores {
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

export function adaptiveQuestionPool(_lang: "tr" | "en"): AdaptiveQuestion[] {
  return ADAPTIVE_QUESTIONS_TR;
}

export function getAdaptiveQuestion(
  id: string,
  _lang: "tr" | "en",
): AdaptiveQuestion | undefined {
  return ADAPTIVE_BY_ID[id];
}

function addAxes(
  target: Record<string, number>,
  axes: Record<string, number>,
) {
  for (const [key, val] of Object.entries(axes)) {
    target[key] = (target[key] ?? 0) + val;
  }
}

function rawAxesFromAnswers(answers: AnswerMap): Record<string, number> {
  const axes: Record<string, number> = {};
  for (const q of ADAPTIVE_QUESTIONS_TR) {
    const idx = answers[q.id];
    if (idx === undefined || idx === SKIP_INDEX) continue;
    const opt = q.options[idx];
    if (!opt) continue;
    addAxes(axes, opt.axes);
    // ADHD bayraklı şıklar ADHD.AT'ye taşır
    if (opt.flags?.includes("ADHD")) {
      axes.AT = (axes.AT ?? 0) + 1;
    }
  }
  return axes;
}

function funHitsByModule(answers: AnswerMap): number {
  let modules = 0;
  for (const mod of ADAPTIVE_MODULES) {
    if (mod === "adhd") continue;
    let fun = 0;
    for (const q of ADAPTIVE_QUESTIONS_TR) {
      if (q.module !== mod) continue;
      const idx = answers[q.id];
      if (idx === undefined || idx === SKIP_INDEX) continue;
      fun += q.options[idx]?.axes.FUN ?? 0;
    }
    if (fun >= 2) modules += 1;
  }
  return modules;
}

export function detectNewCrossMatches(
  answers: AnswerMap,
  alreadyApplied: string[],
): string[] {
  const applied = new Set(alreadyApplied);
  const found: string[] = [];

  for (const rule of CROSS_MATCH_RULES) {
    if (applied.has(rule.id)) continue;
    if (rule.kind === "fun_global") {
      if (funHitsByModule(answers) >= 3) {
        found.push(rule.id);
        applied.add(rule.id);
      }
      continue;
    }
    const matched = rule.when.every((w) => {
      const idx = answers[w.questionId];
      return idx !== undefined && w.optionIndexes.includes(idx);
    });
    if (matched) {
      found.push(rule.id);
      applied.add(rule.id);
    }
  }
  return found;
}

export function applyCrossBonuses(
  axes: Record<string, number>,
  ruleIds: string[],
): Record<string, number> {
  const next = { ...axes };
  for (const id of ruleIds) {
    const rule = CROSS_MATCH_RULES.find((r) => r.id === id);
    if (!rule) continue;
    addAxes(next, rule.bonus);
  }
  return next;
}

/** Sorulan sorulara göre eksen maksimumları (dinamik payda) */
export function axisMaxima(answers: AnswerMap): Record<string, number> {
  const max: Record<string, number> = {};
  const asked = new Set(
    Object.entries(answers)
      .filter(([, idx]) => idx !== undefined && idx !== SKIP_INDEX)
      .map(([id]) => id),
  );

  for (const q of ADAPTIVE_QUESTIONS_TR) {
    if (!asked.has(q.id)) continue;
    const local: Record<string, number> = {};
    for (const opt of q.options) {
      for (const [axis, val] of Object.entries(opt.axes)) {
        local[axis] = Math.max(local[axis] ?? 0, val);
      }
    }
    for (const [axis, val] of Object.entries(local)) {
      max[axis] = (max[axis] ?? 0) + val;
    }
  }
  return max;
}

export function normalizeAxes(
  raw: Record<string, number>,
  maxima: Record<string, number>,
): Record<string, number> {
  const out: Record<string, number> = {};
  const keys = new Set([...Object.keys(raw), ...Object.keys(maxima)]);
  for (const key of keys) {
    const m = maxima[key] ?? 0;
    out[key] = m > 0 ? Math.max(0, Math.min(100, (raw[key] ?? 0) / m) * 100) : 0;
  }
  return out;
}

export function moduleScoreFromAxes(
  module: AdaptiveModuleId,
  normalized: Record<string, number>,
  funScore: number,
): number {
  const weights = MODULE_AXIS_WEIGHTS[module];
  let sum = 0;
  let wSum = 0;
  for (const [axis, w] of Object.entries(weights)) {
    if (normalized[axis] === undefined && module !== "adhd") {
      // eksen hiç sorulmadıysa ağırlığı atla
      continue;
    }
    sum += (normalized[axis] ?? 0) * w;
    wSum += w;
  }
  if (wSum <= 0) return 0;
  let score = sum / wSum;
  if (funScore < 20) score *= 0.85;
  return Math.max(0, Math.min(100, score));
}

export function computeAxisScores(
  answers: AnswerMap,
  crossMatchApplied: string[],
): Record<string, number> {
  const newCross = detectNewCrossMatches(answers, crossMatchApplied);
  const all = [...new Set([...crossMatchApplied, ...newCross])];
  const raw = applyCrossBonuses(rawAxesFromAnswers(answers), all);
  const maxima = axisMaxima(answers);
  return normalizeAxes(raw, maxima);
}

export function scoresFromAdaptiveAnswers(
  answers: AnswerMap,
  crossMatchApplied: string[],
): {
  scores: Scores;
  axisScores: Record<string, number>;
  moduleScores100: Record<AdaptiveModuleId, number>;
} {
  const newCross = detectNewCrossMatches(answers, crossMatchApplied);
  const allCross = [...new Set([...crossMatchApplied, ...newCross])];
  const raw = applyCrossBonuses(rawAxesFromAnswers(answers), allCross);
  const maxima = axisMaxima(answers);
  const axisScores = normalizeAxes(raw, maxima);
  const funScore = axisScores.FUN ?? 0;

  const moduleScores100 = {} as Record<AdaptiveModuleId, number>;
  const scores = emptyScores();

  for (const mod of ADAPTIVE_MODULES) {
    const s = moduleScoreFromAxes(mod, axisScores, funScore);
    moduleScores100[mod] = s;
    const dim = MODULE_TO_DIMENSION[mod];
    scores[dim] = Math.round(s);
  }

  return { scores, axisScores, moduleScores100 };
}

export function moduleScores(answers: AnswerMap): Record<AdaptiveModuleId, number> {
  const { moduleScores100 } = scoresFromAdaptiveAnswers(answers, []);
  const out = {} as Record<AdaptiveModuleId, number>;
  for (const mod of ADAPTIVE_MODULES) {
    out[mod] = moduleScores100[mod] / 100;
  }
  return out;
}

export function adaptiveMaxScores(_state: ScanState): Scores {
  const max = emptyScores();
  for (const dim of DIMENSIONS) max[dim] = 100;
  return max;
}

export function countAdaptiveAnswered(answers: AnswerMap): number {
  return Object.entries(answers).filter(
    ([, idx]) => idx !== undefined && idx !== SKIP_INDEX,
  ).length;
}

/** Ham eksen toplamı (routing eşikleri için, normalize edilmemiş) */
export function rawAxisTotal(answers: AnswerMap, axes: string[]): number {
  const raw = rawAxesFromAnswers(answers);
  return axes.reduce((sum, a) => sum + (raw[a] ?? 0), 0);
}

export function hasPtsGateOpen(answers: AnswerMap): boolean {
  const idx = answers["PTS-01"];
  if (idx === undefined || idx === SKIP_INDEX) return false;
  const opt = ADAPTIVE_BY_ID["PTS-01"]?.options[idx];
  if (!opt) return false;
  return !opt.flags?.includes("GATE_A");
}
