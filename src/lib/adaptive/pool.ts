import poolJson from "@/data/adaptive/pool.tr.json";
import { ADHD_QUESTIONS_TR } from "@/data/adaptive/adhd.tr";
import type {
  AdaptiveModuleId,
  AdaptiveOption,
  AdaptiveQuestion,
  CrossMatchRule,
  Stage2Dx,
} from "@/lib/adaptive/types";
import {
  DOMAIN_TO_MODULE,
  MODULE_TO_DIMENSION,
} from "@/lib/adaptive/types";
import type { Weights } from "@/lib/types";

type PoolOption = {
  key: string;
  text: string;
  scores: Record<string, number>;
  flags: string[];
  note: string;
};

type PoolQuestion = {
  id: string;
  domain: string;
  tier: "core" | "ext";
  title: string;
  scenario: string;
  gate: string | null;
  show_if: string | null;
  options: PoolOption[];
};

type PoolFile = {
  version: string;
  questions: PoolQuestion[];
  stage2_differentials: Stage2Dx[];
  cross_matching: {
    combo: string;
    pattern: string;
    bonus: string;
    note: string;
  }[];
};

const pool = poolJson as PoolFile;

const LETTER_INDEX: Record<string, number> = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
};

function axisSum(axes: Record<string, number>): number {
  return Object.values(axes).reduce((a, b) => a + b, 0);
}

function optionFromPool(
  module: AdaptiveModuleId,
  opt: PoolOption,
): AdaptiveOption {
  const axes = { ...opt.scores };
  const flags = opt.flags ?? [];
  const dim = MODULE_TO_DIMENSION[module];
  const weights: Weights = {};

  if (flags.includes("ADHD")) {
    // Bu modülde puan üretmez; ADHD'ye taşır
    weights.adhd = Math.min(3, Math.max(1, axisSum(axes) || 1));
    return { text: opt.text, axes: {}, weights, flags, note: opt.note };
  }

  const sum = axisSum(axes);
  weights[dim] =
    sum === 0 ? 0 : Math.min(5, Math.max(1, Math.round(sum * 0.7)));

  return { text: opt.text, axes, weights, flags, note: opt.note };
}

function questionFromPool(q: PoolQuestion): AdaptiveQuestion {
  const module = DOMAIN_TO_MODULE[q.domain];
  if (!module) {
    throw new Error(`Unknown domain ${q.domain} for ${q.id}`);
  }
  return {
    id: q.id,
    module,
    domain: q.domain,
    category: q.title,
    question: q.scenario,
    subtitle: q.title,
    tier: q.tier,
    gate: q.gate,
    showIf: q.show_if,
    options: q.options.map((o) => optionFromPool(module, o)),
    tags: q.options.some((o) => o.flags?.includes("ADHD"))
      ? ["adhd-bridge"]
      : undefined,
  };
}

const POOL_QUESTIONS: AdaptiveQuestion[] = pool.questions.map(questionFromPool);

const ADHD_TAGGED: AdaptiveQuestion[] = ADHD_QUESTIONS_TR.map((q) => ({
  ...q,
  tier: "adhd" as const,
  domain: "ADHD",
}));

export const ADAPTIVE_QUESTIONS_TR: AdaptiveQuestion[] = [
  ...ADHD_TAGGED,
  ...POOL_QUESTIONS,
];

export const ADAPTIVE_BY_ID: Record<string, AdaptiveQuestion> =
  Object.fromEntries(ADAPTIVE_QUESTIONS_TR.map((q) => [q.id, q]));

export const CORE_QUESTION_IDS = POOL_QUESTIONS.filter(
  (q) => q.tier === "core" && !q.showIf,
).map((q) => q.id);

export const GATED_CORE_IDS = POOL_QUESTIONS.filter(
  (q) => q.tier === "core" && Boolean(q.showIf),
).map((q) => q.id);

export const EXT_QUESTION_IDS = POOL_QUESTIONS.filter(
  (q) => q.tier === "ext",
).map((q) => q.id);

export const ADHD_QUESTION_IDS = ADHD_TAGGED.map((q) => q.id);

export const STAGE2_DX: Stage2Dx[] = pool.stage2_differentials;

function parseBonus(bonus: string): Record<string, number> {
  const out: Record<string, number> = {};
  for (const part of bonus.split(/,\s*/)) {
    const global = part
      .trim()
      .match(/^GLOBAL\.([A-Z]+)\s*([+\-−]?)\s*(\d+)$/u);
    if (global) {
      const sign = global[2] === "-" || global[2] === "−" ? -1 : 1;
      out[global[1]] = sign * Number(global[3]);
      continue;
    }
    const m = part
      .trim()
      .match(/^([A-Z]+)\.([A-Z]+)\s*([+\-−]?)\s*(\d+)$/u);
    if (!m) continue;
    const sign = m[3] === "-" || m[3] === "−" ? -1 : 1;
    out[m[2]] = (out[m[2]] ?? 0) + sign * Number(m[4]);
  }
  return out;
}

function parseCombo(
  combo: string,
): CrossMatchRule["when"] | "fun_global" | null {
  if (combo.startsWith("Herhangi")) return "fun_global";
  const parts = combo.split(/\s*\+\s*/);
  const when: CrossMatchRule["when"] = [];
  for (const part of parts) {
    const m = part.trim().match(/^([A-Z]+-\d+)-([A-E](?:\/[A-E])*)$/);
    if (!m) return null;
    const optionIndexes = m[2].split("/").map((k) => LETTER_INDEX[k]);
    when.push({ questionId: m[1], optionIndexes });
  }
  return when;
}

export const CROSS_MATCH_RULES: CrossMatchRule[] = pool.cross_matching
  .map((row, i) => {
    const parsed = parseCombo(row.combo);
    if (!parsed) return null;
    if (parsed === "fun_global") {
      return {
        id: `cm_fun_${i}`,
        when: [],
        bonus: parseBonus(row.bonus),
        kind: "fun_global" as const,
        note: row.note,
      };
    }
    return {
      id: `cm_${i}_${row.combo.slice(0, 24).replace(/\s+/g, "_")}`,
      when: parsed,
      bonus: parseBonus(row.bonus),
      kind: "combo" as const,
      note: row.note,
    };
  })
  .filter(Boolean) as CrossMatchRule[];

export function questionsForModule(
  module: AdaptiveModuleId,
): AdaptiveQuestion[] {
  return ADAPTIVE_QUESTIONS_TR.filter((q) => q.module === module);
}

export const POOL_VERSION = pool.version;
