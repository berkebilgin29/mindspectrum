import type { DimensionId } from "@/lib/types";

export const DIMENSION_META_EN: Record<
  DimensionId,
  { label: string; short: string; group: string }
> = {
  adhd: { label: "ADHD", short: "ADHD", group: "Executive function" },
  ocd: { label: "OCD", short: "OCD", group: "Obsession" },
  depression: { label: "Depression", short: "Depression", group: "Mood" },
  anxiety: { label: "Generalised anxiety", short: "Anxiety", group: "Anxiety" },
  bipolar: { label: "Bipolar spectrum", short: "Bipolar", group: "Cycling" },
  autism_sensory: {
    label: "Autism / sensory profile",
    short: "Autism",
    group: "Neurodiversity",
  },
  social_anxiety: {
    label: "Social anxiety",
    short: "Social anxiety",
    group: "Social",
  },
  trauma_ptsd: { label: "Trauma / PTSD", short: "Trauma", group: "Trauma" },
  bpd_emotional: {
    label: "Emotional dysregulation",
    short: "Emotion",
    group: "Regulation",
  },
};

export const BAND_LABEL_EN: Record<
  "dusuk" | "belirsiz" | "belirgin" | "yuksek",
  string
> = {
  dusuk: "Low tendency",
  belirsiz: "Uncertain / borderline",
  belirgin: "Elevated tendency",
  yuksek: "High tendency",
};
