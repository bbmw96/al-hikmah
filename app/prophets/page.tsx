import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { PROPHETS } from '@/lib/data/prophets';

export const metadata: Metadata = {
  title: 'Prophets of Islam',
  description:
    'Learn about all 25 prophets mentioned in the Quran — their lineage, the nations they were sent to, their miracles, and their stories.',
};

export default function ProphetsPage() {
  return (
    <>
      <PageHeader
        title="Prophets of Islam"
        arabicTitle="الأنبياء والمرسلون"
        subtitle="Allah sent messengers to every nation, each calling their people to the worship of One God. The Quran mentions 25 of these noble messengers by name."
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <p className="text-center text-forest/50 text-sm mb-12 italic">
          "Indeed, We sent to every nation a messenger, saying: 'Worship Allah and avoid false deities.'" — Surah al-Nahl 16:36
        </p>

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
