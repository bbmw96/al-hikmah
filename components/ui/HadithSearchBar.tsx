'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import { Search, ChevronRight, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

interface SearchHadith {
  hadithnumber: number;
  text: string;
  grades?: { graded_by: string; grade: string }[];
}

export function HadithSearchBar({ collection }: { collection: string }) {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchHadith[] | null>(null);
  const [searching, setSearching] = useState(false);
  const [searched, setSearched] = useState(false);

  const runSearch = useCallback(async (q: string) => {
    const trimmed = q.trim();
    if (trimmed.length < 2) { setResults(null); setSearched(false); return; }
    setSearching(true);
    try {
      const res = await fetch(`/api/hadith-search?collection=${collection}&q=${encodeURIComponent(trimmed)}`);
      const data = await res.json();
      setResults(data.hadiths ?? []);
      setSearched(true);
    } catch {
      setResults([]);
      setSearched(true);
    } finally {
      setSearching(false);
    }
  }, [collection]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') runSearch(query);
  }

  function clear() { setQuery(''); setResults(null); setSearched(false); }

  return (
    <div className="mb-10">
      <div className="relative max-w-2xl mx-auto">
        <Search
          className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-forest/40"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('ui.searchplaceholder')}
          className="w-full pl-11 pr-32 py-3.5 rounded-full bg-white border border-gold/30 text-forest placeholder:text-forest/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
          aria-label={t('ui.search')}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          {query && (
            <button
              type="button"
              onClick={clear}
              className="p-1 text-forest/30 hover:text-forest/60 transition-colors"
              aria-label="Clear search"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
          <button
            type="button"
            onClick={() => runSearch(query)}
            disabled={!query.trim() || searching}
            className="px-4 py-1.5 bg-forest text-cream text-xs font-medium rounded-full hover:bg-forest/90 disabled:opacity-40 transition-colors"
          >
            {searching ? t('ui.searching') : t('ui.search')}
          </button>
        </div>
      </div>

      {searched && results !== null && (
        <div className="max-w-2xl mx-auto mt-4">
          {results.length === 0 ? (
            <p className="text-center text-forest/50 text-sm py-6">{t('ui.noresults')}</p>
          ) : (
            <>
              <p className="text-forest/50 text-sm mb-4">
                {results.length} {t('ui.searchresults')}
              </p>
              <div className="space-y-3">
                {results.map(hadith => (
                  <Link
                    key={hadith.hadithnumber}
                    href={`/hadith/${collection}/${hadith.hadithnumber}`}
                    className="card-islamic group flex gap-4 hover:-translate-y-0.5 transition-transform duration-150"
                  >
                    <span className="w-9 h-9 rounded-full bg-gold/15 text-gold text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                      {hadith.hadithnumber}
                    </span>
                    <div className="flex-1 min-w-0">
                      <p className="text-forest/70 text-sm leading-relaxed line-clamp-3">
                        {hadith.text}
                      </p>
                      {hadith.grades && hadith.grades.length > 0 && (
                        <p className="text-xs text-gold/60 mt-1.5">
                          {hadith.grades[0].graded_by}: {hadith.grades[0].grade}
                        </p>
                      )}
                    </div>
                    <ChevronRight
                      className="w-4 h-4 text-gold/40 flex-shrink-0 mt-1 group-hover:text-gold transition-colors"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
