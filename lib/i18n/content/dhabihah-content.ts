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
    ms: `Prinsip Asas: Ihsan`,
    tur: `Temel İlke: İhsan`,
    urd: `بنیادی اصول: احسان`,
    ben: `মৌলিক নীতি: ইহসান`,
    fas: `اصل بنیادین: احسان`,
    zh: `根本原则：至善（Ihsan）`,
    yue: `根本原則：至善（Ihsan）`,
    ja: `根本原則：イフサーン`,
    ru: `Основополагающий принцип: ихсан`,
    es: `El principio fundamental: Ihsan`,
    ko: `근본 원칙: 이흐산`,
    ta: `அடிப்படைக் கொள்கை: இஹ்ஸான்`,
    si: `මූලික මූලධර්මය: ඉහ්සාන්`,
  },
  ihsan_hadith_en: {
    en: `Allah has decreed ihsan (excellence) upon everything. So if you kill, kill well; and if you slaughter, slaughter well. Let each of you sharpen his blade, and let him give comfort to the animal he slaughters.`,
    ms: `Allah telah menetapkan ihsan (kecemerlangan) ke atas segala sesuatu. Maka jika kamu membunuh, bunuhlah dengan baik; dan jika kamu menyembelih, sembelihlah dengan baik. Hendaklah setiap seorang daripada kamu menajamkan mata pisaunya, dan hendaklah dia menenangkan haiwan yang disembelihnya.`,
    tur: `Allah her şeyin üzerine ihsanı (mükemmelliği) yazmıştır. Öyleyse öldürürseniz güzel öldürün; keserseniz güzel kesin. Her biriniz bıçağını iyice bilesin ve kestiği hayvanı rahat ettirsin.`,
    urd: `اللہ نے ہر چیز پر احسان (عمدگی) کو لازم قرار دیا ہے۔ پس جب تم قتل کرو تو اچھے طریقے سے قتل کرو؛ اور جب ذبح کرو تو اچھے طریقے سے ذبح کرو۔ تم میں سے ہر ایک اپنی چھری تیز کر لے، اور ذبح کیے جانے والے جانور کو آرام پہنچائے۔`,
    ben: `আল্লাহ সবকিছুর ওপর ইহসান (উৎকর্ষ) নির্ধারণ করেছেন। তাই তোমরা যখন হত্যা করবে, উত্তমভাবে হত্যা করো; আর যখন জবাই করবে, উত্তমভাবে জবাই করো। তোমাদের প্রত্যেকে যেন তার ছুরি ধারালো করে নেয় এবং জবাই করা প্রাণীটিকে আরাম দেয়।`,
    fas: `الله احسان (نیکوکاری) را بر هر چیزی مقرر کرده است. پس هرگاه می‌کشید، نیکو بکشید؛ و هرگاه ذبح می‌کنید، نیکو ذبح کنید. هر یک از شما باید تیغ خود را تیز کند و حیوانی را که ذبح می‌کند آسوده سازد.`,
    zh: `真主已将至善（ihsan，即卓越）规定于一切事物之上。所以你们杀的时候，要杀得妥善；你们宰牲的时候，要宰得妥善。你们每个人都应当磨利自己的刀，并让被宰的牲畜得到安适。`,
    yue: `真主已將至善（ihsan，即卓越）規定於一切事物之上。所以你哋殺嘅時候，要殺得妥善；你哋宰牲嘅時候，要宰得妥善。你哋每個人都應該磨利自己把刀，同埋令被宰嘅牲畜得到安適。`,
    ja: `アッラーはあらゆるものにイフサーン（卓越）を定められた。ゆえに、あなた方が殺すときは良く殺しなさい。屠るときは良く屠りなさい。あなた方は皆、刃を研ぎ、屠る動物を安らがせなさい。`,
    ru: `Аллах предписал ихсан (совершенство) во всём. Поэтому, если вы убиваете, убивайте хорошо; а если закалываете, закалывайте хорошо. Пусть каждый из вас наточит свой нож и даст покой животному, которое он закалывает.`,
    es: `Allah ha decretado el ihsan (la excelencia) sobre todas las cosas. Así que, si matan, maten bien; y si sacrifican, sacrifiquen bien. Que cada uno de ustedes afile su cuchilla y dé comodidad al animal que sacrifica.`,
    ko: `알라께서는 모든 것에 이흐산(탁월함)을 명하셨다. 그러므로 죽일 때에는 잘 죽이고, 도축할 때에는 잘 도축하라. 너희 각자는 칼날을 날카롭게 갈고, 도축하는 동물이 편안하도록 하라.`,
    ta: `அல்லாஹ் எல்லாவற்றின் மீதும் இஹ்ஸானை (சிறப்பை) விதித்துள்ளான். ஆகவே நீங்கள் கொன்றால் நன்றாகக் கொல்லுங்கள்; அறுத்தால் நன்றாக அறுங்கள். உங்களில் ஒவ்வொருவரும் தன் கத்தியைக் கூர்மையாக்கிக் கொள்ளட்டும், தான் அறுக்கும் விலங்கிற்கு ஆறுதல் அளிக்கட்டும்.`,
    si: `අල්ලාහ් සියල්ල කෙරෙහි ඉහ්සාන් (විශිෂ්ටත්වය) නියම කර ඇත. එබැවින් ඔබ මරන්නේ නම් මනාව මරන්න; කපන්නේ නම් මනාව කපන්න. ඔබ සැමදෙනාම තම පිහිය මුවහත් කර ගනිත්වා, තමන් කපන සතාට සැනසුම ලබා දෙත්වා.`,
  },
  ihsan_p: {
    en: `This hadith of Shaddad ibn Aws is the foundation of the entire Islamic law of slaughter. Every rule that follows exists to fulfil these two commands: sharpen the blade, and give the animal comfort. Islamic slaughter is not merely a method for producing meat, it is an act of worship in which the animal is treated with mercy up to and including its last breath.`,
    ms: `Hadis Syaddad bin Aus ini ialah asas bagi keseluruhan hukum sembelihan dalam Islam. Setiap peraturan yang menyusul wujud untuk menunaikan dua perintah ini: menajamkan mata pisau, dan menenangkan haiwan. Sembelihan Islam bukan sekadar kaedah untuk menghasilkan daging, ia ialah satu ibadah yang di dalamnya haiwan dilayan dengan rahmat sehingga ke hembusan nafasnya yang terakhir, termasuk nafas terakhir itu.`,
    tur: `Şeddâd b. Evs'in bu hadisi, İslam'daki kesim hukukunun tamamının temelidir. Ardından gelen her kural şu iki emri yerine getirmek için vardır: bıçağı bilemek ve hayvanı rahat ettirmek. İslami kesim yalnızca et elde etme yöntemi değildir; hayvana son nefesine dek, son nefesi de dahil, merhametle davranılan bir ibadettir.`,
    urd: `شداد بن اوس کی یہ حدیث اسلام میں ذبح کے پورے قانون کی بنیاد ہے۔ اس کے بعد آنے والا ہر حکم ان دو حکموں کو پورا کرنے کے لیے ہے: چھری کو تیز کرنا، اور جانور کو آرام پہنچانا۔ اسلامی ذبح محض گوشت حاصل کرنے کا طریقہ نہیں، یہ ایک عبادت ہے جس میں جانور کے ساتھ اس کی آخری سانس تک، اور اس سمیت، رحمت کا سلوک کیا جاتا ہے۔`,
    ben: `শাদ্দাদ ইবনে আউসের এই হাদিসটি ইসলামে জবাইয়ের সমগ্র বিধানের ভিত্তি। পরবর্তী প্রতিটি নিয়ম এই দুটি নির্দেশ পূরণের জন্যই বিদ্যমান: ছুরি ধারালো করা, এবং প্রাণীকে আরাম দেওয়া। ইসলামি জবাই কেবল মাংস উৎপাদনের একটি পদ্ধতি নয়, এটি একটি ইবাদত যেখানে প্রাণীর শেষ নিঃশ্বাস পর্যন্ত, এবং শেষ নিঃশ্বাসসহ, দয়ার সঙ্গে আচরণ করা হয়।`,
    fas: `این حدیث شداد بن اوس بنیاد کل احکام ذبح در اسلام است. هر قاعده‌ای که در ادامه می‌آید برای اجرای همین دو فرمان وجود دارد: تیز کردن تیغ، و آسوده ساختن حیوان. ذبح اسلامی صرفاً روشی برای تولید گوشت نیست؛ عبادتی است که در آن با حیوان تا آخرین نفسش، و از جمله خود آخرین نفس، با رحمت رفتار می‌شود.`,
    zh: `舍达德·本·奥斯的这段圣训是整部伊斯兰宰牲法的根基。随后的每一条规定，都是为了履行这两项命令而存在：磨利刀刃，并让牲畜得到安适。伊斯兰宰牲不仅仅是生产肉食的方法，而是一项拜功，其间对牲畜以慈悯相待，直至并包括其最后一口气。`,
    yue: `舍達德·本·奧斯嘅呢段聖訓係整部伊斯蘭宰牲法嘅根基。隨後嘅每一條規定，都係為咗履行呢兩項命令而存在：磨利刀刃，同埋令牲畜得到安適。伊斯蘭宰牲唔單止係生產肉食嘅方法，而係一項拜功，期間對牲畜以慈悲相待，直至包括佢最後一口氣。`,
    ja: `このシャッダード・ブン・アウスのハディースは、イスラームの屠殺法全体の土台である。これに続くすべての規定は、刃を研ぐこと、そして動物に安らぎを与えること、という二つの命令を果たすために存在する。イスラームの屠殺は単に肉を得るための方法ではなく、最後の息に至るまで、最後の息も含めて、動物に慈悲をもって接する礼拝行為である。`,
    ru: `Этот хадис Шаддада ибн Аус является основой всего исламского права о заклании. Каждое последующее правило существует ради исполнения этих двух повелений: наточить нож и дать животному покой. Исламское заклание не является лишь способом получения мяса, это акт поклонения, при котором с животным обращаются милосердно вплоть до последнего вздоха включительно.`,
    es: `Este hadiz de Shaddad ibn Aws es el fundamento de toda la ley islámica del sacrificio. Cada norma que sigue existe para cumplir estos dos mandatos: afilar la cuchilla y dar comodidad al animal. El sacrificio islámico no es meramente un método para producir carne, es un acto de adoración en el que el animal es tratado con misericordia hasta su último aliento inclusive.`,
    ko: `샤다드 이븐 아우스가 전한 이 하디스는 이슬람 도축법 전체의 토대이다. 이어지는 모든 규정은 칼날을 날카롭게 갈고 동물을 편안하게 해 주라는 이 두 가지 명령을 이행하기 위해 존재한다. 이슬람의 도축은 단지 고기를 얻기 위한 방법이 아니라, 동물의 마지막 숨에 이르기까지, 마지막 숨을 포함하여 자비로 대하는 예배 행위이다.`,
    ta: `ஷத்தாத் இப்னு அவ்ஸின் இந்த ஹதீஸ் இஸ்லாமிய அறுப்புச் சட்டம் முழுவதற்கும் அடித்தளமாகும். பின்தொடரும் ஒவ்வொரு விதியும் இந்த இரண்டு கட்டளைகளை நிறைவேற்றவே உள்ளது: கத்தியைக் கூர்மையாக்குதல், விலங்கிற்கு ஆறுதல் அளித்தல். இஸ்லாமிய அறுப்பு இறைச்சியை உற்பத்தி செய்வதற்கான ஒரு முறை மட்டுமல்ல, அது விலங்கின் இறுதி மூச்சு வரை, இறுதி மூச்சு உட்பட, கருணையுடன் நடத்தப்படும் ஒரு வழிபாட்டுச் செயலாகும்.`,
    si: `ෂද්දාද් ඉබ්නු අව්ස්ගේ මෙම හදීසය ඉස්ලාමීය සතුන් කැපීමේ නීතිය මුළුල්ලේම පදනමයි. පසුව එන සෑම නීතියක්ම මෙම නියෝග දෙක ඉටු කිරීම සඳහා පවතී: පිහිය මුවහත් කිරීම, සහ සතාට සැනසුම ලබා දීම. ඉස්ලාමීය කැපීම මස් නිපදවීමේ ක්‍රමයක් පමණක් නොව, සතාගේ අවසන් හුස්ම දක්වා, අවසන් හුස්ම ද ඇතුළුව, දයාවෙන් සැලකෙන නමස්කාර ක්‍රියාවකි.`,
  },
  ihsan_source: { en: `Source: Muslim 1955 (Shaddad ibn Aws).`, ms: `Sumber: Muslim 1955 (Syaddad bin Aus).`, tur: `Kaynak: Müslim 1955 (Şeddâd b. Evs).`, urd: `ماخذ: مسلم ۱۹۵۵ (شداد بن اوس)۔`, ben: `সূত্র: মুসলিম ১৯৫৫ (শাদ্দাদ ইবনে আউস)।`, fas: `منبع: مسلم ۱۹۵۵ (شداد بن اوس).`, zh: `出处：穆斯林 1955（舍达德·本·奥斯）。`, yue: `出處：穆斯林 1955（舍達德·本·奧斯）。`, ja: `出典：ムスリム 1955（シャッダード・ブン・アウス）。`, ru: `Источник: Муслим 1955 (Шаддад ибн Аус).`, es: `Fuente: Muslim 1955 (Shaddad ibn Aws).`, ko: `출처: 무슬림 1955 (샤다드 이븐 아우스).`, ta: `ஆதாரம்: முஸ்லிம் 1955 (ஷத்தாத் இப்னு அவ்ஸ்).`, si: `මූලාශ්‍රය: මුස්ලිම් 1955 (ෂද්දාද් ඉබ්නු අව්ස්).` },

  /* ── Section 2: Four conditions ───────────────────── */
  conditions_h: { en: `The Four Conditions of a Valid Slaughter`, ms: `Empat Syarat Sembelihan yang Sah`, tur: `Geçerli Bir Kesimin Dört Şartı`, urd: `درست ذبح کی چار شرائط`, ben: `বৈধ জবাইয়ের চারটি শর্ত`, fas: `چهار شرط ذبح معتبر`, zh: `有效宰牲的四项条件`, yue: `有效宰牲嘅四項條件`, ja: `有効な屠殺の四つの条件`, ru: `Четыре условия действительного заклания`, es: `Las cuatro condiciones de un sacrificio válido`, ko: `유효한 도축의 네 가지 조건`, ta: `செல்லுபடியாகும் அறுப்பின் நான்கு நிபந்தனைகள்`, si: `වලංගු කැපීමක කොන්දේසි හතර` },
  conditions_intro: { en: `For meat to be halal, four conditions must be met:`, ms: `Agar daging itu halal, empat syarat mesti dipenuhi:`, tur: `Etin helal olması için dört şartın yerine getirilmesi gerekir:`, urd: `گوشت کے حلال ہونے کے لیے چار شرائط کا پورا ہونا ضروری ہے:`, ben: `মাংস হালাল হতে হলে চারটি শর্ত পূরণ করতে হবে:`, fas: `برای اینکه گوشت حلال باشد، باید چهار شرط برآورده شود:`, zh: `肉要成为合法（Halal），必须满足四项条件：`, yue: `肉要成為合法（Halal），必須滿足四項條件：`, ja: `肉がハラールであるためには、四つの条件が満たされなければならない。`, ru: `Чтобы мясо было халяльным, должны быть соблюдены четыре условия:`, es: `Para que la carne sea halal, deben cumplirse cuatro condiciones:`, ko: `고기가 할랄이 되려면 네 가지 조건이 충족되어야 한다.`, ta: `இறைச்சி ஹலாலாக இருக்க நான்கு நிபந்தனைகள் நிறைவேற்றப்பட வேண்டும்:`, si: `මස් හලාල් වීමට කොන්දේසි හතරක් සපුරා තිබිය යුතුය:` },
  cond_1_label: { en: `1. The slaughterer.`, ms: `1. Penyembelih.`, tur: `1. Kesen kişi.`, urd: `۱۔ ذبح کرنے والا۔`, ben: `১. জবাইকারী।`, fas: `۱. ذبح‌کننده.`, zh: `1. 宰牲者。`, yue: `1. 宰牲者。`, ja: `1. 屠殺する者。`, ru: `1. Закалывающий.`, es: `1. El sacrificador.`, ko: `1. 도축하는 사람.`, ta: `1. அறுப்பவர்.`, si: `1. කපන්නා.` },
  cond_1_body: {
    en: `Must be a Muslim, or from the People of the Book (Jew or Christian) whose slaughter Allah has explicitly permitted: "The food of those who were given the Scripture is lawful for you" (al-Ma'ida 5:5). Muslim, sane, capable of intention, and pronouncing Allah's name at the moment of slaughter.`,
    ms: `Mestilah seorang Muslim, atau daripada Ahli Kitab (Yahudi atau Kristian) yang sembelihannya telah dibenarkan Allah dengan jelas: "Makanan orang-orang yang diberi Kitab itu halal bagi kamu" (al-Ma'idah 5:5). Muslim, berakal, mampu berniat, dan menyebut nama Allah pada saat penyembelihan.`,
    tur: `Müslüman olmalıdır; ya da kesimine Allah'ın açıkça izin verdiği Ehl-i Kitaptan (Yahudi veya Hristiyan) olmalıdır: "Kendilerine kitap verilenlerin yiyeceği size helaldir" (Mâide 5:5). Müslüman, akıl sağlığı yerinde, niyet edebilen ve kesim anında Allah'ın adını anan.`,
    urd: `مسلمان ہو، یا اہلِ کتاب (یہودی یا عیسائی) میں سے ہو جن کے ذبیحے کی اللہ نے صراحت کے ساتھ اجازت دی ہے: "جنہیں کتاب دی گئی ان کا کھانا تمہارے لیے حلال ہے" (المائدہ ۵:۵)۔ مسلمان، عاقل، نیت کرنے کا اہل، اور ذبح کے وقت اللہ کا نام لینے والا۔`,
    ben: `অবশ্যই মুসলিম হতে হবে, অথবা আহলে কিতাব (ইহুদি বা খ্রিস্টান) হতে হবে, যাদের জবাই আল্লাহ স্পষ্টভাবে অনুমোদন করেছেন: "যাদের কিতাব দেওয়া হয়েছে তাদের খাদ্য তোমাদের জন্য হালাল" (আল-মায়িদা ৫:৫)। মুসলিম, সুস্থ মস্তিষ্কের, নিয়ত করতে সক্ষম এবং জবাইয়ের মুহূর্তে আল্লাহর নাম উচ্চারণকারী।`,
    fas: `باید مسلمان باشد، یا از اهل کتاب (یهودی یا مسیحی) باشد که الله ذبح او را صراحتاً مجاز شمرده است: «طعام کسانی که کتاب به آنان داده شده برای شما حلال است» (مائده ۵:۵). مسلمان، عاقل، دارای توانایی نیت کردن، و بردن نام الله در لحظه ذبح.`,
    zh: `必须是穆斯林，或是真主明确准许其宰牲的有经人（犹太教徒或基督教徒）：「曾受天经者的食物，对于你们是合法的」（筵席章 5:5）。穆斯林、心智健全、有能力立意，并在宰牲之际称念真主之名。`,
    yue: `必須係穆斯林，或者係真主明確准許其宰牲嘅有經人（猶太教徒或基督教徒）：「曾受天經者嘅食物，對於你哋係合法嘅」（筵席章 5:5）。穆斯林、心智健全、有能力立意，同埋喺宰牲嘅一刻稱念真主之名。`,
    ja: `ムスリムであるか、あるいはアッラーがその屠殺を明確に許可された啓典の民（ユダヤ教徒またはキリスト教徒）でなければならない。「啓典を与えられた者たちの食べ物は、あなた方に許されている」（食卓章 5:5）。ムスリムで、正気で、意図する能力があり、屠殺の瞬間にアッラーの御名を唱える者。`,
    ru: `Должен быть мусульманином либо принадлежать к людям Писания (иудей или христианин), чей забой Аллах прямо разрешил: «Пища тех, кому было даровано Писание, дозволена для вас» (аль-Маида 5:5). Мусульманин, здравомыслящий, способный иметь намерение и произносящий имя Аллаха в момент заклания.`,
    es: `Debe ser musulmán, o de la Gente del Libro (judío o cristiano) cuyo sacrificio Allah ha permitido explícitamente: "El alimento de quienes recibieron la Escritura es lícito para ustedes" (al-Ma'ida 5:5). Musulmán, cuerdo, capaz de tener intención, y que pronuncie el nombre de Allah en el momento del sacrificio.`,
    ko: `무슬림이어야 하며, 또는 알라께서 그 도축을 명시적으로 허용하신 성서의 백성(유대인 또는 기독교인)이어야 한다. "성서를 받은 자들의 음식은 너희에게 허용된다" (알마이다 5:5). 무슬림이며, 정신이 온전하고, 의도할 능력이 있으며, 도축하는 순간 알라의 이름을 부르는 자.`,
    ta: `முஸ்லிமாக இருக்க வேண்டும்; அல்லது அல்லாஹ் அவர்களின் அறுப்பை வெளிப்படையாக அனுமதித்துள்ள வேதக்காரர்களில் (யூதர் அல்லது கிறிஸ்தவர்) ஒருவராக இருக்க வேண்டும்: "வேதம் கொடுக்கப்பட்டவர்களின் உணவு உங்களுக்கு அனுமதிக்கப்பட்டது" (அல்-மாயிதா 5:5). முஸ்லிம், தெளிந்த அறிவுடையவர், நிய்யத் கொள்ளும் திறன் உடையவர், அறுக்கும் தருணத்தில் அல்லாஹ்வின் பெயரைக் கூறுபவர்.`,
    si: `මුස්ලිම් කෙනෙකු විය යුතුය, නැතහොත් අල්ලාහ් ඔවුන්ගේ කැපීම පැහැදිලිව අනුමත කර ඇති ග්‍රන්ථධාරීන්ගෙන් (යුදෙව්වෙකු හෝ කිතුනුවෙකු) කෙනෙකු විය යුතුය: "ග්‍රන්ථය ලබා දුන් අයගේ ආහාර ඔබට අනුමතය" (අල්-මාඉදා 5:5). මුස්ලිම්, සිහිය ඇති, චේතනාවක් ඇති කරගැනීමට සමත්, සහ කැපීමේ මොහොතේ අල්ලාහ්ගේ නාමය උච්චාරණය කරන්නා.`,
  },
  cond_2_label: { en: `2. The instrument.`, ms: `2. Alat.`, tur: `2. Alet.`, urd: `۲۔ آلہ۔`, ben: `২. হাতিয়ার।`, fas: `۲. ابزار.`, zh: `2. 工具。`, yue: `2. 工具。`, ja: `2. 道具。`, ru: `2. Орудие.`, es: `2. El instrumento.`, ko: `2. 도구.`, ta: `2. கருவி.`, si: `2. උපකරණය.` },
  cond_2_body: {
    en: `A sharp implement that causes flowing blood: a knife, a sword, a sharpened stone or shell. The Prophet ﷺ forbade the use of a tooth (a bone) or a nail (a claw); these do not cut cleanly and would strangle the animal.`,
    ms: `Alat tajam yang menyebabkan darah mengalir: pisau, pedang, batu atau cangkerang yang diasah. Nabi ﷺ melarang penggunaan gigi (tulang) atau kuku (cakar); kedua-duanya tidak memotong dengan bersih dan akan mencekik haiwan itu.`,
    tur: `Kan akıtan keskin bir alet: bıçak, kılıç, bilenmiş bir taş veya kabuk. Peygamber ﷺ dişin (bir kemik) veya tırnağın (bir pençe) kullanılmasını yasakladı; bunlar temiz kesmez ve hayvanı boğar.`,
    urd: `ایک تیز آلہ جو خون بہا دے: چھری، تلوار، تیز کیا ہوا پتھر یا سیپ۔ نبی کریم ﷺ نے دانت (ہڈی) اور ناخن (پنجہ) کے استعمال سے منع فرمایا؛ یہ صفائی سے نہیں کاٹتے اور جانور کا گلا گھونٹ دیں گے۔`,
    ben: `একটি ধারালো যন্ত্র যা রক্ত প্রবাহিত করে: ছুরি, তলোয়ার, ধারালো করা পাথর বা ঝিনুক। নবী ﷺ দাঁত (একটি হাড়) বা নখ (একটি থাবা) ব্যবহার করতে নিষেধ করেছেন; এগুলো পরিষ্কারভাবে কাটে না এবং প্রাণীটির শ্বাসরোধ করবে।`,
    fas: `ابزاری تیز که خون را جاری کند: چاقو، شمشیر، سنگ یا صدفِ تیزشده. پیامبر ﷺ از به کار بردن دندان (استخوان) یا ناخن (چنگال) نهی کرد؛ اینها به‌خوبی نمی‌برند و حیوان را خفه خواهند کرد.`,
    zh: `能使血液流出的锋利器具：刀、剑、磨利的石头或贝壳。先知 ﷺ 禁止使用牙齿（骨头）或指甲（爪）；这些东西切不干净，会使牲畜窒息。`,
    yue: `能令血液流出嘅鋒利器具：刀、劍、磨利嘅石頭或貝殼。先知 ﷺ 禁止使用牙齒（骨頭）或指甲（爪）；呢啲嘢切唔乾淨，會令牲畜窒息。`,
    ja: `血を流れさせる鋭利な道具。ナイフ、剣、研いだ石や貝殻など。預言者ﷺは、歯（骨）や爪（鉤爪）を用いることを禁じられた。これらはきれいに切れず、動物を窒息させてしまう。`,
    ru: `Острое орудие, от которого течёт кровь: нож, меч, заострённый камень или раковина. Пророк ﷺ запретил использовать зуб (кость) или ноготь (коготь); они не режут чисто и задушат животное.`,
    es: `Un instrumento afilado que hace fluir la sangre: un cuchillo, una espada, una piedra afilada o una concha. El Profeta ﷺ prohibió el uso de un diente (un hueso) o de una uña (una garra); estos no cortan limpiamente y estrangularían al animal.`,
    ko: `피를 흐르게 하는 날카로운 도구다. 칼, 검, 날카롭게 간 돌이나 조개껍데기 등이다. 예언자 ﷺ 께서는 이빨(뼈)이나 손톱(발톱)을 사용하는 것을 금하셨다. 이것들은 깔끔하게 베지 못하며 동물의 목을 조르게 된다.`,
    ta: `இரத்தம் ஓடச் செய்யும் கூர்மையான கருவி: கத்தி, வாள், கூர்மையாக்கப்பட்ட கல் அல்லது சிப்பி. நபி ﷺ அவர்கள் பல் (எலும்பு) அல்லது நகம் (கூர்நகம்) பயன்படுத்துவதைத் தடுத்தார்கள்; இவை சுத்தமாக வெட்டாது, விலங்கின் கழுத்தை நெரித்துவிடும்.`,
    si: `ලේ ගලා යාමට සලස්වන තියුණු උපකරණයක්: පිහියක්, කඩුවක්, තියුණු කළ ගලක් හෝ කටුවක්. නබි ﷺ තුමා දතක් (ඇටයක්) හෝ නියපොත්තක් (පංජාවක්) භාවිතා කිරීම තහනම් කළහ; මේවා පිරිසිදුව නොකපන අතර සතාගේ ගෙල සිර කරනු ඇත.`,
  },
  cond_2_source: { en: `Source: al-Bukhari 5498, Muslim 1968 (Rafi' ibn Khadij).`, ms: `Sumber: al-Bukhari 5498, Muslim 1968 (Rafi' bin Khadij).`, tur: `Kaynak: Buhârî 5498, Müslim 1968 (Râfi' b. Hadîc).`, urd: `ماخذ: بخاری ۵۴۹۸، مسلم ۱۹۶۸ (رافع بن خدیج)۔`, ben: `সূত্র: বুখারি ৫৪৯৮, মুসলিম ১৯৬৮ (রাফি' ইবনে খাদিজ)।`, fas: `منبع: بخاری ۵۴۹۸، مسلم ۱۹۶۸ (رافع بن خدیج).`, zh: `出处：布哈里 5498，穆斯林 1968（拉菲·本·赫迪只）。`, yue: `出處：布哈里 5498，穆斯林 1968（拉菲·本·赫迪只）。`, ja: `出典：ブハーリー 5498、ムスリム 1968（ラーフィー・ブン・ハディージュ）。`, ru: `Источник: аль-Бухари 5498, Муслим 1968 (Рафи' ибн Хадидж).`, es: `Fuente: al-Bukhari 5498, Muslim 1968 (Rafi' ibn Khadij).`, ko: `출처: 알부카리 5498, 무슬림 1968 (라피 이븐 카디즈).`, ta: `ஆதாரம்: அல்-புகாரி 5498, முஸ்லிம் 1968 (ராஃபிஃ இப்னு கதீஜ்).`, si: `මූලාශ්‍රය: අල්-බුඛාරි 5498, මුස්ලිම් 1968 (රාෆි' ඉබ්නු ඛදීජ්).` },
  cond_3_label: { en: `3. The cut.`, ms: `3. Potongan.`, tur: `3. Kesik.`, urd: `۳۔ کاٹنے کا عمل۔`, ben: `৩. কর্তন।`, fas: `۳. بریدن.`, zh: `3. 切割。`, yue: `3. 切割。`, ja: `3. 切ること。`, ru: `3. Разрез.`, es: `3. El corte.`, ko: `3. 절단.`, ta: `3. வெட்டு.`, si: `3. කැපුම.` },
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
