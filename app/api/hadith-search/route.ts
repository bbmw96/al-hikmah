import { NextRequest, NextResponse } from 'next/server';
import { getCollectionById } from '@/lib/data/collections';

const CDN_BASE = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1';

const SYNONYMS: Record<string, string[]> = {
  'ablution': ['wudu', 'purification', 'wash'],
  'wudu': ['ablution', 'purification', 'wash', 'ritual'],
  'prayer': ['salah', 'salat', 'namaz', 'worship', 'prostration'],
  'salah': ['prayer', 'salat', 'namaz', 'ritual prayer'],
  'salat': ['prayer', 'salah', 'namaz'],
  'fasting': ['sawm', 'siyam', 'fast', 'ramadan'],
  'sawm': ['fasting', 'fast', 'siyam', 'ramadan'],
  'pilgrimage': ['hajj', 'umrah', 'mecca', 'kaaba', 'ihram'],
  'hajj': ['pilgrimage', 'mecca', 'umrah', 'ihram'],
  'charity': ['sadaqah', 'zakat', 'alms', 'giving', 'donation'],
  'zakat': ['charity', 'sadaqah', 'alms', 'tithe', 'almsgiving'],
  'sadaqah': ['charity', 'zakat', 'alms', 'giving'],
  'faith': ['iman', 'belief', 'tawakkul', 'trust'],
  'iman': ['faith', 'belief', 'trust in allah'],
  'paradise': ['jannah', 'heaven', 'garden'],
  'jannah': ['paradise', 'heaven', 'garden'],
  'hellfire': ['jahannam', 'hell', 'fire', 'punishment'],
  'jahannam': ['hellfire', 'hell', 'fire'],
  'prophet': ['messenger', 'muhammad', 'rasulullah', 'nabi'],
  'muhammad': ['prophet', 'messenger', 'rasulullah'],
  'quran': ['book', 'recite', 'verse', 'ayah', 'surah', 'scripture'],
  'angel': ['malaika', 'jibreel', 'gabriel', 'angels'],
  'mosque': ['masjid', 'prayer place', 'house of allah'],
  'masjid': ['mosque', 'prayer place'],
  'knowledge': ['ilm', 'learning', 'scholar', 'wisdom', 'education'],
  'ilm': ['knowledge', 'learning', 'scholar'],
  'sin': ['gunah', 'wrong', 'transgression', 'mistake', 'error'],
  'repentance': ['tawbah', 'forgiveness', 'istighfar', 'returning'],
  'tawbah': ['repentance', 'forgiveness', 'istighfar'],
  'forgiveness': ['tawbah', 'repentance', 'mercy', 'pardon'],
  'death': ['dying', 'grave', 'afterlife', 'barzakh', 'funeral'],
  'grave': ['qabr', 'death', 'burial', 'barzakh'],
  'friday': ["jumu'ah", 'jumuah', 'jumua', 'weekly prayer'],
  'jumuah': ['friday', 'weekly prayer', "jumu'ah"],
  'night': ['layl', 'night prayer', 'tahajjud', 'qiyam'],
  'tahajjud': ['night prayer', 'qiyam', 'night'],
  'sunnah': ['tradition', 'hadith', 'prophet way'],
  'mercy': ['rahma', 'compassion', 'kindness', 'forgiveness'],
  'rahma': ['mercy', 'compassion', 'kindness'],
  'patience': ['sabr', 'endurance', 'steadfastness'],
  'sabr': ['patience', 'endurance', 'steadfastness'],
  'gratitude': ['shukr', 'thankful', 'thankfulness'],
  'shukr': ['gratitude', 'thankful', 'thankfulness'],
  'honesty': ['sidq', 'truthfulness', 'truth', 'trustworthy'],
  'kindness': ['ihsan', 'mercy', 'compassion', 'good treatment'],
  'ihsan': ['kindness', 'excellence', 'perfection', 'goodness'],
  'mother': ['parents', 'family', 'respect'],
  'parents': ['mother', 'father', 'family', 'respect'],
  'neighbour': ['neighbor', 'community', 'rights'],
  'neighbor': ['neighbour', 'community', 'rights'],
  'cleanliness': ['taharah', 'purity', 'hygiene', 'clean'],
  'taharah': ['cleanliness', 'purity', 'hygiene', 'purification'],
  'dawn': ['fajr', 'morning', 'sunrise'],
  'fajr': ['dawn', 'morning prayer', 'sunrise'],
  'food': ['eat', 'eating', 'halal', 'bismillah'],
  'marriage': ['nikah', 'wedding', 'spouse', 'husband', 'wife'],
  'nikah': ['marriage', 'wedding', 'spouse'],
  'children': ['child', 'offspring', 'sons', 'daughters'],
};

function expandQuery(q: string): string[] {
  const terms = new Set<string>([q]);
  const lower = q.toLowerCase();
  for (const [key, synonyms] of Object.entries(SYNONYMS)) {
    if (lower.includes(key)) {
      synonyms.forEach(s => terms.add(s));
    }
    for (const syn of synonyms) {
      if (lower.includes(syn)) {
        terms.add(key);
        synonyms.forEach(s => terms.add(s));
      }
    }
  }
  return Array.from(terms);
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const collection = searchParams.get('collection');
  const q = searchParams.get('q')?.trim();

  if (!collection || !q || q.length < 2) {
    return NextResponse.json({ hadiths: [] });
  }

  const col = getCollectionById(collection);
  if (!col?.apiCollection || !col.available) {
    return NextResponse.json({ error: 'Collection not found' }, { status: 404 });
  }

  const url = `${CDN_BASE}/editions/eng-${col.apiCollection}.min.json`;

  let data: {
    hadiths: { hadithnumber: number; text: string; grades?: { graded_by: string; grade: string }[] }[];
  };

  try {
    const res = await fetch(url, { next: { revalidate: 86400 } });
    if (!res.ok) throw new Error('upstream fetch failed');
    data = await res.json();
  } catch {
    return NextResponse.json({ error: 'Failed to fetch collection' }, { status: 502 });
  }

  const terms = expandQuery(q.toLowerCase());
  const results = data.hadiths
    .filter(h => {
      const text = h.text.toLowerCase();
      return terms.some(term => text.includes(term));
    })
    .slice(0, 50)
    .map(h => ({ hadithnumber: h.hadithnumber, text: h.text, grades: h.grades }));

  return NextResponse.json({ hadiths: results, query: q, total: results.length });
}
