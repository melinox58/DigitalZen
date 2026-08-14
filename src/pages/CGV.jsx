import React from 'react';

export default function CGV() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center relative">
          <svg className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-32 opacity-20 pointer-events-none text-primary-container" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 200 100">
            <path d="M 0,50 Q 50,0 100,50 T 200,50"></path>
            <path d="M 0,60 Q 50,10 100,60 T 200,60"></path>
          </svg>
          <h1 className="font-display-lg text-display-lg text-primary-container mb-4 relative z-10">Conditions Générales de Vente</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">Dernière mise à jour : Août 2026</p>
        </div>

        {/* Glassmorphic Card Container */}
        <article className="bg-surface-container-lowest/80 backdrop-blur-[12px] border border-outline-variant/30 rounded-xl p-8 md:p-12 hover:shadow-[0_0_40px_rgba(137,194,217,0.1)] transition-shadow duration-300">
          {/* 1. Introduction */}
          <section className="mb-10">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: '"FILL" 0' }}>article</span>
              1. Introduction
            </h2>
            <p className="mb-4 text-on-surface-variant">Les présentes Conditions Générales de Vente (ci-après "CGV") s'appliquent à toutes les prestations de services conclues par "Digital Zen" (ci-après "Le Prestataire") auprès de ses clients professionnels ou particuliers (ci-après "Le Client").</p>
            <p className="text-on-surface-variant">Elles définissent les droits et obligations des parties dans le cadre de la vente de prestations de conseil, d'accompagnement à la transition numérique et de coaching IT.</p>
          </section>

          {/* 2. Services */}
          <section className="mb-10">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: '"FILL" 0' }}>psychology_alt</span>
              2. Prestations de Services
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-surface rounded-lg border border-surface-container-highest">
                <h3 className="font-label-md text-label-md font-bold mb-2">IT Coaching</h3>
                <p className="text-sm text-on-surface-variant">Accompagnement personnalisé pour réduire le stress technologique. Sessions individuelles ou collectives axées sur la maîtrise sereine des outils numériques.</p>
              </div>
              <div className="p-4 bg-surface rounded-lg border border-surface-container-highest">
                <h3 className="font-label-md text-label-md font-bold mb-2">Digital Transition</h3>
                <p className="text-sm text-on-surface-variant">Audit, conseil et mise en œuvre de solutions logicielles adaptées pour simplifier les processus internes des entreprises, dans une approche minimaliste.</p>
              </div>
            </div>
          </section>

          {/* 3. Pricing */}
          <section className="mb-10">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: '"FILL" 0' }}>payments</span>
              3. Tarifs et Modalités de Paiement
            </h2>
            <ul className="list-disc list-inside space-y-2 text-on-surface-variant pl-4">
              <li>Les prix sont indiqués en euros (HT et TTC).</li>
              <li>Un acompte de 30% est exigé à la signature du devis pour débuter la prestation.</li>
              <li>Le solde est payable à réception de la facture finale.</li>
              <li>Paiements acceptés : Virement bancaire, CB, lien de paiement.</li>
              <li>En cas de retard de paiement, des pénalités équivalentes à trois fois le taux d'intérêt légal seront appliquées.</li>
            </ul>
          </section>

          {/* 4. Liability */}
          <section>
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: '"FILL" 0' }}>gavel</span>
              4. Responsabilités
            </h2>
            <p className="mb-4 text-on-surface-variant">Le Prestataire s'engage à mener à bien la mission confiée avec tout le soin et la compétence requise, dans le cadre d'une obligation de moyens et non de résultats.</p>
            <p className="text-on-surface-variant">Le Client s'engage à collaborer activement et à fournir toutes les informations nécessaires à la bonne réalisation de la prestation.</p>
          </section>
        </article>
      </div>
    </main>
  );
}
