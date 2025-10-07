"use client";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Technology data with categories and proper logos
const technologies = {
  Frontend: [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      color: "#000000",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      color: "#3178C6",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      color: "#38BDF8",
    },
    {
      name: "Three.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
      color: "#000000",
    },
    {
      name: "GSAP",
      logo: "https://greensock.com/uploads/monthly_2020_03/tweenmax.png.cf27916e0c76c557de1d3ba7ffda23b8.png",
      color: "#88CE02",
    },
    {
      name: "Framer Motion",
      logo: "https://www.framer.com/images/favicons/120x120.png",
      color: "#0055FF",
    },
    {
      name: "Vite",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      color: "#646CFF",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      color: "#339933",
    },
    {
      name: "Express",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      color: "#404040",
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      color: "#336791",
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      color: "#47A248",
    },
    {
      name: "Python",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      color: "#3776AB",
    },
    {
      name: "Supabase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
      color: "#3ECF8E",
    },
    {
      name: "Firebase",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
      color: "#FFCA28",
    },
  ],
  "Cloud & DevOps": [
    {
      name: "AWS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      color: "#FF9900",
    },
    {
      name: "Docker",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      color: "#2496ED",
    },
    {
      name: "Git",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      color: "#F05032",
    },
    {
      name: "GitHub",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      color: "#181717",
    },
    {
      name: "Sentry",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sentry/sentry-original.svg",
      color: "#362D59",
    },
  ],
  "AI & Data": [
    {
      name: "PyTorch",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      color: "#EE4C2C",
    },
    {
      name: "Jupyter",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      color: "#F37626",
    },
    {
      name: "Selenium",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
      color: "#43B02A",
    },
  ],
  "Design & Tools": [
    {
      name: "Figma",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      color: "#F24E1E",
    },
    {
      name: "Blender",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg",
      color: "#F5792A",
    },
    {
      name: "WordPress",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg",
      color: "#21759B",
    },
    {
      name: "Unity",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",
      color: "#000000",
    },
    {
      name: "Unreal Engine",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg",
      color: "#0E1128",
    },
    {
      name: "Sanity",
      logo: "https://cdn.sanity.io/images/3do82whm/next/51af00784c5addcf63ae7f0c416756acca7e63ac-353x353.png",
      color: "#F03E2F",
    },
  ],
};

const TechnologiesSection = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const techGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Only animate if refs are available
      if (headerRef.current && tabsRef.current && techGridRef.current) {
        // Set initial states
        gsap.set([headerRef.current, tabsRef.current], {
          opacity: 0,
          y: 50,
        });

        gsap.set(techGridRef.current, {
          opacity: 0,
          y: 30,
        });

        // Header animation with scroll trigger
        gsap.to(headerRef.current, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        });

        // Tabs animation
        gsap.to(tabsRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: tabsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Tech grid animation
        gsap.to(techGridRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: techGridRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animation for category switching
  useEffect(() => {
    const techCards = techGridRef.current?.querySelectorAll(".tech-card");
    if (techCards && techCards.length > 0) {
      gsap.fromTo(
        techCards,
        {
          opacity: 0,
          scale: 0.8,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
          stagger: 0.05,
        }
      );
    }
  }, [activeCategory]);

  return (
    <section
      ref={containerRef}
      id="technologies"
      className="min-h-screen pt-16 sm:pt-20 md:pt-24 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-purple-200/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-56 sm:w-72 md:w-96 h-56 sm:h-72 md:h-96 bg-blue-200/25 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 md:w-80 h-48 sm:h-64 md:h-80 bg-purple-100/40 rounded-full blur-3xl animate-pulse delay-500" />
        <div className="absolute top-1/4 right-1/3 w-32 sm:w-48 md:w-64 h-32 sm:h-48 md:h-64 bg-indigo-100/20 rounded-full blur-2xl animate-pulse delay-2000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-16 sm:py-20">
        {/* Header */}
        <div ref={headerRef} className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-4 sm:mb-6 tracking-tight">
            Tech Stack
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with cutting-edge
            <span className="text-purple-600 font-semibold"> technologies</span>
          </p>
        </div>

        {/* Category Tabs */}
        <div ref={tabsRef} className="flex justify-center mb-12">
          <div className="w-full max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
              {Object.keys(technologies).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-2 sm:px-4 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base text-center overflow-hidden group ${
                    activeCategory === category
                      ? "bg-gradient-to-r from-purple-600 to-purple-700 text-white shadow-lg transform scale-105"
                      : "bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-white hover:shadow-md hover:scale-102"
                  }`}
                >
                  <span className="relative z-10">{category}</span>
                  {activeCategory !== category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-700 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Display */}
        <div ref={techGridRef} className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6">
            {technologies[activeCategory as keyof typeof technologies].map(
              (tech, index) => (
                <div
                  key={tech.name}
                  className="tech-card group relative"
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="relative bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-4 sm:p-6 hover:border-purple-300 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-100/50 hover:-translate-y-3 group overflow-hidden">
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 via-blue-100/50 to-purple-100/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />

                    <div className="relative z-10 flex flex-col items-center space-y-3 sm:space-y-4">
                      <div className="w-12 sm:w-16 h-12 sm:h-16 relative">
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => {
                            e.currentTarget.src = `https://via.placeholder.com/64/6366f1/ffffff?text=${tech.name.charAt(
                              0
                            )}`;
                          }}
                        />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-300 text-center">
                        {tech.name}
                      </span>
                    </div>

                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px]">
                      <div className="bg-white/70 rounded-2xl h-full w-full" />
                    </div>
                  </div>

                  {/* Tooltip */}
                  {hoveredTech === tech.name && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap border border-slate-700 z-20">
                      {tech.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900" />
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>

        {/* Skills Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {[
            { label: "Years of Experience", value: "3+", icon: "⏰" },
            { label: "Projects Completed", value: "50+", icon: "🚀" },
            { label: "Technologies Mastered", value: "25+", icon: "⚡" },
          ].map((metric, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-3xl mb-2">{metric.icon}</div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                {metric.value}
              </div>
              <div className="text-slate-600">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Philosophy */}
        <div className="text-center">
          <div className="bg-white/60 backdrop-blur-sm border border-slate-200 p-6 sm:p-8 rounded-3xl max-w-4xl mx-auto shadow-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4">
              My Development Philosophy
            </h3>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              I believe in choosing the right tool for the job. Each technology
              in my arsenal serves a specific purpose in creating
              <span className="text-purple-600 font-semibold">
                {" "}
                scalable, performant, and beautiful
              </span>{" "}
              digital solutions. Continuous learning and adaptation keep me at
              the cutting edge of modern development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
