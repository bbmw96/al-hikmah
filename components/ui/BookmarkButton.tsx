'use client';

import { Heart } from 'lucide-react';
import { useDuaBookmarks } from '@/lib/hooks/use-dua-bookmarks';
import { useLanguage } from '@/lib/i18n/context';
import { DUAS_CONTENT } from '@/lib/i18n/content/duas-content';

export function BookmarkButton({ duaId }: { duaId: string }) {
  const { isBookmarked, toggle, hydrated } = useDuaBookmarks();
  const { lang } = useLanguage();

  if (!hydrated) {
    return (
      <button
        type="button"
        disabled
        aria-hidden="true"
        className="w-9 h-9 rounded-full inline-flex items-center justify-center text-forest/20"
      >
        <Heart className="w-4 h-4" aria-hidden="true" />
      </button>
    );
  }

  const bookmarked = isBookmarked(duaId);
  const labelKey = bookmarked ? 'bookmark_remove' : 'bookmark_add';
  const label =
    (DUAS_CONTENT[labelKey] as Record<string, string | undefined>)[lang] ??
    (DUAS_CONTENT[labelKey] as Record<string, string | undefined>)['en'] ??
    'Bookmark';

  return (
    <button
      type="button"
      onClick={() => toggle(duaId)}
      aria-label={label}
      title={label}
      aria-pressed={bookmarked}
      className={
        bookmarked
          ? 'w-9 h-9 rounded-full inline-flex items-center justify-center bg-gold/15 text-gold hover:bg-gold/25 transition-colors'
          : 'w-9 h-9 rounded-full inline-flex items-center justify-center bg-forest/5 text-forest/40 hover:bg-forest/10 hover:text-forest transition-colors'
      }
    >
      <Heart
        className="w-4 h-4"
        fill={bookmarked ? 'currentColor' : 'none'}
        aria-hidden="true"
      />
    </button>
  );
}
