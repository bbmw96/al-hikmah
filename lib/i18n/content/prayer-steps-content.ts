/**
 * Prayer mechanics content — wudu, the 14 step-by-step prayer postures, and
 * the after-prayer adhkar. Arabic dhikr stays hardcoded in the section
 * components; this file holds the narrative text only.
 *
 * The structure uses PartialLangMap (only `en` required, others optional). The
 * consuming components use the standard `entry[lang] ?? entry.en` fallback,
 * matching how every other content file in this repo handles incremental
 * translation. The 13 remaining languages are added per-turn (see TaskCreate
 * "Translate prayer-steps-content to 13 langs" — multi-turn marathon).
 */

type Lang = 'en' | 'ms' | 'tur' | 'urd' | 'ben' | 'fas' | 'zh' | 'yue' | 'ja' | 'ru' | 'es' | 'ko' | 'ta' | 'si';
type PartialLangMap = { en: string } & Partial<Record<Lang, string>>;

export type PrayerStepsContentKey = keyof typeof PRAYER_STEPS_CONTENT;

export const PRAYER_STEPS_CONTENT = {
  /* ── Page header ────────────────────────────────────────── */
  page_title:   { en: `How to Pray (Salah)` },
  page_subtitle:{ en: `Salah is the second pillar of Islam: a direct link between the servant and his Lord, ordained by Allah Himself without any intermediary, during the greatest journey in human history.` },

  /* ── Wudu intro + steps ─────────────────────────────────── */
  wudu_h:       { en: `Ritual Purification (Wudu) Before Prayer` },
  wudu_intro:   { en: `Wudu is obligatory before prayer. Jibril (as) first taught it to the Prophet ﷺ at the very beginning of revelation. Allah says: "O you who believe, when you rise to perform prayer, wash your faces and your hands to the elbows, wipe over your heads, and wash your feet to the ankles." (Qur'an 5:6). The Prophet ﷺ said: "No prayer is accepted without purity." (Muslim 224). For the full guide to wudu, ghusl and tayamum see the Taharah page.` },
  wudu_more:    { en: `See the full Taharah page for wudu, ghusl, and tayamum` },

  wudu_s1_a: { en: `Intention (Niyyah)` },
  wudu_s1_d: { en: `Make the intention in your heart to purify yourself for prayer. The Prophet ﷺ said: "Actions are by intentions." (Bukhari)` },
  wudu_s2_a: { en: `Say Bismillah` },
  wudu_s2_d: { en: `Begin with "Bismillah". The Prophet ﷺ said: "There is no wudu for one who does not mention the name of Allah over it." (Abu Dawud, Tirmidhi)` },
  wudu_s3_a: { en: `Wash both hands × 3` },
  wudu_s3_d: { en: `Wash both hands up to and including the wrists three times, interlacing the fingers to ensure water reaches between them.` },
  wudu_s4_a: { en: `Rinse mouth × 3` },
  wudu_s4_d: { en: `Take water into the mouth, swirl it thoroughly, and spit it out three times.` },
  wudu_s5_a: { en: `Clean nose × 3` },
  wudu_s5_d: { en: `Sniff water into the nostrils and blow it out three times, using the left hand to blow.` },
  wudu_s6_a: { en: `Wash face × 3` },
  wudu_s6_d: { en: `Wash the entire face from the hairline to the chin and from ear to ear, three times.` },
  wudu_s7_a: { en: `Wash arms × 3` },
  wudu_s7_d: { en: `Wash the right arm from fingertips to and including the elbow three times, then the left arm the same way.` },
  wudu_s8_a: { en: `Wipe the head once` },
  wudu_s8_d: { en: `With wet hands, wipe the head from front to back and bring the hands back to the front (once). Then wipe inside and outside the ears with the index fingers and thumbs.` },
  wudu_s9_a: { en: `Wash feet × 3` },
  wudu_s9_d: { en: `Wash the right foot up to and including the ankle three times, ensuring water reaches between the toes. Then the left foot. The Prophet ﷺ was strict that no part was left dry.` },

  wudu_dua_h:        { en: `Du'a after Wudu (Muslim 234)` },
  wudu_dua_translit: { en: `Ashhadu alla ilaha illallahu wahdahu la sharika lahu wa ashhadu anna Muhammadan 'abduhu wa rasuluh. Allahumma aj'alni minat-tawwabina waj'alni minal-mutatahhirin.` },
  wudu_dua_meaning:  { en: `I bear witness that there is no god but Allah alone, He has no partner, and I bear witness that Muhammad is His servant and messenger. O Allah, make me of those who repent and make me of those who purify themselves.` },
  wudu_dua_note:     { en: `The Prophet ﷺ said: "Whoever performs wudu well, then raises his gaze to the sky and says this: the eight gates of Paradise are opened for him to enter from whichever he wishes."` },

  /* ── The 14 prayer steps ────────────────────────────────── */
  steps_h:     { en: `The Steps of Prayer` },
  steps_intro: { en: `Each prayer follows the same fourteen-step pattern. The Arabic dhikr below is hardcoded as the Prophet ﷺ taught it; only the narrative around each step translates.` },

  step1_t: { en: `Facing the Qibla` },
  step1_d: { en: `Stand facing the Qibla, the direction of the Ka'bah in Makkah. This is obligatory; deliberately facing the wrong direction invalidates the prayer. Stand upright, feet roughly shoulder-width apart, with full presence of heart (khushu'). You are about to stand before Allah, just as the Prophet ﷺ stood before Him during the Night Journey.` },

  step2_t: { en: `Intention (Niyyah)` },
  step2_d: { en: `Make the intention in your heart for the specific prayer you are about to perform. The intention does not need to be spoken aloud, though some scholars permit it. For example: "I intend to pray two units of Fajr prayer for Allah." The intention is a condition of every act of worship in Islam: it distinguishes worship from habit.` },

  step3_t:       { en: `Opening Takbir (Takbirat al-Ihram)` },
  step3_d:       { en: `Raise both hands to the earlobes (men) or shoulders (women), palms forward, and say the opening takbir. This marks the formal beginning. Once said, all speech and movement outside of prayer is forbidden, hence 'Ihram' (entering the state of sanctity). Lower the hands and place the right hand over the left on the chest.` },
  step3_translit:{ en: `Allahu Akbar` },
  step3_meaning: { en: `Allah is greater (than everything in this world and in one's mind).` },

  step4_t:       { en: `Opening Supplication (Du'a al-Istiftah)` },
  step4_d:       { en: `Recite the opening supplication silently. Two versions are reported from the Prophet ﷺ. The Subhanaka version is most widely practised. The Allahumma ba'id version is from Muslim 598 and the Prophet ﷺ used it in the night prayer. Both are valid:` },
  step4_translit:{ en: `Subhanakal-lahumma wa bihamdika wa tabarakas-muka wa ta'ala jadduka wa la ilaha ghairuk` },
  step4_meaning: { en: `Glory be to You, O Allah, and praise be to You. Blessed is Your name, exalted is Your majesty, and there is no god but You.` },
  step4_xlabel:  { en: `Alternative opening supplication (Muslim 598):` },
  step4_xtranslit:{ en: `Allahumma ba'id bayni wa bayna khatayaya kama ba'adta baynal-mashriqi wal-maghrib. Allahumma naqqini min khatayaya kama yunaqqath-thawbul-abyadu minad-danas. Allahummaghsilni min khatayaya bith-thalji wal-ma'i wal-barad.` },
  step4_xmeaning:{ en: `O Allah, put distance between me and my sins as You have put distance between East and West. O Allah, cleanse me of my sins as a white garment is cleansed of filth. O Allah, wash away my sins with snow, water, and hail.` },

  step5_t:       { en: `Al-Fatiha and Additional Surah` },
  step5_d:       { en: `Recite A'udhu billahi mina-sh-shaytanir-rajim and Bismillah (both silently), then recite Surah al-Fatiha. This is a pillar of every unit: the prayer of one who does not recite it is invalid (Bukhari, Muslim). Say "Amin" aloud in congregation or quietly alone. Then recite any surah from the Qur'an; the Prophet ﷺ always recited an additional surah in the first two units. Longer surahs in Fajr, shorter in other prayers. This additional surah is Sunnah Mu'akkadah.` },
  step5_translit:{ en: `Al-hamdu lillahi rabb il-'alamin. Ar-Rahmanir-Rahim. Maliki yawmid-din. Iyyaka na'budu wa iyyaka nasta'in. Ihdinas-siratal-mustaqim. Siratal-ladhina an'amta 'alayhim, ghayril-maghdubi 'alayhim wa lad-dallin.` },
  step5_meaning: { en: `All praise is for Allah, Lord of all worlds. The Most Compassionate, the Most Merciful. Master of the Day of Judgement. You alone we worship and You alone we ask for help. Guide us along the straight path, the path of those You have blessed, not those You are displeased with, or those who are astray.` },

  step6_t:       { en: `Bowing (Ruku')` },
  step6_d:       { en: `Raise the hands and say Allahu Akbar while bending. Place both hands firmly on the knees, fingers spread, back flat and level with the ground. Hold this with complete stillness (tuma'ninah). When "Fasabbih bismi Rabbik al-Azim" (Qur'an 56:96) was revealed, the Prophet ﷺ said: "Make it your ruku' dhikr." Minimum: three times.` },
  step6_translit:{ en: `Subhana Rabbiy al-'Azim` },
  step6_meaning: { en: `Glory be to my Lord, the Most Great.` },
  step6_xlabel:  { en: `Additional dhikr the Prophet ﷺ recited in ruku' (Muslim 771, Abu Dawud 872):` },
  step6_xtranslit:{ en: `Subhanakal-lahumma Rabbana wa bihamdika Allahummaghfir li. | Subbuhun Quddusun Rabbul-mala'ikati war-ruh. | Allahumma laka raka'tu wa bika amantu wa laka aslamtu, khasha'a laka sam'i wa basari wa mukhkhi wa 'azmi wa 'asabi.` },
  step6_xmeaning:{ en: `Glory be to You, O Allah our Lord, and praise be to You. O Allah, forgive me. | Most Glorified, Most Holy, Lord of the angels and the Spirit (Jibril). | O Allah, for You I have bowed, in You I believe, and to You I have submitted. My hearing, my sight, my mind, my bones, and my sinews are all humbled before You.` },

  step7_t:       { en: `Rising from Ruku'` },
  step7_d:       { en: `Rise from bowing, raising the hands to the earlobes while saying Sami'allahu liman hamidah. Stand fully upright; this i'tidal position is a pillar of prayer and must be held with complete stillness before descending.` },
  step7_translit:{ en: `Sami'allahu liman hamidah. Rabbana wa lakal-hamd, hamdan kathiran tayyiban mubarakan fih.` },
  step7_meaning: { en: `Allah hears whoever praises Him. Our Lord, all praise is Yours, abundant, pure and blessed praise.` },
  step7_xlabel:  { en: `Longer completion (Bukhari 799, the companion's addition that the Prophet approved):` },
  step7_xtranslit:{ en: `Mil'as-samawati wa mil'al-ard wa mil'a ma shi'ta min shay'in ba'd.` },
  step7_xmeaning:{ en: `Filling the heavens and the earth, and whatever You will beyond that.` },

  step8_t:       { en: `First Prostration (Sujud)` },
  step8_d:       { en: `Descend to the ground with Allahu Akbar. Seven parts must touch the ground: the forehead including the nose, both palms, both knees, and the bottoms of both feet. The Prophet ﷺ said: "The nearest a servant is to his Lord is when he is in prostration, so make much supplication." (Muslim 482). When "Sabbih isma Rabbika al-A'la" (Qur'an 87:1) was revealed, the Prophet ﷺ said: "Make it your sujud dhikr." Minimum: three times.` },
  step8_translit:{ en: `Subhana Rabbiy al-A'la` },
  step8_meaning: { en: `Glory be to my Lord, the Most High.` },
  step8_xlabel:  { en: `Additional dhikr the Prophet ﷺ recited in sujud (Muslim 771, Muslim 486, Abu Dawud):` },
  step8_xtranslit:{ en: `Subhanakal-lahumma Rabbana wa bihamdika Allahummaghfir li. | Allahumma laka sajadtu wa bika amantu wa laka aslamtu, sajada wajhi lillathi khalaqahu wa sawwarahu wa shaqqa sam'ahu wa basarahu, tabarakallahu ahsanul-khaliqin. | Allahumma inni a'udhu biridaka min sakhatika wa bimu'afatika min 'uqubatika wa a'udhu bika minka la uhsi thana'an 'alayka anta kama athnayta 'ala nafsik.` },
  step8_xmeaning:{ en: `Glory be to You, O Allah our Lord, and praise be to You. O Allah, forgive me. | O Allah, for You I have prostrated, in You I believe, and to You I have submitted. My face has prostrated to the One who created it and shaped it and split open its hearing and sight; blessed is Allah, the best of creators. | O Allah, I seek refuge in Your pleasure from Your anger, in Your pardon from Your punishment. I seek refuge in You from You. I cannot enumerate Your praise; You are as You have praised Yourself.` },

  step9_t:       { en: `Sitting Between the Two Prostrations` },
  step9_d:       { en: `Rise with Allahu Akbar and sit briefly between the two prostrations. This sitting is a pillar of prayer and must be still. Ibn Abbas (ra) narrated the full du'a the Prophet ﷺ said here: it covers seven comprehensive blessings every human needs:` },
  step9_translit:{ en: `Rabbighfir li, warhamni, wajburni, warfa'ni, warzuqni, wahdini, wa'afini, wa'fu 'anni.` },
  step9_meaning: { en: `My Lord, forgive me; have mercy on me; strengthen me (repair my affairs); raise me in rank; provide for me; guide me; grant me wellbeing; and pardon me.` },

  step10_t:       { en: `Second Prostration` },
  step10_d:       { en: `Perform the second prostration exactly as the first with all the same dhikr. After this, rise for the next unit (in units one and three) with Allahu Akbar, or remain seated for Tashahhud (after the second and fourth units).` },
  step10_translit:{ en: `Subhana Rabbiy al-A'la` },
  step10_meaning: { en: `Glory be to my Lord, the Most High.` },

  step11_t:       { en: `Tashahhud — the Testimony of Faith in Prayer` },
  step11_d:       { en: `Recite the Tashahhud in the sitting after the second unit and in the final sitting. Point the right index finger toward the Qibla from the beginning of the Tashahhud until the end. When you reach the testimony (Ashhadu...), move the finger slightly. Ibn Mas'ud (ra) said the companions used to say various greetings in prayer until the Prophet ﷺ taught them this fixed wording.` },
  step11_translit:{ en: `At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahis-salihin. Ashhadu alla ilaha illallahu wa ashhadu anna Muhammadan 'abduhu wa rasuluh.` },
  step11_meaning: { en: `All verbal greetings, all prayers, and all pure words belong to Allah. Peace be upon you, O Prophet, and the mercy and blessings of Allah. Peace be upon us and upon all the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and messenger.` },

  step12_t:       { en: `Salawat on the Prophet ﷺ (Al-Salat al-Ibrahimiyyah)` },
  step12_d:       { en: `After the Tashahhud in the final sitting, recite the Ibrahimiyyah. When the companions asked the Prophet ﷺ how to send blessings upon him, he taught them this exact wording: it links his name with Ibrahim (as), the patriarch of monotheism. It is called Ibrahimiyyah because it uses Ibrahim as a benchmark of accepted blessings:` },
  step12_translit:{ en: `Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid. Allahumma barik 'ala Muhammadin wa 'ala ali Muhammad, kama barakta 'ala Ibrahima wa 'ala ali Ibrahim, innaka Hamidun Majid.` },
  step12_meaning: { en: `O Allah, send Your mercy upon Muhammad and upon the family of Muhammad, as You sent Your mercy upon Ibrahim and upon the family of Ibrahim; You are Praiseworthy, Glorious. O Allah, send Your blessings upon Muhammad and upon the family of Muhammad, as You sent Your blessings upon Ibrahim and upon the family of Ibrahim; You are Praiseworthy, Glorious.` },

  step13_t:       { en: `Final Du'a Before Taslim: Seeking Refuge from Four Things` },
  step13_d:       { en: `Before ending the prayer, the Prophet ﷺ commanded Muslims to seek refuge from four things. He said: "When one of you completes the Tashahhud, let him seek refuge with Allah from four things." (Bukhari, Muslim). After this, you may make any personal du'a you wish; the final sitting is one of the best moments for supplication:` },
  step13_translit:{ en: `Allahumma inni a'udhu bika min 'adhabil-qabr, wa min 'adhabi-nar, wa min fitnati mahya wal-mamat, wa min sharri fitnatil-masihid-dajjal.` },
  step13_meaning: { en: `O Allah, I seek refuge in You from the punishment of the grave, from the punishment of the Fire, from the trials of life and death, and from the evil of the trial of the False Messiah (al-Dajjal).` },

  step14_t:       { en: `The Closing Salutation (Taslim)` },
  step14_d:       { en: `Turn the head to the right and say the salutation, then to the left and repeat it. This formally concludes the prayer. You have stood before Allah, bowed to Him, and prostrated to Him.` },
  step14_translit:{ en: `As-salamu 'alaykum wa rahmatullah` },
  step14_meaning: { en: `Peace be upon you and the mercy of Allah.` },

  /* ── After-prayer adhkar ────────────────────────────────── */
  after_h:     { en: `Adhkar After Prayer` },
  after_intro: { en: `The Prophet ﷺ remained seated after every fard prayer to recite these. They are short, profound, and authentically transmitted.` },

  after1_t:       { en: `Seeking Forgiveness, then Greeting the Lord of Peace` },
  after1_src:     { en: `Muslim 591` },
  after1_translit:{ en: `Astaghfirullah (×3). Allahumma antas-salam wa minkas-salam, tabarakta dhal-jalali wal-ikram.` },
  after1_meaning: { en: `I seek Allah's forgiveness (three times). O Allah, You are Peace and from You comes peace. Blessed are You, Possessor of Glory and Honour.` },
  after1_note:    { en: `The Prophet ﷺ said this immediately after giving the taslim, then turned to face his companions. We begin by asking forgiveness because even in our prayer we may have fallen short in our focus and presence.` },

  after2_t:       { en: `Tahlil: Declaring the Oneness of Allah` },
  after2_src:     { en: `Muslim 592` },
  after2_translit:{ en: `La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir.` },
  after2_meaning: { en: `There is no god but Allah alone, He has no partner. His is the dominion and His is all praise, and He has power over all things.` },

  after3_t:       { en: `Ayat al-Kursi: The Verse of the Throne` },
  after3_src:     { en: `Al-Nasa'i 9928 (authenticated by al-Albani)` },
  after3_translit:{ en: `Allahu la ilaha illa huwal-hayyul-qayyum, la ta'khudhuhu sinatun wa la nawm, lahu ma fis-samawati wa ma fil-ard, man dhal-ladhi yashfa'u 'indahu illa bi-idhnih, ya'lamu ma bayna aydihim wa ma khalfahum, wa la yuhituna bishay'im-min 'ilmihi illa bima sha', wasi'a kursiyyuhus-samawati wal-ard, wa la ya'uduhu hifzuhuma wa huwal-'aliyyul-'azim.` },
  after3_meaning: { en: `Allah, there is no deity except Him, the Ever-Living, the Sustainer of existence. Neither drowsiness overtakes Him nor sleep. To Him belongs whatever is in the heavens and whatever is on the earth. Who could intercede with Him except by His permission? He knows what is before them and what will be after them, and they encompass not a thing of His knowledge except for what He wills. His Throne extends over the heavens and the earth, and their preservation does not tire Him. He is the Most High, the Most Great.` },
  after3_note:    { en: `Qur'an 2:255. The Prophet ﷺ said: "Whoever recites Ayat al-Kursi after every obligatory prayer, nothing stands between him and his entering Paradise except death." (Abu Umamah (ra); authenticated by al-Albani.) It is the greatest verse in the Qur'an.` },

  after4_t:       { en: `Tasbih, Tahmid, Takbir: 99 Counts Completed with Tahlil` },
  after4_src:     { en: `Muslim 597` },
  after4_translit:{ en: `Subhanallah (×33). Alhamdulillah (×33). Allahu Akbar (×33). La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir.` },
  after4_meaning: { en: `Glory be to Allah (33 times). All praise is to Allah (33 times). Allah is the Greatest (33 times). [Then:] There is no god but Allah alone, He has no partner; His is the dominion and all praise belongs to Him, and He has power over all things.` },
  after4_note:    { en: `The Prophet ﷺ said: "Whoever says this after every prayer, his sins are forgiven even if they were as abundant as the foam of the sea." (Muslim). The story behind the 33+33+33: Fatimah (ra) came to the Prophet ﷺ asking for a servant because her hands were sore from grinding. He said: "Shall I not tell you what is better than what you asked for? When you go to bed, say Subhanallah 33 times, Alhamdulillah 33 times, and Allahu Akbar 34 times; that is better for you than a servant."` },

  after5_t:       { en: `After Fajr and Maghrib: Additional 10 Times` },
  after5_src:     { en: `Tirmidhi 3474 (sahih)` },
  after5_translit:{ en: `La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, yuhyi wa yumit, wa huwa 'ala kulli shay'in qadir.` },
  after5_meaning: { en: `There is no god but Allah alone, He has no partner; His is the dominion and all praise belongs to Him. He gives life and causes death, and He has power over all things.` },
  after5_note:    { en: `Recite 10 times after Fajr and 10 times after Maghrib. The Prophet ﷺ said: "Whoever says this ten times after Fajr and Maghrib: ten good deeds are written for him, ten sins are erased, he is raised ten ranks, is protected from every evil throughout his day and night, and no one comes on the Day of Resurrection with better deeds except one who said more."` },

  transliteration_label: { en: `Transliteration` },
  meaning_label:         { en: `Meaning` },

} satisfies Record<string, PartialLangMap>;
