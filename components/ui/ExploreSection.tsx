'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { QuickAccessGrid } from '@/components/ui/QuickAccessGrid';
import { useLanguage } from '@/lib/i18n/context';

export function ExploreSection() {
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <FadeIn className="text-center mb-12">
        <h2 className="section-title text-3xl md:text-4xl font-garamond font-semibold text-forest">
          {t('home.explore')}
        </h2>
        <p className="text-forest/60 mt-4 text-lg max-w-xl mx-auto">
          {t('home.exploreSub')}
        </p>
      </FadeIn>

      <QuickAccessGrid />
    </section>
  );
}
