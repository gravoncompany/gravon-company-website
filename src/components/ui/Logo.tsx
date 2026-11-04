export function LogoMark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <defs>
        <linearGradient id="logo-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f6e6bf" />
          <stop offset=".5" stopColor="#d9b46e" />
          <stop offset="1" stopColor="#9c773a" />
        </linearGradient>
      </defs>
      <ellipse cx="32" cy="32" rx="27" ry="11" fill="none" stroke="url(#logo-g)" strokeWidth="2.4" transform="rotate(-28 32 32)" />
      <circle cx="32" cy="32" r="11" fill="url(#logo-g)" />
      <circle cx="54" cy="20.5" r="2.6" fill="#f6e6bf" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="flex items-center gap-2.5">
      <LogoMark />
      <span className="font-display text-[17px] font-semibold tracking-tight">
        Gravon<span className="font-light text-mist-400"> Company</span>
      </span>
    </span>
  );
}
