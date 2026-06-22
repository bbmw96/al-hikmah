'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ProphetGrid } from '@/components/ui/ProphetGrid';
import { useLanguage } from '@/lib/i18n/context';
import { PROPHETS_CONTENT } from '@/lib/i18n/content/prophets-content';
import type { ProphetsContentKey } from '@/lib/i18n/content/prophets-content';

function usePC() {
  const { lang } = useLanguage();
  return (key: ProphetsContentKey): string => {
    const entry = PROPHETS_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry['en'] ?? key;
  };
}

export function ProphetsListContent() {
  const tc = usePC();

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="الأنبياء والمرسلون"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto mb-12 bg-gold/8 border border-gold/25 rounded-xl p-6 text-center">
          <p className="text-forest/80 text-sm leading-relaxed mb-3">
            {tc('note_quran_count')}
          </p>
          <p className="text-forest/60 text-sm leading-relaxed">
            {tc('note_124k')}
          </p>
          <p className="text-forest/40 text-xs italic mt-4">
            {tc('note_verse')}
          </p>
        </div>

        <ProphetGrid />
      </div>
    </>
  );
}
