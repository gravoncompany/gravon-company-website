"use client";

import { useEffect, useState } from "react";
import { Filter, Handshake, Megaphone, Repeat, type LucideIcon } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { CheckList } from "../ui/CheckList";

const steps: { name: string; icon: LucideIcon; summary: string; items: string[] }[] = [
  { name: "Atração", icon: Megaphone, summary: "Gerar presença e atrair pessoas com real interesse no que a empresa oferece.", items: ["Campanhas no Google Ads e Meta Ads", "Sites e landing pages orientados à conversão", "Mensagens e públicos alinhados ao posicionamento"] },
  { name: "Qualificação", icon: Filter, summary: "Organizar cada contato e entender quais oportunidades merecem prioridade.", items: ["Registro no CRM com a origem da oportunidade", "Critérios de qualificação definidos com o time", "Análise de conversas apoiada por IA"] },
  { name: "Conversão", icon: Handshake, summary: "Transformar oportunidades em negócios com atendimento ágil e acompanhado.", items: ["Atendimento integrado ao WhatsApp", "Funis comerciais com etapas claras", "Acompanhamento de propostas e follow-ups"] },
  { name: "Retenção", icon: Repeat, summary: "Manter o relacionamento e usar os aprendizados para evoluir a estratégia.", items: ["Análise de resultados e taxas de conversão", "Recomendações para os próximos ciclos", "Relacionamento contínuo com a base de clientes"] },
];

const AUTO_MS = 6500;

export function Methodology() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setActive((a) => (a + 1) % steps.length), AUTO_MS);
    return () => window.clearTimeout(id);
  }, [active, auto]);

  const choose = (i: number) => {
    setActive(i);
    setAuto(false);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const n = steps.length;
    const map: Record<string, number> = { ArrowRight: (active + 1) % n, ArrowDown: (active + 1) % n, ArrowLeft: (active - 1 + n) % n, ArrowUp: (active - 1 + n) % n, Home: 0, End: n - 1 };
    if (!(e.key in map)) return;
    e.preventDefault();
    choose(map[e.key]);
    document.getElementById(`cmc-tab-${map[e.key]}`)?.focus();
  };

  const step = steps[active];

  return (
    <section id="metodologia" aria-labelledby="metodologia-title" className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-gold-500/15 blur-[120px]" aria-hidden />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          id="metodologia-title"
          eyebrow="Nossa metodologia"
          title={<>CMC — <span className="text-gradient">Captação Moderna de Clientes</span></>}
          description="Quatro etapas que tratam a captação como um ciclo contínuo: atrair as pessoas certas, qualificar, converter e manter o relacionamento."
        />

        <Reveal delay={120} className="mt-14">
          <div role="tablist" aria-label="Etapas da metodologia CMC" onKeyDown={onKeyDown} className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {steps.map((s, i) => {
              const on = i === active;
              const Icon = s.icon;
              return (
                <button
                  key={s.name}
                  id={`cmc-tab-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={on}
                  aria-controls="cmc-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => choose(i)}
                  className={`relative overflow-hidden rounded-2xl p-5 text-left transition-all duration-300 ${on ? "bg-gold-400 text-ink-950 shadow-glow" : "bg-white/[.03] text-white ring-1 ring-white/10 hover:bg-white/[.06] hover:ring-gold-400/40"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${on ? "bg-ink-950/10" : "bg-gold-400/15 text-gold-300"}`}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span className={`font-display text-sm font-bold ${on ? "text-ink-950/60" : "text-zinc-500"}`}>0{i + 1}</span>
                  </div>
                  <p className="mt-6 font-display text-lg font-bold sm:text-xl">{s.name}</p>
                  {on && auto ? (
                    <span
                      key={`p-${active}`}
                      className="absolute inset-x-0 bottom-0 h-1 origin-left animate-progress bg-ink-950/30"
                      style={{ ["--progress-duration" as string]: `${AUTO_MS}ms` }}
                      aria-hidden
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div id="cmc-panel" role="tabpanel" aria-labelledby={`cmc-tab-${active}`} className="mt-5 grid gap-8 rounded-2xl bg-white/[.03] p-7 ring-1 ring-white/10 sm:p-10 md:grid-cols-[1fr_1fr] md:gap-12">
          <div key={`s-${active}`} className="reveal is-visible">
            <p className="text-sm font-semibold text-gold-300">Etapa {active + 1} de {steps.length}</p>
            <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">{step.name}</h3>
            <p className="mt-4 text-lg leading-relaxed text-zinc-300">{step.summary}</p>
          </div>
          <div key={`i-${active}`} className="self-center">
            <CheckList tone="dark" items={step.items} />
          </div>
        </div>
      </Container>
    </section>
  );
}
