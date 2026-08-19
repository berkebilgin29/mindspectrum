import { EraseDataButton } from "@/components/EraseDataButton";
import { SiteShell } from "@/components/Header";
import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy · MindSpectrum",
  alternates: { canonical: "/en/privacy", languages: { tr: "/gizlilik" } },
};

export default function EnPrivacyPage() {
  return (
    <SiteShell lang="en">
      <main className="scales wrap">
        <article className="sheet report prose">
          <p className="kicker">GDPR / Privacy</p>
          <h1>Privacy notice</h1>
          <p>
            {SITE_NAME} does not require an account, does not save screening
            answers to a server, and does not build advertising profiles. Answers
            are stored in your browser's local storage (localStorage).
          </p>
          <h2>Data processed</h2>
          <p>
            Screening selections and the generated profile remain on your device
            only. Printing or copying is your action. The hosting provider (e.g.
            Vercel) may retain technical connection logs (IP, browser, time);
            these logs do not include screening content.
          </p>
          <h2>Cookies and advertising</h2>
          <p>
            The site stores a preference cookie (essential). If you choose
            "Accept all", Google Analytics (anonymous usage statistics) and
            Google AdSense (personalised advertising) cookies are activated.
            If you choose "Essential only", no third-party cookies are loaded.
            Your screening answers are never sent to a server under any scenario.
          </p>
          <h2>Your rights</h2>
          <p>
            To delete the screening record on your device, use the button below
            or clear browser data. For requests: {CONTACT_EMAIL}. Site:{" "}
            {SITE_URL}
          </p>
          <EraseDataButton lang="en" />
        </article>
      </main>
    </SiteShell>
  );
}
