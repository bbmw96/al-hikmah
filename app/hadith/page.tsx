import type { Metadata } from 'next';
import { HadithListContent } from '@/components/ui/HadithListContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Hadith Collections',
  description:
    "Browse the Six Books, Nine Books, and other major collections of the Prophet's ﷺ traditions - with Arabic originals, contextual translations, and scholarly context.",
};

export default function HadithPage() {
  return <HadithListContent />;
}
