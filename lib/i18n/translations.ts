export type Lang = 'en' | 'ms' | 'tur' | 'urd' | 'ben' | 'fas' | 'zh' | 'yue' | 'ja' | 'ru' | 'es';

export const LANGUAGE_META: Record<Lang, { label: string; nativeLabel: string; dir: 'ltr' | 'rtl'; htmlLang: string }> = {
  en:  { label: 'English',   nativeLabel: 'English',        dir: 'ltr', htmlLang: 'en-GB'       },
  ms:  { label: 'Malay',     nativeLabel: 'Bahasa Melayu',  dir: 'ltr', htmlLang: 'ms'          },
  tur: { label: 'Turkish',   nativeLabel: 'Türkçe',         dir: 'ltr', htmlLang: 'tr'          },
  urd: { label: 'Urdu',      nativeLabel: 'اردو',           dir: 'rtl', htmlLang: 'ur'          },
  ben: { label: 'Bengali',   nativeLabel: 'বাংলা',          dir: 'ltr', htmlLang: 'bn'          },
  fas: { label: 'Persian',   nativeLabel: 'فارسی',          dir: 'rtl', htmlLang: 'fa'          },
  zh:  { label: 'Mandarin',  nativeLabel: '普通话',          dir: 'ltr', htmlLang: 'zh-Hans'     },
  yue: { label: 'Cantonese', nativeLabel: '廣東話',          dir: 'ltr', htmlLang: 'zh-Hant-HK'  },
  ja:  { label: 'Japanese',  nativeLabel: '日本語',          dir: 'ltr', htmlLang: 'ja'          },
  ru:  { label: 'Russian',   nativeLabel: 'Русский',        dir: 'ltr', htmlLang: 'ru'          },
  es:  { label: 'Spanish',   nativeLabel: 'Español',        dir: 'ltr', htmlLang: 'es'          },
};

export type TranslationKey = keyof typeof UI;

const UI = {
  /* ── Navigation ─────────────────────────────────────── */
  'nav.hadith':         { en: 'Hadith',             ms: 'Hadis',           tur: 'Hadis',                  urd: 'حدیث',             ben: 'হাদিস',             fas: 'حدیث',          zh: '圣训',          yue: '聖訓',         ja: 'ハディース',      ru: 'Хадис',                es: 'Hadiz'               },
  'nav.prophets':       { en: 'Prophets',           ms: 'Para Nabi',       tur: 'Peygamberler',           urd: 'انبیاء',           ben: 'নবীগণ',             fas: 'پیامبران',      zh: '先知',          yue: '先知',         ja: '預言者',          ru: 'Пророки',              es: 'Profetas'            },
  'nav.duas':           { en: "Du'as",              ms: 'Doa',             tur: 'Dualar',                 urd: 'دعائیں',           ben: 'দোয়া',              fas: 'دعاها',         zh: '祈祷',          yue: '祈禱',         ja: 'ドゥア',          ru: 'Дуа',                  es: "Du'as"               },
  'nav.hajj':           { en: 'Hajj & Umrah',      ms: 'Haji & Umrah',    tur: 'Hac & Umre',             urd: 'حج و عمرہ',        ben: 'হজ ও উমরাহ',       fas: 'حج و عمره',     zh: '朝觐与副朝',     yue: '朝覲與副朝',   ja: 'ハッジ・ウムラ',  ru: 'Хадж и Умра',          es: 'Hayy y Umra'         },
  'nav.learn':          { en: 'Learn',              ms: 'Belajar',         tur: 'Öğren',                  urd: 'سیکھیں',           ben: 'শিখুন',             fas: 'یاد بگیرید',   zh: '学习',          yue: '學習',         ja: '学ぶ',            ru: 'Изучить',              es: 'Aprender'            },
  'nav.about':          { en: 'About',              ms: 'Tentang',         tur: 'Hakkında',               urd: 'بارے میں',         ben: 'সম্পর্কে',          fas: 'درباره',        zh: '关于',          yue: '關於',         ja: 'について',        ru: 'О нас',                es: 'Acerca de'           },
  'nav.99names':        { en: '99 Names of Allah',  ms: '99 Nama Allah',   tur: "Allah'ın 99 İsmi",       urd: 'اللہ کے 99 نام',   ben: 'আল্লাহর ৯৯টি নাম', fas: '۹۹ نام خداوند', zh: '安拉的99个名字', yue: '真主的99個名字', ja: 'アッラーの99の御名', ru: '99 имён Аллаха',    es: '99 Nombres de Alá'   },
  'nav.prayer':         { en: 'How to Pray',        ms: 'Cara Solat',      tur: 'Namaz Nasıl Kılınır',    urd: 'نماز کا طریقہ',    ben: 'নামাজ পড়ার পদ্ধতি', fas: 'چگونه نماز بخوانیم', zh: '如何礼拜', yue: '如何禮拜', ja: 'サラーの仕方', ru: 'Как молиться',       es: 'Cómo Rezar'          },
  'nav.seerah':         { en: 'Seerah',             ms: 'Sirah',           tur: 'Siyer',                  urd: 'سیرت',             ben: 'সীরাত',             fas: 'سیره',          zh: '先知传记',      yue: '先知傳記',     ja: 'スィーラ',        ru: 'Сира',                 es: 'Sira'                },
  'nav.glossary':       { en: 'Glossary',           ms: 'Glosari',         tur: 'Sözlük',                 urd: 'لغت',              ben: 'পরিভাষা',           fas: 'واژه‌نامه',     zh: '术语表',        yue: '術語表',       ja: '用語集',          ru: 'Словарь',              es: 'Glosario'            },
  'nav.calendar':       { en: 'Islamic Calendar',   ms: 'Kalendar Islam',  tur: 'İslam Takvimi',          urd: 'اسلامی کیلنڈر',    ben: 'ইসলামি ক্যালেন্ডার', fas: 'تقویم اسلامی', zh: '伊斯兰历', yue: '伊斯蘭曆', ja: 'イスラム暦',      ru: 'Исламский календарь',  es: 'Calendario Islámico' },
  'nav.tawheed':        { en: 'Tawheed',            ms: 'Tauhid',          tur: 'Tevhid',                 urd: 'توحید',            ben: 'তাওহিদ',            fas: 'توحید',         zh: '认主独一',      yue: '認主獨一',     ja: 'タウヒード',      ru: 'Таухид',               es: 'Tauhid'              },
  'nav.ramadan':        { en: 'Ramadan',            ms: 'Ramadan',         tur: 'Ramazan',                urd: 'رمضان',            ben: 'রমজান',             fas: 'رمضان',         zh: '斋月',          yue: '齋戒月',       ja: 'ラマダン',        ru: 'Рамадан',              es: 'Ramadán'             },
  'nav.fiqh':           { en: 'Fiqh',               ms: 'Fiqh',            tur: 'Fıkıh',                  urd: 'فقہ',              ben: 'ফিকহ',              fas: 'فقه',           zh: '伊斯兰法学',     yue: '伊斯蘭法學',   ja: 'フィクフ',        ru: 'Фикх',                 es: 'Fiqh'                },
  'nav.suluk':          { en: 'Suluk',              ms: 'Suluk',           tur: 'Sülûk',                  urd: 'سلوک',             ben: 'সুলুক',             fas: 'سلوک',          zh: '精神修行',      yue: '精神修行',     ja: 'スルーク',        ru: 'Сулук',                es: 'Suluk'               },
  'nav.nikah':          { en: 'Nikah',              ms: 'Nikah',           tur: 'Nikah',                  urd: 'نکاح',             ben: 'নিকাহ',             fas: 'نکاح',          zh: '婚姻',          yue: '婚姻',         ja: 'ニカー',          ru: 'Никах',                es: 'Nikah'               },
  'nav.quran':          { en: 'The Quran',          ms: 'Al-Quran',        tur: 'Kuran-ı Kerim',          urd: 'قرآن کریم',        ben: 'আল-কুরআন',          fas: 'قرآن کریم',     zh: '古兰经',        yue: '古蘭經',       ja: 'クルアーン',      ru: 'Коран',                es: 'El Corán'            },
  'nav.browse':         { en: 'Browse Collections', ms: 'Semak Koleksi',   tur: 'Koleksiyonlara Göz At',  urd: 'مجموعے دیکھیں',    ben: 'সংগ্রহ দেখুন',      fas: 'مرور مجموعه‌ها', zh: '浏览圣训集', yue: '瀏覽聖訓集', ja: 'コレクションを見る', ru: 'Просмотр коллекций', es: 'Ver Colecciones'    },
  'nav.sixbooks':       { en: 'The Six Books',      ms: 'Enam Kitab',      tur: 'Altı Kitap',             urd: 'چھ کتابیں',        ben: 'ছয়টি কিতাব',       fas: 'شش کتاب',       zh: '六大圣训集',     yue: '六大聖訓集',   ja: '六大ハディース書',  ru: 'Шесть книг',           es: 'Los Seis Libros'     },
  'nav.ninebooks':      { en: 'The Nine Books',     ms: 'Sembilan Kitab',  tur: 'Dokuz Kitap',            urd: 'نو کتابیں',        ben: 'নয়টি কিতাব',       fas: 'نه کتاب',       zh: '九大圣训集',     yue: '九大聖訓集',   ja: '九大ハディース書',  ru: 'Девять книг',          es: 'Los Nueve Libros'    },
  'nav.other':          { en: 'Other Collections',  ms: 'Koleksi Lain',    tur: 'Diğer Koleksiyonlar',    urd: 'دیگر مجموعے',      ben: 'অন্যান্য সংগ্রহ',  fas: 'مجموعه‌های دیگر', zh: '其他圣训集', yue: '其他聖訓集', ja: 'その他のコレクション', ru: 'Другие коллекции', es: 'Otras Colecciones'  },
  'nav.hajjguide':      { en: 'Hajj Guide',         ms: 'Panduan Haji',    tur: 'Hac Rehberi',            urd: 'حج گائیڈ',         ben: 'হজ গাইড',           fas: 'راهنمای حج',    zh: '朝觐指南',      yue: '朝覲指南',     ja: 'ハッジガイド',    ru: 'Руководство по Хаджу', es: 'Guía del Hayy'      },
  'nav.umrahguide':     { en: 'Umrah Guide',        ms: 'Panduan Umrah',   tur: 'Umre Rehberi',           urd: 'عمرہ گائیڈ',       ben: 'উমরাহ গাইড',        fas: 'راهنمای عمره',  zh: '副朝指南',      yue: '副朝指南',     ja: 'ウムラガイド',    ru: 'Руководство по Умре',  es: 'Guía de Umra'       },

  /* ── Hero ───────────────────────────────────────────── */
  'hero.subtitle': {
    en:  'A scholarly resource for the authentic Islamic tradition: hadith, supplications, the stories of the prophets, and guidance on worship, presented in Arabic with translations in multiple languages.',
    ms:  'Sumber ilmiah untuk tradisi Islam yang sahih: hadis, doa, kisah para nabi, dan panduan ibadah, disajikan dalam bahasa Arab dengan terjemahan dalam pelbagai bahasa.',
    tur: 'Özgün İslam geleneği için ilmi bir kaynak: hadisler, dualar, peygamberlerin hikayeleri ve ibadet rehberi, Arapça olarak ve birden fazla dilde sunulmaktadır.',
    urd: 'مستند اسلامی روایت کے لیے ایک علمی ماخذ: احادیث، دعائیں، انبیاء کی کہانیاں، اور عبادت کی رہنمائی، عربی اور متعدد زبانوں میں پیش کی گئی ہے۔',
    ben: 'খাঁটি ইসলামি ঐতিহ্যের একটি পণ্ডিত উৎস: হাদিস, দোয়া, নবীদের কাহিনী এবং ইবাদতের নির্দেশিকা, আরবি ও একাধিক ভাষায় উপস্থাপিত।',
    fas: 'یک منبع علمی برای سنت اسلامی معتبر: احادیث، دعاها، داستان‌های انبیاء و راهنمایی عبادت، به زبان عربی و چندین زبان دیگر ارائه شده است.',
    zh:  '一个关于正宗伊斯兰传统的学术资源：圣训、祈祷、先知的故事以及礼拜指导，以阿拉伯语呈现，并提供多种语言的翻译。',
    yue: '一個關於正宗伊斯蘭傳統的學術資源：聖訓、祈禱、先知的故事以及禮拜指導，以阿拉伯語呈現，並提供多種語言的翻譯。',
    ja:  '正統なイスラム伝統の学術リソース：ハディース、ドゥア、預言者の物語、礼拝の手引き。アラビア語で提供され、複数の言語に翻訳されています。',
    ru:  'Научный ресурс по подлинной исламской традиции: хадисы, мольбы, истории пророков и руководство по поклонению, представленные на арабском языке с переводами на несколько языков.',
    es:  'Un recurso académico para la tradición islámica auténtica: hadices, súplicas, historias de los profetas y orientación para el culto, presentados en árabe con traducciones en múltiples idiomas.',
  },
  'hero.cta.hadith': { en: 'Browse Hadith Collections', ms: 'Semak Koleksi Hadis',  tur: 'Hadis Koleksiyonlarına Göz At', urd: 'حدیث کے مجموعے دیکھیں', ben: 'হাদিস সংগ্রহ দেখুন', fas: 'مرور مجموعه‌های حدیث', zh: '浏览圣训集', yue: '瀏覽聖訓集', ja: 'ハディース集を見る', ru: 'Просмотр хадисов', es: 'Ver Colecciones de Hadices' },
  'hero.cta.about':  { en: 'About This Resource',       ms: 'Tentang Sumber Ini',   tur: 'Bu Kaynak Hakkında',           urd: 'اس ماخذ کے بارے میں',   ben: 'এই উৎস সম্পর্কে',    fas: 'درباره این منبع',       zh: '关于本资源', yue: '關於本資源', ja: 'このリソースについて', ru: 'Об этом ресурсе', es: 'Acerca de Este Recurso' },

  /* ── UI Controls ─────────────────────────────────────── */
  'ui.previous':    { en: 'Previous',        ms: 'Sebelumnya',    tur: 'Önceki',           urd: 'پچھلا',            ben: 'পূর্ববর্তী',    fas: 'قبلی',              zh: '上一页',    yue: '上一頁',   ja: '前へ',           ru: 'Назад',                es: 'Anterior'            },
  'ui.next':        { en: 'Next',            ms: 'Seterusnya',    tur: 'Sonraki',          urd: 'اگلا',             ben: 'পরবর্তী',       fas: 'بعدی',              zh: '下一页',    yue: '下一頁',   ja: '次へ',           ru: 'Вперёд',               es: 'Siguiente'           },
  'ui.page':        { en: 'Page',            ms: 'Halaman',       tur: 'Sayfa',            urd: 'صفحہ',             ben: 'পৃষ্ঠা',        fas: 'صفحه',              zh: '第',        yue: '第',       ja: 'ページ',         ru: 'Страница',             es: 'Página'              },
  'ui.of':          { en: 'of',              ms: 'daripada',      tur: '/',                urd: 'کا',               ben: 'এর',            fas: 'از',                zh: '页，共',    yue: '頁，共',   ja: '/',              ru: 'из',                   es: 'de'                  },
  'ui.search':      { en: 'Search',          ms: 'Cari',          tur: 'Ara',              urd: 'تلاش',             ben: 'অনুসন্ধান',     fas: 'جستجو',             zh: '搜索',      yue: '搜尋',     ja: '検索',           ru: 'Поиск',                es: 'Buscar'              },
  'ui.loading':     { en: 'Loading...',      ms: 'Memuatkan...',  tur: 'Yükleniyor...',    urd: 'لوڈ ہو رہا ہے...',  ben: 'লোড হচ্ছে...',  fas: 'در حال بارگیری...', zh: '加载中…',   yue: '載入中…',  ja: '読み込み中…',    ru: 'Загрузка…',            es: 'Cargando…'           },
  'ui.browse':      { en: 'Browse',          ms: 'Semak',         tur: 'Göz At',           urd: 'دیکھیں',           ben: 'দেখুন',         fas: 'مرور',              zh: '浏览',      yue: '瀏覽',     ja: '閲覧',           ru: 'Просмотр',             es: 'Explorar'            },
  'ui.comingsoon':  { en: 'Coming soon',     ms: 'Akan datang',   tur: 'Yakında',          urd: 'جلد آ رہا ہے',     ben: 'শীঘ্রই আসছে',  fas: 'به زودی',           zh: '即将推出',   yue: '即將推出',  ja: '近日公開',       ru: 'Скоро',                es: 'Próximamente'        },
  'ui.hadiths':     { en: 'hadiths',         ms: 'hadis',         tur: 'hadis',            urd: 'احادیث',           ben: 'হাদিস',         fas: 'احادیث',            zh: '条圣训',    yue: '條聖訓',   ja: '件のハディース',  ru: 'хадисов',              es: 'hadices'             },
  'ui.selectlang':  { en: 'Select language', ms: 'Pilih bahasa',  tur: 'Dil seç',          urd: 'زبان منتخب کریں',  ben: 'ভাষা নির্বাচন করুন', fas: 'انتخاب زبان', zh: '选择语言', yue: '選擇語言', ja: '言語を選択', ru: 'Выбрать язык',         es: 'Seleccionar idioma'  },
  'ui.changelang':  { en: 'Language',        ms: 'Bahasa',        tur: 'Dil',              urd: 'زبان',             ben: 'ভাষা',          fas: 'زبان',              zh: '语言',      yue: '語言',     ja: '言語',           ru: 'Язык',                 es: 'Idioma'              },

  /* ── Hadith page ─────────────────────────────────────── */
  'hadith.english':     { en: 'English Meaning',        ms: 'Makna Bahasa Inggeris',   tur: 'İngilizce Anlam',       urd: 'انگریزی مفہوم',       ben: 'ইংরেজি অর্থ',        fas: 'معنی انگلیسی',  zh: '英文含义',    yue: '英文含義',   ja: '英語の意味',          ru: 'Значение на английском',    es: 'Significado en Inglés'    },
  'hadith.translation': { en: 'Translation',            ms: 'Terjemahan',              tur: 'Çeviri',                urd: 'ترجمہ',               ben: 'অনুবাদ',             fas: 'ترجمه',         zh: '翻译',        yue: '翻譯',       ja: '翻訳',                ru: 'Перевод',                   es: 'Traducción'               },
  'hadith.loading':     { en: 'Loading translation...', ms: 'Memuatkan terjemahan...', tur: 'Çeviri yükleniyor...', urd: 'ترجمہ لوڈ ہو رہا ہے...', ben: 'অনুবাদ লোড হচ্ছে...', fas: 'در حال بارگیری ترجمه...', zh: '正在加载翻译…', yue: '正在載入翻譯…', ja: '翻訳を読み込み中…', ru: 'Загрузка перевода…', es: 'Cargando traducción…' },
  'hadith.notavail':    {
    en:  'This translation is not yet available for this collection in the selected language.',
    ms:  'Terjemahan ini belum tersedia untuk koleksi ini dalam bahasa yang dipilih.',
    tur: 'Bu çeviri, seçilen dil için bu koleksiyonda henüz mevcut değildir.',
    urd: 'یہ ترجمہ منتخب زبان میں اس مجموعے کے لیے ابھی دستیاب نہیں ہے۔',
    ben: 'এই অনুবাদটি নির্বাচিত ভাষায় এই সংগ্রহের জন্য এখনও পাওয়া যায়নি।',
    fas: 'این ترجمه هنوز برای این مجموعه در زبان انتخابی موجود نیست.',
    zh:  '所选语言中该圣训集暂无翻译。',
    yue: '所選語言中該聖訓集暫無翻譯。',
    ja:  'この言語ではこのコレクションの翻訳はまだ利用できません。',
    ru:  'Этот перевод пока недоступен для данной коллекции на выбранном языке.',
    es:  'Esta traducción aún no está disponible para esta colección en el idioma seleccionado.',
  },
  'hadith.tryother': {
    en:  'Try another language, or read the English meaning above.',
    ms:  'Cuba bahasa lain, atau baca makna Bahasa Inggeris di atas.',
    tur: 'Başka bir dil deneyin veya yukarıdaki İngilizce anlamı okuyun.',
    urd: 'کوئی اور زبان آزمائیں، یا اوپر انگریزی مفہوم پڑھیں۔',
    ben: 'অন্য ভাষা চেষ্টা করুন, বা উপরে ইংরেজি অর্থ পড়ুন।',
    fas: 'زبان دیگری را امتحان کنید یا معنی انگلیسی را در بالا بخوانید.',
    zh:  '请尝试其他语言，或阅读上方的英文含义。',
    yue: '請嘗試其他語言，或閱讀上方的英文含義。',
    ja:  '別の言語を試すか、上記の英語の意味をお読みください。',
    ru:  'Попробуйте другой язык или прочитайте значение на английском выше.',
    es:  'Pruebe otro idioma, o lea el significado en inglés arriba.',
  },
  'hadith.selectlang': {
    en:  'Select a language above to load the translation.',
    ms:  'Pilih bahasa di atas untuk memuatkan terjemahan.',
    tur: 'Çeviriyi yüklemek için yukarıdan bir dil seçin.',
    urd: 'ترجمہ لوڈ کرنے کے لیے اوپر سے زبان منتخب کریں۔',
    ben: 'অনুবাদ লোড করতে উপরে ভাষা নির্বাচন করুন।',
    fas: 'برای بارگیری ترجمه، زبانی را از بالا انتخاب کنید.',
    zh:  '请在上方选择语言以加载翻译。',
    yue: '請在上方選擇語言以載入翻譯。',
    ja:  '翻訳を読み込むには上から言語を選択してください。',
    ru:  'Выберите язык выше для загрузки перевода.',
    es:  'Seleccione un idioma arriba para cargar la traducción.',
  },
  'hadith.notext': {
    en:  'Text not available for this hadith.',
    ms:  'Teks tidak tersedia untuk hadis ini.',
    tur: 'Bu hadis için metin mevcut değildir.',
    urd: 'اس حدیث کے لیے متن دستیاب نہیں۔',
    ben: 'এই হাদিসের জন্য পাঠ্য পাওয়া যায়নি।',
    fas: 'متن برای این حدیث موجود نیست.',
    zh:  '该圣训的文本暂不可用。',
    yue: '該聖訓的文本暫不可用。',
    ja:  'このハディースのテキストは利用できません。',
    ru:  'Текст для этого хадиса недоступен.',
    es:  'Texto no disponible para este hadiz.',
  },
  'hadith.grade.sahih': { en: 'Authentic (Sahih)', ms: 'Sahih', tur: 'Sahih (Güvenilir)', urd: 'صحیح', ben: 'সহিহ (বিশুদ্ধ)', fas: 'صحیح', zh: '真实可靠 (Sahih)', yue: '真實可靠 (Sahih)', ja: '真正 (サヒーフ)', ru: 'Достоверный (Сахих)', es: 'Auténtico (Sahih)' },

  /* ── Page headings ───────────────────────────────────── */
  'page.hadith.title':   { en: 'Hadith Collections',            ms: 'Koleksi Hadis',          tur: 'Hadis Koleksiyonları',       urd: 'حدیث کے مجموعے',      ben: 'হাদিস সংগ্রহ',        fas: 'مجموعه‌های حدیث',  zh: '圣训集',          yue: '聖訓集',         ja: 'ハディース集',          ru: 'Коллекции хадисов',            es: 'Colecciones de Hadices'    },
  'page.prophets.title': { en: 'Prophets of Islam',             ms: 'Nabi-Nabi Islam',        tur: "İslam'ın Peygamberleri",     urd: 'اسلام کے انبیاء',     ben: 'ইসলামের নবীগণ',      fas: 'پیامبران اسلام',   zh: '伊斯兰的先知们',   yue: '伊斯蘭的先知們',  ja: 'イスラムの預言者たち',  ru: 'Пророки ислама',               es: 'Profetas del Islam'        },
  'page.duas.title':     { en: "Du'as & Supplications",         ms: 'Doa & Permohonan',       tur: 'Dualar ve Niyazlar',         urd: 'دعائیں اور التجائیں', ben: 'দোয়া ও প্রার্থনা',  fas: 'دعاها و مناجات‌ها', zh: '祈祷与祈求',      yue: '祈禱與祈求',     ja: 'ドゥアと祈り',          ru: 'Дуа и мольбы',                 es: "Du'as y Súplicas"          },
  'page.99.title':       { en: 'The 99 Names of Allah',         ms: '99 Nama Allah',          tur: "Allah'ın 99 İsmi",           urd: 'اللہ کے 99 نام',      ben: 'আল্লাহর ৯৯টি নাম',  fas: '۹۹ نام خداوند',    zh: '安拉的99个名字',   yue: '真主的99個名字',  ja: 'アッラーの99の御名',    ru: '99 имён Аллаха',               es: 'Los 99 Nombres de Alá'     },
  'page.prayer.title':   { en: 'How to Pray',                   ms: 'Cara Solat',             tur: 'Namaz Nasıl Kılınır',        urd: 'نماز کا طریقہ',       ben: 'নামাজ পড়ার পদ্ধতি', fas: 'چگونه نماز بخوانیم', zh: '如何礼拜',       yue: '如何禮拜',       ja: 'サラーの仕方',          ru: 'Как совершать молитву',        es: 'Cómo Rezar'                },
  'page.seerah.title':   { en: 'Seerah - Life of the Prophet',  ms: 'Sirah Nabi',             tur: "Siyer - Peygamberin Hayatı", urd: 'سیرت النبی',          ben: 'সীরাতুন নবী',        fas: 'سیره پیامبر',      zh: '先知传记',        yue: '先知傳記',       ja: 'スィーラ - 預言者の生涯', ru: 'Сира - Жизнь Пророка',       es: 'Sira - Vida del Profeta'   },
  'page.hajj.title':     { en: 'Hajj & Umrah Guide',            ms: 'Panduan Haji & Umrah',   tur: 'Hac ve Umre Rehberi',        urd: 'حج و عمرہ گائیڈ',     ben: 'হজ ও উমরাহ গাইড',   fas: 'راهنمای حج و عمره', zh: '朝觐与副朝指南',  yue: '朝覲與副朝指南', ja: 'ハッジ・ウムラガイド',   ru: 'Руководство по Хаджу и Умре', es: 'Guía del Hayy y la Umra'  },
  'page.glossary.title': { en: 'Islamic Glossary',              ms: 'Glosari Islam',          tur: 'İslam Sözlüğü',             urd: 'اسلامی لغت',          ben: 'ইসলামি পরিভাষা',     fas: 'واژه‌نامه اسلامی', zh: '伊斯兰术语表',    yue: '伊斯蘭術語表',   ja: 'イスラム用語集',        ru: 'Исламский словарь',            es: 'Glosario Islámico'         },
  'page.calendar.title': { en: 'Islamic Calendar',              ms: 'Kalendar Islam',         tur: 'İslam Takvimi',              urd: 'اسلامی کیلنڈر',       ben: 'ইসলামি ক্যালেন্ডার', fas: 'تقویم اسلامی',     zh: '伊斯兰历',       yue: '伊斯蘭曆',       ja: 'イスラム暦',            ru: 'Исламский календарь',          es: 'Calendario Islámico'       },
  'page.about.title':    { en: 'About Al-Hikmah',               ms: 'Tentang Al-Hikmah',      tur: 'Al-Hikmah Hakkında',         urd: 'الحکمہ کے بارے میں',  ben: 'আল-হিকমাহ সম্পর্কে', fas: 'درباره الحکمه',    zh: '关于Al-Hikmah',  yue: '關於Al-Hikmah',  ja: 'アル・ヒクマについて',  ru: 'Об Аль-Хикма',                 es: 'Acerca de Al-Hikmah'       },
} as const;

export type T = typeof UI;

export function t(key: keyof T, lang: Lang): string {
  const entry = UI[key];
  if (!entry) return key;
  return (entry as Record<string, string>)[lang] ?? (entry as Record<string, string>)['en'] ?? key;
}

export { UI };
