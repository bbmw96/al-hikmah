import type { Metadata } from 'next';
import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Seerah - Life of the Prophet',
  description:
    "The biography of the Prophet Muhammad ﷺ - from his birth in Makkah to the completion of the message of Islam.",
};

const TIMELINE = [
  {
    year: '570 CE',
    arabicLabel: 'عام الفيل',
    title: 'Birth in Makkah',
    description:
      "The Prophet Muhammad ﷺ was born on a Monday in Rabi' al-Awwal, the Year of the Elephant (570 CE), in the city of Makkah in the Arabian Peninsula. His father, Abdallah ibn Abd al-Muttalib, had passed away before his birth. He was placed in the care of a wet nurse, Halimah al-Sa'diyyah, in the desert, as was the custom of noble Arab families. His early years were marked by the passing of his mother Aminah (when he was six) and his grandfather Abd al-Muttalib (when he was eight). He was then raised by his uncle Abu Talib.",
  },
  {
    year: '610 CE',
    arabicLabel: 'بدء الوحي',
    title: 'The First Revelation',
    description:
      "At the age of 40, while in a state of contemplation in the Cave of Hira on Jabal al-Nur (the Mountain of Light) near Makkah, the Prophet Muhammad ﷺ received the first revelation of the Quran. The Angel Jibril (Gabriel) appeared to him and commanded: 'Read! In the name of your Lord who created.' (Surah al-Alaq 96:1). This was the beginning of a 23-year period of revelation. He returned home trembling and was consoled by his beloved wife Khadijah, who became the first person to accept Islam.",
  },
  {
    year: '613 CE',
    arabicLabel: 'الدعوة الجهرية',
    title: 'Public Proclamation',
    description:
      "For three years, the Prophet ﷺ called people to Islam privately. When the divine command came to 'arise and warn' (74:2), he began preaching openly. The early Muslims faced severe persecution from the Quraysh, the ruling tribe of Makkah, who saw the new religion as a threat to their political and commercial interests. Among the first to accept Islam were Khadijah bint Khuwaylid (his wife), Ali ibn Abi Talib (his cousin), Abu Bakr al-Siddiq (his closest friend), and Zayd ibn Harithah (his freed slave and adopted son).",
  },
  {
    year: '615 CE',
    arabicLabel: 'الهجرة إلى الحبشة',
    title: 'Migration to Abyssinia',
    description:
      "As persecution intensified, the Prophet ﷺ instructed a group of his followers to seek refuge in the Christian kingdom of Abyssinia (modern-day Ethiopia), ruled by the just king al-Najashi (Negus). This was the first Hijra in Islam. When the Quraysh sent delegates to retrieve the Muslims, al-Najashi interviewed Ja'far ibn Abi Talib, who recited the opening verses of Surah Maryam. The king was so moved that he refused to hand over the Muslims, reportedly declaring that the difference between what Jesus had said and what this Quran says was no more than this - holding his fingers slightly apart.",
  },
  {
    year: '619 CE',
    arabicLabel: 'عام الحزن',
    title: 'The Year of Grief',
    description:
      "In 619 CE, the Prophet ﷺ lost two of his greatest protectors within a short period: his beloved wife Khadijah bint Khuwaylid, who had supported him unfailingly from the very first moments of revelation, and his uncle Abu Talib, whose tribal protection had shielded him from physical harm. This year became known as 'Am al-Huzn - the Year of Grief. Shortly after, as if in divine consolation, the Prophet ﷺ was taken on the night journey of al-Isra' and al-Mi'raj - from Makkah to Jerusalem and then through the seven heavens to the presence of Allah, where the five daily prayers were ordained.",
  },
  {
    year: '622 CE',
    arabicLabel: 'الهجرة إلى المدينة',
    title: 'The Hijra to Madinah',
    description:
      "Faced with a Quraysh plot to assassinate him, the Prophet ﷺ was commanded by Allah to migrate to Yathrib (later named Madinah al-Munawwarah - the Radiant City). He left Makkah with Abu Bakr in secret, hiding for three nights in the Cave of Thawr before journeying north. This Hijra marks the beginning of the Islamic lunar calendar. In Madinah, the Prophet ﷺ established the first Muslim community state, signed the Constitution of Madinah (a charter guaranteeing rights to all citizens including non-Muslims), and built the first mosque - Masjid al-Nabawi.",
  },
  {
    year: '624 CE',
    arabicLabel: 'غزوة بدر',
    title: 'The Battle of Badr',
    description:
      "The Battle of Badr (17 Ramadan, 2 AH) was the first major military engagement between the emerging Muslim community and the Quraysh of Makkah. The Muslim force of approximately 313 men faced a Quraysh army of nearly 1,000. By Allah's will, the Muslims prevailed decisively. The Quran devoted an entire chapter - Surah al-Anfal (The Spoils of War) - to the lessons and rulings arising from Badr. The battle established the early Muslim state as a serious force and demonstrated that Allah's help comes to those who are sincere.",
  },
  {
    year: '630 CE',
    arabicLabel: 'فتح مكة',
    title: 'The Conquest of Makkah',
    description:
      "Eight years after the Hijra, the Prophet ﷺ entered Makkah peacefully at the head of an army of 10,000. Rather than seeking revenge for years of persecution and war, he declared a general amnesty for the Makkans - an act of mercy unprecedented in ancient warfare. He then entered the Ka'bah and removed the idols from it, declaring 'Truth has come and falsehood has perished.' (17:81). The majority of Makkah's residents accepted Islam. This event is known as the greatest conquest in the history of prophethood, achieved almost without bloodshed.",
  },
  {
    year: '632 CE',
    arabicLabel: 'حجة الوداع',
    title: 'The Farewell Pilgrimage',
    description:
      "In the tenth year of Hijra (632 CE), the Prophet ﷺ performed his only complete Hajj - known as Hajjat al-Wada' (the Farewell Pilgrimage). Approximately 100,000 Companions accompanied him. On the plain of Arafah, he delivered his Farewell Sermon - one of the most profound addresses in human history - calling for the equality of all people, the abolition of usury, the rights of women, and the inviolability of life and property. On that same day, the final verse of the Quran was revealed: 'This day I have perfected for you your religion.' (5:3). He passed away in Madinah approximately 80 days later.",
  },
];

export default function SeerahPage() {
  return (
    <>
      <PageHeader
        title="Seerah - Life of the Prophet"
        arabicTitle="السيرة النبوية"
        subtitle="The biography of Muhammad ﷺ, the final messenger of Allah - a man whose life transformed human history and whose example continues to guide over a billion souls."
      />

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Opening */}
        <div className="text-center mb-16">
          <ArabicText
            text="لَقَدْ كَانَ لَكُمْ فِي رَسُولِ اللَّهِ أُسْوَةٌ حَسَنَةٌ"
            size="lg"
            className="mb-4"
          />
          <p className="text-forest/60 italic">
            "Indeed in the Messenger of Allah you have an excellent example." - Surah al-Ahzab 33:21
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold/20" aria-hidden="true" />

          <div className="space-y-10">
            {TIMELINE.map((event, i) => (
              <article key={i} className="relative pl-16">
                {/* Dot */}
                <div
                  className="absolute left-4 top-1 w-4 h-4 rounded-full bg-gold border-2 border-cream shadow"
                  aria-hidden="true"
                />

                <div className="flex flex-wrap items-baseline gap-3 mb-3">
                  <span className="badge-gold text-xs">{event.year}</span>
                  <p
                    dir="rtl"
                    lang="ar"
                    className="arabic-sm text-gold"
                  >
                    {event.arabicLabel}
                  </p>
                </div>

                <h3 className="font-garamond text-xl font-semibold text-forest mb-3">
                  {event.title}
                </h3>
                <p className="text-forest/70 leading-relaxed text-sm">{event.description}</p>
              </article>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="mt-16 card-islamic text-center">
          <ArabicText
            text="صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ"
            size="lg"
            className="mb-4"
          />
          <p className="text-forest/60 text-sm italic">
            May the peace and blessings of Allah be upon him.
          </p>
        </div>
      </div>
    </>
  );
}
