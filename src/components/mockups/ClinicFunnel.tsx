import { CheckCheck, MessageCircle, MoreHorizontal, Phone, Video } from "lucide-react";
import { clinic } from "@/content/example";
import { ClinicAvatar } from "./ClinicSocial";
import { FaceArt } from "./SkinArt";

/** Anúncio com destino WhatsApp (clique para conversar), conversa e card no Pipeflow — tudo ilustrativo. */

export function ClickToWhatsAppAd() {
  return (
    <div className="mx-auto w-full max-w-[290px] overflow-hidden rounded-xl bg-white text-left shadow-card ring-1 ring-black/10">
      <div className="flex items-center gap-2 px-3 py-2.5">
        <ClinicAvatar />
        <div className="leading-tight">
          <p className="text-[12px] font-semibold text-[#0f1419]">{clinic.handle}</p>
          <p className="text-[10px] text-[#737373]">Patrocinado</p>
        </div>
        <MoreHorizontal className="ml-auto h-4 w-4 text-[#262626]" aria-hidden />
      </div>
      <div className="relative flex aspect-[4/3] flex-col justify-end overflow-hidden p-4 text-white" style={{ background: "linear-gradient(160deg,#e9d3c9 0%,#b97a6b 45%,#4a2f29 100%)" }}>
        <FaceArt tone="dark" className="pointer-events-none absolute -right-6 -top-2 h-[95%] opacity-90" />
        <p className="relative text-[11px] font-semibold uppercase tracking-[.2em] text-white/85">{clinic.procedure}</p>
        <p className="relative mt-1 max-w-[70%] font-serif text-[21px] font-bold leading-tight">Avaliação personalizada para a sua pele</p>
      </div>
      <div className="flex items-center justify-between gap-2 bg-[#efefef] px-3 py-2.5">
        <span className="text-[11.5px] font-semibold text-[#0f1419]">Enviar mensagem</span>
        <span className="inline-flex items-center gap-1 rounded-md bg-[#25d366] px-2 py-1 text-[10px] font-bold text-white">
          <MessageCircle className="h-3 w-3" aria-hidden /> WhatsApp
        </span>
      </div>
    </div>
  );
}

export function WhatsAppChatPreview() {
  return (
    <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-xl text-left shadow-card ring-1 ring-black/10">
      <div className="flex items-center gap-2.5 bg-[#075e54] px-3 py-2.5 text-white">
        <ClinicAvatar />
        <div className="leading-tight">
          <p className="text-[12.5px] font-semibold">{clinic.name}</p>
          <p className="text-[10px] text-white/75">Conversa com {clinic.lead.name}</p>
        </div>
        <Video className="ml-auto h-4 w-4" aria-hidden />
        <Phone className="h-4 w-4" aria-hidden />
      </div>
      <div className="space-y-2 bg-[#ece5dd] p-3 text-[12.5px] leading-snug text-[#111b21]">
        <p className="mx-auto w-fit rounded-md bg-[#fff3c4] px-2 py-1 text-center text-[9.5px] text-[#54656f]">Conversa iniciada pelo anúncio</p>
        <div className="ml-auto w-[85%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-2.5 py-1.5 shadow-sm">
          Olá! Vi o anúncio da limpeza de pele. Quais horários vocês têm para avaliação?
          <span className="mt-0.5 flex items-center justify-end gap-1 text-[9px] text-[#667781]">10:12 <CheckCheck className="h-3 w-3 text-[#53bdeb]" aria-hidden /></span>
        </div>
        <div className="w-[88%] rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 shadow-sm">
          Olá, {clinic.lead.first}! Que bom ter você aqui 😊 Temos horários de manhã e à tarde. Qual período fica melhor?
          <span className="mt-0.5 block text-right text-[9px] text-[#667781]">10:13</span>
        </div>
        <div className="ml-auto w-fit rounded-lg rounded-tr-none bg-[#d9fdd3] px-2.5 py-1.5 shadow-sm">
          À tarde, por favor!
          <span className="mt-0.5 flex items-center justify-end gap-1 text-[9px] text-[#667781]">10:14 <CheckCheck className="h-3 w-3 text-[#53bdeb]" aria-hidden /></span>
        </div>
      </div>
    </div>
  );
}

