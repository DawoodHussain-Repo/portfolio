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
    { type: 'info', text: 'Type commands: help, about, skills, projects, contact, social, clear' },
  ])
  const [input, setInput] = useState('')
  const [history, setHistory] = useState<string[]>([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const logsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (logsRef.current) {
      logsRef.current.scrollTop = logsRef.current.scrollHeight
    }
  }, [logs])

  const commands: Record<string, () => string | string[]> = {
    help: () => [
      'Available Commands:',
      '  about              - Show about Dawood',
      '  skills             - Display core skills',
      '  projects           - List all projects',
      '  contact            - Email contact (dawood90999@gmail.com)',
      '  sudo contact       - Open email client',
      '  social             - Show social media links',
      '  github             - Open GitHub profile',
      '  resume             - Download resume',
      '  clear              - Clear console',
      '  help               - Show this help message',
    ],
    about: () => [
      'Dawood Hussain - Full-Stack Developer',
      'Building scalable applications with modern technologies',
      'Passionate about clean code and innovative solutions',
    ],
    skills: () => [
      'Core Competencies:',
      '  • JavaScript/TypeScript',
      '  • React & Next.js',
      '  • Node.js & Backend',
      '  • Database Design',
      '  • Web Design & UI/UX',
    ],
    projects: () => [
      'PROJECT_01: Dawood Portfolio - Next.js, Tailwind CSS',
      'PROJECT_02: Full-Stack App - React, Node.js, MongoDB',
      'PROJECT_03: Web Application - TypeScript, PostgreSQL',
    ],
    contact: () => 'Email: dawood90999@gmail.com',
    'sudo contact': () => {
      window.location.href = 'mailto:dawood90999@gmail.com'
      return 'Opening email client...'
    },
    social: () => [
      'GitHub: https://github.com',
      'LinkedIn: https://linkedin.com',
      'Twitter: https://twitter.com',
    ],
    github: () => {
      window.open('https://github.com', '_blank')
      return 'Opening GitHub...'
    },
    resume: () => {
      const link = document.createElement('a')
      link.href = '/resume.pdf'
      link.download = 'Dawood-Hussain-Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      return 'Resume downloaded!'
    },
    clear: () => {
      setLogs([{ type: 'info', text: 'Console cleared' }])
      return ''
    },
  }

  const handleCommand = (command: string) => {
    const trimmed = command.trim().toLowerCase()
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
              log.text
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
