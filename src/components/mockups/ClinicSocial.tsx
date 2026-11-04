import { Bookmark, ChevronRight, Heart, MessageCircle, MoreHorizontal, Send } from "lucide-react";
import { clinic } from "@/content/example";
import { asset } from "@/lib/site";
import { auroraArts, type Art } from "@/content/media";
import { aurora, FaceArt } from "./SkinArt";

/** Peças de social media da clínica fictícia Aurora Estética (ilustrativas). */

export function ClinicAvatar({ size = "h-7 w-7 text-[11px]" }: { size?: string }) {
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full font-serif font-bold ${size}`} style={{ background: aurora.deep, color: aurora.soft }} aria-hidden>
      {clinic.initial}
    </span>
  );
}


function ArtImg({ art, className = "" }: { art: Art; className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={asset(art.src!)} alt={art.alt} width={art.width} height={art.height} loading="lazy" decoding="async" className={`block h-auto w-full ${className}`} style={{ aspectRatio: `${art.width} / ${art.height}` }} />;
}

function PostHeader() {
  return (
    <div className="flex items-center gap-2 px-3 py-2.5">
      <ClinicAvatar />
      <p className="text-[13px] font-semibold text-[#0f1419]">{clinic.handle}</p>
      <MoreHorizontal className="ml-auto h-4 w-4 text-[#262626]" aria-hidden />
    </div>
  );
}

function SlideCover() {
  return (
    <div className="relative flex aspect-square flex-col overflow-hidden p-5" style={{ background: `linear-gradient(160deg, ${aurora.bg}, ${aurora.soft})`, color: aurora.deep }}>
      <FaceArt className="pointer-events-none absolute -bottom-6 -right-8 h-[78%]" />
      <p className="relative text-[11px] font-bold uppercase tracking-[.2em]" style={{ color: aurora.accent }}>Guia rápido</p>
      <p className="relative mt-3 max-w-[60%] font-serif text-[26px] font-bold leading-[1.05]">{clinic.procedure}</p>
      <p className="relative mt-2 max-w-[55%] text-[13px] leading-snug">Como funciona, passo a passo</p>
      <span className="relative mt-auto inline-flex w-fit items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold">Arraste <ChevronRight className="h-3 w-3" aria-hidden /></span>
      <span className="absolute bottom-3 right-3 rounded-full px-2.5 py-0.5 text-[11px] font-semibold text-white" style={{ background: aurora.accent }}>01/02</span>
    </div>
  );
}

/** Carrossel: duas telas quadradas lado a lado (no celular, uma abaixo da outra), na ordem 01/02 → 02/02. */
export function CarouselPreview() {
  const [first, second] = auroraArts.carousel;
  return (
    <div className="overflow-hidden rounded-xl bg-white text-left shadow-card ring-1 ring-black/10">
      <PostHeader />
      <ol className="grid gap-1 sm:grid-cols-2" style={{ background: aurora.soft }} aria-label="Telas do carrossel">
        <li className="relative">
          {first.src ? <ArtImg art={first} /> : <div className="[&>div]:aspect-square"><SlideCover /></div>}
        </li>
        <li className="relative"><ArtImg art={second} /></li>
      </ol>
      <div className="flex items-center gap-3 px-3 pt-2.5 text-[#262626]" aria-hidden>
        <Heart className="h-5 w-5" /><MessageCircle className="h-5 w-5" /><Send className="h-5 w-5" />
        <span className="mx-auto flex gap-1"><span className="h-1.5 w-1.5 rounded-full bg-[#0095f6]" /><span className="h-1.5 w-1.5 rounded-full bg-[#c7c7c7]" /></span>
        <Bookmark className="h-5 w-5" />
      </div>
      <p className="px-3 pb-3 pt-1.5 text-[12.5px] leading-snug text-[#0f1419]"><span className="font-semibold">{clinic.handle}</span> Arraste para ver como é feita a {clinic.procedure.toLowerCase()} ✨</p>
    </div>
  );
}

export function ReelsCoverPreview() {
  return (
    <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-xl shadow-card ring-1 ring-black/10">
      <ArtImg art={auroraArts.reels} />
    </div>
  );
}

/** Stories na ordem 01 → 03: grade no computador; no celular, faixa deslizante com cada tela legível. */
export function StoriesPreview() {
  return (
    <div>
      <ol
        className="-mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 [scrollbar-width:thin] sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:overflow-visible sm:px-0 sm:pb-0"
        aria-label="Sequência de Stories"
        tabIndex={0}
      >
        {auroraArts.stories.map((art, i) => (
          <li key={i} className="w-[72%] max-w-[260px] shrink-0 snap-center overflow-hidden rounded-xl shadow-card ring-1 ring-black/10 sm:w-auto sm:max-w-none">
            <ArtImg art={art} />
          </li>
        ))}
      </ol>
      <p className="mt-2 text-center text-xs text-zinc-500 sm:hidden">Deslize para ver os 3 Stories →</p>
    </div>
  );
}
