const CDN_BASES = [
  'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1',
  'https://fastly.jsdelivr.net/gh/fawazahmed0/hadith-api@1',
  'https://raw.githubusercontent.com/fawazahmed0/hadith-api/1',
];

async function cdnFetch(path: string, opts?: RequestInit, timeoutMs = 4000): Promise<Response | null> {
  for (const base of CDN_BASES) {
    try {
      const res = await fetch(`${base}${path}`, { signal: AbortSignal.timeout(timeoutMs), ...opts });
      if (res.ok) return res;
    } catch {
      // try next mirror
    }
  }
  return null;
}

export interface HadithApiResponse {
  hadiths: HadithEntry[];
  metadata?: CollectionMetadata;
}

export interface HadithEntry {
  hadithnumber: number;
  text: string;
  arabicText?: string;
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
 * Fetches the full hadith collection JSON for a given language.
 * Response is cached by Next.js for 24 hours — CDN is only hit once per day per collection.
 * Language 'eng' fetches English text; 'ara' fetches Arabic text.
 */
export async function fetchHadithList(
  collection: string,
  language: 'eng' | 'ara' = 'eng',
): Promise<HadithApiResponse | null> {
  try {
    const res = await cdnFetch(`/editions/${language}-${collection}.min.json`, { next: { revalidate: 86400 } } as RequestInit, 8000);
    if (!res) return null;
    return res.json();
  } catch {
    return null;
  }
}

/**
 * Fetches a single hadith from a collection by its number.
 * Returns both English and Arabic text simultaneously.
 * `found` is true when at least one CDN request returned HTTP 200;
 * even if the text field is empty. Only false on network/4xx failure,
 * which means the hadith number is genuinely out of range.
 */
export async function fetchHadith(
  collection: string,
  number: number,
): Promise<{ english: string | null; arabic: string | null; grades?: HadithGrade[]; found: boolean }> {
  const [engRes, araRes] = await Promise.allSettled([
    cdnFetch(`/editions/eng-${collection}/${number}.min.json`, { next: { revalidate: 3600 } } as RequestInit),
    cdnFetch(`/editions/ara-${collection}/${number}.min.json`, { next: { revalidate: 3600 } } as RequestInit),
  ]);

  let english: string | null = null;
  let arabic: string | null = null;
  let grades: HadithGrade[] | undefined;
  let found = false;

  if (engRes.status === 'fulfilled' && engRes.value) {
    found = true;
    const data = await engRes.value.json() as Record<string, unknown>;
    const hadiths = data?.hadiths as Array<Record<string, string>> | undefined;
    english = (data?.text as string | undefined)
      ?? hadiths?.[0]?.text
      ?? hadiths?.[0]?.body
      ?? null;
    grades = (data?.grades ?? hadiths?.[0]?.grades) as HadithGrade[] | undefined;
  }

  if (araRes.status === 'fulfilled' && araRes.value) {
    found = true;
    const data = await araRes.value.json() as Record<string, unknown>;
    const hadiths = data?.hadiths as Array<Record<string, string>> | undefined;
    arabic = (data?.text as string | undefined)
      ?? hadiths?.[0]?.text
      ?? hadiths?.[0]?.body
      ?? null;
  }

  return { english, arabic, grades, found };
}

/**
 * @deprecated DO NOT USE. Downloads the entire collection JSON just to get the count.
 * Use col.hadithCount from lib/data/collections.ts instead  –  it is already correct.
 */
/**
 * Fetches the edition index to get the total hadith count for a collection.
 */
export async function fetchEditionInfo(
  collection: string,
): Promise<{ count: number } | null> {
  try {
    const res = await cdnFetch(`/editions/eng-${collection}.min.json`, { next: { revalidate: 86400 } } as RequestInit);
    if (!res) return null;
    const data: HadithApiResponse = await res.json();
    return { count: data.hadiths?.length ?? 0 };
  } catch {
    return null;
  }
}

/**
 * Like fetchHadithPage but fetches Arabic and English simultaneously.
 * Used by the collection browse page to display Arabic text first.
 */
export async function fetchHadithPageBilingual(
  collection: string,
  startNumber: number,
  count: number,
): Promise<HadithEntry[]> {
  const numbers = Array.from({ length: count }, (_, i) => startNumber + i);
  const fetchOne = (lang: string, n: number) =>
    cdnFetch(`/editions/${lang}-${collection}/${n}.min.json`, { next: { revalidate: 86400 } } as RequestInit)
      .then(r => (r ? (r.json() as Promise<SingleHadithResponse>) : null))
      .catch(() => null);

  const [engSettled, araSettled] = await Promise.all([
    Promise.allSettled(numbers.map(n => fetchOne('eng', n))),
    Promise.allSettled(numbers.map(n => fetchOne('ara', n))),
  ]);

  return engSettled.flatMap((r, i) => {
    if (r.status === 'fulfilled' && r.value?.text) {
      const ara = araSettled[i];
      return [{
        hadithnumber: numbers[i],
        text: r.value.text,
        arabicText: ara.status === 'fulfilled' && ara.value?.text ? ara.value.text : undefined,
        grades: r.value.grades,
        reference: r.value.reference,
      }];
    }
    return [];
  });
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

/**
 * Fetches a page of hadiths using individual numbered CDN endpoints in parallel.
 * 20 × ~500 B fetches instead of one 5 MB+ full-collection download;
 * ~100× less data, same wall-clock time thanks to jsDelivr's global CDN.
 */
export async function fetchHadithPage(
  collection: string,
  startNumber: number,
  count: number,
): Promise<HadithEntry[]> {
  const numbers = Array.from({ length: count }, (_, i) => startNumber + i);
  const results = await Promise.allSettled(
    numbers.map(n =>
      cdnFetch(`/editions/eng-${collection}/${n}.min.json`, { next: { revalidate: 86400 } } as RequestInit)
        .then(r => (r ? (r.json() as Promise<SingleHadithResponse>) : null))
        .catch(() => null),
    ),
  );

  return results.flatMap((r, i) => {
    if (r.status === 'fulfilled' && r.value?.text) {
      return [
        {
          hadithnumber: numbers[i],
          text: r.value.text,
          grades: r.value.grades,
          reference: r.value.reference,
        },
      ];
    }
    return [];
  });
}
