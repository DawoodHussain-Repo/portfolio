import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-display text-4xl md:text-5xl mb-8">
          Let's <span className="text-primary">Connect</span>
        </h2>
        
        <p className="text-xl text-glass-foreground mb-12">
          Ready to bring your ideas to life? Let's discuss your next project.
        </p>
        
        <div className="glass-card-purple p-8 rounded-2xl animate-fade-in">
          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="glass-card p-6 rounded-xl hover-lift">
              <Mail size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-glass-foreground">dawood90999@gmail.com</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover-lift">
              <Phone size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-glass-foreground">0305-4449099</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl hover-lift">
              <MapPin size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-glass-foreground">Islamabad, Pakistan</p>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg hover-glow"
            >
              <Send className="mr-2" size={20} />
              Send Message
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 rounded-lg hover-lift"
              asChild
            >
              <a href="https://github.com/dawoodhussain90999" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                GitHub Profile
              </a>
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="border-primary/50 text-primary hover:bg-primary/10 px-8 py-3 rounded-lg hover-lift"
              asChild
            >
              <a href="https://www.linkedin.com/in/dawood-hussain-6a800622a/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2" size={20} />
                LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground">
            © 2025 Dawood Hussain. Crafted with passion and modern web technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;