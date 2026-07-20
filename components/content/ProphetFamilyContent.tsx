'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { useLanguage } from '@/lib/i18n/context';
import { PROPHET_FAMILY_CONTENT } from '@/lib/i18n/content/prophet-family-content';
import type { ProphetFamilyContentKey } from '@/lib/i18n/content/prophet-family-content';

const WIVES: ProphetFamilyContentKey[] = [
  'wife_khadijah',
  'wife_sawda',
  'wife_aisha',
  'wife_hafsa',
  'wife_zaynab_khuzaymah',
  'wife_umm_salama',
  'wife_zaynab_jahsh',
  'wife_juwayriyya',
  'wife_umm_habiba',
  'wife_safiyya',
  'wife_maymuna',
];

const CHILDREN: ProphetFamilyContentKey[] = [
  'child_qasim',
  'child_zaynab',
  'child_ruqayyah',
  'child_umm_kulthum',
  'child_fatimah',
  'child_abdullah',
  'child_ibrahim',
];

const GRANDCHILDREN: ProphetFamilyContentKey[] = [
  'gc_umamah',
  'gc_abdullah_uthman',
  'gc_hasan',
  'gc_husayn',
  'gc_zaynab_ali',
  'gc_umm_kulthum_ali',
];

const UNCLES: ProphetFamilyContentKey[] = [
  'uncle_abu_talib',
  'uncle_hamza',
  'uncle_abbas',
  'uncle_abu_lahab',
];

const AR_NAMES: Partial<Record<ProphetFamilyContentKey, string>> = {
  parent_abdullah: 'عَبْدُ اللهِ بْنُ عَبْدِ المُطَّلِبِ',
  parent_aminah: 'آمِنَةُ بِنْتُ وَهْبٍ',
  wetnurse_thuwaybah: 'ثُوَيْبَةُ',
  wetnurse_halimah: 'حَلِيمَةُ السَّعْدِيَّةُ',
  guardian_abdmuttalib: 'عَبْدُ المُطَّلِبِ',
  guardian_abutalib: 'أَبُو طَالِبٍ',
  wife_khadijah: 'خَدِيجَةُ بِنْتُ خُوَيْلِدٍ',
  wife_sawda: 'سَوْدَةُ بِنْتُ زَمْعَةَ',
  wife_aisha: 'عَائِشَةُ بِنْتُ أَبِي بَكْرٍ',
  wife_hafsa: 'حَفْصَةُ بِنْتُ عُمَرَ',
  wife_zaynab_khuzaymah: 'زَيْنَبُ بِنْتُ خُزَيْمَةَ',
  wife_umm_salama: 'أُمُّ سَلَمَةَ',
  wife_zaynab_jahsh: 'زَيْنَبُ بِنْتُ جَحْشٍ',
  wife_juwayriyya: 'جُوَيْرِيَةُ بِنْتُ الحَارِثِ',
  wife_umm_habiba: 'أُمُّ حَبِيبَةَ',
  wife_safiyya: 'صَفِيَّةُ بِنْتُ حُيَيٍّ',
  wife_maymuna: 'مَيْمُونَةُ بِنْتُ الحَارِثِ',
  concubine_mariyah: 'مَارِيَةُ القِبْطِيَّةُ',
  uncle_abu_talib: 'أَبُو طَالِبٍ',
  uncle_hamza: 'حَمْزَةُ بْنُ عَبْدِ المُطَّلِبِ',
  uncle_abbas: 'العَبَّاسُ بْنُ عَبْدِ المُطَّلِبِ',
  uncle_abu_lahab: 'أَبُو لَهَبٍ',
  child_qasim: 'القَاسِمُ',
  child_zaynab: 'زَيْنَبُ',
  child_ruqayyah: 'رُقَيَّةُ',
  child_umm_kulthum: 'أُمُّ كُلْثُومٍ',
  child_fatimah: 'فَاطِمَةُ الزَّهْرَاءُ',
  child_abdullah: 'عَبْدُ اللهِ (الطَّاهِرُ الطَّيِّبُ)',
  child_ibrahim: 'إِبْرَاهِيمُ',
  gc_umamah: 'أُمَامَةُ بِنْتُ زَيْنَبَ',
  gc_abdullah_uthman: 'عَبْدُ اللهِ بْنُ عُثْمَانَ',
  gc_hasan: 'الحَسَنُ بْنُ عَلِيٍّ',
  gc_husayn: 'الحُسَيْنُ بْنُ عَلِيٍّ',
  gc_zaynab_ali: 'زَيْنَبُ بِنْتُ عَلِيٍّ',
  gc_umm_kulthum_ali: 'أُمُّ كُلْثُومٍ بِنْتُ عَلِيٍّ',
};

function PersonCard({ k, tc, tone = 'islamic' }: {
  k: ProphetFamilyContentKey;
  tc: (key: ProphetFamilyContentKey) => string;
  tone?: 'islamic' | 'forest';
}) {
  const ar = AR_NAMES[k];
  const cls = tone === 'forest' ? 'card-forest rounded-2xl p-6' : 'card-islamic';
  const textCls = tone === 'forest' ? 'text-cream/85' : 'text-forest/75';
  return (
    <article className={cls}>
      {ar && (
        <p dir="rtl" lang="ar" className="arabic text-gold mb-2 leading-loose">
          {ar}
        </p>
      )}
      <p className={`${textCls} leading-relaxed text-sm`}>{tc(k)}</p>
    </article>
  );
}

export function ProphetFamilyContent() {
  const { lang } = useLanguage();
  const tc = (key: ProphetFamilyContentKey): string => {
    const entry = PROPHET_FAMILY_CONTENT[key] as Record<string, string | undefined> | undefined;
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="شَجَرَةُ نَسَبِ النَّبِيِّ ﷺ"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        {/* Lineage */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('lineage_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed">{tc('lineage_p')}</p>
        </section>

        {/* Parents */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('parents_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed mb-6">{tc('parents_intro')}</p>
          <div className="space-y-4">
            <PersonCard k="parent_abdullah" tc={tc} />
            <PersonCard k="parent_aminah" tc={tc} />
          </div>
        </section>

        {/* Guardians + wet-nurses */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('guardians_h')}
          </h2>
          <div className="space-y-4">
            <PersonCard k="wetnurse_thuwaybah" tc={tc} />
            <PersonCard k="wetnurse_halimah" tc={tc} />
            <PersonCard k="guardian_abdmuttalib" tc={tc} />
            <PersonCard k="guardian_abutalib" tc={tc} />
          </div>
        </section>

        {/* Wives */}
        <section>
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('wives_h')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              أُمَّهَاتُ المُؤْمِنِينَ
            </p>
          </div>
          <p className="text-forest/75 leading-relaxed mb-6">{tc('wives_intro')}</p>
          <div className="space-y-4">
            {WIVES.map((k) => (
              <PersonCard key={k} k={k} tc={tc} />
            ))}
          </div>

          {/* Mariyah - noted separately per classical position */}
          <div className="mt-6 space-y-4">
            <h3 className="font-garamond text-xl font-semibold text-forest">
              {tc('concubine_h')}
            </h3>
            <PersonCard k="concubine_mariyah" tc={tc} tone="forest" />
          </div>
        </section>

        {/* Uncles */}
        <section>
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('uncles_h')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              أَعْمَامُ النَّبِيِّ ﷺ
            </p>
          </div>
          <p className="text-forest/75 leading-relaxed mb-6">{tc('uncles_intro')}</p>
          <div className="space-y-4">
            {UNCLES.map((k) => (
              <PersonCard key={k} k={k} tc={tc} />
            ))}
          </div>
        </section>

        {/* Children */}
        <section>
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('children_h')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              أَوْلَادُ النَّبِيِّ ﷺ
            </p>
          </div>
          <p className="text-forest/75 leading-relaxed mb-6">{tc('children_intro')}</p>
          <div className="space-y-4">
            {CHILDREN.map((k) => (
              <PersonCard key={k} k={k} tc={tc} />
            ))}
          </div>
        </section>

        {/* Grandchildren */}
        <section>
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('grandchildren_h')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              أَحْفَادُ النَّبِيِّ ﷺ
            </p>
          </div>
          <p className="text-forest/75 leading-relaxed mb-6">{tc('grandchildren_intro')}</p>
          <div className="space-y-4">
            {GRANDCHILDREN.map((k) => (
              <PersonCard key={k} k={k} tc={tc} />
            ))}
          </div>
        </section>

        {/* Great-grandchildren and the surviving Prophetic line */}
        <section>
          <div className="flex flex-wrap items-baseline gap-3 mb-4">
            <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest">
              {tc('ggchildren_h')}
            </h2>
            <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">
              الذُّرِّيَّةُ المُبَارَكَة
            </p>
          </div>
          <p className="text-forest/75 leading-relaxed mb-6">{tc('ggchildren_intro')}</p>

          <div className="space-y-6">
            <div>
              <h3 className="font-garamond text-xl font-semibold text-forest mb-3">{tc('ggc_hasan_line_h')}</h3>
              <article className="card-islamic">
                <p className="text-forest/75 leading-relaxed text-sm">{tc('ggc_hasan_line_p')}</p>
              </article>
            </div>
            <div>
              <h3 className="font-garamond text-xl font-semibold text-forest mb-3">{tc('ggc_husayn_line_h')}</h3>
              <article className="card-islamic">
                <p className="text-forest/75 leading-relaxed text-sm">{tc('ggc_husayn_line_p')}</p>
              </article>
            </div>
            <div>
              <h3 className="font-garamond text-xl font-semibold text-forest mb-3">{tc('ggc_sadat_h')}</h3>
              <article className="card-islamic">
                <p className="text-forest/75 leading-relaxed text-sm">{tc('ggc_sadat_p')}</p>
              </article>
            </div>
            <div>
              <h3 className="font-garamond text-xl font-semibold text-forest mb-3">{tc('ggc_notable_h')}</h3>
              <article className="card-islamic">
                <p className="text-forest/75 leading-relaxed text-sm">{tc('ggc_notable_p')}</p>
              </article>
            </div>
            <div>
              <h3 className="font-garamond text-xl font-semibold text-forest mb-3">{tc('ggc_closing_h')}</h3>
              <article className="card-forest rounded-2xl p-6">
                <p className="text-cream/85 leading-relaxed text-sm">{tc('ggc_closing_p')}</p>
              </article>
            </div>
          </div>
        </section>

        {/* Sources note */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('sources_h')}
          </h2>
          <div className="card-forest rounded-2xl p-6 space-y-4">
            <p className="text-cream/85 leading-relaxed text-sm">{tc('sources_p1')}</p>
            <p className="text-cream/85 leading-relaxed text-sm">{tc('sources_p2')}</p>
          </div>
        </section>
      </div>
    </>
  );
}
