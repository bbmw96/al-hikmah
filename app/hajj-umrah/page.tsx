import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { HAJJ_STEPS, HAJJ_TYPES, type PilgrimageStep } from '@/lib/data/hajj-steps';
import { UMRAH_STEPS, UMRAH_DIFFERENCES_FROM_HAJJ, type UmrahStep } from '@/lib/data/umrah-steps';
import { cn } from '@/lib/utils';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Hajj & Umrah Guide',
  description:
    "A comprehensive step-by-step guide to Hajj and Umrah - the greater and lesser pilgrimages - with the wisdom, jurisprudence, and supplications behind each rite.",
};

const PHASE_COLOURS: Record<string, string> = {
  preparation: 'bg-gold/20 text-gold',
  'makkah-arrival': 'bg-forest/20 text-forest',
  mina: 'bg-midnight/20 text-midnight',
  arafah: 'bg-red-100 text-red-700',
  muzdalifah: 'bg-purple-100 text-purple-700',
  'mina-eid': 'bg-green-100 text-green-700',
  completion: 'bg-gold/20 text-gold',
};

function StepCard({ step, pilgrimageType }: { step: PilgrimageStep | UmrahStep; pilgrimageType: 'hajj' | 'umrah' }) {
  const phaseColour = 'phase' in step ? PHASE_COLOURS[step.phase] : 'bg-forest/20 text-forest';

  return (
    <article className="card-islamic flex flex-col gap-5" id={`step-${step.stepNumber}`}>
      {/* Header */}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-forest flex items-center justify-center flex-shrink-0 ring-2 ring-gold/30">
          <span className="text-gold font-garamond font-semibold text-lg">{step.stepNumber}</span>
        </div>
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            {'phase' in step && (
              <span className={cn('text-xs px-2 py-0.5 rounded-full font-medium capitalize', phaseColour)}>
                {step.phase.replace(/-/g, ' ')}
              </span>
            )}
            {'day' in step && step.day && (
              <span className="text-xs text-gold/70">{step.day}</span>
            )}
            {'isObligatory' in step && step.obligatoryNote && (
              <span className="text-xs bg-red-50 text-red-600 border border-red-200 px-2 py-0.5 rounded-full">
                {step.obligatoryNote}
              </span>
            )}
          </div>
          <p
            dir="rtl"
            lang="ar"
            className="arabic-sm text-gold mb-1.5"
            aria-hidden="true"
          >
            {step.arabicTitle}
          </p>
          <h3 className="font-garamond text-xl font-semibold text-forest">{step.title}</h3>
          {'location' in step && step.location && (
            <p className="text-forest/50 text-xs mt-0.5">📍 {step.location}</p>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-forest/70 leading-relaxed text-sm">{step.description}</p>

      {/* Requirements */}
      <div>
        <h4 className="font-garamond text-base font-semibold text-forest mb-2">Requirements</h4>
        <ul className="space-y-1.5">
          {step.requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-forest/70">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" aria-hidden="true" />
              {req}
            </li>
          ))}
        </ul>
      </div>

      {/* Common mistakes */}
      {step.commonMistakes && step.commonMistakes.length > 0 && (
        <div className="bg-red-50 border border-red-100 rounded-xl p-4">
          <h4 className="font-garamond text-base font-semibold text-red-700 mb-2">Common Mistakes to Avoid</h4>
          <ul className="space-y-1.5">
            {step.commonMistakes.map((m, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-red-600">
                <span className="text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true">⚠</span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Wisdom */}
      <div className="bg-gold/5 border-l-4 border-gold/50 rounded-r-xl p-4">
        <h4 className="font-garamond text-base font-semibold text-forest mb-2">The Wisdom</h4>
        <p className="text-forest/60 text-sm leading-relaxed italic">{step.wisdom}</p>
      </div>

      {/* Duas */}
      {step.duas && step.duas.length > 0 && (
        <div>
          <h4 className="font-garamond text-base font-semibold text-forest mb-2">Recommended Du'as</h4>
          <ul className="space-y-2">
            {step.duas.map((dua, i) => (
              <li key={i} className="bg-forest/5 rounded-lg px-4 py-2.5 text-sm text-forest/70 italic">
                {dua}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default function HajjUmrahPage() {
  return (
    <>
      <PageHeader
        title="Hajj & Umrah"
        arabicTitle="الحج والعمرة"
        subtitle="The pilgrimage to the House of Allah - the fifth pillar of Islam and the greatest journey a believer can undertake."
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">
        {/* Opening verse */}
        <div className="text-center">
          <ArabicText
            text="وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ"
            size="lg"
            className="mb-4"
          />
          <p className="text-forest/60 italic text-sm">
            "And proclaim to the people the Hajj; they will come to you on foot and on every lean camel; they will come from every distant pass." - Surah al-Hajj 22:27
          </p>
        </div>

        {/* Hajj Types */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            The Three Types of Hajj
          </h2>
          <div className="grid gap-4">
            {HAJJ_TYPES.map(type => (
              <div
                key={type.id}
                className={cn('card-islamic', type.recommended && 'border-gold/40 bg-gold/5')}
              >
                <div className="flex items-center gap-3 mb-3">
                  <p
                    dir="rtl"
                    lang="ar"
                    className="arabic text-forest"
                    aria-hidden="true"
                  >
                    {type.arabicName}
                  </p>
                  <h3 className="font-garamond text-xl font-semibold text-forest">{type.name}</h3>
                  {type.recommended && (
                    <span className="badge-gold text-xs ml-auto">Most Common</span>
                  )}
                </div>
                <p className="text-forest/60 text-sm leading-relaxed">{type.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hajj Steps */}
        <section id="hajj">
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            Step-by-Step Hajj Guide
          </h2>
          <div className="space-y-8">
            {HAJJ_STEPS.map(step => (
              <StepCard key={step.id} step={step} pilgrimageType="hajj" />
            ))}
          </div>
        </section>

        {/* Hajj vs Umrah comparison */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            Hajj vs Umrah: Key Differences
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gold/20">
            <table className="w-full text-sm">
              <thead className="bg-forest text-cream">
                <tr>
                  <th className="px-5 py-3 text-left font-garamond font-semibold">Aspect</th>
                  <th className="px-5 py-3 text-left font-garamond font-semibold">Umrah</th>
                  <th className="px-5 py-3 text-left font-garamond font-semibold">Hajj</th>
                </tr>
              </thead>
              <tbody>
                {UMRAH_DIFFERENCES_FROM_HAJJ.map((row, i) => (
                  <tr
                    key={row.aspect}
                    className={i % 2 === 0 ? 'bg-white' : 'bg-gold/5'}
                  >
                    <td className="px-5 py-3 font-medium text-forest">{row.aspect}</td>
                    <td className="px-5 py-3 text-forest/70">{row.umrah}</td>
                    <td className="px-5 py-3 text-forest/70">{row.hajj}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Umrah steps */}
        <section id="umrah">
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            Step-by-Step Umrah Guide
          </h2>
          <div className="space-y-8">
            {UMRAH_STEPS.map(step => (
              <StepCard key={step.id} step={step} pilgrimageType="umrah" />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
