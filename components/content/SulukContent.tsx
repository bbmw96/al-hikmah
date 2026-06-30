'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { SULUK_CONTENT } from '@/lib/i18n/content/suluk-content';
import type { SulukContentKey } from '@/lib/i18n/content/suluk-content';

/* Arabic (Quran, hadith, section labels) and transliterations stay fixed across languages. */
const SUB_AR = {
  intro: `معنى السلوك`,
  tazkiyah: `تزكية النفس`,
  three: `الإسلام والإيمان والإحسان`,
  diseases: `أمراض القلوب وعلاجها`,
  dhikr: `فضل الذكر`,
  practices: `أعمال تزكية النفس`,
  tawbah: `التَّوْبَة إِلَى اللَّهِ`,
};

const TAZKIYAH_VERSE_AR = `قَدْ أَفْلَحَ مَن زَكَّاهَا ۝ وَقَدْ خَابَ مَن دَسَّاهَا`;
const TAZKIYAH_VERSE_TR = `Qad aflaha man zakkaha. Wa qad khaba man dassaha.`;
const TAZKIYAH_LEVELS_AR = [`النفس الأمارة بالسوء`, `النفس اللوامة`, `النفس المطمئنة`];

const THREE_AR = [`الإِسْلام`, `الإِيمَان`, `الإِحْسَان`];

const DISEASES_AR = [`الكِبْر`, `الحَسَد`, `الرِّيَاء`, `حُبّ الدُّنْيَا`, `الغَفْلَة`];

const DHIKR_VERSE_AR = `أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ`;
const DHIKR_VERSE_TR = `Ala bi-dhikrillahi tatma'innul-qulub`;
const DHIKR_REC_AR = [
  `سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ`,
  `سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ`,
  `لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ`,
];
const DHIKR_REC_TR = [
  `Subhanallahi wa bihamdihi, Subhanallahil-'azim`,
  `Subhanallahi wal-hamdulillahi wa la ilaha illallahu wallahu akbar`,
  `La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir`,
];

const PRACTICES_AR = [`تلاوة القرآن وتدبره`, `قيام الليل`, `صيام الاثنين والخميس`, `الصلاة على النبي ﷺ`, `حلق الذكر وطلب العلم`];

const TAWBAH_VERSE_AR = `يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَّصُوحًا`;
const TAWBAH_VERSE_TR = `Ya ayyuhal-ladhina amanu tubu ilallahi tawbatan nasuha`;
const TAWBAH_VERSE2_AR = `قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَى أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ`;
const TAWBAH_VERSE2_TR = `Qul ya 'ibadiyal-ladhina asrafu 'ala anfusihim la taqnatu mir-rahmatillah, innallaha yaghfirudh-dhunuba jami'a, innahu huwal-ghafurur-rahim`;

const CLOSING_AR = `إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا تَتَنَزَّلُ عَلَيْهِمُ الْمَلَائِكَةُ`;

export function SulukContent() {
  const { lang } = useLanguage();
  const tc = (key: SulukContentKey): string => SULUK_CONTENT[key][lang];
  const k = (s: string) => s as SulukContentKey;
  const tl = tc('ui.transliteration');
  const ml = tc('ui.meaning');

  return (
    <>
      <PageHeader title={tc('header.title')} arabicTitle="السُّلُوك" subtitle={tc('header.subtitle')} />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* Introduction */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">{tc('intro.heading')}</h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">{SUB_AR.intro}</p>
          <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5">
            <p className="text-forest/75 text-sm leading-relaxed whitespace-pre-line">{tc('intro.text')}</p>
          </div>
        </section>

        {/* Tazkiyah */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">{tc('tazkiyah.heading')}</h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">{SUB_AR.tazkiyah}</p>

          <article className="card-islamic mb-6">
            <span className="badge-gold text-xs mb-4 inline-block">{tc('tazkiyah.verse.ref')}</span>
            <ArabicText text={TAZKIYAH_VERSE_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">{tl}</p>
              <p className="text-forest/60 italic text-sm">{TAZKIYAH_VERSE_TR}</p>
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">{ml}</p>
              <p className="text-forest/70 text-sm">{tc('tazkiyah.verse.meaning')}</p>
            </div>
          </article>

          <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('tazkiyah.explanation')}</p>
          </div>

          <h3 className="font-garamond text-lg font-semibold text-forest mb-4">{tc('tazkiyah.levelsHeading')}</h3>
          <div className="space-y-3">
            {[1, 2, 3].map(n => (
              <div key={n} className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40 mt-0.5">
                  <span className="text-forest font-semibold text-xs">{n}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-medium text-forest text-sm">{tc(k(`tazkiyah.level.${n}.name`))}</p>
                    <p dir="rtl" lang="ar" className="arabic-sm text-gold/60" aria-hidden="true">{TAZKIYAH_LEVELS_AR[n - 1]}</p>
                  </div>
                  <p className="text-forest/60 text-xs leading-relaxed mt-0.5">{tc(k(`tazkiyah.level.${n}.desc`))}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Three Levels of the Deen */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">{tc('three.heading')}</h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">{SUB_AR.three}</p>

          <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('three.hadithIntro')}</p>
          </div>

          <div className="space-y-5">
            {[1, 2, 3].map(n => (
              <article key={n} className="card-islamic">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center flex-shrink-0 ring-2 ring-gold/30">
                    <span className="text-gold font-semibold text-sm">{n}</span>
                  </div>
                  <div>
                    <p dir="rtl" lang="ar" className="arabic text-gold/80" aria-hidden="true">{THREE_AR[n - 1]}</p>
                    <h3 className="font-garamond text-xl font-semibold text-forest">{tc(k(`three.${n}.name`))}</h3>
                    <span className="text-xs text-gold/60 italic">{tc(k(`three.${n}.subtitle`))}</span>
                  </div>
                </div>
                <div className="bg-forest/5 rounded-xl p-3 mb-3">
                  <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mb-1">{tc('three.questionLabel')}</p>
                  <p className="text-forest/60 text-sm italic">{tc(k(`three.${n}.question`))}</p>
                  <p className="text-forest/75 text-sm mt-2">{tc(k(`three.${n}.answer`))}</p>
                </div>
                <p className="text-forest/65 text-sm leading-relaxed">{tc(k(`three.${n}.explanation`))}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Diseases of the Heart */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">{tc('diseases.heading')}</h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">{SUB_AR.diseases}</p>
          <p className="text-forest/60 text-sm mb-8">{tc('diseases.intro')}</p>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map(n => (
              <article key={n} className="card-islamic">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40 mt-0.5">
                    <span className="text-forest font-semibold text-xs">{n}</span>
                  </div>
                  <div>
                    <p dir="rtl" lang="ar" className="arabic-sm text-gold mb-1">{DISEASES_AR[n - 1]}</p>
                    <h3 className="font-garamond text-xl font-semibold text-forest">{tc(k(`diseases.${n}.name`))}</h3>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-1">{tc('diseases.defLabel')}</p>
                    <p className="text-forest/75 text-sm leading-relaxed">{tc(k(`diseases.${n}.definition`))}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-1">{tc('diseases.dangerLabel')}</p>
                    <p className="text-forest/70 text-sm leading-relaxed">{tc(k(`diseases.${n}.danger`))}</p>
                  </div>
                  <div className="bg-gold/10 border border-gold/20 rounded-xl p-4">
                    <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-1">{tc('diseases.cureLabel')}</p>
                    <p className="text-forest/70 text-sm leading-relaxed">{tc(k(`diseases.${n}.cure`))}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Virtues of Dhikr */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">{tc('dhikr.heading')}</h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">{SUB_AR.dhikr}</p>

          <article className="card-islamic mb-6">
            <span className="badge-gold text-xs mb-4 inline-block">{tc('dhikr.verse.ref')}</span>
            <ArabicText text={DHIKR_VERSE_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-forest/60 italic text-sm">{DHIKR_VERSE_TR}</p>
              <p className="text-forest/70 text-sm">{tc('dhikr.verse.meaning')}</p>
            </div>
          </article>

          <div className="space-y-3 mb-6">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="flex gap-3 items-start">
                <span className="text-gold mt-1 flex-shrink-0">&#x2022;</span>
                <p className="text-forest/70 text-sm leading-relaxed">{tc(k(`dhikr.point.${n}`))}</p>
              </div>
            ))}
          </div>

          <h3 className="font-garamond text-lg font-semibold text-forest mb-4">{tc('dhikr.recommendedHeading')}</h3>
          <div className="space-y-4">
            {[1, 2, 3].map(n => (
              <div key={n} className="bg-forest/5 rounded-xl p-4">
                <ArabicText text={DHIKR_REC_AR[n - 1]} size="md" />
                <div className="border-t border-gold/10 pt-3 mt-3 space-y-1">
                  <p className="text-forest/60 italic text-sm">{DHIKR_REC_TR[n - 1]}</p>
                  <p className="text-forest/65 text-xs leading-relaxed">{tc(k(`dhikr.rec.${n}.meaning`))}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Practices */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">{tc('practices.heading')}</h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">{SUB_AR.practices}</p>
          <div className="space-y-5">
            {[1, 2, 3, 4, 5].map(n => (
              <article key={n} className="card-islamic">
                <div className="flex items-center gap-3 mb-3">
                  <p dir="rtl" lang="ar" className="arabic-sm text-gold/60 flex-shrink-0" aria-hidden="true">{PRACTICES_AR[n - 1]}</p>
                  <h3 className="font-garamond text-lg font-semibold text-forest">{tc(k(`practices.${n}.title`))}</h3>
                </div>
                <p className="text-forest/70 text-sm leading-relaxed">{tc(k(`practices.${n}.text`))}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Tawbah */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">{tc('tawbah.heading')}</h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">{SUB_AR.tawbah}</p>

          <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('tawbah.intro')}</p>
          </div>

          <article className="card-islamic mb-6">
            <span className="badge-gold text-xs mb-4 inline-block">{tc('tawbah.verse.ref')}</span>
            <ArabicText text={TAWBAH_VERSE_AR} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-forest/60 italic text-sm">{TAWBAH_VERSE_TR}</p>
              <p className="text-forest/70 text-sm">{tc('tawbah.verse.meaning')}</p>
            </div>
          </article>

          <h3 className="font-garamond text-lg font-semibold text-forest mb-4">{tc('tawbah.conditionsHeading')}</h3>
          <div className="space-y-3 mb-6">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40 mt-0.5">
                  <span className="text-forest font-semibold text-xs">{n}</span>
                </div>
                <div>
                  <p className="font-medium text-forest text-sm">{tc(k(`tawbah.cond.${n}.name`))}</p>
                  <p className="text-forest/60 text-xs leading-relaxed mt-0.5">{tc(k(`tawbah.cond.${n}.desc`))}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gold/10 border border-gold/25 rounded-xl p-5 mb-6">
            <p className="text-forest/70 text-sm leading-relaxed italic">{tc('tawbah.hadith')}</p>
          </div>

          <article className="card-islamic">
            <span className="badge-gold text-xs mb-4 inline-block">{tc('tawbah.verse2.ref')}</span>
            <ArabicText text={TAWBAH_VERSE2_AR} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-forest/60 italic text-sm">{TAWBAH_VERSE2_TR}</p>
              <p className="text-forest/70 text-sm">{tc('tawbah.verse2.meaning')}</p>
            </div>
          </article>
        </section>

        {/* Closing */}
        <section className="card-islamic bg-forest/5 text-center">
          <ArabicText text={CLOSING_AR} size="md" className="mb-4" />
          <p className="text-forest/70 text-sm italic mb-1">{tc('closing.meaning')}</p>
          <p className="text-forest/50 text-xs mt-3">{tc('closing.text')}</p>
        </section>
      </div>
    </>
  );
}
