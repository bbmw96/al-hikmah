import type { Metadata } from 'next';
import { ProphetsListContent } from '@/components/content/ProphetsListContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Prophets of Islam',
  description:
    'Learn about the 25 prophets named in the Quran. Islamic tradition holds that Allah sent approximately 124,000 prophets to all nations - here are those mentioned by name.',
};

export default function ProphetsPage() {
  return <ProphetsListContent />;
}
