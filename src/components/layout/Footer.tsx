import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/DawoodHussain-Repo",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://linkedin.com/in/dawood-hussain",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:dawood90999@gmail.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <footer id="contact" className="py-12 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Contact Section */}
        <div className="glass-card backdrop-blur-xl bg-glass-background/20 border border-glass-border/30 rounded-2xl p-8 mb-8">
          <h2 className="text-display text-4xl md:text-5xl mb-8 text-center">
            Let's <span className="text-primary">Connect</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Email */}
            <div className="glass-card backdrop-blur-xl bg-glass-background/10 border border-glass-border/20 p-6 rounded-xl text-center hover-lift">
              <Mail size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-glass-foreground text-sm">dawood90999@gmail.com</p>
            </div>
            
            {/* Phone */}
            <div className="glass-card backdrop-blur-xl bg-glass-background/10 border border-glass-border/20 p-6 rounded-xl text-center hover-lift">
              <Phone size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-glass-foreground text-sm">0305-4449099</p>
            </div>
            
            {/* Location */}
            <div className="glass-card backdrop-blur-xl bg-glass-background/10 border border-glass-border/20 p-6 rounded-xl text-center hover-lift">
              <MapPin size={32} className="text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Location</h3>
              <p className="text-glass-foreground text-sm">Islamabad, Pakistan</p>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center items-center gap-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glass-card backdrop-blur-xl bg-glass-background/10 border border-glass-border/20 p-4 rounded-xl transition-all duration-500 hover-lift hover-glow ${social.color}`}
                  aria-label={social.name}
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="glass-card backdrop-blur-xl bg-glass-background/10 border border-glass-border/20 rounded-xl p-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-glass-foreground text-sm">
                © {currentYear} Dawood Hussain. All rights reserved.
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Crafted with modern web technologies & glassmorphism design
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-primary">DH</div>
              <div className="w-px h-8 bg-glass-border" />
              <div className="text-sm text-muted-foreground">
                Software Engineer
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;