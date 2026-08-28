import { SiteShell } from "@/components/Header";
import { HistoryView } from "@/components/HistoryView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "History · 9spectrum",
  robots: { index: false, follow: false },
  alternates: { languages: { tr: "/gecmis" } },
};

export default function EnHistoryPage() {
  return (
    <SiteShell lang="en">
      <main className="wrap">
        <HistoryView lang="en" />
      </main>
    </SiteShell>
  );
}
