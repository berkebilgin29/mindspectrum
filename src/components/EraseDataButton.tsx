"use client";

import { clearAllLocalData } from "@/lib/storage";
import type { Lang } from "@/lib/i18n/dict";
import { useState } from "react";

export function EraseDataButton({ lang = "tr" }: { lang?: Lang }) {
  const [done, setDone] = useState(false);

  return (
    <button
      className="btn btn-ghost"
      type="button"
      onClick={() => {
        clearAllLocalData();
        setDone(true);
      }}
    >
      {done
        ? lang === "en"
          ? "Data erased from this browser."
          : "Bu tarayıcıdaki veriler silindi"
        : lang === "en"
          ? "Erase my screening data from this device"
          : "Bu cihazdaki tarama verilerimi sil"}
    </button>
  );
}
