'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { PROPHETS, getProphetById } from '@/lib/data/prophets';
import {
  getProphetDetail,
  RELATION_LABELS,
  type ProphetLangMap,
  type PDFamilyMember,
} from '@/lib/data/prophet-details';
import { PROPHETS_CONTENT } from '@/lib/i18n/content/prophets-content';
import type { ProphetsContentKey } from '@/lib/i18n/content/prophets-content';

export function ProphetDetailContent({ slug }: { slug: string }) {
  const { lang } = useLanguage();
  const prophet = getProphetById(slug);
  if (!prophet) return null;
  const detail = getProphetDetail(slug);

  const tc = (key: ProphetsContentKey): string => {
    const entry = PROPHETS_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry['en'] ?? key;
  };
  const tl = (map: ProphetLangMap | undefined, fallback: string): string =>
    (map ? (map[lang] ?? map.en) : '') || fallback;

  const name = tl(detail?.name, prophet.englishName);
  const title = tl(detail?.title, prophet.title);
  const altNames = detail?.alternativeNames
    ? detail.alternativeNames.map(a => a[lang] ?? a.en)
    : prophet.alternativeNames;
  const miracles = detail?.keyMiracles
    ? detail.keyMiracles.map(m => m[lang] ?? m.en)
    : prophet.keyMiracles;
  const stories = detail?.keyStories
    ? detail.keyStories.map(s => s[lang] ?? s.en)
    : prophet.keyStories;

  const relationLabel = (raw: string): string =>
    RELATION_LABELS[raw]?.[lang] ?? RELATION_LABELS[raw]?.en ?? raw;
  const lineageRows = prophet.lineage.map(e => ({
    arabicName: e.arabicName,
    name: e.englishName,
    relation: relationLabel(e.relation),
  }));

  const keyFacts = [
    { label: tc('detail_nation'), value: tl(detail?.nationSentTo, prophet.nationSentTo) },
    { label: tc('detail_period'), value: tl(detail?.periodInHistory, prophet.periodInHistory) },
    prophet.lifespan ? { label: tc('detail_lifespan'), value: tl(detail?.lifespan, prophet.lifespan) } : null,
    prophet.burialPlace ? { label: tc('detail_burial'), value: tl(detail?.burialPlace, prophet.burialPlace) } : null,
  ].filter(Boolean) as { label: string; value: string }[];

  const familyGroupsAll: { key: ProphetsContentKey; members: PDFamilyMember[] }[] = detail?.family
    ? [
        { key: 'detail_father', members: detail.family.father ? [detail.family.father] : [] },
        { key: 'detail_mother', members: detail.family.mother ? [detail.family.mother] : [] },
        { key: 'detail_wives', members: detail.family.wives ?? [] },
        { key: 'detail_sons', members: detail.family.sons ?? [] },
        { key: 'detail_daughters', members: detail.family.daughters ?? [] },
        { key: 'detail_brothers', members: detail.family.brothers ?? [] },
        { key: 'detail_sisters', members: detail.family.sisters ?? [] },
      ]
    : [];
  const familyGroups = familyGroupsAll.filter(g => g.members.length > 0);

  const currentIndex = PROPHETS.findIndex(p => p.id === prophet.id);
  const prev = currentIndex > 0 ? PROPHETS[currentIndex - 1] : null;
  const next = currentIndex < PROPHETS.length - 1 ? PROPHETS[currentIndex + 1] : null;
  const navName = (p: { id: string; englishName: string }) =>
    tl(getProphetDetail(p.id)?.name, p.englishName);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back */}
      <Link
        href="/prophets"
        className="inline-flex items-center gap-1.5 text-sm text-forest/60 hover:text-forest mb-8 transition-colors"
      >
        <ChevronLeft className="w-4 h-4" aria-hidden="true" />
        {tc('detail_back')}
      </Link>

      {/* Header */}
      <header className="relative bg-forest rounded-3xl overflow-hidden p-10 mb-10 text-center">
        <div className="relative z-10">
          <span className="badge-gold text-xs mb-4 inline-block">
            {tc('detail_badge')} #{prophet.prophetNumber}
          </span>
          <ArabicText text={prophet.arabicName} size="xl" className="mb-4 text-cream" />
          <h1 className="font-garamond text-4xl font-semibold text-cream mb-2">
            {name}
            {title && <span className="block text-gold text-xl font-normal mt-1">{title}</span>}
          </h1>
          {altNames && altNames.length > 0 && (
            <p className="text-cream/50 text-sm">
              {tc('detail_also_known')} {altNames.join(', ')}
            </p>
          )}
        </div>
      </header>

      <div className="space-y-8">
        {/* Key facts */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {keyFacts.map(fact => (
            <div key={fact.label} className="card-islamic">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{fact.label}</p>
              <p className="text-forest font-medium text-sm">{fact.value}</p>
            </div>
          ))}
        </section>

        {/* Core message */}
        <section className="card-islamic">
          <h2 className="font-garamond text-xl font-semibold text-forest mb-3">{tc('detail_message')}</h2>
          <p className="text-forest/70 leading-relaxed">{tl(detail?.message, prophet.message)}</p>
        </section>

        {/* Lineage */}
        <section>
          <h2 className="section-title font-garamond text-xl font-semibold text-forest mb-4">{tc('detail_lineage')}</h2>
          {lineageRows.length === 0 ? (
            <div className="card-islamic text-center text-forest/50 text-sm py-6">{tc('detail_adam_no_lineage')}</div>
          ) : (
            <div className="flex flex-col items-center gap-0">
              {[...lineageRows].reverse().map((entry, i) => (
                <div key={i} className="flex flex-col items-center w-full max-w-sm">
                  <div className="w-full border border-gold/30 bg-white rounded-xl px-5 py-3 text-center shadow-sm">
                    {entry.arabicName && (
                      <p dir="rtl" lang="ar" className="arabic-sm text-forest/60 leading-tight mb-0.5">
                        {entry.arabicName}
                      </p>
                    )}
                    <p className="font-garamond font-semibold text-forest text-base">{entry.name}</p>
                    <p className="text-xs text-gold/80 font-medium uppercase tracking-wide mt-0.5">{entry.relation}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-px h-5 bg-gold/40" />
                    <div className="w-2 h-2 rounded-full bg-gold/50" />
                    <div className="w-px h-5 bg-gold/40" />
                  </div>
                </div>
              ))}
              <div className="w-full max-w-sm border-2 border-gold bg-forest rounded-xl px-5 py-4 text-center shadow-md">
                <p dir="rtl" lang="ar" className="arabic text-gold leading-tight mb-1">
                  {prophet.arabicName}
                </p>
                <p className="font-garamond font-bold text-cream text-lg">{name}</p>
                <p className="text-gold/80 text-xs font-medium uppercase tracking-wide mt-0.5">{tc('detail_prophet_pbuh')}</p>
              </div>
            </div>
          )}
        </section>

        {/* Family (Quran & authentic Sunnah only) */}
        {familyGroups.length > 0 && (
          <section>
            <h2 className="section-title font-garamond text-xl font-semibold text-forest mb-1">{tc('detail_family')}</h2>
            <p className="text-forest/50 text-xs mb-4">{tc('detail_family_intro')}</p>
            <div className="space-y-4">
              {familyGroups.map(group => (
                <div key={group.key}>
                  <p className="text-xs text-gold/80 font-medium uppercase tracking-wider mb-2">{tc(group.key)}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {group.members.map((member, i) => (
                      <div key={i} className="card-islamic">
                        {member.arabicName && (
                          <p dir="rtl" lang="ar" className="arabic-sm text-forest/60 leading-tight mb-0.5">
                            {member.arabicName}
                          </p>
                        )}
                        <p className="font-garamond font-semibold text-forest text-sm">
                          {member.name[lang] ?? member.name.en}
                        </p>
                        {member.note && (
                          <p className="text-forest/60 text-xs leading-relaxed mt-1">
                            {member.note[lang] ?? member.note.en}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Miracles */}
        {miracles.length > 0 && (
          <section>
            <h2 className="section-title font-garamond text-xl font-semibold text-forest mb-4">{tc('detail_miracles')}</h2>
            <ul className="space-y-2">
              {miracles.map((miracle, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-forest/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0 mt-2" aria-hidden="true" />
                  {miracle}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Stories */}
        {stories.length > 0 && (
          <section>
            <h2 className="section-title font-garamond text-xl font-semibold text-forest mb-4">{tc('detail_stories')}</h2>
            <ul className="space-y-2">
              {stories.map((story, i) => (
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
            <h2 className="font-garamond text-xl font-semibold text-forest mb-3">{tc('detail_quran')}</h2>
            <div className="flex flex-wrap gap-2">
              {prophet.quranMentions.map(ref => (
                <span key={ref} className="badge-gold text-xs">{ref}</span>
              ))}
            </div>
          </section>
        )}

        {/* Special characteristics */}
        {(detail?.specialCharacteristics || prophet.specialCharacteristics) && (
          <section className="card-islamic border-gold/30">
            <h2 className="font-garamond text-xl font-semibold text-forest mb-3">{tc('detail_special')}</h2>
            <p className="text-forest/70 leading-relaxed text-sm">
              {tl(detail?.specialCharacteristics, prophet.specialCharacteristics)}
            </p>
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
              <span className="block text-xs text-forest/40">{tc('detail_previous')}</span>
              {navName(prev)}
            </span>
          </Link>
        ) : <div />}
        {next ? (
          <Link
            href={`/prophets/${next.id}`}
            className="flex items-center gap-2 text-sm text-forest/60 hover:text-forest transition-colors text-right"
          >
            <span>
              <span className="block text-xs text-forest/40">{tc('detail_next')}</span>
              {navName(next)}
            </span>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        ) : <div />}
      </nav>
    </div>
  );
}
