import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { DevOps } from "@/components/devops";
import { Projects } from "@/components/projects";
import { Achievements } from "@/components/achievements";
import { Certifications } from "@/components/certifications";
import { Education } from "@/components/education";
import { Timeline } from "@/components/timeline";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <About />
        <Projects />
        <Certifications />
        <Education />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
