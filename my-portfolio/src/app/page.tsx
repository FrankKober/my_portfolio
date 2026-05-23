import Hero from "@/components/sections/Hero";
import ParticlesBackground from "@/components/ui/ParticlesBackground";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Statistics from "@/components/sections/Statistics";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative flex flex-col overflow-x-hidden">
      <ParticlesBackground />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Statistics />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
}