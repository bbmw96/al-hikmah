'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { useLanguage } from '@/lib/i18n/context';
import { TABIIN_CONTENT } from '@/lib/i18n/content/tabiin-content';
import type { TabiinContentKey } from '@/lib/i18n/content/tabiin-content';

function useTC() {
  const { lang } = useLanguage();
  return (key: TabiinContentKey): string => {
    const entry = TABIIN_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry.en ?? key;
  };
}

interface TabiiEntry {
  arabicHint?: string;
  nameKey: TabiinContentKey;
  datesKey: TabiinContentKey;
  bodyKey: TabiinContentKey;
}

const TABIIN: TabiiEntry[] = [
  { nameKey: 'tabi1_name',  datesKey: 'tabi1_dates',  bodyKey: 'tabi1_body' },
  { nameKey: 'tabi2_name',  datesKey: 'tabi2_dates',  bodyKey: 'tabi2_body' },
  { nameKey: 'tabi3_name',  datesKey: 'tabi3_dates',  bodyKey: 'tabi3_body' },
  { nameKey: 'tabi4_name',  datesKey: 'tabi4_dates',  bodyKey: 'tabi4_body' },
  { nameKey: 'tabi5_name',  datesKey: 'tabi5_dates',  bodyKey: 'tabi5_body' },
  { nameKey: 'tabi6_name',  datesKey: 'tabi6_dates',  bodyKey: 'tabi6_body' },
  { nameKey: 'tabi7_name',  datesKey: 'tabi7_dates',  bodyKey: 'tabi7_body' },
  { nameKey: 'tabi8_name',  datesKey: 'tabi8_dates',  bodyKey: 'tabi8_body' },
  { nameKey: 'tabi9_name',  datesKey: 'tabi9_dates',  bodyKey: 'tabi9_body' },
  { nameKey: 'tabi10_name', datesKey: 'tabi10_dates', bodyKey: 'tabi10_body' },
];

interface TabiyaEntry {
  nameKey: TabiinContentKey;
  bodyKey: TabiinContentKey;
}

const TABIYAT: TabiyaEntry[] = [
  { nameKey: 'tabiya1_name', bodyKey: 'tabiya1_body' },
  { nameKey: 'tabiya2_name', bodyKey: 'tabiya2_body' },
  { nameKey: 'tabiya3_name', bodyKey: 'tabiya3_body' },
];

const IMAMS: TabiiEntry[] = [
  { nameKey: 'taba1_name', datesKey: 'taba1_dates', bodyKey: 'taba1_body' },
  { nameKey: 'taba2_name', datesKey: 'taba2_dates', bodyKey: 'taba2_body' },
  { nameKey: 'taba3_name', datesKey: 'taba3_dates', bodyKey: 'taba3_body' },
  { nameKey: 'taba4_name', datesKey: 'taba4_dates', bodyKey: 'taba4_body' },
  { nameKey: 'taba5_name', datesKey: 'taba5_dates', bodyKey: 'taba5_body' },
  { nameKey: 'taba6_name', datesKey: 'taba6_dates', bodyKey: 'taba6_body' },
  { nameKey: 'taba7_name', datesKey: 'taba7_dates', bodyKey: 'taba7_body' },
];

export function TabiinContent() {
  const tc = useTC();

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="التَّابِعُونَ"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* What are the Tabi'in */}
        <section>
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('whatis_h')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              التابعون وتابعو التابعين
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-forest/75 leading-relaxed">{tc('whatis_p1')}</p>
            <p className="text-forest/75 leading-relaxed">{tc('whatis_p2')}</p>
          </div>
        </section>

        {/* Ten notable Tabi'in */}
        <section>
          <div className="flex flex-wrap items-baseline gap-3 mb-6">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('tabiin_h')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              عشرة من التابعين
            </p>
          </div>
          <div className="space-y-4">
            {TABIIN.map((entry, idx) => (
              <article key={entry.nameKey} className="card-islamic">
                <div className="flex items-start gap-3 mb-2">
                  <span className="w-7 h-7 rounded-full bg-forest flex items-center justify-center text-gold text-xs font-semibold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-garamond text-lg md:text-xl font-semibold text-forest leading-tight">
                      {tc(entry.nameKey)}
                    </h3>
                    <p className="text-xs text-gold/80 font-medium uppercase tracking-wider mt-1">
                      {tc(entry.datesKey)}
                    </p>
                  </div>
                </div>
                <p className="text-forest/75 leading-relaxed text-sm">{tc(entry.bodyKey)}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Notable female Tabi'iyat */}
        <section>
          <div className="flex flex-wrap items-baseline gap-3 mb-6">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('tabiyat_h')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              التابعيات
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TABIYAT.map(entry => (
              <article key={entry.nameKey} className="card-forest rounded-2xl p-6 flex flex-col gap-3">
                <h3 className="font-garamond text-lg font-semibold text-gold leading-tight">
                  {tc(entry.nameKey)}
                </h3>
                <p className="text-cream/85 leading-relaxed text-sm">{tc(entry.bodyKey)}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Tabi al-Tabi'in and the four imams */}
        <section>
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('taba_h')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              تابعو التابعين والأئمة الأربعة
            </p>
          </div>
          <p className="text-forest/75 leading-relaxed mb-6">{tc('taba_intro')}</p>
          <div className="space-y-4">
            {IMAMS.map((entry, idx) => (
              <article key={entry.nameKey} className="card-islamic">
                <div className="flex items-start gap-3 mb-2">
                  <span className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center text-forest text-xs font-semibold flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-garamond text-lg md:text-xl font-semibold text-forest leading-tight">
                      {tc(entry.nameKey)}
                    </h3>
                    <p className="text-xs text-gold/80 font-medium uppercase tracking-wider mt-1">
                      {tc(entry.datesKey)}
                    </p>
                  </div>
                </div>
                <p className="text-forest/75 leading-relaxed text-sm">{tc(entry.bodyKey)}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Sources and reliability */}
        <section>
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('sources_h')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              المصادر
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-forest/75 leading-relaxed">{tc('sources_p1')}</p>
            <p className="text-forest/75 leading-relaxed">{tc('sources_p2')}</p>
          </div>
        </section>
      </div>
    </>
  );
}
