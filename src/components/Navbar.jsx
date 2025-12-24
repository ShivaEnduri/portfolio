import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-white/80 backdrop-blur-xl border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-2xl rotate-45 flex items-center justify-center">
                  <span className="text-white font-bold text-base sm:text-lg -rotate-45">SK</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-orange-400 to-red-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-lg text-gray-500 sm:text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Shiva Kumar Enduri
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="relative text-gray-700 hover:text-cyan-600 transition-all duration-300 group text-sm lg:text-base"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-teal-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700 hover:text-cyan-600 p-2 rounded-lg hover:bg-gray-100/50"
            >
              <i className={`ri-${isOpen ? 'close' : 'menu'}-line text-xl transition-transform duration-300`}></i>
            </button>
          </div>
        </div>

        
        {/* Mobile Menu */}
<div
  className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
    isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
  }`}
  onClick={() => setIsOpen(false)} // close on anywhere click
>
  {/* Slide-out panel */}
  <div
    className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-500 ease-out ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
    onClick={(e) => e.stopPropagation()} 
  >
    <div className="p-6 pt-20 h-full flex flex-col justify-between">
      {/* Menu Header */}
      <div>
        <div className="flex items-center space-x-2 mb-4 pb-2 border-b border-gray-200">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl rotate-45 flex items-center justify-center">
            <span className="text-white font-bold text-sm -rotate-45">SK</span>
          </div>
          <span className="text-lg font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Menu
          </span>
        </div>

        {/* Nav Links */}
        <div className="space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)} // close on link click
              className="group block w-full text-left p-1 rounded-2xl hover:bg-gradient-to-r hover:from-cyan-50 hover:to-teal-50 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-800 group-hover:text-cyan-800 font-medium text-lg truncate">
                  {link.name}
                </span>
                <i className="ri-arrow-right-line text-gray-800 group-hover:text-cyan-500 transition-transform duration-300 group-hover:translate-x-1"></i>
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  </div>
</div>

      </nav>
    </>
  );
};

export default Navbar;