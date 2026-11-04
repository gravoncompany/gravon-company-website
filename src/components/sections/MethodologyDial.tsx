"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Icon, type IconName } from "../ui/Icon";

const steps: { name: string; icon: IconName; summary: string; items: string[] }[] = [
  {
    name: "Atração",
    icon: "megaphone",
    summary: "Gerar presença e atrair pessoas com real interesse no que a empresa oferece.",
    items: ["Campanhas no Google Ads e Meta Ads", "Sites e landing pages orientados à conversão", "Mensagens e públicos alinhados ao posicionamento"],
  },
  {
    name: "Qualificação",
    icon: "filter",
    summary: "Organizar cada contato e entender quais oportunidades merecem prioridade.",
    items: ["Registro no CRM com origem da oportunidade", "Critérios de qualificação definidos com o time", "Análise de conversas apoiada por IA"],
  },
  {
    name: "Conversão",
    icon: "handshake",
    summary: "Transformar oportunidades em negócios com atendimento ágil e acompanhado.",
    items: ["Atendimento integrado ao WhatsApp", "Funis comerciais com etapas claras", "Acompanhamento de propostas e follow-ups"],
  },
  {
    name: "Retenção",
    icon: "repeat",
    summary: "Manter o relacionamento e usar os aprendizados para evoluir a estratégia.",
    items: ["Análise de resultados e taxas de conversão", "Recomendações para os próximos ciclos", "Relacionamento contínuo com a base de clientes"],
  },
];

const AUTO_MS = 6500;
const R = 44;
const C = 2 * Math.PI * R;

export function MethodologyDial() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (paused || reduce) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % steps.length), AUTO_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, reduce]);

  const select = useCallback((i: number, focus = false) => {
    setActive(i);
    setPaused(true);
    if (focus) tabs.current[i]?.focus();
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    const n = steps.length;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") { e.preventDefault(); select((active + 1) % n, true); }
    if (e.key === "ArrowLeft" || e.key === "ArrowUp") { e.preventDefault(); select((active - 1 + n) % n, true); }
    if (e.key === "Home") { e.preventDefault(); select(0, true); }
    if (e.key === "End") { e.preventDefault(); select(n - 1, true); }
  };

  const step = steps[active];

  return (
    <div className="mt-16 grid items-center gap-12 lg:mt-20 lg:grid-cols-2 lg:gap-20">
      {/* Mostrador */}
      <div className="relative mx-auto my-6 aspect-square w-[80%] max-w-[440px] sm:w-full">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden>
          <circle cx="50" cy="50" r={R} fill="none" stroke="rgba(255,255,255,.07)" strokeWidth="0.6" />
          <motion.circle
            cx="50" cy="50" r={R} fill="none" stroke="url(#cmc-grad)" strokeWidth="1.2" strokeLinecap="round"
            strokeDasharray={C}
            animate={{ strokeDashoffset: C - (C * (active + 1)) / steps.length }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />
          <defs>
            <linearGradient id="cmc-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#f6e6bf" />
              <stop offset="1" stopColor="#9c773a" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-[26%] flex flex-col items-center justify-center rounded-full border border-gold-400/20 bg-[radial-gradient(circle_at_40%_30%,#221d14,#0a0a0e_70%)] text-center shadow-[0_0_80px_-20px_rgba(217,180,110,.5)]">
          <span className="font-display text-xs uppercase tracking-[0.3em] text-mist-500">CMC</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-2 font-display text-2xl font-semibold text-gold-gradient sm:text-3xl"
            >
              {String(active + 1).padStart(2, "0")}
            </motion.span>
          </AnimatePresence>
        </div>

        <div role="tablist" aria-label="Etapas da metodologia CMC" aria-orientation="horizontal" onKeyDown={onKeyDown}>
          {steps.map((s, i) => {
            const angle = (i / steps.length) * 2 * Math.PI - Math.PI / 2;
            const x = 50 + R * Math.cos(angle);
            const y = 50 + R * Math.sin(angle);
            const isActive = i === active;
            return (
              <button
                key={s.name}
                ref={(el) => { tabs.current[i] = el; }}
                type="button"
                role="tab"
                id={`cmc-tab-${i}`}
                aria-selected={isActive}
                aria-controls="cmc-panel"
                tabIndex={isActive ? 0 : -1}
                onClick={() => select(i)}
                className="absolute flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <span className={`flex size-14 items-center justify-center rounded-2xl border transition-all duration-500 sm:size-16 ${isActive ? "scale-110 border-gold-300 bg-gold-400 text-ink-950 shadow-[0_0_40px_-6px_rgba(217,180,110,.8)]" : "border-white/10 bg-ink-850 text-gold-300 hover:border-gold-400/50"}`}>
                  <Icon name={s.icon} className="size-6" />
                </span>
                <span className={`rounded-full bg-ink-900 px-2 py-0.5 font-display text-xs font-medium sm:text-sm ${isActive ? "text-gold-200" : "text-mist-400"}`}>
                  {s.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Painel */}
      <div
        id="cmc-panel"
        role="tabpanel"
        aria-labelledby={`cmc-tab-${active}`}
        className="relative min-h-[320px] rounded-3xl border border-white/[0.07] bg-ink-900/80 p-7 md:p-10"
        onMouseEnter={() => setPaused(true)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-display text-sm text-gold-400">Etapa {active + 1} de {steps.length}</p>
            <h3 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{step.name}</h3>
            <p className="mt-4 text-lg leading-relaxed text-mist-300">{step.summary}</p>
            <ul className="mt-8 space-y-4">
              {step.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-mist-300">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300">
                    <Icon name="check" className="size-3.5" />
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
        <div className="mt-10 flex gap-2" aria-hidden>
          {steps.map((s, i) => (
            <span key={s.name} className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.08]">
              {i === active ? (
                <motion.span
                  key={`${active}-${paused}`}
                  className="block h-full bg-gold-400"
                  initial={{ width: paused || reduce ? "100%" : "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: paused || reduce ? 0 : AUTO_MS / 1000, ease: "linear" }}
                />
              ) : i < active ? (
                <span className="block h-full w-full bg-gold-600/70" />
              ) : null}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
