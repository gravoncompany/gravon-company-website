import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { LeadButton } from "../lead/LeadButton";

export function ContactCta() {
  return (
    <section id="contato" aria-labelledby="contato-title" className="relative overflow-hidden bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 py-20 lg:py-28">
      <div className="grid-bg-light pointer-events-none absolute inset-0 opacity-80" aria-hidden />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 id="contato-title" className="text-3xl font-extrabold leading-[1.1] text-ink-950 text-balance sm:text-4xl lg:text-5xl">
            Sua empresa está preparada para transformar oportunidades em vendas?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-900/80 sm:text-lg">
            Converse com nossos especialistas e descubra como integrar marketing, tecnologia e inteligência comercial ao crescimento da sua empresa.
          </p>
          <div className="mt-9 flex justify-center">
            <LeadButton source="cta-final" variant="dark" arrow className="w-full sm:w-auto">
              Falar com a Gravon Company
            </LeadButton>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
