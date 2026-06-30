'use client';

import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { PRAYER_STEPS_CONTENT, type PrayerStepsContentKey } from '@/lib/i18n/content/prayer-steps-content';

// Arabic-only constants (Arabic stays hardcoded per the site language rule).
const STEPS: {
  num: number;
  titleKey: PrayerStepsContentKey;
  descKey: PrayerStepsContentKey;
  arabicTitle: string;
  arabic?: string;
  translitKey?: PrayerStepsContentKey;
  meaningKey?: PrayerStepsContentKey;
  extra?: {
    labelKey: PrayerStepsContentKey;
    arabic: string;
    translitKey: PrayerStepsContentKey;
    meaningKey: PrayerStepsContentKey;
  };
}[] = [
  { num: 1, titleKey: 'step1_t', descKey: 'step1_d', arabicTitle: 'استقبال القبلة' },
  { num: 2, titleKey: 'step2_t', descKey: 'step2_d', arabicTitle: 'النية' },
  { num: 3, titleKey: 'step3_t', descKey: 'step3_d', arabicTitle: 'تكبيرة الإحرام',
    arabic: 'اللَّهُ أَكْبَرُ',
    translitKey: 'step3_translit', meaningKey: 'step3_meaning',
  },
  { num: 4, titleKey: 'step4_t', descKey: 'step4_d', arabicTitle: 'دعاء الاستفتاح',
    arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ',
    translitKey: 'step4_translit', meaningKey: 'step4_meaning',
    extra: {
      labelKey: 'step4_xlabel',
      arabic: 'اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ ۝ اللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ ۝ اللَّهُمَّ اغْسِلْنِي مِنْ خَطَايَايَ بِالثَّلْجِ وَالْمَاءِ وَالْبَرَدِ',
      translitKey: 'step4_xtranslit', meaningKey: 'step4_xmeaning',
    },
  },
  { num: 5, titleKey: 'step5_t', descKey: 'step5_d', arabicTitle: 'قراءة الفاتحة وما تيسر من القرآن',
    arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
    translitKey: 'step5_translit', meaningKey: 'step5_meaning',
  },
  { num: 6, titleKey: 'step6_t', descKey: 'step6_d', arabicTitle: 'الركوع',
    arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
    translitKey: 'step6_translit', meaningKey: 'step6_meaning',
    extra: {
      labelKey: 'step6_xlabel',
      arabic: 'سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ اللَّهُمَّ اغْفِرْ لِي ۝ سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ ۝ اللَّهُمَّ لَكَ رَكَعْتُ وَبِكَ آمَنْتُ وَلَكَ أَسْلَمْتُ خَشَعَ لَكَ سَمْعِي وَبَصَرِي وَمُخِّي وَعَظْمِي وَعَصَبِي',
      translitKey: 'step6_xtranslit', meaningKey: 'step6_xmeaning',
    },
  },
  { num: 7, titleKey: 'step7_t', descKey: 'step7_d', arabicTitle: 'الرفع من الركوع',
    arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ ۝ رَبَّنَا وَلَكَ الْحَمْدُ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ',
    translitKey: 'step7_translit', meaningKey: 'step7_meaning',
    extra: {
      labelKey: 'step7_xlabel',
      arabic: 'مِلْءَ السَّمَوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ',
      translitKey: 'step7_xtranslit', meaningKey: 'step7_xmeaning',
    },
  },
  { num: 8, titleKey: 'step8_t', descKey: 'step8_d', arabicTitle: 'السجود',
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
    translitKey: 'step8_translit', meaningKey: 'step8_meaning',
    extra: {
      labelKey: 'step8_xlabel',
      arabic: 'سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ اللَّهُمَّ اغْفِرْ لِي ۝ اللَّهُمَّ لَكَ سَجَدْتُ وَبِكَ آمَنْتُ وَلَكَ أَسْلَمْتُ سَجَدَ وَجْهِي لِلَّذِي خَلَقَهُ وَصَوَّرَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ تَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ ۝ اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ دِقَّهُ وَجِلَّهُ وَأَوَّلَهُ وَآخِرَهُ وَعَلَانِيَتَهُ وَسِرَّهُ ۝ اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ وَأَعُوذُ بِكَ مِنْكَ لَا أُحْصِي ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ',
      translitKey: 'step8_xtranslit', meaningKey: 'step8_xmeaning',
    },
  },
  { num: 9, titleKey: 'step9_t', descKey: 'step9_d', arabicTitle: 'الجلسة بين السجدتين',
    arabic: 'رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي وَعَافِنِي وَاعْفُ عَنِّي',
    translitKey: 'step9_translit', meaningKey: 'step9_meaning',
  },
  { num: 10, titleKey: 'step10_t', descKey: 'step10_d', arabicTitle: 'السجود الثاني',
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
    translitKey: 'step10_translit', meaningKey: 'step10_meaning',
  },
  { num: 11, titleKey: 'step11_t', descKey: 'step11_d', arabicTitle: 'التشهد',
    arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ ۝ السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ ۝ السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ ۝ أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    translitKey: 'step11_translit', meaningKey: 'step11_meaning',
  },
  { num: 12, titleKey: 'step12_t', descKey: 'step12_d', arabicTitle: 'الصلاة الإبراهيمية',
    arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ ۝ اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
    translitKey: 'step12_translit', meaningKey: 'step12_meaning',
  },
  { num: 13, titleKey: 'step13_t', descKey: 'step13_d', arabicTitle: 'الدعاء قبل التسليم',
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ وَمِنْ عَذَابِ النَّارِ وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
    translitKey: 'step13_translit', meaningKey: 'step13_meaning',
  },
  { num: 14, titleKey: 'step14_t', descKey: 'step14_d', arabicTitle: 'التسليم',
    arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
    translitKey: 'step14_translit', meaningKey: 'step14_meaning',
  },
];

export function PrayerStepsSection() {
  const { lang } = useLanguage();
  const tc = (k: PrayerStepsContentKey) => {
    const entry = PRAYER_STEPS_CONTENT[k] as Record<string, string | undefined>;
    return entry[lang] ?? entry.en;
  };

  return (
    <section>
      <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-3">
        {tc('steps_h')}
      </h2>
      <p className="text-forest/70 text-sm leading-relaxed mb-8">{tc('steps_intro')}</p>

      <div className="space-y-6">
        {STEPS.map(step => (
          <article key={step.num} className="card-islamic">
            <div className="flex items-baseline gap-3 mb-2 flex-wrap">
              <span className="w-7 h-7 rounded-full bg-gold/20 ring-1 ring-gold/40 flex items-center justify-center text-forest font-semibold text-xs flex-shrink-0">
                {step.num}
              </span>
              <h3 className="font-garamond text-lg font-semibold text-forest">{tc(step.titleKey)}</h3>
              <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
                {step.arabicTitle}
              </p>
            </div>
            <p className="text-forest/70 text-sm leading-relaxed mb-3">{tc(step.descKey)}</p>

            {step.arabic && (
              <div className="bg-forest/5 rounded-lg p-4 mt-3">
                <ArabicText text={step.arabic} size="md" />
                {step.translitKey && (
                  <p className="text-forest/60 italic text-xs mt-3 leading-relaxed">{tc(step.translitKey)}</p>
                )}
                {step.meaningKey && (
                  <p className="text-forest/70 text-sm mt-2 leading-relaxed">{tc(step.meaningKey)}</p>
                )}
              </div>
            )}

            {step.extra && (
              <div className="mt-4 border-t border-gold/10 pt-4">
                <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-3">
                  {tc(step.extra.labelKey)}
                </p>
                <div className="bg-forest/5 rounded-lg p-4">
                  <ArabicText text={step.extra.arabic} size="md" />
                  <p className="text-forest/60 italic text-xs mt-3 leading-relaxed">{tc(step.extra.translitKey)}</p>
                  <p className="text-forest/70 text-sm mt-2 leading-relaxed">{tc(step.extra.meaningKey)}</p>
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
