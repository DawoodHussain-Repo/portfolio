import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code2, Palette, Rocket, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const skills = [
    {
      icon: Code2,
      title: "Clean Code",
      desc: "Writing maintainable, scalable code",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      desc: "Creating intuitive user experiences",
    },
    {
      icon: Rocket,
      title: "Performance",
      desc: "Optimized for speed and efficiency",
    },
    {
      icon: Zap,
      title: "Innovation",
      desc: "Embracing cutting-edge technologies",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      if (imageRef.current) {
        const overlay = imageRef.current.querySelector(".image-overlay");
        const img = imageRef.current.querySelector("img");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
          },
        });

        if (overlay) {
          tl.to(overlay, {
            scaleY: 0,
            transformOrigin: "top",
            duration: 1,
            ease: "power3.inOut",
          });
        }

        if (img) {
          tl.from(
            img,
            {
              scale: 1.3,
              duration: 1.5,
              ease: "power3.out",
            },
            "<0.3"
          );
        }
      }

      // Content animations
      if (contentRef.current) {
        const heading = contentRef.current.querySelector("h2");
        const paragraphs = contentRef.current.querySelectorAll("p");
        const skillCards = contentRef.current.querySelectorAll(".skill-card");

        gsap.from(heading, {
          scrollTrigger: {
            trigger: heading,
            start: "top 85%",
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });

        gsap.from(paragraphs, {
          scrollTrigger: {
            trigger: paragraphs[0],
            start: "top 85%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        });

        gsap.from(skillCards, {
          scrollTrigger: {
            trigger: skillCards[0],
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <div
            ref={imageRef}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl"
          >
            <div className="image-overlay absolute inset-0 bg-[#050505] z-10" />
            <img
              src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?w=800&q=80"
              alt="Developer workspace"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Floating Badge */}
            <div className="absolute bottom-8 left-8 right-8 glass-effect rounded-xl p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Experience</p>
                  <p className="text-white font-display text-2xl font-bold">
                    3+ Years
                  </p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <p className="text-white/60 text-sm">Projects</p>
                  <p className="text-white font-display text-2xl font-bold">
                    50+
                  </p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <p className="text-white/60 text-sm">Clients</p>
                  <p className="text-white font-display text-2xl font-bold">
                    30+
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <span className="text-cyan-400 font-medium tracking-widest uppercase text-sm">
                About Me
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
                Turning Ideas Into
                <span className="gradient-text block">Digital Reality</span>
              </h2>
            </div>

            <p className="text-white/70 text-lg leading-relaxed">
              I'm a passionate full-stack developer with a love for creating
              beautiful, functional web applications. With expertise in modern
              technologies and a keen eye for design, I bridge the gap between
              aesthetics and functionality.
            </p>

            <p className="text-white/60 leading-relaxed">
              My journey in tech started with curiosity and evolved into a
              career focused on delivering exceptional digital experiences. I
              believe in clean code, user-centric design, and continuous
              learning.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card glass-effect rounded-xl p-5 hover:bg-white/10 transition-all duration-300 group"
                >
                  <skill.icon className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-semibold text-white mb-1">
                    {skill.title}
                  </h3>
                  <p className="text-white/50 text-sm">{skill.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
