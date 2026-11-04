import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "left", id }: Props) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal>
        <p className={`flex items-center gap-3 font-display text-xs font-medium uppercase tracking-[0.32em] text-gold-400 ${centered ? "justify-center" : ""}`}>
          <span aria-hidden className="h-px w-8 bg-gold-500/70" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 id={id} className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-mist-400 text-pretty md:text-lg">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
