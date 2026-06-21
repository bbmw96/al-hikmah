import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { ArabicText } from '@/components/ui/ArabicText';
import { getDuasByCategory, getCategoryById } from '@/lib/data/duas';

interface Props {
  params: Promise<{ category: string }>;
}

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryById(category);
  if (!cat) return {};
  return {
    title: cat.title,
    description: cat.description,
  };
}

export default async function DuasCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryById(category);
  if (!cat) notFound();

  const duas = getDuasByCategory(category);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back */}
      <Link
        href="/duas"
        className="inline-flex items-center gap-1.5 text-sm text-forest/60 hover:text-forest mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        All Du'a Categories
      </Link>

      {/* Header */}
      <header className="text-center mb-12">
        <span className="text-5xl mb-4 block" aria-hidden="true">{cat.icon}</span>
        <p
          dir="rtl"
          lang="ar"
          className="arabic text-gold/70 mb-2"
          aria-hidden="true"
        >
          {cat.arabicTitle}
        </p>
        <h1 className="font-garamond text-3xl md:text-4xl font-semibold text-forest mb-3">
          {cat.title}
        </h1>
        <p className="text-forest/60 text-lg max-w-xl mx-auto">{cat.description}</p>
      </header>

      <div className="space-y-8">
        {duas.map(dua => (
          <article key={dua.id} className="card-islamic space-y-5">
            {/* Title */}
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <h2 className="font-garamond text-xl font-semibold text-forest">{dua.title}</h2>
                {dua.occasion && (
                  <p className="text-gold/70 text-xs mt-1 italic">{dua.occasion}</p>
                )}
              </div>
              <span className="badge-gold text-xs flex-shrink-0">{dua.source}</span>
            </div>

            {/* Arabic */}
            <div className="bg-forest/5 rounded-xl p-5">
              <ArabicText text={dua.arabic} size="lg" />
            </div>

            {/* Transliteration */}
            <div>
              <p className="text-xs font-medium text-gold/70 uppercase tracking-wider mb-1">Transliteration</p>
              <p className="text-forest/70 italic text-sm leading-relaxed">{dua.transliteration}</p>
            </div>

            {/* Meaning */}
            <div>
              <p className="text-xs font-medium text-gold/70 uppercase tracking-wider mb-1">Meaning</p>
              <p className="text-forest text-sm leading-relaxed">{dua.meaning}</p>
            </div>

            {/* Virtue */}
            {dua.virtue && (
              <div className="bg-gold/5 border-l-4 border-gold/40 rounded-r-xl px-4 py-3">
                <p className="text-xs font-medium text-gold/70 uppercase tracking-wider mb-1">Virtue</p>
                <p className="text-forest/60 text-sm italic">{dua.virtue}</p>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
