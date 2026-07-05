'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { UnderConstructionCallout } from '@/components/ui/UnderConstructionCallout';
import { useLanguage } from '@/lib/i18n/context';

const TITLE: Record<string, string> = {
  en: `Adab al-Khala  –  The Etiquettes of the Toilet`,
  ms: `Adab al-Khala  –  Adab Tandas`,
  tur: `Âdâbü'l-Halâ  –  Tuvalet Âdâbı`,
  urd: `آدابِ خلا  –  بیت الخلاء کے آداب`,
  ben: `আদাব আল-খালা  –  শৌচাগারের আদব`,
  fas: `آداب خلا  –  آداب دستشویی`,
  zh: `厕所之礼节  –  「阿达布·哈拉」`,
  yue: `廁所之禮節  –  「阿達布·哈拉」`,
  ja: `トイレの作法  –  アダーブ・アル＝ハラー`,
  ru: `Этикет отхожего места  –  Адаб аль-Хала`,
  es: `Adab al-Khala  –  la etiqueta del retrete`,
  ko: `측간의 예절  –  아다브 알칼라`,
  ta: `ஆதாப் அல்-கலா  –  கழிப்பறை நடத்தை`,
  si: `අදාබ් අල්-ඛලා  –  වැසිකිලියේ අදාබ්`,
};

const SUBTITLE: Record<string, string> = {
  en: `The Sunnah manners of relieving oneself  –  what to say, which foot to enter with, what to avoid, and the reasons behind each ruling.`,
  ms: `Adab Sunnah membuang air  –  apa yang perlu diucapkan, dengan kaki mana masuk, apa yang perlu dielakkan, dan sebab di sebalik setiap hukum.`,
  tur: `Def-i hâcet için Sünnet âdâbı  –  ne söylenir, hangi ayakla girilir, nelerden kaçınılır ve her hükmün sebebi.`,
  urd: `قضائے حاجت کے سنت آداب  –  کیا کہنا ہے، کس پاؤں سے داخل ہونا ہے، کس چیز سے بچنا ہے، اور ہر حکم کے پیچھے سبب۔`,
  ben: `প্রস্রাব-পায়খানার সুন্নাহ আদব  –  কী বলতে হবে, কোন পা দিয়ে ঢুকতে হবে, কী এড়াতে হবে, এবং প্রতিটি বিধানের পিছনের কারণ।`,
  fas: `آداب سنت قضای حاجت  –  چه بگوییم، با کدام پا داخل شویم، چه چیزی را پرهیز کنیم، و سبب پشت هر حکم.`,
  zh: `解手之圣行礼节  –  应念何言、以何足入、当避何事、每条判决之背后原因。`,
  yue: `解手之聖行禮節  –  應念何言、以何足入、當避何事、每條判決背後嘅原因。`,
  ja: `用便のスンナに則った作法  –  何を唱えるか、どちらの足で入るか、避けるべきこと、それぞれの規定の理由。`,
  ru: `Сунна этикета отправления нужды  –  что говорить, какой ногой входить, чего избегать, и причины каждого предписания.`,
  es: `Los modales sunna al hacer las necesidades  –  qué decir, con qué pie entrar, qué evitar, y las razones detrás de cada regla.`,
  ko: `용변의 순나 예절  –  무엇을 낭송하는지, 어느 발로 들어가는지, 무엇을 피해야 하는지, 각 규정의 이유.`,
  ta: `இயற்கை உபாதைக்கான ஸுன்னா ஆதாபுகள்  –  என்ன சொல்ல வேண்டும், எந்த காலால் நுழைய வேண்டும், எதைத் தவிர்க்க வேண்டும், மற்றும் ஒவ்வொரு விதிக்கும் பின்னாலுள்ள காரணங்கள்.`,
  si: `අවශ්‍යතා පිරිසිදු කිරීමේ සුන්නා අදාබ්  –  මොනවා කිව යුතුද, කුමන පාදයෙන් ඇතුළු විය යුතුද, කුමන දේ වළක්වා ගත යුතුද, සහ සෑම නීතියක්ම පිටුපස ඇති හේතූන්.`,
};

const TOPIC: Record<string, string> = {
  en: `Coming: the two du'as before entering (Allahumma inni a'udhu bika min al-khubthi wal-khaba'ith  –  Bukhari 142) and after leaving (Ghufranaka  –  Abu Dawud 30); which foot to enter (left) and leave with (right); why one must not face nor turn one's back to the qiblah while relieving oneself; forbidden places (Bukhari 173  –  under fruit trees, in stagnant water, on paths); the ruling on speaking, carrying anything with Allah's name, using the right hand for cleansing; how the Sunnah of istinja and istijmar shaped classical fiqh across the four schools; and the broader wisdom behind these etiquettes  –  cleanliness, dignity, and the constant remembrance of Allah even in private moments.`,
  ms: `Akan datang: dua doa sebelum masuk (Allahumma inni a'udhu bika min al-khubthi wal-khaba'ith  –  Bukhari 142) dan selepas keluar (Ghufranaka  –  Abu Dawud 30); kaki mana masuk (kiri) dan keluar (kanan); mengapa tidak boleh mengadap atau membelakangi kiblat semasa membuang air; tempat-tempat larangan (Bukhari 173  –  di bawah pokok buah, di dalam air bertakung, di atas jalan); hukum bercakap, membawa apa-apa yang bertulis nama Allah, menggunakan tangan kanan untuk membersihkan diri; bagaimana Sunnah istinja dan istijmar membentuk fiqh klasik dalam empat mazhab; dan hikmah luas di sebalik adab ini  –  kebersihan, kehormatan, dan pengingatan Allah walaupun dalam saat-saat peribadi.`,
  tur: `Yakında: girmeden önceki iki duâ (Allāhümme innî e'ûzü bike mine'l-hubsi ve'l-habâis  –  Buhârî 142) ve çıkışta okunacak (Ğufrâneke  –  Ebû Dâvud 30); hangi ayakla girilir (sol) ve çıkılır (sağ); kıbleye önden ya da arkadan durmama; yasak yerler (Buhârî 173  –  meyve ağaçları altı, durgun su, yol üstü); konuşma, Allah'ın adı yazılı bir şey taşıma, sağ el ile temizlik yapma hükümleri; istincâ ve istincmâr Sünneti'nin dört mezhep genelinde klasik fıkha etkisi; ve bu âdâbın ardındaki geniş hikmet  –  temizlik, vakar ve mahrem anlarda dahi Allah'ı zikretmek.`,
  urd: `آنے والا: داخل ہونے سے پہلے کی دو دعائیں (اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ  –  بخاری ۱۴۲) اور نکلنے کے بعد (غُفْرَانَكَ  –  ابو داود ۳۰)؛ کس پاؤں سے داخل ہونا (بائیں) اور نکلنا (دائیں)؛ قضائے حاجت میں قبلہ کی طرف رخ یا پیٹھ کیوں نہیں کر سکتے؛ ممنوعہ مقامات (بخاری ۱۷۳  –  پھل دار درختوں کے نیچے، رکے پانی میں، راستوں پر)؛ گفتگو کا حکم، اللہ کے نام والی کوئی چیز لے جانا، صفائی کے لیے دائیں ہاتھ کا استعمال؛ استنجا اور استجمار کی سنت نے چار مذاہب میں کلاسیکی فقہ کو کیسے شکل دی؛ اور ان آداب کے پیچھے وسیع حکمت  –  صفائی، وقار، اور ذاتی لمحات میں بھی اللہ کا ذکر۔`,
  ben: `আসছে: প্রবেশের পূর্বের দুটি দোয়া (আল্লাহুম্মা ইন্নি আ'উযু বিকা মিন আল-খুবথি ওয়াল-খাবাইথ  –  বুখারি ১৪২) এবং বেরিয়ে আসার পরের (গুফরানাকা  –  আবু দাউদ ৩০); কোন পা দিয়ে ঢুকতে (বাম) ও বের হতে (ডান); প্রস্রাব-পায়খানার সময় কেন কিবলার দিকে মুখ বা পিঠ ফেরানো যাবে না; নিষিদ্ধ স্থান (বুখারি ১৭৩  –  ফলদায়ক গাছের নিচে, স্থির পানিতে, পথে); কথা বলা, আল্লাহর নামযুক্ত কিছু বহন, ডান হাত দিয়ে পরিষ্কার করার বিধান; ইস্তিনজা ও ইস্তিজমারের সুন্নাহ কীভাবে চার মাযহাব জুড়ে ধ্রুপদী ফিকহ গঠন করেছে; এবং এই আদবগুলির পিছনের বিস্তৃত হিকমাহ  –  পরিচ্ছন্নতা, মর্যাদা এবং ব্যক্তিগত মুহূর্তেও আল্লাহকে স্মরণ।`,
  fas: `به‌زودی: دو دعای پیش از ورود (اللهم إنی أعوذ بک من الخبث والخبائث  –  بخاری ۱۴۲) و پس از خروج (غفرانک  –  ابوداود ۳۰)؛ با کدام پا وارد شویم (چپ) و خارج شویم (راست)؛ چرا هنگام قضای حاجت نباید رو یا پشت به قبله باشیم؛ مکان‌های ممنوع (بخاری ۱۷۳  –  زیر درختان میوه، در آب راکد، در راه‌ها)؛ حکم سخن گفتن، همراه داشتن هر چه نام خدا بر آن باشد، استفاده از دست راست برای پاکیزگی؛ چگونه سنت استنجا و استجمار فقه کلاسیک را در چهار مذهب شکل داد؛ و حکمت گسترده‌ی این آداب  –  پاکیزگی، وقار، و یاد خدا حتی در لحظات خصوصی.`,
  zh: `即将推出：入前两祷（安拉呼曼因尼阿吾祖比卡敏勒胡卜西瓦勒哈巴伊什  –  布哈里 142）与出后一祷（乌夫拉纳卡  –  艾布·达乌德 30）；以何足入（左）以何足出（右）；何以解手时不可面向或背向基卜莱；禁地（布哈里 173  –  果树之下、静水之中、道途之上）；关于言语、携带凡有安拉之名之物、以右手洁净之判决；净下（伊斯替奈）与土洁（伊斯替吉马尔）之圣行如何塑造四大教法学派之古典教法；以及此等礼节背后之广阔智慧  –  洁净、尊严、以及在私密之时亦不忘念安拉。`,
  yue: `即將推出：入前兩禱（安拉呼曼因尼阿吾祖比卡敏勒胡卜西瓦勒哈巴伊什  –  布哈里 142）與出後一禱（烏夫拉納卡  –  艾布·達烏德 30）；以何足入（左）以何足出（右）；何以解手時不可面向或背向基卜萊；禁地（布哈里 173  –  果樹之下、靜水之中、道途之上）；關於言語、攜帶凡有安拉之名之物、以右手潔淨之判決；淨下（伊斯替奈）與土潔（伊斯替吉馬爾）之聖行如何塑造四大教法學派之古典教法；以及此等禮節背後之廣闊智慧  –  潔淨、尊嚴、以及在私密之時亦不忘念安拉。`,
  ja: `近日追加：入る前の二つの祈願（アッラーフンマ・インニー・アウーズビカ・ミナル＝フブシ・ワル＝ハバーイス  –  ブハーリー 142）と出た後の祈願（グフラーナカ  –  アブー・ダーウード 30）、どちらの足で入り（左）出るか（右）、用便中にキブラに向かない・背にしない理由、禁じられた場所（ブハーリー 173  –  果樹の下、よどんだ水、道の上）、話すこと、アッラーの御名の付いた物を携帯すること、清めに右手を用いることの規定、イスティンジャーとイスティジュマールのスンナが四法学派における古典的フィクフをいかに形成したか、これらの作法の背後にある広い智慧  –  清潔、尊厳、私的な瞬間においてもアッラーを想起すること。`,
  ru: `Скоро: две дуа перед входом (Аллахумма инни а'узу би-Ка мин аль-хубси ва-ль-хаба'ис  –  аль-Бухари 142) и после выхода (Гуфранака  –  Абу Дауд 30); какой ногой входить (левой) и выходить (правой); почему при отправлении нужды нельзя обращаться лицом или спиной к кибле; запрещённые места (аль-Бухари 173  –  под плодовыми деревьями, в стоячей воде, на дорогах); правила говорения, ношения чего-либо с именем Аллаха, использования правой руки для очищения; как Сунна истинджа и истиджмара сформировала классический фикх в четырёх мазхабах; и более широкая мудрость за этими правилами  –  чистота, достоинство и постоянное поминание Аллаха даже в частные мгновения.`,
  es: `Próximamente: las dos du'as antes de entrar (Al-lahumma inni a'udhu bika min al-khubthi wal-khaba'ith  –  al-Bukhari 142) y después de salir (Ghufranaka  –  Abu Dawud 30); con qué pie entrar (izquierdo) y salir (derecho); por qué no se puede estar de cara ni de espaldas a la qiblah al hacer las necesidades; los lugares prohibidos (al-Bukhari 173  –  bajo árboles frutales, en agua estancada, en caminos); el fallo sobre hablar, llevar algo con el nombre de Al-lah, usar la mano derecha para limpiarse; cómo la Sunna del istinja y el istijmar dio forma al fiqh clásico en las cuatro escuelas; y la sabiduría más amplia detrás de estas etiquetas  –  limpieza, dignidad y el recuerdo constante de Al-lah incluso en los momentos íntimos.`,
  ko: `공개 예정: 들어가기 전 두 두아(알라훔마 인니 아우두 비카 민 알쿠브시 왈카바이스  –  알부카리 142)와 나온 후의 두아(구프라나카  –  아부 다우드 30); 어느 발로 들어가고(왼발) 나오는지(오른발); 용변 중에 키블라를 향하거나 등지지 못하는 이유; 금지된 장소(알부카리 173  –  과일나무 아래, 고인 물속, 길 위); 대화, 알라의 이름이 있는 물건 소지, 오른손 사용에 관한 규정; 이스틴자와 이스티즈마르의 순나가 네 법학파에서 고전 피크흐를 어떻게 형성했는지; 그리고 이러한 예절 배후의 넓은 지혜  –  청결, 존엄, 사적인 순간에도 알라를 기억함.`,
  ta: `விரைவில் வரும்: நுழைவதற்கு முன் இரு பிரார்த்தனைகள் (அல்லாஹும்ம இன்னி அஊது பிக்க மினல்-குப்தி வல்-கபாஇத்  –  புகாரி 142) மற்றும் வெளியேறியபின் (குஃப்ரானக்க  –  அபூ தாவூத் 30); எந்த காலால் நுழைய வேண்டும் (இடது) மற்றும் வெளியேற வேண்டும் (வலது); கழிப்பறையில் கிப்லா நோக்கியோ முதுகுவைத்தோ ஏன் இருக்கக்கூடாது; தடைசெய்யப்பட்ட இடங்கள் (புகாரி 173  –  பழமரத்தின் கீழ், தேங்கிய நீரில், பாதைகளில்); பேசுதல், அல்லாஹ்வின் பெயருள்ள எதையும் எடுத்துச் செல்வது, சுத்தத்திற்கு வலது கை பயன்படுத்துதல் தொடர்பான தீர்ப்புகள்; இஸ்திஞ்ஜா மற்றும் இஸ்திஜ்மார் ஸுன்னா நான்கு மத்ஹபுகளில் செவ்வியல் ஃபிக்ஹை எப்படி வடிவமைத்தது; மற்றும் இந்த ஆதாபுகளின் பின்னாலுள்ள விரிவான ஞானம்  –  சுத்தம், கண்ணியம், மற்றும் தனிப்பட்ட தருணங்களில் கூட அல்லாஹ்வை நினைத்தல்.`,
  si: `ඉදිරියේදී: ඇතුළු වීමට පෙර දුආ දෙක (අල්ලාහුම්ම ඉන්නි අඌඡු බික මිනල් ඛුබ්ති වල් ඛබාඉත්  –  බුකාරි 142) සහ පිටව යාමෙන් පසුව (ගුෆ්‍රානක  –  අබූ දාවූද් 30); කුමන පාදයෙන් ඇතුළු විය යුතුද (වම) සහ පිටව යා යුතුද (දකුණ); අවශ්‍යතා පිරිසිදු කරන විට කිබ්ලා දෙසට මුහුණ ලා හෝ පිට හරවා නොසිටිය යුත්තේ ඇයි; තහනම් ස්ථාන (බුකාරි 173  –  පලතුරු ගස් යට, නිශ්චල ජලයේ, මාර්ගවල); කථා කිරීම, අල්ලාහ්ගේ නම සහිත කිසිවක් රැගෙන යාම, පිරිසිදු කිරීමට දකුණු අත භාවිතා කිරීම පිළිබඳ නීති; ඉස්තින්ජා සහ ඉස්තිජ්මාර්ගේ සුන්නාව සුන්නි මධ්හබ් හතරෙන් සම්භාව්‍ය ෆික්හය හැඩගැස්වූ ආකාරය; සහ මෙම අදාබ්හි පසුබිම වන පුළුල් ප්‍රඥාව  –  පිරිසිදුකම, ගෞරවය, සහ පෞද්ගලික මොහොතවලද අල්ලාහ්ව සිහිකිරීම.`,
};

export function ToiletEtiquetteContent() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="آدَابُ الخَلَاء"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <UnderConstructionCallout topic={TOPIC} />
      </div>
    </>
  );
}
