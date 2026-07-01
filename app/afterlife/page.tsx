import type { Metadata } from 'next';
import { AfterlifeContent } from '@/components/content/AfterlifeContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Life After Death: The Barzakh and the Day of Judgement | Al-Hikmah',
  description:
    "The complete Islamic teaching on what happens after death: the Angel of Death, life in the grave (Barzakh), the questioning by Munkar and Nakir, the trumpet, the resurrection, the Gathering, the Reckoning, the Scales, the Basin of the Prophet ﷺ, the Bridge over Hell, the Great Intercession, and the eternal abodes of Paradise and Hell.",
};

export default function AfterlifePage() {
  return <AfterlifeContent />;
}
