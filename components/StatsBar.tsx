"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".stat-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: ".stats-section",
            start: "top 85%",
            toggleActions: "play none none none",
          },
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "transform,opacity",
        },
      );

      // Animate the numbers counting up
      const statValues = document.querySelectorAll(".stat-value");
      statValues.forEach((stat) => {
        const target = stat.textContent || "0";
        const isNumber = /^\d+/.test(target);

        if (isNumber) {
          const num = parseInt(target);
          const obj = { val: 0 };
          gsap.to(obj, {
            val: num,
            scrollTrigger: {
              trigger: ".stats-section",
              start: "top 85%",
              toggleActions: "play none none none",
            },
            duration: 1.5,
            ease: "power1.out",
            onUpdate: () => {
              const current = Math.ceil(obj.val);
              if (target.includes("+")) {
                (stat as HTMLElement).textContent = current + "+";
              } else {
                (stat as HTMLElement).textContent = current.toString();
              }
            },
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-value">5+</div>
          <div className="stat-label">Major Projects</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">16+</div>
          <div className="stat-label">Technologies</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">2026</div>
          <div className="stat-label">Graduation</div>
        </div>
      </div>
    </section>
  );
}
