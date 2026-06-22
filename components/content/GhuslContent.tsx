'use client';

import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { GHUSL_CONTENT } from '@/lib/i18n/content/ghusl-content';
import type { GhuslContentKey } from '@/lib/i18n/content/ghusl-content';
import type { Lang } from '@/lib/i18n/translations';

function useGhusl() {
  const { lang } = useLanguage();
  return (key: GhuslContentKey): string => GHUSL_CONTENT[key][lang as Lang];
}

const OBLIGATORY_CAUSES = [
  {
    n: 1,
    titleKey: 'cause_1_title' as GhuslContentKey,
    arabic: 'الجنابة',
    body: "The most common cause. Sexual intercourse between spouses — regardless of whether ejaculation occurs — makes ghusl obligatory on both parties. The Prophet ﷺ said: 'When he sits between her four limbs and the two circumcised parts meet, ghusl becomes obligatory.' (Bukhari 291, Muslim 348)",
  },
  {
    n: 2,
    titleKey: 'cause_2_title' as GhuslContentKey,
    arabic: 'الإنزال',
    body: "Discharge of semen, whether during sleep (wet dream — ihtilam) or waking, makes ghusl obligatory. The Prophet ﷺ said: 'Water [ghusl] is only required because of water [ejaculation].' (Muslim 343) A woman who experiences an orgasm and discharge also requires ghusl.",
  },
  {
    n: 3,
    titleKey: 'cause_3_title' as GhuslContentKey,
    arabic: 'انقطاع الحيض',
    body: "When menstrual bleeding ceases, a woman must perform ghusl before she may pray, fast, have intercourse, or touch the Quran. The Quran commands: '...when they have cleansed themselves, go in to them as Allah has commanded you.' (Al-Baqarah 2:222)",
  },
  {
    n: 4,
    titleKey: 'cause_4_title' as GhuslContentKey,
    arabic: 'انقطاع النفاس',
    body: "The bleeding that follows childbirth (nifas) requires ghusl upon cessation, just as hayd does. The maximum duration is forty days in the Shafi'i and Hanbali schools; Hanafis say forty days, Malikis have no maximum.",
  },
  {
    n: 5,
    titleKey: 'cause_5_title' as GhuslContentKey,
    arabic: 'الإسلام',
    body: "When a person takes their shahada and embraces Islam, most scholars — particularly Shafi'is and Hanbalis — hold that ghusl is required as part of their ritual purification and new beginning.",
  },
  {
    n: 6,
    titleKey: 'cause_6_title' as GhuslContentKey,
    arabic: 'الموت',
    body: "Washing the deceased Muslim (ghusl al-mayyit) is a collective obligation (fard kifayah) on the Muslim community. It is distinct from ghusl for the living but uses the same principle of full-body purification.",
  },
];

const STEPS = [
  {
    step: 1,
    titleKey: 'step_1_title' as GhuslContentKey,
    arabic: 'النِّيَّة',
    body: "Form the intention in the heart to perform ghusl for the sake of Allah. The intention need not be spoken aloud. The Prophet ﷺ said: 'Actions are judged by intentions.' (Bukhari 1, Muslim 1907)",
  },
  {
    step: 2,
    titleKey: 'step_2_title' as GhuslContentKey,
    arabic: 'البسملة وغسل اليدين',
    body: "Begin with 'Bismillah' (In the name of Allah). Wash both hands three times before they enter the vessel of water, as the Prophet ﷺ did.",
  },
  {
    step: 3,
    titleKey: 'step_3_title' as GhuslContentKey,
    arabic: 'إزالة النجاسة',
    body: 'Remove any impurity (najasah) from the private parts with water, using the left hand. This is obligatory whether or not there is visible impurity.',
  },
  {
    step: 4,
    titleKey: 'step_4_title' as GhuslContentKey,
    arabic: 'الوضوء الكامل',
    body: 'Perform complete wudu as for prayer: rinse the mouth, inhale water into the nose, wash the face, arms, head, and feet. Some scholars hold that washing the feet may be deferred to the end if standing in pooled water.',
  },
  {
    step: 5,
    titleKey: 'step_5_title' as GhuslContentKey,
    arabic: 'إفاضة الماء على الجسم',
    body: 'Pour water three times over the entire body, beginning with the right side, then the left, ensuring water reaches every part of the skin, including roots of hair, navel, and between the toes. Rub all parts of the body.',
  },
  {
    step: 6,
    titleKey: 'step_6_title' as GhuslContentKey,
    arabic: 'غسل القدمين',
    body: 'If the feet were not washed during the wudu step (because of standing in pooled water), wash them now to complete the ghusl.',
  },
];

const PERMIT_KEYS: GhuslContentKey[] = [
  'permit_1', 'permit_2', 'permit_3', 'permit_4', 'permit_5', 'permit_6',
];

export function GhuslContent() {
  const tc = useGhusl();

  return (
    <div className="max-w-4xl mx-auto px-6 py-14 space-y-16">

      {/* Introduction */}
      <section>
        <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
          {tc('section_whatIs')}
        </h2>
        <p className="text-forest/70 leading-relaxed text-sm mb-4">
          Ghusl (Arabic: الغُسْل) is the full-body ritual bath prescribed by Islamic law to remove the state of major ritual impurity (hadath akbar). While wudu removes minor impurity after acts such as sleep or using the restroom, ghusl removes the major impurity caused by events such as sexual intercourse, ejaculation, or the end of menstrual or postnatal bleeding.
        </p>
        <p className="text-forest/70 leading-relaxed text-sm mb-6">
          Until ghusl is performed, a person in the state of janabah (major ritual impurity) is prohibited from prayer, reciting or touching the Quran, entering the mosque, or performing tawaf.
        </p>
        <div className="card-forest rounded-2xl p-8">
          <ArabicText text="وَإِن كُنتُمْ جُنُبًا فَاطَّهَّرُوا" size="lg" />
          <p className="text-cream/80 text-sm mt-4 leading-relaxed">
            {tc('label_intro_quran')}
          </p>
        </div>
      </section>

      {/* What makes it obligatory */}
      <section>
        <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-8">
          {tc('section_obligatory')}
        </h2>
        <div className="space-y-5">
          {OBLIGATORY_CAUSES.map(cause => (
            <div key={cause.n} className="card-islamic flex gap-4">
              <span className="w-8 h-8 rounded-full bg-gold/15 text-gold text-sm font-semibold flex items-center justify-center flex-shrink-0 mt-1">
                {cause.n}
              </span>
              <div>
                <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-1" aria-hidden="true">
                  {cause.arabic}
                </p>
                <h3 className="font-garamond text-lg font-semibold text-forest mb-1">
                  {tc(cause.titleKey)}
                </h3>
                <p className="text-forest/60 text-sm leading-relaxed">{cause.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The Method */}
      <section>
        <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
          {tc('section_method')}
        </h2>
        <div className="gold-border-left pl-5 mb-8">
          <p className="text-forest/70 text-sm leading-relaxed">
            Aisha (may Allah be pleased with her) described the Prophet's ﷺ ghusl: <em>"He would wash his hands, then pour water from his right hand into his left and wash his private parts, then perform wudu as for prayer, then take water and run his fingers through the roots of his hair... then he would pour water three times over his head, then pour water over the rest of his body."</em> (Bukhari 248, Muslim 316)
          </p>
        </div>
        <div className="space-y-5">
          {STEPS.map(step => (
            <div key={step.step} className="card-islamic flex gap-5">
              <div className="w-10 h-10 rounded-full bg-forest text-cream text-sm font-bold flex items-center justify-center flex-shrink-0">
                {step.step}
              </div>
              <div>
                <p dir="rtl" lang="ar" className="arabic-sm text-gold/70 mb-1" aria-hidden="true">
                  {step.arabic}
                </p>
                <h3 className="font-garamond text-lg font-semibold text-forest mb-1">
                  {tc(step.titleKey)}
                </h3>
                <p className="text-forest/60 text-sm leading-relaxed">{step.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="gold-border-left pl-5 mt-8">
          <p className="text-forest/70 text-sm leading-relaxed">
            <strong>{tc('label_minimum')}</strong> According to the majority of scholars, ghusl is valid at its minimum with: (1) intention, (2) rinsing the mouth, (3) rinsing the nose, and (4) pouring water over the entire body once so that no part of the skin remains dry. The full Sunnah method above is strongly recommended.
          </p>
        </div>
      </section>

      {/* What it permits */}
      <section>
        <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
          {tc('section_permits')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {PERMIT_KEYS.map(key => (
            <div key={key} className="card-islamic flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
              <p className="text-forest/70 text-sm leading-relaxed">{tc(key)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Spiritual significance */}
      <section>
        <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-6">
          {tc('section_spiritual')}
        </h2>
        <p className="text-forest/70 leading-relaxed text-sm mb-4">
          Ghusl is not merely physical cleansing but a spiritual act of renewal. Just as water washes the body, the intention behind ghusl and the remembrance of Allah throughout wash the heart of heedlessness. Imam al-Ghazali writes in the Ihya' Ulum al-Din that the person performing ghusl should feel the inner meaning: that just as water purifies the outward, sincere repentance (tawbah) and return to Allah purify the inward.
        </p>
        <p className="text-forest/70 leading-relaxed text-sm mb-6">
          The Friday ghusl (ghusl al-jumu'ah), while not technically obligatory according to the majority, is highly recommended. The Prophet ﷺ said: <em>"Ghusl on Friday is obligatory upon every adult, as well as using a miswak and applying some perfume if available."</em> (Bukhari 880, Muslim 846)
        </p>
        <div className="card-gold rounded-2xl p-8">
          <ArabicText
            text="إِنَّ اللَّهَ يُحِبُّ التَّوَّابِينَ وَيُحِبُّ الْمُتَطَهِّرِينَ"
            size="md"
          />
          <p className="text-forest/70 text-sm mt-4 leading-relaxed">
            {tc('closing_verse')}
          </p>
        </div>
      </section>

    </div>
  );
}
