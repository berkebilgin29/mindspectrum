import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteShell } from "@/components/Header";
import { CONDITIONS_DATA } from "@/data/conditionsData";
import { CONDITIONS_DATA_EN } from "@/data/conditionsData.en";
import type { Lang } from "@/lib/i18n/dict";
import { faqPageJsonLd, absoluteUrl } from "@/lib/seo";
import type { LandingConfig } from "@/lib/seo/landings";
import { LANDING_PAGES, landingPath } from "@/lib/seo/landings";

type Props = {
  config: LandingConfig;
  lang: Lang;
};

export function DimensionLandingPage({ config, lang }: Props) {
  const copy = lang === "tr" ? config.tr : config.en;
  const condition =
    lang === "tr"
      ? CONDITIONS_DATA[config.dimensionId]
      : CONDITIONS_DATA_EN[config.dimensionId];
  const scanPath = lang === "tr" ? "/tarama" : "/en/scan";
  const scalesPath = lang === "tr" ? "/olcekler" : "/en/scales";
  const faqPath = lang === "tr" ? "/sss" : "/en/faq";
  const otherLandings = LANDING_PAGES.filter((p) => p.dimensionId !== config.dimensionId).slice(0, 4);

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: lang === "tr" ? "Ana sayfa" : "Home",
        item: absoluteUrl(lang === "tr" ? "/" : "/en"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: copy.h1,
        item: absoluteUrl(landingPath(config, lang)),
      },
    ],
  };

  return (
    <SiteShell lang={lang}>
      <JsonLd data={faqPageJsonLd(copy.faq)} />
      <JsonLd data={breadcrumb} />
      <main className="home wrap">
        <section className="sheet intake">
          <p className="kicker">
            {lang === "tr" ? "Adaptif tarama · ücretsiz · tanı değil" : "Adaptive · free · not a diagnosis"}
          </p>
          <h1 className="display intake-title">{copy.h1}</h1>
          <p className="lede">{copy.lede}</p>
          <div className="intake-actions">
            <Link className="btn" href={scanPath}>
              {copy.cta}
            </Link>
            <Link className="linkish" href={scalesPath}>
              {condition.clinicalScale}
            </Link>
          </div>
          <p className="note" style={{ marginTop: 16 }}>
            <strong>{condition.shortName}</strong> · {condition.dsmCode}
            <br />
            {condition.tagline}
          </p>
        </section>

        <section className="sheet report home-seo">
          <h2>{copy.adaptiveTitle}</h2>
          <p className="lede">{copy.adaptiveBody}</p>
          <ul className="landing-features">
            <li>
              {lang === "tr"
                ? "9 boyut tek oturumda taranır — yalnızca DEHB değil"
                : "Nine dimensions in one session — not ADHD-only"}
            </li>
            <li>
              {lang === "tr"
                ? "İki boyut yakınsa ayırıcı sorular otomatik açılır"
                : "Differential questions open when two dimensions score close"}
            </li>
            <li>
              {lang === "tr"
                ? "12–20 dk · cevaplar sunucuya gitmez · hekim özeti alınabilir"
                : "12–20 min · no server upload · clinician summary available"}
            </li>
          </ul>
          <p>{condition.description}</p>
        </section>

        {condition.overlappingWith.length > 0 && (
          <section className="how">
            <div>
              <h2>{lang === "tr" ? "Karışabilir boyutlar" : "Can overlap with"}</h2>
              <p className="lede" style={{ marginTop: 12 }}>
                {lang === "tr"
                  ? "9spectrum yalnızca tek bir test değil; örtüşen eğilimlerde kökeni netleştirmeye çalışır."
                  : "9spectrum is not a single-label quiz — it clarifies source when tendencies overlap."}
              </p>
            </div>
            <div>
              {condition.overlappingWith.slice(0, 3).map((overlap) => {
                const other = LANDING_PAGES.find(
                  (p) => p.dimensionId === overlap.targetId,
                );
                return (
                  <div className="step" key={overlap.targetId}>
                    <strong>{overlap.targetName}</strong>
                    {overlap.distinctionSummary}
                    {other ? (
                      <>
                        {" "}
                        <Link className="linkish" href={landingPath(other, lang)}>
                          {lang === "tr" ? "İlgili test →" : "Related screen →"}
                        </Link>
                      </>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        <section className="sheet report">
          <h2>{lang === "tr" ? "Sık sorulan sorular" : "FAQ"}</h2>
          <dl className="faq">
            {copy.faq.map((item) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
          <p className="note">
            <Link className="linkish" href={faqPath}>
              {lang === "tr" ? "Tüm SSS" : "Full FAQ"}
            </Link>
          </p>
        </section>

        <section className="sheet intake landing-cta">
          <h2 className="display" style={{ fontSize: 26 }}>
            {lang === "tr" ? "Hazırsanız başlayın" : "Ready to start?"}
          </h2>
          <p className="lede">
            {lang === "tr"
              ? "Sabit test listesi yok. Cevaplarınıza göre sistem sonuca yaklaşmak için soruları değiştirir. Hesap yok; istediğiniz zaman duraklatın."
              : "No fixed quiz list. Based on your answers, the system changes questions to home in on the result. No account; pause any time."}
          </p>
          <Link className="btn" href={`${scanPath}?new=1`}>
            {copy.cta}
          </Link>
        </section>

        <nav className="landing-related" aria-label={lang === "tr" ? "Diğer testler" : "Other screens"}>
          <p className="kicker">{lang === "tr" ? "Diğer taramalar" : "Other screenings"}</p>
          <ul>
            {otherLandings.map((p) => (
              <li key={p.dimensionId}>
                <Link href={landingPath(p, lang)}>
                  {lang === "tr" ? p.tr.h1.split("—")[0].trim() : p.en.h1.split("—")[0].trim()}
                </Link>
              </li>
            ))}
            <li>
              <Link href={lang === "tr" ? "/olcekler" : "/en/scales"}>
                {lang === "tr" ? "Tüm ölçekler →" : "All scales →"}
              </Link>
            </li>
          </ul>
        </nav>
      </main>
    </SiteShell>
  );
}
