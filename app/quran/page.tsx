import type { Metadata } from 'next';
import { QuranListContent } from '@/components/ui/QuranListContent';

export const metadata: Metadata = {
  title: 'The Quran: Revelation & Context',
  description:
    'All 114 surahs with their occasions of revelation (Asbab al-Nuzul), Makki and Madani classification, key themes, and the stories behind every chapter.',
};

export default function QuranPage() {
  return <QuranListContent />;
}
