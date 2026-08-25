"use client";

import { CONDITIONS_DATA } from "@/data/conditionsData";
import { CONDITIONS_DATA_EN } from "@/data/conditionsData.en";
import { BAND_LABEL, DIMENSION_META } from "@/lib/dimensions";
import { BAND_LABEL_EN, DIMENSION_META_EN } from "@/lib/dimensions.en";
import { DICTS, type Lang } from "@/lib/i18n/dict";
import { buildResult, crisisFlag } from "@/lib/engine";
import { AdSlot } from "@/components/AdSlot";
import { SocialShare } from "@/components/SocialShare";
import {
  clearChildResult,
  clearChildScan,
  clearResult,
  clearScan,
  getChildResultServerSnapshot,
  getChildResultSnapshot,
  getResultServerSnapshot,
  getResultSnapshot,
  subscribeChildResult,
  subscribeResult,
} from "@/lib/storage";
import Link from "next/link";
import { useMemo, useState, useSyncExternalStore } from "react";

export function ResultsView({
  kind = "adult",
  lang = "tr",
}: {
  kind?: "adult" | "child";
  lang?: Lang;
}) {
  const d = DICTS[lang];
  const condData = lang === "en" ? CONDITIONS_DATA_EN : CONDITIONS_DATA;
  const dimMeta = lang === "en" ? DIMENSION_META_EN : DIMENSION_META;
  const bandLabel = lang === "en" ? BAND_LABEL_EN : BAND_LABEL;
  const scanPath =
    kind === "child"
      ? lang === "en"
        ? "/en/children/scan"
        : "/cocuklar/tarama"
      : lang === "en"
        ? "/en/scan"
        : "/tarama";
  const historyPath = lang === "en" ? "/en/history" : "/gecmis";
  const crisisPath = lang === "en" ? "/en/crisis" : "/kriz";

  const state = useSyncExternalStore(
    kind === "child" ? subscribeChildResult : subscribeResult,
    kind === "child" ? getChildResultSnapshot : getResultSnapshot,
    kind === "child" ? getChildResultServerSnapshot : getResultServerSnapshot,
  );
  const [copied, setCopied] = useState(false);

  const result = useMemo(() => {
    if (!state) return null;
    try {
      return buildResult(state);
    } catch (error) {
      console.error("MindSpectrum: buildResult failed", error);
      return null;
    }
  }, [state]);

  if (!state || !result) {
    return (
      <section className="sheet report">
        <p className="kicker">{lang === "en" ? "No profile" : "Profil yok"}</p>
        <h1>{d.results_no_scan_h1}</h1>
        <p className="lede">{d.results_no_scan_lede}</p>
        <div className="intake-actions">
          <Link className="btn" href={scanPath}>
            {d.results_no_scan_btn}
          </Link>
        </div>
      </section>
    );
  }

  const top = result.ranked.filter((row) => row.band !== "dusuk");
  const showCrisis = crisisFlag(result.ranked);
  const summary = result.ranked
    .map(
      (row) =>
        `${dimMeta[row.id]?.label ?? row.id}: ${Math.round(row.ratio * 100)}% (${bandLabel[row.band]})`,
    )
    .join("\n");

  async function copySummary() {
    if (!result) return;
    const body = [
      lang === "en"
        ? "MindSpectrum spectrum profile — not a diagnosis."
        : "MindSpectrum spektrum profili — bu bir tanı değildir.",
      kind === "child"
        ? lang === "en"
          ? "Parent form."
          : "Ebeveyn formu."
        : lang === "en"
          ? "Adult form."
          : "Yetişkin formu.",
      "",
      summary,
      result.subtypeTags.length
        ? `\n${lang === "en" ? "Subtype" : "Alt tip"}: ${result.subtypeTags.join(", ")}`
        : "",
      result.branchesUsed.length
        ? `\n${lang === "en" ? "Differential modules" : "Ayırıcı modüller"}: ${result.branchesUsed.map((b) => b.title).join("; ")}`
        : "",
    ]
      .filter(Boolean)
      .join("\n");
    await navigator.clipboard.writeText(body);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  async function copyShare() {
    if (!result || !state) return;
    const payload = {
      v: 1,
      a: state.audience,
      r: result.ranked.map((row) => ({
        id: row.id,
        ratio: row.ratio,
        band: row.band,
      })),
      s: result.subtypeTags,
      b: result.branchesUsed.map((branch) => branch.title),
    };
    const hash = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    const sharePage = lang === "en" ? "/en/share" : "/paylas";
    const url = `${window.location.origin}${sharePage}#${hash}`;
    await navigator.clipboard.writeText(url);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <article className="sheet report">
      <p className="kicker">{d.results_kicker}</p>
      <h1>{d.results_h1}</h1>
      <p className="lede">{d.results_lede}</p>

      {result.uncertain.length > 0 ? (
        <p className="note">
          {d.results_uncertain_note}{" "}
          {result.uncertain.map((id) => dimMeta[id].short).join(", ")}
        </p>
      ) : null}

      {result.subtypeTags.length > 0 ? (
        <p className="note">
          {d.results_subtype_note} {result.subtypeTags.join(" · ")}
        </p>
      ) : null}

      <div className="bars" aria-label={d.results_bars_label}>
            {result.ranked.map((row) => (
          <div className={`bar-row ${row.band}`} key={row.id}>
            <strong>{dimMeta[row.id]?.short ?? row.id}</strong>
            <div className="bar-track">
              <div
                className="bar-fill"
                style={{ width: `${Math.round(Math.min(100, Math.max(0, row.ratio * 100)))}%` }}
              />
            </div>
            <span className="pct">
              {Math.round(Math.min(100, Math.max(0, row.ratio * 100)))}% ·{" "}
              {bandLabel[row.band]}
            </span>
          </div>
        ))}
      </div>

      {showCrisis ? (
        <aside className="crisis">
          <strong>{lang === "en" ? "Seek support." : "Destek alın."}</strong>{" "}
          {d.results_crisis_warning}{" "}
          <Link className="linkish" href={crisisPath}>
            {d.results_crisis_link}
          </Link>
        </aside>
      ) : null}

      <div className="cards">
        {top.slice(0, 4).map((row) => {
          const condition = condData[row.id];
          if (!condition) return null;
          return (
            <section className="card" key={row.id}>
              <p className="kicker">{condition.category}</p>
              <h2>{condition.name}</h2>
              <p className="scale">
                {condition.dsmCode} · {condition.clinicalScale}
              </p>
              <p>{condition.description}</p>
              <ul className="traits">
                {condition.coreTraits.slice(0, 4).map((trait) => (
                  <li key={trait}>{trait}</li>
                ))}
              </ul>
              {condition.overlappingWith.map((overlap) => {
                const other = result.ranked.find(
                  (item) => item.id === overlap.targetId,
                );
                if (!other || other.band === "dusuk") return null;
                return (
                  <div className="diff-box" key={overlap.targetId}>
                    <strong>
                      {overlap.targetName} {d.results_card_overlaps_with}
                    </strong>
                    <p>{overlap.distinctionSummary}</p>
                    <p>{overlap.keyDifferential}</p>
                  </div>
                );
              })}
              <p className="scale" style={{ marginTop: 16 }}>
                {d.results_card_discuss}
              </p>
              <ul className="traits">
                {condition.doctorDiscussionPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      {result.branchesUsed.length > 0 ? (
        <p className="note">
          {d.results_branches_used}{" "}
          {result.branchesUsed.map((branch) => branch.title).join(" · ")}
        </p>
      ) : (
        <p className="note">{d.results_no_branches}</p>
      )}

      <AdSlot slot="result-top" format="horizontal" />

      <SocialShare text={d.results_share_social} />

      <div className="intake-actions no-print">
        <button className="btn" type="button" onClick={() => window.print()}>
          {d.results_btn_print}
        </button>
        <button className="btn btn-ghost" type="button" onClick={copySummary}>
          {copied ? d.results_btn_copied : d.results_btn_copy}
        </button>
        <button className="btn btn-ghost" type="button" onClick={copyShare}>
          {d.results_btn_share}
        </button>
        <Link
          className="btn btn-ghost"
          href={scanPath}
          onClick={() => {
            if (kind === "child") {
              clearChildScan();
              clearChildResult();
            } else {
              clearScan();
              clearResult();
            }
          }}
        >
          {d.results_btn_new}
        </Link>
        <Link className="linkish" href={historyPath}>
          {d.results_link_history}
        </Link>
      </div>
      <section className="clinician">
        <h2>{d.results_clinician_title}</h2>
        <p>
          {d.results_clinician_date}{" "}
          {state.startedAt
            ? new Date(state.startedAt).toLocaleString(
                lang === "en" ? "en-GB" : "tr-TR",
              )
            : "—"}{" "}
          · {lang === "en" ? "Audience" : "Kitle"}:{" "}
          {state.audience === "child"
            ? d.results_clinician_audience_child
            : d.results_clinician_audience_adult}{" "}
          · {d.results_clinician_disclaimer}
        </p>
        <table className="clin-table">
          <thead>
            <tr>
              <th>{d.results_clinician_th_dim}</th>
              <th>{d.results_clinician_th_raw}</th>
              <th>{d.results_clinician_th_max}</th>
              <th>{d.results_clinician_th_pct}</th>
              <th>{d.results_clinician_th_band}</th>
            </tr>
          </thead>
          <tbody>
            {result.ranked.map((row) => (
              <tr key={row.id}>
                <td>{dimMeta[row.id]?.label ?? row.id}</td>
                <td>{row.score.toFixed(1)}</td>
                <td>{row.max.toFixed(1)}</td>
                <td>{Math.round(row.ratio * 100)}</td>
                <td>{bandLabel[row.band]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {result.branchesUsed.length > 0 ? (
          <p>
            {d.results_clinician_branches_used}{" "}
            {result.branchesUsed.map((b) => b.id).join(", ")}
          </p>
        ) : (
          <p>{d.results_clinician_branches_none}</p>
        )}
      </section>
    </article>
  );
}
