'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { NIKAH_CONTENT } from '@/lib/i18n/content/nikah-content';
import type { NikahContentKey } from '@/lib/i18n/content/nikah-content';

/* Arabic (Quran, hadith, section labels) and transliterations stay fixed across languages. */
const SUB_AR = {
  intro: `النكاح سنة وآية`,
  conditions: `شروط عقد النكاح`,
  mahr: `المَهْر الصَّدَاق`,
  khutbah: `خطبة النكاح`,
  duas: `أدعية النكاح`,
  forbidden: `المحرمات من النساء`,
  rights: `الحقوق والواجبات الزوجية`,
  walimah: `الوَلِيمَة`,
};

const INTRO_VERSE_AR = `وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ`;
const INTRO_VERSE_TR = `Wa min ayatihi an khalaqa lakum min anfusikum azwajan litaskunu ilayha wa ja'ala baynakum mawaddatan wa rahmah, inna fi dhalika la-ayatin li-qawmin yatafakkarun`;

const MAHR_VERSE_AR = `وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً فَإِن طِبْنَ لَكُمْ عَن شَيْءٍ مِّنْهُ نَفْسًا فَكُلُوهُ هَنِيئًا مَّرِيئًا`;
const MAHR_VERSE_TR = `Wa atun-nisa'a saduqatihinna nihlah, fa-in tibna lakum 'an shay'im-minhu nafsan fakuluhu hani'am-mari'a`;

const KHUTBAH_AR = `الْحَمْدُ لِلَّهِ نَسْتَعِينُهُ وَنَسْتَغْفِرُهُ وَنَعُوذُ بِاللَّهِ مِنْ شُرُورِ أَنفُسِنَا مَنْ يَهْدِهِ اللَّهُ فَلَا مُضِلَّ لَهُ وَمَنْ يُضْلِلْ فَلَا هَادِيَ لَهُ وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ`;
const KHUTBAH_TR = `Alhamdu lillahi nasta'inuhu wa nastaghfiruhu wa na'udhu billahi min shururi anfusina, man yahdihillahu fala mudilla lahu wa man yudlil fala hadiya lah, wa ashhadu alla ilaha illallahu wa ashhadu anna Muhammadan 'abduhu wa rasuluh.`;
const KHUTBAH_VERSES_AR = `يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ ۝ يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ ۝ يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا`;

const RIGHTS_VERSE_AR = `وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ وَلِلرِّجَالِ عَلَيْهِنَّ دَرَجَةٌ`;
const RIGHTS_VERSE_TR = `Wa lahunna mithlul-ladhi 'alayhinna bil-ma'ruf, wa lir-rijali 'alayhinna darajah`;

const CLOSING_AR = `وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ`;

const CONDITIONS_AR = [`الإيجاب والقبول`, `الولي`, `الشهود`, `المَهْر`];

const DUAS_AR = [
  `بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ`,
  `اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَمِنْ شَرِّ مَا جَبَلْتَهَا عَلَيْهِ`,
  `بِسْمِ اللَّهِ اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا`,
];
const DUAS_TR = [
  `Barakallahu laka wa baraka 'alayka wa jama'a baynakuma fi khayr`,
  `Allahumma inni as'aluka khayrahā wa khayra ma jabaltahā 'alayhi, wa a'udhu bika min sharrihā wa min sharri ma jabaltahā 'alayh`,
  `Bismillah. Allahumma jannibnas-shaytana wa jannibish-shaytana ma razaqtana`,
];

export function NikahContent() {
  const { lang } = useLanguage();
  const tc = (key: NikahContentKey): string => NIKAH_CONTENT[key][lang];
  const k = (s: string) => s as NikahContentKey;
  const tl = tc('ui.transliteration');
  const ml = tc('ui.meaning');

  return (
    <>
      <PageHeader title={tc('header.title')} arabicTitle="النِّكَاح" subtitle={tc('header.subtitle')} />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* Marriage in Islam */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">{tc('intro.heading')}</h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">{SUB_AR.intro}</p>

          <article className="card-islamic mb-6">
            <span className="badge-gold text-xs mb-4 inline-block">{tc('intro.verse.ref')}</span>
            <ArabicText text={INTRO_VERSE_AR} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">{tl}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{INTRO_VERSE_TR}</p>
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">{ml}</p>
              <p className="text-forest/70 text-sm leading-relaxed">{tc('intro.verse.meaning')}</p>
            </div>
          </article>

          <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5">
            <p className="text-forest/75 text-sm leading-relaxed whitespace-pre-line">{tc('intro.text')}</p>
          </div>
        </section>

        {/* Conditions of Nikah */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">{tc('conditions.heading')}</h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">{SUB_AR.conditions}</p>
          <div className="space-y-5">
            {[1, 2, 3, 4].map(n => (
              <article key={n} className="card-islamic">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40 mt-0.5">
                    <span className="text-forest font-semibold text-xs">{n}</span>
                  </div>
                  <div>
                    <p dir="rtl" lang="ar" className="arabic-sm text-gold mb-1">{CONDITIONS_AR[n - 1]}</p>
                    <h3 className="font-garamond text-lg font-semibold text-forest">{tc(k(`conditions.${n}.name`))}</h3>
                  </div>
                </div>
                <p className="text-forest/75 text-sm leading-relaxed mb-3">{tc(k(`conditions.${n}.desc`))}</p>
                <div className="bg-gold/10 border border-gold/20 rounded-lg p-3">
                  <p className="text-xs text-gold/70 italic">{tc(k(`conditions.${n}.note`))}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* The Mahr */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">{tc('mahr.heading')}</h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">{SUB_AR.mahr}</p>

          <article className="card-islamic mb-6">
            <span className="badge-gold text-xs mb-4 inline-block">{tc('mahr.verse.ref')}</span>
            <ArabicText text={MAHR_VERSE_AR} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">{tl}</p>
              <p className="text-forest/60 italic text-sm">{MAHR_VERSE_TR}</p>
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">{ml}</p>
              <p className="text-forest/70 text-sm">{tc('mahr.verse.meaning')}</p>
            </div>
          </article>

          <div className="space-y-2 mb-6">
            {[1, 2, 3, 4, 5, 6].map(n => (
              <div key={n} className="flex gap-3 items-start">
                <span className="text-gold mt-1 flex-shrink-0">&#x2022;</span>
                <p className="text-forest/70 text-sm leading-relaxed">{tc(k(`mahr.point.${n}`))}</p>
              </div>
            ))}
          </div>

          <div className="card-islamic bg-forest/5">
            <h3 className="font-garamond text-base font-semibold text-forest mb-3">{tc('mahr.examplesHeading')}</h3>
            <div className="space-y-2">
              {[1, 2, 3].map(n => (
                <div key={n} className="flex gap-3 items-start">
                  <span className="text-gold mt-1 flex-shrink-0 text-xs">&#x2022;</span>
                  <p className="text-forest/65 text-sm leading-relaxed italic">{tc(k(`mahr.ex.${n}`))}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Khutbah al-Nikah */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">{tc('khutbah.heading')}</h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">{SUB_AR.khutbah}</p>

          <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-5">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('khutbah.intro')}</p>
          </div>

          <div className="card-islamic mb-5">
            <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-4">{tc('khutbah.openingLabel')}</p>
            <ArabicText text={KHUTBAH_AR} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">{tl}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{KHUTBAH_TR}</p>
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">{ml}</p>
              <p className="text-forest/70 text-sm leading-relaxed">{tc('khutbah.text.meaning')}</p>
            </div>
          </div>

          <div className="card-islamic">
            <span className="badge-gold text-xs mb-4 inline-block">{tc('khutbah.verses.refs')}</span>
            <ArabicText text={KHUTBAH_VERSES_AR} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3">
              <p className="text-forest/70 text-sm leading-relaxed">{tc('khutbah.verses.meaning')}</p>
            </div>
          </div>
        </section>

        {/* Marriage Duas */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">{tc('duas.heading')}</h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">{SUB_AR.duas}</p>
          <div className="space-y-5">
            {[1, 2, 3].map(n => (
              <article key={n} className="card-islamic">
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <h3 className="font-garamond text-lg font-semibold text-forest">{tc(k(`duas.${n}.title`))}</h3>
                  <span className="badge-gold text-xs flex-shrink-0">{tc(k(`duas.${n}.source`))}</span>
                </div>
                <p className="text-forest/60 text-xs italic mb-4">{tc(k(`duas.${n}.note`))}</p>
                <ArabicText text={DUAS_AR[n - 1]} size="md" />
                <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
                  <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">{tl}</p>
                  <p className="text-forest/60 italic text-sm">{DUAS_TR[n - 1]}</p>
                  <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">{ml}</p>
                  <p className="text-forest/70 text-sm">{tc(k(`duas.${n}.meaning`))}</p>
                  <p className="text-xs text-gold/55 italic mt-2 leading-relaxed">{tc(k(`duas.${n}.detail`))}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Forbidden Marriages */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">{tc('forbidden.heading')}</h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">{SUB_AR.forbidden}</p>
          <div className="space-y-5">
            <article className="card-islamic border-l-4 border-red-700/40">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-3">{tc('forbidden.permanent.title')}</h3>
              <p className="text-forest/60 text-xs mb-4">{tc('forbidden.permanent.intro')}</p>
              <div className="space-y-3">
                {[1, 2, 3].map(n => (
                  <div key={n} className="bg-forest/5 rounded-xl p-3">
                    <p className="font-medium text-forest text-sm mb-1">{tc(k(`forbidden.perm.${n}.category`))}</p>
                    <p className="text-forest/65 text-xs leading-relaxed">{tc(k(`forbidden.perm.${n}.examples`))}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="card-islamic border-l-4 border-amber-700/40">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-3">{tc('forbidden.temp.title')}</h3>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6, 7].map(n => (
                  <div key={n} className="flex gap-3 items-start">
                    <span className="text-gold mt-1 flex-shrink-0">&#x2022;</span>
                    <p className="text-forest/70 text-sm leading-relaxed">{tc(k(`forbidden.temp.${n}`))}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* Rights and Responsibilities */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">{tc('rights.heading')}</h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">{SUB_AR.rights}</p>

          <article className="card-islamic mb-5">
            <span className="badge-gold text-xs mb-4 inline-block">{tc('rights.verse.ref')}</span>
            <ArabicText text={RIGHTS_VERSE_AR} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-forest/60 italic text-sm">{RIGHTS_VERSE_TR}</p>
              <p className="text-forest/70 text-sm">{tc('rights.verse.meaning')}</p>
            </div>
          </article>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="card-islamic">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-4 border-l-4 border-forest/50 pl-3">{tc('rights.husbandsHeading')}</h3>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
                  <div key={n} className="flex gap-2 items-start">
                    <span className="text-gold mt-1 flex-shrink-0 text-xs">&#x2022;</span>
                    <p className="text-forest/70 text-sm leading-relaxed">{tc(k(`rights.h.${n}`))}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-islamic">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-4 border-l-4 border-gold/60 pl-3">{tc('rights.wivesHeading')}</h3>
              <div className="space-y-2">
                {[1, 2, 3, 4, 5, 6, 7].map(n => (
                  <div key={n} className="flex gap-2 items-start">
                    <span className="text-gold mt-1 flex-shrink-0 text-xs">&#x2022;</span>
                    <p className="text-forest/70 text-sm leading-relaxed">{tc(k(`rights.w.${n}`))}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gold/10 border border-gold/25 rounded-xl p-5">
            <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-2">{tc('rights.prophetExampleLabel')}</p>
            <p className="text-forest/70 text-sm leading-relaxed italic">{tc('rights.prophets_example')}</p>
          </div>
        </section>

        {/* The Walimah */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">{tc('walimah.heading')}</h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">{SUB_AR.walimah}</p>
          <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5 mb-5">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('walimah.definition')}</p>
          </div>
          <div className="space-y-2 mb-5">
            {[1, 2, 3, 4, 5, 6].map(n => (
              <div key={n} className="flex gap-3 items-start">
                <span className="text-gold mt-1 flex-shrink-0">&#x2022;</span>
                <p className="text-forest/70 text-sm leading-relaxed">{tc(k(`walimah.r.${n}`))}</p>
              </div>
            ))}
          </div>
          <div className="card-islamic bg-forest/5">
            <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-2">{tc('walimah.noteLabel')}</p>
            <p className="text-forest/65 text-sm leading-relaxed italic">{tc('walimah.note')}</p>
          </div>
        </section>

        {/* Closing */}
        <section className="card-islamic bg-forest/5 text-center">
          <ArabicText text={CLOSING_AR} size="lg" className="mb-4" />
          <p className="text-forest/70 text-sm italic mb-1">{tc('closing.meaning')}</p>
          <p className="text-forest/50 text-xs mt-3">{tc('closing.text')}</p>
        </section>
      </div>
    </>
  );
}
