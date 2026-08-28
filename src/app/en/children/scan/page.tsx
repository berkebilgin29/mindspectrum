import { SiteShell } from "@/components/Header";
import { ChildScanApp } from "@/components/ChildScanApp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child parent form · 9spectrum",
  robots: { index: false, follow: false },
  alternates: { languages: { tr: "/cocuklar/tarama" } },
};

export default function EnChildScanPage() {
  return (
    <SiteShell current="children" lang="en">
      <main className="wrap">
        <ChildScanApp lang="en" />
      </main>
    </SiteShell>
  );
}
