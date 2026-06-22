import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Nikah: Islamic Marriage',
  description: 'A comprehensive guide to Islamic marriage (Nikah): the conditions of a valid contract, the Mahr (dowry), the marriage sermon, duas for the bride and groom, forbidden marriages, rights and responsibilities, and the walimah feast.',
};

/* ── Marriage in Islam ────────────────────────────────────── */

const MARRIAGE_INTRO = {
  verse: {
    ref: 'Quran 30:21',
    arabic: 'وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً إِنَّ فِي ذَٰلِكَ لَآيَاتٍ لِّقَوْمٍ يَتَفَكَّرُونَ',
    transliteration: "Wa min ayatihi an khalaqa lakum min anfusikum azwajan litaskunu ilayha wa ja'ala baynakum mawaddatan wa rahmah, inna fi dhalika la-ayatin li-qawmin yatafakkarun",
    meaning: 'And of His signs is that He created for you from yourselves mates that you may find tranquillity in them, and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.',
  },
  text: `Marriage (Nikah) is a Sunnah of the Prophet ﷺ and a social institution that Islam elevated to the highest level of importance. The Prophet ﷺ said: "Marriage is from my Sunnah, and whoever does not act upon my Sunnah is not from me." (Ibn Majah 1846, authenticated). He also said: "Marry; for I will boast of your numbers before the nations on the Day of Resurrection." (Ibn Majah 1846).

Islamic marriage is not merely a civil contract; it is an act of worship when entered with the right intention, a covenant before Allah, and the foundation of the Muslim family. The Quran (4:21) calls it a "weighty covenant" (mithaqan ghaliza), the same term used for the covenant Allah took from the prophets.`,
};

/* ── Conditions of Valid Nikah ────────────────────────────── */

const NIKAH_CONDITIONS = [
  {
    arabic: 'الإيجاب والقبول',
    name: 'Ijab and Qabul (Offer and Acceptance)',
    desc: `The marriage contract requires a formal verbal offer from the bride's side (ijab) and a verbal acceptance from the groom (qabul), or vice versa, in a single sitting. Example: "I give my daughter so-and-so to you in marriage for a mahr of..."; then: "I accept." The language must be clear and unambiguous. A future-tense offer without present acceptance in the same sitting is not sufficient.`,
    note: 'All four schools agree this is a pillar (rukn) of the Nikah; without it there is no marriage.',
  },
  {
    arabic: 'الولي',
    name: 'The Wali (Guardian)',
    desc: `A woman requires a wali (guardian) to act on her behalf in the marriage contract. The wali is primarily her father, then grandfather, then brother, then uncle in that order. The Prophet ﷺ said: "There is no marriage without a wali." (Abu Dawud 2085, Tirmidhi 1101, authenticated by al-Albani and the majority of hadith scholars). The Shafi'i and Hanbali schools hold that the wali is a condition (shart) of the marriage; without it the Nikah is invalid. The Hanafi school permits a woman of sound mind and legal majority to contract her own marriage, though with a suitable match.`,
    note: "If a woman has no living male relatives, the judge (qadi) or the imam of the mosque acts as her wali.",
  },
  {
    arabic: 'الشهود',
    name: 'Witnesses (Two Muslim Men)',
    desc: `The Nikah requires at least two Muslim male witnesses who hear the offer and acceptance. The Prophet ﷺ said: "There is no marriage except with a wali and two witnesses of upright character." (al-Bayhaqi, authenticated by Ibn al-Qattan). All four schools hold that the presence of witnesses is a condition of the Nikah's validity, because marriage is a public contract, not a secret agreement. Secret marriages (marriages not announced) are strongly discouraged in Islam.`,
    note: 'The Maliki school holds witnesses are Sunnah at the time of the contract but obligatory before consummation.',
  },
  {
    arabic: 'المَهْر',
    name: 'The Mahr (Dowry)',
    desc: `The mahr is an obligatory gift from the groom to the bride personally; it is her right alone, not her family's. The Prophet ﷺ said: "Give the women their dowries as a gift." (Quran 4:4). It must be agreed upon before or at the time of the contract. If no mahr is mentioned, the contract is still valid but a "mahr al-mithl" (equivalent to what women of her social standing typically receive) is due. The mahr may be paid immediately (mu'ajjal) or deferred (mu'ajjal); it remains a debt on the husband until paid.`,
    note: 'The mahr can be anything of value: money, property, a set of items, or even (as the Prophet ﷺ famously told one companion) teaching her portions of the Quran.',
  },
];

/* ── Mahr ─────────────────────────────────────────────────── */

const MAHR = {
  verse: {
    ref: 'Quran 4:4',
    arabic: 'وَآتُوا النِّسَاءَ صَدُقَاتِهِنَّ نِحْلَةً فَإِن طِبْنَ لَكُمْ عَن شَيْءٍ مِّنْهُ نَفْسًا فَكُلُوهُ هَنِيئًا مَّرِيئًا',
    transliteration: "Wa atun-nisa'a saduqatihinna nihlah, fa-in tibna lakum 'an shay'im-minhu nafsan fakuluhu hani'am-mari'a",
    meaning: 'Give the women their dowries as a gift. But if they remit to you of it anything of their own free will, consume it with good health and pleasure.',
  },
  points: [
    'The mahr is a right of the bride, not her father, not her family, not the community. It belongs entirely to her.',
    'There is no minimum mahr; even a small amount is valid. The Prophet ﷺ approved mahrs as modest as a ring made of iron.',
    'However, excessively burdensome mahrs are discouraged. The Prophet ﷺ said: "The most blessed marriage is the one with the least burden." (Ahmad 24529).',
    'Once the marriage is consummated, the full mahr is due even if it was not specified in advance.',
    'If the husband divorces before consummation, half the mahr is due (if it was specified) or a gift of compensation (mut\'ah) if no mahr was specified.',
    'A woman may forgive part or all of her mahr after the marriage; but this must be a free, uncoerced choice on her part.',
  ],
  sunnah_examples: [
    "The Prophet ﷺ told a companion who had nothing to offer as mahr: 'Do you know anything of the Quran?' He said: 'Yes, such-and-such surah.' The Prophet ﷺ said: 'I marry her to you for what you have of the Quran.' (Bukhari 5149)",
    "Umm Habibah (ra, one of the Prophet's wives) had a mahr of 4,000 dirhams paid by the Negus of Abyssinia on the Prophet's behalf.",
    "The average mahr of the Prophet's wives was 500 dirhams (approximately 1.5 kg of silver in modern terms).",
  ],
};

/* ── Khutbah al-Nikah ──────────────────────────────────────── */

const KHUTBAH = {
  arabic: 'خُطْبَةُ النِّكَاح',
  intro: `The Prophet ﷺ taught a marriage sermon that begins every Nikah ceremony. It was transmitted by Ibn Mas'ud and Abu Musa al-Ash'ari (Abu Dawud 2118, Tirmidhi 1105, Nasa'i). This khutbah is Sunnah Mu'akkadah (confirmed Sunnah) before the Nikah contract:`,
  text: {
    arabic: 'الْحَمْدُ لِلَّهِ نَسْتَعِينُهُ وَنَسْتَغْفِرُهُ وَنَعُوذُ بِاللَّهِ مِنْ شُرُورِ أَنفُسِنَا مَنْ يَهْدِهِ اللَّهُ فَلَا مُضِلَّ لَهُ وَمَنْ يُضْلِلْ فَلَا هَادِيَ لَهُ وَأَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    transliteration: "Alhamdu lillahi nasta'inuhu wa nastaghfiruhu wa na'udhu billahi min shururi anfusina, man yahdihillahu fala mudilla lahu wa man yudlil fala hadiya lah, wa ashhadu alla ilaha illallahu wa ashhadu anna Muhammadan 'abduhu wa rasuluh.",
    meaning: 'All praise is for Allah. We seek His help and His forgiveness. We seek refuge with Allah from the evil of our own souls. Whoever Allah guides, none can misguide; and whoever Allah leads astray, none can guide. I bear witness that there is no deity but Allah and I bear witness that Muhammad is His servant and messenger.',
  },
  verses: {
    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ وَلَا تَمُوتُنَّ إِلَّا وَأَنتُم مُّسْلِمُونَ ۝ يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ ۝ يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَقُولُوا قَوْلًا سَدِيدًا',
    refs: 'Quran 3:102, 4:1, 33:70',
    meaning: 'O you who believe, fear Allah as He should be feared and do not die except as Muslims. O mankind, fear your Lord who created you from a single soul... O you who believe, fear Allah and speak words of appropriate justice.',
  },
};

/* ── Marriage Duas ────────────────────────────────────────── */

const MARRIAGE_DUAS = [
  {
    title: 'Dua Said to the Groom',
    source: 'Abu Dawud 2130, Tirmidhi 1091, Ibn Majah 1905, authenticated',
    note: 'Said by those present upon the newlywed man, as was the Sunnah of the Prophet ﷺ and the companions:',
    arabic: 'بَارَكَ اللَّهُ لَكَ وَبَارَكَ عَلَيْكَ وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ',
    transliteration: "Barakallahu laka wa baraka 'alayka wa jama'a baynakuma fi khayr",
    meaning: 'May Allah bless you, and may He bless upon you, and may He join you together in goodness.',
    detail: "This replaces the pre-Islamic Arab custom of saying \"Bil-rafa' wal-banin\" (may you have prosperity and sons), which the Prophet ﷺ prohibited, as it implied that having daughters was not a blessing.",
  },
  {
    title: 'Dua to Say on the Wedding Night',
    source: 'Abu Dawud 2160, Ibn Majah 1918, authenticated',
    note: 'The groom should place his hand on the bride\'s forehead and say:',
    arabic: 'اللَّهُمَّ إِنِّي أَسْأَلُكَ خَيْرَهَا وَخَيْرَ مَا جَبَلْتَهَا عَلَيْهِ وَأَعُوذُ بِكَ مِنْ شَرِّهَا وَمِنْ شَرِّ مَا جَبَلْتَهَا عَلَيْهِ',
    transliteration: "Allahumma inni as'aluka khayrahā wa khayra ma jabaltahā 'alayhi, wa a'udhu bika min sharrihā wa min sharri ma jabaltahā 'alayh",
    meaning: "O Allah, I ask You for the goodness in her and the goodness she is inclined towards by nature; and I seek Your protection from the evil in her and the evil she is inclined towards by nature.",
    detail: 'This supplication is about both parties; the same is said by the bride regarding the groom, according to the scholars.',
  },
  {
    title: 'Dua Before Intimacy',
    source: 'Bukhari 141, Muslim 1434',
    note: 'The Prophet ﷺ instructed that before a husband approaches his wife, he should say:',
    arabic: 'بِسْمِ اللَّهِ اللَّهُمَّ جَنِّبْنَا الشَّيْطَانَ وَجَنِّبِ الشَّيْطَانَ مَا رَزَقْتَنَا',
    transliteration: "Bismillah. Allahumma jannibnas-shaytana wa jannibish-shaytana ma razaqtana",
    meaning: 'In the name of Allah. O Allah, keep the devil away from us and keep the devil away from what You provide for us.',
    detail: 'The Prophet ﷺ said: "If Allah decrees that a child is born from that intimacy, no devil will harm that child." (Bukhari 141).',
  },
];

/* ── Forbidden Marriages ──────────────────────────────────── */

const FORBIDDEN_MARRIAGES = {
  permanent: {
    title: 'Permanently Forbidden (Mahram) Relationships',
    intro: 'These are the women a man can never marry under any circumstance:',
    items: [
      { category: 'By Blood (Nasab)', examples: 'Mother, grandmother (and above). Daughter, granddaughter (and below). Sister. Paternal and maternal aunt. Brother\'s daughter (niece). Sister\'s daughter (niece).' },
      { category: 'By Marriage (Musaharah)', examples: "Wife's mother (mother-in-law). Wife's daughter from a previous marriage (stepdaughter, after consummation). Father's wife (stepmother). Son's wife (daughter-in-law)." },
      { category: 'By Suckling (Rada\'ah)', examples: 'A woman who breastfed a man (his "milk-mother") and all those who would be mahram to him if it were a blood relationship. The Prophet ﷺ said: "What is forbidden by breastfeeding is the same as what is forbidden by birth." (Bukhari 5099).' },
    ],
  },
  temporary: {
    title: 'Temporarily Forbidden Combinations',
    items: [
      'A man may not be married to two sisters simultaneously (Quran 4:23).',
      'A man may not be married to a woman and her paternal aunt simultaneously.',
      'A man may not be married to a woman and her maternal aunt simultaneously.',
      'A married woman; she cannot be married to another man while still married.',
      'A woman in her iddah (waiting period after divorce or widowhood).',
      'A Muslim man cannot marry a polytheist woman (Quran 2:221).',
      'A Muslim woman cannot marry a non-Muslim man (Quran 2:221, 60:10).',
    ],
  },
};

/* ── Rights and Responsibilities ──────────────────────────── */

const RIGHTS = {
  verse: {
    ref: 'Quran 2:228',
    arabic: 'وَلَهُنَّ مِثْلُ الَّذِي عَلَيْهِنَّ بِالْمَعْرُوفِ وَلِلرِّجَالِ عَلَيْهِنَّ دَرَجَةٌ',
    transliteration: "Wa lahunna mithlul-ladhi 'alayhinna bil-ma'ruf, wa lir-rijali 'alayhinna darajah",
    meaning: 'And women have rights similar to those over them in equity, and men have a degree over them.',
  },
  husbands: [
    "Providing financial support (nafaqah) for food, clothing, and housing, proportionate to his means",
    "Paying the mahr in full as agreed",
    "Treating the wife with kindness and honour: 'Live with them in kindness.' (Quran 4:19)",
    "Not harming her physically, emotionally, or financially",
    "If he has multiple wives, giving each equal time and financial provision (not equal love; that is beyond human control)",
    "Protecting her honour and not exposing her private matters",
    "Permitting her to visit her family in a reasonable manner",
    "Not preventing her from her obligatory acts of worship",
  ],
  wives: [
    "Obedience to the husband in permissible matters, not in disobedience to Allah",
    "Guarding the husband's property and honour in his absence",
    "Not allowing anyone into the home he disapproves of",
    "Not fasting voluntarily while the husband is present without his permission (to protect his rights)",
    "Maintaining herself in a manner pleasing to her husband",
    "The wife is not obligated to cook or clean by default (though she may choose to); this is the position of the majority of scholars",
    "The wife's earnings belong entirely to her; the husband has no right to them without her consent",
  ],
  prophets_example: `The Prophet ﷺ said: "The best among you is the one who is best to his family, and I am the best of you to my family." (Tirmidhi 3895, authenticated). He mended his own shoes, helped with household work, and never struck any woman. He said: "Do not beat the maidservants of Allah." He commanded men to take "the wasiyya of women" (advice to treat them well) seriously; Quran 4:19 commands mu'asharat bil-ma'ruf (living together in equity and kindness).`,
};

/* ── The Walimah ──────────────────────────────────────────── */

const WALIMAH = {
  arabic: 'الوَلِيمَة',
  definition: `The walimah is the wedding feast given by the groom after the marriage is consummated. It is Sunnah Mu'akkadah; the Prophet ﷺ commanded it and performed it consistently. He said to Abd al-Rahman ibn Awf when the latter married: "Organise a walimah, even with a single sheep." (Bukhari 5167, Muslim 1427).`,
  rulings: [
    'It is Sunnah; the groom holds the feast to announce the marriage and invite others to share in the joy.',
    'The walimah should be held within three days of consummation, according to the majority of scholars.',
    "It is obligatory to accept an invitation to a walimah if there is no valid excuse; the Prophet ﷺ said: 'Whoever does not respond to the invitation has disobeyed Allah and His Messenger.' (Muslim 1432).",
    'The walimah is permissible even if one cannot afford a sheep; any food shared with family and friends fulfils the Sunnah.',
    'Music, mixing of men and women, and alcohol are prohibited at the walimah as at any other gathering.',
    'It is recommended to feed the poor at the walimah in addition to invited guests.',
  ],
  note: `The Prophet ﷺ held walimah feasts for his wives. For Safiyyah (ra), the walimah consisted of dates and butter and dried yoghurt, the food of the desert journey, yet the Prophet ﷺ fulfilled the Sunnah with what was available. This shows that the spirit of the walimah is sharing and joy, not extravagance.`,
};

export default function NikahPage() {
  return (
    <>
      <PageHeader
        title="Nikah: Islamic Marriage"
        arabicTitle="النِّكَاح"
        subtitle="Marriage in Islam is a sacred covenant before Allah: a Sunnah of the Prophet ﷺ, a source of tranquillity, mercy, and affection, and the foundation of the Muslim family and society."
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* ── Marriage in Islam ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Marriage: A Sign of Allah and a Sunnah
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            النكاح سنة وآية
          </p>

          <article className="card-islamic mb-6">
            <span className="badge-gold text-xs mb-4 inline-block">{MARRIAGE_INTRO.verse.ref}</span>
            <ArabicText text={MARRIAGE_INTRO.verse.arabic} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">Transliteration</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{MARRIAGE_INTRO.verse.transliteration}</p>
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">Meaning</p>
              <p className="text-forest/70 text-sm leading-relaxed">{MARRIAGE_INTRO.verse.meaning}</p>
            </div>
          </article>

          <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5">
            <p className="text-forest/75 text-sm leading-relaxed whitespace-pre-line">{MARRIAGE_INTRO.text}</p>
          </div>
        </section>

        {/* ── Conditions of Nikah ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Conditions of a Valid Nikah
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            شروط عقد النكاح
          </p>
          <div className="space-y-5">
            {NIKAH_CONDITIONS.map((cond, i) => (
              <article key={i} className="card-islamic">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40 mt-0.5">
                    <span className="text-forest font-semibold text-xs">{i + 1}</span>
                  </div>
                  <div>
                    <p dir="rtl" lang="ar" className="arabic-sm text-gold mb-1">
                      {cond.arabic}
                    </p>
                    <h3 className="font-garamond text-lg font-semibold text-forest">{cond.name}</h3>
                  </div>
                </div>
                <p className="text-forest/75 text-sm leading-relaxed mb-3">{cond.desc}</p>
                <div className="bg-gold/10 border border-gold/20 rounded-lg p-3">
                  <p className="text-xs text-gold/70 italic">{cond.note}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── The Mahr ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            The Mahr: The Obligatory Dowry
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            المَهْر الصَّدَاق
          </p>

          <article className="card-islamic mb-6">
            <span className="badge-gold text-xs mb-4 inline-block">{MAHR.verse.ref}</span>
            <ArabicText text={MAHR.verse.arabic} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">Transliteration</p>
              <p className="text-forest/60 italic text-sm">{MAHR.verse.transliteration}</p>
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">Meaning</p>
              <p className="text-forest/70 text-sm">{MAHR.verse.meaning}</p>
            </div>
          </article>

          <div className="space-y-2 mb-6">
            {MAHR.points.map((point, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-gold mt-1 flex-shrink-0">&#x2022;</span>
                <p className="text-forest/70 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <div className="card-islamic bg-forest/5">
            <h3 className="font-garamond text-base font-semibold text-forest mb-3">Examples from the Sunnah</h3>
            <div className="space-y-2">
              {MAHR.sunnah_examples.map((ex, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-gold mt-1 flex-shrink-0 text-xs">&#x2022;</span>
                  <p className="text-forest/65 text-sm leading-relaxed italic">{ex}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Khutbah al-Nikah ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Khutbah al-Nikah: The Marriage Sermon
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            خطبة النكاح
          </p>

          <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-5">
            <p className="text-forest/75 text-sm leading-relaxed">{KHUTBAH.intro}</p>
          </div>

          <div className="card-islamic mb-5">
            <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-4">The Opening of Khutbah al-Nikah</p>
            <ArabicText text={KHUTBAH.text.arabic} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">Transliteration</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{KHUTBAH.text.transliteration}</p>
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">Meaning</p>
              <p className="text-forest/70 text-sm leading-relaxed">{KHUTBAH.text.meaning}</p>
            </div>
          </div>

          <div className="card-islamic">
            <span className="badge-gold text-xs mb-4 inline-block">{KHUTBAH.verses.refs}</span>
            <ArabicText text={KHUTBAH.verses.arabic} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3">
              <p className="text-forest/70 text-sm leading-relaxed">{KHUTBAH.verses.meaning}</p>
            </div>
          </div>
        </section>

        {/* ── Marriage Duas ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Marriage Duas
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            أدعية النكاح
          </p>
          <div className="space-y-5">
            {MARRIAGE_DUAS.map((dua, i) => (
              <article key={i} className="card-islamic">
                <div className="flex items-start justify-between gap-3 mb-3 flex-wrap">
                  <h3 className="font-garamond text-lg font-semibold text-forest">{dua.title}</h3>
                  <span className="badge-gold text-xs flex-shrink-0">{dua.source}</span>
                </div>
                <p className="text-forest/60 text-xs italic mb-4">{dua.note}</p>
                <ArabicText text={dua.arabic} size="md" />
                <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
                  <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">Transliteration</p>
                  <p className="text-forest/60 italic text-sm">{dua.transliteration}</p>
                  <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">Meaning</p>
                  <p className="text-forest/70 text-sm">{dua.meaning}</p>
                  {dua.detail && (
                    <p className="text-xs text-gold/55 italic mt-2 leading-relaxed">{dua.detail}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Forbidden Marriages ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Forbidden Marriages: The Mahram Relationships
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            المحرمات من النساء
          </p>
          <div className="space-y-5">
            <article className="card-islamic border-l-4 border-red-700/40">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-3">{FORBIDDEN_MARRIAGES.permanent.title}</h3>
              <p className="text-forest/60 text-xs mb-4">{FORBIDDEN_MARRIAGES.permanent.intro}</p>
              <div className="space-y-3">
                {FORBIDDEN_MARRIAGES.permanent.items.map((item, i) => (
                  <div key={i} className="bg-forest/5 rounded-xl p-3">
                    <p className="font-medium text-forest text-sm mb-1">{item.category}</p>
                    <p className="text-forest/65 text-xs leading-relaxed">{item.examples}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="card-islamic border-l-4 border-amber-700/40">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-3">{FORBIDDEN_MARRIAGES.temporary.title}</h3>
              <div className="space-y-2">
                {FORBIDDEN_MARRIAGES.temporary.items.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-gold mt-1 flex-shrink-0">&#x2022;</span>
                    <p className="text-forest/70 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* ── Rights and Responsibilities ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Rights and Responsibilities in Marriage
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            الحقوق والواجبات الزوجية
          </p>

          <article className="card-islamic mb-5">
            <span className="badge-gold text-xs mb-4 inline-block">{RIGHTS.verse.ref}</span>
            <ArabicText text={RIGHTS.verse.arabic} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-forest/60 italic text-sm">{RIGHTS.verse.transliteration}</p>
              <p className="text-forest/70 text-sm">{RIGHTS.verse.meaning}</p>
            </div>
          </article>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            <div className="card-islamic">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-4 border-l-4 border-forest/50 pl-3">
                {"Husband's Obligations"}
              </h3>
              <div className="space-y-2">
                {RIGHTS.husbands.map((right, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <span className="text-gold mt-1 flex-shrink-0 text-xs">&#x2022;</span>
                    <p className="text-forest/70 text-sm leading-relaxed">{right}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="card-islamic">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-4 border-l-4 border-gold/60 pl-3">
                {"Wife's Rights and Responsibilities"}
              </h3>
              <div className="space-y-2">
                {RIGHTS.wives.map((right, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <span className="text-gold mt-1 flex-shrink-0 text-xs">&#x2022;</span>
                    <p className="text-forest/70 text-sm leading-relaxed">{right}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gold/10 border border-gold/25 rounded-xl p-5">
            <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-2">The Prophet&apos;s Example</p>
            <p className="text-forest/70 text-sm leading-relaxed italic">{RIGHTS.prophets_example}</p>
          </div>
        </section>

        {/* ── The Walimah ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            The Walimah: The Wedding Feast
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            الوَلِيمَة
          </p>
          <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5 mb-5">
            <p className="text-forest/75 text-sm leading-relaxed">{WALIMAH.definition}</p>
          </div>
          <div className="space-y-2 mb-5">
            {WALIMAH.rulings.map((ruling, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-gold mt-1 flex-shrink-0">&#x2022;</span>
                <p className="text-forest/70 text-sm leading-relaxed">{ruling}</p>
              </div>
            ))}
          </div>
          <div className="card-islamic bg-forest/5">
            <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-2">Historical Note</p>
            <p className="text-forest/65 text-sm leading-relaxed italic">{WALIMAH.note}</p>
          </div>
        </section>

        {/* ── Closing ── */}
        <section className="card-islamic bg-forest/5 text-center">
          <ArabicText text="وَعَاشِرُوهُنَّ بِالْمَعْرُوفِ" size="lg" className="mb-4" />
          <p className="text-forest/70 text-sm italic mb-1">
            {'"And live with them in kindness."'} (Quran 4:19)
          </p>
          <p className="text-forest/50 text-xs mt-3">
            The entire Islamic teaching on marriage rests on this command: ma&apos;ruf, that which is known and recognised as good, just, and honourable. It is the spirit behind every ruling.
          </p>
        </section>
      </div>
    </>
  );
}
