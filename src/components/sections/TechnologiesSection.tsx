"use client";
import React from "react";

const skills = [
  { name: "React", icon: "⚛️", color: "#61DBFB" },
  { name: "Next.js", icon: "▲", color: "#fffff" },
  { name: "Tailwind CSS", icon: "🎨", color: "#38BDF8" },
  { name: "shadcn/ui", icon: "🧩", color: "#A855F7" },
  { name: "lucide-react", icon: "🖼️", color: "#6366F1" },
  { name: "Framer Motion", icon: "🎞️", color: "#E0248C" },
  { name: "WordPress", icon: "🌐", color: "#21759B" },
  { name: "Neo4j", icon: "🕸️", color: "#018BFF" },
  { name: "Spoon", icon: "🥄", color: "#6B7280" },
  { name: "Unreal Engine 5", icon: "🎮", color: "#0E1128" },
  { name: "Odoo", icon: "🟣", color: "#714B67" },
  { name: "GSAP", icon: "✨", color: "#88CE02" },
  { name: "Three.js", icon: "🎲", color: "#FF9900" },
  { name: "Sanity", icon: "📝", color: "#F03E2F" },
  { name: "Sentry", icon: "⚡", color: "#FB4226" },
  { name: "Blender", icon: "🍊", color: "#F5792A" },
  { name: "Jupyter", icon: "📓", color: "#F37726" },
  { name: "GitHub", icon: "🐙", color: "#181717" },
  { name: "Figma", icon: "🎨", color: "#F24E1E" },
  { name: "TypeScript", icon: "🔷", color: "#3178C6" },
  { name: "Node.js", icon: "🟢", color: "#339933" },
  { name: "Express", icon: "🚀", color: "#404040" },
  { name: "MongoDB", icon: "🍃", color: "#47A248" },
  { name: "PostgreSQL", icon: "🐘", color: "#336791" },
  { name: "JWT", icon: "🔐", color: "#D63AFF" },
  { name: "Stripe", icon: "💳", color: "#635BFF" },
  { name: "Git", icon: "📦", color: "#F05032" },
  { name: "Docker", icon: "🐳", color: "#2496ED" },
  { name: "AWS", icon: "☁️", color: "#FF9900" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto px-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center space-y-2"
          >
            <span className="text-5xl" style={{ color: skill.color }}>
              {skill.icon}
            </span>
            <span className="font-medium text-lg" style={{ color: skill.color }}>
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
