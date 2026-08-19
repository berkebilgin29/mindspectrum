"use client";

import { useEffect, useRef, useState } from "react";
import type { ScanState, VisualReport } from "@/lib/types";
import { getA11ySnapshot } from "@/lib/a11y";
import { DICTS, type Lang } from "@/lib/i18n/dict";
import { finishVisual } from "@/lib/flow";

const LETTERS = ["A", "E", "G", "H", "K", "M", "N", "R", "S", "T"];

function randomLetter(target: boolean) {
  if (target) return "K";
  let letter = "A";
  do {
    letter = LETTERS[Math.floor(Math.random() * LETTERS.length)];
  } while (letter === "K");
  return letter;
}

export function VisualBattery({
  state,
  onChange,
  onBack,
  lang = "tr",
}: {
  state: ScanState;
  onChange: (next: ScanState) => void;
  onBack: () => void;
  lang?: Lang;
}) {
  const d = DICTS[lang];
  const reduce = getA11ySnapshot().motion;
  const step = state.visualIndex;

  if (reduce) {
    return (
      <section className="sheet bridge">
        <p className="kicker">{d.vis_kicker}</p>
        <h1>{lang === "en" ? "Skipped — reduced motion is enabled." : "Hareket azaltıldığı için bu bölüm atlandı."}</h1>
        <p className="lede">
          Dikkat ve duyusal görevler kısa animasyon içerir. İsterseniz ayardan
          hareketi açıp geri dönebilirsiniz.
        </p>
        <div className="intake-actions">
          <button className="btn" type="button" onClick={() => onChange(finishVisual(state))}>
            Yazılı taramaya devam
          </button>
          <button className="btn btn-ghost" type="button" onClick={onBack}>
            Geri
          </button>
        </div>
      </section>
    );
  }

  if (step === 0) {
    return (
      <CptTask
        visual={state.visual}
        onDone={(visual) => onChange({ ...state, visual, visualIndex: 1 })}
        onSkip={() => onChange({ ...state, visualIndex: 1 })}
        onBack={onBack}
      />
    );
  }
  if (step === 1) {
    return (
      <GngTask
        visual={state.visual}
        onDone={(visual) => onChange({ ...state, visual, visualIndex: 2 })}
        onSkip={() => onChange({ ...state, visualIndex: 2 })}
        onBack={() => onChange({ ...state, visualIndex: 0 })}
      />
    );
  }
  if (step === 2) {
    return (
      <SensoryTask
        visual={state.visual}
        onDone={(visual) => onChange({ ...state, visual, visualIndex: 3 })}
        onBack={() => onChange({ ...state, visualIndex: 1 })}
      />
    );
  }
  return (
    <MoodTask
      visual={state.visual}
      onDone={(visual) => onChange(finishVisual({ ...state, visual }))}
      onBack={() => onChange({ ...state, visualIndex: 2 })}
    />
  );
}

function sleep(ms: number) {
  return new Promise((resolve) => window.setTimeout(resolve, ms));
}

function CptTask({
  visual,
  onDone,
  onSkip,
  onBack,
}: {
  visual: VisualReport;
  onDone: (visual: VisualReport) => void;
  onSkip: () => void;
  onBack: () => void;
}) {
  const [running, setRunning] = useState(false);
  const [letter, setLetter] = useState("");
  const [i, setI] = useState(0);
  const misses = useRef(0);
  const fa = useRef(0);
  const isTarget = useRef(false);
  const clicked = useRef(false);
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);

  async function start() {
    const plan = Array.from({ length: 20 }, (_, index) => index % 4 === 0).sort(
      () => Math.random() - 0.5,
    );
    misses.current = 0;
    fa.current = 0;
    setRunning(true);
    for (let index = 0; index < plan.length; index += 1) {
      if (!alive.current) return;
      const target = plan[index];
      isTarget.current = target;
      clicked.current = false;
      setI(index);
      setLetter(randomLetter(target));
      await sleep(420);
      if (!alive.current) return;
      setLetter("");
      await sleep(480);
      if (isTarget.current && !clicked.current) misses.current += 1;
    }
    if (!alive.current) return;
    setRunning(false);
    onDone({
      ...visual,
      cptMisses: misses.current,
      cptFalseAlarms: fa.current,
    });
  }

  function tap() {
    if (!letter) return;
    if (clicked.current) return;
    clicked.current = true;
    if (isTarget.current) return;
    fa.current += 1;
  }

  return (
    <section className="sheet q-sheet">
      <p className="q-cat">Görsel 1 / 4 · Dikkat süzgeci</p>
      <h1 className="q-title">Yalnızca K harfine basın.</h1>
      <p className="q-sub">
        Diğer harflerde basmayın. Bu bir oyun; tanı değildir. Yaklaşık 20 saniye.
      </p>
      {!running ? (
        <div className="intake-actions">
          <button className="btn" type="button" onClick={() => void start()}>
            Başlat
          </button>
          <button className="btn btn-ghost" type="button" onClick={onSkip}>
            Atla
          </button>
          <button className="btn btn-ghost" type="button" onClick={onBack}>
            Geri
          </button>
        </div>
      ) : (
        <button className="vis-stage" type="button" onClick={tap}>
          <span className="vis-glyph">{letter || "·"}</span>
          <small>
            {i + 1} / 20
          </small>
        </button>
      )}
    </section>
  );
}

function GngTask({
  visual,
  onDone,
  onSkip,
  onBack,
}: {
  visual: VisualReport;
  onDone: (visual: VisualReport) => void;
  onSkip: () => void;
  onBack: () => void;
}) {
  const [running, setRunning] = useState(false);
  const [go, setGo] = useState<boolean | null>(null);
  const [i, setI] = useState(0);
  const misses = useRef(0);
  const fa = useRef(0);
  const currentGo = useRef(true);
  const clicked = useRef(false);
  const alive = useRef(true);

  useEffect(() => {
    alive.current = true;
    return () => {
      alive.current = false;
    };
  }, []);

  async function start() {
    const plan = Array.from({ length: 16 }, (_, index) => index % 4 !== 0).sort(
      () => Math.random() - 0.5,
    );
    misses.current = 0;
    fa.current = 0;
    setRunning(true);
    for (let index = 0; index < plan.length; index += 1) {
      if (!alive.current) return;
      const isGo = plan[index];
      currentGo.current = isGo;
      clicked.current = false;
      setI(index);
      setGo(isGo);
      await sleep(800);
      if (currentGo.current && !clicked.current) misses.current += 1;
      setGo(null);
      await sleep(200);
    }
    if (!alive.current) return;
    setRunning(false);
    onDone({
      ...visual,
      gngMisses: misses.current,
      gngFalseAlarms: fa.current,
    });
  }

  function tap() {
    if (go === null || clicked.current) return;
    clicked.current = true;
    if (!currentGo.current) fa.current += 1;
  }

  return (
    <section className="sheet q-sheet">
      <p className="q-cat">Görsel 2 / 4 · Dur / git</p>
      <h1 className="q-title">Teal dairede basın, kiremit dairede basmayın.</h1>
      {!running ? (
        <div className="intake-actions">
          <button className="btn" type="button" onClick={() => void start()}>
            Başlat
          </button>
          <button className="btn btn-ghost" type="button" onClick={onSkip}>
            Atla
          </button>
          <button className="btn btn-ghost" type="button" onClick={onBack}>
            Geri
          </button>
        </div>
      ) : (
        <button className="vis-stage" type="button" onClick={tap}>
          <span className={`vis-dot ${go === false ? "stop" : go ? "go" : ""}`} />
          <small>
            {i + 1} / 16
          </small>
        </button>
      )}
    </section>
  );
}

function SensoryTask({
  visual,
  onDone,
  onBack,
}: {
  visual: VisualReport;
  onDone: (visual: VisualReport) => void;
  onBack: () => void;
}) {
  const [scores, setScores] = useState(visual.sensory);

  const tiles = [
    { id: 0, className: "sens-sparse", label: "Seyrek nokta" },
    { id: 1, className: "sens-grid", label: "Sık ızgara" },
    { id: 2, className: "sens-stripe", label: "İnce çizgi" },
    { id: 3, className: "sens-noise", label: "Yoğun benek" },
  ];

  return (
    <section className="sheet q-sheet">
      <p className="q-cat">Görsel 3 / 4 · Duyusal doku</p>
      <h1 className="q-title">Bu yüzeyler sizi ne kadar gerer?</h1>
      <p className="q-sub">0 rahat, 3 dayanılmaz. Tanı değil, duyusal yük ipucu.</p>
      <div className="sens-grid-wrap">
        {tiles.map((tile) => (
          <div key={tile.id}>
            <div className={`sens-swatch ${tile.className}`} aria-hidden="true" />
            <p>{tile.label}</p>
            <div className="opts" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
              {[0, 1, 2, 3].map((value) => (
                <button
                  key={value}
                  className="opt"
                  type="button"
                  aria-pressed={scores[tile.id] === value}
                  onClick={() => {
                    const next = [...scores];
                    next[tile.id] = value;
                    setScores(next);
                  }}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="scan-nav">
        <button className="btn btn-ghost" type="button" onClick={onBack}>
          Geri
        </button>
        <button
          className="btn"
          type="button"
          onClick={() => onDone({ ...visual, sensory: scores })}
        >
          Kaydet ve devam
        </button>
      </div>
    </section>
  );
}

function MoodTask({
  visual,
  onDone,
  onBack,
}: {
  visual: VisualReport;
  onDone: (visual: VisualReport) => void;
  onBack: () => void;
}) {
  const [typicalEnergy, setTypicalEnergy] = useState(visual.typicalEnergy);
  const [typicalMood, setTypicalMood] = useState(visual.typicalMood);
  const [peakEnergy, setPeakEnergy] = useState(visual.peakEnergy);
  const [peakMood, setPeakMood] = useState(visual.peakMood);

  return (
    <section className="sheet q-sheet">
      <p className="q-cat">Görsel 4 / 4 · Enerji haritası</p>
      <h1 className="q-title">İki dönemi haritada işaretleyin.</h1>
      <p className="q-sub">
        Sol düşük enerji, sağ yüksek. Alt düşük duygu, üst yükseliş. Tipik
        haftanız ve en ‘yüksek’ birkaç gününüz.
      </p>
      <Compass
        label="Tipik hafta"
        energy={typicalEnergy}
        mood={typicalMood}
        onEnergy={setTypicalEnergy}
        onMood={setTypicalMood}
      />
      <Compass
        label="En yüksek dönem (birkaç gün)"
        energy={peakEnergy}
        mood={peakMood}
        onEnergy={setPeakEnergy}
        onMood={setPeakMood}
      />
      <div className="scan-nav">
        <button className="btn btn-ghost" type="button" onClick={onBack}>
          Geri
        </button>
        <button
          className="btn"
          type="button"
          onClick={() =>
            onDone({
              ...visual,
              typicalEnergy,
              typicalMood,
              peakEnergy,
              peakMood,
            })
          }
        >
          Görselleri bitir
        </button>
      </div>
    </section>
  );
}

function Compass({
  label,
  energy,
  mood,
  onEnergy,
  onMood,
}: {
  label: string;
  energy: number;
  mood: number;
  onEnergy: (value: number) => void;
  onMood: (value: number) => void;
}) {
  return (
    <div className="compass">
      <p>
        <strong>{label}</strong>
      </p>
      <p className="q-cat">Enerji</p>
      <div className="opts" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {["Düşük", "Orta", "Yüksek"].map((name, index) => (
          <button
            key={name}
            className="opt"
            type="button"
            aria-pressed={energy === index}
            onClick={() => onEnergy(index)}
          >
            {name}
          </button>
        ))}
      </div>
      <p className="q-cat">Duygudurum</p>
      <div className="opts" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
        {["Çökkün", "Nötr", "Yüksek"].map((name, index) => (
          <button
            key={name}
            className="opt"
            type="button"
            aria-pressed={mood === index}
            onClick={() => onMood(index)}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
}
