"use client";

import { DIFFERENTIAL_BRANCHES } from "@/data/differentialQuestions";
import { A11yBar } from "@/components/A11yBar";
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
import { effectiveOptions } from "@/lib/options";
import {
  clearChildScan,
  getChildScanServerSnapshot,
  getChildScanSnapshot,
  saveChildResult,
  saveChildScan,
  subscribeChildScan,
} from "@/lib/storage";
import type { ScanState } from "@/lib/types";
import type { Lang } from "@/lib/i18n/dict";
import { useRouter } from "next/navigation";
import { useCallback, useMemo, useState, useSyncExternalStore } from "react";

const LETTERS = ["A", "B", "C", "D", "E"];

function ChildPick({
  questionId,
  options,
  selected,
  skippable,
  onConfirm,
  onSkip,
  onBack,
  backLabel = "Geri",
  skipLabel = "Atla",
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

  return (
    <>
      <div className="opts" role="radiogroup">
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

export function ChildScanApp({ lang = "tr" }: { lang?: Lang }) {
  const resultsPath = lang === "en" ? "/en/children/results" : "/cocuklar/sonuc";
  const router = useRouter();
  const state = useSyncExternalStore(
    subscribeChildScan,
    getChildScanSnapshot,
    getChildScanServerSnapshot,
  );
  const [paused, setPaused] = useState(false);
  const [guardian, setGuardian] = useState(false);
  const [crisisOk, setCrisisOk] = useState(false);

  const persist = useCallback(
    (next: ScanState) => {
      if (next.phase === "done") {
        saveChildResult(next);
        clearChildScan();
        router.push(resultsPath);
        return;
      }
      saveChildScan(next);
    },
    [router],
  );

  const current = useMemo(() => {
    const bank = questionBank("child", lang);
    if (state.phase === "base") {
      const question = bank[state.baseIndex];
      if (!question) return null;
      return {
        category: question.category,
        question: question.question,
        subtitle: question.subtitle,
        options: effectiveOptions(question).map((option) => option.text),
        selected: state.answers[question.id],
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
        <p className="kicker">Kapı · ebeveyn tarama</p>
        <h1>Çocuk adına doldurulur. Tanı değildir.</h1>
        <p className="lede">
          6–17 yaş için ebeveyn / bakıcı formu. Çocuğun yanında, yargılamadan,
          son birkaç haftayı düşünerek yanıtlayın. İstismar şüphesinde tarama
          değil, 183 ve yetkili kurumlar.
        </p>
        <label className="check">
          <input
            type="checkbox"
            checked={guardian}
            onChange={(event) => setGuardian(event.target.checked)}
          />
          Çocuğun ebeveyni veya yasal bakıcısıyım.
        </label>
        <label className="check">
          <input
            type="checkbox"
            checked={crisisOk}
            onChange={(event) => setCrisisOk(event.target.checked)}
          />
          Çocuk şu an acil tehlikede değil; acil durumda 112’ye giderim.
        </label>
        <div className="intake-actions">
          <button
            className="btn"
            type="button"
            disabled={!guardian || !crisisOk}
            onClick={() =>
              persist({
                ...createInitialState("child"),
                phase: "base",
              })
            }
          >
            Forma başla
          </button>
        </div>
      </section>
    );
  }

  if (paused) {
    return (
      <section className="sheet bridge">
        <h1>Mola.</h1>
        <button className="btn" type="button" onClick={() => setPaused(false)}>
          Devam
        </button>
      </section>
    );
  }

  if (state.phase === "bridge") {
    const names = state.branches
      .map((id) => DIFFERENTIAL_BRANCHES[id]?.title)
      .filter(Boolean);
    return (
      <section className="sheet bridge">
        <p className="kicker">Ayırıcı</p>
        <h1>Örtüşen belirtiler var.</h1>
        <ul className="branch-list">
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        <button className="btn" type="button" onClick={() => persist(enterDiff(state))}>
          Devam
        </button>
      </section>
    );
  }

  if (!current) {
    return (
      <section className="sheet bridge">
        <h1>Kayıt okunamadı.</h1>
        <button className="btn" type="button" onClick={() => clearChildScan()}>
          Sıfırla
        </button>
      </section>
    );
  }

  return (
    <>
      <div className="scan-top">
        <p className="kicker">Ebeveyn formu</p>
        <p className="meta-row">
          <span>
            {progress}% · {answeredCount(state) + 1}/{totalQuestionCount(state)}
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
        <ChildPick
          questionId={current.questionId}
          options={current.options}
          selected={current.selected}
          skippable={current.skippable}
          onConfirm={confirm}
          onSkip={() => persist(applySkip(state))}
          onBack={() => persist(goBack(state))}
        />
        <button className="linkish" type="button" onClick={() => setPaused(true)}>
          Mola
        </button>
      </section>
    </>
  );
}
