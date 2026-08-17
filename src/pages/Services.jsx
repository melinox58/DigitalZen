import React from 'react';
import { Link } from 'react-router-dom';

export default function Services() {
  return (
    <main className="flex-grow pb-24 md:pb-0 relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-16">
      {/* Hero Section */}
      <section className="mb-12 pt-12 pb-16 text-center relative max-w-3xl mx-auto px-4">
        {/* Abstract Zen Line Decoration */}
        <svg className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-32 opacity-20 pointer-events-none text-primary-container" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 200 100">
          <path d="M 0,50 Q 50,0 100,50 T 200,50"></path>
          <path d="M 0,60 Q 50,10 100,60 T 200,60"></path>
        </svg>

        <div className="relative z-10">
          <h1 className="font-display-lg text-display-lg text-primary-container mb-6">Nos Services IT</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">
            Découvrez la simplicité du numérique à travers des formations pensées pour vous. J'accompagne les particuliers avec pédagogie pour transformer la technologie en un outil accessible et serein au quotidien.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-white/60 backdrop-blur-md text-primary-container font-label-sm text-label-sm px-4 py-2 rounded-full border border-white/60 shadow-sm">Simplicité</span>
            <span className="bg-white/60 backdrop-blur-md text-primary-container font-label-sm text-label-sm px-4 py-2 rounded-full border border-white/60 shadow-sm">Adaptation</span>
            <span className="bg-white/60 backdrop-blur-md text-primary-container font-label-sm text-label-sm px-4 py-2 rounded-full border border-white/60 shadow-sm">Expertise Locale</span>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-section-gap">
        {/* IT Coaching (Large Highlight) */}
        <div className="lg:col-span-8 bg-white/60 backdrop-blur-md border border-white/60 rounded-2xl p-8 hover:shadow-[0_15px_40px_-15px_rgba(137,194,217,0.4)] transition-all group flex flex-col justify-between overflow-hidden relative">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
            <span className="material-symbols-outlined text-9xl text-primary" data-icon="psychology_alt">psychology_alt</span>
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center mb-6">
              <span aria-label="Icône Coaching IT" className="material-symbols-outlined text-primary text-2xl" data-icon="psychology_alt">psychology_alt</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">IT Coaching</h2>
            <p className="font-body-md text-body-md text-primary/80 mb-6 max-w-xl">
              Un accompagnement personnalisé pour démystifier la technologie. Nous vous guidons pas à pas pour que vous maîtrisiez vos outils numériques avec sérénité, sans stress inutile.
            </p>
          </div>
        </div>

        {/* Web Development (Tall Card) */}
        <div className="lg:col-span-4 bg-white/60 backdrop-blur-md border border-white/60 rounded-2xl p-8 hover:shadow-[0_15px_40px_-15px_rgba(137,194,217,0.4)] transition-all group flex flex-col">
          <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center mb-6">
            <span aria-label="Icône Développement Web" className="material-symbols-outlined text-primary text-2xl" data-icon="code_blocks">code_blocks</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Web Development</h2>
          <p className="font-body-md text-body-md text-primary/80 mb-8 flex-grow">
            Création de sites web performants, fluides et esthétiques. Une architecture robuste sous une interface épurée pour une expérience utilisateur zen.
          </p>
          <Link className="w-full text-center border border-primary/20 text-primary font-label-md text-label-md px-4 py-3 rounded-xl hover:bg-white/50 transition-colors block" to="/portfolio">
            Voir nos réalisations
          </Link>
        </div>

        {/* Graphic Design */}
        <div className="lg:col-span-5 bg-white/60 backdrop-blur-md border border-white/60 rounded-2xl p-8 hover:shadow-[0_15px_40px_-15px_rgba(137,194,217,0.4)] transition-all group flex flex-col">
          <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center mb-6">
            <span aria-label="Icône Design Graphique" className="material-symbols-outlined text-primary text-2xl" data-icon="palette">palette</span>
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Graphic Design</h2>
          <p className="font-body-md text-body-md text-primary/80 mb-6 flex-grow">
            Identité visuelle, logos et supports de communication qui respirent la clarté et le professionnalisme. Le minimalisme au service de votre image de marque.
          </p>
        </div>

        {/* Digital Transition */}
        <div className="lg:col-span-7 bg-primary/10 backdrop-blur-md rounded-2xl p-8 hover:shadow-[0_15px_40px_-15px_rgba(137,194,217,0.4)] transition-all group relative overflow-hidden flex flex-col justify-center border border-primary/20">
          <div className="absolute -bottom-10 -right-10 opacity-5">
            <span className="material-symbols-outlined text-[15rem] text-primary" data-icon="sync">sync</span>
          </div>
          <div className="relative z-10">
            <div className="w-12 h-12 bg-white/50 rounded-full flex items-center justify-center mb-6">
              <span aria-label="Icône Transition Numérique" className="material-symbols-outlined text-primary text-2xl" data-icon="transform">transform</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Digital Transition</h2>
            <p className="font-body-lg text-body-lg text-primary/90 mb-6 max-w-lg">
              Modernisez vos processus internes en douceur. Nous intégrons les solutions digitales adaptées à votre réalité pour gagner en efficacité tout en préservant la paix d'esprit de vos équipes.
            </p>
            <Link to="/contact" className="bg-white/80 text-primary font-label-md text-label-md px-6 py-3 rounded-full hover:bg-white transition-colors inline-flex items-center gap-2 border border-primary/10">
              Commencer la transition
              <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Contextual Image Section */}
      <section className="relative rounded-3xl overflow-hidden mb-section-gap h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4NK1i_h8uyrn8GTuxasWwi5kZkRA7iM2Q34mHXefsuyDlupeMqsmO58_u-loS2WcD7q_ZnZdgmV3yGe42fhi1KK9BnkfvkBqqHDlvrjazUMo2oekQTwgbOPH0nhO_g_DbU7rpogwrLK6uAdEJl__0BjqPbOpeHwjcwBauhEtFdy28X1_KXiFDO2rV_HtHPC_KMw5R_e7kEIxgz_yXJjEf8o62_NPnD0eyDprDbydESnJ2o_hmNUe30Q')`
          }}
        ></div>
        <div className="absolute inset-0 bg-soft-ivory/40 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center px-4 max-w-2xl bg-white/70 backdrop-blur-md border border-white/80 p-8 rounded-2xl mx-4 shadow-lg">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">La technologie au service de l'humain</h2>
          <p className="font-body-md text-body-md text-primary/80">
            Notre approche "Zen" garantit que chaque solution déployée simplifie votre quotidien au lieu de le complexifier. L'adaptation est la clé de notre réussite commune.
          </p>
        </div>
      </section>
    </main>
  );
}
