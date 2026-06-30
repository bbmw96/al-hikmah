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

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-12">
        <div className="card-islamic bg-gold/5 max-w-2xl mx-auto text-center">
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

        {/* What is the Hijri calendar */}
        <section className="max-w-3xl mx-auto">
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('intro_heading')}
          </h2>
          <div className="prose-islamic space-y-3">
            <p className="text-forest/75 leading-relaxed">{tc('intro_p1')}</p>
            <p className="text-forest/75 leading-relaxed">{tc('intro_p2')}</p>
            <p className="text-forest/75 leading-relaxed">{tc('intro_p3')}</p>
          </div>
        </section>

        {/* The Hijra event */}
        <section className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('hijra_heading')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              الهجرة
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-forest/75 leading-relaxed">{tc('hijra_p1')}</p>
            <p className="text-forest/75 leading-relaxed">{tc('hijra_p2')}</p>
          </div>
        </section>

        {/* Umar instituting the calendar */}
        <section className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('umar_heading')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              تأسيس عمر للتقويم
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-forest/75 leading-relaxed">{tc('umar_p1')}</p>
            <p className="text-forest/75 leading-relaxed">{tc('umar_p2')}</p>
          </div>
        </section>

        {/* The four sacred months */}
        <section className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('sacred_heading')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              الأشهر الحرم
            </p>
          </div>
          <div className="card-forest rounded-2xl p-6 mb-4">
            <p className="text-cream/85 leading-relaxed">{tc('sacred_p1')}</p>
          </div>
          <p className="text-forest/75 leading-relaxed mb-5">{tc('sacred_p2')}</p>
          <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-3">
            {tc('sacred_list_label')}
          </p>
          <ul className="space-y-2">
            <li className="card-islamic text-sm text-forest/70 leading-relaxed">{tc('sacred_dhul_qadah')}</li>
            <li className="card-islamic text-sm text-forest/70 leading-relaxed">{tc('sacred_dhul_hijjah')}</li>
            <li className="card-islamic text-sm text-forest/70 leading-relaxed">{tc('sacred_muharram')}</li>
            <li className="card-islamic text-sm text-forest/70 leading-relaxed">{tc('sacred_rajab')}</li>
          </ul>
        </section>

        {/* Determining the start of each month */}
        <section className="max-w-3xl mx-auto">
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('moonsight_heading')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              رؤية الهلال
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-forest/75 leading-relaxed">{tc('moonsight_p1')}</p>
            <p className="text-forest/75 leading-relaxed">{tc('moonsight_p2')}</p>
          </div>
        </section>

        {/* The twelve months heading */}
        <section>
          <div className="text-center mb-8">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-2">
              {tc('months_heading')}
            </h2>
            <p className="text-forest/60 text-sm italic">{tc('months_subheading')}</p>
          </div>
        </section>

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
