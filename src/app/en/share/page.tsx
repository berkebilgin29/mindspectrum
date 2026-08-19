import { SiteShell } from "@/components/Header";
import { ShareView } from "@/components/ShareView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shared profile · MindSpectrum",
  robots: { index: false, follow: false },
  alternates: { languages: { tr: "/paylas" } },
};

export default function EnSharePage() {
  return (
    <SiteShell lang="en">
      <main className="wrap">
        <ShareView lang="en" />
      </main>
    </SiteShell>
  );
}
