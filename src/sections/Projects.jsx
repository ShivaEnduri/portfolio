import React from 'react';
import rufrent from '../assets/rufrent.png'
import qtiminds from '../assets/qtiminds.png'
import portfolio from '../assets/portfolio.png'
const projects = [
  {
  title: 'Rufrent.com',
  description: 'A production-ready, multi-vertical real-estate platform (Rentals, Studio, PG) built to connect property owners and tenants. Implemented modular backend routing to forward API requests to vertical-specific services, role-based dashboards, advanced property search, and end-to-end listing management.',
  image: rufrent,
  liveUrl: 'https://www.rufrent.com/',
  tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'RBAC', 'REST APIs'],
  gradient: 'from-emerald-400 via-teal-500 to-cyan-600',
},
  {
  title: 'QTIMinds.in',
  description: 'Official corporate website for QTIMINDS, designed and developed with a focus on performance, responsiveness, and maintainable UI architecture. Built reusable React components, integrated backend APIs, and ensured SEO-friendly, mobile-first user experience.',
  image:qtiminds,
  liveUrl: 'https://qtiminds.in/',
  tags: ['React.js', 'Tailwind CSS', 'Responsive Design'],
  gradient: 'from-orange-400 via-red-500 to-pink-600',
},
  {
    title: 'Portfolio Projects',
    description: 'Explore more of my development work including web applications, API integrations, and full-stack solutions.',
    image: portfolio,
    liveUrl: '#projects',
    tags:  ['React.js', 'Tailwind CSS', 'Responsive Design'],
    gradient: 'from-violet-400 via-purple-500 to-indigo-600',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Latest</span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg">Showcasing my best development projects and live applications</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative transform transition-all duration-700 group-hover:scale-105">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-[1.5rem] sm:rounded-[2rem] rotate-3 opacity-20 group-hover:rotate-6 transition-all duration-500`}></div>
                <div className="relative bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-xl border border-gray-100">
                  <div className="relative overflow-hidden">
                    <img
  src={project.image}
  alt={project.title}
  className="w-full h-48 sm:h-56 lg:h-64 object-contain bg-gray-50 p-4 transition-transform duration-700 group-hover:scale-105"
/>

                   
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  </div>
                  <div className="p-4 sm:p-6 lg:p-8">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 sm:px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs sm:text-sm font-medium hover:bg-gray-200 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-0">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/link bg-gradient-to-r ${project.gradient} text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 hover:shadow-lg text-sm sm:text-base w-full sm:w-auto`}
                      >
                        View Live
                        <i className="ri-external-link-line ml-2 transition-transform group-hover/link:translate-x-1"></i>
                      </a>
                      <a href="#case-studies" className="text-gray-600 hover:text-gray-800 font-semibold text-sm sm:text-base">
                        Case Study →
                      </a>
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

export default Projects;