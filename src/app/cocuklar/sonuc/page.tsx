import { SiteShell } from "@/components/Header";
import { ResultsView } from "@/components/ResultsView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çocuk spektrum profili",
  robots: { index: false, follow: false },
};

export default function CocukSonucPage() {
  return (
    <SiteShell current="cocuklar">
      <main className="results wrap">
        <ResultsView kind="child" />
      </main>
    </SiteShell>
  );
}
