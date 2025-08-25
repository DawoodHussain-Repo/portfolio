import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background graphite-texture relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/10" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="glass-card-purple p-12 rounded-2xl animate-fade-in">
          {/* Main heading */}
          <h1 className="text-display text-6xl md:text-8xl mb-4 text-glow">
            DAWOOD
            <span className="block text-primary">HUSSAIN</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            FullStack Developer
          </p>
          
          {/* Contact info */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8 text-glass-foreground">
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-primary" />
              <span>dawood90999@gmail.com</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-primary" />
              <span>0305-4449099</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-primary" />
              <span>Islamabad</span>
            </div>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg hover-glow transition-all duration-300"
            >
              <Github className="mr-2" size={20} />
              View GitHub
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 rounded-lg hover-lift transition-all duration-300"
            >
              <ExternalLink className="mr-2" size={20} />
              Download CV
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-20 h-20 border border-primary/30 rounded-full animate-glow-pulse" />
      <div className="absolute bottom-32 right-32 w-16 h-16 border border-primary/20 rounded-lg rotate-45" />
    </section>
  );
};

export default Hero;