import { BarChart3, Heart, MessageCircle, Search, Send, Sparkles } from "lucide-react";

/** Cartões ilustrativos (sem dados reais) que orbitam a captura do Pipeflow no Hero. */

export function AdSearchCard() {
  return (
    <div className="w-64 rounded-2xl bg-white p-4 text-left shadow-card ring-1 ring-ink-900/10">
      <div className="flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1.5 text-[11px] text-zinc-500">
        <Search className="h-3.5 w-3.5" aria-hidden /> serviço + sua cidade
      </div>
      <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">Patrocinado</p>
      <p className="mt-1 text-[13px] font-semibold leading-snug text-[#1a0dab]">Sua empresa no topo da pesquisa</p>
      <div className="mt-2 space-y-1.5" aria-hidden>
        <div className="h-1.5 w-full rounded-full bg-zinc-200" />
        <div className="h-1.5 w-4/5 rounded-full bg-zinc-200" />
      </div>
      <p className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-gold-50 px-2 py-1 text-[10px] font-semibold text-gold-700 ring-1 ring-gold-200">Google Ads · Rede de Pesquisa</p>
    </div>
  );
}

export function SocialAdCard() {
  return (
    <div className="w-56 overflow-hidden rounded-2xl bg-white text-left shadow-card ring-1 ring-ink-900/10">
      <div className="flex items-center gap-2 p-3">
        <span className="h-6 w-6 rounded-full bg-gradient-to-br from-gold-300 to-gold-600" aria-hidden />
        <div>
          <p className="text-[11px] font-semibold text-ink-900">Sua marca</p>
          <p className="text-[9px] text-zinc-500">Patrocinado</p>
        </div>
      </div>
      <div className="relative aspect-[4/3] bg-gradient-to-br from-ink-900 via-ink-700 to-gold-700" aria-hidden>
        <div className="absolute inset-x-4 bottom-4 space-y-1.5">
          <div className="h-2 w-3/4 rounded-full bg-white/80" />
          <div className="h-2 w-1/2 rounded-full bg-gold-300/90" />
        </div>
      </div>
      <div className="flex items-center gap-3 p-3 text-zinc-500" aria-hidden>
        <Heart className="h-4 w-4" />
        <MessageCircle className="h-4 w-4" />
        <Send className="h-4 w-4" />
        <span className="ml-auto rounded-md bg-ink-900 px-2 py-1 text-[9px] font-semibold text-white">Saiba mais</span>
      </div>
      <p className="border-t border-zinc-100 px-3 py-2 text-[10px] font-semibold text-gold-700">Meta Ads · Instagram e Facebook</p>
    </div>
  );
}

export function AiSignalCard() {
  return (
    <div className="w-64 rounded-2xl bg-ink-900 p-4 text-left shadow-glow ring-1 ring-gold-400/25">
      <p className="flex items-center gap-2 text-xs font-semibold text-gold-200">
        <Sparkles className="h-4 w-4" aria-hidden /> Gravon IA
      </p>
      <p className="mt-2 text-[13px] font-semibold text-white">Sinal de interesse identificado</p>
      <div className="mt-3 rounded-lg bg-white/5 p-2.5 ring-1 ring-white/10" aria-hidden>
        <div className="h-1.5 w-11/12 rounded-full bg-white/20" />
        <div className="mt-1.5 h-1.5 w-2/3 rounded-full bg-white/20" />
      </div>
      <p className="mt-3 text-[10px] text-zinc-400">Sugestão de etapa aguardando revisão do time</p>
    </div>
  );
}

export function PortalCard() {
  const bars = [38, 52, 46, 64, 58, 76, 70, 88];
  return (
    <div className="w-56 rounded-2xl bg-white p-4 text-left shadow-card ring-1 ring-ink-900/10">
      <p className="flex items-center gap-2 text-xs font-semibold text-ink-900">
        <BarChart3 className="h-4 w-4 text-gold-600" aria-hidden /> Portal Gravon
      </p>
      <p className="mt-1 text-[10px] text-zinc-500">Desempenho das campanhas</p>
      <div className="mt-3 flex h-16 items-end gap-1.5" aria-hidden>
        {bars.map((h, i) => (
          <span key={i} className="flex-1 rounded-t bg-gradient-to-t from-gold-500 to-gold-300" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}
