export const HADITH_PAGE_SIZE = 20;

// Individual hadiths are rendered in the browser from one pre-built page per
// collection, so the hadith number travels in the query string.
export function hadithHref(collectionId: string, hadithNumber: number): string {
  return `/hadith/${collectionId}/view/?n=${hadithNumber}`;
}

// Matches the pre-GitHub-Pages URL form /hadith/<collection>/<number>.
export const LEGACY_HADITH_PATH = /^\/hadith\/([a-z0-9-]+)\/(\d+)\/?$/;
