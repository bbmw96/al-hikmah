'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/context';
import { IslamicPattern } from '@/components/ui/IslamicPattern';

const EASE = [0.25, 0.1, 0.25, 1] as const;

function fade(delay: number, y = 24) {
  return {
    initial: { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: EASE },
  };
}

const PARTICLES = [
  { className: 'top-16 left-12 w-2 h-2 bg-gold/40',    duration: 4.2, delay: 0,   dy: 14 },
  { className: 'top-28 right-16 w-3 h-3 bg-gold/25',   duration: 5.8, delay: 1,   dy: 18 },
  { className: 'bottom-20 left-20 w-2.5 h-2.5 bg-gold/30', duration: 6.5, delay: 2, dy: 12 },
  { className: 'bottom-36 right-10 w-4 h-4 bg-cream/10',   duration: 7,   delay: 0.5, dy: 16 },
  { className: 'top-1/2 left-6 w-1.5 h-1.5 bg-gold/20',   duration: 8,   delay: 1.5, dy: 20 },
  { className: 'top-1/3 right-6 w-2 h-2 bg-cream/15',      duration: 5,   delay: 0.8, dy: 10 },
  { className: 'top-2/3 left-1/4 w-1.5 h-1.5 bg-gold/30',  duration: 6,   delay: 1.2, dy: 15 },
  { className: 'bottom-1/3 right-1/4 w-2 h-2 bg-gold/20',  duration: 7.5, delay: 0.3, dy: 11 },
] as const;

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section className="relative bg-forest overflow-hidden min-h-[85vh] flex items-center">
      <IslamicPattern opacity={0.06} />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className={`absolute rounded-full pointer-events-none ${p.className}`}
          animate={{ y: [0, -p.dy, 0] }}
          transition={{ duration: p.duration, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}

      {/* Pulsing rings */}
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 m-auto w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-full border border-gold/10 pointer-events-none"
        animate={{ scale: [1, 1.06, 1], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 m-auto w-96 h-96 md:w-[38rem] md:h-[38rem] rounded-full border border-gold/6 pointer-events-none"
        animate={{ scale: [1, 1.04, 1], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        {/* Bismillah */}
        <motion.p
          dir="rtl"
          lang="ar"
          className="arabic-xl text-gold mb-2"
          aria-label="Bismillah ir-Rahman ir-Raheem — In the name of Allah, the Most Gracious, the Most Merciful"
          {...fade(0, 16)}
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>

        {/* Title block — English overlaying Arabic */}
        <div className="relative my-4 mb-8">
          {/* Arabic backdrop — large calligraphy */}
          <motion.p
            dir="rtl"
            lang="ar"
            aria-hidden="true"
            className="arabic-hero text-cream/20 leading-none select-none text-center"
            {...fade(0.14, 28)}
          >
            الحكمة
          </motion.p>
          {/* English name — centered over the Arabic */}
          <motion.h1
            className="absolute inset-0 flex flex-col items-center justify-center gap-1 pointer-events-none"
            {...fade(0.22, 10)}
          >
            <span className="text-4xl md:text-5xl lg:text-6xl font-garamond font-semibold text-cream tracking-[0.18em] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              Al-Hikmah
            </span>
            <span className="text-gold text-base md:text-lg font-garamond tracking-[0.3em] uppercase opacity-90">
              الحكمة
            </span>
          </motion.h1>
        </div>

        <motion.p
          className="text-cream/70 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 font-light"
          {...fade(0.34)}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          {...fade(0.46)}
        >
          <Link href="/hadith" className="btn-gold text-base px-8 py-3.5">
            {t('hero.cta.hadith')}
          </Link>
          <Link href="/about" className="btn-outline-light text-base px-8 py-3.5">
            {t('hero.cta.about')}
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 max-w-2xl mx-auto border border-gold/25 rounded-2xl p-6 bg-white/5"
          {...fade(0.6)}
        >
          <p dir="rtl" lang="ar" className="arabic-lg text-cream mb-4">
            يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ ۚ وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا
          </p>
          <p className="text-cream/60 text-sm italic">
            {t('hero.verse.text')}{' '}
            <span className="not-italic text-gold/70">— Surah al-Baqarah 2:269</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
