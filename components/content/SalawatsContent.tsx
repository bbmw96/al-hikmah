'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { useLanguage } from '@/lib/i18n/context';
import { SALAWATS_CONTENT } from '@/lib/i18n/content/salawats-content';
import type { SalawatsContentKey } from '@/lib/i18n/content/salawats-content';

export function SalawatsContent() {
  const { lang } = useLanguage();
  const tc = (key: SalawatsContentKey): string => {
    const entry = SALAWATS_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="الصَّلَوَاتُ الأُخْرَى"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-14">
        {/* Intro */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('intro_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed">{tc('intro_p')}</p>
        </section>

        {/* Istikharah */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('istikharah_h')}
          </h2>
          <article className="card-islamic">
            <p className="text-forest/75 leading-relaxed text-sm">{tc('istikharah_p')}</p>
          </article>
        </section>

        {/* Tahajjud */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('tahajjud_h')}
          </h2>
          <article className="card-islamic">
            <p className="text-forest/75 leading-relaxed text-sm">{tc('tahajjud_p')}</p>
          </article>
        </section>

        {/* Duha */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('duha_h')}
          </h2>
          <article className="card-islamic">
            <p className="text-forest/75 leading-relaxed text-sm">{tc('duha_p')}</p>
          </article>
        </section>

        {/* In-Development notice */}
        <section>
          <article className="card-forest rounded-2xl p-6">
            <h3 className="font-garamond text-lg font-semibold text-gold mb-3">In Development</h3>
            <p className="text-cream/85 leading-relaxed text-sm mb-3">
              The following voluntary and occasional prayers are being written into all 14 languages. Each will
              include Arabic, transliteration, translation, hadith source and step-by-step method.
            </p>
            <ul className="text-cream/70 text-sm space-y-1 list-disc list-inside">
              <li>Salat al-Tarawih  –  the Ramadan night prayer (cross-linked to /ramadan)</li>
              <li>Salat al-Musafir  –  the traveller's prayer (shortening and combining)</li>
              <li>Salat al-Kusuf / al-Khusuf  –  the eclipse prayer (solar and lunar)</li>
              <li>Salat al-Istisqa  –  the prayer for rain</li>
              <li>Salat al-Hajah  –  the prayer of need</li>
              <li>Salat al-Tawbah  –  the prayer of repentance</li>
              <li>Salat al-Awwabin  –  the six rakat after Maghrib</li>
              <li>Sujud al-Tilawah  –  prostration on reciting a verse of prostration</li>
              <li>Sujud al-Shukr  –  prostration of gratitude</li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
