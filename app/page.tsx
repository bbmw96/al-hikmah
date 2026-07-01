import { HeroSection } from '@/components/ui/HeroSection';
import { SiteHighlights } from '@/components/ui/SiteHighlights';
import { ExploreSection } from '@/components/ui/ExploreSection';
import { FeaturedCollections } from '@/components/ui/FeaturedCollections';
import { CTABanner } from '@/components/ui/CTABanner';

export const dynamic = 'force-static';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Site scale + depth at a glance */}
      <SiteHighlights />

      {/* Quick access grid */}
      <ExploreSection />

      {/* Featured Hadith Collections */}
      <FeaturedCollections />

      {/* Call to prayer banner */}
      <CTABanner />
    </>
  );
}
