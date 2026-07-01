import type { Metadata } from 'next';
import { ProphetWarsContent } from '@/components/content/ProphetWarsContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Wars and Conflicts of the Earlier Prophets',
  description:
    'The recurring struggle between truth and falsehood from Habil and Qabil to Isa ﷺ: the tyrants who opposed the messengers, how Allah vindicated His prophets, and the Islamic principles for handling Isra’iliyyat material in the classical Tafsir tradition.',
};

export default function ProphetWarsPage() {
  return <ProphetWarsContent />;
}
