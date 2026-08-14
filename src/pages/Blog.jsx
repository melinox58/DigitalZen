import React from 'react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const articles = [
    {
      id: 1,
      title: "Le minimalisme numérique au quotidien",
      date: "15 Août 2026",
      category: "Minimalisme",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRIUsUzOVcygJHhzfGD-k_RVLjJ4zXwOdU4t2JUQYebJyuUdj0q7Wkcuvlld9b3qpKbVChO711vgdQGALB_4vnYKLCTnuheLdPLLPjqNPlHDOG-ZIXBAauJ3yVvkLQ1yt5vnHQ_ABsvLlj-y1YhegmmyB64ljJwLikQ2EHFpn609sUN8pZz8sVHwhrN8Z---4KEPZe-z4uko0zrkLKyGPpSEaxrBk5w0nGT7LdLN5wtKfCTUq3lIbSyw",
      excerpt: "Comment reprendre le contrôle de votre attention dans un monde hyperconnecté et retrouver la sérénité face à vos écrans."
    },
    {
      id: 2,
      title: "Comment apprivoiser ses outils sans stress",
      date: "10 Août 2026",
      category: "Bien-être",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCvyE8EFHiochB-XlxlEotfFl63OiqwkYBPeQdrhVwyRdtf3oAfAXylVW0j6A7IhepLWNVaqa9hE7UVKJ-T6F0J14M4Acugs4o_n4_xvfvneiwr_ohiEb3uuNRdP4aWS4536HtqSAhvqHe0iDv5fZYB1FHCKHds3lHgfHdvcp5FzCyof_K_OYsjiRSIc3OWYfEuoS4YJv97QVV1IXpw1pq-ewU8rmQoIabqJwJv_3Sh466NOfbWKSx6Ew",
      excerpt: "Des méthodes simples pour transformer votre relation avec la technologie en une collaboration apaisée et productive."
    },
    {
      id: 3,
      title: "Organiser sa boîte mail efficacement",
      date: "05 Août 2026",
      category: "Technique",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_mBM_a5CFir0nIkhFA6vEVEEJL0EAsZGQK6lZZgbLv2appgotZg4WHFwAe-rH07-ybpjNjCdd9PQ1KTjze56RDwIHIhI56g3YygGBvNk_cQerJoMQKsRk3ye8udwpXFCIZGlWJintaAOAutPd0pgTHGmEF9rRWuSFCJNAPNkDaQ8A3kEKyL3iYMlKORnBkQko-6D0M4rlOWeOS6wQAkoJIkuoWBXJOnLbFjr4baVcv2JxXjWY-qo_PA",
      excerpt: "Découvrez les secrets de l'Inbox Zero et comment automatiser vos flux de travail pour gagner du temps précieux."
    }
  ];

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
              key={art.id}
              className="bg-white/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#2c7da0]/10 hover:shadow-[0_10px_40px_rgba(44,125,160,0.1)] transition-all duration-300 group flex flex-col"
            >
              <div className="aspect-video w-full bg-surface-container overflow-hidden">
                <img
                  alt={art.category}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={art.image}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-[#2c7da0]/10 text-[#2c7da0] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {art.category}
                  </span>
                  <span className="text-xs text-[#2c7da0]/50 font-label">{art.date}</span>
                </div>
                <h2 className="text-xl font-bold text-[#2c7da0] mb-3 group-hover:text-primary transition-colors">
                  {art.title}
                </h2>
                <p className="text-sm text-[#2c7da0]/70 mb-6 line-clamp-3">
                  {art.excerpt}
                </p>
                <Link
                  to="/article"
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
