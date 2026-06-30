import type { Metadata } from 'next';
import { PrayerContent } from '@/components/content/PrayerContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'How to Pray | Al-Hikmah',
  description:
    'A comprehensive guide to Islamic prayer (Salah): per-country prayer times, the story and meaning of the adhan and iqamah, the five daily fard prayers with stories and proofs, ritual purification (wudu), the fourteen prayer postures with all authentic dhikr, and the after-prayer adhkar.',
};

export default function PrayerPage() {
  return <PrayerContent />;
}
