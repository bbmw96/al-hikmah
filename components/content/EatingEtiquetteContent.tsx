'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';

const TITLE: Record<string, string> = {
  en: `Adab al-Ta'am, The Etiquettes of Eating`,
  ms: `Adab al-Ta'am, Adab Makan`,
  tur: `Âdâbü't-Ta'âm, Yemek Âdâbı`,
  urd: `آدابِ طعام، کھانے کے آداب`,
  ben: `আদাব আল-তা'আম, খাওয়ার আদব`,
  fas: `آداب طعام، آداب خوردن`,
  zh: `饮食之礼节，「阿达布·塔阿姆」`,
  yue: `飲食之禮節，「阿達布·塔阿姆」`,
  ja: `食の作法，アダーブ・アッ＝タアーム`,
  ru: `Этикет приёма пищи, Адаб ат-Та'ам`,
  es: `Adab al-Ta'am, la etiqueta de comer`,
  ko: `식사의 예절, 아다브 앗타암`,
  ta: `ஆதாப் அத்-தஆம், உண்ணும் நடத்தை`,
  si: `අදාබ් අත්-තඃආම්, ආහාර ගැනීමේ අදාබ්`,
};

const SUBTITLE: Record<string, string> = {
  en: `How to eat, with what to eat, what to say before and after, and what the Prophet ﷺ ate, avoided, and taught about food and drink.`,
  ms: `Bagaimana makan, dengan apa makan, apa yang perlu diucapkan sebelum dan selepas, dan apa yang Nabi ﷺ makan, elakkan, dan ajar tentang makanan dan minuman.`,
  tur: `Nasıl yenir, ne ile yenir, öncesi ve sonrasında ne söylenir, ve Hz. Peygamber'in ﷺ yediği, sakındığı ve yemek-içmek üzerine öğrettiği.`,
  urd: `کیسے کھائیں، کس چیز سے کھائیں، پہلے اور بعد میں کیا کہیں، اور نبی ﷺ نے کیا کھایا، کیا چھوڑا، اور کھانے پینے کے بارے میں کیا سکھایا۔`,
  ben: `কীভাবে খাবেন, কী দিয়ে খাবেন, আগে ও পরে কী বলবেন, এবং নবী ﷺ কী খেয়েছেন, কী এড়িয়ে গেছেন, এবং খাদ্য ও পানীয় সম্পর্কে কী শিখিয়েছেন।`,
  fas: `چگونه بخوریم، با چه بخوریم، پیش و پس از خوردن چه بگوییم، و پیامبر ﷺ چه خورد، چه پرهیز کرد، و درباره‌ی خوراک و نوشیدنی چه آموخت.`,
  zh: `如何食、以何食、食前食后何言，以及先知 ﷺ 所食、所避、就食饮所教之事。`,
  yue: `如何食、以何食、食前食後何言，以及先知 ﷺ 所食、所避、就食飲所教之事。`,
  ja: `いかに食すか、何と共に食すか、食前食後に何を唱えるか，そして預言者 ﷺ が何を食し、何を避け、食と飲について何を教えられたか。`,
  ru: `Как есть, с чем есть, что говорить до и после, и что ел, чего избегал и чему учил Пророк ﷺ в отношении пищи и питья.`,
  es: `Cómo comer, con qué comer, qué decir antes y después, y lo que el Profeta ﷺ comió, evitó y enseñó acerca de la comida y la bebida.`,
  ko: `어떻게 먹는지, 무엇과 함께 먹는지, 먹기 전과 후에 무엇을 말하는지, 그리고 예언자 ﷺ 께서 무엇을 드시고, 피하시고, 음식과 음료에 관해 무엇을 가르치셨는지.`,
  ta: `எப்படி உண்பது, எதனுடன் உண்பது, முன்பு மற்றும் பின்பு என்ன சொல்வது, மற்றும் நபி ﷺ என்ன உண்டார், எதைத் தவிர்த்தார், உணவு மற்றும் பானம் பற்றி என்ன கற்பித்தார்.`,
  si: `කෙසේ අනුභව කරන්නද, කුමන දේ සමඟ අනුභව කරන්නද, පෙර සහ පසුව කුමක් කිව යුතුද, සහ නබි ﷺ තුමා අනුභව කළ, වළක්වා ගත්, ආහාර සහ පාන ගැන ඉගැන්වූ දේ.`,
};

const BISMILLAH_AR = 'بِسْمِ اللَّهِ.';
const BISMILLAH_FORGOT_AR = 'بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ.';
const BISMILLAH_FORGOT_TR = "Bismillahi awwalahu wa akhirah.";

const ALHAMDU_AR =
  'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا، وَجَعَلَنَا مُسْلِمِينَ.';
const ALHAMDU_TR =
  "Alhamdulillahi-l ladhi at'amana wa saqana, wa ja'alana muslimin.";
const ALHAMDU_EN =
  'All praise is due to Allah, who has fed us, given us to drink, and made us Muslims.';

export function EatingEtiquetteContent() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="آدَابُ الطَّعَام"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        {/* Bismillah before */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Say Bismillah Before Eating
          </h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={BISMILLAH_AR} size="lg" />
            <p className="text-forest/75 text-sm leading-relaxed">
              The Prophet ﷺ said to Umar ibn Abi Salama (a boy at his table): <em>“Young man, say Bismillah, eat with your right hand, and eat from what is nearest to you.”</em> That single instruction gathered three etiquettes at once.
            </p>
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">If you forgot at the start</p>
              <ArabicText text={BISMILLAH_FORGOT_AR} size="md" />
              <p className="text-forest/60 italic text-sm mt-2">{BISMILLAH_FORGOT_TR}</p>
              <p className="text-forest/75 text-sm leading-relaxed mt-2">
                “In the name of Allah, at its beginning and at its end,” said as soon as you remember. The Prophet ﷺ taught this so that the shaytan, who eats with whoever eats without Bismillah, is expelled from what remains.
              </p>
            </div>
            <p className="text-xs text-gold/60 italic">Sources: al-Bukhari 5376, Muslim 2022 (Umar ibn Abi Salama); Abu Dawud 3767, al-Tirmidhi 1858 (‘Aisha) for the forgetting.</p>
          </article>
        </section>

        {/* Right hand */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Eat With the Right Hand, From What Is Nearest
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              The Prophet ﷺ said: <em>“None of you should eat or drink with his left hand, for the shaytan eats and drinks with the left.”</em> (Muslim 2020).
            </p>
            <p className="text-forest/75 text-sm leading-relaxed">
              And: <em>“Eat from what is nearest to you.”</em> When a shared dish is placed between people, take from the side directly in front of you and do not reach across for what looks better. To reach across is to invite others to think you consider their portion inferior.
            </p>
            <p className="text-forest/70 text-sm leading-relaxed">
              An exception the Prophet ﷺ himself made: for fruits and dates in a mixed dish, he would pick out the best for someone he wanted to honour, or the person may pick out the very small (a single date) from any side.
            </p>
            <p className="text-xs text-gold/60 italic">Source: al-Bukhari 5376, Muslim 2022.</p>
          </article>
        </section>

        {/* Sitting to eat */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Sit to Eat
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              The Prophet ﷺ ate seated on the floor, saying: <em>“I do not eat leaning against anything, for I am only a servant. I eat as a servant eats and sit as a servant sits.”</em>
            </p>
            <p className="text-forest/75 text-sm leading-relaxed">
              He ﷺ often sat cross-legged or with the right knee raised. He never used a table in the modern sense. Sitting on a chair at a dining table is permitted; standing to eat or drink is discouraged, though the Prophet ﷺ himself is reported to have drunk standing from the water of Zamzam, showing the discouragement is not an absolute prohibition.
            </p>
            <p className="text-xs text-gold/60 italic">Sources: al-Bukhari 5399 (Anas) for eating as a servant; Muslim 2027 for the discouragement of drinking standing; al-Bukhari 5617 for Zamzam.</p>
          </article>
        </section>

        {/* One-third stomach */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Rule of Thirds: Food, Water, Air
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              The Prophet ﷺ said: <em>“The son of Adam has not filled any container worse than his stomach. It is sufficient for a person to eat a few morsels that keep his back upright. But if he must, then one-third for his food, one-third for his drink, and one-third for his breath.”</em>
            </p>
            <p className="text-forest/70 text-sm leading-relaxed">
              This one hadith, more than any other, guards against the two great illnesses of eating: gluttony and heaviness in worship. Ibn al-Qayyim called overeating <em>“the mother of all disease”</em> and its restraint <em>“the mother of all medicine.”</em>
            </p>
            <p className="text-xs text-gold/60 italic">Source: al-Tirmidhi 2380, Ibn Majah 3349 (al-Miqdam ibn Ma’dikarib), graded sahih by al-Albani.</p>
          </article>
        </section>

        {/* Drinking */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Drinking: Three Sips, No Blowing, Sitting Down
          </h2>
          <article className="card-islamic space-y-3">
            <ul className="text-forest/75 text-sm space-y-2 list-disc list-inside">
              <li>
                <strong>Three sips, breathing between them.</strong> Anas (ra) said the Prophet ﷺ used to breathe three times when drinking (not into the vessel, but away from it). It is more thirst-quenching, more wholesome, and easier on the stomach (Bukhari 5631, Muslim 2028).
              </li>
              <li>
                <strong>No blowing into a vessel.</strong> He ﷺ forbade blowing into a drinking vessel to cool a hot drink (Abu Dawud 3728).
              </li>
              <li>
                <strong>Do not drink from the mouth of the water-skin or bottle.</strong> He ﷺ forbade this (Bukhari 5626); one might unknowingly swallow an insect.
              </li>
              <li>
                <strong>Sit down to drink.</strong> The general rule (Muslim 2024). Exceptions are reported for Zamzam and for water in transit.
              </li>
              <li>
                <strong>The one who serves drinks himself last.</strong> He ﷺ said: <em>“The one who gives drink to others should drink last.”</em> (Muslim 681, Abu Qatada).
              </li>
            </ul>
          </article>
        </section>

        {/* Communal blessing */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Eating Together: The Communal Blessing
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              The Prophet ﷺ said: <em>“Eat together and do not eat separately, for barakah is with the community.”</em> (Ibn Majah 3287, Abu Dawud 3764).
            </p>
            <p className="text-forest/75 text-sm leading-relaxed">
              And: <em>“The food for two suffices three, and the food for three suffices four.”</em> (Muslim 2059, Bukhari 5392).
            </p>
            <p className="text-forest/70 text-sm leading-relaxed">
              Never criticise food. The Prophet ﷺ never criticised any food he was served. If he liked it he ate it, and if he disliked it he left it, without a word (al-Bukhari 3563, Muslim 2064, Abu Hurayra).
            </p>
          </article>
        </section>

        {/* Alhamdulillah */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Say Alhamdulillah After Eating
          </h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={ALHAMDU_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">Transliteration</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{ALHAMDU_TR}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">Meaning</p>
              <p className="text-forest/75 text-sm leading-relaxed">{ALHAMDU_EN}</p>
            </div>
            <p className="text-forest/70 text-sm leading-relaxed">
              The Prophet ﷺ said: <em>“Whoever eats a meal and then says this, his previous sins are forgiven.”</em> A tiny phrase, an enormous reward, for the servant who remembers that even a spoonful of food is a gift.
            </p>
            <p className="text-xs text-gold/60 italic">Sources: Abu Dawud 4023, al-Tirmidhi 3458, Ibn Majah 3285 (Mu’adh ibn Anas), Hasan.</p>
          </article>
        </section>

        {/* Prohibitions */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            What Is Forbidden and What Is Restricted
          </h2>
          <article className="card-forest rounded-2xl p-6 space-y-3">
            <ul className="text-cream/85 text-sm space-y-2 list-disc list-inside">
              <li><strong>Pork and its by-products</strong> (al-Baqarah 2:173, al-Ma’ida 5:3, al-An’am 6:145, al-Nahl 16:115).</li>
              <li><strong>Blood.</strong> Blood poured out at slaughter, forbidden by the same verses. Blood remaining in cooked meat is exempted.</li>
              <li><strong>Wine and every intoxicant</strong> (al-Ma’ida 5:90-91). The Prophet ﷺ said: <em>“Every intoxicant is khamr, and every khamr is forbidden.”</em> (Muslim 2003).</li>
              <li><strong>Meat of any animal not slaughtered per the Sunnah</strong> (see the <a href="/dhabihah" className="text-gold underline">Dhabihah page</a>).</li>
              <li><strong>Food consecrated to other than Allah</strong> (al-Baqarah 2:173).</li>
              <li><strong>Carrion,</strong> strangled animals, those killed by a blow, by a fall, or by another beast, unless properly slaughtered before death (al-Ma’ida 5:3).</li>
              <li><strong>Fanged predators and taloned birds of prey</strong> (Muslim 1934).</li>
              <li><strong>Gold and silver vessels.</strong> The Prophet ﷺ said: <em>“He who drinks from a silver vessel, the fire of Jahannam gurgles in his belly.”</em> Extended by the majority of scholars to eating vessels as well (Bukhari 5426, Muslim 2065).</li>
            </ul>
            <p className="text-cream/80 text-sm leading-relaxed pt-2">
              What remains of Allah’s provision is vast, halal, and blessed. The Qur’an says: <em>“Eat of the lawful and good things that Allah has provided you, and be grateful for the favour of Allah, if it is Him you worship”</em> (al-Nahl 16:114).
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
