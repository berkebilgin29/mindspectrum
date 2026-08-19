"use client";

import { useEffect, useRef } from "react";
import { useConsent } from "./CookieConsent";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

type Props = {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal";
  className?: string;
};

const PUB_ID = process.env.NEXT_PUBLIC_ADSENSE_ID ?? "ca-pub-XXXXXXXXXXXXXXXX";

export function AdSlot({ slot, format = "auto", className = "" }: Props) {
  const consent = useConsent();
  const pushed = useRef(false);

  useEffect(() => {
    if (consent !== "all") return;
    if (pushed.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      pushed.current = true;
    } catch {}
  }, [consent]);

  if (consent !== "all") return null;
  if (PUB_ID.includes("XXXX")) return null;

  return (
    <div className={`ad-slot ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client={PUB_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
