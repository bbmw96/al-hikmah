import type { Metadata } from 'next';
import { EidContent } from '@/components/content/EidContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Eid Prayers: The Two Celebrations | Al-Hikmah',
  description:
    "Eid al-Fitr and Eid al-Adha are the two annual celebrations of Islam. Learn about their prayers, the extra takbeers, Zakat al-Fitr before the prayer, the Qurbani sacrifice, etiquettes of the blessed days, and the prophetic traditions that make them unique.",
};

export default function EidPage() {
  return <EidContent />;
}
