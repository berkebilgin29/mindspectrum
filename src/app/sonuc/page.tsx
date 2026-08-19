import { SiteShell } from "@/components/Header";
import { ResultsView } from "@/components/ResultsView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spektrum profili",
  description: "Tamamlanan taramanın spektrum profili. Tanı değildir.",
  robots: { index: false, follow: false },
};

export default function SonucPage() {
  return (
    <SiteShell current="sonuc">
      <main className="results wrap">
        <ResultsView />
      </main>
    </SiteShell>
  );
}
