import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROPHETS, getProphetById } from '@/lib/data/prophets';
import { ProphetDetailContent } from '@/components/content/ProphetDetailContent';

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return PROPHETS.map(p => ({ slug: p.id }));
}

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
