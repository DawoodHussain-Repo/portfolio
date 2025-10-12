import { Github, Linkedin, Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dawood90999@gmail.com",
      href: "mailto:dawood90999@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 305 4449099",
      href: "tel:+923054449099",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lahore, Pakistan",
      href: null,
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/DawoodHussain-Repo",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/dawood-hussain-6a800622a/",
    },
  ];

  return (
    <footer id="contact" className="section-padding section-bg border-t border-slate-200 dark:border-slate-800">
      <div className="container-custom">
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 dark:text-white mb-6 text-balance">
            Let's work together
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 text-balance">
            I'm always excited to discuss new opportunities and collaborate on interesting projects
          </p>
          
          <a
            href="mailto:dawood90999@gmail.com"
            className="inline-flex items-center gap-2 purple-button px-8 py-4 text-lg font-semibold group"
          >
            Get in Touch
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.div
                key={contact.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-3" />
                <div className="text-sm text-slate-500 dark:text-slate-500 mb-1">
                  {contact.label}
                </div>
                {contact.href ? (
                  <a
                    href={contact.href}
                    className="text-slate-900 dark:text-white font-medium hover:text-primary transition-colors"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <div className="text-slate-900 dark:text-white font-medium">
                    {contact.value}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-sm text-slate-600 dark:text-slate-400">
              © {currentYear} Dawood Hussain. All rights reserved.
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                    title={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>

            {/* Built with */}
            <div className="text-sm text-slate-600 dark:text-slate-400">
              Built with React & TypeScript
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
