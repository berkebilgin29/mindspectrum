import { buildResult, emptyScores } from "@/lib/engine";
import { emptyVisual } from "@/lib/visual";
import type { ScanState } from "@/lib/types";

const SCAN_KEY = "9spectrum-scan-v3";
const RESULT_KEY = "9spectrum-result-v3";
const RESULT_BACKUP_KEY = "9spectrum-result-backup-v3";

export const EMPTY_SCAN: ScanState = {
  phase: "intro",
  baseIndex: 0,
  answers: {},
  scores: emptyScores(),
  branches: [],
  branchIndex: 0,
  diffQuestionIndex: 0,
  subtypeTags: [],
  startedAt: "",
  skipped: [],
  visualIndex: 0,
  visual: emptyVisual(),
  audience: "adult",
  adaptiveQueue: [],
  crossMatchApplied: [],
  axisScores: {},
};

type Listener = () => void;

const scanListeners = new Set<Listener>();
const resultListeners = new Set<Listener>();

async function syncResultToServer(state: ScanState) {
  if (typeof window === "undefined") return;
  try {
    const result = buildResult(state);
    const payload = {
      audience: state.audience,
      scores: result.ranked.reduce(
        (acc, row) => ({ ...acc, [row.id]: row.ratio }),
        {}
      ),
      branches_used: result.branchesUsed.map((b) => b.id),
    };

    fetch("/api/save-scan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch(() => {
      // sessizce yut
    });
  } catch (err) {
    // sessizce yut
  }
}

let scanRaw: string | null | undefined;
let scanSnapshot: ScanState = EMPTY_SCAN;
let resultRaw: string | null | undefined;
let resultSnapshot: ScanState | null = null;

function isScanState(value: unknown): value is ScanState {
  if (!value || typeof value !== "object") return false;
  const state = value as ScanState;
  return (
    typeof state.phase === "string" &&
    typeof state.baseIndex === "number" &&
    Boolean(state.answers) &&
    Boolean(state.scores)
  );
}

function readItem(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeItem(key: string, value: string | null): boolean {
  try {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function writeSession(key: string, value: string | null): boolean {
  try {
    if (value === null) window.sessionStorage.removeItem(key);
    else window.sessionStorage.setItem(key, value);
    return true;
  } catch {
    return false;
  }
}

function readSession(key: string): string | null {
  try {
    return window.sessionStorage.getItem(key);
  } catch {
    return null;
  }
}

function parseScan(raw: string | null): ScanState {
  if (!raw) return EMPTY_SCAN;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!isScanState(parsed)) return EMPTY_SCAN;
    if (parsed.phase === "done") return EMPTY_SCAN;
    return {
      ...EMPTY_SCAN,
      ...parsed,
      skipped: parsed.skipped ?? [],
      visualIndex: parsed.visualIndex ?? 0,
      visual: parsed.visual ?? emptyVisual(),
      audience: parsed.audience ?? "adult",
      adaptiveQueue: parsed.adaptiveQueue ?? [],
      crossMatchApplied: parsed.crossMatchApplied ?? [],
      axisScores: parsed.axisScores ?? {},
    };
  } catch {
    return EMPTY_SCAN;
  }
}

function parseResult(raw: string | null): ScanState | null {
  if (!raw) return null;
  try {
    const parsed: unknown = JSON.parse(raw);
    return isScanState(parsed)
      ? {
          ...EMPTY_SCAN,
          ...parsed,
          skipped: parsed.skipped ?? [],
          visual: parsed.visual ?? emptyVisual(),
          audience: parsed.audience ?? "adult",
          adaptiveQueue: parsed.adaptiveQueue ?? [],
          crossMatchApplied: parsed.crossMatchApplied ?? [],
          axisScores: parsed.axisScores ?? {},
        }
      : null;
  } catch {
    return null;
  }
}

export function subscribeScan(listener: Listener) {
  scanListeners.add(listener);
  return () => {
    scanListeners.delete(listener);
  };
}

export function subscribeResult(listener: Listener) {
  resultListeners.add(listener);
  return () => {
    resultListeners.delete(listener);
  };
}

export function getScanSnapshot(): ScanState {
  if (typeof window === "undefined") return EMPTY_SCAN;
  const raw = readItem(SCAN_KEY);
  if (raw === scanRaw) return scanSnapshot;
  scanRaw = raw;
  scanSnapshot = parseScan(raw);
  return scanSnapshot;
}

export function getScanServerSnapshot(): ScanState {
  return EMPTY_SCAN;
}

export function getResultSnapshot(): ScanState | null {
  if (typeof window === "undefined") return null;
  const raw =
    readItem(RESULT_KEY) ??
    readSession(RESULT_BACKUP_KEY) ??
    readSession(RESULT_KEY);
  // localStorage yazımı başarısız olsa bile bellek/session yedeğini koru
  if (raw === null && resultSnapshot) return resultSnapshot;
  if (raw === resultRaw) return resultSnapshot;
  resultRaw = raw;
  const parsed = parseResult(raw);
  if (parsed) resultSnapshot = parsed;
  else if (!resultSnapshot) resultSnapshot = null;
  return resultSnapshot;
}

export function getResultServerSnapshot(): ScanState | null {
  return null;
}

export function getResumeSnapshot(): boolean {
  const state = getScanSnapshot();
  return (
    state.phase !== "intro" &&
    state.phase !== "done" &&
    Object.keys(state.answers).length > 0
  );
}

export function saveScan(state: ScanState) {
  scanSnapshot = state;
  scanRaw = JSON.stringify(state);
  if (typeof window !== "undefined") writeItem(SCAN_KEY, scanRaw);
  scanListeners.forEach((listener) => listener());
}

export function clearScan() {
  scanSnapshot = EMPTY_SCAN;
  scanRaw = null;
  if (typeof window !== "undefined") writeItem(SCAN_KEY, null);
  scanListeners.forEach((listener) => listener());
}

export function saveResult(state: ScanState): boolean {
  const raw = JSON.stringify(state);
  resultSnapshot = state;
  resultRaw = raw;
  let ok = true;
  if (typeof window !== "undefined") {
    const localOk = writeItem(RESULT_KEY, raw);
    const sessionOk =
      writeSession(RESULT_BACKUP_KEY, raw) || writeSession(RESULT_KEY, raw);
    ok = localOk || sessionOk;
  }
  try {
    pushHistory(state);
    syncResultToServer(state);
  } catch {
    // geçmiş yazılamasa bile sonuç ekranı bozulmasın
  }
  resultListeners.forEach((listener) => listener());
  return ok;
}

export function clearResult() {
  resultSnapshot = null;
  resultRaw = null;
  if (typeof window !== "undefined") {
    writeItem(RESULT_KEY, null);
    writeSession(RESULT_BACKUP_KEY, null);
    writeSession(RESULT_KEY, null);
  }
  resultListeners.forEach((listener) => listener());
}

export function clearAllLocalData() {
  clearScan();
  clearResult();
  clearChildScan();
  clearChildResult();
  writeItem(HISTORY_KEY, null);
  historySnapshot = [];
  historyRaw = null;
}

const CHILD_SCAN_KEY = "9spectrum-child-scan-v1";
const CHILD_RESULT_KEY = "9spectrum-child-result-v1";
const HISTORY_KEY = "9spectrum-history-v1";

export const EMPTY_CHILD_SCAN: ScanState = {
  ...EMPTY_SCAN,
  audience: "child",
};

const childScanListeners = new Set<Listener>();
const childResultListeners = new Set<Listener>();
let childScanRaw: string | null | undefined;
let childScanSnapshot: ScanState = EMPTY_CHILD_SCAN;
let childResultRaw: string | null | undefined;
let childResultSnapshot: ScanState | null = null;
let historyRaw: string | null | undefined;
let historySnapshot: HistoryEntry[] = [];

export type HistoryEntry = {
  at: string;
  audience: "adult" | "child";
  ranked: { id: string; ratio: number; band: string }[];
};

function parseChildScan(raw: string | null): ScanState {
  if (!raw) return EMPTY_CHILD_SCAN;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!isScanState(parsed) || parsed.phase === "done") return EMPTY_CHILD_SCAN;
    return {
      ...EMPTY_CHILD_SCAN,
      ...parsed,
      skipped: parsed.skipped ?? [],
      audience: "child",
    };
  } catch {
    return EMPTY_CHILD_SCAN;
  }
}

export function subscribeChildScan(listener: Listener) {
  childScanListeners.add(listener);
  return () => {
    childScanListeners.delete(listener);
  };
}

export function subscribeChildResult(listener: Listener) {
  childResultListeners.add(listener);
  return () => {
    childResultListeners.delete(listener);
  };
}

export function getChildScanSnapshot(): ScanState {
  if (typeof window === "undefined") return EMPTY_CHILD_SCAN;
  const raw = readItem(CHILD_SCAN_KEY);
  if (raw === childScanRaw) return childScanSnapshot;
  childScanRaw = raw;
  childScanSnapshot = parseChildScan(raw);
  return childScanSnapshot;
}

export function getChildScanServerSnapshot(): ScanState {
  return EMPTY_CHILD_SCAN;
}

export function getChildResultSnapshot(): ScanState | null {
  if (typeof window === "undefined") return null;
  const raw =
    readItem(CHILD_RESULT_KEY) ?? readSession(`backup:${CHILD_RESULT_KEY}`);
  if (raw === null && childResultSnapshot) return childResultSnapshot;
  if (raw === childResultRaw) return childResultSnapshot;
  childResultRaw = raw;
  const parsed = parseResult(raw);
  if (parsed) childResultSnapshot = parsed;
  else if (!childResultSnapshot) childResultSnapshot = null;
  return childResultSnapshot;
}

export function getChildResultServerSnapshot(): ScanState | null {
  return null;
}

export function getChildResumeSnapshot(): boolean {
  const state = getChildScanSnapshot();
  return (
    state.phase !== "intro" &&
    state.phase !== "done" &&
    Object.keys(state.answers).length > 0
  );
}

export function saveChildScan(state: ScanState) {
  childScanSnapshot = state;
  childScanRaw = JSON.stringify(state);
  if (typeof window !== "undefined") writeItem(CHILD_SCAN_KEY, childScanRaw);
  childScanListeners.forEach((listener) => listener());
}

export function clearChildScan() {
  childScanSnapshot = EMPTY_CHILD_SCAN;
  childScanRaw = null;
  if (typeof window !== "undefined") writeItem(CHILD_SCAN_KEY, null);
  childScanListeners.forEach((listener) => listener());
}

export function saveChildResult(state: ScanState): boolean {
  const raw = JSON.stringify(state);
  childResultSnapshot = state;
  childResultRaw = raw;
  let ok = true;
  if (typeof window !== "undefined") {
    const localOk = writeItem(CHILD_RESULT_KEY, raw);
    const sessionOk = writeSession(`backup:${CHILD_RESULT_KEY}`, raw);
    ok = localOk || sessionOk;
  }
  try {
    pushHistory(state);
    syncResultToServer(state);
  } catch {
    // ignore
  }
  childResultListeners.forEach((listener) => listener());
  return ok;
}

export function clearChildResult() {
  childResultSnapshot = null;
  childResultRaw = null;
  if (typeof window !== "undefined") writeItem(CHILD_RESULT_KEY, null);
  childResultListeners.forEach((listener) => listener());
}

function pushHistory(state: ScanState) {
  if (typeof window === "undefined") return;
  const ranked = buildResult(state).ranked.map((row) => ({
    id: row.id,
    ratio: row.ratio,
    band: row.band,
  }));
  const entry: HistoryEntry = {
    at: new Date().toISOString(),
    audience: state.audience,
    ranked,
  };
  const next = [entry, ...getHistorySnapshot()].slice(0, 12);
  historySnapshot = next;
  historyRaw = JSON.stringify(next);
  writeItem(HISTORY_KEY, historyRaw);
}

export function getHistorySnapshot(): HistoryEntry[] {
  if (typeof window === "undefined") return [];
  const raw = readItem(HISTORY_KEY);
  if (raw === historyRaw && historyRaw !== undefined) return historySnapshot;
  historyRaw = raw;
  try {
    historySnapshot = raw ? (JSON.parse(raw) as HistoryEntry[]) : [];
  } catch {
    historySnapshot = [];
  }
  return historySnapshot;
}

export function subscribeHistory(listener: Listener) {
  resultListeners.add(listener);
  childResultListeners.add(listener);
  return () => {
    resultListeners.delete(listener);
    childResultListeners.delete(listener);
  };
}

export const loadScan = getScanSnapshot;
export const loadResult = getResultSnapshot;
export function freshOrResume(): ScanState {
  return getScanSnapshot();
}
