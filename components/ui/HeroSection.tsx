'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { IslamicPattern } from '@/components/ui/IslamicPattern';

const EASE = [0.25, 0.1, 0.25, 1] as const;

function fade(delay: number, y = 24) {
  return {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: EASE },
  };
}

export function HeroSection() {
  return (
    <section className="relative bg-forest overflow-hidden min-h-[85vh] flex items-center">
      <IslamicPattern opacity={0.06} />
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.p
          dir="rtl"
          lang="ar"
          className="arabic-lg text-gold/80 mb-6"
          aria-label="Bismillah ir-Rahman ir-Raheem - In the name of Allah, the Most Gracious, the Most Merciful"
          {...fade(0, 16)}
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>

        <motion.h1
          className="text-5xl md:text-6xl lg:text-7xl font-garamond font-semibold text-cream mb-4 leading-tight"
          {...fade(0.14)}
        >
          Al-Hikmah
        </motion.h1>

        <motion.p
          dir="rtl"
          lang="ar"
          className="arabic text-gold mb-4"
          aria-hidden="true"
          {...fade(0.22, 12)}
        >
          الحكمة
        </motion.p>

        <motion.p
          className="text-cream/70 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 font-light"
          {...fade(0.32)}
        >
          A scholarly resource for the authentic Islamic tradition - hadith, supplications, the
          stories of the prophets, and guidance on worship, presented in Arabic and seven world languages.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          {...fade(0.44)}
        >
          <Link href="/hadith" className="btn-gold text-base px-8 py-3.5">
            Browse Hadith Collections
          </Link>
          <Link href="/about" className="btn-outline-light text-base px-8 py-3.5">
            About This Resource
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 max-w-2xl mx-auto border border-gold/25 rounded-2xl p-6 bg-white/5"
          {...fade(0.58)}
        >
          <p
            dir="rtl"
            lang="ar"
            className="arabic-lg text-cream mb-4"
          >
            يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ ۚ وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا
          </p>
          <p className="text-cream/60 text-sm italic">
            "He gives wisdom to whom He wills, and whoever has been given wisdom has certainly been given much good." - Surah al-Baqarah 2:269
          </p>
        </motion.div>
      </div>
    </section>
  );
}
