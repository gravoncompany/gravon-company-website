import { Check } from "lucide-react";

export function CheckList({ items, tone = "light" }: { items: string[]; tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${dark ? "bg-gold-400/20 text-gold-300" : "bg-gold-400 text-ink-950"}`}>
            <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
          </span>
          <span className={`text-[15px] leading-relaxed ${dark ? "text-zinc-300" : "text-zinc-700"}`}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
