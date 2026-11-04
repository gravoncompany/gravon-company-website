"use client";

import { useState } from "react";
import { Building2, Filter, SquareKanban, LineChart, MessageCircle, MessagesSquare, Sparkles, Users } from "lucide-react";
import { site } from "@/lib/site";
import { pipeflowScreens } from "@/content/media";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { LeadButton } from "../lead/LeadButton";
import { ScreenshotSlot } from "../ui/ScreenshotSlot";

const features = [
  { icon: Users, title: "Gestão de leads e oportunidades" },
  { icon: MessageCircle, title: "Integração com WhatsApp" },
  { icon: SquareKanban, title: "Funis comerciais" },
  { icon: Sparkles, title: "Qualificação com inteligência artificial" },
  { icon: MessagesSquare, title: "Análise de conversas e atendimentos" },
  { icon: Building2, title: "Prospecção B2B" },
  { icon: LineChart, title: "Acompanhamento das taxas de conversão" },
  { icon: Filter, title: "Origem e campanha de cada lead" },
];

export function Pipeflow() {
  const [active, setActive] = useState(0);
  const current = pipeflowScreens[active];

  return (
    <section id="pipeflow" aria-labelledby="pipeflow-title" className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-gold-500/15 blur-[120px]" aria-hidden />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          id="pipeflow-title"
          eyebrow="Pipeflow CRM"
          title={<>Seu comercial merece <span className="text-gradient">mais inteligência.</span></>}
          description="O Pipeflow é a plataforma de CRM com inteligência artificial da Gravon, integrada às nossas soluções de marketing para que cada oportunidade seja organizada, qualificada e acompanhada até a conversão."
        />

        <Reveal delay={120} className="mt-10 flex justify-center">
          <div role="tablist" aria-label="Telas do Pipeflow" className="inline-flex rounded-xl bg-white/5 p-1 ring-1 ring-white/10">
            {pipeflowScreens.map((s, i) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                id={`pf-tab-${s.id}`}
                aria-selected={i === active}
                aria-controls="pf-panel"
                onClick={() => setActive(i)}
                className={`rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${i === active ? "bg-gold-400 text-ink-950" : "text-zinc-300 hover:text-white"}`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160} className="relative mx-auto mt-8 max-w-6xl">
          <div className="pointer-events-none absolute -inset-x-10 -bottom-10 top-10 rounded-[40px] bg-gold-500/15 blur-3xl" aria-hidden />
          <div id="pf-panel" role="tabpanel" aria-labelledby={`pf-tab-${current.id}`} className="relative">
            <ScreenshotSlot key={current.id} screen={current.screen} />
          </div>
        </Reveal>

        <ul className="mx-auto mt-14 grid max-w-6xl gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title }, i) => (
            <Reveal as="li" key={title} delay={(i % 4) * 70} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 text-gold-300 ring-1 ring-gold-400/20">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span className="text-[15px] font-semibold text-white">{title}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 flex justify-center">
          {site.links.pipeflow ? (
            <Button href={site.links.pipeflow} external arrow>Conheça o Pipeflow</Button>
          ) : (
            <LeadButton source="pipeflow" arrow>Conheça o Pipeflow</LeadButton>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
