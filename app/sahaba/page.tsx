import type { Metadata } from 'next';
import { SahabaContent } from '@/components/content/SahabaContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'The Companions of the Prophet ﷺ (Sahaba)',
  description:
    'Who is a Sahabi? The definition of a Companion by Imam al-Bukhari and Ibn Hajar, the Quranic praise of the Muhajirun and the Ansar, and the theological weight of loving and honouring the generation Allah chose to carry Islam to the world.',
};

export default function SahabaPage() {
  return <SahabaContent />;
}
