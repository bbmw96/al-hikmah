import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { TawheedContent } from '@/components/content/TawheedContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Tawheed: Islamic Monotheism',
  description: 'A comprehensive guide to Tawheed: the three categories of divine oneness, the shahada and its meaning, the danger of shirk, and why Tawheed is the foundation of all Islam and the decisive matter on the Day of Judgement.',
};

export default function TawheedPage() {
  return (
    <>
      <PageHeader
        title="Tawheed: Divine Oneness"
        arabicTitle="التَّوْحِيد"
        subtitle="Tawheed is the cornerstone of Islam: the first message of every prophet, the first question in the grave, and the decisive matter on the Day of Judgement. Understanding it deeply is an obligation upon every Muslim."
      />
      <TawheedContent />
    </>
  );
}
