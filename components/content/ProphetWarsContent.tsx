'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { useLanguage } from '@/lib/i18n/context';
import { PROPHET_WARS_CONTENT } from '@/lib/i18n/content/prophet-wars-content';
import type { ProphetWarsContentKey } from '@/lib/i18n/content/prophet-wars-content';

export function ProphetWarsContent() {
  const { lang } = useLanguage();
  const tc = (key: ProphetWarsContentKey): string => PROPHET_WARS_CONTENT[key][lang];

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="حُرُوبُ الأَنبِيَاء"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('intro_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed text-sm mb-4">{tc('intro_p1')}</p>
          <p className="text-forest/75 leading-relaxed text-sm mb-4">{tc('intro_p2')}</p>
          <div className="gold-border-left pl-5 mt-6">
            <p className="text-forest/70 leading-relaxed text-sm italic">{tc('intro_p3')}</p>
          </div>
        </section>
      </div>
    </>
  );
}
