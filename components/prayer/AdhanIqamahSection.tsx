'use client';

import { useLanguage } from '@/lib/i18n/context';
import { ADHAN_IQAMAH_CONTENT, type AdhanIqamahContentKey } from '@/lib/i18n/content/adhan-iqamah-content';

// The six adhan phrases  –  Arabic stays hardcoded, the description translates.
const PHRASES: { arabic: string; titleKey: AdhanIqamahContentKey; descKey: AdhanIqamahContentKey }[] = [
  { arabic: 'اللَّهُ أَكْبَرُ (×٤)',                                              titleKey: 'phrase_takbir_t',    descKey: 'phrase_takbir_d' },
  { arabic: 'أَشْهَدُ أَنْ لَا إِلَٰهَ إِلَّا اللَّهُ (×٢)',                                 titleKey: 'phrase_shahada1_t',  descKey: 'phrase_shahada1_d' },
  { arabic: 'أَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ (×٢)',                              titleKey: 'phrase_shahada2_t',  descKey: 'phrase_shahada2_d' },
  { arabic: 'حَيَّ عَلَى الصَّلَاةِ (×٢)',                                        titleKey: 'phrase_hayya_salah_t', descKey: 'phrase_hayya_salah_d' },
  { arabic: 'حَيَّ عَلَى الْفَلَاحِ (×٢)',                                        titleKey: 'phrase_hayya_falah_t', descKey: 'phrase_hayya_falah_d' },
  { arabic: 'الصَّلَاةُ خَيْرٌ مِنَ النَّوْمِ (×٢  –  فجر)',                              titleKey: 'phrase_fajr_t',      descKey: 'phrase_fajr_d' },
  { arabic: 'اللَّهُ أَكْبَرُ (×٢) ... لَا إِلَٰهَ إِلَّا اللَّهُ',                              titleKey: 'phrase_closing_t',   descKey: 'phrase_closing_d' },
];

const DUA_AFTER_AR = 'اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلَاةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِي وَعَدْتَهُ';
const IQAMAH_AR = 'قَدْ قَامَتِ الصَّلَاةُ';

export function AdhanIqamahSection() {
  const { lang } = useLanguage();
  const tc = (k: AdhanIqamahContentKey) =>
    (ADHAN_IQAMAH_CONTENT[k] as Record<string, string | undefined>)[lang] ??
    (ADHAN_IQAMAH_CONTENT[k] as Record<string, string | undefined>).en ?? k;

  return (
    <section>
      <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
        {tc('section_h')}
      </h2>
      <p className="text-forest/70 leading-relaxed text-sm mb-8">
        {tc('section_intro')}
      </p>

      {/* The Story */}
      <div className="card-forest rounded-2xl p-6 mb-8">
        <h3 className="font-garamond text-lg font-semibold text-gold mb-3">
          {tc('story_h')}
        </h3>
        <div className="space-y-3 text-cream/85 text-sm leading-relaxed">
          <p>{tc('story_p1')}</p>
          <p>{tc('story_p2')}</p>
        </div>
      </div>

      {/* Phrase meanings */}
      <h3 className="font-garamond text-xl font-semibold text-forest mb-5">
        {tc('phrases_h')}
      </h3>
      <div className="space-y-4 mb-10">
        {PHRASES.map((phrase, i) => (
          <div key={i} className="card-islamic">
            <p
              dir="rtl"
              lang="ar"
              className="arabic-md text-gold mb-2 leading-loose"
              aria-hidden="true"
            >
              {phrase.arabic}
            </p>
            <h4 className="font-garamond text-base font-semibold text-forest mb-2">
              {tc(phrase.titleKey)}
            </h4>
            <p className="text-forest/70 text-sm leading-relaxed">
              {tc(phrase.descKey)}
            </p>
          </div>
        ))}
      </div>

      {/* Response */}
      <div className="card-islamic mb-8">
        <h3 className="font-garamond text-lg font-semibold text-forest mb-3">
          {tc('response_h')}
        </h3>
        <p className="text-forest/70 text-sm leading-relaxed">{tc('response_p')}</p>
      </div>

      {/* Du'a after */}
      <div className="card-forest rounded-2xl p-6 mb-8">
        <h3 className="font-garamond text-lg font-semibold text-gold mb-3">
          {tc('duafter_h')}
        </h3>
        <p className="text-cream/85 text-sm leading-relaxed mb-4">{tc('duafter_arabic_note')}</p>
        <p
          dir="rtl"
          lang="ar"
          className="arabic-md text-gold leading-loose mb-4"
          aria-hidden="true"
        >
          {DUA_AFTER_AR}
        </p>
        <p className="text-cream/85 text-sm leading-relaxed italic">{tc('duafter_translation')}</p>
      </div>

      {/* Muezzin virtues */}
      <div className="mb-10">
        <h3 className="font-garamond text-xl font-semibold text-forest mb-3">{tc('muezzin_h')}</h3>
        <p className="text-forest/70 text-sm leading-relaxed">{tc('muezzin_p')}</p>
      </div>

      {/* Iqamah */}
      <h3 className="font-garamond text-2xl font-semibold text-forest mb-3">
        {tc('iqamah_h')}
      </h3>
      <div className="card-islamic mb-6">
        <p
          dir="rtl"
          lang="ar"
          className="arabic-md text-gold mb-3 leading-loose"
          aria-hidden="true"
        >
          {IQAMAH_AR}
        </p>
        <p className="text-forest/70 text-sm leading-relaxed">{tc('iqamah_p')}</p>
      </div>

      {/* Madhhab differences */}
      <div className="card-islamic mb-8">
        <h3 className="font-garamond text-lg font-semibold text-forest mb-3">{tc('madhhabs_h')}</h3>
        <p className="text-forest/70 text-sm leading-relaxed">{tc('madhhabs_p')}</p>
      </div>

      {/* Special cases */}
      <h3 className="font-garamond text-xl font-semibold text-forest mb-4">
        {tc('special_h')}
      </h3>
      <div className="space-y-4">
        <div className="card-islamic">
          <p className="text-forest/70 text-sm leading-relaxed">{tc('special_newborn')}</p>
        </div>
        <div className="card-islamic">
          <p className="text-forest/70 text-sm leading-relaxed">{tc('special_traveller')}</p>
        </div>
        <div className="card-islamic">
          <p className="text-forest/70 text-sm leading-relaxed">{tc('special_women')}</p>
        </div>
      </div>
    </section>
  );
}
