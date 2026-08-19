import { HistoryView } from "@/components/HistoryView";
import { SiteShell } from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarama geçmişi",
  robots: { index: false, follow: false },
};

export default function GecmisPage() {
  return (
    <SiteShell>
      <main className="results wrap">
        <HistoryView />
      </main>
    </SiteShell>
  );
}
