'use client';

import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/context';
import { PROPHETS } from '@/lib/data/prophets';

export function ProphetGrid() {
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {PROPHETS.map((prophet) => (
        <Link
          key={prophet.id}
          href={`/prophets/${prophet.id}`}
          className="card-islamic group text-center flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform duration-200"
        >
          {/* Sequence number */}
          <span className="w-8 h-8 rounded-full bg-gold/15 text-gold text-xs font-semibold flex items-center justify-center">
            {prophet.prophetNumber}
          </span>

          {/* Arabic name */}
          <p
            dir="rtl"
            lang="ar"
            className="arabic text-forest"
            aria-hidden="true"
          >
            {prophet.arabicName}
          </p>

          {/* English name */}
          <h2 className="font-garamond text-lg font-semibold text-forest group-hover:text-gold transition-colors">
            {prophet.englishName}
          </h2>

          {prophet.title && (
            <p className="text-gold/70 text-xs italic">{prophet.title}</p>
          )}

          <p className="text-forest/50 text-xs leading-relaxed mt-auto">
            {t('prophets.sentto')} {prophet.nationSentTo}
          </p>
        </Link>
      ))}
    </div>
  );
}
