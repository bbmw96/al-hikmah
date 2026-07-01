'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { useLanguage } from '@/lib/i18n/context';
import { SAHABA_CONTENT } from '@/lib/i18n/content/sahaba-content';
import type { SahabaContentKey } from '@/lib/i18n/content/sahaba-content';

/**
 * List of Ashara Mubashsharun indices for which cards are wired.
 * Grows as content is added (1 = Abu Bakr, 2 = Umar, 3 = Uthman, ...).
 */
const ASHARA_WIRED: readonly number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

export function SahabaContent() {
  const { lang } = useLanguage();
  const tc = (key: SahabaContentKey): string => SAHABA_CONTENT[key][lang];
  const k = (s: string) => s as SahabaContentKey;

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="الصَّحَابَة"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* Who is a Sahabi */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('whatis_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed text-sm mb-4">{tc('whatis_p1')}</p>
          <p className="text-forest/75 leading-relaxed text-sm">{tc('whatis_p2')}</p>
        </section>

        {/* The Ten Promised Paradise */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('ashara_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed text-sm mb-8">{tc('ashara_intro')}</p>

          <div className="space-y-6">
            {ASHARA_WIRED.map(n => (
              <article key={n} className="card-islamic">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40 mt-0.5">
                    <span className="text-forest font-semibold text-xs">{n}</span>
                  </div>
                  <div>
                    <h3 className="font-garamond text-xl font-semibold text-forest">
                      {tc(k(`ashara_${n}_name`))}
                    </h3>
                    <p className="text-forest/60 text-xs italic mt-1">{tc(k(`ashara_${n}_kunya`))}</p>
                  </div>
                </div>

                <p className="text-forest/75 text-sm leading-relaxed mb-3">
                  {tc(k(`ashara_${n}_lineage`))}
                </p>
                <p className="text-forest/75 text-sm leading-relaxed mb-3">
                  {tc(k(`ashara_${n}_islam`))}
                </p>
                <p className="text-forest/75 text-sm leading-relaxed mb-4">
                  {tc(k(`ashara_${n}_signature`))}
                </p>

                <div className="bg-gold/10 border border-gold/20 rounded-lg p-3 mb-3">
                  <p className="text-forest/75 text-sm leading-relaxed italic">
                    {tc(k(`ashara_${n}_hadith`))}
                  </p>
                </div>

                <p className="text-forest/70 text-xs leading-relaxed">
                  {tc(k(`ashara_${n}_death`))}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* In development */}
        <section className="card-islamic bg-forest/5 border-l-4 border-gold">
          <h2 className="section-title font-garamond text-xl md:text-2xl font-semibold text-forest mb-3">
            {tc('indev_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed text-sm mb-4 italic">{tc('indev_intro')}</p>
          <ul className="space-y-2">
            {[1, 2, 3, 4, 5].map(n => (
              <li key={n} className="flex gap-2 text-forest/75 text-sm leading-relaxed">
                <span className="text-gold mt-1 flex-shrink-0" aria-hidden="true">•</span>
                <span>{tc(k(`indev_${n}`))}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </>
  );
}
