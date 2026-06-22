export interface HadithEntry {
  col: string;
  num: number;
  narrator: string;
  topic: string;
  keywords: string[];
  excerpt: string;
}

export const HADITH_INDEX: HadithEntry[] = [
  { col: 'bukhari', num: 1, narrator: 'Umar ibn al-Khattab',
    topic: 'Actions are judged by intentions',
    keywords: ['intention', 'niyyah', 'actions', 'deeds', 'reward', 'hijrah', 'emigrate'],
    excerpt: 'Actions are judged by intentions, and every person will get the reward according to what he has intended.' },

  { col: 'bukhari', num: 8, narrator: 'Abdullah ibn Umar',
    topic: 'The Five Pillars of Islam',
    keywords: ['five pillars', 'islam', 'shahadah', 'prayer', 'salah', 'zakat', 'fasting', 'sawm', 'hajj', 'ramadan', 'testimony'],
    excerpt: 'Islam is built on five: the testimony that there is no god but Allah and Muhammad is His messenger, establishing prayer, paying zakat, making Hajj, and fasting Ramadan.' },

  { col: 'bukhari', num: 10, narrator: 'Abdullah ibn Amr',
    topic: 'A Muslim is the one whose tongue and hand are safe',
    keywords: ['muslim', 'tongue', 'hand', 'harm', 'safety', 'character', 'emigrant'],
    excerpt: 'A Muslim is the one from whose tongue and hand the Muslims are safe; and an emigrant is the one who abandons what Allah has forbidden.' },

  { col: 'bukhari', num: 13, narrator: 'Anas ibn Malik',
    topic: 'Loving for your brother what you love for yourself',
    keywords: ['brotherhood', 'love', 'brother', 'faith', 'iman', 'believe', 'truly believes'],
    excerpt: 'None of you truly believes until he loves for his brother what he loves for himself.' },

  { col: 'bukhari', num: 38, narrator: 'Abu Hurayra',
    topic: 'Fasting Ramadan out of faith and hope for reward',
    keywords: ['ramadan', 'fasting', 'sawm', 'faith', 'iman', 'forgiven', 'sins', 'past'],
    excerpt: 'Whoever fasts Ramadan with sincere faith and hope for the reward will have his past sins forgiven.' },

  { col: 'bukhari', num: 52, narrator: 'Numan ibn Bashir',
    topic: 'The lawful is clear and the unlawful is clear',
    keywords: ['halal', 'haram', 'lawful', 'unlawful', 'forbidden', 'permitted', 'doubt', 'doubtful'],
    excerpt: 'The lawful is clear and the unlawful is clear. Between them are doubtful matters that many people do not know about.' },

  { col: 'bukhari', num: 528, narrator: 'Abdullah ibn Masud',
    topic: 'Best deed: prayer on time',
    keywords: ['prayer', 'salah', 'time', 'best', 'deeds', 'worship', 'deed', 'beloved'],
    excerpt: 'I asked the Prophet: Which deed is most beloved to Allah? He replied: Prayer on time. Then kind treatment of parents. Then jihad in the way of Allah.' },

  { col: 'bukhari', num: 1394, narrator: 'Ibn Abbas',
    topic: 'Obligation of zakat on the rich',
    keywords: ['zakat', 'charity', 'wealth', 'poor', 'rich', 'obligation', 'pillar', 'alms'],
    excerpt: 'The Prophet sent Muadh to Yemen and said: Inform them that Allah has made zakat obligatory, to be taken from the rich and given to the poor.' },

  { col: 'bukhari', num: 1521, narrator: 'Abu Hurayra',
    topic: 'Hajj mabrur — reward is paradise',
    keywords: ['hajj', 'pilgrimage', 'mecca', 'mabrur', 'paradise', 'jannah', 'umrah'],
    excerpt: 'The reward for an accepted Hajj (Hajj Mabrur) is nothing but paradise.' },

  { col: 'bukhari', num: 1894, narrator: 'Abu Hurayra',
    topic: 'Fasting is a shield',
    keywords: ['fasting', 'sawm', 'shield', 'ramadan', 'hunger', 'restrain', 'obscene'],
    excerpt: 'Fasting is a shield. So when one of you is fasting, he should not behave foolishly or impudently, and if someone abuses him, he should say: I am fasting.' },

  { col: 'bukhari', num: 5027, narrator: 'Uthman ibn Affan',
    topic: 'Best among you who learns and teaches the Quran',
    keywords: ['quran', 'learn', 'teach', 'best', 'recite', 'tilawah', 'memorise', 'memorize'],
    excerpt: 'The best of you is the one who learns the Quran and teaches it.' },

  { col: 'bukhari', num: 5186, narrator: 'Abu Hurayra',
    topic: 'The best of you is best to his family',
    keywords: ['family', 'wife', 'women', 'best', 'husband', 'marriage', 'nikah'],
    excerpt: 'The best of you is the one who is best to his family, and I am the best of you to my family.' },

  { col: 'bukhari', num: 5376, narrator: 'Umar ibn Abi Salamah',
    topic: 'Say Bismillah and eat with the right hand',
    keywords: ['food', 'eating', 'bismillah', 'right hand', 'manners', 'adab', 'eat'],
    excerpt: 'Say the name of Allah (Bismillah), eat with your right hand, and eat from what is in front of you.' },

  { col: 'bukhari', num: 6013, narrator: 'Abdullah ibn Amr',
    topic: 'Allah has mercy on those who show mercy',
    keywords: ['mercy', 'rahma', 'compassion', 'forgiveness', 'kind', 'merciful', 'earth', 'heaven'],
    excerpt: 'The merciful will be shown mercy by the Most Merciful. Show mercy to those on earth, and the One in the Heavens will show mercy to you.' },

  { col: 'bukhari', num: 6015, narrator: 'Aisha',
    topic: 'Jibreel kept advising about the neighbour',
    keywords: ['neighbour', 'neighbor', 'rights', 'good treatment', 'jibreel', 'angel'],
    excerpt: 'Jibreel kept advising me to be good to my neighbour until I thought he would make him an heir.' },

  { col: 'bukhari', num: 6018, narrator: 'Abu Hurayra',
    topic: 'Speak good or remain silent',
    keywords: ['speech', 'speak', 'silence', 'tongue', 'good', 'last day', 'believe'],
    excerpt: 'Whoever believes in Allah and the Last Day should say good things or remain silent; and whoever believes in Allah and the Last Day should be generous to his neighbour.' },

  { col: 'bukhari', num: 6094, narrator: 'Abdullah ibn Masud',
    topic: 'Truthfulness leads to paradise',
    keywords: ['truthfulness', 'sidq', 'honesty', 'paradise', 'jannah', 'lie', 'falsehood', 'trust'],
    excerpt: 'Truthfulness leads to righteousness, and righteousness leads to paradise. Falsehood leads to wickedness, and wickedness leads to the fire.' },

  { col: 'bukhari', num: 6114, narrator: 'Abu Hurayra',
    topic: 'The strong man controls himself in anger',
    keywords: ['anger', 'strength', 'control', 'wrestling', 'nafs', 'self-control', 'strong'],
    excerpt: 'The strong man is not the one who can wrestle, but the strong man is the one who controls himself at the time of anger.' },

  { col: 'bukhari', num: 6120, narrator: 'Ibn Umar',
    topic: 'Modesty is from faith',
    keywords: ['modesty', 'haya', 'shyness', 'faith', 'iman', 'character', 'hayaa'],
    excerpt: 'Modesty is a branch of faith.' },

  { col: 'bukhari', num: 6416, narrator: 'Ibn Abbas',
    topic: 'Take advantage of five before five',
    keywords: ['time', 'youth', 'health', 'life', 'death', 'old age', 'free time', 'wealth', 'busy'],
    excerpt: 'Take advantage of five before five: your youth before old age, your health before sickness, your wealth before poverty, your free time before being occupied, and your life before death.' },

  { col: 'muslim', num: 223, narrator: 'Abu Malik al-Ashari',
    topic: 'Cleanliness is half of faith',
    keywords: ['cleanliness', 'taharah', 'purity', 'faith', 'iman', 'wudu', 'ablution', 'hygiene'],
    excerpt: 'Cleanliness is half of faith.' },

  { col: 'muslim', num: 769, narrator: 'Abu Hurayra',
    topic: 'Best prayer after obligatory is night prayer',
    keywords: ['night prayer', 'tahajjud', 'qiyam', 'prayer', 'nafl', 'voluntary', 'night'],
    excerpt: 'The best prayer after the obligatory prayers is the night prayer.' },

  { col: 'muslim', num: 2548, narrator: 'Abu Hurayra',
    topic: 'Priority of mother in good treatment',
    keywords: ['mother', 'father', 'parents', 'respect', 'kindness', 'family', 'company'],
    excerpt: 'A man asked the Prophet: Who deserves my best companionship? He said: Your mother. Then who? Your mother. Then who? Your mother. Then who? Your father.' },

  { col: 'muslim', num: 2564, narrator: 'Abu Hurayra',
    topic: 'Allah looks at hearts and deeds, not forms and wealth',
    keywords: ['heart', 'deeds', 'forms', 'wealth', 'sincerity', 'ikhlas', 'looks', 'allah'],
    excerpt: 'Allah does not look at your forms and wealth, but He looks at your hearts and deeds.' },

  { col: 'muslim', num: 2956, narrator: 'Abu Hurayra',
    topic: 'This world is a prison for the believer',
    keywords: ['death', 'world', 'dunya', 'afterlife', 'akhirah', 'believer', 'prison', 'paradise'],
    excerpt: 'This world is a prison for the believer and a paradise for the disbeliever.' },

  { col: 'muslim', num: 2999, narrator: 'Suhayb',
    topic: 'The believer\'s affair is always good',
    keywords: ['gratitude', 'shukr', 'patience', 'sabr', 'believer', 'affairs', 'good', 'wonderful'],
    excerpt: 'How wonderful is the case of a believer; his affairs are all good. If something good happens, he is thankful; if something harmful happens, he is patient — and both are good for him.' },

  { col: 'tirmidhi', num: 1956, narrator: 'Abu Dharr',
    topic: 'Smiling at your brother is charity',
    keywords: ['smile', 'charity', 'sadaqah', 'kindness', 'brother', 'good deed'],
    excerpt: 'Your smiling in the face of your brother is charity, and your enjoining good and forbidding evil is charity.' },

  { col: 'tirmidhi', num: 2003, narrator: 'Abu Darda',
    topic: 'Nothing heavier than good character on the scales',
    keywords: ['character', 'akhlaq', 'morals', 'conduct', 'scales', 'judgment', 'day of judgment'],
    excerpt: 'Nothing is heavier in the scales of the believer on the Day of Judgment than good character.' },

  { col: 'tirmidhi', num: 2516, narrator: 'Abu Hurayra',
    topic: 'Dua is the essence of worship',
    keywords: ['dua', 'supplication', 'prayer', 'worship', 'ibadah', 'ask', 'invoke'],
    excerpt: 'Supplication (dua) is the essence of worship.' },

  { col: 'tirmidhi', num: 2518, narrator: 'Hasan ibn Ali',
    topic: 'Leave what is doubtful',
    keywords: ['doubt', 'doubtful', 'certain', 'halal', 'haram', 'safe', 'avoid'],
    excerpt: 'Leave what makes you doubt for what does not make you doubt.' },

  { col: 'tirmidhi', num: 3540, narrator: 'Anas ibn Malik',
    topic: 'Allah is greatly pleased by the repentance of His servant',
    keywords: ['repentance', 'tawbah', 'forgiveness', 'mercy', 'sin', 'return', 'pleased'],
    excerpt: 'Allah is more pleased with the repentance of His servant than a man who finds his lost camel after losing hope.' },

  { col: 'muslim', num: 91, narrator: 'Abdullah ibn Masud',
    topic: 'Allah is beautiful and loves beauty',
    keywords: ['beauty', 'beautiful', 'allah', 'arrogance', 'pride', 'kibr', 'heart'],
    excerpt: 'Allah is Beautiful and loves beauty. Arrogance is rejecting the truth and looking down on people.' },

  { col: 'bukhari', num: 5641, narrator: 'Abu Said al-Khudri',
    topic: 'Patience — no gift more expansive than patience',
    keywords: ['patience', 'sabr', 'endurance', 'reward', 'test', 'trial', 'gift'],
    excerpt: 'Whoever shows patience, Allah will give him patience, and no one is given a better or more expansive gift than patience.' },

  { col: 'ibnjamah', num: 224, narrator: 'Anas ibn Malik',
    topic: 'Seeking knowledge is an obligation upon every Muslim',
    keywords: ['knowledge', 'ilm', 'learning', 'education', 'obligation', 'fard', 'seek', 'muslim'],
    excerpt: 'Seeking knowledge is an obligation upon every Muslim.' },

  { col: 'abudawud', num: 4833, narrator: 'Abu Hurayra',
    topic: 'A person is upon the religion of his close friend',
    keywords: ['friend', 'companion', 'religion', 'influence', 'character', 'choose'],
    excerpt: 'A man is upon the religion of his close friend, so let each of you look at whom he befriends.' },
];

export const MULTILINGUAL_KEYWORDS: Record<string, Record<string, string>> = {
  ar: {
    'الصلاة': 'prayer', 'الزكاة': 'zakat', 'الصيام': 'fasting', 'الحج': 'hajj',
    'الإيمان': 'faith', 'النية': 'intention', 'الصبر': 'patience', 'الشكر': 'gratitude',
    'الأم': 'mother', 'الأب': 'father', 'الأسرة': 'family', 'الجار': 'neighbour',
    'العلم': 'knowledge', 'الصدق': 'truthfulness', 'الغضب': 'anger', 'الحياء': 'modesty',
    'التوبة': 'repentance', 'المغفرة': 'forgiveness', 'الدعاء': 'dua', 'القرآن': 'quran',
    'الجنة': 'paradise', 'الرحمة': 'mercy', 'الطهارة': 'cleanliness',
  },
  ms: {
    'solat': 'prayer', 'sembahyang': 'prayer', 'zakat': 'zakat', 'puasa': 'fasting',
    'berpuasa': 'fasting', 'haji': 'hajj', 'umrah': 'hajj', 'ilmu': 'knowledge',
    'belajar': 'knowledge', 'sabar': 'patience', 'syukur': 'gratitude', 'niat': 'intention',
    'marah': 'anger', 'malu': 'modesty', 'keluarga': 'family', 'ibu': 'mother',
    'bapa': 'father', 'makanan': 'food', 'kebersihan': 'cleanliness', 'kematian': 'death',
    'syurga': 'paradise', 'neraka': 'hellfire', 'taubat': 'repentance', 'maaf': 'forgiveness',
    'jiran': 'neighbour', 'sedekah': 'charity', 'iman': 'faith', 'doa': 'dua',
  },
  tur: {
    'namaz': 'prayer', 'dua': 'dua', 'zekât': 'zakat', 'zekat': 'zakat',
    'oruç': 'fasting', 'ramazan': 'ramadan', 'hac': 'hajj', 'umre': 'hajj',
    'ilim': 'knowledge', 'öğrenmek': 'knowledge', 'sabır': 'patience', 'şükür': 'gratitude',
    'niyet': 'intention', 'öfke': 'anger', 'tevazu': 'modesty', 'aile': 'family',
    'anne': 'mother', 'baba': 'father', 'yemek': 'food', 'temizlik': 'cleanliness',
    'ölüm': 'death', 'cennet': 'paradise', 'cehennem': 'hellfire', 'tövbe': 'repentance',
    'af': 'forgiveness', 'komşu': 'neighbour', 'sadaka': 'charity', 'iman': 'faith',
    'kalp': 'heart', 'kur\'an': 'quran', 'kuran': 'quran',
  },
  urd: {
    'نماز': 'prayer', 'زکوۃ': 'zakat', 'روزہ': 'fasting', 'حج': 'hajj',
    'علم': 'knowledge', 'صبر': 'patience', 'شکر': 'gratitude', 'نیت': 'intention',
    'غصہ': 'anger', 'خاندان': 'family', 'ماں': 'mother', 'باپ': 'father',
    'صفائی': 'cleanliness', 'موت': 'death', 'جنت': 'paradise', 'جہنم': 'hellfire',
    'توبہ': 'repentance', 'معافی': 'forgiveness', 'پڑوسی': 'neighbour', 'صدقہ': 'charity',
    'ایمان': 'faith', 'دعا': 'dua', 'قرآن': 'quran',
  },
  ben: {
    'নামাজ': 'prayer', 'যাকাত': 'zakat', 'রোজা': 'fasting', 'হজ': 'hajj',
    'জ্ঞান': 'knowledge', 'ধৈর্য': 'patience', 'কৃতজ্ঞতা': 'gratitude', 'নিয়ত': 'intention',
    'পরিবার': 'family', 'মা': 'mother', 'বাবা': 'father', 'পরিচ্ছন্নতা': 'cleanliness',
    'মৃত্যু': 'death', 'জান্নাত': 'paradise', 'তওবা': 'repentance', 'ক্ষমা': 'forgiveness',
    'ঈমান': 'faith', 'দোয়া': 'dua', 'কুরআন': 'quran',
  },
  fas: {
    'نماز': 'prayer', 'زکات': 'zakat', 'روزه': 'fasting', 'حج': 'hajj',
    'علم': 'knowledge', 'صبر': 'patience', 'شکر': 'gratitude', 'نیت': 'intention',
    'خانواده': 'family', 'مادر': 'mother', 'پدر': 'father', 'پاکیزگی': 'cleanliness',
    'مرگ': 'death', 'بهشت': 'paradise', 'جهنم': 'hellfire', 'توبه': 'repentance',
    'بخشش': 'forgiveness', 'همسایه': 'neighbour', 'صدقه': 'charity', 'ایمان': 'faith',
    'دعا': 'dua', 'قرآن': 'quran',
  },
  zh: {
    '礼拜': 'prayer', '祈祷': 'prayer', '斋戒': 'fasting', '斋月': 'ramadan',
    '朝觐': 'hajj', '知识': 'knowledge', '耐心': 'patience', '感恩': 'gratitude',
    '意图': 'intention', '愤怒': 'anger', '家庭': 'family', '母亲': 'mother',
    '父亲': 'father', '食物': 'food', '清洁': 'cleanliness', '死亡': 'death',
    '天堂': 'paradise', '地狱': 'hellfire', '悔过': 'repentance', '宽恕': 'forgiveness',
    '邻居': 'neighbour', '慈善': 'charity', '信仰': 'faith', '祈求': 'dua',
    '古兰经': 'quran', '天课': 'zakat',
  },
  yue: {
    '禮拜': 'prayer', '祈禱': 'prayer', '齋戒': 'fasting', '齋月': 'ramadan',
    '朝覲': 'hajj', '知識': 'knowledge', '耐性': 'patience', '感恩': 'gratitude',
    '意圖': 'intention', '憤怒': 'anger', '家庭': 'family', '母親': 'mother',
    '父親': 'father', '食物': 'food', '清潔': 'cleanliness', '死亡': 'death',
    '天堂': 'paradise', '地獄': 'hellfire', '悔改': 'repentance', '寬恕': 'forgiveness',
    '鄰居': 'neighbour', '慈善': 'charity', '信仰': 'faith', '天課': 'zakat',
  },
  ja: {
    '礼拝': 'prayer', 'ナマズ': 'prayer', '祈り': 'prayer', 'サラー': 'prayer',
    'ザカート': 'zakat', '喜捨': 'zakat', '断食': 'fasting', 'サウム': 'fasting',
    'ラマダン': 'ramadan', '巡礼': 'hajj', 'ハッジ': 'hajj', '信仰': 'faith',
    'イスラム': 'islam', '知識': 'knowledge', '忍耐': 'patience', '感謝': 'gratitude',
    '意図': 'intention', '怒り': 'anger', '謙虚': 'modesty', '家族': 'family',
    '母': 'mother', '父': 'father', '食べ物': 'food', '清潔': 'cleanliness',
    '死': 'death', '天国': 'paradise', '地獄': 'hellfire', '悔い改め': 'repentance',
    '許し': 'forgiveness', '隣人': 'neighbour', '施し': 'charity', '祈願': 'dua',
    'クルアーン': 'quran', 'コーラン': 'quran', '預言者': 'prophet',
  },
  ru: {
    'молитва': 'prayer', 'намаз': 'prayer', 'пост': 'fasting', 'рамадан': 'ramadan',
    'хадж': 'hajj', 'умра': 'hajj', 'знание': 'knowledge', 'терпение': 'patience',
    'благодарность': 'gratitude', 'намерение': 'intention', 'гнев': 'anger',
    'семья': 'family', 'мать': 'mother', 'отец': 'father', 'еда': 'food',
    'чистота': 'cleanliness', 'смерть': 'death', 'рай': 'paradise', 'ад': 'hellfire',
    'покаяние': 'repentance', 'прощение': 'forgiveness', 'сосед': 'neighbour',
    'милостыня': 'charity', 'вера': 'faith', 'закят': 'zakat', 'коран': 'quran',
  },
  es: {
    'oración': 'prayer', 'rezar': 'prayer', 'ayuno': 'fasting', 'ramadán': 'ramadan',
    'peregrinación': 'hajj', 'conocimiento': 'knowledge', 'paciencia': 'patience',
    'gratitud': 'gratitude', 'intención': 'intention', 'ira': 'anger',
    'familia': 'family', 'madre': 'mother', 'padre': 'father', 'comida': 'food',
    'limpieza': 'cleanliness', 'muerte': 'death', 'paraíso': 'paradise',
    'infierno': 'hellfire', 'arrepentimiento': 'repentance', 'perdón': 'forgiveness',
    'vecino': 'neighbour', 'caridad': 'charity', 'fe': 'faith', 'zakat': 'zakat',
    'corán': 'quran',
  },
  ko: {
    '기도': 'prayer', '예배': 'prayer', '금식': 'fasting', '라마단': 'ramadan',
    '성지순례': 'hajj', '지식': 'knowledge', '인내': 'patience', '감사': 'gratitude',
    '의도': 'intention', '분노': 'anger', '가족': 'family', '어머니': 'mother',
    '아버지': 'father', '음식': 'food', '청결': 'cleanliness', '죽음': 'death',
    '천국': 'paradise', '지옥': 'hellfire', '회개': 'repentance', '용서': 'forgiveness',
    '이웃': 'neighbour', '자선': 'charity', '믿음': 'faith', '자카트': 'zakat',
    '꾸란': 'quran',
  },
};
