import React, { createContext, useContext, useState, useEffect } from 'react';

const CookieContext = createContext();

const STORAGE_KEY = 'digitalzen_cookie_consent';

const DEFAULT_CONSENT = {
  essential: true,
  analytics: false,
  marketing: false,
  decided: false
};

export function CookieProvider({ children }) {
  const [consent, setConsent] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return { ...DEFAULT_CONSENT, ...parsed, essential: true, decided: true };
      }
    } catch (e) {
      console.error('Error reading cookie consent from localStorage', e);
    }
    return DEFAULT_CONSENT;
  });

  const [showModal, setShowModal] = useState(false);

  const saveConsentState = (newConsent) => {
    const updated = { ...newConsent, essential: true, decided: true };
    setConsent(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving cookie consent to localStorage', e);
    }
  };

  const acceptAll = () => {
    saveConsentState({
      essential: true,
      analytics: true,
      marketing: true
    });
    setShowModal(false);
  };

  const rejectAll = () => {
    saveConsentState({
      essential: true,
      analytics: false,
      marketing: false
    });
    setShowModal(false);
  };

  const savePreferences = (preferences) => {
    saveConsentState(preferences);
    setShowModal(false);
  };

  const openPreferences = () => {
    setShowModal(true);
  };

  /**
   * Utility helper function:
   * Executes a callback or loads a script ONLY if the given category is consented to.
   *
   * @param {'analytics' | 'marketing'} category
   * @param {Function} callback
   */
  const loadIfConsented = (category, callback) => {
    if (consent.decided && consent[category] && typeof callback === 'function') {
      callback();
    }
  };

  return (
    <CookieContext.Provider
      value={{
        consent,
        acceptAll,
        rejectAll,
        savePreferences,
        openPreferences,
        showModal,
        setShowModal,
        loadIfConsented
      }}
    >
      {children}
    </CookieContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieProvider');
  }
  return context;
}
