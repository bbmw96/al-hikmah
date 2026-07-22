'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { DHABIHAH_CONTENT } from '@/lib/i18n/content/dhabihah-content';
import type { DhabihahContentKey } from '@/lib/i18n/content/dhabihah-content';

const TITLE: Record<string, string> = {
  en: `Dhabihah, Halal Slaughter and Permissible Meats`,
  ms: `Dhabihah, Sembelihan Halal dan Daging yang Halal`,
  tur: `Zebiha, Helâl Kesim ve Helâl Etler`,
  urd: `ذبیحہ، حلال ذبح اور جائز گوشت`,
  ben: `যবীহাহ, হালাল যবাই ও অনুমোদিত মাংস`,
  fas: `ذبیحه، ذبح حلال و گوشت‌های مجاز`,
  zh: `扎比哈，合法宰牲与许可之肉`,
  yue: `扎比哈，合法宰牲同許可之肉`,
  ja: `ザビーハ，ハラール屠畜と許された肉`,
  ru: `Забиха, халяльный забой и разрешённое мясо`,
  es: `Dhabihah, sacrificio halal y carnes permitidas`,
  ko: `자비하, 할랄 도축과 허용되는 육류`,
  ta: `தபீஹா, ஹலால் அறுத்தல் மற்றும் அனுமதிக்கப்பட்ட இறைச்சி`,
  si: `ඡබීහා, හලාල් කැපීම සහ අනුමත මස්`,
};

const SUBTITLE: Record<string, string> = {
  en: `How to render an animal halal to eat: the exact method of slaughter, the conditions on the slaughterer, the invocation of Allah's name, and which animals may or may not be eaten.`,
  ms: `Bagaimana menjadikan haiwan halal untuk dimakan: kaedah sembelihan yang tepat, syarat penyembelih, penyebutan nama Allah, dan haiwan yang boleh atau tidak boleh dimakan.`,
  tur: `Bir hayvanı helâl yapmanın yolu: kesimin usulü, kesenin şartları, Allah'ın isminin anılması ve hangi hayvanların yenilip yenilemeyeceği.`,
  urd: `کسی جانور کو کھانے کے لیے حلال کیسے بنایا جائے: ذبح کا صحیح طریقہ، ذبح کرنے والے پر شرائط، اللہ کے نام کا ذکر، اور کون سے جانور کھائے جا سکتے ہیں یا نہیں۔`,
  ben: `কীভাবে কোনো প্রাণীকে খাদ্যের জন্য হালাল করা যায়: যবাই এর সঠিক পদ্ধতি, যবাইকারীর শর্ত, আল্লাহর নাম উচ্চারণ, এবং কোন কোন প্রাণী খাওয়া যাবে বা যাবে না।`,
  fas: `چگونه یک حیوان را برای خوردن حلال کنیم: روش دقیق ذبح، شرایط ذبح‌کننده، ذکر نام خدا و اینکه چه حیواناتی خورده می‌شوند یا نه.`,
  zh: `如何使动物合法可食：宰牲之精确方法、宰者之条件、真主之名之诵念，以及何等动物可食或不可食。`,
  yue: `如何使動物合法可食：宰牲之精確方法、宰者之條件、真主之名之誦念，以及何等動物可食或不可食。`,
  ja: `動物を食用にハラールとする方法，屠畜の正確な手順、屠畜者の条件、アッラーの御名の唱念、そしてどの動物が食べられ、または食べられないか。`,
  ru: `Как сделать животное халяльным для употребления: точный метод забоя, условия к забойщику, произнесение имени Аллаха, и какие животные можно или нельзя есть.`,
  es: `Cómo hacer un animal halal para comer: el método exacto de sacrificio, las condiciones al sacrificador, la invocación del nombre de Al-lah, y qué animales pueden o no comerse.`,
  ko: `동물을 먹기 위해 할랄로 만드는 법: 정확한 도축 방식, 도축자의 조건, 알라의 이름 호명, 그리고 어떤 동물을 먹을 수 있고 없는지.`,
  ta: `ஒரு விலங்கை உண்பதற்கு ஹலால் ஆக்குவது எப்படி: அறுத்தலின் சரியான முறை, அறுக்கும் நபருக்கான நிபந்தனைகள், அல்லாஹ்வின் பெயர் உச்சரிப்பு, மற்றும் எந்த விலங்குகள் உண்ணத்தக்கவை அல்லது தகாதவை.`,
  si: `සතෙකු ආහාරයට හලාල් කරන ආකාරය: නිශ්චිත කැපීමේ ක්‍රමය, කපන්නා පිළිබඳ කොන්දේසි, අල්ලාහ්ගේ නාමය ප්‍රකාශ කිරීම, සහ කුමන සතුන් අනුභවයට යෝග්‍ය හෝ නොවේද.`,
};

const BISMILLAH_SLAUGHTER_AR = 'بِسْمِ اللَّهِ، وَاللَّهُ أَكْبَر.';
const BISMILLAH_SLAUGHTER_TR = 'Bismillah, wa Allahu Akbar.';
const BISMILLAH_SLAUGHTER_EN = 'In the name of Allah, and Allah is the Greatest.';

const IHSAN_HADITH_AR =
  'إِنَّ اللَّهَ كَتَبَ الْإِحْسَانَ عَلَى كُلِّ شَيْءٍ، فَإِذَا قَتَلْتُمْ فَأَحْسِنُوا الْقِتْلَةَ، وَإِذَا ذَبَحْتُمْ فَأَحْسِنُوا الذِّبْحَةَ، وَلْيُحِدَّ أَحَدُكُمْ شَفْرَتَهُ، وَلْيُرِحْ ذَبِيحَتَهُ.';

export function DhabihahContent() {
  const { lang } = useLanguage();
  const tc = (key: DhabihahContentKey): string => {
    const entry = DHABIHAH_CONTENT[key] as Record<string, string | undefined> | undefined;
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="الذَّبِيحَة"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        {/* Ihsan */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('ihsan_h')}</h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={IHSAN_HADITH_AR} size="md" />
            <p className="text-forest/75 text-sm leading-relaxed">{tc('ihsan_hadith_en')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('ihsan_p')}</p>
            <p className="text-xs text-gold/60 italic">{tc('ihsan_source')}</p>
          </article>
        </section>

        {/* Four Conditions */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('conditions_h')}</h2>
          <article className="card-islamic space-y-4">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('conditions_intro')}</p>

            <div className="border-t border-gold/10 pt-3">
              <p className="text-forest/75 text-sm font-medium mb-1"><strong>{tc('cond_1_label')}</strong></p>
              <p className="text-forest/70 text-sm leading-relaxed">{tc('cond_1_body')}</p>
            </div>

            <div className="border-t border-gold/10 pt-3">
              <p className="text-forest/75 text-sm font-medium mb-1"><strong>{tc('cond_2_label')}</strong></p>
              <p className="text-forest/70 text-sm leading-relaxed">{tc('cond_2_body')}</p>
              <p className="text-xs text-gold/60 italic mt-1">{tc('cond_2_source')}</p>
            </div>

            <div className="border-t border-gold/10 pt-3">
              <p className="text-forest/75 text-sm font-medium mb-1"><strong>{tc('cond_3_label')}</strong></p>
              <p className="text-forest/70 text-sm leading-relaxed">{tc('cond_3_body')}</p>
            </div>

            <div className="border-t border-gold/10 pt-3">
              <p className="text-forest/75 text-sm font-medium mb-1"><strong>{tc('cond_4_label')}</strong></p>
              <ArabicText text={BISMILLAH_SLAUGHTER_AR} size="md" />
              <p className="text-forest/60 italic text-sm mt-1">{BISMILLAH_SLAUGHTER_TR}</p>
              <p className="text-forest/70 text-sm leading-relaxed mt-2">{BISMILLAH_SLAUGHTER_EN}</p>
              <p className="text-forest/70 text-sm leading-relaxed mt-2">{tc('cond_4_body')}</p>
            </div>
          </article>
        </section>

        {/* Method */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('method_h')}</h2>
          <article className="card-islamic space-y-3">
            <ol className="text-forest/75 text-sm space-y-2 list-decimal list-inside">
              <li>{tc('method_step_1')}</li>
              <li>{tc('method_step_2')}</li>
              <li>{tc('method_step_3')}</li>
              <li>{tc('method_step_4')}</li>
              <li>{tc('method_step_5')}</li>
              <li>{tc('method_step_6')}</li>
            </ol>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('method_umar_p')}</p>
          </article>
        </section>

        {/* Animals */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('animals_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed"><strong>{tc('animals_forbidden_intro')}</strong></p>
            <ul className="text-forest/70 text-sm space-y-1 list-disc list-inside">
              <li>{tc('animals_pork')}</li>
              <li>{tc('animals_blood')}</li>
              <li>{tc('animals_carrion')}</li>
              <li>{tc('animals_altar')}</li>
              <li>{tc('animals_fanged')}</li>
              <li>{tc('animals_taloned')}</li>
              <li>{tc('animals_donkey')}</li>
              <li>{tc('animals_creatures')}</li>
            </ul>
            <p className="text-forest/70 text-sm leading-relaxed pt-2">{tc('animals_permitted_p')}</p>
          </article>
        </section>

        {/* Fish */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('fish_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('fish_hadith')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('fish_p')}</p>
            <p className="text-xs text-gold/60 italic">{tc('fish_source')}</p>
          </article>
        </section>

        {/* Hunting */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('hunting_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('hunting_intro')}</p>
            <ul className="text-forest/70 text-sm space-y-1 list-disc list-inside">
              <li>{tc('hunting_c_1')}</li>
              <li>{tc('hunting_c_2')}</li>
              <li>{tc('hunting_c_3')}</li>
              <li>{tc('hunting_c_4')}</li>
            </ul>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('hunting_verse')}</p>
          </article>
        </section>

        {/* Mechanical */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('mech_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('mech_intro')}</p>
            <ul className="text-forest/70 text-sm space-y-1 list-disc list-inside">
              <li>{tc('mech_c_1')}</li>
              <li>{tc('mech_c_2')}</li>
              <li>{tc('mech_c_3')}</li>
              <li>{tc('mech_c_4')}</li>
            </ul>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('mech_certification')}</p>
          </article>
        </section>

        {/* Qurbani */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('qurbani_h')}</h2>
          <article className="card-forest rounded-2xl p-6 space-y-3">
            <p className="text-cream/85 text-sm leading-relaxed">{tc('qurbani_p1')}</p>
            <p className="text-cream/85 text-sm leading-relaxed">{tc('qurbani_p2')}</p>
            <p className="text-cream/85 text-sm leading-relaxed">{tc('qurbani_p3')}</p>
            <p className="text-xs text-gold/70 italic">{tc('qurbani_source')}</p>
          </article>
        </section>
      </div>
    </>
  );
}
