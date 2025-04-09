// language-provider.tsx
"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions } from "../../../i18n/settings";

// Import translations
import enTranslation from "../../../public/locales/en/translation.json";
import arTranslation from "../../../public/locales/ar/translation.json";

const resources = {
  en: {
    translation: enTranslation,
  },
  ar: {
    translation: arTranslation,
  },
};

// Initialize i18next instance
const i18nInstance = i18next.use(initReactI18next).use(LanguageDetector);

i18nInstance.init({
  ...getOptions(),
  resources,
  detection: {
    order: ["path", "htmlTag"],
  },
  react: {
    useSuspense: false, // This is important
  },
});

export function LanguageProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (i18nInstance.language !== lang) {
      i18nInstance.changeLanguage(lang);
    }
  }, [lang]);

  if (!mounted) return null;

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}
