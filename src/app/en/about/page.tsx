import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/Header";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";
import { aboutPageJsonLd, pageMetadata } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  title: "About",
  description: `What ${SITE_NAME} is: a calm, private, non-diagnostic psychological screen across nine dimensions. Built to map overlapping symptoms for clinician conversations.`,
  trPath: "/hakkinda",
  enPath: "/en/about",
});

export default function EnAboutPage() {
  return (
    <SiteShell current="about" lang="en">
      <JsonLd data={aboutPageJsonLd("en")} />
      <main className="scales wrap">
        <article className="sheet report prose">
          <p className="kicker">About</p>
          <h1>Calm, private, and free of diagnostic claims</h1>
          <p className="lede">
            {SITE_NAME} was built for people whose symptoms blur together. The
            goal is not to label — it is to produce a clear map you can bring to
            a clinician.
          </p>
          <h2>How it works</h2>
          <p>
            Stage one screens nine dimensions. Stage two opens only when scores
            overlap — for example whether delay comes from boredom or doubt, or
            whether social fatigue is fear of judgment or sensory load.
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
            in this browser&apos;s local storage; you control deletion. Details
            in the <Link href="/en/privacy">privacy notice</Link>.
          </p>
          <p>
            Contact: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
