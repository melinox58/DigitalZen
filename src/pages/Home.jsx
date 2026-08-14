import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <main className="flex-grow pb-24 md:pb-0">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center overflow-hidden pt-10 md:pt-20 px-margin-mobile md:px-margin-desktop">
        {/* Logo Focal Point */}
        <div className="relative z-10 flex justify-center mb-12 w-full max-w-md mx-auto">
          <div className="absolute inset-0 bg-digital-glow opacity-10 blur-[100px] rounded-full w-3/4 h-3/4 m-auto"></div>
          <img
            alt="Logo Digital Zen - Accompagnement digital humain"
            className="w-full max-w-2xl h-auto px-margin-mobile md:px-0 mx-auto drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-700 ease-in-out"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeHJSy4Xw2Lcs12U2WG0bMaCHQuFVs-PRuNFIDYF60kNffeql8e1hP5i0AsSGR8TfXuiUxFeUg-6d6Wfssbb931vwyZhPDOYw3DlF-nBfab0WkpTv63VO8re3MDs9D1SqGDPTwxplO3NRncwj1hCrnzyEkIhtNRgJeOvIv60CLZBvc74M8NxB11N5usGvmnzX9PPk9D9w9tQlZgYxkOPJ0p-GmQ8vyVaIMPoQx2GI9cNKmKeShpzk9i70MKk-2bcK_194"
          />
        </div>

        <div className="relative z-10 max-w-container-max w-full flex flex-col md:flex-row items-center justify-center gap-gutter">
          {/* Text Content */}
          <div className="flex flex-col items-center text-center gap-6 max-w-2xl">
            <h1 className="text-[#2c7da0] text-4xl md:text-6xl font-bold leading-tight" style={{ fontFamily: '"Alex Brush", cursive' }}>
              <span className="a_GcMg font-feature-liga-off font-feature-clig-off font-feature-calt-off text-decoration-none text-strikethrough-none" style={{ color: 'rgba(33,80,143,1)', fontWeight: 400, fontStyle: 'normal' }}>
                " Parce que le numérique ne devrait jamais être un frein, mais un véritable atout<br />au quotidien."
              </span>
            </h1>

            <div className="relative w-full h-12 opacity-20 pointer-events-none z-0 -mt-8">
              <svg className="w-full h-full text-zen-teal fill-current" preserveAspectRatio="none" viewBox="0 0 1440 120">
                <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fillOpacity="1"></path>
              </svg>
            </div>

            <h2 className="font-body-lg text-[#2c7da0]/80 text-lg md:text-xl max-w-lg leading-relaxed">
              Accompagnement digital humain pour une transition fluide. Transformez votre anxiété technologique en atout stratégique.
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto justify-center">
              <a
                className="bg-[#2c7da0] text-on-primary font-label-md text-label-md px-8 py-4 rounded-xl hover:bg-surface-tint hover:shadow-[0_8px_30px_rgba(44,125,160,0.4)] transition-all duration-300 min-h-[48px] flex items-center justify-center gap-2 group animate-zen-pulse"
                href="https://calendar.google.com/appointments/schedules/AcZssZ371T869AcbpAd0-bCO9XYPoFoDIHpxEz-LnqYFUvobvjTzM0X5Sm9ZBtNdxr-o8KBSPlYXyHXm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prendre RDV
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform" data-icon="arrow_forward">arrow_forward</span>
              </a>

              <Link
                to="/services"
                className="bg-white/50 text-[#2c7da0] border border-[#2c7da0]/20 backdrop-blur-lg font-label-md text-label-md px-8 py-4 rounded-xl hover:bg-white/70 transition-all duration-300 min-h-[48px] flex items-center justify-center"
              >
                Découvrir notre approche
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Services Preview ("L'écosystème Zen") */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap relative z-10">
        <div className="text-center mb-12">
          <h3 className="font-headline-lg text-3xl font-bold text-[#2c7da0] mb-4">L'écosystème Zen</h3>
          <p className="font-body-md text-[#2c7da0]/80 max-w-2xl mx-auto">Des solutions conçues pour apaiser votre relation avec la technologie.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#2c7da0]/10 hover:shadow-[0_10px_40px_rgba(44,125,160,0.1)] transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#2c7da0]/10 flex items-center justify-center text-[#2c7da0] group-hover:bg-[#2c7da0] group-hover:text-white transition-colors">
              <span className="material-symbols-outlined" data-icon="handshake">handshake</span>
            </div>
            <h4 className="font-headline-lg text-xl font-semibold text-[#2c7da0]">Accompagnement</h4>
            <p className="font-body-md text-[#2c7da0]/80 text-sm">Un suivi personnalisé pour comprendre et maîtriser vos outils digitaux sans stress.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#2c7da0]/10 hover:shadow-[0_10px_40px_rgba(44,125,160,0.1)] transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#2c7da0]/10 flex items-center justify-center text-[#2c7da0] group-hover:bg-[#2c7da0] group-hover:text-white transition-colors">
              <span className="material-symbols-outlined" data-icon="code">code</span>
            </div>
            <h4 className="font-headline-lg text-xl font-semibold text-[#2c7da0]">Développement web &amp; mobile</h4>
            <p className="font-body-md text-[#2c7da0]/80 text-sm">Création de sites web et applications mobiles performants, intuitifs et adaptés à vos besoins, et CRM métiers.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#2c7da0]/10 hover:shadow-[0_10px_40px_rgba(44,125,160,0.1)] transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#2c7da0]/10 flex items-center justify-center text-[#2c7da0] group-hover:bg-[#2c7da0] group-hover:text-white transition-colors">
              <span className="material-symbols-outlined" data-icon="description">description</span>
            </div>
            <h4 className="font-headline-lg text-xl font-semibold text-[#2c7da0]">Aide aux démarches administratives</h4>
            <p className="font-body-md text-[#2c7da0]/80 text-sm">Un accompagnement pas à pas pour vos formalités administratives en ligne en toute sérénité.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#2c7da0]/10 hover:shadow-[0_10px_40px_rgba(44,125,160,0.1)] transition-all duration-300 flex flex-col gap-4 group">
            <div className="w-12 h-12 rounded-full bg-[#2c7da0]/10 flex items-center justify-center text-[#2c7da0] group-hover:bg-[#2c7da0] group-hover:text-white transition-colors">
              <span className="material-symbols-outlined" data-icon="laptop_chromebook">laptop_chromebook</span>
            </div>
            <h4 className="font-headline-lg text-xl font-semibold text-[#2c7da0]">Assistance informatique</h4>
            <p className="font-body-md text-[#2c7da0]/80 text-sm">Dépannage, installation et conseil pour vos outils informatiques au quotidien.</p>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Link
            to="/portfolio"
            className="bg-[#2c7da0] text-on-primary font-label-md text-label-md px-10 py-4 rounded-xl hover:bg-surface-tint hover:shadow-[0_8px_30px_rgba(44,125,160,0.4)] transition-all duration-300 min-h-[48px] flex items-center justify-center gap-3 animate-zen-pulse"
          >
            <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>auto_awesome</span>
            Voir mes réalisations
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">chevron_right</span>
          </Link>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap relative z-10 border-t border-[#2c7da0]/10">
        <div className="text-center mb-12">
          <h3 className="font-headline-lg text-3xl font-bold text-[#2c7da0] mb-4">Conseils &amp; Sérénité Digitale</h3>
          <p className="font-body-md text-[#2c7da0]/80 max-w-2xl mx-auto">Découvrez nos derniers articles pour simplifier votre vie numérique.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Blog Card 1 */}
          <Link to="/blog/1" className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#2c7da0]/10 hover:shadow-[0_10px_40px_rgba(44,125,160,0.1)] transition-all duration-300 flex flex-col gap-4 group cursor-pointer text-left block">
            <div className="text-xs font-label-sm uppercase tracking-widest text-[#2c7da0]/50">Minimalisme</div>
            <h4 className="font-headline-lg text-xl font-semibold text-[#2c7da0] group-hover:text-primary transition-colors">Le minimalisme numérique au quotidien</h4>
            <p className="font-body-md text-[#2c7da0]/80 text-sm">Apprenez à désencombrer votre espace digital pour retrouver de la clarté mentale et de l'efficacité.</p>
            <div className="flex items-center gap-2 text-[#2c7da0] font-semibold text-sm mt-2">
              Lire l'article <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </Link>

          {/* Blog Card 2 */}
          <Link to="/blog/2" className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-[#2c7da0]/10 hover:shadow-[0_10px_40px_rgba(44,125,160,0.1)] transition-all duration-300 flex flex-col gap-4 group cursor-pointer text-left block">
            <div className="text-xs font-label-sm uppercase tracking-widest text-[#2c7da0]/50">Bien-être</div>
            <h4 className="font-headline-lg text-xl font-semibold text-[#2c7da0] group-hover:text-primary transition-colors">Comment apprivoiser ses outils sans stress</h4>
            <p className="font-body-md text-[#2c7da0]/80 text-sm">Des méthodes simples pour transformer votre relation avec la technologie en une collaboration apaisée.</p>
            <div className="flex items-center gap-2 text-[#2c7da0] font-semibold text-sm mt-2">
              Lire l'article <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </div>
          </Link>
        </div>

        <div className="flex justify-center">
          <Link
            to="/blog"
            className="bg-[#2c7da0] text-on-primary font-label-md text-label-md px-10 py-4 rounded-xl hover:bg-surface-tint hover:shadow-[0_8px_30px_rgba(44,125,160,0.4)] transition-all duration-300 min-h-[48px] flex items-center justify-center gap-2 animate-zen-pulse"
          >
            Lire le blog
            <span className="material-symbols-outlined" data-icon="auto_stories">auto_stories</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
