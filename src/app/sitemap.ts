import type { MetadataRoute } from "next";
import { LANDING_PAGES, landingPath } from "@/lib/seo/landings";
import { SITE_URL } from "@/lib/site";

const PAIRS: {
  tr: string;
  en: string;
  priority: number;
  freq: MetadataRoute.Sitemap[number]["changeFrequency"];
}[] = [
  { tr: "", en: "/en", priority: 1, freq: "weekly" },
  { tr: "/cocuklar", en: "/en/children", priority: 0.9, freq: "weekly" },
  ...LANDING_PAGES.map((p) => ({
    tr: landingPath(p, "tr"),
    en: landingPath(p, "en"),
    priority: p.dimensionId === "adhd" ? 0.95 : 0.88,
    freq: "weekly" as const,
  })),
  { tr: "/olcekler", en: "/en/scales", priority: 0.85, freq: "monthly" },
  { tr: "/sss", en: "/en/faq", priority: 0.85, freq: "monthly" },
  { tr: "/hakkinda", en: "/en/about", priority: 0.8, freq: "monthly" },
  { tr: "/kriz", en: "/en/crisis", priority: 0.75, freq: "monthly" },
  { tr: "/iletisim", en: "/en/contact", priority: 0.55, freq: "monthly" },
  { tr: "/yasal-uyari", en: "/en/disclaimer", priority: 0.4, freq: "yearly" },
  { tr: "/gizlilik", en: "/en/privacy", priority: 0.4, freq: "yearly" },
  {
    tr: "/kullanim-sartlari",
    en: "/en/terms",
    priority: 0.4,
    freq: "yearly",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return PAIRS.flatMap(({ tr, en, priority, freq }) => {
    const trUrl = `${SITE_URL}${tr}`;
    const enUrl = `${SITE_URL}${en}`;
    const languages = { tr: trUrl, en: enUrl, "x-default": trUrl };
    return [
      {
        url: trUrl,
        lastModified: now,
        changeFrequency: freq,
        priority,
        alternates: { languages },
      },
      {
        url: enUrl,
        lastModified: now,
        changeFrequency: freq,
        priority: priority * 0.95,
        alternates: { languages },
      },
    ];
  });
}
