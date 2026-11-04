import { SectionHeading } from "../ui/SectionHeading";
import { ProjectsGallery } from "./ProjectsGallery";

export function Projects() {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="relative py-24 md:py-36">
      <div className="container-x">
        <SectionHeading
          id="projetos-title"
          eyebrow="Projetos e cases"
          title={<>Projetos reais, <span className="text-gold-gradient">apresentados com transparência.</span></>}
          description="Aqui apresentamos projetos desenvolvidos pela Gravon. Publicamos apenas cases com autorização dos clientes, métricas com fonte e período identificados e depoimentos aprovados."
        />
        <ProjectsGallery />
      </div>
    </section>
  );
}
