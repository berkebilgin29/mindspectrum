import { CONDITIONS_DATA } from "@/data/conditionsData";
import { SiteShell } from "@/components/Header";
import { DIMENSIONS } from "@/lib/types";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klinik ölçekler",
};

const SCALES = [
  {
    id: "ASRS-v1.1",
    body: "WHO / Harvard Yetişkin DEHB Öz-Bildirim Ölçeği. Yürütücü işlev, dikkat regülasyonu ve dürtüsellik taraması.",
  },
  {
    id: "OCI-R & Y-BOCS",
    body: "Obsesif Kompulsif Envanteri ve Yale–Brown OKB Ölçeği. Obsesyon, kompulsiyon ve nötralizasyon yoğunluğu.",
  },
  {
    id: "PHQ-9 & Beck",
    body: "Hasta Sağlık Anketi-9 ve Beck Depresyon Envanteri. Anhedoni, enerji, değersizlik ve psikomotor yavaşlama.",
  },
  {
    id: "GAD-7",
    body: "Yaygın Anksiyete Bozukluğu-7. Kronik felaketleştirme, huzursuzluk ve somatik alarm.",
  },
  {
    id: "MDQ",
    body: "Duygudurum Bozuklukları Anketi. Hipomani/mani dönemleri ve bipolar spektrum taraması.",
  },
  {
    id: "AQ-10 & CAT-Q",
    body: "Otizm Spektrum Katsayısı kısa form ve Kamufle Etme (maskeleme) envanteri.",
  },
  {
    id: "LSAS",
    body: "Liebowitz Sosyal Kaygı Ölçeği. Performans ve sosyal etkileşim kaçınması.",
  },
  {
    id: "PCL-5",
    body: "DSM-5 TSSB Kontrol Listesi. İstilacı anılar, kaçınma ve aşırı uyarılmışlık.",
  },
  {
    id: "DERS & MSI-BPD",
    body: "Duygu Düzenleme Güçlüğü Ölçeği ve McLean Borderline tarama maddeleri.",
  },
];

export default function OlceklerPage() {
  return (
    <SiteShell current="olcekler">
      <main className="scales wrap">
        <section className="sheet report">
          <p className="kicker">Kaynakça</p>
          <h1>Klinik ölçekler ve boyutlar</h1>
          <p className="lede">
            MindSpectrum bu ölçeklerin resmi kopyası değildir. Soru dili, DSM-5-TR
            / ICD-11 çerçevesi ve yaygın tarama envanterlerinin boyutlarından
            türetilmiştir.
          </p>
          <dl className="scale-grid">
            {SCALES.map((scale) => (
              <div className="scale-item" key={scale.id}>
                <dt>{scale.id}</dt>
                <dd>{scale.body}</dd>
              </div>
            ))}
          </dl>
          <h2
            className="display"
            style={{ fontSize: 28, marginTop: 36, fontWeight: 500 }}
          >
            Boyut sözlüğü
          </h2>
          <dl className="scale-grid">
            {DIMENSIONS.map((id) => {
              const condition = CONDITIONS_DATA[id];
              return (
                <div className="scale-item" key={id}>
                  <dt>{condition.shortName}</dt>
                  <dd>
                    <strong>{condition.name}</strong>
                    <br />
                    {condition.dsmCode} · {condition.clinicalScale}
                    <br />
                    {condition.tagline}
                  </dd>
                </div>
              );
            })}
          </dl>
        </section>
      </main>
    </SiteShell>
  );
}
