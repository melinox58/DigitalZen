import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects.json';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = projectsData || [];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter || (filter === 'sites-web' && p.category === 'web') || (filter === 'dessin' && p.category === 'dessins'));

  return (
    <main className="flex-grow pt-12 pb-24 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto w-full relative z-10">
      {/* Header Section */}
      <section className="relative w-full pt-12 pb-12 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#2c7da0] mb-6 font-headline tracking-tight">Portfolio</h1>
        <p className="text-lg md:text-xl text-on-surface-variant/70 font-body leading-relaxed max-w-3xl mx-auto">
          Une sélection de nos créations numériques, alliant précision technique et harmonie visuelle pour des expériences sereines.
        </p>
      </section>

      {/* Filter Bar */}
      <section className="mb-12">
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-label text-sm transition-all duration-300 ${filter === 'all'
              ? 'bg-primary text-on-primary shadow-[0_10px_40px_-10px_rgba(70,143,175,0.12)] font-semibold'
              : 'bg-surface-container text-[#2c7da0] hover:bg-[#2c7da0]/10'
              }`}
          >
            Tous
          </button>

          <button
            onClick={() => setFilter('sites-web')}
            className={`px-6 py-2 rounded-full font-label text-sm transition-all duration-300 ${filter === 'sites-web'
              ? 'bg-primary text-on-primary shadow-[0_10px_40px_-10px_rgba(70,143,175,0.12)] font-semibold'
              : 'bg-surface-container text-[#2c7da0] hover:bg-[#2c7da0]/10'
              }`}
          >
            Sites Web
          </button>

          <button
            onClick={() => setFilter('dessin')}
            className={`px-6 py-2 rounded-full font-label text-sm transition-all duration-300 ${filter === 'dessin'
              ? 'bg-primary text-on-primary shadow-[0_10px_40px_-10px_rgba(70,143,175,0.12)] font-semibold'
              : 'bg-surface-container text-[#2c7da0] hover:bg-[#2c7da0]/10'
              }`}
          >
            Dessin
          </button>

          <button
            onClick={() => setFilter('plv')}
            className={`px-6 py-2 rounded-full font-label text-sm transition-all duration-300 ${filter === 'plv'
              ? 'bg-primary text-on-primary shadow-[0_10px_40px_-10px_rgba(70,143,175,0.12)] font-semibold'
              : 'bg-surface-container text-[#2c7da0] hover:bg-[#2c7da0]/10'
              }`}
          >
            PLV
          </button>
        </div>
      </section>

      {/* Bento Grid Portfolio */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((item) => (
          <div
            key={item.slug}
            className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(70,143,175,0.12)] hover:shadow-[0_20px_50px_rgba(44,125,160,0.15)] transition-all duration-500 group flex flex-col border border-outline-variant/20"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={item.cover}
                loading="lazy"
                width="600"
                height="338"
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="inline-block bg-[#2c7da0]/10 text-[#2c7da0] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 w-fit">
                {item.categoryTag}
              </span>
              <h2 className="text-2xl font-bold text-[#2c7da0] mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h2>
              <p className="text-on-surface-variant/70 text-sm leading-relaxed mb-6 line-clamp-3">
                {item.description}
              </p>
              {item.externalUrl ? (
                <a
                  href={item.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto flex items-center gap-2 text-[#2c7da0] font-bold text-sm group/link"
                >
                  Voir la galerie du projet
                  <span className="material-symbols-outlined text-lg group-hover/link:translate-x-2 transition-transform">
                    open_in_new
                  </span>
                </a>
              ) : (
                <Link
                  to={`/portfolio/${item.slug}`}
                  className="mt-auto flex items-center gap-2 text-[#2c7da0] font-bold text-sm group/link"
                >
                  Voir le projet
                  <span className="material-symbols-outlined text-lg group-hover/link:translate-x-2 transition-transform">
                    arrow_right_alt
                  </span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
