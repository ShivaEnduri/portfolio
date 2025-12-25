const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12 sm:py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">

          {/* BRAND SECTION */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4 sm:mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl rotate-45 flex items-center justify-center">
                <span className="text-white font-bold text-lg -rotate-45">
                  SK
                </span>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">Shiva Kumar Enduri</h3>
                <p className="text-sm sm:text-base text-gray-400">Full Stack Developer</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm sm:text-base mb-6 sm:mb-8 leading-relaxed">
              Full Stack Developer specializing in building scalable, production-ready web applications
              using React, Node.js, and modern backend architectures.
            </p>

            <div className="flex space-x-4">
              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/shiva-kumar-enduri-450769229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 transition-all duration-300"
              >
                <i className="ri-linkedin-line text-lg group-hover:text-white transition-colors" />
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/ShivaEnduri"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 transition-all duration-300"
              >
                <i className="ri-github-line text-lg group-hover:text-white transition-colors" />
              </a>

              {/* EMAIL */}
              <a
                href="mailto:shivakumar52616@gmail.com"
                className="group w-11 h-11 border-2 border-gray-600 rounded-xl flex items-center justify-center hover:border-cyan-400 hover:bg-cyan-400 transition-all duration-300"
              >
                <i className="ri-mail-line text-lg group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4 sm:mb-6 uppercase tracking-wider text-sm">
              Quick Links
            </h4>
            <div className="space-y-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Skills', href: '#skills' },
                { label: 'Case Studies', href: '#case-studies' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* FEATURED PROJECT */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="text-white font-semibold mb-4 sm:mb-6 uppercase tracking-wider text-sm">
              Featured Project
            </h4>

            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-5 border border-gray-700">
              <p className="text-cyan-400 font-semibold mb-2">Rufrent.com</p>
              <p className="text-gray-400 text-sm mb-4">
                Multi-vertical real-estate platform (Rentals, Studio, PG) with modular backend architecture
                and role-based dashboards.
              </p>

              <a
                href="https://www.rufrent.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold flex items-center"
              >
                View Live Project
                <i className="ri-arrow-right-line ml-1" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
            © {new Date().getFullYear()} Shiva Kumar Enduri. All rights reserved.
          </p>

          <p className="text-gray-500 text-xs sm:text-sm">
            Built with React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
