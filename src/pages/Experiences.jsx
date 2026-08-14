import React from 'react';
import { Link } from 'react-router-dom';

export default function Experiences() {
  const detailedExperiences = [
    {
      title: "Ouvrière poterie",
      period: "2023 - 2024",
      company: "Poterie Hausswirth",
      description: "Façonnage et décoration artisanale. Travail de précision et attention aux détails dans un environnement créatif et manuel.",
      icon: "palette",
      iconFilled: true
    },
    {
      title: "Diverses missions intérim",
      period: "2023",
      description: "Adaptabilité et polyvalence acquises au travers de diverses missions : Serveuse, Jockey, Opérateur découpe.",
      tags: ["Service", "Logistique", "Industrie"],
      icon: "work"
    },
    {
      title: "Animation commerciale",
      period: "2009 - 2014",
      company: "Orangina, L'Oreal, Kronenbourg",
      description: "Représentation de marques de premier plan, interaction client directe et développement des compétences relationnelles et de vente.",
      icon: "campaign"
    },
    {
      title: "Infographiste",
      period: "2010",
      company: "Planète Permis",
      icon: "design_services"
    },
    {
      title: "Secrétaire comptable",
      period: "2008 - 2009",
      company: "Inter Coiff",
      icon: "calculate"
    },
    {
      title: "Création d'entreprise",
      period: "2003 - 2008",
      company: "Leeloo informatique",
      description: "Fondation et gestion d'une entreprise d'informatique. Gestion de projet, relation client et résolution de problèmes techniques.",
      icon: "business_center"
    },
    {
      title: "Infographiste",
      period: "2002 - 2003",
      company: "Affi-pub",
      icon: "edit"
    }
  ];

  return (
    <main className="flex-grow w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
      {/* Header Section */}
      <div className="mb-12 text-center relative pt-8 pb-4">
        <svg className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-32 opacity-20 pointer-events-none text-primary-container" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 200 100">
          <path d="M 0,50 Q 50,0 100,50 T 200,50"></path>
          <path d="M 0,60 Q 50,10 100,60 T 200,60"></path>
        </svg>
        <h1 className="font-display-lg text-display-lg text-primary-container mb-4 relative z-10">Expériences Détaillées</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-6 relative z-10">
          Un aperçu approfondi des jalons professionnels qui ont façonné l'expertise et la vision de Digital Zen.
        </p>
        <div className="flex flex-col items-center gap-4 relative z-10">
          <Link
            to="/parcours"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zen-teal text-primary-container hover:bg-primary-container/10 transition-colors bg-white/70 backdrop-blur-md font-label-md text-label-md shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            Retour au parcours
          </Link>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="max-w-3xl mx-auto space-y-8 relative">
        {detailedExperiences.map((exp, idx) => (
          <div key={idx} className="relative flex gap-6 group">
            {/* Icon Column */}
            <div className="flex-shrink-0 z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                idx === 0
                  ? 'bg-primary-container text-on-primary-container shadow-lg'
                  : 'bg-soft-ivory border-2 border-primary-container text-primary-container'
              }`}>
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: exp.iconFilled ? '"FILL" 1' : undefined }}>
                  {exp.icon}
                </span>
              </div>
            </div>

            {/* Content Card */}
            <div className="bg-white/70 backdrop-blur-md border border-white/60 rounded-xl p-6 flex-grow hover:shadow-[0_10px_30px_-10px_rgba(137,194,217,0.3)] transition-all duration-300">
              <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-primary-container font-semibold">
                  {exp.title}
                </h3>
                <span className="px-3 py-1 bg-surface-container text-on-surface-variant rounded-full font-label-sm text-label-sm">
                  {exp.period}
                </span>
              </div>

              {exp.company && (
                <h4 className="font-body-lg text-body-lg text-secondary mb-2">
                  {exp.company}
                </h4>
              )}

              {exp.description && (
                <p className="font-body-md text-body-md text-on-surface-variant mb-2">
                  {exp.description}
                </p>
              )}

              {exp.tags && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-secondary-fixed/50 text-on-secondary-fixed rounded-full font-label-sm text-label-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
