import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/DawoodHussain-Repo",
      color: "hover:bg-purple-500 text-black bg-purple-600 hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/dawood-hussain-6a800622a/",
      color: "hover:bg-purple-500 text-black bg-purple-600 hover:text-white",
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:dawood90999@gmail.com",
      color: "hover:bg-purple-500 text-black bg-purple-600 hover:text-white",
    },
  ];

  return (
    <footer
      id="contact"
      className="py-16 px-6 bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        {/* Contact Section */}
        <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-8 shadow-sm">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-center tracking-tight">
            Let's <span className="text-purple-600">Connect</span>
          </h2>
          <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on
            interesting projects, or just have a conversation about technology
            and innovation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Email */}
            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                <Mail
                  size={28}
                  className="text-purple-600 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                Email Me
              </h3>
              <p className="text-slate-600 text-sm mb-2">
                dawood90999@gmail.com
              </p>
              <a
                href="mailto:dawood90999@gmail.com"
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                Send Message
              </a>
            </div>

            {/* Phone */}
            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                <Phone
                  size={28}
                  className="text-purple-600 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                Call Me
              </h3>
              <p className="text-slate-600 text-sm mb-2">+92 3054449099</p>
              <a
                href="tel:+923001234567"
                className="text-purple-600 hover:text-purple-700 font-medium transition-colors"
              >
                Give a Call
              </a>
            </div>

            {/* Location */}
            <div className="bg-gradient-to-br from-purple-50 to-white border border-purple-200 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors duration-300">
                <MapPin
                  size={28}
                  className="text-purple-600 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">
                Visit Me
              </h3>
              <p className="text-slate-600 text-sm mb-2">Lahore, Pakistan</p>
              <span className="text-purple-600 font-medium">Available</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Follow My Journey
            </h3>
            <div className="flex justify-center items-center gap-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-full border-2 border-purple-600 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                  title={social.name}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="mb-4 md:mb-0">
              <p className="text-slate-700 font-medium">
                © {currentYear} Dawood Hussain. All rights reserved.
              </p>
              <p className="text-slate-500 text-sm">
                Built with React, TypeScript & Tailwind CSS
              </p>
            </div>
            <div className="text-slate-600">
              <p className="text-sm">Made with ❤️ and lots of ☕</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
