import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-4 mb-12">
        <span className="text-electric font-heading text-xl md:text-2xl font-bold">02.</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-white">My Projects</h2>
        <div className="h-px bg-navy-700 flex-grow max-w-xs ml-4"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project) => (
          <div 
            key={project.id} 
            className="group bg-navy-800 rounded-lg p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-transparent hover:border-electric/30 flex flex-col h-full"
          >
            {/* Header: Icons and Links */}
            <div className="flex justify-between items-start mb-6">
              <Folder size={40} className="text-electric" />
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-light hover:text-electric transition-colors"
                aria-label={`Visit ${project.name}`}
              >
                <ExternalLink size={24} />
              </a>
            </div>

            {/* Content */}
            <h3 className="text-xl font-heading font-bold text-slate-white mb-2 group-hover:text-electric transition-colors">
              {project.name}
            </h3>
            
            <p className="text-xs font-bold text-slate-lighter mb-4 uppercase tracking-wide">
              {project.role}
            </p>

            <div className="bg-navy-900/50 p-4 rounded mb-4 flex-grow">
               <p className="text-slate-light text-sm leading-relaxed">
                 {project.description}
               </p>
            </div>

            {/* Tags/Category */}
            <div className="text-xs text-slate-500 font-mono mt-auto pt-4 border-t border-navy-700">
              {project.category}
            </div>
            
            <div className="mt-4">
               <a 
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-electric hover:underline"
               >
                 Visit website &rarr;
               </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;