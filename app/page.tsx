import Link from 'next/link';
import {
  BookOpen,
  Users,
  Heart,
  Compass,
  Star,
  ScrollText,
  ArrowRight,
} from 'lucide-react';
import { IslamicPattern } from '@/components/ui/IslamicPattern';
import { HeroSection } from '@/components/ui/HeroSection';
import { FadeIn } from '@/components/ui/FadeIn';
import { StaggerGroup, StaggerItem } from '@/components/ui/StaggerGroup';
import { HADITH_COLLECTIONS } from '@/lib/data/collections';

const QUICK_ACCESS = [
  {
    icon: BookOpen,
    title: 'Hadith Collections',
    arabicTitle: 'الأحاديث النبوية',
    description:
      'Browse authentic hadith from the Six Books, Nine Books, and other major collections - with Arabic originals and contextual translations.',
    href: '/hadith',
    colour: 'bg-forest',
  },
  {
    icon: Users,
    title: 'Prophets of Islam',
    arabicTitle: 'الأنبياء والمرسلون',
    description:
      'Learn about all 25 prophets mentioned in the Quran - their lineage, the nations they were sent to, their miracles, and their stories.',
    href: '/prophets',
    colour: 'bg-midnight',
  },
  {
    icon: Heart,
    title: "Du'as & Supplications",
    arabicTitle: 'الأدعية والأذكار',
    description:
      "Over 100 authenticated supplications from the Quran and Sunnah, organised by category - morning, evening, prayer, Hajj, distress, and more.",
    href: '/duas',
    colour: 'bg-forest',
  },
  {
    icon: Compass,
    title: 'Hajj & Umrah Guide',
    arabicTitle: 'الحج والعمرة',
    description:
      "A step-by-step guide to the greater and lesser pilgrimages, with the wisdom, jurisprudence, and supplications behind each rite.",
    href: '/hajj-umrah',
    colour: 'bg-midnight',
  },
  {
    icon: Star,
    title: '99 Names of Allah',
    arabicTitle: 'أسماء الله الحسنى',
    description:
      "All 99 beautiful names of Allah with their Arabic, transliteration, meaning, and scholarly explanation of each attribute.",
    href: '/99-names',
    colour: 'bg-forest',
  },
  {
    icon: ScrollText,
    title: 'Seerah - Life of the Prophet',
    arabicTitle: 'السيرة النبوية',
    description:
      'The biography of the Prophet Muhammad ﷺ - from his birth in Makkah to the completion of the message of Islam.',
    href: '/seerah',
    colour: 'bg-midnight',
  },
];

const FEATURED_COLLECTIONS = HADITH_COLLECTIONS.filter(c => c.available).slice(0, 4);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Quick access grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <FadeIn className="text-center mb-12">
          <h2 className="section-title text-3xl md:text-4xl font-garamond font-semibold text-forest">
            Explore Al-Hikmah
          </h2>
          <p className="text-forest/60 mt-4 text-lg max-w-xl mx-auto">
            Navigate authentic Islamic knowledge, from the words of the Prophet ﷺ to the wisdom of the ages.
          </p>
        </FadeIn>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUICK_ACCESS.map(item => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <Link
                  href={item.href}
                  className="card-islamic group flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200 h-full"
                >
                  <div className={`w-12 h-12 rounded-xl ${item.colour} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-6 h-6 text-gold" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p
                      dir="rtl"
                      lang="ar"
                      className="arabic-sm text-gold/70 mb-1"
                      aria-hidden="true"
                    >
                      {item.arabicTitle}
                    </p>
                    <h3 className="font-garamond text-xl font-semibold text-forest mb-2 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-forest/60 text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-1 text-gold text-sm font-medium mt-auto">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </section>

      {/* Featured Hadith Collections */}
      <section className="bg-forest/5 border-y border-gold/10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="flex items-center justify-between mb-10">
            <div>
              <h2 className="section-title text-2xl md:text-3xl font-garamond font-semibold text-forest">
                Featured Hadith Collections
              </h2>
              <p className="text-forest/60 mt-2">The most revered collections of the Prophet's ﷺ words</p>
            </div>
            <Link href="/hadith" className="btn-outline hidden sm:flex items-center gap-2 text-sm">
              All Collections
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </FadeIn>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {FEATURED_COLLECTIONS.map(col => (
              <StaggerItem key={col.id}>
              <Link
                href={`/hadith/${col.id}`}
                className="card-forest group h-full flex flex-col"
              >
                <p
                  dir="rtl"
                  lang="ar"
                  className="arabic-sm text-gold/80 mb-2 text-right"
                  aria-hidden="true"
                >
                  {col.arabicName}
                </p>
                <h3 className="font-garamond text-lg font-semibold text-cream mb-1 group-hover:text-gold transition-colors">
                  {col.englishName}
                </h3>
                <p className="text-cream/50 text-xs mb-3">{col.author.split('Imam ')[1] ?? col.author}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="badge-gold text-xs">{col.grade}</span>
                  <span className="text-cream/40 text-xs">{col.hadithCount.toLocaleString()} hadiths</span>
                </div>
              </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <div className="mt-6 sm:hidden">
            <Link href="/hadith" className="btn-outline w-full text-center block text-sm">
              View All Collections
            </Link>
          </div>
        </div>
      </section>

      {/* Call to prayer banner */}
      <section className="relative bg-midnight overflow-hidden py-16">
        <IslamicPattern opacity={0.05} />
        <FadeIn className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <p
            dir="rtl"
            lang="ar"
            className="arabic-xl text-gold mb-6"
            aria-label="Quran verse"
          >
            وَمَا أُوتِيتُم مِّنَ الْعِلْمِ إِلَّا قَلِيلًا
          </p>
          <p className="text-cream/60 italic text-base mb-8">
            "And of knowledge, you have been given only a little." - Surah al-Isra' 17:85
          </p>
          <Link href="/hadith" className="btn-gold text-base px-8 py-3.5">
            Begin Your Study
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
