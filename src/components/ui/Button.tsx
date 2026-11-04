import Link from "next/link";

type Variant = "primary" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium transition duration-300 will-change-transform focus-visible:outline-offset-4 md:text-[15px]";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-gold-300 to-gold-500 text-ink-950 shadow-[0_0_0_1px_rgba(236,210,154,.5),0_10px_40px_-10px_rgba(217,180,110,.6)] hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(246,230,191,.8),0_16px_50px_-10px_rgba(217,180,110,.8)]",
  ghost:
    "border border-white/12 bg-white/[0.03] text-mist-100 hover:-translate-y-0.5 hover:border-gold-400/50 hover:bg-white/[0.06]",
};

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
  arrow?: boolean;
};

export function Button({ href, children, variant = "primary", external, className = "", arrow = true }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const content = (
    <>
      {children}
      {arrow ? (
        <svg aria-hidden viewBox="0 0 20 20" className="size-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 10h12m-5-5 5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : null}
    </>
  );
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}
