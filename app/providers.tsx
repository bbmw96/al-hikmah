'use client';

import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';

// Load LanguageProvider only on the client. SSR uses the default context value
// (English translations), matching the localStorage-based init that already
// happens client-side. This removes the context.tsx SSR chunk that was causing
// a Turbopack module-registry race during parallel static generation.
const LanguageProvider = dynamic(
  () => import('@/lib/i18n/context').then(m => ({ default: m.LanguageProvider })),
  { ssr: false },
);

export function Providers({ children }: { children: ReactNode }) {
  return <LanguageProvider>{children}</LanguageProvider>;
}
