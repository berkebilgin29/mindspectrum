export const SITE_NAME = "9spectrum";
export const SITE_TAGLINE = "İki aşamalı psikolojik tarama";
export const SITE_TAGLINE_EN = "Two-stage psychological screening";

export const SITE_DESCRIPTION =
  "9spectrum ücretsiz, gizli, adaptif psikolojik tarama sunar — tanı koymaz. Cevaplarınıza göre sistem sonuca yaklaşmak için soruları değiştirir. Dokuz boyutta eğilim profili; örtüşmede ayırıcı sorular. Sonuçlar anonim olarak (kimlik eşleşmesi olmadan) kaydedilir.";

export const SITE_DESCRIPTION_EN =
  "9spectrum offers free, private, adaptive psychological screening — not a diagnosis. Based on your answers, the system changes which questions come next to home in on the result. Nine-dimension profile; differential follow-ups when patterns overlap. Results are saved anonymously without any personal identification.";

export const SITE_KEYWORDS_TR = [
  "DEHB testi",
  "ADHD testi",
  "DEHB tarama",
  "ADHD test",
  "ücretsiz DEHB testi",
  "dikkat eksikliği testi",
  "DEHB belirtileri testi",
  "psikolojik tarama",
  "OKB testi",
  "anksiyete testi",
  "depresyon tarama",
  "otizm yetişkin tarama",
  "örtüşen belirtiler",
  "9spectrum",
];

export const SITE_KEYWORDS_EN = [
  "ADHD test",
  "ADHD test online",
  "free ADHD screening",
  "ADHD quiz",
  "attention deficit test",
  "psychological screening",
  "OCD test",
  "anxiety test",
  "depression screening",
  "autism screening adult",
  "overlapping symptoms",
  "9spectrum",
];

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://9spectrum.com"
).replace(/\/$/, "");

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "merhaba@9spectrum.com";

export const CRISIS_LINES = [
  { name: "Acil sağlık", value: "112" },
  { name: "SABİM (Sağlık Bakanlığı)", value: "184" },
  { name: "Sosyal destek", value: "183" },
] as const;
