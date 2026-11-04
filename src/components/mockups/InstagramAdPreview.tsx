import { Bookmark, ChevronRight, Heart, MessageCircle, MoreHorizontal, Send } from "lucide-react";
import { example } from "@/content/example";
import { ExampleMark } from "./BrandLogos";

/** Simulação de anúncio no feed do Instagram (empresa fictícia). */
export function InstagramAdPreview() {
  return (
    <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-xl bg-white text-left text-[#0f1419] shadow-card ring-1 ring-black/10">
      <div className="flex items-center gap-2.5 px-3 py-2.5">
        <span className="rounded-full bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#4f5bd5] p-[2px]">
          <span className="block rounded-full bg-white p-[1.5px]"><ExampleMark className="h-7 w-7 text-[12px]" /></span>
        </span>
        <div className="min-w-0 leading-tight">
          <p className="truncate text-[12.5px] font-semibold">{example.handle}</p>
          <p className="text-[10.5px] text-[#737373]">Patrocinado</p>
        </div>
        <MoreHorizontal className="ml-auto h-4 w-4 text-[#262626]" aria-hidden />
      </div>

      {/* Criativo */}
      <div className="relative flex aspect-square flex-col justify-between overflow-hidden bg-[radial-gradient(circle_at_70%_20%,#2a3b2f,#0d1410_70%)] p-5 text-white">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#d9b46e]/20 blur-2xl" aria-hidden />
        <p className="relative font-serif text-[11px] italic tracking-wide text-[#d9b46e]">{example.name}</p>
        <div className="relative">
          <p className="font-serif text-[22px] font-bold uppercase leading-[1.1] tracking-wide">{example.headline}</p>
          <p className="mt-2.5 text-[11.5px] leading-snug text-white/80">Consultoria e defesa em processos eleitorais, com segurança jurídica.</p>
        </div>
        <span className="relative inline-flex w-fit items-center gap-1.5 rounded-md bg-[#1f7a3a] px-3 py-1.5 text-[11px] font-semibold">
          <MessageCircle className="h-3.5 w-3.5" aria-hidden /> {example.cta}
        </span>
      </div>

      <div className="flex items-center justify-between bg-[#efefef] px-3 py-2.5 text-[12.5px] font-semibold">
        Saiba mais <ChevronRight className="h-4 w-4" aria-hidden />
      </div>
      <div className="flex items-center gap-3.5 px-3 pt-2.5 text-[#262626]" aria-hidden>
        <Heart className="h-5 w-5" /><MessageCircle className="h-5 w-5" /><Send className="h-5 w-5" />
        <Bookmark className="ml-auto h-5 w-5" />
      </div>
      <p className="px-3 pb-3 pt-1.5 text-[11.5px] leading-snug">
        <span className="font-semibold">{example.handle}</span> Atendimento online em todo o Brasil. Fale com a equipe pelo WhatsApp.
      </p>
    </div>
  );
}
