
import React from "react";


const skills = [
  { name: 'React.js', icon: 'ri-reactjs-line', percent: 90, gradient: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', icon: 'ri-nodejs-line', percent: 85, gradient: 'from-green-400 to-emerald-500' },
  { name: 'Express.js', icon: 'ri-server-line', percent: 85, gradient: 'from-gray-400 to-gray-600' },
  { name: 'MySQL', icon: 'ri-database-2-line', percent: 90, gradient: 'from-orange-400 to-red-500' },
  { name: 'JavaScript', icon: 'ri-javascript-line', percent: 90, gradient: 'from-yellow-400 to-orange-500' },
  { name: 'HTML5', icon: 'ri-html5-line', percent: 95, gradient: 'from-red-400 to-pink-500' },
  { name: 'CSS3', icon: 'ri-css3-line', percent: 90, gradient: 'from-blue-400 to-indigo-500' },
  { name: 'Git', icon: 'ri-git-branch-line', percent: 85, gradient: 'from-purple-400 to-pink-500' },
  { name: 'REST APIs', icon: 'ri-links-line', percent: 85, gradient: 'from-teal-400 to-cyan-500' },
  { name: 'Tailwind CSS', icon: 'ri-palette-line', percent: 90, gradient: 'from-sky-400 to-blue-500' },
  { name: 'Zustand', icon: 'ri-refresh-line', percent: 85, gradient: 'from-violet-400 to-purple-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Technical Arsenal
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Skills &amp;</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} rounded-2xl sm:rounded-3xl rotate-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110`}></div>
                <div className="relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 text-center shadow-lg border border-gray-100 transform group-hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <i className={`${skill.icon} text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-br ${skill.gradient} bg-clip-text text-transparent`}></i>
                  </div>
                  <h3 className="text-gray-900 font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4">{skill.name}</h3>
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        strokeDasharray={`${skill.percent}, 100`}
                        className="transition-all duration-1000 ease-out"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#06b6d4" />
                          <stop offset="100%" stopColor="#14b8a6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs sm:text-sm font-bold text-gray-700">{skill.percent}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;