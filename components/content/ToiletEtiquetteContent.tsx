'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { TOILET_CONTENT } from '@/lib/i18n/content/toilet-etiquette-content';
import type { ToiletContentKey } from '@/lib/i18n/content/toilet-etiquette-content';

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
const DUA_EXIT_AR = 'غُفْرَانَكَ.';
const QIBLA_HADITH_AR = 'إِذَا أَتَيْتُمُ الْغَائِطَ فَلَا تَسْتَقْبِلُوا الْقِبْلَةَ بِغَائِطٍ وَلَا بَوْلٍ، وَلَا تَسْتَدْبِرُوهَا، وَلَٰكِنْ شَرِّقُوا أَوْ غَرِّبُوا.';

export function ToiletEtiquetteContent() {
  const { lang } = useLanguage();
  const tc = (key: ToiletContentKey): string => {
    const entry = TOILET_CONTENT[key] as Record<string, string | undefined> | undefined;
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="آدَابُ الخَلَاء"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('dua_enter_h')}</h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={DUA_ENTER_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('label_transliteration')}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{tc('dua_enter_translit')}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">{tc('label_meaning')}</p>
              <p className="text-forest/75 text-sm leading-relaxed">{tc('dua_enter_meaning')}</p>
            </div>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('dua_enter_p')}</p>
            <p className="text-xs text-gold/60 italic">{tc('dua_enter_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('dua_exit_h')}</h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={DUA_EXIT_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('label_transliteration')}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{tc('dua_exit_translit')}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">{tc('label_meaning')}</p>
              <p className="text-forest/75 text-sm leading-relaxed">{tc('dua_exit_meaning')}</p>
            </div>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('dua_exit_p')}</p>
            <p className="text-xs text-gold/60 italic">{tc('dua_exit_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('foot_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('foot_p1')}</p>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('foot_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('foot_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('qibla_h')}</h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={QIBLA_HADITH_AR} size="md" />
            <p className="text-forest/75 text-sm leading-relaxed">{tc('qibla_translation')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('qibla_p')}</p>
            <p className="text-xs text-gold/60 italic">{tc('qibla_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('forbidden_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('forbidden_intro')}</p>
            <ul className="text-forest/75 text-sm space-y-2 list-disc list-inside">
              <li>{tc('forbidden_1')}</li>
              <li>{tc('forbidden_2')}</li>
              <li>{tc('forbidden_3')}</li>
              <li>{tc('forbidden_4')}</li>
            </ul>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('forbidden_wisdom')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('speech_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('speech_p1')}</p>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('speech_p2')}</p>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('speech_p3')}</p>
            <p className="text-xs text-gold/60 italic">{tc('speech_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('istinja_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('istinja_p1')}</p>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('istinja_p2')}</p>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('istinja_p3')}</p>
            <p className="text-xs text-gold/60 italic">{tc('istinja_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('wisdom_h')}</h2>
          <article className="card-forest rounded-2xl p-6 space-y-3">
            <p className="text-cream/85 text-sm leading-relaxed">{tc('wisdom_intro')}</p>
            <ul className="text-cream/80 text-sm space-y-2 list-disc list-inside">
              <li>{tc('wisdom_1')}</li>
              <li>{tc('wisdom_2')}</li>
              <li>{tc('wisdom_3')}</li>
              <li>{tc('wisdom_4')}</li>
              <li>{tc('wisdom_5')}</li>
            </ul>
            <p className="text-cream/85 text-sm leading-relaxed">{tc('wisdom_close')}</p>
            <p className="text-xs text-gold/70 italic">{tc('wisdom_source')}</p>
          </article>
        </section>
      </div>
    </>
  );
}
