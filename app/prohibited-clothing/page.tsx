import type { Metadata } from 'next';
import { ProhibitedClothingContent } from '@/components/content/ProhibitedClothingContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Prohibited Materials and Colours in Clothing',
  description:
    "Silk for men, gold jewellery for men, garments of pride, imitation of the opposite gender, and the pure red garment  –  the specific hadith prohibitions and the wisdom behind each.",
};

export default function ProhibitedClothingPage() {
  return <ProhibitedClothingContent />;
}
