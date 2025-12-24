import React from 'react';
import rufrent from '../assets/caseStudy1.png'
import qtiminds from '../assets/caseStudy2.png'
const caseStudies = [
  {
  title: 'Rufrent',
  subtitle: 'Marketplace',
  challenge:
    'Design and build a scalable real-estate platform that supports multiple business verticals (Rentals, Studio, PG) while handling different user roles, permissions, and workflows without duplicating backend logic.',
  solution:
    'Built a full-stack application using React.js, Node.js, Express.js, and MySQL. Implemented a modular backend routing / gateway layer to forward API requests to vertical-specific services, enabling clean separation of concerns and better scalability. Developed role-based dashboards (Admin, RM, FM, Vendor, Site Manager) using RBAC, designed REST APIs with JWT authentication, and contributed architectural and UI/UX improvements to enhance maintainability and performance.',
  stats: [
    { value: 'Scalable', label: 'Multi-Vertical Architecture', gradient: 'from-emerald-400 to-teal-500' },
    { value: 'RBAC', label: 'Secure Role Access', gradient: 'from-cyan-400 to-blue-500' },
    { value: 'Live', label: 'Production Platform', gradient: 'from-orange-400 to-red-500' },
  ],
  tags: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'RBAC', 'REST APIs'],
  liveUrl: 'https://www.rufrent.com/',
  image: rufrent,
  bgGradient: 'from-emerald-50 to-teal-50',
  accentGradient: 'from-emerald-500 to-teal-500',
},

 {
  title: 'QTIMinds',
  subtitle: 'Corporate Website',
  challenge:
    'Create a modern, responsive corporate website that clearly communicates company services and values while maintaining clean UI architecture, performance, and cross-device compatibility.',
  solution:
    'Designed and developed the QTIMINDS corporate website using React.js and Tailwind CSS with a component-driven approach. Built reusable UI components, optimized layouts for mobile-first responsiveness, and ensured SEO-friendly structure and fast load times. Collaborated with stakeholders to translate business requirements into clean, maintainable frontend solutions.',
  stats: [
    { value: 'Responsive', label: 'Mobile-First Design', gradient: 'from-orange-400 to-red-500' },
    { value: 'Reusable', label: 'Component-Based UI', gradient: 'from-emerald-400 to-green-500' },
    { value: 'Live', label: 'Production Website', gradient: 'from-cyan-400 to-blue-500' },
  ],
  tags: ['React.js', 'Tailwind CSS', 'Responsive Design'],
  liveUrl: 'https://qtiminds.in/',
  image: qtiminds,
  bgGradient: 'from-orange-50 to-red-50',
  accentGradient: 'from-orange-500 to-red-500',
  reverse: true,
},
];

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-12 sm:py-16 lg:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            Deep Dive
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">Case</span>
            <br />
            <span className="bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent">Studies</span>
          </h2>
        </div>

        {caseStudies.map((study, index) => (
          <div
            key={study.title}
            className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20 ${study.reverse ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="space-y-6 sm:space-y-8">
              <div className={`inline-block bg-gradient-to-r ${study.reverse ? 'from-orange-100 to-red-100 text-orange-800' : 'from-emerald-100 to-teal-100 text-emerald-800'} px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold`}>
                {study.reverse ? 'Corporate Website' : 'E-Commerce Platform'}
              </div>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                <span className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">{study.title}</span>
                <br />
                <span className={`bg-gradient-to-r ${study.accentGradient} bg-clip-text text-transparent`}>{study.subtitle}</span>
              </h3>

              <div className="space-y-4 sm:space-y-6 text-gray-700">
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center text-sm sm:text-base">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-red-400 to-pink-500 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <i className="ri-error-warning-line text-white text-xs sm:text-sm"></i>
                    </div>
                    Challenge
                  </h4>
                  <p className="text-sm sm:text-base">{study.challenge}</p>
                </div>
                <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center text-sm sm:text-base">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                      <i className="ri-lightbulb-line text-white text-xs sm:text-sm"></i>
                    </div>
                    Solution
                  </h4>
                  <p className="text-sm sm:text-base">{study.solution}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 text-center shadow-lg border border-gray-100">
                      <div className={`text-lg sm:text-2xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>{stat.value}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                {study.tags.map((tag) => (
                  <span key={tag} className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${study.reverse ? 'bg-orange-100 text-orange-800' : 'bg-emerald-100 text-emerald-800'}`}>
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={study.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center justify-center bg-gradient-to-r ${study.accentGradient} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 hover:shadow-xl transform hover:scale-105 text-sm sm:text-base w-full sm:w-auto`}
              >
                View Live Project
                <i className="ri-external-link-line ml-2 transition-transform group-hover:translate-x-1"></i>
              </a>
            </div>

            <div className="relative">
              <div className={`absolute ${study.reverse ? '-top-4 -right-4 sm:-top-8 sm:-right-8' : '-top-4 -left-4 sm:-top-8 sm:-left-8'} w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${study.reverse ? 'from-orange-200 to-red-200' : 'from-emerald-200 to-teal-200'} rounded-[1.5rem] sm:rounded-[2rem] ${study.reverse ? '-rotate-12' : 'rotate-12'} opacity-50`}></div>
              <div className={`relative bg-gradient-to-br ${study.bgGradient} rounded-[2rem] sm:rounded-[3rem] p-4 sm:p-8 shadow-2xl`}>
                <img alt={`${study.title} Platform Mockup`} className="w-full rounded-xl sm:rounded-2xl shadow-xl" src={study.image} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;