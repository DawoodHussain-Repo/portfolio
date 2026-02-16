"use client";

import { useEffect, useRef } from "react";
import { Mail, MapPin, Phone, ArrowRight, Github } from "lucide-react";
import gsap from "gsap";

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.2,
          clearProps: "transform,opacity",
        },
      );

      gsap.fromTo(
        ".hero-title",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.4,
          clearProps: "transform,opacity",
        },
      );

      gsap.fromTo(
        ".hero-description",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.6,
          clearProps: "transform,opacity",
        },
      );

      gsap.fromTo(
        ".meta-item",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.1,
          delay: 0.8,
          clearProps: "transform,opacity",
        },
      );

      gsap.fromTo(
        ".hero-actions .btn-primary, .hero-actions .btn-secondary",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15,
          delay: 1,
          clearProps: "transform,opacity",
        },
      );

      if (profileRef.current) {
        gsap.fromTo(
          profileRef.current,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            delay: 0.5,
            ease: "back.out(1.7)",
            clearProps: "transform,opacity",
          },
        );
      }

      gsap.fromTo(
        ".hero-badge",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 1.2,
          clearProps: "transform,opacity",
        },
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-left">
          <div className="hero-eyebrow">Full-Stack Developer</div>

          <h1 className="hero-title">
            Dawood
            <br />
            Hussain
          </h1>

          <p className="hero-description">
            Software Engineering student at FAST NUCES, Islamabad. Specializing
            in building scalable applications with modern technologies, AI/ML
            integration, and full-stack development.
          </p>

          <div className="hero-meta">
            <div className="meta-item">
              <MapPin />
              <span>Islamabad, Pakistan</span>
            </div>
            <div className="meta-item">
              <Mail />
              <a href="mailto:dawood90999@gmail.com">dawood90999@gmail.com</a>
            </div>
            <div className="meta-item">
              <Phone />
              <a href="tel:+923054449099">+92 305 444 9099</a>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#work" className="btn-primary">
              <span>View Projects</span>
              <ArrowRight size={18} />
            </a>
            <a
              href="https://github.com/DawoodHussain-Repo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        <div className="hero-center">
          <div className="hero-profile" ref={profileRef}>
            <img
              src="/profile.jpg"
              alt="Dawood Hussain"
              className="profile-image"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          <div className="hero-badge">
            <div className="badge-label">Education</div>
            <div className="badge-value">FAST NUCES</div>
            <div className="badge-label">CGPA 3.19 • 2026</div>
          </div>
        </div>
      </div>
    </section>
  );
}
