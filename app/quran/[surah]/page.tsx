import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import { ArabicText } from '@/components/ui/ArabicText';
import { SURAHS, getSurahByTransliteration } from '@/lib/data/quran';
import { cn } from '@/lib/utils';

interface Props {
  params: Promise<{ surah: string }>;
}

export async function generateStaticParams() {
  return SURAHS.map(s => ({ surah: s.transliteration }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { surah: slug } = await params;
  const surah = getSurahByTransliteration(slug);
  if (!surah) return {};
  return {
    title: `Surah ${surah.englishName} (${surah.transliteration}): Quran ${surah.number}`,
    description: `${surah.overview} Occasion of revelation: ${surah.asbabalNuzul.slice(0, 120)}...`,
  };
}

export default async function SurahPage({ params }: Props) {
  const { surah: slug } = await params;
  const surah = getSurahByTransliteration(slug);
  if (!surah) notFound();

  const currentIndex = SURAHS.findIndex(s => s.transliteration === surah.transliteration);
  const prev = currentIndex > 0 ? SURAHS[currentIndex - 1] : null;
  const next = currentIndex < SURAHS.length - 1 ? SURAHS[currentIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back */}
      <Link
        href="/quran"
        className="inline-flex items-center gap-1.5 text-sm text-forest/60 hover:text-forest mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        All Surahs
      </Link>

      {/* Header */}
      <header className="relative bg-forest rounded-3xl overflow-hidden p-10 mb-10 text-center">
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="badge-gold text-xs">Surah {surah.number}</span>
            <span className={cn(
              'text-xs font-medium px-3 py-1 rounded-full',
              surah.classification === 'Makki'
                ? 'bg-amber-500/20 text-amber-300'
                : 'bg-teal-500/20 text-teal-300',
            )}>
              {surah.classification}
            </span>
          </div>
          <ArabicText text={surah.arabicName} size="xl" className="mb-4 text-cream" />
          <h1 className="font-garamond text-4xl font-semibold text-cream mb-1">
            {surah.englishName}
          </h1>
          <p className="text-gold/70 italic text-lg">{surah.transliteration.split('-').map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}</p>
          {surah.alternativeNames && surah.alternativeNames.length > 0 && (
            <p className="text-cream/40 text-sm mt-2">
              Also known as: {surah.alternativeNames.join(', ')}
            </p>
          )}
        </div>
      </header>

      <div className="space-y-8">
        {/* Key facts */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Verses', value: String(surah.verses) },
            { label: 'Revelation', value: surah.classification },
            { label: 'Period', value: surah.period },
            { label: 'Surah No.', value: String(surah.number) + ' of 114' },
          ].map(fact => (
            <div key={fact.label} className="card-islamic text-center">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{fact.label}</p>
              <p className="text-forest font-semibold text-sm">{fact.value}</p>
            </div>
          ))}
        </section>

        {/* Overview */}
        <section className="card-islamic">
          <h2 className="font-garamond text-xl font-semibold text-forest mb-3 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-gold" aria-hidden="true" />
            Overview
          </h2>
          <p className="text-forest/70 leading-relaxed">{surah.overview}</p>
        </section>

        {/* Asbab al-Nuzul */}
        <section className="card-islamic border-gold/30 bg-gold/5">
          <p
            dir="rtl"
            lang="ar"
            className="arabic-sm text-gold/70 mb-1"
            aria-hidden="true"
          >
            أسباب النزول
          </p>
          <h2 className="font-garamond text-xl font-semibold text-forest mb-4">
            Occasion of Revelation (Asbab al-Nuzul)
          </h2>
          <p className="text-forest/70 leading-relaxed">{surah.asbabalNuzul}</p>
        </section>

        {/* Key Themes */}
        <section>
          <h2 className="section-title font-garamond text-xl font-semibold text-forest mb-4">
            Key Themes
          </h2>
          <div className="flex flex-wrap gap-2">
            {surah.keyThemes.map((theme: string) => (
              <span key={theme} className="badge-gold text-xs">{theme}</span>
            ))}
          </div>
        </section>

        {/* Notable Verses */}
        {surah.notableVerses.length > 0 && (
          <section>
            <h2 className="section-title font-garamond text-xl font-semibold text-forest mb-4">
              Notable Verses
            </h2>
            <div className="space-y-5">
              {surah.notableVerses.map((v: { reference: string; arabic: string; translation: string; context: string }) => (
                <article key={v.reference} className="card-islamic flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <span className="badge-gold text-xs">{v.reference}</span>
                  </div>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="arabic text-forest/80 text-right leading-loose"
                    aria-hidden="true"
                  >
                    {v.arabic}
                  </p>
                  <p className="text-forest/80 italic text-sm leading-relaxed border-l-2 border-gold/40 pl-4">
                    &ldquo;{v.translation}&rdquo;
                  </p>
                  {v.context && (
                    <p className="text-forest/55 text-xs leading-relaxed">{v.context}</p>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Virtues */}
        {surah.virtues && (
          <section className="card-islamic bg-forest text-cream">
            <h2 className="font-garamond text-xl font-semibold text-gold mb-3">Virtues of this Surah</h2>
            <p className="text-cream/80 leading-relaxed text-sm">{surah.virtues}</p>
          </section>
        )}
      </div>

      {/* Navigation */}
      <nav
        className="flex items-center justify-between mt-12 pt-6 border-t border-gold/20"
        aria-label="Surah navigation"
      >
        {prev ? (
          <Link
            href={`/quran/${prev.transliteration}`}
            className="flex items-center gap-2 text-sm text-forest/60 hover:text-forest transition-colors"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            <span>
              <span className="block text-xs text-forest/40">Previous</span>
              {prev.englishName}
            </span>
          </Link>
        ) : <div />}
        {next ? (
          <Link
            href={`/quran/${next.transliteration}`}
            className="flex items-center gap-2 text-sm text-forest/60 hover:text-forest transition-colors text-right"
          >
            <span>
              <span className="block text-xs text-forest/40">Next</span>
              {next.englishName}
            </span>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        ) : <div />}
      </nav>
    </div>
  );
}
