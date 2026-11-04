import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Solutions } from "@/components/sections/Solutions";
import { Journey } from "@/components/sections/Journey";
import { Pipeflow } from "@/components/sections/Pipeflow";
import { Portal } from "@/components/sections/Portal";
import { Methodology } from "@/components/sections/Methodology";
import { Process } from "@/components/sections/Process";
import { SalesFunnel } from "@/components/sections/SalesFunnel";
import { Implementation90 } from "@/components/sections/Implementation90";
import { About } from "@/components/sections/About";
import { DemoProject } from "@/components/sections/DemoProject";
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
      <Process />
      <SalesFunnel />
      <Implementation90 />
      <DemoProject />
      <About />
      <ContactCta />
    </>
  );
}
