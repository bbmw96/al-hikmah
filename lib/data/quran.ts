export interface SurahData {
  number: number;
  arabicName: string;
  englishName: string;
  transliteration: string;
  verses: number;
  classification: 'Makki' | 'Madani';
  period: string;
  overview: string;
  asbabalNuzul: string;
  keyThemes: string[];
  notableVerses: Array<{
    reference: string;
    arabic: string;
    translation: string;
    context: string;
  }>;
  virtues?: string;
  alternativeNames?: string[];
}

export function getSurahByTransliteration(slug: string): SurahData | undefined {
  return SURAHS.find(s => s.transliteration === slug);
}

export const SURAHS: SurahData[] = [
  {
    number: 1,
    arabicName: 'الفاتحة',
    englishName: 'The Opening',
    transliteration: 'al-fatihah',
    verses: 7,
    classification: 'Makki',
    period: 'Early Makkan',
    overview: 'Al-Fatihah is the opening chapter of the Quran and serves as its foundation. It is a complete prayer encompassing praise of Allah, acknowledgement of His sovereignty, and supplication for guidance to the straight path. Every Muslim recites it in each unit of the daily prayers, making it the most frequently recited text in Islamic worship.',
    asbabalNuzul: 'Al-Fatihah was among the earliest revelations to the Prophet Muhammad (peace be upon him) in Makkah. It was revealed in its entirety as a complete chapter, rather than in piecemeal fashion. The angel Jibril taught the Prophet how to recite it as an obligatory part of prayer, and it was revealed before the institution of the five daily prayers.',
    keyThemes: [
      'Praise and gratitude to Allah',
      'Divine sovereignty and mercy',
      'Supplication for guidance',
      'The straight path of the prophets and righteous',
      'Distinction between guidance and misguidance'
    ],
    notableVerses: [
      {
        reference: '1:1',
        arabic: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        translation: 'In the name of Allah, the Entirely Merciful, the Especially Merciful.',
        context: 'The Basmala opens every surah (except At-Tawbah) and was revealed as an integral part of Al-Fatihah. Scholars consider it a standalone verse of this surah.'
      },
      {
        reference: '1:6',
        arabic: 'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',
        translation: 'Guide us to the straight path.',
        context: 'This is the central supplication of the surah and of every Muslim prayer. Allah revealed this verse to teach believers the most important request they can make.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) said: "By the One in Whose hand is my soul, nothing like it has been revealed in the Torah, the Gospel, the Psalms, or the Quran. It is the seven oft-repeated verses and the mighty Quran that I have been given." (Reported by Al-Bukhari)',
    alternativeNames: ['Umm al-Quran (Mother of the Quran)', 'Umm al-Kitab', 'As-Sab al-Mathani', 'Al-Kafiyah', 'Al-Wafiyah', 'Al-Hamd', 'Ash-Shifa (The Cure)', 'Ar-Ruqyah']
  },
  {
    number: 2,
    arabicName: 'البقرة',
    englishName: 'The Cow',
    transliteration: 'al-baqarah',
    verses: 286,
    classification: 'Madani',
    period: 'Early Madinan',
    overview: 'Al-Baqarah is the longest surah in the Quran, revealed over a long period in Madinah. It serves as the foundational legislative chapter, addressing the nascent Muslim community with laws on worship, fasting, pilgrimage, marriage, divorce, financial transactions, and inheritance. It contains Ayat al-Kursi, the greatest verse of the Quran, and narrates the story of the Israelites and the cow they were commanded to slaughter.',
    asbabalNuzul: 'The bulk of this surah was revealed in the first two years after the Hijra to Madinah. Many verses were revealed in response to specific situations: verses on the change of the qibla (2:142-150) were revealed when the Prophet was commanded to face the Kaaba instead of Jerusalem; verses on usury (2:275-280) addressed rampant interest-based dealings; and verses on fighting (2:190-193) were revealed when the Muslims were permitted to defend themselves after years of persecution.',
    keyThemes: [
      'Faith and disbelief',
      'The story of Bani Israil and their covenant with Allah',
      'Legislation for the Muslim community',
      'Prohibition of usury (riba)',
      'Establishment of prayer and fasting',
      'The story of Ibrahim and the building of the Kaaba',
      'Divine sovereignty over life and death'
    ],
    notableVerses: [
      {
        reference: '2:255',
        arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
        translation: 'Allah, there is no deity except Him, the Ever-Living, the Sustainer of existence.',
        context: 'Ayat al-Kursi, revealed in Madinah. The Prophet declared this the greatest verse of the Quran because it describes the all-encompassing attributes of Allah most comprehensively.'
      },
      {
        reference: '2:285-286',
        arabic: 'آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ',
        translation: 'The Messenger has believed in what was revealed to him from his Lord, and so have the believers.',
        context: 'These closing verses of Al-Baqarah were revealed on the Night of the Isra and Miraj, as a gift to the Prophet from Allah, and are recommended to be recited every night.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) said: "Do not make your homes like graves. Satan runs away from a house in which Surah Al-Baqarah is recited." (Muslim) He also said: "Learn Surah Al-Baqarah and Al Imran because they are two lights and they shade their people on the Day of Resurrection."',
    alternativeNames: ['Sanam al-Quran (The Peak of the Quran)']
  },
  {
    number: 3,
    arabicName: 'آل عمران',
    englishName: 'The Family of Imran',
    transliteration: 'al-imran',
    verses: 200,
    classification: 'Madani',
    period: 'Early Madinan',
    overview: 'Al Imran focuses on the theological disputes with the People of the Book, particularly Christians, regarding the nature of Jesus and Mary. It recounts the Battle of Uhud and draws lessons from it for the Muslim community. The surah affirms the unity of divine guidance throughout history, connecting the message of the Quran to that of Moses and Jesus.',
    asbabalNuzul: 'The opening verses were revealed when a delegation of sixty Christians from Najran came to debate the Prophet in Madinah regarding the nature of Jesus. Verses 61 were revealed specifically for the Mubahala (mutual cursing) challenge to these Christians. Many other verses were revealed in connection with the Battle of Uhud (625 CE), addressing the Muslims who violated the Prophet\'s command not to leave their posts.',
    keyThemes: [
      'Unity of the message of all prophets',
      'The nature of Jesus and Mary in Islamic theology',
      'Lessons from the Battle of Uhud',
      'The importance of unity and obedience to the Prophet',
      'Trials as a means of spiritual purification',
      'The virtue of tawakkul (reliance on Allah)'
    ],
    notableVerses: [
      {
        reference: '3:7',
        arabic: 'هُوَ الَّذِي أَنزَلَ عَلَيْكَ الْكِتَابَ مِنْهُ آيَاتٌ مُّحْكَمَاتٌ',
        translation: 'It is He who has sent down to you the Book; in it are verses that are precise, they are the foundation of the Book.',
        context: 'This verse was revealed to address those who followed ambiguous verses to create confusion. It establishes the principle of referring unclear matters to clear foundational texts.'
      },
      {
        reference: '3:190-191',
        arabic: 'إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِّأُولِي الْأَلْبَابِ',
        translation: 'Indeed, in the creation of the heavens and the earth and the alternation of the night and the day are signs for those of understanding.',
        context: 'The Prophet (peace be upon him) wept upon these verses being revealed and said: "Woe to whoever recites these but does not reflect upon them."'
      }
    ],
    virtues: 'The Prophet said: "Learn Al-Baqarah and Al Imran because they are two shining lights that will shade their reciters on the Day of Resurrection as if they were two clouds or two canopies filled with birds." (Ahmad)',
    alternativeNames: ['Az-Zahrawan (The Two Radiant Ones) - together with Al-Baqarah']
  },
  {
    number: 4,
    arabicName: 'النساء',
    englishName: 'The Women',
    transliteration: 'an-nisa',
    verses: 176,
    classification: 'Madani',
    period: 'Early Madinan',
    overview: 'An-Nisa is one of the primary legislative surahs, focusing extensively on the rights of women, family law, inheritance, and social justice. It was revealed in the aftermath of the Battle of Uhud when many Muslim men were martyred, leaving widows and orphans in need of protection. The surah regulates marriage, divorce, treatment of orphans, and the distribution of wealth.',
    asbabalNuzul: 'This surah was revealed largely in the period between the battles of Uhud and Al-Ahzab (approximately 625-627 CE). Verse 3 regarding polygamy was revealed partly in the context of caring for the many widows left after Uhud. Verse 11 on inheritance was revealed when the widow of Sa\'d ibn Rabi complained that her husband\'s brother had taken all the wealth, leaving her daughters with nothing.',
    keyThemes: [
      'Rights and protection of women',
      'Laws of inheritance',
      'Regulations of marriage and divorce',
      'Protection of orphans and their wealth',
      'Prohibition of marrying certain relatives',
      'Obedience to authority and the resolution of disputes',
      'Hypocrisy and its dangers'
    ],
    notableVerses: [
      {
        reference: '4:1',
        arabic: 'يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ',
        translation: 'O mankind, fear your Lord, who created you from one soul and created from it its mate and dispersed from both of them many men and women.',
        context: 'This verse establishes the common human origin and equal dignity of all people before Allah, forming the moral foundation for the surah\'s many social laws.'
      },
      {
        reference: '4:59',
        arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ وَأُولِي الْأَمْرِ مِنكُمْ',
        translation: 'O you who have believed, obey Allah and obey the Messenger and those in authority among you.',
        context: 'Revealed to address disputes arising in the community. This verse establishes the hierarchy of authority in Islam and the mechanism for resolving disagreements.'
      }
    ],
    virtues: 'Ibn Masud said: "The most comprehensive verse in the Quran regarding rulings on what is lawful and unlawful is verse 23 of An-Nisa, which lists the prohibited degrees of marriage."'
  },
  {
    number: 5,
    arabicName: 'المائدة',
    englishName: 'The Table Spread',
    transliteration: 'al-maidah',
    verses: 120,
    classification: 'Madani',
    period: 'Late Madinan',
    overview: 'Al-Ma\'idah is among the last major surahs to be revealed and contains some of the final legislative rulings of Islam. It addresses dietary laws, the sanctity of covenants and contracts, relations with the People of the Book, legal punishments (hudud), ablution, and the prohibition of intoxicants. The title refers to the table spread with food that Jesus\'s disciples requested from Allah as a miracle.',
    asbabalNuzul: 'This surah was largely revealed during the final years of the Prophet\'s life in Madinah. The verse on the completion of religion (5:3) was revealed at the Farewell Pilgrimage on the Day of Arafah. Several verses address the treaty obligations with non-Muslim groups and incidents of betrayal. Verse 33 on legal punishments was revealed when members of the Urayna tribe murdered a Muslim shepherd after receiving medical treatment from the Prophet.',
    keyThemes: [
      'Completion and perfection of Islam as a religion',
      'Dietary laws and prohibitions',
      'Sanctity of covenants and treaties',
      'The miracle of the table spread and the nature of Jesus',
      'Legal punishments as social deterrents',
      'The obligation of justice and bearing witness truthfully',
      'Prohibition of alcohol and gambling'
    ],
    notableVerses: [
      {
        reference: '5:3',
        arabic: 'الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ وَأَتْمَمْتُ عَلَيْكُمْ نِعْمَتِي',
        translation: 'This day I have perfected for you your religion and completed My favour upon you and have approved for you Islam as religion.',
        context: 'Revealed on the Day of Arafah during the Farewell Pilgrimage. When Umar heard this verse, he wept, understanding that the completion of revelation signalled the approaching end of the Prophet\'s earthly life.'
      },
      {
        reference: '5:32',
        arabic: 'مَن قَتَلَ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا',
        translation: 'Whoever kills a soul unless for a soul or for corruption done in the land, it is as if he had slain mankind entirely.',
        context: 'This verse, originally stated to the Children of Israel, was revealed to affirm the sanctity of human life in Islam and to respond to acts of violence in Madinah.'
      }
    ],
    virtues: 'Imam Malik preferred for Al-Ma\'idah to be recited in full during the Witr prayer because it contains the final rulings of the Quran that must not be abrogated or forgotten.'
  },
  {
    number: 6,
    arabicName: 'الأنعام',
    englishName: 'The Cattle',
    transliteration: 'al-anam',
    verses: 165,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Al-An\'am is one of the great Makkan surahs, revealed in its entirety in a single night near the end of the Makkan period. It is primarily a sustained argument for monotheism against the polytheism of the Quraysh, using rational proofs, historical examples of previous nations, and the signs in creation. It also contains the declaration of Ibrahim\'s pure monotheism and addresses superstitions about livestock.',
    asbabalNuzul: 'According to Ibn Abbas, this entire surah was revealed at once in Makkah during the night, accompanied by seventy thousand angels glorifying Allah. This distinguished revelation underscores its theological importance. It was revealed when the Quraysh\'s polytheism and their superstitions around cattle (forbidding certain animals to themselves or dedicating them to idols) needed a comprehensive rebuttal.',
    keyThemes: [
      'Proof of Allah\'s oneness through creation',
      'Rejection of polytheism and idol worship',
      'The message of Ibrahim as the pure monotheist',
      'Accountability on the Day of Judgement',
      'Superstitions around livestock condemned',
      'Dietary laws and what is lawful to eat',
      'The rational basis for prophetic revelation'
    ],
    notableVerses: [
      {
        reference: '6:79',
        arabic: 'إِنِّي وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفًا',
        translation: 'Indeed, I have turned my face toward He who created the heavens and the earth, inclining toward truth, and I am not of those who associate others with Allah.',
        context: 'Ibrahim\'s declaration of pure monotheism after observing the stars, moon, and sun and rejecting them as objects of worship. This verse is the pinnacle of the Quranic argument for tawhid through rational reflection.'
      },
      {
        reference: '6:162',
        arabic: 'قُلْ إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ',
        translation: 'Say: Indeed, my prayer, my rites of sacrifice, my living and my dying are for Allah, Lord of the worlds.',
        context: 'This verse, often recited before prayer, summarises the totality of a believer\'s submission to Allah and forms the closing declaration of the surah\'s monotheistic theme.'
      }
    ],
    virtues: 'The Prophet said that this surah was sent down with seventy thousand angels, and that the glorification of Allah filled what is between the heavens and the earth. (Hakim, Bayhaqi)'
  },
  {
    number: 7,
    arabicName: 'الأعراف',
    englishName: 'The Heights',
    transliteration: 'al-araf',
    verses: 206,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Al-A\'raf is one of the longest Makkan surahs, named after the elevated barrier between Paradise and Hellfire. It recounts the stories of multiple prophets (Adam, Nuh, Hud, Salih, Lut, Shu\'ayb, and Musa) and the punishment of their peoples to warn the Quraysh that their rejection of the Prophet would bring similar consequences. The surah covers the story of humanity from the creation of Adam to the final judgement.',
    asbabalNuzul: 'Revealed during the middle to late Makkan period when the Prophet faced intense opposition. The extended narratives of previous prophets were meant to console the Prophet and warn the Quraysh that civilisations far mightier than theirs had been destroyed for rejecting divine guidance. Verses 163-166 regarding the people of the town on the Sabbath were particularly directed at the Jewish communities whose history was known to the Arabs.',
    keyThemes: [
      'Stories of prophets and the punishment of those who rejected them',
      'The creation of Adam and the origins of human moral struggle',
      'Al-A\'raf as the barrier between Paradise and Hell',
      'The covenant Allah took from the descendants of Adam',
      'Turning to Allah in sincere worship',
      'The comprehensive knowledge and power of Allah',
      'Warning to those who take religion lightly'
    ],
    notableVerses: [
      {
        reference: '7:54',
        arabic: 'إِنَّ رَبَّكُمُ اللَّهُ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ فِي سِتَّةِ أَيَّامٍ',
        translation: 'Indeed, your Lord is Allah, who created the heavens and the earth in six days.',
        context: 'This verse about the creation of the cosmos was revealed to establish Allah\'s absolute sovereignty and to refute the polytheist claim that other beings shared in divine power or creation.'
      },
      {
        reference: '7:172',
        arabic: 'وَإِذْ أَخَذَ رَبُّكَ مِن بَنِي آدَمَ مِن ظُهُورِهِمْ ذُرِّيَّتَهُمْ وَأَشْهَدَهُمْ عَلَىٰ أَنفُسِهِمْ',
        translation: 'And when your Lord took from the children of Adam, from their loins, their descendants and made them testify of themselves: Am I not your Lord? They said: Yes, we have testified.',
        context: 'The verse of the primordial covenant (Mithaq), describing how all human souls testified to Allah\'s lordship before being sent into the world. This verse explains the innate human disposition (fitra) toward monotheism.'
      }
    ],
    virtues: 'The surah is recommended for recitation in Friday prayer according to the practice of the Prophet\'s companions.'
  },
  {
    number: 8,
    arabicName: 'الأنفال',
    englishName: 'The Spoils of War',
    transliteration: 'al-anfal',
    verses: 75,
    classification: 'Madani',
    period: 'Early Madinan',
    overview: 'Al-Anfal was revealed in the aftermath of the Battle of Badr (624 CE), the first major military engagement of the Muslim community. It addresses the question of how to distribute the spoils of war, praises those who fought with sincere faith, and draws deep spiritual lessons from the Muslim victory despite being greatly outnumbered. It also establishes principles of warfare, treaty obligations, and the moral conduct of believers.',
    asbabalNuzul: 'The surah was revealed almost entirely after the Battle of Badr. The very first verse was revealed when the companions began to dispute about who was entitled to the war booty, with those who fought in the front lines, those who guarded the Prophet, and those who pursued the fleeing enemy all making their case. The opening verse resolved the dispute by declaring the spoils belong entirely to Allah and the Messenger to distribute as commanded.',
    keyThemes: [
      'The Battle of Badr and divine assistance to the believers',
      'Distribution of war spoils',
      'The qualities of true believers',
      'Obedience to Allah and the Messenger in conflict',
      'Treachery and violation of treaties condemned',
      'Divine intervention in warfare',
      'The importance of preparation for defence'
    ],
    notableVerses: [
      {
        reference: '8:17',
        arabic: 'فَلَمْ تَقْتُلُوهُمْ وَلَٰكِنَّ اللَّهَ قَتَلَهُمْ وَمَا رَمَيْتَ إِذْ رَمَيْتَ وَلَٰكِنَّ اللَّهَ رَمَىٰ',
        translation: 'And you did not kill them, but it was Allah who killed them. And you threw not when you threw, but it was Allah who threw.',
        context: 'Revealed about the Prophet\'s action of throwing a handful of pebbles at the enemy at Badr, after which many of the enemy were blinded. This verse emphasises divine agency behind the apparent human action.'
      },
      {
        reference: '8:46',
        arabic: 'وَأَطِيعُوا اللَّهَ وَرَسُولَهُ وَلَا تَنَازَعُوا فَتَفْشَلُوا وَتَذْهَبَ رِيحُكُمْ',
        translation: 'And obey Allah and His Messenger, and do not dispute and thus lose courage and let your strength depart.',
        context: 'Revealed as a direct lesson from Badr and as a warning ahead of future battles, specifically addressing what later led to the Muslim setback at Uhud when some archers disobeyed the Prophet\'s orders.'
      }
    ]
  },
  {
    number: 9,
    arabicName: 'التوبة',
    englishName: 'The Repentance',
    transliteration: 'at-tawbah',
    verses: 129,
    classification: 'Madani',
    period: 'Late Madinan',
    overview: 'At-Tawbah is the only surah in the Quran that does not begin with the Basmala. Scholars explain this is because it was revealed with the sword (stern judgements) and not mercy, and because it is either a continuation of Al-Anfal or because the omission was the Prophet\'s own deliberate choice. It addresses the dissolution of treaties with polytheists, the Tabuk expedition, the hypocrisy of those who stayed behind, and the concept of sincere repentance.',
    asbabalNuzul: 'The surah was revealed in 9 AH. The opening verses were carried by Ali ibn Abi Talib to be proclaimed at the Hajj pilgrimage, announcing a four-month period for polytheists who had violated their treaties. Verses regarding the Tabuk expedition were revealed to censure those who gave false excuses for not joining. The famous verse of repentance (9:118) was revealed specifically about Ka\'b ibn Malik and two companions who honestly admitted they had no excuse for missing Tabuk.',
    keyThemes: [
      'Dissolution of treaties with those who violated them',
      'The Tabuk expedition and its lessons',
      'Exposure and condemnation of hypocrisy',
      'True repentance and its conditions',
      'The obligation of jihad for those who are able',
      'Zakat as a purification of wealth',
      'The unity of the Muslim community'
    ],
    notableVerses: [
      {
        reference: '9:40',
        arabic: 'إِذْ يَقُولُ لِصَاحِبِهِ لَا تَحْزَنْ إِنَّ اللَّهَ مَعَنَا',
        translation: 'He said to his companion: Do not grieve; indeed Allah is with us.',
        context: 'Revealed about the night the Prophet and Abu Bakr hid in the Cave of Thawr during the Hijra. The Quraysh search party stood at the cave entrance but Allah caused them to turn away, affirming divine protection.'
      },
      {
        reference: '9:128',
        arabic: 'لَقَدْ جَاءَكُمْ رَسُولٌ مِّنْ أَنفُسِكُمْ عَزِيزٌ عَلَيْهِ مَا عَنِتُّمْ',
        translation: 'There has certainly come to you a Messenger from among yourselves. Grievous to him is what you suffer; he is concerned over you and to the believers is kind and merciful.',
        context: 'One of the final verses revealed to the Prophet, describing his compassion for his community. These closing verses are believed to be the last received from Jibril before the revelation was completed.'
      }
    ],
    alternativeNames: ['Bara\'ah (Disavowal)', 'Al-Fadiha (The Exposer)', 'Al-Muqashqisha (That Which Frees from Hypocrisy)']
  },
  {
    number: 10,
    arabicName: 'يونس',
    englishName: 'Jonah',
    transliteration: 'yunus',
    verses: 109,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Surah Yunus is a late Makkan surah that uses the stories of Nuh, Musa, and Yunus (Jonah) to address the persistent rejection of the Quraysh. The surah argues for the Quran\'s divine origin, critiques the irrationality of polytheism, and emphasises that faith must be sincere and not merely adopted at the moment of calamity. The unique acceptance of Yunus\'s people is highlighted as an exceptional case of mass repentance being accepted.',
    asbabalNuzul: 'Revealed late in the Makkan period, this surah responded to the Quraysh\'s demands for the Prophet to produce a different Quran or alter it. Several verses address the accusation that he fabricated the revelation. The narrative of Yunus was particularly relevant because the people of Nineveh believed and were saved, offering hope that the Makkans might similarly turn. The surah was also a response to mockery of the Day of Judgement.',
    keyThemes: [
      'The divine origin of the Quran',
      'The stories of Nuh, Musa, and Yunus as consolation',
      'The futility of polytheism and idol worship',
      'Deathbed repentance is not accepted',
      'Allah\'s universal sovereignty over creation',
      'The Day of Judgement and accountability',
      'Sincere faith versus superficial belief'
    ],
    notableVerses: [
      {
        reference: '10:62',
        arabic: 'أَلَا إِنَّ أَوْلِيَاءَ اللَّهِ لَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ',
        translation: 'Unquestionably, the allies of Allah: there will be no fear concerning them, nor will they grieve.',
        context: 'This verse defines the friends of Allah (awliya) as those who believed and maintained God-consciousness. It is widely cited in Islamic spirituality as the basis for understanding closeness to Allah.'
      }
    ],
    virtues: 'Ibn Abbas reported that Al-Hasan and Husayn were ill and the Prophet recited surah Yunus, Hud, and Yusuf as a healing prayer over them.'
  },
  {
    number: 11,
    arabicName: 'هود',
    englishName: 'Hud',
    transliteration: 'hud',
    verses: 123,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Surah Hud is a powerful late Makkan surah that recounts the stories of seven prophets (Nuh, Hud, Salih, Ibrahim, Lut, Shu\'ayb, and Musa) and the fate of the peoples who rejected them. The surah is characterised by its solemn, weighty tone. The Prophet famously said this surah made him old because of the verse commanding him to remain steadfast. Its central message is the inevitability of divine justice and the need for unwavering perseverance.',
    asbabalNuzul: 'Revealed in the final years before the Hijra when persecution was at its height. The multiple narratives of prophets who persevered alone against entire civilisations were meant to strengthen the Prophet and his followers. When Abu Bakr noticed the Prophet\'s hair had turned grey, the Prophet attributed it to surah Hud and similar surahs, citing specifically the verse "So remain on the right course as you have been commanded" (11:112).',
    keyThemes: [
      'Steadfastness in the face of rejection',
      'Stories of seven prophets and their nations',
      'The inevitability of divine punishment for transgression',
      'The story of Nuh and the great flood',
      'The punishment of the people of Hud and Salih',
      'The destruction of the people of Lut',
      'The importance of istiqamah (remaining firm on the right path)'
    ],
    notableVerses: [
      {
        reference: '11:112',
        arabic: 'فَاسْتَقِمْ كَمَا أُمِرْتَ وَمَن تَابَ مَعَكَ',
        translation: 'So remain on a right course as you have been commanded, and whoever has turned back with you.',
        context: 'The Prophet said: "Hud and its sister surahs have made me old" and cited this verse specifically, because the command to remain steadfast exactly as commanded places an immense weight on the believer.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) said: "Hud and its sisters, Al-Waqi\'ah, Al-Mursalat, An-Naba and At-Takwir, have made me old." (Tirmidhi)'
  },
  {
    number: 12,
    arabicName: 'يوسف',
    englishName: 'Joseph',
    transliteration: 'yusuf',
    verses: 111,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Surah Yusuf is unique in the Quran as it narrates a single story in its entirety, telling the life of Prophet Yusuf (Joseph) from his childhood dream through his trials in the well and in prison, to his eventual rise to power in Egypt and reunion with his family. Allah describes it as "the best of stories." The surah was revealed at the "Year of Sorrow" to console the Prophet after the deaths of his wife Khadijah and uncle Abu Talib.',
    asbabalNuzul: 'This surah was revealed in its entirety during the "Year of Sorrow" (approximately 619 CE), when the Prophet lost both his wife Khadijah and his uncle Abu Talib within a short period, and also faced intense rejection in Ta\'if. The Jews of Madinah, through some Qurayshi visitors, suggested asking the Prophet about a man from their own scriptures (Yusuf), expecting him to fail. The complete and accurate narration that followed was itself proof of prophetic revelation.',
    keyThemes: [
      'Patience through severe trials and injustice',
      'Divine providence guiding human affairs',
      'Forgiveness and reconciliation over vengeance',
      'Chastity and moral integrity under temptation',
      'Dreams as a means of divine communication',
      'The rise of the righteous despite persecution',
      'Family bonds and sibling rivalry'
    ],
    notableVerses: [
      {
        reference: '12:3',
        arabic: 'نَحْنُ نَقُصُّ عَلَيْكَ أَحْسَنَ الْقَصَصِ',
        translation: 'We relate to you the best of stories in what We have revealed to you of this Quran.',
        context: 'This opening designation of Yusuf\'s story as "the best of stories" was itself revealed to encourage those undergoing trials, affirming that the Quran contains the finest example of divine consolation through narrative.'
      },
      {
        reference: '12:87',
        arabic: 'وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ إِنَّهُ لَا يَيْأَسُ مِن رَّوْحِ اللَّهِ إِلَّا الْقَوْمُ الْكَافِرُونَ',
        translation: 'Do not despair of relief from Allah. Indeed, no one despairs of relief from Allah except the disbelieving people.',
        context: 'Ya\'qub\'s words to his sons as they searched for Yusuf and Benyamin in Egypt. This verse is one of the most frequently cited in Islamic pastoral counselling, forbidding despair as a form of disbelief.'
      }
    ],
    virtues: 'The Prophet said: "Teach this surah to your families, for it contains a lesson in patience for every Muslim who is burdened by jealousy and misfortune." It is recommended for those suffering grief to recite it.'
  },
  {
    number: 13,
    arabicName: 'الرعد',
    englishName: 'The Thunder',
    transliteration: 'ar-rad',
    verses: 43,
    classification: 'Madani',
    period: 'Early Madinan',
    overview: 'Ar-Ra\'d is a surah of theological arguments, presenting evidence for monotheism through the signs of nature: rain, thunder, lightning, rivers, and the night and day. It addresses the Quraysh\'s demand for a miraculous sign and explains why the Quran itself is the greatest miracle. The thunder is presented as a divine voice glorifying Allah. The surah contains one of the most famous verses on the nature of change.',
    asbabalNuzul: 'Scholars differ on whether this surah is Makki or Madani, with the majority leaning toward a Madinan origin with some Makkan verses. Several verses were revealed in response to those who demanded the Prophet bring a sign or miracle. Verse 31 addresses the demand: "Even if there were a Quran by which mountains were moved..." The famous verse 13:11 on self-change was revealed in response to questions about why the condition of believers fluctuates.',
    keyThemes: [
      'Signs of Allah in nature as evidence of monotheism',
      'Thunder as a being that glorifies Allah',
      'The power of consistent reliance on Allah',
      'Self-change as a prerequisite for divine change',
      'The Quran as the greatest miracle',
      'Divine knowledge encompassing all things',
      'Consequences for the righteous and the wicked'
    ],
    notableVerses: [
      {
        reference: '13:11',
        arabic: 'إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ',
        translation: 'Indeed, Allah will not change the condition of a people until they change what is in themselves.',
        context: 'One of the most cited Quranic principles in Islamic social thought. This verse was revealed to establish that divine favour and divine wrath are both connected to the spiritual and moral condition a community cultivates in itself.'
      },
      {
        reference: '13:28',
        arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
        translation: 'Verily, in the remembrance of Allah do hearts find rest.',
        context: 'This verse is the Quran\'s most direct statement on the spiritual psychology of tranquillity. It was revealed as a response to the question of what brings peace to the human heart.'
      }
    ]
  },
  {
    number: 14,
    arabicName: 'إبراهيم',
    englishName: 'Abraham',
    transliteration: 'ibrahim',
    verses: 52,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Surah Ibrahim focuses on the mission of prophets to lead their peoples out of darkness into light, using Musa\'s address to the Israelites and Ibrahim\'s prayer for the city of Makkah as its central examples. The surah contains the famous parable of the good word being like a good tree with deep roots, and the evil word like an evil tree uprooted from the earth. Ibrahim\'s prayer for his descendants and for the city he founded is a central passage.',
    asbabalNuzul: 'Revealed in the late Makkan period when the Prophet and his companions faced severe oppression. Ibrahim\'s prayer for Makkah and his family was used to connect the Prophet\'s mission with that of his ancestor. Verses 28-29 were revealed about the leaders of the Quraysh who were killed at the Battle of Badr and whose relatives blamed the Prophet for the destruction of their families.',
    keyThemes: [
      'The mission of prophets to bring people from darkness to light',
      'Ibrahim\'s prayer for Makkah and his descendants',
      'The parable of the good word and evil word',
      'Gratitude and ingratitude to Allah',
      'The Day of Judgement and its terrors',
      'Futility of relying on anyone other than Allah',
      'The timeless nature of prophetic guidance'
    ],
    notableVerses: [
      {
        reference: '14:7',
        arabic: 'وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
        translation: 'And when your Lord proclaimed: If you are grateful, I will surely increase you in favour.',
        context: 'This verse, from Musa\'s address to the Israelites, establishes gratitude as the mechanism for divine increase. It is one of the foundational Quranic statements on the relationship between shukr (gratitude) and divine abundance.'
      }
    ]
  },
  {
    number: 15,
    arabicName: 'الحجر',
    englishName: 'The Rocky Tract',
    transliteration: 'al-hijr',
    verses: 99,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Surah Al-Hijr takes its name from the rocky region inhabited by the people of Thamud (the people of the Prophet Salih), which is referenced in the surah. It opens with the Quran\'s claim to be a preserved reminder, then tells the story of Iblis\'s refusal to prostrate before Adam and his subsequent enmity toward humanity. The surah also narrates the stories of Ibrahim\'s angelic visitors and the destruction of the people of Lut.',
    asbabalNuzul: 'Revealed in the late Makkan period. Several verses were revealed in response to the Quraysh\'s mockery and demands for angels or other signs. The story of the people of Al-Hijr (Thamud) was particularly relevant because the caravan trade route to Syria passed through their ancient ruins, which the Quraysh would have seen and recognised. The reminder of how a prosperous civilisation nearby was utterly destroyed served as a powerful warning.',
    keyThemes: [
      'The Quran as a divinely preserved reminder',
      'The story of Iblis and his enmity toward humanity',
      'Angels visiting Ibrahim and announcing Ishaq',
      'The destruction of the people of Lut',
      'The people of Al-Hijr (Thamud) and their fate',
      'The seven oft-repeated verses (Al-Fatihah)',
      'Patience in the face of mockery and rejection'
    ],
    notableVerses: [
      {
        reference: '15:9',
        arabic: 'إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ',
        translation: 'Indeed, it is We who sent down the Quran and indeed, We will be its guardian.',
        context: 'One of the most frequently cited verses about the divine preservation of the Quran. This promise, made at a time when the Muslims were few and powerless, has been fulfilled across fourteen centuries of history.'
      }
    ]
  },
  {
    number: 16,
    arabicName: 'النحل',
    englishName: 'The Bee',
    transliteration: 'an-nahl',
    verses: 128,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Surah An-Nahl is one of the great Makkan surahs enumerating the blessings Allah has bestowed upon humanity. It uses the bee and its extraordinary ability to produce honey as a sign of divine wisdom and design. The surah covers the signs in nature, the blessings of livestock, agriculture, ships, and the night and day, weaving them into an argument for gratitude and monotheism. It also addresses the prohibition of certain meats and the command to justice.',
    asbabalNuzul: 'Revealed mostly in the late Makkan period, though some scholars include a few final verses as Madinan. The final verses (126-128) regarding responding to harm with measure and patience are considered to have been revealed after the Battle of Uhud, when the Prophet saw the mutilated body of his uncle Hamza and swore to retaliate in kind. These verses counselled restraint and patience instead.',
    keyThemes: [
      'Signs of Allah in nature as evidence of His power and mercy',
      'The extraordinary wisdom in the bee and honey',
      'Gratitude for divine blessings as the proper response',
      'Prohibition of forbidden meats and the concept of necessity',
      'The command to enjoin justice and forbid wrong',
      'The futility and irrationality of polytheism',
      'The Quran as guidance and mercy'
    ],
    notableVerses: [
      {
        reference: '16:90',
        arabic: 'إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ وَإِيتَاءِ ذِي الْقُرْبَىٰ',
        translation: 'Indeed, Allah orders justice and good conduct and giving to relatives and forbids immorality and bad conduct and oppression.',
        context: 'Umar ibn al-Khattab said that when this verse was revealed, the Prophet recited it to him and it caused him to enter Islam. It remains the most comprehensive single verse on Islamic ethics and is recited in Friday sermons worldwide.'
      },
      {
        reference: '16:68',
        arabic: 'وَأَوْحَىٰ رَبُّكَ إِلَى النَّحْلِ أَنِ اتَّخِذِي مِنَ الْجِبَالِ بُيُوتًا',
        translation: 'And your Lord inspired to the bee: Take for yourself among the mountains houses, and among the trees and in that which they construct.',
        context: 'The divine inspiration to the bee is highlighted as evidence of Allah\'s intricate wisdom in creation. The Arabic word for "inspire" (awha) here is the same root used for prophetic revelation, emphasising the divine origin of all instinctive wisdom in creation.'
      }
    ]
  },
  {
    number: 17,
    arabicName: 'الإسراء',
    englishName: 'The Night Journey',
    transliteration: 'al-isra',
    verses: 111,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Surah Al-Isra opens with the miraculous night journey of the Prophet from the Masjid al-Haram in Makkah to the Masjid al-Aqsa in Jerusalem and then to the heavens. The surah contains a comprehensive code of ethics covering duties to parents, neighbours, the poor, and warnings against arrogance. It also addresses the Children of Israel and twice predicts the corruption and punishment of their nation, which many scholars interpret as references to historical events.',
    asbabalNuzul: 'The opening verse was revealed to describe the Isra and Mi\'raj event that occurred approximately one year before the Hijra. The Quraysh considered this claim proof of the Prophet\'s madness and used it as a propaganda tool. Abu Bakr\'s immediate acceptance earned him the title "As-Siddiq" (the truthful). Many of the ethical injunctions in this surah were revealed in response to specific questions or social problems in Makkan society.',
    keyThemes: [
      'The miraculous Night Journey (Isra) to Jerusalem and the Mi\'raj',
      'A comprehensive ethical code for believers',
      'Duties to parents as second only to duty to Allah',
      'The covenant with the Children of Israel',
      'The Quran as the greatest miracle of the Prophet',
      'Prohibition of killing, fornication, and theft',
      'The reality of the human soul'
    ],
    notableVerses: [
      {
        reference: '17:1',
        arabic: 'سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى',
        translation: 'Exalted is He who took His Servant by night from the Masjid al-Haram to the Masjid al-Aqsa.',
        context: 'The verse describing the Isra opens with "Subhan" (Exalted be He), an expression of glorification used when something extraordinary and seemingly impossible is being described, affirming this was a physical miracle beyond natural law.'
      },
      {
        reference: '17:23',
        arabic: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا',
        translation: 'And your Lord has decreed that you not worship except Him, and to parents, good treatment.',
        context: 'The placement of kindness to parents immediately after the command to worship Allah alone was deliberate, as the Quran repeatedly links the two obligations to show their primacy in the believer\'s moral life.'
      }
    ],
    alternativeNames: ['Bani Israil (The Children of Israel)']
  },
  {
    number: 18,
    arabicName: 'الكهف',
    englishName: 'The Cave',
    transliteration: 'al-kahf',
    verses: 110,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Surah Al-Kahf contains four famous parables: the People of the Cave (young men who slept for over 300 years to preserve their faith), the man with two gardens (a lesson on arrogance and gratitude), the story of Musa and Al-Khidr (the limits of human knowledge), and the story of Dhul-Qarnayn (a righteous ruler who contained Yajuj and Majuj). These four narratives collectively address the four great trials: of faith, of wealth, of knowledge, and of power.',
    asbabalNuzul: 'The Quraysh sent a delegation to Jewish rabbis in Madinah to ask for questions to test the Prophet. The rabbis suggested asking about the People of the Cave, a man who travelled the earth, and the soul. The Prophet said he would bring the answer and the revelation was slightly delayed, causing the Quraysh to mock him. Al-Kahf was then revealed in response to these questions about the youth in the cave and Dhul-Qarnayn.',
    keyThemes: [
      'Protection of faith under oppression (the Sleepers of the Cave)',
      'The danger of arrogance and ingratitude for wealth',
      'The limits of human knowledge (Musa and Al-Khidr)',
      'Righteous leadership and containing corruption (Dhul-Qarnayn)',
      'The transience of worldly life',
      'Protection from the trials of the Dajjal',
      'The importance of dhikr and humility'
    ],
    notableVerses: [
      {
        reference: '18:10',
        arabic: 'إِذْ أَوَى الْفِتْيَةُ إِلَى الْكَهْفِ فَقَالُوا رَبَّنَا آتِنَا مِن لَّدُنكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا',
        translation: 'When the youths retreated to the cave and said: Our Lord, grant us from Yourself mercy and prepare for us from our affair right guidance.',
        context: 'The prayer of the young men fleeing religious persecution. This verse is considered a model supplication for those seeking divine protection when facing pressure to abandon their faith.'
      },
      {
        reference: '18:109',
        arabic: 'قُل لَّوْ كَانَ الْبَحْرُ مِدَادًا لِّكَلِمَاتِ رَبِّي لَنَفِدَ الْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَاتُ رَبِّي',
        translation: 'Say: If the sea were ink for the words of my Lord, the sea would be exhausted before the words of my Lord were exhausted.',
        context: 'This verse provides a powerful image of the inexhaustible divine knowledge and was revealed in response to Jewish rabbis who questioned whether the Quran truly encompassed all divine wisdom.'
      }
    ],
    virtues: 'The Prophet said: "Whoever recites Surah Al-Kahf on Friday, it will illuminate him with a light between the two Fridays." (Hakim, Bayhaqi) He also said that the first ten verses protect from the Dajjal (Antichrist).'
  },
  {
    number: 19,
    arabicName: 'مريم',
    englishName: 'Mary',
    transliteration: 'maryam',
    verses: 98,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Surah Maryam is dedicated to the story of Maryam (Mary) and the miraculous birth of Isa (Jesus), making it the only surah named after a woman. It also tells the stories of Zakariyya and his son Yahya (John the Baptist), and briefly mentions Ibrahim, Musa, Ismail, and Idris. The surah was among those recited by the first Muslim emigrants to Abyssinia before the Negus (king), who wept upon hearing it and granted the Muslims protection.',
    asbabalNuzul: 'This surah was revealed during the period of severe persecution in Makkah, before the Hijra to Abyssinia. The story of Maryam and Isa was particularly relevant for the Negus (an Ethiopian Christian king) who gave the Muslim refugees asylum. When Jafar ibn Abi Talib recited this surah to the Negus, the king was so moved by the Quranic account of Mary and Jesus that he drew a line on the ground and said: "The difference between our view and yours is not more than this line."',
    keyThemes: [
      'The miraculous birth of Yahya (John the Baptist)',
      'The miraculous birth of Isa (Jesus) without a father',
      'The purity and honour of Maryam (Mary)',
      'Isa speaking as an infant in the cradle',
      'The Islamic position on the nature of Jesus',
      'Mercy (rahma) as a recurring divine attribute',
      'Stories of multiple prophets and their devotion'
    ],
    notableVerses: [
      {
        reference: '19:30',
        arabic: 'قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا',
        translation: 'He (Isa as an infant) said: Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet.',
        context: 'The infant Isa speaks from the cradle to defend his mother from accusations of immorality. His first words affirm his servitude to Allah, directly countering claims of his divinity. This miraculous speech was itself one of his signs.'
      }
    ],
    virtues: 'The recitation of this surah before the Negus of Abyssinia resulted in the protection of the first Muslim emigrants. Scholars note it is particularly powerful in conveying Islamic theology about Jesus to Christians.'
  },
  {
    number: 20,
    arabicName: 'طه',
    englishName: 'Ta-Ha',
    transliteration: 'ta-ha',
    verses: 135,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Surah Ta-Ha opens with the mysterious letters "Ta-Ha" and addresses the Prophet consolingly, telling him he was not sent the Quran to burden him but as a reminder. The surah then narrates the story of Musa in considerable detail, from the Burning Bush and his mission to Pharaoh, through the crossing of the sea, to the incident of the golden calf in the wilderness. It closes with the story of Adam, Iblis, and the consequences of disobedience.',
    asbabalNuzul: 'According to a well-known narration, this surah was being recited by Khabbab ibn Al-Aratt in his home when Umar ibn Al-Khattab heard it through the door. The surah\'s beauty caused Umar to weep and he immediately went to accept Islam. This account is cited by many classical scholars as evidence of the Quran\'s power to transform hearts. The surah was revealed to encourage the Prophet and to explain the nature of his mission.',
    keyThemes: [
      'The Quran as a mercy, not a burden',
      'The story of Musa from the Burning Bush to his mission',
      'Divine names: Al-Hayy (the Living), Al-Qayyum (the Self-Sustaining)',
      'The Battle between Musa and the sorcerers of Pharaoh',
      'The story of Samiri and the golden calf',
      'The story of Adam and Iblis in the garden',
      'The importance of prayer (as-salah)'
    ],
    notableVerses: [
      {
        reference: '20:14',
        arabic: 'إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدْنِي وَأَقِمِ الصَّلَاةَ لِذِكْرِي',
        translation: 'Indeed, I am Allah. There is no deity except Me, so worship Me and establish prayer for My remembrance.',
        context: 'The words Allah spoke directly to Musa at the Burning Bush, the first revelation to Musa. This verse is the most direct statement of tawhid (monotheism) in the Quran, delivered at the moment of the first prophetic encounter.'
      },
      {
        reference: '20:25-28',
        arabic: 'رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي وَاحْلُلْ عُقْدَةً مِّن لِّسَانِي يَفْقَهُوا قَوْلِي',
        translation: 'My Lord, expand for me my breast and ease for me my task and untie the knot from my tongue that they may understand my speech.',
        context: 'Musa\'s prayer at the Burning Bush before his mission to Pharaoh. This supplication is recited by students and speakers before addressing audiences, as a model prayer for clarity, ease, and effective communication.'
      }
    ]
  },
  {
    number: 21,
    arabicName: 'الأنبياء',
    englishName: 'The Prophets',
    transliteration: 'al-anbiya',
    verses: 112,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Surah Al-Anbiya moves rapidly through the stories of numerous prophets to establish the unity of the prophetic message throughout history. It mentions Ibrahim, Lut, Nuh, Dawud, Sulayman, Ayyub, Ismail, Idris, Dhul-Kifl, Yunus, Zakariyya, Yahya, and Maryam with Isa. The surah emphasises that all prophets called to the same essential message of monotheism and submission to Allah, and that the earth shall be inherited by the righteous.',
    asbabalNuzul: 'Revealed during the middle Makkan period when the Quraysh were intensifying their rejection and mockery. The rapid succession of prophets was meant to show that the rejection of the Prophet Muhammad was part of a long pattern, and that the righteous have always ultimately prevailed. Several verses address specific Qurayshi objections: their claim the Prophet was a poet, a madman, or a sorcerer.',
    keyThemes: [
      'The unity of the prophetic message across history',
      'Stories of multiple prophets in brief succession',
      'All prophets were human beings, not gods',
      'The Hour is approaching while people are heedless',
      'The prayer of Yunus in the belly of the whale',
      'The earth will be inherited by the righteous',
      'The nature of the universe as created and purposeful'
    ],
    notableVerses: [
      {
        reference: '21:87',
        arabic: 'وَذَا النُّونِ إِذ ذَّهَبَ مُغَاضِبًا فَظَنَّ أَن لَّن نَّقْدِرَ عَلَيْهِ فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
        translation: 'And Dhun-Nun (Yunus), when he went off in anger and thought that We would not decree upon him. Then he called out within the darknesses: There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.',
        context: 'The prayer of Yunus from inside the whale (Du\'a Yunus) is one of the most celebrated supplications in the Quran. The Prophet said anyone who makes this prayer sincerely will be answered by Allah.'
      }
    ]
  },
  {
    number: 22,
    arabicName: 'الحج',
    englishName: 'The Pilgrimage',
    transliteration: 'al-hajj',
    verses: 78,
    classification: 'Madani',
    period: 'Early Madinan',
    overview: 'Surah Al-Hajj is distinguished by containing two passages where prostration (sujud) is prescribed. It opens with a vivid and terrifying description of the Day of Judgement and the confusion of the Hour. The surah then transitions to the institution of Hajj and its rituals, the history of the Kaaba, and the first explicit permission given to Muslims to fight in self-defence. It also contains one of the most powerful passages about the signs of Allah in the natural world.',
    asbabalNuzul: 'This surah contains both Makkan and Madinan passages and was likely compiled from revelations received across different periods. The permission to fight (verses 39-40) was the first Quranic authorisation of defensive warfare, revealed shortly after the Hijra when the Muslims were still being persecuted and their properties confiscated in Makkah. The passage on Hajj was revealed to remind the believers of the ancient institution established by Ibrahim.',
    keyThemes: [
      'The terrifying reality of the Day of Judgement',
      'The rituals and spiritual significance of Hajj',
      'Ibrahim and the original calling of people to Hajj',
      'The first permission for defensive warfare',
      'The signs of Allah in the cycle of plant life',
      'Rejection of idolatry and the spiritual deadness of the disbelievers',
      'The universal community of Ibrahim'
    ],
    notableVerses: [
      {
        reference: '22:39-40',
        arabic: 'أُذِنَ لِلَّذِينَ يُقَاتَلُونَ بِأَنَّهُم ظُلِمُوا وَإِنَّ اللَّهَ عَلَىٰ نَصْرِهِمْ لَقَدِيرٌ',
        translation: 'Permission to fight has been given to those who are being fought, because they were wronged. And indeed, Allah is competent to give them victory.',
        context: 'The first verses of the Quran permitting warfare, revealed after years of the Muslims enduring persecution without retaliation. This verse establishes that fighting is permitted only in response to aggression.'
      }
    ]
  },
  {
    number: 23,
    arabicName: 'المؤمنون',
    englishName: 'The Believers',
    transliteration: 'al-muminun',
    verses: 118,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Surah Al-Mu\'minun opens with a magnificent description of the characteristics of successful believers, covering humility in prayer, avoidance of vain talk, payment of zakat, guarding chastity, and fulfilment of trusts. It then presents the story of creation, the stages of human development in the womb, and narratives of Nuh, Musa, Isa, and other prophets. The surah concludes with a powerful passage on the attributes of the successful believer.',
    asbabalNuzul: 'Revealed during the middle Makkan period. The opening verses describing the qualities of believers are among the most beloved in the Quran. Umar ibn Al-Khattab reported that when these verses were revealed, the Prophet said: "Ten verses have been revealed to me, whoever acts on them will enter Paradise." The surah was revealed as a comprehensive portrait of the ideal believer to guide and inspire the early Muslim community under persecution.',
    keyThemes: [
      'The defining qualities of successful believers',
      'The stages of human embryological development',
      'The creation and signs in the natural world',
      'Stories of prophets and their rejected communities',
      'The afterlife and accountability',
      'The futility of idolatry',
      'Sincere prayer and reliance on Allah'
    ],
    notableVerses: [
      {
        reference: '23:1-2',
        arabic: 'قَدْ أَفْلَحَ الْمُؤْمِنُونَ الَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ',
        translation: 'Certainly will the believers have succeeded, those who are humble in their prayer.',
        context: 'The famous opening of the surah. When these verses were revealed, the Prophet looked up to the sky and said: "Ten verses have been revealed to me; whoever establishes them will enter Paradise." The qualities then listed form a complete portrait of the successful believer.'
      }
    ]
  },
  {
    number: 24,
    arabicName: 'النور',
    englishName: 'The Light',
    transliteration: 'an-nur',
    verses: 64,
    classification: 'Madani',
    period: 'Early Madinan',
    overview: 'Surah An-Nur is one of the primary legislative surahs dealing with sexual morality, gender relations, and social conduct in the Muslim community. It was revealed largely in the context of the false accusation (Ifk) against Aisha, the Prophet\'s wife, and lays down strict rules regarding accusations of fornication (qadhf), the requirement of four witnesses, and the obligation of proper conduct in households and social spaces. It contains the famous Verse of Light (Ayat an-Nur).',
    asbabalNuzul: 'The occasion of revelation for much of this surah was the Incident of the Ifk (false accusation) in 5 or 6 AH, when Aisha was falsely accused of adultery by hypocrites after being left behind during a military expedition. The revelation of her innocence through verses 11-20 was one of the most dramatic moments in the Madinan period. The Prophet wept and Aisha\'s parents wept, and the community was deeply moved. Laws regarding slander, witnesses, and modesty followed directly.',
    keyThemes: [
      'Laws regarding fornication and false accusation (qadhf)',
      'The Incident of the Ifk and Aisha\'s vindication',
      'The Verse of Light as a metaphor for divine guidance',
      'Guidelines for entering others\' homes (seeking permission)',
      'Modesty (hijab) and lowering the gaze',
      'The dangers of hypocrisy and slander',
      'Obedience to Allah and the Prophet in all matters'
    ],
    notableVerses: [
      {
        reference: '24:35',
        arabic: 'اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ مَثَلُ نُورِهِ كَمِشْكَاةٍ فِيهَا مِصْبَاحٌ',
        translation: 'Allah is the Light of the heavens and the earth. The example of His light is like a niche within which is a lamp.',
        context: 'Ayat an-Nur (the Verse of Light) is one of the most celebrated verses in the Quran and the subject of extensive mystical and theological commentary. It describes divine guidance as a multilayered, self-sustaining light that illuminates the cosmos.'
      }
    ]
  },
  {
    number: 25,
    arabicName: 'الفرقان',
    englishName: 'The Criterion',
    transliteration: 'al-furqan',
    verses: 77,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Surah Al-Furqan opens by praising Allah who revealed the Quran as "the Criterion" (Al-Furqan), meaning the standard that distinguishes truth from falsehood. The surah refutes the Quraysh\'s objections to the Prophet by presenting him as a human being deliberately sent to walk among the people and engage with them. It concludes with a beautiful description of the "servants of the Most Merciful" (Ibad al-Rahman), presenting the ideal characteristics of the believer.',
    asbabalNuzul: 'Revealed during the middle Makkan period in response to specific objections the Quraysh raised against the Prophet. They asked: "Why was this Quran not revealed to a great man from one of the two cities?" (10:31) and complained that he was not an angel. The surah was revealed to systematically address these objections and to conclude with a portrait of true believers that would inspire the persecuted Muslim community.',
    keyThemes: [
      'The Quran as the criterion between truth and falsehood',
      'Refutation of Qurayshi objections to the Prophet',
      'Punishment of previous nations who rejected their prophets',
      'The nature of Paradise and its inhabitants',
      'The servants of the Most Merciful (Ibad al-Rahman)',
      'Walking humbly on the earth',
      'Night vigil prayer and its spiritual fruits'
    ],
    notableVerses: [
      {
        reference: '25:63',
        arabic: 'وَعِبَادُ الرَّحْمَٰنِ الَّذِينَ يَمْشُونَ عَلَى الْأَرْضِ هَوْنًا',
        translation: 'And the servants of the Most Merciful are those who walk upon the earth easily (in humility).',
        context: 'The beginning of the famous description of "Ibad al-Rahman" (servants of the Most Merciful) spanning verses 63-77. This passage is one of the most beloved in the Quran, providing a complete ethical and spiritual portrait of the ideal Muslim.'
      }
    ]
  },
  {
    number: 26,
    arabicName: 'الشعراء',
    englishName: 'The Poets',
    transliteration: 'ash-shuara',
    verses: 227,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Surah Ash-Shu\'ara takes its name from the concluding passage on poets, which distinguishes between those who use their gifts in service of truth and those who use them for vanity or deception. The surah narrates in detail the stories of seven prophets (Musa, Ibrahim, Nuh, Hud, Salih, Lut, and Shu\'ayb) and ends with the claim that the Quran is a divine revelation, not the work of a poet or a devil.',
    asbabalNuzul: 'Revealed in the middle Makkan period. The closing passage about poets was revealed when the Quraysh accused the Prophet of being a poet and described the Quran as poetry. In Arab culture, poets were considered inspired by jinn and were sometimes treated with scepticism. The surah was also meant to console the Prophet by showing him that all prophets faced similar rejection, and that divine assistance ultimately came.',
    keyThemes: [
      'Stories of seven prophets and their rejected communities',
      'The Prophet is not a poet, soothsayer, or magician',
      'The Quran is a clear Arabic revelation from the trustworthy spirit',
      'Divine vengeance for the oppressors',
      'Distinction between righteous and corrupt use of language',
      'The mercy of Allah for those who believe',
      'The cosmic scope of divine power'
    ],
    notableVerses: [
      {
        reference: '26:193-195',
        arabic: 'نَزَلَ بِهِ الرُّوحُ الْأَمِينُ عَلَىٰ قَلْبِكَ لِتَكُونَ مِنَ الْمُنذِرِينَ بِلِسَانٍ عَرَبِيٍّ مُّبِينٍ',
        translation: 'The Trustworthy Spirit (Jibril) has brought it down upon your heart so that you may be of the warners, in a clear Arabic language.',
        context: 'This verse identifies the angel Jibril as "the Trustworthy Spirit" and confirms the Quran was revealed to the Prophet\'s heart in clear Arabic. This refuted the claim that he composed it himself or received it from jinn.'
      }
    ]
  },
  {
    number: 27,
    arabicName: 'النمل',
    englishName: 'The Ant',
    transliteration: 'an-naml',
    verses: 93,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Surah An-Naml derives its name from the ant whose conversation with its fellow ants was overheard and understood by Sulayman (Solomon). The surah narrates the stories of Musa, Sulayman (including the famous account of the Queen of Sheba and the hoopoe bird), Salih, and Lut. It contains the only occurrence in the Quran of the full phrase "Bismillah al-Rahman al-Rahim" as part of a letter, written by Sulayman to the Queen of Sheba.',
    asbabalNuzul: 'Revealed in the middle Makkan period. The stories of prophets who wielded power (particularly Sulayman as a king-prophet) were consoling to the Muslims who were powerless and persecuted. The detailed account of the Queen of Sheba\'s conversion was likely intended to show that even mighty rulers, when confronted with divine signs, submit. The verse on the hoopoe and Sulayman\'s letter with the Basmala was particularly emphasised.',
    keyThemes: [
      'Sulayman\'s ability to speak with animals and jinn',
      'The Queen of Sheba and her submission to Allah',
      'The hoopoe as a messenger between kings',
      'Musa and the miraculous signs given to him',
      'Salih and the she-camel as a sign for Thamud',
      'The resurrection and what the disbelievers will face',
      'The Quran as guidance for the believers'
    ],
    notableVerses: [
      {
        reference: '27:30',
        arabic: 'إِنَّهُ مِن سُلَيْمَانَ وَإِنَّهُ بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
        translation: 'Indeed, it is from Sulayman, and indeed, it reads: In the name of Allah, the Entirely Merciful, the Especially Merciful.',
        context: 'The letter from Sulayman to the Queen of Sheba (Bilqis), the only place in the Quran where the Basmala appears as part of a narrative rather than as a chapter heading. This indicates the Basmala is a mark of divine letters and sacred correspondence.'
      }
    ]
  },
  {
    number: 28,
    arabicName: 'القصص',
    englishName: 'The Story',
    transliteration: 'al-qasas',
    verses: 88,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Surah Al-Qasas gives the most detailed account of Musa\'s story found in the Quran, tracing his life from birth through his upbringing in Pharaoh\'s palace, his flight to Madyan, his marriage to the daughter of Shu\'ayb, his prophetic call at the Burning Bush, and his confrontation with Pharaoh. The surah draws a parallel between Musa\'s situation and the Prophet\'s to console him during the oppression in Makkah and the grief of leaving his home city.',
    asbabalNuzul: 'Revealed just before the Hijra, when the Prophet was deeply grieved at having to leave Makkah. The extended story of Musa, who also left his homeland and was eventually returned to it, was a direct consolation. Verse 85 ("Indeed, He who ordained the Quran upon you will take you back to your place of return") was specifically revealed at Juhfa, on the road between Makkah and Madinah, as the Prophet wept while looking back at his beloved city.',
    keyThemes: [
      'The detailed story of Musa from birth to prophethood',
      'Divine protection of the righteous even in the palaces of the oppressors',
      'The story of Qarun (Korah) and the dangers of arrogance in wealth',
      'The Prophet\'s grief at leaving Makkah and the promise of return',
      'Connections between the mission of Musa and that of the Prophet',
      'The importance of trusting Allah\'s plan',
      'The distinction between wisdom and arrogance'
    ],
    notableVerses: [
      {
        reference: '28:5',
        arabic: 'وَنُرِيدُ أَن نَّمُنَّ عَلَى الَّذِينَ اسْتُضْعِفُوا فِي الْأَرْضِ',
        translation: 'And We wanted to confer favour upon those who were oppressed in the land and make them leaders and make them inheritors.',
        context: 'Revealed at the height of Israelite oppression under Pharaoh. This verse is frequently applied to the condition of persecuted Muslim minorities as a divine promise that the oppressed will ultimately prevail.'
      }
    ]
  },
  {
    number: 29,
    arabicName: 'العنكبوت',
    englishName: 'The Spider',
    transliteration: 'al-ankabut',
    verses: 69,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Surah Al-Ankabut takes its name from the parable of the spider, whose web is the flimsiest of structures, used to illustrate the weakness of any refuge sought other than Allah. The surah opens with the declaration that every believer will be tested, and lists numerous prophets who were tested and remained steadfast. It was revealed at a time when many early Muslims were facing severe family and societal pressure to abandon Islam.',
    asbabalNuzul: 'Revealed in the late Makkan period, partly in response to the severe torture and killing of new converts. The opening verses about the necessity of trial were revealed when some believers were being tortured to the point of apostasy. Verses 8-9 about not obeying parents who command disbelief were revealed specifically when parents were forcibly trying to make their children renounce Islam. The story of Musa, Ibrahim, Lut, Nuh, and others was meant to remind believers that all prophets were tested.',
    keyThemes: [
      'Every believer will be tested in proportion to their faith',
      'Stories of prophets and their trials',
      'The weakness of everything taken as refuge besides Allah (the spider\'s web)',
      'The Quran as a divine sign',
      'Seeking knowledge and reflection as acts of worship',
      'Emigration for the sake of Allah',
      'Salah (prayer) as protection from evil and immorality'
    ],
    notableVerses: [
      {
        reference: '29:2-3',
        arabic: 'أَحَسِبَ النَّاسُ أَن يُتْرَكُوا أَن يَقُولُوا آمَنَّا وَهُمْ لَا يُفْتَنُونَ',
        translation: 'Do the people think that they will be left to say: We believe, and they will not be tried? But We have certainly tried those before them.',
        context: 'These opening verses were revealed to prepare the early Muslims for the reality that declaring faith would bring tests. They remain one of the most comforting passages for believers in tribulation throughout history.'
      },
      {
        reference: '29:45',
        arabic: 'اتْلُ مَا أُوحِيَ إِلَيْكَ مِنَ الْكِتَابِ وَأَقِمِ الصَّلَاةَ إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ',
        translation: 'Recite what has been revealed to you of the Book and establish prayer. Indeed, prayer prohibits immorality and wrongdoing.',
        context: 'This verse establishes the transformative function of prayer (salah) in Muslim life. It was revealed to encourage the Muslim community to maintain their prayer even under persecution, as it would serve as their greatest protection against moral corruption.'
      }
    ]
  },
  {
    number: 30,
    arabicName: 'الروم',
    englishName: 'The Romans',
    transliteration: 'ar-rum',
    verses: 60,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Surah Ar-Rum opens with a specific historical prophecy: the Romans had been defeated by the Persians, but within three to nine years, the Romans would defeat the Persians. This prophecy was fulfilled at the Battle of Nineveh in 627 CE. The surah uses this prediction as evidence that the Quran is of divine origin, since no human could have known this with such certainty. The surah then discusses signs of Allah in nature, marriage as one of His signs, and the human\'s innate disposition (fitra) toward monotheism.',
    asbabalNuzul: 'The opening verses were revealed around 614 CE when the Persians defeated the Byzantines and captured Jerusalem. The pagan Quraysh celebrated the Persian victory as they identified more with the idol-worshipping Persians than the monotheistic Byzantines. Abu Bakr bet the pagans that the Romans would win back within ten years, based on this revelation. When the Romans defeated Persia in 627 CE, the prophecy was fulfilled exactly, and Abu Bakr won the bet.',
    keyThemes: [
      'The prophecy of Roman victory over Persia',
      'Signs of Allah in nature: rain, lightning, the night and day',
      'Marriage as a divine sign of love and mercy between spouses',
      'The innate human disposition (fitra) toward monotheism',
      'The consequences of corruption spreading on earth',
      'The resurrection and the blowing of the trumpet',
      'Faith and gratitude as the correct human response to creation'
    ],
    notableVerses: [
      {
        reference: '30:21',
        arabic: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً',
        translation: 'And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy.',
        context: 'One of the most frequently cited Quranic verses about marriage, used in Islamic wedding ceremonies. This verse presents the marital relationship as a divine sign and establishes its foundation as tranquillity, affection, and mercy.'
      },
      {
        reference: '30:30',
        arabic: 'فَأَقِمْ وَجْهَكَ لِلدِّينِ حَنِيفًا فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا',
        translation: 'So direct your face toward the religion, inclining to truth. The natural inclination (fitra) of Allah upon which He has created all people.',
        context: 'The verse on fitra (the innate human disposition toward monotheism). The Prophet said: "Every child is born in a state of fitra, then his parents make him a Jew, Christian, or Magian." This verse is the Quranic foundation for the concept of fitra.'
      }
    ]
  },
  {
    number: 31,
    arabicName: 'لُقۡمَان',
    englishName: 'Luqman',
    transliteration: 'luqman',
    verses: 34,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Named after the wise man Luqman, a figure renowned in Arab tradition for his wisdom and moral teaching. The surah presents his counsels to his son as a model of practical and spiritual guidance: to worship Allah alone, to honour parents while holding firm to monotheism, to maintain prayer, to enjoin good and forbid evil, and to cultivate humility. The surah situates this ethical framework within a broader meditation on divine signs in creation and the reality of the Day of Judgement.',
    asbabalNuzul: 'Luqman was revealed in Makkah during a period when the Quraysh challenged the Prophet about the source of his wisdom and questioned the doctrine of resurrection. Several verses were revealed in response to questions about the nature of the soul and the certainty of the Hour. The portrayal of Luqman—a man of wisdom not from the prophetic lineage—served to demonstrate that true wisdom always leads to the same monotheistic truth preached by the Prophet.',
    keyThemes: [
      'Divine wisdom and gratitude',
      'Parental guidance rooted in tawhid',
      'Signs of Allah in creation',
      'Humility and moral character',
      'The reality of the Day of Judgement'
    ],
    notableVerses: [
      {
        reference: '31:13',
        arabic: 'يَٰبُنَيَّ لَا تُشْرِكْ بِٱللَّهِ ۖ إِنَّ ٱلشِّرْكَ لَظُلْمٌ عَظِيمٌ',
        translation: 'O my son, do not associate anything with Allah. Indeed, association [with Him] is great injustice.',
        context: 'The opening counsel of Luqman to his son, identifying shirk as the gravest of wrongs because it places created beings on the level of the Creator.'
      },
      {
        reference: '31:16',
        arabic: 'يَٰبُنَيَّ إِنَّهَآ إِن تَكُ مِثْقَالَ حَبَّةٍ مِّنْ خَرْدَلٍ فَتَكُن فِى صَخْرَةٍ أَوْ فِى ٱلسَّمَٰوَٰتِ أَوْ فِى ٱلْأَرْضِ يَأْتِ بِهَا ٱللَّهُ',
        translation: 'O my son, if it should be the weight of a mustard seed and it should be within a rock or in the heavens or in the earth, Allah will bring it forth.',
        context: 'A vivid affirmation of divine omniscience: no deed, however minute or hidden, escapes Allah\'s knowledge and reckoning.'
      },
      {
        reference: '31:34',
        arabic: 'إِنَّ ٱللَّهَ عِندَهُۥ عِلْمُ ٱلسَّاعَةِ وَيُنَزِّلُ ٱلْغَيْثَ وَيَعْلَمُ مَا فِى ٱلْأَرْحَامِ',
        translation: 'Indeed, Allah—with Him is knowledge of the Hour, and He sends down the rain, and He knows what is in the wombs.',
        context: 'The five matters known only to Allah (al-mafatih al-ghayb), often cited in Islamic theology as definitive boundaries of divine exclusive knowledge.'
      }
    ]
  },
  {
    number: 32,
    arabicName: 'السجدة',
    englishName: 'The Prostration',
    transliteration: 'as-sajdah',
    verses: 30,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'As-Sajdah takes its name from the prostration of true believers mentioned in verse 15. The surah offers a tightly structured argument for the truth of the Quran and the reality of resurrection, addressing Meccan sceptics who denied both. It describes the creation of humanity from clay, the process of ensoulment, and the ultimate return of all souls to their Lord. The contrast between the believers who rise at night in devotion and the wrongdoers awaiting punishment is a central rhetorical feature.',
    asbabalNuzul: 'Revealed in Makkah in the middle period, when disbelievers were dismissing the Prophet\'s message as mere invented tales. The surah directly confronts the claim that a human being could have authored the Quran, affirming its divine origin. It also addresses the denial of resurrection with rational argument: the same God who created from nothing can restore what has perished.',
    keyThemes: [
      'Divine authorship of the Quran',
      'Creation and the human soul',
      'Resurrection and divine judgement',
      'Night prayer and sincere worship',
      'The contrast of belief and disbelief'
    ],
    notableVerses: [
      {
        reference: '32:4',
        arabic: 'ٱللَّهُ ٱلَّذِى خَلَقَ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ وَمَا بَيْنَهُمَا فِى سِتَّةِ أَيَّامٍ ثُمَّ ٱسْتَوَىٰ عَلَى ٱلْعَرْشِ',
        translation: 'Allah is He who created the heavens and the earth and whatever is between them in six days; then He established Himself above the Throne.',
        context: 'Establishes divine sovereignty over creation as the foundation for the surah\'s argument that the same God can raise the dead and author the Quran.'
      },
      {
        reference: '32:16',
        arabic: 'تَتَجَافَىٰ جُنُوبُهُمْ عَنِ ٱلْمَضَاجِعِ يَدْعُونَ رَبَّهُمْ خَوْفًا وَطَمَعًا',
        translation: 'Their sides part from their beds; they supplicate their Lord in fear and hope.',
        context: 'A celebrated description of those who pray tahajjud, forsaking sleep to stand before Allah, cited by scholars as the Quranic basis for the virtue of night prayer.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) would recite As-Sajdah and Surah Al-Insan in the Fajr prayer on Fridays. (Reported by Al-Bukhari and Muslim)'
  },
  {
    number: 33,
    arabicName: 'الأحزاب',
    englishName: 'The Combined Forces',
    transliteration: 'al-ahzab',
    verses: 73,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'Al-Ahzab is a wide-ranging Madinan surah taking its name from the confederate tribes who laid siege to Madinah (the Battle of the Trench, 5 AH/627 CE). It covers a range of social, legal, and ethical matters: the prohibition of adopted sons being treated as biological sons, the unique obligations of the Prophet\'s household, regulations concerning the Prophet\'s marriages, the requirement for the believing women to observe hijab, and the divine trust (amanah) accepted by humanity. It also contains the famous verse of salawat upon the Prophet.',
    asbabalNuzul: 'Many verses were revealed in the aftermath of the Battle of the Trench and the subsequent expulsion of Banu Qurayzah. The surah addresses accusations about the Prophet\'s marriage to Zaynab bint Jahsh, formerly married to his adopted son Zayd, clarifying that adoption in Islam does not create actual lineage. Further verses concerning the Prophet\'s wives respond to incidents within the household that required divine clarification and guidance.',
    keyThemes: [
      'The Battle of the Trench and divine protection',
      'Abolition of adoption as a legal kinship tie',
      'Obligations and honour of the Prophet\'s family',
      'Hijab and social conduct for believing women',
      'Sending blessings upon the Prophet'
    ],
    notableVerses: [
      {
        reference: '33:21',
        arabic: 'لَّقَدْ كَانَ لَكُمْ فِى رَسُولِ ٱللَّهِ أُسْوَةٌ حَسَنَةٌ',
        translation: 'There has certainly been for you in the Messenger of Allah an excellent pattern of conduct.',
        context: 'The foundational verse establishing the Prophet\'s Sunnah as the normative model for Muslim life, and the primary proof-text for following his example in all affairs.'
      },
      {
        reference: '33:56',
        arabic: 'إِنَّ ٱللَّهَ وَمَلَٰٓئِكَتَهُۥ يُصَلُّونَ عَلَى ٱلنَّبِىِّ ۚ يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوا۟ صَلُّوا۟ عَلَيْهِ وَسَلِّمُوا۟ تَسْلِيمًا',
        translation: 'Indeed, Allah and His angels send blessings upon the Prophet. O you who have believed, ask [Allah to confer] blessings upon him and ask [Allah to grant him] peace.',
        context: 'The command to send salawat upon the Prophet, from which scholars derive the obligation of this practice in prayer and the great reward attached to it generally.'
      },
      {
        reference: '33:72',
        arabic: 'إِنَّا عَرَضْنَا ٱلْأَمَانَةَ عَلَى ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ وَٱلْجِبَالِ فَأَبَيْنَ أَن يَحْمِلْنَهَا',
        translation: 'Indeed, We offered the trust to the heavens and the earth and the mountains, but they declined to bear it and feared it; but the human being undertook to bear it.',
        context: 'A profound verse on the human capacity for moral responsibility and accountability, widely discussed by exegetes regarding the nature of the divine trust.'
      }
    ]
  },
  {
    number: 34,
    arabicName: 'سبأ',
    englishName: 'Sheba',
    transliteration: 'saba',
    verses: 54,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Named after the ancient South Arabian kingdom of Sheba (Saba\'), this surah addresses the core Meccan objections to the Prophet\'s message: the denial of resurrection, the mockery of the Prophet\'s warnings, and the arrogance of wealth. It recounts the blessings granted to Dawud and Sulayman as evidence of divine favour, and contrasts them with the people of Saba\', who rejected gratitude and were destroyed. The surah warns that worldly prosperity is a trial, not a sign of divine approval.',
    asbabalNuzul: 'Revealed in the middle Makkan period in response to the Quraysh\'s continuous ridicule of the Prophet and their denial of resurrection. The story of Saba\'—a people given every blessing yet ungrateful—was a direct warning to the prosperous Quraysh. References to the power given to Dawud and Sulayman reinforced the argument that Allah rewards the faithful and holds the arrogant to account.',
    keyThemes: [
      'Divine knowledge encompassing all creation',
      'Gratitude and the fate of ungrateful nations',
      'The story of Dawud and Sulayman',
      'The collapse of the kingdom of Saba\'',
      'Refutation of intercession for idols'
    ],
    notableVerses: [
      {
        reference: '34:3',
        arabic: 'لَا يَعْزُبُ عَنْهُ مِثْقَالُ ذَرَّةٍ فِى ٱلسَّمَٰوَٰتِ وَلَا فِى ٱلْأَرْضِ',
        translation: 'Not absent from Him is an atom\'s weight within the heavens or within the earth.',
        context: 'A declaration of absolute divine omniscience used here to refute those who denied that Allah would bother to resurrect and account for individuals.'
      },
      {
        reference: '34:15',
        arabic: 'لَقَدْ كَانَ لِسَبَإٍ فِى مَسْكَنِهِمْ ءَايَةٌ ۖ جَنَّتَانِ عَن يَمِينٍ وَشِمَالٍ',
        translation: 'There was for [the tribe of] Sheba in their dwelling place a sign: two gardens on the right and on the left.',
        context: 'The opening of the story of Saba\', illustrating how divine blessing can be squandered through ingratitude and how civilisations fall when they turn away from Allah.'
      }
    ]
  },
  {
    number: 35,
    arabicName: 'فاطر',
    englishName: 'The Originator',
    transliteration: 'fatir',
    verses: 45,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Also known as Al-Mala\'ikah (The Angels), Fatir opens with the majestic image of Allah as the Originator of the heavens and earth who appoints angels with two, three, or four wings as messengers. The surah systematically refutes polytheism by demonstrating the complete inability of idols to create, provide, or even hear. It distinguishes between those who believe and act righteously and those who persist in ingratitude. The diversity within creation—mountains, colours, water, and peoples—is presented as signs pointing to a single Creator.',
    asbabalNuzul: 'Revealed in the middle Makkan period as part of the sustained Quranic argument against polytheism. The Quraysh\'s attachment to intermediary deities is addressed by demonstrating that these cannot intercede, cannot create, and cannot benefit. The verses consoling the Prophet (35:8) were revealed to ease his distress over the persistent rejection he faced from his people.',
    keyThemes: [
      'Allah as the sole Originator and Creator',
      'The role and nature of angels',
      'Human dependence on Allah\'s provision',
      'Signs of divine power in natural diversity',
      'The inheritance of the Book by the chosen community'
    ],
    notableVerses: [
      {
        reference: '35:1',
        arabic: 'ٱلْحَمْدُ لِلَّهِ فَاطِرِ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضِ جَاعِلِ ٱلْمَلَٰٓئِكَةِ رُسُلًا',
        translation: 'All praise is due to Allah, Creator of the heavens and the earth, who made the angels messengers having wings, two or three or four.',
        context: 'The surah\'s magnificent opening establishes divine majesty through the twin affirmations of creative power and appointment of angelic intermediaries.'
      },
      {
        reference: '35:28',
        arabic: 'إِنَّمَا يَخْشَى ٱللَّهَ مِنْ عِبَادِهِ ٱلْعُلَمَٰٓؤُا۟',
        translation: 'Only those fear Allah, from among His servants, who have knowledge.',
        context: 'A celebrated verse affirming that true knowledge of Allah\'s attributes necessarily produces reverent awe; frequently cited as the Quranic basis for the elevated station of scholars.'
      }
    ]
  },
  {
    number: 36,
    arabicName: 'يس',
    englishName: 'Ya Sin',
    transliteration: 'ya-sin',
    verses: 83,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Ya-Sin is often called "the heart of the Quran" in the hadith tradition and is among the most recited surahs. It addresses the stubborn denial of the Meccans by presenting three powerful proofs: the story of the People of the City (whose rejection of divine messengers ended in destruction), the signs of Allah in the natural world, and the rational argument for resurrection. The surah is characterised by vivid imagery and a rhetorical urgency that makes the truth of divine power and the reality of judgement undeniable.',
    asbabalNuzul: 'Revealed in the middle Makkan period, Ya-Sin responded to the Quraysh\'s insistence that the Prophet was a mere poet or madman. The "people of the city" story (often identified with Antioch) served as a historical warning that rejecting divine messengers carries fatal consequences. Verse 9 describing the barrier before and behind those who deny was revealed to describe the spiritual blindness of those who refused to see the signs around them.',
    keyThemes: [
      'Affirmation of prophethood against accusations of madness',
      'The parable of the People of the City',
      'Divine signs in agriculture and celestial motion',
      'The rational proof for resurrection',
      'Divine sovereignty over life and death'
    ],
    notableVerses: [
      {
        reference: '36:36',
        arabic: 'سُبْحَٰنَ ٱلَّذِى خَلَقَ ٱلْأَزْوَٰجَ كُلَّهَا مِمَّا تُنۢبِتُ ٱلْأَرْضُ وَمِنْ أَنفُسِهِمْ وَمِمَّا لَا يَعْلَمُونَ',
        translation: 'Exalted is He who created all pairs—from what the earth grows and from themselves and from that which they do not know.',
        context: 'A verse praised for anticipating the discovery that all living things come in pairs, cited as one of the Quran\'s scientific indications.'
      },
      {
        reference: '36:82',
        arabic: 'إِنَّمَآ أَمْرُهُۥٓ إِذَآ أَرَادَ شَيْـًٔا أَن يَقُولَ لَهُۥ كُن فَيَكُونُ',
        translation: 'His command is only when He intends a thing that He says to it, "Be," and it is.',
        context: 'The iconic "Kun fayakun" verse expressing Allah\'s absolute creative power and the immediacy of divine will, widely memorised and recited.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) said: "Everything has a heart, and the heart of the Quran is Ya-Sin. Whoever reads Ya-Sin, Allah will record for him a reward equal to reading the entire Quran ten times." (Reported by At-Tirmidhi)'
  },
  {
    number: 37,
    arabicName: 'الصافات',
    englishName: 'Those Ranged in Ranks',
    transliteration: 'as-saffat',
    verses: 182,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'As-Saffat opens with three oaths by the angels who stand in ranks before Allah, setting the tone of heavenly order and divine sovereignty. The surah then narrates in sequence the stories of Nuh, Ibrahim, Ismail (and the great trial of sacrifice), Musa, Harun, Ilyas, Lut, and Yunus—each demonstrating the consistent pattern of divine support for prophets and destruction for their rejecters. The surah closes with a resounding declaration that Allah\'s servants will be victorious and His messengers will be aided.',
    asbabalNuzul: 'Revealed in the middle Makkan period when the Prophet and early believers were under intense pressure. The surah\'s long sequence of prophetic narratives served to assure the Prophet that he stood in an unbroken line of divinely supported messengers, and that just as each prophet was ultimately vindicated, so too would he be. The story of Ibrahim and Ismail\'s trial (37:100-111) was particularly significant in establishing the Quranic account of the sacrifice.',
    keyThemes: [
      'Angelic order and divine sovereignty',
      'Prophetic narratives as a pattern of divine support',
      'The great trial of Ibrahim and Ismail',
      'Refutation of those who attribute daughters to Allah',
      'The ultimate victory of Allah\'s servants'
    ],
    notableVerses: [
      {
        reference: '37:102',
        arabic: 'قَالَ يَٰٓأَبَتِ ٱفْعَلْ مَا تُؤْمَرُ ۖ سَتَجِدُنِىٓ إِن شَآءَ ٱللَّهُ مِنَ ٱلصَّٰبِرِينَ',
        translation: 'He said, "O my father, do what you are commanded. You will find me, if Allah wills, of the steadfast."',
        context: 'Ismail\'s sublime response to his father Ibrahim when informed of the divine command to sacrifice him—a model of voluntary submission celebrated as the spirit of Eid al-Adha.'
      },
      {
        reference: '37:180',
        arabic: 'سُبْحَٰنَ رَبِّكَ رَبِّ ٱلْعِزَّةِ عَمَّا يَصِفُونَ',
        translation: 'Exalted is your Lord, the Lord of honour, above what they describe.',
        context: 'The surah\'s closing tasbih, which together with the following two verses forms a frequently recited three-verse conclusion asserting divine glory, peace upon messengers, and praise.'
      }
    ]
  },
  {
    number: 38,
    arabicName: 'ص',
    englishName: 'Sad',
    transliteration: 'sad',
    verses: 88,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Named after the single Arabic letter Sad with which it opens, this surah addresses the arrogance of the Quraysh leaders who rejected the Prophet out of tribal jealousy and pride. It presents the stories of Dawud, Sulayman, and Ayyub as models of prophetic character—power combined with gratitude, and suffering met with patience. The surah also contains the extended account of Iblis\'s refusal to prostrate to Adam and his vow to mislead humanity, setting the stage for the cosmic conflict between guidance and misguidance.',
    asbabalNuzul: 'Scholars report that leading Qurayshi elders, including Abu Jahl and Abu Lahab, visited Abu Talib to pressure him to withdraw his support from the Prophet, claiming that a man from the tribe of Makhzum or Abd Shams was more deserving of prophethood. This tribal rejection prompted the revelation of the surah\'s opening verses on the arrogance of disbelievers. The story of Dawud (38:21-25) was revealed regarding a specific incident requiring prophetic self-examination.',
    keyThemes: [
      'Arrogance as the root of disbelief',
      'The stories of Dawud, Sulayman, and Ayyub as prophetic models',
      'The trial of Iblis and the origin of human enmity',
      'Patience in the face of persecution',
      'Divine justice on the Day of Reckoning'
    ],
    notableVerses: [
      {
        reference: '38:29',
        arabic: 'كِتَٰبٌ أَنزَلْنَٰهُ إِلَيْكَ مُبَٰرَكٌ لِّيَدَّبَّرُوٓا۟ ءَايَٰتِهِۦ وَلِيَتَذَكَّرَ أُو۟لُوا۟ ٱلْأَلْبَٰبِ',
        translation: 'A blessed Book which We have revealed to you, [O Muhammad], that they might reflect upon its verses and that those of understanding would be reminded.',
        context: 'A key verse on the purpose of the Quran: not merely recitation but contemplation (tadabbur). Frequently cited by scholars emphasising the importance of deep engagement with the text.'
      },
      {
        reference: '38:82',
        arabic: 'قَالَ فَبِعِزَّتِكَ لَأُغْوِيَنَّهُمْ أَجْمَعِينَ',
        translation: 'He said, "By Your might, I will surely mislead them all."',
        context: 'Iblis\'s declaration of his intention to mislead humanity, an important theological statement on the nature of satanic enmity and the need for ongoing vigilance.'
      }
    ]
  },
  {
    number: 39,
    arabicName: 'الزمر',
    englishName: 'The Groups',
    transliteration: 'az-zumar',
    verses: 75,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Az-Zumar takes its name from the groups (zumar) of people who will be driven to the Fire and to Paradise on the Day of Judgement. The surah presents a powerful theological argument for sincere worship (ikhlas): Allah does not need any associates, yet people stubbornly invent intermediaries. It addresses those who have wronged themselves with an extraordinary verse of hope—that Allah forgives all sins—and closes with the majestic scene of the final judgement. The surah is noted for the beauty and depth of its theological content.',
    asbabalNuzul: 'Revealed in the late Makkan period, the surah addressed the practice of the Quraysh who worshipped idols as intercessors with Allah (39:3). The famous verse of hope (39:53) was revealed in response to companions who feared that their pre-Islamic sins were too great for forgiveness, assuring them of the boundless mercy of Allah. The surah\'s meditation on the Quran as a healing and warning was revealed as the believers were confronting intense persecution.',
    keyThemes: [
      'Sincere worship (ikhlas) as the essence of Islam',
      'Rejection of polytheistic intercession',
      'Divine mercy and the call to repentance',
      'The signs of Allah in creation and the human body',
      'The scene of judgement and the groups of the hereafter'
    ],
    notableVerses: [
      {
        reference: '39:53',
        arabic: 'قُلْ يَٰعِبَادِىَ ٱلَّذِينَ أَسْرَفُوا۟ عَلَىٰٓ أَنفُسِهِمْ لَا تَقْنَطُوا۟ مِن رَّحْمَةِ ٱللَّهِ ۚ إِنَّ ٱللَّهَ يَغْفِرُ ٱلذُّنُوبَ جَمِيعًا',
        translation: 'Say, "O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins."',
        context: 'Considered by many scholars the most hopeful verse in the Quran. It is an unconditional address to those who have sinned excessively, opening the door of tawbah without condition other than turning to Allah.'
      },
      {
        reference: '39:9',
        arabic: 'أَمَّنْ هُوَ قَٰنِتٌ ءَانَآءَ ٱلَّيْلِ سَاجِدًا وَقَآئِمًا يَحْذَرُ ٱلْءَاخِرَةَ وَيَرْجُوا۟ رَحْمَةَ رَبِّهِۦ',
        translation: 'Is one who is devoutly obedient during periods of the night, prostrating and standing [in prayer], fearing the Hereafter and hoping for the mercy of his Lord [like one who does not]?',
        context: 'A rhetorical question contrasting the one who worships sincerely with the heedless, concluding with the famous rhetorical question: "Are those who know equal to those who do not know?"'
      }
    ]
  },
  {
    number: 40,
    arabicName: 'غافر',
    englishName: 'The Forgiver',
    transliteration: 'ghafir',
    verses: 85,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Also known as Al-Mu\'min (The Believer), Ghafir is the first of the seven Hawamim surahs (40–46), all of which begin with the letters Ha Mim. The surah takes its primary name from the divine attribute of Al-Ghafir (The Forgiver) mentioned in verse 3. Its central narrative is the speech of the Believer of Pharaoh\'s family—a man who had concealed his faith—who rose to defend Musa with a passionate theological argument. The surah demonstrates that truthful voices will always arise, even in the courts of tyrants.',
    asbabalNuzul: 'Revealed in the late Makkan period when the Prophet and believers faced deadly threats from Qurayshi leaders who plotted to silence the message. The story of the Believing Man of Pharaoh\'s family (40:28-45) offered the Prophet and his companions an example of how a solitary voice of faith can challenge an entire court of disbelief. The repeated divine name Al-Ghafir offered consolation that Allah forgives and accepts repentance even from those who had strayed.',
    keyThemes: [
      'Divine forgiveness and acceptance of repentance',
      'The believing man of Pharaoh\'s family as a model of courage',
      'The reality of divine judgement and the Last Day',
      'Supplication as the essence of worship',
      'The fate of those who arrogantly reject truth'
    ],
    notableVerses: [
      {
        reference: '40:44',
        arabic: 'وَأُفَوِّضُ أَمْرِىٓ إِلَى ٱللَّهِ ۚ إِنَّ ٱللَّهَ بَصِيرٌۢ بِٱلْعِبَادِ',
        translation: 'And I entrust my affair to Allah. Indeed, Allah is Seeing of [His] servants.',
        context: 'The climactic statement of the believing man of Pharaoh\'s household, embodying the virtue of tawakkul (complete reliance on Allah) in the face of mortal threat.'
      },
      {
        reference: '40:60',
        arabic: 'وَقَالَ رَبُّكُمُ ٱدْعُونِىٓ أَسْتَجِبْ لَكُمْ',
        translation: 'And your Lord says, "Call upon Me; I will respond to you."',
        context: 'A direct divine command to supplicate, paired with a promise of response. Scholars cite this as the foundational Quranic proof for the obligation and virtue of du\'a.'
      }
    ]
  },
  {
    number: 41,
    arabicName: 'فصلت',
    englishName: 'Explained in Detail',
    transliteration: 'fussilat',
    verses: 54,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Also known as Ha Mim As-Sajdah, Fussilat takes its name from the Quran\'s own description of itself as a book "explained in detail" (41:3). The surah presents the message of monotheism to an audience that has been thoroughly warned: those who believe will find healing and mercy, while those who turn away will be faced with divine testimony from their own limbs on the Day of Judgement. The surah contains one of the most important descriptions of the Quran as a self-evident proof and the divine promise to show signs in the universe and within themselves.',
    asbabalNuzul: 'Reported to have been revealed when the Prophet recited its opening verses to Utbah ibn Rabi\'ah, one of the senior Qurayshi leaders, who came to negotiate with him. As Utbah listened, he was so struck by the recitation that he returned to his companions and advised them not to interfere with Muhammad. The incident illustrated the Quran\'s inherent power to affect even the most resistant hearts.',
    keyThemes: [
      'The Quran as a book of clear explanation and healing',
      'Creation in six periods as a sign of divine power',
      'Warning to those who persistently reject truth',
      'Testimony of human limbs on the Day of Judgement',
      'Divine signs in the universe and within the self'
    ],
    notableVerses: [
      {
        reference: '41:30',
        arabic: 'إِنَّ ٱلَّذِينَ قَالُوا۟ رَبُّنَا ٱللَّهُ ثُمَّ ٱسْتَقَٰمُوا۟ تَتَنَزَّلُ عَلَيْهِمُ ٱلْمَلَٰٓئِكَةُ',
        translation: 'Indeed, those who have said, "Our Lord is Allah," and then remained steadfast—the angels will descend upon them.',
        context: 'A celebrated verse on istiqamah (steadfastness) and the angelic assurance given to those who combine belief with consistent practice, promising them tranquillity in this life and the next.'
      },
      {
        reference: '41:53',
        arabic: 'سَنُرِيهِمْ ءَايَٰتِنَا فِى ٱلْءَافَاقِ وَفِىٓ أَنفُسِهِمْ حَتَّىٰ يَتَبَيَّنَ لَهُمْ أَنَّهُ ٱلْحَقُّ',
        translation: 'We will show them Our signs in the horizons and within themselves until it becomes clear to them that it is the truth.',
        context: 'A forward-looking verse promising that the external universe and the human interior will both yield ever-clearer evidence of divine truth—often cited in the context of scientific inquiry and self-reflection.'
      }
    ]
  },
  {
    number: 42,
    arabicName: 'الشورى',
    englishName: 'The Consultation',
    transliteration: 'ash-shura',
    verses: 53,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Ash-Shura takes its name from the principle of mutual consultation (shura) mentioned as a characteristic of the believers in verse 38. The surah opens with two sets of disconnected letters (Ha Mim, \'Ain Sin Qaf) and moves through an extended meditation on divine unity, prophetic succession, the diversity of religious communities, and the modes by which Allah communicates with human beings—through revelation, from behind a veil, or through a messenger. The surah establishes that all the prophets brought the same essential religion.',
    asbabalNuzul: 'Revealed in the late Makkan period, the surah addressed the Quraysh\'s bewilderment at the idea of revelation coming to a human being. The extended discussion of how Allah communicates (42:51) was particularly important in clarifying the nature of prophethood. The principle of shura, while stated briefly, was expanded in the Madinan legislation and became a cornerstone of Islamic political thought.',
    keyThemes: [
      'Unity of the prophetic message across all communities',
      'The modes of divine communication with prophets',
      'Consultation as a principle of the believing community',
      'Forgiveness of sins through sincere repentance',
      'Divine power over creation and human affairs'
    ],
    notableVerses: [
      {
        reference: '42:11',
        arabic: 'لَيْسَ كَمِثْلِهِۦ شَىْءٌ ۖ وَهُوَ ٱلسَّمِيعُ ٱلْبَصِيرُ',
        translation: 'There is nothing like Him, and He is the Hearing, the Seeing.',
        context: 'The foundational verse of Islamic theology on divine transcendence (tanzih), establishing that nothing in creation resembles Allah while affirming His attributes of hearing and sight.'
      },
      {
        reference: '42:51',
        arabic: 'وَمَا كَانَ لِبَشَرٍ أَن يُكَلِّمَهُ ٱللَّهُ إِلَّا وَحْيًا أَوْ مِن وَرَآئِ حِجَابٍ أَوْ يُرْسِلَ رَسُولًا',
        translation: 'And it is not for any human being that Allah should speak to him except by revelation or from behind a partition or that He sends a messenger to reveal, by His permission, what He wills.',
        context: 'A key verse defining the three modes of divine communication with human prophets: direct inspiration, speech from behind a veil (as with Musa), and angelic revelation.'
      }
    ]
  },
  {
    number: 43,
    arabicName: 'الزخرف',
    englishName: 'The Gold Adornments',
    transliteration: 'az-zukhruf',
    verses: 89,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Az-Zukhruf takes its name from the gold adornments (zukhruf) mentioned in verse 35, where worldly luxury is described as a brief pleasure that Allah grants even to disbelievers. The surah attacks Meccan polytheism from multiple angles: the absurdity of attributing daughters to Allah while preferring sons for themselves, the illogic of following the religion of ancestors without examination, and the story of Musa\'s rejection by Pharaoh as a historical precedent for the Prophet\'s rejection. It also addresses the Christian claim about \'Isa, affirming his status as a prophet and servant of Allah.',
    asbabalNuzul: 'Revealed in the late Makkan period, the surah responded to several Qurayshi objections. When the Prophet recited Quranic verses criticising ancestral religion, the Quraysh cited their traditions as justification (43:23-24). The discussion of \'Isa (43:57-65) was apparently prompted by a debate in which the Quraysh used the Christian veneration of Jesus as an argument that worshipping others besides Allah was acceptable.',
    keyThemes: [
      'The divine origin and clarity of the Quran',
      'Critique of blind adherence to ancestral religion',
      'The story of Musa and Pharaoh',
      '\'Isa as a servant and prophet, not divine',
      'The emptiness of worldly adornments compared to the hereafter'
    ],
    notableVerses: [
      {
        reference: '43:3',
        arabic: 'إِنَّا جَعَلْنَٰهُ قُرْءَٰنًا عَرَبِيًّا لَّعَلَّكُمْ تَعْقِلُونَ',
        translation: 'Indeed, We have made it an Arabic Quran that you might understand.',
        context: 'Establishes the reason for revelation in Arabic: so that the primary audience would have no excuse of incomprehension. Scholars use this to discuss the linguistic miracle of the Quran.'
      },
      {
        reference: '43:61',
        arabic: 'وَإِنَّهُۥ لَعِلْمٌ لِّلسَّاعَةِ',
        translation: 'And indeed, he [\'Isa] is knowledge of the Hour.',
        context: 'A reference to \'Isa\'s descent before the Day of Judgement as a sign of its imminence, cited in traditions about the major signs of the Last Day.'
      }
    ]
  },
  {
    number: 44,
    arabicName: 'الدخان',
    englishName: 'The Smoke',
    transliteration: 'ad-dukhan',
    verses: 59,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Ad-Dukhan takes its name from the smoke (dukhan) mentioned in verse 10 as one of the signs of the approaching Last Hour. The surah celebrates the revelation of the Quran on the blessed night of Laylat al-Qadr and presents this as the definitive sign of divine mercy and guidance. It then moves through the story of Musa and Pharaoh—specifically Pharaoh\'s belated faith at the moment of drowning—and closes with a vivid description of the tree of Zaqqum in Hell and the joys of the Garden awaiting the righteous.',
    asbabalNuzul: 'Revealed in the late Makkan period during a severe drought that afflicted the Quraysh, which the Prophet had prayed for as a consequence of their persistent rejection. Verse 10 (the smoke) refers either to the literal haze seen during the famine or to an eschatological sign. The story of Pharaoh\'s false faith (44:27-29) was a warning that belated belief at the moment of destruction is not accepted—directed at those who similarly delayed accepting the truth.',
    keyThemes: [
      'The Quran as a mercy revealed on a blessed night',
      'The smoke as a sign of the Last Hour',
      'The story of Musa and Pharaoh: rejected faith',
      'The tree of Zaqqum as a punishment of Hell',
      'The rewards of Paradise for the righteous'
    ],
    notableVerses: [
      {
        reference: '44:3',
        arabic: 'إِنَّآ أَنزَلْنَٰهُ فِى لَيْلَةٍ مُّبَٰرَكَةٍ',
        translation: 'Indeed, We sent it down during a blessed night.',
        context: 'Identifies the night of the Quran\'s revelation as blessed, connected by scholars to Laylat al-Qadr in Ramadan. A key verse in establishing the sanctity of Ramadan and its final ten nights.'
      },
      {
        reference: '44:10',
        arabic: 'فَٱرْتَقِبْ يَوْمَ تَأْتِى ٱلسَّمَآءُ بِدُخَانٍ مُّبِينٍ',
        translation: 'Then watch for the Day when the sky will bring a visible smoke.',
        context: 'The verse that gives the surah its name; scholars differ on whether this refers to the famine of Makkah or to a major sign preceding the Day of Judgement.'
      }
    ]
  },
  {
    number: 45,
    arabicName: 'الجاثية',
    englishName: 'The Crouching',
    transliteration: 'al-jathiyah',
    verses: 37,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Al-Jathiyah takes its name from the scene in verse 28 where every community will crouch on their knees before Allah on the Day of Judgement. The surah presents a sustained argument that the signs in creation—the heavens, the earth, human beings themselves, and the alternation of night and day—are sufficient evidence for any who choose to reflect. It then addresses those who reduce truth to mere conjecture and follow their desires, contrasting them with those who hold firm to revealed guidance. The Book given to the Children of Israel is mentioned as a precedent for the Quran.',
    asbabalNuzul: 'Revealed in the late Makkan period as part of the Hawamim sequence. The surah responded to the Qurayshi materialists who denied any divine plan or afterlife. The reference to the Children of Israel receiving the Book (45:16-17) was intended to show the Quraysh that revealed scripture was the norm of divine communication with human communities, and that the Quran continued this tradition.',
    keyThemes: [
      'Signs of divine power in creation',
      'Human subjugation of nature as divine gift',
      'The futility of following desire over revealed truth',
      'The scene of crouching communities on Judgement Day',
      'Divine sovereignty and sole ownership of judgement'
    ],
    notableVerses: [
      {
        reference: '45:12',
        arabic: 'ٱللَّهُ ٱلَّذِى سَخَّرَ لَكُمُ ٱلْبَحْرَ لِتَجْرِىَ ٱلْفُلْكُ فِيهِ بِأَمْرِهِۦ',
        translation: 'Allah is He who subjected the sea for you so that ships may sail through it by His command.',
        context: 'Part of a series of verses on divine subjugation (taskhir) of natural forces for human benefit, framing human civilisation as a gift requiring gratitude rather than arrogance.'
      },
      {
        reference: '45:28',
        arabic: 'وَتَرَىٰ كُلَّ أُمَّةٍ جَاثِيَةً',
        translation: 'And you will see every nation crouching; every nation will be called to its record.',
        context: 'The verse that gives the surah its name, depicting the universal humbling of all peoples before divine judgement.'
      }
    ]
  },
  {
    number: 46,
    arabicName: 'الأحقاف',
    englishName: 'The Wind-Curved Sandhills',
    transliteration: 'al-ahqaf',
    verses: 35,
    classification: 'Makki',
    period: 'Late Makkan',
    overview: 'Al-Ahqaf is the final surah of the Hawamim group and takes its name from the sandy region of Al-Ahqaf in southern Arabia where the \'Ad people lived before their destruction. The surah addresses the Quraysh\'s rejection of the Quran by inviting them to compare it with previous scriptures, narrating the destruction of \'Ad as a warning, and remarkably recounting the episode of the jinn who listened to the Quran and immediately believed—a contrast that shamed the human disbelievers. It also affirms the obligations of children towards parents.',
    asbabalNuzul: 'Revealed in the late Makkan period as the final surah of the Hawamim sequence. The episode of the jinn listening to the Quran (46:29-32) is reported to have occurred during the Prophet\'s return from Ta\'if, where he had been rejected and stoned. While human beings rejected his message, unseen beings accepted it—a powerful consolation and a humbling contrast for the Quraysh.',
    keyThemes: [
      'The Quran as confirmation of previous scriptures',
      'Honouring and dutiful treatment of parents',
      'The story of \'Ad and the howling wind as a warning',
      'The jinn who listened to the Quran and believed',
      'Patience in the face of rejection'
    ],
    notableVerses: [
      {
        reference: '46:15',
        arabic: 'وَوَصَّيْنَا ٱلْإِنسَٰنَ بِوَٰلِدَيْهِ إِحْسَٰنًا',
        translation: 'And We have enjoined upon man, to his parents, good treatment.',
        context: 'A comprehensive command of ihsan (excellent treatment) towards parents, connected here to the particular hardship of a mother\'s pregnancy and nursing, making the obligation especially weighty.'
      },
      {
        reference: '46:29',
        arabic: 'وَإِذْ صَرَفْنَآ إِلَيْكَ نَفَرًا مِّنَ ٱلْجِنِّ يَسْتَمِعُونَ ٱلْقُرْءَانَ',
        translation: 'And [mention] when We directed to you a few of the jinn, listening to the Quran.',
        context: 'Opens the famous passage on the jinn who heard the Quran and immediately embraced Islam, which is also the subject of Surah Al-Jinn (72).'
      }
    ]
  },
  {
    number: 47,
    arabicName: 'محمد',
    englishName: 'Muhammad',
    transliteration: 'muhammad',
    verses: 38,
    classification: 'Madani',
    period: 'Early Madinan',
    overview: 'Named after the Prophet Muhammad (peace be upon him), this is one of only two surahs named directly after him. Revealed in the early Madinan period, it addresses the newly established community\'s confrontation with the Quraysh and other enemies. The surah gives rulings on warfare and the treatment of captives, criticises the hypocrites who wavered in commitment, and strongly motivates the believers to remain firm and steadfast. It draws a vivid contrast between the rivers of water, milk, wine, and honey promised to the righteous and the boiling water awaiting those who reject faith.',
    asbabalNuzul: 'Revealed at the time when the Muslim community in Madinah was preparing for or engaged in its early military confrontations with the Quraysh. Several verses were revealed regarding the hypocrites who questioned the wisdom of fighting and privately expressed desire to return to the old ways. The verse on striking necks (47:4) and the ruling on captives were among the first divine injunctions on the conduct of warfare.',
    keyThemes: [
      'Divine support for believers in armed conflict',
      'Rulings on warfare and treatment of captives',
      'Exposure and critique of the hypocrites',
      'The contrasting descriptions of Paradise and its rivers',
      'Steadfastness and not weakening in the face of the enemy'
    ],
    notableVerses: [
      {
        reference: '47:7',
        arabic: 'يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِن تَنصُرُوا۟ ٱللَّهَ يَنصُرْكُمْ وَيُثَبِّتْ أَقْدَامَكُمْ',
        translation: 'O you who have believed, if you support Allah, He will support you and plant firmly your feet.',
        context: 'A conditional promise of divine support: that those who uphold Allah\'s religion will receive divine assistance and be established firmly in their affairs—one of the most cited verses of motivation.'
      },
      {
        reference: '47:15',
        arabic: 'مَّثَلُ ٱلْجَنَّةِ ٱلَّتِى وُعِدَ ٱلْمُتَّقُونَ ۖ فِيهَا أَنْهَٰرٌ مِّن مَّآءٍ غَيْرِ ءَاسِنٍ',
        translation: 'Is the description of Paradise promised to the righteous [that of a place] in which are rivers of water unaltered...',
        context: 'Opens the celebrated description of Paradise\'s four rivers—water, milk, wine, and honey—contrasted with the boiling water given to the people of the Fire.'
      }
    ]
  },
  {
    number: 48,
    arabicName: 'الفتح',
    englishName: 'The Conquest',
    transliteration: 'al-fath',
    verses: 29,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'Al-Fath celebrates the Treaty of Hudaybiyyah (6 AH/628 CE), which Allah describes as a manifest conquest (fath mubeen) despite appearing at the time as a humiliation. The surah validates the Prophet\'s vision of entering the Sacred Mosque in peace, describes the pledge of allegiance taken under the tree (Bay\'at al-Ridwan), exposes the hypocrites who stayed behind, and closes with a description of the companions as firm against disbelievers and merciful amongst themselves—like a plant that strengthens and awes those who see it.',
    asbabalNuzul: 'Revealed after the Treaty of Hudaybiyyah when the Prophet and companions were returning to Madinah. Many companions were distressed by the treaty\'s seemingly unfavourable terms. The surah was revealed entirely during the journey home to reframe the treaty as a divine victory and to explain its deeper strategic wisdom. The final verse (48:29) praising the companions was later cited by the Prophet as the description of his community in the Torah and Gospel.',
    keyThemes: [
      'The Treaty of Hudaybiyyah as a divine conquest',
      'Forgiveness of the Prophet\'s community and divine pleasure',
      'The pledge of allegiance under the tree',
      'Exposure of hypocrites who sought excuses',
      'The character of the companions as a plant that grows strong'
    ],
    notableVerses: [
      {
        reference: '48:1',
        arabic: 'إِنَّا فَتَحْنَا لَكَ فَتْحًا مُّبِينًا',
        translation: 'Indeed, We have given you a manifest conquest.',
        context: 'The triumphant opening verse revealed on the return from Hudaybiyyah, reframing what appeared to be a setback as the beginning of a great divine opening for Islam.'
      },
      {
        reference: '48:29',
        arabic: 'مُّحَمَّدٌ رَّسُولُ ٱللَّهِ ۚ وَٱلَّذِينَ مَعَهُۥٓ أَشِدَّآءُ عَلَى ٱلْكُفَّارِ رُحَمَآءُ بَيْنَهُمْ',
        translation: 'Muhammad is the Messenger of Allah; and those with him are firm against the disbelievers, merciful among themselves.',
        context: 'The celebrated description of the companions: combining steadfastness against opposition with tenderness within the community—cited as the defining character of the Muslim ummah.'
      }
    ]
  },
  {
    number: 49,
    arabicName: 'الحجرات',
    englishName: 'The Chambers',
    transliteration: 'al-hujurat',
    verses: 18,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'Al-Hujurat is a concentrated surah of social ethics revealed in Madinah. Its name refers to the private chambers of the Prophet\'s wives, which some Bedouins rudely called out from without waiting. The surah establishes comprehensive principles of communal conduct: verifying news before acting, not raising one\'s voice before the Prophet, resolving conflict between believers justly, avoiding mockery and defamation, refraining from suspicion and spying, and the Islamic definition of brotherhood based on faith rather than race or tribe.',
    asbabalNuzul: 'Composed of several revelations responding to specific incidents in the Madinan community. The incident of Al-Walid ibn Uqbah bringing a false report about the tribe of Banu Mustaliq (49:6) prompted the command to verify news. The Banu Tamim delegation\'s rude behaviour (calling from outside the Prophet\'s chambers) prompted 49:4-5. The conflict between two groups of the Ansar prompted the mediation verses (49:9-10). These collective revelations became foundational principles of Islamic social ethics.',
    keyThemes: [
      'Etiquette with the Prophet and religious authority',
      'Verification of information before action',
      'Justice in resolving conflicts between Muslims',
      'Brotherhood, equality, and prohibition of arrogance',
      'The true meaning of faith versus outward declaration'
    ],
    notableVerses: [
      {
        reference: '49:6',
        arabic: 'يَٰٓأَيُّهَا ٱلَّذِينَ ءَامَنُوٓا۟ إِن جَآءَكُمْ فَاسِقٌۢ بِنَبَإٍ فَتَبَيَّنُوٓا۟',
        translation: 'O you who have believed, if there comes to you a disobedient one with information, investigate.',
        context: 'The Quranic foundation for the principle of verifying sources before acting on information—one of the central methodological principles of hadith scholarship and Islamic jurisprudence.'
      },
      {
        reference: '49:13',
        arabic: 'يَٰٓأَيُّهَا ٱلنَّاسُ إِنَّا خَلَقْنَٰكُم مِّن ذَكَرٍ وَأُنثَىٰ وَجَعَلْنَٰكُمْ شُعُوبًا وَقَبَآئِلَ لِتَعَارَفُوٓا۟',
        translation: 'O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another.',
        context: 'The foundational Quranic statement of human equality and the positive purpose of diversity: mutual acquaintance and cooperation, not pride or discrimination. The criterion of honour is taqwa alone.'
      }
    ]
  },
  {
    number: 50,
    arabicName: 'ق',
    englishName: 'Qaf',
    transliteration: 'qaf',
    verses: 45,
    classification: 'Makki',
    period: 'Early Makkan',
    overview: 'Named after the solitary Arabic letter Qaf, this surah addresses the central Meccan denial: that resurrection is impossible. With a rapid, rhythmic style, it argues from the signs of creation—rain, plant growth, celestial orbits—that the same creative power can restore human life after death. It introduces the two recording angels who accompany every person, and describes the swift events of the Day of Judgement: the blast of the Trumpet, the soul\'s confrontation with its own record, and the drive of people to their final destinations.',
    asbabalNuzul: 'Revealed in the early Makkan period, Qaf addresses the stubbornness of those who found the idea of resurrection after decomposition absurd. The surah was particularly beloved by the Prophet: it is reported that he recited it regularly in the Fajr prayer and on Fridays. Its focus on death, recording of deeds, and the Day of Judgement made it suitable for regular communal recitation as a reminder.',
    keyThemes: [
      'Rational proof for resurrection from natural signs',
      'The recording angels and the all-knowing God',
      'The events of the Day of Judgement',
      'The nearness of death and human heedlessness',
      'The drive of righteous and wrongdoers to their fates'
    ],
    notableVerses: [
      {
        reference: '50:16',
        arabic: 'وَلَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ وَنَعْلَمُ مَا تُوَسْوِسُ بِهِۦ نَفْسُهُۥ ۖ وَنَحْنُ أَقْرَبُ إِلَيْهِ مِنْ حَبْلِ ٱلْوَرِيدِ',
        translation: 'And We have already created man and know what his soul whispers to him, and We are closer to him than his jugular vein.',
        context: 'A profound verse of divine nearness and omniscience: Allah is closer to the human being than their own life-vein, knowing even unexpressed thoughts—one of the most cited verses on divine intimacy.'
      },
      {
        reference: '50:19',
        arabic: 'وَجَآءَتْ سَكْرَةُ ٱلْمَوْتِ بِٱلْحَقِّ ۖ ذَٰلِكَ مَا كُنتَ مِنْهُ تَحِيدُ',
        translation: 'And the intoxication of death will bring the truth; that is what you were trying to avoid.',
        context: 'A stark verse on the moment of death as the unavoidable revelation of ultimate truth, after a life spent in avoidance and distraction.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) used to recite Surah Qaf in the Fajr prayer on Fridays and at Eid prayers. (Reported by Muslim)'
  },
  {
    number: 51,
    arabicName: 'الذاريات',
    englishName: 'The Winnowing Winds',
    transliteration: 'adh-dhariyat',
    verses: 60,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Adh-Dhariyat opens with four powerful oaths by natural phenomena—the winnowing winds, the cloud-bearing winds, the easily running ships, and the angels distributing provision—all attesting to the truth of the divine promise of judgement. The surah then narrates the hospitality of Ibrahim to the angelic visitors and the story of the people of Lut, followed by accounts of Musa, \'Ad, Thamud, and Nuh as warnings. It closes with a declaration of the purpose of creation: worship of Allah alone, who is self-sufficient and requires nothing from His creation.',
    asbabalNuzul: 'Revealed in the middle Makkan period as part of the sustained effort to convince the Quraysh of the reality of resurrection and the truthfulness of the Prophet. The opening oaths by atmospheric and cosmic phenomena were typical of the Meccan surahs that used observable natural realities as witnesses to divine truth. The closing verse (51:56) on the purpose of creation is among the most cited Quranic statements in Islamic theology.',
    keyThemes: [
      'Oaths by natural phenomena affirming divine promise',
      'Stories of Ibrahim and Lut as signs',
      'Warning nations: \'Ad, Thamud, Nuh, and Fir\'awn',
      'The purpose of human creation: worship of Allah',
      'Divine self-sufficiency and the nature of provision'
    ],
    notableVerses: [
      {
        reference: '51:56',
        arabic: 'وَمَا خَلَقْتُ ٱلْجِنَّ وَٱلْإِنسَ إِلَّا لِيَعْبُدُونِ',
        translation: 'And I did not create the jinn and mankind except to worship Me.',
        context: 'The most cited verse on the purpose of creation in Islamic theology and spirituality. It defines \'ibadah (worship) in the comprehensive sense as the entire orientation of one\'s life toward Allah.'
      },
      {
        reference: '51:47',
        arabic: 'وَٱلسَّمَآءَ بَنَيْنَٰهَا بِأَيْي۟دٍ وَإِنَّا لَمُوسِعُونَ',
        translation: 'And the heaven We constructed with strength, and indeed, We are [its] expander.',
        context: 'A remarkable verse read by many modern commentators as a reference to the expanding universe, though classical scholars understood it as an affirmation of divine power in the creation and ongoing sustaining of the heavens.'
      }
    ]
  },
  {
    number: 52,
    arabicName: 'الطور',
    englishName: 'The Mount',
    transliteration: 'at-tur',
    verses: 49,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'At-Tur opens with six solemn oaths, the first being by Mount Sinai (Al-Tur)—the sacred mountain of Musa\'s revelation—attesting that divine punishment is inevitable. The surah then vividly describes the terrors of the Day of Judgement, the joys of Paradise, the fellowship of families in the Garden, and the ridicule that will meet those who mocked the believers in this world. It closes by commanding the Prophet to persevere in worship and to trust that Allah is sufficient against those who mock him.',
    asbabalNuzul: 'Revealed in the middle Makkan period. It is reported that \'Umar ibn al-Khattab heard a man reciting this surah and was so struck by its verses on the Day of Judgement that he remained ill for a month. The surah\'s powerful oaths and vivid descriptions of the afterlife served as a direct challenge to the Quraysh who dismissed warnings of punishment as mere stories.',
    keyThemes: [
      'Six solemn oaths attesting to divine punishment',
      'The terror of the Day of Judgement for the wrongdoers',
      'The joys of Paradise and reunion of believing families',
      'Refutation of the claims of the mockers',
      'Patient perseverance of the Prophet in worship'
    ],
    notableVerses: [
      {
        reference: '52:21',
        arabic: 'وَٱلَّذِينَ ءَامَنُوا۟ وَٱتَّبَعَتْهُمْ ذُرِّيَّتُهُم بِإِيمَٰنٍ أَلْحَقْنَا بِهِمْ ذُرِّيَّتَهُمْ',
        translation: 'And those who believed and whose descendants followed them in faith—We will join with them their descendants.',
        context: 'A verse of immense consolation: that the children of believers will be joined with their parents in Paradise by divine grace, even if their own deeds alone would not have merited this elevated station.'
      },
      {
        reference: '52:35',
        arabic: 'أَمْ خُلِقُوا۟ مِنْ غَيْرِ شَىْءٍ أَمْ هُمُ ٱلْخَٰلِقُونَ',
        translation: 'Or were they created by nothing, or were they the creators [of themselves]?',
        context: 'A celebrated rational argument for the existence of God: things cannot come from nothing, nor can they create themselves—so a Creator must exist. Reported to have struck Jubayr ibn Mut\'im so profoundly that he later became Muslim.'
      }
    ]
  },
  {
    number: 53,
    arabicName: 'النجم',
    englishName: 'The Star',
    transliteration: 'an-najm',
    verses: 62,
    classification: 'Makki',
    period: 'Early Makkan',
    overview: 'An-Najm opens with an oath by the star as it descends, immediately attesting to the truthfulness of the Prophet and the divine origin of his message. The surah provides the Quranic account of the Prophet\'s two great visions—one near the Lote Tree of the Utmost Boundary (sidr al-muntaha) and one at a descent described as being "at the distance of two bows\' lengths or nearer." It then decisively refutes the Quraysh\'s belief in the three goddesses al-Lat, al-\'Uzza, and Manat, and closes with a series of divine attributes affirming Allah as the only Lord of everything.',
    asbabalNuzul: 'Among the earliest revelations in Makkah. It is reported that this was the first surah recited publicly by the Prophet before the Quraysh, and that when he reached the final verse commanding prostration, all present—believer and disbeliever alike—prostrated, so overwhelming was the impact of the recitation. The verses addressing the Gharaniq incident (53:19-23) categorically reject any compromise with polytheism.',
    keyThemes: [
      'The divine origin of the Quran confirmed by the Prophet\'s visions',
      'The account of the Prophet\'s ascent and vision',
      'Refutation of the three Qurayshi goddesses',
      'The difference between conjecture and revealed knowledge',
      'Divine attributes: creation, sustenance, life and death'
    ],
    notableVerses: [
      {
        reference: '53:3',
        arabic: 'وَمَا يَنطِقُ عَنِ ٱلْهَوَىٰٓ',
        translation: 'Nor does he speak from [his own] inclination.',
        context: 'A key verse establishing that the Prophet\'s utterances—including the Quran and the Sunnah—originate from divine inspiration rather than personal desire, foundational to Islamic epistemology.'
      },
      {
        reference: '53:39',
        arabic: 'وَأَن لَّيْسَ لِلْإِنسَٰنِ إِلَّا مَا سَعَىٰ',
        translation: 'And that there is not for man except that [good] for which he strives.',
        context: 'A fundamental statement of the principle of individual moral accountability: each person bears the weight and reward of their own deeds, widely discussed in fiqh and theology.'
      }
    ]
  },
  {
    number: 54,
    arabicName: 'القمر',
    englishName: 'The Moon',
    transliteration: 'al-qamar',
    verses: 55,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Al-Qamar opens with a reference to the splitting of the moon—one of the most discussed signs of the Prophet\'s prophethood—and the stubbornness of those who still dismissed it as magic. The surah then recounts in rapid succession the stories of Nuh, \'Ad, Thamud, Lut, and Pharaoh—each ending with the refrain "And We have certainly made the Quran easy for remembrance, so is there any who will remember?" The rhythmic parallel structure and the repeated refrain create a powerful cumulative effect of warning.',
    asbabalNuzul: 'Revealed in the middle Makkan period. The opening verses (54:1-2) are understood to refer to the actual splitting of the moon that the Prophet performed as a miracle when challenged by the Quraysh. The repeated refrain (54:17, 22, 32, 40) was revealed as an ongoing challenge to the Quraysh: despite the clarity and accessibility of the Quran, they continued to reject it.',
    keyThemes: [
      'The splitting of the moon as a prophetic sign',
      'The stubbornness of those who reject clear signs',
      'Rapid narratives of six destroyed communities',
      'The Quran as easy to remember and understand',
      'The Day of Judgement as inevitable and near'
    ],
    notableVerses: [
      {
        reference: '54:1',
        arabic: 'ٱقْتَرَبَتِ ٱلسَّاعَةُ وَٱنشَقَّ ٱلْقَمَرُ',
        translation: 'The Hour has come near, and the moon has split [in two].',
        context: 'The opening verse describing the splitting of the moon, cited in both classical and modern scholarship as referring to a physical miracle performed by the Prophet before the Quraysh.'
      },
      {
        reference: '54:17',
        arabic: 'وَلَقَدْ يَسَّرْنَا ٱلْقُرْءَانَ لِلذِّكْرِ فَهَلْ مِن مُّدَّكِرٍ',
        translation: 'And We have certainly made the Quran easy for remembrance, so is there any who will remember?',
        context: 'The oft-repeated refrain of the surah, occurring four times, simultaneously an invitation to reflect and an implicit indictment of those who, despite the Quran\'s accessibility, choose heedlessness.'
      }
    ]
  },
  {
    number: 55,
    arabicName: 'الرحمن',
    englishName: 'The Most Merciful',
    transliteration: 'ar-rahman',
    verses: 78,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'Ar-Rahman is one of the most celebrated and beautiful surahs of the Quran, named after the divine attribute of boundless mercy. Its distinctive feature is the refrain "So which of the favours of your Lord will you deny?" which appears thirty-one times, challenging both mankind and jinn to acknowledge divine blessings. The surah surveys creation—from the rising of the sun and moon to the meeting of the two seas—and contrasts the terrible scenes of the Day of Judgement with the magnificent descriptions of two pairs of paradisiacal gardens awaiting the righteous.',
    asbabalNuzul: 'Scholars disagree on whether this is Makkan or Madinan; the majority view leans towards Medinan revelation though some scholars argue for a Makkan origin. It is reported that the Prophet recited this surah to the companions who were moved to respond to each refrain with "And none of Your favours do we deny, our Lord." A celebrated tradition states that the Prophet recited it to the jinn who responded appropriately to each refrain.',
    keyThemes: [
      'The divine attribute of boundless mercy as the surah\'s foundation',
      'Divine blessings in the heavens, earth, and seas',
      'The refrain challenging mankind and jinn to acknowledge favours',
      'The terrors of Judgement Day for the disbelievers',
      'Two pairs of Gardens of Paradise with their varied pleasures'
    ],
    notableVerses: [
      {
        reference: '55:1',
        arabic: 'ٱلرَّحْمَٰنُ',
        translation: 'The Most Merciful.',
        context: 'The unique one-word opening of the surah, beginning with the name of Allah that encompasses infinite mercy and compassion, making mercy the lens through which everything that follows is to be understood.'
      },
      {
        reference: '55:13',
        arabic: 'فَبِأَىِّ ءَالَآءِ رَبِّكُمَا تُكَذِّبَانِ',
        translation: 'So which of the favours of your Lord would you both deny?',
        context: 'The iconic refrain of the surah, addressed to both mankind and jinn, repeated thirty-one times. Its rhythmic repetition is understood as a rhetorical device that mirrors the overwhelming abundance of divine blessings.'
      }
    ],
    alternativeNames: ['\'Arus al-Quran (The Bride of the Quran)']
  },
  {
    number: 56,
    arabicName: 'الواقعة',
    englishName: 'The Inevitable Event',
    transliteration: 'al-waqiah',
    verses: 96,
    classification: 'Makki',
    period: 'Middle Makkan',
    overview: 'Al-Waqiah (The Inevitable Event) presents one of the most detailed Quranic accounts of the hereafter. It divides humanity into three categories on the Day of Judgement: the Foremost (As-Sabiqun) who will have the highest station, the Companions of the Right (As-hab al-Yamin), and the Companions of the Left (As-hab ash-Shimal). The surah describes the pleasures awaiting each righteous group in vivid detail and the punishments of Hell awaiting the wrongdoers. It closes with a powerful reflection on the moment of death and the reality of the Quran as a noble, protected scripture.',
    asbabalNuzul: 'Revealed in the middle Makkan period. The Prophet said: "Whoever recites Al-Waqiah every night will never be afflicted by poverty." (Reported by Ibn as-Sunni) The surah addresses the Quraysh\'s denial of resurrection and final judgement by presenting the most comprehensive Quranic description of what will occur. The threefold division of humanity into the Foremost, the Right, and the Left became one of the most discussed frameworks in Islamic eschatology.',
    keyThemes: [
      'The three categories of humanity on the Day of Judgement',
      'The station and rewards of the Foremost (As-Sabiqun)',
      'The pleasures of Paradise for the Companions of the Right',
      'The punishments of Hell for the Companions of the Left',
      'The Quran as a noble, protected, and inimitable scripture'
    ],
    notableVerses: [
      {
        reference: '56:10',
        arabic: 'وَٱلسَّٰبِقُونَ ٱلسَّٰبِقُونَ',
        translation: 'And the forerunners, the forerunners—',
        context: 'The arresting introduction of the highest category of people in the hereafter, repeated for emphasis. The "forerunners" are understood as those who hastened to faith, good deeds, and closeness to Allah.'
      },
      {
        reference: '56:77',
        arabic: 'إِنَّهُۥ لَقُرْءَانٌ كَرِيمٌ',
        translation: 'Indeed, it is a noble Quran.',
        context: 'The declaration of the Quran\'s nobility and honour, part of a closing section (56:77-80) that identifies the Quran as a protected and preserved scripture that cannot be touched except by the purified.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) said: "Whoever recites Surah Al-Waqiah every night will never be afflicted by poverty." (Reported by Ibn as-Sunni)'
  },
  {
    number: 57,
    arabicName: 'الحديد',
    englishName: 'The Iron',
    transliteration: 'al-hadid',
    verses: 29,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'Al-Hadid opens with a magnificent hymn of divine glorification—everything in the heavens and earth glorifies Allah. It was revealed to motivate the Madinan believers to spend generously in the path of Allah, and addresses those who are hesitant about financial sacrifice for the community\'s defence. The surah develops a profound philosophy of the hereafter: that worldly life is like a brief burst of vegetation that quickly withers, while the permanent life is the next. It also addresses the People of the Book regarding the nature of true faith and the continuity of prophethood, and mentions that Allah sent down iron containing great might and benefit for humanity.',
    asbabalNuzul: 'Revealed in the Madinan period, primarily to address the believers\' reluctance to spend generously in the path of Allah during a period of military and financial pressure. The reference to iron (57:25) was understood both literally—as a material of war and civilisation—and metaphorically as the force that implements divine justice. The surah\'s critique of those who failed to spend before the conquest was directed at those who waited until after the major battles to commit their resources.',
    keyThemes: [
      'Divine omniscience encompassing all of creation',
      'Call to spend generously in the path of Allah',
      'The transience of worldly life compared to the hereafter',
      'Prophetic succession and the message of humility',
      'The sending of iron and divine balance for human affairs'
    ],
    notableVerses: [
      {
        reference: '57:3',
        arabic: 'هُوَ ٱلْأَوَّلُ وَٱلْءَاخِرُ وَٱلظَّٰهِرُ وَٱلْبَاطِنُ وَهُوَ بِكُلِّ شَىْءٍ عَلِيمٌ',
        translation: 'He is the First and the Last, the Ascendant and the Intimate, and He is, of all things, Knowing.',
        context: 'The verse of the four divine names—Al-Awwal, Al-Akhir, Al-Zahir, Al-Batin—beloved by scholars of Islamic theology for its comprehensive statement of divine transcendence and immanence.'
      },
      {
        reference: '57:20',
        arabic: 'ٱعْلَمُوٓا۟ أَنَّمَا ٱلْحَيَوٰةُ ٱلدُّنْيَا لَعِبٌ وَلَهْوٌ وَزِينَةٌ وَتَفَاخُرٌۢ بَيْنَكُمْ وَتَكَاثُرٌ فِى ٱلْأَمْوَٰلِ وَٱلْأَوْلَٰدِ',
        translation: 'Know that the life of this world is but amusement and diversion and adornment and boasting to one another and competition in increase of wealth and children.',
        context: 'The Quran\'s most comprehensive description of worldly life\'s fleeting nature, listing five stages of human attachment to the dunya that ultimately lead nowhere compared to divine forgiveness and the Garden.'
      }
    ]
  },
  {
    number: 58,
    arabicName: 'المجادلة',
    englishName: 'The Pleading Woman',
    transliteration: 'al-mujadila',
    verses: 22,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'Al-Mujadila takes its name from the woman who pleaded with the Prophet about the pre-Islamic practice of zihar — a form of divorce by which a husband declared his wife to be as forbidden to him as his mother\'s back. The surah abolishes this unjust custom, mandates expiation for it, and then addresses the broader themes of the hypocrites\' secret counsel, the etiquette of gatherings, and the obligation to support Allah and His Messenger above all worldly ties.',
    asbabalNuzul: 'The opening verses were revealed in response to Khawlah bint Tha\'labah, whose husband Aws ibn al-Samit pronounced zihar against her. She came to the Prophet distressed, and her complaint rose to Allah. The surah then reveals divine rulings on the expiation required for zihar. Later verses were revealed addressing the secret whisperings (najwa) of the hypocrites and Jews, which caused distress to the believers, and the proper conduct Muslims should observe in gatherings and consultations.',
    keyThemes: [
      'Abolition of the pre-Islamic zihar divorce and its expiation',
      'Allah\'s all-encompassing knowledge and presence',
      'Prohibition of secret harmful counsel (najwa)',
      'Etiquette and courtesy in gatherings',
      'Loyalty to Allah and His Messenger over worldly alliances'
    ],
    notableVerses: [
      {
        reference: '58:1',
        arabic: 'قَدْ سَمِعَ اللَّهُ قَوْلَ الَّتِي تُجَادِلُكَ فِي زَوْجِهَا وَتَشْتَكِي إِلَى اللَّهِ',
        translation: 'Certainly has Allah heard the speech of the one who argues with you concerning her husband and directs her complaint to Allah.',
        context: 'Allah affirms that He heard Khawlah\'s plea directly, establishing that every cry of the oppressed reaches Him and that divine law responds to human need.'
      },
      {
        reference: '58:7',
        arabic: 'مَا يَكُونُ مِن نَّجْوَىٰ ثَلَاثَةٍ إِلَّا هُوَ رَابِعُهُمْ',
        translation: 'There is no private conversation of three except that He is the fourth of them.',
        context: 'A foundational statement of Allah\'s omniscience — He is intimately aware of every secret counsel, instilling taqwa and guiding believers to transparency and integrity.'
      }
    ]
  },
  {
    number: 59,
    arabicName: 'الحشر',
    englishName: 'The Exile',
    transliteration: 'al-hashr',
    verses: 24,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'Al-Hashr recounts the expulsion of the Banu Nadir, a Jewish tribe in Madinah who broke their treaty with the Prophet and conspired with the Makkans. Their departure without direct battle is attributed to divine intervention. The surah then details the distribution of war spoils (fay\'), warns the hypocrites who promised the Banu Nadir false support, and culminates in one of the Quran\'s most majestic declarations of Allah\'s attributes.',
    asbabalNuzul: 'Revealed in the fourth year after the Hijra following the siege and expulsion of the Banu Nadir. The tribe had plotted to assassinate the Prophet and violated their covenant with the Muslims. Allah cast terror into their hearts and they agreed to leave Madinah, burning their own houses rather than leaving them to the Muslims. The concluding verses (22-24) were described by the Prophet as containing the greatest concentration of Divine names in the Quran.',
    keyThemes: [
      'Divine aid and the expulsion of treaty-breakers',
      'Distribution of fay\' (spoils without battle) and its social purpose',
      'The duplicity of hypocrites and false allies',
      'Warning against following one\'s desires after knowledge',
      'The sublime attributes and names of Allah'
    ],
    notableVerses: [
      {
        reference: '59:18',
        arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنظُرْ نَفْسٌ مَّا قَدَّمَتْ لِغَدٍ',
        translation: 'O you who have believed, fear Allah. And let every soul look to what it has put forth for tomorrow.',
        context: 'A foundational verse of moral accountability — every individual must audit their deeds in light of the Day of Judgement, making self-reckoning (muhasabah) a daily practice.'
      },
      {
        reference: '59:22',
        arabic: 'هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ',
        translation: 'He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed.',
        context: 'The opening of the celebrated triad of verses (22-24) containing a concentrated revelation of the Divine Names, which scholars regard as among the greatest theological passages in the Quran.'
      }
    ]
  },
  {
    number: 60,
    arabicName: 'الممتحنة',
    englishName: 'She Who Is Examined',
    transliteration: 'al-mumtahanah',
    verses: 13,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'Al-Mumtahanah was revealed around the conquest of Makkah and addresses the critical question of loyalty: believers must not take as intimate allies those who are enemies of Allah and His Messenger, even if they are family. It then establishes the procedure for examining Muslim women who migrate from enemy territory, outlines conditions for peaceful relations with non-hostile non-Muslims, and provides the model of Ibrahim\'s disavowal of his father\'s idolatry as a template for the community.',
    asbabalNuzul: 'The opening verses were revealed when Hatib ibn Abi Balta\'ah sent a letter to the Quraysh in Makkah warning them of the imminent Muslim march — an act of apparent betrayal. The Prophet was informed by revelation. Hatib explained he had kinsmen in Makkah he wished to protect; the Prophet accepted his explanation due to his participation in Badr. Further verses were revealed addressing the status of women who emigrated from Makkah and the terms of peaceful co-existence with non-combatant non-Muslims.',
    keyThemes: [
      'Prohibition of intimate alliance with enemies of the faith',
      'Ibrahim\'s model of disavowal from polytheism as the Muslim exemplar',
      'The examination and oath of believing migrant women',
      'Conditions for just and equitable relations with peaceful non-Muslims',
      'Loyalty, justice, and the boundaries of friendship in Islam'
    ],
    notableVerses: [
      {
        reference: '60:4',
        arabic: 'قَدْ كَانَتْ لَكُمْ أُسْوَةٌ حَسَنَةٌ فِي إِبْرَاهِيمَ وَالَّذِينَ مَعَهُ',
        translation: 'There has already been for you an excellent pattern in Ibrahim and those with him.',
        context: 'Ibrahim\'s clear declaration of disavowal from his people\'s idolatry is presented as the normative model for the Muslim community\'s stance on theological loyalty and social allegiance.'
      },
      {
        reference: '60:8',
        arabic: 'لَّا يَنْهَاكُمُ اللَّهُ عَنِ الَّذِينَ لَمْ يُقَاتِلُوكُمْ فِي الدِّينِ',
        translation: 'Allah does not forbid you from those who do not fight you because of religion and do not expel you from your homes — from being righteous toward them and acting justly toward them.',
        context: 'A foundational verse in Islamic ethics of inter-communal relations, establishing that justice and goodness toward peaceful non-Muslims is not merely permitted but mandated.'
      }
    ]
  },
  {
    number: 61,
    arabicName: 'الصف',
    englishName: 'The Ranks',
    transliteration: 'as-saff',
    verses: 14,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'As-Saff calls the believers to align their words with their deeds, warns against the hypocrisy of promising what one does not fulfil, and presents the example of the Israelites\' rejection of Musa and then of \'Isa. The surah emphasises that \'Isa gave glad tidings of a coming prophet named Ahmad (another name of Muhammad), and culminates in a powerful call to strive in Allah\'s cause with wealth and life — the trade that guarantees salvation.',
    asbabalNuzul: 'Revealed to address the gap between the believers\' verbal commitment to jihad and their actual resolve when the call came. Some companions had asked the Prophet what deeds were most beloved to Allah, and when the answer involved striving in His cause, some fell short of their promise. The reference to \'Isa\'s announcement of Ahmad was also revealed to confirm the authenticity of the Prophet\'s mission against Jewish and Christian claims.',
    keyThemes: [
      'The obligation to match word with deed',
      'The continuity of prophethood from Musa and \'Isa to Muhammad',
      'Prophecy of Ahmad in previous scriptures',
      'Striving in Allah\'s cause as a profitable transaction',
      'Victory belongs to the believing community'
    ],
    notableVerses: [
      {
        reference: '61:6',
        arabic: 'وَمُبَشِّرًا بِرَسُولٍ يَأْتِي مِن بَعْدِي اسْمُهُ أَحْمَدُ',
        translation: 'And giving good tidings of a messenger to come after me, whose name is Ahmad.',
        context: 'The words of \'Isa ibn Maryam foretelling the Prophet Muhammad by his name Ahmad, a passage Muslims cite as the Quranic evidence of Biblical prophecy of the final prophet.'
      },
      {
        reference: '61:10-11',
        arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا هَلْ أَدُلُّكُمْ عَلَىٰ تِجَارَةٍ تُنجِيكُم مِّنْ عَذَابٍ أَلِيمٍ',
        translation: 'O you who have believed, shall I guide you to a transaction that will save you from a painful punishment?',
        context: 'The divine offer of a spiritual transaction — belief and striving with wealth and life — framed as the most profitable of all commerce, leading to forgiveness and eternal gardens.'
      }
    ]
  },
  {
    number: 62,
    arabicName: 'الجمعة',
    englishName: 'The Friday',
    transliteration: 'al-jumuah',
    verses: 11,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'Al-Jumuah opens by affirming Allah\'s sending of an unlettered prophet to the Arabs — a mercy to those who had no previous scripture — and criticises those among the Jews who were entrusted with the Torah yet did not act by it, comparing them to a donkey carrying books. The surah then legislates the obligation of the Friday congregational prayer and prohibits trade and worldly activity during the call to prayer, affirming that the prayer takes precedence over commerce.',
    asbabalNuzul: 'The final verses were revealed when a trading caravan arrived in Madinah during a Friday sermon and the congregation largely dispersed to meet it, leaving only a handful with the Prophet. Allah responded with a mild rebuke and a clarification of priorities. The opening verses addressing the unlettered prophet were part of the original revelation establishing the universal mission of Muhammad.',
    keyThemes: [
      'The mission of the Prophet to the unlettered Arabs as divine grace',
      'Criticism of those who possess knowledge but do not act upon it',
      'The obligation and sanctity of Friday congregational prayer',
      'Priority of worship over worldly commerce',
      'The bounty and remembrance of Allah as the greatest gain'
    ],
    notableVerses: [
      {
        reference: '62:9',
        arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِن يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَىٰ ذِكْرِ اللَّهِ',
        translation: 'O you who have believed, when the call to prayer is made on the day of Friday, then proceed to the remembrance of Allah and leave trade.',
        context: 'The Quranic command establishing the Friday prayer as a communal obligation and the primacy of dhikr over all worldly pursuits at that designated time.'
      },
      {
        reference: '62:2',
        arabic: 'هُوَ الَّذِي بَعَثَ فِي الْأُمِّيِّينَ رَسُولًا مِّنْهُمْ',
        translation: 'It is He who has sent among the unlettered a Messenger from themselves.',
        context: 'Affirming the miraculous nature of the Prophet\'s mission — an unlettered man bringing a profound scripture to a people without a revealed book, as fulfilment of Ibrahim\'s prayer.'
      }
    ]
  },
  {
    number: 63,
    arabicName: 'المنافقون',
    englishName: 'The Hypocrites',
    transliteration: 'al-munafiqun',
    verses: 11,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'Al-Munafiqun exposes the characteristics and speech of the hypocrites in Madinah, most notably their false oath-taking and their statement — attributed to Ibn Ubayy ibn Salul — that when they returned to Madinah, "the more honourable would expel the more humble," meaning the hypocrites would drive out the Muslims. The surah strips away the outward elegance of their speech to reveal hollow hearts, and concludes by urging the believers not to let wealth and children distract them from the remembrance of Allah.',
    asbabalNuzul: 'Primarily revealed after the expedition of Banu Mustaliq (5 or 6 AH) during which Abdullah ibn Ubayy made his infamous statement disparaging the Muhajirun. His son — also named Abdullah — a sincere believer, came to the Prophet and offered to kill his own father to spare the Prophet the task. The Prophet declined. The surah confirmed the revelation of these hypocrites\' words and reinforced the distinction between outward profession and inward reality.',
    keyThemes: [
      'The defining traits of hypocrisy: false oaths and deception',
      'The hardened, sealed hearts of confirmed hypocrites',
      'Arrogance and contempt for the believers',
      'Warning against wealth and children as distractions from Allah',
      'The urgency of charity before death prevents it'
    ],
    notableVerses: [
      {
        reference: '63:1',
        arabic: 'إِذَا جَاءَكَ الْمُنَافِقُونَ قَالُوا نَشْهَدُ إِنَّكَ لَرَسُولُ اللَّهِ',
        translation: 'When the hypocrites come to you, they say, "We testify that you are the Messenger of Allah."',
        context: 'The surah opens by immediately contrasting their verbal testimony with divine knowledge of their falseness — establishing that verbal profession without sincerity is meaningless before Allah.'
      },
      {
        reference: '63:9',
        arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا لَا تُلْهِكُمْ أَمْوَالُكُمْ وَلَا أَوْلَادُكُمْ عَن ذِكْرِ اللَّهِ',
        translation: 'O you who have believed, let not your wealth and your children divert you from remembrance of Allah.',
        context: 'A universal warning addressed to all believers, not just hypocrites — the love of wealth and children can gradually displace divine remembrance, producing spiritual blindness without outright rejection of faith.'
      }
    ]
  },
  {
    number: 64,
    arabicName: 'التغابن',
    englishName: 'The Mutual Disillusion',
    transliteration: 'at-taghabun',
    verses: 18,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'At-Taghabun takes its name from the Day of Judgement, which is described as the Day of Mutual Disillusion — when every person will fully grasp what they gained and lost. The surah begins by glorifying Allah and affirming His creative sovereignty, addresses the reality of unbelief and belief, and then speaks directly to the trials that believers face from within their own households — spouses and children who may be their enemies — while counselling forgiveness, charity, and patient trust in Allah.',
    asbabalNuzul: 'Revealed in the Madinan period to address the community\'s ongoing challenges with sincere commitment. Several verses were revealed specifically about those whose families — wives or children — dissuaded them from emigrating to Madinah. The verse "your wives and children may be enemies to you" startled some companions, and the subsequent call to forgiveness and generosity assured them that family loyalty need not become spiritual compromise.',
    keyThemes: [
      'Allah\'s sovereignty, creation, and omniscience',
      'The Day of Mutual Disillusion as the ultimate reckoning',
      'The trial of family and the balance between love and loyalty to Allah',
      'Tawakkul (trust in Allah) in adversity',
      'Charity and generous spending as protection from the ego\'s miserliness'
    ],
    notableVerses: [
      {
        reference: '64:9',
        arabic: 'يَوْمَ يَجْمَعُكُمْ لِيَوْمِ الْجَمْعِ ذَٰلِكَ يَوْمُ التَّغَابُنِ',
        translation: 'The Day He will assemble you for the Day of Assembly — that is the Day of Mutual Disillusion.',
        context: 'The central image of the surah — all humanity assembled and the full extent of their choices revealed, producing a comprehensive reckoning of gains and losses that no worldly audit can match.'
      },
      {
        reference: '64:11',
        arabic: 'مَا أَصَابَ مِن مُّصِيبَةٍ إِلَّا بِإِذْنِ اللَّهِ',
        translation: 'No disaster strikes except by permission of Allah. And whoever believes in Allah — He will guide his heart.',
        context: 'A profound consolation — every trial occurs by divine permission, and the one who responds with faith finds that Allah guides the heart through the loss rather than leaving it in confusion.'
      }
    ]
  },
  {
    number: 65,
    arabicName: 'الطلاق',
    englishName: 'The Divorce',
    transliteration: 'at-talaq',
    verses: 12,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'At-Talaq provides detailed legislation on the Islamic procedure for divorce, including the obligation to observe the prescribed waiting period (\'iddah), the rights of divorced women regarding housing and maintenance, and the rulings on breastfeeding after divorce. Running through these practical rulings is a recurring call to taqwa and reliance on Allah, framing family law within a wider moral consciousness. The surah concludes with a magnificent vision of the seven heavens and the all-encompassing divine command.',
    asbabalNuzul: 'Several verses were revealed in response to Abdullah ibn Umar\'s divorce of his wife during her menstrual period — which the Prophet declared invalid and commanded him to take her back and wait for the lawful period. This incident prompted the revelation of the detailed divorce regulations. Other verses addressed the broader community\'s need for clear guidance on marriage dissolution, which was a source of social conflict in early Madinah.',
    keyThemes: [
      'Prescribed waiting periods and their legal wisdom',
      'Rights of divorced women: housing, maintenance, and breastfeeding compensation',
      'Taqwa as the framework for family law',
      'Allah\'s provision for those who trust in Him',
      'The grandeur of creation across the seven heavens'
    ],
    notableVerses: [
      {
        reference: '65:2-3',
        arabic: 'وَمَن يَتَّقِ اللَّهَ يَجْعَل لَّهُ مَخْرَجًا ۝ وَيَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ',
        translation: 'And whoever fears Allah — He will make for him a way out. And will provide for him from where he does not expect.',
        context: 'One of the most beloved verses in the Quran — embedded in family law legislation, it universalises the promise that taqwa always opens a path forward and that divine provision comes from unexpected sources.'
      },
      {
        reference: '65:3',
        arabic: 'وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ',
        translation: 'And whoever relies upon Allah — then He is sufficient for him.',
        context: 'A foundational statement of tawakkul — complete reliance on Allah as the ultimate sufficiency, whether in the crisis of divorce or any other life difficulty.'
      }
    ]
  },
  {
    number: 66,
    arabicName: 'التحريم',
    englishName: 'The Prohibition',
    transliteration: 'at-tahrim',
    verses: 12,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'At-Tahrim opens with a gentle rebuke of the Prophet for prohibiting something lawful to himself — generally understood to relate to honey or a particular matter with one of his wives — to please his wives, and then reveals that two of his wives disclosed a secret. The surah calls for repentance and commands the Prophet and believers to guard themselves and their families from the Fire. It concludes with four examples of women as moral paradigms: the wives of Nuh and Lut (warning), and Maryam and the wife of Pharaoh (models of faith).',
    asbabalNuzul: 'The opening was revealed in response to an incident involving the Prophet and his wives — either his vow to avoid honey at Hafsah\'s request or a more complex matter narrated differently by scholars. Two wives — identified in most narrations as Hafsah and A\'ishah — were involved in a private matter that became known. The concluding verses about exemplary women were revealed to establish that righteousness is individual and not inherited from one\'s spouse, whether pious or wicked.',
    keyThemes: [
      'The obligation not to forbid what Allah has made lawful',
      'Sincerity and the expiation of broken oaths',
      'Guarding one\'s family from the Fire as a religious duty',
      'Repentance and its conditions',
      'Individual accountability regardless of family or marital connection'
    ],
    notableVerses: [
      {
        reference: '66:6',
        arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ نَارًا',
        translation: 'O you who have believed, protect yourselves and your families from a Fire.',
        context: 'The Quranic basis for the Islamic concept of family religious education — parents bear a spiritual responsibility not merely for their own souls but for the spiritual formation of those in their care.'
      },
      {
        reference: '66:11',
        arabic: 'وَضَرَبَ اللَّهُ مَثَلًا لِّلَّذِينَ آمَنُوا امْرَأَتَ فِرْعَوْنَ',
        translation: 'And Allah presents an example of those who believed: the wife of Pharaoh.',
        context: 'Asiyah bint Muzahim, wife of the greatest tyrant in the Quran, is upheld as a supreme model of faith — demonstrating that proximity to evil does not prevent salvation, only one\'s own choices matter.'
      }
    ]
  },
  {
    number: 67,
    arabicName: 'الملك',
    englishName: 'The Sovereignty',
    transliteration: 'al-mulk',
    verses: 30,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'Al-Mulk opens with a magnificent declaration of Allah\'s absolute sovereignty and creative perfection, presenting the universe as a flawless design that invites contemplation. It describes the torment of the disbelievers in the Fire who will confess they ignored the warnings, contrasted with the generous reward of those who feared Allah unseen. The surah challenges humans to consider: who could provide water if Allah withheld it? It is widely recited nightly for its reported protective virtue.',
    asbabalNuzul: 'Revealed in the Makkan period as part of the sustained Quranic argument for monotheism against the polytheism of the Quraysh. The repeated emphasis on Allah\'s sovereignty over creation, life, and death was designed to confront the Makkan worldview that distributed power among multiple deities. The Prophet\'s narrations strongly encourage its nightly recitation.',
    keyThemes: [
      'Allah\'s absolute sovereignty and creative perfection',
      'Creation of death and life as a test of deeds',
      'The perfection and beauty of the heavens as signs of divine craftsmanship',
      'The contrast between the fate of the grateful and the heedless',
      'Allah\'s intimate knowledge of the unseen and the hearts'
    ],
    notableVerses: [
      {
        reference: '67:1-2',
        arabic: 'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ ۝ الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا',
        translation: 'Blessed is He in whose hand is dominion, and He is over all things competent. He who created death and life to test you as to which of you is best in deed.',
        context: 'The opening verses frame the entire human experience as a test of deeds — life and death are both created for the purpose of examining moral excellence, not merely biological existence.'
      },
      {
        reference: '67:30',
        arabic: 'قُلْ أَرَأَيْتُمْ إِنْ أَصْبَحَ مَاؤُكُمْ غَوْرًا فَمَن يَأْتِيكُم بِمَاءٍ مَّعِينٍ',
        translation: 'Say: Have you considered — if your water was to become sunken into the earth, who then could bring you flowing water?',
        context: 'The surah\'s closing challenge — a single rhetorical question about water demolishes any claim to human self-sufficiency and redirects all gratitude to the one Source of sustenance.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) said: "There is a surah in the Quran of thirty verses that interceded for a man until he was forgiven — it is \'Blessed is He in Whose Hand is the dominion.\'" (Reported by Abu Dawud and at-Tirmidhi)'
  },
  {
    number: 68,
    arabicName: 'القلم',
    englishName: 'The Pen',
    transliteration: 'al-qalam',
    verses: 52,
    classification: 'Makki',
    period: 'Early Makkan',
    overview: 'Al-Qalam is among the very earliest Quranic revelations, beginning with the mysterious letter Nun and the oath by the pen. It directly defends the Prophet\'s sanity and moral character against Makkan accusations of madness, promises him an immense reward, and warns those who oppose him. The surah then narrates the parable of the owners of a garden who resolved to harvest their crops without paying the poor\'s share, only to find the garden destroyed overnight — a cautionary tale against ingratitude and exclusion of the needy.',
    asbabalNuzul: 'Among the first five revelations, revealed immediately after Surah Al-\'Alaq when the Makkan leaders began their campaign of mockery and slander against the Prophet, calling him majnun (a madman). The divine response reassures the Prophet and turns the accusation back onto his accusers by questioning who among them truly has moral standing. The parable of the garden was revealed as a warning to the Makkan elite who controlled wealth and excluded the poor.',
    keyThemes: [
      'The dignity and honour of the Prophet against slander',
      'The pen and writing as noble instruments of knowledge',
      'The judgment of character by deeds and moral standing',
      'The parable of the destroyed garden as a warning against ingratitude',
      'The inevitable humiliation of those who obstruct the truth'
    ],
    notableVerses: [
      {
        reference: '68:1-2',
        arabic: 'نۚ وَالْقَلَمِ وَمَا يَسْطُرُونَ ۝ مَا أَنتَ بِنِعْمَةِ رَبِّكَ بِمَجْنُونٍ',
        translation: 'Nun. By the pen and what they inscribe — you are not, by the favour of your Lord, a madman.',
        context: 'Among the earliest revelations — Allah swears by the pen itself to refute the charge of madness levelled at the Prophet, elevating literacy and reason as divine witnesses to his sanity.'
      },
      {
        reference: '68:4',
        arabic: 'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',
        translation: 'And indeed, you are of a great moral character.',
        context: 'The divine testimonial to the Prophet\'s character — A\'ishah narrated that his character was the Quran itself, and this verse is the scriptural foundation for the Islamic understanding of prophetic moral exemplarity.'
      }
    ]
  },
  {
    number: 69,
    arabicName: 'الحاقة',
    englishName: 'The Inevitable Reality',
    transliteration: 'al-haqqah',
    verses: 52,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'Al-Haqqah opens with a triple rhetorical question about the Inevitable Reality (the Day of Judgement) before narrating the destruction of \'Ad, Thamud, Pharaoh, and the people of Lut as historical proof that divine punishment is real. It then describes the terrors and rewards of the Day itself in vivid detail — the trumpet blast, the record books, the scales, the righteous in gardens, the condemned in chains. The surah concludes by defending the Quran as genuine divine revelation and warning of the consequences of rejecting it.',
    asbabalNuzul: 'Revealed in the Makkan period as part of the Quran\'s sustained effort to make the reality of the Day of Judgement vivid and inescapable for an audience that treated it with contempt. The historical examples of destroyed nations were particularly resonant for Arabs who knew the ruins of \'Ad and Thamud from their trade routes.',
    keyThemes: [
      'The Day of Judgement as the inevitable, undeniable reality',
      'Historical precedents of divine punishment for arrogant nations',
      'The trumpet blast and the cosmic upheaval of the Last Day',
      'The detailed contrasting fates of the righteous and the wicked',
      'The Quran\'s divine origin and the gravity of rejecting it'
    ],
    notableVerses: [
      {
        reference: '69:1-3',
        arabic: 'الْحَاقَّةُ ۝ مَا الْحَاقَّةُ ۝ وَمَا أَدْرَاكَ مَا الْحَاقَّةُ',
        translation: 'The Inevitable Reality — what is the Inevitable Reality? And what would make you know what the Inevitable Reality is?',
        context: 'The triple rhetorical structure signals the magnitude of what is being described — the Day of Judgement is so consequential that even the question of what it is carries dramatic weight.'
      },
      {
        reference: '69:19',
        arabic: 'فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ فَيَقُولُ هَاؤُمُ اقْرَءُوا كِتَابِيَهْ',
        translation: 'So as for he who is given his record in his right hand, he will say, "Here, read my record!"',
        context: 'The joyful exclamation of the saved soul, whose eagerness to share his record of deeds contrasts sharply with the shame of the condemned — capturing the essence of the Day in a single human moment.'
      }
    ]
  },
  {
    number: 70,
    arabicName: 'المعارج',
    englishName: 'The Ascending Stairways',
    transliteration: 'al-maarij',
    verses: 44,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'Al-Maarij opens with an account of a questioner who demanded the punishment he was warned about, and describes the ascent of angels and the Spirit to Allah in a Day whose measure is fifty thousand years. The surah then portrays the deeply human traits of anxiety, miserliness, and panic — inherent in the human condition — and how prayer and trust in Allah transform them. The believers who guard their prayers, give charity, and honour their trusts are contrasted with those who race toward the disbelievers in the Hereafter.',
    asbabalNuzul: 'The opening verses were revealed in response to al-Nadr ibn al-Harith or another Makkan leader who mockingly demanded the punishment be sent down if the Quran was true. The surah affirms that divine punishment has its own timing and the Day of Reckoning is certain. The central section on human psychological traits was revealed to describe the universal human condition and the role of faith in elevating it.',
    keyThemes: [
      'The certainty of divine punishment despite its seeming delay',
      'The ascent of angels and the cosmic scale of divine time',
      'The natural human traits of anxiety and miserliness and their spiritual cure',
      'The qualities of the believers: prayer, charity, chastity, and trustworthiness',
      'The inevitability of the Day of Judgement'
    ],
    notableVerses: [
      {
        reference: '70:19-21',
        arabic: 'إِنَّ الْإِنسَانَ خُلِقَ هَلُوعًا ۝ إِذَا مَسَّهُ الشَّرُّ جَزُوعًا ۝ وَإِذَا مَسَّهُ الْخَيْرُ مَنُوعًا',
        translation: 'Indeed, mankind was created anxious — when adversity touches him, impatient, and when good touches him, withholding.',
        context: 'A profound psychological observation on the human condition — anxiety, impatience under hardship, and miserliness in prosperity are presented as innate tendencies that faith disciplines and transforms.'
      },
      {
        reference: '70:22-23',
        arabic: 'إِلَّا الْمُصَلِّينَ ۝ الَّذِينَ هُمْ عَلَىٰ صَلَاتِهِمْ دَائِمُونَ',
        translation: 'Except the observers of prayer — those who are constant in their prayer.',
        context: 'The exception to the human condition: those who maintain prayer consistently are liberated from the cycle of anxiety and miserliness, illustrating prayer as the central discipline of the spiritual life.'
      }
    ]
  },
  {
    number: 71,
    arabicName: 'نوح',
    englishName: 'Noah',
    transliteration: 'nuh',
    verses: 28,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'Surah Nuh narrates the entire prophetic mission of Nuh in his own words, as he reports to Allah the nine hundred and fifty years of his call, his methods — public and private, day and night — and the stubborn resistance of his people. He details their obstinate refusal and their leaders\' manipulation of the people through their idols. Finally, Nuh supplicates for the destruction of the disbelievers and the forgiveness of the believers. The surah is a sustained meditation on prophetic patience, divine justice, and the ecology of faith.',
    asbabalNuzul: 'Revealed in the Makkan period as a consolation to the Prophet Muhammad, who faced sustained rejection from the Quraysh after years of preaching. Nuh\'s story — the longest single-figure narrative in Makkan suwar — was revealed to demonstrate that the pattern of rejection is ancient, that patient perseverance is the prophetic model, and that divine support ultimately vindicates the messenger.',
    keyThemes: [
      'The patient, multi-method prophetic call across nine and a half centuries',
      'The stubbornness and psychological manipulation of rejectors',
      'Tawhid presented through natural signs: rain, rivers, and creation',
      'Nuh\'s supplication for divine justice against the obstinate',
      'The names and persistence of idolatry across generations'
    ],
    notableVerses: [
      {
        reference: '71:10-12',
        arabic: 'فَقُلْتُ اسْتَغْفِرُوا رَبَّكُمْ إِنَّهُ كَانَ غَفَّارًا ۝ يُرْسِلِ السَّمَاءَ عَلَيْكُم مِّدْرَارًا',
        translation: 'I said: Ask forgiveness of your Lord — He is indeed Forgiving. He will send the sky upon you in showers and give you increase in wealth and children.',
        context: 'Nuh\'s call links repentance to material and ecological blessing — a scriptural basis for the Islamic understanding that divine forgiveness has worldly as well as spiritual consequences.'
      },
      {
        reference: '71:28',
        arabic: 'رَّبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا وَلِلْمُؤْمِنِينَ وَالْمُؤْمِنَاتِ',
        translation: 'My Lord, forgive me and my parents and whoever enters my house as a believer and the believing men and believing women.',
        context: 'Nuh\'s closing supplication — after centuries of rejection he prays not for himself alone but for all believers across time, modelling the expansive compassion of the prophetic heart.'
      }
    ]
  },
  {
    number: 72,
    arabicName: 'الجن',
    englishName: 'The Jinn',
    transliteration: 'al-jinn',
    verses: 28,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'Al-Jinn reveals that a group of jinn listened to the Quran being recited, believed in it, and returned to warn their people. Their report, quoted in the surah, affirms the Quran\'s guidance, critiques the earlier practice of seeking refuge with jinn (which only increased transgression), confirms the reality of the Hereafter, and marvels at the heavens being guarded against eavesdropping. The surah establishes that the Prophet\'s mission encompasses both humans and jinn, and concludes with the absolute knowledge of the unseen belonging to Allah alone.',
    asbabalNuzul: 'Revealed after an incident during the Prophet\'s return from Ta\'if, when he recited the Quran at night in Nakhlah and a group of jinn overheard him. Jibreel later informed him of their response. This event is also narrated in Surah Al-Ahqaf. The revelation served to comfort the Prophet after the rejection of Ta\'if and to indicate that even the unseen world of the jinn was responding to his message.',
    keyThemes: [
      'The jinn as beings accountable to divine revelation',
      'The Quran\'s universality beyond the human realm',
      'Critique of the pre-Islamic practice of seeking refuge with jinn',
      'The guarding of the heavens against demonic eavesdropping',
      'The absolute exclusivity of divine knowledge of the unseen'
    ],
    notableVerses: [
      {
        reference: '72:1-2',
        arabic: 'قُلْ أُوحِيَ إِلَيَّ أَنَّهُ اسْتَمَعَ نَفَرٌ مِّنَ الْجِنِّ فَقَالُوا إِنَّا سَمِعْنَا قُرْآنًا عَجَبًا ۝ يَهْدِي إِلَى الرُّشْدِ فَآمَنَّا بِهِ',
        translation: 'Say: It has been revealed to me that a group of jinn listened and said: Indeed we have heard a wondrous Quran. It guides to right conduct, and we have believed in it.',
        context: 'The jinn\'s spontaneous recognition of the Quran\'s wonder and guidance — without the benefit of seeing miracles or meeting the Prophet — illustrates the Quran\'s innate power to convince pure hearts.'
      },
      {
        reference: '72:26',
        arabic: 'عَالِمُ الْغَيْبِ فَلَا يُظْهِرُ عَلَىٰ غَيْبِهِ أَحَدًا',
        translation: 'He is the Knower of the unseen, and He does not disclose His knowledge of the unseen to anyone.',
        context: 'A definitive statement on the monopoly of divine knowledge — the unseen belongs exclusively to Allah, closing any claim to occult knowledge by jinn, soothsayers, or any other being.'
      }
    ]
  },
  {
    number: 73,
    arabicName: 'المزمل',
    englishName: 'The Enshrouded One',
    transliteration: 'al-muzzammil',
    verses: 20,
    classification: 'Makki',
    period: 'Early Makkan',
    overview: 'Al-Muzzammil addresses the Prophet wrapped in his garments — one of the earliest images of prophetic life — and commands him to rise for the night prayer, recite the Quran with measured recitation (tartil), and bear patiently with the opposition of the Makkans. It describes the heavy word of revelation and the spiritual power of night prayer to prepare the Prophet for his mission. The closing verse moderates the night prayer obligation for the community, acknowledging human limitation and the demands of daily life.',
    asbabalNuzul: 'Among the earliest revelations. The Prophet had received the first revelation in the cave and returned trembling to Khadijah. The surah was revealed as the follow-up charge — the Prophet must now prepare himself through the discipline of night prayer for the immense task ahead. The final verse, which moderates the obligatory night prayer to a voluntary one, was revealed much later in Madinah after the companions found the extended night prayer burdensome.',
    keyThemes: [
      'Night prayer (tahajjud) as spiritual preparation for the prophetic mission',
      'Tartil — careful, measured Quran recitation as an act of worship',
      'Patient endurance in the face of rejection',
      'The heavy weight and profound responsibility of divine revelation',
      'Divine compassion in moderating religious obligations'
    ],
    notableVerses: [
      {
        reference: '73:1-4',
        arabic: 'يَا أَيُّهَا الْمُزَّمِّلُ ۝ قُمِ اللَّيْلَ إِلَّا قَلِيلًا ۝ نِّصْفَهُ أَوِ انقُصْ مِنْهُ قَلِيلًا ۝ أَوْ زِدْ عَلَيْهِ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا',
        translation: 'O you who wraps himself, arise for prayer the night — except for a little — half of it or subtract from it a little, or add to it, and recite the Quran with measured recitation.',
        context: 'The formative command to the Prophet — the night vigil is the primary spiritual discipline that prepares the soul for the weight of prophethood, and tartil transforms recitation into contemplative prayer.'
      },
      {
        reference: '73:5',
        arabic: 'إِنَّا سَنُلْقِي عَلَيْكَ قَوْلًا ثَقِيلًا',
        translation: 'Indeed, We will cast upon you a heavy word.',
        context: 'A frank acknowledgement of the weight of prophetic responsibility — the Quran is not merely information but a transformative burden that reshapes the recipient\'s entire being and mission.'
      }
    ]
  },
  {
    number: 74,
    arabicName: 'المدثر',
    englishName: 'The Covered One',
    transliteration: 'al-muddaththir',
    verses: 56,
    classification: 'Makki',
    period: 'Early Makkan',
    overview: 'Al-Muddaththir is widely regarded as the second or third revelation, when the Prophet was commanded to rise and warn. The surah sets out the core requirements of prophethood: warn, glorify Allah, purify the garments and soul, shun idols, and be patient. It then narrates the fate of a specific opponent who heard the Quran, acknowledged its power privately, but publicly called it magic — and was thereafter condemned. The surah introduces the nineteen guardians of Hell and the purpose of their number as a test for the disbelievers.',
    asbabalNuzul: 'After the initial revelation of Al-\'Alaq, a period of silence in revelation followed (the fatra). When revelation resumed, Al-Muddaththir was revealed — some accounts place it as the second surah. The specific condemnation verses (11-25) were revealed in response to al-Walid ibn al-Mughirah who, after hearing the Quran, declared privately it was unlike any human poetry or magic, but then publicly called it "al-sihr" (magic) to sway the Makkans against the Prophet.',
    keyThemes: [
      'The command to rise, warn, and begin the public mission',
      'Purification of the soul as prerequisite for prophetic work',
      'The condemnation of those who deny the Quran despite recognising it',
      'The nineteen guardians of Hell and the nature of divine testing',
      'The Quran as a reminder for all who will take heed'
    ],
    notableVerses: [
      {
        reference: '74:1-5',
        arabic: 'يَا أَيُّهَا الْمُدَّثِّرُ ۝ قُمْ فَأَنذِرْ ۝ وَرَبَّكَ فَكَبِّرْ ۝ وَثِيَابَكَ فَطَهِّرْ ۝ وَالرُّجْزَ فَاهْجُرْ',
        translation: 'O you who covers himself — arise and warn, and your Lord glorify, and your clothing purify, and uncleanliness avoid.',
        context: 'The prophetic commissioning in five commands: rise, warn, glorify, purify, abandon. This sequence captures the entire programme of prophetic mission in a set of brief imperatives.'
      },
      {
        reference: '74:31',
        arabic: 'وَمَا جَعَلْنَا أَصْحَابَ النَّارِ إِلَّا مَلَائِكَةً',
        translation: 'And We have not made the keepers of the Fire except angels.',
        context: 'Part of the divine explanation of the nineteen guardians — chosen to be angels rather than humans so that no claim of overpowering them could be entertained, and their number serves as a trial of faith.'
      }
    ]
  },
  {
    number: 75,
    arabicName: 'القيامة',
    englishName: 'The Resurrection',
    transliteration: 'al-qiyamah',
    verses: 40,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'Al-Qiyamah opens with two oaths — by the Day of Resurrection and by the self-accusing soul — to affirm the reality of resurrection against the denial of the disbelievers. The surah describes the terrifying signs of the Last Hour: the blinding of sight, the eclipsing of the moon, the joining of moon and sun. It then addresses the Prophet directly, reassuring him that Allah will make him memorise and recite the Quran, before turning to the moment of death and the faces of the righteous and condemned. The origin of the human being from a fluid is cited as proof of Allah\'s power to resurrect.',
    asbabalNuzul: 'Revealed in the Makkan period primarily to address the Quraysh\'s denial of bodily resurrection. The opening oath by the "self-accusing soul" introduces the Quranic psychology of conscience — the innate moral voice that accuses the self. The parenthetical verses (16-19) assuring the Prophet of divine memorisation were revealed because early in his prophethood he would repeat words of revelation as they came, fearing he might forget.',
    keyThemes: [
      'The certainty of resurrection against the denials of the materialists',
      'The cosmic signs of the Last Hour',
      'The divine guarantee of preserving the Quran in the Prophet\'s heart',
      'The contrasting faces of the righteous and the wicked at death and resurrection',
      'The origin of human life as proof of resurrection\'s possibility'
    ],
    notableVerses: [
      {
        reference: '75:16-17',
        arabic: 'لَا تُحَرِّكْ بِهِ لِسَانَكَ لِتَعْجَلَ بِهِ ۝ إِنَّ عَلَيْنَا جَمْعَهُ وَقُرْآنَهُ',
        translation: 'Do not move your tongue with it to hasten it. Indeed, upon Us is its collection and recitation.',
        context: 'The divine reassurance to the Prophet not to rush the recitation of revelation — Allah Himself guarantees its preservation in the Prophet\'s memory, laying the foundation of the Quran\'s oral transmission tradition.'
      },
      {
        reference: '75:36',
        arabic: 'أَيَحْسَبُ الْإِنسَانُ أَن يُتْرَكَ سُدًى',
        translation: 'Does man think that he will be left neglected?',
        context: 'A piercing rhetorical challenge — the assumption that human beings are morally unaccountable is demolished in a single question, affirming that purposeful creation implies purposeful judgement.'
      }
    ]
  },
  {
    number: 76,
    arabicName: 'الإنسان',
    englishName: 'The Human',
    transliteration: 'al-insan',
    verses: 31,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'Al-Insan traces the human being from a period of non-existence, through the creation as a compound of fluids, to the test of this life, and then to the rewards of Paradise. It describes the righteous who fulfil their vows, feed the poor and orphan and prisoner for the sake of Allah alone without seeking thanks, and their extraordinary reward in the gardens of Paradise — the pure drink, the silken garments, the thrones, and the companionship of divine favour. The surah closes by affirming that the Quran is a reminder for those who will to remember.',
    asbabalNuzul: 'The circumstances of revelation are linked by some accounts to Ali ibn Abi Talib and Fatimah who, along with their servant, gave away their iftar meal for three consecutive nights to a poor person, an orphan, and a captive, saying on each occasion: "We feed you for the sake of Allah — we desire from you neither reward nor thanks." The Quran then revealed verses in honour of their selfless act. Other scholars hold the surah is wholly Makkan; the scholarly debate on its classification is notable.',
    keyThemes: [
      'Human creation from nothingness and the resulting responsibility',
      'The test of this life and the dual paths of gratitude and ingratitude',
      'Selfless charity as the hallmark of the righteous',
      'The detailed pleasures of Paradise as divine reward',
      'The Quran as a reminder and the freedom of human will'
    ],
    notableVerses: [
      {
        reference: '76:8-9',
        arabic: 'وَيُطْعِمُونَ الطَّعَامَ عَلَىٰ حُبِّهِ مِسْكِينًا وَيَتِيمًا وَأَسِيرًا ۝ إِنَّمَا نُطْعِمُكُمْ لِوَجْهِ اللَّهِ لَا نُرِيدُ مِنكُمْ جَزَاءً وَلَا شُكُورًا',
        translation: 'And they give food in spite of love for it to the needy, the orphan, and the captive, saying: We feed you only for the sake of Allah — we wish not from you reward or gratitude.',
        context: 'The highest articulation of selfless charity in the Quran — giving not for human recognition, societal reward, or even the recipient\'s gratitude, but purely for the face of Allah.'
      },
      {
        reference: '76:1',
        arabic: 'هَلْ أَتَىٰ عَلَى الْإِنسَانِ حِينٌ مِّنَ الدَّهْرِ لَمْ يَكُن شَيْئًا مَّذْكُورًا',
        translation: 'Has there not been upon man a period of time when he was not a thing even mentioned?',
        context: 'The surah opens by anchoring human existence in its fragile origin — there was a period when the individual human did not exist at all, establishing the gift of existence as the first basis of gratitude.'
      }
    ]
  },
  {
    number: 77,
    arabicName: 'المرسلات',
    englishName: 'The Emissaries',
    transliteration: 'al-mursalat',
    verses: 50,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'Al-Mursalat opens with a series of five oaths by the emissaries — winds, angels, or surahs — that perform sequential cosmic functions: blowing in succession, spreading, separating, delivering reminders, and establishing divine argument. The surah then pronounces woe upon the deniers in ten powerful refrains (waylun yawma\'idhin lil-mukadhdhibin), interweaving cosmic signs of creation with warnings about the Day of Judgement. The bounties of creation and the terrors of the Day are set side by side as an unanswerable argument for accountability.',
    asbabalNuzul: 'Revealed in the Makkan period. The companions reported that this was one of the last surahs the Prophet recited in an evening prayer before the assassination attempt in Mina, and that they could tell from its content the nature of what was being revealed. The repeated refrain "woe that day to the deniers" was designed to pierce through the Makkan culture of comfortable denial.',
    keyThemes: [
      'The cosmic emissaries and their functions in creation and revelation',
      'The recurring refrain of woe to the deniers as a rhetorical device',
      'Signs of creation as arguments for the Day of Judgement',
      'The origins of human creation as evidence of divine power',
      'The separation of the righteous from the wicked on the Last Day'
    ],
    notableVerses: [
      {
        reference: '77:1-5',
        arabic: 'وَالْمُرْسَلَاتِ عُرْفًا ۝ فَالْعَاصِفَاتِ عَصْفًا ۝ وَالنَّاشِرَاتِ نَشْرًا ۝ فَالْفَارِقَاتِ فَرْقًا ۝ فَالْمُلْقِيَاتِ ذِكْرًا',
        translation: 'By those sent forth in succession. And those who blow violently. And those who spread widely. And those who differentiate clearly. And those who deliver a reminder.',
        context: 'The five-fold oath opening — whether interpreted as winds, angels, or Quranic verses, each image builds a sense of cumulative, purposeful divine activity underlying all of creation and revelation.'
      },
      {
        reference: '77:46',
        arabic: 'كُلُوا وَتَمَتَّعُوا قَلِيلًا إِنَّكُمْ مُّجْرِمُونَ',
        translation: 'Eat and enjoy yourselves a little — indeed, you are criminals.',
        context: 'The bitter irony of divine address — a brief concession to temporary pleasure frames the gravity of criminal rejection of truth, the enjoyment being finite against an infinite reckoning.'
      }
    ]
  },
  {
    number: 78,
    arabicName: 'النبأ',
    englishName: 'The Announcement',
    transliteration: 'an-naba',
    verses: 40,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'An-Naba opens by addressing the great news — the Day of Resurrection — that the Makkans disputed. The surah then presents the case: Allah set the earth as a bed, the mountains as pegs, created human beings in pairs, made sleep for rest, the night as a covering, the day for livelihood, built the seven firm heavens and the blazing sun. All this creative power makes resurrection inescapable. The surah then describes the terrors of the Day and the reward of the righteous in gardens before concluding with the solemn warning: the disbeliever will wish he were dust.',
    asbabalNuzul: 'Revealed in the Makkan period in response to the Quraysh\'s disputing among themselves about the "great news" — the Day of Resurrection and the Quran\'s message. The surah frames natural creation as the first argument that the One who built the universe can certainly rebuild human bodies for judgement. The vivid imagery of comfort — sleep, night, day, rain, gardens — contrasts with the terrifying imagery of the Day to create a profound rhetorical argument.',
    keyThemes: [
      'The great news of the Day of Resurrection as the central dispute',
      'Signs of creation as proofs of divine power to resurrect',
      'The terrors of the Day: the trumpet, the opened sky, the moving mountains',
      'The detailed reward of the righteous in Paradise',
      'The solemn regret of the disbeliever who wished he were dust'
    ],
    notableVerses: [
      {
        reference: '78:1-3',
        arabic: 'عَمَّ يَتَسَاءَلُونَ ۝ عَنِ النَّبَإِ الْعَظِيمِ ۝ الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ',
        translation: 'About what are they asking one another? About the great news — that over which they are in disagreement.',
        context: 'The surah opens on the Makkan street-level dispute about the Quran\'s teaching, anchoring the cosmic revelation in the immediate social reality of people arguing about the Day of Judgement.'
      },
      {
        reference: '78:40',
        arabic: 'إِنَّا أَنذَرْنَاكُمْ عَذَابًا قَرِيبًا يَوْمَ يَنظُرُ الْمَرْءُ مَا قَدَّمَتْ يَدَاهُ وَيَقُولُ الْكَافِرُ يَا لَيْتَنِي كُنتُ تُرَابًا',
        translation: 'Indeed, We have warned you of a near punishment on the Day when a man will observe what his hands have put forth and the disbeliever will say: "Oh, I wish that I were dust!"',
        context: 'The surah\'s devastating conclusion — the disbeliever\'s wish to be reduced to the same dust that animals become, preferring non-existence to the prospect of judgement, captures the ultimate regret of the heedless.'
      }
    ]
  },
  {
    number: 79,
    arabicName: 'النازعات',
    englishName: 'Those Who Extract',
    transliteration: 'an-naziat',
    verses: 46,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'An-Naziat opens with five oaths by angels performing their duties — extracting souls, drawing them gently, swimming through the heavens, racing ahead, and managing divine affairs. The surah then affirms the certainty of the Day of Judgement before narrating the story of Musa\'s confrontation with Pharaoh — his signs, Pharaoh\'s arrogance and denial, and his ultimate destruction. Creation signs — the spread earth, the mountains, the darkened night, and the bright day — are then cited as evidence that the One who created all this can certainly resurrect human beings.',
    asbabalNuzul: 'Revealed in the Makkan period to address the question that recurs in many Makkan surahs: the disbelievers\' denial of resurrection. The opening oaths by the angels performing their duties in the unseen are meant to awaken the listeners to the vast activity of the angelic world that surrounds them, and the example of Pharaoh\'s destruction serves as a political warning to the Makkan leaders who were persecuting the Muslims.',
    keyThemes: [
      'The angels\' functions in managing cosmic affairs and human souls',
      'The certainty of the Day of Judgement despite seeming distance',
      'Musa\'s mission and Pharaoh\'s arrogance as a historical warning',
      'Signs of creation as evidence for divine power over resurrection',
      'The contrast between the life-seekers and the God-fearers'
    ],
    notableVerses: [
      {
        reference: '79:17-19',
        arabic: 'اذْهَبْ إِلَىٰ فِرْعَوْنَ إِنَّهُ طَغَىٰ ۝ فَقُل هَل لَّكَ إِلَىٰ أَن تَزَكَّىٰ ۝ وَأَهْدِيَكَ إِلَىٰ رَبِّكَ فَتَخْشَىٰ',
        translation: 'Go to Pharaoh — indeed he has transgressed. And say to him: "Would you like to purify yourself? And let me guide you to your Lord so you might fear Him?"',
        context: 'The gentleness of the prophetic invitation even to the greatest tyrant — Musa is commanded to offer Pharaoh the path of purification before any threat, modelling the priority of da\'wah over condemnation.'
      },
      {
        reference: '79:40-41',
        arabic: 'وَأَمَّا مَنْ خَافَ مَقَامَ رَبِّهِ وَنَهَى النَّفْسَ عَنِ الْهَوَىٰ ۝ فَإِنَّ الْجَنَّةَ هِيَ الْمَأْوَىٰ',
        translation: 'But as for one who feared the standing before his Lord and restrained the self from vain desire — then indeed Paradise is the refuge.',
        context: 'The surah\'s positive climax — the one who masters the ego\'s desires through awareness of divine presence earns the ultimate refuge, presenting self-discipline as the path to Paradise.'
      }
    ]
  },
  {
    number: 80,
    arabicName: 'عبس',
    englishName: 'He Frowned',
    transliteration: 'abasa',
    verses: 42,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'Abasa opens with a remarkable self-correcting divine rebuke of the Prophet\'s momentary inattention to a blind man, Ibn Umm Maktum, in favour of engaging with a leading Makkan figure. The surah establishes the foundational principle that the sincere seeker of guidance must never be neglected for those who show no interest. It then moves to a meditation on the human being\'s ingratitude — created from a drop, made to grow, then given death and resurrection — and the food chain as a sign of divine provision. The Day of Judgement closes the surah.',
    asbabalNuzul: 'Revealed when the Prophet was engaged in a meeting with a group of Makkan nobility, hoping to win them to Islam, and Abdullah ibn Umm Maktum — a blind man — came repeatedly seeking knowledge. The Prophet frowned and turned away. Allah immediately revealed this surah, gently but clearly correcting the Prophet\'s action and establishing the universal principle of equity in da\'wah: the sincere poor seeker is more deserving of attention than the wealthy indifferent.',
    keyThemes: [
      'Equity in preaching: the sincere seeker must not be neglected',
      'Human ingratitude toward the Creator who formed and fashioned us',
      'Food and sustenance as signs of divine mercy and design',
      'The Day when every person will flee from their closest kin',
      'The divine rebuke of the Prophet as evidence of Quranic authenticity'
    ],
    notableVerses: [
      {
        reference: '80:1-4',
        arabic: 'عَبَسَ وَتَوَلَّىٰ ۝ أَن جَاءَهُ الْأَعْمَىٰ ۝ وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّىٰ ۝ أَوْ يَذَّكَّرُ فَتَنفَعَهُ الذِّكْرَىٰ',
        translation: 'He frowned and turned away because the blind man came to him. But what would make you know — perhaps he might be purified, or he might be reminded and the reminder benefit him?',
        context: 'The divine correction is phrased as a question, not a condemnation — inviting the Prophet to see the blind man\'s potential and affirming the Quran\'s authenticity since no human author would fabricate divine criticism of himself.'
      },
      {
        reference: '80:34-37',
        arabic: 'يَوْمَ يَفِرُّ الْمَرْءُ مِنْ أَخِيهِ ۝ وَأُمِّهِ وَأَبِيهِ ۝ وَصَاحِبَتِهِ وَبَنِيهِ',
        translation: 'On the Day a man will flee from his brother and his mother and his father and his wife and his children.',
        context: 'The most intimate human bonds are shattered by the terror of the Day — the very relationships that defined earthly identity become irrelevant before individual accountability.'
      }
    ]
  },
  {
    number: 81,
    arabicName: 'التكوير',
    englishName: 'The Wrapping Over',
    transliteration: 'at-takwir',
    verses: 29,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'At-Takwir describes the unravelling of the cosmic order at the end of time in a rapid sequence of twelve "when" clauses: the sun is dimmed, stars fall, mountains set in motion, pregnant camels are abandoned, wild beasts are gathered, seas overflow, souls are paired, the infant girl buried alive is asked for what sin she was killed, scrolls are unrolled, the sky is stripped away, Hell is set ablaze, Paradise is brought near. The surah then defends the Quran\'s divine origin, affirming that Jibril — not the Prophet — is the one who brought it.',
    asbabalNuzul: 'Revealed in the Makkan period when the Quraysh accused the Prophet of being possessed or of inventing the Quran. The rapid-fire imagery of cosmic dissolution was designed to jolt listeners out of their comfortable certainties. The verse about the infant girl killed at birth (wa\'d) was a direct confrontation of the pre-Islamic practice of female infanticide, making the Day of Judgement the moment of justice for the most voiceless victims.',
    keyThemes: [
      'The cosmic dissolution at the end of time through twelve sequential signs',
      'Divine justice for the female infant killed unjustly',
      'The role of Jibril as the noble messenger who brought the Quran',
      'The Quran as the speech of Allah, not the words of a madman or soothsayer',
      'Human freedom of will within divine encompassing will'
    ],
    notableVerses: [
      {
        reference: '81:8-9',
        arabic: 'وَإِذَا الْمَوْءُودَةُ سُئِلَتْ ۝ بِأَيِّ ذَنبٍ قُتِلَتْ',
        translation: 'And when the infant girl who was buried alive is asked — for what sin was she killed?',
        context: 'Among the most powerful verses against female infanticide in the Quran — the question is directed not at the murderer but at the victim, as an act of divine honour: the Day of Judgement will speak for those who had no voice.'
      },
      {
        reference: '81:28-29',
        arabic: 'لِمَن شَاءَ مِنكُمْ أَن يَسْتَقِيمَ ۝ وَمَا تَشَاءُونَ إِلَّا أَن يَشَاءَ اللَّهُ رَبُّ الْعَالَمِينَ',
        translation: 'For whoever wills among you to take a right course. And you do not will except that Allah wills — Lord of the worlds.',
        context: 'The surah\'s theological close — human will is real but situated within divine will, affirming both human moral responsibility and divine sovereignty without eliminating either.'
      }
    ]
  },
  {
    number: 82,
    arabicName: 'الانفطار',
    englishName: 'The Cleaving',
    transliteration: 'al-infitar',
    verses: 19,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'Al-Infitar describes the cosmic cleaving apart at the end of time — the sky splits, stars scatter, the seas burst open, and graves are overturned — and then turns directly to the human being to ask what deceived him about his Generous Lord. The surah affirms that the honoured scribes (kiraman katibin) record every deed. It concludes with a description of the Day of Judgement on which no soul can help another except by divine permission, and the righteous enjoy bliss while the wicked suffer.',
    asbabalNuzul: 'Revealed in the Makkan period, part of the cluster of short eschatological surahs designed to make the Day of Judgement vivid and immediate. The question "what has deceived you about your Generous Lord?" directly addresses the psychological root of human ingratitude and arrogance — the subconscious assumption that divine generosity means divine tolerance of sin.',
    keyThemes: [
      'The cosmic dissolution as the context for human accountability',
      'The question of what deceives the human being about Allah\'s nature',
      'The recording angels who note every deed without exception',
      'Individual accountability on the Day of Judgement',
      'The contrasting destinies of the righteous and the wicked'
    ],
    notableVerses: [
      {
        reference: '82:6-8',
        arabic: 'يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ ۝ الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ ۝ فِي أَيِّ صُورَةٍ مَّا شَاءَ رَكَّبَكَ',
        translation: 'O mankind — what has deceived you concerning your Lord, the Generous, who created you, proportioned you, and assembled you in whatever form He willed?',
        context: 'The most direct of Quranic self-examinations — Allah asks the human being what rationalisation led to forgetfulness of the One who fashioned him with such precision and generosity.'
      },
      {
        reference: '82:10-12',
        arabic: 'وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ ۝ كِرَامًا كَاتِبِينَ ۝ يَعْلَمُونَ مَا تَفْعَلُونَ',
        translation: 'And indeed over you are appointed keepers — noble and recording, who know whatever you do.',
        context: 'The scriptural foundation for the doctrine of kiraman katibin — the honoured scribes whose ceaseless recording forms the basis of the heavenly ledger that will be opened on the Day of Judgement.'
      }
    ]
  },
  {
    number: 83,
    arabicName: 'المطففين',
    englishName: 'The Defrauders',
    transliteration: 'al-mutaffifin',
    verses: 36,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'Al-Mutaffifin opens with a condemnation of those who take full measure for themselves but give short measure and weight to others — a commercial fraud that the surah elevates into a spiritual disease. After pronouncing woe upon them, the surah describes the heavenly register (\'Illiyyun) where the record of the righteous is kept, and the hellish register (Sijjin) where the records of the wicked are stored. It then portrays the delights of the righteous in Paradise — a sealed nectar — and the mockery the wicked will face in the Hereafter, reversing the earthly dynamic where they mocked the believers.',
    asbabalNuzul: 'The opening verses were revealed when the Prophet arrived in Madinah and found that the people of Madinah were among the most notorious short-changers in trade. The revelation immediately addressed this commercial dishonesty within the religious framework of accountability. The surah was likely among the last Makkan revelations or earliest Madinan ones, and scholars differ on its classification.',
    keyThemes: [
      'Commercial fraud as a spiritual crime against divine justice',
      'The cosmic registers of deeds: Sijjin for the wicked, \'Illiyyun for the righteous',
      'The seal of Tasnim — a drink from the highest spring of Paradise',
      'The reversal of mockery on the Day of Judgement',
      'The hardening of the heart through accumulation of sin'
    ],
    notableVerses: [
      {
        reference: '83:1-3',
        arabic: 'وَيْلٌ لِّلْمُطَفِّفِينَ ۝ الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ ۝ وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ',
        translation: 'Woe to those who give less than due — who, when they take a measure from people, take it in full. But if they give by measure or by weight to them, they cause loss.',
        context: 'The foundational Islamic teaching on commercial ethics — defrauding in weights and measures is not merely a regulatory offence but a spiritual crime meriting divine condemnation.'
      },
      {
        reference: '83:26',
        arabic: 'خِتَامُهُ مِسْكٌ وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ',
        translation: 'Its end is musk — and for that let the competitors compete.',
        context: 'The divine invitation to compete for the highest — the pure drink sealed with musk in Paradise is the only prize worth racing toward, reorienting human ambition from worldly competition to spiritual striving.'
      }
    ]
  },
  {
    number: 84,
    arabicName: 'الانشقاق',
    englishName: 'The Splitting Open',
    transliteration: 'al-inshiqaq',
    verses: 25,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'Al-Inshiqaq opens with the sky splitting open in obedience to its Lord, and the earth spreading out and casting forth what it contains — images of cosmic submission to the divine command. The surah then addresses the human being who is labouring toward his Lord and will meet his reckoning — either receiving his book in the right hand for a light reckoning, or in the left hand behind his back for a calling to perdition. The surah closes by asking why the Makkans do not prostrate before the Quran, and affirms the reality of their development through stage after stage.',
    asbabalNuzul: 'Revealed in the Makkan period, associated with a famous incident where a Makkan leader refused to prostrate when the concluding verses were recited (or when Surah An-Najm was recited). This refusal led to the revelation affirming that those who hear the Quran and turn away will face a painful punishment. The verse on human development through stages was revealed to address the Makkan denial of resurrection by pointing to embryological development as evidence of divine creative stages.',
    keyThemes: [
      'The cosmic submission of sky and earth to the divine command',
      'The human journey toward meeting the Lord',
      'The two destinies: the right-hand and left-hand book recipients',
      'The progressive stages of human creation as evidence of divine power',
      'The obligation of prostration before the Quran'
    ],
    notableVerses: [
      {
        reference: '84:6',
        arabic: 'يَا أَيُّهَا الْإِنسَانُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًا فَمُلَاقِيهِ',
        translation: 'O mankind — indeed you are labouring toward your Lord with exertion and will meet Him.',
        context: 'A profound summary of the human condition — all of human effort, however directed, is a journey toward the encounter with the Lord; the only question is the nature of that meeting.'
      },
      {
        reference: '84:19',
        arabic: 'لَتَرْكَبُنَّ طَبَقًا عَن طَبَقٍ',
        translation: 'You will surely journey from stage to stage.',
        context: 'Interpreted as referring both to the stages of human development (embryo, child, adult, elder) and to the stages after death, presenting all of existence as a journey of divine creative stages.'
      }
    ]
  },
  {
    number: 85,
    arabicName: 'البروج',
    englishName: 'The Mansions of the Stars',
    transliteration: 'al-buruj',
    verses: 22,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'Al-Buruj opens with a majestic oath by the sky with its great constellations, the promised Day, and the witness and witnessed. It then narrates the People of the Trench — believers who were burned alive by tyrannical rulers for their faith — as history\'s most devastating example of religious persecution. Allah\'s response is to promise that those who torment believers will be punished by the Fire of Hell. The surah then affirms the indestructible nature of the Quran on a preserved tablet, and cites the destruction of Pharaoh and Thamud as warnings to the persecutors.',
    asbabalNuzul: 'Revealed in the Makkan period when the Muslims were enduring severe persecution. The story of the People of the Trench was cited to demonstrate that unjust rulers who persecute believers for their faith are not a new phenomenon — and that divine justice, though it may seem delayed, is inevitable. The surah provides profound consolation to persecuted believers across all times.',
    keyThemes: [
      'The People of the Trench as history\'s paradigm of religious persecution',
      'Divine wrath against those who torment believers without cause',
      'The indestructibility of the Quran on the Preserved Tablet',
      'Historical precedents of divine punishment for tyrants',
      'Allah\'s absolute sovereignty and power over all creation'
    ],
    notableVerses: [
      {
        reference: '85:4-7',
        arabic: 'قُتِلَ أَصْحَابُ الْأُخْدُودِ ۝ النَّارِ ذَاتِ الْوَقُودِ ۝ إِذْ هُمْ عَلَيْهَا قُعُودٌ ۝ وَهُمْ عَلَىٰ مَا يَفْعَلُونَ بِالْمُؤْمِنِينَ شُهُودٌ',
        translation: 'Cursed were the companions of the trench — of the fire full of fuel — when they were sitting over it and they were witnesses to what they were doing to the believers.',
        context: 'The Quranic record of one of history\'s most heinous crimes — rulers who watched believers burn in trenches for refusing to recant their faith, and the divine pronouncement of curse upon them.'
      },
      {
        reference: '85:21-22',
        arabic: 'بَلْ هُوَ قُرْآنٌ مَّجِيدٌ ۝ فِي لَوْحٍ مَّحْفُوظٍ',
        translation: 'But this is an honoured Quran, inscribed in a Preserved Tablet.',
        context: 'The foundational statement of the Quran\'s preservation — its origin and protection lie beyond human possibility, inscribed in the Preserved Tablet before creation, guaranteeing its eternal integrity.'
      }
    ]
  },
  {
    number: 86,
    arabicName: 'الطارق',
    englishName: 'The Nightly Star',
    transliteration: 'at-tariq',
    verses: 17,
    classification: 'Makki',
    period: 'Makkan',
    overview: 'At-Tariq opens with a majestic oath by the sky and the nightly piercing star — identified as the morning star or a brilliant star — followed by the reminder that over every soul is an appointed guardian. The surah then presents the origin of the human being from a fluid to prove the power of resurrection, describes the Day when secret things are examined, and closes by affirming that the Quran is a decisive word and that the disbelievers\' plots against it will avail them nothing.',
    asbabalNuzul: 'Revealed in the Makkan period as another powerful argument against the denial of resurrection. The nightly star piercing the darkness of the sky serves as a metaphor for the Quran piercing the darkness of ignorance, and the human being\'s origin from a fluid serves as the surah\'s central argument: the same God who built the human from a drop can certainly return the bones to life. The final verses were revealed as a counter to the Makkan leaders\' plots against the Prophet.',
    keyThemes: [
      'The nightly star as a divine sign of precision and power',
      'Every soul under divine guardianship',
      'Human origin from fluid as proof of resurrection\'s possibility',
      'The Day when all hidden things are brought to examination',
      'The Quran as a decisive word that no plotting can undermine'
    ],
    notableVerses: [
      {
        reference: '86:1-3',
        arabic: 'وَالسَّمَاءِ وَالطَّارِقِ ۝ وَمَا أَدْرَاكَ مَا الطَّارِقُ ۝ النَّجْمُ الثَّاقِبُ',
        translation: 'By the sky and the nightly visitor — and what would make you know what the nightly visitor is? It is the piercing star.',
        context: 'The dramatic triple structure — oath, rhetorical question, answer — draws the listener into a moment of discovery, using the brilliance of a piercing star to establish a sense of divine precision in creation.'
      },
      {
        reference: '86:13-14',
        arabic: 'إِنَّهُ لَقَوْلٌ فَصْلٌ ۝ وَمَا هُوَ بِالْهَزْلِ',
        translation: 'Indeed the Quran is a decisive word, and it is not amusement.',
        context: 'The surah\'s definitive description of the Quran\'s nature — it is not poetry, entertainment, or magic, but a definitive and serious word from the Lord of all creation, demanding a definitive response.'
      }
    ]
  },
  {
    number: 87,
    arabicName: 'الأعلى',
    englishName: 'The Most High',
    transliteration: 'al-ala',
    verses: 19,
    classification: 'Makki',
    period: 'Early Makkan',
    overview: 'Al-Ala is one of the earliest revelations, commanding the Prophet to glorify the name of his Lord, the Most High. The surah moves through the themes of divine creation and providence, the revelation of the Quran and its preservation, the nature of human forgetfulness, the moral contrast between those who purify themselves and those who prefer worldly life, and the eternal permanence of the scriptures of Ibrahim and Musa.',
    asbabalNuzul: 'This surah was revealed in the earliest phase of the Meccan period. When the Prophet first received it, he began using "Subhana Rabbiyal-Ala" (Glory be to my Lord, the Most High) in prostration during prayer, as instructed by this revelation. The Prophet loved this surah greatly and recited it in the Friday and Eid prayers alongside Al-Ghashiyah.',
    keyThemes: [
      'Glorification of Allah, the Most High',
      'Divine creation, proportion, and providence',
      'The preservation and ease of the Quran',
      'Purification of the soul and its success',
      'The transience of worldly life versus the permanence of the Hereafter',
      'Continuity with the scriptures of Ibrahim and Musa'
    ],
    notableVerses: [
      {
        reference: '87:1',
        arabic: 'سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى',
        translation: 'Glorify the name of your Lord, the Most High.',
        context: 'The opening command gave the Muslims the phrase for sajdah (prostration) in prayer — "Subhana Rabbiyal-Ala" — establishing a living connection between Quranic revelation and daily worship.'
      },
      {
        reference: '87:16-17',
        arabic: 'بَلْ تُؤْثِرُونَ الْحَيَاةَ الدُّنْيَا ۖ وَالْآخِرَةُ خَيْرٌ وَأَبْقَىٰ',
        translation: 'But you prefer the life of this world, while the Hereafter is better and more enduring.',
        context: 'A timeless diagnosis of the human condition: the preference for immediate, fleeting comfort over the eternal reward of the Hereafter.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) used to recite this surah in the first raka\'ah of Jumu\'ah (Friday) prayer and in both Eid prayers, reflecting its special status among the short Meccan surahs.',
    alternativeNames: ['As-Sabbih (The One Who Glorifies)']
  },
  {
    number: 88,
    arabicName: 'الغاشية',
    englishName: 'The Overwhelming',
    transliteration: 'al-ghashiyah',
    verses: 26,
    classification: 'Makki',
    period: 'Early Makkan',
    overview: 'Al-Ghashiyah — "The Overwhelming Event" — opens with a stark question about the Day of Judgement that will come over all people. The surah vividly portrays two contrasting groups: the humiliated faces of those who rejected faith, exhausted and given scorching drink, and the radiant faces of the believers resting in high gardens. It then pivots to ask the disbelievers to reflect on creation — the camel, the sky, the mountains, the earth — as proofs of the Creator\'s power and the Prophet\'s role as a reminder, not a compeller.',
    asbabalNuzul: 'Revealed in the early Meccan period when the Prophet was calling people to Islam amid mockery and rejection. The vivid contrast between the two groups in the Hereafter was intended to awaken the Quraysh to the gravity of their choice. Like Al-Ala, this surah was recited by the Prophet in the Friday and Eid prayers.',
    keyThemes: [
      'The Day of Judgement as an overwhelming, inescapable event',
      'The punishment of the wicked and the reward of the righteous',
      'Proofs of Allah\'s power in natural creation',
      'The Prophet\'s role as a reminder, not a compeller',
      'Accountability before Allah alone'
    ],
    notableVerses: [
      {
        reference: '88:1-2',
        arabic: 'هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ ۚ وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ',
        translation: 'Has there reached you the report of the Overwhelming Event? Faces that Day will be downcast.',
        context: 'The dramatic rhetorical opening — "Has there reached you?" — creates urgency and draws the listener into witnessing the scene of Judgement as though it were already happening.'
      },
      {
        reference: '88:21-22',
        arabic: 'فَذَكِّرْ إِنَّمَا أَنتَ مُذَكِّرٌ ۚ لَّسْتَ عَلَيْهِم بِمُصَيْطِرٍ',
        translation: 'So remind — you are only a reminder. You are not over them a controller.',
        context: 'A foundational verse defining the prophetic role: reminding is the duty; compulsion is not. This verse is key to understanding Islamic ethics of da\'wah.'
      }
    ]
  },
  {
    number: 89,
    arabicName: 'الفجر',
    englishName: 'The Dawn',
    transliteration: 'al-fajr',
    verses: 30,
    classification: 'Makki',
    period: 'Early Makkan',
    overview: 'Al-Fajr opens with a series of solemn oaths by the dawn and the ten nights, then recounts the fates of \'Ad, Thamud, and Pharaoh — three civilisations destroyed for their arrogance and oppression — as warnings to the Quraysh. The surah then addresses a fundamental human error: judging divine favour and disfavour by material wealth and poverty. It concludes with a majestic scene of the Last Day and an invitation to the righteous soul to return to its Lord in peace and enter His Garden.',
    asbabalNuzul: 'Revealed in the early Meccan period as the Prophet faced the Quraysh\'s material pride and their dismissal of accountability. The destruction of ancient civilisations was invoked as tangible proof that Allah brings down the arrogant. The "ten nights" of the oath have been interpreted by scholars as the first ten nights of Dhul-Hijjah, giving the surah a connection to the sacred season of Hajj.',
    keyThemes: [
      'Divine oaths by sacred times of creation',
      'Lessons from the destroyed nations: \'Ad, Thamud, and Pharaoh',
      'The human error of equating wealth with divine favour',
      'The reality and terrors of the Day of Judgement',
      'The tranquil soul invited to enter Paradise'
    ],
    notableVerses: [
      {
        reference: '89:27-30',
        arabic: 'يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً',
        translation: 'O tranquil soul, return to your Lord, well-pleased and pleasing to Him.',
        context: 'One of the most beloved verses of the Quran, describing the blessed state of the righteous soul at death and on the Day of Judgement — mutual contentment between the servant and Allah.'
      },
      {
        reference: '89:15-16',
        arabic: 'فَأَمَّا الْإِنسَانُ إِذَا مَا ابْتَلَاهُ رَبُّهُ فَأَكْرَمَهُ وَنَعَّمَهُ فَيَقُولُ رَبِّي أَكْرَمَنِ',
        translation: 'As for man, when his Lord tries him and is generous to him and favours him, he says, "My Lord has honoured me."',
        context: 'The surah diagnoses a core human delusion: measuring divine love by worldly gain and loss, rather than by true guidance and righteousness.'
      }
    ]
  },
  {
    number: 90,
    arabicName: 'البلد',
    englishName: 'The City',
    transliteration: 'al-balad',
    verses: 20,
    classification: 'Makki',
    period: 'Early Makkan',
    overview: 'Al-Balad opens with an oath by the sacred city of Makkah, invoking the Prophet\'s special relationship to it, and by the father and his offspring. The surah describes the human being as created in struggle and effort, before confronting the arrogance of those who boast of squandering wealth. It introduces the concept of "the steep path" (al-aqabah) — the difficult moral climb of freeing captives, feeding the hungry, and believing — contrasting those who take this path with the wretched who reject it.',
    asbabalNuzul: 'Revealed in the early Meccan period, this surah addresses the Qurayshi elite who prided themselves on wealth and tribal generosity while persecuting the weak and enslaved. The "steep path" is understood by scholars as the essential moral duties that the Quraysh were neglecting: freeing slaves, feeding the poor, and exercising patience and compassion.',
    keyThemes: [
      'The sanctity of Makkah and the Prophet\'s special standing',
      'Human creation in toil and struggle',
      'The arrogance of boasting about wealth',
      'The "steep path": manumission, feeding, and compassion',
      'The two paths: the People of the Right and the People of the Left'
    ],
    notableVerses: [
      {
        reference: '90:4',
        arabic: 'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي كَبَدٍ',
        translation: 'We have certainly created man into hardship.',
        context: 'A foundational Quranic statement: human life is inherently one of struggle and effort. Rather than denying this, the surah channels it toward the moral climb of al-aqabah.'
      },
      {
        reference: '90:11-13',
        arabic: 'فَلَا اقْتَحَمَ الْعَقَبَةَ ۖ وَمَا أَدْرَاكَ مَا الْعَقَبَةُ ۖ فَكُّ رَقَبَةٍ',
        translation: 'But he has not attempted the steep path. And what can make you know what the steep path is? It is the freeing of a slave.',
        context: 'The pivotal passage of the surah: the "steep path" of moral courage begins with the most demanding social act of the time — emancipating an enslaved person.'
      }
    ]
  },
  {
    number: 91,
    arabicName: 'الشمس',
    englishName: 'The Sun',
    transliteration: 'ash-shams',
    verses: 15,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Ash-Shams is distinguished by its remarkable chain of eleven consecutive oaths — by the sun, the moon, the day, the night, the sky, the earth, and finally the human soul — all culminating in a single moral truth: the one who purifies their soul succeeds, and the one who corrupts it fails. The surah then narrates the story of Thamud and their she-camel as a cautionary tale of what befalls a people who corrupt themselves collectively and defy divine commands.',
    asbabalNuzul: 'Revealed in the early Meccan period, this surah uses the most expansive oath-sequence in the Quran to drive home one pivotal moral point about the soul. The story of Thamud, who hamstrung the she-camel in open defiance of Allah\'s command, was presented to the Quraysh as the archetype of collective moral corruption leading to collective destruction.',
    keyThemes: [
      'The grandeur of divine oaths drawn from cosmic and human creation',
      'The soul\'s innate knowledge of right and wrong',
      'Purification of the soul as the key to success',
      'Corruption of the soul as the root of failure',
      'The fate of Thamud as a lesson in collective moral ruin'
    ],
    notableVerses: [
      {
        reference: '91:9-10',
        arabic: 'قَدْ أَفْلَحَ مَن زَكَّاهَا ۖ وَقَدْ خَابَ مَن دَسَّاهَا',
        translation: 'He has succeeded who purifies it, and he has failed who instils it with corruption.',
        context: 'The single conclusion toward which eleven oaths build — the entire moral architecture of human life pivots on the purification or corruption of the soul.'
      }
    ]
  },
  {
    number: 92,
    arabicName: 'الليل',
    englishName: 'The Night',
    transliteration: 'al-layl',
    verses: 21,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Al-Layl opens with oaths by the contrasting phenomena of night and day, and male and female, before presenting two contrasting human paths: the one who gives, is conscious of Allah, and affirms the good, versus the one who withholds, is self-sufficient, and denies. The surah declares that Allah will ease each person toward their chosen path — ease toward goodness or hardship toward misguidance. It concludes with praise of the generous believer who spends seeking the pleasure of his Lord, and promises him contentment.',
    asbabalNuzul: 'This surah was revealed partly in response to the generosity of Abu Bakr al-Siddiq, who had purchased and freed several slaves including Bilal ibn Rabah and Amir ibn Fuhayrah from the Qurayshi torturers. The concluding verses about the one who gives his wealth to purify himself are among the clearest Quranic tributes to Abu Bakr, though the surah addresses a universal moral law.',
    keyThemes: [
      'The cosmic contrasts of night and day as signs',
      'Two diverging human paths: generosity versus miserliness',
      'Divine facilitation of each person toward their chosen end',
      'The futility of wealth at the moment of death',
      'The reward of the generous, God-conscious believer'
    ],
    notableVerses: [
      {
        reference: '92:5-7',
        arabic: 'فَأَمَّا مَنْ أَعْطَىٰ وَاتَّقَىٰ ۝ وَصَدَّقَ بِالْحُسْنَىٰ ۝ فَسَنُيَسِّرُهُ لِلْيُسْرَىٰ',
        translation: 'As for he who gives and fears Allah, and believes in the best reward — We will ease him toward ease.',
        context: 'The three conditions of the righteous path: giving, God-consciousness, and affirming divine goodness. Allah\'s response is to further ease them along the path of good.'
      },
      {
        reference: '92:20-21',
        arabic: 'وَمَا لِأَحَدٍ عِندَهُ مِن نِّعْمَةٍ تُجْزَىٰ ۝ إِلَّا ابْتِغَاءَ وَجْهِ رَبِّهِ الْأَعْلَىٰ',
        translation: 'And not for anyone who has done him a favour to be rewarded — but only seeking the face of his Lord, the Most High.',
        context: 'The purest description of sincerity (ikhlas) in giving: spending not for gratitude, reputation, or return, but solely for the pleasure of Allah.'
      }
    ]
  },
  {
    number: 93,
    arabicName: 'الضحى',
    englishName: 'The Morning Brightness',
    transliteration: 'ad-duha',
    verses: 11,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Ad-Duha was revealed after a period in which the revelation had paused, causing the Prophet deep anxiety and giving the enemies of Islam occasion to taunt him. The surah opens with oaths by the brightening morning and the peaceful night, assuring the Prophet that his Lord has not abandoned him nor grown displeased. It reminds him of divine care through past hardship — finding him orphaned, lost, and in need — before commanding him to care for others and proclaim the blessings of his Lord.',
    asbabalNuzul: 'The revelation had ceased for a period (the fatra), causing distress to the Prophet and prompting the Quraysh to mock: "His Lord has abandoned him." Ad-Duha was revealed as a direct consolation, reminding the Prophet of the three stages of divine grace in his own life — orphanhood resolved, being lost guided, and poverty enriched — to assure him of Allah\'s ongoing care.',
    keyThemes: [
      'Divine reassurance after a period of silence in revelation',
      'Allah\'s care through the three trials of orphanhood, loss, and poverty',
      'The promise that the Hereafter is greater than the present',
      'Gratitude through action: caring for orphans, the poor, and proclaiming blessings',
      'Continuity of divine favour and loving-kindness'
    ],
    notableVerses: [
      {
        reference: '93:3',
        arabic: 'مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ',
        translation: 'Your Lord has not taken leave of you, nor has He become displeased.',
        context: 'The central reassurance of the surah, directly refuting the taunts of the Quraysh. A timeless reminder that divine silence is not divine abandonment.'
      },
      {
        reference: '93:11',
        arabic: 'وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ',
        translation: 'And as for the favour of your Lord, proclaim it.',
        context: 'The concluding command: gratitude is expressed not only in the heart but in speech — publicly acknowledging and sharing the blessings of Allah is itself an act of worship.'
      }
    ]
  },
  {
    number: 94,
    arabicName: 'الشرح',
    englishName: 'The Relief',
    transliteration: 'ash-sharh',
    verses: 8,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Ash-Sharh, also known as Alam Nashrah, continues the consolation of Ad-Duha. The surah recalls three gifts bestowed on the Prophet: the expansion of his chest (spiritual and moral capacity), the lifting of his burden, and the raising of his remembrance. It then delivers a universal principle of divine grace — repeated twice for emphasis — that with every hardship comes ease. The surah closes by directing the Prophet to turn entirely to his Lord in worship upon completing his work.',
    asbabalNuzul: 'Revealed sequentially after Ad-Duha as a continuation of divine comfort to the Prophet. The "burden" is understood by scholars as the weight of his pre-prophetic period of spiritual searching, and the "raising of remembrance" refers to the Prophet\'s name being joined with Allah\'s in the shahada and in the adhan. The repetition of "with hardship comes ease" is understood in hadith to indicate that one hardship cannot overcome two easements.',
    keyThemes: [
      'Divine expansion of the heart for the prophetic mission',
      'Relief from the burden of pre-prophetic spiritual longing',
      'The exaltation of the Prophet\'s mention alongside Allah\'s',
      'The universal principle: hardship is always paired with ease',
      'Dedication to worship and turning to the Lord after toil'
    ],
    notableVerses: [
      {
        reference: '94:5-6',
        arabic: 'فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا',
        translation: 'For indeed, with hardship will be ease. Indeed, with hardship will be ease.',
        context: 'The most quoted verses of this surah and among the most comforting in the Quran. The Prophet explained that one hardship (definite, singular noun) cannot overcome two easements (indefinite, repeated), so ease always prevails.'
      }
    ],
    alternativeNames: ['Alam Nashrah', 'Al-Inshirah']
  },
  {
    number: 95,
    arabicName: 'التين',
    englishName: 'The Fig',
    transliteration: 'at-tin',
    verses: 8,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'At-Tin opens with oaths by the fig, the olive, Mount Sinai, and this secure city (Makkah) — sacred symbols spanning the prophetic missions of Isa, Musa, and Muhammad — before declaring that Allah created the human being in the best stature. The surah then warns that those who do not believe and do righteous deeds are reduced to the lowest of the low. It closes by questioning: who could deny Judgement after these proofs, for Allah is the Wisest of judges.',
    asbabalNuzul: 'Revealed in the early Meccan period, this brief surah addresses the Quraysh\'s denial of resurrection and accountability through the lens of creation itself. The "fig and olive" are associated by scholars with the sacred lands of the Levant and the prophets Isa and Ibrahim; the oaths thus span three prophetic geographies — Syria, Sinai, and Makkah — to show the continuity of the divine message.',
    keyThemes: [
      'Oaths by sacred prophetic geographies linking three divine missions',
      'Human creation in the best and noblest form',
      'The fall of the human being who rejects faith and righteous deeds',
      'The inevitability and justice of divine judgement',
      'Allah as the most just of judges'
    ],
    notableVerses: [
      {
        reference: '95:4-5',
        arabic: 'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ ۝ ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ',
        translation: 'We have certainly created man in the best of stature; then We return him to the lowest of the low.',
        context: 'The central dialectic of the surah: human beings begin as the crown of creation, but through rejection of faith and righteous action they descend to the lowest moral and spiritual depths.'
      }
    ]
  },
  {
    number: 96,
    arabicName: 'العلق',
    englishName: 'The Clot',
    transliteration: 'al-alaq',
    verses: 19,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Al-Alaq holds the distinction of containing the first verses ever revealed to the Prophet — the opening five verses commanding him to read in the name of his Lord who created. These verses establish that Allah taught humanity through the pen and revealed what they did not know. The remainder of the surah was revealed later, addressing Abu Jahl\'s attempts to stop the Prophet from praying at the Kaaba, condemning his arrogance and commanding the Prophet to prostrate and draw near to Allah.',
    asbabalNuzul: 'The first five verses were revealed in the Cave of Hira on the Night of Power in Ramadan, when the angel Jibril embraced the Prophet and commanded him to read. The Prophet said "I am not one who reads," whereupon Jibril embraced him again and again until the verses flowed. The later verses (6-19) were revealed in response to Abu Jahl\'s public threats to prevent the Prophet from prostrating in prayer.',
    keyThemes: [
      'The first revelation and the command to read in Allah\'s name',
      'Human creation from a clot of blood',
      'Knowledge as a divine gift through the pen',
      'Human arrogance when one feels self-sufficient',
      'Prostration as the ultimate act of nearness to Allah'
    ],
    notableVerses: [
      {
        reference: '96:1-2',
        arabic: 'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ',
        translation: 'Read in the name of your Lord who created — created man from a clinging clot.',
        context: 'The first words of divine revelation to the Prophet Muhammad, beginning the final prophetic mission. The command to read established knowledge, learning, and the name of Allah as the foundation of Islam.'
      },
      {
        reference: '96:19',
        arabic: 'كَلَّا لَا تُطِعْهُ وَاسْجُدْ وَاقْتَرِب',
        translation: 'No! Do not obey him. But prostrate and draw near.',
        context: 'The surah\'s concluding command to the Prophet against Abu Jahl: the response to intimidation is not retreat but prostration — drawing ever closer to Allah through worship.'
      }
    ],
    virtues: 'Al-Alaq has the unique distinction of being the first surah to be revealed, making its opening verses the very beginning of the Quran\'s descent upon the Prophet Muhammad (peace be upon him).',
    alternativeNames: ['Iqra (Read)', 'Al-Qalam al-Awwal']
  },
  {
    number: 97,
    arabicName: 'القدر',
    englishName: 'The Power',
    transliteration: 'al-qadr',
    verses: 5,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Al-Qadr celebrates the Night of Power (Laylat al-Qadr) on which the Quran was first revealed. The surah declares it better than a thousand months, describes the descent of the angels and the Spirit with every divine decree, and characterises the night as peace until the rising of the dawn. Despite its brevity, this surah is one of the most beloved in the tradition, recited constantly during the last ten nights of Ramadan in search of this blessed night.',
    asbabalNuzul: 'Revealed to explain the significance of the night on which the Quran began its descent. The Prophet stated that Laylat al-Qadr falls within the odd nights of the last ten days of Ramadan, though its exact date is hidden as a mercy so that believers will devote themselves to worship throughout those nights. Worship on this single night surpasses eighty-three years of continuous worship.',
    keyThemes: [
      'The Night of Power as the occasion of the Quran\'s revelation',
      'Its superiority over a thousand months',
      'The descent of angels and decrees on this night',
      'The peace and serenity that pervades the night until dawn',
      'The immense reward for worship on Laylat al-Qadr'
    ],
    notableVerses: [
      {
        reference: '97:1-3',
        arabic: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۝ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۝ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ',
        translation: 'Indeed, We sent it down during the Night of Power. And what can make you know what the Night of Power is? The Night of Power is better than a thousand months.',
        context: 'The entire theological weight of this surah rests in these three verses: the Quran\'s origin on this night, the rhetorical wonder at its greatness, and the staggering arithmetic of its reward — over eighty-three years compressed into one night.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) said: "Whoever stands in prayer during the Night of Power out of faith and hoping for reward, all of his previous sins will be forgiven." (Bukhari and Muslim)'
  },
  {
    number: 98,
    arabicName: 'البينة',
    englishName: 'The Clear Evidence',
    transliteration: 'al-bayyinah',
    verses: 8,
    classification: 'Madani',
    period: 'Early Madinan',
    overview: 'Al-Bayyinah addresses the People of the Book and the polytheists who, despite being in a state of expectation for a messenger with clear proofs, continued in their ways once he arrived. The surah clarifies that the People of the Scripture only divided after the clear evidence came to them, not before. It then states the essence of the true religion — worship Allah sincerely, establish prayer, and give zakah — before declaring the two outcomes: the disbelievers as the worst of creatures and the believers who do righteous deeds as the best of creatures, eternally dwelling in the gardens of Eden.',
    asbabalNuzul: 'Revealed in Madinah after the Prophet had established relations with the Jewish and Christian communities there. The surah addresses the paradox that despite centuries of prophetic anticipation and scriptural knowledge, many of the People of the Book refused to follow the final messenger when he arrived. The phrase "the best of creatures" became a celebrated title for believers and was applied by the Companions to themselves.',
    keyThemes: [
      'The People of the Book and polytheists awaiting clear evidence',
      'Division among the People of Scripture after truth arrived',
      'The pure religion: sincerity, prayer, and zakah',
      'The disbelievers as the worst of all creatures',
      'The believers as the best of all creatures in the gardens of Eden'
    ],
    notableVerses: [
      {
        reference: '98:5',
        arabic: 'وَمَا أُمِرُوا إِلَّا لِيَعْبُدُوا اللَّهَ مُخْلِصِينَ لَهُ الدِّينَ حُنَفَاءَ وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ',
        translation: 'And they were not commanded except to worship Allah, sincere to Him in religion, inclining to truth, and to establish prayer and to give zakah.',
        context: 'A comprehensive distillation of the essence of all divine religion: sincere monotheism, consistent prayer, and charitable giving. Scholars regard this verse as encapsulating the maqasid (objectives) of Islamic practice.'
      },
      {
        reference: '98:7-8',
        arabic: 'إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أُولَٰئِكَ هُمْ خَيْرُ الْبَرِيَّةِ',
        translation: 'Indeed, those who have believed and done righteous deeds — those are the best of creatures.',
        context: 'The Companions quoted this verse with joy. The Prophet confirmed to Ibn Abi Rawaha that "you and your companions are the best of creatures" — but scholarly consensus is that the description applies to all true believers throughout time.'
      }
    ]
  },
  {
    number: 99,
    arabicName: 'الزلزلة',
    englishName: 'The Earthquake',
    transliteration: 'az-zalzalah',
    verses: 8,
    classification: 'Madani',
    period: 'Madinan',
    overview: 'Az-Zalzalah paints a vivid scene of the final earthquake that will shake the earth to its core, causing it to disgorge all its secrets and burdens. The earth itself, inspired by its Lord, will testify to all that was done upon it. Then humanity will come forth in scattered groups to be shown their deeds — with the unshakeable principle that anyone who does an atom\'s weight of good or evil will see it. This surah is considered equivalent in reward to a quarter of the Quran.',
    asbabalNuzul: 'Scholars differ on whether this surah is Meccan or Madinan, with the majority opinion leaning Madinan. The Prophet described it as equivalent to a quarter of the Quran in reward due to the comprehensive moral principle it contains. Ibn Masud reported that when this surah was revealed, the Companions were astonished at the precision of its final principle regarding even an atom\'s weight of good and evil.',
    keyThemes: [
      'The final cosmic earthquake that will shatter the earth',
      'The earth testifying to the deeds done upon it',
      'The resurrection and gathering of all humanity',
      'Perfect divine justice: every atom\'s weight of deed recorded',
      'No deed, however small, goes unaccounted'
    ],
    notableVerses: [
      {
        reference: '99:7-8',
        arabic: 'فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ ۝ وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ',
        translation: 'So whoever does an atom\'s weight of good will see it, and whoever does an atom\'s weight of evil will see it.',
        context: 'Arguably the most comprehensive statement of divine justice in the Quran. Abdullah ibn Masud called these the most important verses of the whole Quran. They confirm that no act — however small — is beyond Allah\'s knowledge and record.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) said this surah is equivalent to a quarter of the Quran. It is also known as "the surah that makes one cautious" because of the precision of divine accountability it describes.',
    alternativeNames: ['Az-Zilzal', 'Al-Zilzal']
  },
  {
    number: 100,
    arabicName: 'العاديات',
    englishName: 'The Racers',
    transliteration: 'al-adiyat',
    verses: 11,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Al-Adiyat opens with powerful oaths by war horses — their panting breath, their hooves striking sparks, their dawn raids, the dust they raise, and their penetration through the enemy host — before pivoting to a stark indictment: the human being is ungrateful to his Lord. The surah argues that this ingratitude is proven by the human being\'s own testimony: his passionate love for wealth. It closes with the reminder that on the Day of Judgement, when graves are turned over and hearts\' secrets revealed, Allah\'s full knowledge of every soul will be manifest.',
    asbabalNuzul: 'Revealed in the early Meccan period. Scholars including Ali ibn Abi Talib held that the oaths refer to horses of jihad (warfare), while Ibn Abbas held they refer to horses of Hajj rushing between Muzdalifah and Mina. The Meccan context strongly favours the warfare interpretation as a metaphor for energy and sacrifice, contrasted with human ingratitude. The surah\'s vivid imagery was designed to arrest the attention of the Quraysh, who prized horses highly.',
    keyThemes: [
      'Solemn oaths by the war-horse in battle as symbols of loyalty and sacrifice',
      'Human ingratitude toward the Lord who provides',
      'The human being\'s self-witnessing testimony of love for wealth',
      'The Day of Judgement when graves are emptied and secrets revealed',
      'Allah\'s complete awareness of every soul'
    ],
    notableVerses: [
      {
        reference: '100:6-8',
        arabic: 'إِنَّ الْإِنسَانَ لِرَبِّهِ لَكَنُودٌ ۝ وَإِنَّهُ عَلَىٰ ذَٰلِكَ لَشَهِيدٌ ۝ وَإِنَّهُ لِحُبِّ الْخَيْرِ لَشَدِيدٌ',
        translation: 'Indeed man, to his Lord, is ungrateful. And indeed he is, to that, a witness. And indeed he is, in love of wealth, intense.',
        context: 'The moral core of the surah: ingratitude (kufr in its primary sense of covering over blessing) is not merely a theological claim but is proven by the human being\'s own behaviour — his passionate pursuit of wealth over gratitude.'
      }
    ]
  },
  {
    number: 101,
    arabicName: 'القارعة',
    englishName: 'The Calamity',
    transliteration: 'al-qariah',
    verses: 11,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Al-Qariah opens with three rhetorical repetitions of "the Striking Calamity" to build anticipation before describing the Day of Judgement: humanity will be like scattered moths and mountains like carded wool. The surah then introduces the scales of deeds — those whose scales are heavy with good will be in a pleasing life; those whose scales are light will fall into the Pit (Hawiyah), described as a blazing fire. The surah is a concentrated meditation on the finality and justice of the Last Day.',
    asbabalNuzul: 'Revealed in the early Meccan period as part of the sustained campaign of Quranic revelation on the reality of the Day of Judgement, countering the Quraysh\'s denial of resurrection. The triple repetition "Al-Qariah, what is Al-Qariah, what can make you know what is Al-Qariah" (verses 1-3) mirrors the rhetorical technique of Al-Haqqah and Al-Waqi\'ah, building suspense before unveiling the answer.',
    keyThemes: [
      'The Striking Calamity as a name and reality for the Day of Judgement',
      'The dissolution of humanity and mountains at the Last Hour',
      'The scales of deeds and their decisive weight',
      'Hawiyah (the Pit): the blazing fire for the light-scaled',
      'The swiftness and certainty of divine reckoning'
    ],
    notableVerses: [
      {
        reference: '101:6-9',
        arabic: 'فَأَمَّا مَن ثَقُلَتْ مَوَازِينُهُ ۝ فَهُوَ فِي عِيشَةٍ رَّاضِيَةٍ ۝ وَأَمَّا مَنْ خَفَّتْ مَوَازِينُهُ ۝ فَأُمُّهُ هَاوِيَةٌ',
        translation: 'As for one whose scales are heavy, he will be in a pleasant life. But as for one whose scales are light — his refuge is an abyss.',
        context: 'The binary outcome of the scales of deeds, presented with stark simplicity. The word "ummuhu" (his mother/refuge) for the Pit is a devastating irony — the place that should offer comfort and shelter instead devours.'
      }
    ]
  },
  {
    number: 102,
    arabicName: 'التكاثر',
    englishName: 'The Competition',
    transliteration: 'at-takathur',
    verses: 8,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'At-Takathur is a sharp rebuke of the human obsession with competing in the accumulation of worldly possessions, status, and numbers — a rivalry that preoccupies people until they reach their graves. The surah warns that soon they will know the consequence of this heedlessness, repeating the warning for emphasis. It invokes the certainty of Hell-sight and the certainty of the questioning about pleasure: "You will surely be questioned that Day about pleasure."',
    asbabalNuzul: 'The surah is generally understood as addressing the boastful rivalry between Meccan tribes who competed by counting their numbers, wealth, and even the graves of their ancestors to prove superiority. The Prophet said that this surah is equivalent to a thousand verses of the Torah. It was also narrated that the Prophet recited: "The son of Adam says: My wealth, my wealth — but what is your wealth except what you ate and consumed, what you wore and wore out, or what you gave in charity and sent forward?" in connection with this surah.',
    keyThemes: [
      'The human disease of competing in material accumulation',
      'Preoccupation with worldly rivalry until death',
      'The sudden realisation at death and on Judgement Day',
      'The certainty of Hell as seen by the certain eye of knowledge',
      'Divine questioning about the gifts of pleasure and comfort'
    ],
    notableVerses: [
      {
        reference: '102:1-2',
        arabic: 'أَلْهَاكُمُ التَّكَاثُرُ ۝ حَتَّىٰ زُرْتُمُ الْمَقَابِرَ',
        translation: 'Competition in worldly increase diverts you until you visit the graveyards.',
        context: 'An incisive two-verse indictment of a universal human trap: the accumulation race occupies people until death itself — the visit to the graveyard — finally ends the competition. The use of "visit" (zurtum) for death is bleakly ironic.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) said: "Would any of you be unable to recite a thousand verses each night?" When the Companions expressed difficulty, he said: "Is one of you unable to recite At-Takathur?" indicating its reward is equivalent to a thousand Quranic verses. (Reported by Al-Bayhaqi)'
  },
  {
    number: 103,
    arabicName: 'العصر',
    englishName: 'The Time',
    transliteration: 'al-asr',
    verses: 3,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Al-Asr, despite being only three verses, encapsulates the complete framework of human salvation according to Imam al-Shafi\'i, who said: "If people reflected only on this surah, it would suffice them." By an oath by Time itself, the surah declares all humanity in loss — except those who possess four qualities: faith, righteous deeds, mutual counselling toward truth, and mutual counselling toward patience. These four form the complete personal and social architecture of the righteous life.',
    asbabalNuzul: 'Revealed in the early Meccan period. The Companions held this surah in exceptional reverence. It is reported that when two Companions met, they would not part until one had recited Al-Asr to the other, then they would greet with salam — indicating how central this surah was to their communal understanding of purpose and loss.',
    keyThemes: [
      'Time as a witness to human loss and waste',
      'The universal condition of humanity in loss',
      'Faith as the foundation of salvation',
      'Righteous deeds as the expression of faith',
      'Mutual counsel toward truth and patience as social obligations of the believer'
    ],
    notableVerses: [
      {
        reference: '103:1-3',
        arabic: 'وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ ۝ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',
        translation: 'By time — indeed, mankind is in loss, except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.',
        context: 'The entire surah is a single argument: humanity is in loss unless it possesses all four qualities simultaneously. Imam al-Shafi\'i declared this alone sufficient for human salvation if properly reflected upon.'
      }
    ],
    virtues: 'Imam al-Shafi\'i said: "If people reflected only upon this surah, it would be sufficient for them." The Companions would not part company until one had recited it to the other.'
  },
  {
    number: 104,
    arabicName: 'الهمزة',
    englishName: 'The Slanderer',
    transliteration: 'al-humazah',
    verses: 9,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Al-Humazah pronounces a severe woe against the habitual slanderer who mocks with words and gestures, who hoards wealth obsessively believing it will make him immortal. The surah then describes the punishment awaiting such a person: the crushing Fire of Allah (Hutamah), which breaks everything thrown into it, rising over the hearts. The fire is closed upon them in extended columns — a vivid image of perpetual, inescapable torment as the consequence of perpetual, socially harmful arrogance.',
    asbabalNuzul: 'While the Quran does not name individuals, classical commentators including Ibn Ishaq identified individuals who were notorious in Makkah for slander and mockery of the Prophet and the believers, such as Walid ibn al-Mughirah and Akhnas ibn Shariq. However, the surah\'s condemnation is universal — it addresses the type, not a specific person — making it applicable to any person of arrogant, slanderous wealth in any era.',
    keyThemes: [
      'Condemnation of habitual slander and mockery',
      'The delusion that hoarded wealth provides immortality',
      'The Hutamah: the crushing, consuming fire',
      'Fire that reaches into the heart — spiritual torment',
      'Perpetual, sealed punishment for arrogant, harmful conduct'
    ],
    notableVerses: [
      {
        reference: '104:1-3',
        arabic: 'وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ ۝ الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ ۝ يَحْسَبُ أَنَّ مَالَهُ أَخْلَدَهُ',
        translation: 'Woe to every scorner and mocker — who collects wealth and counts it. He thinks that his wealth will make him immortal.',
        context: 'The double condemnation (humaza + lumaza) covers both verbal slander and physical mockery. The connection to wealth-hoarding reveals the surah\'s target: those whose material security breeds contemptuous cruelty toward others.'
      }
    ]
  },
  {
    number: 105,
    arabicName: 'الفيل',
    englishName: 'The Elephant',
    transliteration: 'al-fil',
    verses: 5,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Al-Fil recalls the miraculous event of the Year of the Elephant (570 CE), the year of the Prophet\'s birth, when Abraha al-Ashram of Yemen led an army with war elephants to destroy the Kaaba. Allah sent flocks of birds (Ababeel) that pelted the army with stones of baked clay, destroying them utterly and leaving them like devoured stalks of grain. The surah serves as a reminder to the Quraysh that the Kaaba is under divine protection and that no earthly power can prevail against Allah\'s will.',
    asbabalNuzul: 'The event was well within living memory for the Quraysh at the time of revelation. Abraha\'s defeat was witnessed by the elders of Makkah and was commemorated as a sign of divine favour on the Kaaba. The surah\'s rhetorical question — "Have you not seen how your Lord dealt with the companions of the elephant?" — presupposes their knowledge of the event and uses it as proof of Allah\'s power to protect His house.',
    keyThemes: [
      'The miraculous destruction of Abraha\'s elephant army',
      'Divine protection of the Sacred House (the Kaaba)',
      'Birds as instruments of divine power',
      'The humiliation of arrogant military might before Allah',
      'Historical memory as Quranic proof of divine sovereignty'
    ],
    notableVerses: [
      {
        reference: '105:1-2',
        arabic: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ ۝ أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي تَضْلِيلٍ',
        translation: 'Have you not considered how your Lord dealt with the companions of the elephant? Did He not make their plan into misguidance?',
        context: 'The rhetorical opening assumes that the Quraysh know this history well — it was fifty years before the revelation. The question transforms a political-military memory into a theological proof: Allah thwarted the greatest army of its day to protect His House.'
      }
    ]
  },
  {
    number: 106,
    arabicName: 'قريش',
    englishName: 'Quraysh',
    transliteration: 'quraysh',
    verses: 4,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Quraysh is among the shortest surahs, directed specifically at the tribe of Quraysh. It reminds them of the two blessings that sustained their tribal prosperity: the winter trade journey to Yemen and the summer trade journey to Syria — both made safe by Allah\'s protection. On account of this protection and provision, they are commanded to worship the Lord of this House (the Kaaba) who fed them from hunger and gave them security from fear. Many scholars read this surah as a continuation of Al-Fil, with both sharing a connected argument.',
    asbabalNuzul: 'The Quraysh had a unique status among Arab tribes as the custodians of the Kaaba, which granted them safe passage throughout the Arabian Peninsula and the privilege of conducting lucrative trade caravans. The surah was revealed to remind them that these privileges — and their very security and prosperity — were gifts from Allah, the Lord of the House they served, creating an obligation of gratitude through worship.',
    keyThemes: [
      'The unique privilege of the Quraysh as the Kaaba\'s custodians',
      'The two trade journeys as divine blessings',
      'Gratitude through worship of the Lord who provided',
      'Allah as the One who removed hunger and fear from Quraysh',
      'The connection between worldly blessing and obligation of worship'
    ],
    notableVerses: [
      {
        reference: '106:3-4',
        arabic: 'فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ ۝ الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ',
        translation: 'Let them worship the Lord of this House, who fed them, preventing hunger, and made them safe, shielding them from fear.',
        context: 'The surah\'s conclusion delivers both command and argument simultaneously: worship is obligated because of the two gifts of provision (food) and safety — the material foundations of Qurayshi civilization, both sourced entirely from Allah.'
      }
    ]
  },
  {
    number: 107,
    arabicName: 'الماعون',
    englishName: 'Small Kindnesses',
    transliteration: 'al-maun',
    verses: 7,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Al-Maun asks pointedly: do you see the one who denies the religion? It identifies him not by creed alone but by two behavioural markers: he drives away the orphan and does not encourage feeding the poor. The surah then turns to the insincere worshipper — those who pray but are heedless of their prayer, who pray for show, and who refuse to give small kindnesses (al-maun: daily utensils, small acts of help). This surah draws a direct line between theological denial and social cruelty, and between religious hypocrisy and petty meanness.',
    asbabalNuzul: 'The early Meccan occasion links the surah to prominent Meccans known for mistreating orphans and withholding from the poor. The second half, however, is considered by some scholars to address Madinan hypocrites, making this one of a few surahs possibly with dual revelation contexts. Whether entirely Meccan or mixed, the core message is unified: genuine faith is inseparable from social generosity and sincere worship.',
    keyThemes: [
      'Denial of the religion as manifest in treatment of the orphan and poor',
      'Social cruelty as a theological symptom',
      'The danger of prayer performed for show (riya)',
      'Heedlessness in worship as a mark of hypocrisy',
      'The obligation of small, everyday acts of kindness and sharing'
    ],
    notableVerses: [
      {
        reference: '107:1-3',
        arabic: 'أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ ۝ فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ ۝ وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ',
        translation: 'Have you seen the one who denies the religion? For that is the one who drives away the orphan and does not encourage the feeding of the poor.',
        context: 'A revolutionary redefinition: denial of the religion (din) is demonstrated not only by rejecting theology but by mistreating the vulnerable. Social injustice is a form of kufr.'
      }
    ]
  },
  {
    number: 108,
    arabicName: 'الكوثر',
    englishName: 'Abundance',
    transliteration: 'al-kawthar',
    verses: 3,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Al-Kawthar is the shortest surah in the Quran. It was revealed as a divine response to the enemies of the Prophet who mocked him as "abtar" (one without male progeny, thus cut off from legacy) after the death of his son. Allah reveals that He has given the Prophet Al-Kawthar — an abundance of good, understood as a river in Paradise, countless blessings, and an everlasting legacy — and commands him to pray and sacrifice. It is his enemies who are the truly cut off.',
    asbabalNuzul: 'Al-Kawthar was revealed when Al-As ibn Wa\'il and others mocked the Prophet, calling him "abtar" (cut off, without heirs) after the death of his sons. The surah\'s three verses directly invert the mockery: the Prophet has been given boundless abundance, while his mockers are the ones who will be cut off from legacy, remembrance, and good. The Prophet\'s remembrance has indeed proven eternal through the Quran, hadith, and the global Muslim community.',
    keyThemes: [
      'Divine gift of Al-Kawthar — boundless abundance — to the Prophet',
      'The command to pray and sacrifice as gratitude',
      'The enemies of the Prophet as truly "abtar" (cut off)',
      'The inversion of mockery: the scorned one is the truly blessed',
      'The eternal legacy of the Prophet through faith'
    ],
    notableVerses: [
      {
        reference: '108:1',
        arabic: 'إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ',
        translation: 'Indeed, We have granted you al-Kawthar.',
        context: 'The river Al-Kawthar in Paradise is described in hadith as whiter than milk, sweeter than honey, and cooler than ice. Its vessels number more than the stars of the sky. Beyond the literal river, Al-Kawthar represents the boundless good — prophetic legacy, the Quran, the intercession — bestowed on the Prophet.'
      }
    ],
    virtues: 'The shortest surah in the Quran by both verse count and word count, yet among the most profound in theological meaning — demonstrating that Quranic brevity does not diminish depth.'
  },
  {
    number: 109,
    arabicName: 'الكافرون',
    englishName: 'The Disbelievers',
    transliteration: 'al-kafirun',
    verses: 6,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Al-Kafirun is a surah of definitive and absolute separation between Islamic monotheism and polytheism. Revealed when the Quraysh proposed a compromise — the Prophet worships their gods for a year and they worship Allah for a year — the surah is an unequivocal refusal. The Prophet declares that he does not and will not worship what they worship, and they do not and will not worship what he worships, concluding with the principle of religious non-compromise: "For you is your religion, and for me is my religion."',
    asbabalNuzul: 'The Quraysh made several proposals for religious compromise, the most notable being: worship our gods for a year and we will worship your God for a year, or touch our idols and we will believe in you. Al-Kafirun was revealed as an emphatic rejection of every such proposal. The surah is called "the surah of bara\'ah (disavowal)" from all forms of shirk and is recommended to be recited before sleeping as a protection.',
    keyThemes: [
      'Complete and uncompromising separation from polytheism',
      'The impossibility of the worship of Allah and idols being equivalent or interchangeable',
      'The Prophet\'s total disavowal from the objects of polytheistic worship',
      'The principle of religious pluralism without doctrinal compromise',
      'Clarity and directness in matters of monotheism'
    ],
    notableVerses: [
      {
        reference: '109:6',
        arabic: 'لَكُمْ دِينُكُمْ وَلِيَ دِينِ',
        translation: 'For you is your religion, and for me is my religion.',
        context: 'The concluding verse has been cited in interfaith discourse for fourteen centuries. Scholars clarify it is not relativism but a declaration of absolute non-compromise: I will not adopt your religion, you will not adopt mine — peaceful separation, not doctrinal equivalence.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) called this surah "the surah of disavowal from shirk" and recommended reciting it before sleeping, saying it is equivalent to a quarter of the Quran. He recited it in the two rak\'ahs of Fajr sunnah and tawaf prayer.',
    alternativeNames: ['Al-Bara\'ah', 'Al-Muqashqishah (The Deliverer from Hypocrisy)']
  },
  {
    number: 110,
    arabicName: 'النصر',
    englishName: 'The Victory',
    transliteration: 'an-nasr',
    verses: 3,
    classification: 'Madani',
    period: 'Late Madinan',
    overview: 'An-Nasr was the last complete surah to be revealed to the Prophet, understood by the Companions as a sign that his mission was complete and his departure from the world was near. It announces the coming of Allah\'s victory and the conquest of Makkah, describes people entering Islam in multitudes, and commands the Prophet to glorify and praise his Lord and seek His forgiveness — for Allah is ever-accepting of repentance. When Umar saw the Prophet weeping upon hearing it, he understood its profound meaning.',
    asbabalNuzul: 'Revealed at the Farewell Hajj (10 AH) or shortly before, this surah was understood by Ibn Abbas and Umar ibn al-Khattab as the announcement of the Prophet\'s imminent passing. When the Prophet recited it, he said: "The soul has been informed of its death." He thereafter increased in saying "Subhanak Allahumma wa bihamdika, Astaghfiruka wa atubu ilayk" (Glory and praise be to You, O Allah; I seek Your forgiveness and repent to You), in fulfilment of this surah\'s command.',
    keyThemes: [
      'The divine promise of victory and the Conquest of Makkah',
      'The entry of multitudes into Islam as a fulfilment of prophecy',
      'The command to glorify and praise Allah at the moment of completion',
      'Seeking forgiveness at the pinnacle of achievement',
      'The sign of the Prophet\'s imminent death in the completion of his mission'
    ],
    notableVerses: [
      {
        reference: '110:1-2',
        arabic: 'إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ ۝ وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا',
        translation: 'When the victory of Allah has come and the conquest, and you see the people entering into the religion of Allah in multitudes...',
        context: 'The prophecy of the Conquest of Makkah (8 AH) and the mass conversions across Arabia — fulfilled within two years of the surah\'s revelation. The phrase "afwajan" (in multitudes/crowds) captured the historical reality of tens of thousands embracing Islam.'
      }
    ],
    virtues: 'The last complete surah revealed to the Prophet. Ibn Abbas said: "It is the announcement of the Prophet\'s death." Omar ibn al-Khattab understood this and wept when the Prophet recited it to the senior Companions.',
    alternativeNames: ['At-Tawdi\' (The Farewell)', 'Al-Fath (The Opening/Conquest)']
  },
  {
    number: 111,
    arabicName: 'المسد',
    englishName: 'The Palm Fibre',
    transliteration: 'al-masad',
    verses: 5,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Al-Masad is one of the most direct and personal condemnations in the Quran, directed at Abu Lahab — the Prophet\'s uncle and one of his most bitter enemies — and his wife Umm Jamil, who used to scatter thorns on the Prophet\'s path. The surah declares that Abu Lahab\'s wealth and efforts will not save him, and that he will enter a blazing fire. His wife will carry firewood (as she did in life in a different sense) with a rope of twisted palm fibre around her neck. The surah is remarkable for naming a specific individual and predicting his death in disbelief.',
    asbabalNuzul: 'When the Prophet climbed Mount Safa and called the Quraysh to faith, Abu Lahab responded: "May you perish! Is it for this you gathered us?" Surah Al-Masad was revealed in response. Abu Lahab died after the Battle of Badr (624 CE) in a state of unbelief, fulfilling the prophecy. His wife Umm Jamil was known to spread malicious rumours and scatter thorns on the Prophet\'s paths, earning her the title "carrier of firewood."',
    keyThemes: [
      'The condemnation of Abu Lahab\'s hostility to the Prophet',
      'The futility of worldly wealth and power against divine decree',
      'The punishment of Abu Lahab in the blazing Fire',
      'The condemnation of Umm Jamil for her role in persecution',
      'Prophetic precision: a named individual predicted to die in disbelief'
    ],
    notableVerses: [
      {
        reference: '111:1-3',
        arabic: 'تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ ۝ مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ ۝ سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ',
        translation: 'May the hands of Abu Lahab be ruined, and ruined is he. His wealth and his earnings will not avail him. He will burn in a flaming Fire.',
        context: 'The early revelation of this condemnation and Abu Lahab\'s subsequent death in disbelief (having never accepted Islam) is cited by scholars as one of the Quran\'s own internal proofs of prophethood — a direct, named prediction fulfilled precisely.'
      }
    ],
    alternativeNames: ['Al-Lahab', 'Al-Masad']
  },
  {
    number: 112,
    arabicName: 'الإخلاص',
    englishName: 'Sincerity',
    transliteration: 'al-ikhlas',
    verses: 4,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Al-Ikhlas is the surah of pure monotheism, revealed in direct response to those who asked the Prophet to describe his Lord. It delivers four comprehensive theological statements: Allah is One, Allah is the Eternal Refuge (As-Samad), He neither begot nor was begotten, and nothing is comparable to Him. These four verses systematically deny all forms of shirk — attributing partners, children, parents, or equals to Allah. The Prophet said this surah is equivalent to one-third of the Quran because it encompasses the doctrine of tawhid completely.',
    asbabalNuzul: 'The Quraysh asked the Prophet to describe the lineage or nature of his Lord ("what is He made of?" — as they categorised their gods). Al-Ikhlas was revealed as a comprehensive response that transcends the category of their question entirely. The surah is also connected to responses given to the Jews of Madinah and the Christians, who attributed offspring and human characteristics to the divine.',
    keyThemes: [
      'The absolute oneness (Ahad) of Allah',
      'Allah as As-Samad: the self-sufficient Refuge upon whom all depend',
      'The absolute negation of divine offspring or parentage',
      'The absolute negation of any equal or comparable to Allah',
      'A complete declaration of tawhid in four verses'
    ],
    notableVerses: [
      {
        reference: '112:1-4',
        arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
        translation: 'Say: He is Allah, One. Allah, the Eternal Refuge. He neither begot nor was born, nor is there any equivalent to Him.',
        context: 'The four verses are a complete theological treatise on tawhid in miniature. Ahad (One, uniquely singular) answers polytheism; As-Samad answers all forms of anthropomorphism; the negation of birth answers Christianity and mythology; the negation of equality answers all forms of shirk.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) said: "By the One in Whose hand is my soul, it is equivalent to one-third of the Quran." (Bukhari) Reciting it ten times builds a house in Paradise, according to hadith. It is among the most frequently recited surahs in Islamic prayer and dhikr.',
    alternativeNames: ['At-Tawhid (The Oneness)', 'Al-Asas (The Foundation)', 'Al-Ma\'rifah (The Knowledge of Allah)']
  },
  {
    number: 113,
    arabicName: 'الفلق',
    englishName: 'The Daybreak',
    transliteration: 'al-falaq',
    verses: 5,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'Al-Falaq is the first of the two Mu\'awwidhatayn (the two surahs of seeking refuge). It commands the Prophet and all believers to seek refuge in the Lord of the daybreak from four categories of evil: the evil of everything He created, the evil of darkness when it settles, the evil of those who blow on knots (practitioners of magic), and the evil of the envier when he envies. The surah covers the full spectrum of external harms — natural, cosmic, occult, and interpersonal.',
    asbabalNuzul: 'Al-Falaq and An-Nas were revealed together, according to the narration of Uqbah ibn Amir, who reported that the Prophet said these two surahs were revealed to him and nothing like them had ever been seen. They were revealed in response to a magic spell (sihr) cast on the Prophet by Labid ibn al-A\'sam, which the Prophet was experiencing as illness and confusion. Jibril informed him of the spell, and upon reciting these surahs the Prophet recovered.',
    keyThemes: [
      'Seeking refuge in the Lord of the daybreak (rabb al-falaq)',
      'Protection from the evil inherent in created things',
      'Protection from the evil of encroaching darkness',
      'Protection from occult harm — those who blow on knots',
      'Protection from the destructive force of envy'
    ],
    notableVerses: [
      {
        reference: '113:1-2',
        arabic: 'قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ ۝ مِن شَرِّ مَا خَلَقَ',
        translation: 'Say: I seek refuge in the Lord of daybreak — from the evil of that which He created.',
        context: 'The surah grounds refuge in a specific divine attribute: "Rabb al-Falaq" (Lord of the breaking dawn), pointing to Allah\'s power over the transition from darkness to light as the foundation for all protection from evil.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) used to recite Al-Falaq and An-Nas before sleeping, upon waking, and after the morning and evening prayers, blowing over his hands and wiping his body. He said: "No person has sought refuge by anything like these two surahs." (Abu Dawud)',
    alternativeNames: ['Al-Mu\'awwidhatain (first of the two refuge surahs)', 'Al-Muqashqishah']
  },
  {
    number: 114,
    arabicName: 'الناس',
    englishName: 'Mankind',
    transliteration: 'an-nas',
    verses: 6,
    classification: 'Makki',
    period: 'Early Meccan',
    overview: 'An-Nas is the final surah of the Quran, the second of the Mu\'awwidhatayn. It commands seeking refuge in the Lord, King, and God of mankind from the evil of the retreating whisperer (al-waswas al-khannas) — who whispers into the hearts of mankind, whether he be from the jinn or from human beings. The triple designation of Allah — Rabb (Sustainer), Malik (King), Ilah (Deity) — covers the complete dimensions of divine authority, providing comprehensive spiritual protection against the internal enemy of the soul.',
    asbabalNuzul: 'Revealed alongside Al-Falaq in response to the same sihr incident involving Labid ibn al-A\'sam. While Al-Falaq addresses external evils, An-Nas addresses the internal enemy: the whisperer who retreats upon the remembrance of Allah and then creeps back. This surah identifies the whisperer as potentially from both jinn and human beings — covering all sources of internal spiritual corruption and evil suggestion.',
    keyThemes: [
      'Seeking refuge in the threefold authority of Allah over mankind',
      'The nature of al-waswas: the retreating, returning whisperer',
      'The danger of internal whispers against faith and righteousness',
      'The whisperer as either jinn or human in origin',
      'The heart as the primary battlefield of spiritual warfare'
    ],
    notableVerses: [
      {
        reference: '114:1-4',
        arabic: 'قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ',
        translation: 'Say: I seek refuge in the Lord of mankind, the Sovereign of mankind, the God of mankind — from the evil of the retreating whisperer.',
        context: 'The threefold designation — Rabb (Sustainer who nurtures), Malik (King with authority), and Ilah (Deity deserving worship) — presents the complete case for why Allah alone is the sufficient refuge against every internal whisperer and doubt.'
      }
    ],
    virtues: 'The Prophet (peace be upon him) used to recite Al-Falaq and An-Nas to seek protection each night before sleeping, wiping his body three times. The Quran closes with this surah as a fitting seal: the final message to humanity is to seek refuge in the Lord of humanity against the eternal internal enemy.',
    alternativeNames: ['Al-Mu\'awwidhatayn (second of the two refuge surahs)', 'Al-Kanz (The Treasure)']
  }
];
