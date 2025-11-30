import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";

const shiftingWords = ["Create", "Collaborate", "Innovate"];

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % shiftingWords.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Dawood-Hussain.pdf";
    link.download = "Dawood-Hussain-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title letters
      if (titleRef.current) {
        const title = titleRef.current;
        const chars = title.querySelectorAll(".char");

        gsap.fromTo(
          chars,
          { y: 100, opacity: 0, rotationX: -90 },
          {
            y: 0,
            opacity: 1,
            rotationX: 0,
            stagger: 0.05,
            duration: 1.2,
            ease: "power4.out",
            delay: 0.3,
          }
        );
      }

      // Animate subtitle
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            delay: 1,
          }
        );
      }

      // Animate buttons container
      if (buttonsRef.current) {
        gsap.fromTo(
          buttonsRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: 1.5,
          }
        );
      }

      // Scroll-triggered skew animation for main text
      if (sectionRef.current && titleRef.current) {
        gsap.to(titleRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
          skewY: -5,
          y: -100,
          opacity: 0.3,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden px-4 pt-24 md:pt-28 pb-32 md:pb-24"
      id="home"
    >
      {/* Gradient Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      {/* Main Content */}
      <div className="container-custom relative z-10 text-center">
        {/* Subtitle */}
        <div ref={subtitleRef} className="mb-6 md:mb-8">
          <span className="inline-block px-4 md:px-6 py-2 border border-white/20 rounded-full text-white/60 text-xs md:text-sm tracking-widest uppercase">
            Full Stack Developer
          </span>
        </div>

        {/* Main Title */}
        <div ref={titleRef} className="overflow-hidden">
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white tracking-tight leading-none">
            <div className="block">{splitText("DAWOOD")}</div>
            <div className="block gradient-text">{splitText("HUSSAIN")}</div>
          </h1>
        </div>

        {/* Shifting Text */}
        <div className="mt-3 md:mt-4 mb-10 md:mb-16 h-10 md:h-14 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={wordIndex}
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -50, opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-cyan-400 font-display font-bold uppercase tracking-[0.15em] md:tracking-[0.2em] block"
            >
              {shiftingWords[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Description */}
        <p className="text-white/60 text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed px-2">
          Crafting exceptional digital experiences with clean code and creative
          vision. Specialized in building modern web applications.
        </p>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
        >
          <MagneticButton onClick={scrollToProjects} variant="outline">
            View My Work
            <ArrowDown className="w-5 h-5" />
          </MagneticButton>
          <MagneticButton onClick={handleDownloadResume} variant="filled">
            <Download className="w-5 h-5" />
            Download Resume
          </MagneticButton>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <div className="hidden md:block absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>

      {/* Grid Lines - Hidden on mobile */}
      <div className="hidden md:block absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
