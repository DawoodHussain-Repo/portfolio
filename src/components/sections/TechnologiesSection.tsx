import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiVuedotjs,
  SiGreensock,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiFastapi,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiDocker,
  SiGit,
  SiFigma,
  SiLinux,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { Globe } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const TechnologiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const techGridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "All" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Database" },
    { id: "tools", label: "Tools" },
  ];

  const technologies = [
    { name: "React", category: "frontend", icon: SiReact, color: "#61DAFB" },
    {
      name: "TypeScript",
      category: "frontend",
      icon: SiTypescript,
      color: "#3178C6",
    },
    {
      name: "Next.js",
      category: "frontend",
      icon: SiNextdotjs,
      color: "#ffffff",
    },
    {
      name: "TailwindCSS",
      category: "frontend",
      icon: SiTailwindcss,
      color: "#06B6D4",
    },
    {
      name: "Vue.js",
      category: "frontend",
      icon: SiVuedotjs,
      color: "#4FC08D",
    },
    { name: "GSAP", category: "frontend", icon: SiGreensock, color: "#88CE02" },
    {
      name: "Node.js",
      category: "backend",
      icon: SiNodedotjs,
      color: "#339933",
    },
    { name: "Python", category: "backend", icon: SiPython, color: "#3776AB" },
    { name: "Express", category: "backend", icon: SiExpress, color: "#ffffff" },
    { name: "FastAPI", category: "backend", icon: SiFastapi, color: "#009688" },
    { name: "GraphQL", category: "backend", icon: SiGraphql, color: "#E10098" },
    { name: "REST APIs", category: "backend", icon: Globe, color: "#8B5CF6" },
    {
      name: "MongoDB",
      category: "database",
      icon: SiMongodb,
      color: "#47A248",
    },
    {
      name: "PostgreSQL",
      category: "database",
      icon: SiPostgresql,
      color: "#4169E1",
    },
    { name: "Redis", category: "database", icon: SiRedis, color: "#DC382D" },
    {
      name: "Firebase",
      category: "database",
      icon: SiFirebase,
      color: "#FFCA28",
    },
    { name: "Docker", category: "tools", icon: SiDocker, color: "#2496ED" },
    { name: "Git", category: "tools", icon: SiGit, color: "#F05032" },
    { name: "AWS", category: "tools", icon: FaAws, color: "#FF9900" },
    { name: "Figma", category: "tools", icon: SiFigma, color: "#F24E1E" },
    { name: "VS Code", category: "tools", icon: VscVscode, color: "#007ACC" },
    { name: "Linux", category: "tools", icon: SiLinux, color: "#FCC624" },
  ];

  const filteredTech =
    activeCategory === "all"
      ? technologies
      : technologies.filter((tech) => tech.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      if (headingRef.current) {
        gsap.from(headingRef.current.children, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
          y: 60,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate tech items when category changes
    if (techGridRef.current) {
      const items = techGridRef.current.querySelectorAll(".tech-item");
      gsap.fromTo(
        items,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          ease: "power3.out",
        }
      );
    }
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-gradient-to-b from-[#050505] via-[#0a0a0a] to-[#050505]"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="text-cyan-400 font-medium tracking-widest uppercase text-sm">
            Skills
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4">
            Technologies I Use
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies that I use to build
            exceptional digital experiences
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`hoverable px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-cyan-500 text-white"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div
          ref={techGridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          {filteredTech.map((tech) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                className="tech-item hoverable group glass-effect rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <IconComponent
                  className="w-10 h-10 mx-auto mb-3 group-hover:scale-110 transition-transform"
                  style={{ color: tech.color }}
                />
                <p className="text-white font-medium text-sm">{tech.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
