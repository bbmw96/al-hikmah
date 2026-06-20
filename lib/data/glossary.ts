export interface GlossaryEntry {
  id: string;
  term: string;
  arabicTerm: string;
  transliteration: string;
  category: GlossaryCategory;
  definition: string;
  context?: string;
  relatedTerms?: string[];
}

export type GlossaryCategory =
  | 'theology'
  | 'worship'
  | 'hadith-science'
  | 'quran'
  | 'jurisprudence'
  | 'prophethood'
  | 'afterlife'
  | 'character'
  | 'history';

export const GLOSSARY_CATEGORIES: Record<GlossaryCategory, { label: string; arabicLabel: string }> = {
  theology: { label: 'Theology & Belief', arabicLabel: 'العقيدة' },
  worship: { label: 'Worship & Ritual', arabicLabel: 'العبادة' },
  'hadith-science': { label: 'Hadith Sciences', arabicLabel: 'علوم الحديث' },
  quran: { label: 'Quranic Sciences', arabicLabel: 'علوم القرآن' },
  jurisprudence: { label: 'Jurisprudence', arabicLabel: 'الفقه' },
  prophethood: { label: 'Prophethood', arabicLabel: 'النبوة' },
  afterlife: { label: 'The Afterlife', arabicLabel: 'الآخرة' },
  character: { label: 'Ethics & Character', arabicLabel: 'الأخلاق' },
  history: { label: 'Islamic History', arabicLabel: 'التاريخ الإسلامي' },
};

export const GLOSSARY: GlossaryEntry[] = [
  // Theology
  {
    id: 'tawhid',
    term: 'Tawhid',
    arabicTerm: 'التوحيد',
    transliteration: 'Taw-HEED',
    category: 'theology',
    definition:
      "The absolute monotheism of Islam: the belief that Allah is One, without partner, associate, child, or equal. Tawhid is the foundation of all Islamic belief. Scholars categorise it into three aspects: Tawhid al-Rububiyyah (Oneness in Lordship - Allah alone creates, sustains, and controls), Tawhid al-Uluhiyyah (Oneness in Worship - only Allah deserves to be worshipped), and Tawhid al-Asma wa al-Sifat (Oneness in Names and Attributes - Allah's names and attributes are unique and belong to Him alone).",
    relatedTerms: ['shirk', 'iman', 'aqeedah'],
  },
  {
    id: 'shirk',
    term: 'Shirk',
    arabicTerm: 'الشرك',
    transliteration: 'SHIRK',
    category: 'theology',
    definition:
      "Associating partners with Allah in any aspect of divinity - in His Lordship, worship, or unique names and attributes. The Quran states that Allah may forgive all sins except dying in a state of shirk (4:48). Major shirk (al-shirk al-akbar) constitutes an exit from Islam. Minor shirk (al-shirk al-asghar) includes acts done to show off (riya') or swearing by other than Allah.",
    relatedTerms: ['tawhid', 'iman'],
  },
  {
    id: 'iman',
    term: 'Iman',
    arabicTerm: 'الإيمان',
    transliteration: 'ee-MAAN',
    category: 'theology',
    definition:
      "Faith. In Islamic theology, Iman comprises three dimensions: belief in the heart (tasdiq), verbal affirmation with the tongue (iqrar), and righteous actions with the limbs (amal). The six pillars of Iman are: belief in Allah, His angels, His scriptures, His messengers, the Last Day, and divine decree (qadar) - both its good and its apparent ill.",
    relatedTerms: ['tawhid', 'islam', 'ihsan'],
  },
  {
    id: 'ihsan',
    term: 'Ihsan',
    arabicTerm: 'الإحسان',
    transliteration: 'ih-SAAN',
    category: 'theology',
    definition:
      "Excellence, or worshipping Allah as though you see Him; and even though you do not see Him, you know that He sees you. This definition comes from the famous hadith of Jibril, which the Prophet ﷺ described as the highest level of the religion. Ihsan encompasses sincere excellence in worship, in dealings with others, and in character. It is the third and highest dimension of the religion, above Islam (outward submission) and Iman (faith).",
    relatedTerms: ['iman', 'taqwa'],
  },
  {
    id: 'taqwa',
    term: 'Taqwa',
    arabicTerm: 'التقوى',
    transliteration: 'TAQ-wa',
    category: 'theology',
    definition:
      'Commonly translated as God-consciousness, piety, or fear of Allah. More precisely, taqwa means placing a shield (wiqaya) between oneself and the anger of Allah by obeying His commands and avoiding His prohibitions. It is the most praised quality in the Quran: "The most honoured of you in the sight of Allah is the one with the greatest taqwa." (49:13)',
    relatedTerms: ['ihsan', 'iman'],
  },
  {
    id: 'aqeedah',
    term: 'Aqeedah',
    arabicTerm: 'العقيدة',
    transliteration: "a-QEE-da",
    category: 'theology',
    definition:
      "Islamic creed or theological doctrine. The word derives from aqd (a knot or binding), as aqeedah is the set of beliefs to which a Muslim binds their heart. Classical works of aqeedah address: the nature of Allah and His attributes, prophethood and revelation, the unseen world (angels, jinn), the Last Day, and divine decree.",
    relatedTerms: ['tawhid', 'iman'],
  },
  {
    id: 'qadar',
    term: 'Qadar',
    arabicTerm: 'القدر',
    transliteration: 'QA-dar',
    category: 'theology',
    definition:
      "Divine decree, or the preordainment of all things by Allah. Believing in qadar is one of the six pillars of Iman. Scholars identify four levels of qadar: Allah's eternal knowledge of all things; His recording of everything in the Preserved Tablet (al-Lawh al-Mahfuz); His will, by which everything that exists does so by His permission; and His act of creation of all things. Belief in qadar does not negate human free will or responsibility.",
    relatedTerms: ['iman', 'tawakkul'],
  },
  {
    id: 'tawakkul',
    term: 'Tawakkul',
    arabicTerm: 'التوكل',
    transliteration: 'ta-WAK-kul',
    category: 'character',
    definition:
      "Complete trust and reliance upon Allah, combined with taking the appropriate means. Tawakkul is not passivity; it is action paired with trust. The Prophet ﷺ said: 'Tie your camel, then put your trust in Allah.' True tawakkul means doing everything within one's power and then leaving the outcome entirely to Allah.",
    relatedTerms: ['qadar', 'dua'],
  },

  // Worship
  {
    id: 'salah',
    term: 'Salah',
    arabicTerm: 'الصلاة',
    transliteration: 'sa-LAH',
    category: 'worship',
    definition:
      "The ritual prayer performed five times daily: Fajr (dawn), Dhuhr (midday), Asr (afternoon), Maghrib (sunset), and Isha (night). Salah is the second pillar of Islam. It consists of specific physical postures and verbal recitations in Arabic, always performed facing the Ka'bah in Makkah (the qibla). The Prophet ﷺ described Salah as the pillar (amud) of the religion.",
    relatedTerms: ['wudu', 'qibla', 'adhan'],
  },
  {
    id: 'wudu',
    term: 'Wudu',
    arabicTerm: 'الوضوء',
    transliteration: 'wu-DOO',
    category: 'worship',
    definition:
      'Ritual ablution using water, required before performing Salah and touching the Quran. Wudu involves washing the hands (three times), rinsing the mouth and nose, washing the face, washing the arms to the elbows, wiping over the head, wiping the ears, and washing the feet to the ankles - each performed three times except the head. The Prophet ﷺ said: "The key to Salah is purity."',
    relatedTerms: ['salah', 'ghusl', 'tayammum'],
  },
  {
    id: 'ghusl',
    term: 'Ghusl',
    arabicTerm: 'الغسل',
    transliteration: 'GHUSL',
    category: 'worship',
    definition:
      "Full ritual bath, obligatory after sexual intercourse, ejaculation, the end of menstruation or postpartum bleeding, and before burying the deceased. Ghusl is also recommended before Jumu'ah (Friday prayer), the two Eid prayers, and entering the state of Ihram. Ghusl consists of making the intention, then washing the entire body with water.",
    relatedTerms: ['wudu', 'salah'],
  },
  {
    id: 'zakat',
    term: 'Zakat',
    arabicTerm: 'الزكاة',
    transliteration: 'za-KAT',
    category: 'worship',
    definition:
      'The obligatory annual alms-tax, the third pillar of Islam. Zakat is due on savings, gold, silver, trade goods, livestock, and agricultural produce that meet or exceed the nisab (minimum threshold) and have been held for a lunar year. The standard rate is 2.5% on monetary savings. Zakat is distributed to eight categories of recipients defined in the Quran (9:60), including the poor, the destitute, those in debt, and travellers in need.',
    relatedTerms: ['sadaqah', 'nisab'],
  },
  {
    id: 'sawm',
    term: 'Sawm',
    arabicTerm: 'الصوم',
    transliteration: 'SAWM',
    category: 'worship',
    definition:
      'Fasting: the fourth pillar of Islam. Fasting in Ramadan is obligatory for every adult Muslim who is mentally and physically able, not travelling, and - for women - not in a state of menstruation or postpartum bleeding. The fast runs from the breaking of dawn (Fajr) until sunset (Maghrib) and requires abstention from food, drink, smoking, sexual relations, and certain other acts. Beyond Ramadan, many additional optional fasts are recommended, including the six days of Shawwal, Mondays and Thursdays, and the Day of Arafah.',
    relatedTerms: ['ramadan', 'iftar', 'suhoor'],
  },
  {
    id: 'dua',
    term: "Du'a",
    arabicTerm: 'الدعاء',
    transliteration: "du-'AA",
    category: 'worship',
    definition:
      "Supplication - the act of calling upon Allah directly. The Prophet ﷺ described du'a as 'the essence of worship' (Tirmidhi). Unlike formal Salah, du'a can be made in any language, at any time, and in any physical position. The Quran commands: 'Call upon Me; I will respond to you.' (40:60). Du'a is the most direct expression of the believer's relationship with Allah.",
    relatedTerms: ['salah', 'dhikr', 'tawakkul'],
  },
  {
    id: 'dhikr',
    term: 'Dhikr',
    arabicTerm: 'الذكر',
    transliteration: 'DHIKR',
    category: 'worship',
    definition:
      "Remembrance of Allah through words, phrases, or formulae. Common forms of dhikr include: Subhan Allah (Glory be to Allah), Alhamdulillah (All praise is for Allah), Allahu Akbar (Allah is Greatest), La ilaha illallah (There is no god but Allah), and Astaghfirullah (I seek forgiveness from Allah). Allah says in the Quran: 'Verily, in the remembrance of Allah do hearts find rest.' (13:28)",
    relatedTerms: ['dua', 'salah'],
  },
  {
    id: 'adhan',
    term: 'Adhan',
    arabicTerm: 'الأذان',
    transliteration: 'a-DHAAN',
    category: 'worship',
    definition:
      "The call to prayer, recited by the muezzin (mu'adhdhin) to announce each of the five daily prayers. The adhan was established in the first year after the Hijra. The first muezzin in Islamic history was Bilal ibn Rabah, a formerly enslaved Abyssinian Muslim chosen by the Prophet ﷺ for the beauty of his voice. The words of the adhan affirm the greatness of Allah, declare the testimony of faith, and call the believers to prayer and success.",
    relatedTerms: ['salah', 'iqamah'],
  },

  // Hadith Science
  {
    id: 'hadith',
    term: 'Hadith',
    arabicTerm: 'الحديث',
    transliteration: 'ha-DEETH',
    category: 'hadith-science',
    definition:
      "A recorded saying, action, or tacit approval (taqrir) of the Prophet Muhammad ﷺ. Alongside the Quran, the hadith corpus forms the two primary sources of Islamic law and theology. Each hadith consists of two parts: the isnad (chain of narrators tracing back to the Prophet ﷺ) and the matn (the actual text of what was said or done).",
    relatedTerms: ['isnad', 'matn', 'sunnah', 'sahih'],
  },
  {
    id: 'sunnah',
    term: 'Sunnah',
    arabicTerm: 'السنة',
    transliteration: 'SUN-nah',
    category: 'hadith-science',
    definition:
      "The established practice of the Prophet Muhammad ﷺ - encompassing his words, deeds, and tacit approvals. In a theological sense, the Sunnah is the second source of Islamic legislation after the Quran. In jurisprudence, a sunnah act is one the Prophet ﷺ performed regularly and whose performance is rewarded, while its omission incurs no punishment.",
    relatedTerms: ['hadith', 'fiqh'],
  },
  {
    id: 'sahih',
    term: 'Sahih',
    arabicTerm: 'الصحيح',
    transliteration: 'sa-HEEH',
    category: 'hadith-science',
    definition:
      "Sound or authentic - the highest grade of hadith. A hadith is classified as sahih if: its chain of narrators is unbroken from the Prophet ﷺ to the collector; every narrator in the chain is upright (adl) and precise (dabit); the hadith contains no hidden defect (illah) and no contradiction with more reliable narrations (shudhudh). The two most famous sahih collections are Sahih al-Bukhari and Sahih Muslim.",
    relatedTerms: ['hasan', 'daif', 'hadith', 'isnad'],
  },
  {
    id: 'hasan',
    term: 'Hasan',
    arabicTerm: 'الحسن',
    transliteration: 'HA-san',
    category: 'hadith-science',
    definition:
      "Good - the second grade of hadith authenticity, below sahih. A hasan hadith meets all the conditions of a sahih hadith except that one or more narrators has slightly weaker (though still acceptable) precision. Imam al-Tirmidhi was the first scholar to define and consistently use this grading. A hasan hadith is still acceptable as a legal and theological source.",
    relatedTerms: ['sahih', 'daif', 'hadith'],
  },
  {
    id: 'daif',
    term: "Da'if",
    arabicTerm: 'الضعيف',
    transliteration: "da-'EEF",
    category: 'hadith-science',
    definition:
      "Weak - a hadith that fails to meet the requirements for sahih or hasan classification, usually due to a broken chain, an unreliable narrator, or a hidden defect in the text. Scholars differ on whether weak hadiths can be used for virtuous acts (fada'il al-a'mal). They cannot be used for establishing halal and haram, theological positions, or as evidence in Islamic law.",
    relatedTerms: ['sahih', 'hasan', 'isnad'],
  },
  {
    id: 'isnad',
    term: 'Isnad',
    arabicTerm: 'الإسناد',
    transliteration: 'is-NAAD',
    category: 'hadith-science',
    definition:
      "The chain of narrators connecting the collector of a hadith back to the Prophet ﷺ. The isnad is the backbone of hadith verification. Imam Abdallah ibn al-Mubarak famously said: 'The isnad is part of the religion; were it not for the isnad, anyone could say whatever they wished.' Scholars of rijal (narrator criticism) devoted entire fields of study to evaluating every narrator in every chain.",
    relatedTerms: ['hadith', 'matn', 'sahih'],
  },
  {
    id: 'matn',
    term: 'Matn',
    arabicTerm: 'المتن',
    transliteration: 'MATN',
    category: 'hadith-science',
    definition:
      "The actual text or content of a hadith - the words, actions, or descriptions attributed to the Prophet ﷺ or a Companion. The matn is distinguished from the isnad (chain of narrators). Scholars examine the matn for internal consistency, conformity with the Quran, and absence of anomalies.",
    relatedTerms: ['isnad', 'hadith'],
  },

  // Quran
  {
    id: 'quran',
    term: 'The Quran',
    arabicTerm: 'القرآن الكريم',
    transliteration: 'al-Qur-AAN al-Ka-REEM',
    category: 'quran',
    definition:
      "The sacred scripture of Islam: the word of Allah revealed to the Prophet Muhammad ﷺ through the Angel Jibril over approximately 23 years (610–632 CE). It consists of 114 chapters (surahs) and 6,236 verses (ayat). The Quran is the primary source of Islamic theology and law and is considered linguistically inimitable. Unlike the Bible or Torah, Muslims believe the Quran exists today in its original, unaltered Arabic text.",
    relatedTerms: ['tafseer', 'ayah', 'surah', 'tajweed'],
  },
  {
    id: 'tafseer',
    term: 'Tafseer',
    arabicTerm: 'التفسير',
    transliteration: 'taf-SEER',
    category: 'quran',
    definition:
      "Exegesis or interpretation of the Quran. Tafseer aims to explain the meaning of Quranic verses, drawing on: the Quran itself (verses explaining other verses), the hadith of the Prophet ﷺ, the understanding of the Companions, classical Arabic linguistics, and the context of revelation (asbab al-nuzul). Among the most famous classical works of tafseer are Tafseer Ibn Kathir and al-Tabari.",
    relatedTerms: ['quran', 'asbab-al-nuzul'],
  },
  {
    id: 'tajweed',
    term: 'Tajweed',
    arabicTerm: 'التجويد',
    transliteration: 'taj-WEED',
    category: 'quran',
    definition:
      "The rules governing the correct pronunciation and recitation of the Quran, including proper articulation of letters, vowel lengths, nasalisation (ghunnah), and pausing. The word means 'to make better' or 'to do well'. Learning tajweed is considered an obligation for every Muslim to the degree required for correct Salah, and a virtue to master in depth.",
    relatedTerms: ['quran'],
  },

  // Jurisprudence
  {
    id: 'fiqh',
    term: 'Fiqh',
    arabicTerm: 'الفقه',
    transliteration: 'FIQH',
    category: 'jurisprudence',
    definition:
      "Islamic jurisprudence: the science of deriving practical religious rulings from the primary sources (Quran and Sunnah). The four major Sunni schools of fiqh (madhabs) are: Hanafi (founded by Imam Abu Hanifah, d. 767 CE), Maliki (Imam Malik, d. 795 CE), Shafi'i (Imam al-Shafi'i, d. 820 CE), and Hanbali (Imam Ahmad ibn Hanbal, d. 855 CE). All four schools are considered valid and orthodox.",
    relatedTerms: ['halal', 'haram', 'wajib', 'sunnah'],
  },
  {
    id: 'halal',
    term: 'Halal',
    arabicTerm: 'الحلال',
    transliteration: 'ha-LAAL',
    category: 'jurisprudence',
    definition:
      "Permissible or lawful under Islamic law. The default ruling in Islam is that all things are halal unless there is specific evidence making them prohibited. This principle (ibaha asliyya) means the burden of proof lies with prohibition, not permission.",
    relatedTerms: ['haram', 'makruh', 'fiqh'],
  },
  {
    id: 'haram',
    term: 'Haram',
    arabicTerm: 'الحرام',
    transliteration: 'ha-RAAM',
    category: 'jurisprudence',
    definition:
      "Prohibited or unlawful under Islamic law. Haram acts are those for which the Quran or authentic Sunnah explicitly forbids. Performing a haram act incurs sin; avoiding it is rewarded. Examples include: consuming alcohol, eating pork, fornication, theft, and murder.",
    relatedTerms: ['halal', 'makruh', 'fiqh'],
  },
  {
    id: 'wajib',
    term: 'Wajib',
    arabicTerm: 'الواجب',
    transliteration: 'WAA-jib',
    category: 'jurisprudence',
    definition:
      "Obligatory - an act whose performance is rewarded and whose omission without valid excuse incurs sin. In Hanafi jurisprudence, wajib is a category below fard (absolute obligation), where the evidence, while strong, is slightly less definitive. In the other three schools, wajib and fard are typically synonymous.",
    relatedTerms: ['fard', 'sunnah', 'makruh', 'haram'],
  },

  // Prophethood
  {
    id: 'nabi',
    term: 'Nabi',
    arabicTerm: 'النبي',
    transliteration: 'na-BEE',
    category: 'prophethood',
    definition:
      "A prophet - one who receives revelation from Allah. In Islamic theology, a nabi is distinguished from a rasul (messenger) in that a nabi conveys the existing message of a previous messenger, while a rasul brings a new scripture or law. All rasuls are nabis, but not all nabis are rasuls. The Quran mentions 25 prophets by name; Islamic tradition holds that Allah sent approximately 124,000 prophets in total.",
    relatedTerms: ['rasul', 'wahy', 'seerah'],
  },
  {
    id: 'rasul',
    term: 'Rasul',
    arabicTerm: 'الرسول',
    transliteration: 'ra-SOOL',
    category: 'prophethood',
    definition:
      "A messenger of Allah - a prophet who was given a new divine scripture or law (shari'ah) to convey to a specific people or to humanity. The five greatest messengers, known as Ulul Azm (those of firm resolve), are: Nuh, Ibrahim, Musa, Isa, and Muhammad ﷺ. The seal of all prophethood is Muhammad ﷺ, after whom no new prophet or messenger will come.",
    relatedTerms: ['nabi', 'wahy'],
  },
  {
    id: 'wahy',
    term: 'Wahy',
    arabicTerm: 'الوحي',
    transliteration: 'WA-hy',
    category: 'prophethood',
    definition:
      "Divine revelation - the communication of Allah's message to His prophets. Wahy could come in several forms: the ringing of a bell (most intense, leaving behind the deepest knowledge), in the form of a man (through Angel Jibril in human guise), or direct speech from behind a veil (as with Musa on Mount Sinai). The Prophet ﷺ described the first form as the most difficult.",
    relatedTerms: ['quran', 'nabi', 'rasul'],
  },
  {
    id: 'seerah',
    term: 'Seerah',
    arabicTerm: 'السيرة',
    transliteration: 'SEE-rah',
    category: 'history',
    definition:
      "The biography of the Prophet Muhammad ﷺ. The study of the Seerah encompasses his birth, early life, the beginning of revelation, the migration to Madinah (Hijra), the building of the first Muslim community, the battles of early Islam, and his final years until his passing in 632 CE. The most famous classical work of Seerah is Ibn Hisham's Sirat al-Nabawiyyah (building upon the earlier work of Ibn Ishaq).",
    relatedTerms: ['nabi', 'hijra', 'sahabah'],
  },
  {
    id: 'sahabah',
    term: 'Sahabah',
    arabicTerm: 'الصحابة',
    transliteration: 'sa-HAA-bah',
    category: 'history',
    definition:
      "The Companions of the Prophet Muhammad ﷺ - those who believed in him, met him while he was alive, and died as believers. The Sahabah are highly honoured in Islam; the Prophet ﷺ said of them: 'The best of people are my generation.' The most prominent Companions include Abu Bakr al-Siddiq, Umar ibn al-Khattab, Uthman ibn Affan, and Ali ibn Abi Talib (the four Rightly Guided Caliphs), as well as Khadijah, Aisha, Fatimah, and many others.",
    relatedTerms: ['seerah', 'tabiin'],
  },
  {
    id: 'hijra',
    term: 'Hijra',
    arabicTerm: 'الهجرة',
    transliteration: 'HIJ-rah',
    category: 'history',
    definition:
      "The migration of the Prophet Muhammad ﷺ from Makkah to Madinah in 622 CE, following increasing persecution of the Muslim community by the Quraysh. The Hijra marks the beginning of the Islamic lunar calendar (AH = Anno Hegirae). It represents a pivotal moment in Islamic history - the transition from a persecuted minority to an established community with its own governance and social order.",
    relatedTerms: ['seerah', 'sahabah'],
  },
  {
    id: 'tawbah',
    term: 'Tawbah',
    arabicTerm: 'التوبة',
    transliteration: 'TAW-bah',
    category: 'character',
    definition:
      "Repentance - turning back to Allah after a sin. Sincere tawbah requires: genuine remorse for the sin, immediately ceasing the sinful act, firmly resolving never to return to it, and - if the sin involved another person's rights - restoring those rights. The Prophet ﷺ said: 'All the children of Adam make mistakes, and the best of those who make mistakes are those who repent.' (Tirmidhi)",
    relatedTerms: ['istighfar', 'ihsan'],
  },
  {
    id: 'istighfar',
    term: 'Istighfar',
    arabicTerm: 'الاستغفار',
    transliteration: 'is-tigh-FAAR',
    category: 'worship',
    definition:
      "Seeking forgiveness from Allah, typically by saying 'Astaghfirullah' (I seek forgiveness from Allah). The Prophet ﷺ himself used to make istighfar more than 70 times daily, despite being free of sin, as a model for his nation. Regular istighfar is connected in the Quran to rain, wealth, children, and strength (71:10-12).",
    relatedTerms: ['tawbah', 'dhikr'],
  },
  {
    id: 'jannah',
    term: 'Jannah',
    arabicTerm: 'الجنة',
    transliteration: 'JAN-nah',
    category: 'afterlife',
    definition:
      "Paradise or Heaven - the eternal abode of the believers in the afterlife. The Quran describes Jannah in terms of gardens, rivers, magnificent dwellings, and pleasures unlike anything in this world. The highest level is called Jannatul Firdaws. The greatest pleasure of Jannah, according to the Prophet ﷺ, will be the vision of Allah's noble face.",
    relatedTerms: ['akhirah', 'jahannam'],
  },
  {
    id: 'akhirah',
    term: 'Akhirah',
    arabicTerm: 'الآخرة',
    transliteration: 'AA-khi-rah',
    category: 'afterlife',
    definition:
      "The afterlife - the world that begins after this life ends and continues for eternity. Belief in the akhirah is one of the six pillars of Iman. The stages of the akhirah include: death, the grave (barzakh), the resurrection (ba'th), the gathering (hashr), the presentation of deeds (hisab), the weighing of deeds (mizan), the path over Hell (sirat), and finally either Jannah or Jahannam.",
    relatedTerms: ['jannah', 'jahannam', 'yawm-al-qiyamah'],
  },
  {
    id: 'yawm-al-qiyamah',
    term: 'Yawm al-Qiyamah',
    arabicTerm: 'يوم القيامة',
    transliteration: 'YAWM al-qi-YAA-mah',
    category: 'afterlife',
    definition:
      "The Day of Resurrection (also called the Day of Judgement or the Last Day). On this day, all of creation will be resurrected and brought before Allah for judgement. Every person's deeds will be presented to them, the intercession (shafa'ah) of the Prophet ﷺ will be granted, and humanity will be divided between those who enter Jannah and those who enter Jahannam.",
    relatedTerms: ['akhirah', 'jannah', 'jahannam'],
  },
];

export function getGlossaryByCategory(category: GlossaryCategory): GlossaryEntry[] {
  return GLOSSARY.filter(e => e.category === category);
}

export function getGlossaryEntry(id: string): GlossaryEntry | undefined {
  return GLOSSARY.find(e => e.id === id);
}

export function searchGlossary(query: string): GlossaryEntry[] {
  const q = query.toLowerCase();
  return GLOSSARY.filter(
    e =>
      e.term.toLowerCase().includes(q) ||
      e.transliteration.toLowerCase().includes(q) ||
      e.definition.toLowerCase().includes(q),
  );
}
