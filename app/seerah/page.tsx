import type { Metadata } from 'next';
import { SeerahContent } from '@/components/content/SeerahContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Seerah - Life of the Prophet',
  description:
    "The biography of the Prophet Muhammad ﷺ - from his birth in Makkah to the completion of the message of Islam.",
};

export default function SeerahPage() {
  return <SeerahContent />;
}
