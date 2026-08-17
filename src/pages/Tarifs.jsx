import React from 'react';
import { Link } from 'react-router-dom';

export default function Tarifs() {
  const offers = [
    {
      title: "Site Web",
      price: "À partir de 500 €",
      detail: "Et sur devis (hors hébergement et nom de domaine)",
      icon: "language",
      buttonText: "Demander un devis"
    },
    {
      title: "Développement Web",
      price: "À partir de 100 €/h",
      detail: "Et sur devis",
      icon: "code_blocks",
      buttonText: "Demander un devis"
    },
    {
      title: "Assistance Informatique, Conseil Digital",
      price: "À partir de 30 €/h",
      detail: "Et sur devis",
      icon: "support_agent",
      buttonText: "Me contacter"
    },
    {
      title: "Accompagnement, Aide aux Démarches",
      price: "À partir de 20 €/h",
      detail: "Et sur devis",
      icon: "handshake",
      buttonText: "Me contacter"
    }
  ];

  return (
    <main className="flex-grow pb-24 md:pb-0 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-16">
      {/* Intro Header */}
      <section className="mb-12 pt-8 pb-8 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#2c7da0] mb-6 font-headline tracking-tight">Nos Tarifs</h1>
        <p className="text-lg md:text-xl text-[#2c7da0]/80 font-body leading-relaxed">
          Retrouvez nos tarifs indicatifs ci-dessous. Chaque projet étant unique, l'ensemble de nos prestations est personnalisé et ajusté selon vos besoins précis sur devis.
        </p>
      </section>

      {/* Grille des 4 Cards (2x2 desktop, 1 col mobile) */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#2c7da0]/10 hover:shadow-[0_15px_40px_rgba(44,125,160,0.15)] transition-all duration-300 p-8 flex flex-col justify-between group"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#2c7da0]/10 text-[#2c7da0] flex items-center justify-center mb-6 group-hover:bg-[#2c7da0] group-hover:text-white transition-colors">
                <span className="material-symbols-outlined text-2xl">{offer.icon}</span>
              </div>
              <h2 className="text-2xl font-bold text-[#2c7da0] mb-3 font-headline">
                {offer.title}
              </h2>
              {/* Tarif mis en avant visuellement */}
              <div className="text-3xl md:text-4xl font-bold text-[#2c7da0] my-4 font-headline tracking-tight">
                {offer.price}
              </div>
              {/* Mention discrète */}
              <p className="text-xs text-[#2c7da0]/70 mb-8 font-label">
                {offer.detail}
              </p>
            </div>

            {/* Bouton de redirection vers /contact */}
            <Link
              to="/contact"
              className="btn-primary w-full mt-auto flex items-center justify-center gap-2 group/btn"
            >
              <span>{offer.buttonText}</span>
              <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        ))}
      </section>

      {/* Mention légale bas de page */}
      <p className="text-center text-xs text-[#2c7da0]/60 italic max-w-xl mx-auto pt-4 border-t border-[#2c7da0]/10">
        Tarifs exprimés en TTC, TVA non applicable, article 293 B du CGI
      </p>
    </main>
  );
}
