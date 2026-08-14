import React from 'react';

export default function Parcours() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      {/* Header Section */}
      <section className="mb-12 text-center relative pt-8 md:pt-12">
        <svg className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-32 opacity-20 pointer-events-none text-primary-container" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 200 100">
          <path d="M 0,50 Q 50,0 100,50 T 200,50"></path>
          <path d="M 0,60 Q 50,10 100,60 T 200,60"></path>
        </svg>
        <div className="relative z-10">
          <h1 className="font-display-lg text-display-lg text-primary-container mb-4">Mon Parcours</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-6">
            Professionnelle polyvalente alliant créativité graphique et rigueur technique.
            Une double expertise forgée par l'expérience et l'adaptation continue.
          </p>
        </div>
      </section>

      {/* Competences Bento Grid */}
      <section className="mb-section-gap">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8 text-center md:text-left">Pôles d'Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Informatique & Créativité */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 hover-digital-glow transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4" style={{ fontVariationSettings: '"FILL" 1' }}>palette</span>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-4">Informatique &amp; Créativité</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm text-zen-teal mt-1">check_circle</span> Infographie &amp; Création de sites</li>
              <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm text-zen-teal mt-1">check_circle</span> Gestion réseaux sociaux</li>
              <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm text-zen-teal mt-1">check_circle</span> Élaboration de chartes graphiques</li>
              <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm text-zen-teal mt-1">check_circle</span> Dessin à main levée</li>
              <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm text-zen-teal mt-1">check_circle</span> Conception web fullstack</li>
            </ul>
          </div>

          {/* Automatisme & Maintenance */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 hover-digital-glow transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4" style={{ fontVariationSettings: '"FILL" 1' }}>precision_manufacturing</span>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-4">Automatisme &amp; Maintenance</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm text-zen-teal mt-1">check_circle</span> Opérateur CN &amp; Maintenance</li>
              <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm text-zen-teal mt-1">check_circle</span> Réglage &amp; Programmation CN</li>
              <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm text-zen-teal mt-1">check_circle</span> Fraisage, laser</li>
              <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm text-zen-teal mt-1">check_circle</span> Amélioration continue</li>
            </ul>
          </div>

          {/* Commerce */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-8 hover-digital-glow transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
            <span className="material-symbols-outlined text-4xl text-primary-container mb-4" style={{ fontVariationSettings: '"FILL" 1' }}>storefront</span>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface mb-4">Commerce</h3>
            <ul className="space-y-3 font-body-md text-on-surface-variant">
              <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm text-zen-teal mt-1">check_circle</span> Conseil client &amp; Vente</li>
              <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm text-zen-teal mt-1">check_circle</span> Animation commerciale</li>
              <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm text-zen-teal mt-1">check_circle</span> Création d'un commerce</li>
              <li className="flex items-start gap-2"><span className="material-symbols-outlined text-sm text-zen-teal mt-1">check_circle</span> Suivi, saisie comptable &amp; Gestion</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Formations Section */}
      <section className="mb-section-gap">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-8 text-center md:text-left">Formations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface/50 backdrop-blur-sm border-l-4 border-primary-container p-6 rounded-r-xl">
            <div className="text-zen-teal font-label-sm text-label-sm mb-2">2026</div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface text-lg mb-1">Licence IAS 3</h3>
          </div>
          <div className="bg-surface/50 backdrop-blur-sm border-l-4 border-primary-container p-6 rounded-r-xl">
            <div className="text-zen-teal font-label-sm text-label-sm mb-2">2025</div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface text-lg mb-1">Bac+2 RNCP DWWM</h3>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface text-lg mb-1">Licence IOBSP 1 et 3</h3>
          </div>
          <div className="bg-surface/50 backdrop-blur-sm border-l-4 border-primary-container p-6 rounded-r-xl">
            <div className="text-zen-teal font-label-sm text-label-sm mb-2">2001 &amp; 1999</div>
            <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface text-lg mb-1">Industries Graphiques</h3>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">Bac Pro &amp; BEP</p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-section-gap">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-12 text-center md:text-left">Expériences Professionnelles</h2>
        <div className="space-y-6">
          {/* Experience Item 1 */}
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 hover-digital-glow transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="inline-block bg-primary-container/10 text-primary-container font-label-sm text-label-sm px-4 py-1.5 rounded-full mb-2">03/2026 à ce jour</span>
              <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface text-lg">Téléconseillère mutuelle animaux</h4>
              <p className="font-label-md text-label-md text-primary mt-1">PROO'POIL</p>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">location_on</span> Télétravail
            </p>
          </div>

          {/* Experience Item 2 */}
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 hover-digital-glow transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="inline-block bg-primary-container/10 text-primary-container font-label-sm text-label-sm px-4 py-1.5 rounded-full mb-2">09/2025 - 02/2026</span>
              <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface text-lg">Promotrice des ventes Carte PASS</h4>
              <p className="font-label-md text-label-md text-primary mt-1">EDP / Carrefour</p>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">location_on</span> Bas Rhin (67)
            </p>
          </div>

          {/* Experience Item 3 */}
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 hover-digital-glow transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="inline-block bg-primary-container/10 text-primary-container font-label-sm text-label-sm px-4 py-1.5 rounded-full mb-2">05/2021 - 02/2023</span>
              <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface text-lg">Gérante</h4>
              <p className="font-label-md text-label-md text-primary mt-1">Frip N' Shop</p>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">location_on</span> Corbigny (58)
            </p>
          </div>

          {/* Experience Item 4 */}
          <div className="bg-surface-container-lowest border border-outline-variant/20 rounded-xl p-6 hover-digital-glow transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="inline-block bg-primary-container/10 text-primary-container font-label-sm text-label-sm px-4 py-1.5 rounded-full mb-2">03/2012 - 07/2020</span>
              <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface text-lg">Opérateur régleur</h4>
              <p className="font-label-md text-label-md text-primary mt-1">Miroir Industrie</p>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">location_on</span> Hoerdt (67)
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
