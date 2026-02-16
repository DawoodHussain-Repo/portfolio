"use client";

import { useEffect, useRef } from "react";
import { Github, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    number: "01",
    title: "Fintech Forecasting Application",
    subtitle: "AI-Powered Financial Predictions",
    description:
      "Engineered financial forecasting platform with LSTM, GRU, and ARIMA models for stock, crypto, and forex predictions. Containerized with Docker for scalable deployment with 80% latency reduction.",
    tech: ["Python", "Flask", "TensorFlow", "MongoDB", "Docker"],
    github: "https://github.com/DawoodHussain-Repo",
  },
  {
    number: "02",
    title: "Converso SaaS App",
    subtitle: "AI Educational Platform",
    description:
      "Built full-stack SaaS platform for AI-powered educational companions with authentication and premium features. Architected scalable backend with Supabase and integrated Sentry for production monitoring.",
    tech: [
      "Next.js",
      "React 19",
      "Tailwind CSS",
      "Supabase",
      "Vapi AI",
      "Clerk",
    ],
    github: "https://github.com/DawoodHussain-Repo",
  },
  {
    number: "03",
    title: "CipherChat",
    subtitle: "Encrypted Messaging Platform",
    description:
      "Designed secure messaging app with AES-256-GCM encryption, ECDH key exchange, and zero-knowledge architecture. Built RESTful API with Express.js and MongoDB with Socket.io for real-time delivery.",
    tech: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Web Crypto API",
    ],
    github: "https://github.com/DawoodHussain-Repo",
  },
  {
    number: "04",
    title: "Airplane Management System",
    subtitle: "Airline Operations Platform",
    description:
      "Developed full-stack airline operations system with role-based access control and CRUD operations. Built RESTful API with Node.js/Express and integrated JWT authentication with Stripe payment processing.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    github: "https://github.com/DawoodHussain-Repo",
  },
  {
    number: "05",
    title: "AI Mindful Rating Agent",
    subtitle: "Educational AI Platform",
    description:
      "Built AI educational platform with Flask backend using LangGraph/LangChain for agent orchestration. Implemented ChromaDB vector database for semantic search with real-time voice AI integration.",
    tech: [
      "Flask",
      "LangGraph",
      "LangChain",
      "ChromaDB",
      "Sentence Transformers",
    ],
    github: "https://github.com/DawoodHussain-Repo",
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const totalProjects = 8; // Total number of projects on GitHub
  const remainingProjects = totalProjects - projects.length;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          clearProps: "transform,opacity",
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="projects-section" id="work" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A selection of projects demonstrating full-stack development, AI/ML
            integration, and modern web technologies
          </p>
        </div>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.number} className="project-card">
            <div className="project-number">{project.number}</div>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-subtitle">{project.subtitle}</p>

            <p className="project-description">{project.description}</p>

            <div className="project-tech">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="project-actions">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-primary"
              >
                <Github size={16} />
                <span>View Code</span>
              </a>
            </div>
          </div>
        ))}

        <div className="project-card project-card-more">
          <div className="more-content">
            <Github size={48} className="more-icon" />
            <h3 className="more-title">View More Projects</h3>
            <p className="more-count">
              +{remainingProjects} more projects on GitHub
            </p>
            <a
              href="https://github.com/DawoodHussain-Repo?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn-primary"
            >
              <span>View on GitHub</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
