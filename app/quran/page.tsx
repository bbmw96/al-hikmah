import type { Metadata } from 'next';
import { BookOpen } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { QuranListContent } from '@/components/ui/QuranListContent';

export const metadata: Metadata = {
  title: 'The Quran: Revelation & Context',
  description:
    'All 114 surahs with their occasions of revelation (Asbab al-Nuzul), Makki and Madani classification, key themes, and the stories behind every chapter.',
};

export default function QuranPage() {
  return (
    <>
      <PageHeader
        title="The Quran: Revelation & Context"
        arabicTitle="القرآن الكريم"
        subtitle="All 114 surahs with their occasions of revelation (Asbab al-Nuzul), Makki and Madani classification, themes, and the stories behind every chapter."
      />

      {/* Intro note */}
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-0">
        <div className="bg-gold/8 border border-gold/25 rounded-xl p-6 text-center">
          <p className="text-forest/80 text-sm leading-relaxed mb-2">
            The Quran was revealed over <strong>23 years</strong> in two phases:{' '}
            <strong>Makki</strong> surahs (revealed in Makkah before the Hijra, focused on faith and the soul) and{' '}
            <strong>Madani</strong> surahs (revealed in Madinah after the Hijra, focused on law and community).
          </p>
          <p className="text-forest/60 text-xs italic">
            Asbab al-Nuzul (أسباب النزول) is the classical Islamic science of the occasions of revelation: the events,
            questions, and contexts that prompted specific verses to be sent down.
          </p>
        </div>
      </div>

      {/* Interactive search, filter and surah grid */}
      <QuranListContent />

      {/* Bottom banner */}
      <div className="bg-forest/5 border-t border-gold/10 py-12 mt-8">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <BookOpen className="w-8 h-8 text-gold/60 mx-auto mb-4" aria-hidden="true" />
          <p
            dir="rtl"
            lang="ar"
            className="arabic-lg text-forest mb-3"
            aria-hidden="true"
          >
            إِنَّهُ لَقُرْآنٌ كَرِيمٌ
          </p>
          <p className="text-forest/60 italic text-sm">
            &ldquo;Indeed, it is a noble Quran.&rdquo; (Surah Al-Waqi&apos;ah 56:77)
          </p>
        </div>
      </div>
    </>
  );
}
