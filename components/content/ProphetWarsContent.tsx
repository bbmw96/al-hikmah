'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { useLanguage } from '@/lib/i18n/context';
import { PROPHET_WARS_CONTENT } from '@/lib/i18n/content/prophet-wars-content';
import type { ProphetWarsContentKey } from '@/lib/i18n/content/prophet-wars-content';

/** Sections currently wired. Grows as content is added. */
const PW_WIRED: readonly number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9] as const;

/** Sections that carry an optional `pw_N_note` (Isra'iliyyat flag or scholar's clarification). */
const PW_WITH_NOTE: readonly number[] = [7] as const;

export function ProphetWarsContent() {
  const { lang } = useLanguage();
  const tc = (key: ProphetWarsContentKey): string => PROPHET_WARS_CONTENT[key][lang];
  const k = (s: string) => s as ProphetWarsContentKey;

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="حُرُوبُ الأَنبِيَاء"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* Intro */}
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

        {/* The chronology */}
        {PW_WIRED.map(n => (
          <section key={n}>
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
              {tc(k(`pw_${n}_h`))}
            </h2>
            <p className="text-xs text-gold/70 italic mb-5">{tc(k(`pw_${n}_verse`))}</p>
            <p className="text-forest/75 leading-relaxed text-sm mb-4">{tc(k(`pw_${n}_p1`))}</p>
            <p className="text-forest/75 leading-relaxed text-sm mb-4">{tc(k(`pw_${n}_p2`))}</p>
            {PW_WITH_NOTE.includes(n) && (
              <div className="gold-border-left pl-5 mt-4">
                <p className="text-forest/70 leading-relaxed text-xs italic">{tc(k(`pw_${n}_note`))}</p>
              </div>
            )}
          </section>
        ))}

      </div>
    </>
  );
}
