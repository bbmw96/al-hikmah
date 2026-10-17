'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { HadithCollectionContent } from '@/components/content/HadithCollectionContent';
import { fetchHadithPageBilingual, type HadithEntry } from '@/lib/hadith-api';
import type { HadithCollection } from '@/lib/data/collections';
import { HADITH_PAGE_SIZE } from '@/lib/hadith-links';

interface Props {
  collectionId: string;
  col: HadithCollection;
  apiCollection: string;
  initialHadiths: HadithEntry[];
}

// Page 1 is pre-built into the static HTML; other pages are fetched from the
// hadith CDN in the browser, because GitHub Pages cannot render on request.
export function HadithCollectionPager({ collectionId, col, apiCollection, initialHadiths }: Props) {
  const searchParams = useSearchParams();
  const total = col.hadithCount;
  const pages = Math.ceil(total / HADITH_PAGE_SIZE);
  const page = Math.min(Math.max(1, parseInt(searchParams.get('page') ?? '1', 10) || 1), pages);
  const usePrebuilt = page === 1 && initialHadiths.length > 0;

  const [fetched, setFetched] = useState<{ page: number; hadiths: HadithEntry[] } | null>(null);

  useEffect(() => {
    if (usePrebuilt) return;
    let cancelled = false;
    fetchHadithPageBilingual(apiCollection, (page - 1) * HADITH_PAGE_SIZE + 1, HADITH_PAGE_SIZE)
      .then(hadiths => { if (!cancelled) setFetched({ page, hadiths }); })
      .catch(() => { if (!cancelled) setFetched({ page, hadiths: [] }); });
    return () => { cancelled = true; };
  }, [apiCollection, page, usePrebuilt]);

  const hadiths = usePrebuilt ? initialHadiths : fetched?.page === page ? fetched.hadiths : [];
  const loading = !usePrebuilt && fetched?.page !== page;

  return (
    <HadithCollectionContent
      collectionId={collectionId}
      col={col}
      hadiths={hadiths}
      page={page}
      pages={pages}
      total={total}
      loading={loading}
    />
  );
}
