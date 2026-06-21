'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/ui/FadeIn';
import { StaggerGroup, StaggerItem } from '@/components/ui/StaggerGroup';
import { useLanguage } from '@/lib/i18n/context';
import { HADITH_COLLECTIONS } from '@/lib/data/collections';

const FEATURED_COLLECTIONS = HADITH_COLLECTIONS.filter(c => c.available).slice(0, 4);

export function FeaturedCollections() {
  const { t } = useLanguage();

  return (
    <section className="bg-forest/5 border-y border-gold/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn className="flex items-center justify-between mb-10">
          <div>
            <h2 className="section-title text-2xl md:text-3xl font-garamond font-semibold text-forest">
              {t('home.featured')}
            </h2>
            <p className="text-forest/60 mt-2">{t('home.featuredSub')}</p>
          </div>
          <Link href="/hadith" className="btn-outline hidden sm:flex items-center gap-2 text-sm">
            {t('home.allcollections')}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </FadeIn>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED_COLLECTIONS.map(col => (
            <StaggerItem key={col.id}>
              <Link
                href={`/hadith/${col.id}`}
                className="card-forest group h-full flex flex-col"
              >
                <p
                  dir="rtl"
                  lang="ar"
                  className="arabic-sm text-gold/80 mb-2 text-right"
                  aria-hidden="true"
                >
                  {col.arabicName}
                </p>
                <h3 className="font-garamond text-lg font-semibold text-cream mb-1 group-hover:text-gold transition-colors">
                  {col.englishName}
                </h3>
                <p className="text-cream/50 text-xs mb-3">{col.author.split('Imam ')[1] ?? col.author}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="badge-gold text-xs">{col.grade}</span>
                  <span className="text-cream/40 text-xs">
                    {col.hadithCount.toLocaleString()} {t('ui.hadiths')}
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="mt-6 sm:hidden">
          <Link href="/hadith" className="btn-outline w-full text-center block text-sm">
            {t('home.viewall')}
          </Link>
        </div>
      </div>
    </section>
  );
}
