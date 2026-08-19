import { SiteShell } from "@/components/Header";
import { SITE_NAME } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yasal uyarı",
};

export default function YasalUyariPage() {
  return (
    <SiteShell>
      <main className="scales wrap">
        <article className="sheet report prose">
          <p className="kicker">Hukuki</p>
          <h1>Yasal uyarı</h1>
          <p>
            {SITE_NAME} bilgilendirme ve öz-gözlem amaçlı bir tarama aracıdır.
            Tıbbi cihaz değildir. Sağlık hizmeti, psikoterapi, acil müdahale
            veya resmi psikometrik değerlendirme sunmaz.
          </p>
          <h2>Tanı ve tedavi</h2>
          <p>
            Sonuçlar tanı, teşhis, reçete veya tedavi tavsiyesi değildir. Yüksek
            eğilim, bir bozukluğunuz olduğu anlamına gelmez. Düşük eğilim,
            klinik bir durum olmadığı anlamına gelmez. Kararları yetkili bir
            hekim veya klinik psikologla verin.
          </p>
          <h2>Ölçekler</h2>
          <p>
            ASRS-v1.1, OCI-R, Y-BOCS, PHQ-9, Beck, GAD-7, MDQ, AQ-10, CAT-Q,
            LSAS, PCL-5, DERS ve MSI-BPD adları bilimsel çerçeveyi belirtmek
            için anılır. Bu site söz konusu ölçeklerin lisanslı veya resmi
            uygulaması değildir.
          </p>
          <h2>Sorumluluk</h2>
          <p>
            Siteyi kullanarak sonuçları kendi sorumluluğunuzda
            değerlendirdiğinizi kabul edersiniz. İçerik “olduğu gibi”
            sunulur. Kriz, intihar düşüncesi veya şiddet riski varsa hemen{" "}
            <Link href="/kriz">acil yardıma</Link> başvurun.
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
