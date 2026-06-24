'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { JUMUAH_CONTENT } from '@/lib/i18n/content/jumuah-content';
import type { JumuahContentKey } from '@/lib/i18n/content/jumuah-content';

function useJumuah() {
  const { lang } = useLanguage();
  return (key: JumuahContentKey): string => {
    const entry = JUMUAH_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry['en'] ?? key;
  };
}

const OBLIGATED = [
  { labelKey: 'o_muslim_l', descKey: 'o_muslim_d' },
  { labelKey: 'o_male_l', descKey: 'o_male_d' },
  { labelKey: 'o_free_l', descKey: 'o_free_d' },
  { labelKey: 'o_res_l', descKey: 'o_res_d' },
  { labelKey: 'o_well_l', descKey: 'o_well_d' },
  { labelKey: 'o_un_l', descKey: 'o_un_d' },
] as const;

const CONDITIONS_VALID = [
  { titleKey: 'cv1_t', detailKey: 'cv1_d' },
  { titleKey: 'cv2_t', detailKey: 'cv2_d' },
  { titleKey: 'cv3_t', detailKey: 'cv3_d' },
  { titleKey: 'cv4_t', detailKey: 'cv4_d' },
  { titleKey: 'cv5_t', detailKey: 'cv5_d' },
] as const;

const KHUTBAH_ELEMENTS: JumuahContentKey[] = ['s4_e1', 's4_e2', 's4_e3', 's4_e4', 's4_e5'];

const RECOMMENDED_FRIDAY = [
  { actKey: 'r1_act', arabic: 'الغسل', hadithKey: 'r1_h' },
  { actKey: 'r2_act', arabic: 'لبس أحسن الثياب', hadithKey: 'r2_h' },
  { actKey: 'r3_act', arabic: 'السواك', hadithKey: 'r3_h' },
  { actKey: 'r4_act', arabic: 'التطيب', hadithKey: 'r4_h' },
  { actKey: 'r5_act', arabic: 'التبكير إلى المسجد', hadithKey: 'r5_h' },
  { actKey: 'r6_act', arabic: 'الصلاة على النبي ﷺ', hadithKey: 'r6_h' },
  { actKey: 'r7_act', arabic: 'قراءة سورة الكهف', hadithKey: 'r7_h' },
  { actKey: 'r8_act', arabic: 'الدعاء في الساعة المستجابة', hadithKey: 'r8_h' },
] as const;

export function JumuahContent() {
  const tc = useJumuah();

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="صَلَاةُ الجُمُعَة"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

        {/* Quranic command */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('s1_h')}
          </h2>
          <div className="card-forest rounded-2xl p-8 mb-6">
            <ArabicText
              text="يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِن يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَى ذِكْرِ اللَّهِ وَذَرُوا الْبَيْعَ ذَلِكُمْ خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ"
              size="md"
            />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">
              {tc('s1_verse')}
            </p>
          </div>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">
            {tc('s1_p1')}
          </p>
          <p className="text-forest/70 leading-relaxed text-sm">
            {tc('s1_p2')}
          </p>
        </section>

        {/* Who it is obligatory upon */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('s2_h')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {OBLIGATED.map(item => (
              <div key={item.labelKey} className="card-islamic">
                <h3 className="font-garamond text-base font-semibold text-forest mb-1">{tc(item.labelKey)}</h3>
                <p className="text-forest/60 text-sm leading-relaxed">{tc(item.descKey)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conditions of validity */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            {tc('s3_h')}
          </h2>
          <div className="space-y-4">
            {CONDITIONS_VALID.map((c, i) => (
              <div key={c.titleKey} className="card-islamic flex gap-4">
                <span className="w-7 h-7 rounded-full bg-gold/15 text-gold text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-1">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-garamond text-base font-semibold text-forest mb-1">{tc(c.titleKey)}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{tc(c.detailKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Khutbah */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('s4_h')}
          </h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-5">
            {tc('s4_intro')}
          </p>
          <div className="card-islamic mb-6">
            <h3 className="font-garamond text-lg font-semibold text-forest mb-4">{tc('s4_req_h')}</h3>
            <ul className="space-y-2">
              {KHUTBAH_ELEMENTS.map(el => (
                <li key={el} className="flex items-start gap-2 text-sm text-forest/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                  {tc(el)}
                </li>
              ))}
            </ul>
          </div>
          <div className="gold-border-left pl-5">
            <p className="text-forest/70 text-sm leading-relaxed">
              {tc('s4_lang')}
            </p>
          </div>
        </section>

        {/* The Prayer */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('s5_h')}
          </h2>
          <div className="card-islamic mb-5">
            <p className="text-forest/70 text-sm leading-relaxed mb-3">
              {tc('s5_p1')}
            </p>
            <p className="text-forest/70 text-sm leading-relaxed mb-3">
              {tc('s5_p2')}
            </p>
            <p className="text-forest/70 text-sm leading-relaxed">
              {tc('s5_p3')}
            </p>
          </div>
        </section>

        {/* The Blessed Hour */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('s6_h')}
          </h2>
          <div className="card-forest rounded-2xl p-8 mb-6">
            <ArabicText
              text="فِيهِ سَاعَةٌ لاَ يُوَافِقُهَا عَبْدٌ مُسْلِمٌ وَهُوَ قَائِمٌ يُصَلِّي يَسْأَلُ اللَّهَ شَيْئاً إِلاَّ أَعْطَاهُ إِيَّاهُ"
              size="md"
            />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">
              {tc('s6_hadith')}
            </p>
          </div>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">
            {tc('s6_body')}
          </p>
        </section>

        {/* Etiquettes */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            {tc('s7_h')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RECOMMENDED_FRIDAY.map(item => (
              <div key={item.actKey} className="card-islamic">
                <p
                  dir="rtl"
                  lang="ar"
                  className="arabic-sm text-gold mb-1.5"
                  aria-hidden="true"
                >
                  {item.arabic}
                </p>
                <h3 className="font-garamond text-base font-semibold text-forest mb-2">{tc(item.actKey)}</h3>
                <p className="text-forest/60 text-xs leading-relaxed">{tc(item.hadithKey)}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
