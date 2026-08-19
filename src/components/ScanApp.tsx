"use client";

import { DIFFERENTIAL_BRANCHES } from "@/data/differentialQuestions";
import { A11yBar } from "@/components/A11yBar";
import { VisualBattery } from "@/components/VisualBattery";
import {
  applyBaseAnswer,
  applyDiffAnswer,
  applySkip,
  enterDiff,
  goBack,
} from "@/lib/flow";
import {
  answeredCount,
  createInitialState,
  currentDiffContext,
  questionBank,
  totalQuestionCount,
} from "@/lib/engine";
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
  confirmLabel = "Kaydet ve devam",
  skipLabel = "Bu maddeyi atla",
}: {
  questionId: string;
  options: string[];
  selected?: number;
  skippable?: boolean;
  onConfirm: (index: number) => void;
  onSkip?: () => void;
  onBack: () => void;
  backLabel?: string;
  confirmLabel?: string;
  skipLabel?: string;
}) {
  const [picked, setPicked] = useState<number | null>(
    selected !== undefined && selected >= 0 ? selected : null,
  );

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
      if (index !== undefined && index < options.length) setPicked(index);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [options.length]);

  return (
    <>
      <div className="opts" role="radiogroup" aria-label="Yanıt seçenekleri">
        {options.map((text, index) => (
          <button
            key={`${questionId}-${index}`}
            className="opt"
            type="button"
            role="radio"
            aria-checked={picked === index}
            onClick={() => setPicked(index)}
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
        <div className="intake-actions" style={{ marginTop: 0 }}>
          {skippable && onSkip ? (
            <button className="btn btn-ghost" type="button" onClick={onSkip}>
              {skipLabel}
            </button>
          ) : null}
          <button
            className="btn"
            type="button"
            disabled={picked === null}
            onClick={() => {
              if (picked !== null) onConfirm(picked);
            }}
          >
            {confirmLabel}
          </button>
        </div>
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

  const persist = useCallback(
    (next: ScanState) => {
      if (next.phase === "done") {
        saveResult(next);
        clearScan();
        router.push(resultsPath);
        return;
      }
      saveScan(next);
    },
    [router, resultsPath],
  );

  const current = useMemo(() => {
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
        stageLabel: "1. Aşama · Çatı tarama",
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
        stageLabel: `Ayırıcı · ${ctx.branch.title}`,
        questionId: question.id,
        skippable: false,
      };
    }
    return null;
  }, [state]);

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
        <p className="note">
          <a className="linkish" href={crisisPath}>
            {d.gate_crisis_link}
          </a>
        </p>
        <div className="intake-actions">
          <button
            className="btn"
            type="button"
            disabled={!ageOk || !crisisOk}
            onClick={() =>
              persist({
                ...createInitialState("adult"),
                phase: "base",
                startedAt: new Date().toISOString(),
              })
            }
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
        <h1>{lang === "en" ? "Paused. Take your time." : "Kayıt durdu. İstediğiniz kadar kalın."}</h1>
        <p className="lede">{lang === "en" ? "Your answers are saved. Take a breath." : "Cevaplarınız kayıtlı. İki dakika bakışlarınızı yumuşatın."}</p>
        <button className="btn" type="button" onClick={() => setPaused(false)}>
          {d.scan_resume}
        </button>
      </section>
    );
  }

  if (state.phase === "visual") {
    return (
      <>
        <A11yBar speakText={d.vis_lede} />
        <VisualBattery
          state={state}
          onChange={persist}
          onBack={() => persist(goBack(state))}
          lang={lang}
        />
      </>
    );
  }

  if (state.phase === "bridge") {
    const names = state.branches
      .map((id) => DIFFERENTIAL_BRANCHES[id]?.title)
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
          <p className="note">{lang === "en" ? "This item is sensitive. You can skip it — the score for that dimension will be incomplete, but there is no penalty." : "Bu madde hassas. Atlayabilirsiniz; skor o boyutta eksik kalır, ceza yazılmaz."}</p>
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
          confirmLabel={lang === "en" ? "Save & continue" : "Kaydet ve devam"}
          skipLabel={d.scan_skip}
        />
        <button className="linkish" type="button" onClick={() => setPaused(true)}>
          {d.scan_pause}
        </button>
      </section>
    </>
  );
}
