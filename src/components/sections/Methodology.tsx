"use client";

import { useId, useRef, useState } from "react";
import { Filter, Handshake, Magnet, Repeat, type LucideIcon } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { CheckList } from "../ui/CheckList";

type Step = { letter: string; name: string; icon: LucideIcon; summary: string; items: string[] };

const steps: Step[] = [
  { letter: "A", name: "Atração", icon: Magnet, summary: "Gerar presença e atrair pessoas com real interesse no que a empresa oferece.", items: ["Campanhas no Google Ads e Meta Ads", "Sites e landing pages orientados à conversão", "Mensagens e públicos alinhados ao posicionamento"] },
  { letter: "Q", name: "Qualificação", icon: Filter, summary: "Organizar cada contato e entender quais oportunidades merecem prioridade.", items: ["Registro no CRM com a origem da oportunidade", "Critérios de qualificação definidos com o time", "Análise de conversas apoiada por IA"] },
  { letter: "C", name: "Conversão", icon: Handshake, summary: "Transformar oportunidades em negócios com atendimento ágil e acompanhado.", items: ["Atendimento integrado ao WhatsApp", "Funis comerciais com etapas claras", "Acompanhamento de propostas e follow-ups"] },
  { letter: "R", name: "Retenção", icon: Repeat, summary: "Manter o relacionamento e usar os aprendizados para evoluir a estratégia.", items: ["Análise de resultados e taxas de conversão", "Recomendações para os próximos ciclos", "Relacionamento contínuo com a base de clientes"] },
];

/* Larguras (viewBox 400) do topo e da base de cada camada; a última é a haste do funil, como no post. */
const tops = [400, 326, 254, 196];
const bottoms = [326, 254, 196, 196];
const H = 100;
const C = 14; // curvatura das bordas (volume)

function LayerShape({ i, active, gid }: { i: number; active: boolean; gid: string }) {
  const t = tops[i], b = bottoms[i];
  const xL = (400 - t) / 2, xR = xL + t, bL = (400 - b) / 2, bR = bL + b;
  const d = `M ${xL},${C} Q 200,${C * 3} ${xR},${C} L ${bR},${H + C} Q 200,${H + C * 3} ${bL},${H + C} Z`;
  return (
    <svg viewBox={`0 0 400 ${H + C * 3}`} className="absolute inset-0 h-full w-full overflow-visible" preserveAspectRatio="none" aria-hidden>
      <defs>
        <linearGradient id={`${gid}-f${i}`} x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor={active ? "#8f6b2a" : "#5b4520"} />
          <stop offset=".45" stopColor={active ? "#f6e1a2" : "#b8944b"} />
          <stop offset=".6" stopColor={active ? "#e9c873" : "#a4823f"} />
          <stop offset="1" stopColor={active ? "#7a5a22" : "#4a381a"} />
        </linearGradient>
        <linearGradient id={`${gid}-m`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#2a2110" />
          <stop offset="1" stopColor="#6b5222" />
        </linearGradient>
      </defs>
      <path d={d} fill={`url(#${gid}-f${i})`} stroke={active ? "#f6e6bf" : "#d9ae55"} strokeWidth={active ? 2.5 : 1.5} vectorEffect="non-scaling-stroke" />
      {i === 0 ? <ellipse cx="200" cy={C * 1.5} rx={t / 2 - 1} ry={C * 0.75 + 4} fill={`url(#${gid}-m)`} stroke="#e6c77e" strokeWidth="1.5" vectorEffect="non-scaling-stroke" /> : null}
    </svg>
  );
}

function Detail({ s, i, id }: { s: Step; i: number; id?: string }) {
  return (
    <div id={id} role="tabpanel" aria-labelledby={`cmc-tab-${i}`} className="rounded-2xl bg-ink-900/90 p-6 ring-1 ring-gold-400/40 sm:p-8">
      <p className="text-sm font-semibold text-gold-300">Etapa {i + 1} de {steps.length} · {s.letter}</p>
      <h3 className="mt-2 font-display text-3xl font-extrabold text-white">{s.name}</h3>
      <p className="mt-3 text-base leading-relaxed text-zinc-200 sm:text-lg">{s.summary}</p>
      <div className="mt-6"><CheckList tone="dark" items={s.items} /></div>
    </div>
  );
}

export function Methodology() {
  const [active, setActive] = useState(0);
  const gid = useId().replace(/:/g, "");
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = (e: React.KeyboardEvent) => {
    const n = steps.length;
    const map: Record<string, number> = { ArrowDown: (active + 1) % n, ArrowRight: (active + 1) % n, ArrowUp: (active - 1 + n) % n, ArrowLeft: (active - 1 + n) % n, Home: 0, End: n - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    setActive(map[e.key]);
    refs.current[map[e.key]]?.focus();
  };

  return (
    <section id="metodologia" aria-labelledby="metodologia-title" className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-gold-500/15 blur-[120px]" aria-hidden />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          id="metodologia-title"
          eyebrow="Nossa metodologia"
          title={<>CMC — <span className="text-gradient">Captação Moderna de Clientes</span></>}
          description="Quatro etapas que levam o cliente certo da primeira impressão ao relacionamento contínuo. Toque em cada camada do funil."
        />

        <div className="mx-auto mt-14 grid max-w-6xl items-center gap-10 md:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
          <div role="tablist" aria-orientation="vertical" aria-label="Etapas do funil CMC" onKeyDown={onKey} className="mx-auto w-full max-w-[420px]">
            {steps.map((s, i) => {
              const on = i === active;
              const Icon = s.icon;
              return (
                <div key={s.name} className={i > 0 ? "-mt-2" : ""}>
                  <button
                    ref={(el) => { refs.current[i] = el; }}
                    id={`cmc-tab-${i}`}
                    type="button"
                    role="tab"
                    aria-selected={on}
                    aria-controls={`cmc-panel cmc-panel-m-${i}`}
                    tabIndex={on ? 0 : -1}
                    onClick={() => setActive(i)}
                    className={`relative block h-[104px] w-full transition-[transform,filter] duration-300 sm:h-[118px] ${on ? "z-10 scale-[1.03] drop-shadow-[0_10px_30px_rgba(217,174,85,.45)]" : "opacity-90 hover:opacity-100 hover:brightness-110"}`}
                  >
                    <LayerShape i={i} active={on} gid={gid} />
                    <span className={`relative flex h-full items-center justify-center gap-2.5 ${i === 0 ? "pt-5" : "pt-2"}`}>
                      <span className={`flex h-9 w-9 items-center justify-center rounded-full ${on ? "bg-ink-900 text-gold-200" : "bg-ink-900/70 text-gold-300"}`}>
                        <Icon className="h-[18px] w-[18px]" aria-hidden />
                      </span>
                      <span className="font-display text-[15px] font-extrabold uppercase tracking-wide text-ink-950 sm:text-lg">{s.name}</span>
                    </span>
                    <span className={`pointer-events-none absolute inset-0 rounded-xl ${on ? "ring-0" : ""}`} aria-hidden />
                    <span className="sr-only">{on ? " (etapa selecionada)" : ""}</span>
                  </button>
                  {on ? (
                    <div className="mt-4 md:hidden">
                      <Detail s={s} i={i} id={`cmc-panel-m-${i}`} />
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="hidden md:block" aria-live="polite">
            <Detail s={steps[active]} i={active} id="cmc-panel" />
          </div>
        </div>
      </Container>
    </section>
  );
}
