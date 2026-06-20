'use client';

import { useState } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { SUPPORTED_LANGUAGES, type LanguageCode } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface LanguageSelectorProps {
  value: LanguageCode;
  onChange: (code: LanguageCode) => void;
  className?: string;
  label?: string;
}

export function LanguageSelector({ value, onChange, className, label = 'Language' }: LanguageSelectorProps) {
  const [open, setOpen] = useState(false);

  const selected = SUPPORTED_LANGUAGES.find(l => l.code === value) ?? SUPPORTED_LANGUAGES[0];

  return (
    <div className={cn('relative inline-block', className)}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gold/30 bg-forest/5 hover:bg-forest/10 text-sm font-medium text-forest dark:text-cream transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${label}: ${selected.label}`}
      >
        <Globe className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true" />
        <span>{selected.nativeLabel}</span>
        <ChevronDown className={cn('w-4 h-4 text-gold/70 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>

      {open && (
        <div
          className="absolute top-full mt-1 left-0 z-50 min-w-[10rem] rounded-xl shadow-xl border border-gold/20 bg-cream dark:bg-midnight overflow-hidden"
          role="listbox"
          aria-label={label}
        >
          {SUPPORTED_LANGUAGES.map(lang => (
            <button
              key={lang.code}
              role="option"
              aria-selected={lang.code === value}
              onClick={() => {
                onChange(lang.code);
                setOpen(false);
              }}
              className={cn(
                'w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors',
                lang.code === value
                  ? 'bg-gold/10 text-forest dark:text-gold font-medium'
                  : 'text-forest/80 dark:text-cream/70 hover:bg-gold/5',
              )}
            >
              <span>{lang.label}</span>
              <span className="text-xs text-gold/70" dir={lang.dir === 'rtl' ? 'rtl' : 'ltr'} lang={lang.code}>
                {lang.nativeLabel}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
