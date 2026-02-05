"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const technologies = [
  { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/ffffff" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
  { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
  { name: "TensorFlow", icon: "https://cdn.simpleicons.org/tensorflow/FF6F00" },
  { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
]

export function TechStackSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".tech-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power2.out"
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="py-20 border-b border-[#333]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-inter)' }}>
          <span style={{ color: 'var(--accent)' }}>//</span> TECHNOLOGIES & FRAMEWORKS
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={index} 
              className="tech-item flex flex-col items-center justify-center p-4 rounded-xl border border-[#222] bg-[#0a0a0a] hover:border-[var(--accent)] hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-300 group"
            >
              <div className="h-12 w-12 mb-4 relative flex items-center justify-center">
                <img 
                  src={tech.icon} 
                  alt={tech.name} 
                  className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" 
                />
              </div>
              <span className="font-mono text-sm text-gray-400 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
