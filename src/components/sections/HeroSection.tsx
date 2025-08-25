import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-accent/5 to-primary/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary/5 to-transparent" />
        
        {/* Floating glassmorphic elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Graphite texture overlay */}
        <div className="absolute inset-0 graphite-texture opacity-40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Main Content */}
        <div className="space-y-8 animate-fade-in">
          {/* Name */}
          <h1 className="text-7xl md:text-9xl font-bold tracking-tight">
            <span className="text-foreground">DAWOOD</span>
            <br />
            <span className="text-primary text-glow">HUSSAIN</span>
          </h1>
          
          {/* Title */}
          <p className="text-2xl md:text-4xl text-muted-foreground font-light tracking-wide">
            Software Engineer <span className="text-primary">|</span> Student
          </p>
          
          {/* Description */}
          <p className="text-lg md:text-xl text-glass-foreground max-w-2xl mx-auto leading-relaxed">
            Crafting digital experiences with modern web technologies. 
            Passionate about creating scalable solutions that make a difference.
          </p>
          
          {/* CTA Button */}
          <div className="pt-8">
            <Button 
              size="lg"
              className="glass-button bg-glass-background/30 backdrop-blur-xl border border-primary/30 text-primary-foreground px-8 py-4 text-lg rounded-2xl hover:bg-primary/20 hover:border-primary/50 transition-all duration-500 hover-glow group"
            >
              <Download className="mr-3 group-hover:animate-bounce" size={24} />
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="glass-card p-3 rounded-full">
          <ChevronDown size={24} className="text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;