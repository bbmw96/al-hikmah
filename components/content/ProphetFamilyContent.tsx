'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { useLanguage } from '@/lib/i18n/context';
import { PROPHET_FAMILY_CONTENT } from '@/lib/i18n/content/prophet-family-content';
import type { ProphetFamilyContentKey } from '@/lib/i18n/content/prophet-family-content';

const WIVES: ProphetFamilyContentKey[] = [
  'wife_khadijah',
  'wife_sawda',
  'wife_aisha',
  'wife_hafsa',
  'wife_zaynab_khuzaymah',
  'wife_umm_salama',
  'wife_zaynab_jahsh',
  'wife_juwayriyya',
  'wife_umm_habiba',
  'wife_safiyya',
  'wife_maymuna',
];

const CHILDREN: ProphetFamilyContentKey[] = [
  'child_qasim',
  'child_zaynab',
  'child_ruqayyah',
  'child_umm_kulthum',
  'child_fatimah',
  'child_abdullah',
  'child_ibrahim',
];

const GRANDCHILDREN: ProphetFamilyContentKey[] = [
  'gc_umamah',
  'gc_abdullah_uthman',
  'gc_hasan',
  'gc_husayn',
  'gc_zaynab_ali',
  'gc_umm_kulthum_ali',
];

export function ProphetFamilyContent() {
  const { lang } = useLanguage();
  const tc = (key: ProphetFamilyContentKey): string => {
    const entry = PROPHET_FAMILY_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="شَجَرَةُ نَسَبِ النَّبِيِّ ﷺ"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* Lineage */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('lineage_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed">{tc('lineage_p')}</p>
        </section>

        {/* Parents */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('parents_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed mb-6">{tc('parents_intro')}</p>
          <div className="space-y-4">
            <article className="card-islamic">
              <p className="text-forest/75 leading-relaxed text-sm">{tc('parent_abdullah')}</p>
            </article>
            <article className="card-islamic">
              <p className="text-forest/75 leading-relaxed text-sm">{tc('parent_aminah')}</p>
            </article>
          </div>
        </section>

        {/* Guardians + wet-nurses */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('guardians_h')}
          </h2>
          <div className="space-y-4">
            <article className="card-islamic">
              <p className="text-forest/75 leading-relaxed text-sm">{tc('wetnurse_thuwaybah')}</p>
            </article>
            <article className="card-islamic">
              <p className="text-forest/75 leading-relaxed text-sm">{tc('wetnurse_halimah')}</p>
            </article>
            <article className="card-islamic">
              <p className="text-forest/75 leading-relaxed text-sm">{tc('guardian_abdmuttalib')}</p>
            </article>
            <article className="card-islamic">
              <p className="text-forest/75 leading-relaxed text-sm">{tc('guardian_abutalib')}</p>
            </article>
          </div>
        </section>

        {/* Wives */}
        <section>
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('wives_h')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              أُمَّهَاتُ المُؤْمِنِينَ
            </p>
          </div>
          <p className="text-forest/75 leading-relaxed mb-6">{tc('wives_intro')}</p>
          <div className="space-y-4">
            {WIVES.map((k) => (
              <article key={k} className="card-islamic">
                <p className="text-forest/75 leading-relaxed text-sm">{tc(k)}</p>
              </article>
            ))}
          </div>

          {/* Mariyah — noted separately per classical position */}
          <div className="mt-6 space-y-4">
            <h3 className="font-garamond text-xl font-semibold text-forest">
              {tc('concubine_h')}
            </h3>
            <article className="card-forest rounded-2xl p-6">
              <p className="text-cream/85 leading-relaxed text-sm">{tc('concubine_mariyah')}</p>
            </article>
          </div>
        </section>

        {/* Children */}
        <section>
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('children_h')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              أَوْلَادُ النَّبِيِّ ﷺ
            </p>
          </div>
          <p className="text-forest/75 leading-relaxed mb-6">{tc('children_intro')}</p>
          <div className="space-y-4">
            {CHILDREN.map((k) => (
              <article key={k} className="card-islamic">
                <p className="text-forest/75 leading-relaxed text-sm">{tc(k)}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Grandchildren */}
        <section>
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('grandchildren_h')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              أَحْفَادُ النَّبِيِّ ﷺ
            </p>
          </div>
          <p className="text-forest/75 leading-relaxed mb-6">{tc('grandchildren_intro')}</p>
          <div className="space-y-4">
            {GRANDCHILDREN.map((k) => (
              <article key={k} className="card-islamic">
                <p className="text-forest/75 leading-relaxed text-sm">{tc(k)}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Sources note */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('sources_h')}
          </h2>
          <div className="card-forest rounded-2xl p-6 space-y-4">
            <p className="text-cream/85 leading-relaxed text-sm">{tc('sources_p1')}</p>
            <p className="text-cream/85 leading-relaxed text-sm">{tc('sources_p2')}</p>
          </div>
        </section>
      </div>
    </>
  );
}
