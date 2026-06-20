export interface HadithCollection {
  id: string;
  arabicName: string;
  englishName: string;
  shortName: string;
  author: string;
  authorArabic: string;
  authorDates: string;
  hadithCount: number;
  group: 'six-books' | 'nine-books' | 'saheeh' | 'sunan' | 'musnad' | 'muwatta' | 'musannaf';
  grade: 'Most Authentic' | 'Highly Authentic' | 'Authentic' | 'Major Collection';
  description: string;
  apiCollection: string | null;
  available: boolean;
  displayOrder: number;
}

export const HADITH_COLLECTIONS: HadithCollection[] = [
  {
    id: 'bukhari',
    arabicName: 'صحيح البخاري',
    englishName: 'Sahih al-Bukhari',
    shortName: 'Bukhari',
    author: 'Imam Muhammad ibn Ismail al-Bukhari',
    authorArabic: 'الإمام محمد بن إسماعيل البخاري',
    authorDates: '194 AH - 256 AH',
    hadithCount: 7563,
    group: 'six-books',
    grade: 'Most Authentic',
    description:
      'Considered the most authentic book after the Quran. Imam al-Bukhari spent 16 years collecting and verifying over 600,000 narrations, selecting only those he was absolutely certain of, ultimately compiling 7,563 hadiths (with repetition) or approximately 2,602 unique hadiths. He reportedly performed a ritual bath and two units of prayer before recording each hadith.',
    apiCollection: 'bukhari',
    available: true,
    displayOrder: 1,
  },
  {
    id: 'muslim',
    arabicName: 'صحيح مسلم',
    englishName: 'Sahih Muslim',
    shortName: 'Muslim',
    author: 'Imam Muslim ibn al-Hajjaj al-Qushayri',
    authorArabic: 'الإمام مسلم بن الحجاج القشيري',
    authorDates: '204 AH - 261 AH',
    hadithCount: 7500,
    group: 'six-books',
    grade: 'Most Authentic',
    description:
      'The second most authoritative hadith collection in Sunni Islam, compiled by Imam Muslim. He examined around 300,000 traditions and selected approximately 7,500 hadiths based on very strict criteria. Unlike Bukhari, Imam Muslim grouped hadiths on the same topic together and arranged them systematically, making the collection particularly useful for jurisprudential research.',
    apiCollection: 'muslim',
    available: true,
    displayOrder: 2,
  },
  {
    id: 'abudawud',
    arabicName: 'سنن أبي داود',
    englishName: 'Sunan Abu Dawud',
    shortName: 'Abu Dawud',
    author: 'Imam Abu Dawud Sulayman ibn al-Ash\'ath al-Azdi',
    authorArabic: 'الإمام أبو داود سليمان بن الأشعث الأزدي',
    authorDates: '202 AH - 275 AH',
    hadithCount: 5274,
    group: 'six-books',
    grade: 'Highly Authentic',
    description:
      'A principal collection of hadith, renowned for its focus on legal rulings and jurisprudence (fiqh). Imam Abu Dawud examined 500,000 narrations and selected 5,274, noting the weak ones. He remarked that he collected this work to serve the scholars of jurisprudence. The work is particularly valued for its organisation around Islamic legal topics.',
    apiCollection: 'abudawud',
    available: true,
    displayOrder: 3,
  },
  {
    id: 'tirmidhi',
    arabicName: 'جامع الترمذي',
    englishName: 'Jami\' al-Tirmidhi',
    shortName: 'Tirmidhi',
    author: 'Imam Abu \'Isa Muhammad ibn \'Isa al-Tirmidhi',
    authorArabic: 'الإمام أبو عيسى محمد بن عيسى الترمذي',
    authorDates: '209 AH - 279 AH',
    hadithCount: 3956,
    group: 'six-books',
    grade: 'Highly Authentic',
    description:
      'A comprehensive collection distinguished by its inclusion of the opinions of various juristic schools alongside the hadiths. Imam al-Tirmidhi graded hadiths as sahih (sound), hasan (good), da\'if (weak) or gharib (strange), and noted which scholars of jurisprudence acted upon each hadith. This makes it an invaluable reference for comparative Islamic law.',
    apiCollection: 'tirmidhi',
    available: true,
    displayOrder: 4,
  },
  {
    id: 'nasai',
    arabicName: 'سنن النسائي',
    englishName: 'Sunan al-Nasa\'i',
    shortName: "Al-Nasa'i",
    author: 'Imam Ahmad ibn Shu\'ayb ibn \'Ali al-Nasa\'i',
    authorArabic: 'الإمام أحمد بن شعيب بن علي النسائي',
    authorDates: '215 AH - 303 AH',
    hadithCount: 5761,
    group: 'six-books',
    grade: 'Highly Authentic',
    description:
      'Known for its particularly stringent conditions regarding the acceptability of narrators, which some scholars regard as more rigorous than those of Abu Dawud and al-Tirmidhi. The collection is arranged primarily according to chapters of Islamic law and is especially strong on matters of ritual purity and prayer.',
    apiCollection: 'nasai',
    available: true,
    displayOrder: 5,
  },
  {
    id: 'ibnmajah',
    arabicName: 'سنن ابن ماجه',
    englishName: 'Sunan Ibn Majah',
    shortName: 'Ibn Majah',
    author: 'Imam Abu \'Abdillah Muhammad ibn Yazid ibn Majah al-Rabi\'i al-Qazwini',
    authorArabic: 'الإمام أبو عبدالله محمد بن يزيد بن ماجه الربعي القزويني',
    authorDates: '209 AH - 273 AH',
    hadithCount: 4341,
    group: 'six-books',
    grade: 'Highly Authentic',
    description:
      'The sixth of the Kutub al-Sittah (Six Books), containing hadiths on a wide range of topics. The collection includes some weak and even fabricated narrations alongside authentic ones, which is acknowledged by scholars. Despite this, it contains approximately 1,339 hadiths found in no other canonical collection, making it an important supplementary source.',
    apiCollection: 'ibnmajah',
    available: true,
    displayOrder: 6,
  },
  {
    id: 'malik',
    arabicName: 'موطأ الإمام مالك',
    englishName: "Muwatta' Imam Malik",
    shortName: 'Muwatta Malik',
    author: 'Imam Malik ibn Anas al-Asbahi',
    authorArabic: 'الإمام مالك بن أنس الأصبحي',
    authorDates: '93 AH - 179 AH',
    hadithCount: 1857,
    group: 'nine-books',
    grade: 'Most Authentic',
    description:
      'The oldest surviving hadith collection and legal code in Islamic scholarship, predating even the Sahihayn. Imam Malik refined the Muwatta\' over a period of 40 years, presenting it to 70 scholars of Madinah who all approved of it. It reflects the living practice of the people of Madinah and is considered foundational to Maliki jurisprudence.',
    apiCollection: 'malik',
    available: true,
    displayOrder: 7,
  },
  {
    id: 'ahmad',
    arabicName: 'مسند أحمد',
    englishName: 'Musnad Ahmad',
    shortName: 'Musnad Ahmad',
    author: 'Imam Ahmad ibn Muhammad ibn Hanbal al-Shaybani',
    authorArabic: 'الإمام أحمد بن محمد بن حنبل الشيباني',
    authorDates: '164 AH - 241 AH',
    hadithCount: 27647,
    group: 'nine-books',
    grade: 'Major Collection',
    description:
      'One of the largest collections of hadith, compiled by Imam Ahmad ibn Hanbal, the founder of the Hanbali school of jurisprudence. He reportedly selected these hadiths from a pool of 750,000 narrations. The Musnad is arranged by Companion (the person who narrated the hadith from the Prophet ﷺ), making it a comprehensive encyclopaedia of prophetic traditions.',
    apiCollection: 'ahmad',
    available: true,
    displayOrder: 8,
  },
  {
    id: 'darimi',
    arabicName: 'سنن الدارمي',
    englishName: 'Sunan al-Darimi',
    shortName: 'Darimi',
    author: 'Imam Abu Muhammad Abdallah ibn Abd al-Rahman al-Darimi',
    authorArabic: 'الإمام أبو محمد عبدالله بن عبدالرحمن الدارمي',
    authorDates: '181 AH - 255 AH',
    hadithCount: 3367,
    group: 'nine-books',
    grade: 'Highly Authentic',
    description:
      'A distinguished hadith collection arranged similarly to the Six Books, covering the major chapters of Islamic law. The Sunan al-Darimi is notable for its introduction, which contains valuable information about the Prophet\'s characteristics and manners, as well as chapters on the merits of knowledge and the Quran.',
    apiCollection: 'darimi',
    available: true,
    displayOrder: 9,
  },
  {
    id: 'ibn-khuzaymah',
    arabicName: 'صحيح ابن خزيمة',
    englishName: 'Sahih Ibn Khuzaymah',
    shortName: 'Ibn Khuzaymah',
    author: 'Imam Muhammad ibn Ishaq ibn Khuzaymah al-Sulami al-Naysaburi',
    authorArabic: 'الإمام محمد بن إسحاق بن خزيمة السلمي النيسابوري',
    authorDates: '223 AH - 311 AH',
    hadithCount: 3080,
    group: 'saheeh',
    grade: 'Highly Authentic',
    description:
      'A rigorously authenticated collection applying conditions nearly as strict as those of the two Sahihs. Imam Ibn Khuzaymah was known as the Imam of Imams (Imamul A\'imma) for his profound knowledge. The collection focuses predominantly on legal topics and is particularly valued in Shafi\'i scholarly circles.',
    apiCollection: null,
    available: false,
    displayOrder: 10,
  },
  {
    id: 'ibn-hibban',
    arabicName: 'صحيح ابن حبان',
    englishName: 'Sahih Ibn Hibban',
    shortName: 'Ibn Hibban',
    author: 'Imam Muhammad ibn Hibban al-Busti',
    authorArabic: 'الإمام محمد بن حبان البستي',
    authorDates: '270 AH - 354 AH',
    hadithCount: 7479,
    group: 'saheeh',
    grade: 'Highly Authentic',
    description:
      'A substantial collection known for its unique arrangement by subject matter rather than by chapters of law, which Imam Ibn Hibban called al-Taqasim wa al-Anwa\' (Divisions and Types). The collection applies strict authentication criteria and is considered among the highest-grade authentic collections after the two Sahihs.',
    apiCollection: null,
    available: false,
    displayOrder: 11,
  },
  {
    id: 'humaydi',
    arabicName: 'مسند الحميدي',
    englishName: 'Musnad al-Humaydi',
    shortName: 'Musnad al-Humaydi',
    author: 'Imam Abu Bakr Abdallah ibn al-Zubayr al-Humaydi',
    authorArabic: 'الإمام أبو بكر عبدالله بن الزبير الحميدي',
    authorDates: 'Died 219 AH',
    hadithCount: 1321,
    group: 'musnad',
    grade: 'Authentic',
    description:
      'One of the earliest Musnad (arranged by Companion) collections, compiled by a student of Imam al-Shafi\'i and a teacher of Imam al-Bukhari. The Musnad al-Humaydi is valued for its early compilation and its reliable chain of narrators, representing some of the finest hadith scholarship of the early Islamic period.',
    apiCollection: null,
    available: false,
    displayOrder: 12,
  },
  {
    id: 'abd-ibn-humayd',
    arabicName: 'مسند عبد بن حميد',
    englishName: 'Musnad Abd ibn Humayd',
    shortName: 'Abd ibn Humayd',
    author: 'Imam Abd ibn Humayd al-Kissi',
    authorArabic: 'الإمام عبد بن حميد الكسي',
    authorDates: 'Died 249 AH',
    hadithCount: 1532,
    group: 'musnad',
    grade: 'Major Collection',
    description:
      'A hadith collection arranged by Companion that serves as an important reference for scholars, containing narrations from numerous Companions of the Prophet ﷺ. This collection is frequently cited in classical works of hadith science and jurisprudence and contains narrations not found elsewhere.',
    apiCollection: null,
    available: false,
    displayOrder: 13,
  },
  {
    id: 'abd-al-razzaq',
    arabicName: 'مصنف عبد الرزاق',
    englishName: 'Musannaf Abd al-Razzaq',
    shortName: 'Musannaf Abd al-Razzaq',
    author: 'Imam Abd al-Razzaq ibn Hammam al-San\'ani',
    authorArabic: 'الإمام عبدالرزاق بن همام الصنعاني',
    authorDates: '126 AH - 211 AH',
    hadithCount: 21033,
    group: 'musannaf',
    grade: 'Major Collection',
    description:
      'One of the most significant early collections, containing not only prophetic hadiths but also the rulings and opinions of the Companions and Successors (tabi\'in). The Musannaf is arranged by legal topics and is an indispensable reference for understanding the early development of Islamic law and the juristic opinions of the early Muslim community.',
    apiCollection: null,
    available: false,
    displayOrder: 14,
  },
  {
    id: 'ibn-abi-shaybah',
    arabicName: 'مصنف ابن أبي شيبة',
    englishName: 'Musannaf Ibn Abi Shaybah',
    shortName: 'Musannaf Ibn Abi Shaybah',
    author: 'Imam Abu Bakr Abdallah ibn Muhammad ibn Abi Shaybah al-Absi al-Kufi',
    authorArabic: 'الإمام أبو بكر عبدالله بن محمد بن أبي شيبة العبسي الكوفي',
    authorDates: '159 AH - 235 AH',
    hadithCount: 38000,
    group: 'musannaf',
    grade: 'Major Collection',
    description:
      'One of the largest and most comprehensive early hadith collections, arranged by legal topic. In addition to prophetic traditions, it contains extensive rulings from the Companions and Successors. It was a primary source for both Imam al-Bukhari and Imam Muslim in their own compilations, demonstrating its extraordinary scholarly importance.',
    apiCollection: null,
    available: false,
    displayOrder: 15,
  },
];

export const SIX_BOOKS = HADITH_COLLECTIONS.filter(c => c.group === 'six-books');
export const NINE_BOOKS = HADITH_COLLECTIONS.filter(
  c => c.group === 'six-books' || c.id === 'malik' || c.id === 'ahmad' || c.id === 'darimi'
);
export const OTHER_COLLECTIONS = HADITH_COLLECTIONS.filter(
  c => !c.group.includes('six-books') && c.id !== 'malik' && c.id !== 'ahmad' && c.id !== 'darimi'
);

export const COLLECTION_GROUPS = {
  'The Six Books (Kutub al-Sittah)': SIX_BOOKS,
  'Completing the Nine Books (Kutub al-Tis\'ah)': [
    HADITH_COLLECTIONS.find(c => c.id === 'malik')!,
    HADITH_COLLECTIONS.find(c => c.id === 'ahmad')!,
    HADITH_COLLECTIONS.find(c => c.id === 'darimi')!,
  ],
  'Other Major Collections': OTHER_COLLECTIONS,
} as const;

export function getCollectionById(id: string): HadithCollection | undefined {
  return HADITH_COLLECTIONS.find(c => c.id === id);
}
