'use client';

import Link from 'next/link';
import { BookOpen, Heart } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';

export function Footer() {
  const { t } = useLanguage();

  const sections = [
    {
      heading: t('nav.hadith'),
      links: [
        { label: t('nav.browse'), href: '/hadith' },
        { label: 'Sahih al-Bukhari', href: '/hadith/bukhari' },
        { label: 'Sahih Muslim', href: '/hadith/muslim' },
        { label: 'Sunan Abu Dawud', href: '/hadith/abudawud' },
        { label: 'Muwatta Imam Malik', href: '/hadith/malik' },
      ],
    },
    {
      heading: t('nav.learn'),
      links: [
        { label: t('nav.quran'), href: '/quran' },
        { label: t('nav.prophets'), href: '/prophets' },
        { label: t('nav.tawheed'), href: '/tawheed' },
        { label: t('nav.ramadan'), href: '/ramadan' },
        { label: t('nav.fiqh'), href: '/fiqh' },
        { label: t('nav.suluk'), href: '/suluk' },
        { label: t('nav.nikah'), href: '/nikah' },
        { label: t('nav.duas'), href: '/duas' },
        { label: t('nav.hajj'), href: '/hajj-umrah' },
        { label: t('nav.99names'), href: '/99-names' },
        { label: t('nav.prayer'), href: '/prayer' },
        { label: t('nav.tayamum'),   href: '/tayamum' },
        { label: t('nav.zakat'),     href: '/zakat' },
        { label: t('nav.ghusl'),     href: '/ghusl' },
        { label: t('nav.taharah'),   href: '/taharah' },
        { label: t('nav.jumuah'),    href: '/jumuah' },
        { label: t('nav.eid'),       href: '/eid' },
        { label: t('nav.ulumquran'), href: '/ulum-quran' },
        { label: t('nav.mustalah'),  href: '/mustalah-hadith' },
      ],
    },
    {
      heading: t('footer.reference'),
      links: [
        { label: t('nav.seerah'), href: '/seerah' },
        { label: t('nav.glossary'), href: '/glossary' },
        { label: t('nav.calendar'), href: '/calendar' },
        { label: t('nav.about'), href: '/about' },
      ],
    },
  ];

  return (
    <footer className="bg-forest border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-14">
        {/* Brand */}
        <div className="mb-10 flex flex-col items-start gap-3 max-w-xs">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center ring-1 ring-gold/40">
              <BookOpen className="w-5 h-5 text-gold" aria-hidden="true" />
            </div>
            <span className="font-garamond text-xl font-semibold text-cream">Al-Hikmah</span>
          </div>
          <p
            dir="rtl"
            lang="ar"
            className="arabic text-gold/80"
            aria-label="Al-hikmah: Wisdom"
          >
            الحكمة
          </p>
          <p className="text-cream/50 text-sm leading-relaxed">
            {t('footer.brand.desc')}
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-gold/15 pt-10 mb-10">
          {sections.map(section => (
            <div key={section.heading}>
              <h3 className="font-garamond text-gold font-semibold text-base mb-4">
                {section.heading}
              </h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-cream/50 hover:text-cream/80 text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gold/15 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-sm">
            &copy; {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <p className="text-cream/40 text-sm flex items-center gap-1.5">
            {t('footer.compiled')}
            <Heart className="w-3.5 h-3.5 text-gold/60 fill-gold/30 ml-1 flex-shrink-0" aria-hidden="true" />
          </p>
          <a
            href="https://bbmw0.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/30 hover:text-gold/60 text-xs transition-colors"
          >
            {t('footer.bbmw0')}
          </a>
          <p
            dir="rtl"
            lang="ar"
            className="arabic-sm text-gold/40"
            aria-label="And He taught you what you did not know"
          >
            وَعَلَّمَكَ مَا لَمْ تَكُنْ تَعْلَمُ
          </p>
        </div>
      </div>
    </footer>
  );
}
