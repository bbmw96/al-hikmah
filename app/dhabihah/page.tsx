import type { Metadata } from 'next';
import { DhabihahContent } from '@/components/content/DhabihahContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Dhabihah, Halal Slaughter and Permissible Meats',
  description:
    "How to render an animal halal to eat: the exact method of slaughter, the conditions on the slaughterer, the invocation of Allah's name, and which animals may or may not be eaten.",
};

export default function DhabihahPage() {
  return <DhabihahContent />;
}
