'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { AqidahClusterNav } from '@/components/ui/AqidahClusterNav';
import { BarrierIllustration } from '@/components/ui/BarrierIllustration';
import { useLanguage } from '@/lib/i18n/context';
import { YAJUJ_MAJUJ_CONTENT } from '@/lib/i18n/content/yajuj-majuj-content';
import type { YajujMajujContentKey } from '@/lib/i18n/content/yajuj-majuj-content';

/** Sections currently wired. Grows as content is added. */
const WIRED: readonly number[] = [1] as const;

export function YajujMajujContent() {
  const { lang } = useLanguage();
  const tc = (key: YajujMajujContentKey): string => YAJUJ_MAJUJ_CONTENT[key][lang];
  const k = (s: string) => s as YajujMajujContentKey;

  return (
    <>
      <PageHeader
        title={tc('header.title')}
        arabicTitle="يَأْجُوجُ وَمَأْجُوج"
        subtitle={tc('header.subtitle')}
      />

      <AqidahClusterNav />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {WIRED.map(n => (
          <section key={n}>
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
              {tc(k(`${n}.h`))}
            </h2>
            <p className="text-forest/75 leading-relaxed text-sm">{tc(k(`${n}.p1`))}</p>
          </section>
        ))}

        {/* Barrier illustration */}
        <BarrierIllustration />

        {/* In development */}
        <section className="card-islamic bg-forest/5 border-l-4 border-gold">
          <h2 className="section-title font-garamond text-xl md:text-2xl font-semibold text-forest mb-3">
            {tc('indev.h')}
          </h2>
          <p className="text-forest/75 leading-relaxed text-sm mb-4 italic">{tc('indev.intro')}</p>
          <ul className="space-y-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
              <li key={n} className="flex gap-2 text-forest/75 text-sm leading-relaxed">
                <span className="text-gold mt-1 flex-shrink-0" aria-hidden="true">•</span>
                <span>{tc(k(`indev.${n}`))}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </>
  );
}
