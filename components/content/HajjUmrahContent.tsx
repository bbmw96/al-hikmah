'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { HAJJ_UMRAH_CONTENT } from '@/lib/i18n/content/hajj-umrah-content';
import type { HajjUmrahContentKey } from '@/lib/i18n/content/hajj-umrah-content';
import { HAJJ_STEPS, HAJJ_TYPES, type PilgrimageStep } from '@/lib/data/hajj-steps';
import { UMRAH_STEPS, UMRAH_DIFFERENCES_FROM_HAJJ, type UmrahStep } from '@/lib/data/umrah-steps';
import { cn } from '@/lib/utils';

const PHASE_COLOURS: Record<string, string> = {
  preparation: 'bg-gold/20 text-gold',
  'makkah-arrival': 'bg-forest/20 text-forest',
  mina: 'bg-midnight/20 text-midnight',
  arafah: 'bg-red-100 text-red-700',
  muzdalifah: 'bg-purple-100 text-purple-700',
  'mina-eid': 'bg-green-100 text-green-700',
  completion: 'bg-gold/20 text-gold',
};

const HAJJ_TYPE_KEYS: Record<string, { name: HajjUmrahContentKey; desc: HajjUmrahContentKey }> = {
  tamattu: { name: 'type_tamattu_name', desc: 'type_tamattu_desc' },
  ifrad: { name: 'type_ifrad_name', desc: 'type_ifrad_desc' },
  qiran: { name: 'type_qiran_name', desc: 'type_qiran_desc' },
};

const CMP_PREFIX: Record<string, string> = {
  'Duration': 'cmp_duration',
  'Time': 'cmp_time',
  'Standing at Arafah': 'cmp_arafah',
  'Stoning of Jamarat': 'cmp_stoning',
  'Sacrifice': 'cmp_sacrifice',
  'Status in Islam': 'cmp_status',
};

function useTC() {
  const { lang } = useLanguage();
  return (key: HajjUmrahContentKey): string => {
    const entry = HAJJ_UMRAH_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry['en'] ?? key;
  };
}

function stepField(tc: (key: HajjUmrahContentKey) => string, stepId: string, field: string, fallback: string): string {
  const key = `step_${stepId.replace(/-/g, '_')}_${field}` as HajjUmrahContentKey;
  return key in HAJJ_UMRAH_CONTENT ? tc(key) : fallback;
}

function cmpCell(tc: (key: HajjUmrahContentKey) => string, base: string, col: 'aspect' | 'umrah' | 'hajj', fallback: string): string {
  const key = `${base}_${col}` as HajjUmrahContentKey;
  return key in HAJJ_UMRAH_CONTENT ? tc(key) : fallback;
}

interface StepCardProps {
  step: PilgrimageStep | UmrahStep;
  tc: (key: HajjUmrahContentKey) => string;
}

function StepCard({ step, tc }: StepCardProps) {
  const phaseColour = 'phase' in step ? (PHASE_COLOURS[step.phase] ?? 'bg-forest/20 text-forest') : 'bg-forest/20 text-forest';
  const title = stepField(tc, step.id, 'title', step.title);
  const description = stepField(tc, step.id, 'desc', step.description);
  const location = 'location' in step && step.location
    ? stepField(tc, step.id, 'location', step.location as string)
    : null;
  const wisdom = stepField(tc, step.id, 'wisdom', step.wisdom);

  return (
    <article className="card-islamic flex flex-col gap-5" id={`step-${step.stepNumber}`}>
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
            {'obligatoryNote' in step && step.obligatoryNote && (
              <span className="text-xs bg-red-50 text-red-600 border border-red-200 px-2 py-0.5 rounded-full">
                {step.obligatoryNote}
              </span>
            )}
          </div>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold mb-1.5" aria-hidden="true">
            {step.arabicTitle}
          </p>
          <h3 className="font-garamond text-xl font-semibold text-forest">{title}</h3>
          {location && (
            <p className="text-forest/50 text-xs mt-0.5">📍 {location}</p>
          )}
        </div>
      </div>

      <p className="text-forest/70 leading-relaxed text-sm">{description}</p>

      <div>
        <h4 className="font-garamond text-base font-semibold text-forest mb-2">{tc('label_requirements')}</h4>
        <ul className="space-y-1.5">
          {step.requirements.map((req, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-forest/70">
              <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" aria-hidden="true" />
              {req}
            </li>
          ))}
        </ul>
      </div>

      {step.commonMistakes && step.commonMistakes.length > 0 && (
        <div className="bg-red-50 border border-red-100 rounded-xl p-4">
          <h4 className="font-garamond text-base font-semibold text-red-700 mb-2">{tc('label_common_mistakes')}</h4>
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

      <div className="bg-gold/5 border-l-4 border-gold/50 rounded-r-xl p-4">
        <h4 className="font-garamond text-base font-semibold text-forest mb-2">{tc('label_wisdom')}</h4>
        <p className="text-forest/60 text-sm leading-relaxed italic">{wisdom}</p>
      </div>

      {step.duas && step.duas.length > 0 && (
        <div>
          <h4 className="font-garamond text-base font-semibold text-forest mb-2">{tc('label_duas')}</h4>
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

export function HajjUmrahContent() {
  const tc = useTC();

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="الحج والعمرة"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">
        <div className="text-center">
          <ArabicText
            text="وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا وَعَلَىٰ كُلِّ ضَامِرٍ يَأْتِينَ مِن كُلِّ فَجٍّ عَمِيقٍ"
            size="lg"
            className="mb-4"
          />
          <p className="text-forest/60 italic text-sm">{tc('opening_verse')}</p>
        </div>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('section_types')}
          </h2>
          <div className="grid gap-4">
            {HAJJ_TYPES.map(type => {
              const keys = HAJJ_TYPE_KEYS[type.id];
              return (
                <div key={type.id} className={cn('card-islamic', type.recommended && 'border-gold/40 bg-gold/5')}>
                  <div className="flex items-center gap-3 mb-3">
                    <p dir="rtl" lang="ar" className="arabic text-forest" aria-hidden="true">
                      {type.arabicName}
                    </p>
                    <h3 className="font-garamond text-xl font-semibold text-forest">
                      {keys ? tc(keys.name) : type.name}
                    </h3>
                    {type.recommended && (
                      <span className="badge-gold text-xs ml-auto">{tc('label_recommended')}</span>
                    )}
                  </div>
                  <p className="text-forest/60 text-sm leading-relaxed">
                    {keys ? tc(keys.desc) : type.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="hajj">
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            {tc('section_hajj_steps')}
          </h2>
          <div className="space-y-8">
            {HAJJ_STEPS.map(step => (
              <StepCard key={step.id} step={step} tc={tc} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            {tc('section_comparison')}
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-gold/20">
            <table className="w-full text-sm">
              <thead className="bg-forest text-cream">
                <tr>
                  <th className="px-5 py-3 text-left font-garamond font-semibold">{tc('th_aspect')}</th>
                  <th className="px-5 py-3 text-left font-garamond font-semibold">{tc('th_umrah')}</th>
                  <th className="px-5 py-3 text-left font-garamond font-semibold">{tc('th_hajj')}</th>
                </tr>
              </thead>
              <tbody>
                {UMRAH_DIFFERENCES_FROM_HAJJ.map((row, i) => {
                  const base = CMP_PREFIX[row.aspect] ?? '';
                  return (
                    <tr key={row.aspect} className={i % 2 === 0 ? 'bg-white' : 'bg-gold/5'}>
                      <td className="px-5 py-3 font-medium text-forest">
                        {cmpCell(tc, base, 'aspect', row.aspect)}
                      </td>
                      <td className="px-5 py-3 text-forest/70">
                        {cmpCell(tc, base, 'umrah', row.umrah)}
                      </td>
                      <td className="px-5 py-3 text-forest/70">
                        {cmpCell(tc, base, 'hajj', row.hajj)}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>

        <section id="umrah">
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            {tc('section_umrah_steps')}
          </h2>
          <div className="space-y-8">
            {UMRAH_STEPS.map(step => (
              <StepCard key={step.id} step={step} tc={tc} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
