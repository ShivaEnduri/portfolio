import React from 'react';
import heroImg from '../assets/hero.png'
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
       <div className="order-2 md:order-1 space-y-6 sm:space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-100 to-teal-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6 border border-cyan-200/50">
            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full mr-2 sm:mr-3 animate-pulse"></div>
            <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-700 to-teal-700 bg-clip-text text-transparent">
              1+ Years Experience
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">Full Stack</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 bg-clip-text text-transparent animate-pulse">
              Developer
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
            Crafting scalable web applications with React.js, Node.js, and MySQL. Transforming ideas into powerful digital experiences with modern design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-105 hover:shadow-2xl text-center"
            >
              <span className="relative z-10 flex items-center justify-center">
                View Projects
                <i className="ri-arrow-right-line ml-2 transition-transform group-hover:translate-x-1"></i>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
            <a
              href="#contact"
              className="border-2 border-gray-300 hover:border-cyan-400 text-gray-700 hover:text-cyan-600 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold transition-all duration-300 text-center"
            >
              Get In Touch
            </a>
          </div>
        </div>

        <div className="relative mt-8 lg:mt-0">
          <div className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-3xl rotate-12 animate-float opacity-80"></div>
          <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl -rotate-12 animate-float opacity-80" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 -left-3 sm:-left-5 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full animate-float opacity-60" style={{ animationDelay: '2s' }}></div>

          <div className=" relative bg-white/60 backdrop-blur-sm rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-8 transform hover:scale-105 transition-all duration-700 shadow-2xl border border-white/50">
            <img
              alt="Development Workspace"
              className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-xl sm:rounded-2xl"
              src={heroImg}
            />
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-gradient-to-br from-cyan-500 to-teal-600 text-white p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-xl">
              <i className="ri-code-s-slash-line text-lg sm:text-2xl"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;