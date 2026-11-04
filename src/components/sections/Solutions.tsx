import { ArrowRight, BarChart3, Bot, LayoutTemplate, Megaphone, Search, Workflow, type LucideIcon } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { CheckList } from "../ui/CheckList";

function CardShell({ icon: Icon, title, text, children, className = "", delay = 0 }: { icon: LucideIcon; title: string; text: string; children?: React.ReactNode; className?: string; delay?: number }) {
  return (
    <Reveal delay={delay} className={`h-full ${className}`}>
      <article className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-ink-900/5 transition-all duration-300 hover:-translate-y-1 hover:ring-gold-500/40 sm:p-7">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-50 text-gold-700 ring-1 ring-gold-200/70 transition-colors group-hover:bg-gold-400 group-hover:text-ink-950">
          <Icon className="h-5 w-5" aria-hidden />
        </div>
        <h3 className="mt-5 text-lg font-bold text-ink-900 sm:text-xl">{title}</h3>
        <p className="mt-2 text-[15px] leading-relaxed text-zinc-600">{text}</p>
        {children ? <div className="mt-6 flex-1" aria-hidden>{children}</div> : null}
      </article>
    </Reveal>
  );
}

function SearchVisual() {
  return (
    <div className="flex h-full flex-col justify-center gap-2 rounded-xl bg-sand-50 p-4 ring-1 ring-ink-900/5">
      <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs text-zinc-500 ring-1 ring-ink-900/5"><Search className="h-3.5 w-3.5" /> o que seu cliente procura</div>
      {[0, 1, 2].map((i) => (
        <div key={i} className={`rounded-lg bg-white p-3 ring-1 ${i === 0 ? "ring-gold-300" : "ring-ink-900/5 opacity-60"}`}>
          <p className="text-[9px] font-semibold uppercase tracking-wider text-zinc-400">{i === 0 ? "Patrocinado" : "Resultado"}</p>
          <div className="mt-1.5 h-2 w-2/3 rounded-full bg-[#1a0dab]/70" />
          <div className="mt-1.5 h-1.5 w-11/12 rounded-full bg-zinc-200" />
        </div>
      ))}
    </div>
  );
}

function SocialVisual() {
  return (
    <div className="grid h-full grid-cols-3 content-center gap-2 rounded-xl bg-sand-50 p-4 ring-1 ring-ink-900/5">
      {["from-ink-900 to-gold-700", "from-gold-300 to-gold-600", "from-ink-700 to-ink-900", "from-gold-200 to-gold-400", "from-ink-900 to-ink-600", "from-gold-500 to-ink-800"].map((g, i) => (
        <div key={i} className={`aspect-[4/3] rounded-lg bg-gradient-to-br ${g} ${i === 1 ? "ring-2 ring-gold-400 ring-offset-2 ring-offset-sand-50" : ""}`} />
      ))}
    </div>
  );
}

function SiteVisual() {
  return (
    <div className="overflow-hidden rounded-xl ring-1 ring-ink-900/10">
      <div className="flex gap-1 bg-sand-100 px-3 py-2">{[0, 1, 2].map((i) => <span key={i} className="h-1.5 w-1.5 rounded-full bg-zinc-300" />)}</div>
      <div className="space-y-2 bg-ink-900 p-4">
        <div className="h-2.5 w-3/4 rounded-full bg-white/80" />
        <div className="h-2.5 w-1/2 rounded-full bg-gold-300" />
        <div className="mt-3 h-5 w-20 rounded-md bg-gold-400" />
      </div>
    </div>
  );
}

function FlowVisual() {
  return (
    <div className="flex items-center justify-between gap-1 rounded-xl bg-sand-50 p-4 ring-1 ring-ink-900/5">
      {["Lead", "CRM", "IA", "Time"].map((t, i) => (
        <div key={t} className="flex items-center gap-1">
          <span className={`rounded-lg px-2.5 py-1.5 text-[11px] font-semibold ${i === 2 ? "bg-gold-400 text-ink-950" : "bg-white text-ink-900 ring-1 ring-ink-900/10"}`}>{t}</span>
          {i < 3 ? <ArrowRight className="h-3 w-3 text-zinc-400" /> : null}
        </div>
      ))}
    </div>
  );
}

function DataVisual() {
  return (
    <div className="rounded-xl bg-sand-50 p-4 ring-1 ring-ink-900/5">
      <svg viewBox="0 0 200 60" className="h-16 w-full">
        <path d="M0 50 C30 44 45 46 70 36 S120 26 140 22 S180 10 200 6" fill="none" stroke="#c99a3a" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M0 54 C40 52 70 48 100 44 S160 36 200 32" fill="none" stroke="#d4d4d8" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function Solutions() {
  return (
    <section id="solucoes" aria-labelledby="solucoes-title" className="bg-sand-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="solucoes-title"
          eyebrow="Nossas soluções"
          title={<>Tudo o que sua empresa precisa para <span className="text-gradient-dark">atrair e converter</span></>}
          description="Soluções que funcionam sozinhas, mas foram pensadas para operar juntas: marketing, tecnologia e inteligência comercial no mesmo ecossistema."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-6">
          <CardShell className="lg:col-span-3" icon={Search} title="Google Ads" text="Estratégias de campanhas na Rede de Pesquisa para conectar empresas a pessoas que já procuram seus produtos e serviços.">
            <SearchVisual />
          </CardShell>
          <CardShell className="lg:col-span-3" delay={80} icon={Megaphone} title="Meta Ads" text="Campanhas estratégicas no Instagram e Facebook para gerar reconhecimento, oportunidades e novos contatos comerciais.">
            <SocialVisual />
          </CardShell>
          <CardShell className="lg:col-span-2" icon={LayoutTemplate} title="Criação de sites e landing pages" text="Desenvolvimento de websites modernos, responsivos e orientados à conversão.">
            <SiteVisual />
          </CardShell>
          <CardShell className="lg:col-span-2" delay={80} icon={Workflow} title="Automação comercial" text="Integrações e fluxos inteligentes para otimizar processos e reduzir atividades repetitivas.">
            <FlowVisual />
          </CardShell>
          <CardShell className="lg:col-span-2" delay={160} icon={BarChart3} title="Inteligência de dados" text="Monitoramento de indicadores comerciais, taxas de conversão e desempenho das estratégias.">
            <DataVisual />
          </CardShell>

          <Reveal className="lg:col-span-6">
            <article className="relative overflow-hidden rounded-2xl bg-ink-900 p-7 ring-1 ring-white/10 sm:p-10">
              <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden />
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold-500/20 blur-[90px]" aria-hidden />
              <div className="relative grid items-center gap-8 md:grid-cols-[1.2fr_1fr]">
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/15 text-gold-300 ring-1 ring-gold-400/25">
                    <Bot className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-5 text-2xl font-bold text-white sm:text-3xl">CRM com inteligência artificial</h3>
                  <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-zinc-300">
                    Organização de leads, acompanhamento comercial, análise de atendimentos e qualificação de oportunidades com o Pipeflow CRM.
                  </p>
                  <a href="#pipeflow" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-300 hover:text-gold-200">
                    Ver o Pipeflow CRM <ArrowRight className="h-4 w-4" aria-hidden />
                  </a>
                </div>
                <CheckList tone="dark" items={["Funis comerciais e gestão de leads", "WhatsApp integrado ao card do lead", "Qualificação com IA e revisão do time", "Prospecção B2B e taxas de conversão"]} />
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
