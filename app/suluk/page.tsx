import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Suluk: The Islamic Spiritual Path',
  description: 'The path of purifying the soul and drawing closer to Allah: the three levels of the deen, diseases of the heart and their cures, the virtues of dhikr, key spiritual practices, and the conditions of sincere repentance.',
};

/* ── What is Suluk ────────────────────────────────────────── */

const SULUK_INTRO = `Suluk (السُّلُوك) means "the path" or "the journey": specifically, the journey of the soul towards Allah. It encompasses the science of purifying the inner self from spiritual diseases, cultivating noble character, and attaining nearness to Allah through sincere worship. This inner dimension of Islam has been the concern of every sincere scholar and worshipper throughout Islamic history, from the companions of the Prophet ﷺ to the great imams of the four schools.

The foundation of Suluk is not feelings or spiritual experiences: it is correct knowledge of Allah, sincere intention, and faithful adherence to the Sunnah. The greatest of the Sufis (Imam al-Junaid, Imam al-Ghazali, Ibn al-Qayyim al-Jawziyyah) were deeply grounded in the Quran and Sunnah. Suluk without Shari'ah is misguidance; Shari'ah without its inner dimension is hollow.`;

/* ── Tazkiyah al-Nafs ──────────────────────────────────────── */

const TAZKIYAH = {
  arabic: 'تَزْكِيَة النَّفْس',
  verse: {
    ref: 'Quran 91:9-10',
    arabic: 'قَدْ أَفْلَحَ مَن زَكَّاهَا ۝ وَقَدْ خَابَ مَن دَسَّاهَا',
    transliteration: "Qad aflaha man zakkaha. Wa qad khaba man dassaha.",
    meaning: 'He has succeeded who purifies it (the soul), and he has failed who instils it with corruption.',
  },
  explanation: `Allah swore eleven consecutive oaths in Surah al-Shams before these two verses (more oaths than in any other passage of the Quran) to emphasise the gravity of this truth. The entire purpose of worship, fasting, prayer, charity, and striving in Allah's path is ultimately to purify the soul. Allah says in Quran 62:2 that the Prophet ﷺ was sent to "purify" the believers (yuzakkihim) alongside teaching them. Tazkiyah is therefore not an optional supplement to Islam; it is one of the Prophet's four primary missions.`,
  levels: [
    { name: 'Al-Nafs al-Ammarah bil-Su\'', arabic: 'النفس الأمارة بالسوء', desc: 'The soul that persistently commands one to do evil. The default state before spiritual effort. (Quran 12:53)' },
    { name: 'Al-Nafs al-Lawwamah', arabic: 'النفس اللوامة', desc: 'The self-reproaching soul; it sins but then reproaches itself and feels regret. This is the state of the sincere believer who struggles. (Quran 75:2)' },
    { name: "Al-Nafs al-Mutma'innah", arabic: 'النفس المطمئنة', desc: "The soul at peace: tranquil, content with Allah's decree, and invited to enter Paradise. The goal of Suluk. (Quran 89:27-28)" },
  ],
};

/* ── Three Levels of the Deen ─────────────────────────────── */

const THREE_LEVELS = {
  hadith_intro: `The most comprehensive hadith about the structure of the Islamic religion is the Hadith of Jibril, narrated by Umar ibn al-Khattab (ra) in Sahih Muslim 8. A man with pure white garments and jet-black hair sat before the Prophet ﷺ, placing his knees against the Prophet's knees and his palms on his thighs, and asked three questions. The Prophet ﷺ later said: "That was Jibril; he came to teach you your religion."`,
  levels: [
    {
      arabic: 'الإِسْلام',
      name: 'Islam',
      subtitle: 'Submission',
      question: '"Tell me about Islam."',
      answer: '"Islam is to testify that there is no deity but Allah and that Muhammad is the Messenger of Allah, to establish the prayer, to pay Zakah, to fast Ramadan, and to perform Hajj to the House if you are able."',
      explanation: 'Islam is the outer dimension: the five pillars that are observable actions of the body. It is the entry point and the framework of the religion.',
    },
    {
      arabic: 'الإِيمَان',
      name: 'Iman',
      subtitle: 'Faith',
      question: '"Tell me about Iman."',
      answer: '"Iman is to believe in Allah, His angels, His books, His messengers, the Last Day, and to believe in divine decree, its good and its evil."',
      explanation: 'Iman is the inner dimension of belief: what the heart holds as true. It encompasses the six pillars of faith and increases with good deeds and decreases with sins (according to Ahl al-Sunnah).',
    },
    {
      arabic: 'الإِحْسَان',
      name: 'Ihsan',
      subtitle: 'Excellence / Spiritual Perfection',
      question: '"Tell me about Ihsan."',
      answer: '"Ihsan is to worship Allah as if you see Him; for even if you do not see Him, He sees you."',
      explanation: "Ihsan is the spiritual summit: the inner quality that transforms external worship into a living encounter with Allah. It is the domain of Suluk: to bring one's heart into the presence of Allah in every act of worship. Imam Ibn al-Qayyim said: \"All of Ihsan returns to two principles: sincerity to Allah and following the Prophet ﷺ.\"",
    },
  ],
};

/* ── Diseases of the Heart ────────────────────────────────── */

const HEART_DISEASES = [
  {
    arabic: 'الكِبْر',
    name: 'Kibr (Arrogance)',
    definition: `Kibr is defined by the Prophet ﷺ precisely: "Kibr is to reject the truth and look down on people." (Muslim 91). It is not feeling good about oneself (that is normal) but refusing to submit to truth when it opposes one's desire, and treating other people as lesser than oneself.`,
    danger: `The Prophet ﷺ said: "Whoever has in his heart even a mustard seed's weight of arrogance will not enter Paradise." (Muslim 91). Iblis (Satan) was destroyed by kibr; he knew the truth (Allah's command to prostrate) but refused because of self-admiration and a sense of superiority over Adam (as).`,
    cure: `Study the knowledge of Allah's greatness until all other greatness shrinks. Remember that one's body came from clay and returns to it. The Prophet ﷺ said: "Whosoever humbles himself for Allah's sake, Allah will elevate him." Seek the company of the poor and the humble, perform acts that require lowering the ego, and make frequent istighfar.`,
  },
  {
    arabic: 'الحَسَد',
    name: 'Hasad (Envy)',
    definition: `Hasad is to wish for the removal of a blessing from another, to want them to lose what they have. It differs from Ghibtah (غِبطة), which is to wish that one had the same blessing without wishing its removal from the other person. Ghibtah is permissible and even praiseworthy in the matters of religion.`,
    danger: `The Prophet ﷺ warned: "Beware of envy; for envy consumes good deeds as fire consumes dry wood." (Abu Dawud 4903). Envy is directed against Allah's decree; it is a form of objecting to how Allah distributed His blessings. Quran 113:5 teaches us to seek refuge from "the evil of the envier when he envies."`,
    cure: `When one notices hasad in the heart towards another: (1) Make dua for that person, blessing them sincerely. (2) Remember that the blessing came from Allah, not from the person themselves. (3) Remember that one's own provision and honour are in Allah's hands and are not diminished by another's. (4) Be generous towards the person one envies; generosity softens the heart.`,
  },
  {
    arabic: 'الرِّيَاء',
    name: "Riya' (Showing Off)",
    definition: `Riya' is performing acts of worship to be seen by people, seeking their praise and approval rather than Allah's pleasure. The Prophet ﷺ called it "the minor shirk" (Ahmad 23630, authenticated). It is "minor" in the sense that it does not exit one from Islam (unlike major shirk) but it is still an enormity.`,
    danger: `On the Day of Judgement, Allah will say to those who showed off: "Go to those for whom you performed your deeds in this world and see if you find any reward with them." (Ahmad 8028). The prayer, the fast, and the charity corrupted by riya' carry no reward. The Prophet ﷺ said it was the thing he feared most for his companions.`,
    cure: `(1) Renew the intention before every act of worship. (2) Perform voluntary acts of worship in secret, such as secret charity or secret night prayer. (3) Remind yourself that the opinion of people cannot benefit or harm you in the slightest on the Day of Judgement. (4) Remember that riya' actually reverses the reward; the person gets nothing from Allah while having worked for the praise of people who also give them nothing permanent.`,
  },
  {
    arabic: 'حُبّ الدُّنْيَا',
    name: 'Hub al-Dunya (Love of This World)',
    definition: `To love this world in such a way that it distracts from the Hereafter, making this world the primary concern, the goal one strives for, and the measure by which one judges success and failure. This does not mean one cannot enjoy worldly life; rather, the heart must not be attached to it.`,
    danger: `The Prophet ﷺ said: "Love of this world is the root of every evil." (al-Bayhaqi, Ibn Abi Dunya, often cited though its chain is disputed; the meaning itself is confirmed by many other authentic hadiths). He ﷺ also said: "This world in comparison to the Hereafter is like one of you dipping his finger into the sea; let him see what it returns with." (Muslim 2858).`,
    cure: `Remember death frequently; the Prophet ﷺ said: "Remember frequently the destroyer of pleasures: death." (Tirmidhi 2307). Visit the sick and the dying. Spend time in graveyards. Give charity regularly; it detaches the heart from wealth. Reflect on the examples of the righteous who accumulated little of this world and left great legacies in the next.`,
  },
  {
    arabic: 'الغَفْلَة',
    name: 'Ghaflah (Heedlessness)',
    definition: `Ghaflah is the forgetfulness of Allah: going through hours, days, and weeks without the remembrance of Allah occupying the heart. It is the spiritual disease that underlies all other diseases: when the heart is heedless of Allah, all the other diseases rush in. The Quran repeatedly warns against ghaflah.`,
    danger: `Quran 7:179: "They have hearts by which they do not understand, eyes by which they do not see, and ears by which they do not hear. Those are like livestock; rather, they are more astray. It is they who are heedless." Heedlessness is the state of the heart that has allowed the world to crowd out Allah.`,
    cure: `The antidote to ghaflah is dhikr: the remembrance of Allah. Quran 13:28: "Verily, in the remembrance of Allah do hearts find rest." Establish a daily wird (consistent portion of dhikr). Read the Quran with reflection every day. Pray on time, with awareness. The Prophet ﷺ said the difference between the one who remembers Allah and the one who does not is like the difference between the living and the dead. (Bukhari 6407).`,
  },
];

/* ── Virtues of Dhikr ─────────────────────────────────────── */

const DHIKR = {
  verse: {
    ref: 'Quran 13:28',
    arabic: 'أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ',
    transliteration: "Ala bi-dhikrillahi tatma'innul-qulub",
    meaning: 'Verily, in the remembrance of Allah do hearts find rest.',
  },
  points: [
    "The Prophet ﷺ was asked which deed is best. He said: 'That you die while your tongue is moist with the remembrance of Allah.' (Tirmidhi 3375, authenticated by al-Albani)",
    "Dhikr is the lightest deed on the body but the heaviest on the Scale. Subhanallah wa bihamdihi: Glory be to Allah and praise be to Him, is light on the tongue, heavy on the Scale, and beloved to the Most Compassionate. (Bukhari 6406)",
    "The Prophet ﷺ said: 'Shall I not inform you of the best of your deeds, the purest in the sight of your Lord, the highest in raising your ranks, better for you than giving gold and silver in charity, and better than you meeting your enemy and striking their necks and them striking yours?' They said: 'Yes indeed.' He said: 'The remembrance of Allah, the Most High.' (Tirmidhi 3377, Ibn Majah 3790, authenticated)",
    "Allah says in Quran 2:152: 'Remember Me; I will remember you.' This is the most profound promise in the Quran regarding dhikr: that when the servant remembers Allah, Allah mentions him in the company of those with Him.",
  ],
  recommended: [
    { arabic: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ سُبْحَانَ اللَّهِ الْعَظِيمِ', transliteration: "Subhanallahi wa bihamdihi, Subhanallahil-'azim", meaning: 'Glory and praise be to Allah. Glory be to Allah the Magnificent. (Bukhari 6406, two phrases beloved to the Most Compassionate)' },
    { arabic: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ', transliteration: "Subhanallahi wal-hamdulillahi wa la ilaha illallahu wallahu akbar", meaning: 'Glory be to Allah. All praise is for Allah. There is no deity but Allah. Allah is the Greatest. (Muslim 2695; the Prophet said these four are the most beloved words to Allah)' },
    { arabic: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', transliteration: "La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa 'ala kulli shay'in qadir", meaning: 'There is no deity but Allah alone, He has no partner. His is the dominion and His is all praise, and He has power over all things. (Bukhari 6404; 100 times erases 100 sins, earns 100 good deeds, protection all day)' },
  ],
};

/* ── Key Spiritual Practices ──────────────────────────────── */

const PRACTICES = [
  {
    title: 'Regular Quran Recitation with Reflection',
    arabic: 'تلاوة القرآن وتدبره',
    text: `The Quran is the speech of Allah: the most direct means of proximity to Him. The Prophet ﷺ said: "Read the Quran; for on the Day of Resurrection it will come as an intercessor for its companions." (Muslim 804). One should have a daily wird (fixed portion) of Quran recitation that is never abandoned regardless of how small it is. Ibn Taymiyyah said: "If you want to purify your heart, occupy it with the Quran."`,
  },
  {
    title: 'Tahajjud: The Night Prayer',
    arabic: 'قيام الليل',
    text: `The night prayer (Tahajjud / Qiyam al-Layl) is the single most praised voluntary act in the Quran and Sunnah after the five obligatory prayers. Allah says (Quran 17:79): "And from the night, pray Tahajjud as an additional act of worship for you; your Lord may raise you to a praised station." The Prophet ﷺ said: "The best prayer after the obligatory prayers is the night prayer." (Muslim 1163). Two to eleven units, with long recitation and sincere supplication.`,
  },
  {
    title: 'Fasting on Mondays and Thursdays',
    arabic: 'صيام الاثنين والخميس',
    text: `The Prophet ﷺ was asked about his fasting on Mondays. He said: "That is the day I was born and the day I received revelation." (Muslim 1162). He also said: "Deeds are presented to Allah on Monday and Thursday, and I love for my deeds to be presented while I am fasting." (Tirmidhi 747, authenticated). Fasting trains the nafs, breaks the grip of desire, and brings the heart closer to Allah.`,
  },
  {
    title: 'Salawat on the Prophet ﷺ',
    arabic: 'الصلاة على النبي ﷺ',
    text: `"Indeed, Allah and His angels send blessings upon the Prophet. O you who believe, send blessings upon him and salute him with a worthy salutation." (Quran 33:56). The Prophet ﷺ said: "Whoever sends one blessing upon me, Allah sends ten blessings upon him, ten sins are erased, and he is raised ten ranks." (Muslim 408). An-Nawawi recommended saying it 300 times on Fridays. Scholars of Suluk say that love of the Prophet ﷺ is the engine of the spiritual journey.`,
  },
  {
    title: 'Dhikr Circles and Seeking Knowledge',
    arabic: 'حلق الذكر وطلب العلم',
    text: `The Prophet ﷺ said: "No people gather in a house of the houses of Allah to recite the Book of Allah and study it among themselves, except that tranquility (sakinah) descends upon them, mercy covers them, the angels surround them, and Allah mentions them to those who are with Him." (Muslim 2699). Sitting with the righteous, attending circles of knowledge and dhikr, and choosing one's companions carefully are among the most powerful tools of the spiritual path.`,
  },
];

/* ── Tawbah ───────────────────────────────────────────────── */

const TAWBAH = {
  arabic: 'التَّوْبَة',
  intro: `Tawbah (repentance) is the perpetual act of the believer: not a one-time event but a continuous state of returning to Allah. The Prophet ﷺ said: "By Allah, I seek forgiveness from Allah and repent to Him more than 70 times a day." (Bukhari 6307). If the Prophet ﷺ (who was sinless) did this, what about us?`,
  verse: {
    ref: 'Quran 66:8',
    arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا تُوبُوا إِلَى اللَّهِ تَوْبَةً نَّصُوحًا',
    transliteration: "Ya ayyuhal-ladhina amanu tubu ilallahi tawbatan nasuha",
    meaning: 'O you who believe, repent to Allah with sincere repentance.',
  },
  conditions: [
    { name: 'Cessation (al-Iqla\')', desc: 'One must stop the sin immediately. Repentance while continuing the sin is meaningless.' },
    { name: 'Remorse (al-Nadam)', desc: 'Genuine regret in the heart for having committed the sin. The Prophet ﷺ said: "Regret is itself repentance." (Ibn Majah 4252, authenticated).' },
    { name: "Resolution (al-'Azm)", desc: "A firm commitment not to return to the sin. This does not mean one will never fall again; but the intention at the moment of repentance must be genuine." },
    { name: "Restoring Others' Rights (when applicable)", desc: "If the sin involved another person's rights (money, honour, or property), those rights must be restored or forgiveness sought from that person. Repentance to Allah alone is insufficient for sins against others." },
  ],
  hadith: `The Prophet ﷺ said: "When a servant commits a sin, 70,000 angels ask forgiveness for him. When he repents, they carry his repentance upwards and it radiates like the sun. Allah turns to the repenter with the full face of His attention and causes His entire creation to seek forgiveness for him." This is narrated by scholars of hadith through various chains showing the immense mercy of Allah for the repentant.`,
  verse2: {
    ref: 'Quran 39:53',
    arabic: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَى أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ',
    transliteration: "Qul ya 'ibadiyal-ladhina asrafu 'ala anfusihim la taqnatu mir-rahmatillah, innallaha yaghfirudh-dhunuba jami'a, innahu huwal-ghafurur-rahim",
    meaning: 'Say: O My servants who have transgressed against themselves, do not despair of the mercy of Allah. Indeed, Allah forgives all sins; indeed, it is He who is the Forgiving, the Merciful.',
  },
};

export default function SulukPage() {
  return (
    <>
      <PageHeader
        title="Suluk: The Spiritual Path"
        arabicTitle="السُّلُوك"
        subtitle="The inner journey of the soul: purifying the heart from its diseases, drawing near to Allah through sincere worship, and ascending from mere outward practice to the station of Ihsan: worshipping Allah as if you see Him."
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* ── Introduction ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            What is Suluk?
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            معنى السلوك
          </p>
          <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5">
            <p className="text-forest/75 text-sm leading-relaxed whitespace-pre-line">{SULUK_INTRO}</p>
          </div>
        </section>

        {/* ── Tazkiyah ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Tazkiyah al-Nafs: Purification of the Soul
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            تزكية النفس
          </p>

          <article className="card-islamic mb-6">
            <span className="badge-gold text-xs mb-4 inline-block">{TAZKIYAH.verse.ref}</span>
            <ArabicText text={TAZKIYAH.verse.arabic} size="lg" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">Transliteration</p>
              <p className="text-forest/60 italic text-sm">{TAZKIYAH.verse.transliteration}</p>
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">Meaning</p>
              <p className="text-forest/70 text-sm">{TAZKIYAH.verse.meaning}</p>
            </div>
          </article>

          <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed">{TAZKIYAH.explanation}</p>
          </div>

          <h3 className="font-garamond text-lg font-semibold text-forest mb-4">The Three Levels of the Soul</h3>
          <div className="space-y-3">
            {TAZKIYAH.levels.map((level, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40 mt-0.5">
                  <span className="text-forest font-semibold text-xs">{i + 1}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p className="font-medium text-forest text-sm">{level.name}</p>
                    <p dir="rtl" lang="ar" className="arabic-sm text-gold/60" aria-hidden="true">{level.arabic}</p>
                  </div>
                  <p className="text-forest/60 text-xs leading-relaxed mt-0.5">{level.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Three Levels of the Deen ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            The Three Levels of the Deen: Islam, Iman, Ihsan
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            الإسلام والإيمان والإحسان
          </p>

          <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed">{THREE_LEVELS.hadith_intro}</p>
          </div>

          <div className="space-y-5">
            {THREE_LEVELS.levels.map((level, i) => (
              <article key={i} className="card-islamic">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center flex-shrink-0 ring-2 ring-gold/30">
                    <span className="text-gold font-semibold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <p dir="rtl" lang="ar" className="arabic text-gold/80" aria-hidden="true">{level.arabic}</p>
                    <h3 className="font-garamond text-xl font-semibold text-forest">{level.name}</h3>
                    <span className="text-xs text-gold/60 italic">{level.subtitle}</span>
                  </div>
                </div>
                <div className="bg-forest/5 rounded-xl p-3 mb-3">
                  <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mb-1">Question of Jibril</p>
                  <p className="text-forest/60 text-sm italic">{level.question}</p>
                  <p className="text-forest/75 text-sm mt-2">{level.answer}</p>
                </div>
                <p className="text-forest/65 text-sm leading-relaxed">{level.explanation}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Diseases of the Heart ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Diseases of the Heart and Their Cures
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            أمراض القلوب وعلاجها
          </p>
          <p className="text-forest/60 text-sm mb-8">
            The scholars of Suluk identified numerous spiritual diseases that corrupt the heart. Ibn al-Qayyim al-Jawziyyah wrote entire books on each of them. The five below are the most prevalent and most dangerous:
          </p>
          <div className="space-y-6">
            {HEART_DISEASES.map((disease, i) => (
              <article key={i} className="card-islamic">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40 mt-0.5">
                    <span className="text-forest font-semibold text-xs">{i + 1}</span>
                  </div>
                  <div>
                    <p dir="rtl" lang="ar" className="arabic-sm text-gold mb-1">
                      {disease.arabic}
                    </p>
                    <h3 className="font-garamond text-xl font-semibold text-forest">{disease.name}</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-1">Definition</p>
                    <p className="text-forest/75 text-sm leading-relaxed">{disease.definition}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-1">Danger</p>
                    <p className="text-forest/70 text-sm leading-relaxed">{disease.danger}</p>
                  </div>
                  <div className="bg-gold/10 border border-gold/20 rounded-xl p-4">
                    <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-1">Cure</p>
                    <p className="text-forest/70 text-sm leading-relaxed">{disease.cure}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Virtues of Dhikr ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            The Virtues of Dhikr: Remembrance of Allah
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            فضل الذكر
          </p>

          <article className="card-islamic mb-6">
            <span className="badge-gold text-xs mb-4 inline-block">{DHIKR.verse.ref}</span>
            <ArabicText text={DHIKR.verse.arabic} size="lg" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-forest/60 italic text-sm">{DHIKR.verse.transliteration}</p>
              <p className="text-forest/70 text-sm">{DHIKR.verse.meaning}</p>
            </div>
          </article>

          <div className="space-y-3 mb-6">
            {DHIKR.points.map((point, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-gold mt-1 flex-shrink-0">&#x2022;</span>
                <p className="text-forest/70 text-sm leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <h3 className="font-garamond text-lg font-semibold text-forest mb-4">Recommended Daily Dhikr</h3>
          <div className="space-y-4">
            {DHIKR.recommended.map((d, i) => (
              <div key={i} className="bg-forest/5 rounded-xl p-4">
                <ArabicText text={d.arabic} size="md" />
                <div className="border-t border-gold/10 pt-3 mt-3 space-y-1">
                  <p className="text-forest/60 italic text-sm">{d.transliteration}</p>
                  <p className="text-forest/65 text-xs leading-relaxed">{d.meaning}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Key Practices ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Key Practices for the Spiritual Path
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            أعمال تزكية النفس
          </p>
          <div className="space-y-5">
            {PRACTICES.map((practice, i) => (
              <article key={i} className="card-islamic">
                <div className="flex items-center gap-3 mb-3">
                  <p dir="rtl" lang="ar" className="arabic-sm text-gold/60 flex-shrink-0" aria-hidden="true">
                    {practice.arabic}
                  </p>
                  <h3 className="font-garamond text-lg font-semibold text-forest">{practice.title}</h3>
                </div>
                <p className="text-forest/70 text-sm leading-relaxed">{practice.text}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Tawbah ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Tawbah: Returning to Allah
          </h2>
          <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
            التَّوْبَة إِلَى اللَّهِ
          </p>

          <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed">{TAWBAH.intro}</p>
          </div>

          <article className="card-islamic mb-6">
            <span className="badge-gold text-xs mb-4 inline-block">{TAWBAH.verse.ref}</span>
            <ArabicText text={TAWBAH.verse.arabic} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-forest/60 italic text-sm">{TAWBAH.verse.transliteration}</p>
              <p className="text-forest/70 text-sm">{TAWBAH.verse.meaning}</p>
            </div>
          </article>

          <h3 className="font-garamond text-lg font-semibold text-forest mb-4">The Conditions of Valid Tawbah</h3>
          <div className="space-y-3 mb-6">
            {TAWBAH.conditions.map((cond, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40 mt-0.5">
                  <span className="text-forest font-semibold text-xs">{i + 1}</span>
                </div>
                <div>
                  <p className="font-medium text-forest text-sm">{cond.name}</p>
                  <p className="text-forest/60 text-xs leading-relaxed mt-0.5">{cond.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gold/10 border border-gold/25 rounded-xl p-5 mb-6">
            <p className="text-forest/70 text-sm leading-relaxed italic">{TAWBAH.hadith}</p>
          </div>

          <article className="card-islamic">
            <span className="badge-gold text-xs mb-4 inline-block">{TAWBAH.verse2.ref}</span>
            <ArabicText text={TAWBAH.verse2.arabic} size="md" />
            <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
              <p className="text-forest/60 italic text-sm">{TAWBAH.verse2.transliteration}</p>
              <p className="text-forest/70 text-sm">{TAWBAH.verse2.meaning}</p>
            </div>
          </article>
        </section>

        {/* ── Closing ── */}
        <section className="card-islamic bg-forest/5 text-center">
          <ArabicText text="إِنَّ الَّذِينَ قَالُوا رَبُّنَا اللَّهُ ثُمَّ اسْتَقَامُوا تَتَنَزَّلُ عَلَيْهِمُ الْمَلَائِكَةُ" size="md" className="mb-4" />
          <p className="text-forest/70 text-sm italic mb-1">
            {'"Indeed those who say: our Lord is Allah, then remain steadfast; the angels descend upon them."'} (Quran 41:30)
          </p>
          <p className="text-forest/50 text-xs mt-3">
            Steadfastness (Istiqamah) is the goal of Suluk: not peaks of spiritual experience, but consistent, humble, sincere adherence to the path of Allah day after day.
          </p>
        </section>
      </div>
    </>
  );
}
