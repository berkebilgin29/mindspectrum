import {
  ADHD_QUESTION_IDS,
  ADAPTIVE_BY_ID,
  CORE_QUESTION_IDS,
  EXT_QUESTION_IDS,
  GATED_CORE_IDS,
  STAGE2_DX,
} from "@/lib/adaptive/pool";
import {
  countAdaptiveAnswered,
  hasPtsGateOpen,
  rawAxisTotal,
} from "@/lib/adaptive/scoring";
import type { AdaptiveModuleId } from "@/lib/adaptive/types";
import {
  MAX_ADAPTIVE_QUESTIONS,
  MAX_STAGE2_DX,
  MIN_ADAPTIVE_QUESTIONS,
} from "@/lib/adaptive/types";
import { SKIP_INDEX } from "@/lib/options";
import type { AnswerMap, ScanState } from "@/lib/types";

function askedSet(answers: AnswerMap): Set<string> {
  return new Set(
    Object.entries(answers)
      .filter(([, idx]) => idx !== undefined && idx !== SKIP_INDEX)
      .map(([id]) => id),
  );
}

/** Deterministik karıştırma — oturum seed'i ile geri navigasyon tutarlı kalır */
export function seededShuffle(ids: string[], seed: string): string[] {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i += 1) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  const arr = [...ids];
  for (let i = arr.length - 1; i > 0; i -= 1) {
    h ^= h << 13;
    h ^= h >>> 17;
    h ^= h << 5;
    const j = Math.abs(h) % (i + 1);
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function buildInitialAdaptiveQueue(seed = "mindspectrum"): string[] {
  return seededShuffle(
    [...ADHD_QUESTION_IDS, ...CORE_QUESTION_IDS],
    seed,
  );
}

type ExtRule = {
  id: string;
  test: (answers: AnswerMap) => boolean;
};

const EXT_RULES: ExtRule[] = [
  {
    id: "OCD-04",
    test: (a) => rawAxisTotal(a, ["OBS", "COM", "SYM", "DIS"]) >= 3,
  },
  {
    id: "DEP-05",
    test: (a) => rawAxisTotal(a, ["NCG"]) >= 2,
  },
  {
    id: "GAD-04",
    test: (a) =>
      rawAxisTotal(a, ["WOR"]) >= 2 || rawAxisTotal(a, ["IUC"]) >= 2,
  },
  {
    id: "SAD-04",
    test: (a) => rawAxisTotal(a, ["AVD"]) >= 2,
  },
  {
    id: "ASD-04",
    test: (a) =>
      rawAxisTotal(a, ["CAM"]) >= 2 ||
      rawAxisTotal(a, ["RIG"]) >= 2 ||
      rawAxisTotal(a, ["SEN"]) >= 2,
  },
  {
    id: "ASD-05",
    test: (a) =>
      rawAxisTotal(a, ["CAM"]) >= 2 ||
      rawAxisTotal(a, ["RIG"]) >= 2 ||
      rawAxisTotal(a, ["SEN"]) >= 2,
  },
  {
    id: "BIP-04",
    test: (a) =>
      rawAxisTotal(a, ["CYC"]) >= 2 || rawAxisTotal(a, ["HYP"]) >= 2,
  },
  {
    id: "PTS-04",
    test: (a) => {
      if (!hasPtsGateOpen(a)) {
        // Kapı kapalı olsa bile diğer modüllerde ARO/DSC benzeri sinyal varsa aç
        return (
          rawAxisTotal(a, ["ARO"]) >= 2 ||
          rawAxisTotal(a, ["DSC"]) >= 2 ||
          rawAxisTotal(a, ["EMR"]) >= 2
        );
      }
      return (
        rawAxisTotal(a, ["INR"]) >= 2 || rawAxisTotal(a, ["DSC"]) >= 2
      );
    },
  },
  {
    id: "EDR-04",
    test: (a) =>
      rawAxisTotal(a, ["FOA"]) >= 2 ||
      rawAxisTotal(a, ["EMR"]) >= 2 ||
      rawAxisTotal(a, ["STR"]) >= 2,
  },
  {
    id: "EDR-05",
    test: (a) =>
      rawAxisTotal(a, ["FOA"]) >= 2 ||
      rawAxisTotal(a, ["EMR"]) >= 2 ||
      rawAxisTotal(a, ["STR"]) >= 2,
  },
];

function unlockedExtIds(answers: AnswerMap, asked: Set<string>): string[] {
  return EXT_RULES.filter(
    (r) => EXT_QUESTION_IDS.includes(r.id) && !asked.has(r.id) && r.test(answers),
  ).map((r) => r.id);
}

function unlockedGatedCore(answers: AnswerMap, asked: Set<string>): string[] {
  if (!hasPtsGateOpen(answers)) return [];
  return GATED_CORE_IDS.filter((id) => !asked.has(id));
}

/**
 * Kuyruğun sonuna eklenecek sonraki soru(lar).
 * Core+ADHD bitince: gated PTS → ext.
 */
export function pickNextQuestionIds(state: ScanState): string[] {
  const asked = askedSet(state.answers);
  const total = countAdaptiveAnswered(state.answers);
  if (total >= MAX_ADAPTIVE_QUESTIONS) return [];

  const pending = state.adaptiveQueue.filter(
    (id, i) => i > state.baseIndex && !asked.has(id),
  );
  if (pending.length > 0) return [];

  const gated = unlockedGatedCore(state.answers, asked);
  if (gated.length > 0) return [gated[0]];

  const ext = unlockedExtIds(state.answers, asked);
  if (ext.length > 0) return [ext[0]];

  return [];
}

export function shouldCompleteAdaptive(state: ScanState): boolean {
  const total = countAdaptiveAnswered(state.answers);
  if (total >= MAX_ADAPTIVE_QUESTIONS) return true;

  const next = pickNextQuestionIds(state);
  if (next.length > 0) return false;

  // Kuyrukta henüz sorulmamış core kaldıysa bitirme
  const asked = askedSet(state.answers);
  const remainingInQueue = state.adaptiveQueue.some(
    (id, i) => i > state.baseIndex && !asked.has(id),
  );
  if (remainingInQueue) return false;

  return total >= MIN_ADAPTIVE_QUESTIONS;
}

export function usesAdaptiveFlow(state: ScanState): boolean {
  return state.audience === "adult" && state.adaptiveQueue.length > 0;
}

export function usesAdaptiveFlowFor(
  audience: ScanState["audience"],
  lang: "tr" | "en",
): boolean {
  return audience === "adult" && lang === "tr";
}

export function currentAdaptiveQuestionId(state: ScanState): string | null {
  return state.adaptiveQueue[state.baseIndex] ?? null;
}

export function validateQueue(state: ScanState): ScanState {
  if (state.adaptiveQueue.length > 0) return state;
  return {
    ...state,
    adaptiveQueue: buildInitialAdaptiveQueue(state.startedAt || "mindspectrum"),
  };
}

export function ensureQuestionExists(id: string): boolean {
  return Boolean(ADAPTIVE_BY_ID[id]);
}

/** Aşama 2 DX tetikleyicileri — eksen skorları 0–100 */
function evalTrigger(
  trigger: string,
  axes: Record<string, number>,
  modules: Record<string, number>,
): boolean {
  // Basit VE / VEYA parse: "OKB.OBS ≥ 60 VE YAB.WOR ≥ 60"
  const andParts = trigger.split(/\s+VE\s+/);
  return andParts.every((andPart) => {
    const orParts = andPart.split(/\s+VEYA\s+/);
    return orParts.some((clause) => {
      const cleaned = clause.replace(/[()]/g, "").trim();
      // DEP toplam ≥ 65
      const total = cleaned.match(/^([A-Z]+)\s+toplam\s*≥\s*(\d+)$/);
      if (total) {
        const map: Record<string, AdaptiveModuleId> = {
          DEP: "depression",
          OKB: "ocd",
          YAB: "anxiety",
          SOS: "social_anxiety",
          OTZ: "autism_sensory",
          BIP: "bipolar",
          TSB: "trauma_ptsd",
          DDR: "bpd_emotional",
          ADHD: "adhd",
        };
        const mod = map[total[1]];
        return mod ? (modules[mod] ?? 0) >= Number(total[2]) : false;
      }
      const m = cleaned.match(/^([A-Z]+)\.([A-Z]+)\s*≥\s*(\d+)$/);
      if (!m) return false;
      // ADHD.AT — axes.AT; OKB.OBS — axes.OBS
      return (axes[m[2]] ?? 0) >= Number(m[3]);
    });
  });
}

const DX_PRIORITY = [
  "DX-H",
  "DX-J",
  "DX-K",
  "DX-F",
  "DX-I",
  "DX-E",
  "DX-G",
];

export function selectStage2Branches(
  axisScores: Record<string, number>,
  moduleScores100: Record<string, number>,
): string[] {
  const triggered = STAGE2_DX.filter((dx) =>
    evalTrigger(dx.trigger, axisScores, moduleScores100),
  );
  triggered.sort((a, b) => {
    const ia = DX_PRIORITY.indexOf(a.id);
    const ib = DX_PRIORITY.indexOf(b.id);
    return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
  });
  return triggered.slice(0, MAX_STAGE2_DX).map((dx) => dx.id);
}
