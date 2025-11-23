import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Socials from './components/Socials';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-navy-900 min-h-screen text-slate-light font-sans selection:bg-electric selection:text-navy-900">
      <Navbar />
      
      <main className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Socials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;