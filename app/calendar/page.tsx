import type { Metadata } from 'next';
import { CalendarContent } from '@/components/content/CalendarContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Islamic Calendar',
  description: 'The Islamic lunar calendar — the twelve months of the Hijri year with their significance and key dates.',
};

export default function CalendarPage() {
  return <CalendarContent />;
}
