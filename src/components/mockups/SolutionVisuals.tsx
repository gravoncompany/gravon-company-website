import { ArrowRight, CalendarClock, Sparkles, UserCheck, UserPlus } from "lucide-react";
import { asset } from "@/lib/site";
import { gravonIa } from "@/content/media";

/** CRM com IA: hub tecnológico da Gravon IA + mascote com movimento sutil (parado em movimento reduzido). */
export function GravonIaVisual() {
  const { image, robot } = gravonIa;
  return (
    <div className="relative mx-auto w-full max-w-[480px] pb-8">
      <div className="pointer-events-none absolute inset-6 rounded-full bg-gold-500/15 blur-3xl" aria-hidden />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={asset(image.src)} alt={image.alt} width={image.width} height={image.height} loading="lazy" decoding="async" className="relative block h-auto w-[70%]" />
      <div className="absolute bottom-0 right-0 w-[38%] max-w-[190px]">
        <div className="pointer-events-none absolute inset-[18%] rounded-full bg-gold-400/30 blur-2xl" aria-hidden />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset(robot.src)} alt={robot.alt} width={robot.width} height={robot.height} loading="lazy" decoding="async" className="relative block h-auto w-full animate-float drop-shadow-[0_14px_30px_rgba(0,0,0,.55)] motion-reduce:animate-none" />
      </div>
    </div>
  );
}

const flow = [
  { icon: UserPlus, title: "Lead chega", detail: "Formulário, anúncio ou WhatsApp", tag: "Origem registrada" },
  { icon: UserCheck, title: "Recebe um responsável", detail: "Distribuído para o time certo", tag: "Responsável: Ana" },
  { icon: CalendarClock, title: "Ganha uma próxima ação", detail: "Retorno agendado automaticamente", tag: "Hoje · 15h" },
];

/** Automação comercial: três ações conectadas. */
export function AutomationFlow() {
  return (
    <ol className="grid gap-2 rounded-xl bg-sand-50 p-3 ring-1 ring-ink-900/5 sm:p-4" aria-label="Fluxo automático">
      {flow.map((f, i) => {
        const Icon = f.icon;
        return (
          <li key={f.title} className="relative">
            <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-card ring-1 ring-ink-900/5">
              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${i === 2 ? "bg-gold-400 text-ink-950" : "bg-ink-900 text-gold-300"}`}>
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-bold text-ink-900">{i + 1}. {f.title}</p>
                <p className="text-[12.5px] text-zinc-500">{f.detail}</p>
              </div>
              <span className="hidden shrink-0 rounded-md bg-gold-50 px-2 py-1 text-[11px] font-semibold text-gold-700 ring-1 ring-gold-200 sm:inline">{f.tag}</span>
            </div>
            {i < flow.length - 1 ? (
              <span className="mx-auto flex h-5 w-5 items-center justify-center text-gold-600" aria-hidden>
                <ArrowRight className="h-4 w-4 rotate-90" />
              </span>
            ) : null}
          </li>
        );
      })}
    </ol>
  );
}

const origins = [
  { name: "Google Ads", pct: 46 },
  { name: "Meta Ads", pct: 34 },
  { name: "Indicação", pct: 12 },
  { name: "Orgânico", pct: 8 },
];
const trend = [18, 22, 21, 27, 31, 29, 36, 41];

/** Inteligência de dados: tendência, origem dos leads e taxa de conversão (números fictícios). */
export function DataPanel() {
  const max = Math.max(...trend);
  const pts = trend.map((v, i) => `${(i / (trend.length - 1)) * 200},${60 - (v / max) * 52}`).join(" ");
  return (
    <div className="rounded-xl bg-ink-900 p-4 text-white ring-1 ring-white/10">
      <div className="flex items-center justify-between gap-2">
        <p className="text-[13px] font-bold">Painel comercial · 8 semanas</p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold-400/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.1em] text-gold-200 ring-1 ring-gold-400/30">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-300" aria-hidden />Dados de demonstração
        </span>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-[1.3fr_1fr]">
        <div className="rounded-lg bg-white/[.04] p-3 ring-1 ring-white/10">
          <p className="text-[12px] text-zinc-400">Leads por semana</p>
          <p className="font-display text-xl font-extrabold">41 <span className="text-[12px] font-semibold text-emerald-400">↑ 128%</span></p>
          <svg viewBox="0 0 200 64" className="mt-1 h-14 w-full" role="img" aria-label="Tendência de crescimento de leads por semana">
            <polyline points={`0,64 ${pts} 200,64`} fill="rgba(217,174,85,.18)" stroke="none" />
            <polyline points={pts} fill="none" stroke="#e6c77e" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </div>
        <div className="rounded-lg bg-white/[.04] p-3 ring-1 ring-white/10">
          <p className="text-[12px] text-zinc-400">Taxa de conversão</p>
          <p className="font-display text-3xl font-extrabold text-gold-300">18,4%</p>
          <p className="text-[11.5px] text-zinc-400">lead → cliente</p>
        </div>
      </div>
      <div className="mt-3 rounded-lg bg-white/[.04] p-3 ring-1 ring-white/10">
        <p className="text-[12px] text-zinc-400">Origem dos leads</p>
        <ul className="mt-2 space-y-1.5">
          {origins.map((o) => (
            <li key={o.name} className="grid grid-cols-[84px_1fr_36px] items-center gap-2 text-[12px]">
              <span className="text-zinc-200">{o.name}</span>
              <span className="h-2 overflow-hidden rounded-full bg-white/10"><span className="block h-full rounded-full bg-gradient-to-r from-gold-500 to-gold-300" style={{ width: `${o.pct}%` }} /></span>
              <span className="text-right font-semibold text-zinc-200">{o.pct}%</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-2 flex items-center gap-1.5 text-[11px] text-zinc-500"><Sparkles className="h-3 w-3" aria-hidden />Números fictícios, apenas para demonstração.</p>
    </div>
  );
}
