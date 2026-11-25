export const CONSENT_STORAGE_KEY = "lasies-consent-v1";

/**
 * The cookie banner is part of the server HTML, so first-time visitors see
 * it straight away instead of after the JavaScript has loaded. This inline
 * script runs before the first paint and hides it again (via CSS, see
 * globals.css) for visitors who already made a choice.
 */
export const consentInitScript = `try{if(localStorage.getItem('${CONSENT_STORAGE_KEY}'))document.documentElement.dataset.consent='set'}catch(e){}`;
