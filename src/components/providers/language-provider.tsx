// language-provider.tsx
"use client";

import { useEffect, useState } from "react";
import i18next from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions } from "../../../i18n/settings";
import { translations } from "../../i18n/translations";

// Initialize i18next instance
const i18nInstance = i18next.use(initReactI18next).use(LanguageDetector);

i18nInstance.init({
  ...getOptions(),
  resources: translations,
  detection: {
    order: ["path", "htmlTag"],
  },
  react: {
    useSuspense: false,
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

    // Complete page state management for RTL transitions
    if (typeof document !== "undefined") {
      const html = document.documentElement;
      const body = document.body;
      const isRTL = lang === "ar";
      const wasRTL = html.dir === "rtl";

      // If direction is changing, implement comprehensive fix
      if ((isRTL && !wasRTL) || (!isRTL && wasRTL)) {
        // Step 1: Preserve scroll position
        const scrollY = window.scrollY;
        const scrollX = window.scrollX;

        // Step 2: Add transition class and force layout stability
        html.classList.add("direction-changing");
        body.style.setProperty("overflow-x", "hidden", "important");
        body.style.setProperty("width", "100vw", "important");
        body.style.setProperty("max-width", "100vw", "important");

        // Step 3: Change direction and language
        html.lang = lang;
        // Step 3: Change direction and language
        html.lang = lang;
        html.dir = isRTL ? "rtl" : "ltr";
        html.classList.remove("dir-ltr", "dir-rtl");
        html.classList.add(isRTL ? "dir-rtl" : "dir-ltr");

        // Step 4: Force layout recalculation
        requestAnimationFrame(() => {
          // Force reflow
          void body.offsetHeight;

          // Restore scroll position
          window.scrollTo(scrollX, scrollY);

          // Clean up after transition
          setTimeout(() => {
            html.classList.remove("direction-changing");
            body.style.removeProperty("overflow-x");
            body.style.removeProperty("width");
            body.style.removeProperty("max-width");
          }, 100);
        });
      } else {
        // No direction change, just update attributes
        html.lang = lang;
        html.dir = isRTL ? "rtl" : "ltr";
        html.classList.remove("dir-ltr", "dir-rtl");
        html.classList.add(isRTL ? "dir-rtl" : "dir-ltr");
      }
    }
  }, [lang]);

  if (!mounted) return null;

  return <I18nextProvider i18n={i18nInstance}>{children}</I18nextProvider>;
}
