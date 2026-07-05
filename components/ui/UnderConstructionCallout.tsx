'use client';

import { useLanguage } from '@/lib/i18n/context';

type LangMap = Record<string, string>;

const HEADING: LangMap = {
  en: `Under Development`,
  ms: `Dalam Pembangunan`,
  tur: `Geliştirme Aşamasında`,
  urd: `زیرِ تعمیر`,
  ben: `উন্নয়নাধীন`,
  fas: `در حال ساخت`,
  zh: `建设中`,
  yue: `建設中`,
  ja: `開発中`,
  ru: `В разработке`,
  es: `En desarrollo`,
  ko: `개발 중`,
  ta: `உருவாக்கத்தில் உள்ளது`,
  si: `සංවර්ධනය වෙමින්`,
};

const INTRO: LangMap = {
  en: `This page is being written. When complete it will include the history, the story behind the practice, the classical rulings, the reasons and wisdom behind them, the du'as and hadith citations, and full guidance across the four Sunni schools. All content will be given in fourteen languages, with Arabic, transliteration and translation where relevant.`,
  ms: `Halaman ini sedang ditulis. Apabila selesai, ia akan merangkumi sejarah, kisah di sebalik amalan, hukum-hukum klasik, sebab dan hikmah di sebalik amalan itu, doa-doa dan sitasi hadis, serta panduan penuh merentasi empat mazhab Sunni. Semua kandungan akan disediakan dalam empat belas bahasa, dengan Arab, transliterasi dan terjemahan yang berkaitan.`,
  tur: `Bu sayfa hazırlanmaktadır. Tamamlandığında; tarihçe, uygulamanın arkasındaki kıssa, klasik hükümler, sebep ve hikmetler, duâlar ve hadis kaynakları ile dört Sünnî mezhep genelinde tam rehberlik içerecektir. Bütün içerik on dört dilde, ilgili yerlerde Arapça, transliterasyon ve tercüme ile birlikte verilecektir.`,
  urd: `یہ صفحہ لکھا جا رہا ہے۔ مکمل ہونے پر اس میں تاریخ، عمل کے پیچھے کا قصہ، کلاسیکی احکام، ان کے پیچھے کے اسباب اور حکمت، دعائیں اور احادیث کے حوالے، اور چار سنی مذاہب میں مکمل رہنمائی شامل ہو گی۔ تمام مواد چودہ زبانوں میں، متعلقہ مقامات پر عربی، ترجمے اور رومن املا کے ساتھ پیش کیا جائے گا۔`,
  ben: `এই পৃষ্ঠাটি লেখা হচ্ছে। সম্পূর্ণ হলে এতে থাকবে ইতিহাস, আচরণের পিছনের কাহিনি, ধ্রুপদী বিধান, সেগুলির পিছনের কারণ ও হিকমাহ, দোয়া ও হাদিসের উদ্ধৃতি এবং চার সুন্নি মাযহাব জুড়ে পূর্ণ নির্দেশনা। সমস্ত বিষয়বস্তু চৌদ্দ ভাষায় দেওয়া হবে, প্রাসঙ্গিক জায়গায় আরবি, উচ্চারণ ও অনুবাদসহ।`,
  fas: `این صفحه در حال نوشتن است. پس از تکمیل، شامل تاریخچه، داستان پشت آن عمل، احکام کلاسیک، سبب و حکمت آنها، دعاها و ارجاعات حدیثی و راهنمای کامل در چهار مذهب اهل سنت خواهد بود. تمام محتوا در چهارده زبان و در جای مناسب همراه با عربی، آوانگاری و ترجمه ارائه خواهد شد.`,
  zh: `本页正在撰写。完成后将包含历史、行为背后的故事、古典教法之判决、其原因与智慧、相关祈祷及圣训引证，以及涵盖四大逊尼派学派之完整指引。所有内容将以十四种语言呈现，凡涉及处均附有阿拉伯文、转写与翻译。`,
  yue: `本頁正在撰寫。完成之後將包含歷史、行為背後嘅故事、古典教法之判決、其原因與智慧、相關祈禱及聖訓引證，以及涵蓋四大遜尼派學派之完整指引。所有內容將以十四種語言呈現，凡涉及處均附有阿拉伯文、轉寫同翻譯。`,
  ja: `本ページは執筆中です。完成後には、歴史、その実践の背景となる物語、古典的な法学の判定、その理由と叡智、関連する祈願とハディースの典拠、および四つのスンニ法学派にわたる完全な手引きを収める予定です。すべての内容は十四言語で提供され、必要な箇所ではアラビア語、ローマ字転写、および訳文が併記されます。`,
  ru: `Эта страница пишется. По завершении она будет содержать историю, повествование, лежащее в основе практики, классические правовые заключения, причины и мудрость за ними, дуа и указания на хадисы, а также полное руководство по четырём суннитским мазхабам. Всё содержимое будет представлено на четырнадцати языках, с арабским текстом, транслитерацией и переводом там, где это уместно.`,
  es: `Esta página está siendo redactada. Cuando esté completa incluirá la historia, el relato detrás de la práctica, los fallos clásicos, las razones y la sabiduría tras ellos, las du'as y las citas de hadiz, y una guía completa a través de las cuatro escuelas suníes. Todo el contenido se dará en catorce idiomas, con árabe, transliteración y traducción donde corresponda.`,
  ko: `이 페이지는 작성 중입니다. 완성되면 역사, 실천의 배경 이야기, 고전적 판결, 그 이유와 지혜, 두아와 하디스 인용, 그리고 네 순니 학파 전반의 완전한 지침을 포함할 예정입니다. 모든 내용은 열네 개 언어로 제공되며, 관련된 곳에는 아랍어, 로마자 표기 및 번역이 함께 실립니다.`,
  ta: `இந்தப் பக்கம் எழுதப்பட்டு வருகிறது. முழுமையானதும், அதில் வரலாறு, செயல்பாட்டின் பின்னணி கதை, செவ்வியல் தீர்ப்புகள், அவற்றின் பின்னாலுள்ள காரணங்களும் ஞானமும், பிரார்த்தனைகள் மற்றும் ஹதீஸ் மேற்கோள்கள், மற்றும் நான்கு சுன்னி மத்ஹபுகள் முழுவதும் முழு வழிகாட்டல் இருக்கும். அனைத்து உள்ளடக்கமும் பதினான்கு மொழிகளில், தொடர்பான இடங்களில் அரபு, ரோமன் எழுத்துப்பெயர்ப்பு மற்றும் மொழிபெயர்ப்புடன் வழங்கப்படும்.`,
  si: `මෙම පිටුව ලියවෙමින් පවතී. සම්පූර්ණ වූ පසු එහි ඉතිහාසය, පිළිවෙතේ පසුබිම් කථාව, සම්භාව්‍ය නීතිමය තීරණ, ඒවා පිටුපස ඇති හේතූන් සහ ප්‍රඥාව, දුආ සහ හදීස් උපුටා දැක්වීම්, සහ සුන්නි මධ්හබ් හතරෙන් සම්පූර්ණ මාර්ගෝපදේශය ඇතුළත් වනු ඇත. සියලුම අන්තර්ගතය භාෂා දහහතරකින්, අදාළ ස්ථානවලදී අරාබි, රෝමානුකරණය සහ පරිවර්තනය සමඟ ලබා දෙනු ලැබේ.`,
};

interface Props {
  topic: LangMap;
}

export function UnderConstructionCallout({ topic }: Props) {
  const { lang } = useLanguage();
  const heading = HEADING[lang] ?? HEADING.en;
  const intro = INTRO[lang] ?? INTRO.en;
  const topicText = topic[lang] ?? topic.en;

  return (
    <article className="card-forest rounded-2xl p-8 max-w-3xl mx-auto">
      <h2 className="font-garamond text-2xl md:text-3xl font-semibold text-gold mb-4">{heading}</h2>
      <p className="text-cream/85 leading-relaxed mb-4">{intro}</p>
      <p className="text-cream/75 leading-relaxed text-sm italic">{topicText}</p>
    </article>
  );
}
