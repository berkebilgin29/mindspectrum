import { DIFFERENTIAL_BRANCHES } from "@/data/differentialQuestions";
import { STAGE2_DX } from "@/lib/adaptive/pool";
import type { DiffBranch, DiffQuestion } from "@/lib/types";

function dxToBranch(): Record<string, DiffBranch> {
  const map: Record<string, DiffBranch> = {};
  for (const dx of STAGE2_DX) {
    const question: DiffQuestion = {
      id: `${dx.id}_q1`,
      category: "Ayırıcı tanı",
      question: dx.question,
      clinicalNote: dx.mechanism,
      options: dx.options.map((o) => ({
        text: o.text,
        points: {},
        explanation: o.target,
        subTypeTag: o.target,
      })),
    };
    map[dx.id] = {
      id: dx.id,
      title: dx.title,
      reason: dx.trigger,
      questions: [question],
    };
  }
  return map;
}

const STAGE2_BRANCHES = dxToBranch();

/** Adaptif DX + mevcut legacy dallar */
export function resolveBranch(id: string): DiffBranch | undefined {
  return STAGE2_BRANCHES[id] ?? DIFFERENTIAL_BRANCHES[id];
}

export function allDifferentialBranches(): Record<string, DiffBranch> {
  return { ...DIFFERENTIAL_BRANCHES, ...STAGE2_BRANCHES };
}

export { STAGE2_BRANCHES };
