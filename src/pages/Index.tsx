import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MarqueeSection from "@/components/sections/MarqueeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import TechnologiesSection from "@/components/sections/TechnologiesSection";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#050505] overflow-x-hidden">
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <TechnologiesSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

