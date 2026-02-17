"use client";

import { useState, useEffect } from "react";
import { Download, X, Menu, Code2, Briefcase, Github } from "lucide-react";

interface HeaderProps {
  onResumeClick: () => void;
}

export function Header({ onResumeClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header>
      <div className="header-inner">
        <div className="logo">DH</div>

        <nav className={`nav-links ${mobileMenuOpen ? "nav-open" : ""}`}>
          <a
            href="#skills"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Code2 size={18} />
            <span>Skills</span>
          </a>
          <a
            href="#work"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Briefcase size={18} />
            <span>Projects</span>
          </a>
          <a
            href="https://github.com/DawoodHussain-Repo"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Github size={18} />
            <span>GitHub</span>
          </a>
          <a
            href="/Dawood-Hussain.pdf"
            download="Dawood-Hussain-Resume.pdf"
            className="nav-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Download size={16} />
            <span>Download CV</span>
          </a>
        </nav>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-menu-btn"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
