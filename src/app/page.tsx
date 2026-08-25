import { AdSlot } from "@/components/AdSlot";
import { DIMENSION_META } from "@/lib/dimensions";
import { SiteShell } from "@/components/Header";
import { StartActions } from "@/components/StartActions";
import { DIMENSIONS } from "@/lib/types";
import Link from "next/link";

export default function HomePage() {
  const today = new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());

  return (
    <SiteShell current="home">
      <main className="home wrap">
        <section className="sheet intake">
          <div className="meta-row">
            <span>
              Belge <b>MS-01</b>
            </span>
            <span>
              Tarih <b>{today}</b>
            </span>
            <span>
              Süre <b>15–25 dk</b>
            </span>
            <span>
              Kayıt <b>yalnızca bu cihaz</b>
            </span>
          </div>
          <h1 className="display intake-title">
            Belirtiler karışır. Kökenini ayıralım.
          </h1>
          <p className="lede">
            MindSpectrum, 9 psikolojik boyutu önyargısız tarayan çift aşamalı
            bir adaptif motordur. Tanı koymaz. Örtüşen kalıpları — DEHB
            ertelemesi ile OKB kilitlenmesi, sosyal kaygı ile duyusal tükenme —
            birbirinden ayırır.
          </p>
          <StartActions />
          <p className="note" style={{ marginTop: 18 }}>
            18 yaşından küçükler için ayrı ebeveyn formu:{" "}
            <Link className="linkish" href="/cocuklar">
              Çocuk tarama
            </Link>
          </p>
          <div className="dims">
            {DIMENSIONS.map((id) => (
              <div className="dim" key={id}>
                <small>{DIMENSION_META[id].group}</small>
                {DIMENSION_META[id].label}
              </div>
            ))}
          </div>
        </section>

        <section className="how">
          <div>
            <h2>İki aşama, tek oturum.</h2>
            <p className="lede" style={{ marginTop: 12 }}>
              Klinik ölçeklerin dilinden türetilmiş 36 yazılı madde.
              Emin değilim seçeneği ve travma maddelerinde atlama vardır.
              Şıka tıklayınca bir sonraki soruya geçilir.
            </p>
          </div>
          <div>
            <div className="step">
              <strong>1. Çatı tarama</strong>
              DEHB, OKB, depresyon, yaygın anksiyete, bipolar spektrum, otizm /
              duyusal profil, sosyal anksiyete, travma ve duygusal düzensizlik
              — boyut başına daha dolu maddeler.
            </div>
            <div className="step">
              <strong>2. Ayırıcı dallanma</strong>
              Yalnızca iki boyut birden belirgin ve birbirine yakınsa açılır.
            </div>
            <div className="step">
              <strong>3. Spektrum profili</strong>
              Eğilim çubukları, belirsiz bant, klinisyen tablosu, paylaşım
              linki (sunucuya gitmez) ve geçmiş taramalar.
            </div>
          </div>
        </section>

        <AdSlot slot="home-mid" format="horizontal" />

        <p className="note">
          Bu araç tıbbi tanı, tedavi veya acil müdahale yerine geçmez.{" "}
          <Link className="linkish" href="/yasal-uyari">
            Yasal uyarı
          </Link>
          {" · "}
          <Link className="linkish" href="/kriz">
            Kriz kaynakları
          </Link>
          {" · "}
          Kaynak ölçekler (resmi uygulama değildir): ASRS-v1.1, OCI-R & Y-BOCS,
          PHQ-9, GAD-7, MDQ, AQ-10 & CAT-Q, LSAS, PCL-5, DERS & MSI-BPD.
        </p>
      </main>
    </SiteShell>
  );
}
