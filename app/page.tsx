"use client"

import { useEffect, useState } from "react"
import { InteractiveConsole } from "@/components/InteractiveConsole"
import { ResumeWindow } from "@/components/ResumeWindow"

interface GitHubRepo {
  id: number
  name: string
  description: string
  html_url: string
  topics: string[]
  homepage: string | null
  stargazers_count: number
  language: string
}

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showResume, setShowResume] = useState(false)
  const [githubProjects, setGithubProjects] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

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

  return (
    <>
      <ResumeWindow isOpen={showResume} onClose={() => setShowResume(false)} />

      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          <span className="scroll-arrow">↑</span>
        </button>
      )}

        <header>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/logo.svg" alt="DH Logo" style={{ width: '40px', height: '40px' }} />
            <span>Dawood Hussain</span>
          </div>
          <nav className="nav-links">
            <a href="#work">PROJECTS</a>
            <a href="#lab">CONSOLE</a>
            <a href="https://github.com/DawoodHussain-Repo" target="_blank" rel="noopener noreferrer">GITHUB</a>
            <button 
              onClick={() => setShowResume(true)}
              className="nav-resume-btn"
              style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit', fontFamily: 'inherit' }}
            >
              RESUME
            </button>
            <a 
              href="/resume.txt" 
              download="Dawood-Hussain-Portfolio.txt"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              DOWNLOAD
            </a>
          </nav>
          <div className="system-status">SYS_UP: 24:12:05:08 | CPU: 12%</div>
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
        <div className="stats-bar">
          <div className="stat-item">
            <div className="stat-val">05+</div>
            <div className="stat-label">Years XP</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">50+</div>
            <div className="stat-label">Projects Shipped</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">100%</div>
            <div className="stat-label">Client Satisfied</div>
          </div>
          <div className="stat-item">
            <div className="stat-val">10+</div>
            <div className="stat-label">Tech Stack</div>
          </div>
        </div>

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
                        src={`https://opengraph.githubassets.com/1/${project.html_url.replace('https://github.com/', '')}`}
                        alt={project.name}
                        className="project-img"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80'
                        }}
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
              <span className="badge-label">BUILT:</span>
              <span className="badge-highlight">v0.app</span>
            </div>
          </a>
        </div>
      </div>
    </>
  )
}
