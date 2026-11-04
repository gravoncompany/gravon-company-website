"use client";

import { useEffect, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { asset } from "@/lib/site";
import type { Screen } from "@/content/media";
import { BrowserFrame } from "./BrowserFrame";

/** Captura real exibida inteira; clique abre ampliada. */
export function ScreenshotSlot({ screen, tone = "dark", priority = false, caption = true }: { screen: Screen; tone?: "light" | "dark"; priority?: boolean; caption?: boolean }) {
  const [open, setOpen] = useState(false);

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
      <BrowserFrame title={screen.title} tone={tone}>
        <button type="button" onClick={() => setOpen(true)} className="group relative block w-full cursor-zoom-in" aria-label={`Ampliar imagem: ${screen.title}`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset(screen.src)}
            alt={screen.alt}
            width={screen.width}
            height={screen.height}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            className="block h-auto w-full bg-zinc-100"
            style={{ aspectRatio: `${screen.width} / ${screen.height}` }}
          />
          <span className="pointer-events-none absolute bottom-3 right-3 hidden items-center gap-1.5 rounded-full bg-ink-950/80 px-3 py-1.5 text-xs font-semibold text-white opacity-0 shadow-lg ring-1 ring-white/10 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:inline-flex">
            <ZoomIn className="h-3.5 w-3.5" aria-hidden /> Ampliar
          </span>
        </button>
      </BrowserFrame>
      {caption ? (
        <figcaption className={`mt-3 flex items-center justify-center gap-1.5 text-center text-xs ${tone === "dark" ? "text-zinc-400" : "text-zinc-500"}`}>
          <ZoomIn className="h-3.5 w-3.5 shrink-0" aria-hidden />
          <span>
            {screen.title} · dados demonstrativos · <span className="sm:hidden">toque</span>
            <span className="hidden sm:inline">clique</span> para ampliar
          </span>
        </figcaption>
      ) : null}
      {open ? (
        <div role="dialog" aria-modal="true" aria-label={screen.title} className="fixed inset-0 z-[70] flex items-center justify-center bg-ink-950/90 p-3 backdrop-blur-sm sm:p-8" onClick={() => setOpen(false)}>
          <button type="button" onClick={() => setOpen(false)} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20" aria-label="Fechar">
            <X className="h-5 w-5" aria-hidden />
          </button>
          <div className="max-h-full w-full max-w-7xl overflow-auto" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(screen.src)} alt={screen.alt} width={screen.width} height={screen.height} className="mx-auto h-auto min-w-[900px] max-w-none rounded-xl sm:min-w-0 sm:max-w-full" />
          </div>
        </div>
      ) : null}
    </figure>
  );
}
