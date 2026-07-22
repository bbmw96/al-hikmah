'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { SLEEP_CONTENT } from '@/lib/i18n/content/sleep-etiquette-content';
import type { SleepContentKey } from '@/lib/i18n/content/sleep-etiquette-content';

const TITLE: Record<string, string> = {
  en: `Adab al-Nawm, The Etiquettes of Sleep`,
  ms: `Adab al-Nawm, Adab Tidur`,
  tur: `Âdâbü'n-Nevm, Uyku Âdâbı`,
  urd: `آدابِ نوم، سونے کے آداب`,
  ben: `আদাব আল-নাওম, ঘুমের আদব`,
  fas: `آداب نوم، آداب خواب`,
  zh: `睡眠之礼节，「阿达布·纳乌姆」`,
  yue: `睡眠之禮節，「阿達布·納烏姆」`,
  ja: `眠りの作法，アダーブ・アン＝ナウム`,
  ru: `Этикет сна, Адаб ан-Наум`,
  es: `Adab al-Nawm, la etiqueta del sueño`,
  ko: `잠의 예절, 아다브 안나움`,
  ta: `ஆதாப் அன்-நவ்ம், தூக்கத்தின் நடத்தை`,
  si: `අදාබ් අන්-නව්ම්, නින්දේ අදාබ්`,
};

const SUBTITLE: Record<string, string> = {
  en: `The Sunnah of preparing for sleep, the du'as before and on waking, the reasons behind each practice, and what the Prophet ﷺ said about the soul's condition in sleep.`,
  ms: `Sunnah persiapan untuk tidur, doa sebelum tidur dan ketika bangun, sebab di sebalik setiap amalan, dan apa yang Nabi ﷺ katakan tentang keadaan roh dalam tidur.`,
  tur: `Uyumaya hazırlanmanın Sünneti, uykudan önce ve uyanışta okunan duâlar, her uygulamanın sebebi ve Hz. Peygamber'in ﷺ uykudaki ruhun hâli hakkındaki sözleri.`,
  urd: `سونے کی تیاری کی سنت، سونے سے پہلے اور جاگنے پر دعائیں، ہر عمل کے پیچھے سبب، اور نبی ﷺ نے سونے میں روح کی حالت کے بارے میں کیا فرمایا۔`,
  ben: `ঘুমানোর প্রস্তুতির সুন্নাহ, ঘুমানোর পূর্বে ও জেগে ওঠার সময়ের দোয়া, প্রতিটি অনুশীলনের পিছনের কারণ, এবং ঘুমে আত্মার অবস্থা সম্পর্কে নবী ﷺ কী বলেছেন।`,
  fas: `سنت آماده شدن برای خواب، دعای پیش از خواب و بیدار شدن، سبب پشت هر عمل، و آنچه پیامبر ﷺ درباره‌ی حال روح در خواب فرمود.`,
  zh: `就寝准备之圣行、寝前与醒时之祈祷、每项行为之背后原因，以及先知 ﷺ 论睡眠中灵魂状态之言。`,
  yue: `就寢準備之聖行、寢前同醒時之祈禱、每項行為背後嘅原因，以及先知 ﷺ 論睡眠中靈魂狀態之言。`,
  ja: `眠りへの備えのスンナ、就寝前と目覚めの祈願、それぞれの行為の理由、そして眠りにおける魂の状態について預言者 ﷺ が述べられたこと。`,
  ru: `Сунна подготовки ко сну, дуа перед сном и по пробуждении, причины каждой практики и то, что Пророк ﷺ говорил о состоянии души во сне.`,
  es: `La Sunna de prepararse para dormir, las du'as antes y al despertar, las razones detrás de cada práctica, y lo que el Profeta ﷺ dijo sobre el estado del alma en el sueño.`,
  ko: `잠자리에 드는 순나, 잠들기 전과 깨어날 때의 두아, 각 관행의 이유, 그리고 잠 속 영혼의 상태에 관해 예언자 ﷺ 께서 하신 말씀.`,
  ta: `உறங்குவதற்குத் தயாராகும் ஸுன்னா, உறங்குமுன் மற்றும் விழிக்கும்போது பிரார்த்தனைகள், ஒவ்வொரு நடைமுறையின் பின்னாலுள்ள காரணங்கள், மற்றும் நபி ﷺ உறக்கத்தில் ஆன்மாவின் நிலை பற்றி கூறியவை.`,
  si: `නින්දට සූදානම් වීමේ සුන්නාව, නින්දට පෙර සහ අවදි වන විට දුආ, සෑම භාවිතයක්ම පිටුපස ඇති හේතූන්, සහ නබි ﷺ තුමා නින්දේදී ආත්මයේ තත්ත්වය ගැන පැවසූ දේ.`,
};

const PRE_SLEEP_DUA_AR = 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.';
const WAKE_DUA_AR = 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.';
const BAD_DREAM_DUA_AR = 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ.';
const AYATUL_KURSI_TAG_AR = 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ... (البقرة 255)';

export function SleepEtiquetteContent() {
  const { lang } = useLanguage();
  const tc = (key: SleepContentKey): string => {
    const entry = SLEEP_CONTENT[key] as Record<string, string | undefined> | undefined;
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="آدَابُ النَّوْم"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('wudu_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('wudu_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('wudu_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('wudu_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('right_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('right_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('right_p2')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('right_p3')}</p>
            <p className="text-xs text-gold/60 italic">{tc('right_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('pre_h')}</h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={PRE_SLEEP_DUA_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('label_transliteration')}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{tc('pre_translit')}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">{tc('label_meaning')}</p>
              <p className="text-forest/75 text-sm leading-relaxed">{tc('pre_meaning')}</p>
            </div>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('pre_p')}</p>
            <p className="text-xs text-gold/60 italic">{tc('pre_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('recite_h')}</h2>
          <article className="card-islamic space-y-4">
            <div>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('recite_1_label')}</p>
              <ArabicText text={AYATUL_KURSI_TAG_AR} size="sm" />
              <p className="text-forest/70 text-sm leading-relaxed mt-2">{tc('recite_1_body')}</p>
              <p className="text-xs text-gold/60 italic">{tc('recite_1_source')}</p>
            </div>
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('recite_2_label')}</p>
              <p className="text-forest/70 text-sm leading-relaxed">{tc('recite_2_body')}</p>
              <p className="text-xs text-gold/60 italic">{tc('recite_2_source')}</p>
            </div>
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('recite_3_label')}</p>
              <p className="text-forest/70 text-sm leading-relaxed">{tc('recite_3_body')}</p>
              <p className="text-xs text-gold/60 italic">{tc('recite_3_source')}</p>
            </div>
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('recite_4_label')}</p>
              <p className="text-forest/70 text-sm leading-relaxed">{tc('recite_4_body')}</p>
              <p className="text-xs text-gold/60 italic">{tc('recite_4_source')}</p>
            </div>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('bad_h')}</h2>
          <article className="card-islamic space-y-4">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('bad_p1')}</p>
            <ArabicText text={BAD_DREAM_DUA_AR} size="md" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('label_transliteration')}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{tc('bad_translit')}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">{tc('label_meaning')}</p>
              <p className="text-forest/75 text-sm leading-relaxed">{tc('bad_meaning')}</p>
            </div>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('bad_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('bad_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('wake_h')}</h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={WAKE_DUA_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('label_transliteration')}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{tc('wake_translit')}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">{tc('label_meaning')}</p>
              <p className="text-forest/75 text-sm leading-relaxed">{tc('wake_meaning')}</p>
            </div>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('wake_p')}</p>
            <p className="text-xs text-gold/60 italic">{tc('wake_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('wisdom_h')}</h2>
          <article className="card-forest rounded-2xl p-6 space-y-3">
            <p className="text-cream/85 text-sm leading-relaxed">{tc('wisdom_p1')}</p>
            <p className="text-cream/85 text-sm leading-relaxed">{tc('wisdom_p2')}</p>
            <p className="text-cream/85 text-sm leading-relaxed">{tc('wisdom_p3')}</p>
          </article>
        </section>
      </div>
    </>
  );
}
