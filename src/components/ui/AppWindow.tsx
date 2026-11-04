export function AppWindow({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-white/[0.09] bg-ink-900/95 shadow-[0_40px_120px_-30px_rgba(0,0,0,.9),0_0_0_1px_rgba(217,180,110,.08)] ${className}`}>
      <div className="flex items-center gap-2 border-b border-white/[0.06] bg-ink-850 px-4 py-3">
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="size-2.5 rounded-full bg-white/15" />
        <span className="ml-3 truncate rounded-md bg-white/[0.04] px-3 py-1 text-[11px] text-mist-500">{title}</span>
      </div>
      {children}
    </div>
  );
}
