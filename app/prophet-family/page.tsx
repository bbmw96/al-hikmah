import type { Metadata } from 'next';
import { ProphetFamilyContent } from '@/components/content/ProphetFamilyContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Family Tree of the Prophet Muhammad ﷺ',
  description:
    'Detailed family tree of the Prophet Muhammad ﷺ: lineage back to Ibrahim (Abraham), parents, guardians, wet-nurses, wives (Mothers of the Believers), seven children, and grandchildren including al-Hasan and al-Husayn.',
};

export default function ProphetFamilyPage() {
  return <ProphetFamilyContent />;
}
