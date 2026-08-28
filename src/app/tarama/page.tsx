import { SiteShell } from "@/components/Header";
import { ScanApp } from "@/components/ScanApp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarama",
  description:
    "Dokuz boyutta iki aşamalı psikolojik tarama. Yaklaşık 12–20 dakika. 18+. Cevaplar cihazınızda kalır.",
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
