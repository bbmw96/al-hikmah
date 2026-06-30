'use client';

import { useLanguage } from '@/lib/i18n/context';
import { SALAAT_BY_CATEGORY } from '@/lib/data/salaat-types';
import { SALAAT_FARD_CONTENT, type SalaatFardKey } from '@/lib/i18n/content/salaat-fard-content';

interface FieldDef {
  suffix: string;
  emphasis?: 'normal' | 'card-forest' | 'gold-border';
}

const FIELDS: FieldDef[] = [
  { suffix: 'when'         },
  { suffix: 'structure'    },
  { suffix: 'story',       emphasis: 'card-forest' },
  { suffix: 'significance' },
  { suffix: 'proof_q',     emphasis: 'gold-border' },
  { suffix: 'proof_h',     emphasis: 'gold-border' },
  { suffix: 'recitation'   },
  { suffix: 'sunnah_say'   },
  { suffix: 'extras_say'   },
  { suffix: 'virtues'      },
  { suffix: 'timing_notes' },
];

const FIELD_LABEL_KEYS: Record<string, SalaatFardKey> = {
  when:         'uni_section_h',  // placeholder  –  individual labels below
  structure:    'uni_section_h',
  story:        'uni_section_h',
  significance: 'uni_section_h',
  proof_q:      'uni_section_h',
  proof_h:      'uni_section_h',
  recitation:   'uni_section_h',
  sunnah_say:   'uni_sunnah_h',
  extras_say:   'uni_extras_h',
  virtues:      'uni_section_h',
  timing_notes: 'uni_section_h',
};

// Field-name labels in 14 languages (compact in-component map  –  these labels
// repeat per-prayer so are kept here rather than in the salaat-fard file)
const FIELD_LABELS: Record<string, Record<string, string>> = {
  when:         { en: 'When', ms: 'Bila', tur: 'Vakit', urd: 'وقت', ben: 'কখন', fas: 'وقت', zh: '時間', yue: '時間', ja: '時間', ru: 'Когда', es: 'Cuándo', ko: '시간', ta: 'எப்போது', si: 'කවදාද' },
  structure:    { en: 'Structure', ms: 'Struktur', tur: 'Yapı', urd: 'ساخت', ben: 'গঠন', fas: 'ساختار', zh: '結構', yue: '結構', ja: '構成', ru: 'Структура', es: 'Estructura', ko: '구조', ta: 'அமைப்பு', si: 'සැකැස්ම' },
  story:        { en: 'Story', ms: 'Kisah', tur: 'Hikâye', urd: 'کہانی', ben: 'কাহিনি', fas: 'داستان', zh: '故事', yue: '故事', ja: '物語', ru: 'История', es: 'Historia', ko: '이야기', ta: 'கதை', si: 'කතාව' },
  significance: { en: 'Significance', ms: 'Kepentingan', tur: 'Önem', urd: 'اہمیت', ben: 'গুরুত্ব', fas: 'اهمیت', zh: '意義', yue: '意義', ja: '意義', ru: 'Значение', es: 'Importancia', ko: '의의', ta: 'முக்கியத்துவம்', si: 'වැදගත්කම' },
  proof_q:      { en: 'Quranic proof', ms: 'Bukti Al-Quran', tur: 'Kur\'an delili', urd: 'قرآنی دلیل', ben: 'কুরআনিক দলিল', fas: 'دلیل قرآنی', zh: '古蘭依據', yue: '古蘭依據', ja: 'クルアーンの証拠', ru: 'Коранический довод', es: 'Prueba coránica', ko: '꾸란의 근거', ta: 'குர்ஆன் ஆதாரம்', si: 'කුර්ආන් සාක්ෂිය' },
  proof_h:      { en: 'Hadith proof', ms: 'Bukti Hadis', tur: 'Hadis delili', urd: 'حدیث کی دلیل', ben: 'হাদিসের দলিল', fas: 'دلیل حدیث', zh: '聖訓依據', yue: '聖訓依據', ja: 'ハディースの証拠', ru: 'Хадис', es: 'Prueba del hadiz', ko: '하디스의 근거', ta: 'ஹதீஸ் ஆதாரம்', si: 'හදීස් සාක්ෂිය' },
  recitation:   { en: 'Recitation', ms: 'Bacaan', tur: 'Kıraat', urd: 'قراءت', ben: 'কেরাত', fas: 'قرائت', zh: '誦讀', yue: '誦讀', ja: '朗誦', ru: 'Чтение', es: 'Recitación', ko: '낭송', ta: 'ஓதல்', si: 'පාරායනය' },
  sunnah_say:   { en: 'What is Sunnah to say', ms: 'Apa yang Sunnah dibaca', tur: 'Sünnet olan zikir', urd: 'سنت میں کیا کہا جائے', ben: 'সুন্নাহ যা পড়া', fas: 'آنچه سنت است گفته شود', zh: '聖行所宜誦者', yue: '聖行所宜誦者', ja: 'スンナとして唱えるべきもの', ru: 'Что произносится по сунне', es: 'Lo Sunnah que decir', ko: '순나로 말할 것', ta: 'ஸுன்னத்தாக கூறுவது', si: 'සුන්නා ලෙස කිව යුතු දේ' },
  extras_say:   { en: 'Additional adhkar', ms: 'Zikir tambahan', tur: 'Ek zikirler', urd: 'اضافی اذکار', ben: 'অতিরিক্ত আযকার', fas: 'اذکار افزوده', zh: '額外贊念', yue: '額外贊念', ja: '追加のズィクル', ru: 'Дополнительные азкары', es: 'Adhkar adicionales', ko: '추가 지크르', ta: 'கூடுதல் ஜிக்ர்', si: 'අතිරේක දික්ර්' },
  virtues:      { en: 'Virtues', ms: 'Kelebihan', tur: 'Faziletler', urd: 'فضائل', ben: 'ফজিলত', fas: 'فضائل', zh: '德性', yue: '德性', ja: '徳', ru: 'Достоинства', es: 'Virtudes', ko: '덕', ta: 'சிறப்புகள்', si: 'සද්ගුණ' },
  timing_notes: { en: 'Timing notes', ms: 'Nota waktu', tur: 'Vakit notları', urd: 'وقت کے نوٹس', ben: 'সময়ের নোট', fas: 'یادداشت‌های وقت', zh: '時間注釋', yue: '時間注釋', ja: '時刻に関する注', ru: 'Заметки о времени', es: 'Notas de tiempo', ko: '시간 메모', ta: 'நேரக் குறிப்புகள்', si: 'වේලා සටහන්' },
};

const TITLE_FIVE: Record<string, string> = {
  en: 'The Five Daily Prayers', ms: 'Lima Solat Harian', tur: 'Beş Vakit Namaz', urd: 'پانچ روزانہ نمازیں',
  ben: 'পাঁচ দৈনিক নামাজ', fas: 'پنج نماز روزانه', zh: '每日五拜', yue: '每日五拜', ja: '五つの日々の礼拝',
  ru: 'Пять ежедневных молитв', es: 'Las cinco oraciones diarias', ko: '다섯 번의 일일 예배',
  ta: 'ஐந்து தினசரி தொழுகைகள்', si: 'දෛනික සලාත පහ',
};

type SectionEmphasis = NonNullable<FieldDef['emphasis']>;
const SECTION_CLASS: Record<SectionEmphasis, string> = {
  normal: '',
  'card-forest': 'card-forest rounded-2xl p-6',
  'gold-border': 'gold-border-left pl-5',
};

export function FiveFardSection() {
  const { lang } = useLanguage();
  const tc = (k: SalaatFardKey) =>
    (SALAAT_FARD_CONTENT[k] as Record<string, string | undefined>)[lang] ??
    (SALAAT_FARD_CONTENT[k] as Record<string, string | undefined>).en ?? k;
  const fl = (suffix: string) => FIELD_LABELS[suffix][lang] ?? FIELD_LABELS[suffix].en;

  const fardPrayers = SALAAT_BY_CATEGORY('fard');

  return (
    <section>
      <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
        {TITLE_FIVE[lang] ?? TITLE_FIVE.en}
      </h2>

      {/* Universal intro */}
      <div className="card-islamic mb-8">
        <h3 className="font-garamond text-lg font-semibold text-forest mb-3">
          {tc('section_h')}
        </h3>
        <p className="text-forest/70 text-sm leading-relaxed mb-4">{tc('section_intro')}</p>
        <h4 className="font-garamond text-base font-semibold text-forest mt-5 mb-2">{tc('uni_section_h')}</h4>
        <div className="space-y-3 text-sm text-forest/70 leading-relaxed">
          <div><strong className="text-forest">{tc('uni_fard_h')}:</strong> {tc('uni_fard_body')}</div>
          <div><strong className="text-forest">{tc('uni_wajib_h')}:</strong> {tc('uni_wajib_body')}</div>
          <div><strong className="text-forest">{tc('uni_sunnah_h')}:</strong> {tc('uni_sunnah_body')}</div>
          <div><strong className="text-forest">{tc('uni_extras_h')}:</strong> {tc('uni_extras_body')}</div>
        </div>
      </div>

      {/* Each fard prayer */}
      <div className="space-y-10">
        {fardPrayers.map(prayer => (
          <article key={prayer.id} className="card-islamic">
            <div className="flex items-baseline justify-between mb-4 flex-wrap gap-3">
              <h3 className="font-garamond text-2xl font-semibold text-forest">
                {tc(`${prayer.id}_name` as SalaatFardKey)}
              </h3>
              <p dir="rtl" lang="ar" className="arabic-md text-gold" aria-hidden="true">
                {prayer.arabicName}
              </p>
            </div>

            <div className="space-y-5">
              {FIELDS.map(field => {
                const key = `${prayer.id}_${field.suffix}` as SalaatFardKey;
                const body = SALAAT_FARD_CONTENT[key];
                if (!body) return null;
                const emphasis = field.emphasis ?? 'normal';
                return (
                  <div key={field.suffix}>
                    <h4 className="font-garamond text-base font-semibold text-forest mb-1.5">
                      {fl(field.suffix)}
                    </h4>
                    <div className={SECTION_CLASS[emphasis]}>
                      <p className={
                        'leading-relaxed text-sm ' +
                        (emphasis === 'card-forest' ? 'text-cream/85' : 'text-forest/70')
                      }>
                        {tc(key)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
