import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProphetById } from '@/lib/data/prophets';
import { ProphetDetailContent } from '@/components/content/ProphetDetailContent';

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prophet = getProphetById(slug);
  if (!prophet) return {};
  return {
    title: `Prophet ${prophet.englishName} (peace be upon him)`,
    description: `Learn about Prophet ${prophet.englishName} - his lineage, family, the nation he was sent to, his miracles, and his message.`,
  };
}

export default async function ProphetPage({ params }: Props) {
  const { slug } = await params;
  const prophet = getProphetById(slug);
  if (!prophet) notFound();

  return <ProphetDetailContent slug={slug} />;
}
