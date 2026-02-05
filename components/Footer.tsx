export function Footer() {
  return (
    <>
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
    </>
  )
}
