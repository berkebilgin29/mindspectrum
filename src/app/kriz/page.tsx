import { SiteShell } from "@/components/Header";
import { CRISIS_LINES } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kriz kaynakları",
  robots: { index: true, follow: true },
};

export default function KrizPage() {
  return (
    <SiteShell>
      <main className="scales wrap">
        <article className="sheet report">
          <p className="kicker">Acil</p>
          <h1>Bu tarama kriz müdahalesi değildir.</h1>
          <p className="lede">
            Kendinize veya başkasına zarar verme düşünceniz varsa hemen yardım
            alın. Yalnız değilsiniz.
          </p>
          <ul className="crisis-list">
            {CRISIS_LINES.map((line) => (
              <li key={line.value}>
                <strong>{line.name}</strong>
                <a href={`tel:${line.value}`}>{line.value}</a>
              </li>
            ))}
          </ul>
          <p className="note">
            En yakın acil servise gidin veya 112’yi arayın. Uluslararası kaynak
            için IASP: iasp.info
          </p>
        </article>
      </main>
    </SiteShell>
  );
}
