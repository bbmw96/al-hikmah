'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { useLanguage } from '@/lib/i18n/context';
import { AHKAM_CONTENT } from '@/lib/i18n/content/ahkam-content';
import type { AhkamContentKey } from '@/lib/i18n/content/ahkam-content';

const TITLE: Record<string, string> = {
  en: `The Five Ahkam, Halal, Haram, Makruh, Wajib, Mustahabb, Mubah`,
  ms: `Lima Ahkam, Halal, Haram, Makruh, Wajib, Mustahabb, Mubah`,
  tur: `Beş Hüküm, Helâl, Harâm, Mekrûh, Vâcib, Müstehab, Mübâh`,
  urd: `پانچ احکام، حلال، حرام، مکروہ، واجب، مستحب، مباح`,
  ben: `পাঁচটি আহকাম, হালাল, হারাম, মাকরুহ, ওয়াজিব, মুস্তাহাব, মুবাহ`,
  fas: `پنج حکم، حلال، حرام، مکروه، واجب، مستحب، مباح`,
  zh: `五定断，合法、禁止、可憎、必尽、可嘉、允许`,
  yue: `五定斷，合法、禁止、可憎、必盡、可嘉、允許`,
  ja: `五つの法的判断，ハラール、ハラーム、マクルーフ、ワージブ、ムスタハッブ、ムバーフ`,
  ru: `Пять ахкам, халяль, харам, макрух, ваджиб, мустахабб, мубах`,
  es: `Los cinco ahkam, halal, haram, makruh, wajib, mustahabb, mubah`,
  ko: `다섯 아흐캄, 할랄, 하람, 마크루흐, 와지브, 무스타합, 무바흐`,
  ta: `ஐந்து அஹ்காம், ஹலால், ஹராம், மக்ரூஹ், வாஜிப், முஸ்தஹப், முபாஹ்`,
  si: `පඤ්ච අහ්කාම්, හලාල්, හරාම්, මක්‍රූහ්, වාජිබ්, මුස්තහබ්බ්, මුබාහ්`,
};

const SUBTITLE: Record<string, string> = {
  en: `The five categories of legal ruling in Islam, what each means, the classical scholarly definitions, examples across worship and daily life, and how each was derived from Quran and Sunnah.`,
  ms: `Lima kategori hukum syariah dalam Islam, makna setiap satu, definisi ulama klasik, contoh dalam ibadah dan kehidupan seharian, dan bagaimana setiap diambil dari al-Quran dan Sunnah.`,
  tur: `İslam'da hukukî hükmün beş kategorisi, her birinin manası, klasik âlimlerin tarifleri, ibadetten günlük hayata örnekler ve her birinin Kur'an ve Sünnetten nasıl çıkarıldığı.`,
  urd: `اسلام میں شرعی حکم کی پانچ اقسام، ہر ایک کا معنیٰ، کلاسیکی علماء کی تعریفیں، عبادت اور روزمرہ زندگی سے مثالیں، اور ہر ایک کو قرآن و سنت سے کیسے اخذ کیا گیا۔`,
  ben: `ইসলামে শরীয়াহ বিধানের পাঁচটি বিভাগ, প্রতিটির অর্থ, ধ্রুপদী আলিমদের সংজ্ঞা, ইবাদত ও দৈনন্দিন জীবনের উদাহরণ, এবং প্রতিটি কীভাবে কুরআন ও সুন্নাহ থেকে গৃহীত।`,
  fas: `پنج دسته‌ی حکم شرعی در اسلام، معنای هر یک، تعریف علمای کلاسیک، نمونه‌هایی از عبادت و زندگی روزمره، و چگونگی استخراج هر یک از قرآن و سنت.`,
  zh: `伊斯兰教法定断之五类，各之意义、古典学者之定义、涵盖礼拜与日用之实例，以及各自如何自古兰与圣行导出。`,
  yue: `伊斯蘭教法定斷之五類，各之意義、古典學者之定義、涵蓋禮拜與日用之實例，以及各自如何自古蘭與聖行導出。`,
  ja: `イスラームの法的判断の五つの範疇，それぞれの意味、古典学者の定義、崇拝から日常生活までの具体例、そしてそれぞれがクルアーンとスンナからどのように導かれたか。`,
  ru: `Пять категорий правового заключения в Исламе, что означает каждое, определения классических учёных, примеры в поклонении и повседневной жизни, а также как каждое выведено из Корана и Сунны.`,
  es: `Las cinco categorías del fallo jurídico en el islam, qué significa cada una, las definiciones clásicas de los sabios, ejemplos en la adoración y la vida cotidiana, y cómo cada una se derivó del Corán y la Sunna.`,
  ko: `이슬람 법적 판단의 다섯 범주, 각각의 뜻, 고전 학자들의 정의, 예배와 일상생활의 예시, 그리고 각각이 꾸란과 순나로부터 어떻게 도출되었는지.`,
  ta: `இஸ்லாத்தில் சட்டப்பூர்வ தீர்ப்பின் ஐந்து பிரிவுகள், ஒவ்வொன்றின் அர்த்தம், செவ்வியல் அறிஞர்களின் வரையறைகள், வணக்கம் மற்றும் அன்றாட வாழ்க்கையின் எடுத்துக்காட்டுகள், மற்றும் ஒவ்வொன்றும் குர்ஆனிலிருந்தும் ஸுன்னாவிலிருந்தும் எப்படி பெறப்பட்டது.`,
  si: `ඉස්ලාමයේ නීතිමය තීරණයේ කාණ්ඩ පහ, ඒ එක් එක්කම අර්ථය, සම්භාව්‍ය විද්වතුන්ගේ අර්ථ දැක්වීම්, නමස්කාරය සහ දෛනික ජීවිතයෙන් උදාහරණ, සහ ඒ එක් එක්කම කුර්ආනයෙන් සහ සුන්නාවෙන් ලබාගත් ආකාරය.`,
};

interface HukmProps {
  arabic: string;
  translit: string;
  english: string;
  definition: string;
  reward: string;
  penalty: string;
  examples: string[];
  labelDoing: string;
  labelLeaving: string;
  labelExamples: string;
}

function HukmCard({ arabic, translit, english, definition, reward, penalty, examples, labelDoing, labelLeaving, labelExamples }: HukmProps) {
  return (
    <article className="card-islamic space-y-4">
      <div className="flex items-baseline justify-between gap-3 flex-wrap">
        <div>
          <p dir="rtl" lang="ar" className="arabic text-3xl text-gold leading-loose">{arabic}</p>
          <p className="text-forest/60 italic text-sm mt-1">{translit}</p>
        </div>
        <h3 className="font-garamond text-2xl font-semibold text-forest">{english}</h3>
      </div>
      <p className="text-forest/75 text-sm leading-relaxed">{definition}</p>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="bg-forest/5 rounded-xl p-3">
          <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{labelDoing}</p>
          <p className="text-forest/75 text-sm leading-relaxed">{reward}</p>
        </div>
        <div className="bg-forest/5 rounded-xl p-3">
          <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{labelLeaving}</p>
          <p className="text-forest/75 text-sm leading-relaxed">{penalty}</p>
        </div>
      </div>
      <div className="border-t border-gold/10 pt-3">
        <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{labelExamples}</p>
        <ul className="text-forest/70 text-sm space-y-1 list-disc list-inside">
          {examples.map((ex, i) => <li key={i}>{ex}</li>)}
        </ul>
      </div>
    </article>
  );
}

export function AhkamContent() {
  const { lang } = useLanguage();
  const tc = (key: AhkamContentKey): string => {
    const entry = AHKAM_CONTENT[key] as Record<string, string | undefined> | undefined;
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };

  const labelDoing = tc('label_doing');
  const labelLeaving = tc('label_leaving');
  const labelExamples = tc('label_examples');

  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="الأَحْكَامُ الخَمْسَة"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('frame_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('frame_p1')}</p>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('frame_p2')}</p>
          </article>
        </section>

        <HukmCard
          arabic="فَرْض / وَاجِب"
          translit={tc('fard_translit')}
          english={tc('fard_english')}
          definition={tc('fard_def')}
          reward={tc('fard_reward')}
          penalty={tc('fard_penalty')}
          examples={[tc('fard_ex_1'), tc('fard_ex_2'), tc('fard_ex_3'), tc('fard_ex_4'), tc('fard_ex_5')]}
          labelDoing={labelDoing}
          labelLeaving={labelLeaving}
          labelExamples={labelExamples}
        />

        <HukmCard
          arabic="مُسْتَحَبّ / مَنْدُوب / سُنَّة"
          translit={tc('must_translit')}
          english={tc('must_english')}
          definition={tc('must_def')}
          reward={tc('must_reward')}
          penalty={tc('must_penalty')}
          examples={[tc('must_ex_1'), tc('must_ex_2'), tc('must_ex_3'), tc('must_ex_4'), tc('must_ex_5')]}
          labelDoing={labelDoing}
          labelLeaving={labelLeaving}
          labelExamples={labelExamples}
        />

        <HukmCard
          arabic="مُبَاح / حَلَال"
          translit={tc('mubah_translit')}
          english={tc('mubah_english')}
          definition={tc('mubah_def')}
          reward={tc('mubah_reward')}
          penalty={tc('mubah_penalty')}
          examples={[tc('mubah_ex_1'), tc('mubah_ex_2'), tc('mubah_ex_3'), tc('mubah_ex_4')]}
          labelDoing={labelDoing}
          labelLeaving={labelLeaving}
          labelExamples={labelExamples}
        />

        <HukmCard
          arabic="مَكْرُوه"
          translit={tc('mak_translit')}
          english={tc('mak_english')}
          definition={tc('mak_def')}
          reward={tc('mak_reward')}
          penalty={tc('mak_penalty')}
          examples={[tc('mak_ex_1'), tc('mak_ex_2'), tc('mak_ex_3'), tc('mak_ex_4'), tc('mak_ex_5')]}
          labelDoing={labelDoing}
          labelLeaving={labelLeaving}
          labelExamples={labelExamples}
        />

        <HukmCard
          arabic="حَرَام"
          translit={tc('haram_translit')}
          english={tc('haram_english')}
          definition={tc('haram_def')}
          reward={tc('haram_reward')}
          penalty={tc('haram_penalty')}
          examples={[tc('haram_ex_1'), tc('haram_ex_2'), tc('haram_ex_3'), tc('haram_ex_4'), tc('haram_ex_5'), tc('haram_ex_6')]}
          labelDoing={labelDoing}
          labelLeaving={labelLeaving}
          labelExamples={labelExamples}
        />

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('sub_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('sub_intro')}</p>
            <ul className="text-forest/75 text-sm space-y-2 list-disc list-inside">
              <li>{tc('sub_1')}</li>
              <li>{tc('sub_2')}</li>
            </ul>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('wisdom_h')}</h2>
          <article className="card-forest rounded-2xl p-6 space-y-3">
            <p className="text-cream/85 text-sm leading-relaxed">{tc('wisdom_p1')}</p>
            <p className="text-cream/85 text-sm leading-relaxed">{tc('wisdom_p2')}</p>
            <p className="text-cream/80 text-sm leading-relaxed">{tc('wisdom_p3')}</p>
          </article>
        </section>
      </div>
    </>
  );
}
