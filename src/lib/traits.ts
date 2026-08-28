export const TRAIT_GROUPS = {
  attention: {
    id: "attention",
    label: { tr: "Dikkat & Odak", en: "Attention & Focus" },
    desc: {
      tr: "Dikkat sürdürme, zihinsel efor gerektiren işlere başlama ve zaman yönetimi becerisi.",
      en: "Ability to sustain attention, initiate mental tasks, and manage time.",
    },
    axes: ["AT", "IN", "EO", "FUN"],
  },
  impulsivity: {
    id: "impulsivity",
    label: { tr: "Dürtüsellik", en: "Impulsivity" },
    desc: {
      tr: "Ani karar verme, istekleri erteleyememe ve zihinsel/fiziksel hareketlilik.",
      en: "Acting on impulse, difficulty delaying gratification, and restlessness.",
    },
    axes: ["IR", "HY", "IMP", "DUR"],
  },
  emotion_reg: {
    id: "emotion_reg",
    label: { tr: "Duygu Regülasyonu", en: "Emotion Regulation" },
    desc: {
      tr: "Duygusal dalgalanmaları yönetme, reddedilme hassasiyeti ve ani tepkisellik.",
      en: "Managing emotional swings, rejection sensitivity, and sudden reactivity.",
    },
    axes: ["ER", "EMR", "IDN", "EMO"],
  },
  anxiety_state: {
    id: "anxiety_state",
    label: { tr: "Kaygı & Belirsizlik", en: "Anxiety & Uncertainty" },
    desc: {
      tr: "Genel endişe hali, geleceğe yönelik kaygı ve belirsizliğe tahammülsüzlük.",
      en: "General worry, future-oriented anxiety, and intolerance of uncertainty.",
    },
    axes: ["WOR", "TNS", "IUC", "IRR", "KAY"],
  },
  obsession: {
    id: "obsession",
    label: { tr: "Takıntı & Kontrol", en: "Obsession & Control" },
    desc: {
      tr: "İstenmeyen düşünceler, mükemmeliyetçilik ve rahatlamak için ritüel ihtiyacı.",
      en: "Intrusive thoughts, perfectionism, and the need for rituals to relieve distress.",
    },
    axes: ["OBS", "COM", "SYM", "TAK"],
  },
  social_sensory: {
    id: "social_sensory",
    label: { tr: "Sosyal & Duyusal", en: "Social & Sensory" },
    desc: {
      tr: "Sosyal ipuçlarını okuma, kalabalıktan kaçınma ve ses/ışık gibi duyusal uyaranlara hassasiyet.",
      en: "Reading social cues, avoiding crowds, and sensitivity to sensory stimuli (sound/light).",
    },
    axes: ["SEN", "RIG", "CAM", "SCM", "PRF", "ITA", "SOS"],
  },
  mood_energy: {
    id: "mood_energy",
    label: { tr: "Ruh Hali & Enerji", en: "Mood & Energy" },
    desc: {
      tr: "Genel motivasyon, hayattan zevk alma kapasitesi ve biyolojik ritim dalgalanmaları.",
      en: "General motivation, capacity for pleasure, and biological rhythm fluctuations.",
    },
    axes: ["ANH", "ENR", "NCG", "SLP", "HYP", "CYC", "DP"],
  },
  trauma_stress: {
    id: "trauma_stress",
    label: { tr: "Travma & Hipervijilans", en: "Trauma & Hypervigilance" },
    desc: {
      tr: "Geçmiş tetikleyicilere karşı aşırı uyanıklık (tetikte olma) ve savunma mekanizmaları.",
      en: "Being constantly on guard for past triggers and strong defensive mechanisms.",
    },
    axes: ["INR", "AVT", "ARO", "NCM", "DSC", "STR", "TRA"],
  },
};

/**
 * Calculates the average score (0-100) for a given trait group based on axis scores.
 */
export function computeTraitScore(traitId: keyof typeof TRAIT_GROUPS, axisScores: Record<string, number>): number {
  const group = TRAIT_GROUPS[traitId];
  let sum = 0;
  let count = 0;

  for (const axis of group.axes) {
    if (axisScores[axis] !== undefined) {
      sum += axisScores[axis];
      count++;
    }
  }

  if (count === 0) return 0;
  return Math.round(sum / count);
}
