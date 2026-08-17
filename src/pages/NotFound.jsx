import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main className="page-wrapper flex-grow flex flex-col items-center justify-center py-12 md:py-20 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-digital-glow opacity-20 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#EAD7BB] opacity-15 blur-[100px] rounded-full pointer-events-none z-0" />

      <div className="max-w-4xl w-full mx-auto text-center relative z-10 flex flex-col items-center gap-8">
        
        {/* Badge 404 */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#2c7da0]/20 shadow-sm text-[#2c7da0] font-label-sm uppercase tracking-wider">
          <span className="w-2 h-2 rounded-full bg-[#468FAF] animate-pulse" />
          <span>Erreur 404 — Page introuvable</span>
        </div>

        {/* Custom Zen Illustration: Galets d'équilibre & Ondes numériques */}
        <div className="relative w-full max-w-sm mx-auto h-56 flex items-center justify-center my-2">
          {/* Subtle Background SVG Ripples */}
          <svg className="absolute inset-0 w-full h-full text-[#468FAF]/15 pointer-events-none" viewBox="0 0 400 240" fill="none">
            <ellipse cx="200" cy="180" rx="180" ry="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
            <ellipse cx="200" cy="180" rx="130" ry="28" stroke="currentColor" strokeWidth="1" />
            <ellipse cx="200" cy="180" rx="70" ry="16" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          {/* Zen Pebble Stack Vector (Galets Zen) */}
          <svg className="relative z-10 w-64 h-52 drop-shadow-xl" viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="pebbleGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2c7da0" />
                <stop offset="100%" stopColor="#006485" />
              </linearGradient>
              <linearGradient id="pebbleGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#468FAF" />
                <stop offset="100%" stopColor="#2c7da0" />
              </linearGradient>
              <linearGradient id="pebbleGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#89C2D9" />
                <stop offset="100%" stopColor="#468FAF" />
              </linearGradient>
              <linearGradient id="glowDot" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#EAD7BB" />
                <stop offset="100%" stopColor="#89C2D9" />
              </linearGradient>
            </defs>

            {/* Base Ripple Water Drop Shadow */}
            <ellipse cx="150" cy="205" rx="90" ry="12" fill="#2c7da0" fillOpacity="0.1" />

            {/* Bottom Pebble (Large) */}
            <path d="M 60 185 C 60 160, 240 160, 240 185 C 240 210, 60 210, 60 185 Z" fill="url(#pebbleGrad1)" />
            <ellipse cx="150" cy="180" rx="85" ry="14" fill="#ffffff" fillOpacity="0.15" />

            {/* Middle Pebble */}
            <path d="M 90 135 C 90 115, 210 115, 210 135 C 210 155, 90 155, 90 135 Z" fill="url(#pebbleGrad2)" />
            <ellipse cx="150" cy="130" rx="55" ry="10" fill="#ffffff" fillOpacity="0.2" />

            {/* Top Pebble (Small) */}
            <path d="M 115 90 C 115 75, 185 75, 185 90 C 185 105, 115 105, 115 90 Z" fill="url(#pebbleGrad3)" />
            <ellipse cx="150" cy="86" rx="32" ry="7" fill="#ffffff" fillOpacity="0.3" />

            {/* Glowing Zen Lotus Spark / Energy Orb on Top */}
            <circle cx="150" cy="50" r="12" fill="url(#glowDot)" className="animate-pulse" />
            <circle cx="150" cy="50" r="20" stroke="#89C2D9" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.7" />

            {/* Elegant 404 Watermark integrated in the Zen vector */}
            <text x="150" y="193" textAnchor="middle" fill="#FAF7F0" fillOpacity="0.25" fontSize="22" fontWeight="800" fontFamily="Manrope, sans-serif" letterSpacing="4">
              404
            </text>
          </svg>
        </div>

        {/* Message Headings */}
        <div className="flex flex-col items-center gap-3">
          <h1 className="text-3xl md:text-5xl font-bold text-[#2c7da0] leading-tight">
            Oups... Ce chemin semble s'être évaporé.
          </h1>
          <p className="font-headline text-2xl md:text-3xl text-[#468FAF] italic font-normal" style={{ fontFamily: '"Alex Brush", cursive' }}>
            "Prenez une grande respiration, la sérénité n'est qu'à un clic."
          </p>
          <p className="font-body-md text-[#2c7da0]/80 max-w-lg mt-2 leading-relaxed">
            La page que vous recherchez n'existe pas ou a été déplacée. Pas d'inquiétude, vous pouvez retourner facilement à l'accueil ou explorer nos rubriques ci-dessous.
          </p>
        </div>

        {/* Primary Action Button */}
        <div className="mt-2">
          <Link
            to="/"
            className="btn-primary text-base px-8 py-4 rounded-xl flex items-center gap-3 group animate-zen-pulse shadow-lg hover:shadow-2xl transition-all"
          >
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">
              home
            </span>
            <span>Retour à l'accueil</span>
          </Link>
        </div>

        {/* Secondary Navigation Section ("Raccourcis Zen") */}
        <div className="w-full mt-8 pt-8 border-t border-[#2c7da0]/15">
          <h2 className="font-label-md text-xs uppercase tracking-widest text-[#2c7da0]/60 mb-6 font-semibold">
            Poursuivez votre navigation zen
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {/* Card 1: Services */}
            <Link
              to="/services"
              className="card-zen p-5 rounded-2xl flex flex-col gap-2 hover:border-[#2c7da0]/30 transition-all group no-underline"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2c7da0]/10 text-[#2c7da0] flex items-center justify-center group-hover:bg-[#2c7da0] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">design_services</span>
              </div>
              <h3 className="font-headline text-lg font-semibold text-[#2c7da0] group-hover:text-[#006485]">
                Nos Services
              </h3>
              <p className="font-body-md text-xs text-[#2c7da0]/75 leading-relaxed">
                Accompagnement digital sur-mesure et conseils personnalisés.
              </p>
            </Link>

            {/* Card 2: À Propos */}
            <Link
              to="/a-propos"
              className="card-zen p-5 rounded-2xl flex flex-col gap-2 hover:border-[#2c7da0]/30 transition-all group no-underline"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2c7da0]/10 text-[#2c7da0] flex items-center justify-center group-hover:bg-[#2c7da0] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">person</span>
              </div>
              <h3 className="font-headline text-lg font-semibold text-[#2c7da0] group-hover:text-[#006485]">
                À Propos
              </h3>
              <p className="font-body-md text-xs text-[#2c7da0]/75 leading-relaxed">
                Découvrez notre philosophie et notre approche humaine.
              </p>
            </Link>

            {/* Card 3: Contact */}
            <Link
              to="/contact"
              className="card-zen p-5 rounded-2xl flex flex-col gap-2 hover:border-[#2c7da0]/30 transition-all group no-underline"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2c7da0]/10 text-[#2c7da0] flex items-center justify-center group-hover:bg-[#2c7da0] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <h3 className="font-headline text-lg font-semibold text-[#2c7da0] group-hover:text-[#006485]">
                Contact & RDV
              </h3>
              <p className="font-body-md text-xs text-[#2c7da0]/75 leading-relaxed">
                Une question ? Contactez-nous ou prenez rendez-vous.
              </p>
            </Link>

            {/* Card 4: Blog */}
            <Link
              to="/blog"
              className="card-zen p-5 rounded-2xl flex flex-col gap-2 hover:border-[#2c7da0]/30 transition-all group no-underline"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2c7da0]/10 text-[#2c7da0] flex items-center justify-center group-hover:bg-[#2c7da0] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined">article</span>
              </div>
              <h3 className="font-headline text-lg font-semibold text-[#2c7da0] group-hover:text-[#006485]">
                Notre Blog
              </h3>
              <p className="font-body-md text-xs text-[#2c7da0]/75 leading-relaxed">
                Conseils, astuces et réflexions sur la sobriété numérique.
              </p>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}
