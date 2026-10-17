'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { FIQH_CONTENT, type FiqhContentKey } from '@/lib/i18n/content/fiqh-content';

const FIVE_AHKAM = [
  {
    n: 1,
    arabic: 'الفَرْض / الوَاجِب',
    name: 'Fard / Wajib',
    colour: 'border-forest',
    subs: 2,
  },
  {
    n: 2,
    arabic: 'السُّنَّة / الْمُسْتَحَبّ / الْمَنْدُوب',
    name: 'Sunnah / Mustahabb / Mandub',
    colour: 'border-gold',
    subs: 3,
  },
  {
    n: 3,
    arabic: 'الْمُبَاح',
    name: 'Mubah',
    colour: 'border-midnight/30',
    subs: 0,
  },
  {
    n: 4,
    arabic: 'الْمَكْرُوه',
    name: 'Makruh',
    colour: 'border-amber-700/40',
    subs: 0,
  },
  {
    n: 5,
    arabic: 'الْحَرَام',
    name: 'Haram',
    colour: 'border-red-700/50',
    subs: 0,
  },
] as const;

const SOURCES = [
  { n: 1, arabic: 'الْقُرْآن الْكَرِيم' },
  { n: 2, arabic: 'السُّنَّة النَّبَوِيَّة' },
  { n: 3, arabic: 'الإجْمَاع' },
  { n: 4, arabic: 'القِيَاس' },
] as const;

const MADHABS = [
  { n: 1, arabic: 'الحَنَفِيَّة', name: 'Hanafi' },
  { n: 2, arabic: 'الْمَالِكِيَّة', name: 'Maliki' },
  { n: 3, arabic: 'الشَّافِعِيَّة', name: "Shafi'i" },
  { n: 4, arabic: 'الحَنَابِلَة', name: 'Hanbali' },
] as const;

export function FiqhContent() {
  const { lang } = useLanguage();
  const tc = (k: string): string => {
    const entry = FIQH_CONTENT[k as FiqhContentKey] as Record<string, string | undefined> | undefined;
    if (!entry) return k;
    return entry[lang] ?? entry.en ?? k;
  };

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="الفِقْه"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* ── Introduction ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            {tc('what_is_fiqh_heading')}
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold-deep mb-4">
            تعريف الفقه
          </p>
          <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('fiqh_intro')}</p>
          </div>
        </section>

        {/* ── Five Ahkam ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            {tc('five_ahkam_heading')}
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold-deep mb-6">
            الأحكام الشرعية الخمسة
          </p>
          <div className="space-y-8">
            {FIVE_AHKAM.map(ahkam => {
              const p = `ahkam${ahkam.n}_`;
              return (
                <article key={ahkam.n} className={`card-islamic border-l-4 ${ahkam.colour}`}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center flex-shrink-0 ring-2 ring-gold/30">
                      <span className="text-gold font-semibold text-sm">{ahkam.n}</span>
                    </div>
                    <div>
                      <p dir="rtl" lang="ar" className="arabic-sm text-gold-deep mb-1">
                        {ahkam.arabic}
                      </p>
                      <h3 className="font-garamond text-xl font-semibold text-forest">{ahkam.name}</h3>
                      <span className="badge-gold text-xs mt-1 inline-block">{tc(`${p}subtitle`)}</span>
                    </div>
                  </div>

                  <p className="text-forest/80 text-sm leading-relaxed font-medium mb-3">{tc(`${p}definition`)}</p>
                  <p className="text-forest/70 text-sm leading-relaxed mb-4 whitespace-pre-line">{tc(`${p}detail`)}</p>

                  {ahkam.subs > 0 && (
                    <div className="space-y-3 mb-4">
                      {Array.from({ length: ahkam.subs }, (_, i) => i + 1).map(s => (
                        <div key={s} className="bg-forest/5 rounded-xl p-3">
                          <p className="font-medium text-forest text-sm mb-1">{tc(`${p}sub${s}_name`)}</p>
                          <p className="text-forest/70 text-xs leading-relaxed">{tc(`${p}sub${s}_desc`)}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div>
                    <p className="text-xs text-gold-deep uppercase tracking-wider font-medium mb-2">{tc('examples_label')}</p>
                    <div className="flex flex-wrap gap-2">
                      {tc(`${p}examples`).split('|').map((ex, i) => (
                        <span key={i} className="bg-gold/10 border border-gold/20 text-forest/70 text-xs px-2.5 py-1 rounded-full">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* ── Fard vs Wajib note ── */}
        <section className="card-islamic bg-forest/5">
          <h2 className="font-garamond text-xl font-semibold text-forest mb-3">
            {tc('fard_wajib_heading')}
          </h2>
          <p className="text-forest/70 text-sm leading-relaxed mb-3">
            {tc('fard_wajib_intro')}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-forest/5 rounded-xl p-3">
              <p className="font-medium text-forest text-sm mb-1">{tc('fard_wajib_fard_label')}</p>
              <p className="text-forest/70 text-xs leading-relaxed">{tc('fard_wajib_fard_desc')}</p>
            </div>
            <div className="bg-forest/5 rounded-xl p-3">
              <p className="font-medium text-forest text-sm mb-1">{tc('fard_wajib_wajib_label')}</p>
              <p className="text-forest/70 text-xs leading-relaxed">{tc('fard_wajib_wajib_desc')}</p>
            </div>
          </div>
          <p className="text-forest/70 text-xs mt-3 italic">
            {tc('fard_wajib_footer')}
          </p>
        </section>

        {/* ── Sources of Islamic Law ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            {tc('sources_heading')}
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold-deep mb-4">
            مصادر الفقه الإسلامي
          </p>
          <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed">
              {tc('sources_intro')}
            </p>
          </div>
          <div className="space-y-5">
            {SOURCES.map(source => (
              <article key={source.n} className="card-islamic">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40">
                    <span className="text-forest font-semibold text-xs">{source.n}</span>
                  </div>
                  <div>
                    <p dir="rtl" lang="ar" className="arabic-sm text-gold-deep mb-1">
                      {source.arabic}
                    </p>
                    <h3 className="font-garamond text-lg font-semibold text-forest">{tc(`source${source.n}_name`)}</h3>
                    <span className="text-xs text-gold-deep italic">{tc(`source${source.n}_type`)}</span>
                  </div>
                </div>
                <p className="text-forest/70 text-sm leading-relaxed">{tc(`source${source.n}_desc`)}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Four Schools ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            {tc('madhabs_heading')}
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold-deep mb-4">
            المذاهب الفقهية الأربعة
          </p>
          <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed">
              {tc('madhabs_intro')}
            </p>
          </div>
          <div className="space-y-5">
            {MADHABS.map(madhab => (
              <article key={madhab.n} className="card-islamic">
                <div className="flex items-start gap-3 mb-3">
                  <p dir="rtl" lang="ar" className="arabic text-gold-deep flex-shrink-0" aria-hidden="true">
                    {madhab.arabic}
                  </p>
                  <div>
                    <h3 className="font-garamond text-xl font-semibold text-forest">
                      {tc('school_title').replace('{name}', madhab.name)}
                    </h3>
                    <p className="text-xs text-gold-deep italic">{tc(`madhab${madhab.n}_founder`)}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-3">
                  <div className="flex gap-2">
                    <span className="text-xs text-gold-deep font-medium flex-shrink-0">{tc('region_label')}</span>
                    <span className="text-forest/70 text-xs leading-relaxed">{tc(`madhab${madhab.n}_region`)}</span>
                  </div>
                </div>
                <p className="text-forest/70 text-sm leading-relaxed mb-2">{tc(`madhab${madhab.n}_characteristics`)}</p>
                <p className="text-xs text-gold-deep italic">{tc(`madhab${madhab.n}_note`)}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Closing ── */}
        <section className="card-islamic bg-forest/5 text-center">
          <ArabicText text="وَمَا أُوتِيتُم مِّنَ الْعِلْمِ إِلَّا قَلِيلًا" size="md" className="mb-4" />
          <p className="text-forest/70 text-sm italic mb-1">
            {tc('closing_quote')}
          </p>
          <p className="text-forest/70 text-xs mt-3">
            {tc('closing_note')}
          </p>
        </section>
      </div>
    </>
  );
}
