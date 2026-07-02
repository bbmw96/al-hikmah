import type { Metadata } from 'next';
import { EndTimesContent } from '@/components/content/EndTimesContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'The Signs of the Hour | Al-Hikmah',
  description:
    "The Hour will come, but only Allah knows when. This page covers the minor signs (ashrat sughra) that stretch from the Prophet's ﷺ own lifetime to shortly before the end, and the ten major signs (ashrat kubra) in sequence: the Smoke, the Dajjal, the Beast of the Earth, the sun rising from the west, the descent of 'Isa ibn Maryam ﷺ, Ya'juj and Ma'juj, three landslides, and a fire from Yemen.",
};

export default function EndTimesPage() {
  return <EndTimesContent />;
}
