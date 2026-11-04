import { Filter, Handshake, Megaphone, Repeat, type LucideIcon } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";

const steps: { letter: string; name: string; icon: LucideIcon; summary: string; items: string[] }[] = [
  { letter: "A", name: "Atração", icon: Megaphone, summary: "Gerar presença e atrair pessoas com real interesse no que a empresa oferece.", items: ["Campanhas no Google Ads e Meta Ads", "Sites e landing pages orientados à conversão", "Mensagens e públicos alinhados ao posicionamento"] },
  { letter: "Q", name: "Qualificação", icon: Filter, summary: "Organizar cada contato e entender quais oportunidades merecem prioridade.", items: ["Registro no CRM com a origem da oportunidade", "Critérios de qualificação definidos com o time", "Análise de conversas apoiada por IA"] },
  { letter: "C", name: "Conversão", icon: Handshake, summary: "Transformar oportunidades em negócios com atendimento ágil e acompanhado.", items: ["Atendimento integrado ao WhatsApp", "Funis comerciais com etapas claras", "Acompanhamento de propostas e follow-ups"] },
  { letter: "R", name: "Retenção", icon: Repeat, summary: "Manter o relacionamento e usar os aprendizados para evoluir a estratégia.", items: ["Análise de resultados e taxas de conversão", "Recomendações para os próximos ciclos", "Relacionamento contínuo com a base de clientes"] },
];

/* Recortes do funil (em % da largura): cada faixa vai de inset[i] (topo) a inset[i+1] (base). A última é a "haste". */
const inset = [0, 11, 22, 31, 31];
const fills = [
  "bg-gradient-to-b from-[#f3dc95] to-[#e6c77e]",
  "bg-gradient-to-b from-[#dcb868] to-[#c9a352]",
  "bg-gradient-to-b from-[#bf9a4c] to-[#a98741]",
  "bg-gradient-to-b from-[#a2813f] to-[#8c6f37]",
];

function Band({ i, className = "" }: { i: number; className?: string }) {
  const s = steps[i];
  const t = inset[i];
  const b = inset[i + 1];
  return (
    <div
      className={`relative flex items-center justify-center ${fills[i]} ${className}`}
      style={{ clipPath: `polygon(${t}% 0, ${100 - t}% 0, ${100 - b}% 100%, ${b}% 100%)` }}
      aria-hidden
    >
      <span className="font-display text-5xl font-extrabold leading-none text-ink-900 sm:text-6xl">{s.letter}</span>
    </div>
  );
}

export function Methodology() {
  return (
    <section id="metodologia" aria-labelledby="metodologia-title" className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-96 w-96 rounded-full bg-gold-500/15 blur-[120px]" aria-hidden />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          id="metodologia-title"
          eyebrow="Nossa metodologia"
          title={<>CMC — <span className="text-gradient">Captação Moderna de Clientes</span></>}
          description="Quatro etapas que levam o cliente certo da primeira impressão ao relacionamento contínuo."
        />

        <ol className="mx-auto mt-14 max-w-5xl space-y-3" aria-label="Etapas do funil CMC">
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal as="li" key={s.name} delay={i * 90} className="group">
                <div className="grid items-stretch gap-0 md:grid-cols-[1fr_300px] lg:grid-cols-[1fr_360px]">
                  {/* Faixa do funil: no celular fica acima da descrição; no desktop, à direita */}
                  <div className="order-1 md:order-2">
                    <div className="mx-auto h-24 w-full max-w-[340px] md:h-full md:min-h-[150px] md:max-w-none">
                      <Band i={i} className="h-full transition-[filter] duration-300 group-hover:brightness-110" />
                    </div>
                  </div>
                  <div className="order-2 md:order-1 md:pr-0">
                    <div className="relative mt-[-1px] h-full rounded-2xl bg-ink-900 p-5 ring-1 ring-gold-400/40 transition-colors group-hover:ring-gold-300 sm:p-6 md:mr-[-12px] md:rounded-r-none md:pr-10">
                      <div className="flex items-start gap-4">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/15 text-gold-300 ring-1 ring-gold-400/25">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <div className="min-w-0">
                          <h3 className="font-display text-xl font-extrabold uppercase tracking-wide text-gold-300 sm:text-2xl">
                            <span className="sr-only">{s.letter} · </span>{s.name}
                          </h3>
                          <p className="mt-1.5 text-[15px] leading-relaxed text-zinc-200 sm:text-base">{s.summary}</p>
                          <ul className="mt-3 flex flex-wrap gap-2">
                            {s.items.map((it) => (
                              <li key={it} className="rounded-lg bg-white/[.04] px-2.5 py-1 text-xs text-zinc-300 ring-1 ring-white/10">{it}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
