"use client";

import { motion } from "motion/react";
import { Icon } from "../ui/Icon";
import { AppWindow } from "../ui/AppWindow";

const kpis = ["Investimento", "Leads", "Custo por lead", "Oportunidades"];
const ease = [0.22, 1, 0.36, 1] as const;

// Curvas abstratas (sem escala nem valores reais).
const lineA = "M0,70 C30,62 50,66 80,52 S130,40 160,44 S210,24 240,28 S290,14 320,10";
const lineB = "M0,80 C30,78 60,74 90,70 S140,64 170,60 S220,52 250,50 S300,40 320,38";

export function PortalDashboard() {
  return (
    <AppWindow title="Portal Gravon · Visão geral">
      <div className="p-3 sm:p-5">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-xs font-medium">Desempenho das campanhas</p>
            <p className="text-[10px] text-mist-500">Google Ads · Meta Ads</p>
          </div>
          <div className="flex gap-1 rounded-lg bg-white/[0.04] p-1 text-[10px]">
            {["7d", "30d", "90d"].map((p, i) => (
              <span key={p} className={`rounded-md px-2 py-1 ${i === 1 ? "bg-gold-400/15 text-gold-200" : "text-mist-500"}`}>{p}</span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {kpis.map((k) => (
            <div key={k} className="rounded-xl border border-white/[0.06] bg-ink-850 p-3">
              <p className="text-[10px] text-mist-500">{k}</p>
              <p className="mt-1.5 select-none font-display text-base tracking-widest text-mist-300 blur-[3px]" aria-hidden>••••</p>
            </div>
          ))}
        </div>

        <div className="mt-3 grid gap-3 md:grid-cols-[1.6fr_1fr]">
          <div className="rounded-xl border border-white/[0.06] bg-ink-850 p-3">
            <div className="mb-2 flex items-center gap-3 text-[10px] text-mist-500">
              <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-gold-300" />Oportunidades</span>
              <span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-white/40" />Contatos</span>
            </div>
            <svg viewBox="0 0 320 90" className="h-28 w-full" aria-hidden>
              <defs>
                <linearGradient id="portal-fill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#d9b46e" stopOpacity="0.35" />
                  <stop offset="1" stopColor="#d9b46e" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[20, 45, 70].map((y) => (
                <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="rgba(255,255,255,.05)" />
              ))}
              <motion.path d={`${lineA} L320,90 L0,90 Z`} fill="url(#portal-fill)" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.8 }} />
              <motion.path d={lineB} fill="none" stroke="rgba(255,255,255,.35)" strokeWidth="1.5" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.6, ease }} />
              <motion.path d={lineA} fill="none" stroke="#ecd29a" strokeWidth="2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.8, ease, delay: 0.2 }} />
            </svg>
          </div>
          <div className="rounded-xl border border-gold-400/25 bg-gradient-to-b from-gold-400/[0.08] to-transparent p-3">
            <p className="flex items-center gap-1.5 text-[11px] font-medium text-gold-200">
              <Icon name="sparkle" className="size-3.5" /> Recomendações da IA
            </p>
            <div className="mt-3 space-y-2.5">
              {[0.9, 0.7, 0.8].map((w, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Icon name="check" className="size-3 shrink-0 text-gold-400" />
                  <div className="h-1.5 rounded-full bg-white/10" style={{ width: `${w * 100}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 rounded-xl border border-white/[0.06] bg-ink-850 p-3">
          <p className="mb-3 text-[10px] uppercase tracking-wider text-mist-500">Histórico de relatórios</p>
          <div className="flex h-14 items-end gap-1.5">
            {[40, 55, 48, 62, 58, 70, 66, 78, 74, 85, 80, 92].map((h, i) => (
              <motion.span
                key={i}
                className="flex-1 rounded-t bg-gradient-to-t from-gold-700/60 to-gold-400/80"
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 + i * 0.04, ease }}
              />
            ))}
          </div>
        </div>
      </div>
    </AppWindow>
  );
}
