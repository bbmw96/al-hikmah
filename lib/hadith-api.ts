const CDN_BASE = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1';

export interface HadithApiResponse {
  hadiths: HadithEntry[];
  metadata?: CollectionMetadata;
}

export interface HadithEntry {
  hadithnumber: number;
  text: string;
  grades?: HadithGrade[];
  reference?: HadithReference;
}

export interface HadithGrade {
  graded_by: string;
  grade: string;
}

export interface HadithReference {
  book?: number;
  hadith?: number;
}

export interface CollectionMetadata {
  name: string;
  section?: Record<number, string>;
}

export interface SingleHadithResponse {
  hadithnumber: number;
  text: string;
  grades?: HadithGrade[];
  reference?: HadithReference;
}

/**
 * Fetches a list of hadiths from a given collection in a given language.
 * Language 'eng' fetches English text; 'ara' fetches Arabic text.
 */
export async function fetchHadithList(
  collection: string,
  language: 'eng' | 'ara' = 'eng',
): Promise<HadithApiResponse | null> {
  const url = `${CDN_BASE}/editions/${language}-${collection}.min.json`;
  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

/**
 * Fetches a single hadith from a collection by its number.
 * Returns both English and Arabic text simultaneously.
 * `found` is true when at least one CDN request returned HTTP 200 —
 * even if the text field is empty. Only false on network/4xx failure,
 * which means the hadith number is genuinely out of range.
 */
export async function fetchHadith(
  collection: string,
  number: number,
): Promise<{ english: string | null; arabic: string | null; grades?: HadithGrade[]; found: boolean }> {
  const [engRes, araRes] = await Promise.allSettled([
    fetch(`${CDN_BASE}/editions/eng-${collection}/${number}.min.json`, {
      next: { revalidate: 3600 },
    }),
    fetch(`${CDN_BASE}/editions/ara-${collection}/${number}.min.json`, {
      next: { revalidate: 3600 },
    }),
  ]);

  let english: string | null = null;
  let arabic: string | null = null;
  let grades: HadithGrade[] | undefined;
  let found = false;

  if (engRes.status === 'fulfilled' && engRes.value.ok) {
    found = true;
    const data: SingleHadithResponse = await engRes.value.json();
    english = data.text || null;
    grades = data.grades;
  }

  if (araRes.status === 'fulfilled' && araRes.value.ok) {
    found = true;
    const data: SingleHadithResponse = await araRes.value.json();
    arabic = data.text || null;
  }

  return { english, arabic, grades, found };
}

/**
 * Fetches the edition index to get the total hadith count for a collection.
 */
export async function fetchEditionInfo(
  collection: string,
): Promise<{ count: number } | null> {
  const url = `${CDN_BASE}/editions/eng-${collection}.min.json`;
  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) return null;
    const data: HadithApiResponse = await res.json();
    return { count: data.hadiths?.length ?? 0 };
  } catch {
    return null;
  }
}

/**
 * Returns a paginated slice of hadiths from the full collection response.
 */
export function paginateHadiths(
  data: HadithApiResponse,
  page: number,
  pageSize = 20,
): { hadiths: HadithEntry[]; total: number; pages: number } {
  const total = data.hadiths.length;
  const pages = Math.ceil(total / pageSize);
  const start = (page - 1) * pageSize;
  const hadiths = data.hadiths.slice(start, start + pageSize);
  return { hadiths, total, pages };
}
