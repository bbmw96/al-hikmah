import type { Metadata } from 'next';
import { AboutContent } from '@/components/content/AboutContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Al-Hikmah - a scholarly Islamic knowledge resource for Muslims and non-Muslims alike.',
};

export default function AboutPage() {
  return <AboutContent />;
}
