import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { ContactForm } from "./ContactForm";

export function ContactCta() {
  const wa = whatsappLink();
  return (
    <section id="contato" aria-labelledby="contato-title" className="relative overflow-hidden bg-gradient-to-br from-gold-300 via-gold-400 to-gold-600 py-20 lg:py-28">
      <div className="grid-bg-light pointer-events-none absolute inset-0 opacity-80" aria-hidden />
      <Container className="relative grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <Reveal>
          <h2 id="contato-title" className="text-3xl font-extrabold leading-[1.1] text-ink-950 text-balance sm:text-4xl lg:text-5xl">
            Sua empresa está preparada para transformar oportunidades em vendas?
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-900/80 sm:text-lg">
            Converse com nossos especialistas e descubra como integrar marketing, tecnologia e inteligência comercial ao crescimento da sua empresa.
          </p>
          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <Button href={wa ?? "#formulario"} external={Boolean(wa)} variant="dark" arrow>
              Falar com a Gravon Company
            </Button>
            {wa ? (
              <a href={wa} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl px-6 text-[15px] font-semibold text-ink-950 ring-1 ring-ink-950/20 hover:bg-ink-950/5">
                <MessageCircle className="h-4 w-4" aria-hidden /> WhatsApp
              </a>
            ) : null}
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </Container>
    </section>
  );
}
