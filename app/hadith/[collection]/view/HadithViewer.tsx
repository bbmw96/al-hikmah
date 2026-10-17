'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';
import { fetchHadith, type HadithGrade } from '@/lib/hadith-api';
import type { HadithCollection } from '@/lib/data/collections';
import { HadithDetail } from './HadithDetail';
import HadithDetailLoading from './loading';

interface Loaded {
  key: string;
  found: boolean;
  english: string | null;
  arabic: string | null;
  grades?: HadithGrade[];
}

export function HadithViewer({ collection }: { collection: HadithCollection }) {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const raw = searchParams.get('n') ?? '';
  const hadithNumber = /^\d+$/.test(raw) ? parseInt(raw, 10) : NaN;
  const valid = hadithNumber >= 1 && hadithNumber <= collection.hadithCount && !!collection.apiCollection;
  const key = `${collection.id}:${hadithNumber}`;

  const [loaded, setLoaded] = useState<Loaded | null>(null);

  useEffect(() => {
    if (!valid || !collection.apiCollection) return;
    let cancelled = false;
    fetchHadith(collection.apiCollection, hadithNumber)
      .then(r => { if (!cancelled) setLoaded({ key, ...r }); })
      .catch(() => { if (!cancelled) setLoaded({ key, found: false, english: null, arabic: null }); });
    return () => { cancelled = true; };
  }, [collection.apiCollection, hadithNumber, key, valid]);

  if (valid && loaded?.key !== key) return <HadithDetailLoading />;

  if (!valid || !loaded?.found) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <p className="text-forest/70 mb-6">{t(valid ? 'hadith.unable_to_load' : 'hadith.not_found')}</p>
        <Link
          href={`/hadith/${collection.id}`}
          className="inline-flex items-center gap-1.5 text-sm text-gold-deep hover:text-forest transition-colors"
        >
          <ChevronLeft className="w-4 h-4" aria-hidden="true" />
          {collection.englishName}
        </Link>
      </div>
    );
  }

  return (
    <HadithDetail
      key={key}
      collection={collection}
      hadithNumber={hadithNumber}
      englishText={loaded.english}
      arabicText={loaded.arabic}
      grades={loaded.grades}
    />
  );
}
