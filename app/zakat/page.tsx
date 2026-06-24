import type { Metadata } from 'next';
import { ZakatContent } from '@/components/content/ZakatContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Zakat: The Third Pillar | Al-Hikmah',
  description:
    "Zakat: the obligatory almsgiving that is the Third Pillar of Islam. Learn its Quranic basis, nisab threshold, who must pay, the eight categories of eligible recipients, types of Zakat, and the spiritual act of purifying one's wealth.",
};

export default function ZakatPage() {
  return <ZakatContent />;
}
