'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { TAHARAH_CONTENT } from '@/lib/i18n/content/taharah-content';
import type { TaharahContentKey } from '@/lib/i18n/content/taharah-content';
import type { Lang } from '@/lib/i18n/translations';

function useTaharah() {
  const { lang } = useLanguage();
  return (key: TaharahContentKey): string => TAHARAH_CONTENT[key][lang as Lang];
}

const THREE_FORMS = [
  {
    arabic: 'الوُضُوء',
    nameEn: 'Wudu',
    subtitleKey: 'three.wudu.subtitle' as TaharahContentKey,
    descriptionKey: 'three.wudu.description' as TaharahContentKey,
    href: '/prayer',
    linkLabelKey: 'three.wudu.linkLabel' as TaharahContentKey,
    nullifiers: [
      'Using the restroom',
      'Passing gas',
      'Deep sleep',
      'Loss of consciousness',
      'Touching the private parts directly (majority view)',
      'Eating camel meat (Hanbali school)',
    ],
    nullifiersKeys: null,
  },
  {
    arabic: 'الغُسْل',
    nameEn: 'Ghusl',
    subtitleKey: 'three.ghusl.subtitle' as TaharahContentKey,
    descriptionKey: 'three.ghusl.description' as TaharahContentKey,
    href: '/ghusl',
    linkLabelKey: 'three.ghusl.linkLabel' as TaharahContentKey,
    nullifiers: [
      'Sexual intercourse (for both parties)',
      'Ejaculation',
      'End of menstrual period',
      'End of postnatal bleeding (nifas)',
    ],
    nullifiersKeys: null,
  },
  {
    arabic: 'التَّيَمُّم',
    nameEn: 'Tayamum',
    subtitleKey: 'three.tayamum.subtitle' as TaharahContentKey,
    descriptionKey: 'three.tayamum.description' as TaharahContentKey,
    href: '/tayamum',
    linkLabelKey: 'three.tayamum.linkLabel' as TaharahContentKey,
    nullifiers: null,
    nullifiersTranslatedKey: 'three.tayamum.nullifiers' as TaharahContentKey,
  },
] as const;

const NAJASAH_TYPES = [
  {
    type: 'Najasah Mughallazah',
    arabic: 'النجاسة المغلَّظة',
    subtitleKey: 'najasah.heavy.subtitle' as TaharahContentKey,
    examplesKey: 'najasah.heavy.examples' as TaharahContentKey,
  },
  {
    type: 'Najasah Mutawassitah',
    arabic: 'النجاسة المتوسِّطة',
    subtitleKey: 'najasah.moderate.subtitle' as TaharahContentKey,
    examplesKey: 'najasah.moderate.examples' as TaharahContentKey,
  },
  {
    type: 'Najasah Khafifah',
    arabic: 'النجاسة الخفيفة',
    subtitleKey: 'najasah.light.subtitle' as TaharahContentKey,
    examplesKey: 'najasah.light.examples' as TaharahContentKey,
  },
  {
    type: null,
    typeKey: 'najasah.excused.type' as TaharahContentKey,
    arabic: 'المعفو عنه',
    subtitleKey: 'najasah.excused.subtitle' as TaharahContentKey,
    examplesKey: 'najasah.excused.examples' as TaharahContentKey,
  },
] as const;

export function TaharahContent() {
  const tc = useTaharah();

  return (
    <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

      {/* Quranic basis */}
      <section>
        <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
          {tc('section.quran.heading')}
        </h2>
        <div className="card-forest rounded-2xl p-8 mb-6">
          <ArabicText
            text="يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ"
            size="md"
          />
          <p className="text-cream/80 text-sm mt-4 leading-relaxed">
            {tc('quran.verse.translation')}
          </p>
        </div>
        <p className="text-forest/70 leading-relaxed text-sm mb-4">
          {tc('quran.follow.text')}
        </p>
        <p className="text-forest/70 leading-relaxed text-sm">
          {tc('quran.hadith.text')}
        </p>
      </section>

      {/* Physical vs Ritual */}
      <section>
        <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
          {tc('section.types.heading')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card-islamic">
            <h3 className="font-garamond text-lg font-semibold text-forest mb-3">
              {tc('types.physical.heading')}
            </h3>
            <p className="text-forest/60 text-sm leading-relaxed">
              {tc('types.physical.body')}
            </p>
          </div>
          <div className="card-islamic">
            <h3 className="font-garamond text-lg font-semibold text-forest mb-3">
              {tc('types.ritual.heading')}
            </h3>
            <p className="text-forest/60 text-sm leading-relaxed">
              {tc('types.ritual.body')}
            </p>
          </div>
        </div>
      </section>

      {/* Three forms */}
      <section>
        <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
          {tc('section.three.heading')}
        </h2>
        <div className="space-y-8">
          {THREE_FORMS.map(form => (
            <div key={form.nameEn} className="card-islamic">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="arabic text-gold/70 mb-1"
                    aria-hidden="true"
                  >
                    {form.arabic}
                  </p>
                  <h3 className="font-garamond text-xl font-semibold text-forest">{form.nameEn}</h3>
                  <p className="text-gold text-xs font-medium uppercase tracking-wide">{tc(form.subtitleKey)}</p>
                </div>
                <Link
                  href={form.href}
                  className="flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold/80 transition-colors flex-shrink-0"
                >
                  {tc(form.linkLabelKey)}
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
              <p className="text-forest/70 text-sm leading-relaxed mb-4">{tc(form.descriptionKey)}</p>
              <div>
                <p className="text-forest/50 text-xs font-semibold uppercase tracking-wide mb-2">
                  {tc('three.nullifiers.label')}
                </p>
                <ul className="space-y-1">
                  {'nullifiers' in form && form.nullifiers
                    ? form.nullifiers.map(n => (
                        <li key={n} className="flex items-start gap-2 text-sm text-forest/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-1.5 flex-shrink-0" />
                          {n}
                        </li>
                      ))
                    : 'nullifiersTranslatedKey' in form && form.nullifiersTranslatedKey
                    ? tc(form.nullifiersTranslatedKey).split(';').map(n => (
                        <li key={n} className="flex items-start gap-2 text-sm text-forest/60">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-1.5 flex-shrink-0" />
                          {n.trim()}
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Najasah */}
      <section>
        <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
          {tc('section.najasah.heading')}
        </h2>
        <div className="space-y-5">
          {NAJASAH_TYPES.map(n => (
            <div key={n.arabic} className="card-islamic">
              <div className="flex items-start gap-3 mb-2">
                <p
                  dir="rtl"
                  lang="ar"
                  className="arabic-sm text-gold/70"
                  aria-hidden="true"
                >
                  {n.arabic}
                </p>
                <div>
                  <h3 className="font-garamond text-base font-semibold text-forest">
                    {'typeKey' in n && n.typeKey ? tc(n.typeKey) : n.type}
                  </h3>
                  <p className="text-gold text-xs">{tc(n.subtitleKey)}</p>
                </div>
              </div>
              <p className="text-forest/60 text-sm leading-relaxed">{tc(n.examplesKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing hadith */}
      <section>
        <div className="card-gold rounded-2xl p-8">
          <ArabicText
            text="الطَّهُورُ شَطْرُ الإِيمَانِ"
            size="lg"
          />
          <p className="text-forest/70 text-sm mt-4 mb-4 leading-relaxed font-medium">
            {tc('closing.hadith.translation')}
          </p>
          <p className="text-forest/60 text-sm leading-relaxed">
            {tc('closing.nawawi.body')}
          </p>
        </div>
      </section>

    </div>
  );
}
