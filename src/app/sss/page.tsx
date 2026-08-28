import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/Header";
import { TR } from "@/lib/i18n/dict";
import { faqPageJsonLd, pageMetadata } from "@/lib/seo";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  lang: "tr",
  title: "Sık sorulan sorular",
  description:
    "9spectrum tanı mı koyar? Cevaplar nereye gider? Ne kadar sürer? Çocuk formu var mı? Gizlilik, kriz ve ölçekler hakkında net yanıtlar.",
  trPath: "/sss",
  enPath: "/en/faq",
  keywords: [
    "psikolojik tarama SSS",
    "DEHB tarama güvenli mi",
    "ücretsiz psikolojik test gizlilik",
    "9spectrum",
  ],
});

export default function SssPage() {
  return (
    <SiteShell current="sss">
      <JsonLd data={faqPageJsonLd(TR.faq_items)} />
      <main className="scales wrap">
        <article className="sheet report">
          <p className="kicker">{TR.faq_kicker}</p>
          <h1>{TR.faq_h1}</h1>
          <dl className="faq">
            {TR.faq_items.map((item) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
          <p className="note">
            {TR.faq_more}{" "}
            <Link className="linkish" href="/yasal-uyari">
              {TR.faq_legal_link}
            </Link>
            {" · "}
            <Link className="linkish" href="/gizlilik">
              {TR.faq_privacy_link}
            </Link>
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
