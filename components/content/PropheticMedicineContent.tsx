'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { UnderConstructionCallout } from '@/components/ui/UnderConstructionCallout';
import { useLanguage } from '@/lib/i18n/context';

const TITLE: Record<string, string> = {
  en: `Prophetic Medicine  –  Fruits, Vegetables, Plants and Healing`,
  ms: `Perubatan Nabawi  –  Buah-buahan, Sayur-sayuran, Tumbuhan dan Penyembuhan`,
  tur: `Tıbb-ı Nebevî  –  Meyveler, Sebzeler, Bitkiler ve Şifa`,
  urd: `طبِ نبوی  –  پھل، سبزیاں، پودے اور شفا`,
  ben: `নববী চিকিৎসা  –  ফল, শাকসবজি, উদ্ভিদ ও নিরাময়`,
  fas: `طب نبوی  –  میوه‌ها، سبزیجات، گیاهان و درمان`,
  zh: `圣行医学  –  果实、蔬菜、草木与疗愈`,
  yue: `聖行醫學  –  果實、蔬菜、草木與療癒`,
  ja: `預言者の医学  –  果物、野菜、植物、そして癒やし`,
  ru: `Пророческая медицина  –  фрукты, овощи, растения и исцеление`,
  es: `Medicina profética  –  frutas, verduras, plantas y sanación`,
  ko: `예언자의 의학  –  과일, 채소, 식물, 치유`,
  ta: `நபியவர்களின் மருத்துவம்  –  பழங்கள், காய்கறிகள், தாவரங்கள் மற்றும் நோய்நீக்கம்`,
  si: `නබි වෛද්‍ය ක්‍රමය  –  පලතුරු, එළවළු, ශාක සහ සුවකිරීම`,
};

const SUBTITLE: Record<string, string> = {
  en: `Every fruit, vegetable, plant and remedy the Prophet ﷺ named or used  –  their properties, the reasons behind their recommendation, and the stories of their use in his ﷺ household.`,
  ms: `Setiap buah, sayur, tumbuhan dan penawar yang Nabi ﷺ sebut atau gunakan  –  sifat-sifatnya, sebab di sebalik cadangan penggunaannya, dan kisah penggunaannya dalam rumah tangga baginda ﷺ.`,
  tur: `Hz. Peygamber'in ﷺ ismini andığı veya kullandığı her meyve, sebze, bitki ve deva  –  hususiyetleri, tavsiye edilme sebepleri ve hane-i saâdet'teki kullanım hikâyeleri.`,
  urd: `ہر پھل، سبزی، پودا اور علاج جو نبی ﷺ نے نام لیا یا استعمال کیا  –  ان کی خصوصیات، ان کی تجویز کی وجوہات، اور آپ ﷺ کے گھر میں ان کے استعمال کے قصے۔`,
  ben: `প্রতিটি ফল, শাকসবজি, উদ্ভিদ ও ঔষধ যা নবী ﷺ নাম নিয়েছেন বা ব্যবহার করেছেন  –  তাদের বৈশিষ্ট্য, তাদের সুপারিশের পিছনের কারণ, এবং তাঁর ﷺ পরিবারে তাদের ব্যবহারের কাহিনি।`,
  fas: `هر میوه، سبزی، گیاه و درمانی که پیامبر ﷺ نامش را برد یا از آن استفاده کرد  –  خواص آنها، سبب توصیه‌شان، و داستان کاربردشان در خانه‌ی پیامبر ﷺ.`,
  zh: `先知 ﷺ 所名或所用之每一果实、蔬菜、草木与疗方  –  其特性、其被推荐之原因，以及其在先知 ﷺ 家中所用之故事。`,
  yue: `先知 ﷺ 所名或所用之每一果實、蔬菜、草木同療方  –  其特性、其被推薦之原因，以及其喺先知 ﷺ 家中所用之故事。`,
  ja: `預言者 ﷺ が名を挙げ、または用いられたあらゆる果物、野菜、植物、療法  –  その性質、推奨された理由、そして預言者 ﷺ の家における使用の物語。`,
  ru: `Каждый плод, овощ, растение и средство, которое называл или использовал Пророк ﷺ  –  их свойства, причины рекомендации и рассказы об их применении в доме Пророка ﷺ.`,
  es: `Cada fruta, verdura, planta y remedio que el Profeta ﷺ nombró o usó  –  sus propiedades, las razones detrás de su recomendación, y las historias de su uso en su ﷺ hogar.`,
  ko: `예언자 ﷺ 께서 이름을 부르시거나 사용하신 모든 과일, 채소, 식물 및 치료제  –  그 성질, 그것들을 권한 이유, 그리고 그분의 가정에서의 사용 이야기.`,
  ta: `நபி ﷺ அவர்கள் பெயரிட்ட அல்லது பயன்படுத்திய ஒவ்வொரு பழம், காய்கறி, தாவரம் மற்றும் மருந்து  –  அவற்றின் பண்புகள், அவை பரிந்துரைக்கப்பட்ட காரணங்கள், மற்றும் நபி ﷺ அவர்களின் இல்லத்தில் அவற்றின் பயன்பாட்டின் கதைகள்.`,
  si: `නබි ﷺ තුමා නම් කළ හෝ භාවිතා කළ සෑම පලතුරක්, එළවළුවක්, ශාකයක් සහ ප්‍රතිකාරයක්  –  ඒවායේ ලක්‍ෂණ, ඒවා නිර්දේශ කිරීමට හේතූන්, සහ නබි ﷺ තුමන්ගේ නිවසේදී ඒවා භාවිතා කිරීමේ කථා.`,
};

const TOPIC: Record<string, string> = {
  en: `Coming: honey and its healing (Quran an-Nahl 16:69, Bukhari 5680), black seed (habbah sawda "cure for every disease except death," Bukhari 5687), olive oil, dates ('ajwa specifically, Bukhari 5768), figs, pomegranate, milk, senna (senna makki), cupping (hijamah), talbina (barley broth for grief), zamzam water, siwak (miswak), and every remedy named in the classical Tibb al-Nabawi tradition of Ibn Qayyim al-Jawziyyah and al-Suyuti. Each item will have its Quranic or hadith source, its properties, and the story behind its adoption in the Prophet's ﷺ time.`,
  ms: `Akan datang: madu dan penyembuhannya (Quran an-Nahl 16:69, Bukhari 5680), habbatussauda ("penawar bagi setiap penyakit kecuali kematian," Bukhari 5687), minyak zaitun, kurma ('ajwa khususnya, Bukhari 5768), buah tin, delima, susu, senna (senna makki), bekam (hijamah), talbina (bubur barli untuk kesedihan), air zamzam, siwak (miswak), dan setiap penawar yang dinamakan dalam tradisi klasik Tibb al-Nabawi Ibn Qayyim al-Jawziyyah dan al-Suyuti. Setiap item akan disertakan sumber al-Quran atau hadisnya, sifat-sifatnya, dan kisah di sebalik penggunaannya pada zaman Nabi ﷺ.`,
  tur: `Yakında: bal ve şifası (Kur'an Nahl 16:69, Buhârî 5680), çörek otu ("ölümden başka her derde deva," Buhârî 5687), zeytinyağı, hurma (özellikle 'Acve, Buhârî 5768), incir, nar, süt, sinameki (Mekke sinamekisi), hacamat, talbîne (keder için arpa çorbası), zemzem suyu, misvak ve İbn Kayyim el-Cevziyye ile Suyûtî'nin Tıbb-ı Nebevî geleneğinde adı geçen her deva. Her madde için Kur'anî veya hadîsî kaynak, husûsiyetleri ve Hz. Peygamber ﷺ döneminde kullanılışının hikâyesi verilecek.`,
  urd: `آنے والا: شہد اور اس کی شفا (سورۃ النحل ۱۶:۶۹، بخاری ۵۶۸۰)، حبۃ السوداء ("موت کے سوا ہر بیماری کا علاج،" بخاری ۵۶۸۷)، زیتون کا تیل، کھجور (خاص طور پر عجوہ، بخاری ۵۷۶۸)، انجیر، انار، دودھ، سنا مکی، حجامہ، تلبینہ (غم کے لیے جو کا شوربہ)، آبِ زمزم، مسواک، اور ابن قیم الجوزیہ اور سیوطی کی طب نبوی کی کلاسیکی روایت میں نامزد ہر دوا۔ ہر شے کے لیے قرآنی یا حدیث کا حوالہ، خصوصیات، اور نبی ﷺ کے زمانے میں اس کے استعمال کا قصہ دیا جائے گا۔`,
  ben: `আসছে: মধু ও তার নিরাময় (কুরআন আন-নাহল ১৬:৬৯, বুখারি ৫৬৮০), কালোজিরা ("মৃত্যু ব্যতীত সকল রোগের নিরাময়," বুখারি ৫৬৮৭), জলপাই তেল, খেজুর (বিশেষত আজওয়া, বুখারি ৫৭৬৮), ডুমুর, ডালিম, দুধ, সেনা (সেনা মাক্কি), হিজামাহ, তালবিনা (দুঃখের জন্য বার্লির ঝোল), যমযম পানি, মিসওয়াক, এবং ইবন কাইয়িম আল-জাওজিয়া ও সুয়ূতির ধ্রুপদী তিব্ব আল-নবী ঐতিহ্যে উল্লিখিত প্রতিটি নিরাময়। প্রতিটি বিষয়ের কুরআনি বা হাদিসের উৎস, বৈশিষ্ট্য, এবং নবী ﷺ-এর সময়ে এর ব্যবহারের কাহিনি দেওয়া হবে।`,
  fas: `به‌زودی: عسل و درمان آن (قرآن نحل ۱۶:۶۹، بخاری ۵۶۸۰)، سیاه‌دانه ("درمان هر درد جز مرگ،" بخاری ۵۶۸۷)، روغن زیتون، خرما (به‌ویژه عجوه، بخاری ۵۷۶۸)، انجیر، انار، شیر، سنا (سنا مکی)، حجامت، تلبینه (سوپ جو برای غم)، آب زمزم، مسواک، و هر درمانی که در سنت کلاسیک طب النبوی ابن قیم جوزیه و سیوطی نام برده شده. برای هر مورد منبع قرآنی یا حدیثی، خواص، و داستان استفاده در زمان پیامبر ﷺ ارائه خواهد شد.`,
  zh: `即将推出：蜂蜜及其疗愈（古兰经蜜蜂章 16:69，布哈里 5680）、黑籽（「除死之外，一切病之疗方」，布哈里 5687）、橄榄油、椰枣（特指「阿吉瓦」，布哈里 5768）、无花果、石榴、乳、番泻叶、拔罐（希贾迈）、大麦粥（塔尔比纳，愈忧伤之食）、渗渗泉水、洁齿木（西瓦克），以及伊本·嘎伊姆·哲乌济亚与苏尤蒂之古典《圣行医学》所载之一切疗方。每项将附以古兰或圣训之引证、其特性、以及先知 ﷺ 时代之使用故事。`,
  yue: `即將推出：蜂蜜及其療癒（古蘭經蜜蜂章 16:69，布哈里 5680）、黑籽（「除死之外，一切病之療方」，布哈里 5687）、橄欖油、椰棗（特指「阿吉瓦」，布哈里 5768）、無花果、石榴、乳、番瀉葉、拔罐（希賈邁）、大麥粥（塔爾比納，癒憂傷之食）、滲滲泉水、潔齒木（西瓦克），以及伊本·嘎伊姆·哲烏濟亞同蘇尤蒂之古典《聖行醫學》所載之一切療方。每項將附以古蘭或聖訓之引證、其特性、以及先知 ﷺ 時代之使用故事。`,
  ja: `近日追加：蜂蜜とその癒やし（クルアーン蜜蜂章 16:69、ブハーリー 5680）、黒種（「死を除く万病の治療」、ブハーリー 5687）、オリーブオイル、ナツメヤシ（特にアジュワ、ブハーリー 5768）、イチジク、ザクロ、乳、センナ（メッカセンナ）、吸角（ヒジャーマ）、タルビーナ（悲しみに効く大麦のスープ）、ザムザム水、シワーク（ミスワーク）、そしてイブン・カイイム・アル＝ジャウズィーヤおよびアッ＝スユーティーの古典的な「預言者の医学」の伝統に記されるすべての療法。それぞれについてクルアーンまたはハディースの典拠、性質、および預言者 ﷺ の時代における使用の物語を掲げる。`,
  ru: `Скоро: мёд и его исцеляющие свойства (Коран ан-Нахль 16:69, аль-Бухари 5680), чёрный тмин ("исцеление от всех болезней, кроме смерти," аль-Бухари 5687), оливковое масло, финики (в особенности сорт 'аджва, аль-Бухари 5768), инжир, гранат, молоко, сенна (сенна маккская), хиджама, тальбина (ячменный отвар от печали), вода Замзам, сивак (мисвак), и все средства, названные в классической традиции ат-Тибб ан-Набави Ибн Каййима аль-Джаузийи и ас-Суюти. Для каждого будут даны коранический или хадисный источник, свойства и рассказ об использовании во времена Пророка ﷺ.`,
  es: `Próximamente: la miel y su sanación (Corán an-Nahl 16:69, al-Bukhari 5680), la semilla negra ("cura para toda enfermedad excepto la muerte," al-Bukhari 5687), el aceite de oliva, los dátiles (especialmente 'ajwa, al-Bukhari 5768), higos, granada, leche, sen (senna makki), hijama, talbina (caldo de cebada para la tristeza), agua de Zamzam, siwak (miswak), y todo remedio nombrado en la tradición clásica de al-Tibb al-Nabawi de Ibn Qayyim al-Jawziyyah y al-Suyuti. Cada elemento tendrá su fuente coránica o hadicera, sus propiedades y la historia detrás de su adopción en tiempos del Profeta ﷺ.`,
  ko: `공개 예정: 꿀과 그 치유(꾸란 안나흘 16:69, 알부카리 5680), 흑종초("죽음 외의 모든 병에 대한 치료," 알부카리 5687), 올리브 오일, 대추야자(특히 아즈와, 알부카리 5768), 무화과, 석류, 우유, 세나(메카 세나), 부항(히자마), 탈비나(슬픔에 효험 있는 보리 죽), 잠잠수, 시왁(미스왁), 그리고 이븐 카이임 알자우지야와 알수유티의 고전 「예언자의 의학」 전통에 이름이 오른 모든 치료. 각 항목에는 꾸란이나 하디스 출처, 성질, 예언자 ﷺ 시대의 사용 이야기가 함께 실린다.`,
  ta: `விரைவில் வரும்: தேன் மற்றும் அதன் நோய்நீக்கம் (குர்ஆன் அன்-நஹ்ல் 16:69, புகாரி 5680), கருஞ்சீரகம் ("மரணத்தைத் தவிர எல்லா நோய்களுக்கும் மருந்து," புகாரி 5687), ஆலிவ் எண்ணெய், பேரீச்சம்பழம் (குறிப்பாக அஜ்வா, புகாரி 5768), அத்திப்பழம், மாதுளை, பால், சென்னா (சென்னா மக்கி), ஹிஜாமா, தல்பினா (துக்கத்திற்கான பார்லி சூப்), ஸம்ஸம் நீர், மிஸ்வாக், மற்றும் இப்னு கய்யிம் அல்-ஜவ்ஸியா மற்றும் அல்-சுயூத்தியின் செவ்வியல் திப் அல்-நபவீ மரபில் பெயரிடப்பட்ட ஒவ்வொரு மருந்தும். ஒவ்வொரு பொருளுக்கும் அதன் குர்ஆனிய அல்லது ஹதீஸ் ஆதாரம், பண்புகள், மற்றும் நபி ﷺ அவர்களின் காலத்தில் அதன் பயன்பாட்டின் கதை வழங்கப்படும்.`,
  si: `ඉදිරියේදී: මී පැණි සහ එහි සුවකිරීම (කුර්ආන් අන්-නහ්ල් 16:69, බුකාරි 5680), කළු බීජය ("මරණය හැර සියලු රෝගවලට ප්‍රතිකාරය," බුකාරි 5687), ඔලීව් තෙල්, රට ඉඳි (විශේෂයෙන් 'අජ්වා, බුකාරි 5768), අත්තික්කා, දෙළුම්, කිරි, සෙන්නා (සෙන්නා මක්කි), හිජාමා, තල්බිනා (ශෝකයට යවපිටි කැඳ), සම්සම් ජලය, සිවාක් (මිස්වාක්), සහ ඉබ්න් කය්‍යිම් අල්-ජව්සිය්‍යා සහ අල්-සුයූතී ගේ සම්භාව්‍ය ටිබ් අල්-නබවී සම්ප්‍රදායේ නම් සඳහන් වන සෑම ප්‍රතිකාරයක්ම. එක් එක් අයිතමයට කුර්ආනීය හෝ හදීස් මූලාශ්‍රය, ලක්‍ෂණ, සහ නබි ﷺ තුමන්ගේ කාලයේ එය භාවිතා කිරීමේ කථාව ලබා දෙනු ඇත.`,
};

export function PropheticMedicineContent() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="الطِّبُّ النَّبَوِيّ"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <UnderConstructionCallout topic={TOPIC} />
      </div>
    </>
  );
}
