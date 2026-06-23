'use client';

import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { DUA_CATEGORIES } from '@/lib/data/duas';
import { useLanguage } from '@/lib/i18n/context';
import { DUAS_CONTENT } from '@/lib/i18n/content/duas-content';
import type { DuasContentKey } from '@/lib/i18n/content/duas-content';

function useDuasText() {
  const { lang } = useLanguage();
  return (key: DuasContentKey): string => {
    const entry = DUAS_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry['en'] ?? key;
  };
}

function catKey(id: string): string {
  return id.replace(/-/g, '_');
}

export function DuasListContent() {
  const tc = useDuasText();

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="الأدعية والأذكار"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-forest/5 border border-gold/20 rounded-2xl p-8 text-center mb-14 max-w-3xl mx-auto">
          <p
            dir="rtl"
            lang="ar"
            className="arabic-lg text-forest mb-4"
          >
            الدُّعَاءُ هُوَ الْعِبَادَةُ
          </p>
          <p className="text-forest/70 italic">{tc('intro_arabic_meaning')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DUA_CATEGORIES.map(category => (
            <Link
              key={category.id}
              href={`/duas/${category.id}`}
              className="card-islamic group flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-200"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl" aria-hidden="true">{category.icon}</span>
                <p
                  dir="rtl"
                  lang="ar"
                  className="arabic-sm text-gold"
                  aria-hidden="true"
                >
                  {category.arabicTitle}
                </p>
              </div>
              <div>
                <h2 className="font-garamond text-xl font-semibold text-forest group-hover:text-gold transition-colors mb-2">
                  {tc(`cat_${catKey(category.id)}_name` as DuasContentKey)}
                </h2>
                <p className="text-forest/60 text-sm leading-relaxed">
                  {tc(`cat_${catKey(category.id)}_desc` as DuasContentKey)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
