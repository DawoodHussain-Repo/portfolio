"use client"

import { useEffect, useState } from "react"
import { InteractiveConsole } from "@/components/InteractiveConsole"
import { ResumeWindow } from "@/components/ResumeWindow"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showResume, setShowResume] = useState(false)

  useEffect(() => {
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
          <div className="logo">Dawood Hussain</div>
          <nav className="nav-links">
            <a href="#work">PROJECTS</a>
            <a href="#lab">CONSOLE</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">GITHUB</a>
            <button 
              onClick={() => setShowResume(true)}
              className="nav-resume-btn"
              style={{ background: 'transparent', border: 'none', color: 'inherit', cursor: 'pointer', fontSize: 'inherit', fontFamily: 'inherit' }}
            >
              RESUME
            </button>
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
            <img src="/hero-portrait.jpg" alt="Professional Portrait" className="hero-image" />
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
          <div className="portfolio-grid">
            {/* Project 1 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>PROJECT_01</span>
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
                src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=600&q=80"
                alt="Project Portfolio"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#NEXT.JS #TAILWIND #TYPESCRIPT</span>
                <h3 className="project-title">Interactive Portfolio</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Personal portfolio website with interactive console, responsive design, and modern UI. Built with Next.js and Tailwind CSS for optimal performance.
                </p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "var(--accent)", textDecoration: "none", marginTop: "8px", display: "inline-block" }}>
                  VIEW ON GITHUB →
                </a>
              </div>
            </div>
            {/* Project 2 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>PROJECT_02</span>
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
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80"
                alt="Web Application"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#REACT #NODE.JS #MONGODB</span>
                <h3 className="project-title">Full-Stack Web Application</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Complete web application with React frontend, Node.js backend, and MongoDB database. Features user authentication, real-time data sync, and modern UI.
                </p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "var(--accent)", textDecoration: "none", marginTop: "8px", display: "inline-block" }}>
                  VIEW ON GITHUB →
                </a>
              </div>
            </div>
            {/* Project 3 */}
            <div className="project-card">
              <div className="window-header" style={{ background: "#333", color: "#fff" }}>
                <span>PROJECT_03</span>
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
                src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600&q=80"
                alt="Responsive Web Platform"
                className="project-img"
              />
              <div className="project-info">
                <span className="project-tag">#TYPESCRIPT #POSTGRESQL #RESPONSIVE</span>
                <h3 className="project-title">E-Commerce Platform</h3>
                <p style={{ fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                  Enterprise-grade e-commerce solution with TypeScript, PostgreSQL backend, payment integration, and advanced product management features.
                </p>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.75rem", color: "var(--accent)", textDecoration: "none", marginTop: "8px", display: "inline-block" }}>
                  VIEW ON GITHUB →
                </a>
              </div>
            </div>
          </div>
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
            <p style={{ color: "var(--accent)", fontSize: "0.8rem", marginBottom: "10px" }}>END_OF_PAGE</p>
            <h2>
              DAWOOD HUSSAIN
              <br />
              2025©
            </h2>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ marginBottom: "20px" }}>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}>
                TWITTER
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}>
                GITHUB
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-primary)", textDecoration: "none", marginLeft: "20px" }}>
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
