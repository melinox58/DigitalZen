import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projectsData.find(p => p.slug === slug) || projectsData[0] || {};
  const otherProjects = projectsData.filter(p => p.slug !== project.slug).slice(0, 2);

  const siteUrl = 'https://digitalzen.fr';
  const pageUrl = `${siteUrl}/portfolio/${project.slug}`;

  useEffect(() => {
    if (!project.title) return;

    // Title & Meta Description
    document.title = `${project.title} | Portfolio Digital Zen`;

    const setMetaTag = (nameAttr, nameValue, content) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content || '');
    };

    setMetaTag('name', 'description', project.metaDescription);

    // Open Graph Tags
    setMetaTag('property', 'og:title', `${project.title} | Portfolio Digital Zen`);
    setMetaTag('property', 'og:description', project.metaDescription);
    setMetaTag('property', 'og:image', project.cover);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:url', pageUrl);

    // Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', `${project.title} | Portfolio Digital Zen`);
    setMetaTag('name', 'twitter:description', project.metaDescription);
    setMetaTag('name', 'twitter:image', project.cover);

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    // JSON-LD Structured Data (CreativeWork)
    let jsonLdScript = document.getElementById('jsonld-creativework');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'jsonld-creativework';
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.metaDescription,
      "image": [project.cover, ...(project.images || [])],
      "dateCreated": project.dateIso,
      "author": {
        "@type": "Organization",
        "name": "Digital Zen"
      },
      "provider": project.client ? {
        "@type": "Organization",
        "name": project.client
      } : undefined,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": pageUrl
      }
    };

    jsonLdScript.textContent = JSON.stringify(schemaData);

    return () => {
      if (jsonLdScript && jsonLdScript.parentNode) {
        jsonLdScript.parentNode.removeChild(jsonLdScript);
      }
    };
  }, [project, pageUrl]);

  if (!project.title) {
    return (
      <main className="flex-grow flex items-center justify-center py-20 text-center">
        <p className="text-[#2c7da0] text-xl font-headline">Projet introuvable.</p>
      </main>
    );
  }

  return (
    <main className="flex-grow w-full max-w-[1100px] mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12 relative">
      {/* Return Link */}
      <div className="mb-8">
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-[#2c7da0] font-label font-semibold text-sm hover:underline"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Retour au portfolio
        </Link>
      </div>

      {/* Hero Section Projet */}
      <article className="bg-surface-container-lowest rounded-[24px] p-6 md:p-10 shadow-[0_10px_30px_-10px_rgba(0,100,133,0.15)] relative overflow-hidden mb-section-gap border border-outline-variant/20">
        <header className="mb-8 relative z-10">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="bg-surface-container px-3 py-1 rounded-full font-label text-[12px] font-semibold text-primary tracking-wide uppercase">
              {project.categoryTag}
            </span>
            {project.client && (
              <span className="bg-[#2c7da0]/10 text-[#2c7da0] px-3 py-1 rounded-full font-label text-[12px] font-semibold tracking-wide">
                Client : {project.client}
              </span>
            )}
            <span className="text-outline text-sm font-label flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              <time dateTime={project.dateIso}>{project.formattedDate}</time>
            </span>
          </div>

          <h1 className="font-headline text-[32px] md:text-[48px] font-bold leading-tight text-on-surface mb-6 tracking-tight">
            {project.title}
          </h1>

          <p className="font-body text-[18px] text-on-surface-variant leading-relaxed max-w-3xl mb-6">
            {project.description}
          </p>

          {project.externalUrl && (
            <div className="mt-4">
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-label font-semibold text-sm hover:bg-primary-container transition-all shadow-md"
              >
                Voir la galerie du projet
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          )}
        </header>

        {/* Cover Image */}
        <figure className="w-full h-[320px] md:h-[500px] rounded-2xl overflow-hidden mb-12 relative group shadow-md">
          <img
            alt={project.title}
            className="w-full h-full object-cover"
            src={project.cover}
            loading="lazy"
            width="1200"
            height="675"
          />
        </figure>

        {/* Full Markdown Description Content */}
        <div
          className="prose prose-lg max-w-none font-body text-on-surface-variant leading-relaxed [&_h2]:font-headline [&_h2]:text-[28px] [&_h2]:font-semibold [&_h2]:text-primary [&_h2]:mt-10 [&_h2]:mb-6 [&_p]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6"
          dangerouslySetInnerHTML={{ __html: project.htmlContent }}
        />

        {/* Image Gallery */}
        {project.images && project.images.length > 0 && (
          <div className="mt-12 pt-8 border-t border-outline-variant/20">
            <h3 className="font-headline text-[22px] font-semibold text-primary mb-6">Galerie du projet</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.images.map((imgUrl, idx) => (
                <div key={idx} className="rounded-xl overflow-hidden shadow-sm border border-outline-variant/15 aspect-video">
                  <img
                    alt={`${project.title} - Aperçu ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    src={imgUrl}
                    loading="lazy"
                    width="600"
                    height="338"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </article>

      {/* CTA Section */}
      <section className="mb-section-gap flex justify-center w-full">
        <div className="bg-white/70 backdrop-blur-md p-8 md:p-12 rounded-[24px] text-center w-full max-w-3xl relative overflow-hidden shadow-lg border border-white/80">
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="font-headline text-[28px] font-bold text-on-surface mb-4">Un projet similaire en tête ?</h2>
            <p className="font-body text-on-surface-variant mb-8 max-w-lg mx-auto">
              Discutons de vos besoins et concevons ensemble une solution épurée et sur-mesure.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-full font-label text-[14px] font-semibold hover:bg-primary-container transition-all hover:scale-105 shadow-[0_4px_20px_rgba(0,100,133,0.3)]"
            >
              Contactez-nous
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section className="mb-section-gap">
          <h3 className="font-headline text-[24px] font-semibold text-on-surface mb-8">Découvrir d'autres réalisations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {otherProjects.map((item) => (
              <Link
                key={item.slug}
                to={`/portfolio/${item.slug}`}
                className="group block bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-outline-variant/20"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={item.cover}
                    loading="lazy"
                    width="400"
                    height="200"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-label text-primary-container font-semibold mb-2 block uppercase tracking-wider">
                    {item.categoryTag}
                  </span>
                  <h4 className="font-headline text-[18px] font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-body text-[14px] text-on-surface-variant line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
