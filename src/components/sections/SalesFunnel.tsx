import { ArrowDown, ChartNoAxesCombined, Headset, LayoutTemplate, Target } from "lucide-react";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { GoogleAdsLogo, InstagramLogo, MetaLogo, WhatsAppLogo } from "../mockups/BrandLogos";

type Step = { n: number; title: string; text: string; icons: React.ReactNode };

const chip = (icon: React.ReactNode, label: string) => (
  <span className="flex flex-col items-center gap-1" key={label}>
    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-black/10 sm:h-12 sm:w-12">{icon}</span>
    <span className="text-[11px] font-semibold text-ink-950/80">{label}</span>
  </span>
);

const steps: Step[] = [
  {
    n: 1,
    title: "Tráfego pago e social media",
    text: "A empresa chega a potenciais clientes com campanhas no Google Ads e Meta Ads e conteúdo no Instagram.",
    icons: [chip(<GoogleAdsLogo className="h-6 w-6" />, "Google Ads"), chip(<MetaLogo className="h-6 w-6" />, "Meta Ads"), chip(<InstagramLogo className="h-6 w-6" />, "Instagram")],
  },
  {
    n: 2,
    title: "Captação de leads",
    text: "As pessoas interessadas entram em contato pelo formulário da landing page ou pelo WhatsApp.",
    icons: [chip(<LayoutTemplate className="h-6 w-6 text-ink-900" aria-hidden />, "Landing page"), chip(<WhatsAppLogo className="h-6 w-6" />, "WhatsApp")],
  },
  {
    n: 3,
    title: "Atendimento e qualificação",
    text: "O contato entra no Pipeflow. A equipe entende o que ele precisa e define o próximo passo.",
    icons: [chip(<Headset className="h-6 w-6 text-ink-900" aria-hidden />, "Atendimento"), chip(<span className="font-display text-[12px] font-extrabold text-ink-900">CRM</span>, "Pipeflow")],
  },
  {
    n: 4,
    title: "Conversão em vendas",
    text: "A equipe acompanha a oportunidade com agendamentos, propostas e follow-ups até o fechamento.",
    icons: [chip(<ChartNoAxesCombined className="h-6 w-6 text-ink-900" aria-hidden />, "Vendas")],
  },
];

/* Recorte de cada faixa (% de cada lado): topo = inset[i], base = inset[i + 1]. */
const insetDesk = [0, 4.5, 9, 13.5, 18];
const insetMob = [0, 2.5, 5, 7.5, 10];
const fills = ["#f2d27a", "#e2b955", "#c99a3a", "#a87e2a"];

function Band({ s, i }: { s: Step; i: number }) {
  const poly = (ins: number[]) => `polygon(${ins[i]}% 0, ${100 - ins[i]}% 0, ${100 - ins[i + 1]}% 100%, ${ins[i + 1]}% 100%)`;
  const bg = `linear-gradient(180deg, ${fills[i]}, ${fills[i]}dd)`;
  return (
    <div className="relative" style={{ ["--pm" as string]: `${insetMob[i + 1]}%`, ["--pd" as string]: `${insetDesk[i + 1]}%` }}>
      <div className="absolute inset-0 md:hidden" style={{ background: bg, clipPath: poly(insetMob) }} aria-hidden />
      <div className="absolute inset-0 hidden md:block" style={{ background: bg, clipPath: poly(insetDesk) }} aria-hidden />
      <div className="relative grid gap-3 px-[calc(var(--pm)+18px)] py-5 text-ink-950 md:grid-cols-[auto_1fr] md:items-center md:gap-6 md:px-[calc(var(--pd)+28px)] md:py-6">
        <div className="flex items-center gap-3 md:gap-5 md:border-r md:border-ink-950/20 md:pr-6">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-ink-950 font-display text-xl font-extrabold text-gold-300 md:h-14 md:w-14 md:text-2xl">{s.n}</span>
          <div className="flex flex-wrap items-start gap-3">{s.icons}</div>
        </div>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-extrabold leading-tight sm:text-xl">{s.title}</h3>
          <p className="mt-1 text-[14.5px] font-medium leading-snug text-ink-950/85 sm:text-[15px]">{s.text}</p>
        </div>
      </div>
    </div>
  );
}

function Group({ label, start, children }: { label: string; start: number; children: React.ReactNode }) {
  return (
    <li className="grid list-none gap-2 md:grid-cols-[120px_1fr] md:gap-5" aria-label={label}>
      <div className="flex items-center md:justify-end">
        <span className="hidden h-full w-4 rounded-l-lg border-y-2 border-l-2 border-gold-400 md:order-2 md:block" aria-hidden />
        <p className="font-display text-sm font-extrabold uppercase tracking-[.18em] text-gold-300 md:order-1 md:pr-3 md:text-base">{label}</p>
      </div>
      <ol start={start} className="space-y-2">{children}</ol>
    </li>
  );
}

export function SalesFunnel() {
  return (
    <section id="como-funciona" aria-labelledby="como-funciona-title" className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" aria-hidden />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          id="como-funciona-title"
          eyebrow="Marketing e vendas"
          title={<>Como funciona o processo de <span className="text-gradient">marketing e vendas</span></>}
          description="Do primeiro anúncio ao fechamento da venda."
        />

        <ol className="mx-auto mt-14 max-w-5xl space-y-4" aria-label="Etapas do processo de marketing e vendas">
          <Group label="Marketing" start={1}>
            {steps.slice(0, 2).map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 80} className="list-none">
                <Band s={s} i={i} />
              </Reveal>
            ))}
          </Group>

          {/* Passagem da captação para o atendimento comercial */}
          <li className="list-none md:pl-[140px]" aria-label="Passagem da captação para o atendimento comercial">
            <div className="relative flex items-center justify-center py-1">
              <span className="absolute inset-x-6 top-1/2 border-t-2 border-dashed border-gold-400/60" aria-hidden />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-ink-900 px-4 py-2 text-center text-[13px] font-semibold text-gold-200 ring-2 ring-gold-400 sm:text-sm">
                <ArrowDown className="h-4 w-4 shrink-0" aria-hidden /> Passagem para o comercial: o lead captado vira atendimento no Pipeflow
              </span>
            </div>
          </li>

          <Group label="Vendas" start={3}>
            {steps.slice(2).map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 80} className="list-none">
                <Band s={s} i={i + 2} />
              </Reveal>
            ))}
          </Group>
        </ol>

        <Reveal className="mx-auto mt-10 max-w-4xl">
          <p className="flex flex-col items-center gap-3 rounded-2xl px-5 py-4 text-center font-display text-base font-bold text-white ring-2 ring-gold-400/70 sm:flex-row sm:justify-center sm:text-lg">
            <Target className="h-6 w-6 shrink-0 text-gold-300" aria-hidden />
            <span>Marketing gera oportunidades. <span className="text-gold-300">Vendas transformam oportunidades em faturamento.</span></span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

