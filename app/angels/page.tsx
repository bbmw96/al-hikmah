import type { Metadata } from 'next';
import { AngelsContent } from '@/components/content/AngelsContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'The Angels (Al-Mala\'ikah) | Al-Hikmah',
  description:
    "Belief in the Angels is the second pillar of Iman. Created from light, they neither eat nor sleep, do not sin, and worship Allah continuously. This page introduces Jibril, Mikail, Israfil, the Angel of Death, the Kiraman Katibin scribes, Munkar and Nakir, the Bearers of the Throne, Malik of Hell, Ridwan of Paradise, and the Angels of Ranks.",
};

export default function AngelsPage() {
  return <AngelsContent />;
}
