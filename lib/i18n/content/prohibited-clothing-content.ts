import type { Lang } from '@/lib/i18n/translations';

type LangMap = Record<Lang, string>;
const E: Omit<LangMap, 'en'> = { ms: '', tur: '', urd: '', ben: '', fas: '', zh: '', yue: '', ja: '', ru: '', es: '', ko: '', ta: '', si: '' };

export const PROHIBITED_CLOTHING_CONTENT = {
  /* Framing */
  framing_h: { en: `The Prohibitions and Their Sources`, ...E },
  framing_p1: { en: `A short list of specific materials, colours, and forms of dress is forbidden in Islam, each grounded in an explicit ruling from the Prophet ﷺ. This page collects them with the actual hadith wording and the classical scholarly discussion.`, ...E },
  framing_p2_pre: { en: `For the general etiquettes and permitted range of dress, see the`, ...E },
  framing_p2_link: { en: `Clothing Etiquette`, ...E },
  framing_p2_post: { en: `page. Prohibitions apply to what men and women wear differently in each case, so this page is arranged by ruling, not by garment type.`, ...E },

  /* Silk and gold */
  silk_h: { en: `Silk and Gold for Men`, ...E },
  silk_translit: { en: `Hadhani haramun 'ala dhukuri ummati, hillun li inathiha.`, ...E },
  silk_meaning: { en: `These two are forbidden for the males of my nation, permitted for its females.`, ...E },
  silk_p: { en: `The Prophet ﷺ raised silk in one hand and gold in the other, then spoke these words. This is the fundamental text on both prohibitions.`, ...E },
  silk_concessions_intro: { en: `Concessions the fuqaha permit for men:`, ...E },
  silk_c_1: { en: `Silk trim of up to four fingers' width on a garment (per the Hanbali and Shafi'i mainstream, from Muslim 2069).`, ...E },
  silk_c_2: { en: `Silk in cases of medical necessity, based on the Prophet's ﷺ permission to al-Zubayr and Abd al-Rahman ibn Awf who suffered an itching condition (al-Bukhari 2919).`, ...E },
  silk_c_3: { en: `Silver rings and silver-plated items (the Prophet ﷺ himself wore a silver signet ring, al-Bukhari 5866).`, ...E },
  silk_c_4: { en: `All gold and silk in general for women; the prohibition is specifically on men.`, ...E },
  silk_source: { en: `Sources: Abu Dawud 4057, al-Nasa'i 5144, Ibn Majah 3595 (Abu Musa al-Ash'ari); al-Bukhari 5426, Muslim 2069, 2078; al-Bukhari 2919 for the medical exception.`, ...E },

  /* Imitation gender */
  gender_h: { en: `Imitating the Opposite Gender`, ...E },
  gender_p_translit_body: { en: `The Messenger of Allah ﷺ cursed men who imitate women and women who imitate men.`, ...E },
  gender_p1: { en: `The ruling applies to dress, gait, speech patterns, and general presentation. It is not about a woman wearing trousers (which many cultures adopt for both sexes) but about a specifically male or female presentation being imitated by the other in a manner that blurs the two.`, ...E },
  gender_p2: { en: `Classical scholars grounded this in the Qur'anic principle of the distinct creation of male and female ("And the male is not like the female," Al 'Imran 3:36), and in the wisdom that Islamic law preserves the distinctions Allah has honoured.`, ...E },
  gender_source: { en: `Source: al-Bukhari 5885 (Ibn Abbas).`, ...E },

  /* Red */
  red_h: { en: `The Question of Pure Red Garments for Men`, ...E },
  red_p1: { en: `A minority hadith reports that the Prophet ﷺ forbade men from wearing garments dyed with al-mu'asfar (the pure safflower orange-red). However, many other authentic reports describe him ﷺ wearing red-striped Yemeni cloaks (al-hulla al-hamra, al-Bukhari 5901) and coral-red garments.`, ...E },
  red_reconciliation_intro: { en: `The classical reconciliation across the four schools:`, ...E },
  red_r_1: { en: `Red as a stripe, weft, or pattern: permitted for men by consensus.`, ...E },
  red_r_2: { en: `Garments entirely of pure red-orange (mu'asfar) dye: disliked for men in the majority view; forbidden per some (early Shafi'i, some Hanbali).`, ...E },
  red_r_3: { en: `Red garments for women: permitted without dispute.`, ...E },
  red_source: { en: `Sources: Muslim 2077 (Abdullah ibn Amr) for the mu'asfar prohibition; al-Bukhari 5901 for the red-striped cloak.`, ...E },

  /* Isbal */
  isbal_h: { en: `Isbal Out of Pride`, ...E },
  isbal_p1: { en: `Dragging the lower garment (izar, thawb, trousers, cloak) below the ankles specifically out of pride is a major sin. Where it happens without any element of pride (as with Abu Bakr al-Siddiq), the Prophet ﷺ excused him personally. But the safe and recommended practice for men is to keep the garment above the ankles.`, ...E },
  isbal_p2: { en: `This ruling is specific to men. Women are obliged to cover the feet, and their garments will naturally hang below the ankles.`, ...E },
  isbal_source: { en: `See /clothing-etiquette for the full discussion.`, ...E },

  /* Kuffar imitation */
  kuffar_h: { en: `Imitation of the Disbelievers in Specifically Religious Dress`, ...E },
  kuffar_p1: { en: `The Prophet ﷺ said: "Whoever imitates a people is one of them." (Abu Dawud 4031, Ahmad 5114, Sahih).`, ...E },
  kuffar_p2: { en: `The classical position: prohibition attaches to dress that is distinctively religious to another faith (a cross, priestly vestments, a saffron monk's robe, ceremonial ritual clothing of another religion). Ordinary secular styles shared by many cultures (a suit, jeans, a shirt) do not fall under this prohibition; scholars from Ibn Taymiyyah to Ibn al-Qayyim to the modern muftis of Egypt and the Gulf have written this explicitly.`, ...E },
  kuffar_p3: { en: `The wisdom: outward similarity generates inward affinity. Islam wants Muslims to be distinguishable by dignity, not by strangeness, and specifically not to blur the religious markers of other faiths in the eyes of the ignorant.`, ...E },
  kuffar_source: { en: `Source: Abu Dawud 4031 (Ibn Umar); Ibn Taymiyyah, Iqtida' al-Sirat al-Mustaqim, for the classical elaboration.`, ...E },

  /* Wisdom */
  wisdom_h: { en: `The Wisdom Behind These Prohibitions`, ...E },
  wisdom_intro: { en: `Each prohibition serves an inner purpose:`, ...E },
  wisdom_1: { en: `Silk and gold for men: guards masculinity against softness and ostentation, reserves the finest for women, and reserves the ultimate finery for the next life (the people of Paradise wear silk, Fatir 35:33).`, ...E },
  wisdom_2: { en: `Isbal: the outward remedy for the inward disease of arrogance.`, ...E },
  wisdom_3: { en: `Gender imitation: preserves the distinctness Allah has honoured in the two sexes.`, ...E },
  wisdom_4: { en: `Pure red mu'asfar: traditionally worn as a mark of status, so its avoidance guards against ostentation.`, ...E },
  wisdom_5: { en: `Religious imitation of other faiths: preserves the outward identity of the Muslim, and prevents confusion about creed.`, ...E },
  wisdom_close: { en: `None of these rulings is arbitrary. Each carries an inner meaning, and each, when kept, aligns the outer skin of a person's life with the inner tawhid of the heart.`, ...E },

  /* Labels */
  label_transliteration: { en: `Transliteration`, ...E },
  label_meaning: { en: `Meaning`, ...E },
} as const satisfies Record<string, LangMap>;

export type ProhibitedClothingContentKey = keyof typeof PROHIBITED_CLOTHING_CONTENT;
