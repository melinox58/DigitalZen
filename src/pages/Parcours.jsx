import React from 'react';

export default function Parcours() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 md:px-margin-desktop w-full flex flex-col items-center justify-center bg-soft-ivory overflow-hidden">
        <div className="mb-12 text-center relative max-w-3xl w-full flex flex-col items-center z-10">
          {/* Abstract Zen Line Decoration */}
          <svg className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-32 opacity-20 pointer-events-none text-primary-container" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 200 100">
            <path d="M 0,50 Q 50,0 100,50 T 200,50"></path>
            <path d="M 0,60 Q 50,10 100,60 T 200,60"></path>
          </svg>
          <h1 className="font-display-lg text-display-lg text-primary-container mb-4 relative z-10">
            L'humain au cœur du <span className="text-secondary">digital</span>
          </h1>

          <p className="font-body-lg text-body-lg text-primary/80 mb-8 relative z-10">
            Je m'appelle Mélanie Martinon. Développeuse web et ancienne graphiste, j'accompagne les entreprises dans leur transition numérique avec une approche centrée sur l'utilisateur, la sérénité et l'efficacité.
          </p>
          <div className="flex justify-center relative z-10">
            <a className="flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md text-label-md hover:bg-primary-container transition-all shadow-lg" href="#parcours">
              Découvrir mon parcours
              <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="mt-8 md:mt-16 relative max-w-md w-full z-10">
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl p-2 bg-white/50 backdrop-blur-sm border border-white/40">
            <img
              alt="Mélanie Martinon"
              className="w-full h-full object-cover rounded-xl"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjeE-5l0_K6v4_rH-nEyj4R2j2EIS4OhlMzqL2uE9Xt2HF7xHbxKdQXugEOJ8p3Qon6HJwXcHQdmRG1HkyGEI4vTvqlf9EDT9xEaWjvvbKbqY-j4i1oIMEC-YPnHVbnJeWGRFIeJNLsTFF_IDD9oP7n-eh-Mk_l3-WWIm1e6IiL9-PMpgaI89SfgkppDBp-6eF2T8y7AcnMdjuGIENrjRymkoBD6wOkeroXHRYcNvMHIQioPOWW0zhXunlvsOHMu6MTdA"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 z-20 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/70 flex items-center gap-3">
            <div className="bg-secondary-container p-2.5 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: '"FILL" 1' }}>code</span>
            </div>
            <div>
              <p className="font-label-sm text-label-sm text-primary/80 uppercase tracking-wider">Expertise</p>
              <p className="font-label-md text-label-md font-bold text-primary">Code &amp; Design</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Journey Section */}
      <section className="py-20 md:py-32 px-4 md:px-margin-desktop w-full flex justify-center bg-soft-ivory" id="parcours">
        <div className="max-w-[1280px] w-full flex flex-col gap-12">
          <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto mb-8">
            <h2 className="font-headline-lg text-headline-lg text-primary">De la création visuelle à l'architecture technique</h2>
            <p className="font-body-md text-body-md text-primary/80">
              Un parcours hybride qui me permet aujourd'hui de comprendre à la fois les enjeux esthétiques et les contraintes techniques de vos projets digitaux.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Card 1: Graphic Design Roots */}
            <div className="col-span-1 md:col-span-2 bg-white/60 backdrop-blur-md rounded-2xl p-8 border border-outline-variant/30 transition-all duration-300 digital-glow-hover flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: '"FILL" 1' }}>design_services</span>
                </div>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-3">L'œil du Graphiste</h3>
                <p className="font-body-md text-body-md text-primary/80 mb-6">
                  Mes premières années en tant que graphiste m'ont forgé une sensibilité aigüe à la typographie, aux couleurs et à la composition. Je conçois des interfaces qui ne sont pas seulement fonctionnelles, mais qui racontent une histoire visuelle cohérente avec votre marque.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap mt-auto">
                <span className="px-3 py-1 bg-surface-container text-primary/80 rounded-full font-label-sm text-label-sm">UI Design</span>
                <span className="px-3 py-1 bg-surface-container text-primary/80 rounded-full font-label-sm text-label-sm">Branding</span>
                <span className="px-3 py-1 bg-surface-container text-primary/80 rounded-full font-label-sm text-label-sm">Ergonomie</span>
              </div>
            </div>

            {/* Card 2: The Tech Transition */}
            <div className="col-span-1 bg-primary-container/10 rounded-2xl p-8 border border-primary-container/20 transition-all duration-300 digital-glow-hover flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <span className="material-symbols-outlined text-9xl text-primary">terminal</span>
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: '"FILL" 1' }}>psychology</span>
                </div>
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-3">Le Virage Tech</h3>
                <p className="font-body-md text-body-md text-primary/80">
                  Poussée par l'envie de donner vie à mes maquettes, je me suis plongée dans le développement web. Cette double casquette me permet de faire le pont parfait entre le design et la technique.
                </p>
              </div>
            </div>

            {/* Card 3: Philosophy */}
            <div className="col-span-1 md:col-span-3 glass-panel rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-soft-ivory/50 to-surface-bright/50 opacity-90 z-0"></div>
              <div className="relative z-10 w-full flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0 w-24 h-24 bg-secondary-container rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl text-on-secondary-container" style={{ fontVariationSettings: '"FILL" 1' }}>handshake</span>
                </div>
                <div>
                  <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary mb-3">Philosophie : IT Coaching &amp; Sérénité</h3>
                  <p className="font-body-md text-body-md text-primary/80">
                    Mon approche du "Digital Zen" repose sur l'idée que la technologie doit être un outil facilitateur, et non une source de stress. J'accompagne mes clients avec pédagogie, en m'assurant que chaque solution développée est pérenne, maintenable et surtout, compréhensible par les équipes qui l'utiliseront.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
