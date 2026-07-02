'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';
import { END_TIMES_CONTENT } from '@/lib/i18n/content/end-times-content';
import type { EndTimesContentKey } from '@/lib/i18n/content/end-times-content';

const CROSS_LINK: Record<number, { href: string; key: EndTimesContentKey } | undefined> = {
  2: { href: '/dajjal',     key: 'cross_link.dajjal' },
  6: { href: '/yajuj-majuj', key: 'cross_link.yajujmajuj' },
};

export function TenSignsTimeline() {
  const { lang } = useLanguage();
  const tc = (key: EndTimesContentKey): string => END_TIMES_CONTENT[key][lang];
  const signKey = (n: number) => `sign.${n}` as EndTimesContentKey;

  return (
    <section aria-labelledby="ten-signs-timeline" className="relative">
      {/* Ornament */}
      <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
        <span className="h-px w-16 bg-gold/40" />
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
        </svg>
        <span className="h-px w-16 bg-gold/40" />
      </div>

      <h2
        id="ten-signs-timeline"
        className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest text-center mb-2"
      >
        {tc('timeline.title')}
      </h2>
      <p className="text-forest/60 text-sm text-center italic mb-10">
        {tc('timeline.sub')}
      </p>

      <ol className="relative border-l-2 border-gold/40 ml-6 md:ml-16 space-y-6 pl-8 md:pl-12">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => {
          const cross = CROSS_LINK[n];
          return (
            <li key={n} className="relative">
              {/* Numbered node */}
              <span
                aria-hidden="true"
                className="absolute -left-[2.4rem] md:-left-[3.15rem] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-forest text-cream inline-flex items-center justify-center font-garamond text-base md:text-lg font-semibold shadow-md ring-4 ring-cream"
              >
                {n}
              </span>

              <div className="pt-1.5">
                <h3 className="font-garamond text-lg md:text-xl font-semibold text-forest">
                  {tc(signKey(n))}
                </h3>
                {cross && (
                  <Link
                    href={cross.href}
                    className="inline-flex items-center gap-1 mt-2 text-xs font-medium text-gold hover:text-forest transition-colors"
                  >
                    <span>{tc(cross.key)}</span>
                    <ArrowRight className="w-3 h-3" aria-hidden="true" />
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {/* Bottom ornament */}
      <div className="flex items-center justify-center gap-3 mt-10" aria-hidden="true">
        <span className="h-px w-16 bg-gold/40" />
        <svg viewBox="0 0 24 24" className="w-4 h-4 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3 L12 21 M3 12 L21 12" />
        </svg>
        <span className="h-px w-16 bg-gold/40" />
      </div>
    </section>
  );
}
