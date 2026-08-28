import { SiteShell } from "@/components/Header";
import { SITE_NAME } from "@/lib/site";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kullanım şartları",
};

export default function KullanimSartlariPage() {
  return (
    <SiteShell>
      <main className="scales wrap">
        <article className="sheet report prose">
          <p className="kicker">Sözleşme</p>
          <h1>Kullanım şartları</h1>
          <p>
            {SITE_NAME}’i kullanarak bu şartları ve{" "}
            <Link href="/yasal-uyari">yasal uyarıyı</Link> kabul etmiş olursunuz.
            18 yaşından küçülseniz bir ebeveyn veya vasinin gözetiminde kullanın.
          </p>
          <h2>Kabul edilebilir kullanım</h2>
          <p>
            Siteyi yasalara uygun, başkalarının güvenliğini tehlikeye atmadan
            kullanın. Yazılımı kopyalayıp tanı iddiasıyla satmak veya resmi test
            gibi sunmak yasaktır.
          </p>
          <h2>İçerik</h2>
          <p>
            Metinler ve arayüz {SITE_NAME}’e aittir. Anılan klinik ölçekler ilgili
            hak sahiplerine aittir; burada yalnızca bilimsel atıf yapılır.
          </p>
          <h2>Değişiklik</h2>
          <p>
            Şartlar ve tarama içeriği güncellenebilir. Yayınlanan sürüm geçerlidir.
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
