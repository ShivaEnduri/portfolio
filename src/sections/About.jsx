import React from 'react';
import myImage from '../assets/myPicture.png'
const About = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-[3rem] sm:rounded-[4rem] rotate-6 opacity-20"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-[2.5rem] sm:rounded-[3.5rem] -rotate-3 opacity-30"></div>
                <div className="absolute inset-4 bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl overflow-hidden">
                  <img
                    alt="Developer Profile"
                    className="w-full h-full object-cover"
                    src= {myImage}
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center space-x-4 sm:space-x-6 mt-6 sm:mt-8">
              <div className="group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <i className="ri-reactjs-line text-lg sm:text-2xl text-white"></i>
                </div>
              </div>
              <div className="group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <i className="ri-nodejs-line text-lg sm:text-2xl text-white"></i>
                </div>
              </div>
              <div className="group">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <i className="ri-database-2-line text-lg sm:text-2xl text-white"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-block bg-gradient-to-r from-cyan-100 to-teal-100 text-cyan-800 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
              About Me
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8">
              <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Building Scalable</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">Web Solutions</span>
            </h2>

           <div className="space-y-4 sm:space-y-6 text-gray-700 text-base sm:text-lg leading-relaxed">
  <p>
    I'm a <strong className="text-gray-900">Full Stack Developer</strong> with 1+ year of hands-on experience building
    scalable, production-ready web applications that solve real business problems. I enjoy working across the
    entire stack — from crafting clean, responsive user interfaces to designing robust backend systems.
  </p>

  <p>
    At QTIMINDS, I played a key role in building <strong className="text-gray-900">Rufrent</strong>, a multi-vertical
    platform supporting Rentals, Studio, and PG modules. I worked on both frontend and backend, including
    implementing a <strong className="text-gray-900">modular backend routing / gateway layer</strong> that forwards
    requests to vertical-specific services, helping reduce code duplication and improve scalability.
  </p>

  <p>
    My expertise includes <strong className="text-gray-900">React.js, Node.js, Express, and MySQL</strong>, along with
    role-based access control (RBAC), REST API design, and component-driven UI development. I also actively contribute
    architectural, feature, and UI/UX ideas to improve maintainability, performance, and overall product usability.
  </p>
</div>


            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-10">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center shadow-lg border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-teal-500 bg-clip-text text-transparent mb-2">10+</div>
                <div className="text-xs sm:text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center shadow-lg border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent mb-2">2</div>
                <div className="text-xs sm:text-sm text-gray-600">Live Production Sites</div>
              </div>
              <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-center shadow-lg border border-gray-100">
                <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-xs sm:text-sm text-gray-600">Full Stack Expertise</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;