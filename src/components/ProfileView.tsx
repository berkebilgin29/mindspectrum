"use client";

import { useSyncExternalStore } from "react";
import { getResultSnapshot, subscribeResult } from "@/lib/storage";
import { TRAIT_GROUPS, computeTraitScore } from "@/lib/traits";
import Link from "next/link";
import type { Lang } from "@/lib/i18n/dict";

export function ProfileView({ lang }: { lang: Lang }) {
  const state = useSyncExternalStore(subscribeResult, getResultSnapshot, getResultSnapshot);

  if (!state || !state.axisScores) {
    return (
      <section className="sheet report">
        <p className="kicker">{lang === "en" ? "No profile" : "Profil yok"}</p>
        <h1>{lang === "en" ? "Data not found" : "Veri bulunamadı"}</h1>
        <p className="lede">
          {lang === "en" 
            ? "You need to complete a scan first to view your cognitive profile."
            : "Kognitif profilinizi görmek için önce bir tarama tamamlamanız gerekiyor."}
        </p>
        <div className="intake-actions">
          <Link className="btn" href={lang === "en" ? "/en/scan" : "/tarama"}>
            {lang === "en" ? "Start Scan" : "Tarama Başlat"}
          </Link>
        </div>
      </section>
    );
  }

  const traitIds = Object.keys(TRAIT_GROUPS) as Array<keyof typeof TRAIT_GROUPS>;
  const traits = traitIds.map(id => ({
    score: computeTraitScore(id, state.axisScores),
    ...TRAIT_GROUPS[id]
  })).sort((a, b) => b.score - a.score);

  return (
    <article className="sheet report">
      <p className="kicker">{lang === "en" ? "Detailed Analysis" : "Detaylı Analiz"}</p>
      <h1>{lang === "en" ? "Cognitive & Emotional Profile" : "Kognitif ve Duygusal Profil"}</h1>
      <p className="lede">
        {lang === "en"
          ? "This page maps your micro-traits independently of clinical conditions. For example, your anxiety might decrease over time while your attention issues remain stable."
          : "Bu sayfa klinik hastalıklardan bağımsız olarak, zihinsel alt-özelliklerinizi haritalar. Örneğin zamanla kaygınız azalırken dikkat dağınıklığınız aynı kalabilir."}
      </p>

      <div className="bars" style={{ marginTop: "2rem" }}>
        {traits.map((t) => (
          <div className={`bar-row ${t.score > 65 ? 'yuksek' : t.score > 40 ? 'belirgin' : t.score > 20 ? 'belirsiz' : 'dusuk'}`} key={t.id} style={{ marginBottom: "1.5rem" }}>
            <strong style={{ fontSize: "1.1rem" }}>{t.label[lang]}</strong>
            <p style={{ fontSize: "0.85rem", color: "var(--c-text-muted)", marginBottom: "0.5rem" }}>{t.desc[lang]}</p>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{ width: `${Math.max(0, Math.min(100, t.score))}%` }}
              />
            </div>
            <span className="pct">
              {t.score}%
            </span>
          </div>
        ))}
      </div>

      <div className="intake-actions" style={{ marginTop: "3rem" }}>
        <Link className="btn btn-ghost" href={lang === "en" ? "/en/results" : "/sonuc"}>
          {lang === "en" ? "<- Back to Clinical Results" : "<- Klinik Sonuçlara Dön"}
        </Link>
      </div>
    </article>
  );
}
