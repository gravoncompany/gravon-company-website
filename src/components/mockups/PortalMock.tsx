import { CalendarDays, Lightbulb, Sparkles } from "lucide-react";
import { BrowserFrame } from "../ui/BrowserFrame";

const kpis = ["Investimento", "Leads", "Custo por lead", "Oportunidades"];
const bars = [42, 55, 48, 66, 60, 74, 70, 86, 80, 92, 88, 96];

/** Dashboard ilustrativo do Portal Gravon (sem valores reais). */
export function PortalMock() {
  return (
    <BrowserFrame tone="light" title="Portal Gravon · Visão geral">
      <div className="bg-sand-50 p-4 sm:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-display text-sm font-bold text-ink-900">Desempenho das campanhas</p>
            <p className="text-[11px] text-zinc-500">Google Ads · Meta Ads</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-lg bg-white px-2.5 py-1.5 text-[11px] font-medium text-zinc-600 ring-1 ring-ink-900/10">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden /> Últimos 30 dias
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {kpis.map((k) => (
            <div key={k} className="rounded-xl bg-white p-3 shadow-card ring-1 ring-ink-900/5">
              <p className="text-[11px] text-zinc-500">{k}</p>
              <div className="mt-2 h-3.5 w-16 rounded bg-zinc-200" aria-hidden />
              <div className="mt-2 h-1 w-10 rounded-full bg-gold-300" aria-hidden />
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-[1.5fr_1fr]">
          <div className="rounded-xl bg-white p-4 shadow-card ring-1 ring-ink-900/5">
            <div className="flex gap-4 text-[11px] text-zinc-500">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-gold-500" />Oportunidades</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-zinc-300" />Contatos</span>
            </div>
            <div className="mt-4 flex h-28 items-end gap-1.5" aria-hidden>
              {bars.map((h, i) => (
                <div key={i} className="flex h-full flex-1 items-end gap-0.5">
                  <span className="flex-1 rounded-t bg-zinc-200" style={{ height: `${Math.max(20, h - 18)}%` }} />
                  <span className="flex-1 rounded-t bg-gradient-to-t from-gold-600 to-gold-300" style={{ height: `${h}%` }} />
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-ink-900 p-4 text-white shadow-card">
            <p className="flex items-center gap-2 text-xs font-semibold text-gold-200"><Sparkles className="h-4 w-4" aria-hidden />Recomendações da IA</p>
            <ul className="mt-3 space-y-2.5" aria-hidden>
              {[0.9, 0.75, 0.85].map((w, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Lightbulb className="h-3.5 w-3.5 shrink-0 text-gold-300" />
                  <span className="h-1.5 rounded-full bg-white/20" style={{ width: `${w * 100}%` }} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}
