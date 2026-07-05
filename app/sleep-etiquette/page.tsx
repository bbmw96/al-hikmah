import type { Metadata } from 'next';
import { SleepEtiquetteContent } from '@/components/content/SleepEtiquetteContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Adab al-Nawm  –  Etiquettes of Sleep',
  description:
    "The Sunnah of preparing for sleep, the du'as before and on waking, the reasons behind each practice, and what the Prophet ﷺ said about the soul's condition in sleep.",
};

export default function SleepEtiquettePage() {
  return <SleepEtiquetteContent />;
}
