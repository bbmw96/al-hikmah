/**
 * Comprehensive catalogue of every type of salaat in the Sunnah.
 * Each entry's display text (name, when, ruling, story, dua) is keyed into
 * lib/i18n/content/salaat-types-content.ts so it renders in all 14 languages.
 * Arabic recitations stay on this file (hardcoded, never translated).
 */

export type SalaatCategory =
  | 'fard'         // obligatory five daily
  | 'wajib'        // necessary / strongly required (witr per Hanafi)
  | 'sunnah-mu'    // Sunnah Mu'akkadah (confirmed)
  | 'sunnah-ghayr' // Sunnah Ghayr Mu'akkadah (recommended)
  | 'nafl'         // voluntary
  | 'communal';    // congregational specials

export interface SalaatType {
  id: string;
  category: SalaatCategory;
  // Arabic name stays hardcoded (Arabic is never translated)
  arabicName: string;
  // Any Arabic du'a or recitation specific to this salaat (hardcoded)
  arabicDua?: string;
  arabicDuaTransliteration?: string;
  displayOrder: number;
}

export const SALAAT_TYPES: SalaatType[] = [
  // ─── FARD (the five daily) ──────────────────────────────────────
  { id: 'fajr', category: 'fard', arabicName: 'صَلَاةُ الفَجْر', displayOrder: 1 },
  { id: 'dhuhr', category: 'fard', arabicName: 'صَلَاةُ الظُّهْر', displayOrder: 2 },
  { id: 'asr', category: 'fard', arabicName: 'صَلَاةُ العَصْر', displayOrder: 3 },
  { id: 'maghrib', category: 'fard', arabicName: 'صَلَاةُ المَغْرِب', displayOrder: 4 },
  { id: 'isha', category: 'fard', arabicName: 'صَلَاةُ العِشَاء', displayOrder: 5 },

  // ─── WAJIB / WITR ───────────────────────────────────────────────
  {
    id: 'witr',
    category: 'wajib',
    arabicName: 'صَلَاةُ الوِتْر',
    arabicDua: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ وَعَافِنِي فِيمَنْ عَافَيْتَ وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ وَبَارِكْ لِي فِيمَا أَعْطَيْتَ وَقِنِي شَرَّ مَا قَضَيْتَ',
    arabicDuaTransliteration: "Allahumma-hdini fiman hadayt, wa 'afini fiman 'afayt, wa tawallani fiman tawallayt, wa barik li fima a'tayt, wa qini sharra ma qadayt.",
    displayOrder: 6,
  },

  // ─── SUNNAH MU'AKKADAH (rawatib) ────────────────────────────────
  { id: 'sunnah-fajr', category: 'sunnah-mu', arabicName: 'سُنَّةُ الفَجْر', displayOrder: 7 },
  { id: 'sunnah-dhuhr-before', category: 'sunnah-mu', arabicName: 'سُنَّةُ الظُّهْرِ القَبْلِيَّة', displayOrder: 8 },
  { id: 'sunnah-dhuhr-after', category: 'sunnah-mu', arabicName: 'سُنَّةُ الظُّهْرِ البَعْدِيَّة', displayOrder: 9 },
  { id: 'sunnah-maghrib', category: 'sunnah-mu', arabicName: 'سُنَّةُ المَغْرِب', displayOrder: 10 },
  { id: 'sunnah-isha', category: 'sunnah-mu', arabicName: 'سُنَّةُ العِشَاء', displayOrder: 11 },

  // ─── SUNNAH GHAYR MU'AKKADAH ────────────────────────────────────
  { id: 'sunnah-asr', category: 'sunnah-ghayr', arabicName: 'سُنَّةُ العَصْر', displayOrder: 12 },

  // ─── NAFL (voluntary) ───────────────────────────────────────────
  { id: 'tahajjud', category: 'nafl', arabicName: 'صَلَاةُ التَّهَجُّد', displayOrder: 13 },
  { id: 'qiyam-al-layl', category: 'nafl', arabicName: 'قِيَامُ اللَّيْل', displayOrder: 14 },
  { id: 'duha', category: 'nafl', arabicName: 'صَلَاةُ الضُّحَى', displayOrder: 15 },
  {
    id: 'istikharah',
    category: 'nafl',
    arabicName: 'صَلَاةُ الاسْتِخَارَة',
    arabicDua: 'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ وَأَسْأَلُكَ مِنْ فَضْلِكَ العَظِيمِ ۝ فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ وَتَعْلَمُ وَلَا أَعْلَمُ وَأَنْتَ عَلَّامُ الغُيُوبِ ۝ اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ ۝ وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ وَاقْدُرْ لِي الخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ',
    arabicDuaTransliteration: "Allahumma inni astakhiruka bi'ilmika wa astaqdiruka biqudratika wa as'aluka min fadlikal-'azim. Fa innaka taqdiru wa la aqdir, wa ta'lamu wa la a'lam, wa anta 'allamul-ghuyub. Allahumma in kunta ta'lamu anna hadhal-amra khayrun li fi dini wa ma'ashi wa 'aqibati amri, faqdurhu li wa yassirhu li thumma barik li fih. Wa in kunta ta'lamu anna hadhal-amra sharrun li fi dini wa ma'ashi wa 'aqibati amri, fasrifhu 'anni wasrifni 'anhu, waqdur liyal-khayra haythu kana thumma ardini bih.",
    displayOrder: 16,
  },
  { id: 'tahiyyat-al-masjid', category: 'nafl', arabicName: 'تَحِيَّةُ المَسْجِد', displayOrder: 17 },
  { id: 'salat-al-hajah', category: 'nafl', arabicName: 'صَلَاةُ الحَاجَة', displayOrder: 18 },
  { id: 'salat-al-tasbih', category: 'nafl', arabicName: 'صَلَاةُ التَّسْبِيح', displayOrder: 19 },
  { id: 'salat-al-tawbah', category: 'nafl', arabicName: 'صَلَاةُ التَّوْبَة', displayOrder: 20 },
  { id: 'salat-al-awwabin', category: 'nafl', arabicName: 'صَلَاةُ الأَوَّابِين', displayOrder: 21 },
  { id: 'salat-al-wudu', category: 'nafl', arabicName: 'صَلَاةُ الوُضُوء', displayOrder: 22 },

  // ─── COMMUNAL SPECIALS ─────────────────────────────────────────
  { id: 'taraweeh', category: 'communal', arabicName: 'صَلَاةُ التَّرَاوِيح', displayOrder: 23 },
  { id: 'janazah', category: 'communal', arabicName: 'صَلَاةُ الجَنَازَة', displayOrder: 24 },
  { id: 'kusuf', category: 'communal', arabicName: 'صَلَاةُ الكُسُوف', displayOrder: 25 }, // solar
  { id: 'khusuf', category: 'communal', arabicName: 'صَلَاةُ الخُسُوف', displayOrder: 26 }, // lunar
  { id: 'istisqa', category: 'communal', arabicName: 'صَلَاةُ الاسْتِسْقَاء', displayOrder: 27 },
  { id: 'jumuah', category: 'communal', arabicName: 'صَلَاةُ الجُمُعَة', displayOrder: 28 },
  { id: 'eid', category: 'communal', arabicName: 'صَلَاةُ العِيدَيْن', displayOrder: 29 },
];

export const SALAAT_BY_CATEGORY = (cat: SalaatCategory): SalaatType[] =>
  SALAAT_TYPES.filter(s => s.category === cat).sort((a, b) => a.displayOrder - b.displayOrder);

export const getSalaatById = (id: string): SalaatType | undefined =>
  SALAAT_TYPES.find(s => s.id === id);
