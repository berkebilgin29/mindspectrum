import type { DimensionId } from "@/lib/types";

export const DIMENSION_META: Record<
  DimensionId,
  { label: string; short: string; group: string }
> = {
  adhd: { label: "DEHB", short: "DEHB", group: "Yürütücü işlev" },
  ocd: { label: "OKB", short: "OKB", group: "Takıntı" },
  depression: { label: "Depresyon", short: "Depresyon", group: "Duygudurum" },
  anxiety: { label: "Yaygın anksiyete", short: "Anksiyete", group: "Kaygı" },
  bipolar: { label: "Bipolar spektrum", short: "Bipolar", group: "Döngü" },
  autism_sensory: {
    label: "Otizm / duyusal profil",
    short: "Otizm",
    group: "Nöroçeşitlilik",
  },
  social_anxiety: {
    label: "Sosyal anksiyete",
    short: "Sosyal kaygı",
    group: "Sosyal",
  },
  trauma_ptsd: { label: "Travma / TSSB", short: "Travma", group: "Travma" },
  bpd_emotional: {
    label: "Duygu regülasyonu",
    short: "Duygu reg.",
    group: "Regülasyon",
  },
};

export const BAND_LABEL: Record<
  "dusuk" | "belirsiz" | "belirgin" | "yuksek",
  string
> = {
  dusuk: "Düşük eğilim",
  belirsiz: "Belirsiz / sınırda",
  belirgin: "Belirgin eğilim",
  yuksek: "Yüksek eğilim",
};
