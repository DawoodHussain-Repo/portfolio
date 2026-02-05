'use client'

import React, { useState } from 'react'

interface ResumeWindowProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeWindow({ isOpen, onClose }: ResumeWindowProps) {
  const [isMinimized, setIsMinimized] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)

  if (!isOpen) return null

  return (
    <div
      className={`resume-window ${isMinimized ? 'minimized' : ''} ${isFullscreen ? 'fullscreen' : ''}`}
      style={{
        position: isFullscreen ? 'fixed' : 'fixed',
        inset: isFullscreen ? '0' : '50px',
        zIndex: 1000,
      }}
    >
      <div className="resume-header" style={{ background: '#333', color: '#fff' }}>
        <span>RESUME_DAWOOD_HUSSAIN.PDF</span>
        <div className="window-controls">
          <button
            className="window-btn"
            aria-label="Minimize"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            <span className="minimize-icon"></span>
          </button>
          <button
            className="window-btn"
            aria-label="Fullscreen"
            onClick={() => setIsFullscreen(!isFullscreen)}
          >
            <span className="maximize-icon"></span>
          </button>
          <button
            className="window-btn window-close"
            aria-label="Close"
            onClick={onClose}
          >
            <span className="close-icon"></span>
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="resume-content">
          <iframe
            src="/resume.txt"
            className="resume-iframe"
            title="Resume"
            style={{ width: '100%', height: '100%', border: 'none', background: '#1a1a1a', color: '#00ff41', padding: '20px', fontFamily: 'monospace' }}
          />
        </div>
      )}
    </div>
  )
}
