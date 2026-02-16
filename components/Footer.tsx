"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-content > *", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="py-20 md:py-28 border-t border-[var(--border)]"
    >
      <div className="footer-content">
        {/* CTA Section */}
        <div className="mb-16 md:mb-24">
          <p className="text-xs font-mono tracking-[0.2em] uppercase text-[var(--fg-muted)] mb-4">
            Get in touch
          </p>
          <a
            href="mailto:dawood90999@gmail.com"
            className="group inline-flex items-baseline gap-3 font-heading text-3xl md:text-5xl font-bold tracking-[-0.03em] text-[var(--fg)] hover:text-[var(--fg-secondary)] transition-colors"
          >
            dawood90999
            <br className="md:hidden" />
            @gmail.com
            <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
        </div>

        {/* Links + Info */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
          {/* Left */}
          <div>
            <p className="text-xs font-mono tracking-[0.15em] uppercase text-[var(--fg-muted)] mb-4">
              Social
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href="https://github.com/DawoodHussain-Repo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/dawood-hussain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/DHussain16725"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--fg-secondary)] hover:text-[var(--fg)] transition-colors"
              >
                X / Twitter
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="text-left md:text-right">
            <p className="font-heading text-base font-bold text-[var(--fg)] mb-2">
              Dawood Hussain
            </p>
            <p className="text-xs text-[var(--fg-muted)] font-mono tracking-wider">
              &copy; {new Date().getFullYear()} &mdash; All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
