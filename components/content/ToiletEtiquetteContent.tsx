'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';

const TITLE: Record<string, string> = {
  en: `Adab al-Khala, The Etiquettes of the Toilet`,
  ms: `Adab al-Khala, Adab Tandas`,
  tur: `Âdâbü'l-Halâ, Tuvalet Âdâbı`,
  urd: `آدابِ خلا، بیت الخلاء کے آداب`,
  ben: `আদাব আল-খালা, শৌচাগারের আদব`,
  fas: `آداب خلا، آداب دستشویی`,
  zh: `厕所之礼节，「阿达布·哈拉」`,
  yue: `廁所之禮節，「阿達布·哈拉」`,
  ja: `トイレの作法，アダーブ・アル＝ハラー`,
  ru: `Этикет отхожего места, Адаб аль-Хала`,
  es: `Adab al-Khala, la etiqueta del retrete`,
  ko: `측간의 예절, 아다브 알칼라`,
  ta: `ஆதாப் அல்-கலா, கழிப்பறை நடத்தை`,
  si: `අදාබ් අල්-ඛලා, වැසිකිලියේ අදාබ්`,
};

const SUBTITLE: Record<string, string> = {
  en: `The Sunnah manners of relieving oneself, what to say, which foot to enter with, what to avoid, and the reasons behind each ruling.`,
  ms: `Adab Sunnah membuang air, apa yang perlu diucapkan, dengan kaki mana masuk, apa yang perlu dielakkan, dan sebab di sebalik setiap hukum.`,
  tur: `Def-i hâcet için Sünnet âdâbı, ne söylenir, hangi ayakla girilir, nelerden kaçınılır ve her hükmün sebebi.`,
  urd: `قضائے حاجت کے سنت آداب، کیا کہنا ہے، کس پاؤں سے داخل ہونا ہے، کس چیز سے بچنا ہے، اور ہر حکم کے پیچھے سبب۔`,
  ben: `প্রস্রাব-পায়খানার সুন্নাহ আদব, কী বলতে হবে, কোন পা দিয়ে ঢুকতে হবে, কী এড়াতে হবে, এবং প্রতিটি বিধানের পিছনের কারণ।`,
  fas: `آداب سنت قضای حاجت، چه بگوییم، با کدام پا داخل شویم، چه چیزی را پرهیز کنیم، و سبب پشت هر حکم.`,
  zh: `解手之圣行礼节，应念何言、以何足入、当避何事、每条判决之背后原因。`,
  yue: `解手之聖行禮節，應念何言、以何足入、當避何事、每條判決背後嘅原因。`,
  ja: `用便のスンナに則った作法，何を唱えるか、どちらの足で入るか、避けるべきこと、それぞれの規定の理由。`,
  ru: `Сунна этикета отправления нужды, что говорить, какой ногой входить, чего избегать, и причины каждого предписания.`,
  es: `Los modales sunna al hacer las necesidades, qué decir, con qué pie entrar, qué evitar, y las razones detrás de cada regla.`,
  ko: `용변의 순나 예절, 무엇을 낭송하는지, 어느 발로 들어가는지, 무엇을 피해야 하는지, 각 규정의 이유.`,
  ta: `இயற்கை உபாதைக்கான ஸுன்னா ஆதாபுகள், என்ன சொல்ல வேண்டும், எந்த காலால் நுழைய வேண்டும், எதைத் தவிர்க்க வேண்டும், மற்றும் ஒவ்வொரு விதிக்கும் பின்னாலுள்ள காரணங்கள்.`,
  si: `අවශ්‍යතා පිරිසිදු කිරීමේ සුන්නා අදාබ්, මොනවා කිව යුතුද, කුමන පාදයෙන් ඇතුළු විය යුතුද, කුමන දේ වළක්වා ගත යුතුද, සහ සෑම නීතියක්ම පිටුපස ඇති හේතූන්.`,
};

const DUA_ENTER_AR = 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبُثِ وَالْخَبَائِثِ.';
const DUA_ENTER_TR = "Allahumma inni a'udhu bika mina-l khubuthi wa-l khaba'ith.";
const DUA_ENTER_EN = 'O Allah, I seek refuge with You from all impure male and impure female jinn.';

const DUA_EXIT_AR = 'غُفْرَانَكَ.';
const DUA_EXIT_TR = 'Ghufranaka.';
const DUA_EXIT_EN = '(I ask) Your forgiveness.';

const QIBLA_HADITH_AR =
  'إِذَا أَتَيْتُمُ الْغَائِطَ فَلَا تَسْتَقْبِلُوا الْقِبْلَةَ بِغَائِطٍ وَلَا بَوْلٍ، وَلَا تَسْتَدْبِرُوهَا، وَلَٰكِنْ شَرِّقُوا أَوْ غَرِّبُوا.';
const QIBLA_HADITH_EN =
  'When you go to relieve yourselves, do not face the qiblah nor turn your backs to it while urinating or defecating, but face east or west (in the Prophet’s ﷺ Madinan context).';

export function ToiletEtiquetteContent() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="آدَابُ الخَلَاء"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        {/* Du'a before entering */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Du'a Before Entering
          </h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={DUA_ENTER_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">Transliteration</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{DUA_ENTER_TR}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">Meaning</p>
              <p className="text-forest/75 text-sm leading-relaxed">{DUA_ENTER_EN}</p>
            </div>
            <p className="text-forest/75 text-sm leading-relaxed">
              Said silently before entering the toilet, or before removing clothes if in an open place. The Prophet ﷺ taught this seeking Allah’s protection from the impure jinn who frequent such places.
            </p>
            <p className="text-xs text-gold/60 italic">Source: al-Bukhari 142, Muslim 375 (Anas ibn Malik).</p>
          </article>
        </section>

        {/* Du'a after leaving */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Du'a After Leaving
          </h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={DUA_EXIT_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">Transliteration</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{DUA_EXIT_TR}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">Meaning</p>
              <p className="text-forest/75 text-sm leading-relaxed">{DUA_EXIT_EN}</p>
            </div>
            <p className="text-forest/75 text-sm leading-relaxed">
              A brief admission that even in relieving the body of impurity, the servant is dependent on Allah’s pardon. ‘Aisha (ra) said this was the Prophet’s ﷺ habit whenever he left the toilet.
            </p>
            <p className="text-xs text-gold/60 italic">Source: Abu Dawud 30, al-Tirmidhi 7, Ibn Majah 300, graded sahih by al-Albani.</p>
          </article>
        </section>

        {/* Which foot */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Which Foot to Enter and Leave With
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              Enter with the <strong>left</strong> foot. Leave with the <strong>right</strong> foot. The general principle from the Sunnah is that the right hand and foot are used for what is honourable (eating, entering the mosque, putting on clothes), and the left is used for what is not (cleansing after the toilet, removing shoes).
            </p>
            <p className="text-forest/75 text-sm leading-relaxed">
              ‘Aisha (ra) said: “The Prophet ﷺ used to like to begin with the right in his purification, in combing his hair, and in putting on his shoes.”
            </p>
            <p className="text-xs text-gold/60 italic">Source: al-Bukhari 168, Muslim 268.</p>
          </article>
        </section>

        {/* Facing the qiblah */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Facing the Qiblah
          </h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={QIBLA_HADITH_AR} size="md" />
            <p className="text-forest/75 text-sm leading-relaxed">{QIBLA_HADITH_EN}</p>
            <p className="text-forest/70 text-sm leading-relaxed">
              In the open (a desert, an unwalled field), one must neither face nor turn one’s back to the Ka’bah while relieving oneself. Inside a built toilet, the majority of scholars (Hanafi, Shafi’i, Hanbali) permit it out of necessity because a wall now stands between the person and the qiblah. Malikis hold to the stricter view even indoors. When you can, orient the toilet away from the qiblah.
            </p>
            <p className="text-xs text-gold/60 italic">Source: al-Bukhari 394, Muslim 264 (Abu Ayyub al-Ansari).</p>
          </article>
        </section>

        {/* Forbidden places */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Places Where Relieving Oneself Is Forbidden
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">The Prophet ﷺ forbade relieving oneself in:</p>
            <ul className="text-forest/75 text-sm space-y-2 list-disc list-inside">
              <li><strong>Stagnant water</strong> that others may use (Muslim 281, Jabir).</li>
              <li><strong>The paths people walk</strong> and <strong>the shaded places they rest</strong> (Muslim 269, Abu Hurayra), calling these the two “cursed acts.”</li>
              <li><strong>Under fruit-bearing trees</strong> people gather from.</li>
              <li><strong>Facing the sun or moon</strong> (a preference held by many early scholars).</li>
            </ul>
            <p className="text-forest/70 text-sm leading-relaxed">
              The unifying wisdom: no act of the servant should cause disgust, harm or ritual inconvenience to another Muslim.
            </p>
          </article>
        </section>

        {/* Speech, name of Allah, right hand */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Speech, the Name of Allah, and the Right Hand
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              While actually relieving oneself, one does not speak, does not return salam, and does not respond to the adhan out loud (the response is made silently or after leaving).
            </p>
            <p className="text-forest/75 text-sm leading-relaxed">
              One should not carry anything on which Allah’s name is written, including a mushaf, unless there is a real need and it is kept covered. Modern phones with the Qur’an app in the pocket are, in the view of most contemporary scholars, permissible because the text is not physically written on the device, but leaving the phone outside is more cautious and closer to the spirit of the ruling.
            </p>
            <p className="text-forest/75 text-sm leading-relaxed">
              Cleansing (<em>istinja</em> with water, or <em>istijmar</em> with clean stones or their equivalent, such as toilet paper) must be done with the <strong>left</strong> hand. The Prophet ﷺ forbade the right hand from cleansing after the toilet.
            </p>
            <p className="text-xs text-gold/60 italic">Source: al-Bukhari 153, Muslim 267 (Abu Qatada).</p>
          </article>
        </section>

        {/* Istinja and istijmar */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Istinja and Istijmar
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              <strong>Istinja</strong> is cleansing the place of exit with water until it is clean and the traces of impurity are removed. <strong>Istijmar</strong> is cleansing with clean stones, tissue, or any absorbent solid material (traditionally an odd number, minimum three).
            </p>
            <p className="text-forest/75 text-sm leading-relaxed">
              The classical rule across all four schools: <strong>water is superior</strong>; if only solids are available, at least three wipes are used until the place is clean. Combining both is the most complete Sunnah, water after solids.
            </p>
            <p className="text-forest/75 text-sm leading-relaxed">
              Anas (ra) said: “The Prophet ﷺ used to enter the toilet, and I used to bring him water for him to wash himself with.”
            </p>
            <p className="text-xs text-gold/60 italic">Source: al-Bukhari 217, Muslim 271.</p>
          </article>
        </section>

        {/* Wisdom */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Wisdom Behind These Etiquettes
          </h2>
          <article className="card-forest rounded-2xl p-6 space-y-3">
            <p className="text-cream/85 text-sm leading-relaxed">
              Islam does not treat any moment of a Muslim’s day as too private for guidance. The etiquettes of the toilet are a small door onto a large teaching:
            </p>
            <ul className="text-cream/80 text-sm space-y-2 list-disc list-inside">
              <li><strong>Cleanliness</strong> is half of faith (Muslim 223). It begins with the body.</li>
              <li><strong>Modesty</strong>, the toilet is a private place, entered discreetly, without frivolity.</li>
              <li><strong>Constant remembrance</strong>, the servant enters seeking refuge, leaves seeking forgiveness. Even here, the heart is turned to Allah.</li>
              <li><strong>Distinction of the right and the left</strong>, an outward habit that trains an inward preference for what is noble.</li>
              <li><strong>Consideration for others</strong>, do not soil the water they drink from, the paths they walk, or the shade they rest in.</li>
            </ul>
            <p className="text-cream/85 text-sm leading-relaxed">
              A companion of the polytheists once mocked the Muslims saying: “Your Prophet has taught you everything, even how to relieve yourselves.” Salman al-Farisi (ra) replied: “Yes, he has forbidden us from facing the qiblah, from cleansing with the right hand, from using fewer than three stones, and from using dung or bone.”
            </p>
            <p className="text-xs text-gold/70 italic">Source: Muslim 262 (Salman al-Farisi).</p>
          </article>
        </section>
      </div>
    </>
  );
}
