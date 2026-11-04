import { Bookmark, ChevronRight, Heart, MessageCircle, MoreHorizontal, Play, Send } from "lucide-react";
import { clinic } from "@/content/example";

/** Peças de social media da clínica fictícia (ilustrativas). */

const rose = { bg: "#f6ebe5", deep: "#4a2f29", accent: "#b97a6b", soft: "#e9d3c9" };

export function ClinicAvatar({ size = "h-7 w-7 text-[11px]" }: { size?: string }) {
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full font-serif font-bold ${size}`} style={{ background: rose.deep, color: rose.soft }} aria-hidden>
      {clinic.initial}
    </span>
  );
}

const slides = [
  { kicker: "Guia rápido", title: clinic.procedure, body: "Como funciona, passo a passo", cover: true },
  { kicker: "Passo 1", title: "Avaliação da pele", body: "Entendemos o tipo de pele e o que ela precisa." },
  { kicker: "Passo 2", title: "Higienização e extração", body: "Remoção de impurezas com técnica e cuidado." },
  { kicker: "Passo 3", title: "Hidratação e proteção", body: "Finalização calmante e orientações de cuidado em casa." },
];

export function CarouselPreview() {
  return (
    <div className="overflow-hidden rounded-xl bg-white text-left shadow-card ring-1 ring-black/10">
      <div className="flex items-center gap-2 px-3 py-2.5">
        <ClinicAvatar />
        <p className="text-[12px] font-semibold text-[#0f1419]">{clinic.handle}</p>
        <MoreHorizontal className="ml-auto h-4 w-4 text-[#262626]" aria-hidden />
      </div>
      <div className="grid grid-cols-2 gap-1 p-1" style={{ background: rose.soft }}>
        {slides.map((s, i) => (
          <div key={s.title} className="relative flex aspect-[4/5] flex-col justify-between p-3" style={{ background: s.cover ? rose.deep : rose.bg, color: s.cover ? rose.bg : rose.deep }}>
            <p className="text-[8.5px] font-semibold uppercase tracking-[.18em]" style={{ color: s.cover ? rose.soft : rose.accent }}>{s.kicker}</p>
            <div>
              <p className="font-serif text-[13px] font-bold leading-tight">{s.title}</p>
              <p className="mt-1 text-[9.5px] leading-snug opacity-80">{s.body}</p>
            </div>
            <span className="absolute right-2 top-2 rounded-full bg-black/35 px-1.5 py-0.5 text-[8px] font-semibold text-white">{i + 1}/{slides.length}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-3 px-3 pt-2.5 text-[#262626]" aria-hidden>
        <Heart className="h-4 w-4" /><MessageCircle className="h-4 w-4" /><Send className="h-4 w-4" />
        <span className="mx-auto flex gap-1">{slides.map((_, i) => <span key={i} className={`h-1.5 w-1.5 rounded-full ${i === 0 ? "bg-[#0095f6]" : "bg-[#c7c7c7]"}`} />)}</span>
        <Bookmark className="h-4 w-4" />
      </div>
      <p className="px-3 pb-3 pt-1.5 text-[11px] leading-snug text-[#0f1419]"><span className="font-semibold">{clinic.handle}</span> Arraste para ver como é feita a {clinic.procedure.toLowerCase()}.</p>
    </div>
  );
}

export function ReelsCoverPreview() {
  return (
    <div className="relative mx-auto aspect-[9/16] w-full max-w-[220px] overflow-hidden rounded-xl text-left shadow-card ring-1 ring-black/10" style={{ background: `linear-gradient(170deg, ${rose.accent}, ${rose.deep})` }}>
      <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(circle at 30% 25%, #fff 0, transparent 45%)" }} aria-hidden />
      <div className="relative flex h-full flex-col justify-between p-4 text-white">
        <div className="flex items-center gap-2">
          <ClinicAvatar size="h-6 w-6 text-[10px]" />
          <p className="text-[11px] font-semibold">{clinic.handle}</p>
          <span className="ml-auto rounded bg-white/20 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider">Reels</span>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/80">Dúvida comum</p>
          <p className="mt-2 font-serif text-[26px] font-bold leading-[1.05]">{clinic.reelsQuestion}</p>
          <p className="mt-3 text-[11px] leading-snug text-white/85">A especialista responde em 30 segundos.</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/25 backdrop-blur" aria-hidden><Play className="h-4 w-4 fill-white" /></span>
          <span className="text-[10px] text-white/80">Capa do vídeo</span>
        </div>
      </div>
    </div>
  );
}

const stories = [
  { text: "Sua pele está pedindo um cuidado especial?", sticker: null as string | null },
  { text: "Na avaliação, analisamos sua pele e indicamos o melhor cuidado.", sticker: null as string | null },
  { text: "Agende sua avaliação", sticker: "Agendar pelo WhatsApp" },
];

export function StoriesPreview() {
  return (
    <div className="grid grid-cols-3 gap-1.5">
      {stories.map((s, i) => (
        <div key={i} className="relative aspect-[9/16] overflow-hidden rounded-lg text-left ring-1 ring-black/10" style={{ background: i === 2 ? rose.deep : i === 1 ? rose.accent : `linear-gradient(180deg, ${rose.soft}, ${rose.bg})` }}>
          <div className="absolute inset-x-1.5 top-1.5 flex gap-0.5" aria-hidden>
            {stories.map((_, j) => <span key={j} className={`h-0.5 flex-1 rounded-full ${j <= i ? "bg-white" : "bg-white/40"}`} />)}
          </div>
          <div className="absolute left-1.5 top-3.5 flex items-center gap-1">
            <ClinicAvatar size="h-4 w-4 text-[7px]" />
            <span className="text-[7.5px] font-semibold" style={{ color: i === 0 ? rose.deep : "#fff" }}>{clinic.handle}</span>
          </div>
          <div className="flex h-full flex-col justify-center px-2">
            <p className="font-serif text-[11.5px] font-bold leading-tight" style={{ color: i === 0 ? rose.deep : "#fff" }}>{s.text}</p>
            {s.sticker ? (
              <span className="mt-2.5 inline-flex items-center justify-center gap-1 rounded-md bg-white px-1.5 py-1 text-[8px] font-bold text-[#0f1419] shadow">
                <MessageCircle className="h-2.5 w-2.5 text-[#25d366]" aria-hidden /> {s.sticker} <ChevronRight className="h-2.5 w-2.5" aria-hidden />
              </span>
            ) : null}
          </div>
          <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 text-[7px] font-semibold text-white/80">{i + 1}/3</span>
        </div>
      ))}
    </div>
  );
}
