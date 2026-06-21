'use client';

import Link from 'next/link';
import { BookOpen, Lock } from 'lucide-react';
import { COLLECTION_GROUPS } from '@/lib/data/collections';
import { useLanguage } from '@/lib/i18n/context';

function GradeTag({ grade }: { grade: string }) {
  const colour =
    grade === 'Most Authentic'
      ? 'bg-gold/15 text-gold border-gold/30'
      : grade === 'Highly Authentic'
      ? 'bg-forest/15 text-forest border-forest/30'
      : 'bg-midnight/10 text-midnight border-midnight/20';
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs border font-medium ${colour}`}>
      {grade}
    </span>
  );
}

export function HadithListContent() {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 space-y-16">
      {Object.entries(COLLECTION_GROUPS).map(([groupName, collections]) => (
        <section key={groupName}>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            {groupName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {collections.map(col => (
              <div key={col.id} className="card-islamic flex flex-col gap-4">
                <p
                  dir="rtl"
                  lang="ar"
                  className="arabic text-forest/70 text-right"
                  aria-hidden="true"
                >
                  {col.arabicName}
                </p>

                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-garamond text-xl font-semibold text-forest leading-snug">
                      {col.englishName}
                    </h3>
                    {!col.available && (
                      <Lock className="w-4 h-4 text-forest/30 flex-shrink-0 mt-1" aria-label="Coming soon" />
                    )}
                  </div>
                  <p className="text-forest/50 text-sm mb-2">{col.author} ({col.authorDates})</p>
                  <GradeTag grade={col.grade} />
                </div>

                <p className="text-forest/60 text-sm leading-relaxed flex-1">{col.description}</p>

                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gold/10">
                  <span className="text-forest/40 text-xs">
                    {col.hadithCount.toLocaleString()} {t('ui.hadiths')}
                  </span>
                  {col.available ? (
                    <Link
                      href={`/hadith/${col.id}`}
                      className="flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold/80 transition-colors"
                    >
                      <BookOpen className="w-4 h-4" aria-hidden="true" />
                      {t('ui.browse')}
                    </Link>
                  ) : (
                    <span className="text-forest/30 text-xs italic">{t('ui.comingsoon')}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <aside className="bg-gold/5 border border-gold/20 rounded-2xl p-8">
        <h3 className="font-garamond text-xl font-semibold text-forest mb-3">
          A Note on Hadith Authenticity
        </h3>
        <p className="text-forest/70 leading-relaxed text-sm mb-4">
          Each hadith in this collection is graded by its level of authenticity (sahih - sound, hasan - good,
          da&apos;if - weak). Only hadiths of sahih or hasan grading serve as valid evidence in Islamic law and
          theology. The grades shown reflect the consensus of classical hadith scholars.
        </p>
        <p className="text-forest/50 text-xs">
          Hadith texts and scholarly metadata compiled from classical sources.
        </p>
      </aside>
    </div>
  );
}
