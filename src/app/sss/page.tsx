import { SiteShell } from "@/components/Header";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sık sorulan sorular",
};

const FAQ = [
  {
    q: "Bu bir tanı mı?",
    a: "Hayır. MindSpectrum eğilim ve örtüşme haritası üretir. Tanıyı yalnızca yetkili bir klinisyen koyabilir.",
  },
  {
    q: "Cevaplarım nereye gidiyor?",
    a: "Sunucuya gitmiyor. Bu tarayıcının yerel belleğinde kalır. İstediğiniz zaman gizlilik sayfasından silebilirsiniz.",
  },
  {
    q: "Ne kadar sürer?",
    a: "Yazılı çatı yaklaşık 36 maddedir; görsel görevlerle 15–25 dakika. Çocuk ebeveyn formu daha kısadır.",
  },
  {
    q: "Çocuklar için form var mı?",
    a: "Evet. /cocuklar adresinde 6–17 yaş ebeveyn formu vardır. Çocuk tek başına doldurmaz; tanı veya okul raporu değildir.",
  },
  {
    q: "Görsel testler nedir?",
    a: "Yetişkin taramada kısa dikkat süzgeci, dur-git, duyusal doku ve enerji haritası vardır. Performans tanısı değildir; yazılı skorlara ek ipucudur. Hareketi azaltırsanız atlanır.",
  },
  {
    q: "Yarıda bırakırsam ne olur?",
    a: "Aynı tarayıcıda kaldığınız yerden devam edebilirsiniz. Başka bir cihaza aktarılmaz.",
  },
  {
    q: "Krizdeysem kullanmalı mıyım?",
    a: "Hayır. Acil durumda 112’yi arayın. Kriz kaynakları sayfasına bakın.",
  },
  {
    q: "Ölçekler resmi mi?",
    a: "Hayır. Soru dili ASRS-v1.1, PHQ-9, GAD-7, OCI-R, MDQ, AQ-10, LSAS, PCL-5 ve benzeri envanterlerin boyutlarından türetilmiştir; telifli tam formlar uygulanmaz.",
  },
];

export default function SssPage() {
  return (
    <SiteShell current="sss">
      <main className="scales wrap">
        <article className="sheet report">
          <p className="kicker">SSS</p>
          <h1>Sık sorulan sorular</h1>
          <dl className="faq">
            {FAQ.map((item) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
          <p className="note">
            Daha fazla metin:{" "}
            <Link className="linkish" href="/yasal-uyari">
              yasal uyarı
            </Link>
            {" · "}
            <Link className="linkish" href="/gizlilik">
              gizlilik
            </Link>
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
