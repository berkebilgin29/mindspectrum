import type { DimensionId, Scores, VisualReport, Weights } from "@/lib/types";

export const VISUAL_STEPS = [
  "cpt",
  "gng",
  "sensory",
  "mood",
] as const;

export type VisualStep = (typeof VISUAL_STEPS)[number];

export function emptyVisual(): VisualReport {
  return {
    cptMisses: 0,
    cptFalseAlarms: 0,
    gngMisses: 0,
    gngFalseAlarms: 0,
    sensory: [0, 0, 0, 0],
    typicalEnergy: 1,
    typicalMood: 1,
    peakEnergy: 1,
    peakMood: 1,
  };
}

export function visualToWeights(visual: VisualReport): Weights {
  const adhd = Math.min(
    6,
    visual.cptMisses * 1.1 +
      visual.cptFalseAlarms * 0.9 +
      visual.gngMisses * 0.8 +
      visual.gngFalseAlarms * 1.2,
  );
  const sensorySum = visual.sensory.reduce((sum, value) => sum + value, 0);
  const autism = Math.min(6, sensorySum * 0.45);
  const depression =
    visual.typicalEnergy === 0 && visual.typicalMood === 0
      ? 4
      : visual.typicalEnergy === 0
        ? 2
        : 0;
  const bipolar =
    visual.peakEnergy === 2 && visual.peakMood === 2
      ? visual.typicalEnergy === 0
        ? 5
        : 3
      : visual.peakEnergy === 2
        ? 2
        : 0;

  return {
    adhd: Math.round(adhd),
    autism_sensory: Math.round(autism),
    depression,
    bipolar,
  };
}

export function visualUsed(visual: VisualReport): boolean {
  return (
    visual.cptMisses +
      visual.cptFalseAlarms +
      visual.gngMisses +
      visual.gngFalseAlarms +
      visual.sensory.reduce((sum, value) => sum + value, 0) >
      0 ||
    visual.typicalEnergy !== 1 ||
    visual.typicalMood !== 1 ||
    visual.peakEnergy !== 1 ||
    visual.peakMood !== 1
  );
}

export function addVisualToScores(scores: Scores, visual: VisualReport): Scores {
  const extra = visualToWeights(visual);
  const next = { ...scores };
  (Object.keys(extra) as DimensionId[]).forEach((key) => {
    next[key] += extra[key] ?? 0;
  });
  return next;
}

export function visualMax(): Scores {
  return {
    adhd: 6,
    ocd: 0,
    depression: 4,
    anxiety: 0,
    bipolar: 5,
    autism_sensory: 6,
    social_anxiety: 0,
    trauma_ptsd: 0,
    bpd_emotional: 0,
  };
}
