import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { HadithCollectionContent } from '@/components/content/HadithCollectionContent';
import { HadithCollectionPager } from '@/components/content/HadithCollectionPager';
import { HADITH_COLLECTIONS, getCollectionById } from '@/lib/data/collections';
import { fetchHadithPageBilingual } from '@/lib/hadith-api';
import { HADITH_PAGE_SIZE } from '@/lib/hadith-links';

interface Props {
  params: Promise<{ collection: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return HADITH_COLLECTIONS
    .filter(c => c.available && c.apiCollection)
    .map(c => ({ collection: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { collection } = await params;
  const col = getCollectionById(collection);
  if (!col) return {};
  return {
    title: col.englishName,
    description: col.description.slice(0, 160),
  };
}

export default async function CollectionPage({ params }: Props) {
  const { collection } = await params;

  const col = getCollectionById(collection);
  if (!col || !col.available || !col.apiCollection) notFound();

  // Fetched once at build time so page 1 ships as real HTML; if the CDN is
  // unreachable during the build the browser fetches it instead.
  const initialHadiths = await fetchHadithPageBilingual(col.apiCollection, 1, HADITH_PAGE_SIZE);
  const pages = Math.ceil(col.hadithCount / HADITH_PAGE_SIZE);

  return (
    <Suspense
      fallback={
        <HadithCollectionContent
          collectionId={collection}
          col={col}
          hadiths={initialHadiths}
          page={1}
          pages={pages}
          total={col.hadithCount}
          loading={initialHadiths.length === 0}
        />
      }
    >
      <HadithCollectionPager
        collectionId={collection}
        col={col}
        apiCollection={col.apiCollection}
        initialHadiths={initialHadiths}
      />
    </Suspense>
  );
}
