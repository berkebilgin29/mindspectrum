import { SiteShell } from "@/components/Header";
import { CONTACT_EMAIL } from "@/lib/site";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About · MindSpectrum",
  description: "What MindSpectrum is, how it works, and who it was designed for.",
  alternates: { canonical: "/en/about", languages: { tr: "/hakkinda" } },
};

export default function EnAboutPage() {
  return (
    <SiteShell current="about" lang="en">
      <main className="scales wrap">
        <article className="sheet report prose">
          <p className="kicker">About</p>
          <h1>Calm, private, no diagnostic claims.</h1>
          <p className="lede">
            MindSpectrum was built for people whose symptoms overlap and blur
            together. The goal is not to label — it is to produce a clear map
            you can bring to a clinician.
          </p>
          <h2>How it works</h2>
          <p>
            Stage one screens eight dimensions. Stage two opens only on
            overlapping scores — for example whether procrastination comes from
            boredom or doubt, or whether social fatigue is fear of judgment or
            sensory load.
          </p>
          <h2>What it is not</h2>
          <p>
            Not a clinical interview, psychometric test battery, or treatment
            plan. Scale names show scientific grounding; no licensed instrument
            is administered.
          </p>
          <h2>Privacy</h2>
          <p>
            No account. Answers are not written to a server. The screening stays
            in this browser's local storage; deletion is yours to do. Details in
            the{" "}
            <Link href="/en/privacy">privacy notice</Link>.
          </p>
          <p>
            Contact: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
