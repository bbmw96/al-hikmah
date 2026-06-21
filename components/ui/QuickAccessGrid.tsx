'use client';

import Link from 'next/link';
import {
  BookOpen,
  BookMarked,
  Users,
  Heart,
  Compass,
  Star,
  ScrollText,
  ArrowRight,
  Infinity,
  Moon,
  Scale,
  Sparkles,
  Gem,
  Sunrise,
  CalendarDays,
  Library,
} from 'lucide-react';
import { StaggerGroup, StaggerItem } from '@/components/ui/StaggerGroup';
import { useLanguage } from '@/lib/i18n/context';
import type { T } from '@/lib/i18n/translations';

const QUICK_ACCESS: {
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: 'true' }>;
  titleKey: keyof T;
  arabicTitle: string;
  description: string;
  href: string;
  colour: string;
}[] = [
  {
    icon: BookOpen,
    titleKey: 'nav.hadith',
    arabicTitle: 'الأحاديث النبوية',
    description:
      'Browse authentic hadith from the Six Books, Nine Books, and other major collections - with Arabic originals and contextual translations.',
    href: '/hadith',
    colour: 'bg-forest',
  },
  {
    icon: BookMarked,
    titleKey: 'nav.quran',
    arabicTitle: 'القرآن الكريم',
    description:
      'All 114 surahs with their occasions of revelation (Asbab al-Nuzul), Makki and Madani classification, themes, stories, and the context behind every chapter.',
    href: '/quran',
    colour: 'bg-midnight',
  },
  {
    icon: Users,
    titleKey: 'nav.prophets',
    arabicTitle: 'الأنبياء والمرسلون',
    description:
      'Learn about all 25 prophets mentioned in the Quran - their lineage, the nations they were sent to, their miracles, and their stories.',
    href: '/prophets',
    colour: 'bg-forest',
  },
  {
    icon: Heart,
    titleKey: 'nav.duas',
    arabicTitle: 'الأدعية والأذكار',
    description:
      "Over 100 authenticated supplications from the Quran and Sunnah, organised by category - morning, evening, prayer, Hajj, distress, and more.",
    href: '/duas',
    colour: 'bg-midnight',
  },
  {
    icon: Compass,
    titleKey: 'nav.hajj',
    arabicTitle: 'الحج والعمرة',
    description:
      "A step-by-step guide to the greater and lesser pilgrimages, with the wisdom, jurisprudence, and supplications behind each rite.",
    href: '/hajj-umrah',
    colour: 'bg-forest',
  },
  {
    icon: Star,
    titleKey: 'nav.99names',
    arabicTitle: 'أسماء الله الحسنى',
    description:
      "All 99 beautiful names of Allah with their Arabic, transliteration, meaning, and scholarly explanation of each attribute.",
    href: '/99-names',
    colour: 'bg-midnight',
  },
  {
    icon: ScrollText,
    titleKey: 'nav.seerah',
    arabicTitle: 'السيرة النبوية',
    description:
      'The biography of the Prophet Muhammad ﷺ - from his birth in Makkah to the completion of the message of Islam.',
    href: '/seerah',
    colour: 'bg-forest',
  },
  {
    icon: Sunrise,
    titleKey: 'nav.prayer',
    arabicTitle: 'الصلاة',
    description:
      'Complete guide to salah — wudu, the five daily prayers, Arabic recitations, and the Night Journey.',
    href: '/prayer',
    colour: 'bg-midnight',
  },
  {
    icon: Infinity,
    titleKey: 'nav.tawheed',
    arabicTitle: 'التوحيد',
    description:
      'The foundational doctrine of Islam: the absolute oneness of Allah, the three categories of Tawheed, and why it is the first and most essential matter in the deen.',
    href: '/tawheed',
    colour: 'bg-forest',
  },
  {
    icon: Moon,
    titleKey: 'nav.ramadan',
    arabicTitle: 'رمضان',
    description:
      'Everything about the blessed month: fasting rulings, Taraweeh, Laylatul Qadr, Zakat al-Fitr, the four schools of thought, and the spiritual dimensions of Ramadan.',
    href: '/ramadan',
    colour: 'bg-midnight',
  },
  {
    icon: Scale,
    titleKey: 'nav.fiqh',
    arabicTitle: 'الفقه الإسلامي',
    description:
      'The science of Islamic law: the five rulings (Ahkam al-Khamsah), the four major madhabs, usul al-fiqh, and how scholars derive rulings from the Quran and Sunnah.',
    href: '/fiqh',
    colour: 'bg-forest',
  },
  {
    icon: Sparkles,
    titleKey: 'nav.suluk',
    arabicTitle: 'السلوك الروحاني',
    description:
      'Islamic spirituality and the purification of the soul: the three levels of faith (Islam, Iman, Ihsan), diseases of the heart, dhikr, and the path of Tawbah.',
    href: '/suluk',
    colour: 'bg-midnight',
  },
  {
    icon: Gem,
    titleKey: 'nav.nikah',
    arabicTitle: 'النِّكَاح',
    description:
      'The sacred covenant of marriage in Islam: conditions of a valid Nikah, the Mahr, rights of spouses, marriage duas, forbidden marriages, and the Walimah feast.',
    href: '/nikah',
    colour: 'bg-forest',
  },
  {
    icon: CalendarDays,
    titleKey: 'nav.calendar',
    arabicTitle: 'التقويم',
    description:
      'The twelve months of the Hijri calendar with key Islamic dates and significant events.',
    href: '/calendar',
    colour: 'bg-midnight',
  },
  {
    icon: Library,
    titleKey: 'nav.glossary',
    arabicTitle: 'المعجم',
    description:
      'Searchable reference of essential Islamic terms, concepts, and scholarly vocabulary.',
    href: '/glossary',
    colour: 'bg-forest',
  },
];

export function QuickAccessGrid() {
  const { t } = useLanguage();

  return (
    <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {QUICK_ACCESS.map(item => {
        const Icon = item.icon;
        return (
          <StaggerItem key={item.titleKey}>
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
                  {t(item.titleKey)}
                </h3>
                <p className="text-forest/60 text-sm leading-relaxed">{item.description}</p>
              </div>
              <div className="flex items-center gap-1 text-gold text-sm font-medium mt-auto">
                <span>{t('ui.explore')}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </div>
            </Link>
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );
}
