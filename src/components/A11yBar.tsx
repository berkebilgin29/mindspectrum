"use client";

import {
  applyA11yToDom,
  getA11yServerSnapshot,
  getA11ySnapshot,
  setA11y,
  speak,
  stopSpeak,
  subscribeA11y,
} from "@/lib/a11y";
import { useEffect, useSyncExternalStore } from "react";

export function A11yBar({ speakText }: { speakText?: string }) {
  const prefs = useSyncExternalStore(
    subscribeA11y,
    getA11ySnapshot,
    getA11yServerSnapshot,
  );

  useEffect(() => {
    applyA11yToDom(prefs);
  }, [prefs]);

  return (
    <div className="a11y-bar no-print">
      <button
        className="btn btn-ghost"
        type="button"
        onClick={() => setA11y({ ...prefs, contrast: !prefs.contrast })}
      >
        {prefs.contrast ? "Kontrast açık" : "Yüksek kontrast"}
      </button>
      <button
        className="btn btn-ghost"
        type="button"
        onClick={() => setA11y({ ...prefs, motion: !prefs.motion })}
      >
        {prefs.motion ? "Hareket kapalı" : "Hareketi azalt"}
      </button>
      {speakText ? (
        <>
          <button
            className="btn btn-ghost"
            type="button"
            onClick={() => speak(speakText)}
          >
            Sesli oku
          </button>
          <button className="btn btn-ghost" type="button" onClick={stopSpeak}>
            Sesi durdur
          </button>
        </>
      ) : null}
    </div>
  );
}
