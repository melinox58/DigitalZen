import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'coaching',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) return;
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="flex-grow z-10 w-full max-w-[1280px] mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-24">
      {/* Header Section */}
      <section className="mb-12 md:mb-16 text-center relative py-8">
        <svg className="absolute -top-10 left-1/2 -translate-x-1/2 w-64 h-32 opacity-20 pointer-events-none text-primary-container z-0" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 200 100">
          <path d="M 0,50 Q 50,0 100,50 T 200,50"></path>
          <path d="M 0,60 Q 50,10 100,60 T 200,60"></path>
        </svg>
        <div className="relative z-10 text-center max-w-3xl mx-auto px-margin-mobile">
          <h1 className="font-display-lg text-display-lg text-primary-container mb-6">Échangeons sur vos projets</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-4">
            Prêt à entamer votre transition digitale en toute sérénité ? Prenez rendez-vous pour un échange personnalisé ou laissez-nous un message.
          </p>
        </div>
      </section>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Calendar & Socials (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          {/* Primary Action: Calendar Card */}
          <div className="bg-white rounded-xl p-8 hover:shadow-md transition-all flex flex-col items-center justify-center text-center relative overflow-hidden shadow-sm border border-outline-variant/30">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
            <span className="material-symbols-outlined text-[64px] text-zen-teal mb-6" style={{ fontVariationSettings: '"FILL" 0' }}>
              event_available
            </span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface mb-4">Planifier une session</h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md">
              Choisissez le créneau qui vous convient le mieux pour un premier diagnostic ou une session de coaching IT.
            </p>
            <a
              className="bg-primary text-on-primary font-label-md text-label-md px-8 py-4 rounded-full flex items-center gap-2 hover:bg-primary-container transition-colors shadow-lg min-h-[48px]"
              href="https://calendar.google.com/appointments/schedules/AcZssZ371T869AcbpAd0-bCO9XYPoFoDIHpxEz-LnqYFUvobvjTzM0X5Sm9ZBtNdxr-o8KBSPlYXyHXm"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: '"FILL" 1' }}>
                calendar_month
              </span>
              Accéder à l'Agenda Google
            </a>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              className="bg-white rounded-xl p-6 flex items-center gap-4 hover:bg-surface-container-lowest transition-colors border border-outline-variant/50 shadow-sm"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full bg-[#0077b5]/10 flex items-center justify-center text-[#0077b5]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface font-bold">LinkedIn</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Suivez nos actualités</p>
              </div>
            </a>

            <a
              className="bg-white rounded-xl p-6 flex items-center gap-4 hover:bg-surface-container-lowest transition-colors border border-outline-variant/50 shadow-sm"
              href="https://www.facebook.com/profile.php?id=61592730881248"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-12 h-12 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </div>
              <div>
                <p className="font-label-md text-label-md text-on-surface font-bold">Facebook</p>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Rejoignez la page</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right Column: Contact Form (5 cols) */}
        <div className="lg:col-span-5">
          <div className="bg-white rounded-xl p-8 h-full shadow-sm border border-outline-variant/30">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary bg-primary-fixed p-2 rounded-lg" style={{ fontVariationSettings: '"FILL" 0' }}>
                mail
              </span>
              <h3 className="font-headline-lg text-headline-lg text-on-surface">Envoyez un message</h3>
            </div>

            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <span className="material-symbols-outlined text-4xl">check_circle</span>
                </div>
                <h4 className="text-xl font-bold text-[#2c7da0]">Message envoyé !</h4>
                <p className="text-sm text-on-surface-variant max-w-xs">
                  Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: 'coaching', message: '' }); }}
                  className="mt-4 px-6 py-2 bg-primary text-white text-sm rounded-full font-medium"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 flex flex-col">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="name">
                    Nom complet *
                  </label>
                  <input
                    className="w-full bg-soft-ivory border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    type="text"
                  />
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="email">
                    Votre adresse email (professionnelle ou personnelle) *
                  </label>
                  <input
                    className="w-full bg-soft-ivory border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    type="email"
                  />
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="phone">
                    Numéro de téléphone *
                  </label>
                  <input
                    className="w-full bg-soft-ivory border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    type="tel"
                  />
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="subject">
                    Sujet
                  </label>
                  <select
                    className="w-full bg-soft-ivory border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="coaching">Coaching IT</option>
                    <option value="transition">Transition Digitale</option>
                    <option value="accompagnement">Accompagnement personnalisé</option>
                    <option value="information">Demande d'information générale</option>
                    <option value="other">Autre demande</option>
                  </select>
                </div>

                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2" htmlFor="message">
                    Votre message (décrivez votre besoin ou projet)
                  </label>
                  <textarea
                    className="w-full bg-soft-ivory border border-outline-variant/50 rounded-lg px-4 py-3 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary focus:bg-white transition-all outline-none resize-none"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  className="w-full bg-surface-tint text-on-primary font-label-md text-label-md px-6 py-4 rounded-lg hover:bg-primary transition-colors min-h-[48px] flex items-center justify-center gap-2 mt-2"
                  type="submit"
                >
                  <span>Envoyer la demande</span>
                  <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: '"FILL" 1' }}>
                    send
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
