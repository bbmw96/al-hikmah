import type { Metadata } from 'next';
import { MasjidEtiquetteContent } from '@/components/content/MasjidEtiquetteContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Etiquettes of the Masjid',
  description:
    "The Sunnah manners of entering, being in, and leaving the House of Allah  –  and the history of the masjid as an institution.",
};

export default function MasjidEtiquettePage() {
  return <MasjidEtiquetteContent />;
}
