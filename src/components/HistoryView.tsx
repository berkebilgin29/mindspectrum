"use client";

import { BAND_LABEL, DIMENSION_META } from "@/lib/dimensions";
import { BAND_LABEL_EN, DIMENSION_META_EN } from "@/lib/dimensions.en";
import { getHistorySnapshot, subscribeHistory } from "@/lib/storage";
import type { DimensionId } from "@/lib/types";
import type { Lang } from "@/lib/i18n/dict";
import Link from "next/link";
import { useSyncExternalStore } from "react";

function subscribe(listener: () => void) {
  return subscribeHistory(listener);
}

export function HistoryView({ lang = "tr" }: { lang?: Lang }) {
  const entries = useSyncExternalStore(subscribe, getHistorySnapshot, () => []);
  const dimMeta = lang === "en" ? DIMENSION_META_EN : DIMENSION_META;
  const bandLabel = lang === "en" ? BAND_LABEL_EN : BAND_LABEL;
  const locale = lang === "en" ? "en-GB" : "tr-TR";
  const scanPath = lang === "en" ? "/en/scan" : "/tarama";

  if (entries.length === 0) {
    return (
      <section className="sheet report">
        <p className="kicker">{lang === "en" ? "History" : "Geçmiş"}</p>
        <h1>{lang === "en" ? "No saved screenings." : "Kayıtlı tarama yok."}</h1>
        <p className="lede">
          {lang === "en"
            ? "Completed profiles are stored on this device. Repeat after 4–8 weeks to compare."
            : "Tamamlanan profiller bu cihazda tutulur. 4–8 hafta sonra tekrarı karşılaştırabilirsiniz."}
        </p>
        <Link className="btn" href={scanPath}>
          {lang === "en" ? "Adult screening" : "Yetişkin tarama"}
        </Link>
      </section>
    );
  }

  return (
    <article className="sheet report">
      <p className="kicker">{lang === "en" ? "History" : "Tekrar tarama"}</p>
      <h1>{lang === "en" ? "Profiles on this device." : "Bu cihazdaki profiller."}</h1>
      <p className="lede">
        {lang === "en"
          ? "Not a diagnosis. The line shows relative change over time in the same browser."
          : "Tanı değildir. Çizgi, aynı tarayıcıda zaman içindeki göreli değişimdir."}
      </p>
      {entries.map((entry) => (
        <section className="card" key={entry.at}>
          <p className="scale">
            {new Date(entry.at).toLocaleString(locale)} ·{" "}
            {entry.audience === "child"
              ? lang === "en" ? "child / parent" : "çocuk / ebeveyn"
              : lang === "en" ? "adult" : "yetişkin"}
          </p>
          <div className="bars">
            {entry.ranked.slice(0, 5).map((row) => {
              const id = row.id as DimensionId;
              return (
                <div className={`bar-row ${row.band}`} key={row.id}>
                  <strong>{dimMeta[id]?.short ?? row.id}</strong>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{ width: `${Math.round(row.ratio * 100)}%` }}
                    />
                  </div>
                  <span className="pct">
                    {Math.round(row.ratio * 100)}% ·{" "}
                    {bandLabel[row.band as keyof typeof bandLabel] ?? row.band}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </article>
  );
}
