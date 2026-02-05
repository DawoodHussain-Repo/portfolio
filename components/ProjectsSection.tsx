'use client'

import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { ProjectCard } from './ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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

export function ProjectsSection() {
  const [githubProjects, setGithubProjects] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGitHubProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/DawoodHussain-Repo/repos?sort=updated&per_page=100')
        const data = await response.json()
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
  }, [])

  const getProjectImage = (projectName: string) => {
    const normalizedName = projectName.toLowerCase().replace(/[-_]/g, '-')
    return projectImages[normalizedName] || projectImages.default
  }

  const sectionRef = useRef<HTMLElement>(null)
  
  useLayoutEffect(() => {
    if (!loading && githubProjects.length > 0) {
      const ctx = gsap.context(() => {
        gsap.from(".section-title", {
          scrollTrigger: {
            trigger: ".section-title",
            start: "top 80%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out"
        })

        gsap.from(".project-card-item", { // Assuming ProjectCard has this class or I wrap it
          scrollTrigger: {
            trigger: ".portfolio-grid",
            start: "top 75%",
          },
          y: 50,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out"
        })
      }, sectionRef)
      return () => ctx.revert()
    }
  }, [loading, githubProjects])

  return (
    <section id="work" ref={sectionRef}>
      <h2 className="section-title">Latest Deployments</h2>
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: 'var(--accent)' }}>
          Loading projects from GitHub...
        </div>
      ) : (
        <>
          <div className="portfolio-grid">
            {githubProjects.slice(0, 6).map((project, index) => (
              <div key={project.id} className="project-card-item">
                <ProjectCard
                  project={project}
                  index={index}
                  imageSrc={getProjectImage(project.name)}
                />
              </div>
            ))}
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
  )
}
