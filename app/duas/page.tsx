import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { DuasListContent } from '@/components/ui/DuasListContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Du'as & Supplications",
  description:
    "Authenticated supplications from the Quran and Sunnah, organised by category - morning, evening, prayer, Hajj, distress, and more.",
};

export default function DuasPage() {
  return (
    <>
      <PageHeader
        title="Du'as & Supplications"
        arabicTitle="الأدعية والأذكار"
        subtitle="The Prophet Muhammad ﷺ described du'a as 'the essence of worship'. Below are authenticated supplications from the Quran and the Prophetic Sunnah."
      />
      <DuasListContent />
    </>
  );
}
