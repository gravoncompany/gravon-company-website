"use client";

import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { asset } from "@/lib/site";
import { portalShots, type PortalShot } from "@/content/media";

/**
 * Capturas do Portal: lado a lado no desktop (Dashboard | Próximos passos),
 * empilhadas no celular (Dashboard primeiro). Cada imagem amplia ao clicar.
 */
export function PortalShowcase() {
  const [open, setOpen] = useState<PortalShot | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-6">
        {portalShots.map((shot) => (
          <figure key={shot.id} className="flex min-w-0 flex-col">
            <h3 className="mb-3 text-lg font-bold text-ink-900">{shot.heading}</h3>
            <button
              type="button"
              onClick={() => setOpen(shot)}
              className="group relative flex w-full flex-1 cursor-zoom-in flex-col justify-start overflow-hidden rounded-2xl bg-[#070707] p-2 shadow-glow ring-1 ring-ink-900/10"
              aria-label={`Ampliar imagem: ${shot.heading}`}
            >
              <picture>
                <source media="(max-width: 767px)" srcSet={asset(shot.mobile.src)} width={shot.mobile.width} height={shot.mobile.height} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(shot.desktop.src)}
                  alt={shot.desktop.alt}
                  width={shot.desktop.width}
                  height={shot.desktop.height}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full rounded-xl"
                />
              </picture>
              <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-ink-950/85 px-3 py-1.5 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur">
                <ZoomIn className="h-3.5 w-3.5" aria-hidden /> Ampliar
              </span>
            </button>
            <figcaption className="mt-3 text-xs text-zinc-500">{shot.caption}</figcaption>
          </figure>
        ))}
      </div>

      {open ? (
        <div role="dialog" aria-modal="true" aria-label={open.heading} className="fixed inset-0 z-[70] flex flex-col bg-ink-950/95 backdrop-blur-sm" onClick={() => setOpen(null)}>
          <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-8">
            <p className="text-sm font-semibold text-white">{open.heading} <span className="font-normal text-zinc-400">· {open.caption}</span></p>
            <button type="button" onClick={() => setOpen(null)} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20" aria-label="Fechar">
              <X className="h-5 w-5" aria-hidden />
            </button>
          </div>
          <div className="min-h-0 flex-1 overflow-auto px-3 pb-6 sm:px-8" onClick={(e) => e.stopPropagation()}>
            <picture>
              <source media="(max-width: 767px)" srcSet={asset(open.mobile.src)} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(open.desktop.src)} alt={open.desktop.alt} width={open.desktop.width} height={open.desktop.height} className="mx-auto h-auto w-full max-w-5xl rounded-xl" />
            </picture>
          </div>
        </div>
      ) : null}
    </>
  );
}
