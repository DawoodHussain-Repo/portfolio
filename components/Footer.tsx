import { Github, Linkedin, Twitter, Mail, Code2, Briefcase, FileText, Phone, MapPin } from 'lucide-react'

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
            <a href="#skills">
              <Code2 size={16} />
              <span>Skills</span>
            </a>
            <a href="#work">
              <Briefcase size={16} />
              <span>Projects</span>
            </a>
            <a href="https://github.com/DawoodHussain-Repo" target="_blank" rel="noopener noreferrer">
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a href="/Dawood-Hussain.pdf" download="Dawood-Hussain-Resume.pdf">
              <FileText size={16} />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <div className="footer-links">
            <a href="mailto:dawood90999@gmail.com">
              <Mail size={16} />
              <span>Email</span>
            </a>
            <a href="tel:+923054449099">
              <Phone size={16} />
              <span>Phone</span>
            </a>
            <a href="https://linkedin.com/in/dawood-hussain" target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
            <a href="https://x.com/DHussain16725" target="_blank" rel="noopener noreferrer">
              <Twitter size={16} />
              <span>X (Twitter)</span>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-copyright">
          <MapPin size={14} style={{ marginRight: '6px' }} />
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
