import { Download, ArrowRight, Github, Linkedin } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Dawood-Hussain.pdf";
    link.download = "Dawood-Hussain-Resume.pdf";
    link.click();
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        const elements = contentRef.current.querySelectorAll('.animate-in');
        gsap.fromTo(
          elements,
          { opacity: 0, y: 30 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 0.8, 
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.2
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center space-y-8 py-20">
          {/* Main Heading */}
          <div className="animate-in space-y-4">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-slate-900 dark:text-white text-balance">
              Hi, I'm{" "}
              <span className="text-primary">Dawood Hussain</span>
            </h1>
          </div>

          {/* Subheading */}
          <p className="animate-in text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed text-balance">
            Full-stack developer specializing in React, TypeScript, and Node.js.
            Building scalable applications that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="animate-in flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={handleDownloadResume}
              className="purple-button px-8 py-4 text-lg font-semibold flex items-center gap-3 group"
            >
              <Download size={20} />
              Download Resume
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 text-lg font-semibold text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Social Proof / Quick Links */}
          <div className="animate-in flex items-center justify-center gap-6 pt-8">
            <a
              href="https://github.com/DawoodHussain-Repo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <a
              href="https://www.linkedin.com/in/dawood-hussain-6a800622a/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Tech Stack Pills */}
          <div className="animate-in flex flex-wrap gap-3 justify-center pt-8">
            {["React", "TypeScript", "Node.js", "Next.js", "PostgreSQL", "AWS"].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-700 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-slate-400 dark:bg-slate-600 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
