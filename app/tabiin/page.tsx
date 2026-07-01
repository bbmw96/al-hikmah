import type { Metadata } from 'next';
import { TabiinContent } from '@/components/content/TabiinContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "The Tabi'in and Tabi al-Tabi'in",
  description:
    "The two generations after the Companions of the Prophet Ṣ: the Successors who met a Sahabi, and the Successors of the Successors who met a Tabi'i. Notable jurists, hadith masters, the fifth Rightly-Guided caliph Umar ibn Abd al-Aziz, and the four eponymous Sunni imams: Abu Hanifa, Malik, al-Shafi'i and Ahmad ibn Hanbal.",
};

export default function TabiinPage() {
  return <TabiinContent />;
}
