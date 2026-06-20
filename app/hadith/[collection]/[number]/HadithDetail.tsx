'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, BookOpen, MessageSquare, Loader2 } from 'lucide-react';
import { ArabicText } from '@/components/ui/ArabicText';
import { LanguageSelector } from '@/components/ui/LanguageSelector';
import { cn } from '@/lib/utils';
import type { LanguageCode } from '@/lib/utils';
import type { HadithCollection } from '@/lib/data/collections';
import type { HadithGrade } from '@/lib/hadith-api';

interface HadithDetailProps {
  collection: HadithCollection;
  hadithNumber: number;
  englishText: string | null;
  arabicText: string | null;
  grades?: HadithGrade[];
}

type Tab = 'meaning' | 'translation' | 'context';

export function HadithDetail({
  collection,
  hadithNumber,
  englishText,
  arabicText,
  grades,
}: HadithDetailProps) {
  const [activeTab, setActiveTab] = useState<Tab>('meaning');
  const [language, setLanguage] = useState<LanguageCode>('en');
  const [translation, setTranslation] = useState<string | null>(null);
  const [context, setContext] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function loadContent(tab: Tab, lang: LanguageCode) {
    setActiveTab(tab);

    if (tab === 'meaning') {
      setError(null);
      return;
    }

    if (tab === 'translation' && lang === 'en') {
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/translate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: englishText,
          arabic: arabicText,
          language: lang,
          type: tab,
          collection: collection.englishName,
          hadithNumber,
        }),
      });

      if (!res.ok) throw new Error('Translation unavailable');
      const data = await res.json();

      if (tab === 'translation') setTranslation(data.result);
      if (tab === 'context') setContext(data.result);
    } catch {
      setError('Unable to load content at this time. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  function handleTabChange(tab: Tab) {
    loadContent(tab, language);
  }

  function handleLanguageChange(lang: LanguageCode) {
    setLanguage(lang);
    setTranslation(null);
    setContext(null);
    if (activeTab !== 'meaning') {
      loadContent(activeTab, lang);
    }
  }

  const grade = grades?.[0];

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      {/* Back to collection */}
      <Link
        href={`/hadith/${collection.id}`}
        className="inline-flex items-center gap-1.5 text-sm text-forest/60 hover:text-forest mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        {collection.englishName}
      </Link>

      {/* Collection + number badge */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <span className="badge-forest text-xs">{collection.shortName}</span>
        <span className="text-forest/40 text-sm">Hadith #{hadithNumber}</span>
        {grade && (
          <span className={cn(
            'text-xs px-2 py-0.5 rounded border font-medium',
            grade.grade === 'Sahih' || grade.grade === 'Sahih '
              ? 'bg-gold/10 text-gold border-gold/30'
              : 'bg-forest/10 text-forest border-forest/30',
          )}>
            {grade.graded_by}: {grade.grade}
          </span>
        )}
      </div>

      {/* Arabic text — always displayed */}
      {arabicText && (
        <div className="bg-forest/5 border border-gold/20 rounded-2xl p-8 mb-8">
          <ArabicText text={arabicText} size="lg" showBismillah={false} />
        </div>
      )}

      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
        {/* Tabs */}
        <div className="flex rounded-xl border border-forest/20 overflow-hidden flex-1" role="tablist">
          {([
            { id: 'meaning' as Tab, label: 'Meaning', icon: BookOpen },
            { id: 'translation' as Tab, label: 'Translation', icon: null },
            { id: 'context' as Tab, label: 'Context & Reason', icon: MessageSquare },
          ] as const).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeTab === id}
              onClick={() => handleTabChange(id)}
              className={cn(
                'flex-1 py-2.5 px-3 text-sm font-medium flex items-center justify-center gap-1.5 transition-colors',
                activeTab === id
                  ? 'bg-forest text-cream'
                  : 'text-forest/60 hover:text-forest hover:bg-forest/5',
              )}
            >
              {Icon && <Icon className="w-3.5 h-3.5" aria-hidden="true" />}
              {label}
            </button>
          ))}
        </div>

        {/* Language selector (visible when translation or context tab is active) */}
        {activeTab !== 'meaning' && (
          <LanguageSelector
            value={language}
            onChange={handleLanguageChange}
            label="Translate to"
          />
        )}
      </div>

      {/* Content area */}
      <div className="card-islamic min-h-[180px] flex flex-col" role="tabpanel">
        {loading ? (
          <div className="flex-1 flex items-center justify-center py-12">
            <Loader2 className="w-6 h-6 text-gold animate-spin" aria-hidden="true" />
            <span className="ml-2 text-forest/60 text-sm">Loading…</span>
          </div>
        ) : error ? (
          <div className="flex-1 flex items-center justify-center py-12">
            <p className="text-forest/40 text-sm text-center">{error}</p>
          </div>
        ) : activeTab === 'meaning' ? (
          <div>
            <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-3">
              English Meaning
            </p>
            <p className="text-forest/80 leading-relaxed">
              {englishText ?? 'English text not available for this hadith.'}
            </p>
          </div>
        ) : activeTab === 'translation' ? (
          language === 'en' ? (
            <div>
              <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-3">
                English
              </p>
              <p className="text-forest/80 leading-relaxed">{englishText}</p>
            </div>
          ) : translation ? (
            <div>
              <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-3">
                Contextual Translation
              </p>
              <p className="text-forest/80 leading-relaxed whitespace-pre-line">{translation}</p>
            </div>
          ) : (
            <div className="flex-1 flex items-center justify-center py-12">
              <p className="text-forest/40 text-sm text-center">
                Select a language above to load the translation.
              </p>
            </div>
          )
        ) : context ? (
          <div>
            <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-3">
              Scholarly Context & Background
            </p>
            <p className="text-forest/80 leading-relaxed whitespace-pre-line">{context}</p>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center py-12">
            <p className="text-forest/40 text-sm text-center">
              Click "Context & Reason" to load the scholarly background.
            </p>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between mt-8" aria-label="Hadith navigation">
        {hadithNumber > 1 ? (
          <Link
            href={`/hadith/${collection.id}/${hadithNumber - 1}`}
            className="btn-outline flex items-center gap-1.5 text-sm"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            Previous
          </Link>
        ) : <div />}
        <Link
          href={`/hadith/${collection.id}`}
          className="text-sm text-forest/50 hover:text-forest transition-colors"
        >
          All {collection.shortName}
        </Link>
        <Link
          href={`/hadith/${collection.id}/${hadithNumber + 1}`}
          className="btn-outline flex items-center gap-1.5 text-sm"
        >
          Next
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </nav>
    </div>
  );
}
