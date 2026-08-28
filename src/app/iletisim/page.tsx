import { SiteShell } from "@/components/Header";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";
import { TR } from "@/lib/i18n/dict";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "İletişim",
};

export default function IletisimPage() {
  return (
    <SiteShell>
      <main className="scales wrap">
        <article className="sheet report prose">
          <p className="kicker">{TR.contact_kicker}</p>
          <h1>{TR.contact_h1}</h1>
          <p className="lede">
            {TR.contact_lede}{" "}
            <Link href="/kriz">Kriz kaynakları</Link> sayfasına gidin.
          </p>
          <p>{TR.contact_body.replace("9spectrum", SITE_NAME)}</p>
          <p>
            <a className="btn" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="note">{TR.contact_note}</p>
        </article>
      </main>
    </SiteShell>
  );
}
