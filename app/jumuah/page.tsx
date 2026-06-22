import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Jumu'ah: The Friday Prayer | Al-Hikmah",
  description:
    "Jumu'ah is the congregational Friday Prayer  –  the weekly act of collective worship that distinguishes the Muslim community. Learn its Quranic command, who it is obligatory upon, the two khutbahs, the prayer's structure, etiquettes of the day, and the blessed moments unique to Friday.",
};

const CONDITIONS_VALID = [
  {
    title: 'The Islamic settlement (misr)',
    detail: "Jumu'ah must be performed in a settlement  –  a town or city with permanent residents. It cannot be performed by travellers in the open desert, though many scholars permit it wherever forty eligible men gather.",
  },
  {
    title: 'Minimum number of worshippers',
    detail: "Scholars differ: Hanafis require three adult males besides the imam; Shafi'is and Hanbalis require forty free, adult, resident males; Malikis require twelve. The majority view is forty.",
  },
  {
    title: 'Performed at the time of Dhuhr',
    detail: "Jumu'ah is performed in the time of Dhuhr prayer, which begins when the sun passes its zenith. It cannot be performed before or after the Dhuhr window.",
  },
  {
    title: 'Preceded by two khutbahs (sermons)',
    detail: "Two sermons must precede the two-rak'ah prayer. The khutbahs include praise of Allah, salutations upon the Prophet ﷺ, advice to the congregation, and at least one verse of the Quran.",
  },
  {
    title: 'Performed in congregation',
    detail: "The prayer must be performed in congregation. An individual alone cannot perform Jumu'ah prayer; he would pray Dhuhr instead.",
  },
];

const RECOMMENDED_FRIDAY = [
  {
    act: 'Ghusl (major ablution)',
    arabic: 'الغسل',
    hadith: "The Prophet ﷺ said: 'Ghusl on Friday is obligatory upon every adult.' (Bukhari 880) Scholars classify this as a strong sunnah rather than strict obligation, but it is to be taken very seriously.",
  },
  {
    act: 'Wearing clean and best clothing',
    arabic: 'لبس أحسن الثياب',
    hadith: "The Prophet ﷺ said: 'Let him who comes to Jumu'ah take a bath.' (Bukhari 877) Wearing white clothing is particularly recommended.",
  },
  {
    act: 'Using the miswak (toothstick)',
    arabic: 'السواك',
    hadith: "The Prophet ﷺ said: 'It is better for them to use the miswak at every prayer.' (Bukhari 887) Friday carries particular emphasis.",
  },
  {
    act: 'Applying perfume',
    arabic: 'التطيب',
    hadith: "The Prophet ﷺ said: 'If anyone of you comes to Jumu'ah, he should take a bath and if he has perfume he should apply some of it.' (Bukhari 883)",
  },
  {
    act: 'Going early to the masjid',
    arabic: 'التبكير إلى المسجد',
    hadith: "The Prophet ﷺ said: 'On Fridays, the angels stand at the gate of the mosque and record those who come first, then second, then third...' (Bukhari 929, Muslim 850)",
  },
  {
    act: 'Abundant salutations on the Prophet ﷺ',
    arabic: 'الصلاة على النبي ﷺ',
    hadith: "The Prophet ﷺ said: 'Increase your salutations on me on Fridays, for it is presented before me.' (Abu Dawud 1047)",
  },
  {
    act: "Reciting Surah al-Kahf",
    arabic: 'قراءة سورة الكهف',
    hadith: "The Prophet ﷺ said: 'Whoever recites Surah al-Kahf on Jumu'ah, a light will shine for him from one Friday to the next.' (Al-Bayhaqi, graded hasan by al-Albani)",
  },
  {
    act: 'Abundant du\'a, especially in the blessed hour',
    arabic: 'الدعاء في الساعة المستجابة',
    hadith: "The Prophet ﷺ said: 'On Friday there is an hour in which no Muslim stands and prays, asking Allah for something, but Allah will grant it to him.' (Bukhari 935, Muslim 852)",
  },
];

const KHUTBAH_ELEMENTS = [
  'Praise of Allah (hamd) and declaration of His oneness',
  'Salutations upon the Prophet ﷺ (salawat)',
  'Exhortation of the congregation to taqwa (God-consciousness)',
  'Recitation of at least one verse of the Quran',
  'Supplication (du\'a) for the believers',
];

export default function JumuahPage() {
  return (
    <>
      <PageHeader
        title="Jumu'ah: The Friday Prayer"
        arabicTitle="صَلَاةُ الجُمُعَة"
        subtitle="The weekly congregational prayer that gathers the Muslim community on the blessed day of Friday"
      />

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

        {/* Quranic command */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            The Quranic Command
          </h2>
          <div className="card-forest rounded-2xl p-8 mb-6">
            <ArabicText
              text="يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا نُودِيَ لِلصَّلَاةِ مِن يَوْمِ الْجُمُعَةِ فَاسْعَوْا إِلَى ذِكْرِ اللَّهِ وَذَرُوا الْبَيْعَ ذَلِكُمْ خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ"
              size="md"
            />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">
              "O you who have believed, when [the adhan] is called for the prayer on the day of Jumu'ah [Friday], then proceed to the remembrance of Allah and leave trade. That is better for you, if you only knew." (Al-Jumu'ah 62:9)
            </p>
          </div>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">
            This verse establishes the obligatory nature of Jumu'ah prayer and the requirement to abandon all worldly activity when the adhan is called. The following verse (62:10) then permits a return to legitimate trade and business after the prayer is complete, illustrating the balance Islam strikes between the sacred and the worldly.
          </p>
          <p className="text-forest/70 leading-relaxed text-sm">
            The Prophet ﷺ said: <em>"People must cease neglecting the Friday prayer or Allah will seal their hearts and they will be among the heedless."</em> (Muslim 865) Three consecutive missed Friday prayers without valid excuse were declared by the scholars to be a grave sin.
          </p>
        </section>

        {/* Who it is obligatory upon */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            Who Is Obligated
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {[
              { label: 'Muslim', desc: 'Non-Muslims have no obligation.' },
              { label: 'Adult Male', desc: "Women, children, and the elderly are not obligated but may attend and have it count as their Dhuhr." },
              { label: 'Free (historically)', desc: 'This condition is moot today. All free adult Muslim males are obligated.' },
              { label: 'Resident', desc: "Travellers (musafirun) on a journey of more than approximately 88 km are exempt. They pray Dhuhr instead." },
              { label: 'Healthy', desc: 'The severely ill whose attending the mosque would cause harm or worsen their condition are exempt.' },
              { label: 'Unimpeded', desc: 'Those facing genuine fear for their safety, extreme weather, or other compelling circumstances (udhr) are exempt.' },
            ].map(item => (
              <div key={item.label} className="card-islamic">
                <h3 className="font-garamond text-base font-semibold text-forest mb-1">{item.label}</h3>
                <p className="text-forest/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Conditions of validity */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            Conditions for the Validity of Jumu'ah
          </h2>
          <div className="space-y-4">
            {CONDITIONS_VALID.map((c, i) => (
              <div key={c.title} className="card-islamic flex gap-4">
                <span className="w-7 h-7 rounded-full bg-gold/15 text-gold text-xs font-semibold flex items-center justify-center flex-shrink-0 mt-1">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-garamond text-base font-semibold text-forest mb-1">{c.title}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Khutbah */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            The Two Khutbahs
          </h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-5">
            Two sermons (khutbahs) are delivered from the mimbar (pulpit) before the prayer. The imam delivers the first khutbah, then sits briefly, then delivers the second. The congregation must listen in silence.
          </p>
          <div className="card-islamic mb-6">
            <h3 className="font-garamond text-lg font-semibold text-forest mb-4">Required Elements of Each Khutbah</h3>
            <ul className="space-y-2">
              {KHUTBAH_ELEMENTS.map(el => (
                <li key={el} className="flex items-start gap-2 text-sm text-forest/60">
                  <div className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                  {el}
                </li>
              ))}
            </ul>
          </div>
          <div className="gold-border-left pl-5">
            <p className="text-forest/70 text-sm leading-relaxed">
              The khutbah should be in a language the congregation understands for the advice and du'a portions, though the opening praise of Allah and the salawat must be in Arabic. Listening to the khutbah is obligatory; speaking during it  –  even to tell another to be quiet  –  is prohibited while the imam is addressing the congregation. (Bukhari 934, Muslim 851)
            </p>
          </div>
        </section>

        {/* The Prayer */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            The Jumu'ah Prayer
          </h2>
          <div className="card-islamic mb-5">
            <p className="text-forest/70 text-sm leading-relaxed mb-3">
              The prayer consists of <strong>two rak'ahs</strong> performed in congregation immediately after the two khutbahs. The imam recites aloud in both rak'ahs. The prayer replaces the Dhuhr prayer for those who attend.
            </p>
            <p className="text-forest/70 text-sm leading-relaxed mb-3">
              The Prophet ﷺ used to recite Surah al-A'la (87) in the first rak'ah and Surah al-Ghashiyah (88) in the second, or alternatively Surah al-Jumu'ah (62) in the first and Surah al-Munafiqun (63) in the second. (Muslim 877)
            </p>
            <p className="text-forest/70 text-sm leading-relaxed">
              <strong>Missed prayer:</strong> If a person arrives late and catches only the second rak'ah (i.e., the imam is already in the second rak'ah or further), the majority hold that Jumu'ah is valid and the latecomer adds the missed rak'ah. If a person arrives after the imam has completed both rak'ahs of the Jumu'ah prayer itself, he prays four rak'ahs as Dhuhr.
            </p>
          </div>
        </section>

        {/* The Blessed Hour */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            The Blessed Hour of Friday
          </h2>
          <div className="card-forest rounded-2xl p-8 mb-6">
            <ArabicText
              text="فِيهِ سَاعَةٌ لاَ يُوَافِقُهَا عَبْدٌ مُسْلِمٌ وَهُوَ قَائِمٌ يُصَلِّي يَسْأَلُ اللَّهَ شَيْئاً إِلاَّ أَعْطَاهُ إِيَّاهُ"
              size="md"
            />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">
              "On Friday there is an hour in which no Muslim stands in prayer asking Allah for something but Allah will give it to him." (Bukhari 935, Muslim 852)
            </p>
          </div>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">
            Scholars differed on which hour this is. The two strongest opinions: (1) the final hour before sunset on Friday, when the worshipper sits waiting for Maghrib; (2) the time when the imam sits between the two khutbahs. Both opinions have supporting evidence; the wise Muslim strives in du'a throughout the day of Friday.
          </p>
        </section>

        {/* Etiquettes */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            Recommended Acts on Friday
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RECOMMENDED_FRIDAY.map(item => (
              <div key={item.act} className="card-islamic">
                <p
                  dir="rtl"
                  lang="ar"
                  className="arabic-sm text-gold/70 mb-1"
                  aria-hidden="true"
                >
                  {item.arabic}
                </p>
                <h3 className="font-garamond text-base font-semibold text-forest mb-2">{item.act}</h3>
                <p className="text-forest/60 text-xs leading-relaxed">{item.hadith}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
