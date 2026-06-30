import type { Metadata } from 'next';
import { NikahContent } from '@/components/content/NikahContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Nikah: Islamic Marriage',
  description: 'A comprehensive guide to Islamic marriage (Nikah): the conditions of a valid contract, the Mahr (dowry), the marriage sermon, duas for the bride and groom, forbidden marriages, rights and responsibilities, and the walimah feast.',
};

export default function NikahPage() {
  return <NikahContent />;
}
