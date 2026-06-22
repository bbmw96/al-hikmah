import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HADITH_COLLECTIONS, getCollectionById } from '@/lib/data/collections';
import { fetchHadith } from '@/lib/hadith-api';
import { HadithDetail } from './HadithDetail';

export const revalidate = 3600; // re-render at most once per hour; cached by Next.js CDN between renders

export async function generateStaticParams(): Promise<{ collection: string; number: string }[]> {
  const params: { collection: string; number: string }[] = [];
  for (const col of HADITH_COLLECTIONS.filter(c => c.available && c.apiCollection)) {
    const limit = col.hadithCount <= 100 ? col.hadithCount : 20;
    for (let i = 1; i <= limit; i++) {
      params.push({ collection: col.id, number: String(i) });
    }
  }
  return params;
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
