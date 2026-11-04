import { Button } from "../ui/Button";
import { Starfield } from "../ui/Starfield";
import { HeroOrbit } from "./HeroOrbit";
import { HeroCopy } from "./HeroCopy";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="noise relative isolate overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden />
      <div aria-hidden className="absolute left-1/2 top-[-20%] -z-10 h-[720px] w-[1100px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(217,180,110,0.16),transparent)]" />
      <div aria-hidden className="absolute bottom-[-30%] right-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-[radial-gradient(closest-side,rgba(156,119,58,0.12),transparent)]" />
      <Starfield className="-z-10" />

      <div className="container-x grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div>
          <HeroCopy />
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#solucoes">Conheça nossas soluções</Button>
            <Button href="#contato" variant="ghost">Fale com um especialista</Button>
          </div>
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-mist-400" aria-label="Áreas de atuação">
            {["Google Ads", "Meta Ads", "CRM com IA", "Automação comercial", "Dados"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <span aria-hidden className="size-1.5 rounded-full bg-gold-400" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <HeroOrbit />
      </div>
    </section>
  );
}
