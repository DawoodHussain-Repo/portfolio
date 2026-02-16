'use client'

import { useEffect, useRef } from 'react'

const skillsRow1 = [
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
]

const skillsRow2 = [
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
  { name: 'PyTorch', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg' },
]

export function SkillsSection() {
  const row1Ref = useRef<HTMLDivElement>(null)
  const row2Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simple fade in on mount
    if (row1Ref.current) {
      row1Ref.current.style.opacity = '0'
      setTimeout(() => {
        if (row1Ref.current) {
          row1Ref.current.style.transition = 'opacity 0.8s ease'
          row1Ref.current.style.opacity = '1'
        }
      }, 100)
    }
    if (row2Ref.current) {
      row2Ref.current.style.opacity = '0'
      setTimeout(() => {
        if (row2Ref.current) {
          row2Ref.current.style.transition = 'opacity 0.8s ease'
          row2Ref.current.style.opacity = '1'
        }
      }, 300)
    }
  }, [])

  return (
    <section className="skills-section" id="skills">
      <div className="skills-header">
        <h2 className="section-title">Technical Arsenal</h2>
        <p className="skills-subtitle">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <div className="skills-stripes">
        {/* First Stripe */}
        <div ref={row1Ref} className="skills-stripe">
          <div className="skills-track">
            {[...skillsRow1, ...skillsRow1].map((skill, index) => (
              <div key={`${skill.name}-${index}`} className="skill-item">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="skill-icon"
                  style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Stripe */}
        <div ref={row2Ref} className="skills-stripe skills-stripe-reverse">
          <div className="skills-track">
            {[...skillsRow2, ...skillsRow2].map((skill, index) => (
              <div key={`${skill.name}-${index}`} className="skill-item">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="skill-icon"
                  style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
