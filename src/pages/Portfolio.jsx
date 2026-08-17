import React, { useState } from 'react';

export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      category: 'web',
      tag: 'SITES WEB',
      title: 'Proposition de site web',
      description: 'Architecture épurée sous une interface fluide. Une refonte technique complète alliant performance brute et esthétisme minimaliste.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfV_HLAAcppkEeMt9MSqvSkrYrCIAIldw3DtrsGsx_Mn_dJMcUDjliP72TVP96036mjUl-X_FRkgJjtqvJf-9DkLsftq8iqAVNRkDxQh9zjgWFssF6HvzEaaK20R-lCbqZQU7uvPAYWhtM6-Oed7Zjuuc9ixrFekLx0hbv6t3iCg8adHT330Iq64-aAjMQJC67Oe_Ni32i7fpfFro_Q_vwdmxVd5629uh6ofb60qEW2EKTg7TZdIhxAg'
    },
    {
      id: 2,
      category: 'dessins',
      tag: 'DESSINS',
      title: 'Illustration manuelle',
      description: 'Création ou reproduction de dessins manuels.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZnwVjXswgkpIVW04O7ScVKPbcJLBHgQHo85jgIJTbNpJt7qAipm5k9Er9IcwGARDzuQ0NJzlzJcn1m61VPPf3ILMct9bMhwFt7mErNuKdHEX5Cwvn3nFeF1EU7XuWmbnNLL_j3rIoE-dsqlm3fHhMa9lRigwpJwf2ddWMhkE4o7XVOaENR8yYxh7XVLEi-xK20spJfo91TmmZ2sj5XDW9htltqCOwWRX8NDV6u_0YxIR18SNfuFjyqA'
    },
    {
      id: 3,
      category: 'plv',
      tag: 'PLV',
      title: 'Toutes PLV et supports promotionnels',
      description: 'Supports physiques conçus pour capter l\'attention lors d\'événements. Ex: totems, bannières, flyers, etc.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB080ldtwHlaDI0QIcjpTPltMwttfPkTjGtr5KmHsaMg9cBqsMump-xC_-mh2f_EYOPoH5Xkkm5xxrG7HHB0DfFPSgCgn_9x_hUmgvESJHowGg8L8ZItaohUs6wMa14pnvAnlyW0tLHQh8rA7i-YWKMy4WH6mbKxvLL4YUjPm9NWydZ0Qvq-ucLfw6YKKwJiznlYBMbtDOFkTPZmqduGHUU-Pu0hG2eAaX9VIMW8L4xZMMSsgSL96p89w'
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.category === filter);

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
            onClick={() => setFilter('web')}
            className={`px-6 py-2 rounded-full font-label text-sm transition-all duration-300 ${filter === 'web'
              ? 'bg-primary text-on-primary shadow-[0_10px_40px_-10px_rgba(70,143,175,0.12)] font-semibold'
              : 'bg-surface-container text-[#2c7da0] hover:bg-[#2c7da0]/10'
              }`}
          >
            Sites Web
          </button>

          <button
            onClick={() => setFilter('dessins')}
            className={`px-6 py-2 rounded-full font-label text-sm transition-all duration-300 ${filter === 'dessins'
              ? 'bg-primary text-on-primary shadow-[0_10px_40px_-10px_rgba(70,143,175,0.12)] font-semibold'
              : 'bg-surface-container text-[#2c7da0] hover:bg-[#2c7da0]/10'
              }`}
          >
            Dessins
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
            key={item.id}
            className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_40px_-10px_rgba(70,143,175,0.12)] hover:shadow-[0_20px_50px_rgba(44,125,160,0.15)] transition-all duration-500 group flex flex-col border border-outline-variant/20"
          >
            <div className="aspect-video w-full overflow-hidden">
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src={item.image}
              />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <span className="inline-block bg-[#2c7da0]/10 text-[#2c7da0] px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4 w-fit">
                {item.tag}
              </span>
              <h2 className="text-2xl font-bold text-[#2c7da0] mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h2>
              <p className="text-on-surface-variant/70 text-sm leading-relaxed mb-6 line-clamp-3">
                {item.description}
              </p>
              <a className="mt-auto flex items-center gap-2 text-[#2c7da0] font-bold text-sm group/link" href="#">
                Voir le projet
                <span className="material-symbols-outlined text-lg group-hover/link:translate-x-2 transition-transform">
                  arrow_right_alt
                </span>
              </a>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
