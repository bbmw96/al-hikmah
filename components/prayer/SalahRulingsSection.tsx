'use client';

import { useLanguage } from '@/lib/i18n/context';
import { SALAH_GUIDE_CONTENT, type SalahGuideContentKey } from '@/lib/i18n/content/salah-guide-content';
import { SALAH_ENCOURAGED, SALAH_FORBIDDEN, SALAH_INVALIDATORS, SALAH_VARIATIONS, type ArabicItem } from './salah-guide-data';
import { EvidenceCard, GuideHeading } from './SalahGuideCards';

const GROUPS: { id: string; items: ArabicItem[]; heading: string; arabic: string; intro: string; lessonLabel: string; close?: string }[] = [
  { id: 'variations', items: SALAH_VARIATIONS, heading: 'sg_b_h', arabic: 'اخْتِلَافُ التَّنَوُّعِ فِي صِفَةِ الصَّلَاةِ', intro: 'sg_b_intro', lessonLabel: 'lbl_schools', close: 'sg_b_close' },
  { id: 'invalidators', items: SALAH_INVALIDATORS, heading: 'sg_c_h', arabic: 'مُبْطِلَاتُ الصَّلَاةِ', intro: 'sg_c_intro', lessonLabel: 'lbl_reason' },
  { id: 'prohibitions', items: SALAH_FORBIDDEN, heading: 'sg_d_h', arabic: 'مَا نُهِيَ عَنْهُ فِي الصَّلَاةِ', intro: 'sg_d_intro', lessonLabel: 'lbl_reason' },
  { id: 'encouraged', items: SALAH_ENCOURAGED, heading: 'sg_e_h', arabic: 'سُنَنُ الصَّلَاةِ وَمُسْتَحَبَّاتُهَا', intro: 'sg_e_intro', lessonLabel: 'lbl_how' },
];

export function SalahRulingsSection() {
  const { lang } = useLanguage();
  const tc = (k: string): string => {
    const entry = SALAH_GUIDE_CONTENT[k as SalahGuideContentKey] as Record<string, string | undefined> | undefined;
    if (!entry) return k;
    return entry[lang] || entry.en || k;
  };

  return (
    <div className="space-y-16">
      {GROUPS.map(g => (
        <section key={g.id} id={g.id}>
          <GuideHeading title={tc(g.heading)} arabic={g.arabic} />
          <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed">{tc(g.intro)}</p>
          </div>
          <div className="space-y-4">
            {g.items.map((item, i) => (
              <EvidenceCard
                key={item.id}
                index={i + 1}
                arabic={item.ar}
                title={tc(`sg_${item.id}_t`)}
                text={tc(`sg_${item.id}_x`)}
                source={tc(`sg_${item.id}_s`)}
                sourceLabel={tc('lbl_source')}
                lesson={tc(`sg_${item.id}_w`)}
                lessonLabel={tc(g.lessonLabel)}
              />
            ))}
          </div>
          {g.close && (
            <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5 mt-6">
              <p className="text-forest/75 text-sm leading-relaxed">{tc(g.close)}</p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
