'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, BookOpen, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/lib/i18n/context';
import { LANGUAGE_META, type Lang } from '@/lib/i18n/translations';

interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
}

function useNavItems(): NavItem[] {
  const { t } = useLanguage();
  return [
    {
      label: t('nav.hadith'),
      children: [
        { label: t('nav.browse'),    href: '/hadith' },
        { label: t('nav.sixbooks'),  href: '/hadith?group=six-books' },
        { label: t('nav.ninebooks'), href: '/hadith?group=nine-books' },
        { label: t('nav.other'),     href: '/hadith?group=other' },
      ],
    },
    { label: t('nav.prophets'), href: '/prophets' },
    { label: t('nav.duas'),     href: '/duas' },
    {
      label: t('nav.hajj'),
      children: [
        { label: t('nav.hajjguide'),  href: '/hajj-umrah#hajj' },
        { label: t('nav.umrahguide'), href: '/hajj-umrah#umrah' },
      ],
    },
    {
      label: t('nav.learn'),
      children: [
        { label: t('nav.99names'),  href: '/99-names' },
        { label: t('nav.prayer'),   href: '/prayer' },
        { label: t('nav.seerah'),   href: '/seerah' },
        { label: t('nav.glossary'), href: '/glossary' },
        { label: t('nav.calendar'), href: '/calendar' },
      ],
    },
    { label: t('nav.about'), href: '/about' },
  ];
}

function DropdownMenu({
  items,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: {
  items: NavItem[];
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      className="absolute top-full left-0 mt-2 min-w-[13rem] rounded-xl shadow-2xl border border-gold/20 bg-cream overflow-hidden z-50 fade-up"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.map(item => (
        <Link
          key={item.label}
          href={item.href ?? '#'}
          className="dropdown-item"
          onClick={onClose}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

function LangSwitcher() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-cream/80 hover:text-cream hover:bg-white/10 transition-colors text-sm font-medium"
        aria-label={t('ui.changelang')}
        aria-expanded={open}
      >
        <Globe className="w-4 h-4 text-gold" aria-hidden="true" />
        <span className="hidden sm:inline">{LANGUAGE_META[lang].nativeLabel}</span>
        <ChevronDown className={cn('w-3 h-3 text-gold/60 transition-transform', open && 'rotate-180')} aria-hidden="true" />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 min-w-[11rem] rounded-xl shadow-2xl border border-gold/20 bg-cream overflow-hidden z-50 fade-up">
          {(Object.entries(LANGUAGE_META) as [Lang, typeof LANGUAGE_META[Lang]][]).map(([code, meta]) => (
            <button
              key={code}
              type="button"
              onClick={() => { setLang(code); setOpen(false); }}
              className={cn(
                'w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors',
                code === lang
                  ? 'bg-gold/10 text-forest font-semibold'
                  : 'text-forest/80 hover:bg-gold/5 hover:text-forest',
              )}
              aria-pressed={code === lang}
            >
              <span>{meta.label}</span>
              <span className="text-xs text-gold/70" dir={meta.dir} lang={code}>{meta.nativeLabel}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const navItems = useNavItems();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function openDropdown(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 150);
  }

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled
          ? 'bg-forest/98 shadow-xl backdrop-blur-md border-b border-gold/20'
          : 'bg-forest',
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Al-Hikmah - Home"
          >
            <div className="w-9 h-9 rounded-full bg-gold/20 flex items-center justify-center ring-1 ring-gold/40 group-hover:bg-gold/30 transition-colors">
              <BookOpen className="w-5 h-5 text-gold" aria-hidden="true" />
            </div>
            <div>
              <span className="font-garamond text-xl font-semibold text-cream tracking-wide">
                Al-Hikmah
              </span>
              <span
                dir="rtl"
                lang="ar"
                className="block text-xs text-gold/70 leading-none arabic-sm"
                aria-hidden="true"
              >
                الحكمة
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navItems.map(item => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && openDropdown(item.label)}
                onMouseLeave={scheduleClose}
              >
                {item.href && !item.children ? (
                  <Link
                    href={item.href}
                    className={cn(
                      'nav-link',
                      pathname === item.href && 'text-gold',
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className={cn(
                      'nav-link flex items-center gap-1',
                      activeDropdown === item.label && 'text-gold',
                    )}
                    aria-haspopup="true"
                    aria-expanded={activeDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'w-3.5 h-3.5 text-gold/60 transition-transform',
                        activeDropdown === item.label && 'rotate-180',
                      )}
                      aria-hidden="true"
                    />
                  </button>
                )}
                {item.children && activeDropdown === item.label && (
                  <DropdownMenu
                    items={item.children}
                    onClose={() => setActiveDropdown(null)}
                    onMouseEnter={() => closeTimer.current && clearTimeout(closeTimer.current)}
                    onMouseLeave={scheduleClose}
                  />
                )}
              </li>
            ))}
          </ul>

          {/* Language switcher + mobile toggle */}
          <div className="flex items-center gap-2">
            <LangSwitcher />
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-cream/80 hover:text-cream hover:bg-white/10 transition-colors"
            onClick={() => setMobileOpen(o => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
          </div>{/* end lang+toggle wrapper */}
        </div>{/* end h-16 flex row */}
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gold/20 bg-forest/98 backdrop-blur-md">
          <ul className="px-4 py-3 space-y-1 max-h-[70vh] overflow-y-auto" role="list">
            {navItems.map(item => (
              <li key={item.label}>
                {item.href && !item.children ? (
                  <Link
                    href={item.href}
                    className={cn(
                      'block px-3 py-2.5 rounded-lg text-cream/80 hover:text-cream hover:bg-white/10 transition-colors',
                      pathname === item.href && 'text-gold',
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      type="button"
                      className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-cream/80 hover:text-cream hover:bg-white/10 transition-colors"
                      onClick={() =>
                        setActiveDropdown(v => (v === item.label ? null : item.label))
                      }
                      aria-expanded={activeDropdown === item.label}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 text-gold/60 transition-transform',
                          activeDropdown === item.label && 'rotate-180',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                    {activeDropdown === item.label && item.children && (
                      <ul className="mt-1 ml-3 space-y-0.5 border-l border-gold/30 pl-3">
                        {item.children.map(child => (
                          <li key={child.label}>
                            <Link
                              href={child.href ?? '#'}
                              className="block px-3 py-2 rounded text-sm text-cream/70 hover:text-cream hover:bg-white/10 transition-colors"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
