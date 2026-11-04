import { Bookmark, CalendarCheck, ChevronRight, Heart, MessageCircle, MoreHorizontal, Play, Send, Sparkles } from "lucide-react";
import { clinic } from "@/content/example";
import { aurora, DropsArt, FaceArt, SerumArt } from "./SkinArt";

/** Peças de social media da clínica fictícia Aurora Estética (ilustrativas). */

export function ClinicAvatar({ size = "h-7 w-7 text-[11px]" }: { size?: string }) {
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full font-serif font-bold ${size}`} style={{ background: aurora.deep, color: aurora.soft }} aria-hidden>
      {clinic.initial}
    </span>
  );
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
    <div className="relative flex aspect-[4/5] flex-col overflow-hidden p-5" style={{ background: `linear-gradient(160deg, ${aurora.bg}, ${aurora.soft})`, color: aurora.deep }}>
      <FaceArt className="pointer-events-none absolute -bottom-6 -right-8 h-[78%]" />
      <p className="relative text-[11px] font-bold uppercase tracking-[.2em]" style={{ color: aurora.accent }}>Guia rápido</p>
      <p className="relative mt-3 max-w-[60%] font-serif text-[26px] font-bold leading-[1.05]">{clinic.procedure}</p>
      <p className="relative mt-2 max-w-[55%] text-[13px] leading-snug">Como funciona, passo a passo</p>
      <span className="relative mt-auto inline-flex w-fit items-center gap-1 rounded-full bg-white/80 px-3 py-1 text-[11px] font-semibold">Arraste <ChevronRight className="h-3 w-3" aria-hidden /></span>
      <span className="absolute right-3 top-3 rounded-full bg-black/35 px-2 py-0.5 text-[10px] font-semibold text-white">1/2</span>
    </div>
  );
}

function SlideSteps() {
  const steps = ["Avaliação da pele", "Higienização e extração", "Hidratação e proteção"];
  return (
    <div className="relative flex aspect-[4/5] flex-col overflow-hidden p-5 text-white" style={{ background: `linear-gradient(170deg, ${aurora.accent}, ${aurora.deep})` }}>
      <DropsArt className="pointer-events-none absolute -right-8 top-[38%] h-28 opacity-35" />
      <p className="relative text-[11px] font-bold uppercase tracking-[.2em] text-white/80">Como é feita</p>
      <p className="relative mt-2 max-w-[80%] font-serif text-[22px] font-bold leading-tight">3 etapas para uma pele renovada</p>
      <ol className="relative mt-auto space-y-2.5">
        {steps.map((s, i) => (
          <li key={s} className="flex items-center gap-2.5 rounded-xl bg-white/12 px-3 py-2 ring-1 ring-white/20">
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full font-serif text-[12px] font-bold" style={{ background: aurora.soft, color: aurora.deep }}>{i + 1}</span>
            <span className="text-[13px] font-semibold">{s}</span>
          </li>
        ))}
      </ol>
      <span className="absolute right-3 top-3 rounded-full bg-black/35 px-2 py-0.5 text-[10px] font-semibold text-white">2/2</span>
    </div>
  );
}

/** Carrossel: duas telas lado a lado (no celular, uma abaixo da outra). */
export function CarouselPreview() {
  return (
    <div className="overflow-hidden rounded-xl bg-white text-left shadow-card ring-1 ring-black/10">
      <PostHeader />
      <div className="grid gap-1 sm:grid-cols-2" style={{ background: aurora.soft }}>
        <SlideCover />
        <SlideSteps />
      </div>
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
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[260px] overflow-hidden rounded-xl text-left shadow-card ring-1 ring-black/10" style={{ background: `linear-gradient(170deg, ${aurora.soft} 0%, ${aurora.accent} 55%, ${aurora.deep} 100%)` }}>
      <FaceArt tone="dark" className="pointer-events-none absolute -right-10 top-8 h-[62%] opacity-95" />
      <div className="relative flex h-full flex-col p-4 text-white">
        <div className="flex items-center gap-2">
          <ClinicAvatar size="h-7 w-7 text-[11px]" />
          <p className="text-[12px] font-semibold text-[#4a2f29]">{clinic.handle}</p>
          <span className="ml-auto rounded bg-black/30 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider">Reels</span>
        </div>
        <div className="mt-auto">
          <p className="text-[11px] font-bold uppercase tracking-[.2em] text-white/85">Dúvida comum</p>
          <p className="mt-2 font-serif text-[32px] font-bold leading-[1.02]">{clinic.reelsQuestion}</p>
          <p className="mt-3 text-[13px] leading-snug text-white/90">A especialista responde em 30 segundos.</p>
          <div className="mt-4 flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 backdrop-blur" aria-hidden><Play className="h-4 w-4 fill-white" /></span>
            <span className="text-[11px] text-white/80">Capa do vídeo</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const stories = [
  { kicker: "Você sabia?", text: "Sua pele também precisa de pausa e cuidado profundo.", art: "face" as const },
  { kicker: "Na avaliação", text: "Analisamos sua pele e indicamos o cuidado ideal.", art: "serum" as const },
  { kicker: "Últimos horários", text: "Agende sua avaliação", art: "cta" as const },
];

export function StoriesPreview() {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4">
      {stories.map((s, i) => (
        <div key={i} className="relative aspect-[9/16] overflow-hidden rounded-xl text-left shadow-card ring-1 ring-black/10" style={{ background: i === 0 ? `linear-gradient(180deg, ${aurora.bg}, ${aurora.soft})` : i === 1 ? `linear-gradient(170deg, ${aurora.accent}, ${aurora.deep})` : aurora.deep }}>
          <div className="absolute inset-x-2 top-2 z-10 flex gap-1" aria-hidden>
            {stories.map((_, j) => <span key={j} className={`h-[3px] flex-1 rounded-full ${j <= i ? (i === 0 ? "bg-[#4a2f29]" : "bg-white") : (i === 0 ? "bg-[#4a2f29]/25" : "bg-white/35")}`} />)}
          </div>
          <div className="absolute left-2 top-4 z-10 flex items-center gap-1.5">
            <ClinicAvatar size="h-5 w-5 text-[8px] sm:h-6 sm:w-6 sm:text-[10px]" />
            <span className="hidden text-[10px] font-semibold sm:inline" style={{ color: i === 0 ? aurora.deep : "#fff" }}>{clinic.handle}</span>
          </div>
          {s.art === "face" ? <FaceArt className="pointer-events-none absolute -bottom-3 -right-5 h-[46%]" /> : null}
          {s.art === "serum" ? <SerumArt className="pointer-events-none absolute -bottom-2 right-1 h-[38%] opacity-90" /> : null}
          {s.art === "cta" ? <Sparkles className="pointer-events-none absolute right-3 top-12 h-8 w-8 text-[#c8a27a]" aria-hidden /> : null}
          <div className={`relative flex h-full flex-col px-2.5 pb-10 sm:px-4 ${s.art === "cta" ? "justify-center pt-10" : "pt-12 sm:pt-16"}`}>
            <p className="text-[10px] font-bold uppercase tracking-[.14em] sm:text-[11px]" style={{ color: i === 0 ? aurora.accent : "rgba(255,255,255,.8)" }}>{s.kicker}</p>
            <p className={`mt-1.5 font-serif font-bold leading-tight ${i === 2 ? "text-[17px] sm:text-[24px]" : "text-[12.5px] sm:text-[17px]"}`} style={{ color: i === 0 ? aurora.deep : "#fff" }}>{s.text}</p>
            {s.art === "cta" ? (
              <span className="mt-3 inline-flex w-full items-center justify-center gap-1 rounded-lg bg-white px-1.5 py-2 text-[10.5px] font-bold text-[#0f1419] shadow sm:text-[12px]">
                <CalendarCheck className="h-3.5 w-3.5 shrink-0" style={{ color: aurora.accent }} aria-hidden /> Agendar
              </span>
            ) : null}
          </div>
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[10px] font-semibold" style={{ color: i === 0 ? aurora.deep : "rgba(255,255,255,.85)" }}>{i + 1}/3</span>
        </div>
      ))}
    </div>
  );
}
