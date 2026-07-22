'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { PROHIBITED_CLOTHING_CONTENT } from '@/lib/i18n/content/prohibited-clothing-content';
import type { ProhibitedClothingContentKey } from '@/lib/i18n/content/prohibited-clothing-content';

const TITLE: Record<string, string> = {
  en: `Prohibited Materials and Colours in Clothing`,
  ms: `Bahan dan Warna Pakaian yang Dilarang`,
  tur: `Giyimde Yasaklanan Kumaş ve Renkler`,
  urd: `لباس میں ممنوعہ مواد اور رنگ`,
  ben: `পোশাকে নিষিদ্ধ উপাদান ও রঙ`,
  fas: `مواد و رنگ‌های ممنوع در لباس`,
  zh: `服饰中禁用之材质与颜色`,
  yue: `服飾中禁用之材質同顏色`,
  ja: `衣服における禁じられた素材と色`,
  ru: `Запретные материалы и цвета в одежде`,
  es: `Materiales y colores prohibidos en el vestir`,
  ko: `의복에서 금지된 재질과 색`,
  ta: `ஆடையில் தடைசெய்யப்பட்ட பொருட்கள் மற்றும் வண்ணங்கள்`,
  si: `ඇඳුමේ තහනම් ද්‍රව්‍ය සහ වර්ණ`,
};

const SUBTITLE: Record<string, string> = {
  en: `Silk for men, gold jewellery for men, garments of pride, imitation of the opposite gender, and the pure red garment, the specific hadith prohibitions and the wisdom behind each.`,
  ms: `Sutera bagi lelaki, barangan emas bagi lelaki, pakaian kesombongan, meniru jantina yang bertentangan, dan pakaian merah tulen, larangan hadis yang khusus dan hikmah di sebalik setiap satu.`,
  tur: `Erkeğe ipek, erkeğe altın takı, kibir elbiseleri, karşı cinse benzeme ve safi kırmızı giysi, hususi hadis yasakları ve her birinin ardındaki hikmet.`,
  urd: `مرد کے لیے ریشم، مرد کے لیے سونے کے زیورات، تکبر کے کپڑے، مخالف جنس کی نقل، اور خالص سرخ لباس، مخصوص حدیثی ممانعت اور ہر ایک کے پیچھے حکمت۔`,
  ben: `পুরুষের জন্য রেশম, পুরুষের জন্য স্বর্ণালঙ্কার, অহংকারের পোশাক, বিপরীত লিঙ্গের অনুকরণ, এবং খাঁটি লাল পোশাক, নির্দিষ্ট হাদিসের নিষেধাজ্ঞা এবং প্রত্যেকটির পিছনের হিকমাহ।`,
  fas: `ابریشم برای مردان، طلا برای مردان، جامه‌ی تکبر، شبیه‌سازی به جنس مخالف، و جامه‌ی سرخ خالص، نهی‌های خاص حدیث و حکمت پشت هر یک.`,
  zh: `男子丝绸、男子金饰、骄矜之衣、模仿异性、纯红衣裳，具体之圣训禁令及各之背后智慧。`,
  yue: `男子絲綢、男子金飾、驕矜之衣、模仿異性、純紅衣裳，具體之聖訓禁令及各之背後智慧。`,
  ja: `男性の絹、男性の金の装身具、傲慢の衣、異性の模倣、純赤の衣，それぞれのハディースによる禁止と、その背後にある叡智。`,
  ru: `Шёлк для мужчин, золото для мужчин, одежды гордыни, подражание противоположному полу и чисто-красная одежда, конкретные хадисные запреты и мудрость каждого.`,
  es: `Seda para el varón, joyas de oro para el varón, prendas de soberbia, imitación del sexo opuesto y la prenda de rojo puro, las prohibiciones específicas de los hadices y la sabiduría de cada una.`,
  ko: `남성의 비단, 남성의 금 장신구, 오만의 옷, 이성 모방, 순수 붉은 옷, 구체적인 하디스 금지와 그 배후의 지혜.`,
  ta: `ஆண்களுக்கு பட்டு, ஆண்களுக்கு தங்க நகைகள், ஆடம்பரமான ஆடைகள், எதிர் பாலினத்தைப் போலியாய் அமைத்தல், மற்றும் தூய சிவப்பு ஆடை, குறிப்பிட்ட ஹதீஸ் தடைகள் மற்றும் ஒவ்வொன்றின் பின்னாலுள்ள ஞானம்.`,
  si: `පිරිමින්ට සිල්ක්, පිරිමින්ට රන් ආභරණ, ආඩම්බර ඇඳුම්, විරුද්ධ ලිංගිකත්වයට අනුකරණය, සහ පිරිසිදු රතු ඇඳුම, නිශ්චිත හදීස් තහනම් සහ ඒ එක් එක් පිටුපස ඇති ප්‍රඥාව.`,
};

const SILK_GOLD_HADITH_AR = 'هَذَانِ حَرَامٌ عَلَى ذُكُورِ أُمَّتِي، حِلٌّ لِإِنَاثِهَا.';
const IMITATION_HADITH_AR = 'لَعَنَ رَسُولُ اللَّهِ ﷺ الْمُتَشَبِّهِينَ مِنَ الرِّجَالِ بِالنِّسَاءِ، وَالْمُتَشَبِّهَاتِ مِنَ النِّسَاءِ بِالرِّجَالِ.';

export function ProhibitedClothingContent() {
  const { lang } = useLanguage();
  const tc = (key: ProhibitedClothingContentKey): string => {
    const entry = PROHIBITED_CLOTHING_CONTENT[key] as Record<string, string | undefined> | undefined;
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="المُحَرَّمَاتُ فِي اللِّبَاس"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        {/* Framing */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('framing_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('framing_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">
              {tc('framing_p2_pre')} <a href="/clothing-etiquette" className="text-gold underline">{tc('framing_p2_link')}</a> {tc('framing_p2_post')}
            </p>
          </article>
        </section>

        {/* Silk & gold */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('silk_h')}</h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={SILK_GOLD_HADITH_AR} size="md" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('label_transliteration')}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{tc('silk_translit')}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">{tc('label_meaning')}</p>
              <p className="text-forest/75 text-sm leading-relaxed">{tc('silk_meaning')}</p>
            </div>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('silk_p')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('silk_concessions_intro')}</p>
            <ul className="text-forest/70 text-sm space-y-1 list-disc list-inside">
              <li>{tc('silk_c_1')}</li>
              <li>{tc('silk_c_2')}</li>
              <li>{tc('silk_c_3')}</li>
              <li>{tc('silk_c_4')}</li>
            </ul>
            <p className="text-xs text-gold/60 italic">{tc('silk_source')}</p>
          </article>
        </section>

        {/* Gender imitation */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('gender_h')}</h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={IMITATION_HADITH_AR} size="md" />
            <p className="text-forest/75 text-sm leading-relaxed">{tc('gender_p_translit_body')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('gender_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('gender_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('gender_source')}</p>
          </article>
        </section>

        {/* Red */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('red_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('red_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('red_reconciliation_intro')}</p>
            <ul className="text-forest/70 text-sm space-y-1 list-disc list-inside">
              <li>{tc('red_r_1')}</li>
              <li>{tc('red_r_2')}</li>
              <li>{tc('red_r_3')}</li>
            </ul>
            <p className="text-xs text-gold/60 italic">{tc('red_source')}</p>
          </article>
        </section>

        {/* Isbal */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('isbal_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('isbal_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('isbal_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('isbal_source')}</p>
          </article>
        </section>

        {/* Disbelievers */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('kuffar_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('kuffar_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('kuffar_p2')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('kuffar_p3')}</p>
            <p className="text-xs text-gold/60 italic">{tc('kuffar_source')}</p>
          </article>
        </section>

        {/* Wisdom */}
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
          </article>
        </section>
      </div>
    </>
  );
}
