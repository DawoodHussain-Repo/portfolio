import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <h3>Dawood Hussain</h3>
          <p>
            Full-Stack Developer specializing in building scalable applications with modern technologies. 
            Currently pursuing Software Engineering at FAST NUCES, Islamabad.
          </p>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <div className="footer-links">
            <a href="#skills">Skills</a>
            <a href="#work">Projects</a>
            <a href="https://github.com/DawoodHussain-Repo" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="/resume.txt" download>Download CV</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <div className="footer-links">
            <a href="mailto:dawood90999@gmail.com">Email</a>
            <a href="tel:+923054449099">Phone</a>
            <a href="https://linkedin.com/in/dawood-hussain" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://x.com/DHussain16725" target="_blank" rel="noopener noreferrer">X (Twitter)</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          © 2025 Dawood Hussain. All rights reserved.
        </div>
        <div className="footer-social">
          <a href="https://github.com/DawoodHussain-Repo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/dawood-hussain" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="https://x.com/DHussain16725" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            <Twitter size={20} />
          </a>
          <a href="mailto:dawood90999@gmail.com" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
