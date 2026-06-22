import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ArabicText } from '@/components/ui/ArabicText';
import { PROPHETS, getProphetById } from '@/lib/data/prophets';

interface Props {
  params: Promise<{ slug: string }>;
}

export const revalidate = 3600;
export const dynamicParams = true;

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
          {prophet.lineage.length === 0 ? (
            <div className="card-islamic text-center text-forest/50 text-sm py-6">
              Adam (peace be upon him) is the first human and first Prophet — he has no human lineage.
            </div>
          ) : (
            <div className="flex flex-col items-center gap-0">
              {/* Ancestors displayed oldest → newest (reversed from stored order) */}
              {[...prophet.lineage].reverse().map((entry, i, arr) => (
                <div key={i} className="flex flex-col items-center w-full max-w-sm">
                  <div className="w-full border border-gold/30 bg-white rounded-xl px-5 py-3 text-center shadow-sm">
                    {entry.arabicName && (
                      <p dir="rtl" lang="ar" className="arabic-sm text-forest/60 leading-tight mb-0.5">
                        {entry.arabicName}
                      </p>
                    )}
                    <p className="font-garamond font-semibold text-forest text-base">{entry.englishName}</p>
                    <p className="text-xs text-gold/80 font-medium uppercase tracking-wide mt-0.5">{entry.relation}</p>
                  </div>
                  {/* Connector line down to next ancestor or to the prophet */}
                  <div className="flex flex-col items-center">
                    <div className="w-px h-5 bg-gold/40" />
                    <div className="w-2 h-2 rounded-full bg-gold/50" />
                    <div className="w-px h-5 bg-gold/40" />
                  </div>
                </div>
              ))}
              {/* The prophet at the bottom */}
              <div className="w-full max-w-sm border-2 border-gold bg-forest rounded-xl px-5 py-4 text-center shadow-md">
                <p dir="rtl" lang="ar" className="arabic text-gold leading-tight mb-1">
                  {prophet.arabicName}
                </p>
                <p className="font-garamond font-bold text-cream text-lg">{prophet.englishName}</p>
                <p className="text-gold/80 text-xs font-medium uppercase tracking-wide mt-0.5">Prophet (peace be upon him)</p>
              </div>
            </div>
          )}
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
