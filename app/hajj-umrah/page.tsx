import type { Metadata } from 'next';
import { HajjUmrahContent } from '@/components/content/HajjUmrahContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Hajj & Umrah Guide',
  description:
    "A comprehensive step-by-step guide to Hajj and Umrah - the greater and lesser pilgrimages - with the wisdom, jurisprudence, and supplications behind each rite.",
};

export default function HajjUmrahPage() {
  return <HajjUmrahContent />;
}
