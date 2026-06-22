import type { Metadata } from 'next';
import { NinetyNineNamesContent } from '@/components/content/NinetyNineNamesContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'The 99 Names of Allah',
  description: "Allah has ninety-nine names; whoever memorises them all will enter Paradise. Explore and search all 99 beautiful names of Allah with their meanings and Quranic references.",
};

export default function NinetyNineNamesPage() {
  return <NinetyNineNamesContent />;
}
