import React from 'react';
import { Link } from 'react-router-dom';

export default function Article() {
  return (
    <main className="flex-grow w-full max-w-[1000px] mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12 relative">
      {/* Hero Article Section */}
      <article className="bg-surface-container-lowest rounded-[24px] p-6 md:p-10 shadow-[0_10px_30px_-10px_rgba(0,100,133,0.15)] relative overflow-hidden mb-section-gap border border-outline-variant/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <header className="mb-8 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-surface-container px-3 py-1 rounded-full font-label text-[12px] font-semibold text-primary tracking-wide">
              Minimalisme
            </span>
            <span className="text-outline text-sm font-label flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              15 Août 2026
            </span>
          </div>
          <h1 className="font-headline text-[32px] md:text-[48px] font-bold leading-tight text-on-surface mb-6 tracking-tight">
            Le minimalisme numérique au quotidien
          </h1>
          <p className="font-body text-[18px] text-on-surface-variant leading-relaxed max-w-3xl">
            Comment reprendre le contrôle de votre attention dans un monde hyperconnecté et retrouver la sérénité face à vos écrans.
          </p>
        </header>

        <figure className="w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden mb-12 relative group">
          <img
            alt="Espace de travail minimaliste"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRIUsUzOVcygJHhzfGD-k_RVLjJ4zXwOdU4t2JUQYebJyuUdj0q7Wkcuvlld9b3qpKbVChO711vgdQGALB_4vnYKLCTnuheLdPLLPjqNPlHDOG-ZIXBAauJ3yVvkLQ1yt5vnHQ_ABsvLlj-y1YhegmmyB64ljJwLikQ2EHFpn609sUN8pZz8sVHwhrN8Z---4KEPZe-z4uko0zrkLKyGPpSEaxrBk5w0nGT7LdLN5wtKfCTUq3lIbSyw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/20 to-transparent"></div>
        </figure>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none font-body text-on-surface-variant leading-relaxed">
          <p className="mb-6">
            Dans notre société moderne, nous sommes constamment bombardés de notifications, d'e-mails et d'informations. Cette surcharge cognitive peut rapidement mener à l'épuisement professionnel ou personnel. Le minimalisme numérique n'est pas un rejet de la technologie, mais plutôt une approche intentionnelle de son utilisation.
          </p>

          <h2 className="font-headline text-[28px] font-semibold text-primary mt-12 mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container">tune</span>
            Redéfinir ses priorités
          </h2>

          <p className="mb-6">
            La première étape consiste à identifier les outils numériques qui apportent une réelle valeur ajoutée à votre vie. Posez-vous la question : cette application sert-elle mes objectifs ou vole-t-elle mon temps ?
          </p>

          <ul className="list-none space-y-4 mb-8 pl-0">
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-zen-teal mt-1">check_circle</span>
              <span><strong>Désactivez les notifications non essentielles :</strong> Conservez uniquement celles qui nécessitent une action immédiate.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-zen-teal mt-1">check_circle</span>
              <span><strong>Nettoyez votre écran d'accueil :</strong> Gardez seulement les outils de productivité essentiels. Cachez le reste dans des dossiers ou le tiroir d'applications.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="material-symbols-outlined text-zen-teal mt-1">check_circle</span>
              <span><strong>Instaurez des zones sans écran :</strong> La chambre à coucher ou la table à manger sont d'excellents points de départ.</span>
            </li>
          </ul>

          <blockquote className="border-l-4 border-primary-container pl-6 py-4 my-10 bg-surface-container-low/50 rounded-r-lg italic text-[18px] text-on-surface">
            "La technologie est un excellent serviteur, mais un terrible maître."
          </blockquote>

          <h2 className="font-headline text-[28px] font-semibold text-primary mt-12 mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container">psychology</span>
            L'impact sur la charge mentale
          </h2>

          <p className="mb-6">
            En réduisant le bruit numérique, on observe souvent une diminution significative du stress. Le cerveau n'étant plus en constante alerte, il peut se concentrer plus profondément sur les tâches complexes (Deep Work).
          </p>
        </div>

        {/* Author / Conclusion Section */}
        <div className="mt-16 p-8 rounded-2xl bg-soft-ivory border border-outline-variant/30 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[120px] text-primary">spa</span>
          </div>
          <h3 className="font-headline text-[20px] font-semibold text-primary mb-4">Le mot de Mélanie</h3>
          <p className="font-body text-on-surface-variant italic mb-0 relative z-10">
            Commencer par de petits changements est la clé. Ne cherchez pas la perfection du jour au lendemain. La transition numérique vers plus de sérénité est un chemin, pas une destination. Prenez le temps de respirer entre deux clics.
          </p>
        </div>
      </article>

      {/* CTA Section */}
      <section className="mb-section-gap flex justify-center w-full">
        <div className="bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-[24px] text-center w-full max-w-3xl relative overflow-hidden shadow-lg border border-white/80">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent z-0"></div>
          <div className="relative z-10 flex flex-col items-center">
            <span className="material-symbols-outlined text-primary text-4xl mb-4 animate-zen-pulse" style={{ fontVariationSettings: '"FILL" 1' }}>diversity_1</span>
            <h2 className="font-headline text-[28px] font-bold text-on-surface mb-4">Besoin d'un accompagnement personnalisé ?</h2>
            <p className="font-body text-on-surface-variant mb-8 max-w-lg mx-auto">
              Découvrez comment nous pouvons simplifier votre quotidien numérique et retrouver une approche humaine de la technologie.
            </p>
            <a
              href="https://calendar.google.com/appointments/schedules/AcZssZ371T869AcbpAd0-bCO9XYPoFoDIHpxEz-LnqYFUvobvjTzM0X5Sm9ZBtNdxr-o8KBSPlYXyHXm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-label text-[14px] font-semibold hover:bg-primary-container transition-all hover:scale-105 shadow-[0_4px_20px_rgba(0,100,133,0.3)]"
            >
              Prendre RDV
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="mb-section-gap">
        <h3 className="font-headline text-[24px] font-semibold text-on-surface mb-8">Pour aller plus loin</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1 */}
          <Link to="/blog" className="group block bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-outline-variant/20">
            <div className="h-48 overflow-hidden relative">
              <img
                alt="Article connexe 1"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_mBM_a5CFir0nIkhFA6vEVEEJL0EAsZGQK6lZZgbLv2appgotZg4WHFwAe-rH07-ybpjNjCdd9PQ1KTjze56RDwIHIhI56g3YygGBvNk_cQerJoMQKsRk3ye8udwpXFCIZGlWJintaAOAutPd0pgTHGmEF9rRWuSFCJNAPNkDaQ8A3kEKyL3iYMlKORnBkQko-6D0M4rlOWeOS6wQAkoJIkuoWBXJOnLbFjr4baVcv2JxXjWY-qo_PA"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-label text-primary-container font-semibold mb-2 block uppercase tracking-wider">Outils</span>
              <h4 className="font-headline text-[18px] font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">Organiser sa boîte mail pour plus d'efficacité</h4>
              <p className="font-body text-[14px] text-on-surface-variant line-clamp-2">Des méthodes simples pour atteindre le fameux Inbox Zero et réduire la charge mentale quotidienne.</p>
            </div>
          </Link>

          {/* Card 2 */}
          <Link to="/blog" className="group block bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-outline-variant/20">
            <div className="h-48 overflow-hidden relative">
              <img
                alt="Article connexe 2"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvyE8EFHiochB-XlxlEotfFl63OiqwkYBPeQdrhVwyRdtf3oAfAXylVW0j6A7IhepLWNVaqa9hE7UVKJ-T6F0J14M4Acugs4o_n4_xvfvneiwr_ohiEb3uuNRdP4aWS4536HtqSAhvqHe0iDv5fZYB1FHCKHds3lHgfHdvcp5FzCyof_K_OYsjiRSIc3OWYfEuoS4YJv97QVV1IXpw1pq-ewU8rmQoIabqJwJv_3Sh466NOfbWKSx6Ew"
              />
            </div>
            <div className="p-6">
              <span className="text-xs font-label text-primary-container font-semibold mb-2 block uppercase tracking-wider">Bien-être</span>
              <h4 className="font-headline text-[18px] font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">La déconnexion numérique le week-end</h4>
              <p className="font-body text-[14px] text-on-surface-variant line-clamp-2">Pourquoi et comment instaurer un jour par semaine sans écrans pour recharger ses batteries.</p>
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
