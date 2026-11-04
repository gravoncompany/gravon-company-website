import { Briefcase, Gavel, Landmark, MessageCircle, Scale } from "lucide-react";
import { example } from "@/content/example";

const icons = [Landmark, Briefcase, Gavel, Scale];

/** Prévia em formato de celular de uma landing page (estrutura inspirada na referência enviada; empresa fictícia). */
export function LandingPhonePreview() {
  return (
    <div className="mx-auto w-full max-w-[250px] rounded-[2.2rem] bg-[#1b1b1f] p-2.5 shadow-glow ring-1 ring-white/15">
      <div className="relative overflow-hidden rounded-[1.7rem] bg-white">
        <div className="absolute left-1/2 top-1.5 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-black" aria-hidden />
        {/* Hero */}
        <div className="relative bg-[linear-gradient(160deg,#1c1712_0%,#0c0b09_60%,#17120c_100%)] px-4 pb-6 pt-9 text-left text-white">
          <div className="pointer-events-none absolute inset-0 opacity-25 [background:repeating-linear-gradient(90deg,transparent_0_22px,rgba(217,180,110,.25)_22px_23px)]" aria-hidden />
          <div className="relative flex items-center justify-between">
            <span className="font-serif text-[10px] font-semibold uppercase tracking-[.25em] text-[#e9d3a0]">Lumen</span>
            <span className="flex flex-col gap-[3px]" aria-hidden>{[0, 1, 2].map((i) => <span key={i} className="h-[1.5px] w-3.5 bg-white/80" />)}</span>
          </div>
          <p className="relative mt-7 font-serif text-[10px] italic text-[#d9b46e]">{example.name}</p>
          <p className="relative mt-1.5 font-serif text-[19px] font-bold uppercase leading-[1.12] tracking-wide">{example.headline}</p>
          <p className="relative mt-2.5 text-[10.5px] leading-snug text-white/80">{example.offer}</p>
          <span className="relative mt-4 inline-flex items-center gap-1.5 rounded-[5px] bg-[#1f7a3a] px-3 py-2 text-[10.5px] font-bold">
            <MessageCircle className="h-3.5 w-3.5" aria-hidden /> {example.cta}
          </span>
        </div>
        {/* Serviços */}
        <div className="bg-[#f7f5f1] px-4 pb-5 pt-5 text-left">
          <p className="font-serif text-[9.5px] italic text-[#a8803a]">Nossos serviços</p>
          <p className="font-serif text-[15px] font-semibold text-[#1d1b18]">Atuação Nacional</p>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {example.services.map((s, i) => {
              const Icon = icons[i];
              return (
                <div key={s} className="rounded-lg bg-white p-2.5 text-center ring-1 ring-black/5">
                  <Icon className="mx-auto h-4 w-4 text-[#b8893f]" aria-hidden />
                  <p className="mt-1 font-serif text-[9.5px] font-semibold leading-tight text-[#1d1b18]">{s}</p>
                  <span className="mt-1.5 inline-block rounded-[3px] bg-[#1f7a3a] px-1.5 py-0.5 text-[7.5px] font-bold text-white">Saiba mais</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
