/** Marca provisória (substituir pelo logotipo oficial em SVG). */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <defs>
        <linearGradient id="gm" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f5e3b3" />
          <stop offset="1" stopColor="#c99a3a" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill="#131316" />
      <rect x=".5" y=".5" width="39" height="39" rx="10.5" fill="none" stroke="rgba(230,199,126,.35)" />
      <path d="M27.5 14.2A9 9 0 1 0 29 22h-8.5" fill="none" stroke="url(#gm)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="29" cy="11" r="2.1" fill="#e6c77e" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "light" | "dark" }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <LogoMark />
      <span className={`font-display text-lg font-extrabold tracking-tight ${tone === "dark" ? "text-white" : "text-ink-900"}`}>
        Gravon <span className="font-semibold text-gold-400">Company</span>
      </span>
    </span>
  );
}
