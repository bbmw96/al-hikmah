import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Ulum al-Quran: Sciences of the Quran | Al-Hikmah",
  description:
    "Ulum al-Quran (Sciences of the Quran) encompasses all disciplines that illuminate the Quran's revelation, compilation, classification, variant readings, occasions of revelation, and rules of recitation. This guide covers: wahy, the history of compilation, Makki and Madani divisions, Asbab al-Nuzul, the Qira'at, Tajweed, and the miraculous nature of the Quran.",
};

const WAHY_MODES = [
  {
    mode: 'True Vision in Sleep',
    arabic: 'الرؤيا الصادقة',
    detail: "The beginning of revelation to the Prophet ﷺ. Aisha (ra) reported: 'The commencement of divine inspiration to the Messenger of Allah ﷺ was in the form of true righteous visions in sleep.' (Bukhari 3)",
  },
  {
    mode: 'Sound Like a Bell',
    arabic: 'مثل صلصلة الجرس',
    detail: "The Prophet ﷺ said: 'Sometimes it comes to me like the ringing of a bell, and that is the most intense mode of revelation for me. Then the ringing ceases and I have retained what was said.' (Bukhari 2)",
  },
  {
    mode: 'The Angel in Human Form',
    arabic: 'في صورة رجل',
    detail: "Jibreel ﷺ would come to the Prophet ﷺ in the form of a man and speak to him. The other Companions could see and hear this as well, and Dihyah al-Kalbi was frequently the form adopted.",
  },
  {
    mode: 'Jibreel in his Real Form',
    arabic: 'في صورته الحقيقية',
    detail: "The Prophet ﷺ saw Jibreel ﷺ in his true angelic form twice: once at the beginning near the horizon (An-Najm 53:6-7), and once during the Night Journey near Sidrat al-Muntaha.",
  },
  {
    mode: 'Direct Speech (Night Journey)',
    arabic: 'الكلام المباشر',
    detail: "On the Night Journey (Isra wal-Miraj), the Prophet ﷺ was taken beyond the veils and Allah spoke to him directly. It was during this event that the five daily prayers were prescribed.",
  },
];

const COMPILATION_STAGES = [
  {
    caliph: 'During the Prophetic Era',
    arabic: 'عصر النبوة',
    detail: "Revelation was recorded immediately by Companions known as the 'kuttab al-wahy' (scribes of revelation), including Zayd ibn Thabit, Ubayy ibn Ka'b, and Ali ibn Abi Talib (ra). The text was written on palm leaves, flat stones, bones, and leather. The Prophet ﷺ himself designated the order of the surahs through divine guidance.",
  },
  {
    caliph: "Abu Bakr al-Siddiq (ra)  –  1st Caliph",
    arabic: 'أبو بكر الصديق',
    detail: "After the Battle of Yamama (11 AH / 633 CE), in which 70 huffaz (memorisers) were martyred, Umar ibn al-Khattab urged Abu Bakr to compile the Quran into a single manuscript. Zayd ibn Thabit was appointed to lead the effort. He accepted only verified written material that had two witnesses confirming they had heard it from the Prophet ﷺ himself. The compiled mushaf was preserved with Abu Bakr, then Umar, then Hafsa bint Umar (ra).",
  },
  {
    caliph: "Uthman ibn Affan (ra)  –  3rd Caliph",
    arabic: 'عثمان بن عفان',
    detail: "As Islam spread to Persia, Azerbaijan, and Armenia, Hudhayfah ibn al-Yaman reported to Uthman that Muslims were reading the Quran in differing dialects. Uthman commissioned Zayd ibn Thabit and three senior Qurayshi Companions to produce a standardised master copy in the Qurayshi dialect (the dialect in which the Quran was primarily revealed). Copies were sent to each province, and other manuscripts were destroyed to prevent confusion. This became the definitive Uthmanic codex (al-Mushaf al-Uthmani), which is the Quran as it exists today.",
  },
];

const QIRAAT_INFO = [
  { name: "Nafi' (al-Madani)", students: "Warsh and Qalun", region: "North Africa, Egypt (Warsh); Tunis, Libya (Qalun)" },
  { name: "Ibn Kathir (al-Makki)", students: "Al-Bazzi and Qunbul", region: "Parts of the Arabian Peninsula" },
  { name: "Abu Amr (al-Basri)", students: "Al-Duri and Al-Susi", region: "Parts of Sudan, Nigeria, Eritrea" },
  { name: "Ibn Amir (al-Shami)", students: "Hisham and Ibn Dhakwan", region: "Parts of the Levant (historical)" },
  { name: "Asim (al-Kufi)", students: "Hafs and Shu'bah", region: "The dominant reading worldwide today (Hafs)" },
  { name: "Hamzah (al-Kufi)", students: "Khalaf and Khallad", region: "Parts of the Islamic world (historical)" },
  { name: "Al-Kisa'i (al-Kufi)", students: "Al-Layth and Al-Duri", region: "Parts of the Islamic world (historical)" },
];

const TAJWEED_RULES = [
  {
    rule: 'Makharij al-Huruf',
    arabic: 'مخارج الحروف',
    detail: 'The precise articulation points of each Arabic letter. Letters exit from one of five zones: the chest, the throat, the back of the tongue, the middle of the tongue, the front of the tongue, the teeth, or the lips.',
  },
  {
    rule: 'Madd (Prolongation)',
    arabic: 'المد',
    detail: 'The extension of vowel sounds. Natural madd (2 counts), connected madd (4-5 counts when a hamzah follows in the same word), and separated madd each have specific rules.',
  },
  {
    rule: 'Ghunnah (Nasalisation)',
    arabic: 'الغنة',
    detail: "The nasal sound produced from the nasal passage when reciting certain letters, most notably noon and meem when they carry a shaddah, and in rules like idgham with ghunnah.",
  },
  {
    rule: 'Idgham, Iqlab, Ikhfa',
    arabic: 'الإدغام والإقلاب والإخفاء',
    detail: "Rules governing the noon sakinah and tanwin: assimilation into the following letter (idgham), conversion into meem before ba (iqlab), and concealment with nasalisation before certain letters (ikhfa).",
  },
  {
    rule: 'Qalqalah',
    arabic: 'القلقلة',
    detail: "An echoing sound produced by the five letters q, t, b, j, d when they occur with sukoon. They vibrate slightly rather than being held static.",
  },
  {
    rule: 'Tafkhim and Tarqiq',
    arabic: 'التفخيم والترقيق',
    detail: "Heavy (tafkhim) and light (tarqiq) pronunciation of certain letters. The letter ra and letters of isti'la are recited with a heavy mouth; others are light.",
  },
];

export default function UlumQuranPage() {
  return (
    <>
      <PageHeader
        title="Ulum al-Quran"
        arabicTitle="عُلُوم القُرْآن"
        subtitle="The integrated sciences that reveal how the Quran was revealed, recorded, compiled, classified, and how it is to be recited"
      />

      <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

        {/* What is Ulum al-Quran */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            What Is Ulum al-Quran?
          </h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">
            Ulum al-Quran (Arabic: عُلُوم القُرْآن, "the sciences of the Quran") is the scholarly discipline that encompasses every field of knowledge needed to understand, preserve, and interpret the Quran correctly. It is not a single science but a constellation of disciplines, including the study of revelation (wahy), the history of compilation, the classification of surahs as Makki or Madani, the variant readings (qira'at), the occasions of revelation (asbab al-nuzul), abrogation (naskh), the miraculous nature of the Quran (i'jaz), and the science of recitation (tajweed).
          </p>
          <p className="text-forest/70 leading-relaxed text-sm mb-6">
            Among the most important classical works in this field are: <em>al-Itqan fi Ulum al-Quran</em> by Imam al-Suyuti (d. 911 AH), <em>al-Burhan fi Ulum al-Quran</em> by Imam al-Zarkashi (d. 794 AH), and <em>Mabahith fi Ulum al-Quran</em> by Dr Manna' al-Qattan (contemporary).
          </p>
          <div className="card-forest rounded-2xl p-8">
            <ArabicText
              text="إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ"
              size="lg"
            />
            <p className="text-cream/80 text-sm mt-4 leading-relaxed">
              "Indeed, it is We who sent down the Reminder, and indeed, We will be its guardian." (Al-Hijr 15:9)
            </p>
          </div>
        </section>

        {/* Wahy */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            Revelation (Wahy)
          </h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-6">
            The Quran was revealed gradually over approximately 23 years (610-632 CE), not all at once. This gradual revelation served wisdom: it allowed the Prophet ﷺ and the Companions to absorb it, implement it, and respond to unfolding events. Allah says: <em>"And [it is] a Quran which We have separated [by intervals] that you might recite it to the people over a prolonged period. And We have sent it down progressively."</em> (Al-Isra 17:106)
          </p>
          <div className="space-y-4">
            {WAHY_MODES.map(mode => (
              <div key={mode.mode} className="card-islamic flex gap-4">
                <div className="flex-shrink-0">
                  <ArabicText text={mode.arabic} size="sm" />
                </div>
                <div>
                  <h3 className="font-garamond text-base font-semibold text-forest mb-1">{mode.mode}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{mode.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Compilation */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            Compilation of the Quran
          </h2>
          <div className="space-y-6">
            {COMPILATION_STAGES.map(stage => (
              <div key={stage.caliph} className="card-islamic">
                <p
                  dir="rtl"
                  lang="ar"
                  className="arabic-sm text-gold mb-1.5"
                  aria-hidden="true"
                >
                  {stage.arabic}
                </p>
                <h3 className="font-garamond text-lg font-semibold text-forest mb-3">{stage.caliph}</h3>
                <p className="text-forest/60 text-sm leading-relaxed">{stage.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Makki and Madani */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            Makki and Madani Surahs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="card-islamic">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-3">
                Makki Surahs
                <span className="arabic-sm text-gold/60 block" dir="rtl" lang="ar">السور المكية</span>
              </h3>
              <p className="text-forest/60 text-sm leading-relaxed mb-3">
                Revealed before the Hijra (emigration to Madinah in 622 CE). The dominant themes are: the oneness of Allah (tawheed), the Day of Judgement, the punishment of past nations for denying their prophets, the reality of prophethood, and the purification of the soul. Surahs tend to be shorter with powerful, rhythmic verses.
              </p>
              <p className="text-forest/50 text-xs">86 of the 114 surahs are classified as Makki.</p>
            </div>
            <div className="card-islamic">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-3">
                Madani Surahs
                <span className="arabic-sm text-gold/60 block" dir="rtl" lang="ar">السور المدنية</span>
              </h3>
              <p className="text-forest/60 text-sm leading-relaxed mb-3">
                Revealed after the Hijra. The dominant themes are: detailed laws of Islamic jurisprudence (fiqh), the rules of community life, marriage and divorce, warfare and treaty, the detailed obligations of worship, and the establishment of the Islamic state. Surahs tend to be longer with detailed legislative content.
              </p>
              <p className="text-forest/50 text-xs">28 surahs are classified as Madani.</p>
            </div>
          </div>
          <div className="gold-border-left pl-5">
            <p className="text-forest/70 text-sm leading-relaxed">
              The simplest definition: Makki = before Hijra; Madani = after Hijra. Scholars distinguish between: (1) the place of revelation (in Makkah or Madinah), (2) whether the verse was revealed before or after the Hijra (the majority view), and (3) the audience addressed ("O mankind" suggests Makki; "O you who believe" suggests Madani). A surah may be predominantly Makki but contain one or two Madani verses.
            </p>
          </div>
        </section>

        {/* Asbab al-Nuzul */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            Asbab al-Nuzul (Occasions of Revelation)
          </h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">
            Asbab al-Nuzul (the occasions or causes of revelation) is the study of the historical circumstances that prompted specific verses to be revealed. This discipline is essential for correct interpretation (tafsir): knowing why a verse was revealed removes ambiguity and prevents misapplication.
          </p>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">
            A famous example: When some Muslims asked about wine and gambling, the verse "They ask you about wine and gambling. Say: In them is great sin and [yet, some] benefit for people. But their sin is greater than their benefit." (Al-Baqarah 2:219) was revealed, acknowledging but not yet prohibiting them. When the prohibition eventually came (Al-Ma'idah 5:90-91), knowing this progression of revelation is vital to understanding the wisdom of the gradual prohibition.
          </p>
          <div className="gold-border-left pl-5">
            <p className="text-forest/70 text-sm leading-relaxed">
              The foundational principle of tafsir: <em>"al-ibra bi umum al-lafz la bi khusus al-sabab"</em>  –  the ruling is determined by the generality of the wording, not merely the specific cause of revelation. A verse revealed in response to a specific incident carries a ruling that applies generally, not only to that one incident.
            </p>
          </div>
        </section>

        {/* Qira'at */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            The Seven (and Ten) Qira'at
          </h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-4">
            The Prophet ﷺ informed us that the Quran was revealed in seven ahruf (modes or dialects) to ease recitation for different Arab tribes. (Bukhari 4992, Muslim 818). From these ahruf, seven widely-transmitted recitational traditions (qira'at) were authenticated by the scholar Ibn Mujahid (d. 324 AH), later extended to ten by Ibn al-Jazari (d. 833 AH). Each qira'at is traced by an unbroken chain of reliable transmitters (isnad) back to the Prophet ﷺ.
          </p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="border-b border-gold/20 text-left">
                  <th className="py-3 px-4 text-forest/50 text-xs font-semibold uppercase">Imam</th>
                  <th className="py-3 px-4 text-forest/50 text-xs font-semibold uppercase">Transmission</th>
                  <th className="py-3 px-4 text-forest/50 text-xs font-semibold uppercase">Region of Prevalence</th>
                </tr>
              </thead>
              <tbody>
                {QIRAAT_INFO.map(q => (
                  <tr key={q.name} className="border-b border-gold/10">
                    <td className="py-3 px-4 text-forest font-medium text-sm">{q.name}</td>
                    <td className="py-3 px-4 text-forest/60 text-sm">{q.students}</td>
                    <td className="py-3 px-4 text-forest/60 text-sm">{q.region}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-forest/70 text-sm leading-relaxed">
            The Hafs an Asim reading is the most widely used globally, including across the Middle East, Asia, and much of the world. The Warsh an Nafi' reading is used across North Africa and West Africa.
          </p>
        </section>

        {/* Tajweed */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            Tajweed: The Rules of Recitation
          </h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-6">
            Tajweed (Arabic: تجويد, meaning "to do well" or "to improve") is the science of reciting the Quran correctly, giving each letter its due rights: its place of articulation, its qualities, and any rules that govern how it interacts with adjacent letters. The Prophet ﷺ was commanded: <em>"...and recite the Quran with measured recitation."</em> (Al-Muzzammil 73:4)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {TAJWEED_RULES.map(rule => (
              <div key={rule.rule} className="card-islamic">
                <p
                  dir="rtl"
                  lang="ar"
                  className="arabic-sm text-gold mb-1.5"
                  aria-hidden="true"
                >
                  {rule.arabic}
                </p>
                <h3 className="font-garamond text-base font-semibold text-forest mb-2">{rule.rule}</h3>
                <p className="text-forest/60 text-sm leading-relaxed">{rule.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* I'jaz al-Quran */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            I'jaz al-Quran: The Miraculous Nature
          </h2>
          <p className="text-forest/70 leading-relaxed text-sm mb-5">
            I'jaz al-Quran is the doctrine that the Quran is a miracle inimitable in its linguistic excellence, structure, and content. Allah challenged all of humanity: <em>"Say: If mankind and the jinn gathered in order to produce the like of this Quran, they could not produce the like of it, even if they were to each other assistants."</em> (Al-Isra 17:88)
          </p>
          <div className="space-y-4">
            {[
              { aspect: 'Literary Inimitability (Balaghah)', detail: "The Quran's Arabic is of a register and eloquence that transcends poetry and prose alike. Arab masters of classical poetry, who had devoted their lives to language, recognised this: poets such as al-Walid ibn al-Mughirah described it as possessing a 'sweetness' and 'beauty' unlike any human speech." },
              { aspect: 'Preservation', detail: "The Quran is the only scripture in history preserved letter-perfect for 14+ centuries, verifiable by millions of living huffaz whose memorisation goes back in an unbroken chain to the Prophet ﷺ himself." },
              { aspect: 'Coherence (Nazm)', detail: "Despite being revealed over 23 years in fragments across diverse circumstances, the Quran forms a unified, coherent whole. Each surah has an internal coherence and the entire book has a structural logic that has fascinated scholars for centuries." },
              { aspect: 'Scientific Allusions', detail: "Many modern scholars point to the Quran's accurate descriptions of embryonic development, cosmology, and oceanography as remarkable given the 7th-century context. This is a point of ongoing scholarly discussion rather than a primary proof of i'jaz." },
            ].map(item => (
              <div key={item.aspect} className="card-islamic">
                <h3 className="font-garamond text-base font-semibold text-forest mb-2">{item.aspect}</h3>
                <p className="text-forest/60 text-sm leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
