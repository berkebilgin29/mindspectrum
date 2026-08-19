import { EraseDataButton } from "@/components/EraseDataButton";
import { SiteShell } from "@/components/Header";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik",
};

export default function GizlilikPage() {
  return (
    <SiteShell>
      <main className="scales wrap">
        <article className="sheet report prose">
          <p className="kicker">KVKK / gizlilik</p>
          <h1>Gizlilik bildirimi</h1>
          <p>
            {SITE_NAME} hesap açmaz, tarama cevaplarını sunucuya kaydetmez ve
            reklam profili çıkarmaz. Cevaplar tarayıcınızın yerel depolamasında
            (localStorage) tutulur.
          </p>
          <h2>İşlenen veri</h2>
          <p>
            Tarama şıkları ve üretilen profil yalnızca sizin cihazınızdadır.
            Yazdırma veya kopyalama sizin eyleminizdir. Barındırma sağlayıcısı
            (ör. Vercel) teknik bağlantı kayıtları (IP, tarayıcı, zaman) tutabilir;
            bu kayıtlar tarama içeriğini içermez.
          </p>
          <h2>Çerezler ve reklamlar</h2>
          <p>
            Site, tercih çerezini (zorunlu) saklar. "Tümünü kabul et" seçeneğini
            tercih ederseniz Google Analytics (anonim kullanım istatistikleri) ve
            Google AdSense (kişiselleştirilmiş reklam) çerezleri etkinleşir.
            "Yalnızca zorunlu" seçerseniz üçüncü taraf çerezi yüklenmez.
            Tarama cevaplarınız hiçbir senaryoda sunucuya gönderilmez.
          </p>
          <h2>Haklarınız</h2>
          <p>
            Cihazınızdaki tarama kaydını silmek için aşağıdaki düğmeyi kullanın
            veya tarayıcı verilerini temizleyin. Talepler için {CONTACT_EMAIL}.
            Site: {SITE_URL}
          </p>
          <EraseDataButton />
        </article>
      </main>
    </SiteShell>
  );
}
