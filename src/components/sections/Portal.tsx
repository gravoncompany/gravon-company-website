import { Compass, Eye, FileText, Gauge, History, Sparkles } from "lucide-react";
import { site } from "@/lib/site";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { PortalShowcase } from "./PortalShowcase";

const items = [
  { icon: Gauge, title: "Indicadores de campanhas", text: "Os principais números das campanhas reunidos em um só lugar." },
  { icon: FileText, title: "Relatórios de desempenho", text: "Leitura clara do que aconteceu em cada período." },
  { icon: History, title: "Histórico de resultados", text: "A evolução das estratégias ao longo do tempo." },
  { icon: Compass, title: "Acompanhamento de estratégias", text: "O que está em andamento e os próximos passos." },
  { icon: Sparkles, title: "Recomendações com IA", text: "Análises e sugestões apoiadas por inteligência artificial." },
  { icon: Eye, title: "Oportunidades comerciais", text: "Visibilidade sobre os contatos gerados pelas campanhas." },
];

export function Portal() {
  return (
    <section id="portal" aria-labelledby="portal-title" className="relative overflow-hidden bg-sand-50 py-20 lg:py-28">
      <div className="grid-bg-light pointer-events-none absolute inset-0" aria-hidden />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-16">
          <SectionHeading
            align="left"
            id="portal-title"
            eyebrow="Portal Gravon"
            title={<>Transparência e inteligência <span className="text-gradient-dark">em cada resultado.</span></>}
            description="O ambiente de acompanhamento estratégico dos clientes Gravon: desempenho das campanhas, evolução da estratégia e as oportunidades comerciais geradas, em um só lugar."
          />
          <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
            {items.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={(i % 2) * 80} className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-gold-700 shadow-card ring-1 ring-ink-900/5">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-bold text-ink-900">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={120} className="relative mt-14">
          <div className="pointer-events-none absolute -inset-x-6 -bottom-8 top-8 rounded-[36px] bg-gold-300/25 blur-3xl" aria-hidden />
          <div className="relative"><PortalShowcase /></div>
        </Reveal>

        {site.links.portal ? (
          <div className="mt-10 text-center">
            <a href={site.links.portal} className="text-sm font-semibold text-gold-700 hover:underline">Acessar o Portal Gravon →</a>
          </div>
        ) : null}
      </Container>
    </section>
  );
}
