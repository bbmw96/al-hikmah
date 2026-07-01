'use client';

import { FadeIn } from '@/components/ui/FadeIn';
import { useLanguage } from '@/lib/i18n/context';

const HIGHLIGHTS = [
  { count: '14', labelKey: 'stats.languages' as const },
  { count: '114', labelKey: 'stats.surahs' as const },
  { count: '25', labelKey: 'stats.prophets' as const },
  { count: '270+', labelKey: 'stats.duas' as const },
  { count: '6', labelKey: 'stats.hadith' as const },
  { count: '30+', labelKey: 'stats.companions' as const },
] as const;

export function SiteHighlights() {
  const { t } = useLanguage();

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <FadeIn className="text-center mb-10 md:mb-12">
        <h2 className="section-title text-3xl md:text-4xl font-garamond font-semibold text-forest">
          {t('stats.heading')}
        </h2>
        <p className="text-forest/60 mt-4 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          {t('stats.sub')}
        </p>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {HIGHLIGHTS.map((h, i) => (
          <FadeIn key={h.labelKey} delay={i * 60}>
            <div className="h-full text-center rounded-2xl bg-cream p-5 md:p-6 shadow-sm border border-gold/20 hover:border-gold/60 hover:shadow-md transition-all">
              <p className="text-4xl md:text-5xl font-garamond font-bold text-forest">
                {h.count}
              </p>
              <div className="mt-2 h-px w-8 bg-gold/40 mx-auto" aria-hidden="true" />
              <p className="text-forest/65 text-xs md:text-sm mt-3 leading-snug">
                {t(h.labelKey)}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
