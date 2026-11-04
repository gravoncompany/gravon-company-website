import { ArrowRight, Kanban, Megaphone, MessageCircle, Sparkles } from "lucide-react";
import { clinic } from "@/content/example";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { SimBadge } from "../mockups/BrandLogos";
import { CarouselPreview, ReelsCoverPreview, StoriesPreview } from "../mockups/ClinicSocial";
import { ClickToWhatsAppAd, PipeflowLeadPreview, WhatsAppChatPreview } from "../mockups/ClinicFunnel";

function StepTitle({ n, icon: Icon, title, text }: { n: string; icon: typeof Megaphone; title: string; text: string }) {
  return (
    <Reveal className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 font-display text-sm font-bold text-gold-300">{n}</span>
      <div>
        <h3 className="flex items-center gap-2 text-xl font-bold text-ink-900 sm:text-2xl"><Icon className="h-5 w-5 text-gold-600" aria-hidden />{title}</h3>
        <p className="mt-1 max-w-2xl text-[15px] leading-relaxed text-zinc-600">{text}</p>
      </div>
    </Reveal>
  );
}

function PieceCard({ title, text, children, delay = 0 }: { title: string; text: string; children: React.ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay} className="h-full min-w-0">
      <article className="flex h-full min-w-0 flex-col rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/5">
        <div className="flex flex-1 items-center justify-center">{children}</div>
        <h4 className="mt-5 font-display text-base font-bold text-ink-900">{title}</h4>
        <p className="mt-1 text-sm leading-relaxed text-zinc-600">{text}</p>
      </article>
    </Reveal>
  );
}

export function DemoProject() {
  return (
    <section id="projeto-demonstrativo" aria-labelledby="projeto-title" className="bg-white py-20 lg:py-28">
      <Container>
        <div className="flex flex-col items-center gap-5">
          <SectionHeading
            id="projeto-title"
            eyebrow="Projeto demonstrativo"
            title={<>Veja como seria um projeto <span className="text-gradient-dark">com a Gravon</span></>}
            description={`Um exemplo do caminho completo para uma clínica de estética: do conteúdo que gera interesse ao contato acompanhado no CRM. ${clinic.name} é uma clínica fictícia, criada só para esta demonstração.`}
          />
          <Reveal><span className="inline-flex"><span className="rounded-full bg-ink-900 px-1 py-1"><SimBadge>Projeto demonstrativo · clínica fictícia</SimBadge></span></span></Reveal>
        </div>

        <div className="mt-14 space-y-8">
          <StepTitle n="01" icon={Sparkles} title="Social Media" text="Conteúdo que educa e aproxima: a mesma clínica explicando um procedimento, respondendo dúvidas e convidando para a avaliação." />
          <div className="grid gap-5 lg:grid-cols-3">
            <PieceCard title="Carrossel · procedimento explicado" text={`Quatro telas que mostram, passo a passo, como funciona a ${clinic.procedure.toLowerCase()}.`}>
              <CarouselPreview />
            </PieceCard>
            <PieceCard delay={80} title="Capa de Reels · dúvida comum" text="Uma pergunta frequente vira vídeo curto, com capa clara que convida a assistir.">
              <ReelsCoverPreview />
            </PieceCard>
            <PieceCard delay={160} title="Sequência de Stories · agendamento" text="Três telas em sequência que levam ao convite para agendar uma avaliação.">
              <div className="w-full max-w-[340px]"><StoriesPreview /></div>
            </PieceCard>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <StepTitle n="02" icon={Megaphone} title="Campanha que leva ao WhatsApp" text="Um anúncio no Instagram com o botão Enviar mensagem abre a conversa direto no WhatsApp da clínica." />
          <div className="grid items-center gap-5 rounded-2xl bg-sand-50 p-5 ring-1 ring-ink-900/5 sm:p-8 md:grid-cols-[1fr_auto_1fr]">
            <Reveal className="min-w-0"><div className="mb-3 text-center"><SimBadgeDark>Simulação de anúncio</SimBadgeDark></div><ClickToWhatsAppAd /></Reveal>
            <div className="flex justify-center text-gold-600" aria-hidden><ArrowRight className="h-6 w-6 rotate-90 md:rotate-0" /></div>
            <Reveal delay={100} className="min-w-0"><div className="mb-3 text-center"><SimBadgeDark>Conversa ilustrativa</SimBadgeDark></div><WhatsAppChatPreview /></Reveal>
          </div>
        </div>

        <div className="mt-16 space-y-8">
          <StepTitle n="03" icon={Kanban} title="Pipeflow acompanha cada contato" text="A conversa vira um card no funil com origem e campanha registradas, e a Gravon IA resume o interesse para o time decidir o próximo passo." />
          <Reveal className="mx-auto max-w-4xl">
            <PipeflowLeadPreview />
            <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-xs text-zinc-500"><MessageCircle className="h-3.5 w-3.5" aria-hidden />Contato, conversa e dados são ilustrativos.</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function SimBadgeDark({ children }: { children: React.ReactNode }) {
  return <span className="inline-flex items-center gap-1.5 rounded-full bg-ink-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[.12em] text-gold-200"><span className="h-1.5 w-1.5 rounded-full bg-gold-300" aria-hidden />{children}</span>;
}
