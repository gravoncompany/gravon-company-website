import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "light" | "dark";
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", tone = "light", id }: Props) {
  const dark = tone === "dark";
  return (
    <Reveal className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}>
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[.14em] ${
          dark ? "bg-white/5 text-gold-300 ring-1 ring-white/10" : "bg-gold-50 text-gold-700 ring-1 ring-gold-200/70"
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />
        {eyebrow}
      </span>
      <h2 id={id} className={`mt-5 text-3xl font-bold leading-[1.15] text-balance sm:text-4xl lg:text-[44px] ${dark ? "text-white" : "text-ink-900"}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-base leading-relaxed text-pretty sm:text-lg ${dark ? "text-zinc-300" : "text-zinc-600"}`}>{description}</p>
      ) : null}
    </Reveal>
  );
}
