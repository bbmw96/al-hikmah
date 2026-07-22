import type { Lang } from '@/lib/i18n/translations';

type LangMap = Record<Lang, string>;
const EMPTY_13: Omit<LangMap, 'en'> = {
  ms: '', tur: '', urd: '', ben: '', fas: '', zh: '', yue: '', ja: '', ru: '', es: '', ko: '', ta: '', si: '',
};

/**
 * Body content for /dhabihah (Halal Slaughter).
 *
 * Phase 1: English populated from the previously-hardcoded JSX children;
 * other 13 languages empty so tc() falls back to English.
 * Phase 2 (future): populate proper 14-lang translations, no machine translation.
 */
export const DHABIHAH_CONTENT = {
  /* ── Section 1: Ihsan ─────────────────────────────── */
  ihsan_h: {
    en: `The Foundational Principle: Ihsan`,
    ...EMPTY_13,
  },
  ihsan_hadith_en: {
    en: `Allah has decreed ihsan (excellence) upon everything. So if you kill, kill well; and if you slaughter, slaughter well. Let each of you sharpen his blade, and let him give comfort to the animal he slaughters.`,
    ...EMPTY_13,
  },
  ihsan_p: {
    en: `This hadith of Shaddad ibn Aws is the foundation of the entire Islamic law of slaughter. Every rule that follows exists to fulfil these two commands: sharpen the blade, and give the animal comfort. Islamic slaughter is not merely a method for producing meat, it is an act of worship in which the animal is treated with mercy up to and including its last breath.`,
    ...EMPTY_13,
  },
  ihsan_source: { en: `Source: Muslim 1955 (Shaddad ibn Aws).`, ...EMPTY_13 },

  /* ── Section 2: Four conditions ───────────────────── */
  conditions_h: { en: `The Four Conditions of a Valid Slaughter`, ...EMPTY_13 },
  conditions_intro: { en: `For meat to be halal, four conditions must be met:`, ...EMPTY_13 },
  cond_1_label: { en: `1. The slaughterer.`, ...EMPTY_13 },
  cond_1_body: {
    en: `Must be a Muslim, or from the People of the Book (Jew or Christian) whose slaughter Allah has explicitly permitted: "The food of those who were given the Scripture is lawful for you" (al-Ma'ida 5:5). Muslim, sane, capable of intention, and pronouncing Allah's name at the moment of slaughter.`,
    ...EMPTY_13,
  },
  cond_2_label: { en: `2. The instrument.`, ...EMPTY_13 },
  cond_2_body: {
    en: `A sharp implement that causes flowing blood: a knife, a sword, a sharpened stone or shell. The Prophet ﷺ forbade the use of a tooth (a bone) or a nail (a claw); these do not cut cleanly and would strangle the animal.`,
    ...EMPTY_13,
  },
  cond_2_source: { en: `Source: al-Bukhari 5498, Muslim 1968 (Rafi' ibn Khadij).`, ...EMPTY_13 },
  cond_3_label: { en: `3. The cut.`, ...EMPTY_13 },
  cond_3_body: {
    en: `One continuous cut through the throat that severs the trachea (windpipe), the oesophagus (foodpipe), and at least one of the two jugular veins. The Hanafi school requires cutting at least three of the four (trachea, oesophagus, and two jugulars); the Shafi'i and Maliki, at least the trachea and oesophagus; the Hanbali, the trachea alone with blood-flow suffices. The safe practice combines all four.`,
    ...EMPTY_13,
  },
  cond_4_label: { en: `4. The invocation of Allah's name (tasmiya).`, ...EMPTY_13 },
  cond_4_body: {
    en: `Said at the moment of the cut. The Qur'an is emphatic: "Do not eat that over which the name of Allah has not been mentioned" (al-An'am 6:121). The Hanafi and Maliki schools consider deliberate omission invalidating; the Shafi'i school holds it recommended but not strictly required; the Hanbali position varies. To err on the side of certainty, always say it.`,
    ...EMPTY_13,
  },

  /* ── Section 3: Method ────────────────────────────── */
  method_h: { en: `The Method`, ...EMPTY_13 },
  method_step_1: { en: `Sharpen the blade out of sight of the animal (Muslim 1955).`, ...EMPTY_13 },
  method_step_2: { en: `Do not slaughter one animal in front of another.`, ...EMPTY_13 },
  method_step_3: { en: `Face the animal towards the qiblah, lying it on its left side (the classical practice, though not a strict validity condition).`, ...EMPTY_13 },
  method_step_4: { en: `Say Bismillah, wa Allahu Akbar at the moment of the cut.`, ...EMPTY_13 },
  method_step_5: { en: `Make a swift, single cut through the neck at the front (not from the back).`, ...EMPTY_13 },
  method_step_6: { en: `Do not press or manipulate the animal until it has stopped moving.`, ...EMPTY_13 },
  method_umar_p: {
    en: `A hadith records that 'Umar (ra) saw a man about to slaughter a sheep by dragging it by the foot to the killing place. 'Umar struck him and said: "Drive it to its death gently."`,
    ...EMPTY_13,
  },

  /* ── Section 4: Permitted and forbidden animals ───── */
  animals_h: { en: `Which Animals Are Permitted and Which Are Not`, ...EMPTY_13 },
  animals_forbidden_intro: { en: `Explicitly forbidden in the Qur'an and Sunnah:`, ...EMPTY_13 },
  animals_pork: { en: `Pork (al-Baqarah 2:173, al-Ma'ida 5:3, al-An'am 6:145, al-Nahl 16:115).`, ...EMPTY_13 },
  animals_blood: { en: `Blood (poured out, the same verses).`, ...EMPTY_13 },
  animals_carrion: { en: `Carrion, strangled, beaten, fallen, gored, or partly-eaten-by-a-beast animals unless finished properly before death (al-Ma'ida 5:3).`, ...EMPTY_13 },
  animals_altar: { en: `Animals slaughtered for other than Allah, or on stone altars (al-Ma'ida 5:3).`, ...EMPTY_13 },
  animals_fanged: { en: `Fanged predators (lion, tiger, wolf, dog, cat), per Muslim 1934.`, ...EMPTY_13 },
  animals_taloned: { en: `Taloned birds of prey (eagle, hawk, falcon), same hadith.`, ...EMPTY_13 },
  animals_donkey: { en: `Domestic donkey (al-Bukhari 4198, 5528).`, ...EMPTY_13 },
  animals_creatures: { en: `Every creature the Sunnah forbade the killing of (frogs, ants, bees, hoopoe, shrike, per Abu Dawud 5267), which by extension are not eaten.`, ...EMPTY_13 },
  animals_permitted_p: {
    en: `Permitted: sheep, goats, cattle, camel, chicken, and the general run of grazing livestock. The mule is disputed (majority: not permitted). The horse is disputed (Hanafi: makruh; the other three: permitted with karahah).`,
    ...EMPTY_13,
  },

  /* ── Section 5: Fish and locusts ──────────────────── */
  fish_h: { en: `The Two Exceptions: Fish and Locusts`, ...EMPTY_13 },
  fish_hadith: {
    en: `The Prophet ﷺ said: "Two dead animals and two bloods have been made lawful to us. As for the two dead animals, they are fish and locusts. As for the two bloods, they are the liver and the spleen."`,
    ...EMPTY_13,
  },
  fish_p: {
    en: `Fish and locusts do not require ritual slaughter; they may be eaten however they die. Fish caught dead in the water is halal (Ibn Umar). The classical majority (Shafi'i, Maliki, Hanbali) permit all seafood; the Hanafi school restricts it to scaled fish specifically.`,
    ...EMPTY_13,
  },
  fish_source: { en: `Source: Ibn Majah 3314, al-Bayhaqi (Ibn Umar).`, ...EMPTY_13 },

  /* ── Section 6: Hunting ───────────────────────────── */
  hunting_h: { en: `Hunting`, ...EMPTY_13 },
  hunting_intro: { en: `For game where slaughter is impossible (a bird brought down mid-flight, a deer struck by an arrow), what is caught is halal if:`, ...EMPTY_13 },
  hunting_c_1: { en: `The hunter is a Muslim (or People of the Book).`, ...EMPTY_13 },
  hunting_c_2: { en: `Says Bismillah at the moment of release (of the arrow, spear, bullet, or trained hunting animal).`, ...EMPTY_13 },
  hunting_c_3: { en: `The instrument penetrates and causes flowing blood.`, ...EMPTY_13 },
  hunting_c_4: { en: `If a trained hunting dog or falcon is used, it must be trained (does not eat what it catches) and released with the invocation.`, ...EMPTY_13 },
  hunting_verse: {
    en: `"They ask you what has been made lawful for them. Say: lawful for you are all good foods and what you have trained hunting animals to catch, teaching them of what Allah has taught you. So eat of what they catch for you, and mention the name of Allah upon it." (al-Ma'ida 5:4).`,
    ...EMPTY_13,
  },

  /* ── Section 7: Mechanical ────────────────────────── */
  mech_h: { en: `Mechanical Slaughter and Modern Abattoirs`, ...EMPTY_13 },
  mech_intro: { en: `The classical conditions do not require the cutter to hold the knife personally. A rotating blade, a mechanical cutter, or an automated line is permitted if:`, ...EMPTY_13 },
  mech_c_1: { en: `A Muslim (or ahl al-kitab) operator initiates the run with tasmiya.`, ...EMPTY_13 },
  mech_c_2: { en: `The blade meets the four-condition cut (throat vessels severed).`, ...EMPTY_13 },
  mech_c_3: { en: `The animal is alive at the point of cut (post-mortem cutting does not make halal what died before it).`, ...EMPTY_13 },
  mech_c_4: { en: `Pre-stunning, if used, must not kill the animal before the cut. Recoverable stunning (low-voltage electric) is permitted by many fatwa councils (South Africa, Malaysia, Egyptian Dar al-Ifta); irrecoverable stunning (bolt, high-voltage, gas) is not.`, ...EMPTY_13 },
  mech_certification: { en: `This is why halal certification exists: to audit the chain from stunning method to blade to invocation.`, ...EMPTY_13 },

  /* ── Section 8: Qurbani ───────────────────────────── */
  qurbani_h: { en: `Udhiyah and Qurbani (The Eid al-Adha Slaughter)`, ...EMPTY_13 },
  qurbani_p1: {
    en: `On the 10th, 11th, and 12th of Dhul-Hijjah, Muslims worldwide who can afford it slaughter a sheep, goat, cow, or camel in the tradition of the Prophet Ibrahim ﷺ. The Prophet Muhammad ﷺ said: "Whoever can afford it and does not sacrifice, let him not come near our place of prayer."`,
    ...EMPTY_13,
  },
  qurbani_p2: {
    en: `The meat is divided into three: one third for the family, one third for friends and neighbours, one third for the poor. In modern times most Muslims pay a trusted charity to slaughter on their behalf in a country of need.`,
    ...EMPTY_13,
  },
  qurbani_p3: {
    en: `This is the ritual re-enactment of what Ibrahim ﷺ was ready to do with Isma'il ﷺ, and what Allah ransomed with a mighty sacrifice (al-Saffat 37:107). Every year the family gathers, the animal is treated with ihsan, and the poor eat meat perhaps for the only time that year.`,
    ...EMPTY_13,
  },
  qurbani_source: { en: `Source: Ibn Majah 3123 (Abu Hurayra) for the warning; Fiqh across the four schools for the meat division.`, ...EMPTY_13 },

  /* ── Shared labels ────────────────────────────────── */
  label_transliteration: { en: `Transliteration`, ...EMPTY_13 },
  label_meaning: { en: `Meaning`, ...EMPTY_13 },
} as const satisfies Record<string, LangMap>;

export type DhabihahContentKey = keyof typeof DHABIHAH_CONTENT;
