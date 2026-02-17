"use client";

import { useEffect, useRef } from "react";
import { Github, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const highlights = [
  {
    number: "01",
    title: "5+ Major Projects",
    subtitle: "Full-Stack Development",
    description:
      "Engineered diverse applications from fintech forecasting to encrypted messaging platforms.",
    theme: "dark",
    graphic: "lines",
  },
  {
    number: "02",
    title: "AI/ML Integration",
    subtitle: "Machine Learning & NLP",
    description:
      "Built AI-powered platforms using TensorFlow, LangChain, and advanced neural networks.",
    theme: "light",
    graphic: "dots",
  },
  {
    number: "03",
    title: "16+ Technologies",
    subtitle: "Modern Tech Stack",
    description:
      "Proficient in React, Next.js, Node.js, Python, Docker, and cloud deployment.",
    theme: "dark",
    graphic: "radial",
  },
  {
    number: "04",
    title: "Production-Ready Applications",
    subtitle: "Scalable & Secure Systems",
    description:
      "Developed enterprise-grade applications with authentication, real-time features, payment processing, and containerized deployment. Implemented best practices for security, performance optimization, and monitoring.",
    theme: "light-wide",
    graphic: "geometric",
  },
];

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".highlight-card", {
        scrollTrigger: {
          trigger: ".highlights-container",
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const renderGraphic = (type: string) => {
    switch (type) {
      case "lines":
        return (
          <svg className="highlight-graphic" viewBox="0 0 200 200" fill="none">
            {Array.from({ length: 20 }).map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={10 + i * 10}
                x2="200"
                y2={10 + i * 10}
                stroke="currentColor"
                strokeWidth="1"
                opacity="0.3"
              />
            ))}
            <line
              x1="20"
              y1="0"
              x2="180"
              y2="200"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        );
      case "dots":
        return (
          <svg className="highlight-graphic" viewBox="0 0 200 200" fill="none">
            {Array.from({ length: 15 }).map((_, i) =>
              Array.from({ length: 15 }).map((_, j) => (
                <circle
                  key={`${i}-${j}`}
                  cx={10 + j * 13}
                  cy={10 + i * 13}
                  r="1.5"
                  fill="currentColor"
                  opacity="0.2"
                />
              ))
            )}
            <circle
              cx="150"
              cy="150"
              r="40"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
        );
      case "radial":
        return (
          <svg className="highlight-graphic" viewBox="0 0 200 200" fill="none">
            {Array.from({ length: 60 }).map((_, i) => {
              const angle = (i * 6 * Math.PI) / 180;
              const x1 = 100;
              const y1 = 100;
              const x2 = Math.round(100 + Math.cos(angle) * (40 + (i % 3) * 10) * 100) / 100;
              const y2 = Math.round(100 + Math.sin(angle) * (40 + (i % 3) * 10) * 100) / 100;
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.3"
                />
              );
            })}
          </svg>
        );
      case "geometric":
        return (
          <svg
            className="highlight-graphic-wide"
            viewBox="0 0 300 200"
            fill="none"
          >
            <path
              d="M250 150 L280 100 L250 50 L220 100 Z"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            />
            <path
              d="M260 120 L280 100 L260 80"
              stroke="currentColor"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <line
              x1="220"
              y1="100"
              x2="280"
              y2="100"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.3"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="highlights-section" id="work" ref={sectionRef}>
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Highlights</h2>
          <p className="section-subtitle">
            Key achievements and technical capabilities
          </p>
        </div>

        <div className="highlights-container">
          <div className="highlights-grid-top">
            {highlights.slice(0, 3).map((highlight) => (
              <div
                key={highlight.number}
                className={`highlight-card highlight-card-${highlight.theme}`}
              >
                <div className="highlight-content">
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-subtitle">{highlight.subtitle}</p>
                  <p className="highlight-description">{highlight.description}</p>
                  <div className="highlight-number">{highlight.number}</div>
                </div>
                <div className="highlight-graphic-container">
                  {renderGraphic(highlight.graphic)}
                </div>
              </div>
            ))}
          </div>

          <div className="highlights-grid-bottom">
            {highlights.slice(3).map((highlight) => (
              <div
                key={highlight.number}
                className={`highlight-card highlight-card-${highlight.theme}`}
              >
                <div className="highlight-content">
                  <h3 className="highlight-title">{highlight.title}</h3>
                  <p className="highlight-subtitle">{highlight.subtitle}</p>
                  <p className="highlight-description">{highlight.description}</p>
                  <div className="highlight-number">{highlight.number}</div>
                </div>
                <div className="highlight-graphic-container">
                  {renderGraphic(highlight.graphic)}
                </div>
              </div>
            ))}
          </div>

          <div className="highlights-cta">
            <a
              href="https://github.com/DawoodHussain-Repo?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-highlight"
            >
              <Github size={20} />
              <span>View All Projects on GitHub</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
