"use client";

import { useEffect, useState } from "react";
import { Maximize2, X, ZoomIn } from "lucide-react";
import { asset } from "@/lib/site";
import { portalScreens } from "@/content/media";
import { BrowserFrame } from "../ui/BrowserFrame";

/** Captura real do Portal: recorte largo no desktop, cartões empilhados no celular, captura inteira ao ampliar. */
export function PortalShowcase() {
  const [open, setOpen] = useState(false);
  const { full, desktop, mobile } = portalScreens;

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
    <figure>
      {/* Desktop / tablet */}
      <div className="hidden md:block">
        <BrowserFrame title={desktop.title}>
          <button type="button" onClick={() => setOpen(true)} className="group relative block w-full cursor-zoom-in" aria-label="Ampliar a captura do Portal Gravon">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(desktop.src)} alt={desktop.alt} width={desktop.width} height={desktop.height} loading="lazy" decoding="async" className="block h-auto w-full bg-ink-950" style={{ aspectRatio: `${desktop.width} / ${desktop.height}` }} />
            <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-ink-950/80 px-3 py-1.5 text-xs font-semibold text-white opacity-0 ring-1 ring-white/10 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
              <ZoomIn className="h-3.5 w-3.5" aria-hidden /> Ampliar
            </span>
          </button>
        </BrowserFrame>
      </div>

      {/* Celular: cartões legíveis */}
      <div className="md:hidden">
        <div className="rounded-2xl bg-ink-900 p-3 shadow-glow ring-1 ring-white/10">
          <p className="px-1 pb-2.5 pt-1 text-[11px] font-medium text-zinc-400">Portal Gravon · Resumo executivo</p>
          <ul className="space-y-2.5">
            {mobile.map((m) => (
              <li key={m.src}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(m.src)} alt={m.alt} width={m.width} height={m.height} loading="lazy" decoding="async" className="block h-auto w-full rounded-xl" style={{ aspectRatio: `${m.width} / ${m.height}` }} />
              </li>
            ))}
          </ul>
          <button type="button" onClick={() => setOpen(true)} className="mt-3 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-white/5 text-sm font-semibold text-white ring-1 ring-white/15">
            <Maximize2 className="h-4 w-4" aria-hidden /> Ver captura completa
          </button>
        </div>
      </div>

      <figcaption className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-zinc-500">
        <ZoomIn className="h-3.5 w-3.5 shrink-0" aria-hidden />
        Captura real do Portal Gravon · Meta Ads, últimos 30 dias
      </figcaption>

      {open ? (
        <div role="dialog" aria-modal="true" aria-label={full.title} className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-950/90 p-3 backdrop-blur-sm sm:p-8" onClick={() => setOpen(false)}>
          <button type="button" onClick={() => setOpen(false)} className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20" aria-label="Fechar">
            <X className="h-5 w-5" aria-hidden />
          </button>
          <div className="max-h-full w-full max-w-7xl overflow-auto" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(full.src)} alt={full.alt} width={full.width} height={full.height} className="mx-auto h-auto min-w-[900px] max-w-none rounded-xl sm:min-w-0 sm:max-w-full" />
          </div>
        </div>
      ) : null}
    </figure>
  );
}
