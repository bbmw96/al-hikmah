import type { Metadata } from 'next';
import { DajjalContent } from '@/components/content/DajjalContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'The Dajjal (The False Messiah) | Al-Hikmah',
  description:
    "Every prophet warned his people against the Dajjal, but our Prophet ﷺ described him in unmatched detail. This page covers his appearance, his powers, his forty-day sojourn on earth, the false paradise and hell he carries, the word 'Kafir' written between his eyes, and the protection given to the ummah: memorising and reciting the first ten verses of Surah al-Kahf.",
};

export default function DajjalPage() {
  return <DajjalContent />;
}
