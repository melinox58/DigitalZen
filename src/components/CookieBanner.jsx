import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../context/CookieContext';

export default function CookieBanner() {
  const {
    consent,
    acceptAll,
    rejectAll,
    savePreferences,
    showModal,
    setShowModal
  } = useCookieConsent();

  const [tempPreferences, setTempPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    setTempPreferences({
      essential: true,
      analytics: consent.analytics,
      marketing: consent.marketing
    });
  }, [consent, showModal]);

  const handleToggle = (category) => {
    if (category === 'essential') return;
    setTempPreferences((prev) => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleSaveModal = () => {
    savePreferences(tempPreferences);
  };

  // Do not render banner if already decided and modal is closed
  if (consent.decided && !showModal) {
    return null;
  }

  return (
    <>
      {/* 1. Bottom Consent Banner (shown on first visit if not decided) */}
      {!consent.decided && !showModal && (
        <aside
          aria-label="Consentement aux cookies"
          className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 max-w-container-max mx-auto z-50 bg-white/95 backdrop-blur-md border border-[#2c7da0]/20 rounded-2xl p-6 shadow-[0_10px_40px_rgba(0,100,133,0.15)] flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 animate-fadeIn"
        >
          <div className="text-left flex-grow">
            <h4 className="font-bold text-[#2c7da0] text-lg mb-1 flex items-center gap-2">
              <span className="material-symbols-outlined text-2xl">cookie</span>
              Respect de votre vie privée
            </h4>
            <p className="text-sm text-on-surface-variant max-w-2xl leading-relaxed">
              Nous utilisons des cookies essentiels au fonctionnement du site et des cookies analytiques optionnels pour mesurer l'audience de nos contenus en toute sérénité.{' '}
              <Link to="/mentions-legales" className="underline text-[#2c7da0] hover:text-[#006485] font-semibold">
                En savoir plus
              </Link>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto shrink-0 justify-end">
            <button
              onClick={rejectAll}
              className="px-5 py-2.5 rounded-full border border-[#2c7da0]/30 text-[#2c7da0] text-sm font-semibold hover:bg-surface-container transition-colors min-h-[44px]"
            >
              Tout refuser
            </button>
            <button
              onClick={() => setShowModal(true)}
              className="px-5 py-2.5 rounded-full border border-[#2c7da0]/30 text-[#2c7da0] text-sm font-semibold hover:bg-surface-container transition-colors min-h-[44px]"
            >
              Personnaliser
            </button>
            <button
              onClick={acceptAll}
              className="px-6 py-2.5 rounded-full bg-[#2c7da0] text-white text-sm font-semibold hover:bg-[#006485] transition-all shadow-md min-h-[44px]"
            >
              Tout accepter
            </button>
          </div>
        </aside>
      )}

      {/* 2. Detailed Customization Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl border border-outline-variant/30 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-6 border-b border-outline-variant/20 pb-4">
                <h3 className="text-2xl font-bold text-[#2c7da0] flex items-center gap-2">
                  <span className="material-symbols-outlined text-3xl">tune</span>
                  Gestion des préférences cookies
                </h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-on-surface-variant/70 hover:text-on-surface p-1 rounded-full hover:bg-surface-container transition-colors"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>

              <p className="text-sm text-on-surface-variant mb-6">
                Personnalisez vos choix ci-dessous. Vous pouvez modifier ces préférences à tout moment depuis le bas de page.
              </p>

              {/* Categories */}
              <div className="space-y-4 mb-8">
                {/* Essential Cookies */}
                <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/20 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-bold text-on-surface text-base">Cookies strictement nécessaires</h4>
                      <span className="bg-[#2c7da0]/10 text-[#2c7da0] text-xs px-2.5 py-0.5 rounded-full font-semibold">
                        Toujours actif
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant">
                      Ces cookies sont nécessaires au fonctionnement de base du site (session, sécurité, mémorisation de vos choix RGPD). Ils ne peuvent pas être désactivés.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={true}
                    disabled={true}
                    className="mt-1 h-5 w-5 rounded border-gray-300 text-primary cursor-not-allowed opacity-60"
                  />
                </div>

                {/* Analytics Cookies */}
                <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/20 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-on-surface text-base mb-1">Cookies de mesure d'audience (Analytiques)</h4>
                    <p className="text-xs text-on-surface-variant">
                      Ces cookies nous permettent d'analyser anonymement l'utilisation du site afin d'en améliorer la performance, les contenus et l'ergonomie.
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer mt-1">
                    <input
                      type="checkbox"
                      checked={tempPreferences.analytics}
                      onChange={() => handleToggle('analytics')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2c7da0]"></div>
                  </label>
                </div>

                {/* Marketing Cookies */}
                <div className="p-4 bg-surface-container-low rounded-xl border border-outline-variant/20 flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-on-surface text-base mb-1">Cookies Marketing &amp; Réseaux Sociaux</h4>
                    <p className="text-xs text-on-surface-variant">
                      Utilisés pour afficher du contenu personnalisé ou des widgets interactifs (ex: intégration de vidéos ou flux sociaux).
                    </p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer mt-1">
                    <input
                      type="checkbox"
                      checked={tempPreferences.marketing}
                      onChange={() => handleToggle('marketing')}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#2c7da0]"></div>
                  </label>
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 border-t border-outline-variant/20 pt-4">
              <Link
                to="/mentions-legales"
                onClick={() => setShowModal(false)}
                className="text-xs text-[#2c7da0] underline hover:text-[#006485]"
              >
                Consulter les Mentions Légales &amp; RGPD
              </Link>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                <button
                  onClick={rejectAll}
                  className="px-4 py-2 rounded-full border border-outline-variant text-on-surface-variant text-sm font-medium hover:bg-surface-container transition-colors"
                >
                  Tout refuser
                </button>
                <button
                  onClick={handleSaveModal}
                  className="px-6 py-2 rounded-full bg-[#2c7da0] text-white text-sm font-semibold hover:bg-[#006485] transition-all shadow-sm"
                >
                  Enregistrer mes choix
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
