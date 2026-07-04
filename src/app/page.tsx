import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Projects } from "@/components/sections/Projects";
import { WritingArt } from "@/components/sections/WritingArt";
import { Career } from "@/components/sections/Career";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <CaseStudies />
        <Projects />
        <WritingArt />
        <Career />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
