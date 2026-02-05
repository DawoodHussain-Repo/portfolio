interface ProjectCardProps {
  project: {
    id: number
    name: string
    description: string
    html_url: string
    topics: string[]
    homepage: string | null
    stargazers_count: number
    language: string
  }
  index: number
  imageSrc: string
}

export function ProjectCard({ project, index, imageSrc }: ProjectCardProps) {
  // Only show live demo for specific projects
  const hasLiveDemo = ['wisdom-saas', 'pitchify'].includes(project.name.toLowerCase())
  const liveDemoUrl = hasLiveDemo ? project.homepage : null

  return (
    <div className="project-card">
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
        src={imageSrc}
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
              style={{ fontSize: "0.75rem", color: "#10b981", textDecoration: "none", display: "inline-block" }}
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
}
