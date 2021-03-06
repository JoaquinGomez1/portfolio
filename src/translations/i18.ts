import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en/translation.json";
import es from "./es/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    resources: {
      en,
      es,
    },
    fallbackLng: "es",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
