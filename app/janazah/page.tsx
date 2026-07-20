import type { Metadata } from 'next';
import { JanazahContent } from '@/components/content/JanazahContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Salat al-Janazah, The Funeral Prayer",
  description:
    "Salat al-Janazah: the communal-obligation prayer with four takbirs offered for every deceased Muslim. Ruling, preparation of the body, the method, and the classical du'a from Sahih Muslim 963.",
};

export default function JanazahPage() {
  return <JanazahContent />;
}
