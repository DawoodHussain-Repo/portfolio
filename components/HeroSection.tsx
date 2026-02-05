"use client"

import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLAnchorElement>(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Intro animation
      const tl = gsap.timeline()
      
      tl.from(".hero-text-element", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      })
      .from(".window-frame", {
        y: 50,
        opacity: 0,
        duration: 1,
        scale: 0.95,
        ease: "power2.out"
      }, "-=0.5")

      // Button hover effect
      const btn = buttonRef.current
      if (btn) {
        btn.addEventListener('mouseenter', () => {
          gsap.to(btn, { scale: 1.05, duration: 0.3, ease: "back.out(1.7)" })
          gsap.to(".btn-glitch", { opacity: 0.5, x: 5, duration: 0.1, yoyo: true, repeat: 3 })
        })
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.out" })
        })
      }

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={containerRef}>
      <div className="hero-content">
        <p className="hero-text-element" style={{ color: "var(--accent)", marginBottom: "10px", fontFamily: "monospace" }}>
          {"[ DAWOOD_HUSSAIN.SYS ]"}
        </p>
        <h1 className="hero-text-element">
          Full-Stack <span>Developer</span> &amp; Creative Builder
        </h1>
        <p className="hero-text-element">
          Crafting innovative digital solutions with modern technologies. Specialized in building scalable applications, responsive interfaces, and seamless user experiences.
        </p>
        <a href="#work" className="btn-retro hero-text-element" ref={buttonRef}>
          EXPLORE FILES
          <span className="btn-glitch" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'var(--accent)', opacity: 0, mixBlendMode: 'overlay', pointerEvents: 'none' }}></span>
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
        <div 
          className="hero-404-frame"
          style={{ 
            width: '100%', 
            height: '400px', 
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid var(--accent)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{ 
            fontSize: '120px', 
            color: 'var(--accent)', 
            fontWeight: 'bold',
            fontFamily: 'monospace',
            marginBottom: '20px'
          }}>
            404
          </div>
          <div style={{ 
            fontSize: '18px', 
            color: 'var(--text-primary)', 
            textAlign: 'center',
            fontFamily: 'monospace',
            maxWidth: '80%'
          }}>
            <div style={{ marginBottom: '10px' }}>DEVELOPER_NOT_FOUND</div>
            <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
              Currently coding innovative solutions...
            </div>
            <div style={{ fontSize: '12px', color: 'var(--accent)', marginTop: '15px' }}>
              {'>'} Building the future, one commit at a time
            </div>
          </div>
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '20px',
            fontSize: '10px',
            color: 'var(--text-secondary)',
            fontFamily: 'monospace'
          }}>
            STATUS: ACTIVE | LOCATION: ISLAMABAD
          </div>
        </div>
      </div>
    </section>
  )
}
