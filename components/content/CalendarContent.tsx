'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { useLanguage } from '@/lib/i18n/context';
import { CALENDAR_CONTENT } from '@/lib/i18n/content/calendar-content';
import type { CalendarContentKey } from '@/lib/i18n/content/calendar-content';

function useCC() {
  const { lang } = useLanguage();
  return (key: CalendarContentKey): string => {
    const entry = CALENDAR_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry['en'] ?? key;
  };
}

const MONTH_ARABIC = [
  'مُحَرَّم', 'صَفَر', 'رَبِيعُ الأَوَّل', 'رَبِيعُ الآخِر',
  'جُمَادَى الأُولَى', 'جُمَادَى الآخِرَة', 'رَجَب', 'شَعْبَان',
  'رَمَضَان', 'شَوَّال', 'ذُو القَعْدَة', 'ذُو الحِجَّة',
];

const MONTH_LATIN = [
  'Muharram', 'Safar', "Rabi' al-Awwal", "Rabi' al-Akhir",
  'Jumada al-Ula', 'Jumada al-Akhirah', 'Rajab', "Sha'ban",
  'Ramadan', 'Shawwal', "Dhu al-Qa'dah", 'Dhu al-Hijjah',
];

const MONTH_DATE_COUNTS = [1, 0, 1, 0, 0, 0, 1, 1, 3, 2, 0, 5];

export function CalendarContent() {
  const tc = useCC();

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="التقويم الهجري"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="card-islamic bg-gold/5 mb-12 max-w-2xl mx-auto text-center">
          <p
            dir="rtl"
            lang="ar"
            className="arabic text-gold/70 mb-3"
            aria-hidden="true"
          >
            إِنَّ عِدَّةَ الشُّهُورِ عِندَ اللَّهِ اثْنَا عَشَرَ شَهْرًا
          </p>
          <p className="text-forest/60 italic text-sm">{tc('verse_trans')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MONTH_LATIN.map((name, idx) => {
            const n = idx + 1;
            const sigKey = `m${n}_significance` as CalendarContentKey;
            const dateCount = MONTH_DATE_COUNTS[idx];
            const dates: string[] = [];
            for (let i = 0; i < dateCount; i++) {
              const dk = `m${n}_date_${i}` as CalendarContentKey;
              dates.push(tc(dk));
            }

            return (
              <article key={n} className="card-islamic flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-forest flex items-center justify-center text-gold text-xs font-semibold flex-shrink-0">
                    {n}
                  </span>
                  <div>
                    <p
                      dir="rtl"
                      lang="ar"
                      className="arabic text-forest/80 leading-none"
                      aria-hidden="true"
                    >
                      {MONTH_ARABIC[idx]}
                    </p>
                    <h2 className="font-garamond text-xl font-semibold text-forest">{name}</h2>
                  </div>
                </div>

                <p className="text-forest/60 text-sm leading-relaxed">{tc(sigKey)}</p>

                {dates.length > 0 && (
                  <div className="border-t border-gold/10 pt-3">
                    <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-2">
                      {tc('key_dates_label')}
                    </p>
                    <ul className="space-y-1">
                      {dates.map((date, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-forest/60">
                          <span
                            className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-1.5"
                            aria-hidden="true"
                          />
                          {date}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
