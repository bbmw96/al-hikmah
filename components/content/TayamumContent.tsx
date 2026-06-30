'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { TAYAMUM_CONTENT } from '@/lib/i18n/content/tayamum-content';
import type { TayamumContentKey } from '@/lib/i18n/content/tayamum-content';

const QURAN_OPENING = `فَتَيَمَّمُوا صَعِيدًا طَيِّبًا فَامْسَحُوا بِوُجُوهِكُمْ وَأَيْدِيكُم مِّنْهُ ۚ مَا يُرِيدُ اللَّهُ لِيَجْعَلَ عَلَيْكُم مِّنْ حَرَجٍ`;
const QURAN_MAIDAH = `وَإِن كُنتُم مَّرْضَىٰ أَوْ عَلَىٰ سَفَرٍ أَوْ جَاءَ أَحَدٌ مِّنكُم مِّنَ الْغَائِطِ أَوْ لَامَسْتُمُ النِّسَاءَ فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا فَامْسَحُوا بِوُجُوهِكُمْ وَأَيْدِيكُم مِّنْهُ ۚ مَا يُرِيدُ اللَّهُ لِيَجْعَلَ عَلَيْكُم مِّنْ حَرَجٍ وَلَٰكِن يُرِيدُ لِيُطَهِّرَكُمْ وَلِيُتِمَّ نِعْمَتَهُ عَلَيْكُمْ لَعَلَّكُمْ تَشْكُرُونَ`;
const QURAN_NISA = `وَإِن كُنتُم مَّرْضَىٰ أَوْ عَلَىٰ سَفَرٍ أَوْ جَاءَ أَحَدٌ مِّنكُم مِّنَ الْغَائِطِ أَوْ لَامَسْتُمُ النِّسَاءَ فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا فَامْسَحُوا بِوُجُوهِكُمْ وَأَيْدِيكُمْ ۗ إِنَّ اللَّهَ كَانَ عَفُوًّا غَفُورًا`;
const HADITH_1_AR = `جُعِلَتْ لِيَ الأَرْضُ مَسْجِدًا وَطَهُورًا، فَأَيُّمَا رَجُلٍ أَدْرَكَتْهُ الصَّلَاةُ صَلَّى حَيْثُ كَانَ`;
const HADITH_2_AR = `عَنْ عَمَّارِ بْنِ يَاسِرٍ قَالَ: أَجْنَبْتُ فَلَمْ أَجِدِ الْمَاءَ فَتَمَرَّغْتُ فِي الصَّعِيدِ كَمَا تَتَمَرَّغُ الدَّابَّةُ، ثُمَّ ذَكَرْتُ ذَلِكَ لِلنَّبِيِّ ﷺ فَقَالَ: إِنَّمَا كَانَ يَكْفِيكَ أَنْ تَقُولَ هَكَذَا، وَضَرَبَ بِيَدَيْهِ الأَرْضَ ضَرْبَةً وَاحِدَةً، ثُمَّ مَسَحَ الشِّمَالَ عَلَى الْيَمِينِ وَظَاهِرَ كَفَّيْهِ وَوَجْهَهُ`;
const HADITH_3_AR = `الصَّعِيدُ الطَّيِّبُ طَهُورُ الْمُسْلِمِ وَإِنْ لَمْ يَجِدِ الْمَاءَ عَشْرَ سِنِينَ`;
const CLOSING_AR = `وَمَا جَعَلَ عَلَيْكُمْ فِي الدِّينِ مِنْ حَرَجٍ`;

const STEP_ARABIC: Record<number, string | null> = { 1: null, 2: `بِسْمِ اللَّهِ`, 3: null, 4: null, 5: null };

const HADITH = [
  { ar: HADITH_1_AR, key: 'hadith.1' },
  { ar: HADITH_2_AR, key: 'hadith.2' },
  { ar: HADITH_3_AR, key: 'hadith.3' },
] as const;

export function TayamumContent() {
  const { lang } = useLanguage();
  const tc = (key: TayamumContentKey): string => TAYAMUM_CONTENT[key][lang];
  const k = (s: string) => s as TayamumContentKey;

  return (
    <>
      <PageHeader
        title={tc('header.title')}
        arabicTitle="التَّيَمُّم"
        subtitle={tc('header.subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* Opening verse */}
        <div className="card-gold text-center">
          <ArabicText text={QURAN_OPENING} size="lg" className="mb-4" />
          <p className="text-forest/70 italic text-sm leading-relaxed">
            {tc('opening.translation')}
            <span className="not-italic text-forest/50 ml-1"> –  {tc('opening.source')}</span>
          </p>
        </div>

        {/* What is Tayamum */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('whatis.heading')}
          </h2>
          <div className="space-y-4 text-forest/80 leading-relaxed">
            <p>{tc('whatis.p1')}</p>
            <p>{tc('whatis.p2')}</p>
          </div>
        </section>

        {/* The Story */}
        <section className="bg-forest/5 border border-forest/10 rounded-2xl p-8">
          <h2 className="font-garamond text-2xl font-semibold text-forest mb-1">{tc('story.heading')}</h2>
          <p className="font-garamond italic text-gold text-sm mb-6">{tc('story.subtitle')}</p>

          <div className="bg-cream border border-gold/20 rounded-xl p-6 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed italic mb-3">{tc('story.quote1')}</p>
            <p className="text-forest/75 text-sm leading-relaxed italic mb-3">{tc('story.quote2')}</p>
            <p className="text-forest/75 text-sm leading-relaxed italic mb-3">{tc('story.quote3')}</p>
            <p className="text-forest/45 text-xs mt-3">{tc('story.attribution')}</p>
          </div>

          <div className="space-y-3 text-forest/80 text-sm leading-relaxed">
            <p>{tc('story.p1')}</p>
            <p>{tc('story.p2')}</p>
          </div>
        </section>

        {/* Quranic Basis */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            {tc('quran.heading')}
          </h2>
          <div className="space-y-6">
            <div className="card-islamic">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold border border-gold/25">
                  {tc('opening.source')}
                </span>
                <span className="text-forest/50 text-xs italic">{tc('quran.maidah.tag')}</span>
              </div>
              <ArabicText text={QURAN_MAIDAH} size="lg" className="mb-4" />
              <p className="text-forest/70 text-sm italic leading-relaxed">{tc('quran.maidah.translation')}</p>
            </div>

            <div className="card-islamic">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-forest/15 text-forest text-xs font-semibold border border-forest/20">
                  {tc('quran.nisa.label')}
                </span>
                <span className="text-forest/50 text-xs italic">{tc('quran.nisa.tag')}</span>
              </div>
              <ArabicText text={QURAN_NISA} size="lg" className="mb-4" />
              <p className="text-forest/70 text-sm italic leading-relaxed">{tc('quran.nisa.translation')}</p>
            </div>
          </div>
        </section>

        {/* When Permitted */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('permitted.heading')}
          </h2>
          <p className="text-forest/70 mb-8 leading-relaxed text-sm">{tc('permitted.intro')}</p>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} className="card-islamic flex gap-5">
                <div className="font-garamond text-3xl font-semibold text-gold/30 leading-none flex-shrink-0 w-10 pt-0.5">
                  {String(n).padStart(2, '0')}
                </div>
                <div>
                  <h3 className="font-garamond text-lg font-semibold text-forest mb-1.5">{tc(k(`permitted.${n}.title`))}</h3>
                  <p className="text-forest/70 text-sm leading-relaxed">{tc(k(`permitted.${n}.body`))}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* When Not Valid */}
        <section className="bg-midnight/5 border border-midnight/10 rounded-2xl p-8">
          <h2 className="font-garamond text-2xl font-semibold text-midnight mb-3">{tc('notvalid.heading')}</h2>
          <p className="text-forest/70 text-sm mb-6 leading-relaxed">{tc('notvalid.intro')}</p>
          <ul className="space-y-4">
            {[1, 2, 3, 4, 5].map(n => (
              <li key={n} className="flex gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-midnight/35 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-forest text-sm">{tc(k(`notvalid.${n}.title`))}: </span>
                  <span className="text-forest/70 text-sm leading-relaxed">{tc(k(`notvalid.${n}.body`))}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* How to Perform */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('howto.heading')}
          </h2>

          <div className="bg-gold/8 border border-gold/20 rounded-xl p-5 mb-8">
            <p className="text-forest/80 text-sm leading-relaxed">{tc('howto.method')}</p>
          </div>

          <div className="space-y-4 mb-8">
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} className="card-islamic flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 font-garamond font-semibold text-gold">
                  {n}
                </div>
                <div className="flex-1">
                  <h3 className="font-garamond text-lg font-semibold text-forest mb-1">{tc(k(`steps.${n}.title`))}</h3>
                  {STEP_ARABIC[n] && (
                    <p dir="rtl" lang="ar" className="arabic text-gold text-right mb-2">
                      {STEP_ARABIC[n]}
                    </p>
                  )}
                  <p className="text-forest/70 text-sm leading-relaxed">{tc(k(`steps.${n}.body`))}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card-gold text-sm text-forest/80 leading-relaxed">{tc('howto.saeed')}</div>
        </section>

        {/* What Tayamum Achieves */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('achieves.heading')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="card-islamic border-l-4 border-emerald-500/50">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-3">{tc('achieves.wudu.heading')}</h3>
              <p className="text-forest/70 text-sm leading-relaxed">{tc('achieves.wudu.body')}</p>
            </div>
            <div className="card-islamic border-l-4 border-sky-500/50">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-3">{tc('achieves.ghusl.heading')}</h3>
              <p className="text-forest/70 text-sm leading-relaxed">{tc('achieves.ghusl.body')}</p>
            </div>
          </div>
          <div className="bg-gold/8 border border-gold/20 rounded-xl p-5 text-sm text-forest/80 leading-relaxed">
            {tc('achieves.multiple')}
          </div>
        </section>

        {/* What Invalidates */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('invalidates.heading')}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="card-islamic">
                <h3 className="font-garamond text-base font-semibold text-forest mb-2">{tc(k(`invalidators.${n}.title`))}</h3>
                <p className="text-forest/70 text-sm leading-relaxed">{tc(k(`invalidators.${n}.body`))}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Hadith */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            {tc('hadith.heading')}
          </h2>
          <div className="space-y-6">
            {HADITH.map(h => (
              <div key={h.key} className="card-islamic gold-border-left">
                <ArabicText text={h.ar} size="md" className="mb-3" />
                <p className="text-forest/70 text-sm italic leading-relaxed mb-2">{tc(k(`${h.key}.translation`))}</p>
                <p className="text-forest/45 text-xs mb-3">{tc(k(`${h.key}.attribution`))}</p>
                <p className="text-forest/65 text-sm leading-relaxed">{tc(k(`${h.key}.commentary`))}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing verse */}
        <div className="card-forest text-center p-8">
          <ArabicText text={CLOSING_AR} size="xl" className="mb-4" />
          <p className="text-cream/70 italic text-sm">
            {tc('closing.translation')}
            <span className="not-italic ml-1"> –  {tc('closing.source')}</span>
          </p>
        </div>

      </div>
    </>
  );
}
