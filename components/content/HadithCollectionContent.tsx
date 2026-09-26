'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { HadithSearchBar } from '@/components/ui/HadithSearchBar';
import { useLanguage } from '@/lib/i18n/context';
import { t } from '@/lib/i18n/translations';
import type { HadithCollection } from '@/lib/data/collections';
import type { HadithEntry } from '@/lib/hadith-api';

interface Props {
  collectionId: string;
  col: HadithCollection;
  hadiths: HadithEntry[];
  page: number;
  pages: number;
  total: number;
}

export function HadithCollectionContent({ collectionId, col, hadiths, page, pages, total }: Props) {
  const { lang } = useLanguage();

  if (hadiths.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-forest/70">{t('hadith.unable_to_load', lang)}</p>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title={col.englishName}
        arabicTitle={col.arabicName}
        subtitle={`${col.author} · ${col.authorDates} · ${t('hadith.count_hadiths', lang).replace('{total}', col.hadithCount.toLocaleString())}`}
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Collection info */}
        <div className="card-islamic mb-10">
          <p className="text-forest/70 leading-relaxed text-sm">{col.description}</p>
        </div>

        {/* Search */}
        <HadithSearchBar collection={collectionId} />

        {/* Hadith list */}
        <div className="space-y-4">
          {hadiths.map(hadith => (
            <Link
              key={hadith.hadithnumber}
              href={`/hadith/${collectionId}/${hadith.hadithnumber}`}
              className="card-islamic group flex gap-4 hover:-translate-y-0.5 transition-transform duration-150"
            >
              <span className="w-10 h-10 rounded-full bg-gold/15 text-gold-deep text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                {hadith.hadithnumber}
              </span>
              <div className="flex-1 min-w-0">
                {hadith.arabicText && (
                  <p
                    dir="rtl"
                    lang="ar"
                    className="arabic text-forest/80 leading-relaxed line-clamp-2 mb-2 text-right"
                  >
                    {hadith.arabicText}
                  </p>
                )}
                <p className="text-forest/60 text-sm leading-relaxed line-clamp-2">
                  {hadith.text}
                </p>
                {hadith.grades && hadith.grades.length > 0 && (
                  <p className="text-xs text-gold-deep mt-1.5">
                    {hadith.grades[0].graded_by}: {hadith.grades[0].grade}
                  </p>
                )}
              </div>
              <ChevronRight className="w-4 h-4 text-gold/40 flex-shrink-0 mt-1 group-hover:text-gold transition-colors" aria-hidden="true" />
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {pages > 1 && (
          <nav className="flex items-center justify-between mt-10" aria-label={t('pagination.aria', lang)}>
            {page > 1 ? (
              <Link
                href={`/hadith/${collectionId}?page=${page - 1}`}
                className="btn-outline flex items-center gap-1.5 text-sm"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                {t('pagination.previous', lang)}
              </Link>
            ) : (
              <div />
            )}
            <p className="text-forest/70 text-sm">
              {t('pagination.page_of', lang).replace('{page}', String(page)).replace('{pages}', String(pages))}
              {' · '}
              {t('hadith.count_hadiths', lang).replace('{total}', total.toLocaleString())}
            </p>
            {page < pages ? (
              <Link
                href={`/hadith/${collectionId}?page=${page + 1}`}
                className="btn-outline flex items-center gap-1.5 text-sm"
              >
                {t('pagination.next', lang)}
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            ) : (
              <div />
            )}
          </nav>
        )}
      </div>
    </>
  );
}
