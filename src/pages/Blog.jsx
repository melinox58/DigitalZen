import React from 'react';
import { Link } from 'react-router-dom';
import posts from '../data/posts.json';

export default function Blog() {
  const articles = posts || [];

  return (
    <main className="flex-grow pb-24 md:pb-0">
      {/* Hero Section */}
      <section className="relative w-full pt-16 pb-12 px-margin-mobile md:px-margin-desktop flex flex-col items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2c7da0] mb-6 font-headline">Le Blog Zen</h1>
          <p className="text-lg md:text-xl text-[#2c7da0]/80 font-body leading-relaxed">
            Partages, réflexions et conseils pour une transition numérique sereine.
          </p>
        </div>
      </section>

      {/* Article Feed */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((art) => (
            <article
              key={art.slug}
              className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#2c7da0]/10 hover:shadow-[0_10px_40px_rgba(44,125,160,0.1)] transition-all duration-300 group flex flex-col"
            >
              <div className="aspect-video w-full bg-surface-container overflow-hidden">
                <img
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={art.cover}
                  loading="lazy"
                  width="600"
                  height="338"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#2c7da0]/10 text-[#2c7da0] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {art.category}
                  </span>
                  <time dateTime={art.dateIso} className="text-xs text-[#2c7da0]/50 font-label">
                    {art.formattedDate}
                  </time>
                </div>
                <h2 className="text-xl font-bold text-[#2c7da0] mb-3 group-hover:text-primary transition-colors">
                  {art.title}
                </h2>
                <p className="text-sm text-[#2c7da0]/70 mb-6 line-clamp-3">
                  {art.excerpt}
                </p>
                <Link
                  to={`/blog/${art.slug}`}
                  className="mt-auto flex items-center gap-2 text-[#2c7da0] font-bold text-sm group/link"
                >
                  Lire la suite
                  <span className="material-symbols-outlined text-sm group-hover/link:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
