import React from 'react';
import { Link } from 'react-router-dom';

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
          <p className="font-body-lg text-body-lg text-on-surface-variant flex items-center justify-center gap-2 relative z-10">
            <span className="w-8 h-[1px] bg-primary-container/20"></span>
            Dernière mise à jour : 17 Août 2026
            <span className="w-8 h-[1px] bg-primary-container/20"></span>
          </p>
        </div>

        {/* Glassmorphic Card Container */}
        <article className="bg-surface-container-lowest/80 backdrop-blur-[12px] border border-outline-variant/30 rounded-xl p-8 md:p-12 hover:shadow-[0_0_40px_rgba(137,194,217,0.1)] transition-shadow duration-300">
          
          {/* 1. Introduction */}
          <section className="mb-10" id="introduction">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: '"FILL" 0' }}>article</span>
              1. Introduction
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Les présentes Conditions Générales de Vente (ci-après "CGV") s'appliquent à toutes les prestations de services conclues par <strong>Mélanie Martinon</strong>, exerçant sous le nom commercial <strong>"Digital Zen"</strong> (ci-après "le Prestataire"), auprès de ses clients professionnels ou particuliers (ci-après "le Client").
              </p>
              <p>
                Elles définissent les droits et obligations des parties dans le cadre de la vente de prestations de conseil, d'accompagnement à la transition numérique et de coaching IT.
              </p>
              <p>
                Toute commande de prestation implique l'adhésion sans réserve du Client aux présentes CGV, qui prévalent sur tout autre document, sauf accord écrit et préalable du Prestataire.
              </p>
              
              <div className="p-4 bg-surface rounded-lg border border-surface-container-highest mt-4">
                <h3 className="font-bold text-on-surface mb-2">Identification du Prestataire :</h3>
                <ul className="list-none space-y-1 pl-2 text-sm">
                  <li>• Mélanie Martinon — Digital Zen</li>
                  <li>• Statut juridique : Micro-entreprise</li>
                  <li>• SIRET : 449 214 865 00023</li>
                  <li>• Siège social : 8, chemin de la boucle - 58110 Achun</li>
                  <li>• Contact : <a className="text-primary hover:underline" href="mailto:digital.zen.58@gmail.com">digital.zen.58@gmail.com</a></li>
                </ul>
              </div>
            </div>
          </section>

          {/* 2. Prestations de services */}
          <section className="mb-10" id="prestations">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: '"FILL" 0' }}>psychology_alt</span>
              2. Prestations de services
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-surface rounded-lg border border-surface-container-highest">
                <h3 className="font-bold text-on-surface mb-2">IT Coaching</h3>
                <p className="text-sm text-on-surface-variant">Accompagnement personnalisé pour réduire le stress technologique. Sessions individuelles ou collectives axées sur la maîtrise sereine des outils numériques.</p>
              </div>
              <div className="p-4 bg-surface rounded-lg border border-surface-container-highest">
                <h3 className="font-bold text-on-surface mb-2">Digital Transition</h3>
                <p className="text-sm text-on-surface-variant">Audit, conseil et mise en œuvre de solutions logicielles adaptées pour simplifier les processus internes des entreprises, dans une approche minimaliste.</p>
              </div>
              <p className="text-sm text-on-surface-variant pt-2">
                Le détail de chaque prestation (contenu, durée, objectifs, livrables) est précisé dans le devis remis au Client préalablement à toute commande. Le devis, une fois signé, engage les deux parties sur son contenu.
              </p>
            </div>
          </section>

          {/* 3. Tarifs et modalités de paiement */}
          <section className="mb-10" id="tarifs">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: '"FILL" 0' }}>payments</span>
              3. Tarifs et modalités de paiement
            </h2>
            <div className="space-y-4 text-on-surface-variant">
              <ul className="list-disc pl-6 space-y-2">
                <li>Les prix sont indiqués en euros, <strong>TTC</strong>. Le Prestataire relevant du régime de la micro-entreprise, la TVA n'est pas applicable (article 293 B du Code Général des Impôts) — "TVA non applicable, article 293 B du CGI".</li>
                <li>Un acompte de <strong>30 %</strong> est exigé à la signature du devis pour débuter la prestation.</li>
                <li>Le solde est payable à réception de la facture finale, sauf modalités différentes précisées sur le devis.</li>
                <li><strong>Moyens de paiement acceptés :</strong> virement bancaire, espèces, lien de paiement.</li>
              </ul>

              <div className="pt-2">
                <h3 className="font-bold text-on-surface mb-2">Retards de paiement :</h3>
                <ul className="list-disc pl-6 space-y-2 text-sm">
                  <li>En cas de retard de paiement, des pénalités équivalentes à <strong>trois fois le taux d'intérêt légal</strong> seront appliquées, conformément à l'article L441-10 du Code de commerce.</li>
                  <li><strong>Pour les clients professionnels uniquement :</strong> une indemnité forfaitaire pour frais de recouvrement de <strong>40 €</strong> est due de plein droit en cas de retard de paiement, en sus des pénalités de retard (article D441-5 du Code de commerce).</li>
                  <li>Ces pénalités et indemnités ne s'appliquent pas de la même manière aux clients particuliers (Code de la consommation).</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. Droit de rétractation */}
          <section className="mb-10" id="retractation">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: '"FILL" 0' }}>undo</span>
              4. Droit de rétractation (clients particuliers uniquement)
            </h2>
            <div className="space-y-4 text-on-surface-variant">
              <p>
                Conformément aux articles L221-18 et suivants du Code de la consommation, tout Client particulier ayant conclu un contrat à distance ou hors établissement dispose d'un délai de <strong>14 jours</strong> à compter de la signature du devis pour exercer son droit de rétractation, sans avoir à justifier de motif.
              </p>
              <p className="text-sm bg-surface p-4 rounded-lg border border-surface-container-highest">
                <strong>Exception :</strong> si le Client demande expressément que la prestation commence avant la fin de ce délai de 14 jours, il reconnaît que son droit de rétractation ne pourra plus être exercé une fois la prestation intégralement exécutée. Si la prestation est interrompue en cours d'exécution, le Client sera redevable du prix correspondant à la partie déjà réalisée.
              </p>
              <p className="text-xs italic text-on-surface-variant/70">
                Ce droit ne s'applique pas aux clients professionnels agissant dans le cadre de leur activité.
              </p>
            </div>
          </section>

          {/* 5. Résiliation et annulation */}
          <section className="mb-10" id="resiliation">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: '"FILL" 0' }}>cancel</span>
              5. Résiliation et annulation
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-on-surface-variant">
              <li><strong>Annulation par le Client</strong> avant le début de la prestation : l'acompte versé reste acquis au Prestataire à titre d'indemnité, sauf accord contraire.</li>
              <li><strong>Annulation en cours de mission :</strong> les prestations déjà réalisées restent dues au prorata du temps ou des étapes accomplies.</li>
              <li><strong>Résiliation par le Prestataire :</strong> en cas de manquement du Client à ses obligations (absence de collaboration, non-paiement), le Prestataire se réserve le droit de suspendre ou résilier la mission après mise en demeure restée sans effet pendant 15 jours.</li>
            </ul>
          </section>

          {/* 6. Responsabilités */}
          <section className="mb-10" id="responsabilites">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: '"FILL" 0' }}>gavel</span>
              6. Responsabilités
            </h2>
            <div className="space-y-4 text-on-surface-variant">
              <p>
                Le Prestataire s'engage à mener à bien la mission confiée avec tout le soin et la compétence requis, dans le cadre d'une <strong>obligation de moyens et non de résultats</strong>.
              </p>
              <p>
                Le Client s'engage à collaborer activement et à fournir toutes les informations nécessaires à la bonne réalisation de la prestation. Le Prestataire ne saurait être tenu responsable des retards ou dysfonctionnements résultant d'informations incomplètes ou erronées transmises par le Client.
              </p>
              <p>
                La responsabilité du Prestataire ne pourra être engagée qu'en cas de faute prouvée, et sera limitée au montant total de la prestation concernée.
              </p>
            </div>
          </section>

          {/* 7. Propriété intellectuelle */}
          <section className="mb-10" id="propriete">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: '"FILL" 0' }}>verified</span>
              7. Propriété intellectuelle
            </h2>
            <div className="space-y-4 text-on-surface-variant">
              <p>
                Sauf mention contraire précisée au devis, les livrables, méthodes, supports pédagogiques et documents remis par le Prestataire dans le cadre de la prestation restent la propriété intellectuelle du Prestataire.
              </p>
              <p>
                Le Client bénéficie d'un droit d'usage de ces livrables pour ses besoins propres, à l'exclusion de toute reproduction, revente ou diffusion à des tiers sans accord écrit préalable du Prestataire.
              </p>
            </div>
          </section>

          {/* 8. Protection des données personnelles */}
          <section className="mb-10" id="donnees">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: '"FILL" 0' }}>shield</span>
              8. Protection des données personnelles
            </h2>
            <p className="text-on-surface-variant">
              Les données personnelles du Client sont traitées conformément au Règlement Général sur la Protection des Données (RGPD). Pour plus d'informations sur la collecte, l'utilisation et vos droits sur vos données, consultez notre <Link className="text-primary hover:underline font-semibold" to="/politique-de-confidentialite">Politique de confidentialité</Link>.
            </p>
          </section>

          {/* 9. Force majeure */}
          <section className="mb-10" id="force-majeure">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: '"FILL" 0' }}>cyclone</span>
              9. Force majeure
            </h2>
            <p className="text-on-surface-variant">
              La responsabilité du Prestataire ne pourra être engagée en cas d'inexécution ou de retard dans l'exécution de ses obligations résultant d'un cas de force majeure, tel que défini par l'article 1218 du Code civil et la jurisprudence applicable.
            </p>
          </section>

          {/* 10. Médiation de la consommation */}
          <section className="mb-10" id="mediation">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: '"FILL" 0' }}>balance</span>
              10. Médiation de la consommation (clients particuliers uniquement)
            </h2>
            <div className="space-y-4 text-on-surface-variant">
              <p>
                Conformément à l'article L616-1 du Code de la consommation, en cas de litige non résolu directement avec le Prestataire, le Client particulier peut recourir gratuitement au service de médiation suivant :
              </p>
              <div className="p-4 bg-surface rounded-lg border border-surface-container-highest text-sm">
                <p className="font-bold text-on-surface">CNPM – MÉDIATION – CONSOMMATION</p>
                <p>27 avenue de la Libération, 42400 Saint-Chamond</p>
                <p>Site : <a className="text-primary hover:underline" href="https://cnpm-mediation-consommation.eu" target="_blank" rel="noopener noreferrer">cnpm-mediation-consommation.eu</a></p>
                <p className="text-xs text-on-surface-variant/70 italic mt-2">(Procédure d'adhésion en cours)</p>
              </div>
            </div>
          </section>

          {/* 11. Loi applicable et litiges */}
          <section id="litiges">
            <h2 className="font-headline-lg text-headline-lg text-primary-container mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary-container/70" style={{ fontVariationSettings: '"FILL" 0' }}>gavel</span>
              11. Loi applicable et litiges
            </h2>
            <p className="text-on-surface-variant mb-6">
              Les présentes CGV sont soumises au droit français. En cas de litige et à défaut de résolution amiable (y compris par la médiation mentionnée à l'article 10), le litige sera porté devant les tribunaux compétents du ressort du siège social du Prestataire.
            </p>
            <p className="text-xs text-on-surface-variant/70 italic pt-4 border-t border-primary-container/10">
              Document mis à jour le 17 août 2026. Pour toute question relative aux présentes CGV, contactez <a className="text-primary hover:underline" href="mailto:digital.zen.58@gmail.com">digital.zen.58@gmail.com</a>.
            </p>
          </section>

        </article>
      </div>
    </main>
  );
}
