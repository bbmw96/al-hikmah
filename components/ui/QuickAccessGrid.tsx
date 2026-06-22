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
  Layers,
  Coins,
  Droplets,
  ShieldCheck,
  Sun,
  Gift,
  Telescope,
  Network,
} from 'lucide-react';
import { StaggerGroup, StaggerItem } from '@/components/ui/StaggerGroup';
import { useLanguage } from '@/lib/i18n/context';
import type { T } from '@/lib/i18n/translations';

const QUICK_ACCESS: {
  icon: React.ComponentType<{ className?: string; 'aria-hidden'?: 'true' }>;
  titleKey: keyof T;
  descKey: keyof T;
  arabicTitle: string;
  href: string;
  colour: string;
}[] = [
  { icon: BookOpen,    titleKey: 'nav.hadith',   descKey: 'card.hadith.desc',   arabicTitle: 'الأحاديث النبوية',  href: '/hadith',     colour: 'bg-forest'   },
  { icon: BookMarked,  titleKey: 'nav.quran',    descKey: 'card.quran.desc',    arabicTitle: 'القرآن الكريم',     href: '/quran',      colour: 'bg-midnight' },
  { icon: Users,       titleKey: 'nav.prophets', descKey: 'card.prophets.desc', arabicTitle: 'الأنبياء والمرسلون', href: '/prophets',   colour: 'bg-forest'   },
  { icon: Heart,       titleKey: 'nav.duas',     descKey: 'card.duas.desc',     arabicTitle: 'الأدعية والأذكار', href: '/duas',        colour: 'bg-midnight' },
  { icon: Compass,     titleKey: 'nav.hajj',     descKey: 'card.hajj.desc',     arabicTitle: 'الحج والعمرة',     href: '/hajj-umrah', colour: 'bg-forest'   },
  { icon: Star,        titleKey: 'nav.99names',  descKey: 'card.99names.desc',  arabicTitle: 'أسماء الله الحسنى', href: '/99-names',  colour: 'bg-midnight' },
  { icon: ScrollText,  titleKey: 'nav.seerah',   descKey: 'card.seerah.desc',   arabicTitle: 'السيرة النبوية',   href: '/seerah',     colour: 'bg-forest'   },
  { icon: Sunrise,     titleKey: 'nav.prayer',   descKey: 'card.prayer.desc',   arabicTitle: 'الصلاة',           href: '/prayer',     colour: 'bg-midnight' },
  { icon: Infinity,    titleKey: 'nav.tawheed',  descKey: 'card.tawheed.desc',  arabicTitle: 'التوحيد',          href: '/tawheed',    colour: 'bg-forest'   },
  { icon: Moon,        titleKey: 'nav.ramadan',  descKey: 'card.ramadan.desc',  arabicTitle: 'رمضان',            href: '/ramadan',    colour: 'bg-midnight' },
  { icon: Scale,       titleKey: 'nav.fiqh',     descKey: 'card.fiqh.desc',     arabicTitle: 'الفقه الإسلامي',  href: '/fiqh',       colour: 'bg-forest'   },
  { icon: Sparkles,    titleKey: 'nav.suluk',    descKey: 'card.suluk.desc',    arabicTitle: 'السلوك الروحاني', href: '/suluk',       colour: 'bg-midnight' },
  { icon: Gem,         titleKey: 'nav.nikah',    descKey: 'card.nikah.desc',    arabicTitle: 'النِّكَاح',        href: '/nikah',      colour: 'bg-forest'   },
  { icon: CalendarDays,titleKey: 'nav.calendar', descKey: 'card.calendar.desc', arabicTitle: 'التقويم',          href: '/calendar',   colour: 'bg-midnight' },
  { icon: Library,     titleKey: 'nav.glossary', descKey: 'card.glossary.desc', arabicTitle: 'المعجم',           href: '/glossary',   colour: 'bg-forest'   },
  { icon: Layers,      titleKey: 'nav.tayamum',   descKey: 'card.tayamum.desc',   arabicTitle: 'التَّيَمُّم',        href: '/tayamum',         colour: 'bg-midnight' },
  { icon: Coins,       titleKey: 'nav.zakat',     descKey: 'card.zakat.desc',     arabicTitle: 'الزَّكَاة',          href: '/zakat',           colour: 'bg-forest'   },
  { icon: Droplets,    titleKey: 'nav.ghusl',     descKey: 'card.ghusl.desc',     arabicTitle: 'الغُسْل',            href: '/ghusl',           colour: 'bg-midnight' },
  { icon: ShieldCheck, titleKey: 'nav.taharah',   descKey: 'card.taharah.desc',   arabicTitle: 'الطَّهَارَة',        href: '/taharah',         colour: 'bg-forest'   },
  { icon: Sun,         titleKey: 'nav.jumuah',    descKey: 'card.jumuah.desc',    arabicTitle: 'صَلَاةُ الجُمُعَة',  href: '/jumuah',          colour: 'bg-midnight' },
  { icon: Gift,        titleKey: 'nav.eid',       descKey: 'card.eid.desc',       arabicTitle: 'العِيدَان',          href: '/eid',             colour: 'bg-forest'   },
  { icon: Telescope,   titleKey: 'nav.ulumquran', descKey: 'card.ulumquran.desc', arabicTitle: 'عُلُوم القُرْآن',    href: '/ulum-quran',      colour: 'bg-midnight' },
  { icon: Network,     titleKey: 'nav.mustalah',  descKey: 'card.mustalah.desc',  arabicTitle: 'مُصْطَلَح الحَدِيث', href: '/mustalah-hadith', colour: 'bg-forest'   },
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
                <p className="text-forest/60 text-sm leading-relaxed">{t(item.descKey)}</p>
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
