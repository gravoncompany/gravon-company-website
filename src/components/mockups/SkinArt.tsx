/** Ilustrações vetoriais da identidade Aurora Estética (rosé + nude), usadas nas peças de social media. */
export const aurora = { deep: "#4a2f29", accent: "#b97a6b", soft: "#e9d3c9", bg: "#f6ebe5", gold: "#c8a27a" };

export function FaceArt({ className = "", tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const line = tone === "dark" ? aurora.soft : aurora.deep;
  return (
    <svg viewBox="0 0 200 240" className={className} aria-hidden>
      <defs>
        <radialGradient id={`glow-${tone}`} cx="55%" cy="40%" r="55%">
          <stop offset="0" stopColor="#fff" stopOpacity={tone === "dark" ? 0.25 : 0.9} />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`skin-${tone}`} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor={tone === "dark" ? "#c99484" : "#f3d9cf"} />
          <stop offset="1" stopColor={tone === "dark" ? "#8e5a4d" : "#e2b8a9"} />
        </linearGradient>
      </defs>
      <circle cx="112" cy="104" r="96" fill={`url(#glow-${tone})`} />
      {/* cabelo preso */}
      <path d="M78 42c18-26 70-28 90 4 12 19 8 40-2 54-6-24-26-40-56-42-14-1-26 2-38 8 0-9 2-17 6-24z" fill={aurora.deep} opacity=".92" />
      <circle cx="160" cy="34" r="16" fill={aurora.deep} opacity=".92" />
      {/* rosto de perfil */}
      <path d="M74 72c-6 14-6 24-2 32l-10 18c-2 4 0 7 5 8l6 1-1 9c0 4 3 6 6 7-2 4-1 8 3 10l-1 9c0 9 7 15 17 15 10 0 20-2 30-6l4 30h60c-2-26-10-48-24-62 10-16 12-40 4-60-10-22-34-34-58-32-14 1-28 9-39 21z" fill={`url(#skin-${tone})`} stroke={line} strokeWidth="1.6" strokeLinejoin="round" />
      {/* olho fechado e sobrancelha */}
      <path d="M86 92c5 3 10 3 15 0" fill="none" stroke={line} strokeWidth="1.8" strokeLinecap="round" />
      <path d="M84 82c6-3 13-3 19 0" fill="none" stroke={line} strokeWidth="1.4" strokeLinecap="round" opacity=".7" />
      {/* brilho da pele */}
      <path d="M100 112c6 4 14 4 20 0" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" opacity=".55" />
      {/* folhas */}
      <path d="M22 196c18-30 46-34 60-30-14 4-36 18-48 40" fill={aurora.accent} opacity=".55" />
      <path d="M30 214c26-12 50-6 58 2-16-2-38 0-54 10" fill={aurora.gold} opacity=".55" />
    </svg>
  );
}

export function DropsArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      {[[60, 70, 1], [120, 52, 0.7], [138, 118, 1.15], [78, 136, 0.8]].map(([x, y, s], i) => (
        <g key={i} transform={`translate(${x} ${y}) scale(${s})`}>
          <path d="M0 -30C10 -14 22 -2 22 12a22 22 0 0 1-44 0c0-14 12-26 22-42z" fill="#fff" opacity=".85" />
          <path d="M-8 6a10 10 0 0 0 8 12" stroke={aurora.accent} strokeWidth="3" fill="none" strokeLinecap="round" opacity=".6" />
        </g>
      ))}
    </svg>
  );
}

export function SerumArt({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 220" className={className} aria-hidden>
      <rect x="58" y="10" width="44" height="30" rx="8" fill={aurora.deep} />
      <rect x="66" y="36" width="28" height="18" rx="3" fill={aurora.gold} />
      <rect x="36" y="52" width="88" height="150" rx="22" fill="#fff" opacity=".9" />
      <rect x="36" y="110" width="88" height="92" rx="22" fill={aurora.soft} />
      <text x="80" y="92" textAnchor="middle" fontFamily="Georgia, serif" fontSize="15" fill={aurora.deep} fontWeight="700">AURORA</text>
      <text x="80" y="160" textAnchor="middle" fontFamily="Georgia, serif" fontSize="10" fill={aurora.deep} letterSpacing="2">SKIN</text>
    </svg>
  );
}
