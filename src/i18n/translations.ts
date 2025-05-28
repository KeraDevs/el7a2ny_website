// translations.ts - Updated to support modular translation files
// English translations
import enCommon from "./locales/en/common.json";
import enNavbar from "./locales/en/navbar.json";
import enFooter from "./locales/en/footer.json";
import enHome from "./locales/en/home.json";
import enAbout from "./locales/en/about.json";
import enServices from "./locales/en/services.json";
import enHowItWorks from "./locales/en/how-it-works.json";
import enWorkshops from "./locales/en/workshops.json";
import enContact from "./locales/en/contact.json";
import enAuth from "./locales/en/auth.json";
import enFaq from "./locales/en/faq.json";
import enPricing from "./locales/en/pricing.json";
import enPrivacyPolicy from "./locales/en/privacy-policy.json";
import enTermsOfService from "./locales/en/terms-of-service.json";
import enRefundPolicy from "./locales/en/refund-policy.json";
import enCookiePolicy from "./locales/en/cookie-policy.json";

// Arabic translations
import arCommon from "./locales/ar/common.json";
import arNavbar from "./locales/ar/navbar.json";
import arFooter from "./locales/ar/footer.json";
import arHome from "./locales/ar/home.json";
import arAbout from "./locales/ar/about.json";
import arServices from "./locales/ar/services.json";
import arHowItWorks from "./locales/ar/how-it-works.json";
import arWorkshops from "./locales/ar/workshops.json";
import arContact from "./locales/ar/contact.json";
import arAuth from "./locales/ar/auth.json";
import arFaq from "./locales/ar/faq.json";
import arPricing from "./locales/ar/pricing.json";
import arPrivacyPolicy from "./locales/ar/privacy-policy.json";
import arTermsOfService from "./locales/ar/terms-of-service.json";
import arRefundPolicy from "./locales/ar/refund-policy.json";
import arCookiePolicy from "./locales/ar/cookie-policy.json";

export const translations = {
  en: {
    common: enCommon,
    navbar: enNavbar,
    footer: enFooter,
    home: enHome,
    about: enAbout,
    services: enServices,
    "how-it-works": enHowItWorks,
    workshops: enWorkshops,
    contact: enContact,
    auth: enAuth,
    faq: enFaq,
    pricing: enPricing,
    "privacy-policy": enPrivacyPolicy,
    "terms-of-service": enTermsOfService,
    "refund-policy": enRefundPolicy,
    "cookie-policy": enCookiePolicy,
  },
  ar: {
    common: arCommon,
    navbar: arNavbar,
    footer: arFooter,
    home: arHome,
    about: arAbout,
    services: arServices,
    "how-it-works": arHowItWorks,
    workshops: arWorkshops,
    contact: arContact,
    auth: arAuth,
    faq: arFaq,
    pricing: arPricing,
    "privacy-policy": arPrivacyPolicy,
    "terms-of-service": arTermsOfService,
    "refund-policy": arRefundPolicy,
    "cookie-policy": arCookiePolicy,
  },
};

// Helper function to get translations for a specific page
export const getPageTranslations = (language: string, page: string) => {
  const lang = language as keyof typeof translations;
  return (
    translations[lang]?.[page as keyof (typeof translations)[typeof lang]] || {}
  );
};

// Helper function to get common translations
export const getCommonTranslations = (language: string) => {
  const lang = language as keyof typeof translations;
  return translations[lang]?.common || {};
};

// Helper function to get navbar translations
export const getNavbarTranslations = (language: string) => {
  const lang = language as keyof typeof translations;
  return translations[lang]?.navbar || {};
};

// Helper function to get footer translations
export const getFooterTranslations = (language: string) => {
  const lang = language as keyof typeof translations;
  return translations[lang]?.footer || {};
};
