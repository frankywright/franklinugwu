import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center bg-navy-900 text-slate-light text-sm">
      <div className="max-w-7xl mx-auto px-6">
        <p className="mb-2">{PERSONAL_INFO.footerText}</p>
        <p className="text-xs text-slate-500 font-mono">{PERSONAL_INFO.footerNote}</p>
      </div>
    </footer>
  );
};

export default Footer;