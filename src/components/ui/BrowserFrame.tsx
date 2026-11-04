export function BrowserFrame({ children, title, tone = "dark", className = "" }: { children: React.ReactNode; title?: string; tone?: "light" | "dark"; className?: string }) {
  const dark = tone === "dark";
  return (
    <div className={`overflow-hidden rounded-2xl ${dark ? "bg-ink-800 shadow-glow ring-1 ring-white/10" : "bg-white shadow-card ring-1 ring-ink-900/10"} ${className}`}>
      <div className={`flex items-center gap-3 px-4 py-2.5 ${dark ? "border-b border-white/5 bg-ink-900/80" : "border-b border-ink-900/5 bg-sand-50"}`}>
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        </div>
        {title ? (
          <p className={`mx-auto max-w-xs flex-1 truncate text-center text-[11px] font-medium ${dark ? "text-zinc-400" : "text-zinc-500"}`}>{title}</p>
        ) : null}
        <div className="w-10" aria-hidden />
      </div>
      {children}
    </div>
  );
}
