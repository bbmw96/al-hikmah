import type { Metadata } from 'next';
import { MustalahHadithContent } from '@/components/content/MustalahHadithContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Mustalah al-Hadith: Sciences of Hadith | Al-Hikmah",
  description:
    "Mustalah al-Hadith is the methodology scholars use to authenticate the words and actions of the Prophet ﷺ. This guide explains the isnad, rijal criticism, the grading of hadiths into Sahih, Hasan, and Da'if, the Six Books, and the greatest hadith scholars in Islamic history.",
};

export default function MustalahHadithPage() {
  return <MustalahHadithContent />;
}
