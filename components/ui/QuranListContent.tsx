'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, BookOpen } from 'lucide-react';
import { SURAHS } from '@/lib/data/quran';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/i18n/context';

type Filter = 'all' | 'Makki' | 'Madani';

export function QuranListContent() {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  const displayed = SURAHS.filter(s => {
    const matchesFilter = filter === 'all' || s.classification === filter;
    const q = query.toLowerCase();
    const matchesQuery =
      !q ||
      s.englishName.toLowerCase().includes(q) ||
      s.transliteration.toLowerCase().includes(q) ||
      s.arabicName.includes(q) ||
      String(s.number).includes(q);
    return matchesFilter && matchesQuery;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Search */}
      <div className="relative max-w-md mx-auto mb-10">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-forest/40" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search by name or number..."
          className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-gold/30 text-forest placeholder:text-forest/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
          aria-label="Search surahs"
        />
      </div>

      {/* Filter tabs */}
      <div className="flex gap-2 mb-8">
        {(['all', 'Makki', 'Madani'] as Filter[]).map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={cn(
              'px-5 py-1.5 rounded-full text-sm font-medium border transition-colors',
              filter === f
                ? 'bg-forest text-cream border-forest'
                : 'text-forest/70 border-forest/20 hover:border-forest/50',
            )}
          >
            {f === 'all'
              ? `${t('ui.all')} (${SURAHS.length})`
              : f === 'Makki'
                ? `${t('ui.makki')} (${SURAHS.filter(s => s.classification === 'Makki').length})`
                : `${t('ui.madani')} (${SURAHS.filter(s => s.classification === 'Madani').length})`}
          </button>
        ))}
      </div>

      {/* Surah grid */}
      {displayed.length === 0 ? (
        <p className="text-center text-forest/50 py-16">{t('ui.nosurahs')}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {displayed.map(surah => (
            <Link
              key={surah.number}
              href={`/quran/${surah.transliteration}`}
              className="card-islamic group flex flex-col gap-2 hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="flex items-start justify-between">
                <span className="w-8 h-8 rounded-full bg-gold/15 text-gold text-xs font-semibold flex items-center justify-center flex-shrink-0">
                  {surah.number}
                </span>
                <span className={cn(
                  'text-xs font-medium px-2 py-0.5 rounded-full',
                  surah.classification === 'Makki'
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-teal-100 text-teal-700',
                )}>
                  {surah.classification}
                </span>
              </div>

              <p
                dir="rtl"
                lang="ar"
                className="arabic text-forest/80 text-right"
                aria-hidden="true"
              >
                {surah.arabicName}
              </p>

              <div>
                <h2 className="font-garamond text-lg font-semibold text-forest group-hover:text-gold transition-colors">
                  {surah.englishName}
                </h2>
                <p className="text-gold/60 text-xs italic">
                  {surah.transliteration.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('-')}
                </p>
              </div>

              <p className="text-forest/50 text-xs mt-auto">
                {surah.verses} {t('ui.verses')} · {surah.period}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
