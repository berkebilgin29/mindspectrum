"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import {
  clearScan,
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

  const scanPath = lang === "en" ? "/en/scan" : "/tarama";
  const freshPath = `${scanPath}?new=1`;
  const scalesPath = lang === "en" ? "/en/scales" : "/olcekler";

  if (lang === "en") {
    return (
      <div className="intake-actions">
        {hasResume ? (
          <>
            <Link className="btn" href={scanPath}>
              Continue where you left off
            </Link>
            <Link
              className="btn btn-ghost"
              href={freshPath}
              onClick={() => clearScan()}
            >
              Start over
            </Link>
          </>
        ) : (
          <Link className="btn" href={freshPath} onClick={() => clearScan()}>
            Start screening
          </Link>
        )}
        <Link className="linkish" href={scalesPath}>
          View clinical scales →
        </Link>
      </div>
    );
  }

  return (
    <div className="intake-actions">
      {hasResume ? (
        <>
          <Link className="btn" href={scanPath}>
            Kaldığınız yerden devam edin
          </Link>
          <Link
            className="btn btn-ghost"
            href={freshPath}
            onClick={() => clearScan()}
          >
            Yeniden başla
          </Link>
        </>
      ) : (
        <Link className="btn" href={freshPath} onClick={() => clearScan()}>
          Taramayı başlat
        </Link>
      )}
      <Link className="linkish" href={scalesPath}>
        Klinik ölçeklere bakın →
      </Link>
    </div>
  );
}
