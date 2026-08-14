import React from 'react';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../context/CookieContext';

export default function Footer() {
  const { openPreferences } = useCookieConsent();

  return (
    <footer className="w-full flex flex-col items-center gap-8 py-16 px-margin-mobile border-t border-[#2c7da0]/10 relative z-10 mb-16 md:mb-0 bg-white/30 backdrop-blur-sm">
      <div className="font-headline-lg text-[#2c7da0] text-xl font-bold tracking-widest uppercase flex items-center gap-4">
        <span className="w-8 h-[1px] bg-[#2c7da0]/30 inline-block"></span> Digital Zen <span className="w-8 h-[1px] bg-[#2c7da0]/30 inline-block"></span>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <Link className="font-label-sm text-[11px] tracking-widest uppercase text-[#2c7da0]/70 hover:text-[#2c7da0] transition-colors" to="/mentions-legales">RGPD</Link>
        <Link className="font-label-sm text-[11px] tracking-widest uppercase text-[#2c7da0]/70 hover:text-[#2c7da0] transition-colors" to="/cgv">CGV</Link>
        <Link className="font-label-sm text-[11px] tracking-widest uppercase text-[#2c7da0]/70 hover:text-[#2c7da0] transition-colors" to="/contact">Contact</Link>
        <button
          onClick={openPreferences}
          className="font-label-sm text-[11px] tracking-widest uppercase text-[#2c7da0]/70 hover:text-[#2c7da0] transition-colors bg-transparent border-none p-0 cursor-pointer flex items-center gap-1"
        >
          <span className="material-symbols-outlined text-sm">cookie</span>
          Gestion des cookies
        </button>
      </div>
      <p className="font-body-md text-xs tracking-widest uppercase text-[#2c7da0]/50 text-center">
        © 2026 Digital Zen - Simple, Humain, Adapté<br />
        MADE WITH {' '}
        <picture className="inline-block align-middle">
          <img
            alt="💙"
            className="animate-heart-beat align-middle inline-block"
            height="16"
            width="16"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUUzvh_1XuTG9bhL6HCxDbn1qlLDxS-UZ6KwLkJGX34TbdmZXcqqSifLiqcaoo47VDQue25QRV4Cwo1rob3KxROS8HJSDQkusySEQH9rZCiK7XA0D46Rhhd77-Qq_AEEku3YOA4eZdJcThuRPSBFIJyTtw0UF_SNPJfyTpsO4q3Exm8unjpR0xO24It1n9VroHE_vfXhbkD6hyi_aV7mtubr58pujGFwqvjXJ86Rhcqf6F3gIhjB8JPQ"
          />
        </picture>
      </p>
    </footer>
  );
}
