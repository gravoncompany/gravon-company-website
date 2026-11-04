"use client";

import { useId, useState } from "react";
import { Check, ChevronDown, Minus, Sparkles } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { LeadButton } from "../lead/LeadButton";

type PlanId = "essencial" | "growth" | "premium";
type Item = { title: string; text: string; badge?: string };
type Plan = { id: PlanId; name: string; tagline: string; intro?: string; items: Item[] };

const plans: Plan[] = [
  {
    id: "essencial",
    name: "Essencial",
    tagline: "Comece a captar leads.",
    items: [
      { title: "Gestão de tráfego pago", text: "Planejamento, configuração e otimização de campanhas em um canal, Google Ads ou Meta Ads." },
      { title: "Rastreamento de conversões", text: "Configuração da medição das ações que indicam interesse, como envio de formulário ou clique no WhatsApp." },
      { title: "Landing page", text: "Criação de uma página durante a implementação, com apresentação da oferta e chamada para contato." },
      { title: "Materiais para anúncios", text: "Adaptação das imagens e dos vídeos que a empresa já tem para os formatos das campanhas." },
      { title: "Social media", text: "Planejamento de pautas e criação de até 4 posts por mês para as redes sociais." },
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "Acompanhe o lead do anúncio até a venda.",
    items: [
      { title: "Tráfego em até dois canais", text: "Gestão de campanhas no Google Ads e Meta Ads, com remarketing para alcançar novamente quem já interagiu com a empresa." },
      { title: "Criativos para campanhas publicitárias", text: "Criação de peças com chamadas, ofertas e formatos adequados para cada campanha." },
      { title: "Social media", text: "Planejamento de pautas e criação de até 8 posts por mês no total." },
      { title: "Criação e edição de vídeos", text: "Até 2 vídeos mensais, com edição, recursos de IA e motion graphics." },
      { title: "CRM Pipeflow", text: "Organização dos leads por origem e etapa do funil, com integração básica ao WhatsApp para acompanhar os contatos." },
      { title: "Automações comerciais", text: "Configuração de rotinas para organizar as informações dos leads no CRM e facilitar o acompanhamento pela equipe." },
      { title: "Portal Gravon", text: "Acesso a relatórios de desempenho, registro das otimizações realizadas e próximos passos do projeto." },
      { title: "Acompanhamento estratégico", text: "Revisão da evolução das campanhas e das etapas do funil durante a implementação." },
    ],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "Melhore o atendimento e o follow-up.",
    intro: "Tudo do Growth, com Gravon IA para analisar conversas e sugerir respostas, automações comerciais e revisão do funil de vendas. Além disso:",
    items: [
      { title: "Social media", text: "Planejamento de pautas e criação de até 12 posts por mês no total." },
      { title: "Criação e edição de vídeos", text: "Até 4 vídeos mensais no total, com IA e motion graphics.", badge: "Até 1 vídeo mensal 100% gerado por IA, conforme o escopo" },
      { title: "Criativos publicitários personalizados", text: "Criação de peças para ofertas e públicos específicos." },
    ],
  },
];

const order: PlanId[] = ["essencial", "growth", "premium"];
type V = string | true | false;
const rows: { label: string; values: Record<PlanId, V> }[] = [
  { label: "Gestão de tráfego pago", values: { essencial: "1 canal", growth: "Até 2 canais", premium: "Até 2 canais" } },
  { label: "Criativos para anúncios", values: { essencial: "Adaptação de materiais existentes", growth: "Criação de peças", premium: "Criação de peças" } },
  { label: "Rastreamento de conversões", values: { essencial: true, growth: true, premium: true } },
  { label: "Remarketing", values: { essencial: false, growth: true, premium: true } },
  { label: "Pipeflow com funil comercial e origem dos leads", values: { essencial: false, growth: true, premium: true } },
  { label: "Portal Gravon para acompanhamento de resultados", values: { essencial: false, growth: true, premium: true } },
  { label: "Gravon IA para análise de conversas e sugestões de respostas", values: { essencial: false, growth: false, premium: true } },
  { label: "Distribuição de leads e lembretes de follow-up", values: { essencial: false, growth: false, premium: true } },
  { label: "Revisão do atendimento e do funil comercial", values: { essencial: false, growth: false, premium: true } },
];

function Value({ v }: { v: V }) {
  if (v === false) return <span className="inline-flex items-center justify-center text-zinc-500"><Minus className="h-4 w-4" aria-hidden /><span className="sr-only">Não incluído</span></span>;
  if (v === true) return (
    <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-gold-200">
      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold-400 text-ink-950"><Check className="h-3 w-3" strokeWidth={3} aria-hidden /></span>Incluído
    </span>
  );
  return <span className="text-[14px] font-semibold text-white">{v}</span>;
}

function PlanCard({ plan }: { plan: Plan }) {
  const hl = plan.id === "growth";
  return (
    <article aria-label={`Plano ${plan.name}`} className={`relative flex h-full flex-col rounded-3xl bg-ink-900 p-6 sm:p-8 ${hl ? "shadow-glow ring-2 ring-gold-400 lg:-my-3 lg:py-11" : "ring-1 ring-white/10"}`}>
      {hl ? <div className="grid-bg pointer-events-none absolute inset-0 rounded-3xl opacity-60" aria-hidden /> : null}
      <div className="relative flex flex-1 flex-col">
        <h3 className="text-2xl font-extrabold text-white">
          Gravon <span className="text-gold-300">{plan.name}</span>
        </h3>
        <p className="mt-3 text-[16px] font-semibold leading-snug text-zinc-200">{plan.tagline}</p>
        <div className={`my-6 h-px ${hl ? "bg-gold-400/40" : "bg-white/10"}`} />
        {plan.intro ? (
          <p className={`mb-5 rounded-xl px-4 py-3 text-[14px] leading-snug ${hl ? "bg-gold-400/10 text-gold-100 ring-1 ring-gold-400/30" : "bg-white/[.04] text-zinc-200 ring-1 ring-white/10"}`}>{plan.intro}</p>
        ) : null}
        <ul className="space-y-4">
          {plan.items.map((it) => (
            <li key={it.title} className="flex items-start gap-3">
              <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${hl ? "bg-gold-400 text-ink-950" : "bg-gold-400/20 text-gold-300"}`}>
                <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
              </span>
              <span className="min-w-0 text-[14.5px] leading-snug text-zinc-300">
                <strong className="block font-semibold text-white">{it.title}</strong>
                {it.text}
                {it.badge ? (
                  <span className="mt-2 flex w-fit items-start gap-1.5 rounded-lg bg-gold-400/15 px-2.5 py-1.5 text-[13px] font-semibold leading-snug text-gold-200 ring-1 ring-gold-400/40">
                    <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />{it.badge}
                  </span>
                ) : null}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-8">
          <LeadButton source={`plano-${plan.id}`} variant={hl ? "primary" : "ghost-dark"} arrow className="w-full">
            Quero saber mais
          </LeadButton>
        </div>
      </div>
    </article>
  );
}

export function Plans() {
  const [open, setOpen] = useState(false);
  const tableId = useId().replace(/:/g, "") + "-comparativo";
  return (
    <section id="planos" aria-labelledby="planos-title" className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-40 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[120px]" aria-hidden />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          id="planos-title"
          eyebrow="Planos"
          title={<>Escolha o plano ideal para <span className="text-gradient">o seu momento</span></>}
          description="Do primeiro canal de anúncios à operação comercial completa, com acompanhamento do lead até a venda."
        />

        <div className="mx-auto mt-14 grid max-w-6xl items-stretch gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-5 xl:gap-7">
          {plans.map((p, i) => (
            <Reveal key={p.id} delay={i * 90} className="h-full">
              <PlanCard plan={p} />
            </Reveal>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <button
            type="button"
            aria-expanded={open}
            aria-controls={tableId}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex min-h-[48px] items-center gap-2 rounded-xl px-6 text-[15px] font-semibold text-white ring-1 ring-gold-400/60 transition hover:bg-white/5"
          >
            Compare todos os recursos
            <ChevronDown className={`h-4 w-4 text-gold-300 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
          </button>
        </div>

        <div id={tableId} hidden={!open} className="mx-auto mt-8 max-w-6xl">
          <div className="overflow-x-auto rounded-3xl bg-ink-900 ring-1 ring-white/10" role="region" aria-label="Tabela comparativa dos planos" tabIndex={0}>
            <table className="w-full min-w-[560px] border-collapse text-left">
              <caption className="sr-only">Comparativo de entregáveis dos planos Essencial, Growth e Premium</caption>
              <thead>
                <tr>
                  <th scope="col" className="sticky left-0 z-10 w-[36%] bg-ink-900 px-4 py-5 text-sm font-semibold text-zinc-400 shadow-[8px_0_12px_-10px_rgba(0,0,0,.9)] sm:px-6 md:static md:shadow-none">Entregável</th>
                  {order.map((id) => (
                    <th key={id} scope="col" className={`px-4 py-5 text-center font-display text-base font-extrabold ${id === "growth" ? "border-x-2 border-t-2 border-gold-400 bg-gold-400/10 text-gold-200" : "text-white"}`}>
                      {plans.find((p) => p.id === id)!.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, ri) => (
                  <tr key={r.label} className="border-t border-white/10">
                    <th scope="row" className="sticky left-0 z-10 w-[148px] min-w-[148px] bg-ink-900 px-4 py-4 text-[13.5px] font-medium leading-snug text-zinc-200 shadow-[8px_0_12px_-10px_rgba(0,0,0,.9)] sm:w-auto sm:px-6 sm:text-[14.5px] md:static md:shadow-none">{r.label}</th>
                    {order.map((id) => (
                      <td key={id} className={`min-w-[132px] px-3 py-4 text-center sm:px-4 ${id === "growth" ? `border-x-2 border-gold-400 bg-gold-400/10 ${ri === rows.length - 1 ? "border-b-2" : ""}` : ""}`}>
                        <Value v={r.values[id]} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-center text-xs text-zinc-500 md:hidden">Deslize a tabela para ver os três planos →</p>
        </div>
      </Container>
    </section>
  );
}
