'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { MASJID_CONTENT } from '@/lib/i18n/content/masjid-etiquette-content';
import type { MasjidContentKey } from '@/lib/i18n/content/masjid-etiquette-content';

const TITLE: Record<string, string> = {
  en: `Etiquettes of the Masjid`,
  ms: `Adab Masjid`,
  tur: `Mescid Âdâbı`,
  urd: `مسجد کے آداب`,
  ben: `মসজিদের আদব`,
  fas: `آداب مسجد`,
  zh: `清真寺之礼`,
  yue: `清真寺之禮`,
  ja: `モスクの作法`,
  ru: `Этикет мечети`,
  es: `Etiqueta de la Masjid`,
  ko: `모스크의 예절`,
  ta: `மசூதி ஆதாபுகள்`,
  si: `මස්ජිද් අදාබ්`,
};

const SUBTITLE: Record<string, string> = {
  en: `The Sunnah manners of entering, being in, and leaving the House of Allah, and the history of the masjid as an institution.`,
  ms: `Adab Sunnah untuk masuk, berada di dalam, dan keluar dari Rumah Allah, serta sejarah masjid sebagai institusi.`,
  tur: `Allah'ın Evine girişin, içinde bulunuşun ve çıkışın Sünnet âdâbı, ve müessese olarak mescidin tarihi.`,
  urd: `اللہ کے گھر میں داخلے، وہاں رہنے اور نکلنے کے سنت آداب، اور مسجد کی ایک ادارے کے طور پر تاریخ۔`,
  ben: `আল্লাহর ঘরে প্রবেশ, অবস্থান ও প্রস্থানের সুন্নাহ আদব, এবং প্রতিষ্ঠান হিসেবে মসজিদের ইতিহাস।`,
  fas: `آداب سنت ورود، حضور و خروج از خانه‌ی خدا، و تاریخ مسجد به عنوان یک نهاد.`,
  zh: `进入、留驻与离开真主之殿之圣行礼节，兼及作为宗教制度之清真寺之历史。`,
  yue: `進入、留駐與離開真主之殿之聖行禮節，兼及作為宗教制度之清真寺之歷史。`,
  ja: `アッラーの家に入る、留まる、そして去るときのスンナに則った作法，および制度としてのモスクの歴史。`,
  ru: `Сунна этикета входа в Дом Аллаха, пребывания в нём и выхода из него, и история мечети как института.`,
  es: `Los modales sunna al entrar, estar en, y salir de la Casa de Allah, y la historia de la masjid como institución.`,
  ko: `알라의 집에 들어가고, 머무르며, 나가는 순나의 예절과 제도로서의 모스크의 역사.`,
  ta: `அல்லாஹ்வின் இல்லத்தினுள் நுழையும், தங்கும், வெளியேறும் ஸுன்னா ஆதாபுகள், மற்றும் ஒரு நிறுவனமாக மசூதியின் வரலாறு.`,
  si: `අල්ලාහ්ගේ නිවසට ඇතුළු වීම, එහි රැඳී සිටීම සහ පිටව යාමේ සුන්නා අදාබ්, සහ ආයතනයක් ලෙස මස්ජිද්හි ඉතිහාසය.`,
};

const ENTRY_DUA_AR = 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ.';
const EXIT_DUA_AR = "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ.";
const SALAT_ALA_NABI_AR = 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ.';

export function MasjidEtiquetteContent() {
  const { lang } = useLanguage();
  const tc = (key: MasjidContentKey): string => {
    const entry = MASJID_CONTENT[key] as Record<string, string | undefined> | undefined;
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="آدَابُ المَسْجِد"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('hist_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('hist_p1')}</p>
            <p className="text-forest/75 text-sm leading-relaxed">{tc('hist_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('hist_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('enter_h')}</h2>
          <article className="card-islamic space-y-4">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('enter_intro')}</p>
            <ArabicText text={ENTRY_DUA_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('label_transliteration')}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{tc('enter_translit')}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">{tc('label_meaning')}</p>
              <p className="text-forest/75 text-sm leading-relaxed">{tc('enter_meaning')}</p>
            </div>
            <p className="text-xs text-gold/60 italic">{tc('enter_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('tahiyya_h')}</h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('tahiyya_p1')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('tahiyya_p2')}</p>
            <p className="text-xs text-gold/60 italic">{tc('tahiyya_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('leave_h')}</h2>
          <article className="card-islamic space-y-4">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('leave_intro')}</p>
            <ArabicText text={EXIT_DUA_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('label_transliteration')}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{tc('leave_translit')}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">{tc('label_meaning')}</p>
              <p className="text-forest/75 text-sm leading-relaxed">{tc('leave_meaning')}</p>
            </div>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('leave_p')}</p>
            <p className="text-xs text-gold/60 italic">{tc('leave_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('salat_h')}</h2>
          <article className="card-islamic space-y-4">
            <p className="text-forest/75 text-sm leading-relaxed">{tc('salat_p')}</p>
            <ArabicText text={SALAT_ALA_NABI_AR} size="md" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('label_transliteration')}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{tc('salat_translit')}</p>
            </div>
            <p className="text-xs text-gold/60 italic">{tc('salat_source')}</p>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('beh_h')}</h2>
          <article className="card-islamic space-y-4">
            <ul className="text-forest/75 text-sm space-y-3 list-disc list-inside">
              <li>{tc('beh_1')}</li>
              <li>{tc('beh_2')}</li>
              <li>{tc('beh_3')}</li>
              <li>{tc('beh_4')}</li>
              <li>{tc('beh_5')}</li>
              <li>{tc('beh_6')}</li>
              <li>{tc('beh_7')}</li>
              <li>{tc('beh_8')}</li>
            </ul>
          </article>
        </section>

        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">{tc('retreat_h')}</h2>
          <article className="card-forest rounded-2xl p-6 space-y-3">
            <p className="text-cream/85 text-sm leading-relaxed">{tc('retreat_p1')}</p>
            <p className="text-cream/85 text-sm leading-relaxed">{tc('retreat_p2')}</p>
            <p className="text-cream/80 text-sm leading-relaxed">{tc('retreat_p3')}</p>
          </article>
        </section>
      </div>
    </>
  );
}
