import { ArrowRight, BarChart3, Bot, LayoutTemplate, MessageCircle, Workflow, type LucideIcon } from "lucide-react";
import { example } from "@/content/example";
import { GoogleAdsLogo, MetaLogo, SimBadge } from "../mockups/BrandLogos";
import { GoogleSearchPreview } from "../mockups/GoogleSearchPreview";
import { InstagramAdPreview } from "../mockups/InstagramAdPreview";
import { LandingPhonePreview } from "../mockups/LandingPhonePreview";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { CheckList } from "../ui/CheckList";

function CardShell({ icon: Icon, title, text, children, className = "", delay = 0 }: { icon: LucideIcon; title: string; text: string; children?: React.ReactNode; className?: string; delay?: number }) {
  return (
    <Reveal delay={delay} className={`h-full min-w-0 ${className}`}>
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

function FlowVisual() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-1 rounded-xl bg-sand-50 p-3 ring-1 ring-ink-900/5 sm:p-4">
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

function PreviewCard({ logo, step, title, text, badge, children, delay = 0 }: { logo: React.ReactNode; step: string; title: string; text: string; badge: string; children: React.ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full min-w-0">
      <article className="relative flex h-full min-w-0 flex-col overflow-hidden rounded-2xl bg-ink-900 p-5 ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-1 hover:ring-gold-400/40 sm:p-6">
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-gold-500/15 blur-[70px]" aria-hidden />
        <div className="relative flex items-center justify-between gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white ring-1 ring-white/10">{logo}</span>
          <span className="font-display text-xs font-bold text-zinc-500">{step}</span>
        </div>
        <h3 className="relative mt-5 text-xl font-bold text-white">{title}</h3>
        <p className="relative mt-2 text-[15px] leading-relaxed text-zinc-400">{text}</p>
        <div className="relative mt-6 flex flex-1 flex-col">
          <div className="mb-3"><SimBadge>{badge}</SimBadge></div>
          <div className="flex min-w-0 flex-1 items-center justify-center">{children}</div>
        </div>
      </article>
    </Reveal>
  );
}

const path = ["Pesquisa no Google", "Anúncio no Instagram", "Landing page", "Contato pelo WhatsApp"];

export function Solutions() {
  return (
    <section id="solucoes" aria-labelledby="solucoes-title" className="bg-sand-50 py-20 lg:py-28">
      <Container>
        <SectionHeading
          id="solucoes-title"
          eyebrow="Nossas soluções"
          title={<>Tudo o que sua empresa precisa para <span className="text-gradient-dark">atrair e converter</span></>}
          description="Veja como uma mesma empresa aparece em cada etapa: no Google, no Instagram e na página que transforma o clique em contato."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <PreviewCard step="01" logo={<GoogleAdsLogo className="h-6 w-6" />} title="Google Ads" badge="Simulação de anúncio"
            text="Campanhas na Rede de Pesquisa para conectar empresas a pessoas que já procuram seus produtos e serviços.">
            <div className="w-full min-w-0"><GoogleSearchPreview /></div>
          </PreviewCard>
          <PreviewCard delay={80} step="02" logo={<MetaLogo className="h-6 w-6" />} title="Meta Ads" badge="Simulação de anúncio"
            text="Campanhas no Instagram e Facebook para gerar reconhecimento, oportunidades e novos contatos comerciais.">
            <InstagramAdPreview />
          </PreviewCard>
          <PreviewCard delay={160} step="03" logo={<LayoutTemplate className="h-5 w-5 text-ink-900" aria-hidden />} title="Sites e landing pages" badge="Prévia ilustrativa"
            text="Páginas modernas, responsivas e orientadas à conversão, com a oferta clara e o contato a um toque.">
            <LandingPhonePreview />
          </PreviewCard>
        </div>

        <Reveal className="mt-5">
          <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow-card ring-1 ring-ink-900/5 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm text-zinc-600">
              <span className="font-semibold text-ink-900">Do anúncio ao contato</span> · exemplo fictício: {example.name}
            </p>
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-2 text-[13px] font-semibold text-ink-900" aria-label="Caminho da campanha até o contato">
              {path.map((p, i) => (
                <li key={p} className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 ${i === path.length - 1 ? "bg-gold-400 text-ink-950" : "bg-sand-50 ring-1 ring-ink-900/10"}`}>
                    {i === path.length - 1 ? <MessageCircle className="h-3.5 w-3.5" aria-hidden /> : null}{p}
                  </span>
                  {i < path.length - 1 ? <ArrowRight className="h-3.5 w-3.5 text-gold-600" aria-hidden /> : null}
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <CardShell icon={Workflow} title="Automação comercial" text="Integrações e fluxos inteligentes para otimizar processos e reduzir atividades repetitivas.">
            <FlowVisual />
          </CardShell>
          <CardShell delay={80} icon={BarChart3} title="Inteligência de dados" text="Monitoramento de indicadores comerciais, taxas de conversão e desempenho das estratégias.">
            <DataVisual />
          </CardShell>

          <Reveal className="min-w-0 lg:col-span-2">
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
