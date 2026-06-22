import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Eid Prayers: The Two Celebrations | Al-Hikmah',
  description:
    "Eid al-Fitr and Eid al-Adha are the two annual celebrations of Islam. Learn about their prayers, the extra takbeers, Zakat al-Fitr before the prayer, the Qurbani sacrifice, etiquettes of the blessed days, and the prophetic traditions that make them unique.",
};

const EID_COMPARISON = [
  {
    aspect: 'Date',
    fitr: '1st Shawwal (the day after Ramadan ends)',
    adha: '10th Dhul Hijjah (the fourth day of Hajj season, after the Day of Arafah)',
  },
  {
    aspect: 'Reason',
    fitr: 'Gratitude to Allah for completing the fast of Ramadan and receiving His forgiveness',
    adha: 'Commemorates the sacrifice of Prophet Ibrahim ﷺ and his son Ismail ﷺ when Ibrahim was willing to sacrifice his son in obedience to Allah',
  },
  {
    aspect: 'Special Obligation',
    fitr: 'Zakat al-Fitr: charitable payment due before the prayer on behalf of every household member',
    adha: 'Udhiyah / Qurbani: slaughter of a sacrificial animal (sheep, goat, cow, or camel) for those who can afford it',
  },
  {
    aspect: 'Night Before',
    fitr: 'Abundant takbeer from the sighting of the moon of Shawwal until the imam begins the Eid prayer',
    adha: 'Abundant takbeer beginning after Fajr on the Day of Arafah until the Asr of the 13th Dhul Hijjah (the tashreeq days)',
  },
];

const PRAYER_STRUCTURE = [
  {
    n: 1,
    step: 'Intention (Niyyah)',
    detail: "Form the intention for Eid prayer before beginning.",
  },
  {
    n: 2,
    step: 'Opening Takbeer (Takbirat al-Ihram)',
    detail: "Raise both hands and say 'Allahu Akbar' to enter the prayer. This is the same as in any other prayer.",
  },
  {
    n: 3,
    step: 'Additional Takbeers in the First Rak\'ah',
    detail: "Say 6 additional takbeers (according to the Hanbali school; 7 according to Shafi'i) after the opening takbeer, raising the hands each time. Between each takbeer, a brief pause is made for silent dhikr.",
  },
  {
    n: 4,
    step: 'Recitation in the First Rak\'ah',
    detail: "After the takbeers, al-Fatiha is recited aloud, followed by a surah. The Prophet ﷺ recited Surah al-A'la (87) in the first rak'ah and Surah al-Ghashiyah (88) in the second, or Surah Qaf (50) and Surah al-Qamar (54). (Muslim 891)",
  },
  {
    n: 5,
    step: 'Additional Takbeers in the Second Rak\'ah',
    detail: "Before reciting al-Fatiha in the second rak'ah, say 5 additional takbeers (according to the Hanbali school; according to others, before bowing).",
  },
  {
    n: 6,
    step: 'The Khutbah',
    detail: "Unlike Jumu'ah, the Eid khutbah takes place AFTER the prayer. Attending the khutbah is sunnah, not obligatory. The imam delivers two khutbahs and opens the first with nine takbeers and the second with seven takbeers (Hanbali opinion).",
  },
];

const QURBANI_RULES = [
  { rule: 'Time window', detail: "From after the Eid prayer on the 10th Dhul Hijjah until sunset on the 13th Dhul Hijjah (3 days and nights after the prayer). Some scholars say until sunset on the 12th." },
  { rule: 'Who must perform it', detail: "A free, adult Muslim who possesses wealth above the nisab threshold on the days of Eid. It is fard according to the Hanafi school; sunnah mu'akkadah (strongly confirmed) according to Maliki, Shafi'i, and Hanbali." },
  { rule: 'Animals', detail: "Sheep or goat: one animal per household. Cow, buffalo, or camel: shared by up to seven households. The animal must be free of defects and meet the minimum age (6 months for sheep; 1 year for goat; 2 years for cow; 5 years for camel)." },
  { rule: 'Distribution', detail: "The meat is divided into three portions: one-third for the household, one-third for relatives and friends, and one-third for the poor. None of it should be sold." },
  { rule: 'Prohibition before slaughter', detail: "The Prophet ﷺ said: 'When the ten days [of Dhul Hijjah] begin and one of you intends to offer a sacrifice, let him not cut his hair or nails until he has sacrificed.' (Muslim 1977)" },
];

export default function EidPage() {
  return (
    <>
      <PageHeader
        title="Eid: The Two Celebrations"
        arabicTitle="العِيدَان"
        subtitle="Eid al-Fitr and Eid al-Adha — the two annual occasions of joy, gratitude, charity, and communal worship"
      />

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

        {/* Introduction */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            The Two Eids
          </h2>
          <div className="card-forest rounded-2xl p-8 mb-6">
            <ArabicText
              text="قَدِمَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ الْمَدِينَةَ وَلَهُمْ يَوْمَانِ يَلْعَبُونَ فِيهِمَا فَقَالَ مَا هَذَانِ الْيَوْمَانِ قَالُوا كُنَّا نَلْعَبُ فِيهِمَا فِي الْجَاهِلِيَّةِ فَقَالَ رَسُولُ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ إِنَّ اللَّهَ قَدْ أَبْدَلَكُمْ بِهِمَا خَيْرًا مِنْهُمَا يَوْمَ الأَضْحَى وَيَوْمَ الْفِطْرِ"
              size="sm"
            />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">
              "When the Messenger of Allah ﷺ arrived in Madinah, the people had two days on which they played. He asked, 'What are these two days?' They said, 'We used to celebrate on these days in the time of Jahiliyyah.' The Messenger of Allah ﷺ said: 'Indeed Allah has replaced them with two that are better: the day of Adha and the day of Fitr.'" (Abu Dawud 1134, graded sahih)
            </p>
          </div>
          <p className="text-forest/70 leading-relaxed text-sm">
            The two Eids are unique in Islam: they are not merely cultural festivals but acts of worship commanded by Allah, expressing gratitude after the major acts of devotion — Ramadan (Eid al-Fitr) and Hajj (Eid al-Adha). The Prophet ﷺ himself led the Eid prayers in the open musalla (prayer ground), and the whole Muslim community — men, women, children, and even menstruating women who did not pray but came for the communal gathering — attended.
          </p>
        </section>

        {/* Comparison table */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            Eid al-Fitr vs Eid al-Adha
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gold/20">
                  <th className="text-left py-3 px-4 text-forest/50 text-xs font-semibold uppercase tracking-wide">Aspect</th>
                  <th className="text-left py-3 px-4 text-forest text-sm font-garamond font-semibold">
                    Eid al-Fitr
                    <span className="block arabic-sm text-gold/60" dir="rtl" lang="ar">عيد الفطر</span>
                  </th>
                  <th className="text-left py-3 px-4 text-forest text-sm font-garamond font-semibold">
                    Eid al-Adha
                    <span className="block arabic-sm text-gold/60" dir="rtl" lang="ar">عيد الأضحى</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {EID_COMPARISON.map(row => (
                  <tr key={row.aspect} className="border-b border-gold/10">
                    <td className="py-3 px-4 text-forest/50 text-xs font-semibold">{row.aspect}</td>
                    <td className="py-3 px-4 text-forest/70 text-sm leading-relaxed">{row.fitr}</td>
                    <td className="py-3 px-4 text-forest/70 text-sm leading-relaxed">{row.adha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Prayer structure */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Structure of the Eid Prayer
          </h2>
          <div className="gold-border-left pl-5 mb-8">
            <p className="text-forest/70 text-sm leading-relaxed">
              The Eid prayer consists of <strong>two rak'ahs</strong> with additional takbeers. It is performed without adhan or iqamah. The imam announces "al-salatu jami'ah" (the prayer is assembled) to call people to it. The prayer is wajib (obligatory) according to Hanafi; sunnah mu'akkadah according to Maliki, Shafi'i, and Hanbali schools.
            </p>
          </div>
          <div className="space-y-4">
            {PRAYER_STRUCTURE.map(step => (
              <div key={step.n} className="card-islamic flex gap-4">
                <span className="w-8 h-8 rounded-full bg-forest text-cream text-sm font-bold flex items-center justify-center flex-shrink-0">
                  {step.n}
                </span>
                <div>
                  <h3 className="font-garamond text-base font-semibold text-forest mb-1">{step.step}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Takbeer */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            The Takbeer of Eid
          </h2>
          <div className="card-forest rounded-2xl p-8 mb-6">
            <ArabicText
              text="اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ"
              size="md"
            />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">
              "Allah is the Greatest, Allah is the Greatest. There is no deity worthy of worship but Allah. Allah is the Greatest, Allah is the Greatest, and to Allah belongs all praise."
            </p>
          </div>
          <p className="text-forest/70 text-sm leading-relaxed">
            The above is the most widely reported form of the Eid takbeer. It is declared aloud in the streets, mosques, and gathering places from the night of Eid. The Quran references this for Eid al-Fitr: <em>"...that you complete the prescribed period and that you glorify Allah for that to which He has guided you; and perhaps you will be grateful."</em> (Al-Baqarah 2:185)
          </p>
        </section>

        {/* Zakat al-Fitr */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            Zakat al-Fitr (Eid al-Fitr)
          </h2>
          <div className="card-islamic mb-5">
            <p className="text-forest/70 text-sm leading-relaxed mb-3">
              The Prophet ﷺ made Zakat al-Fitr obligatory on every Muslim before the Eid prayer — one sa' (approximately 2.5 kg) of the local staple food, paid on behalf of every member of the household. The Prophet ﷺ said:
            </p>
            <div className="gold-border-left pl-5">
              <p className="text-forest/70 text-sm leading-relaxed italic">
                "The Messenger of Allah ﷺ ordained Zakat al-Fitr to purify the fasting person from indecent words and actions, and to provide food for the needy. Whoever pays it before the prayer, it is an accepted Zakat; whoever pays it after the prayer, it is an ordinary sadaqah." (Abu Dawud 1609, Ibn Majah 1827)
              </p>
            </div>
          </div>
        </section>

        {/* Qurbani */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            Udhiyah / Qurbani (Eid al-Adha)
          </h2>
          <p className="text-forest/70 text-sm leading-relaxed mb-5">
            The sacrificial slaughter on the days of Eid al-Adha commemorates Ibrahim's ﷺ willingness to sacrifice his son Ismail ﷺ in obedience to Allah's command. Allah replaced the sacrifice with a ram, and this act became a permanent practice for the Muslim ummah. The Quran commands:
          </p>
          <div className="card-gold rounded-2xl p-8 mb-8">
            <ArabicText
              text="فَصَلِّ لِرَبِّكَ وَانْحَرْ"
              size="lg"
            />
            <p className="text-forest/70 text-sm mt-4 leading-relaxed">
              "So pray to your Lord and sacrifice [to Him alone]." (Al-Kawthar 108:2)
            </p>
          </div>
          <div className="space-y-4">
            {QURBANI_RULES.map(r => (
              <div key={r.rule} className="card-islamic">
                <h3 className="font-garamond text-base font-semibold text-forest mb-1">{r.rule}</h3>
                <p className="text-forest/60 text-sm leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Etiquettes of Eid */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            Etiquettes of Eid
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              "Perform ghusl before the Eid prayer",
              "Wear your best and cleanest clothing",
              "Eat before the Eid al-Fitr prayer (the Prophet ﷺ ate dates); do not eat before Eid al-Adha prayer",
              "Go to the prayer ground (musalla) on foot if possible",
              "Take a different route returning home than the one taken going (Sunnah of the Prophet ﷺ)",
              "Exchange Eid greetings: 'Taqabbalallahu minna wa minkum' (May Allah accept from us and from you)",
              "Visit relatives and strengthen family ties on Eid",
              "Express joy and gratitude — this is a day of worship through happiness",
            ].map(item => (
              <div key={item} className="card-islamic flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                <p className="text-forest/70 text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
