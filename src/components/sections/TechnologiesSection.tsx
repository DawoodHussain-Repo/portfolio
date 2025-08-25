const technologies = [
  {
    name: "React",
    category: "Frontend",
    icon: "⚛️",
    color: "from-cyan-400 to-blue-500"
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: "▲",
    color: "from-gray-400 to-gray-600"
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: "🔷",
    color: "from-blue-500 to-blue-700"
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: "🟢",
    color: "from-green-500 to-green-700"
  },
  {
    name: "Express",
    category: "Backend",
    icon: "🚀",
    color: "from-gray-500 to-gray-700"
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: "🍃",
    color: "from-green-400 to-green-600"
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: "🐘",
    color: "from-blue-400 to-blue-600"
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    icon: "🎨",
    color: "from-cyan-500 to-teal-500"
  },
  {
    name: "GSAP",
    category: "Animation",
    icon: "✨",
    color: "from-purple-500 to-pink-500"
  },
  {
    name: "Three.js",
    category: "3D Graphics",
    icon: "🎲",
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "JWT",
    category: "Auth",
    icon: "🔐",
    color: "from-red-500 to-red-700"
  },
  {
    name: "Stripe",
    category: "Payment",
    icon: "💳",
    color: "from-purple-600 to-blue-600"
  },
  {
    name: "Figma",
    category: "Design",
    icon: "🎨",
    color: "from-purple-400 to-pink-400"
  },
  {
    name: "Git",
    category: "Version Control",
    icon: "📦",
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: "🐳",
    color: "from-blue-500 to-cyan-500"
  },
  {
    name: "AWS",
    category: "Cloud",
    icon: "☁️",
    color: "from-orange-400 to-yellow-500"
  }
];

const categories = Array.from(new Set(technologies.map(tech => tech.category)));

const TechnologiesSection = () => {
  return (
    <section id="technologies" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-display text-5xl md:text-6xl mb-16 text-center animate-fade-in">
          Technologies <span className="text-primary">&</span> Skills
        </h2>
        
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => (
            <div key={category} className="animate-slide-up" style={{ animationDelay: `${categoryIndex * 0.2}s` }}>
              <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                {category}
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, index) => (
                    <div 
                      key={tech.name}
                      className="glass-card backdrop-blur-xl bg-glass-background/20 border border-glass-border/30 p-4 rounded-2xl hover-lift transition-all duration-500 group text-center"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Icon */}
                      <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      
                      {/* Tech Name */}
                      <h4 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                        {tech.name}
                      </h4>
                      
                      {/* Gradient Bar */}
                      <div className="mt-3 h-1 rounded-full bg-gradient-to-r opacity-60 group-hover:opacity-100 transition-opacity duration-300" 
                           style={{
                             background: `linear-gradient(to right, var(--primary), var(--primary-glow))`
                           }} 
                      />
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Skills */}
        <div className="mt-16 text-center">
          <div className="glass-card backdrop-blur-xl bg-glass-background/20 border border-glass-border/30 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-primary mb-6">Additional Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Problem Solving", "AI Tools", "Modular Designs", 
                "Software Quality Assurance", "SEO Optimizations", 
                "Backend Engineering", "Design Semantics"
              ].map((skill) => (
                <span 
                  key={skill}
                  className="px-4 py-2 bg-primary/10 text-primary border border-primary/30 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;