import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Zakat: The Third Pillar | Al-Hikmah',
  description:
    "Zakat: the obligatory almsgiving that is the Third Pillar of Islam. Learn its Quranic basis, nisab threshold, who must pay, the eight categories of eligible recipients, types of Zakat, and the spiritual act of purifying one's wealth.",
};

const EIGHT_RECIPIENTS = [
  {
    n: 1,
    arabic: 'الْفُقَرَاء',
    name: 'Al-Fuqara (The Poor)',
    body: 'Those who possess less than the nisab threshold and lack sufficient means to meet their basic needs. This is the primary category for whom Zakat is intended.',
  },
  {
    n: 2,
    arabic: 'الْمَسَاكِين',
    name: 'Al-Masakin (The Needy)',
    body: 'Those who have some income or possessions but still fall below the minimum necessary standard of living. Scholars differ on whether this is more or less severe than al-fuqara, but both are entitled to Zakat.',
  },
  {
    n: 3,
    arabic: 'الْعَامِلِينَ عَلَيْهَا',
    name: "Al-Amilin (Zakat Collectors)",
    body: "Those appointed by the Islamic authority to collect, administer, and distribute Zakat. Their compensation comes from Zakat funds even if they are not personally in need.",
  },
  {
    n: 4,
    arabic: 'الْمُؤَلَّفَةِ قُلُوبُهُمْ',
    name: "Al-Mu'allafati Qulubuhum (Those Whose Hearts are to be Reconciled)",
    body: 'New Muslims whose faith may need strengthening, or non-Muslims whose goodwill towards Islam is sought. This category was prominent in the early period; scholars differ on its applicability today.',
  },
  {
    n: 5,
    arabic: 'وَفِي الرِّقَابِ',
    name: 'Fi al-Riqab (Freeing Slaves)',
    body: 'Historically used to free enslaved people. In the contemporary context, scholars apply this to freeing people from oppression, captivity, or debt bondage where applicable.',
  },
  {
    n: 6,
    arabic: 'الْغَارِمِينَ',
    name: 'Al-Gharimin (The Debt-Ridden)',
    body: 'Those who have incurred debt for permissible purposes and are unable to repay it. Zakat may be given directly to creditors on their behalf or given to them to settle their debts.',
  },
  {
    n: 7,
    arabic: 'وَفِي سَبِيلِ اللَّهِ',
    name: 'Fi Sabil Allah (In the Way of Allah)',
    body: "Historically: soldiers fighting for Islam. Contemporary scholars extend this to legitimate Islamic causes including education, propagation of the faith (da'wah), building mosques, and similar activities that serve the Muslim community.",
  },
  {
    n: 8,
    arabic: 'ابْنِ السَّبِيلِ',
    name: "Ibn al-Sabil (The Wayfarer)",
    body: 'A traveller who has become stranded and lacks sufficient funds to return home, even if wealthy in his own country. Zakat is given to cover the cost of returning home.',
  },
];

const ZAKATABLE_ASSETS = [
  {
    category: 'Gold & Silver',
    arabic: 'الذهب والفضة',
    detail: 'Gold nisab: 85 grammes of gold (approx. 7.5 tola). Silver nisab: 595 grammes of silver (approx. 52.5 tola). Rate: 2.5%. Applies to jewellery, bullion, and coins held for one full lunar year (hawl).',
  },
  {
    category: 'Cash & Bank Balances',
    arabic: 'النقود والمدخرات',
    detail: 'Money in hand, savings accounts, and bank balances that meet the nisab of either gold or silver after holding for one year. Rate: 2.5%.',
  },
  {
    category: 'Trade Goods',
    arabic: 'عروض التجارة',
    detail: "Merchandise and stock held with the intention of resale (urud al-tijarah). Valued at current market price at the time Zakat becomes due. Rate: 2.5%.",
  },
  {
    category: 'Livestock',
    arabic: 'الأنعام',
    detail: 'Camels, cattle, sheep and goats that graze freely (sa\'imah) for most of the year. Complex nisab scales apply per species, established in the hadiths of the Prophet ﷺ to Mu\'adh ibn Jabal and Abu Bakr al-Siddiq.',
  },
  {
    category: 'Agricultural Produce',
    arabic: 'الزروع والثمار',
    detail: "Crops and fruits at harvest. Rate: 10% if irrigated by rain or natural sources (without human effort); 5% if irrigated by mechanical means. The hawl (one year) condition does not apply to produce.",
  },
  {
    category: 'Business & Investment Assets',
    arabic: 'الأسهم والاستثمارات',
    detail: 'Shares, investment funds, rental income, and receivable debts are subject to scholarly ijtihad. The majority hold that Zakat applies at 2.5% on the zakatable portion of the underlying assets.',
  },
];

export default function ZakatPage() {
  return (
    <>
      <PageHeader
        title="Zakat: Obligatory Almsgiving"
        arabicTitle="الزَّكَاة"
        subtitle="The Third Pillar of Islam  –  purifying wealth by giving its due right to those in need"
      />

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

        {/* Quranic basis */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            The Quranic Command
          </h2>
          <div className="card-forest rounded-2xl p-8 mb-6">
            <ArabicText
              text="وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ"
              size="lg"
            />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">
              "And establish prayer and give Zakat and bow with those who bow [in worship]."
              (Al-Baqarah 2:43)
            </p>
          </div>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">
            Zakat appears in the Quran alongside prayer (salah) in thirty-two verses, establishing that these two acts of worship are inseparable companions. The root z-k-w carries two meanings simultaneously: <em>purity</em> and <em>growth</em>. By giving Zakat, one purifies the remainder of one's wealth and witnesses it grow by divine blessing.
          </p>
          <p className="text-forest/70 leading-relaxed text-sm">
            The Prophet ﷺ declared: <em>"Islam is built upon five things: the testimony that there is no deity worthy of worship but Allah and that Muhammad is the Messenger of Allah, the establishment of prayer, the payment of Zakat, the pilgrimage to the House, and the fast of Ramadan."</em> (Bukhari 8, Muslim 16)
          </p>
        </section>

        {/* Who must pay */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            Who Must Pay Zakat
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            {[
              { title: 'Muslim', detail: 'Zakat is an obligation on every Muslim who meets the conditions. Non-Muslims are not obligated.' },
              { title: 'Adult (Baligh)', detail: 'The majority of scholars hold that Zakat is obligatory on adults. The Shafi\'i and Hanbali schools also require it on a child\'s wealth, paid by the guardian.' },
              { title: 'Free Person', detail: 'Historically, enslaved persons had no independent ownership. This condition is moot in the contemporary context.' },
              { title: 'Owns Nisab', detail: 'The person must own wealth equal to or exceeding the nisab threshold  –  the minimum amount that triggers Zakat liability.' },
              { title: 'Hawl Completed', detail: 'One full lunar year (hawl) must have passed with the wealth continuously at or above nisab. Exception: agricultural produce and treasure (rikaz) have no hawl.' },
              { title: 'Full Ownership', detail: 'The wealth must be in full, stable possession  –  not borrowed, not encumbered by debts that would reduce it below nisab.' },
            ].map(item => (
              <div key={item.title} className="card-islamic">
                <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{item.title}</h3>
                <p className="text-forest/60 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
          <div className="gold-border-left pl-5">
            <p className="text-forest/70 text-sm leading-relaxed">
              <strong>Nisab in brief:</strong> The gold nisab is the equivalent of 85 grammes of pure gold; the silver nisab is 595 grammes of pure silver. Because gold and silver prices diverge, the silver nisab (lower) casts a wider obligation net. One may use either standard; many contemporary scholars advise using whichever benefits the poor (typically the lower silver-based nisab).
            </p>
          </div>
        </section>

        {/* Zakatable assets */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            What Is Subject to Zakat
          </h2>
          <div className="space-y-4">
            {ZAKATABLE_ASSETS.map(asset => (
              <div key={asset.category} className="card-islamic flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <ArabicText text={asset.arabic} size="sm" />
                </div>
                <div>
                  <h3 className="font-garamond text-lg font-semibold text-forest mb-1">{asset.category}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{asset.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Eight recipients */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Eight Categories of Recipients
          </h2>
          <div className="card-forest rounded-2xl p-8 mb-8">
            <ArabicText
              text="إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالْعَامِلِينَ عَلَيْهَا وَالْمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالْغَارِمِينَ وَفِي سَبِيلِ اللَّهِ وَابْنِ السَّبِيلِ فَرِيضَةً مِّنَ اللَّهِ"
              size="md"
            />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">
              "Indeed, Zakat expenditures are only for the poor and for the needy and for those employed to collect [Zakat] and for bringing hearts together [for Islam] and for freeing captives [or slaves] and for those in debt and for the cause of Allah and for the [stranded] traveller  –  an obligation [imposed] by Allah." (At-Tawbah 9:60)
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {EIGHT_RECIPIENTS.map(r => (
              <div key={r.n} className="card-islamic flex gap-4">
                <span className="w-8 h-8 rounded-full bg-gold/15 text-gold text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-1">
                  {r.n}
                </span>
                <div>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="arabic-sm text-gold/70 mb-1"
                    aria-hidden="true"
                  >
                    {r.arabic}
                  </p>
                  <h3 className="font-garamond text-base font-semibold text-forest mb-1">{r.name}</h3>
                  <p className="text-forest/60 text-xs leading-relaxed">{r.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Zakat al-Fitr */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            Zakat al-Fitr
          </h2>
          <div className="card-islamic">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <ArabicText text="زَكَاةُ الْفِطْرِ" size="md" />
              </div>
              <div>
                <p className="text-forest/70 text-sm leading-relaxed mb-3">
                  Zakat al-Fitr is a separate, mandatory charitable payment due at the end of Ramadan. It purifies the fasting person of any lapses or indecent speech during the fast, and provides food for the poor on Eid day.
                </p>
                <p className="text-forest/70 text-sm leading-relaxed mb-3">
                  The Prophet ﷺ said: <em>"The Messenger of Allah ﷺ ordained Zakat al-Fitr [to be given] on behalf of every free or enslaved person, male or female, young or old, from among the Muslims  –  one sa' of dried dates or one sa' of barley."</em> (Bukhari 1503, Muslim 984)
                </p>
                <p className="text-forest/70 text-sm leading-relaxed">
                  <strong>Timing:</strong> It must be paid before the Eid prayer. Paying it a day or two early is permitted; paying it after the Eid prayer renders it an ordinary charity (sadaqah), not Zakat al-Fitr. The quantity is one sa' (approximately 2.5 kg) of the local staple food per member of the household. A cash equivalent is accepted in the Hanafi and some other schools.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Spiritual dimension */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            The Spiritual Dimension of Zakat
          </h2>
          <div className="space-y-4 mb-8">
            <p className="text-forest/70 leading-relaxed text-sm">
              Zakat addresses the deepest spiritual disease: attachment to wealth. The Quran warns: <em>"And do not let those who greedily withhold what Allah has given them of His bounty think it is better for them. Rather, it is worse for them. Their necks will be encircled with what they withheld on the Day of Resurrection."</em> (Al-Imran 3:180)
            </p>
            <p className="text-forest/70 leading-relaxed text-sm">
              The theology of Zakat rests on the principle that all wealth belongs ultimately to Allah, and human beings are its trustees (khulafa). The 2.5% is not a tax imposed by the state but an acknowledgment of this divine ownership and a means of circulating wealth through society so that prosperity does not remain concentrated among the wealthy.
            </p>
            <p className="text-forest/70 leading-relaxed text-sm">
              The Prophet ﷺ taught: <em>"Protect your wealth with Zakat, treat your sick with sadaqah, and meet misfortune with supplication and humility."</em> (Abu Dawud 1449, graded hasan)
            </p>
          </div>
          <div className="card-gold rounded-2xl p-8">
            <ArabicText
              text="خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً تُطَهِّرُهُمْ وَتُزَكِّيهِم بِهَا وَصَلِّ عَلَيْهِمْ إِنَّ صَلَاتَكَ سَكَنٌ لَّهُمْ"
              size="md"
            />
            <p className="text-forest/70 text-sm mt-4 leading-relaxed">
              "Take from their wealth a charity by which you purify them and cause them to grow, and invoke [Allah's blessings] upon them. Indeed, your invocations are reassurance for them." (At-Tawbah 9:103)
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
