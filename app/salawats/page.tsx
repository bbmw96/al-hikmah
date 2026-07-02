import type { Metadata } from 'next';
import { SalawatsContent } from '@/components/content/SalawatsContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "The Other Salawats  –  Voluntary and Occasional Prayers",
  description:
    "Salat al-Istikharah, Tahajjud, Duha, Kusuf (eclipse), Istisqa (rain), Musafir (traveller), Hajah (need), Tawbah (repentance), Awwabin, and the Sujud al-Tilawah and al-Shukr. All 14 languages.",
};

export default function SalawatsPage() {
  return <SalawatsContent />;
}
