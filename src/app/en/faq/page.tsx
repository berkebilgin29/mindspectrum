import { SiteShell } from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";
import { EN } from "@/lib/i18n/dict";

export const metadata: Metadata = {
  title: "FAQ · MindSpectrum",
  alternates: { canonical: "/en/faq", languages: { tr: "/sss" } },
};

export default function EnFaqPage() {
  return (
    <SiteShell current="faq" lang="en">
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
            <Link className="linkish" href="/en/disclaimer">{EN.faq_legal_link}</Link>
            {" · "}
            <Link className="linkish" href="/en/privacy">{EN.faq_privacy_link}</Link>
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
