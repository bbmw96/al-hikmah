import type { Metadata } from 'next';
import { GlossaryContent } from '@/components/content/GlossaryContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Islamic Glossary',
  description:
    'Key terms in Islamic theology, jurisprudence, hadith science, and history — explained clearly for all readers.',
};

export default function GlossaryPage() {
  return <GlossaryContent />;
}
