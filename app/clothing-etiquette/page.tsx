import type { Metadata } from 'next';
import { ClothingEtiquetteContent } from '@/components/content/ClothingEtiquetteContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Adab al-Libas  –  Etiquettes of Dressing',
  description:
    "The Sunnah of putting on and removing clothes, the du'a for new garments, the wisdom of modesty, and the specific rulings on what men and women may wear.",
};

export default function ClothingEtiquettePage() {
  return <ClothingEtiquetteContent />;
}
