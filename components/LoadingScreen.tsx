"use client"

import { useEffect, useState, useRef } from "react"
import gsap from "gsap"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [currentTask, setCurrentTask] = useState("INITIALIZING...")

  useEffect(() => {
    const tasks = [
      "ESTABLISHING SECURE CONNECTION",
      "LOADING ASSETS",
      "CONFIGURING ENVIRONMENT",
      "PREPARING INTERFACE",
      "READY"
    ]

    let taskIndex = 0
    const taskInterval = setInterval(() => {
      if (taskIndex < tasks.length) {
        setCurrentTask(tasks[taskIndex])
        taskIndex++
      }
    }, 350)

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 5
      })
    }, 80)

    // Completion
    const finalTimeout = setTimeout(() => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: onComplete
        })
      }
    }, 1800)

    return () => {
      clearInterval(taskInterval)
      clearInterval(progressInterval)
      clearTimeout(finalTimeout)
    }
  }, [onComplete])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-end justify-start p-8"
      style={{
        background: '#050505',
        fontFamily: "'Cascadia Code', monospace"
      }}
    >
      {/* Scanline overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
          zIndex: 1
        }}
      />

      {/* Top right mission info */}
      <div 
        className="absolute top-8 right-8 text-right"
        style={{ zIndex: 2 }}
      >
        <div className="text-xs text-gray-500 tracking-widest mb-1">OPERATION</div>
        <div className="text-xl font-bold text-white tracking-wide">PORTFOLIO_INIT</div>
        <div className="text-xs text-[#6366f1] mt-1">DAWOOD HUSSAIN</div>
      </div>

      {/* Bottom left loading section */}
      <div className="relative z-10 w-full max-w-md">
        {/* Task text */}
        <div className="mb-4">
          <div className="text-xs text-gray-500 tracking-widest mb-1">STATUS</div>
          <div className="text-sm text-white tracking-wide flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-[#6366f1] rounded-full animate-pulse"></span>
            {currentTask}
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1 bg-gray-800 overflow-hidden">
          <div 
            className="h-full transition-all duration-100 ease-out"
            style={{ 
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #6366f1, #8b5cf6)'
            }}
          />
        </div>
        <div className="flex justify-between mt-2 text-xs text-gray-500">
          <span>LOADING</span>
          <span>{progress}%</span>
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#6366f1] opacity-30" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#6366f1] opacity-30" />
    </div>
  )
}
