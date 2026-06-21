import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Fiqh: Islamic Jurisprudence',
  description: 'An introduction to Islamic jurisprudence (fiqh): the five categories of ruling (Ahkam al-Shar\'iyyah), the sources of Islamic law, and a brief overview of the four major schools of thought.',
};

/* ── Introduction ─────────────────────────────────────────── */

const FIQH_INTRO = `Fiqh (الفِقْه) literally means "deep understanding." As an Islamic discipline, it refers to the body of law derived from the primary sources (Quran, Sunnah, Ijma', and Qiyas) that governs the actions of Muslims in worship, transactions, family, and society. Where 'aqeedah (theology) concerns what one believes, fiqh concerns what one does. The scholars of fiqh studied every human action and assigned it one of five rulings (the Ahkam al-Shar'iyyah) which form the fundamental framework of Islamic law.`;

/* ── Five Ahkam ───────────────────────────────────────────── */

const FIVE_AHKAM = [
  {
    number: 1,
    arabic: 'الفَرْض / الوَاجِب',
    name: 'Fard / Wajib',
    subtitle: 'Obligatory',
    colour: 'border-forest',
    badge: 'badge-forest',
    definition: 'An act that the Shariah has commanded with absolute obligation. Performing it earns reward; leaving it without a valid excuse is a sin.',
    detail: `The Hanafi school distinguishes between Fard and Wajib, a distinction the majority of scholars (Shafi'i, Maliki, Hanbali) do not make:
• Fard (فرض): established by a definitive (qat'i) text, such as the Quran. Denying a Fard exits one from Islam. Example: the five daily prayers.
• Wajib (واجب in Hanafi): established by a probable (zanni) text, such as certain hadiths. Denying it is not kufr, but leaving it without excuse is still a sin. Example: Witr prayer, Eid prayer.
The majority call both simply "Wajib" or "Fard" interchangeably.`,
    subcategories: [
      {
        name: "Fard 'Ayn (Individual Obligation)",
        desc: "Obligatory upon every individual Muslim personally. It cannot be fulfilled on behalf of another. Examples: five daily prayers, fasting Ramadan, Hajj (for those who are able), Zakah.",
      },
      {
        name: "Fard Kifayah (Communal Obligation)",
        desc: "Obligatory upon the Muslim community collectively. If enough people fulfill it, the obligation lifts from the rest. If no one fulfills it, all are sinful. Examples: performing Janazah prayer, responding to the salam when one person in a group responds, studying fiqh at the scholarly level, medicine, and other essential community roles.",
      },
    ],
    examples: ['The five daily prayers', 'Fasting in Ramadan', 'Paying Zakah', 'Hajj once in a lifetime for those who are able', 'Covering the awrah', 'Honoring parents'],
  },
  {
    number: 2,
    arabic: 'السُّنَّة / الْمُسْتَحَبّ / الْمَنْدُوب',
    name: "Sunnah / Mustahabb / Mandub",
    subtitle: 'Recommended',
    colour: 'border-gold',
    badge: 'badge-gold',
    definition: 'An act whose performance brings reward but whose omission does not incur sin. These are acts the Prophet ﷺ regularly performed or encouraged, but did not make obligatory.',
    detail: 'The Sunnah is further divided according to the degree of emphasis:',
    subcategories: [
      {
        name: "Sunnah Mu'akkadah (Confirmed Sunnah)",
        desc: "Acts that the Prophet ﷺ performed consistently and rarely abandoned. Leaving them without excuse, though not sinful, is blameworthy and the person has missed great reward. Examples: Sunnah Rawatib prayers (the regular voluntary prayers before and after the obligatory), Witr prayer, the two Eid prayers (according to some scholars), congregational prayer, greeting with salam.",
      },
      {
        name: "Sunnah Ghair Mu'akkadah (Non-Confirmed Sunnah)",
        desc: "Acts the Prophet ﷺ performed sometimes but not consistently. Examples: fasting on Mondays and Thursdays, praying four units before Asr, praying two units before Maghrib.",
      },
      {
        name: "Nafl (Supererogatory)",
        desc: "Voluntary acts of worship beyond the Sunnah, with no specific instruction. Every extra prayer, fast, or charity beyond what is prescribed falls here.",
      },
    ],
    examples: ['Sunnah Rawatib prayers', 'Saying Bismillah before eating', 'Saying Alhamdulillah after sneezing', 'Using the miswak (tooth stick)', 'Entering the mosque with the right foot', 'Fasting on Mondays and Thursdays'],
  },
  {
    number: 3,
    arabic: 'الْمُبَاح',
    name: 'Mubah',
    subtitle: 'Permissible / Neutral',
    colour: 'border-midnight/30',
    badge: 'badge-gold',
    definition: "An act that is neither commanded nor prohibited. Performing it or leaving it carries neither reward nor sin in itself. Most of the activities of daily life (eating, sleeping, working, speaking) are Mubah by default.",
    detail: `A Mubah act can shift its ruling based on intention or circumstances:
• If one intends a Mubah act to help in worship or fulfil an obligation, it becomes rewarded. For example, eating with the intention to gain strength for worship becomes Sunnah.
• If a Mubah act leads to harm or haram, it becomes prohibited.
• The principle: "Everything is permissible unless specifically prohibited." This makes Mubah the largest category and reflects that Islam is a religion of ease: the default for all things is permissibility.`,
    subcategories: [],
    examples: ['Eating permissible food in any amount', 'Sleeping', 'Working in a permissible profession', 'Recreation and sport', 'Conversation on worldly matters', 'Wearing any permissible colour of clothing'],
  },
  {
    number: 4,
    arabic: 'الْمَكْرُوه',
    name: 'Makruh',
    subtitle: 'Disliked',
    colour: 'border-amber-700/40',
    badge: 'badge-gold',
    definition: "An act that the Shariah has discouraged without making it forbidden. Generally, doing a Makruh act does not incur sin, but avoiding it is better and brings reward. Persisting in it habitually, or doing it with a bad intention, may make it sinful.",
    detail: `The Hanafi school distinguishes:
• Makruh Tahreemi: strongly disliked, close to Haram; persistence in it is sinful.
• Makruh Tanzihi: mildly disliked; avoiding it is better but doing it is not sinful.
The majority of scholars treat Makruh as a single category: disliked but not forbidden.`,
    subcategories: [],
    examples: ['Eating with the left hand without necessity', 'Wasting water during wudu', 'Talking excessively in the mosque about worldly matters', 'Praying when food is ready and one is hungry', 'Making the tashahhud finger gesture excessively (contested)', 'Cracking knuckles during prayer'],
  },
  {
    number: 5,
    arabic: 'الْحَرَام',
    name: 'Haram',
    subtitle: 'Forbidden',
    colour: 'border-red-700/50',
    badge: 'badge-gold',
    definition: 'An act that is strictly prohibited by the Shariah. Performing it is a sin; avoiding it brings reward. The Quran and Sunnah establish Haram explicitly. Some things are made Haram by the general principles of the Shariah even without an explicit text.',
    detail: `The general principle for Haram: anything that causes clear harm to oneself, others, or society (specifically to religion, life, intellect, lineage, or property, the five necessities the Shariah protects) is Haram. Haram is always certain: if there is genuine scholarly disagreement about something, it is not definitively Haram but falls in a disputed (ikhtilaf) category.`,
    subcategories: [],
    examples: [
      "Riba (interest/usury): prohibited in Quran 2:275",
      "Consuming pork or blood or the flesh of animals not slaughtered properly",
      "Alcohol and intoxicants",
      "Murder, suicide",
      "Adultery and fornication (zina)",
      "Stealing and consuming others' wealth unlawfully",
      "Backbiting (gheebah) and slander",
      "Magic (sihr)",
      "Arrogance (in the sense of refusing to submit to truth)",
    ],
  },
];

/* ── Sources of Islamic Law ──────────────────────────────── */

const SOURCES = [
  {
    number: 1,
    arabic: 'الْقُرْآن الْكَرِيم',
    name: 'The Quran',
    desc: `The primary source of Islamic law. The Quran is the direct word of Allah, revealed to the Prophet ﷺ. Its legal rulings cover acts of worship, family law, commercial transactions, criminal law, and ethics. The Quran provides both explicit rulings (such as the prohibition of interest, Quran 2:275) and general principles (such as "do not consume one another's wealth unjustly," Quran 4:29).`,
    type: "Primary (Qat'i, Definitive)",
  },
  {
    number: 2,
    arabic: 'السُّنَّة النَّبَوِيَّة',
    name: 'The Sunnah',
    desc: `The sayings, actions, and tacit approvals of the Prophet ﷺ, preserved in the books of hadith. The Sunnah explains, details, and supplements the Quran. The five daily prayers are mentioned in the Quran but their precise method is entirely from the Sunnah. The Sunnah is the second source: "Whatever the Messenger gives you, take it. Whatever he forbids you, refrain from it." (Quran 59:7). Scholars classify hadiths by authenticity: Sahih (authentic), Hasan (good), Da'if (weak), and Mawdu' (fabricated); only Sahih and Hasan are used for legal rulings.`,
    type: 'Primary (Qat\'i for mutawatir, Zanni for ahad)',
  },
  {
    number: 3,
    arabic: 'الإجْمَاع',
    name: "Ijma' (Scholarly Consensus)",
    desc: `The agreement of the qualified scholars (mujtahidun) of the Muslim community in any given generation on a legal ruling. Ijma' is considered binding because the Prophet ﷺ said: "My nation will never agree upon an error." (Ibn Majah 3950, authenticated). An example of Ijma': the compilation of the Quran into one mushaf, the permissibility of building minarets on mosques, the prohibition on marrying a woman and her aunt simultaneously.`,
    type: "Secondary (Binding when established)",
  },
  {
    number: 4,
    arabic: 'القِيَاس',
    name: "Qiyas (Analogical Reasoning)",
    desc: `Extending a ruling from an established case to a new case because they share the same effective cause ('illah). Example: the Quran prohibits khamr (fermented grape wine, Quran 5:90). Scholars extended this prohibition to all intoxicants by Qiyas, because the effective cause is intoxication, not the substance itself. Qiyas is the main tool for deriving rulings on new issues not mentioned in the Quran or Sunnah.`,
    type: 'Secondary (Conditional)',
  },
];

/* ── Four Schools of Thought ──────────────────────────────── */

const MADHABS = [
  {
    arabic: 'الحَنَفِيَّة',
    name: 'Hanafi',
    founder: 'Imam Abu Hanifah al-Nu\'man ibn Thabit (699-767 CE)',
    region: 'Turkey, Central Asia, South Asia (Pakistan, India, Bangladesh), Egypt, and parts of the Arab world',
    characteristics: `Founded in Kufa, Iraq. Known for its extensive use of ra'y (scholarly opinion) and Qiyas. Imam Abu Hanifah was a master logician and his school is known for detailed legal reasoning. The Hanafi school is the most widely followed madhab by number of Muslims worldwide.`,
    note: 'Official madhab of the Ottoman Empire for centuries.',
  },
  {
    arabic: 'الْمَالِكِيَّة',
    name: 'Maliki',
    founder: 'Imam Malik ibn Anas (711-795 CE)',
    region: 'North Africa (Morocco, Algeria, Tunisia), West Africa, parts of East Africa, and some Gulf states',
    characteristics: `Founded in Madinah. Places unique emphasis on the 'amal ahl al-Madinah (the practice of the people of Madinah) as a source of law, considering it a form of living transmission of the Sunnah. Also uses Maslahah Mursalah (public interest) as a legal tool.`,
    note: 'The official school of Madinah in the time of Imam Malik.',
  },
  {
    arabic: 'الشَّافِعِيَّة',
    name: "Shafi'i",
    founder: "Imam Muhammad ibn Idris al-Shafi'i (767-820 CE)",
    region: "East Africa, East and Southeast Asia (Malaysia, Indonesia, Brunei), parts of Egypt, Yemen, and the Levant",
    characteristics: `Imam al-Shafi'i was the founder of Islamic legal theory (usul al-fiqh) as a formal discipline; his book "al-Risalah" is the first systematic work on legal theory in Islam. The Shafi'i school is known for its rigorous methodology and emphasis on the Sunnah over personal opinion.`,
    note: "Al-Shafi'i studied under Imam Malik in Madinah and under the Hanafi students in Iraq.",
  },
  {
    arabic: 'الحَنَابِلَة',
    name: 'Hanbali',
    founder: 'Imam Ahmad ibn Hanbal (780-855 CE)',
    region: 'Saudi Arabia, Qatar, and parts of the Gulf region',
    characteristics: `Founded in Baghdad. Known for the most conservative use of the Quran and Sunnah, with minimal use of Qiyas. Imam Ahmad was primarily a muhaddith (hadith scholar) and his school reflects his immense attachment to the narrations. He suffered imprisonment and flogging during the Mu'tazilite inquisition (Mihna) for refusing to say the Quran was created.`,
    note: 'Ibn Taymiyyah and Ibn Qayyim al-Jawziyyah are the most famous scholars of this school.',
  },
];

export default function FiqhPage() {
  return (
    <>
      <PageHeader
        title="Fiqh: Islamic Jurisprudence"
        arabicTitle="الفِقْه"
        subtitle="Fiqh is the detailed understanding of Islamic law as derived from the Quran, Sunnah, scholarly consensus, and analogical reasoning. It governs every act from worship to commerce to family life."
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* ── Introduction ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            What is Fiqh?
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            تعريف الفقه
          </p>
          <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5">
            <p className="text-forest/75 text-sm leading-relaxed">{FIQH_INTRO}</p>
          </div>
        </section>

        {/* ── Five Ahkam ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            The Five Categories of Ruling (Ahkam al-Shar'iyyah)
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-8" aria-hidden="true">
            الأحكام الشرعية الخمسة
          </p>
          <div className="space-y-8">
            {FIVE_AHKAM.map(ahkam => (
              <article key={ahkam.number} className={`card-islamic border-l-4 ${ahkam.colour}`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-forest flex items-center justify-center flex-shrink-0 ring-2 ring-gold/30">
                    <span className="text-gold font-semibold text-sm">{ahkam.number}</span>
                  </div>
                  <div>
                    <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-0.5" aria-hidden="true">
                      {ahkam.arabic}
                    </p>
                    <h3 className="font-garamond text-xl font-semibold text-forest">{ahkam.name}</h3>
                    <span className="badge-gold text-xs mt-1 inline-block">{ahkam.subtitle}</span>
                  </div>
                </div>

                <p className="text-forest/80 text-sm leading-relaxed font-medium mb-3">{ahkam.definition}</p>
                <p className="text-forest/65 text-sm leading-relaxed mb-4 whitespace-pre-line">{ahkam.detail}</p>

                {ahkam.subcategories.length > 0 && (
                  <div className="space-y-3 mb-4">
                    {ahkam.subcategories.map((sub, i) => (
                      <div key={i} className="bg-forest/5 rounded-xl p-3">
                        <p className="font-medium text-forest text-sm mb-1">{sub.name}</p>
                        <p className="text-forest/60 text-xs leading-relaxed">{sub.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div>
                  <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-2">Examples</p>
                  <div className="flex flex-wrap gap-2">
                    {ahkam.examples.map((ex, i) => (
                      <span key={i} className="bg-gold/10 border border-gold/20 text-forest/70 text-xs px-2.5 py-1 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── Fard vs Wajib note ── */}
        <section className="card-islamic bg-forest/5">
          <h2 className="font-garamond text-xl font-semibold text-forest mb-3">
            The Hanafi Distinction: Fard vs Wajib
          </h2>
          <p className="text-forest/70 text-sm leading-relaxed mb-3">
            The majority of scholars (Maliki, Shafi'i, Hanbali) use Fard and Wajib as synonyms, both meaning "obligatory." The Hanafi school alone makes a technical distinction:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-forest/5 rounded-xl p-3">
              <p className="font-medium text-forest text-sm mb-1">Fard (فرض): Hanafi</p>
              <p className="text-forest/60 text-xs leading-relaxed">Established by a definitive (qat'i) text (overwhelmingly transmitted Quran or mutawatir hadith). Denying it is kufr. Example: five prayers, fasting.</p>
            </div>
            <div className="bg-forest/5 rounded-xl p-3">
              <p className="font-medium text-forest text-sm mb-1">Wajib (واجب): Hanafi</p>
              <p className="text-forest/60 text-xs leading-relaxed">Established by a probable (zanni) text, such as a solitary hadith. Obligatory to perform, but denying it is not kufr. Example: Witr prayer, Eid prayer, reciting Surah al-Fatiha in prayer.</p>
            </div>
          </div>
          <p className="text-forest/50 text-xs mt-3 italic">
            For practical purposes, all four schools agree on the obligation of the five pillars and the major acts of worship. The distinction matters in specific cases of doubt and in legal methodology.
          </p>
        </section>

        {/* ── Sources of Islamic Law ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            The Sources of Islamic Law (Usul al-Fiqh)
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            مصادر الفقه الإسلامي
          </p>
          <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed">
              The four sources of Islamic law were systematised by Imam al-Shafi'i in his landmark work "al-Risalah" (approximately 820 CE). All four major schools accept these four sources, though they differ in how they apply and prioritise them in cases of conflict.
            </p>
          </div>
          <div className="space-y-5">
            {SOURCES.map(source => (
              <article key={source.number} className="card-islamic">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40">
                    <span className="text-forest font-semibold text-xs">{source.number}</span>
                  </div>
                  <div>
                    <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-0.5" aria-hidden="true">
                      {source.arabic}
                    </p>
                    <h3 className="font-garamond text-lg font-semibold text-forest">{source.name}</h3>
                    <span className="text-xs text-gold/60 italic">{source.type}</span>
                  </div>
                </div>
                <p className="text-forest/70 text-sm leading-relaxed">{source.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Four Schools ── */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
            The Four Schools of Jurisprudence (al-Madhahib al-Arba'ah)
          </h2>
          <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-6" aria-hidden="true">
            المذاهب الفقهية الأربعة
          </p>
          <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed">
              The four Sunni schools of jurisprudence are all authentic expressions of Islamic law, each with its own methodology and emphasis. The scholarly consensus throughout Islamic history has been that following any of the four madhabs is valid. They agree on all fundamentals and differ only in certain subsidiary rulings; these differences are a mercy, not a source of division.
            </p>
          </div>
          <div className="space-y-5">
            {MADHABS.map((madhab, i) => (
              <article key={i} className="card-islamic">
                <div className="flex items-start gap-3 mb-3">
                  <p dir="rtl" lang="ar" className="arabic text-gold/80 flex-shrink-0" aria-hidden="true">
                    {madhab.arabic}
                  </p>
                  <div>
                    <h3 className="font-garamond text-xl font-semibold text-forest">{madhab.name} School</h3>
                    <p className="text-xs text-gold/60 italic">{madhab.founder}</p>
                  </div>
                </div>
                <div className="space-y-2 mb-3">
                  <div className="flex gap-2">
                    <span className="text-xs text-gold/70 font-medium w-16 flex-shrink-0">Region:</span>
                    <span className="text-forest/65 text-xs leading-relaxed">{madhab.region}</span>
                  </div>
                </div>
                <p className="text-forest/70 text-sm leading-relaxed mb-2">{madhab.characteristics}</p>
                <p className="text-xs text-gold/55 italic">{madhab.note}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ── Closing ── */}
        <section className="card-islamic bg-forest/5 text-center">
          <ArabicText text="وَمَا أُوتِيتُم مِّنَ الْعِلْمِ إِلَّا قَلِيلًا" size="md" className="mb-4" />
          <p className="text-forest/70 text-sm italic mb-1">
            {'"And of knowledge, you have been given only a little."'} (Quran 17:85)
          </p>
          <p className="text-forest/50 text-xs mt-3">
            The great scholars who built these schools spent their lives in this science and still considered themselves students. Humility before Allah&apos;s law and respect for all four schools is the mark of the serious student.
          </p>
        </section>
      </div>
    </>
  );
}
