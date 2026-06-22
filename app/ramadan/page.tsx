import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { RamadanContent } from '@/components/content/RamadanContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Ramadan: The Month of Fasting',
  description: 'A complete guide to Ramadan: the obligation of fasting, conditions, what breaks the fast, Suhur and Iftar, Taraweeh, Laylatul Qadr, Itikaf, Zakat al-Fitr, and the spiritual dimensions of the blessed month.',
};

export default function RamadanPage() {
  return (
    <>
      <PageHeader
        title="Ramadan: The Month of Fasting"
        arabicTitle="رَمَضَان"
        subtitle="Ramadan is the ninth month of the Islamic calendar: the month in which the Quran was revealed, in which the gates of Paradise are opened, the gates of Hell are closed, and the devils are chained. Its fast is the fourth pillar of Islam."
      />
      <RamadanContent />
    </>
  );
}
