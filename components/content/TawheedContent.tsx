'use client';

import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { TAWHEED_CONTENT } from '@/lib/i18n/content/tawheed-content';
import type { TawheedContentKey } from '@/lib/i18n/content/tawheed-content';
import type { Lang } from '@/lib/i18n/translations';

function useTawheed() {
  const { lang } = useLanguage();
  return (key: TawheedContentKey): string => {
    const entry = TAWHEED_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry['en'] ?? key;
  };
}

const TAWHEED_CATEGORIES = [
  {
    number: 1,
    arabic: 'تَوْحِيدُ الرُّبُوبِيَّة',
    nameKey: 'cat_1_name' as TawheedContentKey,
    subtitleKey: 'cat_1_subtitle' as TawheedContentKey,
    explanationKey: 'cat_1_explanation' as TawheedContentKey,
    detailKey: 'cat_1_detail' as TawheedContentKey,
    verses: [
      { refKey: 'cat_1_v1_ref' as TawheedContentKey, arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ', transliteration: "Allahu la ilaha illa huwal-hayyul-qayyum", meaningKey: 'cat_1_v1_meaning' as TawheedContentKey },
      { refKey: 'cat_1_v2_ref' as TawheedContentKey, arabic: 'اللَّهُ خَالِقُ كُلِّ شَيْءٍ وَهُوَ عَلَى كُلِّ شَيْءٍ وَكِيلٌ', transliteration: "Allahu khaliqo kulli shay'in wa huwa 'ala kulli shay'in wakil", meaningKey: 'cat_1_v2_meaning' as TawheedContentKey },
    ],
  },
  {
    number: 2,
    arabic: 'تَوْحِيدُ الْأُلُوهِيَّة',
    nameKey: 'cat_2_name' as TawheedContentKey,
    subtitleKey: 'cat_2_subtitle' as TawheedContentKey,
    explanationKey: 'cat_2_explanation' as TawheedContentKey,
    detailKey: 'cat_2_detail' as TawheedContentKey,
    verses: [
      { refKey: 'cat_2_v1_ref' as TawheedContentKey, arabic: 'وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِي إِلَيْهِ أَنَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدُونِ', transliteration: "Wa ma arsalna min qablika min rasulin illa nuhee ilayhi annahu la ilaha illa ana fa'budun", meaningKey: 'cat_2_v1_meaning' as TawheedContentKey },
      { refKey: 'cat_2_v2_ref' as TawheedContentKey, arabic: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ', transliteration: "Wa qada rabbuka alla ta'budu illa iyyah", meaningKey: 'cat_2_v2_meaning' as TawheedContentKey },
    ],
  },
  {
    number: 3,
    arabic: 'تَوْحِيدُ الْأَسْمَاءِ وَالصِّفَات',
    nameKey: 'cat_3_name' as TawheedContentKey,
    subtitleKey: 'cat_3_subtitle' as TawheedContentKey,
    explanationKey: 'cat_3_explanation' as TawheedContentKey,
    detailKey: 'cat_3_detail' as TawheedContentKey,
    verses: [
      { refKey: 'cat_3_v1_ref' as TawheedContentKey, arabic: 'لَيْسَ كَمِثْلِهِ شَيْءٌ وَهُوَ السَّمِيعُ الْبَصِيرُ', transliteration: "Laysa kamithlihi shay'un wa huwas-sami'ul-basir", meaningKey: 'cat_3_v1_meaning' as TawheedContentKey },
      { refKey: 'cat_3_v2_ref' as TawheedContentKey, arabic: 'وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَى فَادْعُوهُ بِهَا', transliteration: "Wa lillahil-asma'ul-husna fad'uhu biha", meaningKey: 'cat_3_v2_meaning' as TawheedContentKey },
    ],
  },
] as const;

const SHAHADA = {
  arabic: 'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ',
  transliteration: "Ashhadu alla ilaha illallahu wa ashhadu anna Muhammadan rasulullah",
  conditions: [
    { nameKey: 'cond_1_name' as TawheedContentKey, descKey: 'cond_1_desc' as TawheedContentKey },
    { nameKey: 'cond_2_name' as TawheedContentKey, descKey: 'cond_2_desc' as TawheedContentKey },
    { nameKey: 'cond_3_name' as TawheedContentKey, descKey: 'cond_3_desc' as TawheedContentKey },
    { nameKey: 'cond_4_name' as TawheedContentKey, descKey: 'cond_4_desc' as TawheedContentKey },
    { nameKey: 'cond_5_name' as TawheedContentKey, descKey: 'cond_5_desc' as TawheedContentKey },
    { nameKey: 'cond_6_name' as TawheedContentKey, descKey: 'cond_6_desc' as TawheedContentKey },
    { nameKey: 'cond_7_name' as TawheedContentKey, descKey: 'cond_7_desc' as TawheedContentKey },
  ],
};

const KEY_VERSES = [
  { refKey: 'keyverse_1_ref' as TawheedContentKey, arabic: 'وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ لَّا إِلَٰهَ إِلَّا هُوَ الرَّحْمَٰنُ الرَّحِيمُ', transliteration: "Wa ilahukum ilahun wahid, la ilaha illa huwar-rahmanur-rahim", meaningKey: 'keyverse_1_meaning' as TawheedContentKey },
  { refKey: 'keyverse_2_ref' as TawheedContentKey, arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ', transliteration: "Qul huwallahu ahad. Allahus-samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.", meaningKey: 'keyverse_2_meaning' as TawheedContentKey, noteKey: 'keyverse_2_note' as TawheedContentKey },
  { refKey: 'keyverse_3_ref' as TawheedContentKey, arabic: 'هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ هُوَ الرَّحْمَٰنُ الرَّحِيمُ', transliteration: "Huwallahul-ladhi la ilaha illa huw, 'alimul-ghaybi wash-shahadah, huwar-rahmanur-rahim.", meaningKey: 'keyverse_3_meaning' as TawheedContentKey },
];

const SHIRK = {
  verse: { arabic: 'إِنَّ اللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِ وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَاءُ', transliteration: "Innallaha la yaghfiru an yushraka bihi wa yaghfiru ma duna dhalika liman yasha'" },
  major: {
    titleKey: 'shirk_major_title' as TawheedContentKey,
    examples: ['shirk_major_ex_1', 'shirk_major_ex_2', 'shirk_major_ex_3', 'shirk_major_ex_4'] as TawheedContentKey[],
  },
  minor: {
    titleKey: 'shirk_minor_title' as TawheedContentKey,
    examples: ['shirk_minor_ex_1', 'shirk_minor_ex_2', 'shirk_minor_ex_3', 'shirk_minor_ex_4'] as TawheedContentKey[],
  },
};

const FOUNDATION_POINTS = [
  { titleKey: 'foundation_1_title' as TawheedContentKey, textKey: 'foundation_1_text' as TawheedContentKey },
  { titleKey: 'foundation_2_title' as TawheedContentKey, textKey: 'foundation_2_text' as TawheedContentKey },
  { titleKey: 'foundation_3_title' as TawheedContentKey, textKey: 'foundation_3_text' as TawheedContentKey },
  { titleKey: 'foundation_4_title' as TawheedContentKey, textKey: 'foundation_4_text' as TawheedContentKey },
];

export function TawheedContent() {
  const tc = useTawheed();

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

      {/* What is Tawheed */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_whatIs')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">معنى التوحيد</p>
        <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5 mb-6">
          <p className="text-forest/80 text-sm leading-relaxed">
            {tc('intro_text')}
          </p>
        </div>
      </section>

      {/* Three Categories */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_three')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-6">أقسام التوحيد الثلاثة</p>
        <div className="space-y-8">
          {TAWHEED_CATEGORIES.map(cat => (
            <article key={cat.number} className="card-islamic">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center flex-shrink-0 ring-2 ring-gold/30">
                  <span className="text-gold font-semibold text-sm">{cat.number}</span>
                </div>
                <div>
                  <p dir="rtl" lang="ar" className="arabic-sm text-gold mb-1">{cat.arabic}</p>
                  <h3 className="font-garamond text-xl font-semibold text-forest">{tc(cat.nameKey)}</h3>
                  <p className="text-gold/80 text-sm font-medium">{tc(cat.subtitleKey)}</p>
                </div>
              </div>
              <p className="text-forest/75 text-sm leading-relaxed mb-3">{tc(cat.explanationKey)}</p>
              <p className="text-forest/60 text-sm leading-relaxed mb-5">{tc(cat.detailKey)}</p>
              <div className="space-y-4">
                {cat.verses.map((v, i) => (
                  <div key={i} className="bg-forest/5 rounded-xl p-4">
                    <span className="badge-gold text-xs mb-3 inline-block">{tc(v.refKey)}</span>
                    <ArabicText text={v.arabic} size="md" />
                    <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
                      <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">{tc('label_transliteration')}</p>
                      <p className="text-forest/60 italic text-sm">{v.transliteration}</p>
                      <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">{tc('label_meaning')}</p>
                      <p className="text-forest/70 text-sm">{tc(v.meaningKey)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* The Shahada */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_shahada')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">الشهادة وشروطها</p>
        <div className="card-islamic mb-6">
          <ArabicText text={SHAHADA.arabic} size="lg" />
          <div className="border-t border-gold/10 pt-4 mt-4 space-y-2">
            <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">{tc('label_transliteration')}</p>
            <p className="text-forest/60 italic text-sm">{SHAHADA.transliteration}</p>
            <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-3">{tc('label_meaning')}</p>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('shahada_meaning')}</p>
          </div>
        </div>
        <p className="text-forest/60 text-sm mb-5">{tc('label_conditions_intro')}</p>
        <div className="space-y-3">
          {SHAHADA.conditions.map((cond, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40 mt-0.5">
                <span className="text-forest font-semibold text-xs">{i + 1}</span>
              </div>
              <div>
                <p className="font-medium text-forest text-sm">{tc(cond.nameKey)}</p>
                <p className="text-forest/60 text-xs leading-relaxed mt-0.5">{tc(cond.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Verses */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_keyVerses')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">آيات التوحيد</p>
        <div className="space-y-5">
          {KEY_VERSES.map((v, i) => (
            <article key={i} className="card-islamic">
              <span className="badge-gold text-xs mb-4 inline-block">{tc(v.refKey)}</span>
              <ArabicText text={v.arabic} size="md" />
              <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
                <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">{tc('label_transliteration')}</p>
                <p className="text-forest/60 italic text-sm">{v.transliteration}</p>
                <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">{tc('label_meaning')}</p>
                <p className="text-forest/70 text-sm">{tc(v.meaningKey)}</p>
                {'noteKey' in v && v.noteKey && <p className="text-xs text-gold/55 italic mt-2 leading-relaxed">{tc(v.noteKey)}</p>}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Shirk */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_shirk')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">الشِّرْك وأقسامه</p>
        <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
          <p className="text-forest/75 text-sm leading-relaxed mb-4">{tc('shirk_definition')}</p>
          <div className="bg-gold/10 border border-gold/25 rounded-xl p-4">
            <span className="badge-gold text-xs mb-3 inline-block">{tc('shirk_verse_ref')}</span>
            <ArabicText text={SHIRK.verse.arabic} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-1">
              <p className="text-forest/60 italic text-sm">{SHIRK.verse.transliteration}</p>
              <p className="text-forest/70 text-sm">{tc('shirk_verse_meaning')}</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="card-islamic border-l-4 border-red-700/40">
            <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{tc(SHIRK.major.titleKey)}</h3>
            <p className="text-forest/70 text-sm leading-relaxed mb-3">{tc('shirk_major_desc')}</p>
            <ul className="space-y-1.5">
              {SHIRK.major.examples.map((ex, i) => (
                <li key={i} className="text-forest/60 text-xs flex gap-2">
                  <span className="text-gold flex-shrink-0">&#x2022;</span>
                  <span>{tc(ex)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card-islamic border-l-4 border-amber-600/40">
            <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{tc(SHIRK.minor.titleKey)}</h3>
            <p className="text-forest/70 text-sm leading-relaxed mb-3">{tc('shirk_minor_desc')}</p>
            <ul className="space-y-1.5">
              {SHIRK.minor.examples.map((ex, i) => (
                <li key={i} className="text-forest/60 text-xs flex gap-2">
                  <span className="text-gold flex-shrink-0">&#x2022;</span>
                  <span>{tc(ex)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Foundation */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_foundation')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">أهمية التوحيد</p>
        <div className="space-y-5">
          {FOUNDATION_POINTS.map((point, i) => (
            <article key={i} className="card-islamic">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{tc(point.titleKey)}</h3>
              <p className="text-forest/70 text-sm leading-relaxed">{tc(point.textKey)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="card-islamic bg-forest/5 text-center">
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">فَاعْلَمْ أَنَّهُ لَا إِلَٰهَ إِلَّا اللَّهُ</p>
        <p className="text-forest/70 text-sm italic mb-1">{tc('closing_verse')}</p>
        <p className="text-forest/50 text-xs">{tc('closing_note')}</p>
      </section>

    </div>
  );
}
