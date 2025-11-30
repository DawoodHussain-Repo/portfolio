import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MarqueeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Next.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "AWS",
    "GraphQL",
    "TailwindCSS",
    "GSAP",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Continuous marquee animation for first row
      if (marquee1Ref.current) {
        gsap.to(marquee1Ref.current, {
          xPercent: -50,
          duration: 30,
          ease: "none",
          repeat: -1,
        });
      }

      // Continuous marquee animation for second row (reverse)
      if (marquee2Ref.current) {
        gsap.to(marquee2Ref.current, {
          xPercent: 50,
          duration: 35,
          ease: "none",
          repeat: -1,
        });
      }

      // Speed up on scroll
      if (containerRef.current) {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            const velocity = self.getVelocity() / 500;
            if (marquee1Ref.current) {
              gsap.to(marquee1Ref.current, {
                timeScale: 1 + Math.abs(velocity),
                duration: 0.5,
              });
            }
            if (marquee2Ref.current) {
              gsap.to(marquee2Ref.current, {
                timeScale: 1 + Math.abs(velocity),
                duration: 0.5,
              });
            }
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-20 overflow-hidden border-y border-white/10 bg-gradient-to-b from-black via-cyan-950/10 to-black"
    >
      {/* First Row */}
      <div className="relative flex overflow-hidden">
        <div ref={marquee1Ref} className="marquee-wrapper">
          {[...skills, ...skills].map((skill, index) => (
            <span key={index} className="flex items-center gap-8">
              <span className="hover:text-white transition-colors duration-300">
                {skill}
              </span>
              <span className="text-cyan-400">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Second Row */}
      <div className="relative flex overflow-hidden mt-8">
        <div
          ref={marquee2Ref}
          className="marquee-wrapper"
          style={{ transform: "translateX(-50%)" }}
        >
          {[...skills.reverse(), ...skills].map((skill, index) => (
            <span key={index} className="flex items-center gap-8">
              <span className="hover:text-white transition-colors duration-300">
                {skill}
              </span>
              <span className="text-cyan-400">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
