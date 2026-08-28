import Link from "next/link";
import { CONDITIONS_DATA_EN } from "@/data/conditionsData.en";
import { SiteShell } from "@/components/Header";
import { DIMENSIONS } from "@/lib/types";
import { EN } from "@/lib/i18n/dict";
import { pageMetadata } from "@/lib/seo";
import { LANDING_PAGES, landingPath } from "@/lib/seo/landings";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  title: "Clinical scales — ASRS, PHQ-9, GAD-7, OCI-R, PCL-5",
  description:
    "Dimensions behind 9spectrum: ASRS-v1.1, PHQ-9, GAD-7, OCI-R, MDQ, AQ-10, LSAS, PCL-5, DERS. Free adaptive test page for each dimension. Not an official scale administration.",
  trPath: "/olcekler",
  enPath: "/en/scales",
  keywords: [
    "ASRS ADHD",
    "PHQ-9",
    "GAD-7",
    "OCI-R",
    "PCL-5",
    "MDQ bipolar",
    "AQ-10 autism",
    "LSAS social anxiety",
    "DERS emotion regulation",
    "ADHD test",
    "OCD test",
    "depression test",
    "9spectrum",
  ],
});

const SCALES = [
  {
    id: "ASRS-v1.1",
    body: "WHO / Harvard Adult ADHD Self-Report Scale. Executive function, attention regulation, and impulsivity screening.",
    testPath: "/en/adhd-test",
  },
  {
    id: "OCI-R & Y-BOCS",
    body: "Obsessive Compulsive Inventory–Revised and Yale–Brown OCD Scale. Obsession, compulsion, and neutralisation intensity.",
    testPath: "/en/ocd-test",
  },
  {
    id: "PHQ-9 & Beck",
    body: "Patient Health Questionnaire-9 and Beck Depression Inventory. Anhedonia, energy loss, worthlessness, and psychomotor slowing.",
    testPath: "/en/depression-test",
  },
  {
    id: "GAD-7",
    body: "Generalized Anxiety Disorder-7. Chronic catastrophising, restlessness, and somatic tension.",
    testPath: "/en/anxiety-test",
  },
  {
    id: "MDQ",
    body: "Mood Disorder Questionnaire. Hypomanic/manic episodes and bipolar spectrum screening.",
    testPath: "/en/bipolar-test",
  },
  {
    id: "AQ-10 & CAT-Q",
    body: "Autism Spectrum Quotient short form and camouflaging (masking) inventory.",
    testPath: "/en/autism-test",
  },
  {
    id: "LSAS",
    body: "Liebowitz Social Anxiety Scale. Performance and social interaction avoidance.",
    testPath: "/en/social-anxiety-test",
  },
  {
    id: "PCL-5",
    body: "DSM-5 PTSD Checklist. Intrusive memories, avoidance, and hyperarousal.",
    testPath: "/en/trauma-test",
  },
  {
    id: "DERS & MSI-BPD",
    body: "Difficulties in Emotion Regulation Scale and McLean borderline screening items.",
    testPath: "/en/emotion-regulation-test",
  },
];

const landingByDimension = Object.fromEntries(
  LANDING_PAGES.map((p) => [p.dimensionId, p]),
);

export default function EnScalesPage() {
  return (
    <SiteShell current="scales" lang="en">
      <main className="scales wrap">
        <section className="sheet report">
          <p className="kicker">{EN.scales_kicker} · adaptive screening</p>
          <h1>Clinical scales and dimension tests</h1>
          <p className="lede">
            9spectrum is not an official reproduction of these instruments.
            Question language is derived from DSM-5-TR / ICD-11 frameworks and
            widely used screening inventory dimensions. There is no fixed quiz
            list: based on your answers, the system changes questions to home in
            on the result; when two dimensions overlap, differential follow-ups
            open.
          </p>
          <p className="note">
            <Link className="btn" href="/en/scan">
              Screen all dimensions (12–20 min)
            </Link>
          </p>
          <dl className="scale-grid">
            {SCALES.map((scale) => (
              <div className="scale-item" key={scale.id}>
                <dt>{scale.id}</dt>
                <dd>
                  {scale.body}
                  <br />
                  <Link className="linkish" href={scale.testPath}>
                    Related test page →
                  </Link>
                </dd>
              </div>
            ))}
          </dl>
          <h2
            className="display"
            style={{ fontSize: 28, marginTop: 36, fontWeight: 500 }}
          >
            {EN.scales_dict_h2}
          </h2>
          <dl className="scale-grid">
            {DIMENSIONS.map((id) => {
              const condition = CONDITIONS_DATA_EN[id];
              const landing = landingByDimension[id];
              return (
                <div className="scale-item" key={id}>
                  <dt>{condition.shortName}</dt>
                  <dd>
                    <strong>{condition.name}</strong>
                    <br />
                    {condition.dsmCode} · {condition.clinicalScale}
                    <br />
                    {condition.tagline}
                    {landing ? (
                      <>
                        <br />
                        <Link className="linkish" href={landingPath(landing, "en")}>
                          {landing.en.title.split("—")[0].trim()} →
                        </Link>
                      </>
                    ) : null}
                  </dd>
                </div>
              );
            })}
          </dl>
        </section>
      </main>
    </SiteShell>
  );
}
