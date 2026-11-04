import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Solutions } from "@/components/sections/Solutions";
import { Journey } from "@/components/sections/Journey";
import { Pipeflow } from "@/components/sections/Pipeflow";
import { Portal } from "@/components/sections/Portal";
import { Methodology } from "@/components/sections/Methodology";
import { Projects } from "@/components/sections/Projects";
import { ContactCta } from "@/components/sections/ContactCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <Solutions />
      <Journey />
      <Pipeflow />
      <Portal />
      <Methodology />
      <Projects />
      <ContactCta />
    </>
  );
}
