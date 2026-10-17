import type { Metadata } from 'next';
import { Suspense } from 'react';
import { notFound } from 'next/navigation';
import { HADITH_COLLECTIONS, getCollectionById } from '@/lib/data/collections';
import { HadithViewer } from './HadithViewer';
import HadithDetailLoading from './loading';

interface Props {
  params: Promise<{ collection: string }>;
}

// One static page per collection; the hadith number arrives as ?n= and the
// text is fetched in the browser (36,000+ hadiths cannot be pre-built).
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
    title: `${col.shortName} Hadith`,
    description: `Hadith from ${col.englishName}: Arabic text with translation and scholarly grading.`,
  };
}

export default async function HadithViewPage({ params }: Props) {
  const { collection } = await params;
  const col = getCollectionById(collection);
  if (!col || !col.available || !col.apiCollection) notFound();

  return (
    <Suspense fallback={<HadithDetailLoading />}>
      <HadithViewer collection={col} />
    </Suspense>
  );
}
