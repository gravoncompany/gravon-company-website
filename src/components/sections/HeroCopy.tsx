"use client";

import { motion } from "motion/react";

const ease = [0.22, 1, 0.36, 1] as const;

export function HeroCopy() {
  return (
    <>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        className="inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-gold-400/[0.06] px-4 py-1.5 font-display text-xs tracking-[0.2em] text-gold-300 uppercase"
      >
        <span aria-hidden className="size-1.5 animate-pulse-soft rounded-full bg-gold-300" />
        Presença é a nova gravidade
      </motion.p>
      <h1 id="hero-title" className="mt-7 font-display text-[2.6rem] font-semibold leading-[1.02] tracking-tight text-balance sm:text-6xl xl:text-7xl">
        <motion.span className="block" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease }}>
          Marketing que atrai.
        </motion.span>
        <motion.span className="block text-gold-gradient" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.25, ease }}>
          Inteligência que converte.
        </motion.span>
      </h1>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease }}
        className="mt-7 max-w-xl text-lg leading-relaxed text-mist-300 text-pretty md:text-xl"
      >
        A Gravon Company conecta estratégias de marketing digital, inteligência artificial e tecnologia comercial para transformar oportunidades em resultados.
      </motion.p>
    </>
  );
}
