'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { useLanguage } from '@/lib/i18n/context';
import { NINETY_NINE_NAMES } from '@/lib/data/ninety-nine-names';
import { NAMES_CONTENT } from '@/lib/i18n/content/names-content';
import type { NamesContentKey } from '@/lib/i18n/content/names-content';

function useNC() {
  const { lang } = useLanguage();
  return (key: NamesContentKey): string => {
    const entry = NAMES_CONTENT[key] as Record<string, string | undefined> | undefined;
    if (!entry) return key;
    return entry[lang] ?? entry['en'] ?? key;
  };
}

// Strip Latin diacritics and lower-case for tolerant search. Arabic is left
// intact because NFD-stripping combining marks would remove Arabic tashkeel.
function normaliseLatin(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

export function NinetyNineNamesContent() {
  const tc = useNC();
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const trimmed = query.trim();
    if (!trimmed) return NINETY_NINE_NAMES;
    const needleLatin = normaliseLatin(trimmed);
    return NINETY_NINE_NAMES.filter(n => {
      const hay = normaliseLatin(
        [
          String(n.number),
          n.transliteration,
          n.meaning,
          n.explanation,
          n.quranRef ?? '',
        ].join('\n'),
      );
      if (hay.includes(needleLatin)) return true;
      // Arabic includes intact so users typing Arabic still match.
      return n.arabic.includes(trimmed);
    });
  }, [query]);

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="أسماء الله الحسنى"
        subtitle={tc('page_subtitle')}
      >
        <div className="relative max-w-md mx-auto mt-6">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={tc('search_placeholder')}
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white/15 border border-gold/30 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
            aria-label={tc('search_aria')}
          />
        </div>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {filtered.length === 0 ? (
          <p className="text-center text-forest/50 py-16">{tc('no_results')}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(name => (
              <article key={name.number} className="card-islamic flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-gold/15 text-gold text-xs font-semibold flex items-center justify-center flex-shrink-0">
                    {name.number}
                  </span>
                  {name.quranRef && (
                    <span className="text-gold/60 text-xs">{name.quranRef}</span>
                  )}
                </div>
                <p dir="rtl" lang="ar" className="arabic-lg text-forest text-right">
                  {name.arabic}
                </p>
                <div>
                  <p className="font-garamond text-lg font-semibold text-forest">{name.transliteration}</p>
                  <p className="text-gold text-sm font-medium">{name.meaning}</p>
                </div>
                <p className="text-forest/60 text-sm leading-relaxed">{name.explanation}</p>
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
