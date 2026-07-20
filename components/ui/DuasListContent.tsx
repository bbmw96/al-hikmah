'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { Search, X, BookmarkCheck } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { BookmarkButton } from '@/components/ui/BookmarkButton';
import { DUA_CATEGORIES, DUAS } from '@/lib/data/duas';
import { useLanguage } from '@/lib/i18n/context';
import { useDuaBookmarks } from '@/lib/hooks/use-dua-bookmarks';
import { DUAS_CONTENT } from '@/lib/i18n/content/duas-content';
import type { DuasContentKey } from '@/lib/i18n/content/duas-content';

function useDuasText() {
  const { lang } = useLanguage();
  return (key: DuasContentKey): string => {
    const entry = DUAS_CONTENT[key] as Record<string, string | undefined> | undefined;
    if (!entry) return '';
    return entry[lang] ?? entry['en'] ?? '';
  };
}

function catKey(id: string): string {
  return id.replace(/-/g, '_');
}

function normalise(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

export function DuasListContent() {
  const tc = useDuasText();
  const { lang } = useLanguage();
  const { ids: bookmarkIds } = useDuaBookmarks();

  const [query, setQuery] = useState('');
  const [selectedCat, setSelectedCat] = useState<string | 'all' | 'bookmarks'>('all');

  const trimmed = query.trim();
  const active = trimmed.length > 0 || selectedCat !== 'all';

  // Build search index that responds to language + bookmark set
  const results = useMemo(() => {
    if (!active) return [];
    const bookmarkSet = new Set(bookmarkIds);
    const needle = normalise(trimmed);

    return DUAS.filter(d => {
      if (selectedCat === 'bookmarks') return bookmarkSet.has(d.id);
      if (selectedCat !== 'all' && d.category !== selectedCat) return false;

      if (needle.length === 0) return true;

      const dk = d.id.replace(/-/g, '_');
      const title =
        (DUAS_CONTENT[`dua_${dk}_title` as DuasContentKey] as Record<string, string | undefined> | undefined)?.[lang] ??
        d.title;
      const meaning =
        (DUAS_CONTENT[`dua_${dk}_meaning` as DuasContentKey] as Record<string, string | undefined> | undefined)?.[lang] ??
        d.meaning;
      const occasion = d.occasion ?? '';

      const hay = normalise(`${title}\n${meaning}\n${occasion}\n${d.transliteration}`);
      return hay.includes(needle);
    });
  }, [active, trimmed, selectedCat, bookmarkIds, lang]);

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="الأدعية والأذكار"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Prophetic quote strip */}
        <div className="bg-forest/5 border border-gold/20 rounded-2xl p-6 text-center mb-10 max-w-3xl mx-auto">
          <p dir="rtl" lang="ar" className="arabic-lg text-forest mb-3">
            الدُّعَاءُ هُوَ الْعِبَادَةُ
          </p>
          <p className="text-forest/70 italic text-sm">{tc('intro_arabic_meaning')}</p>
        </div>

        {/* Search box */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-forest/40" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder={tc('search_placeholder')}
              aria-label={tc('search_placeholder')}
              className="w-full pl-11 pr-11 py-3 rounded-full border border-forest/15 bg-cream text-forest placeholder-forest/40 text-sm shadow-sm focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
            {trimmed.length > 0 && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full inline-flex items-center justify-center text-forest/40 hover:text-forest hover:bg-forest/5"
              >
                <X className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            )}
          </div>
        </div>

        {/* Filter chip row */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-wrap justify-center gap-2">
          <FilterChip
            active={selectedCat === 'all'}
            onClick={() => setSelectedCat('all')}
            label={tc('filter_all_categories')}
          />
          <FilterChip
            active={selectedCat === 'bookmarks'}
            onClick={() => setSelectedCat('bookmarks')}
            label={tc('filter_bookmarks')}
            icon={<BookmarkCheck className="w-3 h-3" aria-hidden="true" />}
            badge={bookmarkIds.length > 0 ? bookmarkIds.length : undefined}
          />
          {DUA_CATEGORIES.map(c => (
            <FilterChip
              key={c.id}
              active={selectedCat === c.id}
              onClick={() => setSelectedCat(c.id)}
              icon={<span aria-hidden="true">{c.icon}</span>}
              label={tc(`cat_${catKey(c.id)}_name` as DuasContentKey)}
            />
          ))}
        </div>

        {/* Results */}
        {active ? (
          <ResultsList
            duas={results}
            emptyMessage={selectedCat === 'bookmarks' ? tc('no_bookmarks') : tc('no_search_results')}
            heading={
              selectedCat === 'bookmarks'
                ? tc('bookmarks_title')
                : `${tc('results_label')} (${results.length})`
            }
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DUA_CATEGORIES.map(category => (
              <Link
                key={category.id}
                href={`/duas/${category.id}`}
                className="card-islamic group flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl" aria-hidden="true">{category.icon}</span>
                  <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
                    {category.arabicTitle}
                  </p>
                </div>
                <div>
                  <h2 className="font-garamond text-xl font-semibold text-forest group-hover:text-gold transition-colors mb-2">
                    {tc(`cat_${catKey(category.id)}_name` as DuasContentKey)}
                  </h2>
                  <p className="text-forest/60 text-sm leading-relaxed">
                    {tc(`cat_${catKey(category.id)}_desc` as DuasContentKey)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

function FilterChip({
  active,
  onClick,
  label,
  icon,
  badge,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
  badge?: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-forest text-cream border border-forest shadow-sm'
          : 'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-cream text-forest/70 hover:text-forest hover:bg-forest/5 border border-forest/20 transition-colors'
      }
    >
      {icon}
      <span>{label}</span>
      {badge != null && badge > 0 && (
        <span
          className={
            active
              ? 'ml-0.5 px-1.5 rounded-full text-[10px] bg-cream/20 text-cream'
              : 'ml-0.5 px-1.5 rounded-full text-[10px] bg-forest/10 text-forest'
          }
        >
          {badge}
        </span>
      )}
    </button>
  );
}

function ResultsList({
  duas,
  heading,
  emptyMessage,
}: {
  duas: typeof DUAS;
  heading: string;
  emptyMessage: string;
}) {
  const tc = useDuasText();
  const { lang } = useLanguage();

  if (duas.length === 0) {
    return (
      <div className="max-w-2xl mx-auto text-center py-12">
        <h2 className="font-garamond text-2xl font-semibold text-forest mb-3">{heading}</h2>
        <p className="text-forest/60 text-sm italic">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="font-garamond text-2xl font-semibold text-forest mb-6 text-center">{heading}</h2>
      <div className="space-y-4">
        {duas.map(d => {
          const dk = d.id.replace(/-/g, '_');
          const cat = DUA_CATEGORIES.find(c => c.id === d.category);
          const title =
            (DUAS_CONTENT[`dua_${dk}_title` as DuasContentKey] as Record<string, string | undefined> | undefined)?.[lang] ??
            d.title;
          const meaning =
            (DUAS_CONTENT[`dua_${dk}_meaning` as DuasContentKey] as Record<string, string | undefined> | undefined)?.[lang] ??
            d.meaning;
          const catName = cat
            ? (DUAS_CONTENT[`cat_${catKey(cat.id)}_name` as DuasContentKey] as Record<string, string | undefined> | undefined)?.[lang] ??
              cat.title
            : d.category;

          return (
            <article key={d.id} className="card-islamic hover:-translate-y-0.5 transition-transform duration-150">
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    {cat && (
                      <Link
                        href={`/duas/${cat.id}`}
                        className="inline-flex items-center gap-1 text-[11px] uppercase tracking-wider font-medium text-gold/80 hover:text-gold"
                      >
                        <span aria-hidden="true">{cat.icon}</span>
                        <span>{catName}</span>
                      </Link>
                    )}
                    <span className="badge-gold text-xs">{d.source}</span>
                  </div>
                  <h3 className="font-garamond text-lg font-semibold text-forest">
                    <Link
                      href={`/duas/${d.category}#${d.id}`}
                      className="hover:text-gold transition-colors"
                    >
                      {title}
                    </Link>
                  </h3>
                </div>
                <BookmarkButton duaId={d.id} />
              </div>

              <p dir="rtl" lang="ar" className="arabic mt-4 text-forest">
                {d.arabic}
              </p>
              <p className="text-forest/60 text-xs italic mt-2">{d.transliteration}</p>
              <p className="text-forest/80 text-sm mt-3 leading-relaxed">{meaning}</p>
            </article>
          );
        })}
      </div>
      <p className="text-center text-xs text-forest/40 mt-8 italic">
        {duas.length} {tc('results_label').toLowerCase()}
      </p>
    </div>
  );
}
