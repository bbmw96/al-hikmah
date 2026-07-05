import type { Metadata } from 'next';
import { AhkamContent } from '@/components/content/AhkamContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'The Five Ahkam, Halal, Haram, Makruh, Wajib, Mustahabb, Mubah',
  description:
    "The five categories of legal ruling in Islam: what each means, the classical scholarly definitions, examples across worship and daily life, and how each was derived from Quran and Sunnah.",
};

export default function AhkamPage() {
  return <AhkamContent />;
}
