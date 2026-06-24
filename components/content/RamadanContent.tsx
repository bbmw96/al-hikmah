'use client';

import { useLanguage } from '@/lib/i18n/context';
import { RAMADAN_CONTENT, type RamadanContentKey } from '@/lib/i18n/content/ramadan-content';
import { ArabicText } from '@/components/ui/ArabicText';

type Lang = 'en' | 'ms' | 'tur' | 'urd' | 'ben' | 'fas' | 'zh' | 'yue' | 'ja' | 'ru' | 'es' | 'ko';

function useRamadan() {
  const { lang } = useLanguage();
  return (key: RamadanContentKey): string => {
    const entry = RAMADAN_CONTENT[key] as Record<string, string | undefined>;
    return entry[lang] ?? entry['en'] ?? key;
  };
}

/* ── Static data ────────────────────────────────────────────── */

const RAMADAN_VERSES = {
  arabic: 'يَا أَيُّهَا الَّذِينَ آمَنُوا كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِن قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ ۝ أَيَّامًا مَّعْدُودَاتٍ فَمَن كَانَ مِنكُم مَّرِيضًا أَوْ عَلَىٰ سَفَرٍ فَعِدَّةٌ مِّنْ أَيَّامٍ أُخَرَ وَعَلَى الَّذِينَ يُطِيقُونَهُ فِدْيَةٌ طَعَامُ مِسْكِينٍ فَمَن تَطَوَّعَ خَيْرًا فَهُوَ خَيْرٌ لَّهُ وَأَن تَصُومُوا خَيْرٌ لَّكُمْ إِن كُنتُمْ تَعْلَمُونَ ۝ شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ الْهُدَىٰ وَالْفُرْقَانِ',
  transliteration: "Ya ayyuhal-ladhina amanu kutiba 'alaykumus-siyamu kama kutiba 'alal-ladhina min qablikum la'allakum tattaqun. Ayyamam-ma'dudat. Faman kana minkum maridhan aw 'ala safarin fa'iddatum-min ayyamin ukhar. Wa 'alal-ladhina yutiqunahu fidyatun ta'amu miskin. Faman tatawwa'a khayran fahuwa khayrun lah, wa an tasumu khayrun lakum in kuntum ta'lamun. Shahru Ramadanal-ladhi unzila fihil-Qur'anu hudal-lin-nasi wa bayyinatim-minal-huda wal-furqan.",
};

const HILAL = {
  details: [
    'hilal_detail_1', 'hilal_detail_2', 'hilal_detail_3', 'hilal_detail_4', 'hilal_detail_5',
  ] as RamadanContentKey[],
};

const CONDITIONS_ITEMS = [
  { nameKey: 'cond_muslim' as RamadanContentKey, descKey: 'cond_muslim_desc' as RamadanContentKey },
  { nameKey: 'cond_adult' as RamadanContentKey, descKey: 'cond_adult_desc' as RamadanContentKey },
  { nameKey: 'cond_sane' as RamadanContentKey, descKey: 'cond_sane_desc' as RamadanContentKey },
  { nameKey: 'cond_healthy' as RamadanContentKey, descKey: 'cond_healthy_desc' as RamadanContentKey },
  { nameKey: 'cond_resident' as RamadanContentKey, descKey: 'cond_resident_desc' as RamadanContentKey },
  { nameKey: 'cond_capable' as RamadanContentKey, descKey: 'cond_capable_desc' as RamadanContentKey },
];

const INVALIDATORS = [
  { itemKey: 'inv_1' as RamadanContentKey, noteKey: 'inv_1_note' as RamadanContentKey },
  { itemKey: 'inv_2' as RamadanContentKey, noteKey: 'inv_2_note' as RamadanContentKey },
  { itemKey: 'inv_3' as RamadanContentKey, noteKey: 'inv_3_note' as RamadanContentKey },
  { itemKey: 'inv_4' as RamadanContentKey, noteKey: 'inv_4_note' as RamadanContentKey },
  { itemKey: 'inv_5' as RamadanContentKey, noteKey: 'inv_5_note' as RamadanContentKey },
  { itemKey: 'inv_6' as RamadanContentKey, noteKey: 'inv_6_note' as RamadanContentKey },
];

const DOES_NOT_BREAK: RamadanContentKey[] = [
  'dnb_1', 'dnb_2', 'dnb_3', 'dnb_4', 'dnb_5', 'dnb_6', 'dnb_7', 'dnb_8', 'dnb_9', 'dnb_10', 'dnb_11',
];

const SUHUR_IFTAR = {
  suhur: {
    titleKey: 'suhur_title' as RamadanContentKey,
    arabic: 'السُّحور',
  },
  iftar: {
    titleKey: 'iftar_title' as RamadanContentKey,
    arabic: 'الإفطار',
    dua: {
      arabic: 'اللَّهُمَّ لَكَ صُمْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ',
      transliteration: "Allahumma laka sumtu wa 'ala rizqika aftartu",
    },
    dua2: {
      arabic: 'ذَهَبَ الظَّمَأُ وَابْتَلَّتِ الْعُرُوقُ وَثَبَتَ الْأَجْرُ إِنْ شَاءَ اللَّهُ',
      transliteration: "Dhahabaẓ-ẓama'u wabtallatil-'uruqu wa thabatal-ajru insha'allah",
    },
  },
};

const TARAWEEH = {
  positions: [
    { titleKey: 'taraweeh_8' as RamadanContentKey, explanationKey: 'taraweeh_8_explanation' as RamadanContentKey },
    { titleKey: 'taraweeh_20' as RamadanContentKey, explanationKey: 'taraweeh_20_explanation' as RamadanContentKey },
  ],
};

const LAYLATUL_QADR = {
  arabic: 'لَيْلَةُ الْقَدْر',
  verse: {
    arabic: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۝ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۝ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ ۝ تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ ۝ سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ',
    transliteration: "Inna anzalnahu fi laylatil-qadr. Wa ma adraka ma laylatulqadr. Laylatulqadri khayrum-min alfi shahr. Tanazzalul-mala'ikatu war-ruhu fiha bi-idhni rabbihim min kulli amr. Salamun hiya hatta matla'il-fajr.",
  },
  dua: {
    arabic: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
    transliteration: "Allahumma innaka 'afuwwun tuhibbul-'afwa fa'fu 'anni",
  },
  signs: ['qadr_sign_1', 'qadr_sign_2', 'qadr_sign_3', 'qadr_sign_4'] as RamadanContentKey[],
};

const ITIKAF = {
  arabic: 'الاعتكاف',
  conditions: ['itikaf_cond_1', 'itikaf_cond_2', 'itikaf_cond_3', 'itikaf_cond_4', 'itikaf_cond_5', 'itikaf_cond_6'] as RamadanContentKey[],
};

const ZAKAT_FITR = {
  arabic: 'زكاة الفطر',
};

const EID_PRACTICES: RamadanContentKey[] = [
  'eid_practice_1', 'eid_practice_2', 'eid_practice_3', 'eid_practice_4',
  'eid_practice_5', 'eid_practice_6', 'eid_practice_7', 'eid_practice_8',
];

const SPIRITUAL_POINTS = [
  { titleKey: 'spiritual_1_title' as RamadanContentKey, textKey: 'spiritual_1_text' as RamadanContentKey },
  { titleKey: 'spiritual_2_title' as RamadanContentKey, textKey: 'spiritual_2_text' as RamadanContentKey },
  { titleKey: 'spiritual_3_title' as RamadanContentKey, textKey: 'spiritual_3_text' as RamadanContentKey },
  { titleKey: 'spiritual_4_title' as RamadanContentKey, textKey: 'spiritual_4_text' as RamadanContentKey },
];

/* ── Component ──────────────────────────────────────────────── */

export function RamadanContent() {
  const tc = useRamadan();

  const zakatRows: { labelKey: RamadanContentKey; value: string }[] = [
    { labelKey: 'zakat_label_amount', value: tc('zakat_amount') },
    { labelKey: 'zakat_label_who_pays', value: tc('zakat_who_pays') },
    { labelKey: 'zakat_label_who_receives', value: tc('zakat_who_receives') },
    { labelKey: 'zakat_label_when', value: tc('zakat_when') },
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">

      {/* ── Quran on Ramadan ── */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_prescribed')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
          فريضة الصيام
        </p>
        <article className="card-islamic">
          <span className="badge-gold text-xs mb-4 inline-block">{tc('verses_ref')}</span>
          <ArabicText text={RAMADAN_VERSES.arabic} size="md" />
          <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
            <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">{tc('label_transliteration')}</p>
            <p className="text-forest/60 italic text-sm leading-relaxed">{RAMADAN_VERSES.transliteration}</p>
            <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">{tc('label_meaning')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('verses_meaning')}</p>
          </div>
        </article>
      </section>

      {/* ── Moon Sighting ── */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_hilal')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
          رؤية الهلال
        </p>
        <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5 mb-5">
          <p className="text-forest/75 text-sm leading-relaxed">{tc('hilal_explanation')}</p>
        </div>
        <div className="space-y-3">
          {HILAL.details.map((d, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-gold mt-1 flex-shrink-0">&#x2022;</span>
              <p className="text-forest/70 text-sm leading-relaxed">{tc(d)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Conditions ── */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_conditions')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
          شروط وجوب الصيام
        </p>
        <div className="space-y-3">
          {CONDITIONS_ITEMS.map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 ring-1 ring-gold/40 mt-0.5">
                <span className="text-forest font-semibold text-xs">{i + 1}</span>
              </div>
              <div>
                <p className="font-medium text-forest text-sm">{tc(item.nameKey)}</p>
                <p className="text-forest/60 text-xs leading-relaxed mt-0.5">{tc(item.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Invalidators and What Does Not Break ── */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_invalidators')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
          مفسدات الصوم وما لا يفسده
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-garamond text-lg font-semibold text-forest mb-4 border-l-4 border-red-700/50 pl-3">
              {tc('label_invalidators_heading')}
            </h3>
            <div className="space-y-3">
              {INVALIDATORS.map((item, i) => (
                <article key={i} className="card-islamic py-3 px-4">
                  <p className="font-medium text-forest text-sm mb-1">{tc(item.itemKey)}</p>
                  <p className="text-forest/60 text-xs leading-relaxed">{tc(item.noteKey)}</p>
                </article>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-garamond text-lg font-semibold text-forest mb-4 border-l-4 border-forest/50 pl-3">
              {tc('label_does_not_break')}
            </h3>
            <div className="space-y-2">
              {DOES_NOT_BREAK.map((item, i) => (
                <div key={i} className="flex gap-2 items-start">
                  <span className="text-gold mt-1 flex-shrink-0 text-xs">&#x2714;</span>
                  <p className="text-forest/70 text-sm leading-relaxed">{tc(item)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Suhur and Iftar ── */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_suhur_iftar')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
          السحور والإفطار
        </p>
        <div className="space-y-6">
          <article className="card-islamic">
            <div className="flex items-center gap-3 mb-3">
              <p dir="rtl" lang="ar" className="arabic text-gold/80" aria-hidden="true">
                {SUHUR_IFTAR.suhur.arabic}
              </p>
              <h3 className="font-garamond text-xl font-semibold text-forest">{tc(SUHUR_IFTAR.suhur.titleKey)}</h3>
            </div>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('suhur_text')}</p>
          </article>

          <article className="card-islamic">
            <div className="flex items-center gap-3 mb-3">
              <p dir="rtl" lang="ar" className="arabic text-gold/80" aria-hidden="true">
                {SUHUR_IFTAR.iftar.arabic}
              </p>
              <h3 className="font-garamond text-xl font-semibold text-forest">{tc(SUHUR_IFTAR.iftar.titleKey)}</h3>
            </div>
            <p className="text-forest/70 text-sm leading-relaxed mb-5">{tc('iftar_text')}</p>

            <div className="bg-forest/5 rounded-xl p-4 space-y-3 mb-4">
              <p className="text-xs text-gold/70 uppercase tracking-wider font-medium">
                {tc('label_dua_iftar')} ({tc('iftar_dua_source')})
              </p>
              <ArabicText text={SUHUR_IFTAR.iftar.dua.arabic} size="md" />
              <div className="border-t border-gold/10 pt-3 space-y-2">
                <p className="text-forest/60 italic text-sm">{SUHUR_IFTAR.iftar.dua.transliteration}</p>
                <p className="text-forest/70 text-sm">{tc('iftar_dua_meaning')}</p>
              </div>
            </div>

            <div className="bg-gold/10 border border-gold/25 rounded-xl p-4 space-y-3">
              <p className="text-xs text-gold/70 uppercase tracking-wider font-medium">
                {tc('label_dua_alternative')} ({tc('iftar_dua2_source')})
              </p>
              <ArabicText text={SUHUR_IFTAR.iftar.dua2.arabic} size="md" />
              <div className="border-t border-gold/15 pt-3 space-y-2">
                <p className="text-forest/60 italic text-sm">{SUHUR_IFTAR.iftar.dua2.transliteration}</p>
                <p className="text-forest/70 text-sm">{tc('iftar_dua2_meaning')}</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* ── Taraweeh ── */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_taraweeh')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
          صلاة التراويح
        </p>
        <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-6">
          <p className="text-forest/75 text-sm leading-relaxed">{tc('taraweeh_text')}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mb-4">
          {TARAWEEH.positions.map((pos, i) => (
            <article key={i} className="card-islamic">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{tc(pos.titleKey)}</h3>
              <p className="text-forest/70 text-sm leading-relaxed">{tc(pos.explanationKey)}</p>
            </article>
          ))}
        </div>
        <div className="bg-gold/10 border border-gold/25 rounded-xl p-4">
          <p className="text-forest/75 text-sm italic">{tc('taraweeh_note')}</p>
        </div>
      </section>

      {/* ── Laylatul Qadr ── */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_laylatul_qadr')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
          لَيْلَةُ الْقَدْر
        </p>
        <div className="bg-forest/5 border-l-4 border-gold rounded-r-xl p-5 mb-6">
          <p className="text-forest/75 text-sm leading-relaxed">{tc('qadr_description')}</p>
        </div>

        <article className="card-islamic mb-6">
          <span className="badge-gold text-xs mb-4 inline-block">{tc('qadr_verse_ref')}</span>
          <ArabicText text={LAYLATUL_QADR.verse.arabic} size="md" />
          <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
            <p className="text-xs text-gold/60 uppercase tracking-wider font-medium">{tc('label_transliteration')}</p>
            <p className="text-forest/60 italic text-sm leading-relaxed">{LAYLATUL_QADR.verse.transliteration}</p>
            <p className="text-xs text-gold/60 uppercase tracking-wider font-medium mt-2">{tc('label_meaning')}</p>
            <p className="text-forest/70 text-sm leading-relaxed">{tc('qadr_verse_meaning')}</p>
          </div>
        </article>

        <div className="card-islamic mb-6">
          <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-3">
            {tc('label_dua_laylatul_qadr')} ({tc('qadr_dua_source')})
          </p>
          <ArabicText text={LAYLATUL_QADR.dua.arabic} size="lg" />
          <div className="border-t border-gold/10 pt-3 mt-3 space-y-2">
            <p className="text-forest/60 italic text-sm">{LAYLATUL_QADR.dua.transliteration}</p>
            <p className="text-forest/70 text-sm">{tc('qadr_dua_meaning')}</p>
          </div>
        </div>

        <div>
          <h3 className="font-garamond text-lg font-semibold text-forest mb-3">{tc('label_signs')}</h3>
          <div className="space-y-2">
            {LAYLATUL_QADR.signs.map((sign, i) => (
              <div key={i} className="flex gap-3 items-start">
                <span className="text-gold mt-1 flex-shrink-0">&#x2022;</span>
                <p className="text-forest/70 text-sm leading-relaxed">{tc(sign)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── I'tikaf ── */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_itikaf')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
          الاعتكاف
        </p>
        <div className="bg-forest/5 border border-gold/20 rounded-xl p-5 mb-5">
          <p className="text-forest/75 text-sm leading-relaxed">{tc('itikaf_description')}</p>
        </div>
        <h3 className="font-garamond text-base font-semibold text-forest mb-3">{tc('label_itikaf_conditions')}</h3>
        <div className="space-y-2">
          {ITIKAF.conditions.map((cond, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="text-gold mt-1 flex-shrink-0">&#x2022;</span>
              <p className="text-forest/70 text-sm leading-relaxed">{tc(cond)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Zakat al-Fitr ── */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_zakat_fitr')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
          زكاة الفطر
        </p>
        <div className="space-y-4">
          <div className="card-islamic">
            <p className="text-forest/75 text-sm leading-relaxed mb-4">{tc('zakat_description')}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {zakatRows.map((row, i) => (
                <div key={i} className="bg-forest/5 rounded-xl p-3">
                  <p className="text-xs text-gold/70 uppercase tracking-wider font-medium mb-1">{tc(row.labelKey)}</p>
                  <p className="text-forest/70 text-sm leading-relaxed">{row.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Eid al-Fitr ── */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_eid')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
          عيد الفطر
        </p>
        <div className="bg-gold/10 border border-gold/25 rounded-xl p-5 mb-5">
          <ArabicText text="اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ لَا إِلَهَ إِلَّا اللَّهُ اللَّهُ أَكْبَرُ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْد" size="md" />
          <p className="text-forest/60 italic text-xs mt-2 text-center">{tc('eid_takbir_caption')}</p>
        </div>
        <div className="space-y-2">
          {EID_PRACTICES.map((practice, i) => (
            <div key={i} className="flex gap-3 items-start">
              <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-forest font-semibold text-xs">{i + 1}</span>
              </div>
              <p className="text-forest/70 text-sm leading-relaxed">{tc(practice)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Spiritual Dimensions ── */}
      <section>
        <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-2">
          {tc('section_spiritual')}
        </h2>
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
          الحكمة من الصيام
        </p>
        <div className="space-y-5">
          {SPIRITUAL_POINTS.map((point, i) => (
            <article key={i} className="card-islamic">
              <h3 className="font-garamond text-lg font-semibold text-forest mb-2">{tc(point.titleKey)}</h3>
              <p className="text-forest/70 text-sm leading-relaxed">{tc(point.textKey)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Closing ── */}
      <section className="card-islamic bg-forest/5 text-center">
        <p dir="rtl" lang="ar" className="arabic text-gold mb-4">
          إِذَا دَخَلَ رَمَضَانُ فُتِّحَتْ أَبْوَابُ الْجَنَّةِ وَغُلِّقَتْ أَبْوَابُ جَهَنَّمَ وَسُلْسِلَتِ الشَّيَاطِينُ
        </p>
        <p className="text-forest/70 text-sm italic mb-1">{tc('closing_hadith')}</p>
        <p className="text-forest/50 text-xs">{tc('closing_source')}</p>
      </section>

    </div>
  );
}
