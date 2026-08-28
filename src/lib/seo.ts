import type { Metadata } from "next";
import {
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_DESCRIPTION_EN,
  SITE_KEYWORDS_EN,
  SITE_KEYWORDS_TR,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_TAGLINE_EN,
  SITE_URL,
} from "@/lib/site";

export function absoluteUrl(path = "/"): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

/** Bidirectional hreflang + canonical for a TR/EN page pair */
export function localeAlternates(trPath: string, enPath: string, lang: "tr" | "en") {
  const canonical = lang === "tr" ? trPath : enPath;
  return {
    canonical,
    languages: {
      tr: trPath,
      en: enPath,
      "x-default": trPath,
    },
  } satisfies NonNullable<Metadata["alternates"]>;
}

export function pageMetadata(opts: {
  lang: "tr" | "en";
  title: string;
  description: string;
  trPath: string;
  enPath: string;
  keywords?: string[];
  ogType?: "website" | "article";
  noIndex?: boolean;
}): Metadata {
  const {
    lang,
    title,
    description,
    trPath,
    enPath,
    keywords,
    ogType = "website",
    noIndex = false,
  } = opts;
  const path = lang === "tr" ? trPath : enPath;
  const url = absoluteUrl(path === "/" ? "" : path);
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} · ${SITE_NAME}`;

  return {
    title,
    description,
    keywords: keywords ?? (lang === "tr" ? SITE_KEYWORDS_TR : SITE_KEYWORDS_EN),
    alternates: localeAlternates(trPath, enPath, lang),
    robots: noIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      type: ogType,
      locale: lang === "tr" ? "tr_TR" : "en_US",
      alternateLocale: lang === "tr" ? "en_US" : "tr_TR",
      url,
      siteName: SITE_NAME,
      title: fullTitle,
      description,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    logo: absoluteUrl("/logo.png"),
    description: SITE_DESCRIPTION,
    sameAs: [] as string[],
    contactPoint: {
      "@type": "ContactPoint",
      email: CONTACT_EMAIL,
      contactType: "customer support",
      availableLanguage: ["Turkish", "English"],
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    inLanguage: ["tr", "en"],
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

export function webApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: SITE_NAME,
    url: SITE_URL,
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    inLanguage: ["tr", "en"],
    description: SITE_DESCRIPTION,
    alternateName: [
      SITE_TAGLINE,
      SITE_TAGLINE_EN,
      "DEHB testi",
      "ADHD testi",
      "ADHD test",
      "DEHB tarama",
    ],
    offers: { "@type": "Offer", price: "0", priceCurrency: "TRY" },
    isAccessibleForFree: true,
    browserRequirements: "Requires JavaScript. Answers stay in local browser storage.",
    featureList: [
      "Nine-dimension psychological tendency screening",
      "Differential follow-up when scores overlap",
      "Adult and parent-reported child forms",
      "On-device privacy — answers not sent to a server",
      "Not a medical diagnosis",
    ],
    provider: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  };
}

export function faqPageJsonLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function aboutPageJsonLd(lang: "tr" | "en") {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: lang === "tr" ? `${SITE_NAME} hakkında` : `About ${SITE_NAME}`,
    url: absoluteUrl(lang === "tr" ? "/hakkinda" : "/en/about"),
    description: lang === "tr" ? SITE_DESCRIPTION : SITE_DESCRIPTION_EN,
    inLanguage: lang,
    isPartOf: { "@type": "WebSite", name: SITE_NAME, url: SITE_URL },
  };
}

export const HOME_FAQ_TR = [
  {
    q: "9spectrum nedir?",
    a: "Dokuz psikolojik boyutta eğilim profili çıkaran iki aşamalı, adaptif bir taramadır. Tanı koymaz; hekim görüşmesine hazırlık için eğilim haritası üretir.",
  },
  {
    q: "Diğer testlerden farkı ne?",
    a: "Çoğu site herkese aynı soruları sorar. 9spectrum’ta cevaplarınıza göre sistem sonuca yaklaşmak için sonraki soruları değiştirir. İki boyut örtüşünce ayırıcı sorular açılır.",
  },
  {
    q: "Tarama ücretsiz mi?",
    a: "Evet. Yetişkin taraması tamamen ücretsizdir; hesap açmanız gerekmez. Cevaplar sunucuya gönderilmez, yalnızca cihazınızda kalır.",
  },
  {
    q: "Belirtiler birbirine karışırsa ne olur?",
    a: "9spectrum dokuz boyutu birlikte tarar. İki boyut birbirine yakın çıkarsa ayırıcı sorular açılır; hangi örüntünün öne çıktığını netleştirmeye yardımcı olur.",
  },
  {
    q: "Sonuç tanı mı?",
    a: "Hayır. Yüksek eğilim tanı anlamına gelmez. Sonuçları yalnızca bir sağlık uzmanıyla birlikte yorumlayın.",
  },
] as const;

export const HOME_FAQ_EN = [
  {
    q: "What is 9spectrum?",
    a: "A two-stage adaptive screening that builds a tendency profile across nine psychological dimensions. It does not diagnose — it produces a map to discuss with a clinician.",
  },
  {
    q: "How is this different from other quizzes?",
    a: "Most sites ask everyone the same questions. On 9spectrum, your answers change which questions come next as the system homes in on the result. When two dimensions overlap, differential follow-ups open.",
  },
  {
    q: "Is the screening free?",
    a: "Yes. The adult screening is free and requires no account. Answers are not sent to a server; they stay on your device.",
  },
  {
    q: "What if symptoms overlap?",
    a: "9spectrum screens nine dimensions together. When two are both elevated and close, differential follow-up questions open to clarify the source.",
  },
  {
    q: "Is the result a diagnosis?",
    a: "No. A high tendency score does not mean you have a disorder. Only a licensed clinician can diagnose.",
  },
] as const;
