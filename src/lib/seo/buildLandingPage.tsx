import type { Metadata } from "next";
import { DimensionLandingPage } from "@/components/DimensionLandingPage";
import { pageMetadata } from "@/lib/seo";
import type { LandingConfig } from "@/lib/seo/landings";
import { landingPath } from "@/lib/seo/landings";

export function buildLandingExports(config: LandingConfig, lang: "tr" | "en") {
  const copy = lang === "tr" ? config.tr : config.en;
  const trPath = landingPath(config, "tr");
  const enPath = landingPath(config, "en");

  const metadata: Metadata = pageMetadata({
    lang,
    title: copy.title,
    description: copy.description,
    trPath,
    enPath,
    keywords: copy.keywords,
  });

  function Page() {
    return <DimensionLandingPage config={config} lang={lang} />;
  }

  return { metadata, Page };
}
