'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, BookOpen } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { SURAHS, type SurahData } from '@/lib/data/quran';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/i18n/context';
import { QURAN_UI, type QuranUiKey } from '@/lib/i18n/content/quran-content';
import { QuranMeaningsSection } from '@/components/quran/QuranMeaningsSection';

type Filter = 'all' | 'Makki' | 'Madani';

function scoreSurah(s: SurahData, ql: string): number {
  let score = 0;
  if (String(s.number) === ql) score += 100;
  if (s.arabicName.includes(ql)) score += 90;
  if (s.englishName.toLowerCase().startsWith(ql)) score += 80;
  if (s.transliteration.toLowerCase().startsWith(ql)) score += 75;
  if (s.englishName.toLowerCase().includes(ql)) score += 60;
  if (s.transliteration.toLowerCase().includes(ql)) score += 55;
  if (s.alternativeNames?.some(n => n.toLowerCase().includes(ql))) score += 45;
  if (s.keyThemes?.some(kw => kw.toLowerCase().includes(ql))) score += 35;
  if (s.notableVerses?.some(v =>
    v.translation.toLowerCase().includes(ql) ||
    v.context.toLowerCase().includes(ql) ||
    v.reference.toLowerCase().includes(ql)
  )) score += 30;
  if (s.overview.toLowerCase().includes(ql)) score += 22;
  if (s.asbabalNuzul?.toLowerCase().includes(ql)) score += 18;
  if (s.virtues?.toLowerCase().includes(ql)) score += 18;
  if (s.period.toLowerCase().includes(ql)) score += 12;
  return score;
}

export function QuranListContent() {
  const { t, lang } = useLanguage();
  const tc = (k: QuranUiKey) => QURAN_UI[k][lang] ?? QURAN_UI[k].en;
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  const ql = query.trim().toLowerCase();

  const displayed = useMemo(() => {
    const base = filter === 'all' ? SURAHS : SURAHS.filter(s => s.classification === filter);
    if (!ql) return base;
    return base
      .map(s => ({ s, score: scoreSurah(s, ql) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ s }) => s);
  }, [ql, filter]);

  return (
    <>
      <PageHeader
        title={tc('list_title')}
        arabicTitle="القرآن الكريم"
        subtitle={tc('list_subtitle')}
      />

      <div className="max-w-3xl mx-auto px-6 pt-12 pb-0">
        <div className="bg-gold/8 border border-gold/25 rounded-xl p-6 text-center">
          <p className="text-forest/80 text-sm leading-relaxed mb-2">{tc('intro_phases')}</p>
          <p className="text-forest/60 text-xs italic">{tc('intro_asbab')}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Search */}
      <div className="relative max-w-xl mx-auto mb-4">
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
      {!ql && <div className="mb-6" />}

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

      <QuranMeaningsSection />

      <div className="bg-forest/5 border-t border-gold/10 py-12 mt-8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <BookOpen className="w-8 h-8 text-gold/60 mx-auto mb-4" aria-hidden="true" />
          <p dir="rtl" lang="ar" className="arabic-lg text-forest mb-3" aria-hidden="true">إِنَّهُ لَقُرْآنٌ كَرِيمٌ</p>
          <p className="text-forest/60 italic text-sm">&ldquo;{tc('banner_verse')}&rdquo; (Surah Al-Waqi&apos;ah 56:77)</p>
        </div>
      </div>
    </>
  );
}
