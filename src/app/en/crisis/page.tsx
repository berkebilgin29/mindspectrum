import { SiteShell } from "@/components/Header";
import { EN } from "@/lib/i18n/dict";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crisis resources · 9spectrum",
  robots: { index: true, follow: true },
  alternates: { canonical: "/en/crisis", languages: { tr: "/kriz" } },
};

const EN_CRISIS_LINES = [
  { name: "Emergency services", value: "112" },
  { name: "International Association for Suicide Prevention", value: "iasp.info" },
  { name: "Crisis Text Line (US/UK/IE/CA)", value: "Text HOME to 741741" },
  { name: "Samaritans (UK & Ireland)", value: "116 123" },
  { name: "988 Suicide & Crisis Lifeline (US)", value: "988" },
];

export default function EnCrisisPage() {
  return (
    <SiteShell lang="en">
      <main className="scales wrap">
        <article className="sheet report">
          <p className="kicker">{EN.crisis_kicker}</p>
          <h1>{EN.crisis_h1}</h1>
          <p className="lede">{EN.crisis_lede}</p>
          <ul className="crisis-list">
            {EN_CRISIS_LINES.map((line) => (
              <li key={line.value}>
                <strong>{line.name}</strong>
                <span>{line.value}</span>
              </li>
            ))}
          </ul>
          <p className="note">{EN.crisis_note}</p>
        </article>
      </main>
    </SiteShell>
  );
}
