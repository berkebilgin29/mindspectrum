import { SiteShell } from "@/components/Header";
import { ShareView } from "@/components/ShareView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paylaşılan profil",
  robots: { index: false, follow: false },
};

export default function PaylasPage() {
  return (
    <SiteShell>
      <main className="results wrap">
        <ShareView />
      </main>
    </SiteShell>
  );
}
