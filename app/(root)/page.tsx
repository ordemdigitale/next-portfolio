import { AmbientBackground } from "@/components/layout/ambient-background";
import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/sections/hero";
import { ProjectsShowcase } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { About } from "@/components/sections/about";
import { Footer } from "@/components/layout/footer";

import { Button } from "@/components/ui/button";


export default function Home() {
    return (
    <>
        {/* <AmbientBackground/> */}
        <Navbar />
        <main>
            <Hero />
            <ProjectsShowcase />
            <Skills />
            <About />
            <Contact />
        </main>
        <Footer />
    </>
  );
}
