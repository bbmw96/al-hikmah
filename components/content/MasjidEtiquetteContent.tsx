'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';

const TITLE: Record<string, string> = {
  en: `Etiquettes of the Masjid`,
  ms: `Adab Masjid`,
  tur: `Mescid Âdâbı`,
  urd: `مسجد کے آداب`,
  ben: `মসজিদের আদব`,
  fas: `آداب مسجد`,
  zh: `清真寺之礼`,
  yue: `清真寺之禮`,
  ja: `モスクの作法`,
  ru: `Этикет мечети`,
  es: `Etiqueta de la Masjid`,
  ko: `모스크의 예절`,
  ta: `மசூதி ஆதாபுகள்`,
  si: `මස්ජිද් අදාබ්`,
};

const SUBTITLE: Record<string, string> = {
  en: `The Sunnah manners of entering, being in, and leaving the House of Allah, and the history of the masjid as an institution.`,
  ms: `Adab Sunnah untuk masuk, berada di dalam, dan keluar dari Rumah Allah, serta sejarah masjid sebagai institusi.`,
  tur: `Allah'ın Evine girişin, içinde bulunuşun ve çıkışın Sünnet âdâbı, ve müessese olarak mescidin tarihi.`,
  urd: `اللہ کے گھر میں داخلے، وہاں رہنے اور نکلنے کے سنت آداب، اور مسجد کی ایک ادارے کے طور پر تاریخ۔`,
  ben: `আল্লাহর ঘরে প্রবেশ, অবস্থান ও প্রস্থানের সুন্নাহ আদব, এবং প্রতিষ্ঠান হিসেবে মসজিদের ইতিহাস।`,
  fas: `آداب سنت ورود، حضور و خروج از خانه‌ی خدا، و تاریخ مسجد به عنوان یک نهاد.`,
  zh: `进入、留驻与离开真主之殿之圣行礼节，兼及作为宗教制度之清真寺之历史。`,
  yue: `進入、留駐與離開真主之殿之聖行禮節，兼及作為宗教制度之清真寺之歷史。`,
  ja: `アッラーの家に入る、留まる、そして去るときのスンナに則った作法，および制度としてのモスクの歴史。`,
  ru: `Сунна этикета входа в Дом Аллаха, пребывания в нём и выхода из него, и история мечети как института.`,
  es: `Los modales sunna al entrar, estar en, y salir de la Casa de Allah, y la historia de la masjid como institución.`,
  ko: `알라의 집에 들어가고, 머무르며, 나가는 순나의 예절과 제도로서의 모스크의 역사.`,
  ta: `அல்லாஹ்வின் இல்லத்தினுள் நுழையும், தங்கும், வெளியேறும் ஸுன்னா ஆதாபுகள், மற்றும் ஒரு நிறுவனமாக மசூதியின் வரலாறு.`,
  si: `අල්ලාහ්ගේ නිවසට ඇතුළු වීම, එහි රැඳී සිටීම සහ පිටව යාමේ සුන්නා අදාබ්, සහ ආයතනයක් ලෙස මස්ජිද්හි ඉතිහාසය.`,
};

const ENTRY_DUA_AR = 'اللَّهُمَّ افْتَحْ لِي أَبْوَابَ رَحْمَتِكَ.';
const ENTRY_DUA_TR = "Allahumma-ftah li abwaba rahmatik.";
const ENTRY_DUA_EN = 'O Allah, open for me the gates of Your mercy.';

const EXIT_DUA_AR = "اللَّهُمَّ إِنِّي أَسْأَلُكَ مِنْ فَضْلِكَ.";
const EXIT_DUA_TR = "Allahumma inni as'aluka min fadlik.";
const EXIT_DUA_EN = 'O Allah, I ask You of Your bounty.';

const SALAT_ALA_NABI_AR = 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ.';
const SALAT_ALA_NABI_TR = "Allahumma salli 'ala Muhammadin wa 'ala ali Muhammad.";

export function MasjidEtiquetteContent() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="آدَابُ المَسْجِد"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        {/* History */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The First Masjids
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              The Prophet ﷺ built the <strong>Masjid of Quba</strong> just outside Madinah in Rabi al-Awwal of the first Hijri year, on his stopover during the Hijra. Allah describes it in the Qur’an as <em>“a masjid founded on taqwa from the first day”</em> (al-Tawba 9:108). The Prophet ﷺ said whoever purifies themselves at home, then goes to Quba and prays there, receives the reward of an ‘umrah.
            </p>
            <p className="text-forest/75 text-sm leading-relaxed">
              Days later he began the <strong>Masjid al-Nabawi</strong> in the centre of Madinah, carrying its mud bricks himself. It was a plain space of palm-trunk pillars and a palm-frond roof, with a raised platform (<em>al-Suffa</em>) for the poor companions who lived in it. From this simple structure came the model of every masjid built since: a courtyard, a covered prayer hall, a mihrab indicating the qiblah, a minbar for the khutbah, and open access for every Muslim.
            </p>
            <p className="text-xs text-gold/60 italic">Sources: al-Tawba 9:108; al-Tirmidhi 324 for the Quba merit (Sahl ibn Hunayf); al-Bukhari 428 for the building of al-Nabawi.</p>
          </article>
        </section>

        {/* Entering */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            On Entering: Right Foot and Du'a
          </h2>
          <article className="card-islamic space-y-4">
            <p className="text-forest/75 text-sm leading-relaxed">
              Enter with the <strong>right</strong> foot. Send salat and salam upon the Prophet ﷺ, then recite:
            </p>
            <ArabicText text={ENTRY_DUA_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">Transliteration</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{ENTRY_DUA_TR}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">Meaning</p>
              <p className="text-forest/75 text-sm leading-relaxed">{ENTRY_DUA_EN}</p>
            </div>
            <p className="text-xs text-gold/60 italic">Source: Muslim 713 (Abu Humayd or Abu Usayd al-Sa’idi).</p>
          </article>
        </section>

        {/* Tahiyyat al-Masjid */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Tahiyyat al-Masjid: Two Rakat Before Sitting
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              The Prophet ﷺ said: <em>“When any of you enters the masjid, let him not sit until he has prayed two rakat.”</em> This is <em>tahiyyat al-masjid</em>, the greeting of the masjid, and it is sunnah muakkadah in the Shafi’i, Maliki and Hanbali schools, and mustahabb in the Hanafi school.
            </p>
            <p className="text-forest/70 text-sm leading-relaxed">
              It is dropped in specific cases: if the congregation is already praying the fard, if entering at a forbidden time (sunrise, zenith, sunset) for the strict view, or if entering only to pass through. If the iqamah is called, you join the fard directly; the fard itself suffices for the greeting.
            </p>
            <p className="text-xs text-gold/60 italic">Source: al-Bukhari 444, Muslim 714 (Abu Qatada).</p>
          </article>
        </section>

        {/* Leaving */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            On Leaving: Left Foot and Du'a
          </h2>
          <article className="card-islamic space-y-4">
            <p className="text-forest/75 text-sm leading-relaxed">
              Leave with the <strong>left</strong> foot. Send salat and salam upon the Prophet ﷺ, then recite:
            </p>
            <ArabicText text={EXIT_DUA_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">Transliteration</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{EXIT_DUA_TR}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">Meaning</p>
              <p className="text-forest/75 text-sm leading-relaxed">{EXIT_DUA_EN}</p>
            </div>
            <p className="text-forest/70 text-sm leading-relaxed">
              The reversal is deliberate: on entering you ask for mercy (the primary need in worship), on leaving you ask for provision (the primary need in worldly action).
            </p>
            <p className="text-xs text-gold/60 italic">Source: Muslim 713.</p>
          </article>
        </section>

        {/* Salawat */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Salat Upon the Prophet ﷺ on Entering and Leaving
          </h2>
          <article className="card-islamic space-y-4">
            <p className="text-forest/75 text-sm leading-relaxed">
              Fatimah bint Muhammad ﷺ narrated: <em>“When the Messenger of Allah ﷺ entered the masjid, he would say ‘Bismillah wa-s salatu wa-s salamu ‘ala rasul-illah, Allahumma-ghfir li dhunubi wa-ftah li abwaba rahmatik.’ And when he left he would say the same, replacing ‘abwaba rahmatik’ with ‘abwaba fadlik.’”</em>
            </p>
            <ArabicText text={SALAT_ALA_NABI_AR} size="md" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">Transliteration</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{SALAT_ALA_NABI_TR}</p>
            </div>
            <p className="text-xs text-gold/60 italic">Source: al-Tirmidhi 314, Ibn Majah 771; Sahih al-Albani.</p>
          </article>
        </section>

        {/* Behaviour inside */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Behaviour Inside the Masjid
          </h2>
          <article className="card-islamic space-y-4">
            <ul className="text-forest/75 text-sm space-y-3 list-disc list-inside">
              <li>
                <strong>No commerce.</strong> The Prophet ﷺ said: <em>“If you see anyone buying or selling in the masjid, say: ‘May Allah not grant profit to your trade.’”</em> (al-Tirmidhi 1321).
              </li>
              <li>
                <strong>No announcing lost items.</strong> He ﷺ said: <em>“If any of you hears someone in the masjid announcing a lost item, let him say: ‘May Allah not return it to you,’ for the masjids were not built for this.”</em> (Muslim 568).
              </li>
              <li>
                <strong>Silence, especially during recitation and the khutbah.</strong> The Prophet ﷺ said if you tell your companion during the Jumu’ah khutbah <em>“be quiet,”</em> you have committed a wrong (al-Bukhari 934).
              </li>
              <li>
                <strong>No walking in front of one who is praying.</strong> Move behind them or wait; if unavoidable, the person praying should push gently against you (al-Bukhari 510).
              </li>
              <li>
                <strong>No strong smells.</strong> He ﷺ said: <em>“Whoever has eaten garlic or onion, let him keep away from us, and from our masjid.”</em> Modern equivalents include strong smoke or heavy perfumes that carry (al-Bukhari 855, Muslim 564).
              </li>
              <li>
                <strong>Perfume for men is encouraged</strong> on Jumu’ah and in general; heavy perfume for women in mixed spaces is discouraged as it can attract attention.
              </li>
              <li>
                <strong>Children may attend.</strong> The Prophet ﷺ sometimes shortened his prayer because he heard a baby cry, out of consideration for the mother (al-Bukhari 707). Bringing children is a virtue, not a burden, when they are supervised.
              </li>
              <li>
                <strong>Cleanliness.</strong> He ﷺ said: <em>“Spitting in the masjid is a sin, and its expiation is to bury it.”</em> (al-Bukhari 415). Extended today: no litter, no crumbs, mats and shoes cared for.
              </li>
            </ul>
          </article>
        </section>

        {/* I'tikaf */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Masjid as a Place of Retreat
          </h2>
          <article className="card-forest rounded-2xl p-6 space-y-3">
            <p className="text-cream/85 text-sm leading-relaxed">
              Beyond the five daily prayers, the masjid was, in the Prophet’s ﷺ Madinah, the school, the parliament, the treasury, the courthouse, and the shelter of the destitute. He ﷺ himself performed <em>i’tikaf</em> in it every last ten nights of Ramadan.
            </p>
            <p className="text-cream/85 text-sm leading-relaxed">
              The Prophet ﷺ said: <em>“The seven whom Allah will shade under His shade on a day when there is no shade but His”</em> include <em>“a man whose heart is attached to the masjid.”</em> (al-Bukhari 660, Muslim 1031).
            </p>
            <p className="text-cream/80 text-sm leading-relaxed">
              The full etiquette of the masjid, then, is not simply a checklist of what to do at the door. It is the disposition of one whose heart returns to the House of Allah between the prayers, whose peace lives there, and whose worldly business, worldly speech, worldly appearance, all quiet down when the sandals come off at the threshold.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
