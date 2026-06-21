'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { type Lang, LANGUAGE_META, t as translate, type T } from './translations';

const STORAGE_KEY = 'al-hikmah-lang';
const DEFAULT_LANG: Lang = 'en';

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: keyof T) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: DEFAULT_LANG,
  setLang: () => {},
  t: (key) => translate(key, DEFAULT_LANG),
  dir: 'ltr',
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && stored in LANGUAGE_META) setLangState(stored);
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    localStorage.setItem(STORAGE_KEY, newLang);
    const meta = LANGUAGE_META[newLang];
    document.documentElement.lang = meta.htmlLang;
    document.documentElement.dir = meta.dir;
  }, []);

  const tFn = useCallback((key: keyof T) => translate(key, lang), [lang]);

  const dir = LANGUAGE_META[lang].dir;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: tFn, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
