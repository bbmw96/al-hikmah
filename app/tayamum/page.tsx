import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Tayamum: Dry Ablution | Al-Hikmah',
  description:
    'Complete guide to Tayamum: the story of its revelation during the expedition of Banu al-Mustaliq, Quranic permission in al-Maidah 5:6 and an-Nisa 4:43, conditions, step-by-step method, and scholarly positions.',
};

const PERMITTED_CONDITIONS = [
  {
    n: '01',
    title: 'Absence of Water',
    body: "When water cannot be found after a sincere search within the surrounding area. The traveller must make a genuine effort to locate water before resorting to Tayamum. If water is believed to exist at a distance that would cause hardship to the group, or would mean missing the prayer time, Tayamum is permitted.",
  },
  {
    n: '02',
    title: 'Illness or Medical Condition',
    body: "When using water would worsen an illness, aggravate a wound, cause significant pain, or unreasonably delay recovery. This includes broken limbs in casts, open wounds, skin conditions harmed by water, and post-surgical patients. A physician's advice strengthens this permission, but personal knowledge of one's own body also suffices.",
  },
  {
    n: '03',
    title: 'Extreme Cold Without Means of Heating',
    body: "When one is in severe cold without any way to heat water, and using cold water would cause genuine harm to the body — not mere discomfort, but actual risk of illness or injury. The majority of scholars require this risk to be real and substantiated.",
  },
  {
    n: '04',
    title: 'Water Needed for Drinking or Cooking',
    body: "When water is available but is required for drinking or cooking — for oneself, travelling companions, or even animals. The preservation of life takes precedence over ritual purification. Tayamum is performed and the water is protected for essential use.",
  },
  {
    n: '05',
    title: 'Fear of Missing an Irreplaceable Prayer',
    body: "According to the Hanafi school, Tayamum is also permitted when searching for water would cause one to miss a prayer that cannot be made up — such as Jumu'ah (Friday prayer), either Eid prayer, or the Janazah (funeral prayer), which has no qada'.",
  },
];

const NOT_VALID_CONDITIONS = [
  {
    title: 'Water is available and accessible',
    body: 'If clean water is nearby and reachable without genuine hardship, Tayamum is not valid. The obligation returns immediately to wudu or ghusl.',
  },
  {
    title: 'No genuine effort was made to search for water',
    body: 'A sincere search for water within a reasonable distance is a precondition of Tayamum. Simply assuming water is absent without looking does not fulfil this condition.',
  },
  {
    title: 'The permitting condition has ended',
    body: 'The moment the illness heals, water becomes available, the cold abates, or any other permitting condition ends — Tayamum is invalidated immediately.',
  },
  {
    title: 'Deliberate disposal of water to avoid purification',
    body: "If a person intentionally disposed of water specifically to avoid the obligation of wudu or ghusl, the majority of scholars hold that Tayamum is not valid — a person cannot manufacture their own concession through deliberate negligence.",
  },
  {
    title: 'Using an impure or non-earth substance',
    body: "Tayamum must be performed on sa'id tayyib — clean earth or a surface of the earth. Impure soil, or materials not derived from the earth (metal, wood, plastic without dust), do not make Tayamum valid.",
  },
];

const STEPS = [
  {
    step: 1,
    title: 'Intention (Niyyah)',
    arabic: null,
    body: "Form the intention in your heart that you are performing Tayamum to remove minor impurity (in place of wudu) or major impurity (in place of ghusl). Intention is an inward act; it need not be spoken aloud.",
  },
  {
    step: 2,
    title: 'Say Bismillah',
    arabic: 'بِسْمِ اللَّهِ',
    body: "Begin by saying 'Bismillah' — as with all acts of worship. This is a confirmed sunnah according to the majority, and obligatory according to the Hanbali school.",
  },
  {
    step: 3,
    title: 'Strike the Earth Once',
    arabic: null,
    body: "Press both palms simultaneously, firmly, onto clean earth, sand, stone, or a dusty surface. One strike is all that is required. Gently blow off or brush away any excess dust from the palms before wiping.",
  },
  {
    step: 4,
    title: 'Wipe the Entire Face',
    arabic: null,
    body: "Using both palms together, wipe the entire face once — from the hairline (where hair begins) down to the chin, and from earlobe to earlobe. Ensure the full face is covered in one smooth motion.",
  },
  {
    step: 5,
    title: 'Wipe Both Hands',
    arabic: null,
    body: "Wipe the back of the right hand with the left palm, then the back of the left hand with the right palm. The strongest hadith evidence supports wiping to the wrists only (Hanbali school, preferred by hadith scholars). The Shafi'i school requires wiping to the elbows. Both positions are established.",
  },
];

const INVALIDATORS = [
  {
    title: 'Finding or accessing water',
    body: "The moment clean water becomes available and accessible, Tayamum is invalidated — even during prayer, according to the Maliki and Shafi'i schools.",
  },
  {
    title: 'The permitting condition ending',
    body: "Recovery from illness, the journey ending, the cold becoming safe — whenever the excuse that permitted Tayamum is removed, the Tayamum ends.",
  },
  {
    title: 'Anything that breaks wudu',
    body: "When Tayamum replaced wudu, all the same nullifiers — urination, defecation, deep sleep, unconsciousness, certain bodily emissions — also break Tayamum.",
  },
  {
    title: 'Anything that necessitates ghusl',
    body: "When Tayamum replaced ghusl, the same events that necessitate ghusl (janabah, end of menses) again invalidate the Tayamum and require a new Tayamum or ghusl.",
  },
];

export default function TayamumPage() {
  return (
    <>
      <PageHeader
        title="Tayamum: Dry Ablution"
        arabicTitle="التَّيَمُّم"
        subtitle="Allah's mercy for the traveller, the ill, and those without water — purification through clean earth when water cannot be used."
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

        {/* Opening verse */}
        <div className="card-gold text-center">
          <ArabicText
            text="فَتَيَمَّمُوا صَعِيدًا طَيِّبًا فَامْسَحُوا بِوُجُوهِكُمْ وَأَيْدِيكُم مِّنْهُ ۚ مَا يُرِيدُ اللَّهُ لِيَجْعَلَ عَلَيْكُم مِّنْ حَرَجٍ"
            size="lg"
            className="mb-4"
          />
          <p className="text-forest/70 italic text-sm leading-relaxed">
            &ldquo;...seek clean earth and wipe over your faces and your hands with it.
            Allah does not intend to place difficulty upon you...&rdquo;
            <span className="not-italic text-forest/50 ml-1">— Surah al-Mā&apos;idah 5:6</span>
          </p>
        </div>

        {/* What is Tayamum */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            What is Tayamum?
          </h2>
          <div className="space-y-4 text-forest/80 leading-relaxed">
            <p>
              <strong>Tayamum</strong> (التَّيَمُّم) is the Islamic ritual of dry purification — a
              divinely-sanctioned substitute for wudu (minor ablution) and ghusl (full-body
              purification) when water is unavailable, inaccessible, or when its use would cause
              genuine harm. The word comes from the Arabic root meaning &ldquo;to intend&rdquo; or
              &ldquo;to direct oneself towards something good.&rdquo;
            </p>
            <p>
              Tayamum is performed using <em>ṣa&apos;īd ṭayyib</em> (صَعِيدًا طَيِّبًا) — clean
              earth, sand, stone, or any clean surface of the earth carrying fine particles. It stands
              as one of the most profound mercies (<em>rukhṣah</em>) Allah has bestowed upon this
              ummah: no matter the circumstances, a Muslim is never cut off from prayer.
            </p>
          </div>
        </section>

        {/* The Story */}
        <section className="bg-forest/5 border border-forest/10 rounded-2xl p-8">
          <h2 className="font-garamond text-2xl font-semibold text-forest mb-1">
            The Night of the Lost Necklace
          </h2>
          <p className="font-garamond italic text-gold text-sm mb-6">
            How Tayamum was revealed — the incident that prompted its divine permission
          </p>

          <div className="bg-cream border border-gold/20 rounded-xl p-6 mb-6">
            <p className="text-forest/75 text-sm leading-relaxed italic mb-3">
              &ldquo;We set out with the Messenger of Allah ﷺ on one of his journeys. When we were
              at a place called al-Bayda&apos;, my necklace broke and fell. The Prophet ﷺ halted to
              search for it, and all the people halted with him — and there was no water with anyone.
            </p>
            <p className="text-forest/75 text-sm leading-relaxed italic mb-3">
              The people went to Abu Bakr al-Siddiq and said: &lsquo;Do you not see what Aisha has
              done? She has made the Messenger of Allah ﷺ and the people stop in a place where there
              is no water.&rsquo; Abu Bakr came to me while the Messenger of Allah ﷺ was sleeping
              with his head on my thigh. He rebuked me severely.
            </p>
            <p className="text-forest/75 text-sm leading-relaxed italic mb-3">
              Then Allah revealed the permission for Tayamum, and Usayd ibn Hudayr said: &lsquo;May
              Allah have mercy on you, O family of Abu Bakr! This is not the first blessing you have
              brought to this community.&rsquo; We made the camel rise, and the necklace was found
              beneath it.&rdquo;
            </p>
            <p className="text-forest/45 text-xs mt-3">
              Narrated by Aisha (RA) · Sahih al-Bukhari 334; Sahih Muslim 367
            </p>
          </div>

          <div className="space-y-3 text-forest/80 text-sm leading-relaxed">
            <p>
              This incident took place during one of the early military expeditions — approximately
              in the fifth or sixth year of the Hijra. The entire Muslim army was encamped far from
              any water source; Fajr was approaching and many were in a state of impurity with no
              means of performing wudu or ghusl.
            </p>
            <p>
              What could have been a crisis became a moment of divine generosity. Through one night
              of distress, a concession was granted not only to those Companions, but to every Muslim
              until the Day of Judgement. The spontaneous praise of Usayd ibn Hudayr captured what
              the Companions felt: this was not merely a logistical solution — it was a mercy
              embedded permanently in the religion.
            </p>
          </div>
        </section>

        {/* Quranic Basis */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            The Quranic Permission
          </h2>
          <div className="space-y-6">

            <div className="card-islamic">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-gold/15 text-gold text-xs font-semibold border border-gold/25">
                  Surah al-Mā&apos;idah 5:6
                </span>
                <span className="text-forest/50 text-xs italic">Primary verse · Madinan</span>
              </div>
              <ArabicText
                text="وَإِن كُنتُم مَّرْضَىٰ أَوْ عَلَىٰ سَفَرٍ أَوْ جَاءَ أَحَدٌ مِّنكُم مِّنَ الْغَائِطِ أَوْ لَامَسْتُمُ النِّسَاءَ فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا فَامْسَحُوا بِوُجُوهِكُمْ وَأَيْدِيكُم مِّنْهُ ۚ مَا يُرِيدُ اللَّهُ لِيَجْعَلَ عَلَيْكُم مِّنْ حَرَجٍ وَلَٰكِن يُرِيدُ لِيُطَهِّرَكُمْ وَلِيُتِمَّ نِعْمَتَهُ عَلَيْكُمْ لَعَلَّكُمْ تَشْكُرُونَ"
                size="lg"
                className="mb-4"
              />
              <p className="text-forest/70 text-sm italic leading-relaxed">
                &ldquo;But if you are ill or on a journey, or one of you comes from the place of
                relieving himself, or you have been in contact with women and find no water — then
                seek clean earth and wipe over your faces and your hands with it. Allah does not
                intend to place difficulty upon you; He intends to purify you and to complete His
                favour upon you that you may be grateful.&rdquo;
              </p>
            </div>

            <div className="card-islamic">
              <div className="flex items-center gap-3 mb-5 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-forest/15 text-forest text-xs font-semibold border border-forest/20">
                  Surah an-Nisā&apos; 4:43
                </span>
                <span className="text-forest/50 text-xs italic">Earlier verse · the first explicit permission for Tayamum</span>
              </div>
              <ArabicText
                text="وَإِن كُنتُم مَّرْضَىٰ أَوْ عَلَىٰ سَفَرٍ أَوْ جَاءَ أَحَدٌ مِّنكُم مِّنَ الْغَائِطِ أَوْ لَامَسْتُمُ النِّسَاءَ فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا فَامْسَحُوا بِوُجُوهِكُمْ وَأَيْدِيكُمْ ۗ إِنَّ اللَّهَ كَانَ عَفُوًّا غَفُورًا"
                size="lg"
                className="mb-4"
              />
              <p className="text-forest/70 text-sm italic leading-relaxed">
                &ldquo;But if you are ill or on a journey, or one of you comes from the place of
                relieving himself, or you have touched women and find no water — then seek clean
                earth and wipe your faces and your hands with it. Indeed, Allah is ever Pardoning
                and Forgiving.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* When Permitted */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            When Tayamum is Permitted
          </h2>
          <p className="text-forest/70 mb-8 leading-relaxed text-sm">
            Scholars of all four major schools agree that Tayamum is valid in the following
            circumstances:
          </p>
          <div className="space-y-4">
            {PERMITTED_CONDITIONS.map(({ n, title, body }) => (
              <div key={n} className="card-islamic flex gap-5">
                <div className="font-garamond text-3xl font-semibold text-gold/30 leading-none flex-shrink-0 w-10 pt-0.5">
                  {n}
                </div>
                <div>
                  <h3 className="font-garamond text-lg font-semibold text-forest mb-1.5">{title}</h3>
                  <p className="text-forest/70 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* When Not Valid */}
        <section className="bg-midnight/5 border border-midnight/10 rounded-2xl p-8">
          <h2 className="font-garamond text-2xl font-semibold text-midnight mb-3">
            When Tayamum Cannot Be Performed
          </h2>
          <p className="text-forest/70 text-sm mb-6 leading-relaxed">
            Tayamum is a concession (<em>rukhṣah</em>), not a general substitute. The following
            circumstances make Tayamum impermissible:
          </p>
          <ul className="space-y-4">
            {NOT_VALID_CONDITIONS.map(({ title, body }, i) => (
              <li key={i} className="flex gap-3">
                <div className="mt-1.5 w-2 h-2 rounded-full bg-midnight/35 flex-shrink-0" />
                <div>
                  <span className="font-semibold text-forest text-sm">{title}: </span>
                  <span className="text-forest/70 text-sm leading-relaxed">{body}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* How to Perform */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            How to Perform Tayamum
          </h2>

          <div className="bg-gold/8 border border-gold/20 rounded-xl p-5 mb-8">
            <p className="text-forest/80 text-sm leading-relaxed">
              <strong>The established method:</strong> The Prophet ﷺ corrected Ammar ibn Yasir
              when he rolled his entire body in the earth — demonstrating that one single firm
              strike of the palms onto clean earth, followed by wiping the face and the hands, is
              sufficient. This is the position supported by the clearest hadith evidence and adopted
              by Imam Ahmad and the majority of hadith scholars.
            </p>
          </div>

          <div className="space-y-4 mb-8">
            {STEPS.map(({ step, title, arabic, body }) => (
              <div key={step} className="card-islamic flex gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center flex-shrink-0 font-garamond font-semibold text-gold">
                  {step}
                </div>
                <div className="flex-1">
                  <h3 className="font-garamond text-lg font-semibold text-forest mb-1">{title}</h3>
                  {arabic && (
                    <p dir="rtl" lang="ar" className="arabic text-gold text-right mb-2">
                      {arabic}
                    </p>
                  )}
                  <p className="text-forest/70 text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card-gold text-sm text-forest/80 leading-relaxed">
            <strong>What counts as ṣa&apos;īd ṭayyib (clean earth):</strong> Soil, sand, stone,
            rock, earthen walls, or any clean surface carrying fine earthen particles. It must be
            clean (ṭāhir) and pure. The Maliki school permits Tayamum on any clean surface of the
            earth even without visible dust; Imam Malik and Imam Shafi&apos;i require visible fine
            particles. All agree the substance must be derived from the earth.
          </div>
        </section>

        {/* What Tayamum Achieves */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            What Tayamum Achieves
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="card-islamic border-l-4 border-emerald-500/50">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-3">
                In Place of Wudu (Minor Impurity)
              </h3>
              <p className="text-forest/70 text-sm leading-relaxed">
                Tayamum performed in place of wudu permits everything wudu permits: the five daily
                prayers, recitation from the Muṣḥaf, tawaf of the Ka&apos;bah, and all acts of
                worship requiring minor purity.
              </p>
            </div>
            <div className="card-islamic border-l-4 border-sky-500/50">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-3">
                In Place of Ghusl (Major Impurity)
              </h3>
              <p className="text-forest/70 text-sm leading-relaxed">
                Tayamum performed in place of ghusl (after janabah, menstruation, or postpartum
                bleeding) allows one to pray. Once water becomes available, ghusl must still be
                performed — Tayamum is a temporary substitute, not a permanent one.
              </p>
            </div>
          </div>
          <div className="bg-gold/8 border border-gold/20 rounded-xl p-5 text-sm text-forest/80 leading-relaxed">
            <strong>Multiple prayers with one Tayamum:</strong> A single Tayamum may be used for
            multiple prayers as long as the purification remains unbroken and the condition
            permitting Tayamum still holds. The moment water becomes available, Tayamum is
            invalidated and wudu or ghusl must be performed before the next prayer.
          </div>
        </section>

        {/* What Invalidates */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
            What Invalidates Tayamum
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {INVALIDATORS.map(({ title, body }, i) => (
              <div key={i} className="card-islamic">
                <h3 className="font-garamond text-base font-semibold text-forest mb-2">{title}</h3>
                <p className="text-forest/70 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Hadith */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
            Key Hadith on Tayamum
          </h2>
          <div className="space-y-6">

            <div className="card-islamic gold-border-left">
              <ArabicText
                text="جُعِلَتْ لِيَ الأَرْضُ مَسْجِدًا وَطَهُورًا، فَأَيُّمَا رَجُلٍ أَدْرَكَتْهُ الصَّلَاةُ صَلَّى حَيْثُ كَانَ"
                size="md"
                className="mb-3"
              />
              <p className="text-forest/70 text-sm italic leading-relaxed mb-2">
                &ldquo;The earth has been made for me a place of prostration and a means of
                purification. Wherever a man is when the time of prayer comes, let him pray
                there.&rdquo;
              </p>
              <p className="text-forest/45 text-xs mb-3">
                Narrated by Jabir ibn Abdallah (RA) · Sahih al-Bukhari 335; Sahih Muslim 521
              </p>
              <p className="text-forest/65 text-sm leading-relaxed">
                This is one of five blessings granted exclusively to the Prophet Muhammad ﷺ and
                his ummah that were not given to previous nations. The earth itself — in all its
                forms — is a means of purification for every Muslim until the end of time.
              </p>
            </div>

            <div className="card-islamic gold-border-left">
              <ArabicText
                text="عَنْ عَمَّارِ بْنِ يَاسِرٍ قَالَ: أَجْنَبْتُ فَلَمْ أَجِدِ الْمَاءَ فَتَمَرَّغْتُ فِي الصَّعِيدِ كَمَا تَتَمَرَّغُ الدَّابَّةُ، ثُمَّ ذَكَرْتُ ذَلِكَ لِلنَّبِيِّ ﷺ فَقَالَ: إِنَّمَا كَانَ يَكْفِيكَ أَنْ تَقُولَ هَكَذَا، وَضَرَبَ بِيَدَيْهِ الأَرْضَ ضَرْبَةً وَاحِدَةً، ثُمَّ مَسَحَ الشِّمَالَ عَلَى الْيَمِينِ وَظَاهِرَ كَفَّيْهِ وَوَجْهَهُ"
                size="md"
                className="mb-3"
              />
              <p className="text-forest/70 text-sm italic leading-relaxed mb-2">
                Ammar ibn Yasir (RA) narrates: &ldquo;I became junub and found no water, so I
                rolled in the dust as an animal rolls. I then mentioned this to the Prophet ﷺ, and
                he said: &lsquo;This would have been sufficient for you&rsquo; — and he struck the
                earth with both hands once, then wiped the left hand over the right and the outer
                surface of his palms and his face.&rdquo;
              </p>
              <p className="text-forest/45 text-xs mb-3">
                Sahih al-Bukhari 347; Sahih Muslim 368
              </p>
              <p className="text-forest/65 text-sm leading-relaxed">
                This is the foundational hadith for the method of Tayamum. The Prophet&apos;s
                correction of Ammar establishes that one single strike — not rolling in the earth
                or multiple strikes — is what is required. This narration is relied upon by Imam
                Ahmad, Imam al-Bukhari, and the majority of hadith scholars.
              </p>
            </div>

            <div className="card-islamic gold-border-left">
              <ArabicText
                text="الصَّعِيدُ الطَّيِّبُ طَهُورُ الْمُسْلِمِ وَإِنْ لَمْ يَجِدِ الْمَاءَ عَشْرَ سِنِينَ"
                size="md"
                className="mb-3"
              />
              <p className="text-forest/70 text-sm italic leading-relaxed mb-2">
                &ldquo;Clean earth is a purifier for the Muslim even if he does not find water for
                ten years.&rdquo;
              </p>
              <p className="text-forest/45 text-xs mb-3">
                Narrated by Abu Dharr al-Ghifari (RA) · Sunan Abu Dawud 332; Sunan
                al-Tirmidhi 124 (Hasan Sahih)
              </p>
              <p className="text-forest/65 text-sm leading-relaxed">
                Tayamum is not time-limited. A person on a prolonged journey — or in any lasting
                situation without water access — may continue performing Tayamum for every prayer
                indefinitely, for as long as the permitting condition persists.
              </p>
            </div>
          </div>
        </section>

        {/* Closing verse */}
        <div className="card-forest text-center p-8">
          <ArabicText
            text="وَمَا جَعَلَ عَلَيْكُمْ فِي الدِّينِ مِنْ حَرَجٍ"
            size="xl"
            className="mb-4"
          />
          <p className="text-cream/70 italic text-sm">
            &ldquo;And He has not placed upon you in the religion any difficulty.&rdquo;
            <span className="not-italic ml-1">— Surah al-Hajj 22:78</span>
          </p>
        </div>

      </div>
    </>
  );
}
