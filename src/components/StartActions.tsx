"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  getResumeSnapshot,
  subscribeScan,
} from "@/lib/storage";
import type { Lang } from "@/lib/i18n/dict";

export function StartActions({ lang = "tr" }: { lang?: Lang }) {
  const hasResume = useSyncExternalStore(
    subscribeScan,
    getResumeSnapshot,
    () => false,
  );

  if (lang === "en") {
    return (
      <div className="intake-actions">
        <Link className="btn" href="/en/scan">
          {hasResume ? "Continue where you left off" : "Start screening"}
        </Link>
        <Link className="linkish" href="/en/scales">
          View clinical scales →
        </Link>
      </div>
    );
  }

  return (
    <div className="intake-actions">
      <Link className="btn" href="/tarama">
        {hasResume ? "Kaldığınız yerden devam edin" : "Taramayı başlat"}
      </Link>
      <Link className="linkish" href="/olcekler">
        Klinik ölçeklere bakın →
      </Link>
    </div>
  );
}
