import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'My Projects', href: '#projects' },
    { name: 'Socials', href: '#socials' },
    { name: 'Contact Me', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy-900/90 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo / Name */}
        <a href="#home" className="text-electric font-heading font-bold text-xl md:text-2xl tracking-tight hover:opacity-80 transition-opacity">
          FU<span className="text-slate-lighter">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href} 
              className="text-sm font-medium text-slate-light hover:text-electric transition-colors duration-300"
            >
              <span className="text-electric mr-1">0{index + 1}.</span> {link.name}
            </a>
          ))}
          <a 
             href="#projects"
             className="px-4 py-2 text-sm font-medium text-electric border border-electric rounded hover:bg-electric/10 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          className="md:hidden text-electric focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-navy-800 shadow-xl transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="flex flex-col px-6 py-4 space-y-4">
          {navLinks.map((link, index) => (
            <a 
              key={index}
              href={link.href}
              className="block text-slate-lighter hover:text-electric font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;