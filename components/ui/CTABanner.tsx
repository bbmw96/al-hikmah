'use client';

import Link from 'next/link';
import { IslamicPattern } from '@/components/ui/IslamicPattern';
import { FadeIn } from '@/components/ui/FadeIn';
import { useLanguage } from '@/lib/i18n/context';

export function CTABanner() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-midnight overflow-hidden py-16">
      <IslamicPattern opacity={0.05} />
      <FadeIn className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <p
          dir="rtl"
          lang="ar"
          className="arabic-xl text-gold mb-6"
          aria-label="Quran verse"
        >
          وَمَا أُوتِيتُم مِّنَ الْعِلْمِ إِلَّا قَلِيلًا
        </p>
        <p className="text-cream/60 italic text-base mb-8">
          {t('cta.verse.text')}{' '}
          <span className="not-italic text-gold/70"> –  Surah al-Isra&apos; 17:85</span>
        </p>
        <Link href="/hadith" className="btn-gold text-base px-8 py-3.5">
          {t('home.beginstudy')}
        </Link>
      </FadeIn>
    </section>
  );
}
