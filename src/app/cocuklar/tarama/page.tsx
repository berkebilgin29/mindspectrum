import { ChildScanApp } from "@/components/ChildScanApp";
import { SiteShell } from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Çocuk tarama (ebeveyn formu)",
  description:
    "6–17 yaş için ebeveyn bildirimi. DEHB, otizm/duyusal, kaygı, OKB, duygudurum. Tanı koymaz.",
  robots: { index: false, follow: true },
};

export default function CocukTaramaPage() {
  return (
    <SiteShell current="cocuklar">
      <main className="scan wrap">
        <ChildScanApp />
      </main>
    </SiteShell>
  );
}
