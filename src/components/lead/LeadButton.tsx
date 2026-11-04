"use client";

import { Arrow, buttonBase, buttonStyles, type Variant } from "../ui/Button";
import { useLeadModal } from "./LeadModalProvider";

type Props = { source: string; children: React.ReactNode; variant?: Variant; arrow?: boolean; className?: string; plain?: boolean; onClick?: () => void };

/** Botão de captação: abre o pop-up de 3 etapas na própria página. */
export function LeadButton({ source, children, variant = "primary", arrow = false, className = "", plain = false, onClick }: Props) {
  const { open } = useLeadModal();
  return (
    <button
      type="button"
      data-lead-cta={source}
      aria-haspopup="dialog"
      onClick={() => {
        onClick?.();
        open(source);
      }}
      className={plain ? className : `${buttonBase} ${buttonStyles[variant]} ${className}`}
    >
      {children}
      {arrow && !plain ? <Arrow /> : null}
    </button>
  );
}
