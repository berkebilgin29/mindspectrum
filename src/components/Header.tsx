"use client";

import type { ReactNode } from "react";
import { useCallback, useState } from "react";
import Link from "next/link";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/site";
import { DICTS, type Lang } from "@/lib/i18n/dict";
import { TR_TO_EN, EN_TO_TR } from "@/lib/i18n/locale";
import { usePathname } from "next/navigation";
import { HtmlLang } from "@/components/HtmlLang";

type NavKey =
  | "home"
  | "scan"
  | "results"
  | "scales"
  | "faq"
  | "about"
  | "children"
  // legacy TR keys kept for backward compat
  | "tarama"
  | "sonuc"
  | "olcekler"
  | "sss"
  | "hakkinda"
  | "cocuklar";

type HeaderProps = {
  current?: NavKey;
  lang?: Lang;
};

function LangSwitcher({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const otherLang: Lang = lang === "tr" ? "en" : "tr";
  let target: string;
  if (lang === "tr") {
    target = TR_TO_EN[pathname] ?? "/en";
  } else {
    target = EN_TO_TR[pathname] ?? "/";
  }
  return (
    <Link
      href={target}
      className="lang-switch"
      aria-label={`Switch to ${otherLang === "en" ? "English" : "Türkçe"}`}
    >
      {otherLang === "en" ? "EN" : "TR"}
    </Link>
  );
}

export function Header({ current, lang = "tr" }: HeaderProps) {
  const d = DICTS[lang];
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((p) => !p), []);

  const base = lang === "en" ? "/en" : "";

  const navLinks = lang === "en"
    ? [
        { href: `${base}/scan`, keys: ["scan"], label: d.nav_adult },
        { href: `${base}/children`, keys: ["children"], label: d.nav_children },
        { href: `${base}/scales`, keys: ["scales"], label: d.nav_scales },
        { href: `${base}/faq`, keys: ["faq"], label: d.nav_faq },
        { href: `${base}/about`, keys: ["about"], label: d.nav_about },
      ]
    : [
        { href: "/tarama", keys: ["scan", "tarama"], label: d.nav_adult },
        { href: "/cocuklar", keys: ["children", "cocuklar"], label: d.nav_children },
        { href: "/olcekler", keys: ["scales", "olcekler"], label: d.nav_scales },
        { href: "/sss", keys: ["faq", "sss"], label: d.nav_faq },
        { href: "/hakkinda", keys: ["about", "hakkinda"], label: d.nav_about },
      ];

  return (
    <header className="letterhead wrap">
      <Link className="brand" href={lang === "en" ? "/en" : "/"}>
        <img
          className="brand-logo"
          src="/logo.png"
          alt={SITE_NAME}
          width={180}
          height={48}
        />
      </Link>
      <button
        className="menu-toggle"
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-label={lang === "en" ? "Toggle menu" : "Menüyü aç/kapat"}
      >
        <svg viewBox="0 0 24 24">
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      <nav className={`nav${open ? " open" : ""}`} aria-label={lang === "en" ? "Main navigation" : "Ana menü"}>
        {navLinks.map((link) => (
          <Link
            key={link.keys[0]}
            href={link.href}
            aria-current={current && link.keys.includes(current) ? "page" : undefined}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <LangSwitcher lang={lang} />
      </nav>
    </header>
  );
}

export function Footer({ lang = "tr" }: { lang?: Lang }) {
  const d = DICTS[lang];
  const year = new Date().getFullYear();
  const base = lang === "en" ? "/en" : "";
  return (
    <footer className="site-foot wrap">
      <p>{d.footer_disclaimer}</p>
      <nav className="foot-nav" aria-label={lang === "en" ? "Legal and help" : "Yasal ve yardım"}>
        <Link href={lang === "en" ? `${base}/disclaimer` : "/yasal-uyari"}>{d.footer_legal}</Link>
        <Link href={lang === "en" ? `${base}/privacy` : "/gizlilik"}>{d.footer_privacy}</Link>
        <Link href={lang === "en" ? `${base}/terms` : "/kullanim-sartlari"}>{d.footer_terms}</Link>
        <Link href={lang === "en" ? `${base}/children` : "/cocuklar"}>{d.footer_children}</Link>
        <Link href={lang === "en" ? `${base}/history` : "/gecmis"}>{d.footer_history}</Link>
        <Link href={lang === "en" ? `${base}/crisis` : "/kriz"}>{d.footer_crisis}</Link>
        <Link href={lang === "en" ? `${base}/contact` : "/iletisim"}>{d.footer_contact}</Link>
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </nav>
      <p className="foot-copy">
        © {year} {SITE_NAME}
      </p>
    </footer>
  );
}

export function SiteShell({
  children,
  current,
  lang = "tr",
}: {
  children: ReactNode;
  current?: NavKey;
  lang?: Lang;
}) {
  return (
    <>
      <HtmlLang lang={lang} />
      <a className="skip" href="#icerik">
        {lang === "en" ? "Skip to content" : "İçeriğe geç"}
      </a>
      <Header current={current} lang={lang} />
      <div id="icerik">{children}</div>
      <Footer lang={lang} />
    </>
  );
}
