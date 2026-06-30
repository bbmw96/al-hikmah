'use client';

import Link from 'next/link';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { PRAYER_STEPS_CONTENT, type PrayerStepsContentKey } from '@/lib/i18n/content/prayer-steps-content';

const WUDU_DUA_AR = 'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ ۝ اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ';

const STEPS: { actionKey: PrayerStepsContentKey; descKey: PrayerStepsContentKey }[] = [
  { actionKey: 'wudu_s1_a', descKey: 'wudu_s1_d' },
  { actionKey: 'wudu_s2_a', descKey: 'wudu_s2_d' },
  { actionKey: 'wudu_s3_a', descKey: 'wudu_s3_d' },
  { actionKey: 'wudu_s4_a', descKey: 'wudu_s4_d' },
  { actionKey: 'wudu_s5_a', descKey: 'wudu_s5_d' },
  { actionKey: 'wudu_s6_a', descKey: 'wudu_s6_d' },
  { actionKey: 'wudu_s7_a', descKey: 'wudu_s7_d' },
  { actionKey: 'wudu_s8_a', descKey: 'wudu_s8_d' },
  { actionKey: 'wudu_s9_a', descKey: 'wudu_s9_d' },
];

export function WuduSection() {
  const { lang } = useLanguage();
  const tc = (k: PrayerStepsContentKey) => {
    const entry = PRAYER_STEPS_CONTENT[k] as Record<string, string | undefined>;
    return entry[lang] ?? entry.en;
  };

  return (
    <section>
      <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-2">
        {tc('wudu_h')}
      </h2>
      <p dir="rtl" lang="ar" className="arabic text-gold mb-4" aria-hidden="true">
        الوضوء
      </p>

      <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
        <p className="text-forest/70 text-sm leading-relaxed">
          {tc('wudu_intro')}
        </p>
        <Link href="/taharah" className="inline-block mt-3 text-gold hover:text-gold-darker text-sm font-medium underline-offset-4 hover:underline">
          {tc('wudu_more')} →
        </Link>
      </div>

      <div className="space-y-3 mb-6">
        {STEPS.map((step, i) => (
          <div key={i} className="flex gap-3 items-start">
            <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40 mt-0.5">
              <span className="text-forest font-semibold text-xs">{i + 1}</span>
            </div>
            <div>
              <p className="font-medium text-forest text-sm">{tc(step.actionKey)}</p>
              <p className="text-forest/60 text-xs leading-relaxed mt-0.5">{tc(step.descKey)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="card-islamic">
        <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-3">
          {tc('wudu_dua_h')}
        </p>
        <ArabicText text={WUDU_DUA_AR} size="md" />
        <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
          <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">{tc('transliteration_label')}</p>
          <p className="text-forest/60 italic text-sm">{tc('wudu_dua_translit')}</p>
          <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">{tc('meaning_label')}</p>
          <p className="text-forest/70 text-sm leading-relaxed">{tc('wudu_dua_meaning')}</p>
          <p className="text-forest/50 text-xs italic mt-3">{tc('wudu_dua_note')}</p>
        </div>
      </div>
    </section>
  );
}
