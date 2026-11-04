import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { SpotlightCard } from "../ui/SpotlightCard";
import { Icon, type IconName } from "../ui/Icon";

const solutions: { title: string; text: string; icon: IconName; tags: string[] }[] = [
  {
    title: "Google Ads",
    text: "Estratégias de campanhas na Rede de Pesquisa para conectar empresas a pessoas que já procuram seus produtos e serviços.",
    icon: "search",
    tags: ["Rede de Pesquisa", "Intenção de compra"],
  },
  {
    title: "Meta Ads",
    text: "Campanhas estratégicas no Instagram e Facebook para gerar reconhecimento, oportunidades e novos contatos comerciais.",
    icon: "megaphone",
    tags: ["Instagram", "Facebook"],
  },
  {
    title: "Criação de sites e landing pages",
    text: "Desenvolvimento de websites modernos, responsivos e orientados à conversão.",
    icon: "layout",
    tags: ["Responsivo", "Conversão"],
  },
  {
    title: "CRM com inteligência artificial",
    text: "Organização de leads, acompanhamento comercial, análise de atendimentos e qualificação de oportunidades.",
    icon: "brain",
    tags: ["Pipeflow", "Qualificação"],
  },
  {
    title: "Automação comercial",
    text: "Integrações e fluxos inteligentes para otimizar processos e reduzir atividades repetitivas.",
    icon: "flow",
    tags: ["Integrações", "Fluxos"],
  },
  {
    title: "Inteligência de dados",
    text: "Monitoramento de indicadores comerciais, taxas de conversão e desempenho das estratégias.",
    icon: "chart",
    tags: ["Indicadores", "Conversão"],
  },
];

export function Solutions() {
  return (
    <section id="solucoes" aria-labelledby="solucoes-title" className="relative py-24 md:py-36">
      <div aria-hidden className="absolute inset-x-0 top-1/3 -z-10 h-[500px] bg-[radial-gradient(ellipse_at_center,rgba(217,180,110,0.07),transparent_65%)]" />
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            id="solucoes-title"
            eyebrow="Nossas soluções"
            title={<>Do primeiro clique à <span className="text-gold-gradient">venda acompanhada.</span></>}
          />
          <Reveal delay={0.2} className="max-w-sm text-mist-400">
            Soluções que funcionam sozinhas, mas foram pensadas para operar juntas — marketing, tecnologia e inteligência comercial no mesmo ecossistema.
          </Reveal>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 0.08}>
              <SpotlightCard className="group h-full rounded-3xl border border-white/[0.07] bg-gradient-to-b from-ink-850 to-ink-900 p-7 transition-transform duration-500 hover:-translate-y-1 md:p-8">
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl border border-gold-400/25 bg-gold-400/[0.07] text-gold-300 transition-colors duration-500 group-hover:bg-gold-400/15">
                    <Icon name={s.icon} className="size-6" />
                  </span>
                  <span className="font-display text-xs text-mist-500">0{i + 1}</span>
                </div>
                <h3 className="mt-7 font-display text-xl font-medium">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mist-400">{s.text}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-mist-400">{t}</span>
                  ))}
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
