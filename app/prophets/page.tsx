import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { PROPHETS } from '@/lib/data/prophets';

export const metadata: Metadata = {
  title: 'Prophets of Islam',
  description:
    'Learn about the 25 prophets named in the Quran. Islamic tradition holds that Allah sent approximately 124,000 prophets to all nations - here are those mentioned by name.',
};

export default function ProphetsPage() {
  return (
    <>
      <PageHeader
        title="Prophets of Islam"
        arabicTitle="الأنبياء والمرسلون"
        subtitle="The Quran names 25 noble prophets. Islamic tradition holds Allah sent approximately 124,000 prophets to all nations throughout history - all calling to the worship of One God."
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Scholarly note on prophet count */}
        <div className="max-w-3xl mx-auto mb-12 bg-gold/8 border border-gold/25 rounded-xl p-6 text-center">
          <p className="text-forest/80 text-sm leading-relaxed mb-3">
            The Quran mentions <strong>25 prophets</strong> by name, from Adam (peace be upon him) to Muhammad ﷺ. These are the prophets documented on this page.
          </p>
          <p className="text-forest/60 text-sm leading-relaxed">
            However, Islamic tradition teaches that Allah sent prophets to <em>every nation</em> throughout history. Narrations preserve that the total number of prophets sent to humanity was approximately <strong>124,000</strong> - far beyond those named in the Quran. All carried the same essential message: the worship of One God.
          </p>
          <p className="text-forest/40 text-xs italic mt-4">
            "Indeed, We sent to every nation a messenger, saying: Worship Allah and avoid false deities." - Surah al-Nahl 16:36
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PROPHETS.map((prophet) => (
            <Link
              key={prophet.id}
              href={`/prophets/${prophet.id}`}
              className="card-islamic group text-center flex flex-col items-center gap-3 hover:-translate-y-1 transition-transform duration-200"
            >
              {/* Sequence number */}
              <span className="w-8 h-8 rounded-full bg-gold/15 text-gold text-xs font-semibold flex items-center justify-center">
                {prophet.prophetNumber}
              </span>

              {/* Arabic name */}
              <p
                dir="rtl"
                lang="ar"
                className="arabic text-forest"
                aria-hidden="true"
              >
                {prophet.arabicName}
              </p>

              {/* English name */}
              <h2 className="font-garamond text-lg font-semibold text-forest group-hover:text-gold transition-colors">
                {prophet.englishName}
              </h2>

              {prophet.title && (
                <p className="text-gold/70 text-xs italic">{prophet.title}</p>
              )}

              <p className="text-forest/50 text-xs leading-relaxed mt-auto">
                Sent to: {prophet.nationSentTo}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
