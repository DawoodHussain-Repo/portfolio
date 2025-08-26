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
              <p className="text-xs text-slate-500">
                Available 24/7 for inquiries
              </p>
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
              <p className="text-slate-600 text-sm mb-2">+92 305-4449099</p>
              <p className="text-xs text-slate-500">
                Available Mon-Fri, 9AM-6PM PKT
              </p>
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
              <p className="text-slate-600 text-sm mb-2">Islamabad, Pakistan</p>
              <p className="text-xs text-slate-500">
                Open to remote & on-site work
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">
              Follow My Journey
            </h3>
            <div className="flex justify-center items-center gap-6">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-white border-2 border-purple-200 p-4 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} hover:border-purple-600`}
                    aria-label={social.name}
                  >
                    <IconComponent size={24} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-slate-600 text-sm">
                © {currentYear} Dawood Hussain. All rights reserved.
              </p>
              <p className="text-slate-500 text-xs mt-1">
                Crafted with modern web technologies & clean design
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-purple-600">DH</div>
              <div className="w-px h-8 bg-slate-200" />
              <div className="text-sm text-slate-500">Software Engineer</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
