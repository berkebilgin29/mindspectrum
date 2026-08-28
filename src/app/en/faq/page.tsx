import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";
import { EN } from "@/lib/i18n/dict";
import { faqPageJsonLd, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  lang: "en",
  title: "Frequently asked questions",
  description:
    "Does 9spectrum diagnose? Where do answers go? How long does it take? Is there a child form? Clear answers on privacy, crisis use, and clinical scales.",
  trPath: "/sss",
  enPath: "/en/faq",
  keywords: [
    "psychological screening FAQ",
    "is ADHD screening safe",
    "private mental health screen",
    "9spectrum",
  ],
});

export default function EnFaqPage() {
  return (
    <SiteShell current="faq" lang="en">
      <JsonLd data={faqPageJsonLd(EN.faq_items)} />
      <main className="scales wrap">
        <article className="sheet report">
          <p className="kicker">{EN.faq_kicker}</p>
          <h1>{EN.faq_h1}</h1>
          <dl className="faq">
            {EN.faq_items.map((item) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
          <p className="note">
            {EN.faq_more}{" "}
            <Link className="linkish" href="/en/disclaimer">
              {EN.faq_legal_link}
            </Link>
            {" · "}
            <Link className="linkish" href="/en/privacy">
              {EN.faq_privacy_link}
            </Link>
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
