"use client";

import { motion } from "motion/react";
import { Icon, type IconName } from "../ui/Icon";

const steps: { label: string; detail: string; icon: IconName }[] = [
  { label: "Google Ads / Meta Ads", detail: "Campanhas atraem quem tem interesse", icon: "megaphone" },
  { label: "Captação", detail: "Formulários, sites e WhatsApp", icon: "target" },
  { label: "CRM", detail: "Cada contato registrado com origem", icon: "kanban" },
  { label: "Qualificação", detail: "Prioridade para quem tem fit", icon: "filter" },
  { label: "Atendimento", detail: "Resposta rápida e acompanhada", icon: "chat" },
  { label: "Conversão", detail: "Oportunidade vira negócio", icon: "handshake" },
  { label: "Análise de resultados", detail: "O que funcionou volta para a estratégia", icon: "chart" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function JourneyFlow() {
  return (
    <div className="relative mt-16 md:mt-20">
      <ol aria-label="Jornada comercial acompanhada pela Gravon" className="relative grid gap-4 lg:grid-cols-7 lg:gap-3">
        {/* Linha conectora (desktop) */}
        <motion.span
          aria-hidden
          className="absolute left-[7%] right-[7%] top-[34px] hidden h-px origin-left bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300/30 lg:block"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.6, ease }}
        />
        {/* Linha conectora (mobile) */}
        <span aria-hidden className="absolute bottom-8 left-[34px] top-8 w-px bg-gradient-to-b from-gold-400 via-gold-600/60 to-transparent lg:hidden" />

        {steps.map((s, i) => (
          <motion.li
            key={s.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.15 + i * 0.12, ease }}
            className="relative flex items-start gap-5 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
          >
            <span className="relative z-10 flex size-[68px] shrink-0 items-center justify-center rounded-2xl border border-gold-400/30 bg-ink-900 shadow-[0_0_40px_-12px_rgba(217,180,110,.6)]">
              <Icon name={s.icon} className="size-6 text-gold-300" />
              <span className="absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full bg-gold-400 font-display text-[10px] font-semibold text-ink-950">
                {i + 1}
              </span>
            </span>
            <span className="pt-3 lg:pt-5">
              <span className="block font-display text-[15px] font-medium leading-tight">{s.label}</span>
              <span className="mt-1.5 block text-[13px] leading-snug text-mist-500">{s.detail}</span>
            </span>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
