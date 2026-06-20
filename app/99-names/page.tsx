'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { NINETY_NINE_NAMES } from '@/lib/data/ninety-nine-names';

export default function NinetyNineNamesPage() {
  const [query, setQuery] = useState('');

  const filtered = query
    ? NINETY_NINE_NAMES.filter(
        n =>
          n.transliteration.toLowerCase().includes(query.toLowerCase()) ||
          n.meaning.toLowerCase().includes(query.toLowerCase()) ||
          n.arabic.includes(query),
      )
    : NINETY_NINE_NAMES;

  return (
    <>
      <PageHeader
        title="The 99 Names of Allah"
        arabicTitle="أسماء الله الحسنى"
        subtitle="Allah - Exalted be He - has beautiful names. The Prophet ﷺ said: 'Allah has ninety-nine names; whoever memorises them all will enter Paradise.' (Bukhari)"
      >
        {/* Search */}
        <div className="relative max-w-md mx-auto mt-6">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60"
            aria-hidden="true"
          />
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search by name, meaning, or transliteration…"
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white/15 border border-gold/30 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
            aria-label="Search the 99 names"
          />
        </div>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {filtered.length === 0 ? (
          <p className="text-center text-forest/50 py-16">No names match your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map(name => (
              <article
                key={name.number}
                className="card-islamic flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-gold/15 text-gold text-xs font-semibold flex items-center justify-center flex-shrink-0">
                    {name.number}
                  </span>
                  {name.quranRef && (
                    <span className="text-gold/60 text-xs">{name.quranRef}</span>
                  )}
                </div>

                <p
                  dir="rtl"
                  lang="ar"
                  className="arabic-lg text-forest text-right"
                >
                  {name.arabic}
                </p>

                <div>
                  <p className="font-garamond text-lg font-semibold text-forest">
                    {name.transliteration}
                  </p>
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
