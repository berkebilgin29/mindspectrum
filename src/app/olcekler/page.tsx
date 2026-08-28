import Link from "next/link";
import { CONDITIONS_DATA } from "@/data/conditionsData";
import { SiteShell } from "@/components/Header";
import { DIMENSIONS } from "@/lib/types";
import { pageMetadata } from "@/lib/seo";
import { LANDING_PAGES, landingPath } from "@/lib/seo/landings";
import type { Metadata } from "next";

export const metadata: Metadata = pageMetadata({
  lang: "tr",
  title: "Klinik ölçekler — ASRS, PHQ-9, GAD-7, OCI-R, PCL-5",
  description:
    "9spectrum’un dayandığı ASRS-v1.1, PHQ-9, GAD-7, OCI-R, MDQ, AQ-10, LSAS, PCL-5, DERS boyutları. Her boyut için ücretsiz adaptif test sayfası. Resmi ölçek uygulaması değildir.",
  trPath: "/olcekler",
  enPath: "/en/scales",
  keywords: [
    "ASRS DEHB",
    "PHQ-9",
    "GAD-7",
    "OCI-R",
    "PCL-5",
    "MDQ bipolar",
    "AQ-10 otizm",
    "LSAS sosyal kaygı",
    "DERS duygu regülasyonu",
    "DEHB testi",
    "OKB testi",
    "depresyon testi",
    "9spectrum",
  ],
});

const SCALES = [
  {
    id: "ASRS-v1.1",
    body: "WHO / Harvard Yetişkin DEHB Öz-Bildirim Ölçeği. Yürütücü işlev, dikkat regülasyonu ve dürtüsellik taraması.",
    testPath: "/dehb-testi",
  },
  {
    id: "OCI-R & Y-BOCS",
    body: "Obsesif Kompulsif Envanteri ve Yale–Brown OKB Ölçeği. Obsesyon, kompulsiyon ve nötralizasyon yoğunluğu.",
    testPath: "/okb-testi",
  },
  {
    id: "PHQ-9 & Beck",
    body: "Hasta Sağlık Anketi-9 ve Beck Depresyon Envanteri. Anhedoni, enerji, değersizlik ve psikomotor yavaşlama.",
    testPath: "/depresyon-testi",
  },
  {
    id: "GAD-7",
    body: "Yaygın Anksiyete Bozukluğu-7. Kronik felaketleştirme, huzursuzluk ve bedensel gerginlik.",
    testPath: "/anksiyete-testi",
  },
  {
    id: "MDQ",
    body: "Duygudurum Bozuklukları Anketi. Hipomani/mani dönemleri ve bipolar spektrum taraması.",
    testPath: "/bipolar-testi",
  },
  {
    id: "AQ-10 & CAT-Q",
    body: "Otizm Spektrum Katsayısı kısa form ve kamufle etme (maskeleme) envanteri.",
    testPath: "/otizm-testi",
  },
  {
    id: "LSAS",
    body: "Liebowitz Sosyal Kaygı Ölçeği. Performans ve sosyal etkileşim kaçınması.",
    testPath: "/sosyal-kaygi-testi",
  },
  {
    id: "PCL-5",
    body: "DSM-5 TSSB Kontrol Listesi. İstenmeyen anılar, kaçınma ve aşırı uyarılmışlık.",
    testPath: "/travma-testi",
  },
  {
    id: "DERS & MSI-BPD",
    body: "Duygu Düzenleme Güçlüğü Ölçeği ve McLean Borderline tarama maddeleri.",
    testPath: "/duygu-regulasyonu-testi",
  },
];

const landingByDimension = Object.fromEntries(
  LANDING_PAGES.map((p) => [p.dimensionId, p]),
);

export default function OlceklerPage() {
  return (
    <SiteShell current="olcekler">
      <main className="scales wrap">
        <section className="sheet report">
          <p className="kicker">Kaynakça · adaptif tarama</p>
          <h1>Klinik ölçekler ve boyut testleri</h1>
          <p className="lede">
            9spectrum bu ölçeklerin resmi kopyası değildir. Soru dili DSM-5-TR /
            ICD-11 çerçevesi ve yaygın tarama envanterlerinin boyutlarından
            türetilmiştir. Sabit bir test listesi yoktur: cevaplarınıza göre
            sistem sonuca yaklaşmak için soruları değiştirir; iki boyut yakınsa
            ayırıcı sorular açılır.
          </p>
          <p className="note">
            <Link className="btn" href="/tarama">
              Tüm boyutları tara (12–20 dk)
            </Link>
          </p>
          <dl className="scale-grid">
            {SCALES.map((scale) => (
              <div className="scale-item" key={scale.id}>
                <dt>{scale.id}</dt>
                <dd>
                  {scale.body}
                  <br />
                  <Link className="linkish" href={scale.testPath}>
                    İlgili test sayfası →
                  </Link>
                </dd>
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
              const landing = landingByDimension[id];
              return (
                <div className="scale-item" key={id}>
                  <dt>{condition.shortName}</dt>
                  <dd>
                    <strong>{condition.name}</strong>
                    <br />
                    {condition.dsmCode} · {condition.clinicalScale}
                    <br />
                    {condition.tagline}
                    {landing ? (
                      <>
                        <br />
                        <Link className="linkish" href={landingPath(landing, "tr")}>
                          {landing.tr.title.split("—")[0].trim()} →
                        </Link>
                      </>
                    ) : null}
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
