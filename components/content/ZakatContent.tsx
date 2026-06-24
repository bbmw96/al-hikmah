'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { ZAKAT_CONTENT } from '@/lib/i18n/content/zakat-content';
import type { ZakatContentKey } from '@/lib/i18n/content/zakat-content';

function useZakat() {
  const { lang } = useLanguage();
  return (key: ZakatContentKey): string => {
    const entry = ZAKAT_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry['en'] ?? key;
  };
}

const CONDITIONS = [
  { titleKey: 'c_muslim_t', detailKey: 'c_muslim_d' },
  { titleKey: 'c_adult_t', detailKey: 'c_adult_d' },
  { titleKey: 'c_free_t', detailKey: 'c_free_d' },
  { titleKey: 'c_nisab_t', detailKey: 'c_nisab_d' },
  { titleKey: 'c_hawl_t', detailKey: 'c_hawl_d' },
  { titleKey: 'c_own_t', detailKey: 'c_own_d' },
] as const;

const ASSETS = [
  { arabic: 'الذهب والفضة', catKey: 'a_gold_c', detailKey: 'a_gold_d' },
  { arabic: 'النقود والمدخرات', catKey: 'a_cash_c', detailKey: 'a_cash_d' },
  { arabic: 'عروض التجارة', catKey: 'a_trade_c', detailKey: 'a_trade_d' },
  { arabic: 'الأنعام', catKey: 'a_live_c', detailKey: 'a_live_d' },
  { arabic: 'الزروع والثمار', catKey: 'a_agri_c', detailKey: 'a_agri_d' },
  { arabic: 'الأسهم والاستثمارات', catKey: 'a_biz_c', detailKey: 'a_biz_d' },
] as const;

const RECIPIENTS = [
  { n: 1, arabic: 'الْفُقَرَاء', nameKey: 'r1_name', bodyKey: 'r1_body' },
  { n: 2, arabic: 'الْمَسَاكِين', nameKey: 'r2_name', bodyKey: 'r2_body' },
  { n: 3, arabic: 'الْعَامِلِينَ عَلَيْهَا', nameKey: 'r3_name', bodyKey: 'r3_body' },
  { n: 4, arabic: 'الْمُؤَلَّفَةِ قُلُوبُهُمْ', nameKey: 'r4_name', bodyKey: 'r4_body' },
  { n: 5, arabic: 'وَفِي الرِّقَابِ', nameKey: 'r5_name', bodyKey: 'r5_body' },
  { n: 6, arabic: 'الْغَارِمِينَ', nameKey: 'r6_name', bodyKey: 'r6_body' },
  { n: 7, arabic: 'وَفِي سَبِيلِ اللَّهِ', nameKey: 'r7_name', bodyKey: 'r7_body' },
  { n: 8, arabic: 'ابْنِ السَّبِيلِ', nameKey: 'r8_name', bodyKey: 'r8_body' },
] as const;

export function ZakatContent() {
  const tc = useZakat();

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="الزَّكَاة"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

        {/* Quranic basis */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            {tc('s1_h')}
          </h2>
          <div className="card-forest rounded-2xl p-8 mb-6">
            <ArabicText
              text="وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ"
              size="lg"
            />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">
              {tc('s1_verse')}
            </p>
          </div>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">
            {tc('s1_p1')}
          </p>
          <p className="text-forest/70 leading-relaxed text-sm">
            {tc('s1_p2')}
          </p>
        </section>

        {/* Who must pay */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            {tc('s2_h')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {CONDITIONS.map(item => (
              <div key={item.titleKey} className="card-islamic">
                <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{tc(item.titleKey)}</h3>
                <p className="text-forest/60 text-sm leading-relaxed">{tc(item.detailKey)}</p>
              </div>
            ))}
          </div>
          <div className="gold-border-left pl-5">
            <p className="text-forest/70 text-sm leading-relaxed">
              {tc('s2_nisab')}
            </p>
          </div>
        </section>

        {/* Zakatable assets */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            {tc('s3_h')}
          </h2>
          <div className="space-y-4">
            {ASSETS.map(asset => (
              <div key={asset.catKey} className="card-islamic flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <ArabicText text={asset.arabic} size="sm" />
                </div>
                <div>
                  <h3 className="font-garamond text-lg font-semibold text-forest mb-1">{tc(asset.catKey)}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{tc(asset.detailKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Eight recipients */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('s4_h')}
          </h2>
          <div className="card-forest rounded-2xl p-8 mb-8">
            <ArabicText
              text="إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللَّهِ وَابْنِ السَّبِيلِ فَرِيضَةً مِّنَ اللَّهِ"
              size="md"
            />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">
              {tc('s4_verse')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RECIPIENTS.map(r => (
              <div key={r.n} className="card-islamic flex gap-4">
                <span className="w-8 h-8 rounded-full bg-gold/15 text-gold text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-1">
                  {r.n}
                </span>
                <div>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="arabic-sm text-gold mb-1.5"
                    aria-hidden="true"
                  >
                    {r.arabic}
                  </p>
                  <h3 className="font-garamond text-base font-semibold text-forest mb-1">{tc(r.nameKey)}</h3>
                  <p className="text-forest/60 text-xs leading-relaxed">{tc(r.bodyKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Zakat al-Fitr */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('s5_h')}
          </h2>
          <div className="card-islamic">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <ArabicText text="زَكَاةُ الْفِطْرِ" size="md" />
              </div>
              <div>
                <p className="text-forest/70 text-sm leading-relaxed mb-3">
                  {tc('s5_p1')}
                </p>
                <p className="text-forest/70 text-sm leading-relaxed mb-3">
                  {tc('s5_p2')}
                </p>
                <p className="text-forest/70 text-sm leading-relaxed">
                  {tc('s5_p3')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Spiritual dimension */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('s6_h')}
          </h2>
          <div className="space-y-4 mb-8">
            <p className="text-forest/70 leading-relaxed text-sm">
              {tc('s6_p1')}
            </p>
            <p className="text-forest/70 leading-relaxed text-sm">
              {tc('s6_p2')}
            </p>
            <p className="text-forest/70 leading-relaxed text-sm">
              {tc('s6_p3')}
            </p>
          </div>
          <div className="card-gold rounded-2xl p-8">
            <ArabicText
              text="خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا وَصَلِّ عَلَيْهِمْ إِنَّ صَلَاتَكَ سَكَنٌ لَّهُمْ"
              size="md"
            />
            <p className="text-forest/70 text-sm mt-4 leading-relaxed">
              {tc('s6_verse')}
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
