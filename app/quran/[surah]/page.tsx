import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSurahByTransliteration } from '@/lib/data/quran';
import { SurahDetailContent } from '@/components/content/SurahDetailContent';

interface Props {
  params: Promise<{ surah: string }>;
}

// ISR: render surah pages on first request and cache - avoids parallel Turbopack
// SSR-worker race condition that occurs when all 114 pages build simultaneously.
export const revalidate = 3600;
export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { surah: slug } = await params;
  const surah = getSurahByTransliteration(slug);
  if (!surah) return {};
  return {
    title: `Surah ${surah.englishName} (${surah.transliteration}): Quran ${surah.number}`,
    description: `${surah.overview} Occasion of revelation: ${surah.asbabalNuzul.slice(0, 120)}...`,
  };
}

export default async function SurahPage({ params }: Props) {
  const { surah: slug } = await params;
  const surah = getSurahByTransliteration(slug);
  if (!surah) notFound();

  return <SurahDetailContent surah={surah} />;
}
