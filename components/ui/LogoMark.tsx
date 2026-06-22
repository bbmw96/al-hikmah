'use client';

import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

export function LogoMark({ className, size = 'md' }: { className?: string; size?: 'sm' | 'md' }) {
  const isSmall = size === 'sm';
  return (
    <Link
      href="/"
      className={cn('flex items-center gap-2.5 group', className)}
      aria-label="Al-Hikmah  –  Home"
    >
      <div
        className={cn(
          'rounded-full bg-gold/20 flex items-center justify-center ring-1 ring-gold/40 group-hover:bg-gold/30 transition-colors flex-shrink-0',
          isSmall ? 'w-8 h-8' : 'w-9 h-9',
        )}
      >
        <BookOpen
          className={cn('text-gold', isSmall ? 'w-4 h-4' : 'w-5 h-5')}
          aria-hidden="true"
        />
      </div>

      {/* Dual-script mark: Arabic calligraphic underlay + English primary */}
      <div
        className="relative flex-shrink-0"
        style={{ width: isSmall ? '126px' : '148px', height: isSmall ? '28px' : '34px' }}
      >
        {/* Arabic  –  decorative layer, larger, low opacity */}
        <span
          dir="rtl"
          lang="ar"
          aria-hidden="true"
          className="absolute inset-0 flex items-center justify-center text-gold select-none pointer-events-none whitespace-nowrap"
          style={{
            fontSize: isSmall ? '25px' : '30px',
            opacity: 0.22,
            letterSpacing: '0.04em',
          }}
        >
          الحكمة
        </span>
        {/* English  –  primary layer, solid */}
        <span
          className={cn(
            'absolute inset-0 flex items-center justify-center font-garamond font-semibold text-cream whitespace-nowrap',
            isSmall ? 'text-base tracking-wide' : 'text-xl tracking-widest',
          )}
        >
          Al-Hikmah
        </span>
      </div>
    </Link>
  );
}
