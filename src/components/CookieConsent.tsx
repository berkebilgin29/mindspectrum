"use client";

import { useCallback, useSyncExternalStore } from "react";

const CONSENT_KEY = "ns_cookie_consent";

let listeners: (() => void)[] = [];
function emit() {
  listeners.forEach((l) => l());
}
function subscribe(cb: () => void) {
  listeners.push(cb);
  return () => {
    listeners = listeners.filter((l) => l !== cb);
  };
}

type Consent = "all" | "essential" | null;
let cache: Consent | undefined;

function getSnapshot(): Consent {
  if (cache !== undefined) return cache;
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    cache = v === "all" || v === "essential" ? v : null;
  } catch {
    cache = null;
  }
  return cache;
}

function getServerSnapshot(): Consent {
  return null;
}

function setConsent(v: "all" | "essential") {
  try {
    localStorage.setItem(CONSENT_KEY, v);
  } catch {}
  cache = v;
  emit();
}

export function useConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function CookieConsent() {
  const consent = useConsent();

  const acceptAll = useCallback(() => setConsent("all"), []);
  const acceptEssential = useCallback(() => setConsent("essential"), []);

  if (consent !== null) return null;

  return (
    <div className="consent-bar" role="dialog" aria-label="Çerez onayı">
      <p>
        Bu site işleyiş için zorunlu çerezler ve reklam/analitik için üçüncü
        taraf çerezleri kullanır. Tarama cevaplarınız sunucuya gönderilmez.
      </p>
      <div className="consent-actions">
        <button className="btn" type="button" onClick={acceptAll}>
          Tümünü kabul et
        </button>
        <button
          className="btn btn-ghost"
          type="button"
          onClick={acceptEssential}
        >
          Yalnızca zorunlu
        </button>
      </div>
    </div>
  );
}
