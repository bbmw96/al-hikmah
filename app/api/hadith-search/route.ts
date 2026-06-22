import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
import { HADITH_INDEX, MULTILINGUAL_KEYWORDS } from '@/lib/data/hadith-index';

function resolveQuery(raw: string, lang: string): string[] {
  const lower = raw.toLowerCase();
  const terms = new Set<string>([lower]);

  const langMap = MULTILINGUAL_KEYWORDS[lang] ?? {};
  for (const [foreign, english] of Object.entries(langMap)) {
    if (raw.includes(foreign)) terms.add(english.toLowerCase());
  }

  const englishSynonyms: Record<string, string[]> = {
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
  for (const [key, syns] of Object.entries(englishSynonyms)) {
    if (lower.includes(key)) syns.forEach(s => terms.add(s));
    for (const s of syns) {
      if (lower.includes(s)) { terms.add(key); syns.forEach(t => terms.add(t)); }
    }
  }

  return Array.from(terms);
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const collection = searchParams.get('collection') ?? '';
  const q = searchParams.get('q')?.trim() ?? '';
  const lang = searchParams.get('lang') ?? 'en';

  if (!q || q.length < 2) return NextResponse.json({ hadiths: [] });

  const terms = resolveQuery(q, lang);

  const matches = HADITH_INDEX.filter(h => {
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

  return NextResponse.json(
    { hadiths: matches, query: q, total: matches.length },
    { headers: { 'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=3600' } },
  );
}
