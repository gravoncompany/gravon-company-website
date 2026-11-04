import { BarChart3, ChevronRight, Globe, Lightbulb, Megaphone, PhoneCall, Settings2, Target, TrendingUp, Users, type LucideIcon } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { LeadButton } from "../lead/LeadButton";
import { InstagramLogo } from "../mockups/BrandLogos";

type Item = { icon: LucideIcon | "instagram"; text: string };
type Month = { n: string; name: string; tagline: string; text: string; items: Item[] };

const months: Month[] = [
  {
    n: "01", name: "Estruturação", tagline: "Planejamento, posicionamento e estrutura digital.",
    text: "Definimos público, oferta e posicionamento. Preparamos páginas, criativos e rastreamento e configuramos o funil comercial no Pipeflow.",
    items: [
      { icon: Users, text: "Estruturação estratégica" },
      { icon: "instagram", text: "Social media e posicionamento de conteúdo" },
      { icon: Globe, text: "Criação de sites e landing pages" },
      { icon: PhoneCall, text: "Implementação de CRM" },
      { icon: Megaphone, text: "Google Ads, Meta Ads e criativos para campanhas" },
    ],
  },
  {
    n: "02", name: "Aquisição", tagline: "Campanhas, otimização e geração de oportunidades.",
    text: "Ativamos as campanhas, testamos públicos, anúncios e páginas e acompanhamos quais contatos se qualificam e avançam no atendimento.",
    items: [
      { icon: Megaphone, text: "Ativação e testes de campanhas" },
      { icon: Settings2, text: "Otimização de páginas e criativos" },
      { icon: Users, text: "Organização e qualificação de leads" },
      { icon: PhoneCall, text: "Automação do atendimento" },
      { icon: BarChart3, text: "Acompanhamento de métricas e ajustes semanais" },
    ],
  },
  {
    n: "03", name: "Consolidação", tagline: "Performance, conversão e crescimento.",
    text: "Priorizamos os canais que geram as melhores oportunidades, revisamos onde os leads param e definimos o plano para os próximos meses.",
    items: [
      { icon: Target, text: "Foco nos canais mais eficientes" },
      { icon: Settings2, text: "Ajustes no funil e no CRM" },
      { icon: BarChart3, text: "Análise das conversões e resultados" },
      { icon: TrendingUp, text: "Plano de evolução comercial" },
      { icon: Lightbulb, text: "Recomendações para o próximo ciclo" },
    ],
  },
];

export function Implementation90() {
  return (
    <section id="implementacao-90-dias" aria-labelledby="implementacao-title" className="relative overflow-hidden bg-ink-950 pb-20 pt-4 lg:pb-28">
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-gold-500/15 blur-[120px]" aria-hidden />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          id="implementacao-title"
          eyebrow="Implementação estratégica · projeto inicial"
          title={<>Marketing e Vendas em <span className="text-gradient">90 dias</span></>}
          description="O projeto inicial da Gravon: uma estrutura completa para atrair, organizar e converter oportunidades em clientes, com planejamento, implementação, acompanhamento e otimização ao longo de três meses."
        />

        <ol className="mt-14 grid gap-5 lg:grid-cols-3 lg:gap-8">
          {months.map((m, i) => (
            <Reveal as="li" key={m.n} delay={i * 90} className="relative list-none">
              <article className="flex h-full flex-col rounded-2xl bg-ink-900 p-6 ring-1 ring-gold-400/50 sm:p-7">
                <span className="w-fit rounded-md bg-gold-400 px-2.5 py-1 font-display text-xs font-extrabold tracking-wider text-ink-950">MÊS {m.n}</span>
                <h3 className="mt-4 font-display text-2xl font-extrabold uppercase tracking-wide text-white">{m.name}</h3>
                <p className="mt-1 text-[15px] font-semibold text-gold-300">{m.tagline}</p>
                <p className="mt-3 text-[15px] leading-relaxed text-zinc-300">{m.text}</p>
                <span className="my-5 h-px bg-gold-400/30" aria-hidden />
                <ul className="space-y-3">
                  {m.items.map((it) => {
                    const Icon = it.icon;
                    return (
                      <li key={it.text} className="flex items-center gap-3 text-[14.5px] text-zinc-100">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-400/15 text-gold-300 ring-1 ring-gold-400/25">
                          {Icon === "instagram" ? <InstagramLogo className="h-[18px] w-[18px]" /> : <Icon className="h-[18px] w-[18px]" aria-hidden />}
                        </span>
                        {it.text}
                      </li>
                    );
                  })}
                </ul>
              </article>
              {i < months.length - 1 ? (
                <span className="absolute -right-6 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-gold-400 text-ink-950 lg:flex" aria-hidden>
                  <ChevronRight className="h-5 w-5" />
                </span>
              ) : null}
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 flex justify-center">
          <LeadButton source="implementacao-90-dias" arrow className="w-full sm:w-auto">
            Quero estruturar meu marketing e vendas
          </LeadButton>
        </Reveal>
      </Container>
    </section>
  );
}
