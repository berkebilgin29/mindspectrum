import { SiteShell } from "@/components/Header";
import { ResultsView } from "@/components/ResultsView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Screening results",
  description: "Your spectrum profile. Not a diagnosis.",
  robots: { index: false, follow: false },
  alternates: { languages: { tr: "/sonuc" } },
};

export default function EnResultsPage() {
  return (
    <SiteShell lang="en">
      <main className="wrap">
        <ResultsView kind="adult" lang="en" />
      </main>
    </SiteShell>
  );
}
