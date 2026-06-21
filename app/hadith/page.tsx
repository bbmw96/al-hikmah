import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { HadithListContent } from '@/components/ui/HadithListContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Hadith Collections',
  description:
    "Browse the Six Books, Nine Books, and other major collections of the Prophet's ﷺ traditions - with Arabic originals, contextual translations, and scholarly context.",
};

export default function HadithPage() {
  return (
    <>
      <PageHeader
        title="Hadith Collections"
        arabicTitle="كتب الحديث النبوي الشريف"
        subtitle="The recorded sayings, actions, and approvals of the Prophet Muhammad ﷺ - preserved across the centuries by the great scholars of Islam."
      />
      <HadithListContent />
    </>
  );
}
