"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Starfield } from "../ui/Starfield";

/**
 * Sequência baseada nos objetivos mensais e entregas do Portal Gravon (Mês 1 Estruturação,
 * Mês 2 Aquisição, Mês 3 Consolidação). Conferir com a seção "Nosso processo" de ia.gravoncompany.com.
 */
const steps = [
  { title: "Diagnóstico inicial", text: "Análise do cenário atual de marketing e vendas para entender onde estão as oportunidades." },
  { title: "Planejamento estratégico", text: "Definição de objetivos, metas, posicionamento e do plano dos próximos meses." },
  { title: "Estruturação", text: "Contas de Google Ads e Meta Ads, rastreamento de conversões e eventos configurados." },
  { title: "Criativos e campanhas no ar", text: "Produção dos primeiros criativos e campanhas publicadas com acompanhamento diário." },
  { title: "Aquisição", text: "Primeiros leads qualificados, com CRM organizado e atendimento automatizado." },
  { title: "Consolidação", text: "Escala dos canais mais eficientes, redução do custo por lead e planejamento do próximo ciclo." },
];

export function Process() {
  const listRef = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);
  const [reached, setReached] = useState(-1);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    if (mq.matches) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const list = listRef.current;
      if (!list) return;
      const r = list.getBoundingClientRect();
      const focus = window.innerHeight * 0.6; // área de leitura
      const p = Math.min(1, Math.max(0, (focus - r.top) / r.height));
      setProgress(p);
      const items = [...list.querySelectorAll<HTMLElement>("[data-step]")];
      let last = -1;
      items.forEach((el, i) => { if (el.getBoundingClientRect().top + 24 < focus) last = i; });
      setReached(last);
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    return () => { window.removeEventListener("scroll", on); window.removeEventListener("resize", on); cancelAnimationFrame(raf); };
  }, []);

  const p = reduced ? 1 : progress;

  return (
    <section id="processo" aria-labelledby="processo-title" className="relative overflow-hidden bg-[#04040a] py-20 lg:py-28">
      {/* Fundo de universo: nebulosas e estrelas com deriva lenta */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -left-1/4 top-0 h-[70%] w-[80%] rounded-full bg-[radial-gradient(closest-side,rgba(201,154,58,.16),transparent)] blur-3xl" />
        <div className="absolute -right-1/4 bottom-0 h-[60%] w-[70%] rounded-full bg-[radial-gradient(closest-side,rgba(98,84,160,.14),transparent)] blur-3xl" />
        <div className="absolute -inset-[10%] animate-[drift_90s_linear_infinite]"><Starfield count={90} seed={11} /></div>
        <div className="absolute -inset-[10%] animate-[drift_140s_linear_infinite_reverse] opacity-60"><Starfield count={50} seed={29} /></div>
      </div>

      <Container className="relative">
        <SectionHeading tone="dark" id="processo-title" eyebrow="Nosso processo" title={<>Do diagnóstico à <span className="text-gradient">consolidação</span></>} description="Cada projeto segue uma sequência clara, acompanhada no Portal Gravon do primeiro dia ao próximo ciclo." />

        <ol ref={listRef} className="relative mx-auto mt-16 max-w-4xl" aria-label="Etapas do processo">
          {/* Trilho e traço dourado */}
          <span className="absolute bottom-0 left-[19px] top-0 w-0.5 rounded-full bg-white/10 md:left-1/2 md:-translate-x-1/2" aria-hidden />
          <span
            className="absolute left-[19px] top-0 w-0.5 origin-top rounded-full bg-gradient-to-b from-gold-200 via-gold-400 to-gold-600 shadow-[0_0_12px_rgba(217,174,85,.8)] md:left-1/2 md:-translate-x-1/2"
            style={{ height: `${p * 100}%` }}
            aria-hidden
          />
          {steps.map((s, i) => {
            const on = reduced || i <= reached;
            const right = i % 2 === 1;
            return (
              <li key={s.title} data-step className="relative grid grid-cols-[40px_1fr] gap-5 pb-12 last:pb-0 md:grid-cols-[1fr_40px_1fr] md:gap-8">
                <div className={`hidden md:block ${right ? "" : "md:order-1"}`}>
                  {!right ? <StepCard s={s} i={i} on={on} align="right" /> : null}
                </div>
                <div className="relative md:order-2">
                  <span className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold transition-all duration-500 ${on ? "bg-gold-400 text-ink-950 shadow-[0_0_24px_rgba(217,174,85,.7)]" : "bg-ink-900 text-zinc-500 ring-1 ring-white/15"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:order-3">
                  <div className="md:hidden"><StepCard s={s} i={i} on={on} align="left" /></div>
                  <div className="hidden md:block">{right ? <StepCard s={s} i={i} on={on} align="left" /> : null}</div>
                </div>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}

function StepCard({ s, i, on, align }: { s: { title: string; text: string }; i: number; on: boolean; align: "left" | "right" }) {
  return (
    <div className={`rounded-2xl p-5 ring-1 transition-all duration-500 sm:p-6 ${align === "right" ? "md:text-right" : ""} ${on ? "bg-ink-900/80 opacity-100 ring-gold-400/50 backdrop-blur-sm" : "bg-ink-900/40 opacity-50 ring-white/10"}`}>
      <p className={`font-display text-xs font-bold tracking-[.14em] ${on ? "text-gold-300" : "text-zinc-500"}`}>ETAPA {String(i + 1).padStart(2, "0")}</p>
      <h3 className="mt-1.5 text-lg font-bold text-white sm:text-xl">{s.title}</h3>
      <p className="mt-1.5 text-[15px] leading-relaxed text-zinc-300">{s.text}</p>
    </div>
  );
}
