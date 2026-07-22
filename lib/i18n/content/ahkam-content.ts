import type { Lang } from '@/lib/i18n/translations';
type LangMap = Record<Lang, string>;
const E: Omit<LangMap, 'en'> = { ms: '', tur: '', urd: '', ben: '', fas: '', zh: '', yue: '', ja: '', ru: '', es: '', ko: '', ta: '', si: '' };

export const AHKAM_CONTENT = {
  /* Framework */
  frame_h: { en: `The Framework`, ...E },
  frame_p1: { en: `Classical Islamic scholarship classifies every human action into one of five categories, called al-ahkam al-khamsa, the five rulings. Every action, from praying to eating a date to opening a business, sits in one of them. The five are: Fard or Wajib (obligatory), Mustahabb or Sunnah (recommended), Mubah (permitted), Makruh (disliked), and Haram (forbidden).`, ...E },
  frame_p2: { en: `The rulings are derived from four classical sources (usul al-fiqh): the Qur'an, the Sunnah, the consensus of the scholars (ijma'), and analogical reasoning (qiyas). Understanding this framework is the entry-point to fiqh, and to understanding how Islamic law describes rather than legislates every corner of a Muslim's day.`, ...E },

  /* HukmCard labels */
  label_doing: { en: `Doing it`, ...E },
  label_leaving: { en: `Leaving it`, ...E },
  label_examples: { en: `Examples`, ...E },

  /* Fard */
  fard_translit: { en: `Fard / Wajib`, ...E },
  fard_english: { en: `Obligatory`, ...E },
  fard_def: { en: `A command from Allah or His Messenger ﷺ, established by definitive proof (Qur'an, mutawatir Sunnah, or ijma'). The Hanafi school distinguishes fard (definitive proof) from wajib (strong but non-definitive proof); the other three schools treat them as synonyms.`, ...E },
  fard_reward: { en: `Reward, and the act itself is part of faith. Rejecting a fard entirely puts a person outside Islam.`, ...E },
  fard_penalty: { en: `Sin, punishable in the next life. Omitting a fard without valid excuse is a major sin.`, ...E },
  fard_ex_1: { en: `The five daily prayers.`, ...E },
  fard_ex_2: { en: `Fasting the month of Ramadan.`, ...E },
  fard_ex_3: { en: `Zakat when its conditions are met.`, ...E },
  fard_ex_4: { en: `Hajj once in a lifetime for those who can afford it.`, ...E },
  fard_ex_5: { en: `Believing in Allah, His angels, books, messengers, the Day of Judgement, and destiny.`, ...E },

  /* Mustahabb */
  must_translit: { en: `Mustahabb / Mandub / Sunnah`, ...E },
  must_english: { en: `Recommended`, ...E },
  must_def: { en: `An act the Prophet ﷺ did or encouraged that is not obligatory. Subcategories: sunnah mu'akkadah (strongly emphasised, such as the rawatib prayers), and sunnah ghayr mu'akkadah (encouraged but less emphasised, such as fasting on Mondays and Thursdays).`, ...E },
  must_reward: { en: `Reward, love from Allah, closeness through the nawafil.`, ...E },
  must_penalty: { en: `No sin for leaving it, but a lost opportunity for reward and closeness.`, ...E },
  must_ex_1: { en: `The 12 rakat of rawatib around the five daily prayers.`, ...E },
  must_ex_2: { en: `Fasting on Mondays and Thursdays, or the three white days each month.`, ...E },
  must_ex_3: { en: `Using siwak before wudu and prayer.`, ...E },
  must_ex_4: { en: `Greeting with as-salamu alaykum first.`, ...E },
  must_ex_5: { en: `Visiting the sick, attending funerals.`, ...E },

  /* Mubah */
  mubah_translit: { en: `Mubah / Halal`, ...E },
  mubah_english: { en: `Permitted, Neutral`, ...E },
  mubah_def: { en: `An act on which the Shari'ah is silent, or has been made explicitly permissible without preference. Neither rewarded for doing nor for leaving in itself, though intention can transform it (eating with the intention of strength for worship becomes rewarded).`, ...E },
  mubah_reward: { en: `No inherent reward, but blessed if made a means to a good end.`, ...E },
  mubah_penalty: { en: `No sin for doing or for leaving.`, ...E },
  mubah_ex_1: { en: `Choosing what colour clothes to wear (within the permitted range).`, ...E },
  mubah_ex_2: { en: `Choosing what type of halal food to eat.`, ...E },
  mubah_ex_3: { en: `The kind of work or trade one pursues, so long as it is lawful.`, ...E },
  mubah_ex_4: { en: `Sleeping in a particular room, sitting in a particular chair.`, ...E },

  /* Makruh */
  mak_translit: { en: `Makruh`, ...E },
  mak_english: { en: `Disliked`, ...E },
  mak_def: { en: `Something Allah or His Messenger ﷺ disliked without prohibiting definitively. Subcategories in the Hanafi school: makruh tanzihi (mild dislike, closer to permitted) and makruh tahrimi (strong dislike, closer to forbidden, whose deliberate performance is sinful).`, ...E },
  mak_reward: { en: `Reward for leaving it out of taqwa.`, ...E },
  mak_penalty: { en: `No sin for a single occurrence, but persistent makruh acts weaken faith and can lead to haram.`, ...E },
  mak_ex_1: { en: `Speaking during actual acts of worship without need.`, ...E },
  mak_ex_2: { en: `Facing the qiblah while relieving oneself in an open place.`, ...E },
  mak_ex_3: { en: `Eating with the left hand out of habit.`, ...E },
  mak_ex_4: { en: `Sleeping face-down.`, ...E },
  mak_ex_5: { en: `Wasting water even for wudu.`, ...E },

  /* Haram */
  haram_translit: { en: `Haram`, ...E },
  haram_english: { en: `Forbidden`, ...E },
  haram_def: { en: `A prohibition established by definitive proof from Qur'an or Sunnah or ijma'. Doing it is sinful. Denying a well-known haram (like the prohibition of wine, adultery, or interest) puts a person outside Islam.`, ...E },
  haram_reward: { en: `Reward for leaving it, especially when tempted.`, ...E },
  haram_penalty: { en: `Sin, punishable in the next life. Major haram acts (kabair) can be graver than others.`, ...E },
  haram_ex_1: { en: `Shirk (associating partners with Allah), the only sin never forgiven if died upon.`, ...E },
  haram_ex_2: { en: `Killing an innocent soul, adultery, false witness, disobedience to parents.`, ...E },
  haram_ex_3: { en: `Consuming intoxicants, pork, blood, unlawful meat.`, ...E },
  haram_ex_4: { en: `Ribā (interest) in transactions.`, ...E },
  haram_ex_5: { en: `Backbiting, lying, breaking trusts.`, ...E },
  haram_ex_6: { en: `Wearing silk and gold for men, imitating the opposite gender in dress.`, ...E },

  /* Subcategories */
  sub_h: { en: `Fard 'Ayn versus Fard Kifayah`, ...E },
  sub_intro: { en: `A fard is further divided into two:`, ...E },
  sub_1: { en: `Fard 'ayn, obligatory on every individual. Missing it is a personal sin. Example: the five daily prayers, fasting Ramadan.`, ...E },
  sub_2: { en: `Fard kifayah, a communal obligation. If enough Muslims fulfil it, the rest are absolved; if none do, the entire community is sinful. Example: the janazah prayer over a Muslim who has died, learning the sciences the umma needs (medicine, engineering, Islamic scholarship), calling to Islam, defending Muslim lands.`, ...E },

  /* Wisdom */
  wisdom_h: { en: `Why This Framework Matters`, ...E },
  wisdom_p1: { en: `Islam does not divide life into "religious" and "secular." Every moment of a Muslim's day falls under one of the five rulings. This is not a burden; it is a mercy. It tells the servant: your entire life can be worship, or your entire life can be heedlessness, and Allah has told you the difference.`, ...E },
  wisdom_p2: { en: `Ibn Taymiyyah wrote: "The whole of the religion returns to two things: doing what Allah loves, and leaving what Allah hates. The five ahkam simply arrange these two into degrees so that a person always knows where he is."`, ...E },
  wisdom_p3: { en: `For the beginner: keep the fard, guard against the haram, and let the mustahabb be the training ground of the heart. The mubah is your rest. The makruh is a warning bell. That is Islam, arranged for the whole life.`, ...E },
} as const satisfies Record<string, LangMap>;

export type AhkamContentKey = keyof typeof AHKAM_CONTENT;
