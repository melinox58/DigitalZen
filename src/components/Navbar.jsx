import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-soft-ivory/80 backdrop-blur-md flex justify-center items-center w-full px-margin-mobile py-4 top-0 sticky z-40 border-b border-[#2c7da0]/10">
      <div className="max-w-container-max w-full flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 no-underline">
          <span className="material-symbols-outlined text-3xl text-[#2c7da0]" style={{ fontVariationSettings: '"FILL" 1' }}>
            spa
          </span>
          <span className="font-headline-lg font-bold text-[#2c7da0]">Digital Zen</span>
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <Link to="/" className={`font-label-md text-label-md transition-colors ${isActive('/') ? 'text-[#2c7da0] font-bold' : 'text-[#2c7da0]/70 hover:text-primary'}`}>
            Accueil
          </Link>
          <Link to="/services" className={`font-label-md text-label-md transition-colors ${isActive('/services') ? 'text-[#2c7da0] font-bold' : 'text-[#2c7da0]/70 hover:text-primary'}`}>
            Services
          </Link>
          <Link to="/tarifs" className={`font-label-md text-label-md transition-colors ${isActive('/tarifs') ? 'text-[#2c7da0] font-bold' : 'text-[#2c7da0]/70 hover:text-primary'}`}>
            Tarifs
          </Link>
          <Link to="/parcours" className={`font-label-md text-label-md transition-colors ${isActive('/parcours') ? 'text-[#2c7da0] font-bold' : 'text-[#2c7da0]/70 hover:text-primary'}`}>
            À propos
          </Link>
          <Link to="/portfolio" className={`font-label-md text-label-md transition-colors ${isActive('/portfolio') ? 'text-[#2c7da0] font-bold' : 'text-[#2c7da0]/70 hover:text-primary'}`}>
            Portfolio
          </Link>
          <Link to="/blog" className={`font-label-md text-label-md transition-colors ${isActive('/blog') ? 'text-[#2c7da0] font-bold' : 'text-[#2c7da0]/70 hover:text-primary'}`}>
            Blog
          </Link>
          <Link to="/contact" className={`font-label-md text-label-md transition-colors ${isActive('/contact') ? 'text-[#2c7da0] font-bold' : 'text-[#2c7da0]/70 hover:text-primary'}`}>
            Contact
          </Link>
        </nav>

        <a
          className="bg-[#2c7da0] text-on-primary font-label-md px-6 py-3 rounded-full hover:shadow-[0_4px_20px_rgba(44,125,160,0.3)] transition-all min-h-[48px] animate-zen-pulse flex items-center justify-center"
          href="https://calendar.google.com/appointments/schedules/AcZssZ371T869AcbpAd0-bCO9XYPoFoDIHpxEz-LnqYFUvobvjTzM0X5Sm9ZBtNdxr-o8KBSPlYXyHXm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Prendre RDV
        </a>
      </div>
    </header>
  );
}
