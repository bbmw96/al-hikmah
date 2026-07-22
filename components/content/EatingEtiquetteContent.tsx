'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { EATING_CONTENT } from '@/lib/i18n/content/eating-etiquette-content';
import type { EatingContentKey } from '@/lib/i18n/content/eating-etiquette-content';

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
  const tc = (key: EatingContentKey): string => {
    const entry = EATING_CONTENT[key] as Record<string, string | undefined> | undefined;
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };

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
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('bismillah_h')}</h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={BISMILLAH_AR} size="lg" />
            <p className="text-forest/75 text-sm leading-relaxed">{tc('bismillah_p1')}</p>
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('bismillah_forgot_label')}</p>
              <ArabicText text={BISMILLAH_FORGOT_AR} size="md" />
              <p className="text-forest/60 italic text-sm mt-2">{BISMILLAH_FORGOT_TR}</p>
              <p className="text-forest/75 text-sm leading-relaxed mt-2">{tc('bismillah_forgot_p')}</p>
            </div>
            <p className="text-xs text-gold/60 italic">{tc('bismillah_source')}</p>
          </article>
        </section>

        {/* Right hand */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('right_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('right_p1')}</p>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('right_p2')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('right_p3')}</p>
            <p className="text-xs text-gold/60 italic">{tc('right_source')}</p>
          </article>
        </section>

        {/* Sit */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('sit_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('sit_p1')}</p>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('sit_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('sit_source')}</p>
          </article>
        </section>

        {/* Thirds */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('thirds_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('thirds_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('thirds_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('thirds_source')}</p>
          </article>
        </section>

        {/* Drinking */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('drink_h')}</h2>
          <article className="card-islamic space-y-3">
            <ul className="text-forest/75 text-sm space-y-2 list-disc list-inside">
              <li>{tc('drink_1')}</li>
              <li>{tc('drink_2')}</li>
              <li>{tc('drink_3')}</li>
              <li>{tc('drink_4')}</li>
              <li>{tc('drink_5')}</li>
            </ul>
          </article>
        </section>

        {/* Communal */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('comm_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('comm_p1')}</p>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('comm_p2')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('comm_p3')}</p>
          </article>
        </section>

        {/* Alhamdu */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('alhamdu_h')}</h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={ALHAMDU_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('label_transliteration')}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{ALHAMDU_TR}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">{tc('label_meaning')}</p>
              <p className="text-forest/75 text-sm leading-relaxed">{ALHAMDU_EN}</p>
            </div>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('alhamdu_p')}</p>
            <p className="text-xs text-gold/60 italic">{tc('alhamdu_source')}</p>
          </article>
        </section>

        {/* Prohibitions */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('prohib_h')}</h2>
          <article className="card-forest rounded-2xl p-6 space-y-3">
            <ul className="text-cream/85 text-sm space-y-2 list-disc list-inside">
              <li>{tc('prohib_1')}</li>
              <li>{tc('prohib_2')}</li>
              <li>{tc('prohib_3')}</li>
              <li>{tc('prohib_4')}</li>
              <li>{tc('prohib_5')}</li>
              <li>{tc('prohib_6')}</li>
              <li>{tc('prohib_7')}</li>
              <li>{tc('prohib_8')}</li>
            </ul>
            <p className="text-cream/80 text-sm leading-relaxed pt-2">{tc('prohib_close')}</p>
          </article>
        </section>
      </div>
    </>
  );
}
