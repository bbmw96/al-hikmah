'use client';

import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { PRAYER_STEPS_CONTENT, type PrayerStepsContentKey } from '@/lib/i18n/content/prayer-steps-content';

const ITEMS: {
  titleKey: PrayerStepsContentKey;
  srcKey: PrayerStepsContentKey;
  arabic: string;
  translitKey: PrayerStepsContentKey;
  meaningKey: PrayerStepsContentKey;
  noteKey?: PrayerStepsContentKey;
}[] = [
  {
    titleKey: 'after1_t', srcKey: 'after1_src',
    arabic: 'أَسْتَغْفِرُ اللَّهَ ۞ أَسْتَغْفِرُ اللَّهَ ۞ أَسْتَغْفِرُ اللَّهَ ۝ اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ ذَا الْجَلَالِ وَالْإِكْرَامِ',
    translitKey: 'after1_translit', meaningKey: 'after1_meaning', noteKey: 'after1_note',
  },
  {
    titleKey: 'after2_t', srcKey: 'after2_src',
    arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    translitKey: 'after2_translit', meaningKey: 'after2_meaning',
  },
  {
    titleKey: 'after3_t', srcKey: 'after3_src',
    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    translitKey: 'after3_translit', meaningKey: 'after3_meaning', noteKey: 'after3_note',
  },
  {
    titleKey: 'after4_t', srcKey: 'after4_src',
    arabic: 'سُبْحَانَ اللَّهِ ۞ الْحَمْدُ لِلَّهِ ۞ اللَّهُ أَكْبَرُ ۝ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    translitKey: 'after4_translit', meaningKey: 'after4_meaning', noteKey: 'after4_note',
  },
  {
    titleKey: 'after5_t', srcKey: 'after5_src',
    arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    translitKey: 'after5_translit', meaningKey: 'after5_meaning', noteKey: 'after5_note',
  },
];

export function AfterPrayerSection() {
  const { lang } = useLanguage();
  const tc = (k: PrayerStepsContentKey) => {
    const entry = PRAYER_STEPS_CONTENT[k] as Record<string, string | undefined>;
    return entry[lang] ?? entry.en;
  };

  return (
    <section>
      <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-3">
        {tc('after_h')}
      </h2>
      <p className="text-forest/70 text-sm leading-relaxed mb-8">{tc('after_intro')}</p>

      <div className="space-y-5">
        {ITEMS.map((item, i) => (
          <article key={i} className="card-islamic">
            <div className="flex items-baseline justify-between gap-3 mb-3 flex-wrap">
              <h3 className="font-garamond text-base font-semibold text-forest">{tc(item.titleKey)}</h3>
              <span className="text-xs text-gold/70 uppercase tracking-wider font-medium">{tc(item.srcKey)}</span>
            </div>
            <ArabicText text={item.arabic} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">{tc('transliteration_label')}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{tc(item.translitKey)}</p>
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">{tc('meaning_label')}</p>
              <p className="text-forest/70 text-sm leading-relaxed">{tc(item.meaningKey)}</p>
              {item.noteKey && (
                <p className="text-forest/50 text-xs leading-relaxed italic mt-3">{tc(item.noteKey)}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
