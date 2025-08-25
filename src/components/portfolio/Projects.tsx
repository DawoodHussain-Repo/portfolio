import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Converso SaaS App",
    subtitle: "AI-Powered Educational Platform",
    date: "June 2025",
    description: "Built a full-stack educational platform enabling users to create and interact with AI companions for various subjects. Integrated user auth, session tracking, and premium features using Clerk, Supabase, and Vapi AI, with real-time monitoring via Sentry.",
    tech: ["Next.js", "React 19", "Tailwind CSS", "Supabase", "Vapi AI", "Clerk", "Sentry"],
    featured: true
  },
  {
    title: "EdTech Platform",
    subtitle: "Full-Stack Learning Management System",
    date: "March 2025",
    description: "Developed a role-based EdTech web application with course creation, enrollment, and instructor dashboards. Implemented secure authentication, dynamic course management, and live class features using JWT, MongoDB, and Express.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "Three.js", "GSAP"]
  },
  {
    title: "Airplane Management System",
    subtitle: "Aviation Operations Platform",
    date: "Dec 2024",
    description: "Developed a full-stack airline operations management system enabling admins to manage flights, routes, bookings, and passenger details. Implemented role‑based access control, CRUD operations for flights and users, and reservation handling using a relational database for storage.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind CSS", "Stripe"]
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-display text-4xl md:text-5xl mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>
        
        <div className="grid gap-8 md:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`glass-card p-8 rounded-2xl hover-lift transition-all duration-500 ${
                project.featured ? 'glass-card-purple' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                {/* Project Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar size={16} className="text-primary" />
                    <span className="text-sm text-muted-foreground">{project.date}</span>
                    {project.featured && (
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs rounded-full">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-display text-2xl md:text-3xl mb-2 text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-lg text-primary mb-4">{project.subtitle}</p>
                  
                  <p className="text-glass-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-lg border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Button */}
                  <Button 
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 hover-glow"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    View Project
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;