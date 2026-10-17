import { HADITH_INDEX, MULTILINGUAL_KEYWORDS } from '@/lib/data/hadith-index';

export interface HadithSearchResult {
  hadithnumber: number;
  collection: string;
  topic: string;
  narrator: string;
  text: string;
}

const ENGLISH_SYNONYMS: Record<string, string[]> = {
  prayer: ['salah', 'salat', 'namaz', 'worship'],
  fasting: ['sawm', 'siyam', 'fast', 'ramadan'],
  hajj: ['pilgrimage', 'mecca', 'umrah'],
  zakat: ['charity', 'sadaqah', 'alms', 'tithe'],
  faith: ['iman', 'belief', 'believe'],
  knowledge: ['ilm', 'learning', 'education'],
  mercy: ['rahma', 'compassion', 'kindness'],
  patience: ['sabr', 'endurance'],
  repentance: ['tawbah', 'istighfar', 'forgiveness'],
  paradise: ['jannah', 'heaven'],
  hellfire: ['jahannam', 'hell'],
  cleanliness: ['taharah', 'purity', 'wudu'],
  character: ['akhlaq', 'morals', 'conduct'],
  mother: ['parents', 'family'],
  neighbour: ['neighbor', 'community'],
};

function resolveQuery(raw: string, lang: string): string[] {
  const lower = raw.toLowerCase();
  const terms = new Set<string>([lower]);

  const langMap = MULTILINGUAL_KEYWORDS[lang] ?? {};
  for (const [foreign, english] of Object.entries(langMap)) {
    if (raw.includes(foreign)) terms.add(english.toLowerCase());
  }

  for (const [key, syns] of Object.entries(ENGLISH_SYNONYMS)) {
    if (lower.includes(key)) syns.forEach(s => terms.add(s));
    for (const s of syns) {
      if (lower.includes(s)) { terms.add(key); syns.forEach(t => terms.add(t)); }
    }
  }

  return Array.from(terms);
}

export function searchHadiths(collection: string, query: string, lang: string): HadithSearchResult[] {
  const q = query.trim();
  if (q.length < 2) return [];
  const terms = resolveQuery(q, lang);

  return HADITH_INDEX.filter(h => {
    if (collection && h.col !== collection) return false;
    const haystack = [h.topic, h.narrator, h.excerpt, ...h.keywords].join(' ').toLowerCase();
    return terms.some(term => haystack.includes(term));
  }).map(h => ({
    hadithnumber: h.num,
    collection: h.col,
    topic: h.topic,
    narrator: h.narrator,
    text: h.excerpt,
  }));
}
