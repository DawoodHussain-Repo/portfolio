import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, Mail, Github, Linkedin, Twitter } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/DawoodHussain-Repo",
      label: "GitHub",
    },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headingRef.current) {
        gsap.from(headingRef.current.children, {
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          },
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={sectionRef}
      id="contact"
      className="relative bg-gradient-to-b from-[#050505] via-cyan-950/10 to-[#050505] border-t border-white/10"
    >
      {/* Main Contact Section */}
      <div className="section-padding">
        <div className="container-custom">
          <div ref={headingRef} className="text-center max-w-4xl mx-auto px-2">
            <span className="text-cyan-400 font-medium tracking-widest uppercase text-xs md:text-sm">
              Contact
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white mt-3 md:mt-4 mb-6 md:mb-8">
              Let's Work
              <span className="gradient-text block">Together</span>
            </h2>
            <p className="text-white/60 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-8 md:mb-12">
              Have a project in mind? Let's discuss how we can bring your ideas
              to life with innovative solutions and exceptional execution.
            </p>

            {/* CTA Button */}
            <a
              href="mailto:dawood90999@gmail.com?subject=Frontend%20Developer%20Inquiry"
              className="hoverable group inline-flex items-center gap-3 md:gap-4 cyan-button text-base md:text-lg"
            >
              <Mail className="w-4 h-4 md:w-5 md:h-5" />
              Get In Touch
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="hoverable font-display font-bold text-2xl text-white"
            >
              DAWOOD<span className="text-cyan-400">.</span>
            </a>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hoverable w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} Dawood Hussain. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
