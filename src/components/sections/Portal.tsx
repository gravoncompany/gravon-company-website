import { Compass, Eye, FileText, Gauge, History, Sparkles } from "lucide-react";
import { site, asset } from "@/lib/site";
import { portalScreen } from "@/content/media";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { BrowserFrame } from "../ui/BrowserFrame";
import { PortalMock } from "../mockups/PortalMock";

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
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            id="portal-title"
            eyebrow="Portal Gravon"
            title={<>Transparência e inteligência <span className="text-gradient-dark">em cada resultado.</span></>}
            description="O ambiente de acompanhamento estratégico dos clientes Gravon: desempenho das campanhas, evolução da estratégia e as oportunidades comerciais geradas, em um só lugar."
          />
          <div className="mt-10 grid gap-x-6 gap-y-6 sm:grid-cols-2">
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
          {site.links.portal ? (
            <a href={site.links.portal} className="mt-10 inline-flex text-sm font-semibold text-gold-700 hover:underline">Acessar o Portal Gravon →</a>
          ) : null}
        </div>
        <Reveal delay={150} className="relative">
          <div className="pointer-events-none absolute -inset-6 rounded-[36px] bg-gradient-to-br from-gold-100 to-transparent blur-2xl" aria-hidden />
          <figure className="relative">
            {portalScreen ? (
              <BrowserFrame tone="light" title={portalScreen.title}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(portalScreen.src)} alt={portalScreen.alt} width={portalScreen.width} height={portalScreen.height} loading="lazy" className="block h-auto w-full" />
              </BrowserFrame>
            ) : (
              <div role="img" aria-label="Representação ilustrativa do dashboard do Portal Gravon com indicadores, gráfico e recomendações">
                <PortalMock />
              </div>
            )}
            <figcaption className="mt-3 text-center text-xs text-zinc-500">
              {portalScreen ? portalScreen.title : "Representação ilustrativa · os valores reais ficam visíveis apenas para cada cliente"}
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
