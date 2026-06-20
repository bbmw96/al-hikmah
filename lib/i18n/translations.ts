export type Lang = 'en' | 'ms' | 'tur' | 'urd' | 'ben' | 'fas';

export const LANGUAGE_META: Record<Lang, { label: string; nativeLabel: string; dir: 'ltr' | 'rtl'; htmlLang: string }> = {
  en:  { label: 'English',  nativeLabel: 'English',        dir: 'ltr', htmlLang: 'en-GB' },
  ms:  { label: 'Malay',    nativeLabel: 'Bahasa Melayu',  dir: 'ltr', htmlLang: 'ms'    },
  tur: { label: 'Turkish',  nativeLabel: 'Türkçe',          dir: 'ltr', htmlLang: 'tr'    },
  urd: { label: 'Urdu',     nativeLabel: 'اردو',            dir: 'rtl', htmlLang: 'ur'    },
  ben: { label: 'Bengali',  nativeLabel: 'বাংলা',           dir: 'ltr', htmlLang: 'bn'    },
  fas: { label: 'Persian',  nativeLabel: 'فارسی',           dir: 'rtl', htmlLang: 'fa'    },
};

export type TranslationKey = keyof typeof UI;

const UI = {
  /* ── Navigation ─────────────────────────────────────── */
  'nav.hadith':        { en: 'Hadith',             ms: 'Hadis',              tur: 'Hadis',                      urd: 'حدیث',                ben: 'হাদিস',              fas: 'حدیث'              },
  'nav.prophets':      { en: "Prophets",            ms: 'Para Nabi',          tur: 'Peygamberler',               urd: 'انبیاء',              ben: 'নবীগণ',              fas: 'پیامبران'           },
  'nav.duas':          { en: "Du'as",               ms: 'Doa',                tur: 'Dualar',                     urd: 'دعائیں',              ben: 'দোয়া',               fas: 'دعاها'              },
  'nav.hajj':          { en: 'Hajj & Umrah',        ms: 'Haji & Umrah',       tur: 'Hac & Umre',                 urd: 'حج و عمرہ',           ben: 'হজ ও উমরাহ',         fas: 'حج و عمره'          },
  'nav.learn':         { en: 'Learn',               ms: 'Belajar',            tur: 'Öğren',                      urd: 'سیکھیں',              ben: 'শিখুন',              fas: 'یاد بگیرید'         },
  'nav.about':         { en: 'About',               ms: 'Tentang',            tur: 'Hakkında',                   urd: 'بارے میں',            ben: 'সম্পর্কে',            fas: 'درباره'             },
  'nav.99names':       { en: '99 Names of Allah',   ms: '99 Nama Allah',      tur: "Allah'ın 99 İsmi",           urd: 'اللہ کے 99 نام',      ben: 'আল্লাহর ৯৯টি নাম', fas: '۹۹ نام خداوند'      },
  'nav.prayer':        { en: 'How to Pray',         ms: 'Cara Solat',         tur: 'Namaz Nasıl Kılınır',        urd: 'نماز کا طریقہ',       ben: 'নামাজ পড়ার পদ্ধতি', fas: 'چگونه نماز بخوانیم'},
  'nav.seerah':        { en: 'Seerah',              ms: 'Sirah',              tur: 'Siyer',                      urd: 'سیرت',                ben: 'সীরাত',              fas: 'سیره'               },
  'nav.glossary':      { en: 'Glossary',            ms: 'Glosari',            tur: 'Sözlük',                     urd: 'لغت',                 ben: 'পরিভাষা',            fas: 'واژه‌نامه'          },
  'nav.calendar':      { en: 'Islamic Calendar',    ms: 'Kalendar Islam',     tur: 'İslam Takvimi',              urd: 'اسلامی کیلنڈر',       ben: 'ইসলামি ক্যালেন্ডার', fas: 'تقویم اسلامی'       },
  'nav.browse':        { en: 'Browse Collections',  ms: 'Semak Koleksi',      tur: 'Koleksiyonlara Göz At',      urd: 'مجموعے دیکھیں',       ben: 'সংগ্রহ দেখুন',       fas: 'مرور مجموعه‌ها'    },
  'nav.sixbooks':      { en: 'The Six Books',       ms: 'Enam Kitab',         tur: 'Altı Kitap',                 urd: 'چھ کتابیں',           ben: 'ছয়টি কিতাব',        fas: 'شش کتاب'            },
  'nav.ninebooks':     { en: 'The Nine Books',      ms: 'Sembilan Kitab',     tur: 'Dokuz Kitap',                urd: 'نو کتابیں',           ben: 'নয়টি কিতাব',        fas: 'نه کتاب'            },
  'nav.other':         { en: 'Other Collections',   ms: 'Koleksi Lain',       tur: 'Diğer Koleksiyonlar',        urd: 'دیگر مجموعے',         ben: 'অন্যান্য সংগ্রহ',   fas: 'مجموعه‌های دیگر'   },
  'nav.hajjguide':     { en: 'Hajj Guide',          ms: 'Panduan Haji',       tur: 'Hac Rehberi',                urd: 'حج گائیڈ',            ben: 'হজ গাইড',            fas: 'راهنمای حج'         },
  'nav.umrahguide':    { en: 'Umrah Guide',         ms: 'Panduan Umrah',      tur: 'Umre Rehberi',               urd: 'عمرہ گائیڈ',          ben: 'উমরাহ গাইড',         fas: 'راهنمای عمره'       },

  /* ── Hero ───────────────────────────────────────────── */
  'hero.subtitle':     {
    en:  'A scholarly resource for the authentic Islamic tradition: hadith, supplications, the stories of the prophets, and guidance on worship, presented in Arabic with translations in multiple languages.',
    ms:  'Sumber ilmiah untuk tradisi Islam yang sahih: hadis, doa, kisah para nabi, dan panduan ibadah, disajikan dalam bahasa Arab dengan terjemahan dalam pelbagai bahasa.',
    tur: 'Özgün İslam geleneği için ilmi bir kaynak: hadisler, dualar, peygamberlerin hikayeleri ve ibadet rehberi, Arapça olarak ve birden fazla dilde sunulmaktadır.',
    urd: 'مستند اسلامی روایت کے لیے ایک علمی ماخذ: احادیث، دعائیں، انبیاء کی کہانیاں، اور عبادت کی رہنمائی، عربی اور متعدد زبانوں میں پیش کی گئی ہے۔',
    ben: 'খাঁটি ইসলামি ঐতিহ্যের একটি পণ্ডিত উৎস: হাদিস, দোয়া, নবীদের কাহিনী এবং ইবাদতের নির্দেশিকা, আরবি ও একাধিক ভাষায় উপস্থাপিত।',
    fas: 'یک منبع علمی برای سنت اسلامی معتبر: احادیث، دعاها، داستان‌های انبیاء و راهنمایی عبادت، به زبان عربی و چندین زبان دیگر ارائه شده است.',
  },
  'hero.cta.hadith':   { en: 'Browse Hadith Collections', ms: 'Semak Koleksi Hadis',    tur: 'Hadis Koleksiyonlarına Göz At', urd: 'حدیث کے مجموعے دیکھیں',  ben: 'হাদিস সংগ্রহ দেখুন',  fas: 'مرور مجموعه‌های حدیث' },
  'hero.cta.about':    { en: 'About This Resource',       ms: 'Tentang Sumber Ini',     tur: 'Bu Kaynak Hakkında',           urd: 'اس ماخذ کے بارے میں',    ben: 'এই উৎস সম্পর্কে',     fas: 'درباره این منبع'       },

  /* ── UI Controls ─────────────────────────────────────── */
  'ui.previous':       { en: 'Previous',           ms: 'Sebelumnya',         tur: 'Önceki',                     urd: 'پچھلا',               ben: 'পূর্ববর্তী',          fas: 'قبلی'               },
  'ui.next':           { en: 'Next',               ms: 'Seterusnya',         tur: 'Sonraki',                    urd: 'اگلا',                ben: 'পরবর্তী',             fas: 'بعدی'               },
  'ui.page':           { en: 'Page',               ms: 'Halaman',            tur: 'Sayfa',                      urd: 'صفحہ',                ben: 'পৃষ্ঠা',              fas: 'صفحه'               },
  'ui.of':             { en: 'of',                 ms: 'daripada',           tur: '/',                          urd: 'کا',                  ben: 'এর',                 fas: 'از'                 },
  'ui.search':         { en: 'Search',             ms: 'Cari',               tur: 'Ara',                        urd: 'تلاش',                ben: 'অনুসন্ধান',           fas: 'جستجو'              },
  'ui.loading':        { en: 'Loading...',         ms: 'Memuatkan...',       tur: 'Yükleniyor...',              urd: 'لوڈ ہو رہا ہے...',    ben: 'লোড হচ্ছে...',       fas: 'در حال بارگیری...'  },
  'ui.browse':         { en: 'Browse',             ms: 'Semak',              tur: 'Göz At',                     urd: 'دیکھیں',              ben: 'দেখুন',              fas: 'مرور'               },
  'ui.comingsoon':     { en: 'Coming soon',        ms: 'Akan datang',        tur: 'Yakında',                    urd: 'جلد آ رہا ہے',        ben: 'শীঘ্রই আসছে',        fas: 'به زودی'            },
  'ui.hadiths':        { en: 'hadiths',            ms: 'hadis',              tur: 'hadis',                      urd: 'احادیث',              ben: 'হাদিস',              fas: 'احادیث'             },
  'ui.selectlang':     { en: 'Select language',    ms: 'Pilih bahasa',       tur: 'Dil seç',                    urd: 'زبان منتخب کریں',     ben: 'ভাষা নির্বাচন করুন', fas: 'انتخاب زبان'        },
  'ui.changelang':     { en: 'Language',           ms: 'Bahasa',             tur: 'Dil',                        urd: 'زبان',                ben: 'ভাষা',               fas: 'زبان'               },

  /* ── Hadith page ─────────────────────────────────────── */
  'hadith.english':    { en: 'English Meaning',    ms: 'Makna Bahasa Inggeris', tur: 'İngilizce Anlam',         urd: 'انگریزی مفہوم',       ben: 'ইংরেজি অর্থ',        fas: 'معنی انگلیسی'       },
  'hadith.translation':{ en: 'Translation',        ms: 'Terjemahan',         tur: 'Çeviri',                     urd: 'ترجمہ',               ben: 'অনুবাদ',             fas: 'ترجمه'              },
  'hadith.loading':    { en: 'Loading translation...', ms: 'Memuatkan terjemahan...', tur: 'Çeviri yükleniyor...', urd: 'ترجمہ لوڈ ہو رہا ہے...', ben: 'অনুবাদ লোড হচ্ছে...', fas: 'در حال بارگیری ترجمه...' },
  'hadith.notavail':   { en: 'This translation is not yet available for this collection in the selected language.', ms: 'Terjemahan ini belum tersedia untuk koleksi ini dalam bahasa yang dipilih.', tur: 'Bu çeviri, seçilen dil için bu koleksiyonda henüz mevcut değildir.', urd: 'یہ ترجمہ منتخب زبان میں اس مجموعے کے لیے ابھی دستیاب نہیں ہے۔', ben: 'এই অনুবাদটি নির্বাচিত ভাষায় এই সংগ্রহের জন্য এখনও পাওয়া যায়নি।', fas: 'این ترجمه هنوز برای این مجموعه در زبان انتخابی موجود نیست.' },
  'hadith.tryother':   { en: 'Try another language, or read the English meaning above.', ms: 'Cuba bahasa lain, atau baca makna Bahasa Inggeris di atas.', tur: 'Başka bir dil deneyin veya yukarıdaki İngilizce anlamı okuyun.', urd: 'کوئی اور زبان آزمائیں، یا اوپر انگریزی مفہوم پڑھیں۔', ben: 'অন্য ভাষা চেষ্টা করুন, বা উপরে ইংরেজি অর্থ পড়ুন।', fas: 'زبان دیگری را امتحان کنید یا معنی انگلیسی را در بالا بخوانید.' },
  'hadith.selectlang': { en: 'Select a language above to load the translation.', ms: 'Pilih bahasa di atas untuk memuatkan terjemahan.', tur: 'Çeviriyi yüklemek için yukarıdan bir dil seçin.', urd: 'ترجمہ لوڈ کرنے کے لیے اوپر سے زبان منتخب کریں۔', ben: 'অনুবাদ লোড করতে উপরে ভাষা নির্বাচন করুন।', fas: 'برای بارگیری ترجمه، زبانی را از بالا انتخاب کنید.' },
  'hadith.notext':     { en: 'Text not available for this hadith.', ms: 'Teks tidak tersedia untuk hadis ini.', tur: 'Bu hadis için metin mevcut değildir.', urd: 'اس حدیث کے لیے متن دستیاب نہیں۔', ben: 'এই হাদিসের জন্য পাঠ্য পাওয়া যায়নি।', fas: 'متن برای این حدیث موجود نیست.' },
  'hadith.grade.sahih':{ en: 'Authentic (Sahih)',  ms: 'Sahih (Sahih)',       tur: 'Sahih (Güvenilir)',           urd: 'صحیح',                ben: 'সহিহ (বিশুদ্ধ)',      fas: 'صحیح'               },

  /* ── Page headings ───────────────────────────────────── */
  'page.hadith.title': { en: 'Hadith Collections',         ms: 'Koleksi Hadis',            tur: 'Hadis Koleksiyonları',            urd: 'حدیث کے مجموعے',         ben: 'হাদিস সংগ্রহ',         fas: 'مجموعه‌های حدیث'   },
  'page.prophets.title':{ en: 'Prophets of Islam',         ms: 'Nabi-Nabi Islam',           tur: "İslam'ın Peygamberleri",          urd: 'اسلام کے انبیاء',        ben: 'ইসলামের নবীগণ',        fas: 'پیامبران اسلام'     },
  'page.duas.title':   { en: "Du'as & Supplications",      ms: 'Doa & Permohonan',          tur: 'Dualar ve Niyazlar',              urd: 'دعائیں اور التجائیں',    ben: 'দোয়া ও প্রার্থনা',    fas: 'دعاها و مناجات‌ها' },
  'page.99.title':     { en: 'The 99 Names of Allah',      ms: '99 Nama Allah',             tur: "Allah'ın 99 İsmi",                urd: 'اللہ کے 99 نام',         ben: 'আল্লাহর ৯৯টি নাম',    fas: '۹۹ نام خداوند'      },
  'page.prayer.title': { en: 'How to Pray',                ms: 'Cara Solat',                tur: 'Namaz Nasıl Kılınır',             urd: 'نماز کا طریقہ',          ben: 'নামাজ পড়ার পদ্ধতি',  fas: 'چگونه نماز بخوانیم' },
  'page.seerah.title': { en: 'Seerah - Life of the Prophet', ms: 'Sirah Nabi',             tur: "Siyer - Peygamberin Hayatı",      urd: 'سیرت النبی',             ben: 'সীরাতুন নবী',          fas: 'سیره پیامبر'         },
  'page.hajj.title':   { en: 'Hajj & Umrah Guide',         ms: 'Panduan Haji & Umrah',     tur: 'Hac ve Umre Rehberi',             urd: 'حج و عمرہ گائیڈ',        ben: 'হজ ও উমরাহ গাইড',     fas: 'راهنمای حج و عمره'  },
  'page.glossary.title':{ en: 'Islamic Glossary',          ms: 'Glosari Islam',             tur: 'İslam Sözlüğü',                  urd: 'اسلامی لغت',             ben: 'ইসলামি পরিভাষা',       fas: 'واژه‌نامه اسلامی'   },
  'page.calendar.title':{ en: 'Islamic Calendar',          ms: 'Kalendar Islam',            tur: 'İslam Takvimi',                   urd: 'اسلامی کیلنڈر',          ben: 'ইসلামি ক্যালেন্ডার',  fas: 'تقویم اسلامی'       },
  'page.about.title':  { en: 'About Al-Hikmah',            ms: 'Tentang Al-Hikmah',         tur: "Al-Hikmah Hakkında",              urd: 'الحکمہ کے بارے میں',     ben: 'আল-হিকমাহ সম্পর্কে', fas: 'درباره الحکمه'       },
} as const;

export type T = typeof UI;

export function t(key: keyof T, lang: Lang): string {
  const entry = UI[key];
  if (!entry) return key;
  return (entry as Record<string, string>)[lang] ?? (entry as Record<string, string>)['en'] ?? key;
}

export { UI };
