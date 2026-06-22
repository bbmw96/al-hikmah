import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Mustalah al-Hadith: Sciences of Hadith | Al-Hikmah",
  description:
    "Mustalah al-Hadith is the methodology scholars use to authenticate the words and actions of the Prophet ﷺ. This guide explains the isnad, rijal criticism, the grading of hadiths into Sahih, Hasan, and Da'if, the Six Books, and the greatest hadith scholars in Islamic history.",
};

const GRADES = [
  {
    grade: "Sahih",
    arabic: "الصحيح",
    colour: "bg-gold/15 text-gold border-gold/30",
    definition: "Authentic. The hadith is narrated by a trustworthy narrator from trustworthy narrators in an unbroken chain going back to the Prophet ﷺ, without shudhdudh (anomaly) and without 'illah (hidden defect).",
    subtypes: [
      { name: "Sahih li-Dhatihi", detail: "Authentic in itself  –  meets all five conditions with the highest degree of narrator reliability." },
      { name: "Sahih li-Ghayrihi", detail: "Elevated to sahih because of corroborating chains. Each individual chain is hasan, but together they raise the grade." },
    ],
  },
  {
    grade: "Hasan",
    arabic: "الحسن",
    colour: "bg-teal-50 text-teal-700 border-teal-200",
    definition: "Good. All conditions of sahih are met, but at least one narrator's accuracy (dabt) is slightly less precise than the highest standard. It is a valid source for Islamic rulings.",
    subtypes: [
      { name: "Hasan li-Dhatihi", detail: "Good in itself  –  the chain contains a narrator of slightly lower precision than sahih standard." },
      { name: "Hasan li-Ghayrihi", detail: "Elevated from da'if to hasan by corroborating chains. The weakness is minor and the support compensates." },
    ],
  },
  {
    grade: "Da'if",
    arabic: "الضعيف",
    colour: "bg-red-50 text-red-700 border-red-200",
    definition: "Weak. Fails to meet one or more of the five conditions for sahih. Cannot be used as primary evidence in fiqh, though some scholars permit using weak hadiths for encouragement (fada'il al-a'mal) under specific conditions.",
    subtypes: [
      { name: "Mawdu' (Fabricated)", detail: "The worst category  –  a hadith invented by a liar and falsely attributed to the Prophet ﷺ. Acting on a mawdu' hadith is impermissible." },
      { name: "Munkar (Denounced)", detail: "Narrated by a weak narrator in a way that contradicts what a reliable narrator has said." },
    ],
  },
];

const FIVE_CONDITIONS = [
  { n: 1, condition: "Ittisal al-Sanad", arabic: "اتصال السند", detail: "The chain must be unbroken  –  every narrator must have met and received the hadith directly from the one above him." },
  { n: 2, condition: "'Adalah (Uprightness)", arabic: "العدالة", detail: "Every narrator in the chain must be a trustworthy Muslim free from major sins and acts that compromise character." },
  { n: 3, condition: "Dabt (Precision)", arabic: "الضبط", detail: "Every narrator must have an accurate memory  –  either preserving the hadith in their chest (hafiz) or in reliable written records (kitab)." },
  { n: 4, condition: "Shudhudh (No Anomaly)", arabic: "عدم الشذوذ", detail: "The hadith must not contradict a more reliable narration from a stronger narrator  –  the rule of the majority over the lone narrator." },
  { n: 5, condition: "'Illah (No Hidden Defect)", arabic: "عدم العلة", detail: "There must be no subtle, concealed defect that undermines authenticity  –  discoverable only by master hadith critics (naqad al-hadith)." },
];

const SIX_BOOKS = [
  {
    name: "Sahih al-Bukhari",
    arabic: "صحيح البخاري",
    author: "Muhammad ibn Ismail al-Bukhari (d. 256 AH / 870 CE)",
    count: "7,563 hadiths (including repetitions)",
    note: "The most authentic book after the Quran in the opinion of the majority of scholars. Al-Bukhari reportedly reviewed 600,000 hadiths over 16 years and selected only those meeting his rigorous criteria.",
  },
  {
    name: "Sahih Muslim",
    arabic: "صحيح مسلم",
    author: "Muslim ibn al-Hajjaj (d. 261 AH / 875 CE)",
    count: "~7,500 hadiths",
    note: "Second only to Bukhari in authority. Praised for its superior arrangement  –  Muslim gathers all chains for a single hadith in one place, whereas Bukhari distributes them across chapters.",
  },
  {
    name: "Sunan Abu Dawud",
    arabic: "سنن أبي داود",
    author: "Abu Dawud al-Sijistani (d. 275 AH / 889 CE)",
    count: "5,274 hadiths",
    note: "Focused on fiqh (legal rulings). Abu Dawud reportedly selected from 500,000 hadiths. He noted weak hadiths when no stronger narration on that legal issue existed.",
  },
  {
    name: "Jami' al-Tirmidhi",
    arabic: "جامع الترمذي",
    author: "Muhammad ibn Isa al-Tirmidhi (d. 279 AH / 892 CE)",
    count: "3,956 hadiths",
    note: "Unique for noting after each hadith whether it is sahih, hasan, or da'if, and recording the opinions of early scholars on each ruling. A valuable encyclopaedia of fiqh and hadith grading.",
  },
  {
    name: "Sunan al-Nasa'i",
    arabic: "سنن النسائي",
    author: "Ahmad ibn Shu'ayb al-Nasa'i (d. 303 AH / 915 CE)",
    count: "~5,761 hadiths",
    note: "Al-Nasa'i had the most demanding standards for narrator criticism among the Kutub al-Sittah authors. His conditions for accepting narrators were stricter than Bukhari in some opinions.",
  },
  {
    name: "Sunan Ibn Majah",
    arabic: "سنن ابن ماجه",
    author: "Muhammad ibn Yazid Ibn Majah (d. 273 AH / 887 CE)",
    count: "4,341 hadiths",
    note: "Contains unique hadiths not found in the other five books. Some of these are weak; scholars advise checking grades carefully. Nevertheless the work is indispensable for its coverage.",
  },
];

const KEY_SCHOLARS = [
  {
    name: "Imam al-Bukhari",
    arabic: "الإمام البخاري",
    title: "Amir al-Mu'minin fi al-Hadith",
    dates: "194-256 AH / 810-870 CE",
    note: "The undisputed master of hadith criticism. He memorised 600,000 hadiths and could identify the weak narrators in each chain at sight. He reportedly prayed two rak'ahs before recording each hadith in the Sahih.",
  },
  {
    name: "Imam Muslim",
    arabic: "الإمام مسلم",
    title: "Imam Ahl al-Hadith",
    dates: "206-261 AH / 821-875 CE",
    note: "Student of al-Bukhari. His arrangement of hadiths by topic, gathering all chains of a single hadith together, made his Sahih an unparalleled reference for legal scholars.",
  },
  {
    name: "Imam Ibn Hajar al-Asqalani",
    arabic: "الإمام ابن حجر العسقلاني",
    title: "Hafiz al-Islam",
    dates: "773-852 AH / 1372-1449 CE",
    note: "Author of Fath al-Bari (the greatest commentary on Sahih al-Bukhari) and Tahdhib al-Tahdhib (biography of narrators). His expertise in rijal al-hadith is unsurpassed in the classical period.",
  },
  {
    name: "Imam Yahya ibn Ma'in",
    arabic: "الإمام يحيى بن معين",
    title: "Sheikh al-Muhaddithin",
    dates: "158-233 AH / 775-847 CE",
    note: "The leading scholar of narrator critique (ilm al-jarh wa al-ta'dil) of his era. His assessments of narrators as 'trustworthy' (thiqa) or 'weak' (da'if) became authoritative reference points.",
  },
  {
    name: "Imam al-Nawawi",
    arabic: "الإمام النووي",
    title: "Muhy al-Din al-Nawawi",
    dates: "631-676 AH / 1233-1277 CE",
    note: "Author of Sharh Sahih Muslim, Riyad al-Salihin, al-Adhkar, and al-Arba'in al-Nawawiyyah. His commentary and collections remain primary references for students of hadith worldwide.",
  },
  {
    name: "Imam Ibn al-Salah",
    arabic: "الإمام ابن الصلاح",
    title: "Sheikh al-Muhaddithin bi al-Sham",
    dates: "577-643 AH / 1181-1245 CE",
    note: "Author of Muqaddimah Ibn al-Salah (Ulum al-Hadith)  –  the foundational text in the science of hadith terminology. He codified the disciplines that every student of mustalah studies to this day.",
  },
];

export default function MustalahhHadithPage() {
  return (
    <>
      <PageHeader
        title="Mustalah al-Hadith"
        arabicTitle="مُصْطَلَح الحَدِيث"
        subtitle="The methodological science by which scholars verify whether a narration truly comes from the Prophet ﷺ"
      />

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

        {/* What is it */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            The Science of Hadith
          </h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">
            A hadith (Arabic: الحديث, lit. "report" or "news") is a report of the words, actions, approvals, or physical descriptions of the Prophet Muhammad ﷺ. The Quran commands obedience to the Prophet ﷺ over 30 times, and the hadith corpus is the primary source through which that obedience is enacted after his death.
          </p>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">
            Because the hadith directly governs Islamic law (fiqh), ritual, and theology, the question of authenticity is critical. Mustalah al-Hadith (lit. "the terminology of hadith") is the discipline that developed rigorous standards for evaluating every hadith: who narrated it, whether those narrators are trustworthy, whether the chain is unbroken, and whether the text (matn) is consistent with the Quran and stronger narrations.
          </p>
          <div className="card-forest rounded-2xl p-8">
            <ArabicText
              text="مَنْ كَذَبَ عَلَيَّ مُتَعَمِّدًا فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ"
              size="md"
            />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">
              "Whoever deliberately lies about me  –  let him take his seat in the Fire." (Bukhari 110, Muslim 4)
            </p>
            <p className="text-cream/60 text-xs mt-2">
              This hadith, narrated by over 80 Companions, is the driving motivation behind the entire science of hadith criticism  –  to protect the Prophet's ﷺ legacy from fabrication.
            </p>
          </div>
        </section>

        {/* The Hadith: Isnad + Matn */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            Structure of a Hadith: Isnad and Matn
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="card-islamic">
              <p
                dir="rtl"
                lang="ar"
                className="arabic text-gold/70 mb-2 block"
                aria-hidden="true"
              >
                الإسناد
              </p>
              <h3 className="font-garamond text-lg font-semibold text-forest mb-2">Isnad (Chain of Narrators)</h3>
              <p className="text-forest/60 text-sm leading-relaxed">
                The sequence of narrators through which the hadith was transmitted from the Prophet ﷺ. A typical isnad reads: "A told us, from B, from C, from D (a Companion), that the Prophet ﷺ said..." The isnad is the cornerstone of hadith authentication  –  it is what distinguishes Islamic hadith criticism from all other ancient historical traditions.
              </p>
            </div>
            <div className="card-islamic">
              <p
                dir="rtl"
                lang="ar"
                className="arabic text-gold/70 mb-2 block"
                aria-hidden="true"
              >
                المتن
              </p>
              <h3 className="font-garamond text-lg font-semibold text-forest mb-2">Matn (Text)</h3>
              <p className="text-forest/60 text-sm leading-relaxed">
                The actual content of the hadith  –  what the Prophet ﷺ said, did, or approved. The matn is evaluated against: (1) the Quran, (2) other mutawatir (mass-transmitted) hadiths, (3) established principles of Islamic law, and (4) historical reality. A text that contradicts these is suspect even with a sound isnad.
              </p>
            </div>
          </div>
          <div className="gold-border-left pl-5">
            <p className="text-forest/70 text-sm leading-relaxed">
              Ibn al-Mubarak (d. 181 AH) said: <em>"The isnad is part of the religion. Were it not for the isnad, whoever wished could say whatever he wished."</em> This captures the unique Islamic institution: a chain of human witnesses each vouching for the next, stretching back to the Prophet ﷺ himself.
            </p>
          </div>
        </section>

        {/* Rijal criticism */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            Rijal Criticism: Ilm al-Jarh wa al-Ta'dil
          </h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-5">
            Ilm al-Rijal ("the science of narrators") is the biographical study of every person who ever narrated a hadith. Ilm al-Jarh wa al-Ta'dil ("the science of disparagement and accreditation") is its evaluative branch  –  scholars would investigate the memory, character, reliability, and consistency of each narrator and issue rulings ranging from "most reliable" to "fabricator."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            {[
              { level: 'Thiqa (Trustworthy)', detail: "Full confidence in the narrator's uprightness and memory. The strongest endorsement." },
              { level: 'Saduq (Truthful)', detail: "Generally reliable but with occasional lapses in memory. Hadiths are accepted with slight caution." },
              { level: "Da'if (Weak)", detail: "Narrators whose memory or character is deficient enough to undermine trust, but not fabricators." },
              { level: "Matruk (Abandoned)", detail: "Narrators whose hadiths are abandoned because of frequent serious errors or open wickedness." },
              { level: "Kadhdhab (Liar)", detail: "A narrator caught fabricating hadiths. All their narrations are rejected entirely." },
              { level: "Majhul (Unknown)", detail: "A narrator whose character or identity cannot be verified. Majority: hadiths not accepted without supporting evidence." },
            ].map(item => (
              <div key={item.level} className="card-islamic">
                <h3 className="font-garamond text-sm font-semibold text-forest mb-1">{item.level}</h3>
                <p className="text-forest/60 text-xs leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Five conditions */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            The Five Conditions for a Sahih Hadith
          </h2>
          <div className="space-y-4">
            {FIVE_CONDITIONS.map(c => (
              <div key={c.n} className="card-islamic flex gap-4">
                <span className="w-8 h-8 rounded-full bg-gold/15 text-gold text-sm font-semibold flex items-center justify-center flex-shrink-0">
                  {c.n}
                </span>
                <div>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="arabic-sm text-gold mb-1.5"
                    aria-hidden="true"
                  >
                    {c.arabic}
                  </p>
                  <h3 className="font-garamond text-base font-semibold text-forest mb-1">{c.condition}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Grades */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            Classification of Hadiths
          </h2>
          <div className="space-y-6">
            {GRADES.map(g => (
              <div key={g.grade} className="card-islamic">
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-0.5 rounded-full text-xs font-semibold border ${g.colour}`}>
                    {g.grade}
                  </span>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="arabic-sm text-gold"
                    aria-hidden="true"
                  >
                    {g.arabic}
                  </p>
                </div>
                <p className="text-forest/70 text-sm leading-relaxed mb-4">{g.definition}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {g.subtypes.map(s => (
                    <div key={s.name} className="bg-gold/5 rounded-xl p-3">
                      <h4 className="text-forest font-semibold text-xs mb-1">{s.name}</h4>
                      <p className="text-forest/60 text-xs leading-relaxed">{s.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Mutawatir vs Ahad */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            Mutawatir and Ahad
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-islamic">
              <p
                dir="rtl"
                lang="ar"
                className="arabic text-gold/70 mb-2 block"
                aria-hidden="true"
              >
                المتواتر
              </p>
              <h3 className="font-garamond text-lg font-semibold text-forest mb-2">Mutawatir</h3>
              <p className="text-forest/60 text-sm leading-relaxed">
                Mass-transmitted: a hadith narrated by such a large number of people at every level of the chain that collusion or error is inconceivable. Mutawatir hadiths produce certain (qat'i) knowledge  –  scholars are unanimously bound by them. Example: "Whoever lies about me deliberately, let him take his seat in the Fire."  –  narrated by 80+ Companions.
              </p>
            </div>
            <div className="card-islamic">
              <p
                dir="rtl"
                lang="ar"
                className="arabic text-gold/70 mb-2 block"
                aria-hidden="true"
              >
                الآحاد
              </p>
              <h3 className="font-garamond text-lg font-semibold text-forest mb-2">Khabar al-Ahad</h3>
              <p className="text-forest/60 text-sm leading-relaxed">
                Transmitted by one, two, or a small number of narrators at one or more levels. The vast majority of hadiths are ahad. They produce probable (zanni) knowledge, which is still binding in Islamic law if they are sahih or hasan  –  this is the position of the overwhelming majority of scholars.
              </p>
            </div>
          </div>
        </section>

        {/* Six books */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            The Six Books (Kutub al-Sittah)
          </h2>
          <div className="space-y-5">
            {SIX_BOOKS.map(book => (
              <div key={book.name} className="card-islamic flex gap-4">
                <div>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="arabic-sm text-gold mb-1.5"
                    aria-hidden="true"
                  >
                    {book.arabic}
                  </p>
                  <h3 className="font-garamond text-lg font-semibold text-forest mb-0.5">{book.name}</h3>
                  <p className="text-forest/50 text-xs mb-2">{book.author} · {book.count}</p>
                  <p className="text-forest/60 text-sm leading-relaxed">{book.note}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key scholars */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            The Great Hadith Scholars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {KEY_SCHOLARS.map(s => (
              <div key={s.name} className="card-islamic">
                <p
                  dir="rtl"
                  lang="ar"
                  className="arabic-sm text-gold mb-1.5"
                  aria-hidden="true"
                >
                  {s.arabic}
                </p>
                <h3 className="font-garamond text-base font-semibold text-forest">{s.name}</h3>
                <p className="text-gold text-xs italic mb-1">{s.title} ({s.dates})</p>
                <p className="text-forest/60 text-xs leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
