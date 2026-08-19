"use client";

import { BAND_LABEL, DIMENSION_META } from "@/lib/dimensions";
import { BAND_LABEL_EN, DIMENSION_META_EN } from "@/lib/dimensions.en";
import type { DimensionId } from "@/lib/types";
import type { Lang } from "@/lib/i18n/dict";
import Link from "next/link";
import { useSyncExternalStore } from "react";

type Payload = {
  v: number;
  a: string;
  r: { id: string; ratio: number; band: string }[];
  s: string[];
  b: string[];
};

let hashCache: string | undefined;
let payloadCache: Payload | "error" | null = null;

function subscribeHash(listener: () => void) {
  window.addEventListener("hashchange", listener);
  return () => window.removeEventListener("hashchange", listener);
}

function readShare(): Payload | "error" | null {
  if (typeof window === "undefined") return null;
  const hash = window.location.hash.replace(/^#/, "");
  if (hash === hashCache) return payloadCache;
  hashCache = hash;
  if (!hash) {
    payloadCache = "error";
    return payloadCache;
  }
  try {
    payloadCache = JSON.parse(decodeURIComponent(escape(atob(hash)))) as Payload;
  } catch {
    payloadCache = "error";
  }
  return payloadCache;
}

export function ShareView({ lang = "tr" }: { lang?: Lang }) {
  const data = useSyncExternalStore(subscribeHash, readShare, () => null);
  const dimMeta = lang === "en" ? DIMENSION_META_EN : DIMENSION_META;
  const bandLabel = lang === "en" ? BAND_LABEL_EN : BAND_LABEL;
  const homePath = lang === "en" ? "/en" : "/";

  if (!data || data === "error") {
    return (
      <section className="sheet report">
        <h1>{lang === "en" ? "Could not read link." : "Link okunamadı."}</h1>
        <p className="lede">
          {lang === "en"
            ? "Share links stay in the browser and never go to a server. The link may be incomplete or corrupted."
            : "Paylaşım adresi tarayıcıda, sunucuya gitmez. Eksik veya bozuk olabilir."}
        </p>
        <Link className="btn" href={homePath}>
          {lang === "en" ? "Home" : "Ana sayfa"}
        </Link>
      </section>
    );
  }

  return (
    <article className="sheet report">
      <p className="kicker">{lang === "en" ? "Shared profile · not a diagnosis" : "Paylaşılan profil · tanı değildir"}</p>
      <h1>{lang === "en" ? "Clinician summary (read-only)." : "Klinisyen özeti (salt okunur)."}</h1>
      <p className="lede">
        {data.a === "child"
          ? lang === "en" ? "Parent form." : "Ebeveyn formu."
          : lang === "en" ? "Adult form." : "Yetişkin formu."}{" "}
        {lang === "en"
          ? "This page does not save answers to a server."
          : "Bu sayfa cevapları sunucuya kaydetmez."}
      </p>
      <div className="bars">
        {data.r.map((row) => {
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
      {data.s.length ? (
        <p className="note">{lang === "en" ? "Subtype:" : "Alt tip:"} {data.s.join(" · ")}</p>
      ) : null}
      {data.b.length ? (
        <p className="note">{lang === "en" ? "Branches:" : "Dallar:"} {data.b.join(" · ")}</p>
      ) : null}
    </article>
  );
}
