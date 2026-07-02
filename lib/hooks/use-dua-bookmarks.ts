'use client';

import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'alhikmah_dua_bookmarks';

function readFromStorage(): string[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((x): x is string => typeof x === 'string') : [];
  } catch {
    return [];
  }
}

function writeToStorage(ids: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
    window.dispatchEvent(new CustomEvent('alhikmah:bookmarks-changed'));
  } catch {
    /* localStorage quota / disabled - silent no-op */
  }
}

/**
 * Bookmark hook backed by localStorage. All tabs stay in sync via the custom
 * event dispatched on write plus the native `storage` event across tabs.
 */
export function useDuaBookmarks() {
  const [ids, setIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setIds(readFromStorage());
    setHydrated(true);
    const refresh = () => setIds(readFromStorage());
    window.addEventListener('storage', refresh);
    window.addEventListener('alhikmah:bookmarks-changed', refresh);
    return () => {
      window.removeEventListener('storage', refresh);
      window.removeEventListener('alhikmah:bookmarks-changed', refresh);
    };
  }, []);

  const toggle = useCallback((id: string) => {
    const current = readFromStorage();
    const next = current.includes(id) ? current.filter(x => x !== id) : [...current, id];
    writeToStorage(next);
    setIds(next);
  }, []);

  const isBookmarked = useCallback((id: string) => ids.includes(id), [ids]);

  return { ids, hydrated, isBookmarked, toggle };
}
