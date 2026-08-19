import { SiteShell } from "@/components/Header";
import { SITE_NAME } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal notice · MindSpectrum",
  alternates: { canonical: "/en/disclaimer", languages: { tr: "/yasal-uyari" } },
};

export default function EnDisclaimerPage() {
  return (
    <SiteShell lang="en">
      <main className="scales wrap">
        <article className="sheet report prose">
          <p className="kicker">Legal</p>
          <h1>Legal notice and disclaimer</h1>
          <p>
            {SITE_NAME} is a self-report screening tool. It does not constitute
            a medical diagnosis, clinical assessment, treatment recommendation,
            or emergency intervention. Results are informational only and must
            not be used as a substitute for professional medical advice.
          </p>
          <h2>No clinical relationship</h2>
          <p>
            Using this tool does not create a patient–provider relationship.
            Clinical decisions should only be made by qualified licensed
            professionals.
          </p>
          <h2>Scale references</h2>
          <p>
            Question language is derived from publicly documented screening
            dimensions (ASRS-v1.1, PHQ-9, GAD-7, OCI-R, MDQ, AQ-10, LSAS,
            PCL-5, DERS, MSI-BPD). This is not an official or licenced
            administration of any instrument.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            {SITE_NAME} and its operators accept no liability for decisions made
            on the basis of screening results. If you are in crisis, contact
            emergency services immediately.
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
