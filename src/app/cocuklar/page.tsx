import { SiteShell } from "@/components/Header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Çocuklar için ebeveyn tarama",
  description:
    "Çocuk DEHB, otizm ve duyusal profil, kaygı, OKB ve duygudurum belirtilerini ebeveyn gözüyle tarayan, tanı koymayan form. Cevaplar cihazınızda kalır.",
  keywords: [
    "çocuk DEHB tarama",
    "çocuk otizm belirtileri ebeveyn",
    "çocuk kaygı tarama",
    "çocuk OKB",
    "ebeveyn anketi",
  ],
  alternates: { canonical: "/cocuklar" },
  openGraph: {
    title: "Çocuklar için ebeveyn tarama · MindSpectrum",
    description:
      "Tanı koymayan ebeveyn formu. Okul, duyusal yük, kaygı ve örtüşen belirtiler.",
  },
};

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
          <h1 className="display intake-title">Çocuğun belirtileri karışır. Birlikte haritalayalım.</h1>
          <p className="lede">
            Bu sayfa çocuklar için resmi test veya tanı değildir. Ebeveynin son
            haftalardaki gözlemine dayanan bir triyajdır: DEHB benzeri yürütücü
            zorluk, otizm / duyusal yük, kaygı, OKB tekrarları, çökkünlük ve
            duygu fırtınası. Örtüşen kalıplar varsa ayırıcı sorular açılır.
          </p>
          <div className="intake-actions">
            <Link className="btn" href="/cocuklar/tarama">
              Ebeveyn formunu aç
            </Link>
            <Link className="linkish" href="/tarama">
              18+ yetişkin tarama →
            </Link>
          </div>
        </section>
        <section className="how">
          <div>
            <h2>Neden ayrı bir form?</h2>
            <p className="lede" style={{ marginTop: 12 }}>
              Yetişkin maddeleri iş, maskeleme, hipomani dili kullanır. Çocuk
              maddeleri okul, oyun, rutin ve ebeveyn gözlemine çevrilmiştir.
              Bipolar tarama ihtiyatlıdır; küçük çocukta nadiren öne çıkar.
            </p>
          </div>
          <div>
            <div className="step">
              <strong>DEHB benzeri tablo</strong>
              Başlama zorluğu, kıpırdanma, yönerge kaçırma, sıra bekleyememe.
            </div>
            <div className="step">
              <strong>Otizm / duyusal</strong>
              Ses-ışık-kumaş, tekrarlayan oyun, ima okuma, plan değişince erime.
            </div>
            <div className="step">
              <strong>Kaygı ve OKB</strong>
              Felaket soruları, okul sabahı beden yakınması, yıkama / tam olsun tekrarları.
            </div>
          </div>
        </section>
        <p className="note">
          İstismar, ihmal veya çocuğun güvenliği için 183 ve 112. Bu formun
          sonucu mahkeme veya okul tanısı yerine geçmez.{" "}
          <Link className="linkish" href="/yasal-uyari">
            Yasal uyarı
          </Link>
        </p>
      </main>
    </SiteShell>
  );
}
