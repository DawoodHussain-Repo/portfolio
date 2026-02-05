'use client'

import { useState } from 'react'

interface HeaderProps {
  onResumeClick: () => void
}

export function Header({ onResumeClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
        <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img src="/logo.svg" alt="DH Logo" style={{ width: '40px', height: '40px' }} />
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: '600', fontSize: '18px' }}>Dawood Hussain</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nav-links" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#work" style={{ fontFamily: 'var(--font-inter)', fontWeight: '500', fontSize: '14px', textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}>PROJECTS</a>
          <a href="#lab" style={{ fontFamily: 'var(--font-inter)', fontWeight: '500', fontSize: '14px', textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}>CONSOLE</a>
          <a href="https://github.com/DawoodHussain-Repo" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-inter)', fontWeight: '500', fontSize: '14px', textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}>GITHUB</a>
          <button 
            onClick={onResumeClick}
            className="nav-resume-btn"
            style={{ 
              background: 'transparent', 
              border: 'none', 
              color: 'inherit', 
              cursor: 'pointer', 
              fontFamily: 'var(--font-inter)', 
              fontWeight: '500', 
              fontSize: '14px',
              transition: 'color 0.2s'
            }}
          >
            RESUME
          </button>
          <a 
            href="/resume.txt" 
            download="Dawood-Hussain-Portfolio.txt"
            style={{ 
              textDecoration: 'none', 
              color: 'inherit',
              fontFamily: 'var(--font-inter)', 
              fontWeight: '500', 
              fontSize: '14px',
              padding: '8px 16px',
              border: '1px solid #6366f1',
              borderRadius: '6px',
              transition: 'all 0.2s',
              backgroundColor: 'transparent'
            }}
          >
            DOWNLOAD
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            color: 'inherit',
            cursor: 'pointer',
            fontSize: '24px',
            padding: '8px'
          }}
          className="mobile-menu-btn"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            style={{
              position: 'absolute',
              top: '100%',
              right: '0',
              background: 'var(--bg-primary)',
              border: '1px solid #374151',
              borderRadius: '8px',
              padding: '16px',
              minWidth: '200px',
              zIndex: 1000,
              boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
            }}
            className="mobile-menu"
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="#work" onClick={() => setMobileMenuOpen(false)} style={{ fontFamily: 'var(--font-inter)', fontWeight: '500', fontSize: '14px', textDecoration: 'none', color: 'inherit' }}>PROJECTS</a>
              <a href="#lab" onClick={() => setMobileMenuOpen(false)} style={{ fontFamily: 'var(--font-inter)', fontWeight: '500', fontSize: '14px', textDecoration: 'none', color: 'inherit' }}>CONSOLE</a>
              <a href="https://github.com/DawoodHussain-Repo" target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-inter)', fontWeight: '500', fontSize: '14px', textDecoration: 'none', color: 'inherit' }}>GITHUB</a>
              <button 
                onClick={() => { onResumeClick(); setMobileMenuOpen(false); }}
                style={{ 
                  background: 'transparent', 
                  border: 'none', 
                  color: 'inherit', 
                  cursor: 'pointer', 
                  fontFamily: 'var(--font-inter)', 
                  fontWeight: '500', 
                  fontSize: '14px',
                  textAlign: 'left',
                  padding: '0'
                }}
              >
                RESUME
              </button>
              <a 
                href="/resume.txt" 
                download="Dawood-Hussain-Portfolio.txt"
                onClick={() => setMobileMenuOpen(false)}
                style={{ 
                  textDecoration: 'none', 
                  color: 'inherit',
                  fontFamily: 'var(--font-inter)', 
                  fontWeight: '500', 
                  fontSize: '14px',
                  padding: '8px 16px',
                  border: '1px solid #6366f1',
                  borderRadius: '6px',
                  textAlign: 'center',
                  backgroundColor: 'transparent'
                }}
              >
                DOWNLOAD
              </a>
            </div>
          </div>
        )}
        
        <div className="system-status" style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '12px', color: '#6b7280' }}>SYS_UP: 24:12:05:08 | CPU: 12%</div>
      </div>
    </header>
  )
}
