import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { GhuslContent } from '@/components/content/GhuslContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Ghusl: Full-Body Purification | Al-Hikmah',
  description:
    'Ghusl is the full-body ritual purification required after major ritual impurity (janabah). Learn what makes it obligatory, the correct method according to the Sunnah, what it permits, and its spiritual significance in Islamic practice.',
};

export default function GhuslPage() {
  return (
    <>
      <PageHeader
        title="Ghusl: Full-Body Purification"
        arabicTitle="الغُسْل"
        subtitle="The major ritual purification that lifts the state of janabah and restores full eligibility for worship"
      />
      <GhuslContent />
    </>
  );
}
