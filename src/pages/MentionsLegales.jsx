import React from 'react';

export default function MentionsLegales() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center relative">
          <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden pointer-events-none">
            <svg className="w-full h-full opacity-10 text-primary-container" fill="none" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 200C150 100 350 300 500 200C650 100 850 300 1000 200" stroke="currentColor" strokeWidth="2"></path>
              <path d="M0 220C150 120 350 320 500 220C650 120 850 320 1000 220" stroke="currentColor" strokeWidth="2"></path>
            </svg>
          </div>
          <h1 className="font-display-lg text-display-lg text-primary-container mb-4 relative z-10">Mentions Légales &amp; RGPD</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant flex items-center justify-center gap-2 relative z-10">
            <span className="w-8 h-[1px] bg-primary-container/20"></span>
            Dernière mise à jour : Août 2026
            <span className="w-8 h-[1px] bg-primary-container/20"></span>
          </p>
        </div>

        {/* Glassmorphic Card Container */}
        <article className="bg-surface-container-lowest/80 backdrop-blur-[12px] border border-outline-variant/30 rounded-xl p-8 md:p-12 hover:shadow-[0_0_40px_rgba(137,194,217,0.1)] transition-shadow duration-300">
          {/* Editeur Section */}
          <section className="mb-10" id="editeur">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: "'FILL' 0" }}>person</span>
              Éditeur du site
            </h2>
            <p className="mb-4 text-on-surface-variant">Le présent site est édité par :</p>
            <ul className="list-none space-y-2 pl-4 border-l-2 border-primary-container/20 text-on-surface-variant">
              <li><strong>Mélanie Martinon</strong></li>
              <li>Accompagnement digital</li>
              <li>Statut juridique : Micro-entreprise</li>
              <li>SIRET : [Numéro SIRET]</li>
              <li>Siège social : 8, chemin de la boucle - 58110 Achun</li>
              <li>Directeur de la publication : Mélanie Martinon</li>
              <li>Contact :&nbsp;<a className="text-primary hover:underline" href="mailto:digital.zen.58@gmail.com">digital.zen.58@gmail.com</a></li>
            </ul>
          </section>

          {/* Hebergement Section */}
          <section className="mb-10" id="hebergement">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: "'FILL' 0" }}>dns</span>
              Hébergement
            </h2>
            <p className="mb-4 text-on-surface-variant">Ce site est hébergé par : IONOS</p>
            <ul className="list-none space-y-2 pl-4 border-l-2 border-primary-container/20 text-on-surface-variant">
              <li><strong>IONOS</strong></li>
              <li>Raison sociale : IONOS</li>
              <li>Adresse : 7, place de la Gare FR 57200 Sarreguemines</li>
              <li>Téléphone : +33.970808911</li>
              <li>Email : <a className="text-primary hover:underline" href="mailto:hostmaster@1and1.fr">hostmaster@1and1.fr</a></li>
            </ul>
          </section>

          {/* RGPD Section */}
          <section className="mb-10" id="rgpd">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: "'FILL' 0" }}>shield</span>
              Protection des données personnelles (RGPD)
            </h2>
            <div className="space-y-6 text-on-surface-variant">
              <p>
                Dans le cadre de notre activité de coaching IT et d'accompagnement à la transition numérique, Digital Zen est amené à collecter et traiter des données à caractère personnel vous concernant. Nous attachons une grande importance au respect de votre vie privée et à la sécurité de vos données.
              </p>
              <div>
                <h3 className="font-bold text-on-surface mb-2">Finalité de la collecte</h3>
                <p>Les données collectées via le formulaire de contact ou lors de nos échanges ont pour finalité :</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>La gestion de vos demandes de contact et d'information.</li>
                  <li>La planification et l'organisation des séances de coaching.</li>
                  <li>L'envoi de devis et la gestion administrative.</li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-on-surface mb-2">Conservation des données</h3>
                <p>Vos données sont conservées pour la durée nécessaire à l'exécution de l'accompagnement, puis archivées conformément aux obligations légales (généralement 3 ans après notre dernier contact pour la prospection, 10 ans pour les pièces comptables).</p>
              </div>
              <div>
                <h3 className="font-bold text-on-surface mb-2">Vos droits</h3>
                <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression, de limitation et d'opposition au traitement de vos données.</p>
                <p className="mt-2">Pour exercer ces droits, vous pouvez nous contacter à l'adresse :&nbsp;<a className="text-primary hover:underline" href="mailto:digital.zen.58@gmail.com">digital.zen.58@gmail.com</a></p>
              </div>
            </div>
          </section>

          {/* Cookies Section */}
          <section id="cookies">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: "'FILL' 0" }}>cookie</span>
              Politique de Cookies
            </h2>
            <div className="space-y-4 text-on-surface-variant">
              <p>
                Ce site utilise un minimum de cookies pour assurer son bon fonctionnement et améliorer votre expérience de navigation. Nous privilégions une approche minimaliste et respectueuse.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Cookies techniques :</strong> Nécessaires au fonctionnement du site (non soumis au consentement préalable).</li>
                <li><strong>Cookies d'analyse :</strong> Nous utilisons un outil d'analyse respectueux de la vie privée (sans suivi inter-sites) pour comprendre comment notre site est utilisé, dans le but d'optimiser nos contenus.</li>
              </ul>
              <p className="mt-4">
                Vous pouvez à tout moment configurer votre navigateur pour refuser l'installation de ces cookies, bien que cela puisse altérer certaines fonctionnalités du site.
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
