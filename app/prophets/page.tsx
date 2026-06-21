import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ProphetGrid } from '@/components/ui/ProphetGrid';

export const dynamic = 'force-static';

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

        <ProphetGrid />
      </div>
    </>
  );
}
