'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';

const TITLE: Record<string, string> = {
  en: `Adab al-Nawm, The Etiquettes of Sleep`,
  ms: `Adab al-Nawm, Adab Tidur`,
  tur: `Âdâbü'n-Nevm, Uyku Âdâbı`,
  urd: `آدابِ نوم، سونے کے آداب`,
  ben: `আদাব আল-নাওম, ঘুমের আদব`,
  fas: `آداب نوم، آداب خواب`,
  zh: `睡眠之礼节，「阿达布·纳乌姆」`,
  yue: `睡眠之禮節，「阿達布·納烏姆」`,
  ja: `眠りの作法，アダーブ・アン＝ナウム`,
  ru: `Этикет сна, Адаб ан-Наум`,
  es: `Adab al-Nawm, la etiqueta del sueño`,
  ko: `잠의 예절, 아다브 안나움`,
  ta: `ஆதாப் அன்-நவ்ம், தூக்கத்தின் நடத்தை`,
  si: `අදාබ් අන්-නව්ම්, නින්දේ අදාබ්`,
};

const SUBTITLE: Record<string, string> = {
  en: `The Sunnah of preparing for sleep, the du'as before and on waking, the reasons behind each practice, and what the Prophet ﷺ said about the soul's condition in sleep.`,
  ms: `Sunnah persiapan untuk tidur, doa sebelum tidur dan ketika bangun, sebab di sebalik setiap amalan, dan apa yang Nabi ﷺ katakan tentang keadaan roh dalam tidur.`,
  tur: `Uyumaya hazırlanmanın Sünneti, uykudan önce ve uyanışta okunan duâlar, her uygulamanın sebebi ve Hz. Peygamber'in ﷺ uykudaki ruhun hâli hakkındaki sözleri.`,
  urd: `سونے کی تیاری کی سنت، سونے سے پہلے اور جاگنے پر دعائیں، ہر عمل کے پیچھے سبب، اور نبی ﷺ نے سونے میں روح کی حالت کے بارے میں کیا فرمایا۔`,
  ben: `ঘুমানোর প্রস্তুতির সুন্নাহ, ঘুমানোর পূর্বে ও জেগে ওঠার সময়ের দোয়া, প্রতিটি অনুশীলনের পিছনের কারণ, এবং ঘুমে আত্মার অবস্থা সম্পর্কে নবী ﷺ কী বলেছেন।`,
  fas: `سنت آماده شدن برای خواب، دعای پیش از خواب و بیدار شدن، سبب پشت هر عمل، و آنچه پیامبر ﷺ درباره‌ی حال روح در خواب فرمود.`,
  zh: `就寝准备之圣行、寝前与醒时之祈祷、每项行为之背后原因，以及先知 ﷺ 论睡眠中灵魂状态之言。`,
  yue: `就寢準備之聖行、寢前同醒時之祈禱、每項行為背後嘅原因，以及先知 ﷺ 論睡眠中靈魂狀態之言。`,
  ja: `眠りへの備えのスンナ、就寝前と目覚めの祈願、それぞれの行為の理由、そして眠りにおける魂の状態について預言者 ﷺ が述べられたこと。`,
  ru: `Сунна подготовки ко сну, дуа перед сном и по пробуждении, причины каждой практики и то, что Пророк ﷺ говорил о состоянии души во сне.`,
  es: `La Sunna de prepararse para dormir, las du'as antes y al despertar, las razones detrás de cada práctica, y lo que el Profeta ﷺ dijo sobre el estado del alma en el sueño.`,
  ko: `잠자리에 드는 순나, 잠들기 전과 깨어날 때의 두아, 각 관행의 이유, 그리고 잠 속 영혼의 상태에 관해 예언자 ﷺ 께서 하신 말씀.`,
  ta: `உறங்குவதற்குத் தயாராகும் ஸுன்னா, உறங்குமுன் மற்றும் விழிக்கும்போது பிரார்த்தனைகள், ஒவ்வொரு நடைமுறையின் பின்னாலுள்ள காரணங்கள், மற்றும் நபி ﷺ உறக்கத்தில் ஆன்மாவின் நிலை பற்றி கூறியவை.`,
  si: `නින්දට සූදානම් වීමේ සුන්නාව, නින්දට පෙර සහ අවදි වන විට දුආ, සෑම භාවිතයක්ම පිටුපස ඇති හේතූන්, සහ නබි ﷺ තුමා නින්දේදී ආත්මයේ තත්ත්වය ගැන පැවසූ දේ.`,
};

const PRE_SLEEP_DUA_AR = 'بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا.';
const PRE_SLEEP_DUA_TR = "Bismika Allahumma amutu wa ahya.";
const PRE_SLEEP_DUA_EN = 'In Your name, O Allah, I die and I live.';

const WAKE_DUA_AR = 'الْحَمْدُ لِلَّهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ.';
const WAKE_DUA_TR = "Alhamdulillahi-l ladhi ahyana ba'da ma amatana wa ilayhi-n nushur.";
const WAKE_DUA_EN = 'All praise is due to Allah who has given us life after having caused us to die, and to Him is the return.';

const BAD_DREAM_DUA_AR = 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ.';
const BAD_DREAM_DUA_TR = "A'udhu billahi mina-sh shaytani-r rajim.";

const AYATUL_KURSI_TAG_AR = 'اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ... (البقرة 255)';

export function SleepEtiquetteContent() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="آدَابُ النَّوْم"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        {/* Wudu before sleep */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Wudu Before Sleep
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              The Prophet ﷺ said: <em>“When you go to your bed, perform wudu as you would for the prayer, then lie down on your right side.”</em>
            </p>
            <p className="text-forest/70 text-sm leading-relaxed">
              Sleeping in a state of ritual purity is a Sunnah mu’akkadah. The scholars mention that the soul in sleep is presented before Allah, and being purified is a mark of honour for that state. If you cannot make wudu (illness, injury), tayamum suffices; if neither is possible, sleep in whatever state you are in, with no sin.
            </p>
            <p className="text-xs text-gold/60 italic">Source: al-Bukhari 247, Muslim 2710 (al-Bara ibn Azib).</p>
          </article>
        </section>

        {/* Right side */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Sunnah Posture: Right Side
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              The Sunnah is to lie on the <strong>right</strong> side, placing the right hand under the right cheek. Sleeping on the back is permitted (and mentioned in some ahadith) but the initial posture on going to bed is the right side.
            </p>
            <p className="text-forest/70 text-sm leading-relaxed">
              Hudhayfah (ra) said: <em>“When the Prophet ﷺ went to his bed at night he would place his hand under his cheek and say ‘Bismika Allahumma amutu wa ahya’ …”</em>
            </p>
            <p className="text-forest/70 text-sm leading-relaxed">
              Sleeping face-down is explicitly discouraged. Abu Umama narrates the Prophet ﷺ passing a man lying on his stomach and saying: <em>“This is a posture Allah does not love.”</em>
            </p>
            <p className="text-xs text-gold/60 italic">Sources: al-Bukhari 6314 (Hudhayfah), Abu Dawud 5040 and Ibn Majah 3723 for the face-down prohibition.</p>
          </article>
        </section>

        {/* Pre-sleep dua */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Du'a Before Sleeping
          </h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={PRE_SLEEP_DUA_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">Transliteration</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{PRE_SLEEP_DUA_TR}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">Meaning</p>
              <p className="text-forest/75 text-sm leading-relaxed">{PRE_SLEEP_DUA_EN}</p>
            </div>
            <p className="text-forest/70 text-sm leading-relaxed">
              A concise du’a placing life and death, waking and sleep, entirely in Allah’s hand. The Prophet ﷺ used it every night.
            </p>
            <p className="text-xs text-gold/60 italic">Source: al-Bukhari 6314, 6324 (Hudhayfah); Bukhari 6312 has the waking counterpart.</p>
          </article>
        </section>

        {/* Recitations */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Prophetic Recitations at Bedtime
          </h2>
          <article className="card-islamic space-y-4">
            <div>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">1. Ayat al-Kursi</p>
              <ArabicText text={AYATUL_KURSI_TAG_AR} size="sm" />
              <p className="text-forest/70 text-sm leading-relaxed mt-2">
                Whoever recites Ayat al-Kursi at night has an appointed guardian from Allah, and no shaytan comes near them until morning.
              </p>
              <p className="text-xs text-gold/60 italic">Source: al-Bukhari 5010 (Abu Hurayra).</p>
            </div>

            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">2. The Last Two Verses of al-Baqarah</p>
              <p className="text-forest/70 text-sm leading-relaxed">
                The Prophet ﷺ said: <em>“Whoever recites the two verses at the end of Surat al-Baqarah at night, they will suffice him.”</em>
              </p>
              <p className="text-xs text-gold/60 italic">Source: al-Bukhari 4008, Muslim 807 (Abu Mas’ud).</p>
            </div>

            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">3. al-Ikhlas + al-Falaq + al-Nas, three times each, blowing into the palms</p>
              <p className="text-forest/70 text-sm leading-relaxed">
                ‘Aisha (ra) reported that every night before sleep the Prophet ﷺ would join his palms, blow into them, and recite Qul huwa Allahu Ahad, Qul a’udhu bi rabbi-l falaq, and Qul a’udhu bi rabbi-n nas, then wipe them over as much of his body as he could reach, beginning with the head, face, and front of his body. He did this three times.
              </p>
              <p className="text-xs text-gold/60 italic">Source: al-Bukhari 5017 (‘Aisha).</p>
            </div>

            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">4. Dust off the bed three times</p>
              <p className="text-forest/70 text-sm leading-relaxed">
                Abu Hurayra (ra) reported: <em>“When any of you goes to his bed, let him take a corner of his lower garment and dust off his bed with it three times, and let him say ‘Bismillah’, for he does not know what has come onto it after him.”</em>
              </p>
              <p className="text-xs text-gold/60 italic">Source: al-Bukhari 6320, Muslim 2714.</p>
            </div>
          </article>
        </section>

        {/* Bad dream */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            On Waking From a Bad Dream
          </h2>
          <article className="card-islamic space-y-4">
            <p className="text-forest/75 text-sm leading-relaxed">
              The Prophet ﷺ said: <em>“A good dream is from Allah, and a bad dream is from the shaytan. If any of you sees what he dislikes, let him spit lightly to his left three times when he wakes up, seek refuge in Allah from its evil, and not mention it to anyone. It will not harm him.”</em>
            </p>
            <ArabicText text={BAD_DREAM_DUA_AR} size="md" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">Transliteration</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{BAD_DREAM_DUA_TR}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">Meaning</p>
              <p className="text-forest/75 text-sm leading-relaxed">I seek refuge with Allah from the accursed shaytan.</p>
            </div>
            <p className="text-forest/70 text-sm leading-relaxed">
              He should also turn onto his other side, and if he wishes, pray two rakat. He should not mention or interpret the dream, for the shaytan hopes it will trouble him. A good dream, by contrast, may be shared only with those who love him.
            </p>
            <p className="text-xs text-gold/60 italic">Source: al-Bukhari 3292, Muslim 2261 (Abu Salama, Abu Qatada, Jabir).</p>
          </article>
        </section>

        {/* Wake dua */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Du'a on Waking
          </h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={WAKE_DUA_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">Transliteration</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{WAKE_DUA_TR}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">Meaning</p>
              <p className="text-forest/75 text-sm leading-relaxed">{WAKE_DUA_EN}</p>
            </div>
            <p className="text-forest/70 text-sm leading-relaxed">
              The Prophet ﷺ said this every morning, treating the daily cycle of sleep and waking as a rehearsal for the greater sleep and greater rising. Waking with hamd on the tongue turns an ordinary reflex into an act of worship.
            </p>
            <p className="text-xs text-gold/60 italic">Source: al-Bukhari 6312 (Hudhayfah).</p>
          </article>
        </section>

        {/* Wisdom */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Wisdom Behind the Sleep Sunnah
          </h2>
          <article className="card-forest rounded-2xl p-6 space-y-3">
            <p className="text-cream/85 text-sm leading-relaxed">
              The Qur’an calls sleep a <em>lesser death</em>: <em>“Allah takes the souls at the moment of their death, and those that have not died in their sleep. He keeps those upon which He has decreed death, and sends the rest back until an appointed term”</em> (al-Zumar 39:42).
            </p>
            <p className="text-cream/85 text-sm leading-relaxed">
              The Prophet’s ﷺ etiquette for going to bed is thus not superstition but preparation: purify the body (wudu), fortify the soul with Qur’an (Ayat al-Kursi, the two ‘seeking-refuge’ surahs, the last verses of al-Baqarah), place life and death consciously in Allah’s hand (Bismika Allahumma…). If the soul is returned, one wakes to praise (Alhamdulillah alladhi ahyana…). If it is kept, one has died in the best state a servant can die in, purified, mentioning Allah, on the right side, facing the qiblah.
            </p>
            <p className="text-cream/85 text-sm leading-relaxed">
              This is why the classical scholars called the bedtime Sunnah <em>“the equipment of the traveller,”</em> because every night is a rehearsal for the journey none of us can miss.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
