'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';
import { PROPHETS } from '@/lib/data/prophets';

export function ProphetGrid() {
  const { t } = useLanguage();
  const [query, setQuery] = useState('');

  const ql = query.trim().toLowerCase();

  const displayed = useMemo(() => {
    if (!ql) return PROPHETS;
    return PROPHETS.filter(p =>
      p.englishName.toLowerCase().includes(ql) ||
      p.arabicName.includes(ql) ||
      p.alternativeNames.some(n => n.toLowerCase().includes(ql)) ||
      p.title.toLowerCase().includes(ql) ||
      p.nationSentTo.toLowerCase().includes(ql) ||
      p.message.toLowerCase().includes(ql) ||
      p.keyStories.some(s => s.toLowerCase().includes(ql)) ||
      p.keyMiracles.some(m => m.toLowerCase().includes(ql)) ||
      p.specialCharacteristics.toLowerCase().includes(ql) ||
      p.periodInHistory.toLowerCase().includes(ql),
    );
  }, [ql]);

  return (
    <div>
      <div className="relative max-w-xl mx-auto mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-forest/40" aria-hidden="true" />
        <input
          type="search"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder={t('ui.searchplaceholder')}
          className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-gold/30 text-forest placeholder:text-forest/30 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
          aria-label={t('ui.search')}
        />
      </div>
      {ql && (
        <p className="text-center text-forest/50 text-sm mb-6">
          {displayed.length} {t('ui.searchresults')}
        </p>
      )}
      {displayed.length === 0 ? (
        <p className="text-center text-forest/50 py-16">{t('ui.noresults')}</p>
      ) : (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {displayed.map((prophet) => (
        <Link
          key={prophet.id}
          href={`/prophets/${prophet.id}`}
          className="card-islamic group text-center flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform duration-200"
        >
          {/* Sequence number */}
          <span className="w-8 h-8 rounded-full bg-gold/15 text-gold text-xs font-semibold flex items-center justify-center">
            {prophet.prophetNumber}
          </span>

          {/* Arabic name */}
          <p
            dir="rtl"
            lang="ar"
            className="arabic text-forest"
            aria-hidden="true"
          >
            {prophet.arabicName}
          </p>

          {/* English name */}
          <h2 className="font-garamond text-lg font-semibold text-forest group-hover:text-gold transition-colors">
            {prophet.englishName}
          </h2>

          {prophet.title && (
            <p className="text-gold/70 text-xs italic">{prophet.title}</p>
          )}

          <p className="text-forest/50 text-xs leading-relaxed mt-auto">
            {t('prophets.sentto')} {prophet.nationSentTo}
          </p>
        </Link>
      ))}
    </div>
      )}
    </div>
  );
}
