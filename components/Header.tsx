'use client'

import { useState } from 'react'
import { Download, X, Menu } from 'lucide-react'

interface HeaderProps {
  onResumeClick: () => void
}

export function Header({ onResumeClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      <div className="header-inner">
        <div className="logo">DH</div>
        
        <nav className="nav-links" style={{ display: mobileMenuOpen ? 'flex' : undefined }}>
          <a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#work" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="https://github.com/DawoodHussain-Repo" target="_blank" rel="noopener noreferrer" className="nav-link">GitHub</a>
          <a href="/resume.txt" download="Dawood-Hussain-Resume.txt" className="nav-btn">
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
    </header>
  )
}
