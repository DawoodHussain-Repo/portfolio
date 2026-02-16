'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function StatsBar() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%',
        },
        opacity: 0,
        y: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out'
      })

      // Animate the numbers counting up
      const statValues = document.querySelectorAll('.stat-value')
      statValues.forEach((stat) => {
        const target = stat.textContent || '0'
        const isNumber = /^\d+/.test(target)
        
        if (isNumber) {
          const num = parseInt(target)
          gsap.from(stat, {
            scrollTrigger: {
              trigger: '.stats-section',
              start: 'top 80%',
            },
            textContent: 0,
            duration: 1.5,
            ease: 'power1.out',
            snap: { textContent: 1 },
            onUpdate: function() {
              const current = Math.ceil(parseFloat((this.targets()[0] as HTMLElement).textContent || '0'))
              if (target.includes('+')) {
                (this.targets()[0] as HTMLElement).textContent = current + '+'
              } else if (target.includes('.')) {
                (this.targets()[0] as HTMLElement).textContent = (current / 100).toFixed(2)
              } else {
                (this.targets()[0] as HTMLElement).textContent = current.toString()
              }
            }
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="stats-section" ref={sectionRef}>
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-value">5+</div>
          <div className="stat-label">Major Projects</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">16+</div>
          <div className="stat-label">Technologies</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">2026</div>
          <div className="stat-label">Graduation</div>
        </div>
      </div>
    </section>
  )
}
