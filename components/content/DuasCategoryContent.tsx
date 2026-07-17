'use client';

import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { ArabicText } from '@/components/ui/ArabicText';
import { BookmarkButton } from '@/components/ui/BookmarkButton';
import { getDuasByCategory, getCategoryById } from '@/lib/data/duas';
import { useLanguage } from '@/lib/i18n/context';
import { DUAS_CONTENT } from '@/lib/i18n/content/duas-content';
import type { DuasContentKey } from '@/lib/i18n/content/duas-content';

function useDuasText() {
  const { lang } = useLanguage();
  return (key: DuasContentKey, fallback?: string): string => {
    const entry = DUAS_CONTENT[key] as Record<string, string | undefined> | undefined;
    if (!entry) return fallback ?? '';
    return entry[lang] ?? entry['en'] ?? fallback ?? '';
  };
}

function idKey(id: string): string {
  return id.replace(/-/g, '_');
}

export function DuasCategoryContent({ categoryId }: { categoryId: string }) {
  const tc = useDuasText();
  const cat = getCategoryById(categoryId);
  if (!cat) return null;

  const duas = getDuasByCategory(categoryId);
  const ck = idKey(cat.id);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back */}
      <Link
        href="/duas"
        className="inline-flex items-center gap-1.5 text-sm text-forest/60 hover:text-forest mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        {tc('back_to_categories')}
      </Link>

      {/* Header */}
      <header className="text-center mb-12">
        <span className="text-5xl mb-4 block" aria-hidden="true">{cat.icon}</span>
        <p
          dir="rtl"
          lang="ar"
          className="arabic text-gold/70 mb-2"
          aria-hidden="true"
        >
          {cat.arabicTitle}
        </p>
        <h1 className="font-garamond text-3xl md:text-4xl font-semibold text-forest mb-3">
          {tc(`cat_${ck}_name` as DuasContentKey)}
        </h1>
        <p className="text-forest/60 text-lg max-w-xl mx-auto">
          {tc(`cat_${ck}_desc` as DuasContentKey)}
        </p>
      </header>

      <div className="space-y-8">
        {duas.map(dua => {
          const dk = idKey(dua.id);
          return (
            <article
              key={dua.id}
              id={dua.id}
              className="card-islamic space-y-5 scroll-mt-24 target:ring-2 target:ring-gold/40 target:ring-offset-2 target:ring-offset-cream"
            >
              {/* Title */}
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <h2 className="font-garamond text-xl font-semibold text-forest">
                    {tc(`dua_${dk}_title` as DuasContentKey, dua.title)}
                  </h2>
                  {dua.occasion && (
                    <p className="text-gold/70 text-xs mt-1 italic">
                      {tc(`dua_${dk}_occasion` as DuasContentKey, dua.occasion)}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="badge-gold text-xs">{dua.source}</span>
                  <BookmarkButton duaId={dua.id} />
                </div>
              </div>

              {/* Arabic */}
              <div className="bg-forest/5 rounded-xl p-5">
                <ArabicText text={dua.arabic} size="lg" />
              </div>

              {/* Transliteration */}
              <div>
                <p className="text-xs font-medium text-gold/70 uppercase tracking-wider mb-1">
                  {tc('label_transliteration')}
                </p>
                <p className="text-forest/70 italic text-sm leading-relaxed">{dua.transliteration}</p>
              </div>

              {/* Meaning */}
              <div>
                <p className="text-xs font-medium text-gold/70 uppercase tracking-wider mb-1">
                  {tc('label_meaning')}
                </p>
                <p className="text-forest text-sm leading-relaxed">
                  {tc(`dua_${dk}_meaning` as DuasContentKey, dua.meaning)}
                </p>
              </div>

              {/* Virtue */}
              {dua.virtue && (
                <div className="bg-gold/5 border-l-4 border-gold/40 rounded-r-xl px-4 py-3">
                  <p className="text-xs font-medium text-gold/70 uppercase tracking-wider mb-1">
                    {tc('label_virtue')}
                  </p>
                  <p className="text-forest/60 text-sm italic">
                    {tc(`dua_${dk}_virtue` as DuasContentKey, dua.virtue)}
                  </p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
