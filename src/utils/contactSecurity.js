/**
 * Utilitaire de sécurité pour le formulaire de contact DigitalZen.
 * - Assainissement des données (Anti-XSS / Injection HTML)
 * - Validation stricte du format email
 * - Limitation de fréquence (Rate Limiting : max 3 envois / 10 min)
 */

/**
 * Nettoie et échappe les caractères HTML spéciaux pour prévenir l'injection XSS.
 * @param {string} str 
 * @returns {string}
 */
export function sanitizeInput(str) {
  if (typeof str !== 'string') return '';
  return str
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Valide le format de l'adresse email (RFC-compliant regex).
 * @param {string} email 
 * @returns {boolean}
 */
export function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email.trim());
}

/**
 * Valide un numéro de téléphone basique.
 * @param {string} phone 
 * @returns {boolean}
 */
export function isValidPhone(phone) {
  if (!phone || typeof phone !== 'string') return false;
  const cleaned = phone.trim().replace(/[\s\-\.\(\)\+]/g, '');
  return cleaned.length >= 6 && /^\d+$/.test(cleaned);
}

/**
 * Vérifie la limitation de fréquence dans le localStorage (Max 3 soumissions par fenêtre de 10 min).
 * @param {number} maxAllowed 
 * @param {number} windowMs 
 * @returns {{ allowed: boolean, remainingMinutes?: number }}
 */
export function checkRateLimit(maxAllowed = 3, windowMs = 10 * 60 * 1000) {
  const STORAGE_KEY = 'dz_contact_rate_limit';
  const now = Date.now();
  let timestamps = [];

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      timestamps = JSON.parse(raw);
    }
  } catch (err) {
    timestamps = [];
  }

  // Filtrer uniquement les envois réalisés dans la fenêtre de temps définie (ex: 10 minutes)
  timestamps = timestamps.filter(t => now - t < windowMs);

  if (timestamps.length >= maxAllowed) {
    const oldestTimestamp = timestamps[0];
    const remainingMs = windowMs - (now - oldestTimestamp);
    const remainingMinutes = Math.ceil(remainingMs / (1000 * 60));
    return { allowed: false, remainingMinutes };
  }

  // Enregistrer ce nouvel envoi
  timestamps.push(now);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timestamps));
  } catch (err) {
    // Ignorer si localStorage indisponible
  }

  return { allowed: true };
}
