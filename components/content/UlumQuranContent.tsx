'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { ULUM_QURAN_CONTENT } from '@/lib/i18n/content/ulum-quran-content';
import type { UlumQuranContentKey } from '@/lib/i18n/content/ulum-quran-content';

const VERSE_HIFZ_AR = `إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ`;
const WAHY_AR = [`الرؤيا الصادقة`, `مثل صلصلة الجرس`, `في صورة رجل`, `في صورته الحقيقية`, `الكلام المباشر`];
const COMPILATION_AR = [`عصر النبوة`, `أبو بكر الصديق`, `عثمان بن عفان`];
const TAJWEED_AR = [`مخارج الحروف`, `المد`, `الغنة`, `الإدغام والإقلاب والإخفاء`, `القلقلة`, `التفخيم والترقيق`];

const QIRAAT = [
  { name: "Nafi' (al-Madani)", students: 'Warsh and Qalun' },
  { name: 'Ibn Kathir (al-Makki)', students: 'Al-Bazzi and Qunbul' },
  { name: 'Abu Amr (al-Basri)', students: 'Al-Duri and Al-Susi' },
  { name: 'Ibn Amir (al-Shami)', students: 'Hisham and Ibn Dhakwan' },
  { name: 'Asim (al-Kufi)', students: "Hafs and Shu'bah" },
  { name: 'Hamzah (al-Kufi)', students: 'Khalaf and Khallad' },
  { name: "Al-Kisa'i (al-Kufi)", students: 'Al-Layth and Al-Duri' },
] as const;

export function UlumQuranContent() {
  const { lang } = useLanguage();
  const tc = (key: UlumQuranContentKey): string => ULUM_QURAN_CONTENT[key][lang];
  const k = (s: string) => s as UlumQuranContentKey;

  return (
    <>
      <PageHeader title={tc('header.title')} arabicTitle="عُلُوم القُرْآن" subtitle={tc('header.subtitle')} />

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

        {/* What is Ulum al-Quran */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">{tc('whatis.heading')}</h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">{tc('whatis.p1')}</p>
          <p className="text-forest/70 leading-relaxed text-sm mb-6">{tc('whatis.p2')}</p>
          <div className="card-forest rounded-2xl p-8">
            <ArabicText text={VERSE_HIFZ_AR} size="lg" />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">{tc('whatis.verse.translation')}</p>
          </div>
        </section>

        {/* Wahy */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">{tc('wahy.heading')}</h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-6">{tc('wahy.intro')}</p>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} className="card-islamic flex gap-4">
                <div className="flex-shrink-0">
                  <ArabicText text={WAHY_AR[n - 1]} size="sm" />
                </div>
                <div>
                  <h3 className="font-garamond text-base font-semibold text-forest mb-1">{tc(k(`wahy.${n}.mode`))}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{tc(k(`wahy.${n}.detail`))}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compilation */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">{tc('compilation.heading')}</h2>
          <div className="space-y-6">
            {[1, 2, 3].map(n => (
              <div key={n} className="card-islamic">
                <p dir="rtl" lang="ar" className="arabic-sm text-gold mb-1.5" aria-hidden="true">{COMPILATION_AR[n - 1]}</p>
                <h3 className="font-garamond text-lg font-semibold text-forest mb-3">{tc(k(`compilation.${n}.caliph`))}</h3>
                <p className="text-forest/60 text-sm leading-relaxed">{tc(k(`compilation.${n}.detail`))}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Makki and Madani */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">{tc('makki.heading')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="card-islamic">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-3">
                {tc('makki.makki.heading')}
                <span className="arabic-sm text-gold/60 block" dir="rtl" lang="ar">السور المكية</span>
              </h3>
              <p className="text-forest/60 text-sm leading-relaxed mb-3">{tc('makki.makki.body')}</p>
              <p className="text-forest/50 text-xs">{tc('makki.makki.count')}</p>
            </div>
            <div className="card-islamic">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-3">
                {tc('makki.madani.heading')}
                <span className="arabic-sm text-gold/60 block" dir="rtl" lang="ar">السور المدنية</span>
              </h3>
              <p className="text-forest/60 text-sm leading-relaxed mb-3">{tc('makki.madani.body')}</p>
              <p className="text-forest/50 text-xs">{tc('makki.madani.count')}</p>
            </div>
          </div>
          <div className="gold-border-left pl-5">
            <p className="text-forest/70 text-sm leading-relaxed">{tc('makki.note')}</p>
          </div>
        </section>

        {/* Asbab al-Nuzul */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">{tc('asbab.heading')}</h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">{tc('asbab.p1')}</p>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">{tc('asbab.p2')}</p>
          <div className="gold-border-left pl-5">
            <p className="text-forest/70 text-sm leading-relaxed">{tc('asbab.principle')}</p>
          </div>
        </section>

        {/* Qira'at */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">{tc('qiraat.heading')}</h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">{tc('qiraat.intro')}</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-gold/20 text-left">
                  <th className="py-3 px-4 text-forest/50 text-xs font-semibold uppercase">{tc('qiraat.th.imam')}</th>
                  <th className="py-3 px-4 text-forest/50 text-xs font-semibold uppercase">{tc('qiraat.th.transmission')}</th>
                  <th className="py-3 px-4 text-forest/50 text-xs font-semibold uppercase">{tc('qiraat.th.region')}</th>
                </tr>
              </thead>
              <tbody>
                {QIRAAT.map((q, i) => (
                  <tr key={q.name} className="border-b border-gold/10">
                    <td className="py-3 px-4 text-forest font-medium text-sm">{q.name}</td>
                    <td className="py-3 px-4 text-forest/60 text-sm">{q.students}</td>
                    <td className="py-3 px-4 text-forest/60 text-sm">{tc(k(`qiraat.${i + 1}.region`))}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-forest/70 text-sm leading-relaxed">{tc('qiraat.note')}</p>
        </section>

        {/* Tajweed */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">{tc('tajweed.heading')}</h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-6">{tc('tajweed.intro')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[1, 2, 3, 4, 5, 6].map(n => (
              <div key={n} className="card-islamic">
                <p dir="rtl" lang="ar" className="arabic-sm text-gold mb-1.5" aria-hidden="true">{TAJWEED_AR[n - 1]}</p>
                <h3 className="font-garamond text-base font-semibold text-forest mb-2">{tc(k(`tajweed.${n}.rule`))}</h3>
                <p className="text-forest/60 text-sm leading-relaxed">{tc(k(`tajweed.${n}.detail`))}</p>
              </div>
            ))}
          </div>
        </section>

        {/* I'jaz al-Quran */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">{tc('ijaz.heading')}</h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-5">{tc('ijaz.intro')}</p>
          <div className="space-y-4">
            {[1, 2, 3, 4].map(n => (
              <div key={n} className="card-islamic">
                <h3 className="font-garamond text-base font-semibold text-forest mb-2">{tc(k(`ijaz.${n}.aspect`))}</h3>
                <p className="text-forest/60 text-sm leading-relaxed">{tc(k(`ijaz.${n}.detail`))}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
