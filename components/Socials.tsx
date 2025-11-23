import React from 'react';
import { Youtube, Facebook, Instagram, Linkedin, Twitter, Video } from 'lucide-react';
import { SOCIALS } from '../constants';

const Socials: React.FC = () => {
  
  // Helper to render the correct icon based on the string name in constants
  const renderIcon = (iconName: string) => {
    switch(iconName) {
      case 'Youtube': return <Youtube size={32} />;
      case 'Facebook': return <Facebook size={32} />;
      case 'Instagram': return <Instagram size={32} />;
      case 'Linkedin': return <Linkedin size={32} />; // Using for TikTok placeholder
      default: return <Video size={32} />;
    }
  };

  return (
    <section id="socials" className="py-24 max-w-7xl mx-auto px-6 bg-navy-900">
      <div className="flex items-center gap-4 mb-12 justify-center">
        <div className="h-px bg-navy-700 w-12 md:w-24"></div>
        <span className="text-electric font-heading text-xl font-bold">03.</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-white text-center">Connect with Me Online</h2>
        <div className="h-px bg-navy-700 w-12 md:w-24"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {SOCIALS.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-8 bg-navy-800 rounded-lg border border-navy-700 hover:border-electric hover:-translate-y-1 transition-all duration-300 group"
          >
            <div className="text-slate-light group-hover:text-electric transition-colors mb-3">
              {renderIcon(social.iconName)}
            </div>
            <span className="text-slate-white font-medium group-hover:text-electric">
              {social.name}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Socials;