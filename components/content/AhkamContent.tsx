'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { UnderConstructionCallout } from '@/components/ui/UnderConstructionCallout';
import { useLanguage } from '@/lib/i18n/context';

const TITLE: Record<string, string> = {
  en: `The Five Ahkam  –  Halal, Haram, Makruh, Wajib, Mustahabb, Mubah`,
  ms: `Lima Ahkam  –  Halal, Haram, Makruh, Wajib, Mustahabb, Mubah`,
  tur: `Beş Hüküm  –  Helâl, Harâm, Mekrûh, Vâcib, Müstehab, Mübâh`,
  urd: `پانچ احکام  –  حلال، حرام، مکروہ، واجب، مستحب، مباح`,
  ben: `পাঁচটি আহকাম  –  হালাল, হারাম, মাকরুহ, ওয়াজিব, মুস্তাহাব, মুবাহ`,
  fas: `پنج حکم  –  حلال، حرام، مکروه، واجب، مستحب، مباح`,
  zh: `五定断  –  合法、禁止、可憎、必尽、可嘉、允许`,
  yue: `五定斷  –  合法、禁止、可憎、必盡、可嘉、允許`,
  ja: `五つの法的判断  –  ハラール、ハラーム、マクルーフ、ワージブ、ムスタハッブ、ムバーフ`,
  ru: `Пять ахкам  –  халяль, харам, макрух, ваджиб, мустахабб, мубах`,
  es: `Los cinco ahkam  –  halal, haram, makruh, wajib, mustahabb, mubah`,
  ko: `다섯 아흐캄  –  할랄, 하람, 마크루흐, 와지브, 무스타합, 무바흐`,
  ta: `ஐந்து அஹ்காம்  –  ஹலால், ஹராம், மக்ரூஹ், வாஜிப், முஸ்தஹப், முபாஹ்`,
  si: `පඤ්ච අහ්කාම්  –  හලාල්, හරාම්, මක්‍රූහ්, වාජිබ්, මුස්තහබ්බ්, මුබාහ්`,
};

const SUBTITLE: Record<string, string> = {
  en: `The five categories of legal ruling in Islam  –  what each means, the classical scholarly definitions, examples across worship and daily life, and how each was derived from Quran and Sunnah.`,
  ms: `Lima kategori hukum syariah dalam Islam  –  makna setiap satu, definisi ulama klasik, contoh dalam ibadah dan kehidupan seharian, dan bagaimana setiap diambil dari al-Quran dan Sunnah.`,
  tur: `İslam'da hukukî hükmün beş kategorisi  –  her birinin manası, klasik âlimlerin tarifleri, ibadetten günlük hayata örnekler ve her birinin Kur'an ve Sünnetten nasıl çıkarıldığı.`,
  urd: `اسلام میں شرعی حکم کی پانچ اقسام  –  ہر ایک کا معنیٰ، کلاسیکی علماء کی تعریفیں، عبادت اور روزمرہ زندگی سے مثالیں، اور ہر ایک کو قرآن و سنت سے کیسے اخذ کیا گیا۔`,
  ben: `ইসলামে শরীয়াহ বিধানের পাঁচটি বিভাগ  –  প্রতিটির অর্থ, ধ্রুপদী আলিমদের সংজ্ঞা, ইবাদত ও দৈনন্দিন জীবনের উদাহরণ, এবং প্রতিটি কীভাবে কুরআন ও সুন্নাহ থেকে গৃহীত।`,
  fas: `پنج دسته‌ی حکم شرعی در اسلام  –  معنای هر یک، تعریف علمای کلاسیک، نمونه‌هایی از عبادت و زندگی روزمره، و چگونگی استخراج هر یک از قرآن و سنت.`,
  zh: `伊斯兰教法定断之五类  –  各之意义、古典学者之定义、涵盖礼拜与日用之实例，以及各自如何自古兰与圣行导出。`,
  yue: `伊斯蘭教法定斷之五類  –  各之意義、古典學者之定義、涵蓋禮拜與日用之實例，以及各自如何自古蘭與聖行導出。`,
  ja: `イスラームの法的判断の五つの範疇  –  それぞれの意味、古典学者の定義、崇拝から日常生活までの具体例、そしてそれぞれがクルアーンとスンナからどのように導かれたか。`,
  ru: `Пять категорий правового заключения в Исламе  –  что означает каждое, определения классических учёных, примеры в поклонении и повседневной жизни, а также как каждое выведено из Корана и Сунны.`,
  es: `Las cinco categorías del fallo jurídico en el islam  –  qué significa cada una, las definiciones clásicas de los sabios, ejemplos en la adoración y la vida cotidiana, y cómo cada una se derivó del Corán y la Sunna.`,
  ko: `이슬람 법적 판단의 다섯 범주  –  각각의 뜻, 고전 학자들의 정의, 예배와 일상생활의 예시, 그리고 각각이 꾸란과 순나로부터 어떻게 도출되었는지.`,
  ta: `இஸ்லாத்தில் சட்டப்பூர்வ தீர்ப்பின் ஐந்து பிரிவுகள்  –  ஒவ்வொன்றின் அர்த்தம், செவ்வியல் அறிஞர்களின் வரையறைகள், வணக்கம் மற்றும் அன்றாட வாழ்க்கையின் எடுத்துக்காட்டுகள், மற்றும் ஒவ்வொன்றும் குர்ஆனிலிருந்தும் ஸுன்னாவிலிருந்தும் எப்படி பெறப்பட்டது.`,
  si: `ඉස්ලාමයේ නීතිමය තීරණයේ කාණ්ඩ පහ  –  ඒ එක් එක්කම අර්ථය, සම්භාව්‍ය විද්වතුන්ගේ අර්ථ දැක්වීම්, නමස්කාරය සහ දෛනික ජීවිතයෙන් උදාහරණ, සහ ඒ එක් එක්කම කුර්ආනයෙන් සහ සුන්නාවෙන් ලබාගත් ආකාරය.`,
};

const TOPIC: Record<string, string> = {
  en: `Coming: Fard/Wajib (obligatory  –  omitting is sinful, doing is rewarded, e.g. the five daily prayers); Mustahabb/Mandub/Sunnah (recommended  –  doing is rewarded, omitting is not sinful, e.g. rawatib sunna prayers); Mubah (permitted  –  neither rewarded nor punished, e.g. choosing food); Makruh (disliked  –  omitting is rewarded, doing is not sinful, e.g. speaking while urinating); Haram (forbidden  –  doing is sinful, omitting is rewarded, e.g. lying, theft). Also: subcategories (fard 'ayn vs fard kifayah; makruh tanzihi vs makruh tahrimi in the Hanafi school), the classical usul al-fiqh sources of derivation (Quran, Sunnah, ijma', qiyas), examples in worship (salat, sawm, zakat), family (marriage, divorce), business (contracts, riba), and personal conduct (dress, food, speech).`,
  ms: `Akan datang: Fardhu/Wajib (wajib  –  meninggalkan berdosa, melakukan berpahala, cth. lima solat fardhu); Mustahabb/Mandub/Sunnah (digalakkan  –  melakukan berpahala, meninggalkan tidak berdosa, cth. solat rawatib sunnah); Mubah (harus  –  tidak berpahala mahupun berdosa, cth. memilih makanan); Makruh (dibenci  –  meninggalkan berpahala, melakukan tidak berdosa, cth. bercakap semasa buang air kecil); Haram (dilarang  –  melakukan berdosa, meninggalkan berpahala, cth. berbohong, mencuri). Juga: subkategori (fardhu 'ain vs fardhu kifayah; makruh tanzihi vs makruh tahrimi dalam mazhab Hanafi), sumber pengambilan hukum usul al-fiqh klasik (al-Quran, Sunnah, ijmak, qiyas), contoh dalam ibadah (solat, puasa, zakat), keluarga (nikah, cerai), perniagaan (kontrak, riba), dan tingkah laku peribadi (pakaian, makanan, ucapan).`,
  tur: `Yakında: Farz/Vâcib (yapılması gerekli  –  terki günah, yapılması sevap, örn. beş vakit namaz); Müstehab/Mendûb/Sünnet (tavsiye edilen  –  yapılması sevap, terki günah değil, örn. revâtib sünnetler); Mübâh (câiz  –  ne sevap ne ceza, örn. yemek seçme); Mekrûh (hoş görülmeyen  –  terki sevap, yapılması günah değil, örn. bevlederken konuşmak); Harâm (yasak  –  yapılması günah, terki sevap, örn. yalan, hırsızlık). Ayrıca: alt kategoriler (farz-ı ayn vs farz-ı kifâye; Hanefî'de mekrûh-ı tenzîhî vs mekrûh-ı tahrîmî), klasik usûl-ı fıkıh delilleri (Kur'an, Sünnet, icmâ, kıyâs), ibadetlerdeki örnekler (namaz, oruç, zekât), aile (nikâh, boşanma), ticaret (akitler, ribâ) ve şahsî ahlâk (giyim, yemek, söz) örnekleri.`,
  urd: `آنے والا: فرض/واجب (لازم  –  ترک کرنے سے گناہ، کرنے سے ثواب، مثلاً پانچ وقت کی نمازیں)؛ مستحب/مندوب/سنت (مطلوب  –  کرنے سے ثواب، ترک کرنے میں گناہ نہیں، مثلاً سنن رواتب)؛ مباح (جائز  –  نہ ثواب نہ گناہ، مثلاً کھانے کا انتخاب)؛ مکروہ (ناپسند  –  ترک کرنے سے ثواب، کرنے سے گناہ نہیں، مثلاً پیشاب کرتے وقت بولنا)؛ حرام (ممنوع  –  کرنے سے گناہ، ترک کرنے سے ثواب، مثلاً جھوٹ، چوری)۔ نیز: ذیلی زمرے (فرض عین اور فرض کفایہ؛ حنفی مذہب میں مکروہ تنزیہی اور مکروہ تحریمی)، اصولِ فقہ کے مأخذ (قرآن، سنت، اجماع، قیاس)، عبادت میں مثالیں (نماز، روزہ، زکات)، خاندان (نکاح، طلاق)، تجارت (معاملات، سود)، اور ذاتی معاملات (لباس، خوراک، کلام)۔`,
  ben: `আসছে: ফরয/ওয়াজিব (অবশ্য কর্তব্য  –  বাদ দিলে গুনাহ, করলে সওয়াব, যেমন পাঁচ ওয়াক্ত নামাজ); মুস্তাহাব/মান্দুব/সুন্নাহ (সুপারিশকৃত  –  করলে সওয়াব, বাদ দিলে গুনাহ নয়, যেমন রাওয়াতিব সুন্নাহ); মুবাহ (অনুমোদিত  –  সওয়াবও নয় গুনাহও নয়, যেমন খাবার বাছাই); মাকরুহ (অপ্রীতিকর  –  বাদ দিলে সওয়াব, করলে গুনাহ নয়, যেমন প্রস্রাবের সময় কথা); হারাম (নিষিদ্ধ  –  করলে গুনাহ, বাদ দিলে সওয়াব, যেমন মিথ্যা, চুরি)। এছাড়া: উপ-বিভাগ (ফরযে আইন বনাম ফরযে কিফায়া; হানাফিতে মাকরুহ তানযিহী বনাম মাকরুহ তাহরিমী), ধ্রুপদী উসূল আল-ফিকহের উৎস (কুরআন, সুন্নাহ, ইজমা, কিয়াস), ইবাদতের উদাহরণ (সালাত, সিয়াম, যাকাত), পরিবার (বিবাহ, তালাক), ব্যবসা (চুক্তি, রিবা), এবং ব্যক্তিগত আচরণ (পোশাক, খাবার, কথা)।`,
  fas: `به‌زودی: فرض/واجب (لازم  –  ترک آن گناه، انجامش ثواب، مانند نمازهای پنج‌گانه)؛ مستحب/مندوب/سنت (مطلوب  –  انجامش ثواب، ترکش گناه نیست، مانند نوافل راتبه)؛ مباح (روا  –  نه ثواب دارد نه گناه، مانند انتخاب غذا)؛ مکروه (ناپسند  –  ترکش ثواب، انجامش گناه نیست، مانند سخن گفتن هنگام قضای حاجت)؛ حرام (ممنوع  –  انجامش گناه، ترکش ثواب، مانند دروغ و دزدی). همچنین: زیرشاخه‌ها (فرض عینی و فرض کفایی؛ در حنفی: مکروه تنزیهی و مکروه تحریمی)، منابع کلاسیک اصول فقه (قرآن، سنت، اجماع، قیاس)، نمونه‌ها در عبادات (نماز، روزه، زکات)، خانواده (نکاح، طلاق)، معاملات (عقود، ربا)، و رفتار شخصی (پوشش، خوراک، سخن).`,
  zh: `即将推出：主命／义务（法尔德／瓦直卜  –  舍之为罪，为之得赏，例：每日五番礼拜）；可嘉（穆斯泰哈布／曼杜布／圣行  –  为之得赏，舍之无罪，例：主命之附属圣行）；允许（穆巴哈  –  既不得赏亦不受罚，例：择食）；可憎（马克鲁赫  –  舍之得赏，为之无罪，例：溲便时言语）；禁止（哈拉姆  –  为之为罪，舍之得赏，例：说谎、偷窃）。另及：细类（法尔德·艾因与法尔德·基法耶；哈奈斐派：马克鲁赫·丹济希与马克鲁赫·塔赫里米）、经典教法学（乌苏勒法尔）导出之依据（古兰、圣行、公议、类比）、拜功之例（礼拜、斋戒、天课）、家庭（婚姻、离异）、商业（契约、利息）、个人举止（衣饰、饮食、言语）之例。`,
  yue: `即將推出：主命／義務（法爾德／瓦直卜  –  舍之為罪，為之得賞，例：每日五番禮拜）；可嘉（穆斯泰哈布／曼杜布／聖行  –  為之得賞，舍之無罪，例：主命之附屬聖行）；允許（穆巴哈  –  既不得賞亦不受罰，例：擇食）；可憎（馬克魯赫  –  舍之得賞，為之無罪，例：溲便時言語）；禁止（哈拉姆  –  為之為罪，舍之得賞，例：說謊、偷竊）。另及：細類（法爾德·艾因同法爾德·基法耶；哈奈斐派：馬克魯赫·丹濟希同馬克魯赫·塔赫里米）、經典教法學（烏蘇勒法爾）導出之依據（古蘭、聖行、公議、類比）、拜功之例（禮拜、齋戒、天課）、家庭（婚姻、離異）、商業（契約、利息）、個人舉止（衣飾、飲食、言語）之例。`,
  ja: `近日追加：ファルド／ワージブ（義務  –  怠れば罪、行えば報奨、例：五時の礼拝）、ムスタハッブ／マンドゥーブ／スンナ（推奨  –  行えば報奨、怠っても罪ではない、例：ラワーティブ）、ムバーフ（許容  –  報奨も罰もない、例：食の選択）、マクルーフ（好ましくない  –  控えれば報奨、行っても罪ではない、例：用便中の会話）、ハラーム（禁止  –  行えば罪、控えれば報奨、例：嘘、盗み）。加えて、細分類（ファルド・アインとファルド・キファーヤ、ハナフィー派のマクルーフ・タンズィーヒーとマクルーフ・タフリーミー）、古典的な法源論（クルアーン、スンナ、イジュマー、キヤース）、崇拝の例（礼拝、斎戒、ザカート）、家族（婚姻、離婚）、商取引（契約、利息）、個人の行い（服装、食、言葉）の例。`,
  ru: `Скоро: фард/ваджиб (обязательное  –  оставление грех, исполнение вознаграждается, напр. пять ежедневных молитв); мустахабб/мандуб/сунна (рекомендованное  –  исполнение вознаграждается, оставление не грешно, напр. равaтиб-сунны); мубах (дозволенное  –  ни вознаграждается ни наказывается, напр. выбор пищи); макрух (нежелательное  –  оставление вознаграждается, исполнение не грешно, напр. разговоры при отправлении нужды); харам (запретное  –  исполнение грешно, оставление вознаграждается, напр. ложь, воровство). Также: подкатегории (фард 'айн vs фард кифайя; в ханафитском мазхабе  –  макрух танзихи vs макрух тахрими), классические источники усуль аль-фикх (Коран, Сунна, иджма', кийас), примеры из поклонения (салат, савм, закят), семьи (никах, талак), торговли (контракты, риба) и личного поведения (одежда, еда, речь).`,
  es: `Próximamente: Fard/Wajib (obligatorio  –  omitirlo es pecado, hacerlo es recompensado, p.ej. las cinco oraciones diarias); Mustahabb/Mandub/Sunna (recomendado  –  hacerlo es recompensado, omitirlo no es pecado, p.ej. las rawatib); Mubah (permitido  –  ni recompensa ni castigo, p.ej. elegir la comida); Makruh (reprobado  –  omitirlo es recompensado, hacerlo no es pecado, p.ej. hablar al hacer aguas); Haram (prohibido  –  hacerlo es pecado, omitirlo es recompensado, p.ej. mentir, robar). Además: subcategorías (fard 'ayn vs fard kifayah; en la escuela hanafí: makruh tanzihi vs makruh tahrimi), fuentes clásicas del usul al-fiqh (Corán, Sunna, iyma', qiyas), ejemplos en la adoración (salat, sawm, zakat), la familia (matrimonio, divorcio), los negocios (contratos, riba) y la conducta personal (vestido, comida, palabra).`,
  ko: `공개 예정: 파르드/와지브(의무  –  하지 않으면 죄, 하면 보상, 예: 하루 다섯 예배); 무스타합/만두브/순나(권장  –  하면 보상, 하지 않아도 죄 아님, 예: 라와티브 순나 예배); 무바흐(허용  –  보상도 처벌도 없음, 예: 음식 선택); 마크루흐(꺼려짐  –  하지 않으면 보상, 해도 죄 아님, 예: 용변 중 대화); 하람(금지  –  하면 죄, 하지 않으면 보상, 예: 거짓말, 도둑질). 또한 하위 분류(파르드 아인 vs 파르드 키파야; 하나피 학파의 마크루흐 탄지히 vs 마크루흐 타흐리미), 고전 우술 알피크흐의 도출 원천(꾸란, 순나, 이즈마, 키야스), 예배(살라, 사움, 자카)의 예, 가족(니카, 탈락), 상거래(계약, 리바), 개인 행실(의복, 음식, 말)에서의 예.`,
  ta: `விரைவில் வரும்: ஃபர்ளு/வாஜிப் (கடமையானது  –  விடுவது பாவம், செய்வது நற்கூலி, எ.கா. ஐந்து வேளை தொழுகைகள்); முஸ்தஹப்/மன்தூப்/ஸுன்னா (பரிந்துரைக்கப்பட்டது  –  செய்வது நற்கூலி, விடுவது பாவம் அல்ல, எ.கா. ரவாத்திப் ஸுன்னாக்கள்); முபாஹ் (அனுமதிக்கப்பட்டது  –  நற்கூலியோ தண்டனையோ இல்லை, எ.கா. உணவு தேர்வு); மக்ரூஹ் (வெறுக்கப்பட்டது  –  விடுவது நற்கூலி, செய்வது பாவம் அல்ல, எ.கா. சிறுநீர் கழிக்கும்போது பேசுதல்); ஹராம் (தடைசெய்யப்பட்டது  –  செய்வது பாவம், விடுவது நற்கூலி, எ.கா. பொய், திருட்டு). மேலும்: துணைப் பிரிவுகள் (ஃபர்ளு ஐன் மற்றும் ஃபர்ளு கிஃபாயா; ஹனஃபியில் மக்ரூஹ் தன்ஸிஹி மற்றும் மக்ரூஹ் தஹ்ரிமி), செவ்வியல் உசூல் அல்-ஃபிக்ஹ் ஆதாரங்கள் (குர்ஆன், ஸுன்னா, இஜ்மா, கியாஸ்), வணக்கத்தின் எடுத்துக்காட்டுகள் (தொழுகை, நோன்பு, ஸகாத்), குடும்பம் (திருமணம், விவாகரத்து), வணிகம் (ஒப்பந்தம், ரிபா), தனிப்பட்ட நடத்தை (ஆடை, உணவு, பேச்சு).`,
  si: `ඉදිරියේදී: ෆර්‍ද්/වාජිබ් (අනිවාර්ය  –  නොකිරීම පාපයයි, කිරීම ත්‍යාගයයි, උදා: දිනකට පස්කාලක නමස්කාරය); මුස්තහබ්බ්/මන්දූබ්/සුන්නා (නිර්දේශිත  –  කිරීම ත්‍යාගයයි, නොකිරීම පාපයක් නොවේ, උදා: රවාතිබ් සුන්නා); මුබාහ් (අනුමැතිය  –  ත්‍යාගයක් හෝ දඬුවමක් නොවේ, උදා: ආහාර තෝරාගැනීම); මක්‍රූහ් (ප්‍රතිකූල  –  නොකිරීම ත්‍යාගයයි, කිරීම පාපයක් නොවේ, උදා: මුත්‍රා කරන විට කථා කිරීම); හරාම් (තහනම්  –  කිරීම පාපයයි, නොකිරීම ත්‍යාගයයි, උදා: බොරු, සොරකම්). තවද: උප-කාණ්ඩ (ෆර්‍ද් අයින් සහ ෆර්‍ද් කිෆායා; හනෆි මධ්හබයේ මක්‍රූහ් තන්සීහි සහ මක්‍රූහ් තහ්‍රීමී), සම්භාව්‍ය උසූල් අල්-ෆික්හ්ගේ මූලාශ්‍ර (කුර්ආන්, සුන්නා, ඉජ්මා, කියාස්), නමස්කාරයේ උදාහරණ (සලාත්, සව්ම්, සකාත්), පවුල (විවාහ, දික්කසාද), වෙළඳාම (ගිවිසුම්, රිබා), සහ පෞද්ගලික හැසිරීම (ඇඳුම්, ආහාර, කථා).`,
};

export function AhkamContent() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="الأَحْكَامُ الخَمْسَة"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <UnderConstructionCallout topic={TOPIC} />
      </div>
    </>
  );
}
