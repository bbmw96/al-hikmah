import type { Metadata } from 'next';
import { DuasListContent } from '@/components/ui/DuasListContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Du'as & Supplications",
  description:
    "Authenticated supplications from the Quran and Sunnah, organised by category - morning, evening, prayer, Hajj, distress, and more.",
};

export default function DuasPage() {
  return <DuasListContent />;
}
