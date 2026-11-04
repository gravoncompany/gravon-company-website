// Campo de partículas estático e determinístico (sem JS no cliente).
function seeded(n: number) {
  let s = n;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function Starfield({ count = 70, seed = 7, className = "" }: { count?: number; seed?: number; className?: string }) {
  const rnd = seeded(seed);
  const stars = Array.from({ length: count }, () => ({
    x: rnd() * 100,
    y: rnd() * 100,
    r: rnd() * 1.1 + 0.25,
    o: rnd() * 0.5 + 0.15,
    d: rnd() * 6,
  }));
  return (
    <svg className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} aria-hidden preserveAspectRatio="none">
      {stars.map((s, i) => (
        <circle
          key={i}
          cx={`${s.x}%`}
          cy={`${s.y}%`}
          r={s.r}
          fill={i % 6 === 0 ? "#ecd29a" : "#f4f1ea"}
          opacity={s.o}
          className={i % 4 === 0 ? "animate-pulse-soft" : undefined}
          style={i % 4 === 0 ? { animationDelay: `${s.d}s` } : undefined}
        />
      ))}
    </svg>
  );
}
