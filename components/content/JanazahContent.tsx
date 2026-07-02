'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { useLanguage } from '@/lib/i18n/context';
import { JANAZAH_CONTENT } from '@/lib/i18n/content/janazah-content';
import type { JanazahContentKey } from '@/lib/i18n/content/janazah-content';

export function JanazahContent() {
  const { lang } = useLanguage();
  const tc = (key: JanazahContentKey): string => {
    const entry = JANAZAH_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="صَلَاةُ الجَنَازَة"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-14">
        {/* Ruling */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('ruling_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed">{tc('ruling_p')}</p>
        </section>

        {/* Preparation */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('preparation_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed">{tc('preparation_p')}</p>
        </section>

        {/* Method */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('method_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed mb-8">{tc('method_intro')}</p>

          <div className="space-y-6">
            <article className="card-islamic">
              <h3 className="font-garamond text-xl font-semibold text-forest mb-2">{tc('takbir_1_h')}</h3>
              <p className="text-forest/75 leading-relaxed text-sm">{tc('takbir_1_p')}</p>
            </article>
            <article className="card-islamic">
              <h3 className="font-garamond text-xl font-semibold text-forest mb-2">{tc('takbir_2_h')}</h3>
              <p className="text-forest/75 leading-relaxed text-sm">{tc('takbir_2_p')}</p>
            </article>
            <article className="card-islamic">
              <h3 className="font-garamond text-xl font-semibold text-forest mb-2">{tc('takbir_3_h')}</h3>
              <p className="text-forest/75 leading-relaxed text-sm">{tc('takbir_3_p')}</p>
            </article>
          </div>
        </section>

        {/* The main du'a for the adult */}
        <section>
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('takbir_3_h')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              دُعَاءُ الجَنَازَة
            </p>
          </div>
          <article className="card-forest rounded-2xl p-6 mb-4">
            <p className="text-cream/85 leading-relaxed text-sm">{tc('dua_adult')}</p>
          </article>
          <article className="card-forest rounded-2xl p-6">
            <p className="text-cream/85 leading-relaxed text-sm">{tc('dua_child')}</p>
          </article>
        </section>

        {/* Fourth takbir */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('takbir_4_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed">{tc('takbir_4_p')}</p>
        </section>

        {/* Procession */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('procession_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed">{tc('procession_p')}</p>
        </section>

        {/* Burial */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('burial_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed">{tc('burial_p')}</p>
        </section>

        {/* Sources */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('sources_h')}
          </h2>
          <article className="card-forest rounded-2xl p-6">
            <p className="text-cream/85 leading-relaxed text-sm">{tc('sources_p')}</p>
          </article>
        </section>
      </div>
    </>
  );
}
