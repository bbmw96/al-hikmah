'use client';

import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { GHUSL_CONTENT } from '@/lib/i18n/content/ghusl-content';
import type { GhuslContentKey } from '@/lib/i18n/content/ghusl-content';
import type { Lang } from '@/lib/i18n/translations';

function useGhusl() {
  const { lang } = useLanguage();
  return (key: GhuslContentKey): string => {
    const entry = GHUSL_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry['en'] ?? key;
  };
}

const OBLIGATORY_CAUSES = [
  {
    n: 1,
    titleKey: 'cause_1_title' as GhuslContentKey,
    arabic: 'الجنابة',
    bodyKey: 'cause_1_body' as GhuslContentKey,
  },
  {
    n: 2,
    titleKey: 'cause_2_title' as GhuslContentKey,
    arabic: 'الإنزال',
    bodyKey: 'cause_2_body' as GhuslContentKey,
  },
  {
    n: 3,
    titleKey: 'cause_3_title' as GhuslContentKey,
    arabic: 'انقطاع الحيض',
    bodyKey: 'cause_3_body' as GhuslContentKey,
  },
  {
    n: 4,
    titleKey: 'cause_4_title' as GhuslContentKey,
    arabic: 'انقطاع النفاس',
    bodyKey: 'cause_4_body' as GhuslContentKey,
  },
  {
    n: 5,
    titleKey: 'cause_5_title' as GhuslContentKey,
    arabic: 'الإسلام',
    bodyKey: 'cause_5_body' as GhuslContentKey,
  },
  {
    n: 6,
    titleKey: 'cause_6_title' as GhuslContentKey,
    arabic: 'الموت',
    bodyKey: 'cause_6_body' as GhuslContentKey,
  },
];

const STEPS = [
  {
    step: 1,
    titleKey: 'step_1_title' as GhuslContentKey,
    arabic: 'النِّيَّة',
    bodyKey: 'step_1_body' as GhuslContentKey,
  },
  {
    step: 2,
    titleKey: 'step_2_title' as GhuslContentKey,
    arabic: 'البسملة وغسل اليدين',
    bodyKey: 'step_2_body' as GhuslContentKey,
  },
  {
    step: 3,
    titleKey: 'step_3_title' as GhuslContentKey,
    arabic: 'إزالة النجاسة',
    bodyKey: 'step_3_body' as GhuslContentKey,
  },
  {
    step: 4,
    titleKey: 'step_4_title' as GhuslContentKey,
    arabic: 'الوضوء الكامل',
    bodyKey: 'step_4_body' as GhuslContentKey,
  },
  {
    step: 5,
    titleKey: 'step_5_title' as GhuslContentKey,
    arabic: 'إفاضة الماء على الجسم',
    bodyKey: 'step_5_body' as GhuslContentKey,
  },
  {
    step: 6,
    titleKey: 'step_6_title' as GhuslContentKey,
    arabic: 'غسل القدمين',
    bodyKey: 'step_6_body' as GhuslContentKey,
  },
];

const PERMIT_KEYS: GhuslContentKey[] = [
  'permit_1', 'permit_2', 'permit_3', 'permit_4', 'permit_5', 'permit_6',
];

export function GhuslContent() {
  const tc = useGhusl();

  return (
    <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

      {/* Introduction */}
      <section>
        <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
          {tc('section_whatIs')}
        </h2>
        <p className="text-forest/70 leading-relaxed text-sm mb-4">
          {tc('intro_p1')}
        </p>
        <p className="text-forest/70 leading-relaxed text-sm mb-6">
          {tc('intro_p2')}
        </p>
        <div className="card-forest rounded-2xl p-8">
          <ArabicText text="وَإِن كُنتُمْ جُنُبًا فَاطَّهَّرُوا" size="lg" />
          <p className="text-cream/80 text-sm mt-4 leading-relaxed">
            {tc('label_intro_quran')}
          </p>
        </div>
      </section>

      {/* What makes it obligatory */}
      <section>
        <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
          {tc('section_obligatory')}
        </h2>
        <div className="space-y-5">
          {OBLIGATORY_CAUSES.map(cause => (
            <div key={cause.n} className="card-islamic flex gap-4">
              <span className="w-8 h-8 rounded-full bg-gold/15 text-gold text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-1">
                {cause.n}
              </span>
              <div>
                <p dir="rtl" lang="ar" className="arabic text-gold mb-1.5">
                  {cause.arabic}
                </p>
                <h3 className="font-garamond text-lg font-semibold text-forest mb-1">
                  {tc(cause.titleKey)}
                </h3>
                <p className="text-forest/60 text-sm leading-relaxed">{tc(cause.bodyKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Method */}
      <section>
        <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
          {tc('section_method')}
        </h2>
        <div className="gold-border-left pl-5 mb-8">
          <p className="text-forest/70 text-sm leading-relaxed">
            {tc('aisha_intro')} <em>{tc('aisha_hadith')}</em> {tc('aisha_citation')}
          </p>
        </div>
        <div className="space-y-5">
          {STEPS.map(step => (
            <div key={step.step} className="card-islamic flex gap-5">
              <div className="w-10 h-10 rounded-full bg-forest text-cream text-sm font-bold flex items-center justify-center flex-shrink-0">
                {step.step}
              </div>
              <div>
                <p dir="rtl" lang="ar" className="arabic text-gold mb-1.5">
                  {step.arabic}
                </p>
                <h3 className="font-garamond text-lg font-semibold text-forest mb-1">
                  {tc(step.titleKey)}
                </h3>
                <p className="text-forest/60 text-sm leading-relaxed">{tc(step.bodyKey)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="gold-border-left pl-5 mt-8">
          <p className="text-forest/70 text-sm leading-relaxed">
            <strong>{tc('label_minimum')}</strong> {tc('minimum_body')}
          </p>
        </div>
      </section>

      {/* What it permits */}
      <section>
        <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
          {tc('section_permits')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {PERMIT_KEYS.map(key => (
            <div key={key} className="card-islamic flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
              <p className="text-forest/70 text-sm leading-relaxed">{tc(key)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Spiritual significance */}
      <section>
        <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
          {tc('section_spiritual')}
        </h2>
        <p className="text-forest/70 leading-relaxed text-sm mb-4">
          {tc('spiritual_p1')}
        </p>
        <p className="text-forest/70 leading-relaxed text-sm mb-6">
          {tc('friday_intro')} <em>{tc('friday_hadith')}</em> {tc('friday_citation')}
        </p>
        <div className="card-gold rounded-2xl p-8">
          <ArabicText
            text="إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ"
            size="md"
          />
          <p className="text-forest/70 text-sm mt-4 leading-relaxed">
            {tc('closing_verse')}
          </p>
        </div>
      </section>

    </div>
  );
}
