"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { StatsBar } from "@/components/StatsBar"
import { SkillsSection } from "@/components/SkillsSection"
import { FeaturedProjects } from "@/components/FeaturedProjects"
import { Marquee } from "@/components/Marquee"
import { Footer } from "@/components/Footer"
import { ResumeWindow } from "@/components/ResumeWindow"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showResume, setShowResume] = useState(false)

  useEffect(() => {
    // Update the system clock
    function updateClock() {
      const now = new Date()
      const timeStr =
        now.getHours().toString().padStart(2, "0") +
        ":" +
        now.getMinutes().toString().padStart(2, "0") +
        ":" +
        now.getSeconds().toString().padStart(2, "0")
      const statusElement = document.querySelector(".system-status")
      if (statusElement) {
        statusElement.textContent = `SYS_UP: ${timeStr} | CPU: ${Math.floor(Math.random() * 20) + 5}%`
      }
    }
    updateClock()
    const interval = setInterval(updateClock, 1000)

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <ResumeWindow isOpen={showResume} onClose={() => setShowResume(false)} />

      {showScrollTop && (
        <button onClick={scrollToTop} className="scroll-to-top" aria-label="Scroll to top">
          ↑
        </button>
      )}

      <Header onResumeClick={() => setShowResume(true)} />

      <div className="container">
        <HeroSection />
        <StatsBar />
        <SkillsSection />
        <FeaturedProjects />
      </div>

      <Marquee />

      <div className="container">
        <Footer />
      </div>
    </>
  )
}
