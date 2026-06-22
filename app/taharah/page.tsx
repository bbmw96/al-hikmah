import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Taharah: Ritual Purity | Al-Hikmah',
  description:
    'Taharah (ritual purity) is the foundation of Islamic worship. This overview explains physical and ritual purity, the three forms of purification (wudu, ghusl, and tayamum), types of impurity (najasah), and why purity is the gate to prayer.',
};

const THREE_FORMS = [
  {
    arabic: 'الوُضُوء',
    name: 'Wudu',
    subtitle: 'Minor Ritual Purification',
    description: "The partial ablution performed to remove minor ritual impurity (hadath asghar). Required before each prayer and other acts of worship. Involves washing the face, hands to the elbows, wiping the head, and washing the feet to the ankles — established in Al-Ma'idah 5:6.",
    href: '/prayer',
    linkLabel: 'Learn about Prayer & Wudu',
    nullifiers: ['Using the restroom', 'Passing gas', 'Deep sleep', 'Loss of consciousness', 'Touching the private parts directly (majority view)', 'Eating camel meat (Hanbali school)'],
  },
  {
    arabic: 'الغُسْل',
    name: 'Ghusl',
    subtitle: 'Full-Body Purification',
    description: 'The full ritual bath required to remove major ritual impurity (hadath akbar). Obligatory after sexual intercourse, ejaculation, the end of menstruation or postnatal bleeding, and — according to many scholars — upon embracing Islam.',
    href: '/ghusl',
    linkLabel: 'Learn about Ghusl',
    nullifiers: ['Sexual intercourse (for both parties)', 'Ejaculation', 'End of menstrual period', 'End of postnatal bleeding (nifas)'],
  },
  {
    arabic: 'التَّيَمُّم',
    name: 'Tayamum',
    subtitle: 'Dry Purification with Clean Earth',
    description: "The substitute purification with clean earth or dust when water is unavailable or its use would cause harm. Tayamum replaces both wudu and ghusl. It was revealed in a verse specific to this ummah — a mercy not given to earlier nations.",
    href: '/tayamum',
    linkLabel: 'Learn about Tayamum',
    nullifiers: ['Same nullifiers as wudu/ghusl', 'Discovery of water (for the dry-purification substitute)', 'Removal of the excuse that permitted tayamum'],
  },
];

const NAJASAH_TYPES = [
  {
    type: 'Najasah Mughallazah',
    arabic: 'النجاسة المغلَّظة',
    subtitle: 'Heavy Impurity',
    examples: "Najasah from dogs and pigs. Requires washing seven times, one of which uses dust (or clean soil), according to the hadith: 'If a dog licks a vessel of one of you, wash it seven times, once using dust.' (Muslim 279)",
  },
  {
    type: 'Najasah Mutawassitah',
    arabic: 'النجاسة المتوسِّطة',
    subtitle: 'Moderate Impurity',
    examples: 'Urine, blood, faeces, vomit, pre-seminal fluid (madhi), alcohol, and the carrion of land animals not slaughtered correctly. Must be washed until the substance, colour, and odour are removed.',
  },
  {
    type: 'Najasah Khafifah',
    arabic: 'النجاسة الخفيفة',
    subtitle: 'Light Impurity',
    examples: "Urine of an infant boy who has consumed only mother's milk (not solid food). Sufficient to sprinkle water over the affected area without full washing, as per the Prophet's ﷺ practice. (Bukhari 223)",
  },
  {
    type: 'Excused Amounts (Maf\'u Anh)',
    arabic: 'المعفو عنه',
    subtitle: 'Tolerated Traces',
    examples: 'A small amount of impurity that is extremely difficult to avoid — such as trace amounts of blood inside meat, or the unavoidable splashing of public lavatories — is pardoned and does not invalidate prayer.',
  },
];

export default function TaharahPage() {
  return (
    <>
      <PageHeader
        title="Taharah: Ritual Purity"
        arabicTitle="الطَّهَارَة"
        subtitle="The foundation of Islamic worship — the condition of ritual cleanliness that opens the door to prayer and the presence of Allah"
      />

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

        {/* Quranic basis */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            Taharah in the Quran
          </h2>
          <div className="card-forest rounded-2xl p-8 mb-6">
            <ArabicText
              text="يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا قُمْتُمْ إِلَى الصَّلَاةِ فَاغْسِلُوا وُجُوهَكُمْ وَأَيْدِيَكُمْ إِلَى الْمَرَافِقِ وَامْسَحُوا بِرُءُوسِكُمْ وَأَرْجُلَكُمْ إِلَى الْكَعْبَيْنِ"
              size="md"
            />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">
              "O you who have believed, when you rise to [perform] prayer, wash your faces and your hands to the elbows and wipe over your heads and wash your feet to the ankles." (Al-Ma'idah 5:6)
            </p>
          </div>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">
            The same verse of Al-Ma'idah continues to prescribe ghusl for janabah and tayamum when water is unavailable, establishing all three forms of purification in a single verse — the foundational text of Islamic fiqh al-taharah.
          </p>
          <p className="text-forest/70 leading-relaxed text-sm">
            The Prophet ﷺ declared: <em>"Purity is half of faith."</em> (Muslim 223) This hadith elevates taharah from mere cleanliness to an act of worship and an expression of iman, for the one who purifies himself is enacting the command of Allah with deliberate intention.
          </p>
        </section>

        {/* Physical vs Ritual */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            Physical vs Ritual Purity
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-islamic">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-3">
                Physical Purity (Taharah Hissiyyah)
              </h3>
              <p className="text-forest/60 text-sm leading-relaxed">
                Removing physical impurities (najasah) from the body, clothing, and place of prayer. This is a precondition for the validity of salah. Physical impurity can be removed by water, or in certain cases by other means (such as rubbing dry soil on leather, or drying in the sun).
              </p>
            </div>
            <div className="card-islamic">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-3">
                Ritual Purity (Taharah Hukmiyyah)
              </h3>
              <p className="text-forest/60 text-sm leading-relaxed">
                The legal state of ritual cleanliness that enables prayer and other acts of worship. This is a specifically Islamic concept with no visible impurity — the person's body may be spotlessly clean, yet ritual impurity (hadath) blocks prayer until wudu or ghusl is performed. It is a spiritual state as much as a physical one.
              </p>
            </div>
          </div>
        </section>

        {/* Three forms */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            The Three Forms of Purification
          </h2>
          <div className="space-y-8">
            {THREE_FORMS.map(form => (
              <div key={form.name} className="card-islamic">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <p
                      dir="rtl"
                      lang="ar"
                      className="arabic text-gold/70 mb-1"
                      aria-hidden="true"
                    >
                      {form.arabic}
                    </p>
                    <h3 className="font-garamond text-xl font-semibold text-forest">{form.name}</h3>
                    <p className="text-gold text-xs font-medium uppercase tracking-wide">{form.subtitle}</p>
                  </div>
                  <Link
                    href={form.href}
                    className="flex items-center gap-1.5 text-sm font-medium text-gold hover:text-gold/80 transition-colors flex-shrink-0"
                  >
                    {form.linkLabel}
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
                <p className="text-forest/70 text-sm leading-relaxed mb-4">{form.description}</p>
                <div>
                  <p className="text-forest/50 text-xs font-semibold uppercase tracking-wide mb-2">Nullifiers</p>
                  <ul className="space-y-1">
                    {form.nullifiers.map(n => (
                      <li key={n} className="flex items-start gap-2 text-sm text-forest/60">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold/50 mt-1.5 flex-shrink-0" />
                        {n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Najasah */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            Types of Physical Impurity (Najasah)
          </h2>
          <div className="space-y-5">
            {NAJASAH_TYPES.map(n => (
              <div key={n.type} className="card-islamic">
                <div className="flex items-start gap-3 mb-2">
                  <p
                    dir="rtl"
                    lang="ar"
                    className="arabic-sm text-gold/70"
                    aria-hidden="true"
                  >
                    {n.arabic}
                  </p>
                  <div>
                    <h3 className="font-garamond text-base font-semibold text-forest">{n.type}</h3>
                    <p className="text-gold text-xs">{n.subtitle}</p>
                  </div>
                </div>
                <p className="text-forest/60 text-sm leading-relaxed">{n.examples}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Purity as worship */}
        <section>
          <div className="card-gold rounded-2xl p-8">
            <ArabicText
              text="الطَّهُورُ شَطْرُ الإِيمَانِ"
              size="lg"
            />
            <p className="text-forest/70 text-sm mt-4 mb-4 leading-relaxed font-medium">
              "Purity is half of faith." (Muslim 223)
            </p>
            <p className="text-forest/60 text-sm leading-relaxed">
              Imam al-Nawawi explains this hadith by noting that iman has an outward dimension (actions) and an inward dimension (belief). Taharah covers the outward half — the body's preparation for standing before Allah. The inner half is tawbah (repentance) and the purification of the heart from shirk, pride, and heedlessness. Together, outward and inward purity constitute complete iman.
            </p>
          </div>
        </section>

      </div>
    </>
  );
}
