'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { PROPHETIC_MEDICINE_CONTENT } from '@/lib/i18n/content/prophetic-medicine-content';
import type { PropheticMedicineContentKey } from '@/lib/i18n/content/prophetic-medicine-content';

const TITLE: Record<string, string> = {
  en: `al-Tibb al-Nabawi, The Prophetic Medicine`,
  ms: `al-Tibb al-Nabawi, Perubatan Nabawi`,
  tur: `et-Tıbb'ün-Nebevî, Peygamber Tıbbı`,
  urd: `الطب النبوی، نبوی طب`,
  ben: `আল-তিব্ব আন-নাবাউয়ি, নববী চিকিৎসা`,
  fas: `الطب النبوی، طب پیامبر`,
  zh: `先知医学，「提卜·纳巴维」`,
  yue: `先知醫學，「提卜·納巴維」`,
  ja: `預言者の医学，アッ＝ティッブ・アン＝ナバウィー`,
  ru: `ат-Тибб ан-Набави, Пророческая медицина`,
  es: `al-Tibb al-Nabawi, la medicina profética`,
  ko: `앗-티브 안나바위, 예언자의 의학`,
  ta: `அத்-திப் அன்-நபவீ, நபிமருத்துவம்`,
  si: `අත්-තිබ් අන්-නබවී, නබි වෛද්‍ය විද්‍යාව`,
};

const SUBTITLE: Record<string, string> = {
  en: `The prophetic tradition of healing, honey, black seed, dates, olive oil, siwak, hijamah (cupping), and the general principle of seeking treatment.`,
  ms: `Tradisi penyembuhan Nabi, madu, habbatussawda, kurma, minyak zaitun, siwak, hijamah (bekam), dan prinsip umum mencari rawatan.`,
  tur: `Peygamber tıbbı geleneği, bal, çörek otu, hurma, zeytinyağı, misvak, hacamat ve tedavi arama umum prensibi.`,
  urd: `نبی ﷺ کی روایتِ شفا، شہد، کلونجی، کھجور، زیتون کا تیل، مسواک، حجامہ (پچھنے)، اور علاج تلاش کرنے کا عمومی اصول۔`,
  ben: `নবী ﷺ-এর নিরাময়ের ঐতিহ্য, মধু, কালোজিরা, খেজুর, জলপাই তেল, মিসওয়াক, হিজামা (কাপিং), এবং চিকিৎসা অনুসন্ধানের সাধারণ নীতি।`,
  fas: `سنت شفای پیامبر ﷺ، عسل، سیاه‌دانه، خرما، روغن زیتون، مسواک، حجامت، و اصل کلی طلب درمان.`,
  zh: `先知 ﷺ 之疗愈传统，蜂蜜、黑籽、椰枣、橄榄油、司瓦克（洁齿枝）、拔罐，以及寻求治疗之通则。`,
  yue: `先知 ﷺ 之療癒傳統，蜂蜜、黑籽、椰棗、橄欖油、司瓦克（潔齒枝）、拔罐，以及尋求治療之通則。`,
  ja: `預言者 ﷺ の癒しの伝統，蜂蜜、黒種、ナツメヤシ、オリーブ油、シワーク（歯磨き枝）、ヒジャーマ（吸角療法）、および治療を求める一般原則。`,
  ru: `Пророческая традиция исцеления, мёд, чернушка, финики, оливковое масло, сивак, хиджама (кровопускание) и общий принцип обращения за лечением.`,
  es: `La tradición profética de la sanación, miel, semilla negra, dátiles, aceite de oliva, siwak, hijamah (ventosaterapia), y el principio general de buscar tratamiento.`,
  ko: `예언자 ﷺ 의 치유 전통, 꿀, 검은 씨, 대추야자, 올리브 오일, 시왁, 히자마(부항), 그리고 치료를 구하는 일반 원칙.`,
  ta: `நபி ﷺ அவர்களின் நோய்நீக்க பாரம்பரியம், தேன், கருஞ்சீரகம், பேரீச்சம்பழம், ஒலிவ எண்ணெய், சிவாக், ஹிஜாமா (குப்பியிடல்), மற்றும் சிகிச்சை தேடும் பொது கொள்கை.`,
  si: `නබි ﷺ තුමන්ගේ සුවපත් කිරීමේ සම්ප්‍රදාය, මී පැණි, කළු බීජ, රටඉඳි, ඔලිව් තෙල්, සිවාක්, හිජාමා (කුප්පි ප්‍රතිකාරය), සහ ප්‍රතිකාර සෙවීමේ පොදු මූලධර්මය.`,
};

const CURE_HADITH_AR = 'مَا أَنْزَلَ اللَّهُ دَاءً إِلَّا أَنْزَلَ لَهُ شِفَاءً، عَلِمَهُ مَنْ عَلِمَهُ، وَجَهِلَهُ مَنْ جَهِلَهُ.';
const HONEY_VERSE_AR = 'يَخْرُجُ مِن بُطُونِهَا شَرَابٌ مُّخْتَلِفٌ أَلْوَانُهُ فِيهِ شِفَاءٌ لِّلنَّاسِ.';
const BLACK_SEED_HADITH_AR = 'إِنَّ فِي الْحَبَّةِ السَّوْدَاءِ شِفَاءً مِنْ كُلِّ دَاءٍ إِلَّا السَّامَ.';

export function PropheticMedicineContent() {
  const { lang } = useLanguage();
  const tc = (key: PropheticMedicineContentKey): string => {
    const entry = PROPHETIC_MEDICINE_CONTENT[key] as Record<string, string | undefined> | undefined;
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="الطِّبُّ النَّبَوِيّ"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('found_h')}</h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={CURE_HADITH_AR} size="md" />
            <p className="text-forest/75 text-sm leading-relaxed">{tc('found_hadith_en')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('found_p')}</p>
            <p className="text-xs text-gold/60 italic">{tc('found_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('honey_h')}</h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={HONEY_VERSE_AR} size="md" />
            <p className="text-forest/70 text-sm italic">{tc('honey_verse_en')}</p>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('honey_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('honey_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('honey_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('black_h')}</h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={BLACK_SEED_HADITH_AR} size="md" />
            <p className="text-forest/75 text-sm leading-relaxed">{tc('black_hadith_en')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('black_p')}</p>
            <p className="text-xs text-gold/60 italic">{tc('black_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('dates_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('dates_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('dates_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('dates_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('olive_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('olive_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('olive_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('olive_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('siwak_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('siwak_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('siwak_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('siwak_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('hijamah_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('hijamah_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('hijamah_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('hijamah_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('talbina_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('talbina_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('talbina_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('talbina_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('ruqyah_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('ruqyah_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('ruqyah_p2')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('wisdom_h')}</h2>
          <article className="card-forest rounded-2xl p-6 space-y-3">
            <p className="text-cream/85 text-sm leading-relaxed">{tc('wisdom_p1')}</p>
            <p className="text-cream/85 text-sm leading-relaxed">{tc('wisdom_p2')}</p>
            <p className="text-cream/85 text-sm leading-relaxed">{tc('wisdom_p3')}</p>
            <p className="text-xs text-gold/70 italic">{tc('wisdom_source')}</p>
          </article>
        </section>
      </div>
    </>
  );
}
