import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HadithCollectionContent } from '@/components/content/HadithCollectionContent';
import { HADITH_COLLECTIONS, getCollectionById } from '@/lib/data/collections';
import { fetchHadithPageBilingual } from '@/lib/hadith-api';

interface Props {
  params: Promise<{ collection: string }>;
  searchParams: Promise<{ page?: string }>;
}

export const revalidate = 3600;
export const dynamicParams = true;

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

const PAGE_SIZE = 20;

export default async function CollectionPage({ params, searchParams }: Props) {
  const { collection } = await params;
  const { page: pageParam } = await searchParams;

  const col = getCollectionById(collection);
  if (!col || !col.available || !col.apiCollection) notFound();

  const total = col.hadithCount;
  const pages = Math.ceil(total / PAGE_SIZE);
  const page = Math.min(Math.max(1, parseInt(pageParam ?? '1', 10) || 1), pages);
  const startNumber = (page - 1) * PAGE_SIZE + 1;

  const hadiths = await fetchHadithPageBilingual(col.apiCollection, startNumber, PAGE_SIZE);

  return (
    <HadithCollectionContent
      collectionId={collection}
      col={col}
      hadiths={hadiths}
      page={page}
      pages={pages}
      total={total}
    />
  );
}
