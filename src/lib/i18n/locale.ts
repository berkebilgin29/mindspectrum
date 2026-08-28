import type { Lang } from "./dict";
import { LANDING_PAGES, landingPath } from "@/lib/seo/landings";

/** Maps TR slug routes to EN equivalents */
export const TR_TO_EN: Record<string, string> = {
  "/": "/en",
  "/tarama": "/en/scan",
  "/sonuc": "/en/results",
  "/cocuklar": "/en/children",
  "/cocuklar/tarama": "/en/children/scan",
  "/cocuklar/sonuc": "/en/children/results",
  "/gecmis": "/en/history",
  "/paylas": "/en/share",
  "/olcekler": "/en/scales",
  "/sss": "/en/faq",
  "/hakkinda": "/en/about",
  "/kriz": "/en/crisis",
  "/iletisim": "/en/contact",
  "/gizlilik": "/en/privacy",
  "/kullanim-sartlari": "/en/terms",
  "/yasal-uyari": "/en/disclaimer",
  ...Object.fromEntries(
    LANDING_PAGES.map((p) => [landingPath(p, "tr"), landingPath(p, "en")]),
  ),
};

export const EN_TO_TR: Record<string, string> = Object.fromEntries(
  Object.entries(TR_TO_EN).map(([tr, en]) => [en, tr]),
);

export function isValidLang(v: unknown): v is Lang {
  return v === "tr" || v === "en";
}

/** Alternate href for hreflang */
export function alternatePath(currentPath: string, targetLang: Lang): string {
  if (targetLang === "en") {
    return TR_TO_EN[currentPath] ?? "/en";
  }
  return EN_TO_TR[currentPath] ?? "/";
}
