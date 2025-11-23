import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHTS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Text */}
        <div className="space-y-6 animate-fade-in-up">
          <p className="text-electric font-medium tracking-wider">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-slate-white">
            {PERSONAL_INFO.name}.
          </h1>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-slate-light opacity-80">
            {PERSONAL_INFO.title}
          </h2>
          <p className="text-lg text-slate-light max-w-xl leading-relaxed">
            {PERSONAL_INFO.shortIntro}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#projects" 
              className="group flex items-center gap-2 px-6 py-3 bg-transparent border border-electric text-electric rounded font-medium hover:bg-electric/10 transition-all duration-300"
            >
              View My Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-6 py-3 bg-navy-700 text-slate-white rounded font-medium hover:bg-navy-600 transition-all duration-300"
            >
              Contact Me
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center md:justify-end relative group">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Decorative Border */}
            <div className="absolute inset-0 border-2 border-electric rounded-full translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
            {/* Image Container */}
            <div className="absolute inset-0 rounded-full overflow-hidden bg-navy-700 grayscale hover:grayscale-0 transition-all duration-500">
               {/* 
                  REPLACE THE SRC BELOW WITH 'profile.jpg' WHEN UPLOADING YOUR OWN IMAGE
                  Currently using a placeholder.
               */}
              <img 
                src="https://picsum.photos/400/400" 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Highlights Section */}
      <div className="max-w-7xl mx-auto px-6 mt-20 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {HIGHLIGHTS.map((item, idx) => (
            <div key={idx} className="bg-navy-800 p-4 rounded shadow-md border border-navy-700 hover:border-electric/50 transition-colors text-center md:text-left">
              <h3 className="text-electric font-bold text-sm md:text-base">{item.title}</h3>
              <p className="text-slate-light text-xs md:text-sm mt-1">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;