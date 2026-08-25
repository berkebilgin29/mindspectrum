export const SITE_NAME = "MindSpectrum";
export const SITE_TAGLINE = "Çift aşamalı adaptif tarama";
export const SITE_DESCRIPTION =
  "Tanı koymayan psikolojik tarama. 9 boyutu önyargısız tarar, örtüşen belirtileri ayırır. Cevaplar cihazınızda kalır.";

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mindspectrum.app"
).replace(/\/$/, "");

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "merhaba@mindspectrum.app";

export const CRISIS_LINES = [
  { name: "Acil sağlık", value: "112" },
  { name: "SABİM (Sağlık Bakanlığı)", value: "184" },
  { name: "Sosyal destek", value: "183" },
] as const;
