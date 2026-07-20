'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { JANAZAH_CONTENT } from '@/lib/i18n/content/janazah-content';
import type { JanazahContentKey } from '@/lib/i18n/content/janazah-content';

const TAKBIR_AR = 'اللهُ أَكْبَر';
const TAKBIR_TR = 'Allahu Akbar';

const FATIHAH_AR =
  'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ. الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ. الرَّحْمَٰنِ الرَّحِيمِ. مَالِكِ يَوْمِ الدِّينِ. إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ. اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ. صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ.';

const IBRAHIMIC_SALAWAT_AR =
  'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ. اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ.';
const IBRAHIMIC_SALAWAT_TR =
  "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid. Allahumma barik 'ala Muhammadin wa 'ala ali Muhammad, kama barakta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid.";

const DUA_ADULT_AR =
  'اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ، وَعَافِهِ وَاعْفُ عَنْهُ، وَأَكْرِمْ نُزُلَهُ، وَوَسِّعْ مُدْخَلَهُ، وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ، وَنَقِّهِ مِنَ الْخَطَايَا كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ، وَأَبْدِلْهُ دَارًا خَيْرًا مِنْ دَارِهِ، وَأَهْلًا خَيْرًا مِنْ أَهْلِهِ، وَزَوْجًا خَيْرًا مِنْ زَوْجِهِ، وَأَدْخِلْهُ الْجَنَّةَ، وَأَعِذْهُ مِنْ عَذَابِ الْقَبْرِ وَعَذَابِ النَّارِ.';
const DUA_ADULT_TR =
  "Allahumma-ghfir lahu warhamhu, wa 'afihi wa'fu 'anhu, wa akrim nuzulahu, wa wassi' mudkhalahu, waghsilhu bi-l ma'i wa-th thalji wa-l barad, wa naqqihi mina-l khataya kama yunaqqa-th thawbu-l abyadu mina-d danas, wa abdilhu daran khayran min darih, wa ahlan khayran min ahlih, wa zawjan khayran min zawjih, wa adkhilhu-l jannah, wa a'idhhu min 'adhabi-l qabri wa 'adhabi-n nar.";

const DUA_CHILD_AR =
  'اللَّهُمَّ اجْعَلْهُ لَنَا فَرَطًا، وَسَلَفًا، وَذُخْرًا، وَاجْعَلْهُ لَنَا شَافِعًا وَمُشَفَّعًا. اللَّهُمَّ ثَقِّلْ بِهِ مَوَازِينَنَا، وَأَعْظِمْ بِهِ أُجُورَنَا.';
const DUA_CHILD_TR =
  "Allahumma-j'alhu lana faratan, wa salafan, wa dhukhran, waj'alhu lana shafi'an wa mushaffa'an. Allahumma thaqqil bihi mawazinana, wa a'zim bihi ujurana.";

const TASLIM_AR = 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ';
const TASLIM_TR = "As-salamu 'alaykum wa rahmatullah";

export function JanazahContent() {
  const { lang } = useLanguage();
  const tc = (key: JanazahContentKey): string => {
    const entry = JANAZAH_CONTENT[key] as Record<string, string | undefined> | undefined;
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="صَلَاةُ الجَنَازَة"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-14">
        {/* Ruling */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('ruling_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed">{tc('ruling_p')}</p>
        </section>

        {/* Preparation */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('preparation_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed">{tc('preparation_p')}</p>
        </section>

        {/* Method */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('method_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed mb-8">{tc('method_intro')}</p>

          <div className="space-y-6">
            {/* Takbir 1: Fatihah */}
            <article className="card-islamic space-y-4">
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3 className="font-garamond text-xl font-semibold text-forest">{tc('takbir_1_h')}</h3>
                <p dir="rtl" lang="ar" className="arabic text-gold">{TAKBIR_AR}</p>
              </div>
              <ArabicText text={FATIHAH_AR} size="md" />
              <p className="text-forest/75 leading-relaxed text-sm">{tc('takbir_1_p')}</p>
              <p className="text-xs text-gold/60 italic">Source: al-Bukhari 1335 (Talha ibn Abdillah ibn Awf).</p>
            </article>

            {/* Takbir 2: Ibrahimic Salawat */}
            <article className="card-islamic space-y-4">
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3 className="font-garamond text-xl font-semibold text-forest">{tc('takbir_2_h')}</h3>
                <p dir="rtl" lang="ar" className="arabic text-gold">{TAKBIR_AR}</p>
              </div>
              <ArabicText text={IBRAHIMIC_SALAWAT_AR} size="md" />
              <div className="border-t border-gold/10 pt-3">
                <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">Transliteration</p>
                <p className="text-forest/60 italic text-sm leading-relaxed">{IBRAHIMIC_SALAWAT_TR}</p>
              </div>
              <p className="text-forest/75 leading-relaxed text-sm">{tc('takbir_2_p')}</p>
              <p className="text-xs text-gold/60 italic">Source: al-Bukhari 3370, Muslim 406.</p>
            </article>

            {/* Takbir 3: du'a for the deceased */}
            <article className="card-islamic space-y-4">
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3 className="font-garamond text-xl font-semibold text-forest">{tc('takbir_3_h')}</h3>
                <p dir="rtl" lang="ar" className="arabic text-gold">{TAKBIR_AR}</p>
              </div>
              <p className="text-forest/75 leading-relaxed text-sm">{tc('takbir_3_p')}</p>
            </article>
          </div>
        </section>

        {/* The main du'a for the adult */}
        <section>
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('takbir_3_h')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              دُعَاءُ الجَنَازَة
            </p>
          </div>
          {/* Adult du'a */}
          <article className="card-forest rounded-2xl p-6 mb-4 space-y-4">
            <ArabicText text={DUA_ADULT_AR} size="md" />
            <div className="border-t border-gold/20 pt-3">
              <p className="text-xs text-gold uppercase tracking-wider mb-1">Transliteration</p>
              <p className="text-cream/70 italic text-sm leading-relaxed">{DUA_ADULT_TR}</p>
            </div>
            <p className="text-cream/85 leading-relaxed text-sm">{tc('dua_adult')}</p>
            <p className="text-xs text-gold/70 italic">Source: Muslim 963 (Awf ibn Malik).</p>
          </article>

          {/* Child du'a */}
          <article className="card-forest rounded-2xl p-6 space-y-4">
            <ArabicText text={DUA_CHILD_AR} size="md" />
            <div className="border-t border-gold/20 pt-3">
              <p className="text-xs text-gold uppercase tracking-wider mb-1">Transliteration</p>
              <p className="text-cream/70 italic text-sm leading-relaxed">{DUA_CHILD_TR}</p>
            </div>
            <p className="text-cream/85 leading-relaxed text-sm">{tc('dua_child')}</p>
            <p className="text-xs text-gold/70 italic">Source: al-Bayhaqi (Sunan al-Kubra), classical Hanbali and Shafi'i wording.</p>
          </article>
        </section>

        {/* Fourth takbir + Taslim */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('takbir_4_h')}
          </h2>
          <article className="card-islamic space-y-4 mb-4">
            <div className="flex items-baseline justify-between gap-3 flex-wrap">
              <h3 className="font-garamond text-lg font-semibold text-forest">Taslim</h3>
              <p dir="rtl" lang="ar" className="arabic text-gold">{TAKBIR_AR}</p>
            </div>
            <ArabicText text={TASLIM_AR} size="md" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">Transliteration</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{TASLIM_TR}</p>
            </div>
          </article>
          <p className="text-forest/75 leading-relaxed">{tc('takbir_4_p')}</p>
        </section>

        {/* Procession */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('procession_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed">{tc('procession_p')}</p>
        </section>

        {/* Burial */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('burial_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed">{tc('burial_p')}</p>
        </section>

        {/* Sources */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('sources_h')}
          </h2>
          <article className="card-forest rounded-2xl p-6">
            <p className="text-cream/85 leading-relaxed text-sm">{tc('sources_p')}</p>
          </article>
        </section>
      </div>
    </>
  );
}
