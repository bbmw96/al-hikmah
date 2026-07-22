import type { Lang } from '@/lib/i18n/translations';

type LangMap = Record<Lang, string>;
const E: Omit<LangMap, 'en'> = { ms: '', tur: '', urd: '', ben: '', fas: '', zh: '', yue: '', ja: '', ru: '', es: '', ko: '', ta: '', si: '' };

export const EATING_CONTENT = {
  /* Bismillah before */
  bismillah_h: { en: `Say Bismillah Before Eating`, ...E },
  bismillah_p1: { en: `The Prophet ﷺ said to Umar ibn Abi Salama (a boy at his table): "Young man, say Bismillah, eat with your right hand, and eat from what is nearest to you." That single instruction gathered three etiquettes at once.`, ...E },
  bismillah_forgot_label: { en: `If you forgot at the start`, ...E },
  bismillah_forgot_p: { en: `"In the name of Allah, at its beginning and at its end," said as soon as you remember. The Prophet ﷺ taught this so that the shaytan, who eats with whoever eats without Bismillah, is expelled from what remains.`, ...E },
  bismillah_source: { en: `Sources: al-Bukhari 5376, Muslim 2022 (Umar ibn Abi Salama); Abu Dawud 3767, al-Tirmidhi 1858 ('Aisha) for the forgetting.`, ...E },

  /* Right hand */
  right_h: { en: `Eat With the Right Hand, From What Is Nearest`, ...E },
  right_p1: { en: `The Prophet ﷺ said: "None of you should eat or drink with his left hand, for the shaytan eats and drinks with the left." (Muslim 2020).`, ...E },
  right_p2: { en: `And: "Eat from what is nearest to you." When a shared dish is placed between people, take from the side directly in front of you and do not reach across for what looks better. To reach across is to invite others to think you consider their portion inferior.`, ...E },
  right_p3: { en: `An exception the Prophet ﷺ himself made: for fruits and dates in a mixed dish, he would pick out the best for someone he wanted to honour, or the person may pick out the very small (a single date) from any side.`, ...E },
  right_source: { en: `Source: al-Bukhari 5376, Muslim 2022.`, ...E },

  /* Sit */
  sit_h: { en: `Sit to Eat`, ...E },
  sit_p1: { en: `The Prophet ﷺ ate seated on the floor, saying: "I do not eat leaning against anything, for I am only a servant. I eat as a servant eats and sit as a servant sits."`, ...E },
  sit_p2: { en: `He ﷺ often sat cross-legged or with the right knee raised. He never used a table in the modern sense. Sitting on a chair at a dining table is permitted; standing to eat or drink is discouraged, though the Prophet ﷺ himself is reported to have drunk standing from the water of Zamzam, showing the discouragement is not an absolute prohibition.`, ...E },
  sit_source: { en: `Sources: al-Bukhari 5399 (Anas) for eating as a servant; Muslim 2027 for the discouragement of drinking standing; al-Bukhari 5617 for Zamzam.`, ...E },

  /* Thirds */
  thirds_h: { en: `The Rule of Thirds: Food, Water, Air`, ...E },
  thirds_p1: { en: `The Prophet ﷺ said: "The son of Adam has not filled any container worse than his stomach. It is sufficient for a person to eat a few morsels that keep his back upright. But if he must, then one-third for his food, one-third for his drink, and one-third for his breath."`, ...E },
  thirds_p2: { en: `This one hadith, more than any other, guards against the two great illnesses of eating: gluttony and heaviness in worship. Ibn al-Qayyim called overeating "the mother of all disease" and its restraint "the mother of all medicine."`, ...E },
  thirds_source: { en: `Source: al-Tirmidhi 2380, Ibn Majah 3349 (al-Miqdam ibn Ma'dikarib), graded sahih by al-Albani.`, ...E },

  /* Drinking */
  drink_h: { en: `Drinking: Three Sips, No Blowing, Sitting Down`, ...E },
  drink_1: { en: `Three sips, breathing between them. Anas (ra) said the Prophet ﷺ used to breathe three times when drinking (not into the vessel, but away from it). It is more thirst-quenching, more wholesome, and easier on the stomach (Bukhari 5631, Muslim 2028).`, ...E },
  drink_2: { en: `No blowing into a vessel. He ﷺ forbade blowing into a drinking vessel to cool a hot drink (Abu Dawud 3728).`, ...E },
  drink_3: { en: `Do not drink from the mouth of the water-skin or bottle. He ﷺ forbade this (Bukhari 5626); one might unknowingly swallow an insect.`, ...E },
  drink_4: { en: `Sit down to drink. The general rule (Muslim 2024). Exceptions are reported for Zamzam and for water in transit.`, ...E },
  drink_5: { en: `The one who serves drinks himself last. He ﷺ said: "The one who gives drink to others should drink last." (Muslim 681, Abu Qatada).`, ...E },

  /* Communal */
  comm_h: { en: `Eating Together: The Communal Blessing`, ...E },
  comm_p1: { en: `The Prophet ﷺ said: "Eat together and do not eat separately, for barakah is with the community." (Ibn Majah 3287, Abu Dawud 3764).`, ...E },
  comm_p2: { en: `And: "The food for two suffices three, and the food for three suffices four." (Muslim 2059, Bukhari 5392).`, ...E },
  comm_p3: { en: `Never criticise food. The Prophet ﷺ never criticised any food he was served. If he liked it he ate it, and if he disliked it he left it, without a word (al-Bukhari 3563, Muslim 2064, Abu Hurayra).`, ...E },

  /* Alhamdu */
  alhamdu_h: { en: `Say Alhamdulillah After Eating`, ...E },
  alhamdu_p: { en: `The Prophet ﷺ said: "Whoever eats a meal and then says this, his previous sins are forgiven." A tiny phrase, an enormous reward, for the servant who remembers that even a spoonful of food is a gift.`, ...E },
  alhamdu_source: { en: `Sources: Abu Dawud 4023, al-Tirmidhi 3458, Ibn Majah 3285 (Mu'adh ibn Anas), Hasan.`, ...E },

  /* Prohibitions */
  prohib_h: { en: `What Is Forbidden and What Is Restricted`, ...E },
  prohib_1: { en: `Pork and its by-products (al-Baqarah 2:173, al-Ma'ida 5:3, al-An'am 6:145, al-Nahl 16:115).`, ...E },
  prohib_2: { en: `Blood. Blood poured out at slaughter, forbidden by the same verses. Blood remaining in cooked meat is exempted.`, ...E },
  prohib_3: { en: `Wine and every intoxicant (al-Ma'ida 5:90-91). The Prophet ﷺ said: "Every intoxicant is khamr, and every khamr is forbidden." (Muslim 2003).`, ...E },
  prohib_4: { en: `Meat of any animal not slaughtered per the Sunnah (see the Dhabihah page).`, ...E },
  prohib_5: { en: `Food consecrated to other than Allah (al-Baqarah 2:173).`, ...E },
  prohib_6: { en: `Carrion, strangled animals, those killed by a blow, by a fall, or by another beast, unless properly slaughtered before death (al-Ma'ida 5:3).`, ...E },
  prohib_7: { en: `Fanged predators and taloned birds of prey (Muslim 1934).`, ...E },
  prohib_8: { en: `Gold and silver vessels. The Prophet ﷺ said: "He who drinks from a silver vessel, the fire of Jahannam gurgles in his belly." Extended by the majority of scholars to eating vessels as well (Bukhari 5426, Muslim 2065).`, ...E },
  prohib_close: { en: `What remains of Allah's provision is vast, halal, and blessed. The Qur'an says: "Eat of the lawful and good things that Allah has provided you, and be grateful for the favour of Allah, if it is Him you worship" (al-Nahl 16:114).`, ...E },

  /* Labels */
  label_transliteration: { en: `Transliteration`, ...E },
  label_meaning: { en: `Meaning`, ...E },
} as const satisfies Record<string, LangMap>;

export type EatingContentKey = keyof typeof EATING_CONTENT;
