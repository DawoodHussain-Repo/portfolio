"use client"

import { useEffect, useState } from "react"
import { InteractiveConsole } from "@/components/InteractiveConsole"
import { ResumeWindow } from "@/components/ResumeWindow"
import { LoadingScreen } from "@/components/LoadingScreen"
import { TechStackSection } from "@/components/TechStackSection"
import { StatsBar } from "@/components/StatsBar"
import { Download } from "lucide-react"

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  topics: string[]
  homepage: string | null
  stargazers_count: number
  language: string
  fork: boolean
}

// Beautiful project images mapping
const projectImages: Record<string, string> = {
  'fintech-forecasting': 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80',
  'converso-saas': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
  'cipherchat': 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&q=80',
  'airplane-management': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
  'ai-mindful-rating': 'https://images.unsplash.com/photo-1677756119517-756a188d2d94?w=600&q=80',
  'wisdom-saas': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
  'pitchify': 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
  'portfolio': 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
  'default': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80'
}

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showResume, setShowResume] = useState(false)
  const [githubProjects, setGithubProjects] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [appLoading, setAppLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Fetch GitHub repositories
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/DawoodHussain-Repo/repos?sort=updated&per_page=100')
        const data = await response.json()
        // Filter out forks and sort by stars
        const filteredRepos = data
          .filter((repo: GitHubRepo) => !repo.fork)
          .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count)
        setGithubProjects(filteredRepos)
        setLoading(false)
      } catch (error) {
        console.error('Error fetching GitHub projects:', error)
        setLoading(false)
      }
    }

    fetchGitHubProjects()

    // Update the system clock
    function updateClock() {
      const now = new Date()
      const timeStr =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0") +
        ":" +
        now.getSeconds().toString().padStart(2, "0")
      const statusElement = document.querySelector(".system-status")
      if (statusElement) {
        statusElement.textContent = `SYS_UP: ${timeStr} | CPU: ${Math.floor(Math.random() * 20) + 5}%`
      }
    }
    updateClock()
    const interval = setInterval(updateClock, 1000)

    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const getProjectImage = (projectName: string) => {
    const normalizedName = projectName.toLowerCase().replace(/[-_]/g, '-')
    return projectImages[normalizedName] || projectImages.default
  }

  return (
    <>
      {appLoading && <LoadingScreen onComplete={() => setAppLoading(false)} />}
      <ResumeWindow isOpen={showResume} onClose={() => setShowResume(false)} />

      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          <span className="scroll-arrow">↑</span>
        </button>
      )}

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
              onClick={() => setShowResume(true)}
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
              href="/Dawood-Hussain.pdf" 
              download
              className="btn-download-nav"
            >
              <Download size={16} />
              PORTFOLIO
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
                <a 
                  href="/Dawood-Hussain.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ 
                    fontFamily: 'var(--font-inter)', 
                    fontWeight: '500', 
                    fontSize: '14px',
                    textDecoration: 'none',
                    color: 'inherit'
                  }}
                >
                  RESUME
                </a>
                <a 
                  href="/Dawood-Hussain.pdf" 
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-download-nav"
                  style={{ width: 'fit-content' }}
                >
                  <Download size={16} />
                  PORTFOLIO
                </a>
              </div>
            </div>
          )}
          
          <div className="system-status" style={{ fontFamily: 'var(--font-jetbrains-mono)', fontSize: '12px', color: '#6b7280' }}>
            <span className="system-uptime">SYS_UP: 24:12:05:08</span>
            <span className="system-separator"> | </span>
            <span className="system-cpu">CPU: 12%</span>
          </div>
        </div>
      </header>

      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <p style={{ color: "var(--accent)", marginBottom: "10px" }}>{"[ DAWOOD_HUSSAIN.SYS ]"}</p>
            <h1>
              Full-Stack <span>Developer</span> &amp; Creative Builder
            </h1>
            <p>
              Crafting innovative digital solutions with modern technologies. Specialized in building scalable applications, responsive interfaces, and seamless user experiences.
            </p>
            <a href="#work" className="btn-retro">
              EXPLORE FILES
            </a>
          </div>
          <div className="window-frame">
            <div className="window-header">
              <span>PORTRAIT_01.JPG</span>
              <div className="window-controls">
                <button className="window-btn" aria-label="Minimize">
                  <span className="minimize-icon"></span>
                </button>
                <button className="window-btn" aria-label="Maximize">
                  <span className="maximize-icon"></span>
                </button>
                <button className="window-btn window-close" aria-label="Close">
                  <span className="close-icon"></span>
                </button>
              </div>
            </div>
            <div 
              style={{ 
                width: '100%', 
                height: '400px', 
                background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid var(--accent)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ 
                fontSize: '120px', 
                color: 'var(--accent)', 
                fontWeight: 'bold',
                fontFamily: 'monospace',
                marginBottom: '20px'
              }}>
                404
              </div>
              <div style={{ 
                fontSize: '18px', 
                color: 'var(--text-primary)', 
                textAlign: 'center',
                fontFamily: 'monospace',
                maxWidth: '80%'
              }}>
                <div style={{ marginBottom: '10px' }}>DEVELOPER_NOT_FOUND</div>
                <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  Currently coding innovative solutions...
                </div>
                <div style={{ fontSize: '12px', color: 'var(--accent)', marginTop: '15px' }}>
                  {'>'} Building the future, one commit at a time
                </div>
              </div>
              <div style={{
                position: 'absolute',
                bottom: '20px',
                right: '20px',
                fontSize: '10px',
                color: 'var(--text-secondary)',
                fontFamily: 'monospace'
              }}>
                STATUS: ACTIVE | LOCATION: ISLAMABAD
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <StatsBar />

        {/* Tech Stack */}
        <TechStackSection />
        
        {/* Marquee */}

        {/* Portfolio */}
        <section id="work">
          <h2 className="section-title">Latest Deployments</h2>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '40px', color: 'var(--accent)' }}>
              Loading projects from GitHub...
            </div>
          ) : (
            <>
              <div className="portfolio-grid">
                {githubProjects.slice(0, 6).map((project, index) => {
                  // Only show live demo for specific projects
                  const hasLiveDemo = ['wisdom-saas', 'pitchify'].includes(project.name.toLowerCase())
                  const liveDemoUrl = hasLiveDemo ? project.homepage : null
                  
                  return (
                    <div className="project-card" key={project.id}>
                      <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                        <span>PROJECT_{String(index + 1).padStart(2, '0')}</span>
                        <div className="window-controls">
                          <button className="window-btn" aria-label="Minimize">
                            <span className="minimize-icon"></span>
                          </button>
                          <button className="window-btn" aria-label="Maximize">
                            <span className="maximize-icon"></span>
                          </button>
                          <button className="window-btn window-close" aria-label="Close">
                            <span className="close-icon"></span>
                          </button>
                        </div>
                      </div>
                      <img
                        src={getProjectImage(project.name)}
                        alt={project.name}
                        className="project-img"
                        style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                      />
                      <div className="project-info">
                        <span className="project-tag">
                          {project.topics.length > 0 
                            ? project.topics.slice(0, 3).map(t => `#${t.toUpperCase()}`).join(' ')
                            : project.language ? `#${project.language.toUpperCase()}` : '#PROJECT'}
                        </span>
                        <h3 className="project-title">{project.name.replace(/-/g, ' ').toUpperCase()}</h3>
                        <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                          {project.description || 'A project built with modern technologies and best practices.'}
                        </p>
                        <div style={{ display: 'flex', gap: '10px', marginTop: '10px', alignItems: 'center' }}>
                          <a 
                            href={project.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            style={{ fontSize: "0.75rem", color: "var(--accent)", textDecoration: "none", display: "inline-block" }}
                          >
                            VIEW ON GITHUB →
                          </a>
                          {liveDemoUrl && (
                            <a 
                              href={liveDemoUrl} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              style={{ fontSize: "0.75rem", color: "#00ff41", textDecoration: "none", display: "inline-block" }}
                            >
                              LIVE DEMO →
                            </a>
                          )}
                        </div>
                        {project.stargazers_count > 0 && (
                          <div style={{ fontSize: "0.7rem", color: "var(--text-secondary)", marginTop: '8px' }}>
                            ⭐ {project.stargazers_count} stars
                          </div>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>
              {githubProjects.length > 6 && (
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                  <a 
                    href="https://github.com/DawoodHussain-Repo?tab=repositories" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-retro"
                    style={{ display: 'inline-block' }}
                  >
                    VIEW MORE ON GITHUB ({githubProjects.length - 6}+ MORE)
                  </a>
                </div>
              )}
            </>
          )}
        </section>
      </div>

      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-text">
          <span>AVAILABLE FOR FREELANCE • </span>
          <span>HIRE THE SYSTEM • </span>
          <span>BUILDING THE FUTURE • </span>
          <span>RETRO STYLING MODERN TECH • </span>
          <span>AVAILABLE FOR FREELANCE • </span>
          <span>HIRE THE SYSTEM • </span>
          <span>BUILDING THE FUTURE • </span>
          <span>RETRO STYLING MODERN TECH • </span>
        </div>
      </div>

      <div className="container">
        {/* Interactive Console Section */}
        <section className="terminal-section" id="lab">
          <InteractiveConsole />
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-logo">
            <img src="/logo.svg" alt="DH Logo" style={{ width: '60px', height: '60px', marginBottom: '10px' }} />
            <p style={{ color: "var(--accent)", fontSize: "0.8rem", marginBottom: "10px" }}>END_OF_PAGE</p>
            <h2>
              DAWOOD HUSSAIN
              <br />
              2025©
            </h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ marginBottom: "20px" }}>
              <a href="https://x.com/DHussain16725" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}>
                X
              </a>
              <a href="https://github.com/DawoodHussain-Repo" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}>
                GITHUB
              </a>
              <a href="https://linkedin.com/in/dawood-hussain" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}>
                LINKEDIN
              </a>
            </div>
            <p className="copyright">CRAFTED BY DAWOOD HUSSAIN. ALL RIGHTS RESERVED.</p>
          </div>
        </footer>

        <div className="footer-badge">
          <a href="mailto:dawood90999@gmail.com" className="badge-link-footer">
            <div className="badge-content-footer">
              <span className="badge-label">CONTACT:</span>
              <span className="badge-highlight">dawood90999@gmail.com</span>
              <span className="badge-separator">→</span>
              <span className="badge-label">Deployed:</span>
              <span className="badge-highlight">Vercel</span>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
