"use client"

import LogoLoop from './ui/LogoLoop'
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiJavascript,
  SiNodedotjs, 
  SiPython, 
  SiTailwindcss,
  SiVite,
  SiElectron,
  SiFlask,
  SiFastapi,
  SiDocker,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiTensorflow,
  SiFramer,
  SiWordpress,
  SiFirebase,
  SiFigma,
  SiSupabase,
  SiRedis,
  SiGraphql
} from 'react-icons/si'

const technologies = [
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiReact className="text-[40px] text-[#61DAFB]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>React</span>
      </div>
    ), 
    title: "React" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiNextdotjs className="text-[40px] text-white" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>Next.js</span>
      </div>
    ), 
    title: "Next.js" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiTypescript className="text-[40px] text-[#3178C6]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>TypeScript</span>
      </div>
    ), 
    title: "TypeScript" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiJavascript className="text-[40px] text-[#F7DF1E]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>JavaScript</span>
      </div>
    ), 
    title: "JavaScript" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiNodedotjs className="text-[40px] text-[#339933]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>Node.js</span>
      </div>
    ), 
    title: "Node.js" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiPython className="text-[40px] text-[#3776AB]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>Python</span>
      </div>
    ), 
    title: "Python" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiTailwindcss className="text-[40px] text-[#06B6D4]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>Tailwind CSS</span>
      </div>
    ), 
    title: "Tailwind CSS" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiVite className="text-[40px] text-[#646CFF]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>Vite</span>
      </div>
    ), 
    title: "Vite" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiElectron className="text-[40px] text-[#47848F]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>Electron</span>
      </div>
    ), 
    title: "Electron" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiFlask className="text-[40px] text-white" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>Flask</span>
      </div>
    ), 
    title: "Flask" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiFastapi className="text-[40px] text-[#009688]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>FastAPI</span>
      </div>
    ), 
    title: "FastAPI" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiDocker className="text-[40px] text-[#2496ED]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>Docker</span>
      </div>
    ), 
    title: "Docker" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiPostgresql className="text-[40px] text-[#4169E1]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>PostgreSQL</span>
      </div>
    ), 
    title: "PostgreSQL" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiMongodb className="text-[40px] text-[#47A248]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>MongoDB</span>
      </div>
    ), 
    title: "MongoDB" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiGit className="text-[40px] text-[#F05032]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>Git</span>
      </div>
    ), 
    title: "Git" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiTensorflow className="text-[40px] text-[#FF6F00]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>TensorFlow</span>
      </div>
    ), 
    title: "TensorFlow" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiFramer className="text-[40px] text-[#0055FF]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>Framer Motion</span>
      </div>
    ), 
    title: "Framer Motion" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiWordpress className="text-[40px] text-[#21759B]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>WordPress</span>
      </div>
    ), 
    title: "WordPress" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiFirebase className="text-[40px] text-[#FFCA28]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>Firebase</span>
      </div>
    ), 
    title: "Firebase" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiFigma className="text-[40px] text-[#F24E1E]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>Figma</span>
      </div>
    ), 
    title: "Figma" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiSupabase className="text-[40px] text-[#3ECF8E]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>Supabase</span>
      </div>
    ), 
    title: "Supabase" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiRedis className="text-[40px] text-[#DC382D]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>Redis</span>
      </div>
    ), 
    title: "Redis" 
  },
  { 
    node: (
      <div className="flex items-center gap-3">
        <SiGraphql className="text-[40px] text-[#E10098]" />
        <span className="text-lg font-semibold text-white" style={{ fontFamily: "'Cascadia Code', monospace" }}>GraphQL</span>
      </div>
    ), 
    title: "GraphQL" 
  },
]

export function TechStackSection() {
  return (
    <section className="py-20 border-b border-[#333] overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <h2 
          className="text-4xl font-bold text-center tracking-tight" 
          style={{ 
            fontFamily: "'Cascadia Code', monospace",
            letterSpacing: '-0.02em'
          }}
        >
          <span style={{ color: 'var(--accent)' }}>//</span> TECHNOLOGIES <span style={{ color: 'var(--accent)' }}>&</span> FRAMEWORKS
        </h2>
      </div>
      
      <div style={{ height: '120px', position: 'relative' }}>
        <LogoLoop
          logos={technologies}
          speed={50}
          direction="left"
          logoHeight={60}
          gap={80}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#050505"
          ariaLabel="Technology stack"
        />
      </div>
    </section>
  )
}
