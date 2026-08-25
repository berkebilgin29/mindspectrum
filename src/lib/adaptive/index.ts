export {
  adaptiveMaxScores,
  adaptiveQuestionPool,
  computeAxisScores,
  countAdaptiveAnswered,
  detectNewCrossMatches,
  getAdaptiveQuestion,
  hasPtsGateOpen,
  moduleScores,
  rawAxisTotal,
  scoresFromAdaptiveAnswers,
} from "@/lib/adaptive/scoring";
export {
  buildInitialAdaptiveQueue,
  currentAdaptiveQuestionId,
  ensureQuestionExists,
  missingRequiredIds,
  pickNextQuestionIds,
  repairAdaptiveQueue,
  requiredCoreIds,
  selectStage2Branches,
  shouldCompleteAdaptive,
  usesAdaptiveFlow,
  usesAdaptiveFlowFor,
  validateQueue,
} from "@/lib/adaptive/selector";
export type {
  AdaptiveModuleId,
  AdaptiveOption,
  AdaptiveQuestion,
  CrossMatchRule,
  Stage2Dx,
} from "@/lib/adaptive/types";
export {
  ADAPTIVE_MODULES,
  DOMAIN_TO_MODULE,
  MAX_ADAPTIVE_QUESTIONS,
  MIN_ADAPTIVE_QUESTIONS,
  MODULE_TO_DIMENSION,
} from "@/lib/adaptive/types";
