import type { Metadata } from 'next';
import { TayamumContent } from '@/components/content/TayamumContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Tayamum: Dry Ablution | Al-Hikmah',
  description:
    'Complete guide to Tayamum: the story of its revelation during the expedition of Banu al-Mustaliq, Quranic permission in al-Maidah 5:6 and an-Nisa 4:43, conditions, step-by-step method, and scholarly positions.',
};

export default function TayamumPage() {
  return <TayamumContent />;
}
