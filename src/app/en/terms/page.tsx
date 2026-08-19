import { SiteShell } from "@/components/Header";
import { SITE_NAME } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of use · MindSpectrum",
  alternates: { canonical: "/en/terms", languages: { tr: "/kullanim-sartlari" } },
};

export default function EnTermsPage() {
  return (
    <SiteShell lang="en">
      <main className="scales wrap">
        <article className="sheet report prose">
          <p className="kicker">Terms</p>
          <h1>Terms of use</h1>
          <p>
            By using {SITE_NAME} you agree that this tool is for informational
            purposes only and does not provide medical advice. You confirm you
            are not in active crisis and understand that results are not a
            diagnosis.
          </p>
          <h2>Age</h2>
          <p>
            The adult screening is intended for users aged 18 and over. The
            child screening parent form is intended to be completed by a parent
            or primary caregiver, not by the child themselves.
          </p>
          <h2>Data</h2>
          <p>
            Your answers are stored locally on your device and are not
            transmitted to any server. See the privacy notice for full details.
          </p>
          <h2>Changes</h2>
          <p>
            These terms may be updated. Continued use after changes constitutes
            acceptance.
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
