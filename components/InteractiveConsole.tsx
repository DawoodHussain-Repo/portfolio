'use client'

import React from "react"

import { useState, useRef, useEffect } from 'react'

interface ConsoleLog {
  type: 'input' | 'output' | 'error' | 'info'
  text: string
}

export function InteractiveConsole() {
  const [logs, setLogs] = useState<ConsoleLog[]>([
    { type: 'info', text: 'DAWOOD_CONSOLE v1.0 - Type "help" for available commands' },
    { type: 'info', text: 'Type commands: help, about, skills, projects, contact, social, download, clear' },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const logsRef = useRef<HTMLDivElement>(null)

  // Helper function to render text with ANSI color codes
  const renderWithColors = (text: string) => {
    const parts = text.split(/(\x1b\[\d+m)/g)
    let currentColor = 'inherit'
    
    return parts.map((part, idx) => {
      if (part === '\x1b[32m') {
        currentColor = '#00ff41'
        return null
      } else if (part === '\x1b[0m') {
        currentColor = 'inherit'
        return null
      } else if (part) {
        return <span key={idx} style={{ color: currentColor }}>{part}</span>
      }
      return null
    })
  }

  useEffect(() => {
    if (logsRef.current) {
      logsRef.current.scrollTop = logsRef.current.scrollHeight
    }
  }, [logs])

  const commands: Record<string, () => string | string[]> = {
    help: () => [
      'Available Commands:',
      '  \x1b[32mhelp\x1b[0m               - Show this help message',
      '  \x1b[32mabout\x1b[0m              - Show about Dawood',
      '  \x1b[32mskills\x1b[0m             - Display technical skills',
      '  \x1b[32mprojects\x1b[0m           - List all projects',
      '  \x1b[32mcontact\x1b[0m            - Email contact (dawood90999@gmail.com)',
      '  \x1b[32msudo contact\x1b[0m       - Open email client',
      '  \x1b[32msocial\x1b[0m             - Show social media links',
      '  \x1b[32mgithub\x1b[0m             - Open GitHub profile',
      '  \x1b[32mresume\x1b[0m             - Download resume',
      '  \x1b[32mdownload\x1b[0m           - Download portfolio',
      '  \x1b[32mclear\x1b[0m              - Clear console',
    ],
    about: () => [
      'Dawood Hussain - Full-Stack Developer',
      'FAST NUCES, Islamabad | Bachelor in Software Engineering (2026)',
      'CGPA: 3.19/4.0',
      '',
      'Building scalable applications with modern technologies',
      'Passionate about clean code and innovative solutions',
      '',
      'Location: Islamabad, Pakistan',
      'Email: dawood90999@gmail.com',
      'Phone: +923054449099',
    ],
    skills: () => [
      '═══════════════════════════════════════════════════════',
      '                    TECHNICAL SKILLS                    ',
      '═══════════════════════════════════════════════════════',
      '',
      '┌─ Languages & Frameworks',
      '│  • JavaScript, TypeScript, Python',
      '│  • Node.js, Express, React, Next.js, Flask',
      '│',
      '┌─ Databases',
      '│  • MongoDB, PostgreSQL, MySQL',
      '│  • Supabase, ChromaDB',
      '│',
      '┌─ DevOps & Tools',
      '│  • Docker, Kubernetes',
      '│  • GitHub Actions, CI/CD Pipelines',
      '│  • Git, Version Control',
      '│',
      '┌─ AI/ML & Advanced',
      '│  • TensorFlow, PyTorch',
      '│  • LangChain, LangGraph',
      '│  • NLP, RAG (Retrieval-Augmented Generation)',
      '│',
      '└─ Additional Skills',
      '   • RESTful API Design',
      '   • Real-time Applications (Socket.io)',
      '   • Authentication & Security (JWT, OAuth)',
      '   • Payment Integration (Stripe)',
      '   • Web Crypto API, Encryption',
      '',
      '═══════════════════════════════════════════════════════',
    ],
    projects: () => [
      '═══════════════════════════════════════════════════════',
      '                   TECHNICAL PROJECTS                   ',
      '═══════════════════════════════════════════════════════',
      '',
      '┌─ Fintech Forecasting Application (2024)',
      '│  Financial forecasting platform with LSTM, GRU, ARIMA',
      '│  Stack: Python, Flask, TensorFlow, MongoDB, Docker',
      '│  • 80% latency reduction with MongoDB caching',
      '│',
      '┌─ Converso SaaS App (June 2025)',
      '│  AI-powered educational platform with premium features',
      '│  Stack: Next.js, React 19, Tailwind, Supabase, Vapi AI',
      '│  • Full authentication & production monitoring',
      '│',
      '┌─ CipherChat (2024)',
      '│  Encrypted messaging with AES-256-GCM & ECDH',
      '│  Stack: React, Node.js, Express, MongoDB, Socket.io',
      '│  • Zero-knowledge architecture',
      '│',
      '┌─ Airplane Management System (Dec 2024)',
      '│  Airline operations with RBAC & payment processing',
      '│  Stack: React, Node.js, Express, MongoDB, Stripe',
      '│',
      '└─ AI Mindful Rating Agent (March 2025)',
      '   AI educational platform with voice integration',
      '   Stack: Flask, LangGraph, LangChain, ChromaDB',
      '',
      '═══════════════════════════════════════════════════════',
    ],
    contact: () => 'Email: dawood90999@gmail.com | Phone: +923054449099',
    'sudo contact': () => {
      window.location.href = 'mailto:dawood90999@gmail.com'
      return 'Opening email client...'
    },
    social: () => [
      'GitHub: https://github.com/DawoodHussain-Repo',
      'LinkedIn: https://linkedin.com/in/dawood-hussain',
      'Email: dawood90999@gmail.com',
    ],
    github: () => {
      window.open('https://github.com/DawoodHussain-Repo', '_blank')
      return 'Opening GitHub profile...'
    },
    resume: () => {
      const link = document.createElement('a')
      link.href = '/resume.txt'
      link.download = 'Dawood-Hussain-Resume.txt'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      return 'Resume downloaded! (resume.txt)'
    },
    download: () => {
      const link = document.createElement('a')
      link.href = '/resume.txt'
      link.download = 'Dawood-Hussain-Portfolio.txt'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      return 'Portfolio downloaded! (Dawood-Hussain-Portfolio.txt)'
    },
    clear: () => '',
  }

  const handleCommand = (command: string) => {
    const trimmed = command.trim().toLowerCase()
    
    // Handle clear command specially
    if (trimmed === 'clear') {
      setLogs([
        { type: 'info', text: 'DAWOOD_CONSOLE v1.0 - Type "help" for available commands' },
        { type: 'info', text: 'Type commands: help, about, skills, projects, contact, social, download, clear' },
      ])
      setInput('')
      setHistory([...history, command])
      setHistoryIndex(-1)
      return
    }
    
    const result = commands[trimmed]?.()

    const newLogs: ConsoleLog[] = [
      ...logs,
      { type: 'input', text: command },
    ]

    if (result) {
      if (Array.isArray(result)) {
        result.forEach((line) => {
          newLogs.push({ type: 'output', text: line })
        })
      } else {
        newLogs.push({ type: 'output', text: result })
      }
    } else if (trimmed !== '') {
      newLogs.push({
        type: 'error',
        text: `command not found: ${command}. Type "help" for available commands.`,
      })
    }

    setLogs(newLogs)
    setInput('')
    setHistory([...history, command])
    setHistoryIndex(-1)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      if (input.trim()) {
        handleCommand(input)
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      const newIndex = historyIndex + 1
      if (newIndex < history.length) {
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      const newIndex = historyIndex - 1
      if (newIndex >= 0) {
        setHistoryIndex(newIndex)
        setInput(history[history.length - 1 - newIndex])
      } else {
        setHistoryIndex(-1)
        setInput('')
      }
    }
  }

  return (
    <div className="console-container">
      <div className="console-header">SYSTEM_CONSOLE.EXE</div>
      <div className="console-logs" ref={logsRef}>
        {logs.map((log, idx) => (
          <div
            key={idx}
            className={`console-line ${log.type}`}
            style={{
              color:
                log.type === 'input'
                  ? 'var(--text-primary)'
                  : log.type === 'error'
                    ? '#ff6b6b'
                    : log.type === 'info'
                      ? 'var(--accent)'
                      : 'var(--text-primary)',
            }}
          >
            {log.type === 'input' ? (
              <>
                <span style={{ color: '#ff9500', fontWeight: 'bold' }}>guest@dawood:~$</span>
                {' ' + log.text}
              </>
            ) : (
              renderWithColors(log.text)
            )}
          </div>
        ))}
      </div>
      <div className="console-input-row">
        <span className="prompt" style={{ color: '#ff9500' }}>guest@dawood:~$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="console-input"
          placeholder="Type a command..."
          autoFocus
        />
      </div>
    </div>
  )
}
