"use client"

import { useEffect, useState, useRef } from "react"
import gsap from "gsap"

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [logs, setLogs] = useState<{status: string, message: string}[]>([])

  useEffect(() => {
    const bootSequence = [
      { message: "Mounting /dev/sda1...", delay: 100 },
      { message: "Loading initial ramdisk...", delay: 300 },
      { message: "Starting kernel... Linux 6.8.0-generic", delay: 600 },
      { message: "Checking file systems...", delay: 800 },
      { message: "Mounting local filesystems...", delay: 1100 },
      { message: "Starting Network Manager...", delay: 1400 },
      { message: "Reached target Network.", delay: 1600 },
      { message: "Starting Portfolio UI Display Manager...", delay: 1900 },
      { message: "Started User Manager for UID 1000...", delay: 2200 },
      { message: "Welcome to Dawood OS.", delay: 2600 },
    ]

    let timeouts: NodeJS.Timeout[] = []

    bootSequence.forEach((item, index) => {
      const timeout = setTimeout(() => {
        setLogs(prev => [...prev, { status: "OK", message: item.message }])
      }, item.delay)
      timeouts.push(timeout)
    })

    // Completion sequence
    const finalTimeout = setTimeout(() => {
      if (containerRef.current) {
        gsap.to(containerRef.current, {
          opacity: 0,
          y: -50,
          duration: 0.5,
          ease: "power2.inOut",
          onComplete: onComplete
        })
      }
    }, 3200)

    timeouts.push(finalTimeout)

    return () => {
      timeouts.forEach(t => clearTimeout(t))
    }
  }, [onComplete])

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col justify-start p-10 font-bold"
      style={{
        backgroundColor: '#050505', // Website bg
        color: '#ffffff',
        fontFamily: "'Cascadia Code', 'Ubuntu Mono', 'Courier New', monospace",
        fontSize: '16px',
        lineHeight: '1.5'
      }}
    >
      <div className="w-full max-w-4xl">
        {logs.map((log, i) => (
          <div key={i} className="flex items-center gap-3 mb-1">
            <span style={{ color: '#6366f1' }}>[  {log.status}  ]</span>
            <span className="opacity-90">{log.message}</span>
          </div>
        ))}
        <div className="animate-pulse mt-2 text-[#6366f1]">_</div>
      </div>
    </div>
  )
}
