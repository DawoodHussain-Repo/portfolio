const skillCategories = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "GSAP", "Three.js"]
  },
  {
    title: "Backend", 
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "JWT"]
  },
  {
    title: "Tools & Others",
    skills: ["Problem Solving", "AI Tools", "Figma", "SEO Optimizations", "Software Quality Assurance"]
  },
  {
    title: "Specializations",
    skills: ["Modular Designs", "Backend Engineering", "Design Semantics"]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-display text-4xl md:text-5xl mb-12 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-card p-6 rounded-xl animate-scale-in hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-display text-xl mb-4 text-primary">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className="p-3 bg-muted rounded-lg text-glass-foreground text-center transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;