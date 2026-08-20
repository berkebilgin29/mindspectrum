import type { DimensionId, Weights } from "@/lib/types";

export const ADAPTIVE_MODULES = [
  "adhd",
  "ocd",
  "depression",
  "anxiety",
  "social_anxiety",
  "autism_sensory",
  "bipolar",
  "trauma_ptsd",
  "bpd_emotional",
] as const;

export type AdaptiveModuleId = (typeof ADAPTIVE_MODULES)[number];

export type AdaptiveOption = {
  text: string;
  axes: Record<string, number>;
  weights: Weights;
  flags?: string[];
  note?: string;
};

export type AdaptiveQuestion = {
  id: string;
  module: AdaptiveModuleId;
  category: string;
  question: string;
  subtitle?: string;
  clinicalNote?: string;
  options: AdaptiveOption[];
  skippable?: boolean;
  tags?: string[];
  tier?: "core" | "ext" | "adhd";
  gate?: string | null;
  showIf?: string | null;
  domain?: string;
};

export type CrossMatchRule = {
  id: string;
  when: { questionId: string; optionIndexes: number[] }[];
  /** Eksen bonusları — negatif olabilir */
  bonus: Record<string, number>;
  /** 3+ modülde FUN≥2 gibi özel kurallar */
  kind?: "combo" | "fun_global";
  note?: string;
};

export type Stage2Dx = {
  id: string;
  title: string;
  trigger: string;
  mechanism: string;
  question: string;
  options: { key: string; text: string; target: string }[];
};

export const MODULE_TO_DIMENSION: Record<AdaptiveModuleId, DimensionId> = {
  adhd: "adhd",
  ocd: "ocd",
  depression: "depression",
  anxiety: "anxiety",
  social_anxiety: "social_anxiety",
  autism_sensory: "autism_sensory",
  bipolar: "bipolar",
  trauma_ptsd: "trauma_ptsd",
  bpd_emotional: "bpd_emotional",
};

export const DOMAIN_TO_MODULE: Record<string, AdaptiveModuleId> = {
  ADHD: "adhd",
  OKB: "ocd",
  DEP: "depression",
  YAB: "anxiety",
  SOS: "social_anxiety",
  OTZ: "autism_sensory",
  BIP: "bipolar",
  TSB: "trauma_ptsd",
  DDR: "bpd_emotional",
};

/** Modül skoru = eksen skorlarının ağırlıklı ortalaması (0–100) */
export const MODULE_AXIS_WEIGHTS: Record<
  AdaptiveModuleId,
  Record<string, number>
> = {
  adhd: {
    AT: 0.2,
    IR: 0.15,
    EO: 0.2,
    IN: 0.1,
    HY: 0.1,
    ER: 0.1,
    EX: 0.1,
    CH: 0.05,
  },
  ocd: { OBS: 0.25, COM: 0.25, SYM: 0.2, RSP: 0.15, DIS: 0.15 },
  depression: { ANH: 0.3, ENR: 0.25, NCG: 0.3, SLP: 0.15 },
  anxiety: { WOR: 0.35, TNS: 0.25, IUC: 0.25, IRR: 0.15 },
  social_anxiety: { PRF: 0.3, ITA: 0.3, AVD: 0.25, PEV: 0.15 },
  autism_sensory: { SEN: 0.25, RIG: 0.25, CAM: 0.3, SCM: 0.2 },
  bipolar: { HYP: 0.3, CYC: 0.3, SLD: 0.25, RSK: 0.15 },
  trauma_ptsd: { INR: 0.25, AVT: 0.2, ARO: 0.2, NCM: 0.2, DSC: 0.15 },
  bpd_emotional: { EMR: 0.3, FOA: 0.25, IMP: 0.2, IDN: 0.15, STR: 0.1 },
};

export const MIN_ADAPTIVE_QUESTIONS = 30;
export const MAX_ADAPTIVE_QUESTIONS = 45;
export const MAX_STAGE2_DX = 3;
