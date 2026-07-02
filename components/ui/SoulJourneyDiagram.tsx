'use client';

import { useLanguage } from '@/lib/i18n/context';
import { AFTERLIFE_CONTENT } from '@/lib/i18n/content/afterlife-content';
import type { AfterlifeContentKey } from '@/lib/i18n/content/afterlife-content';

/**
 * The soul's journey from death to eternal abode, rendered as an
 * alternating zigzag flow so it reads as a continuous path rather
 * than a plain vertical list.
 */
export function SoulJourneyDiagram() {
  const { lang } = useLanguage();
  const tc = (key: AfterlifeContentKey): string => AFTERLIFE_CONTENT[key][lang];
  const stageKey = (n: number) => `stage.${n}` as AfterlifeContentKey;

  return (
    <section aria-labelledby="soul-journey" className="relative">
      <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
        <span className="h-px w-16 bg-gold/40" />
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2 A10 10 0 1 0 12 22 A10 10 0 1 0 12 2 Z" />
          <path d="M12 6 L12 12 L16 14" />
        </svg>
        <span className="h-px w-16 bg-gold/40" />
      </div>

      <h2
        id="soul-journey"
        className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest text-center mb-2"
      >
        {tc('journey.title')}
      </h2>
      <p className="text-forest/60 text-sm text-center italic mb-10">
        {tc('journey.sub')}
      </p>

      <ol className="relative border-l-2 border-gold/40 ml-6 md:ml-16 space-y-6 pl-8 md:pl-12">
        {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
          <li key={n} className="relative">
            <span
              aria-hidden="true"
              className="absolute -left-[2.4rem] md:-left-[3.15rem] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-forest text-cream inline-flex items-center justify-center font-garamond text-base md:text-lg font-semibold shadow-md ring-4 ring-cream"
            >
              {n}
            </span>
            <div className="pt-1.5">
              <h3 className="font-garamond text-lg md:text-xl font-semibold text-forest">
                {tc(stageKey(n))}
              </h3>
            </div>
          </li>
        ))}
      </ol>

      {/* Fork illustration at the end (Paradise / Hell branching) */}
      <div className="flex items-center justify-center gap-6 mt-10" aria-hidden="true">
        <div className="flex flex-col items-center gap-1">
          <svg viewBox="0 0 32 32" className="w-8 h-8 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M16 2 L20 12 L30 14 L22 20 L24 30 L16 25 L8 30 L10 20 L2 14 L12 12 Z" />
          </svg>
          <span className="text-[10px] uppercase tracking-widest text-forest/60">Jannah</span>
        </div>
        <div className="flex flex-col items-center gap-1">
          <svg viewBox="0 0 32 32" className="w-8 h-8 text-forest/50" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M8 28 Q4 20 10 14 Q6 8 16 4 Q16 12 22 10 Q20 20 26 16 Q26 24 22 28 Z" />
          </svg>
          <span className="text-[10px] uppercase tracking-widest text-forest/40">Jahannam</span>
        </div>
      </div>
    </section>
  );
}
