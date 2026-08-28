import { SiteShell } from "@/components/Header";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";
import { EN } from "@/lib/i18n/dict";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact · 9spectrum",
  alternates: { canonical: "/en/contact", languages: { tr: "/iletisim" } },
};

export default function EnContactPage() {
  return (
    <SiteShell lang="en">
      <main className="scales wrap">
        <article className="sheet report prose">
          <p className="kicker">{EN.contact_kicker}</p>
          <h1>{EN.contact_h1}</h1>
          <p className="lede">
            {EN.contact_lede}{" "}
            <Link href="/en/crisis">Crisis resources</Link>
          </p>
          <p>{EN.contact_body.replace("9spectrum", SITE_NAME)}</p>
          <p>
            <a className="btn" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="note">{EN.contact_note}</p>
        </article>
      </main>
    </SiteShell>
  );
}
