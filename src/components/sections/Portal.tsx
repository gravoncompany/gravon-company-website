import Image from "next/image";
import { site } from "@/lib/site";
import { media } from "@/content/media";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Icon, type IconName } from "../ui/Icon";
import { AppWindow } from "../ui/AppWindow";
import { PortalDashboard } from "./PortalDashboard";

const features: { title: string; text: string; icon: IconName }[] = [
  { title: "Indicadores de campanhas", text: "Os principais números das campanhas reunidos em um só lugar.", icon: "gauge" },
  { title: "Relatórios de desempenho", text: "Leitura clara do que aconteceu em cada período.", icon: "file" },
  { title: "Histórico de resultados", text: "A evolução das estratégias ao longo do tempo.", icon: "history" },
  { title: "Acompanhamento de estratégias", text: "O que está em andamento e os próximos passos.", icon: "compass" },
  { title: "Recomendações com IA", text: "Análises e sugestões apoiadas por inteligência artificial.", icon: "sparkle" },
  { title: "Oportunidades comerciais", text: "Visibilidade sobre os contatos gerados pelas campanhas.", icon: "eye" },
];

export function Portal() {
  const shot = media.portal;
  return (
    <section id="portal" aria-labelledby="portal-title" className="relative py-24 md:py-36">
      <div className="hairline-gold absolute inset-x-0 top-0 opacity-30" aria-hidden />
      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal y={40} className="relative order-2 lg:order-1">
          <div aria-hidden className="absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(ellipse_at_center,rgba(217,180,110,0.14),transparent_70%)] blur-2xl" />
          {shot ? (
            <AppWindow title="Portal Gravon">
              <Image src={shot.src} alt={shot.alt} width={shot.width} height={shot.height} className="h-auto w-full" sizes="(min-width: 1024px) 50vw, 100vw" />
            </AppWindow>
          ) : (
            <figure>
              <div role="img" aria-label="Representação ilustrativa de um dashboard do Portal Gravon com indicadores, gráfico de evolução e recomendações">
                <PortalDashboard />
              </div>
              <figcaption className="mt-3 text-center text-xs text-mist-500">Representação ilustrativa. Valores reais ficam visíveis apenas para cada cliente.</figcaption>
            </figure>
          )}
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            id="portal-title"
            eyebrow="Portal Gravon"
            title={<>Transparência e inteligência <span className="text-gold-gradient">em cada resultado.</span></>}
            description="O Portal Gravon é o ambiente de acompanhamento estratégico dos nossos clientes: um espaço para entender o desempenho das campanhas, acompanhar a estratégia e enxergar as oportunidades comerciais geradas."
          />
          <ul className="mt-10 grid gap-x-6 gap-y-6 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal as="li" key={f.title} delay={i * 0.05} className="flex gap-3">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-xl border border-gold-400/25 bg-gold-400/[0.06] text-gold-300">
                  <Icon name={f.icon} className="size-4" />
                </span>
                <span>
                  <span className="block font-medium">{f.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-mist-500">{f.text}</span>
                </span>
              </Reveal>
            ))}
          </ul>
          {site.links.portal ? (
            <a href={site.links.portal} className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-gold-300 underline-offset-4 hover:underline">
              Acessar o Portal Gravon →
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
