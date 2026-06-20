import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ArabicText } from '@/components/ui/ArabicText';
import { PROPHETS, getProphetById } from '@/lib/data/prophets';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROPHETS.map(p => ({ slug: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const prophet = getProphetById(slug);
  if (!prophet) return {};
  return {
    title: `Prophet ${prophet.englishName} (peace be upon him)`,
    description: `Learn about Prophet ${prophet.englishName} - his lineage, the nation he was sent to, his miracles, and his message.`,
  };
}

export default async function ProphetPage({ params }: Props) {
  const { slug } = await params;
  const prophet = getProphetById(slug);
  if (!prophet) notFound();

  const currentIndex = PROPHETS.findIndex(p => p.id === prophet.id);
  const prev = currentIndex > 0 ? PROPHETS[currentIndex - 1] : null;
  const next = currentIndex < PROPHETS.length - 1 ? PROPHETS[currentIndex + 1] : null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back */}
      <Link
        href="/prophets"
        className="inline-flex items-center gap-1.5 text-sm text-forest/60 hover:text-forest mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        All Prophets
      </Link>

      {/* Header */}
      <header className="relative bg-forest rounded-3xl overflow-hidden p-10 mb-10 text-center">
        <div className="relative z-10">
          <span className="badge-gold text-xs mb-4 inline-block">Prophet #{prophet.prophetNumber}</span>
          <ArabicText text={prophet.arabicName} size="xl" className="mb-4 text-cream" />
          <h1 className="font-garamond text-4xl font-semibold text-cream mb-2">
            {prophet.englishName}
            {prophet.title && (
              <span className="block text-gold text-xl font-normal mt-1">{prophet.title}</span>
            )}
          </h1>
          {prophet.alternativeNames && prophet.alternativeNames.length > 0 && (
            <p className="text-cream/50 text-sm">
              Also known as: {prophet.alternativeNames.join(', ')}
            </p>
          )}
        </div>
      </header>

      <div className="space-y-8">
        {/* Key facts */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { label: 'Nation / People', value: prophet.nationSentTo },
            { label: 'Period', value: prophet.periodInHistory },
            prophet.lifespan ? { label: 'Lifespan', value: prophet.lifespan } : null,
            prophet.burialPlace ? { label: 'Burial Place', value: prophet.burialPlace } : null,
          ]
            .filter(Boolean)
            .map(fact => (
              <div key={fact!.label} className="card-islamic">
                <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">
                  {fact!.label}
                </p>
                <p className="text-forest font-medium text-sm">{fact!.value}</p>
              </div>
            ))}
        </section>

        {/* Core message */}
        <section className="card-islamic">
          <h2 className="font-garamond text-xl font-semibold text-forest mb-3">Message</h2>
          <p className="text-forest/70 leading-relaxed">{prophet.message}</p>
        </section>

        {/* Lineage */}
        <section>
          <h2 className="section-title font-garamond text-xl font-semibold text-forest mb-4">
            Lineage
          </h2>
          <div className="card-islamic">
            <ol className="space-y-2">
              {prophet.lineage.map((entry, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-gold/50 w-5 text-right flex-shrink-0">{i + 1}.</span>
                  <div>
                    <span className="font-medium text-forest">{entry.englishName}</span>
                    {entry.arabicName && (
                      <span
                        dir="rtl"
                        lang="ar"
                        className="arabic-sm text-forest/50 ml-2"
                        aria-hidden="true"
                      >
                        {entry.arabicName}
                      </span>
                    )}
                    {entry.relation && (
                      <span className="text-forest/40 text-xs ml-2">- {entry.relation}</span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Miracles */}
        {prophet.keyMiracles.length > 0 && (
          <section>
            <h2 className="section-title font-garamond text-xl font-semibold text-forest mb-4">
              Key Miracles
            </h2>
            <ul className="space-y-2">
              {prophet.keyMiracles.map((miracle, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-forest/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" aria-hidden="true" />
                  {miracle}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Stories */}
        {prophet.keyStories.length > 0 && (
          <section>
            <h2 className="section-title font-garamond text-xl font-semibold text-forest mb-4">
              Key Stories
            </h2>
            <ul className="space-y-2">
              {prophet.keyStories.map((story, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-forest/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" aria-hidden="true" />
                  {story}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Quran mentions */}
        {prophet.quranMentions.length > 0 && (
          <section className="card-islamic bg-gold/5">
            <h2 className="font-garamond text-xl font-semibold text-forest mb-3">Mentioned in the Quran</h2>
            <div className="flex flex-wrap gap-2">
              {prophet.quranMentions.map(ref => (
                <span key={ref} className="badge-gold text-xs">{ref}</span>
              ))}
            </div>
          </section>
        )}

        {/* Special characteristics */}
        {prophet.specialCharacteristics && (
          <section className="card-islamic border-gold/30">
            <h2 className="font-garamond text-xl font-semibold text-forest mb-3">
              Special Characteristics
            </h2>
            <p className="text-forest/70 leading-relaxed text-sm">{prophet.specialCharacteristics}</p>
          </section>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex items-center justify-between mt-12 pt-6 border-t border-gold/20" aria-label="Prophet navigation">
        {prev ? (
          <Link
            href={`/prophets/${prev.id}`}
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
            href={`/prophets/${next.id}`}
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
