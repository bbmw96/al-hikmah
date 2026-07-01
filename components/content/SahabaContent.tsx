'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { useLanguage } from '@/lib/i18n/context';
import { SAHABA_CONTENT } from '@/lib/i18n/content/sahaba-content';
import type { SahabaContentKey } from '@/lib/i18n/content/sahaba-content';

export function SahabaContent() {
  const { lang } = useLanguage();
  const tc = (key: SahabaContentKey): string => SAHABA_CONTENT[key][lang];

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="الصَّحَابَة"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('whatis_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed text-sm mb-4">{tc('whatis_p1')}</p>
          <p className="text-forest/75 leading-relaxed text-sm">{tc('whatis_p2')}</p>
        </section>
      </div>
    </>
  );
}
