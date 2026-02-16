"use client";

import { useState } from "react";

const featuredProjects = [
  {
    id: 1,
    title: "Fintech Forecasting Application",
    date: "2024",
    description:
      "Engineered financial forecasting platform with LSTM, GRU, and ARIMA models for stock, crypto, and forex predictions",
    highlights: [
      "Containerized with Docker for scalable deployment",
      "Implemented MongoDB caching reducing latency by 80%",
      "Advanced ML models for accurate predictions",
    ],
    stack: ["Python", "Flask", "TensorFlow", "MongoDB", "Docker"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80",
    github: "https://github.com/DawoodHussain-Repo",
  },
  {
    id: 2,
    title: "Converso SaaS App",
    subtitle: "AI Educational Platform",
    date: "June 2025",
    description:
      "Built full-stack SaaS platform for AI-powered educational companions with authentication and premium features",
    highlights: [
      "Architected scalable backend with Supabase",
      "Integrated Sentry for production monitoring and error tracking",
      "Real-time AI voice integration",
    ],
    stack: [
      "Next.js",
      "React 19",
      "Tailwind CSS",
      "Supabase",
      "Vapi AI",
      "Clerk",
      "Sentry",
    ],
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
    github: "https://github.com/DawoodHussain-Repo",
  },
  {
    id: 3,
    title: "CipherChat",
    subtitle: "Encrypted Messaging Platform",
    date: "2024",
    description:
      "Designed secure messaging app with AES-256-GCM encryption, ECDH key exchange, and zero-knowledge architecture",
    highlights: [
      "Built RESTful API with Express.js and MongoDB",
      "Implemented Socket.io for real-time encrypted delivery",
      "End-to-end encryption with zero-knowledge architecture",
    ],
    stack: [
      "React.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.io",
      "Web Crypto API",
      "Tailwind CSS",
    ],
    image:
      "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&q=80",
    github: "https://github.com/DawoodHussain-Repo",
  },
  {
    id: 4,
    title: "Airplane Management System",
    date: "Dec 2024",
    description:
      "Developed full-stack airline operations system with role-based access control and CRUD operations",
    highlights: [
      "Built RESTful API with Node.js/Express",
      "Integrated JWT authentication",
      "Stripe payment processing integration",
    ],
    stack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Stripe",
    ],
    image:
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80",
    github: "https://github.com/DawoodHussain-Repo",
  },
  {
    id: 5,
    title: "AI Mindful Rating Agent",
    date: "March 2025",
    description:
      "Built AI educational platform with Flask backend using LangGraph/LangChain for agent orchestration",
    highlights: [
      "Implemented ChromaDB vector database for semantic search",
      "Real-time voice AI integration",
      "Advanced agent orchestration with LangGraph",
    ],
    stack: [
      "Flask",
      "LangGraph",
      "LangChain",
      "ChromaDB",
      "Sentence Transformers",
    ],
    image:
      "https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=600&q=80",
    github: "https://github.com/DawoodHussain-Repo",
  },
];

export function FeaturedProjects() {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section className="featured-projects" id="work">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A showcase of my technical projects demonstrating full-stack
          development, AI/ML integration, and modern web technologies
        </p>
      </div>

      <div className="projects-grid">
        {featuredProjects.map((project, index) => (
          <div
            key={project.id}
            className={`featured-project-card ${activeProject === index ? "active" : ""}`}
            onMouseEnter={() => setActiveProject(index)}
            onMouseLeave={() => setActiveProject(null)}
          >
            <div className="project-number">0{index + 1}</div>

            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay"></div>
            </div>

            <div className="project-content">
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  {project.subtitle && (
                    <p className="project-subtitle">{project.subtitle}</p>
                  )}
                </div>
                <span className="project-date">{project.date}</span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                {project.highlights.map((highlight, idx) => (
                  <div key={idx} className="highlight-item">
                    <span className="highlight-bullet">→</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="project-stack">
                <p className="stack-label">Tech Stack:</p>
                <div className="stack-tags">
                  {project.stack.map((tech, idx) => (
                    <span key={idx} className="stack-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link project-link-primary"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="projects-cta">
        <a
          href="https://github.com/DawoodHussain-Repo?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button"
        >
          <span>View All Projects on GitHub</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
