import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';

export const metadata: Metadata = {
  title: 'Islamic Calendar',
  description: 'The Islamic lunar calendar - the twelve months of the Hijri year with their significance and key dates.',
};

const MONTHS = [
  {
    number: 1,
    arabic: 'مُحَرَّم',
    name: 'Muharram',
    significance:
      "The first month of the Islamic year and one of the four sacred months. The 10th of Muharram (Ashura) is a day of great significance - the Prophet ﷺ fasted on this day and encouraged fasting it and the day before or after. Fasting on Ashura expiates the sins of the previous year.",
    keyDates: ['10th: Ashura - day of fasting'],
  },
  {
    number: 2,
    arabic: 'صَفَر',
    name: 'Safar',
    significance:
      "The second month of the Hijri year. This month was feared in pre-Islamic Arabia as unlucky, but Islam abolished such beliefs. The Prophet ﷺ said: 'There is no safar (ill omen from Safar).' (Bukhari)",
    keyDates: [],
  },
  {
    number: 3,
    arabic: 'رَبِيعُ الأَوَّل',
    name: "Rabi' al-Awwal",
    significance:
      "The month of the Prophet's birth ﷺ - according to the most accepted view, he was born on Monday 12 Rabi' al-Awwal in the Year of the Elephant (570 CE). The Prophet ﷺ also passed away in this month in 11 AH.",
    keyDates: ["12th: Birth of the Prophet ﷺ (mawlid)"],
  },
  {
    number: 4,
    arabic: 'رَبِيعُ الآخِر',
    name: "Rabi' al-Akhir",
    significance: "The fourth month of the Islamic year. No specific major Islamic observances fall in this month.",
    keyDates: [],
  },
  {
    number: 5,
    arabic: 'جُمَادَى الأُولَى',
    name: "Jumada al-Ula",
    significance: "The fifth month. The name 'Jumada' is thought to derive from the Arabic word for frozen water, as this period historically fell in winter.",
    keyDates: [],
  },
  {
    number: 6,
    arabic: 'جُمَادَى الآخِرَة',
    name: "Jumada al-Akhirah",
    significance: "The sixth month. The Prophet's ﷺ grandfather Abd al-Muttalib is said to have passed away in this month.",
    keyDates: [],
  },
  {
    number: 7,
    arabic: 'رَجَب',
    name: 'Rajab',
    significance:
      "One of the four sacred months (al-Ashhurul-Hurum). Fighting was prohibited during this month in pre-Islamic Arabia. The night journey of al-Isra' and al-Mi'raj (the Prophet's ascent through the heavens) is traditionally observed on the 27th of Rajab, though its exact date is debated by scholars.",
    keyDates: ['27th: Traditional date of al-Isra\' and al-Mi\'raj'],
  },
  {
    number: 8,
    arabic: 'شَعْبَان',
    name: "Sha'ban",
    significance:
      "The month immediately preceding Ramadan. The Prophet ﷺ would fast frequently in Sha'ban, more than in any other month besides Ramadan. The night of the 15th of Sha'ban (Laylat al-Nusf min Sha'ban) is considered by many scholars to be a night of special virtue, though the hadith evidence is debated.",
    keyDates: ["15th: Laylat al-Nusf min Sha'ban (the middle night of Sha'ban)"],
  },
  {
    number: 9,
    arabic: 'رَمَضَان',
    name: 'Ramadan',
    significance:
      "The holiest month of the Islamic year: the month of fasting, the month in which the Quran was first revealed, and the month containing Laylat al-Qadr (the Night of Power) - a night better than a thousand months. Fasting during Ramadan is the fourth pillar of Islam.",
    keyDates: [
      '1st: Beginning of the Ramadan fast',
      'Last ten nights: Laylat al-Qadr (sought on odd nights, especially 27th)',
      'Final day: Eid al-Fitr eve; Zakat al-Fitr due',
    ],
  },
  {
    number: 10,
    arabic: 'شَوَّال',
    name: 'Shawwal',
    significance:
      "Eid al-Fitr falls on the 1st of Shawwal - the Festival of Breaking the Fast, one of the two great Islamic celebrations. The six voluntary fasts of Shawwal, combined with Ramadan, carry the reward equivalent to fasting the entire year.",
    keyDates: [
      '1st: Eid al-Fitr',
      '2nd–27th: The six voluntary fasts of Shawwal',
    ],
  },
  {
    number: 11,
    arabic: 'ذُو القَعْدَة',
    name: "Dhu al-Qa'dah",
    significance:
      "One of the four sacred months and a month traditionally devoted to preparation for Hajj. Hostilities were forbidden during this month, allowing pilgrims to travel safely.",
    keyDates: [],
  },
  {
    number: 12,
    arabic: 'ذُو الحِجَّة',
    name: 'Dhu al-Hijjah',
    significance:
      "The month of Hajj - one of the four sacred months and the month of the greatest annual gathering in Islam. The first ten days are described by the Prophet ﷺ as the most virtuous days of the year. Eid al-Adha (the Festival of Sacrifice) falls on the 10th.",
    keyDates: [
      '1st–10th: The ten best days of the year',
      '8th: Yawm al-Tarwiyah - pilgrims proceed to Mina',
      '9th: Yawm Arafah - the Day of Arafah (fasting recommended for non-pilgrims)',
      '10th: Eid al-Adha - the Festival of Sacrifice',
      '11th–13th: Days of Tashreeq',
    ],
  },
];

export default function CalendarPage() {
  return (
    <>
      <PageHeader
        title="Islamic Calendar"
        arabicTitle="التقويم الهجري"
        subtitle="The Islamic calendar is a lunar calendar of twelve months. The Hijri year is approximately 354 days, moving backwards through the solar seasons every 33 years."
      />

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Note on the Hijri calendar */}
        <div className="card-islamic bg-gold/5 mb-12 max-w-2xl mx-auto text-center">
          <p
            dir="rtl"
            lang="ar"
            className="arabic text-gold/70 mb-3"
            aria-hidden="true"
          >
            إِنَّ عِدَّةَ الشُّهُورِ عِندَ اللَّهِ اثْنَا عَشَرَ شَهْرًا
          </p>
          <p className="text-forest/60 italic text-sm">
            "Indeed, the number of months with Allah is twelve months in the register of Allah." - Surah al-Tawbah 9:36
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MONTHS.map(month => (
            <article key={month.number} className="card-islamic flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-forest flex items-center justify-center text-gold text-xs font-semibold flex-shrink-0">
                  {month.number}
                </span>
                <div>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="arabic text-forest/80 leading-none"
                    aria-hidden="true"
                  >
                    {month.arabic}
                  </p>
                  <h2 className="font-garamond text-xl font-semibold text-forest">{month.name}</h2>
                </div>
              </div>

              <p className="text-forest/60 text-sm leading-relaxed">{month.significance}</p>

              {month.keyDates.length > 0 && (
                <div className="border-t border-gold/10 pt-3">
                  <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-2">Key Dates</p>
                  <ul className="space-y-1">
                    {month.keyDates.map((date, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-forest/60">
                        <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0 mt-1.5" aria-hidden="true" />
                        {date}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
