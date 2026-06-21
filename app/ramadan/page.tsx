import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';

export const metadata: Metadata = {
  title: 'Ramadan: The Month of Fasting',
  description: 'A complete guide to Ramadan: the obligation of fasting, conditions, what breaks the fast, Suhur and Iftar, Taraweeh, Laylatul Qadr, Itikaf, Zakat al-Fitr, and the spiritual dimensions of the blessed month.',
};

/* ── The Quran on Ramadan ─────────────────────────────────── */

const RAMADAN_VERSES = {
  ref: 'Quran 2:183-185',
  arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ ۝ أَيَّامًا مَّعْدُودَاتٍ فَمَن كَانَ مِنكُم مَّرِيضًا أَوْ عَلَىٰ سَفَرٍ فَعِدَّةٌ مِّنْ أَيَّامٍ أُخَرَ وَعَلَى الَّذِينَ يُطِيقُونَهُ فِدْيَةٌ طَعَامُ مِسْكِينٍ فَمَن تَطَوَّعَ خَيْرًا فَهُوَ خَيْرٌ لَّهُ وَأَن تَصُومُوا خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ ۝ شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ الْهُدَىٰ وَالْفُرْقَانِ',
  transliteration: "Ya ayyuhal-ladhina amanu kutiba 'alaykumus-siyamu kama kutiba 'alal-ladhina min qablikum la'allakum tattaqun. Ayyamam-ma'dudat. Faman kana minkum maridhan aw 'ala safarin fa'iddatum-min ayyamin ukhar. Wa 'alal-ladhina yutiqunahu fidyatun ta'amu miskin. Faman tatawwa'a khayran fahuwa khayrun lah, wa an tasumu khayrun lakum in kuntum ta'lamun. Shahru Ramadanal-ladhi unzila fihil-Qur'anu hudal-lin-nasi wa bayyinatim-minal-huda wal-furqan.",
  meaning: 'O you who believe, fasting has been prescribed for you as it was prescribed for those before you, so that you may become God-fearing. Fasting is for a fixed number of days. Whoever among you is ill or on a journey, then an equal number of other days. For those who can fast with hardship, a ransom of feeding a poor person. Whoever volunteers good is better for him, and that you fast is better for you, if you knew. The month of Ramadan is that in which the Quran was revealed as a guidance for the people and clear proofs of guidance and the Criterion.',
};

/* ── Moon Sighting ────────────────────────────────────────── */

const HILAL = {
  explanation: `Ramadan begins upon the confirmed sighting of the hilal (new crescent moon) after sunset on the 29th of Sha'ban, or upon completing 30 days of Sha'ban if the moon is not seen. The Prophet ﷺ said: "Fast upon sighting it and break the fast upon sighting it. If it is obscured from you then complete Sha'ban as thirty days." (Bukhari 1909, Muslim 1081).`,
  details: [
    'The crescent must be sighted with the naked eye after sunset on the 29th of Sha\'ban.',
    'The testimony of one reliable witness is sufficient to establish the beginning of Ramadan, according to the majority of scholars.',
    "If clouds or haze prevent sighting, Sha'ban is completed as 30 days and Ramadan begins the following morning.",
    'Scholars differ on whether moon-sighting must be local or whether a sighting anywhere in the world suffices; both positions have scholarly support.',
    'Astronomical calculation may be used as a supporting tool but the classical position is that actual sighting is required.',
  ],
};

/* ── Conditions of Fasting ────────────────────────────────── */

const CONDITIONS = [
  {
    title: 'Obligatory Upon',
    items: [
      { name: 'Muslim', desc: 'Fasting is not obligatory upon non-Muslims, though they may choose to fast.' },
      { name: 'Adult (Baligh)', desc: 'Children are not obligated but should be gradually encouraged as a preparation. Puberty marks the beginning of obligation.' },
      { name: 'Sane (Aaqil)', desc: 'One who lacks mental capacity is not obligated.' },
      { name: 'Healthy', desc: 'One who is ill and for whom fasting would cause harm or delay recovery may break the fast and make it up later.' },
      { name: 'Resident (not travelling)', desc: 'A traveller covering a distance at which prayers are shortened may break the fast and make it up. Scholars differ on the distance threshold; the majority say approximately 80 km.' },
      { name: 'Capable (not pregnant or nursing)', desc: 'A pregnant woman or nursing mother who fears harm to herself or her child may break the fast. The majority position is that she must make up the days, and some scholars also require fidyah (feeding a poor person) if the fast is broken out of fear for the child.' },
    ],
  },
];

/* ── Invalidators of the Fast ─────────────────────────────── */

const FAST_RULES = {
  invalidators: [
    { item: 'Eating or drinking intentionally', note: 'Forgetting and eating does not break the fast. The Prophet ﷺ said: "Whoever forgets and eats or drinks, let him complete his fast; Allah fed him and gave him to drink." (Bukhari 1933).' },
    { item: 'Sexual intercourse', note: 'This requires making up the day and an expiation (kaffarah): freeing a slave, or if unable, fasting two consecutive months, or if unable, feeding 60 poor persons.' },
    { item: 'Intentional vomiting', note: 'Vomiting involuntarily does not break the fast.' },
    { item: 'Menstruation or post-natal bleeding', note: 'These break the fast even if they begin moments before sunset. The days must be made up.' },
    { item: 'Masturbation leading to emission', note: 'Requires making up the day.' },
    { item: 'Deliberate apostasy from Islam', note: 'This terminates the fast along with all acts of worship.' },
  ],
  does_not_break: [
    'Eating or drinking by mistake (forgetting one is fasting)',
    'Involuntary vomiting',
    'Rinsing the mouth or nose (without swallowing)',
    'Using toothpaste or miswak (avoiding strong toothpaste during fasting hours is recommended)',
    'Injections that do not provide nourishment, such as insulin (majority position)',
    'Blood tests or donating blood',
    'Eye drops or ear drops',
    'Wet dreams (involuntary)',
    'Swallowing one\'s saliva',
    'Using an unscented inhaler (majority position for necessity)',
    'Smelling perfume (though deliberately inhaling incense smoke is debated)',
  ],
};

/* ── Suhur and Iftar ──────────────────────────────────────── */

const SUHUR_IFTAR = {
  suhur: {
    title: 'Suhur: The Pre-Dawn Meal',
    arabic: 'السُّحور',
    text: `The meal eaten before Fajr (dawn) is called Suhur. It is a Sunnah strongly emphasised by the Prophet ﷺ. He said: "Eat suhur, for in suhur there is blessing." (Bukhari 1923). He also said: "The distinction between our fast and the fast of the People of the Book is the eating of the pre-dawn meal." (Muslim 1096). Even eating a few dates or drinking water qualifies. The time for Suhur ends at the adhan of Fajr. It is recommended to delay Suhur to close to Fajr time, as the Prophet ﷺ and Zayd ibn Thabit would eat Suhur and then the Prophet ﷺ would go to prayer, with the gap between them being approximately the time to recite 50 verses of the Quran. (Bukhari 1134).`,
  },
  iftar: {
    title: 'Iftar: Breaking the Fast',
    arabic: 'الإفطار',
    text: `The Prophet ﷺ said: "People will continue to be in a good state as long as they hasten to break the fast." (Bukhari 1957). Breaking the fast should be done immediately at sunset; it is disliked to delay. It is Sunnah to break the fast with fresh dates, then dried dates, then water, in that order if available. The Prophet ﷺ would break his fast with fresh dates before praying Maghrib.`,
    dua: {
      arabic: 'اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ',
      transliteration: "Allahumma laka sumtu wa 'ala rizqika aftartu",
      meaning: 'O Allah, for You I fasted and with Your provision I break my fast.',
      source: "Abu Dawud 2358, narrated by Mu'adh ibn Zuhra, classed as mursal (disconnected) but acted upon by scholars",
    },
    dua2: {
      arabic: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ',
      transliteration: "Dhahabaẓ-ẓama'u wabtallatil-'uruqu wa thabatal-ajru insha'allah",
      meaning: 'The thirst is gone, the veins are moistened, and the reward is established, if Allah wills.',
      source: 'Abu Dawud 2357, authenticated by al-Albani, narrated by Ibn Umar (ra)',
    },
  },
};

/* ── Taraweeh ─────────────────────────────────────────────── */

const TARAWEEH = {
  text: `Taraweeh is the night prayer of Ramadan, performed after Isha. The Prophet ﷺ prayed it in congregation for several nights, then discontinued congregational performance out of fear that it would become obligatory upon his nation. When Umar ibn al-Khattab (ra) became caliph, he revived the congregational Taraweeh and said: "What an excellent innovation this is." (Bukhari 2010). He is not praising bid'ah in the religious sense; he is using the word "bid'ah" linguistically to mean "new practice," since it was a revival of what the Prophet ﷺ had established.`,
  positions: [
    {
      title: '8 Units (Rak\'ahs)',
      explanation: `Based on the hadith of Aisha (ra) who described the Prophet ﷺ as never praying more than 11 units in night prayer in Ramadan or outside it (Bukhari 2013, Muslim 738). Scholars who favour 8 + 3 Witr (11 total) include those following the Hanbali school and this was the position popularised by Shaykh al-Albani.`,
    },
    {
      title: '20 Units (Rak\'ahs)',
      explanation: `The majority of classical scholars (Hanafi, Maliki, and Shafi'i) hold that 20 rak'ahs of Taraweeh is the Sunnah, based on the practice of Umar ibn al-Khattab (ra) who established 20 rak'ahs for the Muslims of Madinah, and this continued without objection from the companions. Ibn Taymiyyah wrote that all of 8, 20, and 36 are permissible and the dispute is not a major one.`,
    },
  ],
  note: 'Both positions are valid scholarly opinions held by major imams throughout history. The important matter is that Taraweeh is prayed with focus and devotion in Ramadan.',
};

/* ── Laylatul Qadr ────────────────────────────────────────── */

const LAYLATUL_QADR = {
  arabic: 'لَيْلَةُ الْقَدْر',
  description: `Laylatul Qadr (the Night of Power or Decree) is described by the Quran as "better than a thousand months"; that is, better than 83 years of worship. It falls in the last 10 nights of Ramadan, specifically on one of the odd nights: the 21st, 23rd, 25th, 27th, or 29th. The Prophet ﷺ said: "Seek it in the last ten nights of Ramadan, in the odd nights." (Bukhari 2017). The 27th night is most commonly believed to be Laylatul Qadr based on the companion Ibn Abbas and the majority position of scholars, though the Prophet ﷺ did not specify it definitively, in order that Muslims would increase worship across all the odd nights.`,
  verse: {
    ref: 'Quran 97:1-5 (Surah al-Qadr)',
    arabic: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۝ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۝ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ ۝ تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ ۝ سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ',
    transliteration: "Inna anzalnahu fi laylatil-qadr. Wa ma adraka ma laylatulqadr. Laylatulqadri khayrum-min alfi shahr. Tanazzalul-mala'ikatu war-ruhu fiha bi-idhni rabbihim min kulli amr. Salamun hiya hatta matla'il-fajr.",
    meaning: 'We sent it down during the Night of Decree. And what can make you know what is the Night of Decree? The Night of Decree is better than a thousand months. The angels and the Spirit descend therein by permission of their Lord for every matter. Peace it is until the emergence of dawn.',
  },
  dua: {
    arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
    transliteration: "Allahumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'anni",
    meaning: 'O Allah, You are the Pardoner, You love to pardon, so pardon me.',
    source: "Tirmidhi 3513, Ibn Majah 3850, narrated by Aisha (ra). She asked the Prophet ﷺ what to say on Laylatul Qadr, and he taught her this dua.",
  },
  signs: [
    'The night is calm and peaceful, neither extremely hot nor extremely cold.',
    'The sun rises the following morning without rays, appearing like a disc, whitish (as described in the hadith of Ibn Abbas, Muslim 762).',
    "One feels a particular sweetness in worship that night: increased concentration, spiritual lightness, and ease of dhikr.",
    'Rain may fall on that night, or just before or after, according to some narrations.',
  ],
};

/* ── I'tikaf ──────────────────────────────────────────────── */

const ITIKAF = {
  arabic: 'الاعتكاف',
  description: `I'tikaf is the practice of secluding oneself in the mosque for worship, cutting off from the distractions of the world. The Prophet ﷺ performed I'tikaf in the last 10 nights of Ramadan every year and continued until his death. The year he passed away, he performed it for 20 nights. (Bukhari 2044).`,
  conditions: [
    'It is performed in a mosque (masjid), not at home, except for women according to some scholars.',
    "The person must be Muslim, sane, and in a state of ritual purity from major impurity (junub or menstruating women may not perform I'tikaf).",
    'The minimum duration is disputed: some say it can be even a short period, others say a full day and night.',
    "The full Sunnah I'tikaf is the last 10 nights of Ramadan, beginning from the sunset of the 20th night.",
    "One must not leave the mosque except for necessities: using the toilet, ritual bath (ghusl), or medical emergency.",
    'Food may be brought in. The I'tikaf is not broken by sleeping or eating inside the mosque.',
  ],
};

/* ── Zakat al-Fitr ────────────────────────────────────────── */

const ZAKAT_FITR = {
  arabic: 'زكاة الفطر',
  description: `Zakat al-Fitr is a mandatory charitable payment due from every Muslim at the end of Ramadan. The Prophet ﷺ made it obligatory as a purification of the fasting person from idle talk and indecency committed during the month, and as a provision for the poor to also celebrate Eid. (Abu Dawud 1609, Ibn Majah 1827, authenticated).`,
  amount: `One sa' (approximately 2.5–3 kg) of the staple food of one's land; in the time of the Prophet ﷺ this was dates, raisins, barley, or wheat. Today this is often calculated as rice or its monetary equivalent depending on scholars' positions.`,
  who_pays: 'Every Muslim who possesses food beyond the needs of themselves and their household on the night of Eid. The head of household pays on behalf of all those under their care, including infants.',
  who_receives: 'The poor and the needy are the primary recipients. Scholars agree it should go to Muslims in need.',
  when: 'It must be paid before the Eid prayer. The Prophet ﷺ said: "Whoever pays it before the prayer, it is accepted as Zakat al-Fitr. Whoever pays it after the prayer, it is merely a charity among charities." (Abu Dawud 1609). It may be paid one or two days before Eid.',
};

/* ── Eid al-Fitr ──────────────────────────────────────────── */

const EID = [
  'Performing ghusl (complete bath) before going to the Eid prayer.',
  'Wearing one\'s best or new clothes.',
  'Eating an odd number of dates before leaving for the Eid prayer (Sunnah established from Anas ibn Malik, Bukhari 953).',
  'Paying Zakat al-Fitr before the prayer.',
  "Going to the Eid prayer, which is Sunnah Mu'akkadah (some scholars say it is fard, i.e. obligatory, upon the community).",
  'Going by one route and returning by another (from the Sunnah of the Prophet ﷺ, Bukhari 986).',
  'Saying the takbir abundantly from the night of Eid until the prayer: Allahu Akbar, Allahu Akbar, La ilaha illallah, Allahu Akbar, Allahu Akbar wa lillahil-hamd.',
  'Congratulating fellow Muslims: "Taqabbalallahu minna wa minkum" (May Allah accept from us and from you).',
];

/* ── Spiritual Dimensions ──────────────────────────────────── */

const SPIRITUAL = [
  {
    title: 'Taqwa: The Goal of Fasting',
    text: 'Allah did not say "fast so that you may lose weight" or "fast so that you may be rewarded." He said: "so that you may become God-fearing (tattaqun)." (Quran 2:183). The entire purpose of fasting is to develop taqwa: God-consciousness that prevents one from sin even when no human eye can see. One who fasts but does not leave evil speech and actions has gained nothing from the fast except hunger and thirst. The Prophet ﷺ said: "Whoever does not abandon false speech and acting upon it, Allah has no need of his abandoning food and drink." (Bukhari 1903).',
  },
  {
    title: 'Gratitude Through Hunger',
    text: "Hunger teaches gratitude for blessings that are normally taken for granted. Water becomes the most precious thing in the world as sunset approaches. A date becomes a gift of immeasurable sweetness. This recalibration of one's relationship with provision is one of the deepest wisdoms of fasting: the fasting person learns to say Alhamdulillah for things they previously never thought twice about.",
  },
  {
    title: 'Empathy with the Poor',
    text: 'The one who has never experienced hunger cannot truly understand poverty. Ramadan forces the Muslim, regardless of wealth, to experience what the poor experience daily. This is why Ramadan is the month of generosity: the Prophet ﷺ was described as being "more generous than the free wind" in Ramadan. (Bukhari 6). Giving becomes natural when one has felt the discomfort of want.',
  },
  {
    title: 'The Month of the Quran',
    text: 'Ramadan is fundamentally the month in which the Quran was revealed (Quran 2:185). Jibril (as) would review the entire Quran with the Prophet ﷺ every Ramadan, and in the final year of his life reviewed it twice. (Bukhari 3624). Ramadan therefore carries a special relationship with the Quran; Muslims are encouraged to read, listen to, and deeply reflect upon the Quran throughout the month.',
  },
];

export default function RamadanPage() {
  return (
    <>
      <PageHeader
        title="Ramadan: The Month of Fasting"
        arabicTitle="رَمَضَان"
        subtitle="Ramadan is the ninth month of the Islamic calendar: the month in which the Quran was revealed, in which the gates of Paradise are opened, the gates of Hell are closed, and the devils are chained. Its fast is the fourth pillar of Islam."
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* ── Quran on Ramadan ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Why Ramadan Was Prescribed
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            فريضة الصيام
          </p>
          <article className="card-islamic">
            <span className="badge-gold text-xs mb-4 inline-block">{RAMADAN_VERSES.ref}</span>
            <ArabicText text={RAMADAN_VERSES.arabic} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">Transliteration</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{RAMADAN_VERSES.transliteration}</p>
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">Meaning</p>
              <p className="text-forest/70 text-sm leading-relaxed">{RAMADAN_VERSES.meaning}</p>
            </div>
          </article>
        </section>

        {/* ── Moon Sighting ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            The Hilal: Beginning the Month
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            رؤية الهلال
          </p>
          <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5 mb-5">
            <p className="text-forest/75 text-sm leading-relaxed">{HILAL.explanation}</p>
          </div>
          <div className="space-y-3">
            {HILAL.details.map((d, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-gold mt-1 flex-shrink-0">&#x2022;</span>
                <p className="text-forest/70 text-sm leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Conditions ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Upon Whom is Fasting Obligatory?
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            شروط وجوب الصيام
          </p>
          <div className="space-y-3">
            {CONDITIONS[0].items.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40 mt-0.5">
                  <span className="text-forest font-semibold text-xs">{i + 1}</span>
                </div>
                <div>
                  <p className="font-medium text-forest text-sm">{item.name}</p>
                  <p className="text-forest/60 text-xs leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Invalidators and What Does Not Break ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            What Breaks the Fast and What Does Not
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            مفسدات الصوم وما لا يفسده
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-garamond text-lg font-semibold text-forest mb-4 border-l-4 border-red-700/50 pl-3">
                Invalidators of the Fast
              </h3>
              <div className="space-y-3">
                {FAST_RULES.invalidators.map((item, i) => (
                  <article key={i} className="card-islamic py-3 px-4">
                    <p className="font-medium text-forest text-sm mb-1">{item.item}</p>
                    <p className="text-forest/60 text-xs leading-relaxed">{item.note}</p>
                  </article>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-garamond text-lg font-semibold text-forest mb-4 border-l-4 border-forest/50 pl-3">
                What Does NOT Break the Fast
              </h3>
              <div className="space-y-2">
                {FAST_RULES.does_not_break.map((item, i) => (
                  <div key={i} className="flex gap-2 items-start">
                    <span className="text-gold mt-1 flex-shrink-0 text-xs">&#x2714;</span>
                    <p className="text-forest/70 text-sm leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Suhur and Iftar ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Suhur and Iftar
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            السحور والإفطار
          </p>
          <div className="space-y-6">
            <article className="card-islamic">
              <div className="flex items-center gap-3 mb-3">
                <p dir="rtl" lang="ar" className="arabic text-gold/80" aria-hidden="true">
                  {SUHUR_IFTAR.suhur.arabic}
                </p>
                <h3 className="font-garamond text-xl font-semibold text-forest">{SUHUR_IFTAR.suhur.title}</h3>
              </div>
              <p className="text-forest/70 text-sm leading-relaxed">{SUHUR_IFTAR.suhur.text}</p>
            </article>

            <article className="card-islamic">
              <div className="flex items-center gap-3 mb-3">
                <p dir="rtl" lang="ar" className="arabic text-gold/80" aria-hidden="true">
                  {SUHUR_IFTAR.iftar.arabic}
                </p>
                <h3 className="font-garamond text-xl font-semibold text-forest">{SUHUR_IFTAR.iftar.title}</h3>
              </div>
              <p className="text-forest/70 text-sm leading-relaxed mb-5">{SUHUR_IFTAR.iftar.text}</p>

              <div className="bg-forest/5 rounded-xl p-4 space-y-3 mb-4">
                <p className="text-xs text-gold/70 uppercase tracking-wider font-medium">Dua When Breaking the Fast ({SUHUR_IFTAR.iftar.dua.source})</p>
                <ArabicText text={SUHUR_IFTAR.iftar.dua.arabic} size="md" />
                <div className="border-t border-gold/10 pt-3 space-y-2">
                  <p className="text-forest/60 italic text-sm">{SUHUR_IFTAR.iftar.dua.transliteration}</p>
                  <p className="text-forest/70 text-sm">{SUHUR_IFTAR.iftar.dua.meaning}</p>
                </div>
              </div>

              <div className="bg-gold/10 border border-gold/25 rounded-xl p-4 space-y-3">
                <p className="text-xs text-gold/70 uppercase tracking-wider font-medium">Alternative Dua ({SUHUR_IFTAR.iftar.dua2.source})</p>
                <ArabicText text={SUHUR_IFTAR.iftar.dua2.arabic} size="md" />
                <div className="border-t border-gold/15 pt-3 space-y-2">
                  <p className="text-forest/60 italic text-sm">{SUHUR_IFTAR.iftar.dua2.transliteration}</p>
                  <p className="text-forest/70 text-sm">{SUHUR_IFTAR.iftar.dua2.meaning}</p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* ── Taraweeh ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Taraweeh: The Night Prayer of Ramadan
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            صلاة التراويح
          </p>
          <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed">{TARAWEEH.text}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5 mb-4">
            {TARAWEEH.positions.map((pos, i) => (
              <article key={i} className="card-islamic">
                <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{pos.title}</h3>
                <p className="text-forest/70 text-sm leading-relaxed">{pos.explanation}</p>
              </article>
            ))}
          </div>
          <div className="bg-gold/10 border border-gold/25 rounded-xl p-4">
            <p className="text-forest/75 text-sm italic">{TARAWEEH.note}</p>
          </div>
        </section>

        {/* ── Laylatul Qadr ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Laylatul Qadr: The Night of Power
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            لَيْلَةُ الْقَدْر
          </p>
          <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed">{LAYLATUL_QADR.description}</p>
          </div>

          <article className="card-islamic mb-6">
            <span className="badge-gold text-xs mb-4 inline-block">{LAYLATUL_QADR.verse.ref}</span>
            <ArabicText text={LAYLATUL_QADR.verse.arabic} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">Transliteration</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{LAYLATUL_QADR.verse.transliteration}</p>
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">Meaning</p>
              <p className="text-forest/70 text-sm leading-relaxed">{LAYLATUL_QADR.verse.meaning}</p>
            </div>
          </article>

          <div className="card-islamic mb-6">
            <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-3">
              The Prophet&apos;s Recommended Dua for Laylatul Qadr ({LAYLATUL_QADR.dua.source})
            </p>
            <ArabicText text={LAYLATUL_QADR.dua.arabic} size="lg" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-forest/60 italic text-sm">{LAYLATUL_QADR.dua.transliteration}</p>
              <p className="text-forest/70 text-sm">{LAYLATUL_QADR.dua.meaning}</p>
            </div>
          </div>

          <div>
            <h3 className="font-garamond text-lg font-semibold text-forest mb-3">Signs of Laylatul Qadr</h3>
            <div className="space-y-2">
              {LAYLATUL_QADR.signs.map((sign, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-gold mt-1 flex-shrink-0">&#x2022;</span>
                  <p className="text-forest/70 text-sm leading-relaxed">{sign}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── I'tikaf ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            {"I'tikaf: Seclusion in the Mosque"}
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            الاعتكاف
          </p>
          <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-5">
            <p className="text-forest/75 text-sm leading-relaxed">{ITIKAF.description}</p>
          </div>
          <h3 className="font-garamond text-base font-semibold text-forest mb-3">Conditions and Rules</h3>
          <div className="space-y-2">
            {ITIKAF.conditions.map((cond, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-gold mt-1 flex-shrink-0">&#x2022;</span>
                <p className="text-forest/70 text-sm leading-relaxed">{cond}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Zakat al-Fitr ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Zakat al-Fitr: The Obligatory End-of-Ramadan Charity
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            زكاة الفطر
          </p>
          <div className="space-y-4">
            <div className="card-islamic">
              <p className="text-forest/75 text-sm leading-relaxed mb-4">{ZAKAT_FITR.description}</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: 'Amount', value: ZAKAT_FITR.amount },
                  { label: 'Who Pays', value: ZAKAT_FITR.who_pays },
                  { label: 'Who Receives', value: ZAKAT_FITR.who_receives },
                  { label: 'When to Pay', value: ZAKAT_FITR.when },
                ].map((item, i) => (
                  <div key={i} className="bg-forest/5 rounded-xl p-3">
                    <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-1">{item.label}</p>
                    <p className="text-forest/70 text-sm leading-relaxed">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Eid al-Fitr ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Eid al-Fitr: The Celebration of Breaking the Fast
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            عيد الفطر
          </p>
          <div className="bg-gold/10 border border-gold/25 rounded-xl p-5 mb-5">
            <ArabicText text="اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إِلَهَ إِلَّا اللَّهُ اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْد" size="md" />
            <p className="text-forest/60 italic text-xs mt-2 text-center">The Eid Takbir, recited from the night of Eid until the prayer</p>
          </div>
          <div className="space-y-2">
            {EID.map((practice, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-forest font-semibold text-xs">{i + 1}</span>
                </div>
                <p className="text-forest/70 text-sm leading-relaxed">{practice}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Spiritual Dimensions ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            The Spiritual Wisdom of Ramadan
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            الحكمة من الصيام
          </p>
          <div className="space-y-5">
            {SPIRITUAL.map((point, i) => (
              <article key={i} className="card-islamic">
                <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{point.title}</h3>
                <p className="text-forest/70 text-sm leading-relaxed">{point.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Closing ── */}
        <section className="card-islamic bg-forest/5 text-center">
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            إِذَا دَخَلَ رَمَضَانُ فُتِّحَتْ أَبْوَابُ الْجَنَّةِ وَغُلِّقَتْ أَبْوَابُ جَهَنَّمَ وَسُلْسِلَتِ الشَّيَاطِينُ
          </p>
          <p className="text-forest/70 text-sm italic mb-1">
            {'"When Ramadan enters, the gates of Paradise are opened, the gates of Hell are closed, and the devils are chained."'}
          </p>
          <p className="text-forest/50 text-xs">Bukhari 1899, Muslim 1079, narrated by Abu Hurairah (ra)</p>
        </section>
      </div>
    </>
  );
}
