"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="scales wrap" style={{ paddingTop: 48 }}>
      <section className="sheet report">
        <p className="kicker">Hata</p>
        <h1>Sayfa yüklenemedi.</h1>
        <p className="lede">
          Geçici bir sorun olabilir. Yenileyin veya ana sayfaya dönün.
        </p>
        <div className="intake-actions">
          <button className="btn" type="button" onClick={reset}>
            Yeniden dene
          </button>
          <Link className="btn btn-ghost" href="/">
            Ana sayfa
          </Link>
        </div>
      </section>
    </main>
  );
}
