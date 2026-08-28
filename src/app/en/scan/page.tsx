import { SiteShell } from "@/components/Header";
import { ScanApp } from "@/components/ScanApp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adult screening",
  description:
    "Two-stage psychological screening for adults. About 12–20 minutes. Not a diagnosis. Answers stay on your device.",
  robots: { index: false, follow: false },
  alternates: { languages: { tr: "/tarama" } },
};

export default function EnScanPage() {
  return (
    <SiteShell current="scan" lang="en">
      <main className="wrap">
        <ScanApp lang="en" />
      </main>
    </SiteShell>
  );
}
