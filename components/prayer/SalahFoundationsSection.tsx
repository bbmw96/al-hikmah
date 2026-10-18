'use client';

import { useLanguage } from '@/lib/i18n/context';
import { SALAH_GUIDE_CONTENT, type SalahGuideContentKey } from '@/lib/i18n/content/salah-guide-content';
import { SALAH_SUNNAH, SALAH_VERSES } from './salah-guide-data';
import { EvidenceCard, GuideHeading } from './SalahGuideCards';

export function SalahFoundationsSection() {
  const { lang } = useLanguage();
  const tc = (k: string): string => {
    const entry = SALAH_GUIDE_CONTENT[k as SalahGuideContentKey] as Record<string, string | undefined> | undefined;
    if (!entry) return k;
    return entry[lang] || entry.en || k;
  };

  return (
    <section id="quran-and-sunnah" className="space-y-10">
      <div>
        <GuideHeading title={tc('sg_found_h')} arabic="صِفَةُ الصَّلَاةِ مِنَ الْكِتَابِ وَالسُّنَّةِ" />
        <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5">
          <p className="text-forest/75 text-sm leading-relaxed">{tc('sg_found_intro')}</p>
        </div>
      </div>

      <div>
        <GuideHeading level={3} title={tc('sg_verses_h')} arabic="مِنَ الْقُرْآنِ الْكَرِيمِ" />
        <div className="space-y-4">
          {SALAH_VERSES.map((v, i) => (
            <EvidenceCard
              key={v.id}
              index={i + 1}
              arabic={v.ar}
              badge={`سورة ${v.surah} · ${v.ref}`}
              text={tc(`sg_${v.id}_m`)}
              sourceLabel={tc('lbl_source')}
              lesson={tc(`sg_${v.id}_p`)}
              lessonLabel={tc('lbl_point')}
            />
          ))}
        </div>
      </div>

      <div>
        <GuideHeading level={3} title={tc('sg_sunnah_h')} arabic="مِنَ السُّنَّةِ النَّبَوِيَّةِ" />
        <div className="space-y-4">
          {SALAH_SUNNAH.map((s, i) => (
            <EvidenceCard
              key={s.id}
              index={i + 1}
              arabic={s.ar}
              title={tc(`sg_${s.id}_t`)}
              text={tc(`sg_${s.id}_x`)}
              source={tc(`sg_${s.id}_s`)}
              sourceLabel={tc('lbl_source')}
              lesson={tc(`sg_${s.id}_w`)}
              lessonLabel={tc('lbl_teaches')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
