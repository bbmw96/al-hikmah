'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { MUSTALAH_CONTENT } from '@/lib/i18n/content/mustalah-hadith-content';
import type { MustalahContentKey } from '@/lib/i18n/content/mustalah-hadith-content';

const HADITH_AR = `مَنْ كَذَبَ عَلَيَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ`;
const CONDITION_AR = [`اتصال السند`, `العدالة`, `الضبط`, `عدم الشذوذ`, `عدم العلة`];

const GRADES = [
  { key: 'sahih', label: 'Sahih', ar: `الصحيح`, colour: 'bg-gold/15 text-gold border-gold/30' },
  { key: 'hasan', label: 'Hasan', ar: `الحسن`, colour: 'bg-teal-50 text-teal-700 border-teal-200' },
  { key: 'daif', label: "Da'if", ar: `الضعيف`, colour: 'bg-red-50 text-red-700 border-red-200' },
] as const;

const BOOKS = [
  { name: 'Sahih al-Bukhari', ar: `صحيح البخاري`, author: 'Muhammad ibn Ismail al-Bukhari (d. 256 AH / 870 CE)' },
  { name: 'Sahih Muslim', ar: `صحيح مسلم`, author: 'Muslim ibn al-Hajjaj (d. 261 AH / 875 CE)' },
  { name: 'Sunan Abu Dawud', ar: `سنن أبي داود`, author: 'Abu Dawud al-Sijistani (d. 275 AH / 889 CE)' },
  { name: "Jami' al-Tirmidhi", ar: `جامع الترمذي`, author: 'Muhammad ibn Isa al-Tirmidhi (d. 279 AH / 892 CE)' },
  { name: "Sunan al-Nasa'i", ar: `سنن النسائي`, author: "Ahmad ibn Shu'ayb al-Nasa'i (d. 303 AH / 915 CE)" },
  { name: 'Sunan Ibn Majah', ar: `سنن ابن ماجه`, author: 'Muhammad ibn Yazid Ibn Majah (d. 273 AH / 887 CE)' },
] as const;

const SCHOLARS = [
  { name: 'Imam al-Bukhari', ar: `الإمام البخاري`, title: "Amir al-Mu'minin fi al-Hadith", dates: '194-256 AH / 810-870 CE' },
  { name: 'Imam Muslim', ar: `الإمام مسلم`, title: 'Imam Ahl al-Hadith', dates: '206-261 AH / 821-875 CE' },
  { name: 'Imam Ibn Hajar al-Asqalani', ar: `الإمام ابن حجر العسقلاني`, title: 'Hafiz al-Islam', dates: '773-852 AH / 1372-1449 CE' },
  { name: "Imam Yahya ibn Ma'in", ar: `الإمام يحيى بن معين`, title: 'Sheikh al-Muhaddithin', dates: '158-233 AH / 775-847 CE' },
  { name: 'Imam al-Nawawi', ar: `الإمام النووي`, title: 'Muhy al-Din al-Nawawi', dates: '631-676 AH / 1233-1277 CE' },
  { name: 'Imam Ibn al-Salah', ar: `الإمام ابن الصلاح`, title: 'Sheikh al-Muhaddithin bi al-Sham', dates: '577-643 AH / 1181-1245 CE' },
] as const;

export function MustalahHadithContent() {
  const { lang } = useLanguage();
  const tc = (key: MustalahContentKey): string => MUSTALAH_CONTENT[key][lang];
  const k = (s: string) => s as MustalahContentKey;

  return (
    <>
      <PageHeader title={tc('header.title')} arabicTitle="مُصْطَلَح الحَدِيث" subtitle={tc('header.subtitle')} />

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

        {/* What is it */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">{tc('whatis.heading')}</h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">{tc('whatis.p1')}</p>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">{tc('whatis.p2')}</p>
          <div className="card-forest rounded-2xl p-8">
            <ArabicText text={HADITH_AR} size="md" />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">{tc('whatis.hadith.translation')}</p>
            <p className="text-cream/60 text-xs mt-2">{tc('whatis.hadith.note')}</p>
          </div>
        </section>

        {/* Isnad + Matn */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">{tc('structure.heading')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="card-islamic">
              <p dir="rtl" lang="ar" className="arabic text-gold/70 mb-2 block" aria-hidden="true">الإسناد</p>
              <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{tc('structure.isnad.heading')}</h3>
              <p className="text-forest/60 text-sm leading-relaxed">{tc('structure.isnad.body')}</p>
            </div>
            <div className="card-islamic">
              <p dir="rtl" lang="ar" className="arabic text-gold/70 mb-2 block" aria-hidden="true">المتن</p>
              <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{tc('structure.matn.heading')}</h3>
              <p className="text-forest/60 text-sm leading-relaxed">{tc('structure.matn.body')}</p>
            </div>
          </div>
          <div className="gold-border-left pl-5">
            <p className="text-forest/70 text-sm leading-relaxed">{tc('structure.ibnmubarak')}</p>
          </div>
        </section>

        {/* Rijal criticism */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">{tc('rijal.heading')}</h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-5">{tc('rijal.intro')}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {[1, 2, 3, 4, 5, 6].map(n => (
              <div key={n} className="card-islamic">
                <h3 className="font-garamond text-sm font-semibold text-forest mb-1">{tc(k(`rijal.${n}.level`))}</h3>
                <p className="text-forest/60 text-xs leading-relaxed">{tc(k(`rijal.${n}.detail`))}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Five conditions */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">{tc('conditions.heading')}</h2>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} className="card-islamic flex gap-4">
                <span className="w-8 h-8 rounded-full bg-gold/15 text-gold text-sm font-semibold flex items-center justify-center flex-shrink-0">{n}</span>
                <div>
                  <p dir="rtl" lang="ar" className="arabic-sm text-gold mb-1.5" aria-hidden="true">{CONDITION_AR[n - 1]}</p>
                  <h3 className="font-garamond text-base font-semibold text-forest mb-1">{tc(k(`conditions.${n}.title`))}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{tc(k(`conditions.${n}.body`))}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grades */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">{tc('grades.heading')}</h2>
          <div className="space-y-6">
            {GRADES.map(g => (
              <div key={g.key} className="card-islamic">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-0.5 rounded-full text-xs font-semibold border ${g.colour}`}>{g.label}</span>
                  <p dir="rtl" lang="ar" className="arabic-sm text-gold" aria-hidden="true">{g.ar}</p>
                </div>
                <p className="text-forest/70 text-sm leading-relaxed mb-4">{tc(k(`grades.${g.key}.definition`))}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[1, 2].map(i => (
                    <div key={i} className="bg-gold/5 rounded-xl p-3">
                      <h4 className="text-forest font-semibold text-xs mb-1">{tc(k(`grades.${g.key}.sub${i}.name`))}</h4>
                      <p className="text-forest/60 text-xs leading-relaxed">{tc(k(`grades.${g.key}.sub${i}.detail`))}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mutawatir vs Ahad */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">{tc('tawatur.heading')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-islamic">
              <p dir="rtl" lang="ar" className="arabic text-gold/70 mb-2 block" aria-hidden="true">المتواتر</p>
              <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{tc('tawatur.mutawatir.heading')}</h3>
              <p className="text-forest/60 text-sm leading-relaxed">{tc('tawatur.mutawatir.body')}</p>
            </div>
            <div className="card-islamic">
              <p dir="rtl" lang="ar" className="arabic text-gold/70 mb-2 block" aria-hidden="true">الآحاد</p>
              <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{tc('tawatur.ahad.heading')}</h3>
              <p className="text-forest/60 text-sm leading-relaxed">{tc('tawatur.ahad.body')}</p>
            </div>
          </div>
        </section>

        {/* Six books */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">{tc('sixbooks.heading')}</h2>
          <div className="space-y-5">
            {BOOKS.map((book, i) => (
              <div key={book.name} className="card-islamic flex gap-4">
                <div>
                  <p dir="rtl" lang="ar" className="arabic-sm text-gold mb-1.5" aria-hidden="true">{book.ar}</p>
                  <h3 className="font-garamond text-lg font-semibold text-forest mb-0.5">{book.name}</h3>
                  <p className="text-forest/50 text-xs mb-2">{book.author} · {tc(k(`sixbooks.${i + 1}.count`))}</p>
                  <p className="text-forest/60 text-sm leading-relaxed">{tc(k(`sixbooks.${i + 1}.note`))}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key scholars */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">{tc('scholars.heading')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {SCHOLARS.map((s, i) => (
              <div key={s.name} className="card-islamic">
                <p dir="rtl" lang="ar" className="arabic-sm text-gold mb-1.5" aria-hidden="true">{s.ar}</p>
                <h3 className="font-garamond text-base font-semibold text-forest">{s.name}</h3>
                <p className="text-gold text-xs italic mb-1">{s.title} ({s.dates})</p>
                <p className="text-forest/60 text-xs leading-relaxed">{tc(k(`scholars.${i + 1}.note`))}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
