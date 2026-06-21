import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { getCollectionById, HADITH_COLLECTIONS } from '@/lib/data/collections';
import { fetchHadithPage } from '@/lib/hadith-api';

interface Props {
  params: Promise<{ collection: string }>;
  searchParams: Promise<{ page?: string }>;
}

export async function generateStaticParams() {
  return HADITH_COLLECTIONS.filter(c => c.available).map(c => ({ collection: c.id }));
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
  const count = Math.min(PAGE_SIZE, total - (page - 1) * PAGE_SIZE);

  const hadiths = await fetchHadithPage(col.apiCollection, startNumber, count);

  if (hadiths.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <p className="text-forest/50">Unable to load hadith at this time. Please try again shortly.</p>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title={col.englishName}
        arabicTitle={col.arabicName}
        subtitle={`${col.author} · ${col.authorDates} · ${col.hadithCount.toLocaleString()} traditions`}
      />

      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Collection info */}
        <div className="card-islamic mb-10">
          <p className="text-forest/70 leading-relaxed text-sm">{col.description}</p>
        </div>

        {/* Hadith list */}
        <div className="space-y-4">
          {hadiths.map(hadith => (
            <Link
              key={hadith.hadithnumber}
              href={`/hadith/${collection}/${hadith.hadithnumber}`}
              className="card-islamic group flex gap-4 hover:-translate-y-0.5 transition-transform duration-150"
            >
              <span className="w-10 h-10 rounded-full bg-gold/15 text-gold text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-0.5">
                {hadith.hadithnumber}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-forest/70 text-sm leading-relaxed line-clamp-3">
                  {hadith.text}
                </p>
                {hadith.grades && hadith.grades.length > 0 && (
                  <p className="text-xs text-gold/60 mt-2">
                    {hadith.grades[0].graded_by}: {hadith.grades[0].grade}
                  </p>
                )}
              </div>
              <ChevronRight className="w-4 h-4 text-gold/40 flex-shrink-0 mt-1 group-hover:text-gold transition-colors" aria-hidden="true" />
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {pages > 1 && (
          <nav className="flex items-center justify-between mt-10" aria-label="Pagination">
            {page > 1 ? (
              <Link
                href={`/hadith/${collection}?page=${page - 1}`}
                className="btn-outline flex items-center gap-1.5 text-sm"
              >
                <ChevronLeft className="w-4 h-4" aria-hidden="true" />
                Previous
              </Link>
            ) : (
              <div />
            )}
            <p className="text-forest/50 text-sm">
              Page {page} of {pages} &middot; {total.toLocaleString()} hadiths
            </p>
            {page < pages ? (
              <Link
                href={`/hadith/${collection}?page=${page + 1}`}
                className="btn-outline flex items-center gap-1.5 text-sm"
              >
                Next
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            ) : (
              <div />
            )}
          </nav>
        )}
      </div>
    </>
  );
}
