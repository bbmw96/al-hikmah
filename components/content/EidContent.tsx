'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { EID_CONTENT } from '@/lib/i18n/content/eid-content';
import type { EidContentKey } from '@/lib/i18n/content/eid-content';

function useEid() {
  const { lang } = useLanguage();
  return (key: EidContentKey): string => {
    const entry = EID_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry['en'] ?? key;
  };
}

const COMPARISON = [
  { aspect: 'row1_aspect', fitr: 'row1_fitr', adha: 'row1_adha' },
  { aspect: 'row2_aspect', fitr: 'row2_fitr', adha: 'row2_adha' },
  { aspect: 'row3_aspect', fitr: 'row3_fitr', adha: 'row3_adha' },
  { aspect: 'row4_aspect', fitr: 'row4_fitr', adha: 'row4_adha' },
] as const;

const STEPS = [
  { n: 1, name: 'step1_name', detail: 'step1_detail' },
  { n: 2, name: 'step2_name', detail: 'step2_detail' },
  { n: 3, name: 'step3_name', detail: 'step3_detail' },
  { n: 4, name: 'step4_name', detail: 'step4_detail' },
  { n: 5, name: 'step5_name', detail: 'step5_detail' },
  { n: 6, name: 'step6_name', detail: 'step6_detail' },
] as const;

const RULES = [
  { name: 'rule1_name', detail: 'rule1_detail' },
  { name: 'rule2_name', detail: 'rule2_detail' },
  { name: 'rule3_name', detail: 'rule3_detail' },
  { name: 'rule4_name', detail: 'rule4_detail' },
  { name: 'rule5_name', detail: 'rule5_detail' },
] as const;

const ETIQUETTES: EidContentKey[] = ['etiq1', 'etiq2', 'etiq3', 'etiq4', 'etiq5', 'etiq6', 'etiq7', 'etiq8'];

export function EidContent() {
  const tc = useEid();

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="العِيدَان"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

        {/* Introduction */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('s1_heading')}
          </h2>
          <div className="card-forest rounded-2xl p-8 mb-6">
            <ArabicText
              text="قَدِمَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ الْمَدِينَةَ وَلَهُمْ يَوْمَانِ يَلْعَبُونَ فِيهِمَا فَقَالَ مَا هَذَانِ الْيَوْمَانِ قَالُوا كُنَّا نَلْعَبُ فِيهِمَا فِي الْجَاهِلِيَّةِ فَقَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِنَّ اللَّهَ قَدْ أَبْدَلَكُمْ بِهِمَا خَيْرًا مِنْهُمَا يَوْمَ الأَضْحَى وَيَوْمَ الْفِطْرِ"
              size="sm"
            />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">
              {tc('s1_hadith_en')}
            </p>
          </div>
          <p className="text-forest/70 leading-relaxed text-sm">
            {tc('s1_intro')}
          </p>
        </section>

        {/* Comparison table */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            {tc('s2_heading')}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gold/20">
                  <th className="text-left py-3 px-4 text-forest/50 text-xs font-semibold uppercase tracking-wide">{tc('col_aspect')}</th>
                  <th className="text-left py-3 px-4 text-forest text-sm font-garamond font-semibold">
                    {tc('col_fitr')}
                    <span className="block arabic-sm text-gold/60" dir="rtl" lang="ar">عيد الفطر</span>
                  </th>
                  <th className="text-left py-3 px-4 text-forest text-sm font-garamond font-semibold">
                    {tc('col_adha')}
                    <span className="block arabic-sm text-gold/60" dir="rtl" lang="ar">عيد الأضحى</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(row => (
                  <tr key={row.aspect} className="border-b border-gold/10">
                    <td className="py-3 px-4 text-forest/50 text-xs font-semibold">{tc(row.aspect)}</td>
                    <td className="py-3 px-4 text-forest/70 text-sm leading-relaxed">{tc(row.fitr)}</td>
                    <td className="py-3 px-4 text-forest/70 text-sm leading-relaxed">{tc(row.adha)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Prayer structure */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('s3_heading')}
          </h2>
          <div className="gold-border-left pl-5 mb-8">
            <p className="text-forest/70 text-sm leading-relaxed">
              {tc('s3_intro')}
            </p>
          </div>
          <div className="space-y-4">
            {STEPS.map(step => (
              <div key={step.n} className="card-islamic flex gap-4">
                <span className="w-8 h-8 rounded-full bg-forest text-cream text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-garamond text-base font-semibold text-forest mb-1">{tc(step.name)}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{tc(step.detail)}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Takbeer */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('s4_heading')}
          </h2>
          <div className="card-forest rounded-2xl p-8 mb-6">
            <ArabicText
              text="اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ"
              size="md"
            />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">
              {tc('s4_takbeer_en')}
            </p>
          </div>
          <p className="text-forest/70 text-sm leading-relaxed">
            {tc('s4_body')}
          </p>
        </section>

        {/* Zakat al-Fitr */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('s5_heading')}
          </h2>
          <div className="card-islamic mb-5">
            <p className="text-forest/70 text-sm leading-relaxed mb-3">
              {tc('s5_para1')}
            </p>
            <div className="gold-border-left pl-5">
              <p className="text-forest/70 text-sm leading-relaxed italic">
                {tc('s5_hadith')}
              </p>
            </div>
          </div>
        </section>

        {/* Qurbani */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('s6_heading')}
          </h2>
          <p className="text-forest/70 text-sm leading-relaxed mb-5">
            {tc('s6_intro')}
          </p>
          <div className="card-gold rounded-2xl p-8 mb-8">
            <ArabicText
              text="فَصَلِّ لِرَبِّكَ وَانْحَرْ"
              size="lg"
            />
            <p className="text-forest/70 text-sm mt-4 leading-relaxed">
              {tc('s6_verse_en')}
            </p>
          </div>
          <div className="space-y-4">
            {RULES.map(r => (
              <div key={r.name} className="card-islamic">
                <h3 className="font-garamond text-base font-semibold text-forest mb-1">{tc(r.name)}</h3>
                <p className="text-forest/60 text-sm leading-relaxed">{tc(r.detail)}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Etiquettes of Eid */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('s7_heading')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {ETIQUETTES.map(item => (
              <div key={item} className="card-islamic flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-forest/70 text-sm leading-relaxed">{tc(item)}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
