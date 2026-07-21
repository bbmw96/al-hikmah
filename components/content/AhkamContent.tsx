'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { useLanguage } from '@/lib/i18n/context';

const TITLE: Record<string, string> = {
  en: `The Five Ahkam, Halal, Haram, Makruh, Wajib, Mustahabb, Mubah`,
  ms: `Lima Ahkam, Halal, Haram, Makruh, Wajib, Mustahabb, Mubah`,
  tur: `Beş Hüküm, Helâl, Harâm, Mekrûh, Vâcib, Müstehab, Mübâh`,
  urd: `پانچ احکام، حلال، حرام، مکروہ، واجب، مستحب، مباح`,
  ben: `পাঁচটি আহকাম, হালাল, হারাম, মাকরুহ, ওয়াজিব, মুস্তাহাব, মুবাহ`,
  fas: `پنج حکم، حلال، حرام، مکروه، واجب، مستحب، مباح`,
  zh: `五定断，合法、禁止、可憎、必尽、可嘉、允许`,
  yue: `五定斷，合法、禁止、可憎、必盡、可嘉、允許`,
  ja: `五つの法的判断，ハラール、ハラーム、マクルーフ、ワージブ、ムスタハッブ、ムバーフ`,
  ru: `Пять ахкам, халяль, харам, макрух, ваджиб, мустахабб, мубах`,
  es: `Los cinco ahkam, halal, haram, makruh, wajib, mustahabb, mubah`,
  ko: `다섯 아흐캄, 할랄, 하람, 마크루흐, 와지브, 무스타합, 무바흐`,
  ta: `ஐந்து அஹ்காம், ஹலால், ஹராம், மக்ரூஹ், வாஜிப், முஸ்தஹப், முபாஹ்`,
  si: `පඤ්ච අහ්කාම්, හලාල්, හරාම්, මක්‍රූහ්, වාජිබ්, මුස්තහබ්බ්, මුබාහ්`,
};

const SUBTITLE: Record<string, string> = {
  en: `The five categories of legal ruling in Islam, what each means, the classical scholarly definitions, examples across worship and daily life, and how each was derived from Quran and Sunnah.`,
  ms: `Lima kategori hukum syariah dalam Islam, makna setiap satu, definisi ulama klasik, contoh dalam ibadah dan kehidupan seharian, dan bagaimana setiap diambil dari al-Quran dan Sunnah.`,
  tur: `İslam'da hukukî hükmün beş kategorisi, her birinin manası, klasik âlimlerin tarifleri, ibadetten günlük hayata örnekler ve her birinin Kur'an ve Sünnetten nasıl çıkarıldığı.`,
  urd: `اسلام میں شرعی حکم کی پانچ اقسام، ہر ایک کا معنیٰ، کلاسیکی علماء کی تعریفیں، عبادت اور روزمرہ زندگی سے مثالیں، اور ہر ایک کو قرآن و سنت سے کیسے اخذ کیا گیا۔`,
  ben: `ইসলামে শরীয়াহ বিধানের পাঁচটি বিভাগ, প্রতিটির অর্থ, ধ্রুপদী আলিমদের সংজ্ঞা, ইবাদত ও দৈনন্দিন জীবনের উদাহরণ, এবং প্রতিটি কীভাবে কুরআন ও সুন্নাহ থেকে গৃহীত।`,
  fas: `پنج دسته‌ی حکم شرعی در اسلام، معنای هر یک، تعریف علمای کلاسیک، نمونه‌هایی از عبادت و زندگی روزمره، و چگونگی استخراج هر یک از قرآن و سنت.`,
  zh: `伊斯兰教法定断之五类，各之意义、古典学者之定义、涵盖礼拜与日用之实例，以及各自如何自古兰与圣行导出。`,
  yue: `伊斯蘭教法定斷之五類，各之意義、古典學者之定義、涵蓋禮拜與日用之實例，以及各自如何自古蘭與聖行導出。`,
  ja: `イスラームの法的判断の五つの範疇，それぞれの意味、古典学者の定義、崇拝から日常生活までの具体例、そしてそれぞれがクルアーンとスンナからどのように導かれたか。`,
  ru: `Пять категорий правового заключения в Исламе, что означает каждое, определения классических учёных, примеры в поклонении и повседневной жизни, а также как каждое выведено из Корана и Сунны.`,
  es: `Las cinco categorías del fallo jurídico en el islam, qué significa cada una, las definiciones clásicas de los sabios, ejemplos en la adoración y la vida cotidiana, y cómo cada una se derivó del Corán y la Sunna.`,
  ko: `이슬람 법적 판단의 다섯 범주, 각각의 뜻, 고전 학자들의 정의, 예배와 일상생활의 예시, 그리고 각각이 꾸란과 순나로부터 어떻게 도출되었는지.`,
  ta: `இஸ்லாத்தில் சட்டப்பூர்வ தீர்ப்பின் ஐந்து பிரிவுகள், ஒவ்வொன்றின் அர்த்தம், செவ்வியல் அறிஞர்களின் வரையறைகள், வணக்கம் மற்றும் அன்றாட வாழ்க்கையின் எடுத்துக்காட்டுகள், மற்றும் ஒவ்வொன்றும் குர்ஆனிலிருந்தும் ஸுன்னாவிலிருந்தும் எப்படி பெறப்பட்டது.`,
  si: `ඉස්ලාමයේ නීතිමය තීරණයේ කාණ්ඩ පහ, ඒ එක් එක්කම අර්ථය, සම්භාව්‍ය විද්වතුන්ගේ අර්ථ දැක්වීම්, නමස්කාරය සහ දෛනික ජීවිතයෙන් උදාහරණ, සහ ඒ එක් එක්කම කුර්ආනයෙන් සහ සුන්නාවෙන් ලබාගත් ආකාරය.`,
};

interface HukmProps {
  arabic: string;
  translit: string;
  english: string;
  definition: string;
  reward: string;
  penalty: string;
  examples: string[];
  toneAccent: string;
}

function HukmCard({
  arabic,
  translit,
  english,
  definition,
  reward,
  penalty,
  examples,
}: HukmProps) {
  return (
    <article className="card-islamic space-y-4">
      <div className="flex items-baseline justify-between gap-3 flex-wrap">
        <div>
          <p dir="rtl" lang="ar" className="arabic text-3xl text-gold leading-loose">
            {arabic}
          </p>
          <p className="text-forest/60 italic text-sm mt-1">{translit}</p>
        </div>
        <h3 className="font-garamond text-2xl font-semibold text-forest">{english}</h3>
      </div>
      <p className="text-forest/75 text-sm leading-relaxed">{definition}</p>
      <div className="grid sm:grid-cols-2 gap-3">
        <div className="bg-forest/5 rounded-xl p-3">
          <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">Doing it</p>
          <p className="text-forest/75 text-sm leading-relaxed">{reward}</p>
        </div>
        <div className="bg-forest/5 rounded-xl p-3">
          <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">Leaving it</p>
          <p className="text-forest/75 text-sm leading-relaxed">{penalty}</p>
        </div>
      </div>
      <div className="border-t border-gold/10 pt-3">
        <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">Examples</p>
        <ul className="text-forest/70 text-sm space-y-1 list-disc list-inside">
          {examples.map((ex, i) => <li key={i}>{ex}</li>)}
        </ul>
      </div>
    </article>
  );
}

export function AhkamContent() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="الأَحْكَامُ الخَمْسَة"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        {/* Introduction */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Framework
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              Classical Islamic scholarship classifies every human action into one of five categories, called <em>al-ahkam al-khamsa</em>, the five rulings. Every action, from praying to eating a date to opening a business, sits in one of them. The five are: <strong>Fard</strong> or <strong>Wajib</strong> (obligatory), <strong>Mustahabb</strong> or <strong>Sunnah</strong> (recommended), <strong>Mubah</strong> (permitted), <strong>Makruh</strong> (disliked), and <strong>Haram</strong> (forbidden).
            </p>
            <p className="text-forest/75 text-sm leading-relaxed">
              The rulings are derived from four classical sources (<em>usul al-fiqh</em>): the Qur’an, the Sunnah, the consensus of the scholars (<em>ijma’</em>), and analogical reasoning (<em>qiyas</em>). Understanding this framework is the entry-point to fiqh, and to understanding how Islamic law describes rather than legislates every corner of a Muslim’s day.
            </p>
          </article>
        </section>

        <HukmCard
          arabic="فَرْض / وَاجِب"
          translit="Fard / Wajib"
          english="Obligatory"
          definition="A command from Allah or His Messenger ﷺ, established by definitive proof (Qur'an, mutawatir Sunnah, or ijma'). The Hanafi school distinguishes fard (definitive proof) from wajib (strong but non-definitive proof); the other three schools treat them as synonyms."
          reward="Reward, and the act itself is part of faith. Rejecting a fard entirely puts a person outside Islam."
          penalty="Sin, punishable in the next life. Omitting a fard without valid excuse is a major sin."
          examples={[
            'The five daily prayers.',
            'Fasting the month of Ramadan.',
            "Zakat when its conditions are met.",
            'Hajj once in a lifetime for those who can afford it.',
            'Believing in Allah, His angels, books, messengers, the Day of Judgement, and destiny.',
          ]}
          toneAccent=""
        />

        <HukmCard
          arabic="مُسْتَحَبّ / مَنْدُوب / سُنَّة"
          translit="Mustahabb / Mandub / Sunnah"
          english="Recommended"
          definition="An act the Prophet ﷺ did or encouraged that is not obligatory. Subcategories: sunnah mu'akkadah (strongly emphasised, such as the rawatib prayers), and sunnah ghayr mu'akkadah (encouraged but less emphasised, such as fasting on Mondays and Thursdays)."
          reward="Reward, love from Allah, closeness through the nawafil."
          penalty="No sin for leaving it, but a lost opportunity for reward and closeness."
          examples={[
            'The 12 rakat of rawatib around the five daily prayers.',
            'Fasting on Mondays and Thursdays, or the three white days each month.',
            'Using siwak before wudu and prayer.',
            'Greeting with as-salamu alaykum first.',
            'Visiting the sick, attending funerals.',
          ]}
          toneAccent=""
        />

        <HukmCard
          arabic="مُبَاح / حَلَال"
          translit="Mubah / Halal"
          english="Permitted, Neutral"
          definition="An act on which the Shari'ah is silent, or has been made explicitly permissible without preference. Neither rewarded for doing nor for leaving in itself, though intention can transform it (eating with the intention of strength for worship becomes rewarded)."
          reward="No inherent reward, but blessed if made a means to a good end."
          penalty="No sin for doing or for leaving."
          examples={[
            'Choosing what colour clothes to wear (within the permitted range).',
            'Choosing what type of halal food to eat.',
            'The kind of work or trade one pursues, so long as it is lawful.',
            'Sleeping in a particular room, sitting in a particular chair.',
          ]}
          toneAccent=""
        />

        <HukmCard
          arabic="مَكْرُوه"
          translit="Makruh"
          english="Disliked"
          definition="Something Allah or His Messenger ﷺ disliked without prohibiting definitively. Subcategories in the Hanafi school: makruh tanzihi (mild dislike, closer to permitted) and makruh tahrimi (strong dislike, closer to forbidden, whose deliberate performance is sinful)."
          reward="Reward for leaving it out of taqwa."
          penalty="No sin for a single occurrence, but persistent makruh acts weaken faith and can lead to haram."
          examples={[
            'Speaking during actual acts of worship without need.',
            'Facing the qiblah while relieving oneself in an open place.',
            'Eating with the left hand out of habit.',
            'Sleeping face-down.',
            'Wasting water even for wudu.',
          ]}
          toneAccent=""
        />

        <HukmCard
          arabic="حَرَام"
          translit="Haram"
          english="Forbidden"
          definition="A prohibition established by definitive proof from Qur'an or Sunnah or ijma'. Doing it is sinful. Denying a well-known haram (like the prohibition of wine, adultery, or interest) puts a person outside Islam."
          reward="Reward for leaving it, especially when tempted."
          penalty="Sin, punishable in the next life. Major haram acts (kabair) can be graver than others."
          examples={[
            'Shirk (associating partners with Allah), the only sin never forgiven if died upon.',
            'Killing an innocent soul, adultery, false witness, disobedience to parents.',
            'Consuming intoxicants, pork, blood, unlawful meat.',
            'Ribā (interest) in transactions.',
            'Backbiting, lying, breaking trusts.',
            'Wearing silk and gold for men, imitating the opposite gender in dress.',
          ]}
          toneAccent=""
        />

        {/* Subcategories */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Fard ‘Ayn versus Fard Kifayah
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              A fard is further divided into two:
            </p>
            <ul className="text-forest/75 text-sm space-y-2 list-disc list-inside">
              <li>
                <strong>Fard ‘ayn</strong>, obligatory on every individual. Missing it is a personal sin. Example: the five daily prayers, fasting Ramadan.
              </li>
              <li>
                <strong>Fard kifayah</strong>, a communal obligation. If enough Muslims fulfil it, the rest are absolved; if none do, the entire community is sinful. Example: the janazah prayer over a Muslim who has died, learning the sciences the umma needs (medicine, engineering, Islamic scholarship), calling to Islam, defending Muslim lands.
              </li>
            </ul>
          </article>
        </section>

        {/* Wisdom */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Why This Framework Matters
          </h2>
          <article className="card-forest rounded-2xl p-6 space-y-3">
            <p className="text-cream/85 text-sm leading-relaxed">
              Islam does not divide life into <em>“religious”</em> and <em>“secular.”</em> Every moment of a Muslim’s day falls under one of the five rulings. This is not a burden; it is a mercy. It tells the servant: your entire life can be worship, or your entire life can be heedlessness, and Allah has told you the difference.
            </p>
            <p className="text-cream/85 text-sm leading-relaxed">
              Ibn Taymiyyah wrote: <em>“The whole of the religion returns to two things: doing what Allah loves, and leaving what Allah hates. The five ahkam simply arrange these two into degrees so that a person always knows where he is.”</em>
            </p>
            <p className="text-cream/80 text-sm leading-relaxed">
              For the beginner: keep the fard, guard against the haram, and let the mustahabb be the training ground of the heart. The mubah is your rest. The makruh is a warning bell. That is Islam, arranged for the whole life.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
