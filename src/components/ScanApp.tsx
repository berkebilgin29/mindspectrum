"use client";

import { A11yBar } from "@/components/A11yBar";
import {
  applyBaseAnswer,
  applyDiffAnswer,
  applySkip,
  enterDiff,
  finishVisual,
  goBack,
} from "@/lib/flow";
import {
  answeredCount,
  createInitialState,
  currentAdaptiveQuestion,
  currentDiffContext,
  questionBank,
  totalQuestionCount,
} from "@/lib/engine";
import { buildInitialAdaptiveQueue, missingRequiredIds, usesAdaptiveFlow, validateQueue } from "@/lib/adaptive/selector";
import { resolveBranch } from "@/lib/adaptive/stage2";
import { DICTS, type Lang } from "@/lib/i18n/dict";
import { effectiveOptions } from "@/lib/options";
import {
  clearScan,
  getScanServerSnapshot,
  getScanSnapshot,
  saveResult,
  saveScan,
  subscribeScan,
} from "@/lib/storage";
import type { ScanState } from "@/lib/types";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";

const LETTERS = ["A", "B", "C", "D", "E"];

function OptionList({
  questionId,
  options,
  selected,
  skippable,
  onConfirm,
  onSkip,
  onBack,
  backLabel = "Geri",
  skipLabel = "Bu maddeyi atla",
  answerLabel = "Yanıt seçenekleri",
}: {
  questionId: string;
  options: string[];
  selected?: number;
  skippable?: boolean;
  onConfirm: (index: number) => void;
  onSkip?: () => void;
  onBack: () => void;
  backLabel?: string;
  skipLabel?: string;
  answerLabel?: string;
}) {
  const [flash, setFlash] = useState<number | null>(null);
  const [locking, setLocking] = useState(false);

  const pick = useCallback(
    (index: number) => {
      if (locking) return;
      setLocking(true);
      setFlash(index);
      window.setTimeout(() => {
        onConfirm(index);
        setFlash(null);
        setLocking(false);
      }, 200);
    },
    [locking, onConfirm],
  );

  useEffect(() => {
    setFlash(null);
    setLocking(false);
  }, [questionId]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const target = event.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA")) {
        return;
      }
      const map: Record<string, number> = {
        "1": 0,
        "2": 1,
        "3": 2,
        "4": 3,
        "5": 4,
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
      };
      const index = map[event.key.toLowerCase()];
      if (index !== undefined && index < options.length) pick(index);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [options.length, pick]);

  return (
    <>
      <div className="opts" role="radiogroup" aria-label={answerLabel}>
        {options.map((text, index) => (
          <button
            key={`${questionId}-${index}`}
            className={`opt${flash === index ? " opt-chosen" : ""}`}
            type="button"
            role="radio"
            aria-checked={flash === index || selected === index}
            disabled={locking}
            onClick={() => pick(index)}
          >
            <span className="mark">{LETTERS[index]}</span>
            <span>{text}</span>
          </button>
        ))}
      </div>
      <div className="scan-nav">
        <button className="btn btn-ghost" type="button" onClick={onBack}>
          {backLabel}
        </button>
        {skippable && onSkip ? (
          <button className="btn btn-ghost" type="button" onClick={onSkip}>
            {skipLabel}
          </button>
        ) : null}
      </div>
    </>
  );
}

export function ScanApp({ lang = "tr" }: { lang?: Lang }) {
  const d = DICTS[lang];
  const resultsPath = lang === "en" ? "/en/results" : "/sonuc";
  const crisisPath = lang === "en" ? "/en/crisis" : "/kriz";
  const childrenPath = lang === "en" ? "/en/children" : "/cocuklar";
  const router = useRouter();
  const state = useSyncExternalStore(
    subscribeScan,
    getScanSnapshot,
    getScanServerSnapshot,
  );
  const [paused, setPaused] = useState(false);
  const [ageOk, setAgeOk] = useState(false);
  const [crisisOk, setCrisisOk] = useState(false);
  const [legalOk, setLegalOk] = useState(false);
  const legalPath = lang === "en" ? "/en/disclaimer" : "/yasal-uyari";

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("new") === "1") {
      clearScan();
      window.history.replaceState({}, "", window.location.pathname);
    }
  }, []);

  const persist = useCallback(
    (next: ScanState) => {
      try {
        if (next.phase === "done") {
          const saved = saveResult(next);
          if (!saved && typeof window !== "undefined") {
            // Son çare: bellek + session yedeği zaten saveResult içinde;
            // yine de sonuç sayfasına geç — getResultSnapshot bellekten okur.
            console.warn("9spectrum: result storage write failed, using memory/session backup");
          }
          clearScan();
          router.push(resultsPath);
          return;
        }
        saveScan(next);
      } catch (error) {
        console.error("9spectrum: failed to persist scan", error);
        // Tamamlama cevabı kaybolduysa bile sonuç üretmeyi dene
        if (next.phase === "done") {
          try {
            saveResult(next);
            clearScan();
            router.push(resultsPath);
          } catch {
            // leave user on page with error UI below
          }
        }
      }
    },
    [router, resultsPath],
  );

  const current = useMemo(() => {
    if (state.phase === "base" && usesAdaptiveFlow(state)) {
      const question = currentAdaptiveQuestion(state, lang);
      if (!question) return null;
      return {
        category: question.category,
        question: question.question,
        subtitle: question.subtitle ?? "",
        options: question.options.map((option) => option.text),
        selected: state.answers[question.id],
        stageLabel:
          lang === "en"
            ? "Stage 1 · General screening"
            : "1. aşama · Genel tarama",
        questionId: question.id,
        skippable: question.skippable,
      };
    }
    const bank = questionBank(state.audience, lang);
    if (state.phase === "base") {
      const question = bank[state.baseIndex];
      if (!question) return null;
      return {
        category: question.category,
        question: question.question,
        subtitle: question.subtitle,
        options: effectiveOptions(question).map((option) => option.text),
        selected: state.answers[question.id],
        stageLabel:
          lang === "en"
            ? "Stage 1 · General screening"
            : "1. aşama · Genel tarama",
        questionId: question.id,
        skippable: question.skippable,
      };
    }
    if (state.phase === "diff") {
      const ctx = currentDiffContext(state);
      if (!ctx) return null;
      const question = ctx.branch.questions[ctx.questionIndex];
      if (!question) return null;
      return {
        category: question.category,
        question: question.question,
        subtitle: ctx.branch.reason,
        options: question.options.map((option) => option.text),
        selected: state.answers[question.id],
        stageLabel:
          lang === "en"
            ? `Differential · ${ctx.branch.title}`
            : `Ayırıcı · ${ctx.branch.title}`,
        questionId: question.id,
        skippable: false,
      };
    }
    return null;
  }, [state, lang]);

  const confirm = useCallback(
    (option: number) => {
      if (state.phase === "base") persist(applyBaseAnswer(state, option));
      if (state.phase === "diff") persist(applyDiffAnswer(state, option));
    },
    [persist, state],
  );

  const progress = Math.round(
    (answeredCount(state) / Math.max(1, totalQuestionCount(state))) * 100,
  );

  useEffect(() => {
    if (state.phase !== "visual") return;
    persist(finishVisual(state));
  }, [state.phase, state, persist]);

  if (state.phase === "intro") {
    return (
      <section className="sheet bridge">
        <p className="kicker">{d.gate_kicker}</p>
        <h1>{d.gate_h1}</h1>
        <p className="lede">
          {d.gate_lede}{" "}
          <a className="linkish" href={childrenPath}>
            {d.gate_children_link}
          </a>
        </p>
        <label className="check">
          <input
            type="checkbox"
            checked={ageOk}
            onChange={(event) => setAgeOk(event.target.checked)}
          />
          {d.gate_check_adult}
        </label>
        <label className="check">
          <input
            type="checkbox"
            checked={crisisOk}
            onChange={(event) => setCrisisOk(event.target.checked)}
          />
          {d.gate_check_crisis}
        </label>
        <label className="check">
          <input
            type="checkbox"
            checked={legalOk}
            onChange={(event) => setLegalOk(event.target.checked)}
          />
          <span>
            {d.gate_check_legal}{" "}
            <a className="linkish" href={legalPath} target="_blank" rel="noreferrer">
              {d.gate_legal_link}
            </a>
          </span>
        </label>
        <p className="note">
          <a className="linkish" href={crisisPath}>
            {d.gate_crisis_link}
          </a>
        </p>
        <div className="intake-actions">
          <button
            className="btn"
            type="button"
            disabled={!ageOk || !crisisOk || !legalOk}
            onClick={() => {
              const startedAt = new Date().toISOString();
              persist({
                ...createInitialState("adult"),
                phase: "base",
                startedAt,
                adaptiveQueue:
                  lang === "tr" ? buildInitialAdaptiveQueue(startedAt) : [],
              });
            }}
          >
            {d.gate_begin}
          </button>
        </div>
      </section>
    );
  }

  if (paused) {
    return (
      <section className="sheet bridge">
        <p className="kicker">{d.scan_pause}</p>
        <h1>{lang === "en" ? "Paused — take your time." : "Duraklatıldı. Acele etmeyin."}</h1>
        <p className="lede">{lang === "en" ? "Your answers are saved on this device." : "Cevaplarınız bu cihazda kayıtlı."}</p>
        <button className="btn" type="button" onClick={() => setPaused(false)}>
          {d.scan_resume}
        </button>
      </section>
    );
  }

  if (state.phase === "bridge") {
    const names = state.branches
      .map((id) => resolveBranch(id)?.title)
      .filter(Boolean);
    return (
      <section className="sheet bridge">
        <p className="kicker">{d.bridge_kicker}</p>
        <h1>{d.bridge_h1}</h1>
        <p className="lede">{d.bridge_lede}</p>
        <ul className="branch-list">
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <div className="intake-actions">
          <button className="btn" type="button" onClick={() => persist(enterDiff(state))}>
            {d.bridge_continue}
          </button>
          <button className="btn btn-ghost" type="button" onClick={() => persist(goBack(state))}>
            {d.scan_back}
          </button>
        </div>
      </section>
    );
  }

  if (!current) {
    // Kuyruk taşması: zorunlu sorular eksikse onarıp devam et; asla erken "done" yapma
    if (state.phase === "base" && usesAdaptiveFlow(state)) {
      return (
        <section className="sheet bridge">
          <p className="kicker">{d.bridge_kicker}</p>
          <h1>{lang === "en" ? "Something interrupted the session" : "Oturum kesintiye uğradı"}</h1>
          <p className="lede">
            {lang === "en"
              ? "Your answers are saved. Continue the screening — it is not finished yet."
              : "Cevaplarınız kayıtlı. Tarama bitmedi; kaldığınız yerden devam edin."}
          </p>
          <div className="intake-actions">
            <button
              className="btn"
              type="button"
              onClick={() => {
                const repaired = validateQueue(state);
                const missing = missingRequiredIds(repaired.answers);
                const queue =
                  missing.length > 0
                    ? [
                        ...repaired.adaptiveQueue,
                        ...missing.filter((id) => !repaired.adaptiveQueue.includes(id)),
                      ]
                    : repaired.adaptiveQueue;
                const nextIndex = Math.min(
                  repaired.baseIndex,
                  Math.max(0, queue.length - 1),
                );
                const unanswered = queue.findIndex(
                  (id, i) => i >= nextIndex && repaired.answers[id] === undefined,
                );
                persist({
                  ...repaired,
                  adaptiveQueue: queue,
                  baseIndex: unanswered >= 0 ? unanswered : nextIndex,
                  phase: "base",
                });
              }}
            >
              {lang === "en" ? "Continue screening" : "Taramaya devam et"}
            </button>
            <button className="btn btn-ghost" type="button" onClick={() => clearScan()}>
              {d.error_retry}
            </button>
          </div>
        </section>
      );
    }
    return (
      <section className="sheet bridge">
        <p className="kicker">{d.error_h1}</p>
        <h1>{lang === "en" ? "Could not read session." : "Kayıt okunamadı."}</h1>
        <button className="btn" type="button" onClick={() => clearScan()}>
          {d.error_retry}
        </button>
      </section>
    );
  }

  return (
    <>
      <div className="scan-top">
        <p className="kicker">{current.stageLabel}</p>
        <p className="meta-row">
          <span>
            {d.scan_progress} <b>{progress}%</b>
          </span>
          <span>
            {lang === "en" ? "Question" : "Soru"} <b>{answeredCount(state) + 1}</b> / {totalQuestionCount(state)}
          </span>
        </p>
      </div>
      <A11yBar speakText={`${current.question}. ${current.subtitle}`} />
      <div className="tide" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <section className="sheet q-sheet" key={current.questionId}>
        <p className="q-cat">{current.category}</p>
        <h1 className="q-title">{current.question}</h1>
        <p className="q-sub">{current.subtitle}</p>
        {current.skippable ? (
          <p className="note">{lang === "en" ? "This question can be sensitive. You may skip it — that dimension’s score will be incomplete." : "Bu soru hassas olabilir. Atlayabilirsiniz; o boyutta skor eksik kalır."}</p>
        ) : null}
        <OptionList
          key={current.questionId}
          questionId={current.questionId}
          options={current.options}
          selected={current.selected}
          skippable={current.skippable}
          onConfirm={confirm}
          onSkip={() => persist(applySkip(state))}
          onBack={() => persist(goBack(state))}
          backLabel={d.scan_back}
          skipLabel={d.scan_skip}
          answerLabel={d.scan_answer_label}
        />
        <button className="linkish" type="button" onClick={() => setPaused(true)}>
          {d.scan_pause}
        </button>
      </section>
    </>
  );
}
