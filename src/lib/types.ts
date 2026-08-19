export const DIMENSIONS = [
  "adhd",
  "ocd",
  "depression",
  "anxiety",
  "bipolar",
  "autism_sensory",
  "social_anxiety",
  "trauma_ptsd",
  "bpd_emotional",
] as const;

export type DimensionId = (typeof DIMENSIONS)[number];

export type Weights = Partial<Record<DimensionId, number>>;

export type BaseOption = {
  text: string;
  weights: Weights;
};

export type BaseQuestion = {
  id: string;
  phase: 1;
  category: string;
  dimension: DimensionId;
  question: string;
  subtitle: string;
  clinicalNote: string;
  options: BaseOption[];
  skippable?: boolean;
};

export type DiffOption = {
  text: string;
  points: Weights;
  explanation?: string;
  subTypeTag?: string;
};

export type DiffQuestion = {
  id: string;
  category: string;
  question: string;
  clinicalNote: string;
  options: DiffOption[];
};

export type DiffBranch = {
  id: string;
  title: string;
  reason: string;
  questions: DiffQuestion[];
};

export type DifferentialBranches = Record<string, DiffBranch>;

export type OverlapNote = {
  targetId: DimensionId;
  targetName: string;
  distinctionSummary: string;
  keyDifferential: string;
};

export type Condition = {
  id: DimensionId;
  name: string;
  shortName: string;
  dsmCode: string;
  tagline: string;
  accentColor: string;
  category: string;
  clinicalScale: string;
  description: string;
  coreTraits: string[];
  overlappingWith: OverlapNote[];
  doctorDiscussionPoints: string[];
};

export type ConditionsData = Record<DimensionId, Condition>;

export type Scores = Record<DimensionId, number>;

export type AnswerMap = Record<string, number>;

export type ScanPhase =
  | "intro"
  | "base"
  | "visual"
  | "bridge"
  | "diff"
  | "done";

export type VisualReport = {
  cptMisses: number;
  cptFalseAlarms: number;
  gngMisses: number;
  gngFalseAlarms: number;
  sensory: number[];
  typicalEnergy: number;
  typicalMood: number;
  peakEnergy: number;
  peakMood: number;
};

export type ScanState = {
  phase: ScanPhase;
  baseIndex: number;
  answers: AnswerMap;
  scores: Scores;
  branches: string[];
  branchIndex: number;
  diffQuestionIndex: number;
  subtypeTags: string[];
  startedAt: string;
  skipped: string[];
  visualIndex: number;
  visual: VisualReport;
  audience: "adult" | "child";
};

export type DimensionResult = {
  id: DimensionId;
  score: number;
  max: number;
  ratio: number;
  band: "dusuk" | "belirsiz" | "belirgin" | "yuksek";
};

export type EngineResult = {
  scores: Scores;
  max: Scores;
  ranked: DimensionResult[];
  branchesUsed: DiffBranch[];
  subtypeTags: string[];
  elevated: DimensionId[];
  uncertain: DimensionId[];
};
