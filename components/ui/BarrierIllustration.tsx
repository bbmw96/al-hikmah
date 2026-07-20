'use client';

import { useLanguage } from '@/lib/i18n/context';
import { YAJUJ_MAJUJ_CONTENT } from '@/lib/i18n/content/yajuj-majuj-content';
import type { YajujMajujContentKey } from '@/lib/i18n/content/yajuj-majuj-content';

/**
 * Illustrated schematic of the Barrier of Dhul-Qarnayn.
 *
 * Two mountain triangles frame a filled barrier of iron blocks capped by a
 * molten-copper band. The right side shows small silhouette figures of Ya'juj
 * and Ma'juj digging at the wall. Colour tokens tie back to the site palette.
 */
export function BarrierIllustration() {
  const { lang } = useLanguage();
  const tc = (key: YajujMajujContentKey): string => YAJUJ_MAJUJ_CONTENT[key][lang];

  return (
    <section aria-labelledby="barrier-illustration" className="relative">
      <div className="flex items-center justify-center gap-3 mb-6" aria-hidden="true">
        <span className="h-px w-16 bg-gold/40" />
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-gold" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 20 L9 8 L14 14 L18 5 L21 20 Z" />
        </svg>
        <span className="h-px w-16 bg-gold/40" />
      </div>

      <h2
        id="barrier-illustration"
        className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest text-center mb-2"
      >
        {tc('barrier.title')}
      </h2>
      <p className="text-forest/60 text-sm text-center italic mb-8 max-w-xl mx-auto">
        {tc('barrier.sub')}
      </p>

      <figure className="max-w-2xl mx-auto">
        <div className="rounded-2xl overflow-hidden border border-forest/10 shadow-sm bg-cream">
          <svg
            viewBox="0 0 640 320"
            role="img"
            aria-label={tc('barrier.title')}
            className="w-full h-auto block"
          >
            <defs>
              <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F5E6BE" />
                <stop offset="60%" stopColor="#E6C878" />
                <stop offset="100%" stopColor="#C9A84C" />
              </linearGradient>
              <linearGradient id="copperGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#E68A4A" />
                <stop offset="100%" stopColor="#B25A24" />
              </linearGradient>
              <pattern id="ironPattern" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
                <rect width="24" height="24" fill="#3D4A5C" />
                <rect x="1" y="1" width="10" height="10" fill="#556278" stroke="#2A3444" strokeWidth="0.5" />
                <rect x="13" y="1" width="10" height="10" fill="#556278" stroke="#2A3444" strokeWidth="0.5" />
                <rect x="1" y="13" width="10" height="10" fill="#556278" stroke="#2A3444" strokeWidth="0.5" />
                <rect x="13" y="13" width="10" height="10" fill="#556278" stroke="#2A3444" strokeWidth="0.5" />
              </pattern>
            </defs>

            {/* Sky */}
            <rect width="640" height="320" fill="url(#sky)" />

            {/* Sun */}
            <circle cx="490" cy="80" r="34" fill="#FBE9A5" opacity="0.85" />
            <circle cx="490" cy="80" r="26" fill="#F7D267" />

            {/* Ground */}
            <rect y="260" width="640" height="60" fill="#8B7443" />
            <path d="M0 260 Q160 250 320 262 T640 260 L640 320 L0 320 Z" fill="#6E5A2F" />

            {/* Left mountain */}
            <path d="M0 260 L140 90 L260 260 Z" fill="#1B4332" />
            <path d="M60 200 L140 90 L200 180 L160 210 L120 190 Z" fill="#245038" opacity="0.7" />
            <path d="M110 130 L140 90 L170 130 L155 160 L125 155 Z" fill="#F5F1E1" />

            {/* Right mountain */}
            <path d="M380 260 L500 90 L640 260 Z" fill="#1B4332" />
            <path d="M440 200 L500 90 L560 180 L520 210 L470 190 Z" fill="#245038" opacity="0.7" />
            <path d="M470 130 L500 90 L530 130 L515 160 L485 155 Z" fill="#F5F1E1" />

            {/* Barrier - iron pattern */}
            <rect x="255" y="120" width="130" height="145" fill="url(#ironPattern)" stroke="#1F2937" strokeWidth="2" />
            {/* Molten copper cap */}
            <rect x="248" y="112" width="144" height="14" fill="url(#copperGrad)" stroke="#7C3E17" strokeWidth="1" />
            {/* Copper drips */}
            <path d="M260 126 L262 138 L258 138 Z" fill="#B25A24" />
            <path d="M290 126 L292 142 L288 142 Z" fill="#B25A24" />
            <path d="M320 126 L322 150 L318 150 Z" fill="#B25A24" />
            <path d="M350 126 L352 140 L348 140 Z" fill="#B25A24" />
            <path d="M380 126 L382 145 L378 145 Z" fill="#B25A24" />

            {/* Barrier crown - decorative arches */}
            <path d="M264 118 A 6 6 0 0 1 276 118" fill="none" stroke="#7C3E17" strokeWidth="1" />
            <path d="M284 118 A 6 6 0 0 1 296 118" fill="none" stroke="#7C3E17" strokeWidth="1" />
            <path d="M304 118 A 6 6 0 0 1 316 118" fill="none" stroke="#7C3E17" strokeWidth="1" />
            <path d="M324 118 A 6 6 0 0 1 336 118" fill="none" stroke="#7C3E17" strokeWidth="1" />
            <path d="M344 118 A 6 6 0 0 1 356 118" fill="none" stroke="#7C3E17" strokeWidth="1" />
            <path d="M364 118 A 6 6 0 0 1 376 118" fill="none" stroke="#7C3E17" strokeWidth="1" />

            {/* Ya'juj and Ma'juj digging silhouettes on the far side */}
            <g fill="#1B2A4A" opacity="0.85">
              {/* Figure 1 */}
              <circle cx="410" cy="230" r="6" />
              <path d="M403 236 L403 252 L407 265 L413 252 L417 265 L417 236 Z" />
              {/* Pickaxe 1 */}
              <line x1="413" y1="242" x2="398" y2="220" stroke="#1B2A4A" strokeWidth="2" strokeLinecap="round" />
              <path d="M395 216 L403 215 L398 224 Z" stroke="#1B2A4A" strokeWidth="1.5" fill="#3D4A5C" />
              {/* Figure 2 */}
              <circle cx="435" cy="235" r="5" />
              <path d="M429 240 L429 254 L433 265 L437 254 L441 265 L441 240 Z" />
              {/* Pickaxe 2 */}
              <line x1="437" y1="245" x2="423" y2="228" stroke="#1B2A4A" strokeWidth="2" strokeLinecap="round" />
              <path d="M420 224 L428 224 L423 232 Z" stroke="#1B2A4A" strokeWidth="1.5" fill="#3D4A5C" />
              {/* Figure 3 (smaller, further) */}
              <circle cx="455" cy="240" r="4" />
              <path d="M450 244 L450 258 L454 266 L458 258 L458 244 Z" />
            </g>

            {/* Motion sparks near barrier from digging */}
            <g fill="#C9A84C" opacity="0.8">
              <circle cx="390" cy="222" r="1.5" />
              <circle cx="393" cy="218" r="1" />
              <circle cx="387" cy="228" r="1" />
              <circle cx="395" cy="230" r="1.2" />
            </g>

            {/* Callout arrows */}
            <g fontFamily="Inter, sans-serif" fontSize="11" fill="#1B4332">
              {/* Mountain callout (left) */}
              <line x1="70" y1="100" x2="130" y2="130" stroke="#1B4332" strokeWidth="1" strokeDasharray="3 2" />
              <circle cx="70" cy="100" r="3" fill="#C9A84C" />
              {/* Iron callout */}
              <line x1="320" y1="60" x2="320" y2="180" stroke="#1B4332" strokeWidth="1" strokeDasharray="3 2" />
              <circle cx="320" cy="60" r="3" fill="#C9A84C" />
              {/* Copper callout */}
              <line x1="230" y1="70" x2="260" y2="115" stroke="#1B4332" strokeWidth="1" strokeDasharray="3 2" />
              <circle cx="230" cy="70" r="3" fill="#C9A84C" />
              {/* Digging callout */}
              <line x1="560" y1="230" x2="450" y2="235" stroke="#1B4332" strokeWidth="1" strokeDasharray="3 2" />
              <circle cx="560" cy="230" r="3" fill="#C9A84C" />
            </g>
          </svg>
        </div>

        {/* Localised captions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4 text-center">
          <Caption swatch="#1B4332" text={tc('barrier.label_mountain')} />
          <Caption swatch="#556278" text={tc('barrier.label_iron')} />
          <Caption swatch="#B25A24" text={tc('barrier.label_copper')} />
          <Caption swatch="#1B2A4A" text={tc('barrier.label_digging')} />
        </div>

        <figcaption className="mt-6 text-center text-forest/70 italic text-sm">
          {tc('barrier.verse')}
        </figcaption>
      </figure>
    </section>
  );
}

function Caption({ swatch, text }: { swatch: string; text: string }) {
  return (
    <div className="flex items-center gap-2 justify-center text-xs text-forest/70">
      <span
        aria-hidden="true"
        className="inline-block w-3 h-3 rounded-sm border border-forest/20"
        style={{ backgroundColor: swatch }}
      />
      <span className="text-left leading-tight">{text}</span>
    </div>
  );
}
