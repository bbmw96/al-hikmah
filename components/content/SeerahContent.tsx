'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { SEERAH_CONTENT } from '@/lib/i18n/content/seerah-content';
import type { SeerahContentKey } from '@/lib/i18n/content/seerah-content';

function useSeerah() {
  const { lang } = useLanguage();
  return (key: SeerahContentKey): string => {
    const entry = SEERAH_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry['en'] ?? key;
  };
}

const TIMELINE = [
  { year: '570 CE', arabicLabel: 'عام الفيل', titleKey: 'e570_title' as SeerahContentKey, descKey: 'e570_desc' as SeerahContentKey },
  { year: '610 CE', arabicLabel: 'بدء الوحي', titleKey: 'e610_title' as SeerahContentKey, descKey: 'e610_desc' as SeerahContentKey },
  { year: '613 CE', arabicLabel: 'الدعوة الجهرية', titleKey: 'e613_title' as SeerahContentKey, descKey: 'e613_desc' as SeerahContentKey },
  { year: '615 CE', arabicLabel: 'الهجرة إلى الحبشة', titleKey: 'e615_title' as SeerahContentKey, descKey: 'e615_desc' as SeerahContentKey },
  { year: '619 CE', arabicLabel: 'عام الحزن', titleKey: 'e619_title' as SeerahContentKey, descKey: 'e619_desc' as SeerahContentKey },
  { year: '622 CE', arabicLabel: 'الهجرة إلى المدينة', titleKey: 'e622_title' as SeerahContentKey, descKey: 'e622_desc' as SeerahContentKey },
  { year: '624 CE', arabicLabel: 'غزوة بدر', titleKey: 'e624_title' as SeerahContentKey, descKey: 'e624_desc' as SeerahContentKey },
  { year: '630 CE', arabicLabel: 'فتح مكة', titleKey: 'e630_title' as SeerahContentKey, descKey: 'e630_desc' as SeerahContentKey },
  { year: '632 CE', arabicLabel: 'حجة الوداع', titleKey: 'e632_title' as SeerahContentKey, descKey: 'e632_desc' as SeerahContentKey },
];

export function SeerahContent() {
  const tc = useSeerah();

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="السيرة النبوية"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Opening */}
        <div className="text-center mb-16">
          <ArabicText
            text="لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ"
            size="lg"
            className="mb-4"
          />
          <p className="text-forest/60 italic">
            {tc('verse_intro')}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold/20" aria-hidden="true" />

          <div className="space-y-10">
            {TIMELINE.map((event, i) => (
              <article key={i} className="relative pl-16">
                {/* Dot */}
                <div
                  className="absolute left-4 top-1 w-4 h-4 rounded-full bg-gold border-2 border-cream shadow"
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-baseline gap-3 mb-3">
                  <span className="badge-gold text-xs">{event.year}</span>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="arabic-sm text-gold"
                  >
                    {event.arabicLabel}
                  </p>
                </div>

                <h3 className="font-garamond text-xl font-semibold text-forest mb-3">
                  {tc(event.titleKey)}
                </h3>
                <p className="text-forest/70 leading-relaxed text-sm">{tc(event.descKey)}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="mt-16 card-islamic text-center">
          <ArabicText
            text="صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ"
            size="lg"
            className="mb-4"
          />
          <p className="text-forest/60 text-sm italic">
            {tc('closing_line')}
          </p>
        </div>
      </div>
    </>
  );
}
