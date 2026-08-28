import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/Header";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";
import { aboutPageJsonLd, pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  lang: "tr",
  title: "Hakkında",
  description: `${SITE_NAME} nedir? Dokuz boyutta tanı koymayan, gizlilik odaklı psikolojik tarama. Örtüşen belirtileri ayırmaya yardımcı olur; hekimle konuşulabilir bir harita üretir.`,
  trPath: "/hakkinda",
  enPath: "/en/about",
});

export default function HakkindaPage() {
  return (
    <SiteShell current="hakkinda">
      <JsonLd data={aboutPageJsonLd("tr")} />
      <main className="scales wrap">
        <article className="sheet report prose">
          <p className="kicker">Hakkında</p>
          <h1>Sakin, gizli ve tanı iddiası olmayan bir tarama</h1>
          <p className="lede">
            {SITE_NAME}, belirtileri birbirine karışan insanlar için tasarlandı.
            Amaç etiketlemek değil; hekimle konuşulabilir net bir harita
            çıkarmaktır.
          </p>
          <h2>Nasıl çalışır?</h2>
          <p>
            Birinci aşama dokuz boyutu tarar. İkinci aşama yalnızca skorlar
            örtüşünce açılır: örneğin ertelemenin sıkılmadan mı yoksa şüpheden
            mi geldiği; sosyal yorgunluğun yargılanma korkusu mu yoksa duyusal
            yük mü olduğu.
          </p>
          <h2>Ne değildir?</h2>
          <p>
            Klinik görüşme, psikometrik test bataryası veya tedavi planı
            değildir. Ölçek adları bilimsel dayanağı göstermek içindir; resmi
            ölçek uygulaması yapılmaz.
          </p>
          <h2>Gizlilik</h2>
          <p>
            Hesap yoktur. Cevaplar sunucuya yazılmaz. Tarama bu tarayıcının
            yerel belleğinde kalır; silmek size aittir. Ayrıntı{" "}
            <Link href="/gizlilik">gizlilik bildirimindedir</Link>.
          </p>
          <p>
            İletişim: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
