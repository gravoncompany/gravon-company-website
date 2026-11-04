import { ArrowRight } from "lucide-react";

export type Variant = "primary" | "ghost-dark" | "dark" | "secondary";

export const buttonBase =
  "group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-6 py-3 text-[15px] font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[.98]";

export const buttonStyles: Record<Variant, string> = {
  primary: "bg-gold-400 text-ink-950 shadow-glow hover:bg-gold-300 focus-visible:outline-gold-200",
  "ghost-dark": "bg-white/5 text-white ring-1 ring-white/15 hover:bg-white/10 focus-visible:outline-white",
  dark: "bg-ink-900 text-white hover:bg-ink-700 focus-visible:outline-ink-900",
  secondary: "bg-white text-ink-900 ring-1 ring-ink-900/10 hover:ring-ink-900/25 focus-visible:outline-gold-500",
};

export function Arrow() {
  return <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />;
}

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  arrow?: boolean;
  external?: boolean;
  className?: string;
};

export function Button({ href, children, variant = "primary", arrow = false, external = false, className = "" }: Props) {
  return (
    <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className={`${buttonBase} ${buttonStyles[variant]} ${className}`}>
      {children}
      {arrow ? <Arrow /> : null}
    </a>
  );
}
