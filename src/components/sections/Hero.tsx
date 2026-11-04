import { Bot, LayoutTemplate, Megaphone, Search } from "lucide-react";
import { pipeflowScreens } from "@/content/media";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";
import { LeadButton } from "../lead/LeadButton";
import { Reveal } from "../ui/Reveal";
import { ScreenshotSlot } from "../ui/ScreenshotSlot";
import { AdSearchCard, AiSignalCard, PortalCard, SocialAdCard } from "../mockups/HeroCards";

export function Hero() {
  const pipeline = pipeflowScreens[0].screen;
  return (
    <section id="topo" aria-labelledby="hero-title" className="relative overflow-hidden bg-ink-950 pb-20 pt-28 sm:pt-32 lg:pb-28 lg:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gold-500/20 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-gold-300/10 blur-[100px]" aria-hidden />

      <Container className="relative">
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <a href="#solucoes" className="inline-flex items-center gap-2 rounded-full bg-white/5 py-1.5 pl-1.5 pr-4 text-xs font-medium text-zinc-300 ring-1 ring-white/10 transition hover:bg-white/10 sm:text-sm">
              <span className="rounded-full bg-gold-400 px-2.5 py-0.5 text-[11px] font-bold text-ink-950">Gravon</span>
              Marketing, tecnologia e inteligência comercial
            </a>
          </Reveal>
          <Reveal delay={80}>
            <h1 id="hero-title" className="mt-7 text-[42px] font-extrabold leading-[1.04] text-white text-balance sm:text-6xl lg:text-[80px]">
              <span className="sm:block">Marketing que atrai.</span>{" "}
              <span className="text-gradient sm:block">Inteligência que converte.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
              A Gravon Company conecta estratégias de marketing digital, inteligência artificial e tecnologia comercial para transformar oportunidades em resultados.
            </p>
          </Reveal>
          <Reveal delay={240} className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href="#solucoes" arrow>Conheça nossas soluções</Button>
            <LeadButton source="hero" variant="ghost-dark">Fale com um especialista</LeadButton>
          </Reveal>
          <Reveal delay={300}>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-400">
              <li className="flex items-center gap-2"><Search className="h-4 w-4 text-gold-300" aria-hidden />Google Ads</li>
              <li className="flex items-center gap-2"><Megaphone className="h-4 w-4 text-gold-300" aria-hidden />Meta Ads</li>
              <li className="flex items-center gap-2"><LayoutTemplate className="h-4 w-4 text-gold-300" aria-hidden />Sites e landing pages</li>
              <li className="flex items-center gap-2"><Bot className="h-4 w-4 text-gold-300" aria-hidden />CRM e automação com IA</li>
            </ul>
          </Reveal>
        </div>

        {/* Composição: campanhas → CRM → IA → resultados */}
        <Reveal delay={200} className="relative mx-auto mt-14 max-w-6xl lg:mt-20">
          <div className="pointer-events-none absolute -inset-x-10 -bottom-10 top-10 rounded-[40px] bg-gold-500/15 blur-3xl" aria-hidden />
          <div className="relative lg:px-16">
            <ScreenshotSlot screen={pipeline} priority caption={false} />
            <div className="pointer-events-none absolute -left-2 top-10 hidden animate-float xl:block" aria-hidden><AdSearchCard /></div>
            <div className="pointer-events-none absolute -right-2 top-4 hidden animate-float xl:block" style={{ animationDelay: "-2s" }} aria-hidden><SocialAdCard /></div>
            <div className="pointer-events-none absolute -bottom-10 left-4 hidden animate-float lg:block" style={{ animationDelay: "-4s" }} aria-hidden><AiSignalCard /></div>
            <div className="pointer-events-none absolute -bottom-12 right-6 hidden animate-float lg:block" style={{ animationDelay: "-1s" }} aria-hidden><PortalCard /></div>
          </div>
          <ul className="mt-5 grid grid-cols-2 gap-2 text-xs font-semibold text-zinc-200 lg:hidden" aria-label="Como as frentes se conectam">
            {["Google Ads e Meta Ads", "Pipeflow CRM", "Gravon IA", "Portal Gravon"].map((t, i) => (
              <li key={t} className="flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2.5 ring-1 ring-white/10">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-gold-400 text-[10px] font-bold text-ink-950">{i + 1}</span>
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-xs text-zinc-500 lg:mt-16">
            Pipeflow CRM com dados demonstrativos · campanhas, IA e Portal em representação ilustrativa
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
