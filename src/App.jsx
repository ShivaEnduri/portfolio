import React from 'react';
import './index.css';  // Tailwind styles
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import CaseStudies from './sections/CaseStudies.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans overflow-x-hidden">
      {/* Fixed background gradients from HTML */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div 
          className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-cyan-200/30 to-teal-200/30 rounded-full blur-3xl" 
          style={{ left: '-104px', top: '-97px', transition: '0.3s ease-out' }}
        ></div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CaseStudies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;