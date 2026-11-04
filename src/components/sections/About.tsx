import { MapPin, Quote } from "lucide-react";
import { asset } from "@/lib/site";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const stats = [
  { value: "4 anos", label: "de mercado" },
  { value: "+100", label: "empresas atendidas" },
  { value: "+R$ 3 mi", label: "investidos em mídia paga" },
];

export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-gold-500/15 blur-[120px]" aria-hidden />
      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Retrato + nome e cargo (no celular vem antes da visão) */}
          <Reveal>
            <figure className="mx-auto max-w-[440px]">
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-gold-400/40 shadow-glow">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset("/images/sobre/wilian-souza.webp")}
                  alt="Wilian Souza, fundador da Gravon Company, em frente ao logotipo da empresa"
                  width={999}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="block aspect-[4/5] h-auto w-full object-cover object-[50%_30%]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/90 to-transparent" aria-hidden />
              </div>
              <figcaption className="mt-5 text-center lg:text-left">
                <p className="font-display text-2xl font-extrabold text-white">Wilian Souza</p>
                <p className="mt-0.5 text-[15px] font-semibold text-gold-300">Fundador da Gravon Company</p>
              </figcaption>
            </figure>
          </Reveal>

          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[.14em] text-gold-300 ring-1 ring-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden />Conheça a Gravon Company
              </span>
              <h2 id="sobre-title" className="mt-5 text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[44px]">
                Marketing e vendas <span className="text-gradient">trabalhando juntos</span>
              </h2>
            </Reveal>

            <Reveal delay={80}>
              <blockquote className="relative mt-8 rounded-2xl bg-ink-900 p-6 ring-1 ring-gold-400/30 sm:p-8">
                <Quote className="absolute -top-4 left-6 h-8 w-8 rounded-full bg-gold-400 p-1.5 text-ink-950" aria-hidden />
                <p className="text-[16px] leading-relaxed text-zinc-100 sm:text-[17px]">
                  Pra mim, gerar um lead é o primeiro passo. Pra transformar esse contato em cliente, marketing e vendas precisam trabalhar juntos, da campanha ao atendimento, da proposta ao fechamento.
                </p>
                <p className="mt-4 text-[16px] leading-relaxed text-zinc-300 sm:text-[17px]">
                  Com rastreamento e CRM, conseguimos acompanhar de qual campanha veio o contato, em que etapa a negociação parou e quais oportunidades viraram vendas. Quando as duas equipes enxergam o mesmo processo, fica mais fácil corrigir o que está travando, tomar decisões mais rápido e investir em marketing com mais previsibilidade.
                </p>
                <footer className="mt-5 text-sm font-semibold text-gold-300">— Wilian Souza, fundador</footer>
              </blockquote>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-8 text-[16px] leading-relaxed text-zinc-300">
                A Gravon Company é uma assessoria de marketing digital sediada em Balneário Camboriú, SC. Nossa equipe reúne designers, gestores de tráfego e estrategistas digitais para conectar campanhas, atendimento comercial e tecnologia.
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-zinc-400"><MapPin className="h-4 w-4 text-gold-300" aria-hidden />Balneário Camboriú · SC</p>
            </Reveal>

            <Reveal delay={200}>
              <div className="mt-8 grid items-stretch gap-3 sm:grid-cols-[repeat(3,1fr)_auto]">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl bg-ink-900 p-4 ring-1 ring-white/10">
                    <p className="font-display text-2xl font-extrabold text-gold-300">{s.value}</p>
                    <p className="mt-0.5 text-[14px] leading-snug text-zinc-300">{s.label}</p>
                  </div>
                ))}
                <div className="flex items-center justify-center rounded-2xl bg-white p-2 sm:w-[132px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={asset("/images/sobre/google-partner.png")} alt="Selo Google Partner" width={299} height={286} loading="lazy" className="h-24 w-auto sm:h-auto sm:w-full" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
