import { DIMENSION_META_EN } from "@/lib/dimensions.en";
import { SiteShell } from "@/components/Header";
import { StartActions } from "@/components/StartActions";
import { DIMENSIONS } from "@/lib/types";
import { AdSlot } from "@/components/AdSlot";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MindSpectrum — Two-stage adaptive psychological screening",
  description:
    "Non-diagnostic psychological screening. Screens 8 dimensions without bias, separates overlapping symptoms. Answers stay on your device.",
  alternates: {
    canonical: "/en",
    languages: { tr: "/" },
  },
  openGraph: {
    locale: "en_US",
    alternateLocale: "tr_TR",
  },
};

export default function EnHomePage() {
  return (
    <SiteShell current="home" lang="en">
      <main className="home wrap">
        <section className="sheet intake">
          <div className="meta-row">
            <span>Form <b>MS-01</b></span>
            <span>Duration <b>15–25 min</b></span>
            <span>Storage <b>this device only</b></span>
          </div>
          <h1 className="display intake-title">
            Symptoms overlap. Let's trace the source.
          </h1>
          <p className="lede">
            MindSpectrum is a two-stage adaptive engine that screens 8 psychological
            dimensions without bias. It does not diagnose. It separates overlapping
            patterns — ADHD procrastination vs. OCD paralysis, social anxiety vs.
            sensory overload.
          </p>
          <StartActions lang="en" />
          <p className="note" style={{ marginTop: 18 }}>
            Under 18? Use the separate parent form:{" "}
            <Link className="linkish" href="/en/children">
              Child screening
            </Link>
          </p>
          <div className="dims">
            {DIMENSIONS.map((id) => (
              <div className="dim" key={id}>
                <small>{DIMENSION_META_EN[id].group}</small>
                {DIMENSION_META_EN[id].label}
              </div>
            ))}
          </div>
        </section>

        <section className="how">
          <div>
            <h2>Two stages, one session.</h2>
            <p className="lede" style={{ marginTop: 12 }}>
              36 written items derived from clinical scale language.
              &apos;Not sure&apos; options and skippable trauma items included.
              Tap an option to move to the next question.
            </p>
          </div>
          <div>
            <div className="step">
              <strong>1. Roof screen</strong>
              ADHD, OCD, depression, generalised anxiety, bipolar spectrum,
              autism/sensory profile, social anxiety, trauma and emotional
              dysregulation — with richer items per dimension.
            </div>
            <div className="step">
              <strong>2. Differential branching</strong>
              Opens only when two dimensions are both elevated and close together.
            </div>
            <div className="step">
              <strong>3. Spectrum profile</strong>
              Tendency bars, uncertain band, clinician table, shareable link
              (never leaves device) and scan history.
            </div>
          </div>
        </section>

        <AdSlot slot="home-mid-en" format="horizontal" />

        <p className="note">
          This tool does not replace a medical diagnosis, treatment, or emergency
          intervention.{" "}
          <Link className="linkish" href="/en/disclaimer">Legal notice</Link>
          {" · "}
          <Link className="linkish" href="/en/crisis">Crisis resources</Link>
          {" · "}
          Source scales (not an official administration): ASRS-v1.1, OCI-R &
          Y-BOCS, PHQ-9, GAD-7, MDQ, AQ-10 & CAT-Q, LSAS, PCL-5, DERS &
          MSI-BPD.
        </p>
      </main>
    </SiteShell>
  );
}
