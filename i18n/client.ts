// app/i18n/client.ts
"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { getOptions } from "./settings";
import path from "path";

const i18nClient = i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(path.resolve(`./public/locales/${language}/${namespace}.json`))
    )
  );

i18nClient.init({
  ...getOptions(),
  detection: {
    order: ["path", "htmlTag"],
  },
});

export default i18nClient;
