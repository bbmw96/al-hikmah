import type { Metadata } from 'next';
import { JinnContent } from '@/components/content/JinnContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'The Jinn | Al-Hikmah',
  description:
    "A parallel creation of Allah, formed from smokeless fire before humanity, hidden from ordinary sight. This page covers the creation of the jinn, Iblis, Surah al-Jinn, the categories of jinn, sihr, waswas, the Qarin, protection with Ayat al-Kursi and the Mu'awwidhat, ruqyah, and the Day of Judgement for the jinn.",
};

export default function JinnPage() {
  return <JinnContent />;
}
