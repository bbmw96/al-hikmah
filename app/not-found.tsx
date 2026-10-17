'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/context';
import { hadithHref, LEGACY_HADITH_PATH } from '@/lib/hadith-links';

export default function NotFound() {
  const { t } = useLanguage();
  const [redirecting, setRedirecting] = useState(true);

  // GitHub Pages serves this page for every unknown path. Old links of the form
  // /hadith/<collection>/<number> are forwarded to their current address.
  useEffect(() => {
    const m = window.location.pathname.match(LEGACY_HADITH_PATH);
    if (m) {
      window.location.replace(hadithHref(m[1], parseInt(m[2], 10)));
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the path is only known in the browser
    setRedirecting(false);
  }, []);

  if (redirecting) {
    return (
      <div className="flex items-center justify-center py-32" role="status">
        <Loader2 className="w-6 h-6 text-gold animate-spin" aria-hidden="true" />
        <span className="ml-2 text-forest/70 text-sm">{t('ui.loading')}</span>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <p dir="rtl" lang="ar" className="arabic text-gold-deep text-3xl mb-4">٤٠٤</p>
      <h1 className="font-garamond text-3xl font-semibold text-forest mb-3">{t('notfound.title')}</h1>
      <p className="text-forest/70 mb-8">{t('notfound.body')}</p>
      <Link href="/" className="btn-outline inline-flex items-center gap-1.5 text-sm">
        {t('notfound.home')}
      </Link>
    </div>
  );
}
