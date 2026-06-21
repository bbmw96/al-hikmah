import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'How to Pray',
  description: 'A comprehensive guide to Islamic prayer (Salah): the story of how it was ordained during the Night Journey, complete steps with all authentic extra dhikr from the Sunnah, and after-prayer supplications with their stories and virtues.',
};

/* ── How Prayer Was Ordained ─────────────────────────────── */

const ISRA_MIRAJ = {
  year: '621 CE, the 10th year of Prophethood, the Year of Sorrow (عام الحزن)',
  background: `The Prophet ﷺ had endured the most devastating year of his life. Within months he lost his beloved wife Khadijah (ra), his support for 25 years, and his uncle Abu Talib, who had shielded him from violence. A journey to Ta'if to seek support ended with him being pelted with stones until his sandals filled with blood. It was in this state of grief and trial that Allah honoured His Prophet with the greatest spiritual journey in human history.`,
  events: [
    {
      title: "The Night Journey to Jerusalem (Al-Isra')",
      text: `Jibril (as) came to the Prophet ﷺ at night at Masjid al-Haram. He was brought the Buraq, a white creature larger than a donkey and smaller than a mule, which placed its hooves at the furthest point its gaze reached. The Prophet ﷺ was carried to Masjid al-Aqsa in Jerusalem in a single night, a distance that normally took a month. There, the souls of all the prophets gathered and the Prophet ﷺ led them all in prayer as their Imam, establishing that he is the master of all the prophets (peace be upon them all).`,
    },
    {
      title: 'Ascending the Seven Heavens (Al-Mi\'raj)',
      text: `From Masjid al-Aqsa, Jibril ascended with the Prophet ﷺ through gates of light. At each heaven, Jibril sought permission to enter. In the first heaven: Adam (as). In the second: Yahya and Isa (as). In the third: Yusuf (as). In the fourth: Idris (as). In the fifth: Harun (as). In the sixth: Musa (as), who wept and said: "This young man will have more of his nation enter Paradise than mine." In the seventh: Ibrahim (as), leaning his back against the Bayt al-Ma'mur, the celestial Ka'bah which 70,000 angels circumambulate every single day, never returning.`,
    },
    {
      title: 'At the Lote Tree of the Utmost Boundary',
      text: `The Prophet ﷺ was taken to Sidratul Muntaha, a lote tree at the boundary beyond which none may pass. Jibril (as) stopped and said: "If I were to draw even a finger's length closer, I would be consumed by the light of my Lord." The Prophet ﷺ alone went beyond, in a nearness to his Lord that no creature had ever reached. He was shown al-Kawthar, Paradise and Hell, and was granted a direct conversation with Allah Most High, without any intermediary.`,
    },
    {
      title: 'The Ordaining of the Five Prayers: from Fifty',
      text: `Allah prescribed fifty daily prayers. On the way back, Musa (as) stopped the Prophet ﷺ and asked how many prayers had been ordained. When told fifty, Musa said: "Your nation cannot bear fifty prayers. I know this from experience with the children of Israel. Return to your Lord and ask for a reduction." The Prophet went back and the prayers were reduced by ten. Musa sent him back again. This continued: fifty to forty, to thirty, to twenty, to ten, to five. Musa again urged him to return. The Prophet ﷺ replied: "I have returned to my Lord so many times that I am now ashamed. I am satisfied and I submit." A voice called out: "I have established My obligation and lightened it for My servants. The one who prays these five will be rewarded as if he prayed fifty, for with Me a good deed is multiplied tenfold."`,
    },
  ],
};

/* ── Wudu ─────────────────────────────────────────────────── */

const WUDU_STEPS = [
  { step: 1, action: 'Intention (Niyyah)',    desc: 'Make the intention in your heart to purify yourself for prayer. The Prophet ﷺ said: "Actions are by intentions." (Bukhari)' },
  { step: 2, action: 'Say Bismillah',         desc: 'Begin with "Bismillah". The Prophet ﷺ said: "There is no wudu for one who does not mention the name of Allah over it." (Abu Dawud, Tirmidhi)' },
  { step: 3, action: 'Wash both hands × 3',   desc: 'Wash both hands up to and including the wrists three times, interlacing the fingers to ensure water reaches between them.' },
  { step: 4, action: 'Rinse mouth × 3',       desc: 'Take water into the mouth, swirl it thoroughly, and spit it out three times.' },
  { step: 5, action: 'Clean nose × 3',        desc: 'Sniff water into the nostrils and blow it out three times, using the left hand to blow.' },
  { step: 6, action: 'Wash face × 3',         desc: 'Wash the entire face from the hairline to the chin and from ear to ear, three times.' },
  { step: 7, action: 'Wash arms × 3',         desc: 'Wash the right arm from fingertips to and including the elbow three times, then the left arm the same way.' },
  { step: 8, action: 'Wipe the head once',    desc: 'With wet hands, wipe the head from front to back and bring the hands back to the front (once). Then wipe inside and outside the ears with the index fingers and thumbs.' },
  { step: 9, action: 'Wash feet × 3',         desc: 'Wash the right foot up to and including the ankle three times, ensuring water reaches between the toes. Then the left foot. The Prophet ﷺ was strict that no part was left dry.' },
];

const WUDU_DUA = {
  arabic: 'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ ۝ اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ',
  transliteration: "Ashhadu alla ilaha illallahu wahdahu la sharika lahu wa ashhadu anna Muhammadan 'abduhu wa rasuluh. Allahumma aj'alni minat-tawwabina waj'alni minal-mutatahhirin.",
  meaning: 'I bear witness that there is no god but Allah alone, He has no partner, and I bear witness that Muhammad is His servant and messenger. O Allah, make me of those who repent and make me of those who purify themselves.',
  note: 'Muslim 234. The Prophet ﷺ said: "Whoever performs wudu well, then raises his gaze to the sky and says this: the eight gates of Paradise are opened for him to enter from whichever he wishes."',
};

/* ── Prayer Steps ─────────────────────────────────────────── */

const PRAYER_STEPS = [
  {
    step: 1,
    title: 'Facing the Qibla',
    arabicTitle: 'استقبال القبلة',
    description:
      "Stand facing the Qibla, the direction of the Ka'bah in Makkah. This is obligatory; deliberately facing the wrong direction invalidates the prayer. Stand upright, feet roughly shoulder-width apart, with full presence of heart (khushu'). Remove all distractions from your mind. You are about to stand before Allah, just as the Prophet ﷺ stood before Him during the Night Journey.",
    arabic: null, transliteration: null, meaning: null, extra: null,
  },
  {
    step: 2,
    title: 'Intention (Niyyah)',
    arabicTitle: 'النية',
    description:
      "Make the intention in your heart for the specific prayer you are about to perform. The intention does not need to be spoken aloud, though some scholars permit it. For example: 'I intend to pray two units of Fajr prayer for Allah.' The intention is a condition of every act of worship in Islam: it distinguishes worship from habit.",
    arabic: null, transliteration: null, meaning: null, extra: null,
  },
  {
    step: 3,
    title: 'Opening Takbir (Takbirat al-Ihram)',
    arabicTitle: 'تكبيرة الإحرام',
    description:
      "Raise both hands to the earlobes (men) or shoulders (women), palms forward, and say the opening takbir. This marks the formal beginning. Once said, all speech and movement outside of prayer is forbidden, hence 'Ihram' (entering the state of sanctity). Lower the hands and place the right hand over the left on the chest.",
    arabic: 'اللَّهُ أَكْبَرُ',
    transliteration: 'Allahu Akbar',
    meaning: 'Allah is greater (than everything in this world and in one\'s mind).',
    extra: null,
  },
  {
    step: 4,
    title: "Opening Supplication (Du'a al-Istiftah)",
    arabicTitle: 'دعاء الاستفتاح',
    description:
      "Recite the opening supplication silently. Two versions are reported from the Prophet ﷺ. The Subhanaka version is most widely practised. The Allahumma ba'id version is from Muslim 598 and the Prophet ﷺ used it in the night prayer. Both are valid:",
    arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ',
    transliteration: "Subhanakal-lahumma wa bihamdika wa tabarakas-muka wa ta'ala jadduka wa la ilaha ghairuk",
    meaning: 'Glory be to You, O Allah, and praise be to You. Blessed is Your name, exalted is Your majesty, and there is no god but You.',
    extra: {
      label: "Alternative opening supplication (Muslim 598):",
      arabic: 'اللَّهُمَّ بَاعِدْ بَيْنِي وَبَيْنَ خَطَايَايَ كَمَا بَاعَدْتَ بَيْنَ الْمَشْرِقِ وَالْمَغْرِبِ ۝ اللَّهُمَّ نَقِّنِي مِنْ خَطَايَايَ كَمَا يُنَقَّى الثَّوْبُ الْأَبْيَضُ مِنَ الدَّنَسِ ۝ اللَّهُمَّ اغْسِلْنِي مِنْ خَطَايَايَ بِالثَّلْجِ وَالْمَاءِ وَالْبَرَدِ',
      transliteration: "Allahumma ba'id bayni wa bayna khatayaya kama ba'adta baynal-mashriqi wal-maghrib. Allahumma naqqini min khatayaya kama yunaqqath-thawbul-abyadu minad-danas. Allahummaghsilni min khatayaya bith-thalji wal-ma'i wal-barad.",
      meaning: "O Allah, put distance between me and my sins as You have put distance between East and West. O Allah, cleanse me of my sins as a white garment is cleansed of filth. O Allah, wash away my sins with snow, water, and hail.",
    },
  },
  {
    step: 5,
    title: "Al-Fatiha and Additional Surah",
    arabicTitle: "قراءة الفاتحة وما تيسر من القرآن",
    description:
      "Recite A'udhu billahi mina-sh-shaytanir-rajim and Bismillah (both silently), then recite Surah al-Fatiha. This is a pillar of every unit: the prayer of one who does not recite it is invalid (Bukhari, Muslim). Say 'Amin' aloud in congregation or quietly alone. Then recite any surah from the Quran; the Prophet ﷺ always recited an additional surah in the first two units. Longer surahs in Fajr, shorter in other prayers. This additional surah is Sunnah Mu'akkadah.",
    arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
    transliteration: "Al-hamdu lillahi rabb il-'alamin. Ar-Rahmanir-Rahim. Maliki yawmid-din. Iyyaka na'budu wa iyyaka nasta'in. Ihdinas-siratal-mustaqim. Siratal-ladhina an'amta 'alayhim, ghayril-maghdubi 'alayhim wa lad-dallin.",
    meaning: "All praise is for Allah, Lord of all worlds. The Most Compassionate, the Most Merciful. Master of the Day of Judgement. You alone we worship and You alone we ask for help. Guide us along the straight path, the path of those You have blessed, not those You are displeased with, or those who are astray.",
    extra: null,
  },
  {
    step: 6,
    title: "Bowing (Ruku')",
    arabicTitle: "الركوع",
    description:
      "Raise the hands and say Allahu Akbar while bending. Place both hands firmly on the knees, fingers spread, back flat and level with the ground, the head neither drooping nor raised above the back. Hold this with complete stillness (tuma'ninah). The verse that initiated this dhikr: when 'Fasabbih bismi Rabbik al-Azim' (Quran 56:96) was revealed, the Prophet ﷺ said: 'Make it your ruku' dhikr.' Minimum: three times. Then the additional dhikr:",
    arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
    transliteration: "Subhana Rabbiy al-'Azim",
    meaning: "Glory be to my Lord, the Most Great.",
    extra: {
      label: "Additional dhikr the Prophet ﷺ recited in ruku' (Muslim 771, Abu Dawud 872):",
      arabic: 'سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ اللَّهُمَّ اغْفِرْ لِي ۝ سُبُّوحٌ قُدُّوسٌ رَبُّ الْمَلَائِكَةِ وَالرُّوحِ ۝ اللَّهُمَّ لَكَ رَكَعْتُ وَبِكَ آمَنْتُ وَلَكَ أَسْلَمْتُ خَشَعَ لَكَ سَمْعِي وَبَصَرِي وَمُخِّي وَعَظْمِي وَعَصَبِي',
      transliteration: "Subhanakal-lahumma Rabbana wa bihamdika Allahummaghfir li. | Subbuhun Quddusun Rabbul-mala'ikati war-ruh. | Allahumma laka raka'tu wa bika amantu wa laka aslamtu, khasha'a laka sam'i wa basari wa mukhkhi wa 'azmi wa 'asabi.",
      meaning: "Glory be to You, O Allah our Lord, and praise be to You. O Allah, forgive me. | Most Glorified, Most Holy, Lord of the angels and the Spirit (Jibril). | O Allah, for You I have bowed, in You I believe, and to You I have submitted. My hearing, my sight, my mind, my bones, and my sinews are all humbled before You.",
    },
  },
  {
    step: 7,
    title: "Rising from Ruku'",
    arabicTitle: "الرفع من الركوع",
    description:
      "Rise from bowing, raising the hands to the earlobes while saying Sami'allahu liman hamidah. Stand fully upright; this i'tidal position is a pillar of prayer and must be held with complete stillness before descending. A companion once added words to the tahmid; the Prophet ﷺ said afterwards: 'I saw thirty-odd angels racing to be the first to record it.' This is why these words are especially blessed:",
    arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ ۝ رَبَّنَا وَلَكَ الْحَمْدُ حَمْدًا كَثِيرًا طَيِّبًا مُبَارَكًا فِيهِ',
    transliteration: "Sami'allahu liman hamidah. Rabbana wa lakal-hamd, hamdan kathiran tayyiban mubarakan fih.",
    meaning: "Allah hears whoever praises Him. Our Lord, all praise is Yours, abundant, pure and blessed praise.",
    extra: {
      label: "Longer completion (Bukhari 799, the companion's addition that the Prophet approved):",
      arabic: 'مِلْءَ السَّمَوَاتِ وَمِلْءَ الْأَرْضِ وَمِلْءَ مَا شِئْتَ مِنْ شَيْءٍ بَعْدُ',
      transliteration: "Mil'as-samawati wa mil'al-ard wa mil'a ma shi'ta min shay'in ba'd.",
      meaning: "Filling the heavens and the earth, and whatever You will beyond that.",
    },
  },
  {
    step: 8,
    title: 'First Prostration (Sujud)',
    arabicTitle: "السجود",
    description:
      "Descend to the ground with Allahu Akbar. Seven parts must touch the ground: the forehead including the nose, both palms, both knees, and the bottoms of both feet. The forehead must be unobstructed. The Prophet ﷺ said: 'The nearest a servant is to his Lord is when he is in prostration, so make much supplication.' (Muslim 482). The verse that initiated this dhikr: when 'Sabbih isma Rabbika al-A'la' (Quran 87:1) was revealed, the Prophet ﷺ said: 'Make it your sujud dhikr.' Minimum: three times. Then the additional dhikr:",
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
    transliteration: "Subhana Rabbiy al-A'la",
    meaning: "Glory be to my Lord, the Most High.",
    extra: {
      label: "Additional dhikr the Prophet ﷺ recited in sujud (Muslim 771, Muslim 486, Abu Dawud):",
      arabic: 'سُبْحَانَكَ اللَّهُمَّ رَبَّنَا وَبِحَمْدِكَ اللَّهُمَّ اغْفِرْ لِي ۝ اللَّهُمَّ لَكَ سَجَدْتُ وَبِكَ آمَنْتُ وَلَكَ أَسْلَمْتُ سَجَدَ وَجْهِي لِلَّذِي خَلَقَهُ وَصَوَّرَهُ وَشَقَّ سَمْعَهُ وَبَصَرَهُ تَبَارَكَ اللَّهُ أَحْسَنُ الْخَالِقِينَ ۝ اللَّهُمَّ اغْفِرْ لِي ذَنْبِي كُلَّهُ دِقَّهُ وَجِلَّهُ وَأَوَّلَهُ وَآخِرَهُ وَعَلَانِيَتَهُ وَسِرَّهُ ۝ اللَّهُمَّ إِنِّي أَعُوذُ بِرِضَاكَ مِنْ سَخَطِكَ وَبِمُعَافَاتِكَ مِنْ عُقُوبَتِكَ وَأَعُوذُ بِكَ مِنْكَ لَا أُحْصِي ثَنَاءً عَلَيْكَ أَنْتَ كَمَا أَثْنَيْتَ عَلَى نَفْسِكَ',
      transliteration: "Subhanakal-lahumma Rabbana wa bihamdika Allahummaghfir li. | Allahumma laka sajadtu wa bika amantu wa laka aslamtu, sajada wajhi lillathi khalaqahu wa sawwarahu wa shaqqa sam'ahu wa basarahu, tabarakallahu ahsanul-khaliqin. | Allahummaghfir li dhanbi kullahu diqqahu wa jillahu wa awwalahu wa akhirahu wa 'alaniyatahu wa sirrahu. | Allahumma inni a'udhu biridaka min sakhatika wa bimu'afatika min 'uqubatika wa a'udhu bika minka la uhsi thana'an 'alayka anta kama athnayta 'ala nafsik.",
      meaning: "Glory be to You, O Allah our Lord, and praise be to You. O Allah, forgive me. | O Allah, for You I have prostrated, in You I believe, and to You I have submitted. My face has prostrated to the One who created it and shaped it and split open its hearing and sight; blessed is Allah, the best of creators. | O Allah, forgive me all of my sins, the small and the great, the first and the last, the public and the secret. | O Allah, I seek refuge in Your pleasure from Your anger, in Your pardon from Your punishment. I seek refuge in You from You. I cannot enumerate Your praise; You are as You have praised Yourself. (The Prophet ﷺ said: 'Make much of this in your prostrations.' Muslim 486)",
    },
  },
  {
    step: 9,
    title: 'Sitting Between the Two Prostrations',
    arabicTitle: "الجلسة بين السجدتين",
    description:
      "Rise with Allahu Akbar and sit briefly between the two prostrations. This sitting is a pillar of prayer and must be still. Ibn Abbas (ra) narrated the full du'a the Prophet ﷺ said here: it covers seven comprehensive blessings that every human needs:",
    arabic: 'رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاجْبُرْنِي وَارْفَعْنِي وَارْزُقْنِي وَاهْدِنِي وَعَافِنِي وَاعْفُ عَنِّي',
    transliteration: "Rabbighfir li, warhamni, wajburni, warfa'ni, warzuqni, wahdini, wa'afini, wa'fu 'anni.",
    meaning: "My Lord, forgive me; have mercy on me; strengthen me (repair my affairs); raise me in rank; provide for me; guide me; grant me wellbeing; and pardon me.",
    extra: null,
  },
  {
    step: 10,
    title: 'Second Prostration',
    arabicTitle: "السجود الثاني",
    description:
      "Perform the second prostration exactly as the first with all the same dhikr. After this, rise for the next unit (in units one and three) with Allahu Akbar, or remain seated for Tashahhud (after the second and fourth units).",
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
    transliteration: "Subhana Rabbiy al-A'la",
    meaning: "Glory be to my Lord, the Most High.",
    extra: null,
  },
  {
    step: 11,
    title: 'Tashahhud: The Testimony of Faith in Prayer',
    arabicTitle: "التشهد",
    description:
      "Recite the Tashahhud in the sitting after the second unit and in the final sitting. Point the right index finger toward the Qibla from the beginning of the Tashahhud until the end. When you reach the testimony (Ashhadu...), move the finger slightly. The story of the Tashahhud: Ibn Mas'ud (ra) said the companions used to say various greetings in prayer until the Prophet ﷺ taught them this fixed wording, saying: 'Say instead...' It contains the essence of the meeting between the servant and his Lord.",
    arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ ۝ السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ ۝ السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ ۝ أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    transliteration: "At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahis-salihin. Ashhadu alla ilaha illallahu wa ashhadu anna Muhammadan 'abduhu wa rasuluh.",
    meaning: "All verbal greetings, all prayers, and all pure words belong to Allah. Peace be upon you, O Prophet, and the mercy and blessings of Allah. Peace be upon us and upon all the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and messenger.",
    extra: null,
  },
  {
    step: 12,
    title: "Salawat on the Prophet ﷺ (Al-Salat al-Ibrahimiyyah)",
    arabicTitle: "الصلاة الإبراهيمية",
    description:
      "After the Tashahhud in the final sitting, recite the Ibrahimiyyah. When the companions asked the Prophet ﷺ how to send blessings upon him, he taught them this exact wording: it links his name with Ibrahim (as), the patriarch of monotheism, because Ibrahim was already known to Allah's mercy. It is called Ibrahimiyyah because it uses Ibrahim as a benchmark of accepted blessings:",
    arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ ۝ اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
    transliteration: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid. Allahumma barik 'ala Muhammadin wa 'ala ali Muhammad, kama barakta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid.",
    meaning: "O Allah, send Your mercy upon Muhammad and upon the family of Muhammad, as You sent Your mercy upon Ibrahim and upon the family of Ibrahim; You are Praiseworthy, Glorious. O Allah, send Your blessings upon Muhammad and upon the family of Muhammad, as You sent Your blessings upon Ibrahim and upon the family of Ibrahim; You are Praiseworthy, Glorious.",
    extra: null,
  },
  {
    step: 13,
    title: "Final Du'a Before Taslim: Seeking Refuge from Four Things",
    arabicTitle: "الدعاء قبل التسليم",
    description:
      "Before ending the prayer, the Prophet ﷺ commanded Muslims to seek refuge from four things. He said: 'When one of you completes the Tashahhud, let him seek refuge with Allah from four things.' (Bukhari, Muslim). After this, you may make any personal du'a you wish; the final sitting is one of the best moments for supplication:",
    arabic: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ الْقَبْرِ وَمِنْ عَذَابِ النَّارِ وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَمِنْ شَرِّ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
    transliteration: "Allahumma inni a'udhu bika min 'adhabil-qabr, wa min 'adhabi-nar, wa min fitnati mahya wal-mamat, wa min sharri fitnatil-masihid-dajjal.",
    meaning: "O Allah, I seek refuge in You from the punishment of the grave, from the punishment of the Fire, from the trials of life and death, and from the evil of the trial of the False Messiah (al-Dajjal).",
    extra: null,
  },
  {
    step: 14,
    title: 'The Closing Salutation (Taslim)',
    arabicTitle: "التسليم",
    description:
      "Turn the head to the right and say the salutation, then to the left and repeat it. This formally concludes the prayer. You have stood before Allah, bowed to Him, and prostrated to Him.",
    arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
    transliteration: "As-salamu 'alaykum wa rahmatullah",
    meaning: "Peace be upon you and the mercy of Allah.",
    extra: null,
  },
];

const PRAYER_TIMES = [
  { name: 'Fajr',    arabicName: 'الفجر',  time: 'Dawn, before sunrise',                       units: 2 },
  { name: 'Dhuhr',   arabicName: 'الظهر',  time: 'After midday, when the sun declines',         units: 4 },
  { name: 'Asr',     arabicName: 'العصر',  time: 'Afternoon, before sunset',                    units: 4 },
  { name: 'Maghrib', arabicName: 'المغرب', time: 'After sunset',                                units: 3 },
  { name: "Isha'",   arabicName: 'العشاء', time: 'Night, after twilight disappears',            units: 4 },
];

const AFTER_PRAYER_ADHKAR = [
  {
    title: 'Seeking Forgiveness, then Greeting the Lord of Peace',
    source: 'Muslim 591',
    arabic: 'أَسْتَغْفِرُ اللَّهَ ۞ أَسْتَغْفِرُ اللَّهَ ۞ أَسْتَغْفِرُ اللَّهَ ۝ اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ تَبَارَكْتَ ذَا الْجَلَالِ وَالْإِكْرَامِ',
    transliteration: "Astaghfirullah (x3). Allahumma antas-salam wa minkas-salam, tabarakta dhal-jalali wal-ikram.",
    meaning: "I seek Allah's forgiveness (three times). O Allah, You are Peace and from You comes peace. Blessed are You, Possessor of Glory and Honour.",
    note: "The Prophet ﷺ said this immediately after giving the taslim, then turned to face his companions. We begin by asking forgiveness because even in our prayer we may have fallen short in our focus and presence.",
  },
  {
    title: 'Tahlil: Declaring the Oneness of Allah',
    source: 'Muslim 592',
    arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir.",
    meaning: "There is no god but Allah alone, He has no partner. His is the dominion and His is all praise, and He has power over all things.",
    note: null,
  },
  {
    title: 'Ayat al-Kursi: The Verse of the Throne',
    source: "Al-Nasa'i 9928, authenticated by al-Albani",
    arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ',
    transliteration: "Allahu la ilaha illa huwal-hayyul-qayyum, la ta'khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa'u 'indahu illa bi-idhnih, ya'lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bishay'im-min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifzuhuma wa huwal-'aliyyul-'azim.",
    meaning: "Allah, there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who could intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Throne extends over the heavens and the earth, and their preservation does not tire Him. He is the Most High, the Most Great.",
    note: "Quran 2:255. The Prophet ﷺ said: 'Whoever recites Ayat al-Kursi after every obligatory prayer, nothing stands between him and his entering Paradise except death.' (Narrated by Abu Umamah (ra); authenticated by al-Albani.) It is the greatest verse in the Quran.",
  },
  {
    title: 'Tasbih, Tahmid, Takbir: 99 Counts Completed with Tahlil',
    source: 'Muslim 597',
    arabic: 'سُبْحَانَ اللَّهِ ۞ الْحَمْدُ لِلَّهِ ۞ اللَّهُ أَكْبَرُ ۝ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration: "Subhanallah (x33). Alhamdulillah (x33). Allahu Akbar (x33). La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir.",
    meaning: "Glory be to Allah (33 times). All praise is to Allah (33 times). Allah is the Greatest (33 times). [Then:] There is no god but Allah alone, He has no partner; His is the dominion and all praise belongs to Him, and He has power over all things.",
    note: "The Prophet ﷺ said: 'Whoever says this after every prayer, his sins are forgiven even if they were as abundant as the foam of the sea.' (Muslim). The story behind the 33+33+33: Fatimah (ra) came to the Prophet ﷺ asking for a servant because her hands were sore from grinding. He said: 'Shall I not tell you what is better than what you asked for? When you go to bed, say Subhanallah 33 times, Alhamdulillah 33 times, and Allahu Akbar 34 times; that is better for you than a servant.' This dhikr then became part of the post-prayer tradition.",
  },
  {
    title: 'After Fajr and Maghrib: Additional 10 Times',
    source: 'Tirmidhi 3474, classed as Sahih',
    arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
    transliteration: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, yuhyi wa yumit, wa huwa 'ala kulli shay'in qadir.",
    meaning: "There is no god but Allah alone, He has no partner; His is the dominion and all praise belongs to Him. He gives life and causes death, and He has power over all things.",
    note: "Recite 10 times after Fajr and 10 times after Maghrib. The Prophet ﷺ said: 'Whoever says this ten times after Fajr and Maghrib: ten good deeds are written for him, ten sins are erased, he is raised ten ranks, is protected from every evil throughout his day and night, and no one comes on the Day of Resurrection with better deeds except one who said more.'",
  },
];

export default function PrayerPage() {
  return (
    <>
      <PageHeader
        title="How to Pray (Salah)"
        arabicTitle="الصلاة"
        subtitle="Salah is the second pillar of Islam: a direct link between the servant and his Lord, ordained by Allah Himself without any intermediary, during the greatest journey in human history."
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* ── How Prayer Was Ordained ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            How Prayer Was Ordained: The Night Journey
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            الإسراء والمعراج
          </p>
          <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5 mb-6">
            <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-1">Year</p>
            <p className="text-forest/80 text-sm font-semibold mb-3">{ISRA_MIRAJ.year}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{ISRA_MIRAJ.background}</p>
          </div>
          <div className="space-y-4">
            {ISRA_MIRAJ.events.map((event, i) => (
              <article key={i} className="card-islamic">
                <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{event.title}</h3>
                <p className="text-forest/70 text-sm leading-relaxed">{event.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 bg-gold/10 border border-gold/30 rounded-xl p-5 text-center">
            <p dir="rtl" lang="ar" className="arabic text-forest mb-3">
              فَرَجَعَ إِلَيْهِ حَتَّى حَطَّهَا إِلَى خَمْسِ صَلَوَاتٍ
            </p>
            <p className="text-forest/70 text-sm italic">
              {`"And so the number was reduced until it came to five prayers. A voice called out: 'I have established My obligation and lightened it for My servants. The one who prays these five will be rewarded as one who prayed fifty.'"`}
            </p>
            <p className="text-xs text-gold/60 mt-1">Bukhari 349, Muslim 162</p>
          </div>
        </section>

        {/* ── Wudu ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Ritual Purification (Wudu) Before Prayer
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            الوضوء
          </p>
          <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
            <p className="text-forest/70 text-sm leading-relaxed">
              Wudu is obligatory before prayer. Jibril (as) first taught it to the Prophet ﷺ at the very beginning of revelation. Allah says: <span className="italic">&ldquo;O you who believe, when you rise to perform prayer, wash your faces and your hands to the elbows, wipe over your heads, and wash your feet to the ankles.&rdquo;</span> (Quran 5:6). The Prophet ﷺ said: <span className="italic">&ldquo;No prayer is accepted without purity.&rdquo;</span> (Muslim 224)
            </p>
          </div>
          <div className="space-y-3 mb-6">
            {WUDU_STEPS.map(step => (
              <div key={step.step} className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40 mt-0.5">
                  <span className="text-forest font-semibold text-xs">{step.step}</span>
                </div>
                <div>
                  <p className="font-medium text-forest text-sm">{step.action}</p>
                  <p className="text-forest/60 text-xs leading-relaxed mt-0.5">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="card-islamic">
            <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-3">
              {"Du'a After Wudu (Muslim 234)"}
            </p>
            <ArabicText text={WUDU_DUA.arabic} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">Transliteration</p>
              <p className="text-forest/60 italic text-sm">{WUDU_DUA.transliteration}</p>
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">Meaning</p>
              <p className="text-forest/70 text-sm">{WUDU_DUA.meaning}</p>
              <p className="text-xs text-gold/50 italic mt-2 leading-relaxed">{WUDU_DUA.note}</p>
            </div>
          </div>
        </section>

        {/* ── Five Daily Prayers ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-6">
            The Five Daily Prayers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PRAYER_TIMES.map(prayer => (
              <div key={prayer.name} className="card-islamic text-center">
                <p dir="rtl" lang="ar" className="arabic text-gold mb-1" aria-hidden="true">
                  {prayer.arabicName}
                </p>
                <h3 className="font-garamond text-lg font-semibold text-forest">{prayer.name}</h3>
                <p className="text-forest/50 text-xs mt-1 mb-2">{prayer.time}</p>
                <span className="badge-gold text-xs">{prayer.units} units</span>
              </div>
            ))}
          </div>
          <p className="text-forest/50 text-xs mt-4 text-center">
            Each unit (rak&apos;ah) contains al-Fatihah, ruku&apos;, two sujuds, and a sitting between them.
          </p>
        </section>

        {/* ── Steps of Prayer ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Steps of the Prayer
          </h2>
          <p className="text-forest/60 text-sm mb-8">
            The required dhikr (minimum) is shown first in each step. Authentic additional dhikr that the Prophet ﷺ recited is shown in the gold box: these are extra, not obligatory, but greatly increase the reward.
          </p>
          <div className="space-y-6">
            {PRAYER_STEPS.map(step => (
              <article key={step.step} className="card-islamic flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center flex-shrink-0 ring-2 ring-gold/30">
                    <span className="text-gold font-semibold text-sm">{step.step}</span>
                  </div>
                  <div>
                    <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-0.5" aria-hidden="true">
                      {step.arabicTitle}
                    </p>
                    <h3 className="font-garamond text-xl font-semibold text-forest">{step.title}</h3>
                  </div>
                </div>
                <p className="text-forest/70 text-sm leading-relaxed">{step.description}</p>
                {step.arabic && (
                  <div className="bg-forest/5 rounded-xl p-4 space-y-3">
                    <ArabicText text={step.arabic} size="md" />
                    <div className="border-t border-gold/10 pt-3 space-y-2">
                      <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">Transliteration</p>
                      <p className="text-forest/60 italic text-sm">{step.transliteration}</p>
                      <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">Meaning</p>
                      <p className="text-forest/70 text-sm">{step.meaning}</p>
                    </div>
                  </div>
                )}
                {step.extra && (
                  <div className="bg-gold/10 border border-gold/25 rounded-xl p-4 space-y-3">
                    <p className="text-xs text-gold/80 font-semibold uppercase tracking-wider">{step.extra.label}</p>
                    <ArabicText text={step.extra.arabic} size="sm" />
                    <div className="border-t border-gold/15 pt-3 space-y-2">
                      <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">Transliteration</p>
                      <p className="text-forest/55 italic text-xs leading-relaxed">{step.extra.transliteration}</p>
                      <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">Meaning</p>
                      <p className="text-forest/65 text-xs leading-relaxed">{step.extra.meaning}</p>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        {/* ── After-Prayer Adhkar ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            After-Prayer Remembrances (Adhkar al-Salah)
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            أذكار ما بعد الصلاة
          </p>
          <p className="text-forest/60 text-sm mb-6">
            The Prophet ﷺ described the post-prayer period as one of the finest opportunities for remembrance. Perform these immediately after every prayer, in order.
          </p>
          <div className="space-y-5">
            {AFTER_PRAYER_ADHKAR.map((dhikr, i) => (
              <article key={i} className="card-islamic">
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <h3 className="font-garamond text-lg font-semibold text-forest">{dhikr.title}</h3>
                  <span className="badge-gold text-xs flex-shrink-0">{dhikr.source}</span>
                </div>
                <ArabicText text={dhikr.arabic} size="md" />
                <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
                  <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">Transliteration</p>
                  <p className="text-forest/60 italic text-sm">{dhikr.transliteration}</p>
                  <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">Meaning</p>
                  <p className="text-forest/70 text-sm">{dhikr.meaning}</p>
                  {dhikr.note && (
                    <p className="text-xs text-gold/55 italic mt-2 leading-relaxed">{dhikr.note}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Sunnah Prayers ── */}
        <section className="card-islamic bg-forest/5">
          <h2 className="font-garamond text-xl font-semibold text-forest mb-3">
            Voluntary (Sunnah) Prayers
          </h2>
          <p className="text-forest/70 text-sm leading-relaxed mb-4">
            In addition to the five obligatory prayers, the Prophet ﷺ regularly prayed voluntary units called Sunnah Rawatib. These are strongly recommended (Sunnah Mu&apos;akkadah):
          </p>
          <ul className="space-y-2 text-sm text-forest/70">
            {[
              { name: "Fajr Sunnah", desc: "2 units before Fajr. The Prophet ﷺ said: 'The two rak'ahs of Fajr are better than this world and everything in it.' (Muslim)" },
              { name: "Dhuhr Sunnah", desc: "4 units before + 2 units after Dhuhr" },
              { name: "Maghrib Sunnah", desc: "2 units after Maghrib" },
              { name: "Isha Sunnah", desc: "2 units after Isha" },
              { name: "Witr (Tahajjud)", desc: "Minimum 1 unit, maximum 11 units, prayed after Isha and before Fajr. The Prophet ﷺ never abandoned this even when travelling." },
            ].map(item => (
              <li key={item.name} className="flex gap-2">
                <span className="text-gold font-semibold flex-shrink-0">{item.name}:</span>
                <span>{item.desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-forest/50 text-xs mt-4 italic">
            {`"Whoever prays twelve voluntary rak'ahs in a day, Allah will build for him a house in Paradise." (Muslim 728)`}
          </p>
        </section>
      </div>
    </>
  );
}
