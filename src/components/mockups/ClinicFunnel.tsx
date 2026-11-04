import { CheckCheck, MessageCircle, MoreHorizontal, Phone, Sparkles, Video } from "lucide-react";
import { clinic } from "@/content/example";
import { ClinicAvatar } from "./ClinicSocial";

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
      <div className="relative flex aspect-[4/3] flex-col justify-end p-4 text-white" style={{ background: "linear-gradient(160deg,#b97a6b,#4a2f29)" }}>
        <p className="text-[10px] font-semibold uppercase tracking-[.2em] text-white/80">Avaliação facial</p>
        <p className="mt-1 font-serif text-[20px] font-bold leading-tight">Descubra o cuidado ideal para a sua pele</p>
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
          <p className="text-[10px] text-white/75">Conta comercial</p>
        </div>
        <Video className="ml-auto h-4 w-4" aria-hidden />
        <Phone className="h-4 w-4" aria-hidden />
      </div>
      <div className="space-y-2 bg-[#ece5dd] p-3 text-[11.5px] leading-snug text-[#111b21]">
        <p className="mx-auto w-fit rounded-md bg-[#fff3c4] px-2 py-1 text-center text-[9.5px] text-[#54656f]">Conversa iniciada pelo anúncio</p>
        <div className="ml-auto w-[85%] rounded-lg rounded-tr-none bg-[#d9fdd3] px-2.5 py-1.5 shadow-sm">
          Olá! Vi o anúncio e quero agendar uma avaliação.
          <span className="mt-0.5 flex items-center justify-end gap-1 text-[9px] text-[#667781]">10:12 <CheckCheck className="h-3 w-3 text-[#53bdeb]" aria-hidden /></span>
        </div>
        <div className="w-[88%] rounded-lg rounded-tl-none bg-white px-2.5 py-1.5 shadow-sm">
          Olá! Que bom ter você aqui 😊 Para indicar o melhor horário, qual período fica melhor: manhã ou tarde?
          <span className="mt-0.5 block text-right text-[9px] text-[#667781]">10:13</span>
        </div>
        <div className="ml-auto w-fit rounded-lg rounded-tr-none bg-[#d9fdd3] px-2.5 py-1.5 shadow-sm">
          Tarde, por favor!
          <span className="mt-0.5 flex items-center justify-end gap-1 text-[9px] text-[#667781]">10:14 <CheckCheck className="h-3 w-3 text-[#53bdeb]" aria-hidden /></span>
        </div>
      </div>
    </div>
  );
}

const columns = [
  { name: "Novo lead", count: 1 },
  { name: "Em atendimento", count: 1, active: true },
  { name: "Avaliação agendada", count: 0 },
  { name: "Cliente", count: 0 },
];

export function PipeflowLeadPreview() {
  return (
    <div className="overflow-hidden rounded-xl bg-white text-left shadow-card ring-1 ring-black/10">
      <div className="flex items-center gap-2 border-b border-[#e8edf5] px-4 py-2.5">
        <span className="h-5 w-5 rounded-md bg-gradient-to-br from-[#5c8bff] to-[#1f55e6]" aria-hidden />
        <p className="text-[12px] font-bold text-[#060e26]">Pipeflow CRM</p>
        <span className="text-[11px] text-[#64748b]">· Funil {clinic.name}</span>
        <span className="ml-auto rounded-full bg-[#eef4ff] px-2 py-0.5 text-[9.5px] font-semibold text-[#1f55e6]">Dados demonstrativos</span>
      </div>
      <div className="-mx-0 overflow-hidden">
        <div className="grid grid-cols-2 gap-2 bg-[#f4f7fb] p-3 sm:grid-cols-4">
          {columns.map((c) => (
            <div key={c.name} className="min-w-0 rounded-lg bg-white/70 p-2 ring-1 ring-[#e8edf5]">
              <p className="truncate text-[10px] font-bold text-[#060e26]">{c.name} <span className="font-medium text-[#94a3b8]">{c.count}</span></p>
              {c.active ? (
                <div className="mt-2 rounded-md bg-white p-2 shadow-sm ring-1 ring-[#2f6bff]/40">
                  <p className="text-[10.5px] font-bold text-[#060e26]">Mariana · Avaliação facial</p>
                  <p className="mt-1 text-[9.5px] text-[#64748b]">Origem: Meta Ads</p>
                  <p className="text-[9.5px] text-[#64748b]">Campanha: Avaliação facial</p>
                  <span className="mt-1.5 inline-flex items-center gap-1 rounded bg-[#dcfce7] px-1.5 py-0.5 text-[9px] font-semibold text-[#15803d]"><MessageCircle className="h-2.5 w-2.5" aria-hidden />WhatsApp</span>
                </div>
              ) : c.name === "Novo lead" ? (
                <div className="mt-2 rounded-md bg-white p-2 opacity-60 ring-1 ring-[#e8edf5]">
                  <div className="h-1.5 w-3/4 rounded-full bg-[#cbd5e1]" />
                  <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-[#e2e8f0]" />
                </div>
              ) : (
                <div className="mt-2 h-10 rounded-md border border-dashed border-[#d6dee9]" aria-hidden />
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-start gap-2 border-t border-[#e8edf5] px-4 py-3">
        <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#2f6bff]" aria-hidden />
        <p className="text-[11px] leading-snug text-[#334155]"><span className="font-bold text-[#060e26]">Gravon IA:</span> interesse em avaliação, prefere atendimento à tarde. Sugestão: mover para “Avaliação agendada” após confirmar horário.</p>
      </div>
    </div>
  );
}
