"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { MessageCircle, RotateCcw, Sparkles } from "lucide-react";
import { clinic } from "@/content/example";

type Phase = "empty" | "new" | "moving" | "done";

/** Quadro do Pipeflow com animação: o card entra em Novo lead e desliza para Atendimento. */
export function PipeflowBoardDemo() {
  const [phase, setPhase] = useState<Phase>("done"); // sem JS, o estado final fica visível
  const [reduced, setReduced] = useState(false);
  const boardRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const prevRect = useRef<{ left: number; top: number } | null>(null);
  const timers = useRef<number[]>([]);
  const started = useRef(false);

  const clear = () => { timers.current.forEach((t) => window.clearTimeout(t)); timers.current = []; };

  const play = useCallback(() => {
    clear();
    setPhase("empty");
    timers.current.push(window.setTimeout(() => setPhase("new"), 500));
    timers.current.push(window.setTimeout(() => setPhase("moving"), 2300));
    timers.current.push(window.setTimeout(() => setPhase("done"), 3300));
  }, []);

  useEffect(() => {
    setReduced(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    const el = boardRef.current;
    if (!el || !("IntersectionObserver" in window)) return;
    setPhase("empty");
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) { started.current = true; play(); io.disconnect(); }
    }, { threshold: 0.45 });
    io.observe(el);
    return () => { io.disconnect(); clear(); };
  }, [play]);

  // FLIP: guarda a posição do card antes de trocar de coluna e anima o deslocamento.
  const inAtendimento = phase === "moving" || phase === "done";
  useLayoutEffect(() => {
    const card = cardRef.current;
    const board = boardRef.current;
    if (!card || !board) return;
    const b = board.getBoundingClientRect();
    const r = card.getBoundingClientRect();
    const now = { left: r.left - b.left, top: r.top - b.top };
    if (phase === "moving" && prevRect.current) {
      const dx = prevRect.current.left - now.left;
      const dy = prevRect.current.top - now.top;
      if (!reduced && (dx || dy)) {
        card.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "translate(0,0)" }], { duration: 750, easing: "cubic-bezier(.2,.7,.2,1)" });
      } else {
        card.animate([{ opacity: 0.2 }, { opacity: 1 }], { duration: 400 });
      }
    }
    if (phase === "new") {
      prevRect.current = now;
      card.animate(reduced ? [{ opacity: 0 }, { opacity: 1 }] : [{ opacity: 0, transform: "translateY(-12px) scale(.96)" }, { opacity: 1, transform: "none" }], { duration: 450, easing: "ease-out" });
    }
  }, [phase, reduced]);

  const card = (
    <div ref={cardRef} className={`rounded-lg bg-white p-2.5 shadow-md ring-1 ${inAtendimento ? "ring-[#2f6bff]/50" : "ring-[#e8edf5]"}`} aria-live="polite">
      <p className="text-[12.5px] font-bold leading-tight text-[#060e26]">{clinic.lead.name}</p>
      <p className="mt-1 text-[11px] leading-snug text-[#475569]"><span className="font-semibold">Origem:</span> Meta Ads · {clinic.procedure}</p>
      <p className="text-[11px] leading-snug text-[#475569]"><span className="font-semibold">Interesse:</span> {clinic.lead.interest}</p>
      <div className="mt-1.5 flex flex-wrap items-center gap-1">
        <span className="inline-flex items-center gap-1 rounded bg-[#dcfce7] px-1.5 py-0.5 text-[10px] font-semibold text-[#15803d]"><MessageCircle className="h-2.5 w-2.5" aria-hidden />WhatsApp</span>
        <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold transition-colors ${inAtendimento ? "bg-[#eef4ff] text-[#1f55e6]" : "bg-[#f1f5f9] text-[#475569]"}`}>Etapa: {inAtendimento ? "Atendimento" : "Novo lead"}</span>
      </div>
      {phase === "done" ? (
        <div className="mt-2 rounded-md bg-[#f5f8ff] p-2 ring-1 ring-[#dbe6ff]" style={reduced ? undefined : { animation: "fade-in .4s ease-out" }}>
          <p className="flex items-center gap-1 text-[10px] font-bold text-[#1f55e6]"><Sparkles className="h-3 w-3" aria-hidden />Resumo da Gravon IA</p>
          <p className="mt-0.5 text-[11px] leading-snug text-[#334155]">“{clinic.aiSummary}”</p>
        </div>
      ) : null}
    </div>
  );

  const col = (title: string, count: number, active: boolean, children: React.ReactNode) => (
    <div className={`min-w-0 rounded-xl p-2 ring-1 transition-colors sm:p-3 ${active ? "bg-white ring-[#2f6bff]/30" : "bg-white/70 ring-[#e8edf5]"}`}>
      <div className="mb-2 flex items-center justify-between gap-1 px-0.5">
        <p className="truncate text-[12px] font-bold text-[#060e26] sm:text-[13px]">{title}</p>
        <span className="rounded-full bg-[#f1f5f9] px-1.5 text-[10px] font-semibold text-[#64748b]">{count}</span>
      </div>
      <div className="min-h-[148px] space-y-2">{children}</div>
    </div>
  );

  return (
    <div className="overflow-hidden rounded-xl bg-white text-left shadow-card ring-1 ring-black/10">
      <div className="flex flex-wrap items-center gap-2 border-b border-[#e8edf5] px-4 py-2.5">
        <span className="h-5 w-5 rounded-md bg-gradient-to-br from-[#5c8bff] to-[#1f55e6]" aria-hidden />
        <p className="text-[13px] font-bold text-[#060e26]">Pipeflow CRM</p>
        <span className="text-[12px] text-[#64748b]">· Funil {clinic.name}</span>
        <span className="ml-auto rounded-full bg-[#eef4ff] px-2 py-0.5 text-[10px] font-semibold text-[#1f55e6]">Dados demonstrativos</span>
      </div>
      <div ref={boardRef} className="grid grid-cols-2 gap-2 bg-[#f4f7fb] p-2 sm:gap-3 sm:p-4">
        {col("Novo lead", phase === "new" ? 1 : 0, phase === "new", phase === "new" ? card : null)}
        {col("Atendimento", inAtendimento ? 1 : 0, inAtendimento, inAtendimento ? card : null)}
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#e8edf5] px-4 py-3">
        <p className="text-[12px] text-[#475569]" aria-live="polite">
          {phase === "empty" ? "Aguardando a conversa do WhatsApp…" : phase === "new" ? "Conversa recebida: card criado em Novo lead." : phase === "moving" ? "Atendimento iniciado: card movido para Atendimento." : "Gravon IA resumiu o interesse para o time."}
        </p>
        <button type="button" onClick={play} className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg bg-[#060e26] px-3.5 text-[13px] font-semibold text-white hover:bg-[#122249]">
          <RotateCcw className="h-3.5 w-3.5" aria-hidden /> Rever demonstração
        </button>
      </div>
    </div>
  );
}
