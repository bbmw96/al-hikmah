import Link from 'next/link';
import { BookOpen, Heart } from 'lucide-react';

const FOOTER_LINKS = [
  {
    heading: 'Hadith',
    links: [
      { label: 'Browse All Collections', href: '/hadith' },
      { label: 'Sahih al-Bukhari', href: '/hadith/bukhari' },
      { label: 'Sahih Muslim', href: '/hadith/muslim' },
      { label: 'Sunan Abu Dawud', href: '/hadith/abudawud' },
      { label: 'Muwatta Imam Malik', href: '/hadith/malik' },
    ],
  },
  {
    heading: 'Learn',
    links: [
      { label: 'The Quran (Asbab al-Nuzul)', href: '/quran' },
      { label: 'Prophets of Islam', href: '/prophets' },
      { label: 'Tawheed: Divine Oneness', href: '/tawheed' },
      { label: 'Ramadan: Complete Guide', href: '/ramadan' },
      { label: 'Fiqh: Islamic Law', href: '/fiqh' },
      { label: 'Suluk: Spiritual Path', href: '/suluk' },
      { label: 'Nikah: Islamic Marriage', href: '/nikah' },
      { label: "Du'as & Supplications", href: '/duas' },
      { label: 'Hajj & Umrah Guide', href: '/hajj-umrah' },
      { label: '99 Names of Allah', href: '/99-names' },
      { label: 'How to Pray', href: '/prayer' },
    ],
  },
  {
    heading: 'Reference',
    links: [
      { label: 'Seerah: Life of the Prophet', href: '/seerah' },
      { label: 'Islamic Glossary', href: '/glossary' },
      { label: 'Islamic Calendar', href: '/calendar' },
      { label: 'About Al-Hikmah', href: '/about' },
    ],
  },
];

export function Footer() {
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
            className="arabic text-gold/60"
            aria-label="Al-hikmah: Wisdom"
          >
            الحكمة
          </p>
          <p className="text-cream/50 text-sm leading-relaxed">
            A scholarly resource for the authentic Islamic tradition, open to all who seek knowledge.
          </p>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-gold/15 pt-10 mb-10">
          {FOOTER_LINKS.map(section => (
            <div key={section.heading}>
              <h3 className="font-garamond text-gold font-semibold text-base mb-4">
                {section.heading}
              </h3>
              <ul className="space-y-2">
                {section.links.map(link => (
                  <li key={link.label}>
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
            &copy; {new Date().getFullYear()} Al-Hikmah. All rights reserved.
          </p>
          <p className="text-cream/40 text-sm flex items-center gap-1.5">
            Compiled with
            <Heart className="w-3.5 h-3.5 text-gold/60 fill-gold/30" aria-hidden="true" />
            for seekers of knowledge
          </p>
          <a
            href="https://bbmw0.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cream/30 hover:text-gold/60 text-xs transition-colors"
          >
            A BBMW0 Technologies project
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
