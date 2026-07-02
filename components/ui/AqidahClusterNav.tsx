'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/lib/i18n/context';

/** The 6 pages of the Aqidah cluster, in canonical reading order. */
const CLUSTER = [
  { href: '/afterlife',  labelKey: 'nav.afterlife'  as const },
  { href: '/angels',     labelKey: 'nav.angels'     as const },
  { href: '/jinn',       labelKey: 'nav.jinn'       as const },
  { href: '/end-times',  labelKey: 'nav.endtimes'   as const },
  { href: '/dajjal',     labelKey: 'nav.dajjal'     as const },
  { href: '/yajuj-majuj', labelKey: 'nav.yajujmajuj' as const },
];

export function AqidahClusterNav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  return (
    <nav
      aria-label="Aqidah cluster"
      className="max-w-4xl mx-auto px-6 pt-8"
    >
      <div className="flex flex-wrap items-center gap-2 justify-center">
        {CLUSTER.map(item => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? 'page' : undefined}
              className={
                isActive
                  ? 'px-4 py-1.5 rounded-full text-xs font-medium bg-forest text-cream shadow-sm border border-forest'
                  : 'px-4 py-1.5 rounded-full text-xs font-medium bg-cream text-forest/70 hover:text-forest hover:bg-forest/5 border border-forest/20 transition-colors'
              }
            >
              {t(item.labelKey)}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
