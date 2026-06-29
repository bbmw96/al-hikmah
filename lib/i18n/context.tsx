'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { type Lang, LANGUAGE_META, t as translate, type T } from './translations';

const STORAGE_KEY = 'al-hikmah-lang';
const DEFAULT_LANG: Lang = 'en';

// Read the saved language synchronously so the very first render is already in
// the user's language (no English flash before a useEffect swaps it in). The
// provider is client-only (loaded via dynamic ssr:false), so this always runs in
// the browser; the window guard is just defensive.
function readStoredLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && stored in LANGUAGE_META) return stored;
  } catch {
    // localStorage can throw in private mode; fall back to the default
  }
  return DEFAULT_LANG;
}

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
  // Seed from the saved language up front so the first paint matches the user's
  // choice - the hero name and all body text render in-language immediately.
  const [lang, setLangState] = useState<Lang>(readStoredLang);

  // Keep <html lang/dir> in sync with the active language, including on first
  // load - this is what gives right-to-left languages (Arabic, Urdu, Persian)
  // their correct direction without waiting for a manual language switch.
  useEffect(() => {
    const meta = LANGUAGE_META[lang];
    document.documentElement.lang = meta.htmlLang;
    document.documentElement.dir = meta.dir;
  }, [lang]);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem(STORAGE_KEY, newLang);
    } catch {
      // ignore persistence failures (e.g. private mode)
    }
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
