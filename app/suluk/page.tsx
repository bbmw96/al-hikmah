import type { Metadata } from 'next';
import { SulukContent } from '@/components/content/SulukContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Suluk: The Islamic Spiritual Path',
  description: 'The path of purifying the soul and drawing closer to Allah: the three levels of the deen, diseases of the heart and their cures, the virtues of dhikr, key spiritual practices, and the conditions of sincere repentance.',
};

export default function SulukPage() {
  return <SulukContent />;
}
