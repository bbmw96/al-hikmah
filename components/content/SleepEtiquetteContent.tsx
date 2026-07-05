'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { UnderConstructionCallout } from '@/components/ui/UnderConstructionCallout';
import { useLanguage } from '@/lib/i18n/context';

const TITLE: Record<string, string> = {
  en: `Adab al-Nawm, The Etiquettes of Sleep`,
  ms: `Adab al-Nawm, Adab Tidur`,
  tur: `Âdâbü'n-Nevm, Uyku Âdâbı`,
  urd: `آدابِ نوم، سونے کے آداب`,
  ben: `আদাব আল-নাওম, ঘুমের আদব`,
  fas: `آداب نوم، آداب خواب`,
  zh: `睡眠之礼节，「阿达布·纳乌姆」`,
  yue: `睡眠之禮節，「阿達布·納烏姆」`,
  ja: `眠りの作法，アダーブ・アン＝ナウム`,
  ru: `Этикет сна, Адаб ан-Наум`,
  es: `Adab al-Nawm, la etiqueta del sueño`,
  ko: `잠의 예절, 아다브 안나움`,
  ta: `ஆதாப் அன்-நவ்ம், தூக்கத்தின் நடத்தை`,
  si: `අදාබ් අන්-නව්ම්, නින්දේ අදාබ්`,
};

const SUBTITLE: Record<string, string> = {
  en: `The Sunnah of preparing for sleep, the du'as before and on waking, the reasons behind each practice, and what the Prophet ﷺ said about the soul's condition in sleep.`,
  ms: `Sunnah persiapan untuk tidur, doa sebelum tidur dan ketika bangun, sebab di sebalik setiap amalan, dan apa yang Nabi ﷺ katakan tentang keadaan roh dalam tidur.`,
  tur: `Uyumaya hazırlanmanın Sünneti, uykudan önce ve uyanışta okunan duâlar, her uygulamanın sebebi ve Hz. Peygamber'in ﷺ uykudaki ruhun hâli hakkındaki sözleri.`,
  urd: `سونے کی تیاری کی سنت، سونے سے پہلے اور جاگنے پر دعائیں، ہر عمل کے پیچھے سبب، اور نبی ﷺ نے سونے میں روح کی حالت کے بارے میں کیا فرمایا۔`,
  ben: `ঘুমানোর প্রস্তুতির সুন্নাহ, ঘুমানোর পূর্বে ও জেগে ওঠার সময়ের দোয়া, প্রতিটি অনুশীলনের পিছনের কারণ, এবং ঘুমে আত্মার অবস্থা সম্পর্কে নবী ﷺ কী বলেছেন।`,
  fas: `سنت آماده شدن برای خواب، دعای پیش از خواب و بیدار شدن، سبب پشت هر عمل، و آنچه پیامبر ﷺ درباره‌ی حال روح در خواب فرمود.`,
  zh: `就寝准备之圣行、寝前与醒时之祈祷、每项行为之背后原因，以及先知 ﷺ 论睡眠中灵魂状态之言。`,
  yue: `就寢準備之聖行、寢前同醒時之祈禱、每項行為背後嘅原因，以及先知 ﷺ 論睡眠中靈魂狀態之言。`,
  ja: `眠りへの備えのスンナ、就寝前と目覚めの祈願、それぞれの行為の理由、そして眠りにおける魂の状態について預言者 ﷺ が述べられたこと。`,
  ru: `Сунна подготовки ко сну, дуа перед сном и по пробуждении, причины каждой практики и то, что Пророк ﷺ говорил о состоянии души во сне.`,
  es: `La Sunna de prepararse para dormir, las du'as antes y al despertar, las razones detrás de cada práctica, y lo que el Profeta ﷺ dijo sobre el estado del alma en el sueño.`,
  ko: `잠자리에 드는 순나, 잠들기 전과 깨어날 때의 두아, 각 관행의 이유, 그리고 잠 속 영혼의 상태에 관해 예언자 ﷺ 께서 하신 말씀.`,
  ta: `உறங்குவதற்குத் தயாராகும் ஸுன்னா, உறங்குமுன் மற்றும் விழிக்கும்போது பிரார்த்தனைகள், ஒவ்வொரு நடைமுறையின் பின்னாலுள்ள காரணங்கள், மற்றும் நபி ﷺ உறக்கத்தில் ஆன்மாவின் நிலை பற்றி கூறியவை.`,
  si: `නින්දට සූදානම් වීමේ සුන්නාව, නින්දට පෙර සහ අවදි වන විට දුආ, සෑම භාවිතයක්ම පිටුපස ඇති හේතූන්, සහ නබි ﷺ තුමා නින්දේදී ආත්මයේ තත්ත්වය ගැන පැවසූ දේ.`,
};

const TOPIC: Record<string, string> = {
  en: `Coming: the wudu before sleeping (Bukhari 247), sleeping on the right side with the right hand under the cheek (Bukhari 6314), the du'a "Bismika Allahumma amutu wa ahya" (Bukhari 6324), reciting Ayat al-Kursi + last two verses of al-Baqarah + al-Ikhlas/Falaq/Nas three times each blowing into the palms (Bukhari 5017), what to do on waking from a bad dream, the du'a upon rising (Bukhari 6312), the ruling on sleeping face-down (forbidden per Abu Dawud 5040), and the classical fiqh on all of the above.`,
  ms: `Akan datang: wudhu sebelum tidur (Bukhari 247), tidur di sisi kanan dengan tangan kanan di bawah pipi (Bukhari 6314), doa "Bismika Allahumma amutu wa ahya" (Bukhari 6324), membaca Ayat al-Kursi + dua ayat terakhir al-Baqarah + al-Ikhlas/Falaq/Nas tiga kali sambil meniup ke tapak tangan (Bukhari 5017), apa yang perlu dilakukan apabila terjaga dari mimpi buruk, doa ketika bangun (Bukhari 6312), hukum tidur meniarap (dilarang menurut Abu Dawud 5040), dan fiqh klasik mengenai semua di atas.`,
  tur: `Yakında: uykudan önce abdest (Buhârî 247), sağ yanına yatıp sağ eli yanağının altına koymak (Buhârî 6314), "Bismike'l-Lāhümme emûtü ve ahyâ" duâsı (Buhârî 6324), Âyetü'l-Kürsî ile Bakara sonu iki âyet ve İhlâs/Felak/Nâs'ı üç kere avuçlara üfleyerek okumak (Buhârî 5017), kötü rüya gördüğünde yapılacaklar, uyanınca okunacak duâ (Buhârî 6312), yüzüstü uyumanın hükmü (Ebû Dâvud 5040'ta yasaklanmıştır) ve bütün bunlar üzerine klasik fıkıh.`,
  urd: `آنے والا: سونے سے پہلے وضو (بخاری ۲۴۷)، دائیں کروٹ پر دائیں ہاتھ کو گال کے نیچے رکھ کر سونا (بخاری ۶۳۱۴)، دعا "بِسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا" (بخاری ۶۳۲۴)، آیت الکرسی + سورۃ البقرہ کی آخری دو آیات + الاخلاص/الفلق/الناس تین تین بار ہتھیلیوں میں پھونک کر پڑھنا (بخاری ۵۰۱۷)، بری خواب سے جاگنے پر کیا کرنا، اٹھنے کی دعا (بخاری ۶۳۱۲)، منہ کے بل سونے کا حکم (ابو داود ۵۰۴۰ کے مطابق منع)، اور مذکورہ سب پر کلاسیکی فقہ۔`,
  ben: `আসছে: ঘুমানোর আগে ওযু (বুখারি ২৪৭), ডান পাশে ডান হাত গালের নিচে রেখে ঘুমানো (বুখারি ৬৩১৪), দোয়া "বিসমিকা আল্লাহুম্মা আমুতু ওয়া আহইয়া" (বুখারি ৬৩২৪), আয়াতুল কুরসি + সূরা বাকারার শেষ দুই আয়াত + আল-ইখলাস/আল-ফালাক/আন-নাস তিনবার করে হাতের তালুতে ফুঁ দিয়ে পড়া (বুখারি ৫০১৭), দুঃস্বপ্ন থেকে জেগে উঠলে কী করতে হবে, উঠার দোয়া (বুখারি ৬৩১২), উপুড় হয়ে ঘুমানোর বিধান (আবু দাউদ ৫০৪০ অনুযায়ী নিষিদ্ধ), এবং উপরের সব বিষয়ে ধ্রুপদী ফিকহ।`,
  fas: `به‌زودی: وضو پیش از خواب (بخاری ۲۴۷)، خوابیدن به پهلوی راست با دست راست زیر گونه (بخاری ۶۳۱۴)، دعای «بسمک اللهم أموت وأحیا» (بخاری ۶۳۲۴)، خواندن آیة الکرسی + دو آیه‌ی آخر بقره + اخلاص/فلق/ناس هر یک سه بار در کف دستان و دمیدن (بخاری ۵۰۱۷)، آنچه هنگام بیدار شدن از خواب بد باید کرد، دعای بیداری (بخاری ۶۳۱۲)، حکم خوابیدن به رو (طبق ابوداود ۵۰۴۰ ممنوع)، و فقه کلاسیک درباره‌ی همه‌ی موارد فوق.`,
  zh: `即将推出：睡前之小净（布哈里 247）、右侧卧、右手垫脸颊（布哈里 6314）、诵「奉主之名，我死我生」之祷（布哈里 6324）、诵「宝座之节」＋黄牛章末二节＋三诚章·晨曦章·世人章各三遍，吹于双掌（布哈里 5017）；恶梦醒后当如何行、起身之祷（布哈里 6312）；俯睡之判决（依艾布·达乌德 5040 为禁止）；以及上述之古典教法。`,
  yue: `即將推出：睡前之小淨（布哈里 247）、右側臥、右手墊臉頰（布哈里 6314）、誦「奉主之名，我死我生」之禱（布哈里 6324）、誦「寶座之節」＋黃牛章末二節＋三誠章·晨曦章·世人章各三遍，吹於雙掌（布哈里 5017）；惡夢醒後當如何行、起身之禱（布哈里 6312）；俯睡之判決（依艾布·達烏德 5040 為禁止）；以及上述之古典教法。`,
  ja: `近日追加：眠る前のウドゥー（ブハーリー 247）、右を下にして右手を頬の下に置いて眠ること（ブハーリー 6314）、「ビスミカ・アッラーフンマ・アムートゥ・ワ・アフヤー」の祈願（ブハーリー 6324）、玉座の節＋牝牛章の最後の二節＋イフラース／ファラク／ナースをそれぞれ三度、両手のひらに吹いて唱えること（ブハーリー 5017）、悪夢から目覚めたときの行い、目覚めの祈願（ブハーリー 6312）、うつ伏せに眠ることの禁（アブー・ダーウード 5040）、そしてこれら全てに関する古典的フィクフ。`,
  ru: `Скоро: омовение перед сном (аль-Бухари 247), сон на правом боку с правой рукой под щекой (аль-Бухари 6314), дуа "Би-сми-ка Аллахумма амуту ва ахья" (аль-Бухари 6324), чтение аят аль-Курси + двух последних аятов аль-Бакара + аль-Ихлас/аль-Фалак/ан-Нас по три раза с обдуванием ладоней (аль-Бухари 5017), что делать по пробуждении от дурного сна, дуа при пробуждении (аль-Бухари 6312), запрет сна лицом вниз (Абу Дауд 5040), а также классический фикх обо всём вышеперечисленном.`,
  es: `Próximamente: la ablución antes de dormir (al-Bukhari 247), dormir del lado derecho con la mano derecha bajo la mejilla (al-Bukhari 6314), la du'a "Bismika Al-lahumma amutu wa ahya" (al-Bukhari 6324), recitar el Trono + los dos últimos versos de al-Baqarah + al-Ijlas/al-Falaq/al-Nas tres veces cada uno soplando en las palmas (al-Bukhari 5017), qué hacer al despertar de un mal sueño, la du'a al levantarse (al-Bukhari 6312), el fallo sobre dormir boca abajo (prohibido según Abu Dawud 5040), y la fiqh clásica sobre todo lo anterior.`,
  ko: `공개 예정: 잠자기 전 우두(알부카리 247), 오른쪽으로 누워 오른손을 뺨 아래 두고 자기(알부카리 6314), "비스미카 알라훔마 아무투 와 아흐야" 두아(알부카리 6324), 아야트 알쿠르시 + 알바카라의 마지막 두 구절 + 알이클라스/알팔라크/알나스를 각각 세 번씩 두 손바닥에 불어 낭송하기(알부카리 5017), 악몽에서 깨어난 뒤 할 일, 일어날 때의 두아(알부카리 6312), 엎드려 자는 것의 규정(아부 다우드 5040에 의해 금지), 그리고 위 전체에 대한 고전 피크흐.`,
  ta: `விரைவில் வரும்: உறங்குமுன் உளூ (புகாரி 247), வலப் புறமாக வலது கையை கன்னத்திற்கு அடியில் வைத்து உறங்குதல் (புகாரி 6314), "பிஸ்மிக அல்லாஹும்ம அமூது வ அஹ்யா" பிரார்த்தனை (புகாரி 6324), ஆயத்துல் குர்ஸி + அல்-பகராவின் இறுதி இரு வசனங்கள் + அல்-இக்லாஸ்/அல்-ஃபலக்/அன்-நாஸ் ஒவ்வொன்றையும் மூன்று முறை உள்ளங்கைகளில் ஊதி ஓதுதல் (புகாரி 5017), கெட்ட கனவிலிருந்து விழித்தபோது என்ன செய்ய வேண்டும், எழுந்திருக்கும் பிரார்த்தனை (புகாரி 6312), முகம் கீழ் நோக்கி உறங்குதல் தீர்ப்பு (அபூ தாவூத் 5040 படி தடைசெய்யப்பட்டது), மற்றும் மேற்கண்ட அனைத்திற்கும் செவ்வியல் ஃபிக்ஹ்.`,
  si: `ඉදිරියේදී: නින්දට පෙර වුදූ (බුකාරි 247), දකුණු පැත්තට හැරී දකුණු අත කම්මුලට යටින් තබා නිදා ගැනීම (බුකාරි 6314), "බිස්මික අල්ලාහුම්ම අමූතු ව අහ්යා" දුආව (බුකාරි 6324), ආයතුල් කුර්සී + අල්-බකරාහ්ගේ අවසන් වාක්‍ය දෙක + අල්-ඉක්ලාස්/අල්-ෆලක්/අන්-නාස් තුන් වතාවක් තුන් වතාවක් අත්ල දෙකට පිඹීමෙන් කියවීම (බුකාරි 5017), නරක සිහිනයෙන් අවදි වූ විට කුමක් කළ යුතුද, අවදිවීමේ දුආව (බුකාරි 6312), මුහුණ පහළට තබා නිදා ගැනීමේ නීතිය (අබූ දාවූද් 5040 අනුව තහනම්), සහ ඉහත සියල්ල පිළිබඳ සම්භාව්‍ය ෆික්හ්.`,
};

export function SleepEtiquetteContent() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="آدَابُ النَّوْم"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <UnderConstructionCallout topic={TOPIC} />
      </div>
    </>
  );
}
