import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { TaharahContent } from '@/components/content/TaharahContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Taharah: Ritual Purity | Al-Hikmah',
  description:
    'Taharah (ritual purity) is the foundation of Islamic worship. This overview explains physical and ritual purity, the three forms of purification (wudu, ghusl, and tayamum), types of impurity (najasah), and why purity is the gate to prayer.',
};

export default function TaharahPage() {
  return (
    <>
      <PageHeader
        title="Taharah: Ritual Purity"
        arabicTitle="الطَّهَارَة"
        subtitle="The foundation of Islamic worship — the condition of ritual cleanliness that opens the door to prayer and the presence of Allah"
      />
      <TaharahContent />
    </>
  );
}
