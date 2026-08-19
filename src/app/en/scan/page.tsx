import { SiteShell } from "@/components/Header";
import { ScanApp } from "@/components/ScanApp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adult screening",
  description: "Two-stage adaptive psychological screening for adults. Not a diagnosis.",
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
