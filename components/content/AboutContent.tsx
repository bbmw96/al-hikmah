'use client';

import Link from 'next/link';
import { BookOpen, Globe, Shield, Heart } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { useLanguage } from '@/lib/i18n/context';
import { LANGUAGE_META } from '@/lib/i18n/translations';
import { ABOUT_CONTENT, type AboutContentKey } from '@/lib/i18n/content/about-content';

const PRINCIPLES = [
  { icon: Shield, titleKey: 'p_auth_t', descKey: 'p_auth_d' },
  { icon: Globe, titleKey: 'p_lang_t', descKey: 'p_lang_d' },
  { icon: BookOpen, titleKey: 'p_open_t', descKey: 'p_open_d' },
  { icon: Heart, titleKey: 'p_respect_t', descKey: 'p_respect_d' },
] as const;

// Classical sources – author + work titles are proper nouns, the same in every language.
const SOURCES = [
  "Ibn Kathir's Al-Bidayah wa al-Nihayah",
  "Al-Nawawi's Riyadh al-Salihin and Commentary on Sahih Muslim",
  "Ibn Hajar al-Asqalani's Fath al-Bari",
  "Ibn Hisham's Sirat al-Nabawiyyah",
  "Al-Ghazali's Ihya' Ulum al-Din",
  "Ibn al-Qayyim's Zad al-Ma'ad",
];

export function AboutContent() {
  const { lang } = useLanguage();
  const tc = (k: AboutContentKey) => ABOUT_CONTENT[k][lang] ?? ABOUT_CONTENT[k].en;
  const languageChips = ['العربية', ...Object.values(LANGUAGE_META).map(m => m.nativeLabel)];

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="حول الحكمة"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-14">
        {/* Mission */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-6">
            {tc('mission_h')}
          </h2>
          <div className="prose-islamic space-y-4">
            <p>{tc('mission_p1')}</p>
            <p>{tc('mission_p2')}</p>
            <p>{tc('mission_p3')}</p>
          </div>
        </section>

        {/* Principles */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-8">
            {tc('principles_h')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PRINCIPLES.map(p => {
              const Icon = p.icon;
              return (
                <div key={p.titleKey} className="card-islamic flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-forest flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="font-garamond text-lg font-semibold text-forest">{tc(p.titleKey)}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{tc(p.descKey)}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-6">
            {tc('lang_h')}
          </h2>
          <p className="text-forest/70 leading-relaxed mb-6">
            {tc('lang_intro')}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {languageChips.map(name => (
              <div key={name} className="bg-gold/5 border border-gold/20 rounded-lg px-4 py-3 text-center">
                <span className="text-forest font-medium text-sm">{name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-6">
            {tc('sources_h')}
          </h2>
          <div className="prose-islamic space-y-3">
            <p>{tc('sources_intro')}</p>
            <ul className="list-disc pl-5 space-y-1 text-forest/70 text-sm">
              {SOURCES.map(s => <li key={s}>{s}</li>)}
            </ul>
          </div>
        </section>

        <div className="text-center pt-6">
          <Link href="/hadith" className="btn-primary text-base px-8 py-3.5">
            {tc('cta')}
          </Link>
        </div>
      </div>
    </>
  );
}
