import type { Metadata } from 'next';
import { UlumQuranContent } from '@/components/content/UlumQuranContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Ulum al-Quran: Sciences of the Quran | Al-Hikmah",
  description:
    "Ulum al-Quran (Sciences of the Quran) encompasses all disciplines that illuminate the Quran's revelation, compilation, classification, variant readings, occasions of revelation, and rules of recitation. This guide covers: wahy, the history of compilation, Makki and Madani divisions, Asbab al-Nuzul, the Qira'at, Tajweed, and the miraculous nature of the Quran.",
};

export default function UlumQuranPage() {
  return <UlumQuranContent />;
}
