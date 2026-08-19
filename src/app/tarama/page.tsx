import { SiteShell } from "@/components/Header";
import { ScanApp } from "@/components/ScanApp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarama",
  description:
    "36 yazılı madde, görsel görevler ve örtüşmede ayırıcı dallanma. 18+. Cevaplar cihazınızda kalır.",
  robots: { index: false, follow: true },
};

export default function TaramaPage() {
  return (
    <SiteShell current="tarama">
      <main className="scan wrap">
        <ScanApp />
      </main>
    </SiteShell>
  );
}
