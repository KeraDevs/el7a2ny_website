"use client";
import { useParams } from "next/navigation";
import {
  translations,
  getPageTranslations,
  getCommonTranslations,
  getNavbarTranslations,
  getFooterTranslations,
} from "./translations";

// Hook for accessing translations in components
export const useTranslations = () => {
  const params = useParams();
  const language = (params?.lng as string) || "en";

  return {
    // Get translations for a specific page
    t: (page: string) => getPageTranslations(language, page),

    // Get common translations
    common: getCommonTranslations(language),

    // Get navbar translations
    navbar: getNavbarTranslations(language),

    // Get footer translations
    footer: getFooterTranslations(language),

    // Get specific page translations directly
    home: getPageTranslations(language, "home"),
    about: getPageTranslations(language, "about"),
    services: getPageTranslations(language, "services"),
    contact: getPageTranslations(language, "contact"),
    auth: getPageTranslations(language, "auth"),
    faq: getPageTranslations(language, "faq"),
    pricing: getPageTranslations(language, "pricing"),
    workshops: getPageTranslations(language, "workshops"),
    howItWorks: getPageTranslations(language, "how-it-works"),
    privacyPolicy: getPageTranslations(language, "privacy-policy"),
    termsOfService: getPageTranslations(language, "terms-of-service"),
    refundPolicy: getPageTranslations(language, "refund-policy"),
    cookiePolicy: getPageTranslations(language, "cookie-policy"),

    // Current language
    language,

    // All translations for current language
    all: translations[language as keyof typeof translations] || translations.en,
  };
};

// Server-side function for getting translations
export const getTranslations = (language: string) => {
  return {
    t: (page: string) => getPageTranslations(language, page),
    common: getCommonTranslations(language),
    navbar: getNavbarTranslations(language),
    footer: getFooterTranslations(language),
    home: getPageTranslations(language, "home"),
    about: getPageTranslations(language, "about"),
    services: getPageTranslations(language, "services"),
    contact: getPageTranslations(language, "contact"),
    auth: getPageTranslations(language, "auth"),
    faq: getPageTranslations(language, "faq"),
    pricing: getPageTranslations(language, "pricing"),
    workshops: getPageTranslations(language, "workshops"),
    howItWorks: getPageTranslations(language, "how-it-works"),
    privacyPolicy: getPageTranslations(language, "privacy-policy"),
    termsOfService: getPageTranslations(language, "terms-of-service"),
    refundPolicy: getPageTranslations(language, "refund-policy"),
    cookiePolicy: getPageTranslations(language, "cookie-policy"),
    language,
    all: translations[language as keyof typeof translations] || translations.en,
  };
};
