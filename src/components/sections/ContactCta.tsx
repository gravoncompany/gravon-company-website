import { whatsappLink } from "@/lib/site";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { Starfield } from "../ui/Starfield";
import { ContactForm } from "./ContactForm";

export function ContactCta() {
  const wa = whatsappLink();
  return (
    <section id="contato" aria-labelledby="contato-title" className="noise relative isolate overflow-hidden py-24 md:py-36">
      <div aria-hidden className="absolute left-1/2 top-0 -z-10 h-[700px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(217,180,110,0.18),transparent_60%)]" />
      <Starfield seed={21} count={50} className="-z-10" />
      <div className="container-x grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="lg:pt-6">
          <Reveal>
            <p className="font-display text-xs font-medium uppercase tracking-[0.32em] text-gold-400">Vamos conversar</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 id="contato-title" className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-4xl md:text-5xl">
              Sua empresa está preparada para <span className="text-gold-gradient">transformar oportunidades em vendas?</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mist-300">
              Converse com nossos especialistas e descubra como integrar marketing, tecnologia e inteligência comercial ao crescimento da sua empresa.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-10">
            <Button href={wa ?? "#formulario"} external={Boolean(wa)}>
              Falar com a Gravon Company
            </Button>
          </Reveal>
        </div>
        <Reveal delay={0.1} y={30}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
