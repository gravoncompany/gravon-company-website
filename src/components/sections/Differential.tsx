import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { JourneyFlow } from "./JourneyFlow";

const points = [
  {
    title: "Marketing e vendas no mesmo fluxo",
    text: "Campanhas, atendimento e acompanhamento comercial deixam de ser etapas isoladas e passam a compartilhar as mesmas informações.",
  },
  {
    title: "Visibilidade sobre cada oportunidade",
    text: "Cada contato é registrado com origem, etapa e histórico, para que a empresa saiba de onde vêm as oportunidades e onde elas param.",
  },
  {
    title: "Decisões baseadas no funil completo",
    text: "A análise considera do clique à conversão, e não apenas o volume de leads gerados pelas campanhas.",
  },
];

export function Differential() {
  return (
    <section id="diferencial" aria-labelledby="diferencial-title" className="relative py-24 md:py-36">
      <div className="hairline-gold absolute inset-x-0 top-0 opacity-40" aria-hidden />
      <div className="container-x">
        <SectionHeading
          id="diferencial-title"
          eyebrow="O diferencial Gravon"
          title={<>Gerar leads é <span className="text-gold-gradient">apenas o começo.</span></>}
          description="Um lead só vira resultado quando é bem atendido, qualificado e acompanhado até a decisão. Por isso, a Gravon acompanha toda a jornada comercial: da campanha que gera o primeiro contato até a análise do que de fato converteu."
        />

        <JourneyFlow />

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08} className="rounded-2xl border border-white/[0.06] bg-ink-900/60 p-7">
              <p className="font-display text-sm text-gold-400">0{i + 1}</p>
              <h3 className="mt-3 font-display text-lg font-medium">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist-400">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
