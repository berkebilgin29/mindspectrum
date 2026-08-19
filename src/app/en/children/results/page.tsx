import { SiteShell } from "@/components/Header";
import { ResultsView } from "@/components/ResultsView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child screening results · MindSpectrum",
  robots: { index: false, follow: false },
  alternates: { languages: { tr: "/cocuklar/sonuc" } },
};

export default function EnChildResultsPage() {
  return (
    <SiteShell current="children" lang="en">
      <main className="wrap">
        <ResultsView kind="child" lang="en" />
      </main>
    </SiteShell>
  );
}
