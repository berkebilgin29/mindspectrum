"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/i18n/dict";

/** Keeps <html lang> in sync for TR/EN routes under a single root layout. */
export function HtmlLang({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
