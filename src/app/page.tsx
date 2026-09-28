import React from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PainPoints } from "@/components/sections/PainPoints";
import { ServicesBento } from "@/components/sections/ServicesBento";
import { ActiveProject } from "@/components/sections/ActiveProject";
import { TeamSection } from "@/components/sections/TeamSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 flex flex-col selection:bg-[#e50914] selection:text-white">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        <HeroSection />

        <PainPoints />
        <ServicesBento />
        <ActiveProject />
        <TeamSection />
        <ProcessSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
