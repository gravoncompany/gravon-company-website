import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { CheckList } from "../ui/CheckList";

const steps = [
  { name: "Google Ads / Meta Ads", desc: "Campanhas atraem quem tem interesse", w: "100%" },
  { name: "Captação", desc: "Sites, formulários e WhatsApp", w: "93%" },
  { name: "CRM", desc: "Cada contato registrado com origem", w: "86%" },
  { name: "Qualificação", desc: "Prioridade para quem tem perfil", w: "79%" },
  { name: "Atendimento", desc: "Resposta rápida e acompanhada", w: "72%" },
  { name: "Conversão", desc: "Oportunidade vira negócio", w: "65%" },
  { name: "Análise de resultados", desc: "O que funcionou volta para a estratégia", w: "58%" },
];

export function Journey() {
  return (
    <section id="jornada" aria-labelledby="jornada-title" className="bg-white py-20 lg:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            id="jornada-title"
            eyebrow="O diferencial Gravon"
            title={<>Gerar leads é <span className="text-gradient-dark">apenas o começo.</span></>}
            description="Um lead só vira resultado quando é bem atendido, qualificado e acompanhado até a decisão. A Gravon conecta marketing e vendas para que sua empresa tenha visibilidade sobre cada oportunidade comercial."
          />
          <Reveal delay={120} className="mt-8">
            <CheckList
              items={[
                "Campanhas, atendimento e vendas compartilhando as mesmas informações",
                "Origem de cada oportunidade registrada desde o primeiro contato",
                "Visibilidade sobre onde as oportunidades avançam e onde param",
                "Decisões baseadas no funil completo, não só no volume de leads",
              ]}
            />
          </Reveal>
        </div>

        <ol className="min-w-0 space-y-2.5" aria-label="Jornada comercial acompanhada pela Gravon">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.name} delay={i * 70}>
              <div className="mx-auto" style={{ width: `max(${s.w}, 270px)`, maxWidth: "100%" }}>
                <div className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-ink-900 to-ink-700 px-5 py-3.5 text-white shadow-card ring-1 ring-white/5 transition-transform hover:scale-[1.015]">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-400 font-display text-sm font-bold text-ink-950">{i + 1}</span>
                  <div className="min-w-0">
                    <p className="font-display font-bold">{s.name}</p>
                    <p className="text-xs leading-snug text-zinc-300 sm:text-sm">{s.desc}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
