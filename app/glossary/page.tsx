'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { GLOSSARY, GLOSSARY_CATEGORIES, searchGlossary, getGlossaryByCategory, type GlossaryCategory } from '@/lib/data/glossary';
import { cn } from '@/lib/utils';

export default function GlossaryPage() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<GlossaryCategory | 'all'>('all');

  const displayed = query
    ? searchGlossary(query)
    : activeCategory === 'all'
    ? GLOSSARY
    : getGlossaryByCategory(activeCategory);

  return (
    <>
      <PageHeader
        title="Islamic Glossary"
        arabicTitle="المصطلحات الإسلامية"
        subtitle="Key terms in Islamic theology, jurisprudence, hadith science, and history - explained clearly for all readers."
      >
        <div className="relative max-w-md mx-auto mt-6">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gold/60" aria-hidden="true" />
          <input
            type="search"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
              setActiveCategory('all');
            }}
            placeholder="Search terms…"
            className="w-full pl-11 pr-4 py-3 rounded-full bg-white/15 border border-gold/30 text-cream placeholder:text-cream/40 text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
            aria-label="Search the glossary"
          />
        </div>
      </PageHeader>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Category filter */}
        {!query && (
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={cn(
                'px-4 py-1.5 rounded-full text-sm font-medium border transition-colors',
                activeCategory === 'all'
                  ? 'bg-forest text-cream border-forest'
                  : 'text-forest/70 border-forest/20 hover:border-forest/50',
              )}
            >
              All Terms
            </button>
            {(Object.entries(GLOSSARY_CATEGORIES) as [GlossaryCategory, { label: string }][]).map(
              ([id, { label }]) => (
                <button
                  key={id}
                  onClick={() => setActiveCategory(id)}
                  className={cn(
                    'px-4 py-1.5 rounded-full text-sm font-medium border transition-colors',
                    activeCategory === id
                      ? 'bg-forest text-cream border-forest'
                      : 'text-forest/70 border-forest/20 hover:border-forest/50',
                  )}
                >
                  {label}
                </button>
              ),
            )}
          </div>
        )}

        {displayed.length === 0 ? (
          <p className="text-center text-forest/50 py-16">No terms match your search.</p>
        ) : (
          <div className="space-y-6">
            {displayed.map(entry => (
              <article
                key={entry.id}
                id={entry.id}
                className="card-islamic flex flex-col gap-4 scroll-mt-24"
              >
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <h2 className="font-garamond text-2xl font-semibold text-forest">
                      {entry.term}
                    </h2>
                    <p className="text-gold/70 text-sm">{entry.transliteration}</p>
                  </div>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="arabic-lg text-forest/80"
                    aria-hidden="true"
                  >
                    {entry.arabicTerm}
                  </p>
                </div>
                <p className="text-forest/70 leading-relaxed">{entry.definition}</p>
                {entry.context && (
                  <p className="text-forest/50 text-sm italic border-l-2 border-gold/30 pl-4">
                    {entry.context}
                  </p>
                )}
                {entry.relatedTerms && entry.relatedTerms.length > 0 && (
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-forest/40 text-xs">See also:</span>
                    {entry.relatedTerms.map(t => (
                      <a
                        key={t}
                        href={`#${t}`}
                        className="text-xs text-gold hover:underline"
                      >
                        {t.charAt(0).toUpperCase() + t.slice(1).replace(/-/g, ' ')}
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
