'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { CLOTHING_CONTENT } from '@/lib/i18n/content/clothing-etiquette-content';
import type { ClothingContentKey } from '@/lib/i18n/content/clothing-etiquette-content';

const TITLE: Record<string, string> = {
  en: `Adab al-Libas, The Etiquettes of Clothing`,
  ms: `Adab al-Libas, Adab Berpakaian`,
  tur: `Âdâbü'l-Libâs, Giyim Âdâbı`,
  urd: `آدابِ لباس، لباس کے آداب`,
  ben: `আদাব আল-লিবাস, পোশাকের আদব`,
  fas: `آداب اللباس، آداب پوشش`,
  zh: `衣着之礼节，「阿达布·利巴斯」`,
  yue: `衣著之禮節，「阿達布·利巴斯」`,
  ja: `衣服の作法，アダーブ・アル＝リバース`,
  ru: `Этикет одежды, Адаб аль-Либас`,
  es: `Adab al-Libas, la etiqueta del vestir`,
  ko: `의복의 예절, 아다브 알리바스`,
  ta: `ஆதாப் அல்-லிபாஸ், ஆடை ஒழுக்கம்`,
  si: `අදාබ් අල්-ලිබාස්, ඇඳුම් සිරිත්`,
};

const SUBTITLE: Record<string, string> = {
  en: `The Sunnah of dress: how to put on clothes, the du'a for a new garment, the ruling on isbal, the awrah, and the wisdom of covering.`,
  ms: `Sunnah berpakaian: bagaimana memakai pakaian, doa untuk pakaian baru, hukum isbal, aurat, dan hikmah menutup diri.`,
  tur: `Giyim Sünneti: giyim usulü, yeni bir elbise için duâ, isbâl hükmü, avret ve örtünmenin hikmeti.`,
  urd: `لباس کی سنت: کپڑے کیسے پہنیں، نئے لباس کی دعا، اسبال کا حکم، ستر، اور ڈھانپنے کی حکمت۔`,
  ben: `পোশাকের সুন্নাহ: কীভাবে পোশাক পরবেন, নতুন কাপড়ের দোয়া, ইসবালের বিধান, সতর, এবং আবরণের হিকমাহ।`,
  fas: `سنت پوشش: چگونه لباس بپوشیم، دعای لباس نو، حکم اسبال، عورت، و حکمت پوشیدگی.`,
  zh: `衣着之圣行：如何着衣、新衣之祷、伊斯巴勒之判决、羞体（阿乌拉）与遮盖之智慧。`,
  yue: `衣著之聖行：如何著衣、新衣之禱、伊斯巴勒之判決、羞體（阿烏拉）與遮蓋之智慧。`,
  ja: `衣服のスンナ：着方、新しい衣服のための祈願、イスバールの規定、アウラー、そして覆いの叡智。`,
  ru: `Сунна одежды: как надевать, дуа для новой одежды, правило исбал, аврат и мудрость покрытия.`,
  es: `La Sunna del vestir: cómo ponerse la ropa, la du'a para una prenda nueva, el fallo sobre el isbal, la awrah y la sabiduría de cubrirse.`,
  ko: `의복의 순나: 옷 입는 법, 새 옷을 위한 두아, 이스발 규정, 아우라, 그리고 가림의 지혜.`,
  ta: `ஆடையின் ஸுன்னா: ஆடை அணியும் விதம், புதிய ஆடைக்கான பிரார்த்தனை, இஸ்பால் தீர்ப்பு, ஔரா, மற்றும் மறைப்பின் ஞானம்.`,
  si: `ඇඳුමේ සුන්නාව: ඇඳුම් ඇඳගැනීමේ ක්‍රමය, නව ඇඳුම් සඳහා දුආව, ඉස්බාල් නීතිය, ඖරා, සහ ආවරණයේ ප්‍රඥාව.`,
};

const NEW_CLOTHES_DUA_AR = 'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ.';

export function ClothingEtiquetteContent() {
  const { lang } = useLanguage();
  const tc = (key: ClothingContentKey): string => {
    const entry = CLOTHING_CONTENT[key] as Record<string, string | undefined> | undefined;
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="آدَابُ اللِّبَاس"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('awrah_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('awrah_p1')}</p>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('awrah_p2')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('awrah_p3')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('right_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('right_p1')}</p>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('right_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('right_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('newg_h')}</h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={NEW_CLOTHES_DUA_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('label_transliteration')}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{tc('newg_translit')}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">{tc('label_meaning')}</p>
              <p className="text-forest/75 text-sm leading-relaxed">{tc('newg_meaning')}</p>
            </div>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('newg_p')}</p>
            <p className="text-xs text-gold/60 italic">{tc('newg_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('white_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('white_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('white_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('white_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('isbal_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('isbal_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('isbal_p2')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('isbal_p3')}</p>
            <p className="text-xs text-gold/60 italic">{tc('isbal_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('narrog_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('narrog_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('narrog_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('narrog_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('ihram_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('ihram_p1')}</p>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('ihram_p2')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('ihram_p3')}</p>
            <p className="text-xs text-gold/60 italic">{tc('ihram_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('wisdom_h')}</h2>
          <article className="card-forest rounded-2xl p-6 space-y-3">
            <p className="text-cream/85 text-sm leading-relaxed">{tc('wisdom_p1')}</p>
            <p className="text-cream/85 text-sm leading-relaxed">
              {tc('wisdom_p2_pre')} <a href="/prohibited-clothing" className="text-gold underline">{tc('wisdom_p2_link_prohibited')}</a>{tc('wisdom_p2_post')}
            </p>
            <p className="text-cream/85 text-sm leading-relaxed">
              {tc('wisdom_p3_pre')} <a href="/prohibited-clothing" className="text-gold underline">{tc('wisdom_p3_link')}</a> {tc('wisdom_p3_post')}
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
