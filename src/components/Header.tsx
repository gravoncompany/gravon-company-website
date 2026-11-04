"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { nav } from "@/lib/site";
import { Logo } from "./ui/Logo";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        open ? "border-b border-white/[0.06] bg-ink-950" : scrolled ? "border-b border-white/[0.06] bg-ink-950/75 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="Gravon Company — início" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="rounded-full px-3.5 py-2 text-sm text-mist-300 transition hover:bg-white/[0.04] hover:text-mist-100">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contato"
            className="hidden rounded-full border border-gold-400/40 bg-gold-400/10 px-5 py-2.5 text-sm font-medium text-gold-200 transition hover:border-gold-300 hover:bg-gold-400/20 sm:inline-flex"
          >
            Fale com um especialista
          </a>
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-white/10 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" /> : <path d="M4 8h16M4 16h16" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-menu"
            aria-label="Menu móvel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100dvh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 pb-10 pt-4">
              {nav.map((item, i) => (
                <motion.li key={item.href} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.05 * i + 0.1 }}>
                  <a href={item.href} onClick={() => setOpen(false)} className="block border-b border-white/[0.06] py-4 font-display text-2xl">
                    {item.label}
                  </a>
                </motion.li>
              ))}
              <li className="pt-6">
                <a href="#contato" onClick={() => setOpen(false)} className="flex justify-center rounded-full bg-gold-400 px-6 py-4 font-medium text-ink-950">
                  Fale com um especialista
                </a>
              </li>
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
