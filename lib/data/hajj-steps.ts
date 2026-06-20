export interface PilgrimageStep {
  id: string;
  stepNumber: number;
  title: string;
  arabicTitle: string;
  phase: 'preparation' | 'makkah-arrival' | 'mina' | 'arafah' | 'muzdalifah' | 'mina-eid' | 'completion';
  day?: string;
  location: string;
  description: string;
  requirements: string[];
  commonMistakes?: string[];
  wisdom: string;
  duas?: string[];
}

export const HAJJ_STEPS: PilgrimageStep[] = [
  {
    id: 'hajj-ihram',
    stepNumber: 1,
    title: 'Entering the State of Ihram',
    arabicTitle: 'الإحرام',
    phase: 'preparation',
    day: '8th Dhul Hijjah (Yawm al-Tarwiyah)',
    location: 'At the designated Miqat (boundary point)',
    description:
      "Ihram is the sacred state one must enter before performing Hajj or Umrah. It involves wearing specific clothing and making the intention (niyyah). For men, this consists of two white, unstitched pieces of cloth: the izar (lower garment) and the rida' (upper garment). Women wear their normal modest clothing, leaving the face and hands uncovered. The pilgrim performs a ritual bath (ghusl), applies scent before donning the Ihram garments (this is the last time scent may be used), prays two units of prayer, and then makes the intention for Hajj whilst reciting the Talbiyah: 'Labbayk Allahumma labbayk...'",
    requirements: [
      "Take a ritual bath (ghusl) or, at minimum, make wudu",
      "Men put on the two white unstitched cloths (izar and rida')",
      "Women wear their normal Islamic attire; face veil and gloves are not worn in Ihram",
      "Apply perfume before wearing the Ihram garments (men only; not on the garments themselves)",
      "Pray two units of voluntary prayer (if possible)",
      "Make the intention (niyyah) for Hajj",
      "Recite the Talbiyah loudly (men) or quietly (women): 'Labbayk Allahumma labbayk...'",
      "Enter the state of Ihram at or before the designated Miqat point",
    ],
    commonMistakes: [
      "Passing the Miqat without entering Ihram (incurs a penalty: dam, the slaughter of a sheep)",
      "Applying perfume to the Ihram garments themselves",
      "Covering the head (men) or removing the Ihram intentionally without excuse",
    ],
    wisdom:
      "Ihram is a profound equaliser. The white garments remind every pilgrim of the shroud of death: all people stand before Allah equal, regardless of wealth, status, race, or nationality. The restrictions of Ihram teach self-control and detachment from worldly pleasures. The Talbiyah is the pilgrim's enthusiastic answer to the original call made by Ibrahim some 4,000 years ago.",
    duas: ['Labbayk Allahumma labbayk, labbayk la sharika laka labbayk...'],
  },
  {
    id: 'hajj-arrival-makkah',
    stepNumber: 2,
    title: 'Arriving in Makkah and Performing Tawaf al-Qudum',
    arabicTitle: "دخول مكة والطواف بالبيت",
    phase: 'makkah-arrival',
    day: '8th Dhul Hijjah',
    location: "Al-Masjid al-Haram, Makkah",
    description:
      "Upon arriving in Makkah, the pilgrim proceeds to al-Masjid al-Haram and performs Tawaf al-Qudum (the Arrival Tawaf). This is a Sunnah (recommended act) for those performing Ifrad or Qiran Hajj. The pilgrim circles the Ka'bah seven times in an anti-clockwise direction, beginning and ending at the Black Stone (al-Hajar al-Aswad), keeping the Ka'bah on the left. Upon entering the mosque, one enters with the right foot first, reciting the prescribed supplication. On reaching the Black Stone, one faces it, touches it if possible, kisses it if able, or simply points towards it and says 'Allahu Akbar'. The Tawaf should be performed with full concentration, remembrance of Allah, and supplication.",
    requirements: [
      "Be in a state of ritual purity (wudu)",
      "Begin at the Black Stone (al-Hajar al-Aswad)",
      "Circle the Ka'bah seven times, keeping it to one's left",
      "Men: perform raml (quick, short steps) in the first three circuits, if possible",
      "Men: perform idhtiba' (bare the right shoulder by draping the rida' under the right arm) during Tawaf",
      "After completing seven circuits, pray two units of prayer behind Maqam Ibrahim if possible",
      "Drink Zamzam water",
    ],
    commonMistakes: [
      "Beginning from a point other than the Black Stone",
      "Circling clockwise (must be anti-clockwise)",
      "Performing Tawaf without wudu",
      "Kissing or touching the Yemeni Corner as one would the Black Stone (one only touches the Yemeni Corner; one does not kiss or raise the hand towards it)",
    ],
    wisdom:
      "Tawaf is an act of worship unique to Islam. Circling the Ka'bah represents the believer's life orbiting around Allah: the believer's every act, breath, and thought should be in remembrance and service of the Creator. The Ka'bah itself is not worshipped; it is the direction towards which all Muslims face, a symbol of unity and the house of Allah.",
    duas: ['Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhab an-nar'],
  },
  {
    id: 'hajj-sai-qudum',
    stepNumber: 3,
    title: "Sa'i between Safa and Marwa",
    arabicTitle: "السعي بين الصفا والمروة",
    phase: 'makkah-arrival',
    day: '8th Dhul Hijjah',
    location: "Al-Mas'a, the walkway between Safa and Marwa",
    description:
      "After Tawaf al-Qudum, the pilgrim performs Sa'i: walking seven times between the hills of Safa and Marwa. This act commemorates the urgent search of Hajar (Hagar), the wife of Ibrahim, for water for her infant son Ismail in the barren valley. Allah answered her desperate effort by causing the Zamzam spring to gush from the ground. The pilgrim ascends Safa first, faces the Ka'bah, and makes supplication. Then one walks (and men jog between the two green markers) to Marwa, ascending it and making supplication, then returns to Safa. This completes one circuit; seven circuits are completed ending at Marwa.",
    requirements: [
      "Wudu is recommended but not obligatory for Sa'i",
      "Begin at Safa and end at Marwa",
      "Complete seven trips (Safa to Marwa = 1, Marwa to Safa = 2, and so on)",
      "Men jog between the green fluorescent lights in the middle section of the walkway",
      "Supplications and remembrance of Allah throughout",
    ],
    commonMistakes: [
      "Beginning at Marwa instead of Safa",
      "Counting one round trip (Safa to Marwa and back) as two circuits instead of one",
      "Not making supplication at the top of Safa and Marwa",
    ],
    wisdom:
      "Sa'i teaches that striving and effort combined with complete trust in Allah is the path of the believer. Hajar did not despair; she ran back and forth seven times. Her effort was an expression of her trust that Allah would not abandon her. Zamzam water, springing from below the feet of a helpless infant, is the divine response to sincere effort and tawakkul (trust in Allah).",
    duas: ['Innas-Safa wal-Marwata min sha\'a\'irillah...'],
  },
  {
    id: 'hajj-mina-8',
    stepNumber: 4,
    title: 'Day of Tarwiyah: Going to Mina',
    arabicTitle: 'يوم التروية: الذهاب إلى منى',
    phase: 'mina',
    day: '8th Dhul Hijjah (Yawm al-Tarwiyah)',
    location: 'Mina, approximately 5 km from Makkah',
    description:
      "On the 8th Dhul Hijjah, after Fajr prayer, the pilgrim departs for Mina. This is a Sunnah act and marks the beginning of the Hajj rituals proper. The pilgrim spends the day and night in Mina, praying Dhuhr, Asr, Maghrib, Isha, and Fajr there (shortening the four-unit prayers to two units each but not combining them). Mina is a plain surrounded by mountains where millions of pilgrims camp together. This day is called 'Yawm al-Tarwiyah' (Day of Provision), traditionally named because pilgrims would fill water here before the journey to Arafah.",
    requirements: [
      "Depart for Mina after Fajr prayer on the 8th",
      "Pray five prayers in Mina (Dhuhr, Asr, Maghrib, Isha on the 8th; Fajr on the 9th)",
      "Shorten the four-unit prayers (Dhuhr, Asr, Isha) to two units each",
      "Stay overnight in Mina",
      "Continue reciting the Talbiyah",
    ],
    commonMistakes: [
      "Combining prayers in Mina (one shortens but does not combine)",
      "Leaving Mina before Fajr on the 9th without a valid excuse",
    ],
    wisdom:
      "The night in Mina before the great day of Arafah provides time for reflection, spiritual preparation, and supplication. Being together with millions of fellow pilgrims in this humble encampment gives a foretaste of the Day of Judgement, when all of humanity will gather before their Lord.",
    duas: ['Labbayk Allahumma labbayk...'],
  },
  {
    id: 'hajj-arafah',
    stepNumber: 5,
    title: 'THE GREAT PILLAR: The Day of Arafah',
    arabicTitle: "الركن الأعظم: يوم عرفة",
    phase: 'arafah',
    day: '9th Dhul Hijjah (Yawm al-Arafah)',
    location: 'The plain of Arafah, 20 km from Makkah',
    description:
      "Standing at Arafah (Wuquf bi-Arafah) is THE essential pillar of Hajj. The Prophet ﷺ declared: 'Hajj IS Arafah.' Anyone who misses this stand has missed Hajj entirely. After Fajr on the 9th, the pilgrims travel from Mina to Arafah. At Arafah, after midday, the imam delivers two khutbas (sermons), followed by Dhuhr and Asr prayers combined and shortened (two units each, prayed back to back at the time of Dhuhr). The pilgrim must be within the boundaries of Arafah from midday until after sunset. This time is spent in intense supplication, remembrance of Allah (dhikr), weeping, seeking forgiveness, and calling upon Allah. The Prophet ﷺ said: 'The best supplication is the supplication of the Day of Arafah.'",
    requirements: [
      "Arrive at Arafah before sunset on the 9th",
      "Be within the actual boundaries of Arafah (marked clearly; the mosque of Namirah is partly inside and partly outside)",
      "Stand (or be present) at Arafah from after midday (zawal) until after sunset",
      "Combine and shorten Dhuhr and Asr prayers (prayed at Dhuhr time)",
      "Face the qibla (direction of Makkah)",
      "Engage intensively in supplication, dhikr, recitation of the Quran, and seeking forgiveness",
      "Depart only after sunset (not before)",
    ],
    commonMistakes: [
      "Leaving Arafah before sunset (this invalidates the Hajj unless one returns before sunset)",
      "Spending the time idly or on mobile devices rather than in supplication and remembrance",
      "Standing at the Mountain of Mercy (Jabal al-Rahmah) only, believing it to be more blessed - the entire plain is Arafah",
    ],
    wisdom:
      "The Day of Arafah is the greatest day of the Islamic year. It is the day when sins are most comprehensively forgiven, when Allah's mercy descends, and when He boasts of His servants to the angels. The gathering at Arafah is the greatest earthly rehearsal of the Day of Judgement. Millions standing together, equal before their Lord, stripped of all worldly distinctions, calling upon Allah alone - this is the essence of Hajj. It was on the Day of Arafah that Allah completed His religion: 'This day I have perfected for you your religion and completed My favour upon you.' (Surah al-Ma'idah 5:3)",
    duas: [
      "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir (best supplication of this day, to be repeated abundantly)",
      "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhab an-nar",
    ],
  },
  {
    id: 'hajj-muzdalifah',
    stepNumber: 6,
    title: 'Night at Muzdalifah',
    arabicTitle: 'المبيت بمزدلفة',
    phase: 'muzdalifah',
    day: 'Night between 9th and 10th Dhul Hijjah',
    location: 'Muzdalifah, between Arafah and Mina',
    description:
      "After sunset on the 9th Dhul Hijjah, pilgrims depart from Arafah for Muzdalifah. Upon arriving at Muzdalifah, the pilgrim prays Maghrib and Isha combined (Isha shortened to two units) at the time of Isha. The pilgrim then sleeps in the open air under the night sky. Shortly before Fajr, the pilgrim prays Fajr and then engages in supplication until sunrise. Pebbles for the stoning of the Jamarat (pillars) are collected here: a total of 49 pebbles for those who stay only two days in Mina, or 70 if staying three days. The pebbles should be small (approximately the size of a chickpea). Elderly, infirm, and women with children may depart Muzdalifah after midnight.",
    requirements: [
      "Arrive at Muzdalifah and pray Maghrib and Isha combined at the time of Isha",
      "Spend the night in Muzdalifah (this is obligatory; leaving too early incurs a penalty for most scholars)",
      "Pray Fajr in Muzdalifah and supplicate until before sunrise",
      "Collect pebbles (minimum 7 for the 10th, with 42 or more collected in total for subsequent days)",
      "Depart for Mina after sunrise, or for the weak and vulnerable, after midnight",
    ],
    commonMistakes: [
      "Departing Muzdalifah before midnight without a valid excuse",
      "Collecting pebbles from the Jamarat area (not permitted; collect from elsewhere)",
    ],
    wisdom:
      "After the intense spirituality of Arafah, the night in Muzdalifah under the open sky is a moment of profound simplicity: sleeping on the earth, under the stars, without a roof, in complete submission. It is a reminder of man's fundamental nature: created from the earth and returning to it.",
    duas: ['Abundance of dhikr, especially tasbih, tahmid, takbir, and tahlil'],
  },
  {
    id: 'hajj-stoning-10',
    stepNumber: 7,
    title: "Eid al-Adha: The Stoning of Jamarat al-Aqabah",
    arabicTitle: "رمي جمرة العقبة الكبرى",
    phase: 'mina-eid',
    day: '10th Dhul Hijjah (Yawm al-Nahr - Eid al-Adha)',
    location: "Mina: the Jamarat Bridge",
    description:
      "After Fajr prayer and supplications at Muzdalifah, the pilgrim proceeds to Mina. The first obligatory act on this day is the stoning of the Jamarat al-Aqabah (the largest pillar). Seven pebbles are thrown one by one, saying 'Allahu Akbar' with each throw. The stoning represents Ibrahim's rejection of Shaytan, who appeared to him three times to dissuade him from sacrificing Ismail. After stoning, men shave their heads (halq) or shorten their hair (taqsir); women cut a fingertip's length from their hair. This constitutes the first exit from Ihram (al-tahallul al-awwal), after which all prohibitions of Ihram are lifted except sexual relations. The pilgrim then proceeds to Makkah to perform Tawaf al-Ifadah and Sa'i.",
    requirements: [
      "Stone Jamarat al-Aqabah with 7 pebbles, throwing them one by one",
      "Say 'Allahu Akbar' with each throw",
      "The time for this stoning begins from after midnight on the 10th (for the weak) or from sunrise",
      "After stoning: sacrifice an animal (or ensure it is done via a voucher scheme)",
      "Then: shave or shorten the hair",
      "After these three acts (stoning, sacrifice, shaving), the first partial exit from Ihram is achieved",
    ],
    commonMistakes: [
      "Throwing all seven pebbles at once (invalid; must be thrown one by one)",
      "Throwing at the pillar from far away (must aim to hit the pillar or the basin)",
      "Confusing which Jamarat to stone on the 10th (only the large pillar on this day)",
    ],
    wisdom:
      "The stoning is not about striking the pillar but about symbolically rejecting Shaytan and all that he represents in one's own life. When Ibrahim rejected Shaytan, he was not throwing stones at a physical enemy - he was affirming his absolute dedication to Allah's command. Every believer affirms the same.",
    duas: ['Allahu Akbar (with each pebble)', 'Continue Talbiyah until the first stone is thrown'],
  },
  {
    id: 'hajj-tawaf-ifadah',
    stepNumber: 8,
    title: 'Tawaf al-Ifadah (The Main Tawaf of Hajj)',
    arabicTitle: 'طواف الإفاضة',
    phase: 'mina-eid',
    day: '10th Dhul Hijjah (ideally); can be done up to the end of Dhul Hijjah',
    location: "Al-Masjid al-Haram, Makkah",
    description:
      "Tawaf al-Ifadah is the central Tawaf of Hajj and is a pillar (rukn) without which the Hajj is incomplete. After the stoning, sacrifice, and shaving, the pilgrim (now in normal clothing for men, or Ihram can be kept on) proceeds to Makkah to perform this Tawaf. The method is the same as Tawaf al-Qudum but without idhtiba' (baring the right shoulder) as one is no longer in the initial state of Ihram restriction. Following this Tawaf, the pilgrim prays two units behind Maqam Ibrahim. If not already done before, the Sa'i is performed after this Tawaf. After Tawaf al-Ifadah, the second exit from Ihram (al-tahallul al-thani) is complete.",
    requirements: [
      "Be in a state of purity (wudu)",
      "Perform seven complete circuits anti-clockwise",
      "Pray two units at Maqam Ibrahim",
      "Perform Sa'i if not already done (either after Tawaf al-Qudum or here)",
    ],
    commonMistakes: [
      "Delaying this Tawaf until after the days of Tashreeq without a valid excuse",
      "Performing this Tawaf before shaving/cutting the hair",
    ],
    wisdom:
      "Tawaf al-Ifadah is the culmination of the Hajj. Having completed the climactic day of Arafah and the symbolic rejection of Shaytan, the pilgrim returns to the House of Allah transformed - carrying with them the spiritual renewal of the greatest journey of their life.",
    duas: ['Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhab an-nar'],
  },
  {
    id: 'hajj-tashreeq',
    stepNumber: 9,
    title: 'Days of Tashreeq: Stoning All Three Jamarat',
    arabicTitle: 'أيام التشريق: رمي الجمرات الثلاث',
    phase: 'completion',
    day: '11th, 12th (and 13th for those who remain) of Dhul Hijjah',
    location: 'Mina: the Jamarat Bridge',
    description:
      "On the 11th and 12th of Dhul Hijjah (and the 13th for those who choose or must stay), the pilgrim returns to Mina and stones all three pillars in the correct order: the small pillar (al-Jamarat al-Sughra), then the middle pillar (al-Jamarat al-Wusta), and finally the large pillar (al-Jamarat al-Kubra/al-Aqabah). Seven pebbles are thrown at each, saying 'Allahu Akbar' with each throw. The time for stoning on these days is from after midday (zawal) until midnight (though some scholars permit until Fajr). The pilgrim who wishes may depart Mina on the 12th before sunset (ta'jil); if one remains past sunset, they must stay until the 13th and stone all three pillars again.",
    requirements: [
      "Stone in the correct order: small, then middle, then large pillar",
      "Seven pebbles each, thrown one at a time",
      "Stone after midday on each day",
      "Say 'Allahu Akbar' with each throw",
      "After stoning the small and middle pillars, face the Qibla and make extended supplication",
    ],
    commonMistakes: [
      "Stoning before midday (invalid)",
      "Throwing all pebbles at once",
      "Stoning in the wrong order",
      "Not stopping for supplication after the small and middle pillars",
    ],
    wisdom:
      "The days of Tashreeq are days of dhikr (remembrance), gratitude, and celebration. The Quran commands: 'And remember Allah during the appointed days.' These days remind the believer that Islam is a complete way of life: even the ritual of stoning carries spiritual significance (rejection of evil) and is done in an orderly, mindful manner.",
    duas: ['Allahu Akbar (with each stone)', 'Extended supplication after the first and second pillars'],
  },
  {
    id: 'hajj-farewell-tawaf',
    stepNumber: 10,
    title: 'Tawaf al-Wada (The Farewell Tawaf)',
    arabicTitle: 'طواف الوداع',
    phase: 'completion',
    day: 'Before departing Makkah',
    location: "Al-Masjid al-Haram, Makkah",
    description:
      "The Farewell Tawaf is the final act before leaving Makkah. The Prophet ﷺ commanded: 'Let no one leave Makkah until the last thing he does is Tawaf of the House.' It is obligatory for all pilgrims except those who are menstruating or have postpartum bleeding. The Tawaf is performed in the usual manner (seven circuits). After completing the Tawaf and praying two units, the pilgrim stands at the door of the Ka'bah and bids farewell - this is an emotional moment for every Muslim who has made this blessed journey. The pilgrim should then depart without delay for the journey home, carrying with them the spiritual renewal of Hajj Mabrur.",
    requirements: [
      "Perform after all Hajj rites are complete",
      "Perform immediately before departing Makkah (no long delay permitted after this Tawaf)",
      "Seven circuits as usual",
      "Pray two units",
      "Make extended supplication and dua for acceptance",
    ],
    commonMistakes: [
      "Performing the Farewell Tawaf days before actually departing",
      "Doing additional shopping or activities after the Tawaf (which would require repeating it)",
    ],
    wisdom:
      "The farewell of the Ka'bah is one of the most emotionally moving experiences in a Muslim's life. Having spent days in the most sacred place on earth, surrounded by the mercy and forgiveness of Allah, the believer departs changed. The Prophet ﷺ described the reward of Hajj Mabrur (accepted Hajj) as nothing less than Paradise itself. May every pilgrim return with their sins forgiven, as the day they were born.",
    duas: ['Allahumma inni as\'aluka ridhaka wal-jannah wa a\'udhu bika min sakhatika wan-nar (O Allah, I ask You for Your pleasure and for Paradise, and I seek refuge in You from Your anger and from the Fire)'],
  },
];

export const HAJJ_TYPES = [
  {
    id: 'tamattu',
    name: "Hajj al-Tamattu'",
    arabicName: 'حج التمتع',
    description:
      "The most commonly performed type. The pilgrim enters Ihram for Umrah, completes Umrah (Tawaf + Sa'i + shaving/cutting), then exits Ihram. On the 8th Dhul Hijjah, a new Ihram is entered for Hajj. A sacrificial animal is required.",
    recommended: true,
  },
  {
    id: 'ifrad',
    name: 'Hajj al-Ifrad',
    arabicName: 'حج الإفراد',
    description:
      "Ihram is entered for Hajj only, from the Miqat. No Umrah is performed before Hajj. No sacrificial animal is required for Hajj alone (though it is permitted). Often performed by those who live in Makkah.",
    recommended: false,
  },
  {
    id: 'qiran',
    name: 'Hajj al-Qiran',
    arabicName: 'حج القران',
    description:
      "Ihram is entered for both Umrah and Hajj simultaneously. The pilgrim performs both in Ihram without any break between them. A sacrificial animal is required. This was the Hajj of the Prophet ﷺ according to some narrations.",
    recommended: false,
  },
];
