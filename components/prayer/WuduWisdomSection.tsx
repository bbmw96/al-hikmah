'use client';

import { useLanguage } from '@/lib/i18n/context';
import { WUDU_HADITH_CONTENT, type WuduHadithContentKey } from '@/lib/i18n/content/wudu-hadith-content';
import { WUDU_HADITH } from './salah-guide-data';
import { EvidenceCard, GuideHeading } from './SalahGuideCards';

export function WuduWisdomSection() {
  const { lang } = useLanguage();
  const tc = (k: string): string => {
    const entry = WUDU_HADITH_CONTENT[k as WuduHadithContentKey] as Record<string, string | undefined> | undefined;
    if (!entry) return k;
    return entry[lang] || entry.en || k;
  };

  return (
    <section id="wudu-hadith">
      <GuideHeading title={tc('w_h')} arabic="حِكْمَةُ صِفَةِ الْوُضُوءِ مِنَ السُّنَّةِ" />
      <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
        <p className="text-forest/75 text-sm leading-relaxed">{tc('w_intro')}</p>
      </div>
      <div className="space-y-4">
        {WUDU_HADITH.map((item, i) => (
          <EvidenceCard
            key={item.id}
            index={i + 1}
            arabic={item.ar}
            title={tc(`${item.id}_t`)}
            text={tc(`${item.id}_x`)}
            source={tc(`${item.id}_s`)}
            sourceLabel={tc('w_lbl_source')}
            lesson={tc(`${item.id}_w`)}
            lessonLabel={tc('w_lbl_reason')}
          />
        ))}
      </div>
    </section>
  );
}
