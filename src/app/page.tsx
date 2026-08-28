import { AdSlot } from "@/components/AdSlot";
import { JsonLd } from "@/components/JsonLd";
import { DIMENSION_META } from "@/lib/dimensions";
import { SiteShell } from "@/components/Header";
import { StartActions } from "@/components/StartActions";
import { DIMENSIONS } from "@/lib/types";
import { TR } from "@/lib/i18n/dict";
import { faqPageJsonLd, HOME_FAQ_TR, pageMetadata } from "@/lib/seo";
import { SITE_DESCRIPTION, SITE_KEYWORDS_TR, SITE_TAGLINE } from "@/lib/site";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  lang: "tr",
  title: SITE_TAGLINE,
  description: SITE_DESCRIPTION,
  trPath: "/",
  enPath: "/en",
  keywords: SITE_KEYWORDS_TR,
});

export default function HomePage() {
  const today = new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <SiteShell current="home">
      <JsonLd data={faqPageJsonLd([...HOME_FAQ_TR])} />
      <main className="home wrap">
        <section className="sheet intake">
          <div className="meta-row">
            <span>
              Belge <b>MS-01</b>
            </span>
            <span>
              Tarih <b>{today}</b>
            </span>
            <span>
              Süre <b>{TR.home_duration}</b>
            </span>
            <span>
              Kayıt <b>Anonim (Sunucu + Cihaz)</b>
            </span>
          </div>
          <p className="kicker">Ücretsiz · anonim · tanı değildir</p>
          <h1 className="display intake-title">{TR.home_h1}</h1>
          <p className="lede">{TR.home_lede}</p>
          <StartActions />
          <p className="note" style={{ marginTop: 18 }}>
            18 yaşından küçükler için ayrı ebeveyn formu:{" "}
            <Link className="linkish" href="/cocuklar">
              {TR.home_children_link}
            </Link>
          </p>
          <div className="dims">
            {DIMENSIONS.map((id) => (
              <div className="dim" key={id}>
                <small>{DIMENSION_META[id].group}</small>
                {DIMENSION_META[id].label}
              </div>
            ))}
          </div>
        </section>

        <section className="how">
          <div>
            <h2>{TR.home_how_h2}</h2>
            <p className="lede" style={{ marginTop: 12 }}>
              {TR.home_how_lede}
            </p>
          </div>
          <div>
            <div className="step">
              <strong>{TR.home_step1_title}</strong>
              {TR.home_step1_body}
            </div>
            <div className="step">
              <strong>{TR.home_step2_title}</strong>
              {TR.home_step2_body}
            </div>
            <div className="step">
              <strong>{TR.home_step3_title}</strong>
              {TR.home_step3_body}
            </div>
          </div>
        </section>

        <section className="sheet report home-seo">
          <h2>Sık sorulan sorular</h2>
          <dl className="faq">
            {HOME_FAQ_TR.map((item) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
          <p style={{ marginTop: 24 }}>
            <Link className="linkish" href="/olcekler">
              Ölçek referansları
            </Link>
            {" · "}
            <Link className="linkish" href="/sss">
              Tüm SSS
            </Link>
          </p>
        </section>

        <AdSlot slot="home-mid" format="horizontal" />

        <p className="note">
          {TR.home_legal_note}{" "}
          <Link className="linkish" href="/yasal-uyari">
            {TR.home_legal_link}
          </Link>
          {" · "}
          <Link className="linkish" href="/kriz">
            {TR.home_crisis_link}
          </Link>
          {" · "}
          Kaynak ölçekler (resmi uygulama değildir): ASRS-v1.1, OCI-R & Y-BOCS,
          PHQ-9, GAD-7, MDQ, AQ-10 & CAT-Q, LSAS, PCL-5, DERS & MSI-BPD.
        </p>
      </main>
    </SiteShell>
  );
}
