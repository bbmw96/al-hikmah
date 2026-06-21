'use client';

import Link from 'next/link';
import { DUA_CATEGORIES } from '@/lib/data/duas';

export function DuasListContent() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="bg-forest/5 border border-gold/20 rounded-2xl p-8 text-center mb-14 max-w-3xl mx-auto">
        <p
          dir="rtl"
          lang="ar"
          className="arabic-lg text-forest mb-4"
        >
          الدُّعَاءُ هُوَ الْعِبَادَةُ
        </p>
        <p className="text-forest/70 italic">&ldquo;Du&apos;a is worship.&rdquo; - The Prophet Muhammad ﷺ (Tirmidhi)</p>
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
                className="arabic-sm text-gold/70"
                aria-hidden="true"
              >
                {category.arabicTitle}
              </p>
            </div>
            <div>
              <h2 className="font-garamond text-xl font-semibold text-forest group-hover:text-gold transition-colors mb-2">
                {category.title}
              </h2>
              <p className="text-forest/60 text-sm leading-relaxed">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
