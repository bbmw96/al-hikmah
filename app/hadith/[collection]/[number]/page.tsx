import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCollectionById } from '@/lib/data/collections';
import { fetchHadith } from '@/lib/hadith-api';
import { HadithDetail } from './HadithDetail';

export const revalidate = 3600; // re-render at most once per hour; cached by Next.js CDN between renders
export const dynamicParams = true; // allow on-demand generation of any hadith number

// Skip build-time pre-rendering. The previous version pre-rendered ~262 pages,
// each calling fetchHadith() which does 2 CDN fetches × 3 fallback hosts × 4-8s
// timeouts = 500+ serialised network calls that regularly busted past the
// build-worker 60s timeout. With an empty list, every page is generated on the
// first request and cached for an hour by revalidate=3600.
//
// Reference: the HADITH_COLLECTIONS import is kept above for the metadata route
// and other dependants — only the build-time enumeration is dropped.
export async function generateStaticParams(): Promise<{ collection: string; number: string }[]> {
  return [];
}

interface Props {
  params: Promise<{ collection: string; number: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { collection, number } = await params;
  const col = getCollectionById(collection);
  if (!col) return {};
  return {
    title: `${col.shortName} Hadith ${number}`,
    description: `Hadith ${number} from ${col.englishName} - Arabic text with contextual translation and scholarly context.`,
  };
}

export default async function HadithPage({ params }: Props) {
  const { collection, number } = await params;
  const hadithNumber = parseInt(number, 10);

  const col = getCollectionById(collection);
  if (!col || !col.available || !col.apiCollection || isNaN(hadithNumber)) notFound();

  const { english, arabic, grades, found } = await fetchHadith(col.apiCollection, hadithNumber);

  if (!found) notFound();

  return (
    <HadithDetail
      collection={col}
      hadithNumber={hadithNumber}
      englishText={english}
      arabicText={arabic}
      grades={grades}
    />
  );
}
