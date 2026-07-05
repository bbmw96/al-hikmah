import type { Metadata } from 'next';
import { ToiletEtiquetteContent } from '@/components/content/ToiletEtiquetteContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Adab al-Khala, Etiquettes of the Toilet',
  description:
    "The Sunnah manners of relieving oneself: what to say, which foot to enter with, what to avoid, and the reasons behind each ruling.",
};

export default function ToiletEtiquettePage() {
  return <ToiletEtiquetteContent />;
}
