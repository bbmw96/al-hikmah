'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/context';

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_OUT } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.88, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 1.1, ease: EASE_OUT } },
};

interface Particle { pos: string; size: string; color: string; dur: number; dy: number; delay: number }
const PARTICLES: Particle[] = [
  { pos: 'top-[12%]  left-[6%]',   size: 'w-2 h-2',     color: 'bg-gold/50',  dur: 4.2, dy: 14, delay: 0    },
  { pos: 'top-[20%]  right-[8%]',  size: 'w-3 h-3',     color: 'bg-gold/30',  dur: 5.8, dy: 18, delay: 0.9  },
  { pos: 'top-[65%]  left-[10%]',  size: 'w-2.5 h-2.5', color: 'bg-gold/40',  dur: 6.5, dy: 12, delay: 1.8  },
  { pos: 'top-[75%]  right-[5%]',  size: 'w-4 h-4',     color: 'bg-cream/15', dur: 7,   dy: 16, delay: 2.7  },
  { pos: 'top-[45%]  left-[3%]',   size: 'w-1.5 h-1.5', color: 'bg-gold/25',  dur: 8,   dy: 20, delay: 3.6  },
  { pos: 'top-[30%]  right-[4%]',  size: 'w-2 h-2',     color: 'bg-cream/20', dur: 5,   dy: 10, delay: 4.5  },
  { pos: 'top-[55%]  left-[22%]',  size: 'w-1.5 h-1.5', color: 'bg-gold/35',  dur: 6,   dy: 15, delay: 5.4  },
  { pos: 'top-[60%]  right-[22%]', size: 'w-2 h-2',     color: 'bg-gold/25',  dur: 7.5, dy: 11, delay: 6.3  },
  { pos: 'top-[8%]   left-[35%]',  size: 'w-1 h-1',     color: 'bg-gold/40',  dur: 9,   dy: 8,  delay: 7.2  },
  { pos: 'top-[85%]  left-[50%]',  size: 'w-1.5 h-1.5', color: 'bg-cream/10', dur: 6.8, dy: 13, delay: 8.1  },
];

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-forest overflow-hidden min-h-[90vh] flex items-center">

      {/* Slowly rotating sacred-geometry star */}
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: 'linear' }}
      >
        <svg
          width="700" height="700"
          viewBox="0 0 700 700"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-[0.045]"
        >
          <g fill="none" stroke="#C9A84C" strokeWidth="0.9">
            {/* Outer octagon */}
            <polygon points="350,30 490,100 630,240 660,380 590,520 450,630 310,660 170,590 60,450 30,310 100,170 240,60" />
            {/* Inner 8-pointed star */}
            <polygon points="350,130 398,230 510,245 430,330 450,445 350,390 250,445 270,330 190,245 302,230" />
            {/* Cross diagonals */}
            <line x1="350" y1="30"  x2="350" y2="660" />
            <line x1="30"  y1="350" x2="660" y2="350" />
            <line x1="140" y1="140" x2="560" y2="560" />
            <line x1="560" y1="140" x2="140" y2="560" />
            {/* Mid-ring */}
            <circle cx="350" cy="350" r="200" />
            <circle cx="350" cy="350" r="310" />
          </g>
        </svg>
      </motion.div>

      {/* Tiled geometric background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.055]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke='%23C9A84C' stroke-width='0.6'%3E%3Cpolygon points='40,4 56,16 72,32 76,48 64,64 48,76 32,76 16,64 8,48 4,32 24,16' /%3E%3Cpolygon points='40,18 50,30 64,34 54,46 56,60 40,54 24,60 26,46 16,34 30,30' /%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className={`absolute rounded-full pointer-events-none ${p.pos} ${p.size} ${p.color}`}
          animate={{ y: [0, -p.dy, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: p.dur, repeat: Infinity, ease: 'easeInOut', delay: p.delay }}
        />
      ))}

      {/* Expanding light rings */}
      {[
        { size: 'w-64 h-64 md:w-[22rem] md:h-[22rem]', dur: 5,  delay: 0,   opRange: [0.25, 0.5] as [number, number],  scaleRange: [1, 1.08] as [number, number]  },
        { size: 'w-96 h-96 md:w-[40rem] md:h-[40rem]', dur: 7,  delay: 0.8, opRange: [0.12, 0.3] as [number, number],  scaleRange: [1, 1.05] as [number, number]  },
        { size: 'w-[28rem] md:w-[56rem] h-[28rem] md:h-[56rem]', dur: 9, delay: 1.5, opRange: [0.05, 0.18] as [number, number], scaleRange: [1, 1.04] as [number, number] },
      ].map((ring, i) => (
        <motion.span
          key={i}
          aria-hidden="true"
          className={`absolute inset-0 m-auto ${ring.size} rounded-full border border-gold/20 pointer-events-none`}
          animate={{ scale: ring.scaleRange, opacity: ring.opRange }}
          transition={{ duration: ring.dur, repeat: Infinity, ease: 'easeInOut', delay: ring.delay, repeatType: 'reverse' }}
        />
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-6 py-28 text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Bismillah – the opening invocation */}
        <motion.p
          dir="rtl"
          lang="ar"
          className="arabic-xl text-gold mb-3 drop-shadow-[0_0_24px_rgba(201,168,76,0.4)]"
          aria-label="Bismillah ir-Rahman ir-Raheem. In the name of Allah, the Most Gracious, the Most Merciful."
          variants={scaleIn}
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </motion.p>

        {/* Title block: ghost Arabic behind crisp English */}
        <motion.div className="relative my-6 mb-10" variants={scaleIn}>
          {/* Large ghost Arabic calligraphy */}
          <p
            dir="rtl"
            lang="ar"
            aria-hidden="true"
            className="arabic-hero text-cream/[0.07] leading-none select-none text-center"
          >
            الحكمة
          </p>
          {/* English title over the Arabic */}
          <motion.h1
            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            variants={slideUp}
          >
            <span
              className="text-4xl md:text-5xl lg:text-7xl font-garamond font-semibold text-cream tracking-[0.2em] uppercase"
              style={{ textShadow: '0 2px 30px rgba(201,168,76,0.35), 0 0 60px rgba(201,168,76,0.12)' }}
            >
              Al-Hikmah
            </span>
            <span className="text-gold text-sm md:text-base font-garamond tracking-[0.45em] uppercase opacity-80">
              الحِكْمَة
            </span>
          </motion.h1>
        </motion.div>

        {/* Gold accent line */}
        <motion.div
          className="mx-auto mb-8 h-px max-w-xs"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
          variants={{ hidden: { scaleX: 0, opacity: 0 }, show: { scaleX: 1, opacity: 1, transition: { duration: 0.9, ease: EASE_OUT } } }}
        />

        <motion.p
          className="text-cream/75 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10 font-light"
          variants={slideUp}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={slideUp}>
          <Link href="/hadith" className="btn-gold text-base px-8 py-3.5">
            {t('hero.cta.hadith')}
          </Link>
          <Link href="/about" className="btn-outline-light text-base px-8 py-3.5">
            {t('hero.cta.about')}
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 max-w-2xl mx-auto border border-gold/30 rounded-2xl p-7 bg-white/[0.04] backdrop-blur-sm"
          variants={slideUp}
        >
          <p dir="rtl" lang="ar" className="arabic-lg text-cream/95 mb-4 drop-shadow-[0_0_12px_rgba(201,168,76,0.2)]">
            يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ ۚ وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا
          </p>
          <p className="text-cream/60 text-sm italic">
            {t('hero.verse.text')}{' '}
            <span className="not-italic text-gold/70">– Surah al-Baqarah 2:269</span>
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
