import en from 'i18n/en.json';
import es from 'i18n/es.json';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

const langs = ['en', 'es'] as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useTranslate = create<Record<string, any>>()(
  immer((set, get) => ({
    en,
    es,
    getSection: (lang: (typeof langs)[number], section: string) => {
      if (!langs.includes(lang)) lang = 'en';
      const langObj = get()[lang];
      if (langObj[section]) return langObj[section];
      return {};
    },
  })),
);
