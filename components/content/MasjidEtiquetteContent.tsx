'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { UnderConstructionCallout } from '@/components/ui/UnderConstructionCallout';
import { useLanguage } from '@/lib/i18n/context';

const TITLE: Record<string, string> = {
  en: `Etiquettes of the Masjid`,
  ms: `Adab Masjid`,
  tur: `Mescid Âdâbı`,
  urd: `مسجد کے آداب`,
  ben: `মসজিদের আদব`,
  fas: `آداب مسجد`,
  zh: `清真寺之礼`,
  yue: `清真寺之禮`,
  ja: `モスクの作法`,
  ru: `Этикет мечети`,
  es: `Etiqueta de la Masjid`,
  ko: `모스크의 예절`,
  ta: `மசூதி ஆதாபுகள்`,
  si: `මස්ජිද් අදාබ්`,
};

const SUBTITLE: Record<string, string> = {
  en: `The Sunnah manners of entering, being in, and leaving the House of Allah  –  and the history of the masjid as an institution.`,
  ms: `Adab Sunnah untuk masuk, berada di dalam, dan keluar dari Rumah Allah  –  serta sejarah masjid sebagai institusi.`,
  tur: `Allah'ın Evine girişin, içinde bulunuşun ve çıkışın Sünnet âdâbı  –  ve müessese olarak mescidin tarihi.`,
  urd: `اللہ کے گھر میں داخلے، وہاں رہنے اور نکلنے کے سنت آداب  –  اور مسجد کی ایک ادارے کے طور پر تاریخ۔`,
  ben: `আল্লাহর ঘরে প্রবেশ, অবস্থান ও প্রস্থানের সুন্নাহ আদব  –  এবং প্রতিষ্ঠান হিসেবে মসজিদের ইতিহাস।`,
  fas: `آداب سنت ورود، حضور و خروج از خانه‌ی خدا  –  و تاریخ مسجد به عنوان یک نهاد.`,
  zh: `进入、留驻与离开真主之殿之圣行礼节  –  兼及作为宗教制度之清真寺之历史。`,
  yue: `進入、留駐與離開真主之殿之聖行禮節  –  兼及作為宗教制度之清真寺之歷史。`,
  ja: `アッラーの家に入る、留まる、そして去るときのスンナに則った作法  –  および制度としてのモスクの歴史。`,
  ru: `Сунна этикета входа в Дом Аллаха, пребывания в нём и выхода из него  –  и история мечети как института.`,
  es: `Los modales sunna al entrar, estar en, y salir de la Casa de Allah  –  y la historia de la masjid como institución.`,
  ko: `알라의 집에 들어가고, 머무르며, 나가는 순나의 예절과 제도로서의 모스크의 역사.`,
  ta: `அல்லாஹ்வின் இல்லத்தினுள் நுழையும், தங்கும், வெளியேறும் ஸுன்னா ஆதாபுகள்  –  மற்றும் ஒரு நிறுவனமாக மசூதியின் வரலாறு.`,
  si: `අල්ලාහ්ගේ නිවසට ඇතුළු වීම, එහි රැඳී සිටීම සහ පිටව යාමේ සුන්නා අදාබ්  –  සහ ආයතනයක් ලෙස මස්ජිද්හි ඉතිහාසය.`,
};

const TOPIC: Record<string, string> = {
  en: `Coming: the story of how the first masjid (Quba, then al-Nabawi in Madinah) was built; the etiquettes of entering with the right foot and du'a, the two-rakat greeting of the masjid (tahiyyat al-masjid), leaving with the left foot; behaviour inside (silence, no worldly speech, no buying/selling, no children disturbing prayer, dua patterns); reasons behind each ruling; classical fiqh across the four schools.`,
  ms: `Akan datang: kisah bagaimana masjid pertama (Quba, kemudian al-Nabawi di Madinah) dibina; adab masuk dengan kaki kanan dan doa, dua rakaat tahiyyat al-masjid, keluar dengan kaki kiri; adab di dalam (diam, tidak bercakap duniawi, tidak berjual beli, kanak-kanak tidak mengganggu solat, pola doa); sebab di sebalik setiap hukum; fiqh klasik merentasi empat mazhab.`,
  tur: `Yakında: ilk mescidin (Kuba, sonra Medine'de Mescid-i Nebevî) inşa hikâyesi; sağ ayakla girme ve duâ, iki rekat tahiyyetü'l-mescid, sol ayakla çıkma âdâbı; içerideki davranış (sükût, dünya kelâmı yok, alım-satım yok, çocuklar namazı bozmasın, duâ örnekleri); her hükmün ardındaki sebep; dört mezhepteki klasik fıkıh.`,
  urd: `آنے والا: پہلی مسجد (قباء، پھر مدینہ میں مسجد نبوی) کیسے بنی، دائیں پاؤں سے داخل ہونے اور دعا، دو رکعت تحیۃ المسجد، بائیں پاؤں سے نکلنے کے آداب؛ اندر کے آداب (خاموشی، دنیاوی گفتگو نہیں، خرید و فروخت نہیں، بچے نماز میں خلل نہ ڈالیں، دعا کے پیٹرن)؛ ہر حکم کے پیچھے سبب؛ چار مذاہب میں کلاسیکی فقہ۔`,
  ben: `আসছে: প্রথম মসজিদ (কুবা, তারপর মদিনায় মসজিদে নববী) কীভাবে তৈরি হয়েছিল; ডান পা দিয়ে প্রবেশ ও দোয়া, দুই রাকাত তাহিয়াতুল মসজিদ, বাম পা দিয়ে বাহির হওয়ার আদব; ভেতরে আচরণ (নীরবতা, দুনিয়াবী কথা নয়, ক্রয়-বিক্রয় নয়, শিশুরা নামাজে বিঘ্ন সৃষ্টি না করা, দোয়ার প্যাটার্ন); প্রতিটি বিধানের পিছনের কারণ; চার মাযহাব জুড়ে ধ্রুপদী ফিকহ।`,
  fas: `به‌زودی: داستان چگونگی ساخت نخستین مسجد (قبا، سپس النبوی در مدینه)؛ آداب ورود با پای راست و دعا، دو رکعت تحیة المسجد، خروج با پای چپ؛ رفتار درون (سکوت، بدون گفت‌وگوی دنیوی، بدون خرید و فروش، کودکان نماز را برهم نزنند، الگوهای دعا)؛ سبب پشت هر حکم؛ فقه کلاسیک در چهار مذهب.`,
  zh: `即将推出：第一座清真寺（库巴，继而麦地那之圣寺）建造之故事；以右足入门与祈祷、行两拜「问候寺之礼」（塔希亚特·穆斯吉德）、以左足出门之礼节；内里之举止（静默、勿谈世俗、不买卖、勿使孩童扰乱礼拜、祈祷之典范）；每条判决之背后原因；四大教法学派之古典教法。`,
  yue: `即將推出：第一座清真寺（庫巴，繼而麥地那之聖寺）建造之故事；以右足入門與祈禱、行兩拜「問候寺之禮」（塔希亞特·穆斯吉德）、以左足出門之禮節；內裡之舉止（靜默、勿談世俗、不買賣、勿使孩童擾亂禮拜、祈禱之典範）；每條判決背後嘅原因；四大教法學派之古典教法。`,
  ja: `近日追加：最初のモスク（クバー、次いでマディーナのアン＝ナバウィー）の建立の物語、右足で入り祈願を唱えること、二ラカアのモスク挨拶（タヒーヤトゥル＝マスジド）、左足で退出することの作法、内部での振る舞い（沈黙、世俗の会話禁止、売買禁止、子供が礼拝を乱さぬこと、祈願の型）、各規定の背後にある理由、四法学派における古典的フィクフ。`,
  ru: `Скоро: рассказ о постройке первой мечети (Куба, затем ан-Набави в Медине); этикет входа с правой ноги и дуа, два рак'ата приветствия мечети (тахиййат аль-масджид), выход с левой ноги; поведение внутри (молчание, никакой мирской беседы, никакой торговли, дети не мешают молитве, образцы дуа); причины каждого предписания; классический фикх четырёх мазхабов.`,
  es: `Próximamente: la historia de cómo se construyó la primera masjid (Quba, luego al-Nabawi en Medina); los modales de entrar con el pie derecho y du'a, las dos rakat de saludo a la masjid (tahiyyat al-masjid), salir con el pie izquierdo; el comportamiento en el interior (silencio, no hablar de asuntos mundanos, no comprar/vender, que los niños no perturben la oración, patrones de du'a); las razones detrás de cada regla; fiqh clásico en las cuatro escuelas.`,
  ko: `공개 예정: 최초의 모스크(쿠바, 이어 메디나의 안나바위)가 세워진 이야기; 오른발로 들어가며 두아를 낭송하고, 두 라카아의 모스크 인사(타히야트 알마스지드), 왼발로 나가는 예절; 내부에서의 행동(침묵, 세속적 대화 금지, 매매 금지, 어린이가 예배를 방해하지 않도록, 두아 유형); 각 규정의 이유; 네 법학파의 고전 피크흐.`,
  ta: `விரைவில் வரும்: முதல் மசூதி (குபா, பின்னர் மதீனாவில் மஸ்ஜித் அன்-நபவீ) எப்படி கட்டப்பட்டது என்ற கதை; வலது காலால் நுழைந்து பிரார்த்திக்கும், தஹிய்யத்துல் மசூதி இரு ரக்அத்துகள், இடது காலால் வெளியேறும் ஆதாபுகள்; உள்ளே நடத்தை (மௌனம், உலகியல் பேச்சு இல்லை, விற்பனை-வாங்குதல் இல்லை, குழந்தைகள் தொழுகைக்கு தொந்தரவு தராமல் இருத்தல், பிரார்த்தனை வகைகள்); ஒவ்வொரு விதிக்கும் பின்னாலுள்ள காரணங்கள்; நான்கு மத்ஹபுகள் முழுவதும் செவ்வியல் ஃபிக்ஹ்.`,
  si: `ඉදිරියේදී: පළමු මස්ජිද් (කුබා, පසුව මදීනාහි අන්-නබවී) ගොඩනඟුණු ආකාරය පිළිබඳ කථාව; දකුණු පාදයෙන් ඇතුළු වීම සහ දුආව, තහිය්‍යතුල් මස්ජිද් රකාත් දෙක, වම් පාදයෙන් පිටව යාමේ අදාබ්; ඇතුළත හැසිරීම (නිහඬබව, ලෞකික කථා නොකිරීම, විකිණීම-මිලදී ගැනීම නැත, දරුවන් නමස්කාරයට බාධා නොකිරීම, දුආ රටා); සෑම නීතියක්ම පිටුපස ඇති හේතූන්; සුන්නි මධ්හබ් හතරෙන් සම්භාව්‍ය ෆික්හ්.`,
};

export function MasjidEtiquetteContent() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="آدَابُ المَسْجِد"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <UnderConstructionCallout topic={TOPIC} />
      </div>
    </>
  );
}
