import type { Metadata } from 'next';
import { FiqhContent } from '@/components/content/FiqhContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Fiqh: Islamic Jurisprudence',
  description: 'An introduction to Islamic jurisprudence (fiqh): the five categories of ruling (Ahkam al-Shar\'iyyah), the sources of Islamic law, and a brief overview of the four major schools of thought.',
};

export default function FiqhPage() {
  return <FiqhContent />;
}
