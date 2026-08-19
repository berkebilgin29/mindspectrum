import { SiteShell } from "@/components/Header";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";
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
          <p className="kicker">İletişim</p>
          <h1>Yazın.</h1>
          <p className="lede">
            Klinik acil durumlar için bu kutu kullanılmaz.{" "}
            <Link href="/kriz">Kriz kaynakları</Link> sayfasına gidin.
          </p>
          <p>
            {SITE_NAME} ile ilgili soru, iş birliği veya düzeltme talepleri:
          </p>
          <p>
            <a className="btn" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
          </p>
          <p className="note">
            E-postada tarama cevaplarınızı göndermeniz gerekmez. Gönderirseniz
            o ileti sizin sorumluluğunuzdadır.
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
