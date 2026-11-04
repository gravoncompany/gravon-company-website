const items = ["Google Ads", "Meta Ads", "Sites e landing pages", "Pipeflow CRM", "Portal Gravon", "Automação com IA", "Inteligência de dados", "Metodologia CMC"];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-ink-900 py-5" aria-label="Frentes de atuação da Gravon">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-900 to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-900 to-transparent" aria-hidden />
      <ul className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <li key={i} aria-hidden={i >= items.length} className="flex items-center gap-10 whitespace-nowrap font-display text-lg font-bold text-zinc-300 sm:text-xl">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden />
          </li>
        ))}
      </ul>
    </div>
  );
}
