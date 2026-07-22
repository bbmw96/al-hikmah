import type { Lang } from '@/lib/i18n/translations';

type LangMap = Record<Lang, string>;
const E: Omit<LangMap, 'en'> = { ms: '', tur: '', urd: '', ben: '', fas: '', zh: '', yue: '', ja: '', ru: '', es: '', ko: '', ta: '', si: '' };

export const TOILET_CONTENT = {
  dua_enter_h: { en: `The Du'a Before Entering`, ...E },
  dua_enter_translit: { en: `Allahumma inni a'udhu bika mina-l khubuthi wa-l khaba'ith.`, ...E },
  dua_enter_meaning: { en: `O Allah, I seek refuge with You from all impure male and impure female jinn.`, ...E },
  dua_enter_p: { en: `Said silently before entering the toilet, or before removing clothes if in an open place. The Prophet ﷺ taught this seeking Allah's protection from the impure jinn who frequent such places.`, ...E },
  dua_enter_source: { en: `Source: al-Bukhari 142, Muslim 375 (Anas ibn Malik).`, ...E },

  dua_exit_h: { en: `The Du'a After Leaving`, ...E },
  dua_exit_translit: { en: `Ghufranaka.`, ...E },
  dua_exit_meaning: { en: `(I ask) Your forgiveness.`, ...E },
  dua_exit_p: { en: `A brief admission that even in relieving the body of impurity, the servant is dependent on Allah's pardon. 'Aisha (ra) said this was the Prophet's ﷺ habit whenever he left the toilet.`, ...E },
  dua_exit_source: { en: `Source: Abu Dawud 30, al-Tirmidhi 7, Ibn Majah 300, graded sahih by al-Albani.`, ...E },

  foot_h: { en: `Which Foot to Enter and Leave With`, ...E },
  foot_p1: { en: `Enter with the left foot. Leave with the right foot. The general principle from the Sunnah is that the right hand and foot are used for what is honourable (eating, entering the mosque, putting on clothes), and the left is used for what is not (cleansing after the toilet, removing shoes).`, ...E },
  foot_p2: { en: `'Aisha (ra) said: "The Prophet ﷺ used to like to begin with the right in his purification, in combing his hair, and in putting on his shoes."`, ...E },
  foot_source: { en: `Source: al-Bukhari 168, Muslim 268.`, ...E },

  qibla_h: { en: `Facing the Qiblah`, ...E },
  qibla_translation: { en: `When you go to relieve yourselves, do not face the qiblah nor turn your backs to it while urinating or defecating, but face east or west (in the Prophet's ﷺ Madinan context).`, ...E },
  qibla_p: { en: `In the open (a desert, an unwalled field), one must neither face nor turn one's back to the Ka'bah while relieving oneself. Inside a built toilet, the majority of scholars (Hanafi, Shafi'i, Hanbali) permit it out of necessity because a wall now stands between the person and the qiblah. Malikis hold to the stricter view even indoors. When you can, orient the toilet away from the qiblah.`, ...E },
  qibla_source: { en: `Source: al-Bukhari 394, Muslim 264 (Abu Ayyub al-Ansari).`, ...E },

  forbidden_h: { en: `Places Where Relieving Oneself Is Forbidden`, ...E },
  forbidden_intro: { en: `The Prophet ﷺ forbade relieving oneself in:`, ...E },
  forbidden_1: { en: `Stagnant water that others may use (Muslim 281, Jabir).`, ...E },
  forbidden_2: { en: `The paths people walk and the shaded places they rest (Muslim 269, Abu Hurayra), calling these the two "cursed acts."`, ...E },
  forbidden_3: { en: `Under fruit-bearing trees people gather from.`, ...E },
  forbidden_4: { en: `Facing the sun or moon (a preference held by many early scholars).`, ...E },
  forbidden_wisdom: { en: `The unifying wisdom: no act of the servant should cause disgust, harm or ritual inconvenience to another Muslim.`, ...E },

  speech_h: { en: `Speech, the Name of Allah, and the Right Hand`, ...E },
  speech_p1: { en: `While actually relieving oneself, one does not speak, does not return salam, and does not respond to the adhan out loud (the response is made silently or after leaving).`, ...E },
  speech_p2: { en: `One should not carry anything on which Allah's name is written, including a mushaf, unless there is a real need and it is kept covered. Modern phones with the Qur'an app in the pocket are, in the view of most contemporary scholars, permissible because the text is not physically written on the device, but leaving the phone outside is more cautious and closer to the spirit of the ruling.`, ...E },
  speech_p3: { en: `Cleansing (istinja with water, or istijmar with clean stones or their equivalent, such as toilet paper) must be done with the left hand. The Prophet ﷺ forbade the right hand from cleansing after the toilet.`, ...E },
  speech_source: { en: `Source: al-Bukhari 153, Muslim 267 (Abu Qatada).`, ...E },

  istinja_h: { en: `Istinja and Istijmar`, ...E },
  istinja_p1: { en: `Istinja is cleansing the place of exit with water until it is clean and the traces of impurity are removed. Istijmar is cleansing with clean stones, tissue, or any absorbent solid material (traditionally an odd number, minimum three).`, ...E },
  istinja_p2: { en: `The classical rule across all four schools: water is superior; if only solids are available, at least three wipes are used until the place is clean. Combining both is the most complete Sunnah, water after solids.`, ...E },
  istinja_p3: { en: `Anas (ra) said: "The Prophet ﷺ used to enter the toilet, and I used to bring him water for him to wash himself with."`, ...E },
  istinja_source: { en: `Source: al-Bukhari 217, Muslim 271.`, ...E },

  wisdom_h: { en: `The Wisdom Behind These Etiquettes`, ...E },
  wisdom_intro: { en: `Islam does not treat any moment of a Muslim's day as too private for guidance. The etiquettes of the toilet are a small door onto a large teaching:`, ...E },
  wisdom_1: { en: `Cleanliness is half of faith (Muslim 223). It begins with the body.`, ...E },
  wisdom_2: { en: `Modesty, the toilet is a private place, entered discreetly, without frivolity.`, ...E },
  wisdom_3: { en: `Constant remembrance, the servant enters seeking refuge, leaves seeking forgiveness. Even here, the heart is turned to Allah.`, ...E },
  wisdom_4: { en: `Distinction of the right and the left, an outward habit that trains an inward preference for what is noble.`, ...E },
  wisdom_5: { en: `Consideration for others, do not soil the water they drink from, the paths they walk, or the shade they rest in.`, ...E },
  wisdom_close: { en: `A companion of the polytheists once mocked the Muslims saying: "Your Prophet has taught you everything, even how to relieve yourselves." Salman al-Farisi (ra) replied: "Yes, he has forbidden us from facing the qiblah, from cleansing with the right hand, from using fewer than three stones, and from using dung or bone."`, ...E },
  wisdom_source: { en: `Source: Muslim 262 (Salman al-Farisi).`, ...E },

  label_transliteration: { en: `Transliteration`, ...E },
  label_meaning: { en: `Meaning`, ...E },
} as const satisfies Record<string, LangMap>;

export type ToiletContentKey = keyof typeof TOILET_CONTENT;
