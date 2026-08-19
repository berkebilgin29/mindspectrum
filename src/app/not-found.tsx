import { SiteShell } from "@/components/Header";
import Link from "next/link";

export default function NotFound() {
  return (
    <SiteShell>
      <main className="scales wrap">
        <section className="sheet report">
          <p className="kicker">404</p>
          <h1>Bu sayfa yok.</h1>
          <p className="lede">Adres değişmiş veya hiç var olmamış olabilir.</p>
          <div className="intake-actions">
            <Link className="btn" href="/">
              Ana sayfa
            </Link>
            <Link className="btn btn-ghost" href="/tarama">
              Taramaya git
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
