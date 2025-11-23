import React from 'react';
import { Target } from 'lucide-react';
import { PERSONAL_INFO, FOCUS_AREAS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-electric font-heading text-xl md:text-2xl font-bold">01.</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-white">About Me</h2>
        <div className="h-px bg-navy-700 flex-grow max-w-xs ml-4"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        {/* Text Content */}
        <div className="md:col-span-2 space-y-6 text-slate-light text-lg leading-relaxed">
          {PERSONAL_INFO.aboutText.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
          
          <div className="pt-6">
            <h3 className="text-slate-white font-heading font-bold mb-4">Key Focus Areas</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FOCUS_AREAS.map((area) => (
                <li key={area.id} className="flex items-center gap-2 text-sm">
                  <Target size={14} className="text-electric" />
                  <span>{area.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Secondary Image or Graphic */}
        <div className="relative group">
           <div className="w-full h-full min-h-[300px] bg-navy-800 rounded flex items-center justify-center border border-navy-700 relative overflow-hidden">
             {/* 
                REPLACE SRC BELOW WITH 'profile.jpg' OR ANOTHER ACTION SHOT
             */}
             <img 
               src="https://picsum.photos/300/400" 
               alt="Working on AI" 
               className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
             />
             <div className="absolute inset-0 bg-navy-900/40 group-hover:bg-transparent transition-colors"></div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default About;