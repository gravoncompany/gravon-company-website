import Image from "next/image";
import { site } from "@/lib/site";
import { media } from "@/content/media";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { Icon, type IconName } from "../ui/Icon";
import { AppWindow } from "../ui/AppWindow";

const features: { label: string; icon: IconName }[] = [
  { label: "Gestão de leads e oportunidades", icon: "users" },
  { label: "Integração com WhatsApp", icon: "whatsapp" },
  { label: "Funis comerciais", icon: "kanban" },
  { label: "Qualificação com inteligência artificial", icon: "sparkle" },
  { label: "Análise de conversas e atendimentos", icon: "chat" },
  { label: "Prospecção B2B", icon: "building" },
  { label: "Acompanhamento das taxas de conversão", icon: "gauge" },
];

type MockCard = { t: string; tag: string; ai?: boolean; won?: boolean };
const columns: { name: string; cards: MockCard[] }[] = [
  { name: "Novos leads", cards: [{ t: "Contato via Google Ads", tag: "Origem rastreada" }, { t: "Contato via Instagram", tag: "Meta Ads" }] },
  { name: "Qualificação", cards: [{ t: "Conversa analisada", tag: "IA", ai: true }, { t: "Retorno agendado", tag: "Follow-up" }] },
  { name: "Proposta", cards: [{ t: "Proposta enviada", tag: "Em negociação" }] },
  { name: "Fechamento", cards: [{ t: "Negócio fechado", tag: "Ganho", won: true }] },
];

function PipeflowMock() {
  return (
    <AppWindow title="Pipeflow · Funil comercial">
      <div className="grid grid-cols-[52px_1fr] sm:grid-cols-[150px_1fr]">
        <aside className="hidden border-r border-white/[0.05] p-3 sm:block">
          {["Pipeline", "Leads", "WhatsApp", "Prospecção B2B", "Indicadores"].map((l, i) => (
            <div key={l} className={`mb-1 rounded-lg px-3 py-2 text-[11px] ${i === 0 ? "bg-gold-400/10 text-gold-200" : "text-mist-500"}`}>{l}</div>
          ))}
        </aside>
        <aside className="flex flex-col items-center gap-3 border-r border-white/[0.05] py-4 sm:hidden">
          {(["kanban", "users", "chat", "building", "gauge"] as IconName[]).map((n, i) => (
            <Icon key={n} name={n} className={`size-4 ${i === 0 ? "text-gold-300" : "text-mist-500"}`} />
          ))}
        </aside>
        <div className="min-w-0 p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-xs font-medium">Funil principal</span>
            <span className="rounded-md border border-white/[0.08] px-2 py-1 text-[10px] text-mist-500">Atualizar pipeline</span>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
            {columns.map((c) => (
              <div key={c.name} className="rounded-xl bg-white/[0.025] p-2">
                <p className="mb-2 px-1 text-[10px] uppercase tracking-wider text-mist-500">{c.name}</p>
                <div className="space-y-2">
                  {c.cards.map((card) => (
                    <div key={card.t} className={`rounded-lg border p-2.5 ${card.ai ? "border-gold-400/40 bg-gold-400/[0.06]" : "border-white/[0.06] bg-ink-850"}`}>
                      <div className="mb-2 h-1.5 w-3/4 rounded-full bg-white/15" />
                      <p className="text-[10.5px] leading-tight text-mist-300">{card.t}</p>
                      <span className={`mt-2 inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-[9px] ${card.won ? "bg-emerald-400/15 text-emerald-300" : card.ai ? "bg-gold-400/15 text-gold-200" : "bg-white/[0.06] text-mist-400"}`}>
                        {card.ai ? <Icon name="sparkle" className="size-2.5" /> : null}
                        {card.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-start gap-3 rounded-xl border border-gold-400/20 bg-gradient-to-r from-gold-400/[0.08] to-transparent p-3">
            <Icon name="sparkle" className="mt-0.5 size-4 shrink-0 text-gold-300" />
            <div className="min-w-0">
              <p className="text-[11px] font-medium text-gold-200">Análise do atendimento</p>
              <div className="mt-2 space-y-1.5">
                <div className="h-1.5 w-11/12 rounded-full bg-white/10" />
                <div className="h-1.5 w-8/12 rounded-full bg-white/10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

export function Pipeflow() {
  const shot = media.pipeflow;
  return (
    <section id="pipeflow" aria-labelledby="pipeflow-title" className="relative overflow-hidden py-24 md:py-36">
      <div aria-hidden className="absolute -left-40 top-20 -z-10 h-[600px] w-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(217,180,110,0.1),transparent)]" />
      <div className="container-x grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            id="pipeflow-title"
            eyebrow="Pipeflow CRM"
            title={<>Seu comercial merece <span className="text-gold-gradient">mais inteligência.</span></>}
            description="O Pipeflow é a plataforma de CRM com inteligência artificial da Gravon, integrada às nossas soluções de marketing para que cada oportunidade gerada seja organizada, qualificada e acompanhada até a conversão."
          />
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal as="li" key={f.label} delay={i * 0.05} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-sm text-mist-300">
                <Icon name={f.icon} className="size-4 shrink-0 text-gold-300" />
                {f.label}
              </Reveal>
            ))}
          </ul>
          <div className="mt-10">
            <Button href={site.links.pipeflow ?? "#contato"} external={Boolean(site.links.pipeflow)}>
              Conheça o Pipeflow
            </Button>
          </div>
        </div>

        <Reveal y={40} className="relative">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(217,180,110,0.18),transparent_70%)] blur-2xl" />
          {shot ? (
            <AppWindow title="Pipeflow">
              <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} className="h-auto w-full" sizes="(min-width: 1024px) 50vw, 100vw" />
            </AppWindow>
          ) : (
            <figure>
              <div role="img" aria-label="Representação ilustrativa da interface do Pipeflow com funil comercial e análise de atendimento">
                <PipeflowMock />
              </div>
              <figcaption className="mt-3 text-center text-xs text-mist-500">Representação ilustrativa da interface.</figcaption>
            </figure>
          )}
        </Reveal>
      </div>
    </section>
  );
}
