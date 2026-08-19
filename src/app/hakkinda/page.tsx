import { SiteShell } from "@/components/Header";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hakkında",
  description: `${SITE_NAME} nedir, nasıl çalışır ve kimin için tasarlandı.`,
};

export default function HakkindaPage() {
  return (
    <SiteShell current="hakkinda">
      <main className="scales wrap">
        <article className="sheet report prose">
          <p className="kicker">Kurum</p>
          <h1>Sakin, özel, tanı iddiası olmayan bir tarama.</h1>
          <p className="lede">
            {SITE_NAME} belirtileri birbirine karışan insanlar için tasarlandı.
            Amaç etiket yapmak değil; hekimle konuşulabilir net bir harita
            çıkarmak.
          </p>
          <h2>Nasıl çalışır</h2>
          <p>
            Birinci aşama sekiz boyutu tarar. İkinci aşama yalnızca örtüşen
            skorlarda açılır: örneğin ertelemenin sıkılmadan mı yoksa şüpheden
            mi geldiği, sosyal yorgunluğun yargılanma korkusu mu yoksa duyusal
            yük mü olduğu.
          </p>
          <h2>Ne değildir</h2>
          <p>
            Klinik görüşme, psikometrik test bataryası veya tedavi planı
            değildir. Ölçek adları bilimsel dayanağı göstermek içindir; resmi
            ölçek uygulaması yapılmaz.
          </p>
          <h2>Gizlilik</h2>
          <p>
            Hesap yoktur. Cevaplar sunucuya yazılmaz. Tarama bu tarayıcının
            yerel belleğinde durur; silmek size aittir. Ayrıntı{" "}
            <Link href="/gizlilik">gizlilik metninde</Link>.
          </p>
          <p>
            İletişim: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
