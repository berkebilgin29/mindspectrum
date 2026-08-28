import { SiteShell } from "@/components/Header";
import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = pageMetadata({
  lang: "tr",
  title: "Çocuklar için ebeveyn tarama",
  description:
    "Çocuk DEHB, otizm/duyusal profil, kaygı, OKB ve duygudurum belirtilerini ebeveyn gözüyle tarayan, tanı koymayan form (6–17 yaş). Cevaplar cihazınızda kalır.",
  trPath: "/cocuklar",
  enPath: "/en/children",
  keywords: [
    "çocuk DEHB tarama",
    "çocuk otizm belirtileri ebeveyn",
    "çocuk kaygı tarama",
    "çocuk OKB",
    "ebeveyn anketi",
    "9spectrum",
  ],
});

export default function CocuklarPage() {
  return (
    <SiteShell current="cocuklar">
      <main className="home wrap">
        <section className="sheet intake">
          <div className="meta-row">
            <span>
              Belge <b>MS-Ç01</b>
            </span>
            <span>
              Yaş <b>6–17</b>
            </span>
            <span>
              Dolduran <b>ebeveyn / bakıcı</b>
            </span>
            <span>
              Süre <b>10–16 dk</b>
            </span>
          </div>
          <h1 className="display intake-title">
            Çocuğunuzun belirtileri karışıyor olabilir. Birlikte haritalayalım.
          </h1>
          <p className="lede">
            Bu sayfa çocuklar için resmi test veya tanı değildir. Ebeveynin son
            haftalardaki gözlemine dayanan bir ön taramadır: DEHB benzeri
            zorluklar, otizm / duyusal yük, kaygı, OKB tekrarları, çökkünlük ve
            duygu regülasyonu. Örtüşen kalıplar varsa ayırıcı sorular açılır.
          </p>
          <div className="intake-actions">
            <Link className="btn" href="/cocuklar/tarama">
              Ebeveyn formunu aç
            </Link>
            <Link className="linkish" href="/tarama">
              18+ yetişkin taraması →
            </Link>
          </div>
        </section>
        <section className="how">
          <div>
            <h2>Neden ayrı bir form?</h2>
            <p className="lede" style={{ marginTop: 12 }}>
              Yetişkin soruları iş, maskeleme ve hipomani diline yaslanır. Çocuk
              formunda okul, oyun, rutin ve ebeveyn gözlemi kullanılır. Bipolar
              tarama ihtiyatlıdır; küçük çocukta nadiren öne çıkar.
            </p>
          </div>
          <div>
            <div className="step">
              <strong>DEHB benzeri tablo</strong>
              Başlamakta zorlanma, kıpırdanma, yönergeleri kaçırma, sıra
              bekleyememe.
            </div>
            <div className="step">
              <strong>Otizm / duyusal</strong>
              Ses–ışık–kumaş hassasiyeti, tekrarlayan oyun, ima okuma güçlüğü,
              plan değişince zorlanma.
            </div>
            <div className="step">
              <strong>Kaygı ve OKB</strong>
              Felaket senaryoları, okul sabahı bedensel yakınmalar, yıkama veya
              “tam olsun” tekrarları.
            </div>
          </div>
        </section>
        <p className="note">
          İstismar, ihmal veya çocuğun güvenliği için 183 ve 112’yi arayın. Bu
          formun sonucu mahkeme veya okul tanısı yerine geçmez.{" "}
          <Link className="linkish" href="/yasal-uyari">
            Yasal uyarı
          </Link>
        </p>
      </main>
    </SiteShell>
  );
}
