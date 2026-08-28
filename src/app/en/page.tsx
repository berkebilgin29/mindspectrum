import { DIMENSION_META_EN } from "@/lib/dimensions.en";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/Header";
import { StartActions } from "@/components/StartActions";
import { DIMENSIONS } from "@/lib/types";
import { AdSlot } from "@/components/AdSlot";
import { EN } from "@/lib/i18n/dict";
import { faqPageJsonLd, HOME_FAQ_EN, pageMetadata } from "@/lib/seo";
import {
  SITE_DESCRIPTION_EN,
  SITE_KEYWORDS_EN,
  SITE_TAGLINE_EN,
} from "@/lib/site";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  title: SITE_TAGLINE_EN,
  description: SITE_DESCRIPTION_EN,
  trPath: "/",
  enPath: "/en",
  keywords: SITE_KEYWORDS_EN,
});

export default function EnHomePage() {
  return (
    <SiteShell current="home" lang="en">
      <JsonLd data={faqPageJsonLd([...HOME_FAQ_EN])} />
      <main className="home wrap">
        <section className="sheet intake">
          <div className="meta-row">
            <span>
              Form <b>MS-01</b>
            </span>
            <span>
              Duration <b>{EN.home_duration}</b>
            </span>
            <span>
              Storage <b>Anonymous (Server + Device)</b>
            </span>
          </div>
          <p className="kicker">Free · anonymous · not a diagnosis</p>
          <h1 className="display intake-title">{EN.home_h1}</h1>
          <p className="lede">{EN.home_lede}</p>
          <StartActions lang="en" />
          <p className="note" style={{ marginTop: 18 }}>
            Under 18? Use the separate parent form:{" "}
            <Link className="linkish" href="/en/children">
              {EN.home_children_link}
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
            <h2>{EN.home_how_h2}</h2>
            <p className="lede" style={{ marginTop: 12 }}>
              {EN.home_how_lede}
            </p>
          </div>
          <div>
            <div className="step">
              <strong>{EN.home_step1_title}</strong>
              {EN.home_step1_body}
            </div>
            <div className="step">
              <strong>{EN.home_step2_title}</strong>
              {EN.home_step2_body}
            </div>
            <div className="step">
              <strong>{EN.home_step3_title}</strong>
              {EN.home_step3_body}
            </div>
          </div>
        </section>

        <section className="sheet report home-seo">
          <h2>Frequently asked questions</h2>
          <dl className="faq">
            {HOME_FAQ_EN.map((item) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
          <p style={{ marginTop: 24 }}>
            <Link className="linkish" href="/en/scales">
              Scale references
            </Link>
            {" · "}
            <Link className="linkish" href="/en/faq">
              Full FAQ
            </Link>
          </p>
        </section>

        <AdSlot slot="home-mid-en" format="horizontal" />

        <p className="note">
          {EN.home_legal_note}{" "}
          <Link className="linkish" href="/en/disclaimer">
            {EN.home_legal_link}
          </Link>
          {" · "}
          <Link className="linkish" href="/en/crisis">
            {EN.home_crisis_link}
          </Link>
          {" · "}
          Source scales (not an official administration): ASRS-v1.1, OCI-R &
          Y-BOCS, PHQ-9, GAD-7, MDQ, AQ-10 & CAT-Q, LSAS, PCL-5, DERS &
          MSI-BPD.
        </p>
      </main>
    </SiteShell>
  );
}
