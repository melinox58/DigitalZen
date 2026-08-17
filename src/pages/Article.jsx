import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import posts from '../data/posts.json';

export default function Article() {
  const { slug, id } = useParams();
  const currentSlug = slug || id;

  // Trouver l'article correspondant ou le premier par défaut
  const article = posts.find(p => p.slug === currentSlug) || posts[0] || {};
  const relatedPosts = posts.filter(p => p.slug !== article.slug).slice(0, 2);

  const siteUrl = 'https://digitalzen.fr';
  const pageUrl = `${siteUrl}/blog/${article.slug}`;

  // Optimisations SEO dynamiques (Head Tags, Canonical, Open Graph, Twitter Card, JSON-LD)
  useEffect(() => {
    if (!article.title) return;

    // Title & Meta Description
    document.title = `${article.title} | Digital Zen`;

    const setMetaTag = (nameAttr, nameValue, content) => {
      let element = document.querySelector(`meta[${nameAttr}="${nameValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(nameAttr, nameValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content || '');
    };

    setMetaTag('name', 'description', article.metaDescription);

    // Open Graph Tags
    setMetaTag('property', 'og:title', `${article.title} | Digital Zen`);
    setMetaTag('property', 'og:description', article.metaDescription);
    setMetaTag('property', 'og:image', article.cover);
    setMetaTag('property', 'og:type', 'article');
    setMetaTag('property', 'og:url', pageUrl);

    // Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', `${article.title} | Digital Zen`);
    setMetaTag('name', 'twitter:description', article.metaDescription);
    setMetaTag('name', 'twitter:image', article.cover);

    // Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    // JSON-LD Structured Data (BlogPosting)
    let jsonLdScript = document.getElementById('jsonld-blogposting');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'jsonld-blogposting';
      jsonLdScript.type = 'application/ld+json';
      document.head.appendChild(jsonLdScript);
    }

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": article.title,
      "description": article.metaDescription,
      "image": [article.cover],
      "datePublished": article.dateIso,
      "dateModified": article.updatedDateIso || article.dateIso,
      "author": {
        "@type": "Person",
        "name": article.author || "Mélanie"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Digital Zen",
        "url": siteUrl
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": pageUrl
      }
    };

    jsonLdScript.textContent = JSON.stringify(schemaData);

    return () => {
      // Nettoyage au démontage
      if (jsonLdScript && jsonLdScript.parentNode) {
        jsonLdScript.parentNode.removeChild(jsonLdScript);
      }
    };
  }, [article, pageUrl]);

  if (!article.title) {
    return (
      <main className="flex-grow flex items-center justify-center py-20 text-center">
        <p className="text-[#2c7da0] text-xl font-headline">Article introuvable.</p>
      </main>
    );
  }

  return (
    <main className="flex-grow w-full max-w-[1000px] mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-12 relative">
      {/* Hero Article Section */}
      <article className="bg-surface-container-lowest rounded-[24px] p-6 md:p-10 shadow-[0_10px_30px_-10px_rgba(0,100,133,0.15)] relative overflow-hidden mb-section-gap border border-outline-variant/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

        <header className="mb-8 relative z-10">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <span className="bg-surface-container px-3 py-1 rounded-full font-label text-[12px] font-semibold text-primary tracking-wide uppercase">
              {article.category}
            </span>
            <span className="text-outline text-sm font-label flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px]">calendar_today</span>
              <time dateTime={article.dateIso}>{article.formattedDate}</time>
              {article.updatedDate && (
                <span className="text-[#2c7da0]/70 text-xs italic font-normal">
                  • Mis à jour le <time dateTime={article.updatedDateIso}>{article.formattedUpdatedDate}</time>
                </span>
              )}
            </span>
          </div>
          <h1 className="font-headline text-[32px] md:text-[48px] font-bold leading-tight text-on-surface mb-6 tracking-tight">
            {article.title}
          </h1>
          <p className="font-body text-[18px] text-on-surface-variant leading-relaxed max-w-3xl">
            {article.excerpt}
          </p>
        </header>

        <figure className="w-full h-[300px] md:h-[450px] rounded-xl overflow-hidden mb-12 relative group">
          <img
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={article.cover}
            loading="lazy"
            width="800"
            height="450"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface/20 to-transparent"></div>
        </figure>

        {/* Article HTML Content (Pre-rendered by marked) */}
        <div
          className="prose prose-lg max-w-none font-body text-on-surface-variant leading-relaxed [&_h2]:font-headline [&_h2]:text-[28px] [&_h2]:font-semibold [&_h2]:text-primary [&_h2]:mt-12 [&_h2]:mb-6 [&_p]:mb-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-6 [&_blockquote]:border-l-4 [&_blockquote]:border-primary-container [&_blockquote]:pl-6 [&_blockquote]:py-4 [&_blockquote]:my-8 [&_blockquote]:bg-surface-container-low/50 [&_blockquote]:rounded-r-lg [&_blockquote]:italic [&_blockquote]:text-[18px] [&_blockquote]:text-on-surface"
          dangerouslySetInnerHTML={{ __html: article.htmlContent }}
        />

        {/* Author / Conclusion Section */}
        <div className="mt-16 p-8 rounded-2xl bg-soft-ivory border border-outline-variant/30 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-[120px] text-primary">spa</span>
          </div>
          <h3 className="font-headline text-[20px] font-semibold text-primary mb-4">
            Le mot de {article.author || 'Mélanie'}
          </h3>
          <div
            className="font-body text-on-surface-variant italic mb-0 relative z-10 [&_a]:text-primary [&_a]:underline"
            dangerouslySetInnerHTML={{ __html: article.melanieNoteHtml }}
          />
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
      {relatedPosts.length > 0 && (
        <section className="mb-section-gap">
          <h3 className="font-headline text-[24px] font-semibold text-on-surface mb-8">Pour aller plus loin</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((rel) => (
              <Link
                key={rel.slug}
                to={`/blog/${rel.slug}`}
                className="group block bg-surface-container-lowest rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-outline-variant/20"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    alt={rel.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={rel.cover}
                    loading="lazy"
                    width="400"
                    height="200"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-label text-primary-container font-semibold mb-2 block uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="font-headline text-[18px] font-semibold text-on-surface mb-2 group-hover:text-primary transition-colors">
                    {rel.title}
                  </h4>
                  <p className="font-body text-[14px] text-on-surface-variant line-clamp-2">
                    {rel.excerpt}
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
