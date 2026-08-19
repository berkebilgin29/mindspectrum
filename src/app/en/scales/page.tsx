import { CONDITIONS_DATA_EN } from "@/data/conditionsData.en";
import { SiteShell } from "@/components/Header";
import { DIMENSIONS } from "@/lib/types";
import { EN } from "@/lib/i18n/dict";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clinical scales · MindSpectrum",
  alternates: { canonical: "/en/scales", languages: { tr: "/olcekler" } },
};

export default function EnScalesPage() {
  return (
    <SiteShell current="scales" lang="en">
      <main className="scales wrap">
        <section className="sheet report">
          <p className="kicker">{EN.scales_kicker}</p>
          <h1>{EN.scales_h1}</h1>
          <p className="lede">{EN.scales_lede}</p>
          <dl className="scale-grid">
            {EN.scales_items.map((scale) => (
              <div className="scale-item" key={scale.id}>
                <dt>{scale.id}</dt>
                <dd>{scale.body}</dd>
              </div>
            ))}
          </dl>
          <h2 className="display" style={{ fontSize: 28, marginTop: 36, fontWeight: 500 }}>
            {EN.scales_dict_h2}
          </h2>
          <dl className="scale-grid">
            {DIMENSIONS.map((id) => {
              const condition = CONDITIONS_DATA_EN[id];
              return (
                <div className="scale-item" key={id}>
                  <dt>{condition.shortName}</dt>
                  <dd>
                    <strong>{condition.name}</strong>
                    <br />
                    {condition.dsmCode} · {condition.clinicalScale}
                    <br />
                    {condition.tagline}
                  </dd>
                </div>
              );
            })}
          </dl>
        </section>
      </main>
    </SiteShell>
  );
}
