import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';

export const metadata: Metadata = {
  title: 'How to Pray',
  description: 'A step-by-step guide to performing the Islamic prayer (Salah) with Arabic recitations, transliterations, and the wisdom behind each act.',
};

const PRAYER_STEPS = [
  {
    step: 1,
    title: 'Purification (Wudu)',
    arabicTitle: 'الوضوء',
    description:
      'Before prayer, one must be in a state of ritual purity. Perform wudu: wash the hands three times, rinse the mouth and nose, wash the face, wash the arms to the elbows, wipe over the head and ears, and wash the feet to the ankles.',
    arabic: 'نَوَيْتُ الوُضُوءَ لِرَفْعِ الحَدَثِ وَاسْتِبَاحَةِ الصَّلاةِ',
    transliteration: "Nawaytu al-wudu li-raf' al-hadathi was-tibahati al-salah",
    meaning: 'I intend wudu to lift the state of ritual impurity and to permit prayer.',
  },
  {
    step: 2,
    title: 'Facing the Qibla',
    arabicTitle: 'استقبال القبلة',
    description:
      "Stand facing the Qibla — the direction of the Ka'bah in Makkah, Saudi Arabia. Your prayer is invalid if you deliberately face the wrong direction. Stand upright, feet shoulder-width apart, with full attentiveness.",
    arabic: null,
    transliteration: null,
    meaning: null,
  },
  {
    step: 3,
    title: 'Intention (Niyyah)',
    arabicTitle: 'النية',
    description:
      "Make the intention in your heart for the specific prayer you are about to perform. The intention does not need to be spoken aloud, though some scholars permit it. For example, for Fajr prayer you intend 'I pray two units of the Fajr prayer for Allah.'",
    arabic: null,
    transliteration: null,
    meaning: null,
  },
  {
    step: 4,
    title: 'Opening Takbir (Takbirat al-Ihram)',
    arabicTitle: 'تكبيرة الإحرام',
    description:
      'Raise both hands to the level of the earlobes (men) or shoulders (women), palms facing forward, and say the opening takbir. This marks the formal beginning of the prayer. Once spoken, the prayer has begun.',
    arabic: 'اللَّهُ أَكْبَرُ',
    transliteration: 'Allahu Akbar',
    meaning: 'Allah is greater (than everything).',
  },
  {
    step: 5,
    title: 'Opening Supplication (Du\'a al-Istiftah)',
    arabicTitle: 'دعاء الاستفتاح',
    description:
      'After the opening takbir, recite the opening supplication silently. Place the right hand over the left hand on the chest.',
    arabic: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ',
    transliteration: "Subhanakal-lahumma wa bihamdika wa tabarakas-muka wa ta'ala jadduka wa la ilaha ghairuk",
    meaning: 'Glory be to You, O Allah, and praise be to You, and blessed is Your name, and exalted is Your majesty, and there is no god but You.',
  },
  {
    step: 6,
    title: "Reciting Surah al-Fatihah",
    arabicTitle: "قراءة سورة الفاتحة",
    description:
      "Recite Ta'awwudh ('A'udhu billahi min al-shaytan al-rajim') and Bismillah, then recite Surah al-Fatihah. This is a pillar of every unit of prayer — prayer without it is invalid. After finishing, say 'Amin' aloud (in congregational prayer) or quietly.",
    arabic: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ ۝ الرَّحْمَٰنِ الرَّحِيمِ ۝ مَالِكِ يَوْمِ الدِّينِ ۝ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ۝ اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ ۝ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ',
    transliteration: "Al-hamdu lillahi rabb il-'alamin. Ar-Rahman ir-Rahim. Maliki yawm id-din. Iyyaka na'budu wa iyyaka nasta'in. Ihdinas-siratal-mustaqim. Siratal-ladhina an'amta 'alayhim, ghayril-maghdubi 'alayhim wa lad-dallin.",
    meaning: 'All praise is for Allah, Lord of all worlds. The Most Compassionate, the Most Merciful. Master of the Day of Judgement. You alone we worship and You alone we ask for help. Guide us along the straight path — the path of those You have blessed, not those You are displeased with, or those who are astray.',
  },
  {
    step: 7,
    title: 'Bowing (Ruku\')',
    arabicTitle: "الركوع",
    description:
      'Bow forward, placing both hands firmly on the knees with the back parallel to the ground and the head level with the back. Recite the following at least three times.',
    arabic: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
    transliteration: "Subhana Rabbiy al-'Azim",
    meaning: 'Glory be to my Lord, the Most Great.',
  },
  {
    step: 8,
    title: 'Rising from Ruku\'',
    arabicTitle: "الرفع من الركوع",
    description:
      'Rise from bowing, standing fully upright, and recite:',
    arabic: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ ۝ رَبَّنَا وَلَكَ الْحَمْدُ',
    transliteration: "Sami'allahu liman hamidah. Rabbana wa lakal-hamd.",
    meaning: 'Allah hears whoever praises Him. Our Lord, and to You is all praise.',
  },
  {
    step: 9,
    title: 'Prostration (Sujud)',
    arabicTitle: "السجود",
    description:
      'Go down into prostration with seven parts touching the ground: the forehead (including the nose), both palms, both knees, and the bottoms of both feet. The forehead must touch the ground unobstructed. Recite at least three times:',
    arabic: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
    transliteration: "Subhana Rabbiy al-A'la",
    meaning: 'Glory be to my Lord, the Most High.',
  },
  {
    step: 10,
    title: 'Sitting between the Two Prostrations',
    arabicTitle: "الجلسة بين السجدتين",
    description:
      'Rise from prostration and sit briefly, then return to prostration for the second time. During this sitting recite:',
    arabic: 'رَبِّ اغْفِرْ لِي',
    transliteration: "Rabbighfir li",
    meaning: 'O Lord, forgive me.',
  },
  {
    step: 11,
    title: 'Tashahhud (Testimony of Faith in Prayer)',
    arabicTitle: "التشهد",
    description:
      'After the second unit (and in the final sitting), recite the Tashahhud:',
    arabic: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    transliteration: "At-tahiyyatu lillahi was-salawatu wat-tayyibat. As-salamu 'alayka ayyuhan-nabiyyu wa rahmatullahi wa barakatuh. As-salamu 'alayna wa 'ala 'ibadillahis-salihin. Ashhadu alla ilaha illallah wa ashhadu anna Muhammadan 'abduhu wa rasuluh.",
    meaning: 'All greetings, prayers, and good things are for Allah. Peace be upon you, O Prophet, and the mercy and blessings of Allah. Peace be upon us and upon the righteous servants of Allah. I bear witness that there is no god but Allah, and I bear witness that Muhammad is His servant and messenger.',
  },
  {
    step: 12,
    title: "Salawat (Blessings on the Prophet ﷺ)",
    arabicTitle: "الصلاة الإبراهيمية",
    description:
      'After the Tashahhud in the final sitting, recite the Ibrahimiyyah prayer:',
    arabic: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ',
    transliteration: "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad, kama sallayta 'ala Ibrahima wa 'ala ali Ibrahim. Innaka Hamidun Majid.",
    meaning: 'O Allah, send blessings upon Muhammad and upon the family of Muhammad, as You sent blessings upon Ibrahim and upon the family of Ibrahim. You are Praiseworthy, Glorious.',
  },
  {
    step: 13,
    title: 'The Closing Salutation (Taslim)',
    arabicTitle: "التسليم",
    description:
      'Turn the head to the right and say the salutation, then turn to the left and repeat it. This formally concludes the prayer.',
    arabic: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
    transliteration: "As-salamu 'alaykum wa rahmatullah",
    meaning: 'Peace be upon you and the mercy of Allah.',
  },
];

const PRAYER_TIMES = [
  { name: 'Fajr', arabicName: 'الفجر', time: 'Dawn — before sunrise', units: 2 },
  { name: 'Dhuhr', arabicName: 'الظهر', time: 'After midday sun begins to decline', units: 4 },
  { name: 'Asr', arabicName: 'العصر', time: 'Afternoon — before sunset', units: 4 },
  { name: 'Maghrib', arabicName: 'المغرب', time: 'After sunset', units: 3 },
  { name: 'Isha', arabicName: 'العشاء', time: 'Night — after twilight disappears', units: 4 },
];

export default function PrayerPage() {
  return (
    <>
      <PageHeader
        title="How to Pray"
        arabicTitle="كيف تصلي"
        subtitle="Salah — the ritual prayer — is the second pillar of Islam and the most fundamental act of worship. It is performed five times daily."
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-14">
        {/* Five prayers */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-6">
            The Five Daily Prayers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {PRAYER_TIMES.map(prayer => (
              <div key={prayer.name} className="card-islamic text-center">
                <p
                  dir="rtl"
                  lang="ar"
                  className="arabic text-gold mb-1"
                  aria-hidden="true"
                >
                  {prayer.arabicName}
                </p>
                <h3 className="font-garamond text-lg font-semibold text-forest">{prayer.name}</h3>
                <p className="text-forest/50 text-xs mt-1 mb-2">{prayer.time}</p>
                <span className="badge-gold text-xs">{prayer.units} units</span>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-8">
            Steps of the Prayer
          </h2>
          <div className="space-y-6">
            {PRAYER_STEPS.map(step => (
              <article key={step.step} className="card-islamic flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center flex-shrink-0 ring-2 ring-gold/30">
                    <span className="text-gold font-semibold text-sm">{step.step}</span>
                  </div>
                  <div>
                    <p
                      dir="rtl"
                      lang="ar"
                      className="arabic-sm text-gold/70 mb-0.5"
                      aria-hidden="true"
                    >
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
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
