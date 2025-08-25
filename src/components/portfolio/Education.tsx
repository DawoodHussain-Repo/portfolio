import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-display text-4xl md:text-5xl mb-12 text-center">
          <span className="text-primary">Education</span>
        </h2>
        
        <div className="glass-card p-8 rounded-2xl animate-fade-in">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
              <GraduationCap size={32} className="text-primary" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-display text-2xl md:text-3xl mb-2">
                Bachelor of Software Engineering
              </h3>
              
              <p className="text-lg text-primary mb-3">
                National University of Computing and Emerging Sciences
              </p>
              
              <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>Sept 2022 - Sept 2026 (Anticipated)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award size={16} />
                  <span>Current CGPA: 3.16</span>
                </div>
              </div>
              
              <p className="text-glass-foreground">
                Major in International Business with a focus on software engineering principles, 
                algorithms, and modern web development technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;