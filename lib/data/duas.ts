export interface Dua {
  id: string;
  title: string;
  arabic: string;
  transliteration: string;
  meaning: string;
  source: string;
  category: string;
  occasion: string;
  virtue?: string;
}

export interface DuaCategory {
  id: string;
  title: string;
  arabicTitle: string;
  description: string;
  icon: string;
}

export const DUA_CATEGORIES: DuaCategory[] = [
  { id: 'morning-evening', title: 'Morning and Evening Adhkar', arabicTitle: 'أذكار الصباح والمساء', description: 'Daily remembrances to be read after Fajr and after Asr prayer', icon: '🌅' },
  { id: 'prayer', title: "Du'as of Prayer (Salah)", arabicTitle: 'أدعية الصلاة', description: "Supplications recited within and surrounding the five daily prayers", icon: '🕌' },
  { id: 'from-quran', title: "Du'as from the Quran", arabicTitle: 'الأدعية القرآنية', description: 'Supplications taken directly from the verses of the Holy Quran', icon: '📖' },
  { id: 'from-prophets', title: "Du'as of the Prophets", arabicTitle: 'أدعية الأنبياء', description: 'Supplications made by the Prophets of Allah as recorded in the Quran and Sunnah', icon: '✨' },
  { id: 'daily-life', title: 'Daily Life Supplications', arabicTitle: 'أدعية الحياة اليومية', description: "Du'as for everyday activities: eating, sleeping, travelling, and more", icon: '🌿' },
  { id: 'seeking-forgiveness', title: 'Seeking Forgiveness (Istighfar)', arabicTitle: 'الاستغفار والتوبة', description: 'Supplications for repentance and seeking the forgiveness of Allah', icon: '🤲' },
  { id: 'hajj-umrah', title: "Du'as of Hajj and 'Umrah", arabicTitle: 'أدعية الحج والعمرة', description: 'Supplications for the sacred pilgrimages to Makkah', icon: '🕋' },
  { id: 'protection', title: 'Protection and Ruqyah', arabicTitle: 'التعوذات والرقية الشرعية', description: 'Supplications for protection from harm, evil eye, and the whisperings of Shaytan', icon: '🛡️' },
  { id: 'ramadan', title: 'Ramadan Supplications', arabicTitle: 'أدعية رمضان', description: "Du'as specific to the blessed month of Ramadan and the Night of Power (Laylat al-Qadr)", icon: '🌙' },
  { id: 'distress', title: 'Du\'as in Hardship and Distress', arabicTitle: 'أدعية الكرب والشدة', description: 'Supplications to be made during difficult times, illness, and hardship', icon: '💚' },
];

export const DUAS: Dua[] = [
  // --- FROM THE QURAN ---
  {
    id: 'dua-fatiha',
    title: 'The Opening Surah (Complete Prayer)',
    arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
    transliteration: "Ihdina as-sirata al-mustaqim. Sirata alladhina an'amta 'alayhim, ghayri al-maghdubi 'alayhim wa la ad-dallin.",
    meaning: 'Guide us to the straight path: the path of those whom You have favoured, not of those who have evoked Your anger or of those who are astray.',
    source: 'Surah al-Fatiha (1:6-7)',
    category: 'from-quran',
    occasion: 'Recited in every unit (rakat) of prayer; the most recited supplication in Islam',
    virtue: "The Prophet ﷺ said: 'Al-Fatiha is a cure for every disease.'",
  },
  {
    id: 'dua-rabbana-atina',
    title: "The Supplication of the Balanced Believer",
    arabic: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhab an-nar.",
    meaning: 'Our Lord, give us goodness in this world and goodness in the Hereafter, and save us from the punishment of the Fire.',
    source: 'Surah al-Baqarah (2:201)',
    category: 'from-quran',
    occasion: "A comprehensive supplication for both this world and the Hereafter; encouraged to be made during Tawaf and at other times",
    virtue: 'The Prophet ﷺ would most often make this supplication.',
  },
  {
    id: 'dua-istighfar-prophetic',
    title: 'The Master of Seeking Forgiveness (Sayyid al-Istighfar)',
    arabic: 'اللَّهُمَّ أَنْتَ رَبِّي لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ لَكَ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ',
    transliteration: "Allahumma anta rabbi la ilaha illa ant, khalaqtani wa ana 'abduk, wa ana 'ala 'ahdika wa wa'dika mas-tata't, a'udhu bika min sharri ma sana't, abu'u laka bi-ni'matika 'alayy, wa abu'u laka bi-dhanbi, faghfir li, fa-innahu la yaghfiru adh-dhunuba illa ant.",
    meaning: 'O Allah, You are my Lord. There is no deity worthy of worship except You. You created me and I am Your servant. I am upon Your covenant and Your promise as best I can. I seek refuge in You from the evil of what I have done. I acknowledge Your favours upon me and I acknowledge my sin. Forgive me, for none forgives sins except You.',
    source: 'Sahih al-Bukhari',
    category: 'seeking-forgiveness',
    occasion: 'Morning and evening; the greatest supplication of seeking forgiveness',
    virtue: "The Prophet ﷺ said: 'Whoever says this in the morning with firm belief, and dies that day before the evening, he will be among the people of Paradise. And whoever says it in the evening with firm belief, and dies that night before the morning, he will be among the people of Paradise.'",
  },
  {
    id: 'dua-yunus',
    title: "The Supplication of Yunus (The Du'a of Dhul-Nun)",
    arabic: 'لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
    transliteration: "La ilaha illa anta subhanaka inni kuntu mina adh-dhalimin.",
    meaning: 'There is no deity except You; exalted are You above all imperfection. Indeed, I have been of the wrongdoers.',
    source: 'Surah al-Anbiya (21:87)',
    category: 'from-prophets',
    occasion: 'In times of extreme distress and when one feels overwhelmed',
    virtue: "The Prophet ﷺ said: 'No Muslim person calls upon Allah with these words in any matter except that Allah responds to him.'",
  },
  {
    id: 'dua-ibrahim-family',
    title: "Ibrahim's Supplication for His Family and Progeny",
    arabic: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ',
    transliteration: "Rabbi aj'alni muqima as-salati wa min dhurriyyati, rabbana wa taqabbal du'a'.",
    meaning: 'My Lord, make me an establisher of prayer, and my descendants as well. Our Lord, and accept my supplication.',
    source: 'Surah Ibrahim (14:40)',
    category: 'from-prophets',
    occasion: "A beautiful supplication for oneself and one's children",
    virtue: 'A supplication of the Friend of Allah, Ibrahim, which encapsulates the most important legacy: the prayer.',
  },
  {
    id: 'dua-musa-help',
    title: "Musa's Supplication for Help",
    arabic: 'رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ',
    transliteration: "Rabbi inni lima anzalta ilayya min khayrin faqir.",
    meaning: 'My Lord, I am in absolute need of whatever good You send down to me.',
    source: 'Surah al-Qasas (28:24)',
    category: 'from-prophets',
    occasion: "When one is in need and seeking provision and help from Allah",
    virtue: 'Musa made this supplication when he was alone, poor, and a stranger in Madyan. Shortly afterwards, Allah answered him by providing him with a wife, employment, and a new home.',
  },
  {
    id: 'dua-zakariyya',
    title: "Zakariyya's Supplication for a Child",
    arabic: 'رَبِّ هَبْ لِي مِن لَّدُنكَ ذُرِّيَّةً طَيِّبَةً ۖ إِنَّكَ سَمِيعُ الدُّعَاءِ',
    transliteration: "Rabbi hab li min ladunka dhurriyyatan tayyibatan, innaka sami'u ad-du'a'.",
    meaning: 'My Lord, grant me from Yourself good offspring. Indeed, You are the Hearer of supplication.',
    source: 'Surah Al-Imran (3:38)',
    category: 'from-prophets',
    occasion: "For those seeking righteous children or progeny",
    virtue: 'Zakariyya made this supplication in his extreme old age, with his wife barren, and Allah answered him by granting him Yahya.',
  },
  {
    id: 'dua-ayyub',
    title: "Ayyub's Supplication in Affliction",
    arabic: 'رَبِّي أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ',
    transliteration: "Rabbi anni massaniya ad-durru wa anta arhamu ar-rahimin.",
    meaning: 'My Lord, adversity has touched me, and You are the Most Merciful of the merciful.',
    source: 'Surah al-Anbiya (21:83)',
    category: 'from-prophets',
    occasion: 'During illness, pain, or prolonged hardship',
    virtue: 'Ayyub made this supplication after years of severe illness. Allah immediately responded and restored his health.',
  },

  // --- MORNING AND EVENING ---
  {
    id: 'adhkar-morning-1',
    title: 'Morning Remembrance: The Living, the Self-Sustaining',
    arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration: "Asbahna wa asbahal-mulku lillah, wal-hamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir.",
    meaning: 'We have reached the morning, and the dominion belongs to Allah. All praise belongs to Allah. There is no deity except Allah, alone, with no partner. To Him belongs the dominion and to Him belongs all praise, and He is over all things capable.',
    source: 'Abu Dawud',
    category: 'morning-evening',
    occasion: 'Every morning after Fajr prayer',
    virtue: 'A comprehensive morning remembrance acknowledging the sovereignty and perfection of Allah.',
  },
  {
    id: 'adhkar-evening-1',
    title: 'Evening Remembrance',
    arabic: 'أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ وَالْحَمْدُ لِلَّهِ، لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration: "Amsayna wa amsyal-mulku lillah, wal-hamdu lillah, la ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamdu wa huwa 'ala kulli shay'in qadir.",
    meaning: 'We have reached the evening, and the dominion belongs to Allah. All praise belongs to Allah. There is no deity except Allah, alone, with no partner. To Him belongs the dominion and to Him belongs all praise, and He is over all things capable.',
    source: 'Abu Dawud',
    category: 'morning-evening',
    occasion: 'Every evening after Asr prayer',
    virtue: 'The evening counterpart of the morning remembrance.',
  },
  {
    id: 'adhkar-sleep',
    title: 'Supplication Before Sleeping',
    arabic: 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا',
    transliteration: "Bismika Allahumma amutu wa ahya.",
    meaning: 'In Your name, O Allah, I die and I live.',
    source: 'Sahih al-Bukhari',
    category: 'daily-life',
    occasion: 'Upon lying down to sleep',
    virtue: 'Sleep is referred to as the minor death; this supplication acknowledges that one is entirely in the hands of Allah.',
  },
  {
    id: 'adhkar-wake',
    title: 'Supplication Upon Waking',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ',
    transliteration: "Alhamdu lillahil-ladhi ahyana ba'da ma amatana wa ilayhin-nushur.",
    meaning: 'All praise is due to Allah who gave us life after He had caused us to die, and to Him is the resurrection.',
    source: 'Sahih al-Bukhari',
    category: 'daily-life',
    occasion: 'Upon waking from sleep',
    virtue: 'Recognises that every morning is a gift and that waking up is an act of divine mercy.',
  },

  // --- DAILY LIFE ---
  {
    id: 'dua-eating',
    title: 'Supplication Before Eating',
    arabic: 'بِسْمِ اللَّهِ',
    transliteration: 'Bismillah.',
    meaning: 'In the name of Allah.',
    source: 'Sahih al-Bukhari and Sahih Muslim',
    category: 'daily-life',
    occasion: 'Before beginning to eat or drink',
    virtue: "The Prophet ﷺ said: 'When any of you eats, he should mention Allah's name. If he forgets to mention Allah's name at the beginning, he should say: Bismillahi fi awwalihi wa akhirihi.'",
  },
  {
    id: 'dua-after-eating',
    title: 'Supplication After Eating',
    arabic: 'الْحَمْدُ لِلَّهِ الَّذِي أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِينَ',
    transliteration: "Alhamdu lillahil-ladhi at'amana wa saqana wa ja'alana muslimin.",
    meaning: 'All praise is due to Allah who fed us, gave us drink, and made us Muslims.',
    source: 'Abu Dawud and al-Tirmidhi',
    category: 'daily-life',
    occasion: 'After finishing a meal',
    virtue: 'Expresses gratitude to Allah for both physical sustenance and the spiritual blessing of Islam.',
  },
  {
    id: 'dua-entering-home',
    title: 'Supplication Upon Entering the Home',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَ الْمَوْلَجِ وَخَيْرَ الْمَخْرَجِ، بِسْمِ اللَّهِ وَلَجْنَا، وَبِسْمِ اللَّهِ خَرَجْنَا، وَعَلَى اللَّهِ رَبِّنَا تَوَكَّلْنَا',
    transliteration: "Allahumma inni as'aluka khayral-mawlaji wa khayral-makhraji, bismillahi walajjna wa bismillahi kharajna wa 'alallahi rabbina tawakkalna.",
    meaning: 'O Allah, I ask You for goodness in what I enter and what I leave. In the name of Allah we enter and in the name of Allah we leave, and upon Allah our Lord we place our trust.',
    source: 'Abu Dawud',
    category: 'daily-life',
    occasion: 'Upon entering the home',
    virtue: 'Brings blessings into the home and invites the angels while warding off Shaytan.',
  },
  {
    id: 'dua-leaving-home',
    title: 'Supplication Upon Leaving the Home',
    arabic: 'بِسْمِ اللَّهِ تَوَكَّلْتُ عَلَى اللَّهِ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ',
    transliteration: "Bismillahi tawakkaltu 'alallah, wa la hawla wa la quwwata illa billah.",
    meaning: 'In the name of Allah, I place my trust in Allah. There is no power nor strength except with Allah.',
    source: 'Abu Dawud and al-Tirmidhi',
    category: 'daily-life',
    occasion: 'Upon leaving the home',
    virtue: "The Prophet ﷺ said that upon saying this, the believer is told: 'You are guided, defended, and protected; and the Shaytan keeps away from him.'",
  },
  {
    id: 'dua-entering-masjid',
    title: 'Supplication Upon Entering the Mosque',
    arabic: 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ',
    transliteration: "Allahumma iftah li abwaba rahmatik.",
    meaning: 'O Allah, open for me the gates of Your mercy.',
    source: 'Sahih Muslim',
    category: 'daily-life',
    occasion: 'Upon entering the mosque, after stepping in with the right foot',
    virtue: 'The house of Allah is a place of His mercy and this supplication seeks that mercy upon entering.',
  },
  {
    id: 'dua-leaving-masjid',
    title: 'Supplication Upon Leaving the Mosque',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ',
    transliteration: "Allahumma inni as'aluka min fadlik.",
    meaning: 'O Allah, I ask You from Your bounty.',
    source: 'Sahih Muslim',
    category: 'daily-life',
    occasion: 'Upon leaving the mosque, stepping out with the left foot',
    virtue: 'A reminder that after the worship of the mosque, one goes out into the world seeking the provision of Allah.',
  },
  {
    id: 'dua-travelling',
    title: 'Supplication for Travel',
    arabic: 'سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ، وَإِنَّا إِلَى رَبِّنَا لَمُنقَلِبُونَ',
    transliteration: "Subhanal-ladhi sakhkhara lana hadha wa ma kunna lahu muqrinin, wa inna ila rabbina lamunqalibun.",
    meaning: 'Glory be to the One who has subjected this to us, for we could never have done so ourselves. And indeed, to our Lord we are returning.',
    source: 'Surah al-Zukhruf (43:13-14)',
    category: 'daily-life',
    occasion: 'Upon boarding any vehicle, mount, or means of transport',
    virtue: 'A recognition that movement and journeys are facilitated by Allah and a reminder of the ultimate journey to Him.',
  },

  // --- PRAYER (SALAH) ---
  {
    id: 'dua-istiftah',
    title: "Opening Supplication of Prayer (Du'a al-Istiftah)",
    arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، وَتَبَارَكَ اسْمُكَ، وَتَعَالَى جَدُّكَ، وَلَا إِلَهَ غَيْرُكَ',
    transliteration: "Subhanakal-lahumma wa bihamdika, wa tabarakas-muk, wa ta'ala jadduk, wa la ilaha ghayruk.",
    meaning: 'How perfect You are O Allah, and I praise You. Blessed is Your name, exalted is Your majesty, and there is no deity worthy of worship except You.',
    source: 'Abu Dawud, al-Tirmidhi, and al-Nasa\'i',
    category: 'prayer',
    occasion: 'After the opening takbir (Allahu Akbar) and before reciting al-Fatiha in prayer',
    virtue: 'The recommended opening supplication for voluntary prayers; also used in some obligatory prayers according to various schools.',
  },
  {
    id: 'dua-ruku',
    title: "Supplication in Bowing (Ruku')",
    arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
    transliteration: "Subhana rabbiyal-'azim.",
    meaning: 'How perfect my Lord is, the Most Magnificent.',
    source: 'Sahih Muslim',
    category: 'prayer',
    occasion: "Recited three times or more whilst in the bowing position (ruku') in prayer",
    virtue: 'A concise but profound declaration of Allah\'s perfection and magnificence during the act of bowing.',
  },
  {
    id: 'dua-sujud',
    title: 'Supplication in Prostration (Sujud)',
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
    transliteration: "Subhana rabbiyal-a'la.",
    meaning: 'How perfect my Lord is, the Most High.',
    source: 'Sahih Muslim',
    category: 'prayer',
    occasion: "Recited three times or more whilst in prostration (sujud) in prayer",
    virtue: "The Prophet ﷺ said: 'The closest that a servant is to his Lord is when he is in prostration, so make many supplications in it.'",
  },
  {
    id: 'dua-between-sujud',
    title: 'Supplication Between the Two Prostrations',
    arabic: 'رَبِّ اغْفِرْ لِي، رَبِّ اغْفِرْ لِي',
    transliteration: "Rabbighfir li, rabbighfir li.",
    meaning: 'My Lord, forgive me. My Lord, forgive me.',
    source: 'Abu Dawud, Ibn Majah',
    category: 'prayer',
    occasion: 'Recited whilst sitting between the two prostrations in prayer',
    virtue: 'A heartfelt and direct plea for forgiveness at one of the most intimate moments of salah.',
  },
  {
    id: 'dua-tashahud',
    title: 'The Tashahhud (Sitting Testimony)',
    arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    transliteration: "At-tahiyyatu lillahi was-salawatu wat-tayyibat, as-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh, as-salamu 'alayna wa 'ala 'ibadillahis-salihin, ash-hadu alla ilaha illallahu wa ash-hadu anna Muhammadan 'abduhu wa rasuluh.",
    meaning: 'All greetings, prayers, and good deeds are for Allah. Peace be upon you, O Prophet, and the mercy of Allah and His blessings. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no deity worthy of worship except Allah, and I bear witness that Muhammad is His servant and Messenger.',
    source: 'Sahih al-Bukhari and Sahih Muslim',
    category: 'prayer',
    occasion: 'Recited in the sitting position (tashahhud) in every prayer',
    virtue: 'A profound declaration that encompasses greeting the Prophet ﷺ, the believers, and the two testimonies of faith.',
  },

  // --- HAJJ AND UMRAH ---
  {
    id: 'dua-talbiyah',
    title: "The Talbiyah (The Call of the Pilgrimage)",
    arabic: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ',
    transliteration: "Labbayk Allahumma labbayk, labbayk la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak.",
    meaning: "Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Indeed, all praise, favour, and sovereignty belong to You. You have no partner.",
    source: 'Sahih al-Bukhari and Sahih Muslim',
    category: 'hajj-umrah',
    occasion: "Continuously recited from the moment of entering Ihram until the stoning of Jamarat al-Aqabah on Eid al-Adha",
    virtue: "The response of the Muslim to the call of Ibrahim, who was commanded by Allah to call mankind to the pilgrimage. The Prophet ﷺ said: 'Whichever Muslim says the Talbiyah, every stone and tree to his right and left says it too.'",
  },
  {
    id: 'dua-tawaf',
    title: "Supplication During Tawaf",
    arabic: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ',
    transliteration: "Subhanallahi wal-hamdu lillahi wa la ilaha illallahu wallahu akbar.",
    meaning: 'How perfect Allah is. All praise is due to Allah. There is no deity except Allah. Allah is the Greatest.',
    source: 'Recommended during Tawaf based on Sunnah practice',
    category: 'hajj-umrah',
    occasion: "During Tawaf (circumambulation of the Ka'bah)",
    virtue: 'No specific supplication is prescribed for most of Tawaf; one may recite any remembrance, supplication, or Quran.',
  },
  {
    id: 'dua-safa-marwa',
    title: "Supplication at Safa and Marwa",
    arabic: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ',
    transliteration: "Innas-Safa wal-Marwata min sha'a'irillah.",
    meaning: 'Indeed, Safa and Marwa are among the symbols of Allah.',
    source: 'Surah al-Baqarah (2:158)',
    category: 'hajj-umrah',
    occasion: "Recited upon beginning the Sa'i between Safa and Marwa, before ascending Safa",
    virtue: 'The verse reminds the pilgrim of the divine significance of these places and their connection to Hajar and Ismail.',
  },

  // --- PROTECTION ---
  {
    id: 'dua-ayat-kursi',
    title: "Ayat al-Kursi (The Verse of the Throne)",
    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ وَلَا يَئُودُهُ حِفْظُهُمَا ۚ وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    transliteration: "Allahu la ilaha illa huwal-hayyul-qayyum, la ta'khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa'u 'indahu illa bi-idhnih, ya'lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bi-shay'in min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifzuhuma, wa huwal-'aliyyul-'azim.",
    meaning: 'Allah: there is no deity except Him, the Ever-Living, the Self-Sustaining. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who is it that can intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Throne extends over the heavens and the earth, and their preservation tires Him not. And He is the Most High, the Most Magnificent.',
    source: 'Surah al-Baqarah (2:255)',
    category: 'protection',
    occasion: 'After every obligatory prayer and before sleeping',
    virtue: "The Prophet ﷺ described it as the greatest verse of the Quran. He said: 'Whoever recites it after every obligatory prayer, there is nothing between him and entering Paradise except death.' And: 'Whoever recites it before sleeping, Allah will appoint a guardian for him and no Shaytan will approach him until morning.'",
  },
  {
    id: 'dua-morning-protection',
    title: "Morning Supplication for Protection",
    arabic: 'بِسْمِ اللَّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الْأَرْضِ وَلَا فِي السَّمَاءِ، وَهُوَ السَّمِيعُ الْعَلِيمُ',
    transliteration: "Bismillahil-ladhi la yadurru ma'as-mihi shay'un fil-ardi wa la fis-sama', wa huwas-sami'ul-'alim.",
    meaning: "In the name of Allah, with whose name nothing can cause harm on earth or in the sky. And He is the All-Hearing, the All-Knowing.",
    source: 'Abu Dawud and al-Tirmidhi',
    category: 'protection',
    occasion: 'Recited three times in the morning and three times in the evening',
    virtue: "The Prophet ﷺ said: 'Whoever says it three times in the morning will not be afflicted by any calamity until the evening, and whoever says it three times in the evening will not be afflicted by any calamity until the morning.'",
  },

  // --- RAMADAN ---
  {
    id: 'dua-laylat-al-qadr',
    title: "Du'a for Laylat al-Qadr (The Night of Power)",
    arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
    transliteration: "Allahumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'anni.",
    meaning: "O Allah, You are the Pardoner, You love to pardon, so pardon me.",
    source: 'Al-Tirmidhi and Ibn Majah',
    category: 'ramadan',
    occasion: "To be repeated abundantly during Laylat al-Qadr (the Night of Power) in the last ten nights of Ramadan",
    virtue: "The Prophet ﷺ specifically taught this supplication to 'A'ishah (may Allah be pleased with her) for Laylat al-Qadr, demonstrating its great importance and suitability for this blessed night.",
  },
  {
    id: 'dua-breaking-fast',
    title: "Supplication for Breaking the Fast (Iftar)",
    arabic: 'اللَّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَيْكَ تَوَكَّلْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ',
    transliteration: "Allahumma laka sumtu wa bika amantu wa 'alayka tawakkaltu wa 'ala rizqika aftart.",
    meaning: 'O Allah, I fasted for You and I believe in You and I place my trust in You and I break my fast with Your provision.',
    source: 'Abu Dawud',
    category: 'ramadan',
    occasion: 'Upon breaking the fast at the time of Maghrib',
    virtue: "One of the best times of supplication, as the Prophet ﷺ said: 'The fasting person has, at the time of breaking the fast, a supplication that is not rejected.'",
  },
  {
    id: 'dua-distress-1',
    title: "Supplication in Distress and Grief",
    arabic: 'لَا إِلَهَ إِلَّا اللَّهُ الْعَظِيمُ الْحَلِيمُ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ الْعَرْشِ الْعَظِيمِ، لَا إِلَهَ إِلَّا اللَّهُ رَبُّ السَّمَاوَاتِ وَرَبُّ الْأَرْضِ وَرَبُّ الْعَرْشِ الْكَرِيمِ',
    transliteration: "La ilaha illallahul-'azimul-halim, la ilaha illallahu rabbul-'arshil-'azim, la ilaha illallahu rabbus-samawati wa rabbul-ardi wa rabbul-'arshil-karim.",
    meaning: 'There is no deity except Allah, the Most Magnificent, the Forbearing. There is no deity except Allah, Lord of the magnificent Throne. There is no deity except Allah, Lord of the heavens and Lord of the earth and Lord of the noble Throne.',
    source: 'Sahih al-Bukhari and Sahih Muslim',
    category: 'distress',
    occasion: 'When afflicted with worry, distress, or anxiety',
    virtue: "The Prophet ﷺ would say this when he faced a difficult matter.",
  },
];

export function getDuasByCategory(categoryId: string): Dua[] {
  return DUAS.filter(d => d.category === categoryId);
}

export function getDuaById(id: string): Dua | undefined {
  return DUAS.find(d => d.id === id);
}

export function getCategoryById(id: string): DuaCategory | undefined {
  return DUA_CATEGORIES.find(c => c.id === id);
}
