"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { nav } from "@/lib/site";
import { Container } from "./ui/Container";
import { Logo } from "./ui/Logo";
import { LeadButton } from "./lead/LeadButton";

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
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${open ? "bg-ink-950 ring-1 ring-white/5" : scrolled ? "bg-ink-950/85 ring-1 ring-white/5 backdrop-blur-xl" : ""}`}>
      <Container className="flex h-16 items-center justify-between lg:h-[72px]">
        <a href="#topo" aria-label="Gravon Company — início" onClick={() => setOpen(false)}>
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-zinc-300 transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <LeadButton source="cabecalho" className="!min-h-[42px] !px-5 !py-2 !text-sm">Fale com um especialista</LeadButton>
        </div>
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg text-white lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden /> : <Menu className="h-6 w-6" aria-hidden />}
        </button>
      </Container>
      {open ? (
        <div id="mobile-menu" className="border-t border-white/5 lg:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-zinc-200 hover:bg-white/5">
                {item.label}
              </a>
            ))}
            <div className="mt-3">
              <LeadButton source="menu-celular" className="w-full" arrow onClick={() => setOpen(false)}>Fale com um especialista</LeadButton>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
