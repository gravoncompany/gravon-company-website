import { Hero } from "@/components/sections/Hero";
import { Differential } from "@/components/sections/Differential";
import { Solutions } from "@/components/sections/Solutions";
import { Pipeflow } from "@/components/sections/Pipeflow";
import { Portal } from "@/components/sections/Portal";
import { Methodology } from "@/components/sections/Methodology";
import { Projects } from "@/components/sections/Projects";
import { ContactCta } from "@/components/sections/ContactCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Differential />
      <Solutions />
      <Pipeflow />
      <Portal />
      <Methodology />
      <Projects />
      <ContactCta />
    </>
  );
}
