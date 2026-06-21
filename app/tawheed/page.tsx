import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Tawheed: Islamic Monotheism',
  description: 'A comprehensive guide to Tawheed: the three categories of divine oneness, the shahada and its meaning, the danger of shirk, and why Tawheed is the foundation of all Islam and the decisive matter on the Day of Judgement.',
};

/* ── Three Categories of Tawheed ──────────────────────────── */

const TAWHEED_CATEGORIES = [
  {
    number: 1,
    arabic: 'تَوْحِيدُ الرُّبُوبِيَّة',
    name: 'Tawheed al-Rububiyyah',
    subtitle: 'Oneness of Lordship',
    explanation: `To affirm that Allah alone is the Lord, the sole Creator, Sustainer, and Governor of all creation. He alone brings things into existence from nothing, provides sustenance, causes life and death, controls the winds and rain, and runs all affairs of the universe without a partner or helper. No angel, no prophet, no saint, and no cosmic force shares in this dominion.`,
    detail: `The polytheists of Makkah largely acknowledged this category; they knew Allah was the Creator. Quran 23:84-89 records this: when they were asked who owned the earth and the heavens, they said "Allah." Yet this acknowledgement alone did not make them Muslim, because they still directed their worship to others. This is why Tawheed al-Rububiyyah is a necessary but not sufficient condition for Islam. The Prophet ﷺ was not sent primarily to establish this; it was already accepted. He was sent to establish the next category.`,
    verses: [
      {
        ref: 'Quran 2:255 (Ayat al-Kursi)',
        arabic: 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ',
        transliteration: "Allahu la ilaha illa huwal-hayyul-qayyum",
        meaning: 'Allah, there is no deity except Him, the Ever-Living, the Sustainer of existence.',
      },
      {
        ref: 'Quran 39:62',
        arabic: 'اللَّهُ خَالِقُ كُلِّ شَيْءٍ وَهُوَ عَلَى كُلِّ شَيْءٍ وَكِيلٌ',
        transliteration: "Allahu khaliqo kulli shay'in wa huwa 'ala kulli shay'in wakil",
        meaning: 'Allah is the Creator of all things, and He is the Guardian over all things.',
      },
    ],
  },
  {
    number: 2,
    arabic: 'تَوْحِيدُ الْأُلُوهِيَّة',
    name: 'Tawheed al-Uluhiyyah',
    subtitle: 'Oneness of Worship',
    explanation: `To single out Allah alone with all acts of worship. This is the most important of the three categories and the very message of every prophet sent to mankind. Every act of worship (prayer, supplication, sacrifice, vows, fear, hope, love, trust) must be directed to Allah alone, without directing any of it to anyone or anything else.`,
    detail: `This is what La ilaha illallah establishes. The word "ilah" does not simply mean "creator"; it means "the one who is worshipped." So La ilaha illallah means: there is no one truly deserving of worship except Allah. Every prophet, from Nuh to Ibrahim to Musa to Isa to the Prophet Muhammad ﷺ, came with this single message. Quran 21:25 confirms: "We sent no messenger before you except that We revealed to him: there is no deity except Me, so worship Me." The dispute between the prophets and their peoples was always about this: not about who created the heavens, but about who alone deserves to be worshipped.`,
    verses: [
      {
        ref: 'Quran 21:25',
        arabic: 'وَمَا أَرْسَلْنَا مِن قَبْلِكَ مِن رَّسُولٍ إِلَّا نُوحِي إِلَيْهِ أَنَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدُونِ',
        transliteration: "Wa ma arsalna min qablika min rasulin illa nuhee ilayhi annahu la ilaha illa ana fa'budun",
        meaning: 'We sent no messenger before you except that We revealed to him: there is no deity except Me, so worship Me.',
      },
      {
        ref: 'Quran 17:23',
        arabic: 'وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ',
        transliteration: "Wa qada rabbuka alla ta'budu illa iyyah",
        meaning: 'Your Lord has decreed that you worship none but Him.',
      },
    ],
  },
  {
    number: 3,
    arabic: 'تَوْحِيدُ الْأَسْمَاءِ وَالصِّفَات',
    name: "Tawheed al-Asma' wa al-Sifat",
    subtitle: 'Oneness of Names and Attributes',
    explanation: `To affirm for Allah all the names and attributes that He has affirmed for Himself in the Quran, or that the Prophet ﷺ has affirmed in the Sunnah, in a manner befitting His majesty, avoiding four prohibited approaches: (1) Ta'til: denying or negating the names/attributes; (2) Tahrif: distorting the meaning; (3) Tamthil/Tashbih: likening Allah's attributes to those of creation; (4) Takyif: asking "how" about them.`,
    detail: `The scholars summarise this as: we affirm what Allah has affirmed for Himself and deny what He has denied for Himself, without asking "how." For example, Allah says He has a "Hand" (Quran 38:75), He "established Himself upon the Throne" (Quran 20:5), He "descends" to the lowest heaven in the final third of the night (Bukhari), He has "eyes" (Quran 54:14), He "speaks" (Quran 4:164). We affirm all of these literally as befitting His majesty, not metaphorically (which would be Tahrif) and not by saying they are like human hands or eyes (which would be Tamthil). Quran 42:11 is the principle: "There is nothing like unto Him, and He is the All-Hearing, the All-Seeing."`,
    verses: [
      {
        ref: 'Quran 42:11',
        arabic: 'لَيْسَ كَمِثْلِهِ شَيْءٌ وَهُوَ السَّمِيعُ الْبَصِيرُ',
        transliteration: "Laysa kamithlihi shay'un wa huwas-sami'ul-basir",
        meaning: 'There is nothing like unto Him, and He is the All-Hearing, the All-Seeing.',
      },
      {
        ref: 'Quran 7:180',
        arabic: 'وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَى فَادْعُوهُ بِهَا',
        transliteration: "Wa lillahil-asma'ul-husna fad'uhu biha",
        meaning: 'Allah has the most beautiful names, so call upon Him by them.',
      },
    ],
  },
];

/* ── The Shahada ──────────────────────────────────────────── */

const SHAHADA = {
  arabic: 'أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ',
  transliteration: "Ashhadu alla ilaha illallahu wa ashhadu anna Muhammadan rasulullah",
  meaning: "I bear witness that there is no deity worthy of worship except Allah, and I bear witness that Muhammad is the Messenger of Allah.",
  conditions: [
    { name: "Knowledge (al-'Ilm)", desc: "Knowing the meaning of La ilaha illallah: knowing what is being affirmed and what is being negated, not merely saying the words." },
    { name: "Certainty (al-Yaqin)", desc: "Having no doubt in one's heart about what is testified. Doubt negates the shahada." },
    { name: "Sincerity (al-Ikhlas)", desc: "Saying it purely for Allah's sake, not for worldly benefit or showing off." },
    { name: "Truthfulness (al-Sidq)", desc: "The heart must be in agreement with what the tongue says. The hypocrites said it with their tongues but their hearts did not accept it." },
    { name: "Love (al-Mahabbah)", desc: "Loving Allah, loving this testimony, and loving its implications. One who hates the shahada whilst saying it is not a believer." },
    { name: "Submission (al-Inqiyad)", desc: "Submitting to what it requires: acts of worship directed to Allah alone, following the Prophet ﷺ." },
    { name: "Acceptance (al-Qabul)", desc: "Accepting it fully with the heart and acting upon it, rather than rejecting it out of arrogance as the Quraysh did." },
  ],
};

/* ── Key Quran Verses on Tawheed ─────────────────────────── */

const KEY_VERSES = [
  {
    ref: 'Quran 2:163',
    arabic: 'وَإِلَٰهُكُمْ إِلَٰهٌ وَاحِدٌ لَّا إِلَٰهَ إِلَّا هُوَ الرَّحْمَٰنُ الرَّحِيمُ',
    transliteration: "Wa ilahukum ilahun wahid, la ilaha illa huwar-rahmanur-rahim",
    meaning: 'Your God is one God. There is no deity worthy of worship except Him, the Most Compassionate, the Most Merciful.',
  },
  {
    ref: 'Quran 112:1-4 (Surah al-Ikhlas)',
    arabic: 'قُلْ هُوَ اللَّهُ أَحَدٌ ۝ اللَّهُ الصَّمَدُ ۝ لَمْ يَلِدْ وَلَمْ يُولَدْ ۝ وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ',
    transliteration: "Qul huwallahu ahad. Allahus-samad. Lam yalid wa lam yulad. Wa lam yakun lahu kufuwan ahad.",
    meaning: 'Say: He is Allah, the One. Allah, the Eternal Refuge. He neither begets nor was begotten. And there is none comparable to Him.',
    note: 'The Prophet ﷺ said this surah is equal in reward to one-third of the Quran. (Bukhari 5013). It negates every false concept about Allah: having a son or daughter (as attributed by some), being born (as the Persians said of Ahura Mazda), or having any equal.',
  },
  {
    ref: 'Quran 59:22-24',
    arabic: 'هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ هُوَ الرَّحْمَٰنُ الرَّحِيمُ ۝ هُوَ اللَّهُ الَّذِي لَا إِلَٰهَ إِلَّا هُوَ الْمَلِكُ الْقُدُّوسُ السَّلَامُ الْمُؤْمِنُ الْمُهَيْمِنُ الْعَزِيزُ الْجَبَّارُ الْمُتَكَبِّرُ سُبْحَانَ اللَّهِ عَمَّا يُشْرِكُونَ ۝ هُوَ اللَّهُ الْخَالِقُ الْبَارِئُ الْمُصَوِّرُ لَهُ الْأَسْمَاءُ الْحُسْنَى يُسَبِّحُ لَهُ مَا فِي السَّمَاوَاتِ وَالْأَرْضِ وَهُوَ الْعَزِيزُ الْحَكِيمُ',
    transliteration: "Huwallahul-ladhi la ilaha illa huw, 'alimul-ghaybi wash-shahadah, huwar-rahmanur-rahim. Huwallahul-ladhi la ilaha illa huw, al-malikul-quddussus-salamu al-mu'minul-muhayminal-'azizul-jabbaril-mutakabbir, subhanallahi 'amma yushrikun. Huwallahul-khaliqul-bari'ul-musawwir, lahul-asma'ul-husna, yusabbihu lahu ma fis-samawati wal-ard, wa huwal-'azizul-hakim.",
    meaning: 'He is Allah, other than whom there is no deity, Knower of the unseen and the witnessed. He is the Most Compassionate, the Most Merciful. He is Allah, other than whom there is no deity, the Sovereign, the Pure, the Perfection, the Bestower of Faith, the Overseer, the Exalted in Might, the Compeller, the Superior; exalted is Allah above whatever they associate with Him. He is Allah, the Creator, the Originator, the Fashioner. To Him belong the most beautiful names. Whatever is in the heavens and earth exalts Him. And He is the Exalted in Might, the Wise.',
  },
];

/* ── Shirk ────────────────────────────────────────────────── */

const SHIRK = {
  definition: 'Shirk means associating partners with Allah: directing to anything other than Allah any act of worship, love, fear, or hope that is due to Allah alone. It is the only sin Allah has declared He will not forgive if one dies upon it.',
  verse: {
    ref: 'Quran 4:48',
    arabic: 'إِنَّ اللَّهَ لَا يَغْفِرُ أَن يُشْرَكَ بِهِ وَيَغْفِرُ مَا دُونَ ذَٰلِكَ لِمَن يَشَاءُ',
    transliteration: "Innallaha la yaghfiru an yushraka bihi wa yaghfiru ma duna dhalika liman yasha'",
    meaning: 'Indeed, Allah does not forgive association with Him, but He forgives what is less than that for whom He wills.',
  },
  major: {
    title: 'Major Shirk (al-Shirk al-Akbar)',
    desc: 'Directing an act of worship to other than Allah, such as prostrating to an idol, sacrificing an animal in the name of other than Allah, supplicating to the dead or to saints, calling upon anyone other than Allah for what only Allah can provide. This expels one from Islam entirely if one does not repent.',
    examples: [
      'Worshipping idols, statues, or natural phenomena',
      'Supplicating to the dead, saints, or prophets for intercession as a form of worship',
      'Sacrificing in the name of other than Allah',
      'Swearing oaths by other than Allah with the intention of reverence',
      'Attributing divine knowledge of the unseen to fortune-tellers or astrologers',
    ],
  },
  minor: {
    title: 'Minor Shirk (al-Shirk al-Asghar)',
    desc: 'Acts that the Prophet ﷺ named "shirk" but which do not exit one from Islam; they are still severely warned against. The most dangerous of these is riya (showing off in acts of worship). The Prophet ﷺ called it "the most feared thing" he feared for his companions.',
    examples: [
      "Riya': performing acts of worship to be seen by people",
      'Saying "by Allah and by so-and-so"',
      "Sum'ah: doing deeds to be heard about by others",
      'Wearing amulets or charms, believing they independently cause benefit or harm',
    ],
  },
};

/* ── Why Tawheed is the Foundation ──────────────────────── */

const FOUNDATION_POINTS = [
  {
    title: 'The First Question in the Grave',
    text: `When a person dies and is placed in the grave, two angels come, called Munkar and Nakir. They ask three questions. The first is: "Who is your Lord?" The one who lived by Tawheed answers: "My Lord is Allah." They ask: "What is your religion?" He answers: "Islam." They ask: "Who is this man who was sent among you?" He answers: "He is the Messenger of Allah, Muhammad ﷺ." His grave is then expanded and filled with light. The one who did not believe cannot answer. (Reported by Ahmad, Abu Dawud, Tirmidhi: authentic chain).`,
  },
  {
    title: 'The Decisive Matter on the Day of Judgement',
    text: `On the Day of Judgement, the first thing that will be examined is one's prayer, which is the practical expression of Tawheed. The Quran says (Quran 39:65): "If you associate partners with Allah, your deeds will surely be nullified." Every good deed (prayer, fasting, charity, pilgrimage, kindness) is nullified by shirk. Tawheed is therefore not one topic among many in Islam; it is the very soil in which every other deed must be planted for it to bear fruit.`,
  },
  {
    title: 'The Mission of Every Prophet',
    text: `Allah sent 124,000 prophets and 315 messengers to humanity, according to hadith (Ahmad, Ibn Hibban). Of these, 25 are specifically named in the Quran: Adam, Idris, Nuh, Hud, Saleh, Ibrahim, Lut, Isma'il, Ishaq, Ya'qub, Yusuf, Shu'ayb, Ayyub, Musa, Harun, Dhul-Kifl, Dawud, Sulayman, Ilyas, Al-Yasa', Yunus, Zakariyya, Yahya, Isa, and Muhammad (peace be upon them all). Every single one of them began their mission with the call to Tawheed. The message of every prophet was identical at its root: "O my people, worship Allah: you have no deity other than Him." (Quran 7:59, 7:65, 7:73, 7:85, and others).`,
  },
  {
    title: 'La ilaha illallah: The Greatest Statement',
    text: `The Prophet ﷺ said: "The best dhikr is La ilaha illallah, and the best supplication is Alhamdulillah." (Tirmidhi 3383). He also said: "Whoever's last words are La ilaha illallah will enter Paradise." (Abu Dawud 3116). The companions understood this as the summit of all knowledge: not merely a phrase to be memorised, but a living reality to be understood in depth, acted upon in every choice, and to die upon.`,
  },
];

export default function TawheedPage() {
  return (
    <>
      <PageHeader
        title="Tawheed: Divine Oneness"
        arabicTitle="التَّوْحِيد"
        subtitle="Tawheed is the cornerstone of Islam: the first message of every prophet, the first question in the grave, and the decisive matter on the Day of Judgement. Understanding it deeply is an obligation upon every Muslim."
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* ── What is Tawheed ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            What is Tawheed?
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            معنى التوحيد
          </p>
          <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5 mb-6">
            <p className="text-forest/80 text-sm leading-relaxed">
              Tawheed is the Arabic word meaning "unification" or "making one." In Islamic theology it refers to affirming the absolute oneness of Allah in every aspect: His Lordship over creation, His exclusive right to be worshipped, and His unique names and attributes. The scholars of Islam divided Tawheed into three inseparable categories; not because these are three separate gods, but because these are three dimensions of the same truth that must all be affirmed.
            </p>
          </div>
        </section>

        {/* ── Three Categories ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            The Three Categories of Tawheed
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-8" aria-hidden="true">
            أقسام التوحيد الثلاثة
          </p>
          <div className="space-y-8">
            {TAWHEED_CATEGORIES.map(cat => (
              <article key={cat.number} className="card-islamic">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center flex-shrink-0 ring-2 ring-gold/30">
                    <span className="text-gold font-semibold text-sm">{cat.number}</span>
                  </div>
                  <div>
                    <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-0.5" aria-hidden="true">
                      {cat.arabic}
                    </p>
                    <h3 className="font-garamond text-xl font-semibold text-forest">{cat.name}</h3>
                    <p className="text-gold/80 text-sm font-medium">{cat.subtitle}</p>
                  </div>
                </div>
                <p className="text-forest/75 text-sm leading-relaxed mb-3">{cat.explanation}</p>
                <p className="text-forest/60 text-sm leading-relaxed mb-5">{cat.detail}</p>
                <div className="space-y-4">
                  {cat.verses.map((v, i) => (
                    <div key={i} className="bg-forest/5 rounded-xl p-4">
                      <span className="badge-gold text-xs mb-3 inline-block">{v.ref}</span>
                      <ArabicText text={v.arabic} size="md" />
                      <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
                        <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">Transliteration</p>
                        <p className="text-forest/60 italic text-sm">{v.transliteration}</p>
                        <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">Meaning</p>
                        <p className="text-forest/70 text-sm">{v.meaning}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── The Shahada ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            The Shahada and Its Conditions
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            الشهادة وشروطها
          </p>
          <div className="card-islamic mb-6">
            <ArabicText text={SHAHADA.arabic} size="lg" />
            <div className="border-t border-gold/10 pt-4 mt-4 space-y-2">
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">Transliteration</p>
              <p className="text-forest/60 italic text-sm">{SHAHADA.transliteration}</p>
              <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-3">Meaning</p>
              <p className="text-forest/75 text-sm leading-relaxed">{SHAHADA.meaning}</p>
            </div>
          </div>
          <p className="text-forest/60 text-sm mb-5">
            The scholars identified seven conditions for the shahada to be valid. Merely pronouncing the words without meeting these conditions does not make one a true believer:
          </p>
          <div className="space-y-3">
            {SHAHADA.conditions.map((cond, i) => (
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
        </section>

        {/* ── Key Verses ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Key Quranic Verses on Tawheed
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            آيات التوحيد
          </p>
          <div className="space-y-5">
            {KEY_VERSES.map((v, i) => (
              <article key={i} className="card-islamic">
                <span className="badge-gold text-xs mb-4 inline-block">{v.ref}</span>
                <ArabicText text={v.arabic} size="md" />
                <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
                  <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">Transliteration</p>
                  <p className="text-forest/60 italic text-sm">{v.transliteration}</p>
                  <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">Meaning</p>
                  <p className="text-forest/70 text-sm">{v.meaning}</p>
                  {'note' in v && v.note && (
                    <p className="text-xs text-gold/55 italic mt-2 leading-relaxed">{v.note}</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Shirk ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Shirk: Associating Partners with Allah
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            الشِّرْك وأقسامه
          </p>
          <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed mb-4">{SHIRK.definition}</p>
            <div className="bg-gold/10 border border-gold/25 rounded-xl p-4">
              <span className="badge-gold text-xs mb-3 inline-block">{SHIRK.verse.ref}</span>
              <ArabicText text={SHIRK.verse.arabic} size="md" />
              <div className="border-t border-gold/10 pt-3 mt-3 space-y-1">
                <p className="text-forest/60 italic text-sm">{SHIRK.verse.transliteration}</p>
                <p className="text-forest/70 text-sm">{SHIRK.verse.meaning}</p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="card-islamic border-l-4 border-red-700/40">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{SHIRK.major.title}</h3>
              <p className="text-forest/70 text-sm leading-relaxed mb-3">{SHIRK.major.desc}</p>
              <ul className="space-y-1.5">
                {SHIRK.major.examples.map((ex, i) => (
                  <li key={i} className="text-forest/60 text-xs flex gap-2">
                    <span className="text-gold flex-shrink-0">&#x2022;</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-islamic border-l-4 border-amber-600/40">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{SHIRK.minor.title}</h3>
              <p className="text-forest/70 text-sm leading-relaxed mb-3">{SHIRK.minor.desc}</p>
              <ul className="space-y-1.5">
                {SHIRK.minor.examples.map((ex, i) => (
                  <li key={i} className="text-forest/60 text-xs flex gap-2">
                    <span className="text-gold flex-shrink-0">&#x2022;</span>
                    <span>{ex}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Why Tawheed is the Foundation ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            Why Tawheed is the Foundation
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            أهمية التوحيد
          </p>
          <div className="space-y-5">
            {FOUNDATION_POINTS.map((point, i) => (
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
            فَاعْلَمْ أَنَّهُ لَا إِلَٰهَ إِلَّا اللَّهُ
          </p>
          <p className="text-forest/70 text-sm italic mb-1">
            "So know that there is no deity except Allah." (Quran 47:19)
          </p>
          <p className="text-forest/50 text-xs">
            This verse commands knowledge of Tawheed before deeds: it is the foundation upon which everything else is built.
          </p>
        </section>
      </div>
    </>
  );
}
