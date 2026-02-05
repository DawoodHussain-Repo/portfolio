'use client'

import React, { useState, useRef, useEffect } from 'react'

interface ResumeWindowProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeWindow({ isOpen, onClose }: ResumeWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [position, setPosition] = useState({ x: 50, y: 100 }) // Initial position below navbar
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const windowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        })
      }
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragOffset])

  const handleMouseDown = (e: React.MouseEvent) => {
    // Only drag from header
    if ((e.target as HTMLElement).closest('.window-controls')) return;
    
    setIsDragging(true)
    setDragOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y
    })
  }

  const handleFullscreen = () => {
    window.open('/Dawood-Hussain.pdf', '_blank')
  }

  if (!isOpen) return null

  return (
    <div
      ref={windowRef}
      className={`resume-window ${isMinimized ? 'minimized' : ''}`}
      style={{
        position: 'fixed',
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: isMinimized ? '300px' : '800px',
        maxWidth: '90vw',
        height: isMinimized ? 'auto' : '80vh',
        zIndex: 1000,
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '8px',
        overflow: 'hidden',
        border: '1px solid #333'
      }}
    >
      <div 
        className="resume-header" 
        style={{ 
          background: '#1f1f1f', 
          color: '#e0e0e0', 
          padding: '10px 15px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'grab',
          borderBottom: '1px solid #333',
          userSelect: 'none'
        }}
        onMouseDown={handleMouseDown}
      >
        <span style={{ fontFamily: 'var(--font-inter)', fontSize: '14px', fontWeight: 500 }}>RESUME_DAWOOD_HUSSAIN.PDF</span>
        <div className="window-controls" style={{ display: 'flex', gap: '8px' }}>
          <button
            className="window-btn"
            aria-label="Minimize"
            onClick={() => setIsMinimized(!isMinimized)}
            style={{ padding: '4px', background: 'transparent', border: 'none', cursor: 'pointer', color: '#9ca3af' }}
          >
            <span className="minimize-icon" style={{ display: 'block', width: '12px', height: '2px', background: 'currentColor' }}></span>
          </button>
          <button
            className="window-btn"
            aria-label="New Tab"
            onClick={handleFullscreen}
            style={{ padding: '4px', background: 'transparent', border: 'none', cursor: 'pointer', color: '#9ca3af' }}
          >
           <span style={{ fontSize: '14px' }}>↗</span>
          </button>
          <button
            className="window-btn window-close"
            aria-label="Close"
            onClick={onClose}
            style={{ padding: '4px', background: 'transparent', border: 'none', cursor: 'pointer', color: '#ff5f57' }}
          >
            <span style={{ fontSize: '16px', lineHeight: 0.5 }}>×</span>
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="resume-content" style={{ flex: 1, background: '#1a1a1a', position: 'relative' }}>
          <iframe
            src="/Dawood-Hussain.pdf"
            className="resume-iframe"
            title="Resume"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </div>
      )}
    </div>
  )
}
