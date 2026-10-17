import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SURAHS, getSurahByTransliteration } from '@/lib/data/quran';
import { SurahDetailContent } from '@/components/content/SurahDetailContent';

interface Props {
  params: Promise<{ surah: string }>;
}

// All 114 surahs are pre-built (static export); next.config.ts keeps the build
// single-worker so the Turbopack SSR-worker race cannot occur.
export const dynamicParams = false;

export function generateStaticParams() {
  return SURAHS.map(s => ({ surah: s.transliteration }));
}

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
