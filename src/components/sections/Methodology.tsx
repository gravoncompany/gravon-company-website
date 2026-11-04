import { SectionHeading } from "../ui/SectionHeading";
import { MethodologyDial } from "./MethodologyDial";

export function Methodology() {
  return (
    <section id="metodologia" aria-labelledby="metodologia-title" className="noise relative overflow-hidden bg-ink-900/60 py-24 md:py-36">
      <div className="grid-bg absolute inset-0 -z-10 opacity-60" aria-hidden />
      <div className="container-x">
        <SectionHeading
          align="center"
          id="metodologia-title"
          eyebrow="Nossa metodologia"
          title={<>CMC — <span className="text-gold-gradient">Captação Moderna de Clientes</span></>}
          description="Uma metodologia em quatro etapas que trata a captação como um ciclo contínuo: atrair as pessoas certas, qualificar, converter e manter o relacionamento."
        />
        <MethodologyDial />
      </div>
    </section>
  );
}
