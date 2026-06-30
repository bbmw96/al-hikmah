'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';
import { SURAHS } from '@/lib/data/quran';
import {
  QURAN_OVERALL_MEANING,
  QURAN_114_MEANINGS,
  type LangMap,
} from '@/lib/i18n/content/quran-meanings-content';

// Headings and labels for this section, in all 14 languages.
const SECTION_TITLE: LangMap = {
  en: `The Meaning of the Quran`,
  ms: `Makna Al-Quran`,
  tur: `Kur'an'ın Anlamı`,
  urd: `قرآن کا مفہوم`,
  ben: `কুরআনের অর্থ`,
  fas: `معنای قرآن`,
  zh: `《古兰经》的意义`,
  yue: `《古蘭經》嘅意義`,
  ja: `クルアーンの意味`,
  ru: `Значение Корана`,
  es: `El significado del Corán`,
  ko: `꾸란의 의미`,
  ta: `குர்ஆனின் பொருள்`,
  si: `කුර්ආනයේ අර්ථය`,
};

const OVERALL_TITLE: LangMap = {
  en: `The overall meaning`,
  ms: `Makna keseluruhan`,
  tur: `Genel anlamı`,
  urd: `مجموعی مفہوم`,
  ben: `সামগ্রিক অর্থ`,
  fas: `معنای کلی`,
  zh: `整体意义`,
  yue: `整體意義`,
  ja: `全体としての意味`,
  ru: `Общее значение`,
  es: `Significado general`,
  ko: `전체 의미`,
  ta: `ஒட்டுமொத்தப் பொருள்`,
  si: `සමස්ත අර්ථය`,
};

const PER_SURAH_TITLE: LangMap = {
  en: `Meaning of each Surah`,
  ms: `Makna setiap Surah`,
  tur: `Her surenin anlamı`,
  urd: `ہر سورہ کا مفہوم`,
  ben: `প্রতিটি সূরার অর্থ`,
  fas: `معنای هر سوره`,
  zh: `每章的意义`,
  yue: `每章嘅意義`,
  ja: `各章の意味`,
  ru: `Значение каждой суры`,
  es: `Significado de cada Sura`,
  ko: `각 수라의 의미`,
  ta: `ஒவ்வொரு சூராவின் பொருள்`,
  si: `එක් එක් සූරාවේ අර්ථය`,
};

export function QuranMeaningsSection() {
  const { lang } = useLanguage();
  const overall = QURAN_OVERALL_MEANING[lang] ?? QURAN_OVERALL_MEANING.en;
  const sectionTitle = SECTION_TITLE[lang] ?? SECTION_TITLE.en;
  const overallTitle = OVERALL_TITLE[lang] ?? OVERALL_TITLE.en;
  const perSurahTitle = PER_SURAH_TITLE[lang] ?? PER_SURAH_TITLE.en;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6 text-center">
        {sectionTitle}
      </h2>

      {/* Overall meaning */}
      <div className="card-forest rounded-2xl p-6 mb-10">
        <h3 className="font-garamond text-lg font-semibold text-gold mb-3">
          {overallTitle}
        </h3>
        <p className="text-cream/90 leading-relaxed text-sm md:text-base">
          {overall}
        </p>
      </div>

      {/* Per-surah meanings */}
      <h3 className="font-garamond text-xl font-semibold text-forest mb-5">
        {perSurahTitle}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SURAHS.map(surah => {
          const entry = QURAN_114_MEANINGS[surah.number];
          const translatedName = entry ? (entry.name[lang] ?? entry.name.en) : surah.englishName;
          const meaning = entry ? (entry.meaning[lang] ?? entry.meaning.en) : '';
          return (
            <Link
              key={surah.number}
              href={`/quran/${surah.transliteration}`}
              className="card-islamic group flex flex-col gap-2 hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="w-8 h-8 rounded-full bg-gold/15 text-gold text-xs font-semibold flex items-center justify-center flex-shrink-0">
                  {surah.number}
                </span>
                <p
                  dir="rtl"
                  lang="ar"
                  className="arabic-sm text-forest/80 text-right"
                  aria-hidden="true"
                >
                  {surah.arabicName}
                </p>
              </div>
              <h4 className="font-garamond text-base font-semibold text-forest group-hover:text-gold transition-colors">
                {translatedName}
              </h4>
              {meaning && (
                <p className="text-forest/70 text-sm leading-relaxed">
                  {meaning}
                </p>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
