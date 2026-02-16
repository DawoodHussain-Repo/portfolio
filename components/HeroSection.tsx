export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-label">FULL-STACK DEVELOPER</div>
        <h1>
          Dawood <span>Hussain</span>
        </h1>
        <p className="hero-description">
          Software Engineering student at FAST NUCES, Islamabad. Building scalable applications with modern technologies, specializing in AI/ML integration and full-stack development.
        </p>
        
        <div className="hero-info">
          <div className="info-item">
            <span className="info-icon">📍</span>
            <span>Islamabad, Pakistan</span>
          </div>
          <div className="info-item">
            <span className="info-icon">📧</span>
            <a href="mailto:dawood90999@gmail.com">dawood90999@gmail.com</a>
          </div>
          <div className="info-item">
            <span className="info-icon">📱</span>
            <a href="tel:+923054449099">+92 305 444 9099</a>
          </div>
        </div>

        <div className="hero-actions">
          <a href="#work" className="btn-primary">
            View Projects
          </a>
          <a href="https://github.com/DawoodHussain-Repo" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            GitHub Profile
          </a>
        </div>
      </div>

      <div className="hero-side">
        <div className="education-card">
          <div className="card-header">
            <span className="card-icon">🎓</span>
            <h3>Education</h3>
          </div>
          <div className="card-content">
            <h4>Bachelor in Software Engineering</h4>
            <p className="institution">FAST NUCES, Islamabad</p>
            <div className="edu-details">
              <div className="detail-item">
                <span className="detail-label">CGPA</span>
                <span className="detail-value">3.19/4.0</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Expected</span>
                <span className="detail-value">2026</span>
              </div>
            </div>
            <div className="coursework">
              <p className="coursework-title">Key Coursework:</p>
              <div className="coursework-tags">
                <span>Data Structures</span>
                <span>OOP</span>
                <span>Web Dev</span>
                <span>NLP</span>
                <span>Database Systems</span>
                <span>Software Architecture</span>
                <span>SQA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="social-links">
          <a href="https://github.com/DawoodHussain-Repo" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          <a href="https://linkedin.com/in/dawood-hussain" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          <a href="https://x.com/DHussain16725" target="_blank" rel="noopener noreferrer" className="social-link">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span>X (Twitter)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
