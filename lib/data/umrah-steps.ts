export interface UmrahStep {
  id: string;
  stepNumber: number;
  title: string;
  arabicTitle: string;
  description: string;
  requirements: string[];
  commonMistakes?: string[];
  wisdom: string;
  duas?: string[];
  isObligatory: boolean;
  obligatoryNote?: string;
}

export const UMRAH_STEPS: UmrahStep[] = [
  {
    id: 'umrah-ihram',
    stepNumber: 1,
    title: 'Entering the State of Ihram',
    arabicTitle: 'الإحرام',
    isObligatory: true,
    obligatoryNote: 'Rukn (pillar) — Umrah is invalid without it',
    description:
      "Umrah begins with entering the sacred state of Ihram at or before the designated Miqat boundary. The pilgrim performs a ritual bath (ghusl), applies fragrance before wearing the Ihram garments (men may not apply it afterwards), and dons the prescribed clothing. Men wear two unstitched white cloths: the izar (lower wrap) and the rida' (upper wrap). Women wear their regular modest Islamic attire with no face veil or gloves during Ihram. Two units of voluntary prayer are offered, then the niyyah (intention) for Umrah is made and the Talbiyah is recited, signalling entry into the sacred state.",
    requirements: [
      "Take a ritual bath (ghusl) or perform wudu as a minimum",
      "Apply fragrance to the body before putting on Ihram garments (men only; not on the garments themselves)",
      "Men: wear the izar (lower) and rida' (upper) unstitched white garments",
      "Women: wear regular modest Islamic clothing; face and hands remain uncovered",
      "Pray two units of voluntary prayer if possible",
      "Make the intention: 'Labbayk Allahumma umratan'",
      "Begin reciting the Talbiyah: 'Labbayk Allahumma labbayk...'",
      "Cross or reach the Miqat in the state of Ihram",
    ],
    commonMistakes: [
      "Passing the Miqat without entering Ihram (incurs a financial penalty: a dam — slaughter of a sheep)",
      "Stitching on the Ihram garments or wearing stitched clothing (men)",
      "Women wearing niqab (face veil) or gloves during Ihram",
      "Applying fragrance after entering the state of Ihram",
    ],
    wisdom:
      "The white Ihram garments are a symbol of spiritual purity and the equality of all believers before Allah. Wearing the same simple garments as every other pilgrim — from the humblest farmer to the wealthiest king — strips away the ego and the illusion of worldly rank. The Talbiyah ('Here I am, O Allah!') is the believer's response to Ibrahim's ancient call to pilgrimage, which, by Allah's command, echoes through every generation of Muslims.",
    duas: [
      "Labbayk Allahumma labbayk, labbayk la sharika laka labbayk, innal-hamda wan-ni'mata laka wal-mulk, la sharika lak",
    ],
  },
  {
    id: 'umrah-tawaf',
    stepNumber: 2,
    title: "Tawaf: Circling the Ka'bah Seven Times",
    arabicTitle: "الطواف",
    isObligatory: true,
    obligatoryNote: 'Rukn (pillar) — Umrah is invalid without it',
    description:
      "Upon arriving at al-Masjid al-Haram, the pilgrim enters with the right foot first, reciting the prescribed supplication, and proceeds to perform Tawaf. One must be in a state of ritual purity (wudu). Standing at the Black Stone (al-Hajar al-Aswad), one faces it, touches or kisses it if possible, otherwise points towards it and says 'Bismillah, Allahu Akbar'. Then one circles the Ka'bah seven times in an anti-clockwise direction, keeping the Ka'bah to the left. Men perform raml (brisk, short steps) during the first three circuits, and idhtiba' (draping the rida' under the right arm, baring the right shoulder) throughout the Tawaf. The seventh circuit ends at the Black Stone. After completing the seven circuits, two units of prayer are performed behind Maqam Ibrahim ('the Station of Ibrahim'). Zamzam water is then drunk.",
    requirements: [
      "Be in a state of wudu (ritual purity) throughout Tawaf",
      "Begin at the Black Stone (al-Hajar al-Aswad) and end there",
      "Circle the Ka'bah seven times, keeping it to the left (anti-clockwise)",
      "Men: perform idhtiba' (bare the right shoulder) throughout Tawaf",
      "Men: perform raml (brisk walking) in the first three circuits",
      "Make supplication and dhikr throughout, particularly at the Yemeni Corner (al-Rukn al-Yamani)",
      "After seven circuits: pray two units behind Maqam Ibrahim",
      "Drink Zamzam water",
    ],
    commonMistakes: [
      "Performing Tawaf without wudu",
      "Starting or ending at a point other than the Black Stone",
      "Moving clockwise instead of anti-clockwise",
      "Kissing or touching the Yemeni Corner (one only touches it with the right hand; one does not kiss it)",
      "Counting seven circuits incorrectly — each pass from the Black Stone back to the Black Stone is one circuit",
    ],
    wisdom:
      "Tawaf is perhaps the most profound of all Islamic acts of worship: every Muslim on earth faces the Ka'bah to pray, and in Tawaf the believer orbits it. The Ka'bah is the qibla, the focal point of Muslim unity, the house that Ibrahim built by Allah's command. Circling it is not worshipping the building; it is affirming that one's entire life — every orbit of one's existence — should revolve around Allah alone. Tawaf performed with full presence and remembrance is one of the greatest opportunities for supplication.",
    duas: [
      "Between the Yemeni Corner and the Black Stone: 'Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina adhab an-nar'",
      "At the Black Stone: 'Bismillah, Allahu Akbar'",
    ],
  },
  {
    id: 'umrah-sai',
    stepNumber: 3,
    title: "Sa'i: Walking between Safa and Marwa",
    arabicTitle: "السعي بين الصفا والمروة",
    isObligatory: true,
    obligatoryNote: 'Rukn (pillar) — Umrah is invalid without it',
    description:
      "After Tawaf, the pilgrim proceeds to perform Sa'i between the hills of Safa and Marwa. This commemorates the trial of Hajar (Hagar), wife of Ibrahim, who ran seven times between these two points desperately seeking water for her infant son Ismail. The pilgrim ascends Safa first, faces the Ka'bah, and recites the verse: 'Indeed Safa and Marwa are among the symbols of Allah.' Supplication is made while facing the Ka'bah, then the pilgrim walks to Marwa. Between the two green fluorescent lights (where the valley once lay), men jog while women walk at a normal pace. Arriving at Marwa, one ascends it, faces the Ka'bah, and makes supplication. This constitutes one trip. Seven trips are completed, ending at Marwa. Wudu is recommended for Sa'i but not obligatory.",
    requirements: [
      "Begin at Safa; end at Marwa (Safa to Marwa = trip 1; Marwa to Safa = trip 2, and so on, totalling 7)",
      "Ascend Safa and face the Ka'bah before commencing",
      "Men: jog between the two green lights in the middle of the walkway",
      "Arrive at Marwa to complete each outward trip and at Safa to complete each return trip",
      "Make abundant supplication, especially at the tops of Safa and Marwa",
    ],
    commonMistakes: [
      "Beginning at Marwa (must begin at Safa)",
      "Counting a Safa-to-Marwa-and-back trip as one circuit (it is two)",
      "Ending at Safa instead of Marwa (must end at Marwa after seven trips)",
      "Women jogging between the green lights (this is for men only)",
    ],
    wisdom:
      "Hajar's Sa'i is one of the most moving stories in all of prophethood: a woman alone in a barren valley with an infant, no food, no water, no one to call upon except Allah. She ran seven times in utter desperation, yet never in despair. Her effort was an expression of complete trust that Allah would not abandon those who submit themselves to Him. The Zamzam spring, which gushed from beneath Ismail's heels, is Allah's response — still flowing today, 4,000 years later. Every Muslim who performs Sa'i relives that trust and that answer.",
    duas: [
      "At Safa (and Marwa): 'La ilaha illallahu wahdahu la sharika lah, lahul-mulku wa lahul-hamd, wa huwa ala kulli shay'in qadir. La ilaha illallah wahdah, anjaza wa'dah, wa nasara abdah, wa hazama al-ahzaba wahdah.' (Repeat three times with supplications in between)",
    ],
  },
  {
    id: 'umrah-hair',
    stepNumber: 4,
    title: 'Shaving or Shortening the Hair',
    arabicTitle: 'الحلق أو التقصير',
    isObligatory: true,
    obligatoryNote: 'Wajib (obligatory) — a penalty is incurred if omitted',
    description:
      "The final act of Umrah is shaving the head (halq) or shortening the hair (taqsir). Men are encouraged to shave the entire head, for which the Prophet ﷺ prayed three times: 'O Allah, have mercy upon those who shave their heads.' He prayed once for those who merely shorten their hair. Women cut approximately a fingertip's length (about 1 cm) from the ends of their hair; they do not shave their heads. Once the hair has been cut, the state of Ihram is lifted and all its restrictions are removed. The pilgrim may now wear their normal clothing, apply fragrance, and resume all acts that were previously prohibited.",
    requirements: [
      "Men: shave the entire head (preferred) or shorten the hair from all parts of the head",
      "Women: cut approximately 1 cm (one fingertip's length) from the ends of the hair",
      "This act must be performed after Sa'i, not before",
    ],
    commonMistakes: [
      "Women shaving their heads (this is not permissible for women)",
      "Only cutting hair from part of the head rather than evenly from all parts (for taqsir)",
      "Removing the Ihram garments before cutting the hair",
    ],
    wisdom:
      "The act of shaving or cutting the hair marks the formal completion of Umrah and the exit from the sacred state. It is an act of humility — the pilgrim presents themselves before Allah with head shaved or hair cut, shedding not just hair but the ego that accompanies worldly adornment. The triple prayer of the Prophet ﷺ for those who shave their heads makes it clear that the complete act carries greater spiritual weight. Umrah is now complete; the pilgrim emerges renewed.",
    duas: [
      "Dua of gratitude and acceptance: 'Allahumma taqabbal minni' (O Allah, accept from me)",
    ],
  },
];

export const UMRAH_PILLARS = UMRAH_STEPS.filter(
  s => s.obligatoryNote?.includes('pillar'),
);
export const UMRAH_OBLIGATORY = UMRAH_STEPS.filter(s => s.isObligatory);

export const UMRAH_DIFFERENCES_FROM_HAJJ = [
  {
    aspect: 'Duration',
    umrah: 'Can be completed in a few hours to one day',
    hajj: 'Five days minimum (8th – 12th Dhul Hijjah)',
  },
  {
    aspect: 'Time',
    umrah: 'Can be performed at any time of the year',
    hajj: 'Only during specific days of Dhul Hijjah (the 12th Islamic month)',
  },
  {
    aspect: 'Standing at Arafah',
    umrah: 'Not performed in Umrah',
    hajj: 'The most essential pillar of Hajj — "Hajj IS Arafah"',
  },
  {
    aspect: 'Stoning of Jamarat',
    umrah: 'Not performed in Umrah',
    hajj: 'Performed on the 10th, 11th, 12th (and 13th) of Dhul Hijjah',
  },
  {
    aspect: 'Sacrifice',
    umrah: 'Not required (though the Prophet ﷺ slaughtered during Umrah)',
    hajj: "Required for Tamattu' and Qiran Hajj",
  },
  {
    aspect: 'Status in Islam',
    umrah: "Lesser pilgrimage — some scholars consider it Sunnah Mu'akkadah (strongly recommended); others consider it obligatory once in a lifetime",
    hajj: 'One of the Five Pillars of Islam — obligatory once in a lifetime for those able',
  },
];
