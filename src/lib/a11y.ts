export type A11yPrefs = {
  contrast: boolean;
  motion: boolean;
};

const KEY = "mindspectrum-a11y-v1";
const DEFAULT: A11yPrefs = { contrast: false, motion: false };
const listeners = new Set<() => void>();
let rawCache: string | null | undefined;
let snap: A11yPrefs = DEFAULT;

function read(): A11yPrefs {
  if (typeof window === "undefined") return DEFAULT;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw === rawCache) return snap;
    rawCache = raw;
    snap = raw ? ({ ...DEFAULT, ...JSON.parse(raw) } as A11yPrefs) : DEFAULT;
    return snap;
  } catch {
    return DEFAULT;
  }
}

export function subscribeA11y(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function getA11ySnapshot(): A11yPrefs {
  return read();
}

export function getA11yServerSnapshot(): A11yPrefs {
  return DEFAULT;
}

export function setA11y(next: A11yPrefs) {
  snap = next;
  rawCache = JSON.stringify(next);
  try {
    window.localStorage.setItem(KEY, rawCache);
  } catch {
    // ignore
  }
  document.documentElement.dataset.contrast = next.contrast ? "high" : "normal";
  document.documentElement.dataset.motion = next.motion ? "reduce" : "ok";
  listeners.forEach((listener) => listener());
}

export function applyA11yToDom(prefs: A11yPrefs) {
  if (typeof document === "undefined") return;
  document.documentElement.dataset.contrast = prefs.contrast ? "high" : "normal";
  document.documentElement.dataset.motion = prefs.motion ? "reduce" : "ok";
}

export function speak(text: string) {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "tr-TR";
  utterance.rate = 0.95;
  window.speechSynthesis.speak(utterance);
}

export function stopSpeak() {
  if (typeof window === "undefined") return;
  window.speechSynthesis?.cancel();
}
