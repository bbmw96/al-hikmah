import type { Metadata } from 'next';
import { EatingEtiquetteContent } from '@/components/content/EatingEtiquetteContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Adab al-Ta'am, Etiquettes of Eating",
  description:
    "How to eat, with what to eat, what to say before and after, and what the Prophet ﷺ ate, avoided, and taught about food and drink.",
};

export default function EatingEtiquettePage() {
  return <EatingEtiquetteContent />;
}
