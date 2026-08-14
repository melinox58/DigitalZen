import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="md:hidden fixed bottom-6 right-6 z-50 group flex flex-col items-end">
      <div
        className={`absolute bottom-full right-0 mb-4 flex flex-col gap-4 items-end transition-all duration-300 ease-out origin-bottom-right ${
          isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="bg-white/90 backdrop-blur-md rounded-full pl-5 pr-2 py-2 flex items-center gap-3 text-[#2c7da0] hover:text-primary shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-colors border border-white/50"
        >
          <span className="font-label-md font-semibold">Accueil</span>
          <div className="w-10 h-10 rounded-full bg-[#2c7da0]/10 flex items-center justify-center text-[#2c7da0]">
            <span className="material-symbols-outlined">home</span>
          </div>
        </Link>

        <Link
          to="/services"
          onClick={() => setIsOpen(false)}
          className="bg-white/90 backdrop-blur-md rounded-full pl-5 pr-2 py-2 flex items-center gap-3 text-[#2c7da0] hover:text-primary shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-colors border border-white/50"
        >
          <span className="font-label-md font-semibold">Services</span>
          <div className="w-10 h-10 rounded-full bg-[#2c7da0]/10 flex items-center justify-center text-[#2c7da0]">
            <span className="material-symbols-outlined">settings_suggest</span>
          </div>
        </Link>

        <Link
          to="/contact"
          onClick={() => setIsOpen(false)}
          className="bg-white/90 backdrop-blur-md rounded-full pl-5 pr-2 py-2 flex items-center gap-3 text-[#2c7da0] hover:text-primary shadow-[0_4px_15px_rgba(0,0,0,0.1)] transition-colors border border-white/50"
        >
          <span className="font-label-md font-semibold">Contact</span>
          <div className="w-10 h-10 rounded-full bg-[#2c7da0]/10 flex items-center justify-center text-[#2c7da0]">
            <span className="material-symbols-outlined">mail</span>
          </div>
        </Link>

        <a
          href="https://calendar.google.com/appointments/schedules/AcZssZ371T869AcbpAd0-bCO9XYPoFoDIHpxEz-LnqYFUvobvjTzM0X5Sm9ZBtNdxr-o8KBSPlYXyHXm"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setIsOpen(false)}
          className="bg-[#2c7da0]/90 backdrop-blur-md rounded-full pl-5 pr-2 py-2 flex items-center gap-3 text-white shadow-[0_4px_20px_rgba(44,125,160,0.3)] transition-colors border border-[#2c7da0]/50 animate-zen-pulse"
        >
          <span className="font-label-md font-semibold">Prendre RDV</span>
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white">
            <span className="material-symbols-outlined">event_available</span>
          </div>
        </a>
      </div>

      <button
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#2c7da0] to-primary-container text-white shadow-[0_0_25px_rgba(44,125,160,0.5)] border-2 border-white/20 flex items-center justify-center hover:scale-110 active:scale-95 transition-all relative overflow-hidden group-hover:rotate-90 z-10"
      >
        <div className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-out origin-center"></div>
        <span className="material-symbols-outlined text-3xl relative z-10">apps</span>
      </button>
    </nav>
  );
}
