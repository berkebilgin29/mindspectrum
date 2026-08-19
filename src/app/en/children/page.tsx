import { SiteShell } from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Child screening (parent form) · MindSpectrum",
  description:
    "Parent-reported screening for child ADHD, autism/sensory profile, anxiety, OCD, and mood symptoms. Not a diagnosis. Ages 6–17.",
  keywords: [
    "child ADHD screening",
    "autism symptoms parent",
    "child anxiety screening",
    "childhood OCD",
    "parent questionnaire",
  ],
  alternates: { canonical: "/en/children", languages: { tr: "/cocuklar" } },
  openGraph: {
    title: "Child screening (parent form) · MindSpectrum",
    description: "Non-diagnostic parent form. School, sensory load, anxiety, and overlapping symptoms.",
  },
};

export default function EnChildrenPage() {
  return (
    <SiteShell current="children" lang="en">
      <main className="home wrap">
        <section className="sheet intake">
          <div className="meta-row">
            <span>Form <b>MS-C01</b></span>
            <span>Age <b>6–17</b></span>
            <span>Completed by <b>parent / caregiver</b></span>
            <span>Duration <b>10–16 min</b></span>
          </div>
          <h1 className="display intake-title">
            Your child's symptoms overlap. Let's map them.
          </h1>
          <p className="lede">
            This is not an official test or diagnosis for children. It is a
            parent-reported triage based on observations from the past few weeks:
            ADHD-like executive difficulty, autism/sensory load, anxiety, OCD
            repetitions, low mood, and emotional storms. If overlapping patterns
            appear, differential questions are opened.
          </p>
          <div className="intake-actions">
            <Link className="btn" href="/en/children/scan">
              Open parent form
            </Link>
            <Link className="linkish" href="/en/scan">
              Adult screening (18+) →
            </Link>
          </div>
        </section>
        <section className="how">
          <div>
            <h2>Why a separate form?</h2>
            <p className="lede" style={{ marginTop: 12 }}>
              Adult items use work, masking, and hypomania language. Child items
              are translated to school, play, routine, and parent observation.
              Bipolar screening is cautious; it rarely presents prominently in
              young children.
            </p>
          </div>
          <div>
            <div className="step">
              <strong>ADHD-like picture</strong>
              Difficulty starting, fidgeting, missing instructions, can't wait for turn.
            </div>
            <div className="step">
              <strong>Autism / sensory</strong>
              Sound-light-texture, repetitive play, reading implied meaning, meltdowns when plans change.
            </div>
            <div className="step">
              <strong>Anxiety and OCD</strong>
              Catastrophic questions, morning somatic complaints before school, washing/ordering rituals.
            </div>
          </div>
        </section>
        <p className="note">
          For abuse, neglect or child safety: call emergency services. This
          form's result does not replace a court or school evaluation.{" "}
          <Link className="linkish" href="/en/disclaimer">Legal notice</Link>
        </p>
      </main>
    </SiteShell>
  );
}
