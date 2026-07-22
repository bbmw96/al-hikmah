import type { SurahI18n } from './quran-content';

/* ──────────────────────────────────────────────────────────────────────────
 * Gap fill for QURAN_BATCH_1 (surahs 103, 108, 110).
 *
 * Site-wide audit on 2026-07-22 found two defect classes affecting ONLY the
 * three surahs delivered in batch 1. Surahs 1, 2, 112, 113 and 114 are clean.
 *
 *   1. ms, tur, ben, fas were empty across every field.
 *   2. `virtues` was empty in all 14 languages, because the producing session's
 *      export schema had no `virtues` field at all.
 *
 * This module supplies exactly the missing values and nothing else. It is
 * applied with `applyFill`, which only ever writes into an EMPTY string, so
 * existing content cannot be overwritten.
 *
 * Sanitisation: UK English in `en`; zero em/en dashes in any language;
 * Malay and Turkish use standard Latin punctuation (Turkish keeps ç ğ ı İ ö ş ü);
 * Bengali uses the danda । as full stop; Persian uses ، for comma and . for
 * full stop with ZWNJ preserved in compounds; ﷺ is preserved byte for byte.
 * ────────────────────────────────────────────────────────────────────────── */

type LangMap = SurahI18n['name'];
type PartialLangMap = Partial<LangMap>;

export type SurahFill = {
  name?: PartialLangMap;
  overview?: PartialLangMap;
  asbab?: PartialLangMap;
  virtues?: PartialLangMap;
  themes?: PartialLangMap[];
  verses?: { translation?: PartialLangMap; context?: PartialLangMap }[];
};

export const QURAN_BATCH_1_FILL: Record<number, SurahFill> = {
  103: {
    name: {
      ms: `Masa`,
      tur: `Zaman`,
      ben: `সময়`,
      fas: `زمان`,
      urd: `زمانہ`,
      zh: `时光`,
      yue: `時光`,
      ja: `時`,
      ru: `Время`,
      es: `El Tiempo`,
      ko: `시간`,
      ta: `காலம்`,
      si: `කාලය`,
    },
    overview: {
      ms: `Salah satu surah terpendek, namun Imam al-Shafiʿi berkata bahawa sekiranya Allah tidak menurunkan apa-apa selain surah ini, ia sudah memadai sebagai petunjuk bagi manusia. Allah bersumpah demi masa itu sendiri, satu-satunya modal yang diberikan sama rata kepada setiap orang, dan menyatakan bahawa seluruh umat manusia berada dalam kerugian kecuali mereka yang memenuhi empat syarat.`,
      tur: `En kısa surelerden biridir, ancak İmam Şafiî, Allah bu sureden başka bir şey indirmemiş olsaydı, insanlığa hidayet olarak yeterdi demiştir. Allah, her insana eşit olarak verilen tek sermaye olan zamanın kendisine yemin eder ve dört şartı yerine getirenler dışında bütün insanlığın hüsranda olduğunu bildirir.`,
      ben: `সবচেয়ে ছোট সূরাগুলোর একটি, তবুও ইমাম শাফিঈ বলেছেন, আল্লাহ যদি এই সূরা ছাড়া আর কিছুই নাযিল না করতেন, তবে তা মানবজাতির জন্য পথনির্দেশ হিসেবে যথেষ্ট হত। আল্লাহ শপথ করেন সময়েরই, যা প্রত্যেক মানুষকে সমানভাবে দেওয়া একমাত্র মূলধন, এবং ঘোষণা করেন যে চারটি শর্ত পূরণকারীরা ছাড়া সমগ্র মানবজাতি ক্ষতির মধ্যে রয়েছে।`,
      fas: `از کوتاه‌ترین سوره‌هاست، با این حال امام شافعی گفت که اگر خداوند جز این سوره چیزی نازل نمی‌کرد، همین برای هدایت بشر بس بود. خداوند به خودِ زمان سوگند می‌خورد، تنها سرمایه‌ای که به هر انسان به یکسان داده شده است، و اعلام می‌کند که همه آدمیان در زیان‌اند مگر کسانی که چهار شرط را برآورده کنند.`,
    },
    asbab: {
      ms: `Tiada sebab penurunan yang khusus dicatatkan. Para Sahabat mempunyai satu amalan: apabila dua orang daripada mereka bertemu lalu berpisah, tiada seorang pun akan beredar tanpa membacakan surah ini kepada yang lain, sebagai peringatan bersama.`,
      tur: `Özel bir nüzul sebebi kaydedilmemiştir. Sahabelerin bir âdeti vardı: iki kişi karşılaşıp ayrılacakları zaman, hiçbiri bu sureyi diğerine okumadan ayrılmazdı, karşılıklı bir hatırlatma olarak.`,
      ben: `নির্দিষ্ট কোনো নাযিলের প্রেক্ষাপট বর্ণিত হয়নি। সাহাবিগণের একটি রীতি ছিল: তাঁদের দুজন যখন সাক্ষাৎ করে বিদায় নিতেন, তখন কেউই একে অপরের কাছে এই সূরা পাঠ না করে চলে যেতেন না, পারস্পরিক স্মরণ হিসেবে।`,
      fas: `سبب نزول ویژه‌ای گزارش نشده است. صحابه رسمی داشتند: هرگاه دو تن از ایشان یکدیگر را می‌دیدند و جدا می‌شدند، هیچ‌یک بی‌آنکه این سوره را بر دیگری بخواند نمی‌رفت، به عنوان یادآوری دوجانبه.`,
    },
    virtues: {
      en: `Imam al-Shafiʿi said that if people pondered this surah alone, it would suffice them. The Companions would not part from one another without reciting it, making it a mutual pledge to truth and patience.`,
      ms: `Imam al-Shafiʿi berkata bahawa jika manusia merenungi surah ini sahaja, ia sudah memadai bagi mereka. Para Sahabat tidak akan berpisah antara satu sama lain tanpa membacanya, menjadikannya ikrar bersama kepada kebenaran dan kesabaran.`,
      tur: `İmam Şafiî, insanlar yalnızca bu sureyi düşünseler onlara yeterdi, demiştir. Sahabeler birbirlerinden ayrılırken onu okumadan ayrılmazlar, böylece onu hakka ve sabra dair karşılıklı bir ahit hâline getirirlerdi.`,
      urd: `امام شافعیؒ نے فرمایا کہ اگر لوگ صرف اسی سورت پر غور کریں تو یہ ان کے لیے کافی ہو۔ صحابہ کرام ایک دوسرے سے جدا ہوتے وقت اسے پڑھے بغیر جدا نہ ہوتے، یوں یہ حق اور صبر کا باہمی عہد بن گئی۔`,
      ben: `ইমাম শাফিঈ বলেছেন, মানুষ যদি কেবল এই সূরাটি নিয়ে চিন্তা করত, তবে তা তাদের জন্য যথেষ্ট হত। সাহাবিগণ একে অপরের কাছ থেকে বিদায় নেওয়ার সময় এটি পাঠ না করে বিদায় নিতেন না, ফলে এটি সত্য ও ধৈর্যের পারস্পরিক অঙ্গীকারে পরিণত হয়।`,
      fas: `امام شافعی گفت که اگر مردم تنها در همین سوره بیندیشند، آنان را بس است. صحابه هنگام جدایی از یکدیگر بدون خواندن آن جدا نمی‌شدند و چنین آن را پیمانی دوجانبه بر حق و صبر ساختند.`,
      zh: `伊玛目沙斐仪说，人们若只思索这一章，便已足够。圣门弟子彼此分别时，不诵读它便不分离，使之成为对真理与坚忍的相互盟约。`,
      yue: `伊瑪目沙斐儀話，人哋若果淨係思索呢一章，就已經足夠。聖門弟子彼此分別嘅時候，唔誦讀佢就唔分開，令佢成為對真理同堅忍嘅相互盟約。`,
      ja: `イマーム・シャーフィイーは、人々がこの章だけを深く考えたなら、それで十分であろうと述べた。教友たちは互いに別れる際、これを誦さずには別れず、真理と忍耐への相互の誓いとした。`,
      ru: `Имам аш-Шафии сказал, что если бы люди размышляли лишь над этой сурой, её было бы им достаточно. Сподвижники не расставались друг с другом, не прочитав её, превращая её во взаимный обет истине и терпению.`,
      es: `El Imam al-Shafiʿi dijo que si la gente meditara solo en esta sura, les bastaría. Los Compañeros no se separaban unos de otros sin recitarla, haciendo de ella un compromiso mutuo con la verdad y la paciencia.`,
      ko: `이맘 알샤피이는 사람들이 이 수라만을 숙고한다면 그것으로 충분하리라 말했다. 교우들은 서로 헤어질 때 이를 낭송하지 않고는 헤어지지 않았으니, 진리와 인내에 대한 상호 서약이 되었다.`,
      ta: `மக்கள் இந்த அத்தியாயத்தை மட்டும் சிந்தித்தால் அது அவர்களுக்குப் போதுமானது என்று இமாம் ஷாஃபிஈ கூறினார். தோழர்கள் ஒருவரையொருவர் விட்டுப் பிரியும்போது இதை ஓதாமல் பிரிய மாட்டார்கள், இதனால் இது சத்தியத்திற்கும் பொறுமைக்குமான பரஸ்பர உறுதிமொழியாயிற்று.`,
      si: `මිනිසුන් මෙම සූරාව ගැන පමණක් සිතුවේ නම් එය ඔවුනට ප්‍රමාණවත් වන්නේ යැයි ඉමාම් ෂාෆිඊ පැවසීය. සහාබාවරු එකිනෙකාගෙන් වෙන් වන විට එය පාරායනා නොකර වෙන් නොවූ අතර, එය සත්‍යයට හා ඉවසීමට වූ අන්‍යෝන්‍ය ප්‍රතිඥාවක් බවට පත් විය.`,
    },
    themes: [
      { ms: `Masa sebagai saksi terhadap kehidupan yang disia-siakan`, tur: `Boşa harcanan hayata karşı tanık olarak zaman`, ben: `অপচয়িত জীবনের বিরুদ্ধে সাক্ষী হিসেবে সময়`, fas: `زمان همچون گواهی بر زندگی تباه‌شده` },
      { ms: `Keadaan kerugian yang menyeluruh pada manusia`, tur: `Hüsranın evrensel insanlık hâli`, ben: `ক্ষতির সর্বজনীন মানবিক অবস্থা`, fas: `حال زیان‌باری همگانی آدمی` },
      { ms: `Empat syarat keselamatan: iman, amal soleh, berpesan dengan kebenaran, berpesan dengan kesabaran`, tur: `Kurtuluşun dört şartı: iman, salih amel, hakkı tavsiye, sabrı tavsiye`, ben: `মুক্তির চারটি শর্ত: ঈমান, সৎকর্ম, সত্যের উপদেশ, ধৈর্যের উপদেশ`, fas: `چهار شرط رستگاری: ایمان، عمل صالح، سفارش به حق، سفارش به صبر` },
      { ms: `Tanggungjawab kemasyarakatan, bukan ketakwaan peribadi semata-mata`, tur: `Yalnızca bireysel takva değil, toplumsal sorumluluk`, ben: `কেবল ব্যক্তিগত ধর্মনিষ্ঠা নয়, সামষ্টিক দায়িত্ব`, fas: `مسئولیت اجتماعی، نه تنها پارسایی فردی` },
    ],
    verses: [
      {
        translation: {
          ms: `Sesungguhnya manusia itu benar-benar dalam kerugian.`,
          tur: `Şüphesiz insan hüsrandadır.`,
          ben: `নিশ্চয়ই মানুষ ক্ষতির মধ্যে রয়েছে।`,
          fas: `به‌راستی که انسان در زیان است.`,
        },
        context: {
          ms: `Satu keputusan ke atas seluruh umat manusia sebelum pengecualian disebutkan. Masa ialah modal yang diberikan kepada setiap orang; kebanyakan manusia membelanjakannya dan tidak menerima apa-apa yang kekal sebagai balasan.`,
          tur: `İstisna belirtilmeden önce bütün insan soyu hakkında verilmiş bir hükümdür. Zaman, her insana verilen sermayedir; çoğu insan onu harcar ve karşılığında kalıcı hiçbir şey almaz.`,
          ben: `ব্যতিক্রম উল্লেখ করার পূর্বেই সমগ্র মানবজাতির উপর একটি রায়। সময় হলো সেই মূলধন যা প্রত্যেক মানুষকে দেওয়া হয়েছে; অধিকাংশ মানুষ তা ব্যয় করে এবং বিনিময়ে স্থায়ী কিছুই পায় না।`,
          fas: `حکمی است بر تمام نوع بشر، پیش از آنکه استثنا نام برده شود. زمان سرمایه‌ای است که به هر کس داده شده است؛ بیشتر مردم آن را خرج می‌کنند و در برابرش چیزی ماندگار نمی‌ستانند.`,
        },
      },
      {
        translation: {
          ms: `Kecuali orang-orang yang beriman dan mengerjakan amal soleh, dan berpesan-pesan dengan kebenaran, serta berpesan-pesan dengan kesabaran.`,
          tur: `Ancak iman edip salih ameller işleyenler, birbirlerine hakkı tavsiye edenler ve birbirlerine sabrı tavsiye edenler müstesna.`,
          ben: `তারা ছাড়া, যারা ঈমান আনে ও সৎকর্ম করে, এবং পরস্পরকে সত্যের উপদেশ দেয় ও পরস্পরকে ধৈর্যের উপদেশ দেয়।`,
          fas: `مگر کسانی که ایمان آوردند و کارهای شایسته کردند و یکدیگر را به حق سفارش کردند و یکدیگر را به صبر سفارش کردند.`,
        },
        context: {
          ms: `Keempat-empat syarat itu bersifat kumulatif, bukan pilihan. Iman tanpa amal tidak mencukupi; amal tanpa iman tersasar arah; ketakwaan peribadi tanpa pesanan bersama tidak lengkap; pesanan tanpa kesabaran runtuh apabila ditentang. Hanya keempat-empatnya sekali mengeluarkan jiwa daripada kerugian yang menyeluruh.`,
          tur: `Dört şart birikimlidir, seçenek değildir. Amelsiz iman yetersizdir; imansız amel yanlış yöne yönelmiştir; karşılıklı tavsiye olmadan bireysel takva eksiktir; sabır olmadan tavsiye muhalefet karşısında çöker. Ancak dördü birlikte bir ruhu evrensel hüsrandan çıkarır.`,
          ben: `চারটি শর্ত পুঞ্জীভূত, বিকল্প নয়। আমল ছাড়া ঈমান যথেষ্ট নয়; ঈমান ছাড়া আমল বিপথগামী; পারস্পরিক উপদেশ ছাড়া ব্যক্তিগত ধর্মনিষ্ঠা অসম্পূর্ণ; ধৈর্য ছাড়া উপদেশ বিরোধিতার মুখে ভেঙে পড়ে। কেবল চারটি একত্রে একটি আত্মাকে সর্বজনীন ক্ষতি থেকে বের করে আনে।`,
          fas: `این چهار شرط انباشتی‌اند، نه جایگزین یکدیگر. ایمان بدون عمل بسنده نیست؛ عمل بدون ایمان بی‌جهت است؛ پارسایی فردی بدون سفارش دوجانبه ناتمام است؛ سفارش بدون صبر در برابر مخالفت فرو می‌ریزد. تنها هر چهار با هم جان را از زیان همگانی بیرون می‌برند.`,
        },
      },
    ],
  },

  108: {
    name: {
      ms: `Nikmat Yang Melimpah`,
      tur: `Kevser, Bolluk`,
      ben: `প্রাচুর্য`,
      fas: `فراوانی`,
      urd: `خیرِ کثیر`,
      zh: `丰盛`,
      yue: `豐盛`,
      ja: `豊穣`,
      ru: `Изобилие`,
      es: `La Abundancia`,
      ko: `풍요`,
      ta: `நிறைவு`,
      si: `බහුලත්වය`,
    },
    overview: {
      ms: `Surah terpendek dalam al-Quran, sepuluh perkataan dalam bahasa Arab. Ia menjawab kaum musyrikin yang memperlekehkan Nabi ﷺ sebagai orang yang terputus selepas kematian putera-putera baginda, sebaliknya menjanjikan baginda kurnia yang melimpah ruah, dan mengembalikan ejekan itu kepada mereka.`,
      tur: `Kur'an'ın en kısa suresidir, Arapça on kelimedir. Oğullarının vefatından sonra Peygamber ﷺ ile soyu kesik diye alay eden müşriklere cevap verir, ona bunun yerine taşkın bir bolluk vaat eder ve alaylarını kendilerine geri çevirir.`,
      ben: `কুরআনের সবচেয়ে ছোট সূরা, আরবিতে দশটি শব্দ। এটি সেই মুশরিকদের জবাব দেয় যারা নবী ﷺ-এর পুত্রদের মৃত্যুর পর তাঁকে নির্বংশ বলে উপহাস করেছিল; বরং তাঁকে অপরিসীম প্রাচুর্যের প্রতিশ্রুতি দেয় এবং তাদের বিদ্রূপ তাদেরই দিকে ফিরিয়ে দেয়।`,
      fas: `کوتاه‌ترین سوره قرآن است، در عربی ده کلمه. پاسخ مشرکانی است که پس از درگذشت پسران پیامبر ﷺ او را بریده‌نسل خواندند و ریشخند کردند؛ در عوض به او فراوانی بی‌کران وعده می‌دهد و طعنه آنان را به خودشان بازمی‌گرداند.`,
    },
    asbab: {
      ms: `Diturunkan selepas kaum musyrikin Makkah, kebanyakan riwayat menyebut al-ʿAs bin Waʾil, memperlekehkan Nabi ﷺ sebagai al-abtar, iaitu orang yang terputus tanpa waris lelaki yang hidup, berikutan kematian putera-putera baginda yang masih kecil. Surah ini ialah jawapan Allah.`,
      tur: `Mekke müşrikleri, rivayetlerin çoğu el-Âs b. Vâil'i anar, Peygamber ﷺ ile küçük oğullarının vefatının ardından el-ebter, yani soyu kesik, ardında erkek varis kalmayan diye alay ettikten sonra indirilmiştir. Bu sure Allah'ın cevabıdır.`,
      ben: `মক্কার মুশরিকরা, অধিকাংশ বর্ণনায় আল-আস ইবনে ওয়াইলের নাম এসেছে, নবী ﷺ-এর শিশুপুত্রদের মৃত্যুর পর তাঁকে আল-আবতার অর্থাৎ জীবিত পুরুষ উত্তরাধিকারীহীন নির্বংশ বলে উপহাস করার পর এটি নাযিল হয়। এই সূরা আল্লাহর জবাব।`,
      fas: `پس از آنکه مشرکان مکه، که بیشتر روایات از عاص بن وائل نام می‌برند، پیامبر ﷺ را در پی درگذشت پسران خردسالش الابتر، یعنی بریده‌ای بی‌وارث پسر، خواندند و ریشخند کردند، نازل شد. این سوره پاسخ خداوند است.`,
    },
    virtues: {
      en: `The shortest surah in the Quran, revealed as consolation to the Prophet ﷺ when he was mocked as cut off. Reciting it is a reminder that abundance from Allah outlasts every insult, and that the one who scorns the believer is the one truly severed.`,
      ms: `Surah terpendek dalam al-Quran, diturunkan sebagai penghiburan kepada Nabi ﷺ ketika baginda diperlekehkan sebagai orang yang terputus. Membacanya mengingatkan bahawa kurnia melimpah daripada Allah mengatasi setiap penghinaan, dan bahawa orang yang memperkecilkan orang beriman itulah yang sebenarnya terputus.`,
      tur: `Kur'an'ın en kısa suresidir; Peygamber ﷺ soyu kesik diye alaya alındığında ona teselli olarak indirilmiştir. Onu okumak, Allah'tan gelen bolluğun her hakareti aştığını ve mümini küçümseyenin asıl kesik olduğunu hatırlatır.`,
      urd: `قرآن کی سب سے چھوٹی سورت، جو نبی ﷺ کو اُس وقت تسلی کے طور پر نازل ہوئی جب آپ کو بے اولاد اور منقطع کہہ کر طعنہ دیا گیا۔ اس کی تلاوت یاد دلاتی ہے کہ اللہ کی عطا ہر طعنے سے بڑھ کر ہے، اور جو مومن کو حقیر جانے وہی حقیقت میں کٹا ہوا ہے۔`,
      ben: `কুরআনের সবচেয়ে ছোট সূরা, যা নাযিল হয়েছিল নবী ﷺ-এর সান্ত্বনা হিসেবে যখন তাঁকে নির্বংশ বলে উপহাস করা হয়েছিল। এটি পাঠ করা স্মরণ করিয়ে দেয় যে আল্লাহর দেওয়া প্রাচুর্য প্রতিটি অপমানকে অতিক্রম করে, এবং যে মুমিনকে তুচ্ছ করে সে-ই প্রকৃতপক্ষে বিচ্ছিন্ন।`,
      fas: `کوتاه‌ترین سوره قرآن است که به عنوان تسلی بر پیامبر ﷺ نازل شد، آنگاه که او را بی‌نسل و بریده خواندند و ریشخند کردند. خواندن آن یادآور است که فراوانی از سوی خدا بر هر دشنامی برتری دارد و آن‌که مؤمن را خوار می‌شمارد، خود بریده است.`,
      zh: `古兰中最短的一章，当先知 ﷺ 被讥讽为断绝无后时，作为慰藉而降示。诵读它提醒人们，来自真主的丰盛胜过一切侮辱，而轻蔑信士者才是真正被断绝的人。`,
      yue: `古蘭中最短嘅一章，當先知 ﷺ 被譏諷為斷絕無後嘅時候，作為慰藉而降示。誦讀佢提醒人哋，嚟自阿拉嘅豐盛勝過一切侮辱，而輕蔑信士嘅人先至係真正被斷絕嘅人。`,
      ja: `クルアーンで最も短い章であり、預言者 ﷺ が跡継ぎなき者と嘲られたとき、慰めとして下された。これを誦することは、アッラーからの豊かさがあらゆる侮辱を凌ぐこと、そして信者を蔑む者こそが真に断たれた者であることを思い起こさせる。`,
      ru: `Самая короткая сура Корана, ниспосланная в утешение Пророку ﷺ, когда его высмеивали как лишённого потомства. Её чтение напоминает, что изобилие от Аллаха превосходит всякое оскорбление, и что подлинно отсечён тот, кто презирает верующего.`,
      es: `La sura más corta del Corán, revelada como consuelo al Profeta ﷺ cuando se burlaban de él llamándolo privado de descendencia. Recitarla recuerda que la abundancia de Alá supera todo insulto, y que quien desprecia al creyente es el verdaderamente cortado.`,
      ko: `꾸란에서 가장 짧은 수라로, 예언자 ﷺ께서 대가 끊긴 자라 조롱당하셨을 때 위로로 계시되었다. 이를 낭송함은 알라로부터의 풍요가 모든 모욕을 능가하며, 신자를 멸시하는 자가 참으로 끊긴 자임을 상기시킨다.`,
      ta: `குர்ஆனின் மிகக் குறுகிய அத்தியாயம், நபி ﷺ அவர்கள் வழித்தோன்றல் அற்றவர் என ஏளனம் செய்யப்பட்டபோது ஆறுதலாக இறக்கப்பட்டது. இதை ஓதுவது அல்லாஹ்விடமிருந்து வரும் நிறைவு ஒவ்வொரு அவமானத்தையும் மிஞ்சுகிறது என்பதையும், விசுவாசியை இழிவுபடுத்துபவனே உண்மையில் துண்டிக்கப்பட்டவன் என்பதையும் நினைவூட்டுகிறது.`,
      si: `ක්වර්ආනයේ කෙටිම සූරාව වන අතර, නබි ﷺ තුමා පරම්පරාවක් නැති තැනැත්තා යැයි සමච්චලයට ලක් වූ විට සැනසිල්ලක් ලෙස පහළ විය. එය පාරායනා කිරීම අල්ලාහ්ගෙන් ලැබෙන බහුලත්වය සෑම නින්දාවක්ම ඉක්මවා යන බවත්, විශ්වාසවන්තයා අවමන් කරන තැනැත්තා ම සැබැවින් සිඳී ගිය තැනැත්තා බවත් සිහිපත් කරයි.`,
    },
    themes: [
      { ms: `Al-Kawthar, sungai di Syurga dan setiap bentuk kebaikan yang melimpah`, tur: `Kevser, cennetteki ırmak ve taşkın hayrın her biçimi`, ben: `আল-কাউসার, জান্নাতের নদী এবং অপরিসীম কল্যাণের প্রতিটি রূপ`, fas: `کوثر، رود بهشت و هر گونه خیر بی‌کران` },
      { ms: `Kesyukuran yang dizahirkan melalui solat dan korban`, tur: `Namaz ve kurban ile ifade edilen şükür`, ben: `নামায ও কুরবানীর মাধ্যমে প্রকাশিত কৃতজ্ঞতা`, fas: `سپاسگزاری که با نماز و قربانی ابراز می‌شود` },
      { ms: `Pembalikan penghinaan si pengejek`, tur: `Alay edenin hakaretinin tersine dönmesi`, ben: `বিদ্রূপকারীর অপমানের প্রত্যাবর্তন`, fas: `بازگشت دشنام ریشخندکننده به خود او` },
      { ms: `Kenabian dan warisan Nabi ﷺ yang berkekalan`, tur: `Peygamberlik ve Peygamber ﷺ efendimizin kalıcı mirası`, ben: `নবুয়ত এবং নবী ﷺ-এর চিরস্থায়ী উত্তরাধিকার`, fas: `نبوت و میراث ماندگار پیامبر ﷺ` },
    ],
    verses: [
      {
        translation: {
          ms: `Sesungguhnya Kami telah mengurniakan kepadamu al-Kawthar.`,
          tur: `Şüphesiz biz sana Kevser'i verdik.`,
          ben: `নিশ্চয়ই আমি আপনাকে কাউসার দান করেছি।`,
          fas: `به‌راستی ما به تو کوثر را عطا کردیم.`,
        },
        context: {
          ms: `Al-Kawthar ialah bentuk mubalaghah yang bermaksud kurnia yang melimpah ruah. Nabi ﷺ menerangkannya sebagai sebatang sungai di Syurga yang lebih putih daripada susu dan lebih manis daripada madu. Para ulama klasik turut memahaminya sebagai kenabian, al-Quran, dan pengikut baginda yang tidak terhitung.`,
          tur: `Kevser, taşkın bolluk anlamına gelen mübalağa kalıbıdır. Peygamber ﷺ onu, cennette sütten daha beyaz ve baldan daha tatlı bir ırmak olarak tanımlamıştır. Klasik âlimler onu ayrıca peygamberlik, Kur'an ve sayısız ümmeti olarak da okumuşlardır.`,
          ben: `আল-কাউসার একটি অতিশয়োক্তিমূলক রূপ যার অর্থ অপরিসীম প্রাচুর্য। নবী ﷺ একে জান্নাতের এমন একটি নদী বলে বর্ণনা করেছেন যা দুধের চেয়ে সাদা ও মধুর চেয়ে মিষ্টি। ধ্রুপদী আলেমগণ একে নবুয়ত, কুরআন এবং তাঁর অগণিত অনুসারী হিসেবেও পাঠ করেছেন।`,
          fas: `کوثر صیغه مبالغه است به معنای فراوانی بی‌کران. پیامبر ﷺ آن را رودی در بهشت وصف کرد که از شیر سپیدتر و از عسل شیرین‌تر است. عالمان کلاسیک آن را نبوت، قرآن و پیروان بی‌شمار او نیز خوانده‌اند.`,
        },
      },
      {
        translation: {
          ms: `Sesungguhnya orang yang membencimu, dialah yang terputus.`,
          tur: `Şüphesiz sana buğzeden, asıl soyu kesik olan odur.`,
          ben: `নিশ্চয়ই আপনার প্রতি বিদ্বেষ পোষণকারীই নির্বংশ।`,
          fas: `به‌راستی دشمن تو، همو بریده است.`,
        },
        context: {
          ms: `Si pengejek telah menggelar Nabi ﷺ sebagai abtar, iaitu terputus. Allah mengembalikan perkataan itu kepadanya. Sejarah membuktikannya: nama si pengejek hanya tinggal sebagai catatan kaki, sementara Nabi ﷺ mempunyai hampir dua bilion pengikut dan nama baginda diseru setiap hari di seluruh bumi.`,
          tur: `Alay eden kişi Peygamber ﷺ için ebter, yani soyu kesik demişti. Allah bu sözü ona geri çevirir. Tarih bunu doğrulamıştır: alay edenin adı yalnızca bir dipnot olarak kalmış, Peygamber ﷺ efendimizin ise yaklaşık iki milyar takipçisi vardır ve adı her gün yeryüzünün her yerinde anılmaktadır.`,
          ben: `বিদ্রূপকারী নবী ﷺ-কে আবতার অর্থাৎ নির্বংশ বলেছিল। আল্লাহ সেই শব্দ তার দিকেই ফিরিয়ে দেন। ইতিহাস তা নিশ্চিত করেছে: বিদ্রূপকারীর নাম কেবল একটি পাদটীকা হিসেবে টিকে আছে, অথচ নবী ﷺ-এর প্রায় দুই বিলিয়ন অনুসারী রয়েছে এবং তাঁর নাম প্রতিদিন পৃথিবীজুড়ে উচ্চারিত হয়।`,
          fas: `ریشخندکننده پیامبر ﷺ را ابتر، یعنی بریده، خوانده بود. خداوند آن واژه را به خود او بازمی‌گرداند. تاریخ آن را تأیید کرد: نام ریشخندکننده تنها همچون پانوشتی مانده است، حال آنکه پیامبر ﷺ نزدیک به دو میلیارد پیرو دارد و نامش هر روز در سراسر زمین برده می‌شود.`,
        },
      },
    ],
  },

  110: {
    name: {
      ms: `Pertolongan Allah`,
      tur: `İlâhî Yardım`,
      ben: `আল্লাহর সাহায্য`,
      fas: `یاری خداوند`,
      urd: `نصرتِ الٰہی`,
      zh: `真主的援助`,
      yue: `阿拉嘅援助`,
      ja: `神の助け`,
      ru: `Божественная помощь`,
      es: `El Auxilio Divino`,
      ko: `신의 도움`,
      ta: `இறை உதவி`,
      si: `දිව්‍ය උපකාරය`,
    },
    overview: {
      ms: `Surah lengkap yang terakhir diturunkan kepada Nabi ﷺ. Ia mengumumkan kemenangan yang akan datang dan kemasukan manusia ke dalam Islam secara berbondong-bondong, kemudian memerintahkan bukan sambutan kemeriahan tetapi tasbih, pujian dan istighfar. Ibn ʿAbbas memahaminya sebagai pemberitahuan yang senyap tentang hampirnya kewafatan Nabi ﷺ.`,
      tur: `Peygamber ﷺ efendimize indirilen son tam suredir. Yaklaşan zaferi ve insanların bölük bölük İslam'a girişini duyurur, ardından kutlama değil, tesbih, hamd ve istiğfar emreder. İbn Abbas onu, Peygamber ﷺ efendimizin yaklaşan vefatının sessiz bir bildirimi olarak anlamıştır.`,
      ben: `নবী ﷺ-এর প্রতি নাযিলকৃত সর্বশেষ পূর্ণাঙ্গ সূরা। এটি আসন্ন বিজয় এবং দলে দলে মানুষের ইসলামে প্রবেশের ঘোষণা দেয়, অতঃপর উৎসব নয় বরং তাসবীহ, প্রশংসা ও ক্ষমাপ্রার্থনার নির্দেশ দেয়। ইবনে আব্বাস একে নবী ﷺ-এর আসন্ন ওফাতের নীরব ঘোষণা হিসেবে বুঝেছিলেন।`,
      fas: `آخرین سوره کاملی که بر پیامبر ﷺ نازل شد. پیروزی نزدیک و درآمدن مردم را گروه‌گروه به اسلام اعلام می‌کند، سپس نه به جشن بلکه به تسبیح و حمد و استغفار فرمان می‌دهد. ابن عباس آن را اعلامی خاموش از نزدیکی رحلت پیامبر ﷺ فهمید.`,
    },
    asbab: {
      ms: `Berkait dengan pembukaan Makkah pada tahun 8 Hijrah dan kemasukan beramai-ramai kabilah-kabilah Arab ke dalam Islam. Apabila ia diturunkan, Nabi ﷺ memahaminya sebagai tanda bahawa misi baginda telah sempurna dan kepulangan baginda kepada Allah sudah hampir. Baginda hidup hanya seketika selepas itu.`,
      tur: `Hicretin 8. yılında Mekke'nin fethi ve Arap kabilelerinin kitleler hâlinde İslam'a girişiyle bağlantılıdır. İndirildiğinde Peygamber ﷺ bunu, görevinin tamamlandığına ve Allah'a dönüşünün yaklaştığına dair bir işaret olarak anladı. Bundan sonra yalnızca kısa bir süre yaşadı.`,
      ben: `৮ হিজরিতে মক্কা বিজয় এবং আরব গোত্রসমূহের দলে দলে ইসলামে প্রবেশের সঙ্গে সম্পৃক্ত। যখন এটি নাযিল হয়, নবী ﷺ একে তাঁর দায়িত্ব সম্পূর্ণ হওয়া এবং আল্লাহর নিকট প্রত্যাবর্তন নিকটবর্তী হওয়ার নিদর্শন হিসেবে বুঝেছিলেন। এরপর তিনি অল্প কিছুকাল জীবিত ছিলেন।`,
      fas: `با فتح مکه در سال هشتم هجری و درآمدن گروه‌گروه قبایل عرب به اسلام پیوند دارد. چون نازل شد، پیامبر ﷺ آن را نشانه‌ای بر کمال رسالت خویش و نزدیکی بازگشتش به سوی خدا دانست. پس از آن تنها مدت کوتاهی زیست.`,
    },
    virtues: {
      en: `The last complete surah revealed. The Companions wept when they grasped its meaning, for it announced that the Prophet's ﷺ mission was complete. Reciting it teaches that the proper response to victory is humility, praise and seeking forgiveness, never boasting.`,
      ms: `Surah lengkap yang terakhir diturunkan. Para Sahabat menangis apabila memahami maknanya, kerana ia mengumumkan bahawa misi Nabi ﷺ telah sempurna. Membacanya mengajar bahawa jawapan yang betul terhadap kemenangan ialah kerendahan hati, pujian dan istighfar, bukan sekali-kali kemegahan.`,
      tur: `İndirilen son tam suredir. Sahabeler manasını kavradıklarında ağladılar, çünkü bu sure Peygamber ﷺ efendimizin görevinin tamamlandığını duyuruyordu. Onu okumak, zafere karşı doğru karşılığın böbürlenmek değil, tevazu, hamd ve istiğfar olduğunu öğretir.`,
      urd: `آخری مکمل نازل ہونے والی سورت۔ صحابہ کرام اس کا مفہوم سمجھ کر روئے، کیونکہ یہ اعلان کر رہی تھی کہ نبی ﷺ کا مشن مکمل ہو چکا ہے۔ اس کی تلاوت سکھاتی ہے کہ فتح کا درست جواب عاجزی، حمد اور استغفار ہے، ہرگز فخر نہیں۔`,
      ben: `সর্বশেষ পূর্ণাঙ্গ নাযিলকৃত সূরা। সাহাবিগণ এর অর্থ উপলব্ধি করে কেঁদেছিলেন, কারণ এটি ঘোষণা করছিল যে নবী ﷺ-এর দায়িত্ব সম্পূর্ণ হয়েছে। এটি পাঠ করা শেখায় যে বিজয়ের যথার্থ প্রতিক্রিয়া হলো বিনয়, প্রশংসা ও ক্ষমাপ্রার্থনা, কখনোই অহংকার নয়।`,
      fas: `آخرین سوره کاملی که نازل شد. صحابه چون معنای آن را دریافتند گریستند، زیرا خبر می‌داد که رسالت پیامبر ﷺ به کمال رسیده است. خواندن آن می‌آموزد که پاسخ درست به پیروزی، فروتنی و ستایش و آمرزش‌خواهی است، نه هرگز فخرفروشی.`,
      zh: `最后降示的完整章节。圣门弟子领会其义时落泪，因为它宣告先知 ﷺ 的使命已经完成。诵读它教导人们，对胜利的正确回应是谦卑、赞颂与求恕，绝非夸耀。`,
      yue: `最後降示嘅完整章節。聖門弟子領會佢意思嘅時候落淚，因為佢宣告先知 ﷺ 嘅使命已經完成。誦讀佢教導人哋，對勝利嘅正確回應係謙卑、讚頌同求恕，絕對唔係誇耀。`,
      ja: `最後に下された完全な章である。教友たちはその意味を悟ったとき涙した。預言者 ﷺ の使命が完了したことを告げていたからである。これを誦することは、勝利への正しい応答が誇りではなく、謙遜と讃美と赦しの祈願であることを教える。`,
      ru: `Последняя полностью ниспосланная сура. Сподвижники заплакали, когда постигли её смысл, ибо она возвещала, что миссия Пророка ﷺ завершена. Её чтение учит, что верный ответ на победу есть смирение, хвала и испрашивание прощения, но никак не похвальба.`,
      es: `La última sura completa revelada. Los Compañeros lloraron al comprender su significado, pues anunciaba que la misión del Profeta ﷺ estaba cumplida. Recitarla enseña que la respuesta correcta a la victoria es la humildad, la alabanza y el pedir perdón, jamás la jactancia.`,
      ko: `마지막으로 계시된 완전한 수라이다. 교우들은 그 뜻을 깨달았을 때 울었으니, 예언자 ﷺ의 사명이 완수되었음을 알렸기 때문이다. 이를 낭송함은 승리에 대한 올바른 응답이 자랑이 아니라 겸손과 찬미와 용서를 구함임을 가르친다.`,
      ta: `இறக்கப்பட்ட கடைசி முழு அத்தியாயம். தோழர்கள் அதன் பொருளை உணர்ந்தபோது அழுதனர், ஏனெனில் அது நபி ﷺ அவர்களின் பணி நிறைவடைந்ததை அறிவித்தது. இதை ஓதுவது வெற்றிக்கான சரியான பதில் தற்பெருமை அல்ல, மாறாக பணிவு, புகழ்ச்சி மற்றும் மன்னிப்புத் தேடல் என்பதைக் கற்பிக்கிறது.`,
      si: `පහළ වූ අවසන් සම්පූර්ණ සූරාව. සහාබාවරු එහි අර්ථය වටහා ගත් විට හැඬූහ, මන්ද එය නබි ﷺ තුමාගේ මෙහෙවර සම්පූර්ණ වූ බව ප්‍රකාශ කළේය. එය පාරායනා කිරීම ජයග්‍රහණයට නිසි ප්‍රතිචාරය පුරසාරම් දෙඩීම නොව, නිහතමානිකම, ප්‍රශංසාව හා සමාව අයැදීම බව උගන්වයි.`,
    },
    themes: [
      { ms: `Pertolongan Allah dan pembukaan Makkah`, tur: `İlâhî yardım ve Mekke'nin fethi`, ben: `আল্লাহর সাহায্য ও মক্কা বিজয়`, fas: `یاری خداوند و فتح مکه` },
      { ms: `Manusia memasuki agama secara berbondong-bondong`, tur: `İnsanların bölük bölük dine girmesi`, ben: `দলে দলে মানুষের দ্বীনে প্রবেশ`, fas: `درآمدن مردم گروه‌گروه به دین` },
      { ms: `Kerendahan hati pada saat kemenangan, bukan sambutan kemeriahan`, tur: `Zafer anında kutlama değil tevazu`, ben: `বিজয়ের মুহূর্তে উৎসব নয়, বিনয়`, fas: `فروتنی در لحظه پیروزی، نه جشن` },
      { ms: `Tasbih, pujian dan istighfar sebagai jawapan terhadap kejayaan`, tur: `Başarıya karşılık tesbih, hamd ve istiğfar`, ben: `সাফল্যের প্রতিক্রিয়া হিসেবে তাসবীহ, প্রশংসা ও ক্ষমাপ্রার্থনা`, fas: `تسبیح و حمد و استغفار همچون پاسخ به کامیابی` },
    ],
    verses: [
      {
        translation: {
          ms: `Apabila datang pertolongan Allah dan kemenangan.`,
          tur: `Allah'ın yardımı ve fetih geldiğinde.`,
          ben: `যখন আল্লাহর সাহায্য ও বিজয় আসবে।`,
          fas: `چون یاری خدا و پیروزی فرا رسد.`,
        },
        context: {
          ms: `Kemenangan itu ialah Fath Makkah, pembukaan kota tanpa pertumpahan darah, kota yang telah menyeksa Nabi ﷺ selama tiga belas tahun. Pertolongan itu milik Allah, bukan milik tentera.`,
          tur: `Fetih, Fetih Mekke'dir; Peygamber ﷺ efendimize on üç yıl zulmetmiş olan şehrin kansız açılışıdır. Yardım Allah'a aittir, ordulara değil.`,
          ben: `বিজয় বলতে ফাতহু মক্কা, অর্থাৎ সেই নগরীর রক্তপাতহীন উন্মোচন যা তেরো বছর ধরে নবী ﷺ-কে নির্যাতন করেছিল। সাহায্য আল্লাহরই, সৈন্যবাহিনীর নয়।`,
          fas: `فتح همان فتح مکه است، گشوده شدن بی‌خون‌ریزی شهری که سیزده سال پیامبر ﷺ را آزرده بود. یاری از آنِ خداست، نه از آنِ لشکرها.`,
        },
      },
      {
        translation: {
          ms: `Maka bertasbihlah dengan memuji Tuhanmu dan mohonlah keampunan daripada-Nya. Sesungguhnya Dia sentiasa Menerima taubat.`,
          tur: `Öyleyse Rabbini hamd ile tesbih et ve O'ndan bağışlanma dile. Şüphesiz O, tövbeleri çokça kabul edendir.`,
          ben: `তখন আপনার রবের প্রশংসাসহ তাঁর পবিত্রতা ঘোষণা করুন এবং তাঁর নিকট ক্ষমা প্রার্থনা করুন। নিশ্চয়ই তিনি তওবা কবুলকারী।`,
          fas: `پس پروردگارت را با ستایش او تسبیح گوی و از او آمرزش بخواه. به‌راستی که او همواره توبه‌پذیر است.`,
        },
        context: {
          ms: `Pada kemuncak kemenangan duniawi, Allah memerintahkan bukan kemegahan tetapi tasbih, pujian dan istighfar. Kejayaan ialah keadaan yang paling berbahaya dari sudut rohani, ketika kesombongan menyelinap masuk. Semakin banyak Allah mengurniakan kepadamu, semakin banyak kamu harus merendahkan diri di hadapan-Nya.`,
          tur: `Dünyevi zaferin zirvesinde Allah, böbürlenmeyi değil tesbihi, hamdi ve istiğfarı emreder. Başarı, gururun sinsice girdiği, ruhen en tehlikeli hâldir. Allah sana ne kadar çok verirse, O'nun huzurunda o kadar çok alçalman gerekir.`,
          ben: `পার্থিব বিজয়ের শীর্ষে আল্লাহ উৎসব নয় বরং তাসবীহ, প্রশংসা ও ইস্তিগফারের নির্দেশ দেন। সাফল্যই আধ্যাত্মিকভাবে সবচেয়ে বিপজ্জনক অবস্থা, যেখানে অহংকার নীরবে প্রবেশ করে। আল্লাহ আপনাকে যত বেশি দেন, তাঁর সামনে আপনার তত বেশি বিনীত হওয়া উচিত।`,
          fas: `در اوج پیروزی دنیوی، خداوند نه به جشن بلکه به تسبیح و حمد و استغفار فرمان می‌دهد. کامیابی خطرناک‌ترین حالت معنوی است، آنجا که غرور پنهانی راه می‌یابد. هرچه خدا بیشتر به تو دهد، باید بیشتر در برابر او فروتن باشی.`,
        },
      },
    ],
  },
};

/**
 * Fills empty strings in `base` from `fill`. A value in `base` that is already
 * a non-empty string is never touched, so richer existing content always wins.
 */
export function applyFill(
  base: Record<number, SurahI18n>,
  fill: Record<number, SurahFill> = QURAN_BATCH_1_FILL,
): Record<number, SurahI18n> {
  const pick = (b: LangMap, f?: PartialLangMap): LangMap => {
    if (!f) return b;
    const out = { ...b };
    (Object.keys(f) as (keyof LangMap)[]).forEach((k) => {
      if (!out[k] && f[k]) out[k] = f[k] as string;
    });
    return out;
  };

  const merged: Record<number, SurahI18n> = { ...base };

  Object.entries(fill).forEach(([key, f]) => {
    const n = Number(key);
    const b = merged[n];
    if (!b) return;
    merged[n] = {
      ...b,
      name: pick(b.name, f.name),
      overview: pick(b.overview, f.overview),
      asbab: pick(b.asbab, f.asbab),
      virtues: pick(b.virtues, f.virtues),
      themes: b.themes.map((t, i) => pick(t, f.themes?.[i])),
      verses: b.verses.map((v, i) => ({
        translation: pick(v.translation, f.verses?.[i]?.translation),
        context: pick(v.context, f.verses?.[i]?.context),
      })),
    };
  });

  return merged;
}
