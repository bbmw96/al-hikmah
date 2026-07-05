'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { UnderConstructionCallout } from '@/components/ui/UnderConstructionCallout';
import { useLanguage } from '@/lib/i18n/context';

const TITLE: Record<string, string> = {
  en: `Adab al-Ta'am, The Etiquettes of Eating`,
  ms: `Adab al-Ta'am, Adab Makan`,
  tur: `Âdâbü't-Ta'âm, Yemek Âdâbı`,
  urd: `آدابِ طعام، کھانے کے آداب`,
  ben: `আদাব আল-তা'আম, খাওয়ার আদব`,
  fas: `آداب طعام، آداب خوردن`,
  zh: `饮食之礼节，「阿达布·塔阿姆」`,
  yue: `飲食之禮節，「阿達布·塔阿姆」`,
  ja: `食の作法，アダーブ・アッ＝タアーム`,
  ru: `Этикет приёма пищи, Адаб ат-Та'ам`,
  es: `Adab al-Ta'am, la etiqueta de comer`,
  ko: `식사의 예절, 아다브 앗타암`,
  ta: `ஆதாப் அத்-தஆம், உண்ணும் நடத்தை`,
  si: `අදාබ් අත්-තඃආම්, ආහාර ගැනීමේ අදාබ්`,
};

const SUBTITLE: Record<string, string> = {
  en: `How to eat, with what to eat, what to say before and after, and what the Prophet ﷺ ate, avoided, and taught about food and drink.`,
  ms: `Bagaimana makan, dengan apa makan, apa yang perlu diucapkan sebelum dan selepas, dan apa yang Nabi ﷺ makan, elakkan, dan ajar tentang makanan dan minuman.`,
  tur: `Nasıl yenir, ne ile yenir, öncesi ve sonrasında ne söylenir, ve Hz. Peygamber'in ﷺ yediği, sakındığı ve yemek-içmek üzerine öğrettiği.`,
  urd: `کیسے کھائیں، کس چیز سے کھائیں، پہلے اور بعد میں کیا کہیں، اور نبی ﷺ نے کیا کھایا، کیا چھوڑا، اور کھانے پینے کے بارے میں کیا سکھایا۔`,
  ben: `কীভাবে খাবেন, কী দিয়ে খাবেন, আগে ও পরে কী বলবেন, এবং নবী ﷺ কী খেয়েছেন, কী এড়িয়ে গেছেন, এবং খাদ্য ও পানীয় সম্পর্কে কী শিখিয়েছেন।`,
  fas: `چگونه بخوریم، با چه بخوریم، پیش و پس از خوردن چه بگوییم، و پیامبر ﷺ چه خورد، چه پرهیز کرد، و درباره‌ی خوراک و نوشیدنی چه آموخت.`,
  zh: `如何食、以何食、食前食后何言，以及先知 ﷺ 所食、所避、就食饮所教之事。`,
  yue: `如何食、以何食、食前食後何言，以及先知 ﷺ 所食、所避、就食飲所教之事。`,
  ja: `いかに食すか、何と共に食すか、食前食後に何を唱えるか，そして預言者 ﷺ が何を食し、何を避け、食と飲について何を教えられたか。`,
  ru: `Как есть, с чем есть, что говорить до и после, и что ел, чего избегал и чему учил Пророк ﷺ в отношении пищи и питья.`,
  es: `Cómo comer, con qué comer, qué decir antes y después, y lo que el Profeta ﷺ comió, evitó y enseñó acerca de la comida y la bebida.`,
  ko: `어떻게 먹는지, 무엇과 함께 먹는지, 먹기 전과 후에 무엇을 말하는지, 그리고 예언자 ﷺ 께서 무엇을 드시고, 피하시고, 음식과 음료에 관해 무엇을 가르치셨는지.`,
  ta: `எப்படி உண்பது, எதனுடன் உண்பது, முன்பு மற்றும் பின்பு என்ன சொல்வது, மற்றும் நபி ﷺ என்ன உண்டார், எதைத் தவிர்த்தார், உணவு மற்றும் பானம் பற்றி என்ன கற்பித்தார்.`,
  si: `කෙසේ අනුභව කරන්නද, කුමන දේ සමඟ අනුභව කරන්නද, පෙර සහ පසුව කුමක් කිව යුතුද, සහ නබි ﷺ තුමා අනුභව කළ, වළක්වා ගත්, ආහාර සහ පාන ගැන ඉගැන්වූ දේ.`,
};

const TOPIC: Record<string, string> = {
  en: `Coming: sitting to eat (not standing, Muslim 2024), saying Bismillah before and Alhamdulillah after (Ibn Majah 3286); if forgotten to say it at start, "Bismillahi awwalahu wa akhirahu" (Abu Dawud 3767); eating with the right hand (Muslim 2020); eating what is close to you from the dish (Bukhari 5376); no criticism of food (Bukhari 3563); the three-bite drinking pattern (Muslim 2028); why we do not drink standing generally per Muslim 2024; not filling the stomach beyond one-third food, one-third water, one-third air (Tirmidhi 2380); eating together as a communal blessing (Abu Dawud 3764); sharing (a portion sufficient for two suffices three, Muslim 2059); using bread as a scoop; eating with the fingers; the du'a for the host; what to avoid, gold and silver vessels (Bukhari 5426), pork and its by-products, wine and intoxicants (al-Ma'ida 5:90-91), blood, meat of an animal not slaughtered per Sunnah, food dedicated to other than Allah. Cross-linked to /dhabihah for meat rulings.`,
  ms: `Akan datang: duduk untuk makan (bukan berdiri, Muslim 2024), menyebut Bismillah sebelum dan Alhamdulillah selepas (Ibn Majah 3286); jika terlupa menyebut di awal, "Bismillahi awwalahu wa akhirahu" (Abu Dawud 3767); makan dengan tangan kanan (Muslim 2020); makan yang dekat dengan anda dari pinggan (Bukhari 5376); tiada kritikan terhadap makanan (Bukhari 3563); minum dalam tiga tegukan (Muslim 2028); kenapa kita umumnya tidak minum sambil berdiri menurut Muslim 2024; tidak mengisi perut melebihi sepertiga makanan, sepertiga air, sepertiga udara (Tirmidhi 2380); makan bersama sebagai berkat komunal (Abu Dawud 3764); berkongsi (bahagian yang cukup untuk dua boleh menampung tiga, Muslim 2059); menggunakan roti sebagai sudu; makan dengan jari; doa untuk tuan rumah; apa yang perlu dielakkan, bekas emas dan perak (Bukhari 5426), babi dan produk sampingannya, arak dan pemabuk (al-Ma'idah 5:90-91), darah, daging haiwan yang tidak disembelih mengikut Sunnah, makanan yang dipersembahkan selain Allah. Silang rujuk ke /dhabihah untuk hukum daging.`,
  tur: `Yakında: ayakta değil oturarak yemek (Müslim 2024), önce Besmele ve sonra Elhamdülillâh (İbn Mâce 3286); başlangıçta unutulursa "Bismillâhi evvelehu ve âhirehu" (Ebû Dâvud 3767); sağ elle yemek (Müslim 2020); tabakta önündeki taraftan yemek (Buhârî 5376); yemeği kötülememek (Buhârî 3563); üç yudumda içme (Müslim 2028); genelde ayakta içmeme (Müslim 2024); mideyi üçte bir yiyecek, üçte bir su, üçte bir hava kalacak biçimde doldurmama (Tirmizî 2380); ortak bereket olarak birlikte yemek (Ebû Dâvud 3764); paylaşma (ikiye yeten üçe de yeter, Müslim 2059); ekmeği kaşık olarak kullanmak; parmakla yemek; ev sahibi için duâ; kaçınılacaklar, altın-gümüş kaplar (Buhârî 5426), domuz ve türevleri, şarap ve sarhoş edici (Mâide 5:90-91), kan, Sünnete göre kesilmemiş hayvanın eti, Allah'tan başkasına adanan yemek. Et hükümleri için /dhabihah'a bağlantı.`,
  urd: `آنے والا: کھڑے ہو کر نہیں بلکہ بیٹھ کر کھانا (مسلم ۲۰۲۴)، پہلے بسم اللہ اور بعد میں الحمد للہ (ابن ماجہ ۳۲۸۶)؛ اگر شروع میں بھول جائیں تو "بِسْمِ اللَّهِ أَوَّلَهُ وَآخِرَهُ" (ابو داود ۳۷۶۷)؛ دائیں ہاتھ سے کھانا (مسلم ۲۰۲۰)؛ برتن میں سے اپنے قریب کی جانب سے کھانا (بخاری ۵۳۷۶)؛ کھانے پر تنقید نہ کرنا (بخاری ۳۵۶۳)؛ تین سانس میں پینا (مسلم ۲۰۲۸)؛ عام طور پر کھڑے ہو کر نہ پینا (مسلم ۲۰۲۴)؛ پیٹ کو ایک تہائی کھانا، ایک تہائی پانی، ایک تہائی ہوا سے زیادہ نہ بھرنا (ترمذی ۲۳۸۰)؛ اجتماعی برکت کے طور پر مل کر کھانا (ابو داود ۳۷۶۴)؛ بانٹنا (دو کا کھانا تین کو کافی ہو جاتا ہے، مسلم ۲۰۵۹)؛ روٹی کو نوالہ اٹھانے کے لیے استعمال کرنا؛ انگلیوں سے کھانا؛ میزبان کے لیے دعا؛ کیا سے پرہیز، سونے چاندی کے برتن (بخاری ۵۴۲۶)، سور اور اس کی مشتقات، شراب اور نشہ آور اشیاء (المائدہ ۵:۹۰-۹۱)، خون، سنت کے مطابق نہ ذبح کیا ہوا جانور، غیر اللہ کے نام پر تیار کیا ہوا کھانا۔ گوشت کے احکام کے لیے /dhabihah سے کراس لنک۔`,
  ben: `আসছে: বসে খাওয়া (দাঁড়িয়ে নয়, মুসলিম ২০২৪), শুরুর আগে বিসমিল্লাহ ও পরে আলহামদুলিল্লাহ বলা (ইবন মাজাহ ৩২৮৬); শুরুতে ভুলে গেলে "বিসমিল্লাহি আউয়ালাহু ওয়া আখিরাহু" (আবু দাউদ ৩৭৬৭); ডান হাতে খাওয়া (মুসলিম ২০২০); পাত্রে নিজের কাছ থেকে খাওয়া (বুখারি ৫৩৭৬); খাবারের সমালোচনা না করা (বুখারি ৩৫৬৩); তিন চুমুকে পান (মুসলিম ২০২৮); সাধারণত দাঁড়িয়ে পান না করা (মুসলিম ২০২৪); পেট এক-তৃতীয়াংশ খাবার, এক-তৃতীয়াংশ পানি, এক-তৃতীয়াংশ বায়ুর বেশি না ভরা (তিরমিযি ২৩৮০); সাম্প্রদায়িক বরকত হিসেবে একসাথে খাওয়া (আবু দাউদ ৩৭৬৪); ভাগ করে খাওয়া (দুইয়ের খাবার তিনজনের জন্য যথেষ্ট, মুসলিম ২০৫৯); রুটিকে চামচ হিসেবে ব্যবহার; আঙুলে খাওয়া; আতিথেয়তার জন্য দোয়া; কী এড়াতে হবে, স্বর্ণ-রূপার পাত্র (বুখারি ৫৪২৬), শূকর ও তার উৎপন্ন, মদ ও নেশাকর দ্রব্য (আল-মায়িদা ৫:৯০-৯১), রক্ত, সুন্নাহ মতে যবাই না হওয়া প্রাণীর মাংস, আল্লাহ ব্যতীত অন্যের জন্য উৎসর্গীকৃত খাবার। মাংসের বিধানের জন্য /dhabihah এর সাথে ক্রস-লিঙ্ক।`,
  fas: `به‌زودی: نشستن برای خوردن (نه ایستاده، مسلم ۲۰۲۴)، گفتن بسم الله پیش و الحمدلله پس (ابن ماجه ۳۲۸۶)؛ در صورت فراموش کردن آغاز، «بسم الله أوله وآخره» (ابوداود ۳۷۶۷)؛ خوردن با دست راست (مسلم ۲۰۲۰)؛ خوردن از سمت نزدیک به خود در ظرف (بخاری ۵۳۷۶)؛ عدم انتقاد از غذا (بخاری ۳۵۶۳)؛ نوشیدن در سه نفس (مسلم ۲۰۲۸)؛ عدم نوشیدن سرپا به‌طور کلی (مسلم ۲۰۲۴)؛ پر نکردن شکم بیش از یک‌سوم غذا، یک‌سوم آب، یک‌سوم هوا (ترمذی ۲۳۸۰)؛ خوردن جمعی به‌عنوان برکت اجتماعی (ابوداود ۳۷۶۴)؛ سهیم بودن (سهم دو نفر برای سه نفر کافی است، مسلم ۲۰۵۹)؛ استفاده از نان به‌جای قاشق؛ خوردن با انگشتان؛ دعای میزبان؛ آنچه باید پرهیز شود، ظروف طلا و نقره (بخاری ۵۴۲۶)، خوک و مشتقات، شراب و مسکرات (مائده ۵:۹۰-۹۱)، خون، گوشت حیوانی که بر پایه‌ی سنت ذبح نشده، غذای تقدیم‌شده به غیر خدا. برای احکام گوشت، پیوند به /dhabihah.`,
  zh: `即将推出：坐食（非立食，穆斯林 2024）；食前诵「奉主之名」，食后诵「感赞真主」（伊本·马哲 3286）；若起初忘诵，则言「以真主之名，其始其终」（艾布·达乌德 3767）；以右手食（穆斯林 2020）；于盘中就近而食（布哈里 5376）；不谤饮食（布哈里 3563）；饮以三气（穆斯林 2028）；一般不立而饮（穆斯林 2024）；勿使腹中过于三分之一食、三分之一水、三分之一气（提尔米济 2380）；共食为社群之福（艾布·达乌德 3764）；分食（足二者足三者，穆斯林 2059）；以饼为匙；以指进食；为东道之祷；所当避者，金银器皿（布哈里 5426）、猪与其制品、酒与醉物（筵席章 5:90-91）、血、非依圣行所宰者之肉、为非真主而备之食。肉之判决可参阅 /dhabihah。`,
  yue: `即將推出：坐食（非立食，穆斯林 2024）；食前誦「奉主之名」，食後誦「感讚真主」（伊本·馬哲 3286）；若起初忘誦，則言「以真主之名，其始其終」（艾布·達烏德 3767）；以右手食（穆斯林 2020）；於盤中就近而食（布哈里 5376）；不謗飲食（布哈里 3563）；飲以三氣（穆斯林 2028）；一般不立而飲（穆斯林 2024）；勿使腹中過於三分之一食、三分之一水、三分之一氣（提爾米濟 2380）；共食為社群之福（艾布·達烏德 3764）；分食（足二者足三者，穆斯林 2059）；以餅為匙；以指進食；為東道之禱；所當避者，金銀器皿（布哈里 5426）、豬與其製品、酒與醉物（筵席章 5:90-91）、血、非依聖行所宰者之肉、為非真主而備之食。肉之判決可參閱 /dhabihah。`,
  ja: `近日追加：立たずに座って食べること（ムスリム 2024）、食事の前にビスミッラー、後にアルハムドゥリッラーを唱えること（イブン・マージャ 3286）、最初に忘れた場合は「ビスミッラーヒ・アウワラフ・ワ・アーヒラフ」（アブー・ダーウード 3767）、右手で食べること（ムスリム 2020）、皿から自分に近い方を食べること（ブハーリー 5376）、食べ物を非難しない（ブハーリー 3563）、三口に分けて飲む（ムスリム 2028）、原則として立って飲まない（ムスリム 2024）、胃の三分の一を食、三分の一を水、三分の一を空気に保つ（ティルミズィー 2380）、共に食する共同体の祝福（アブー・ダーウード 3764）、二人分の食は三人にも足りる（ムスリム 2059）、パンをすくいに用いること、指で食すること、主人のための祈願。避けるべきもの，金銀の器（ブハーリー 5426）、豚肉とその副産物、酒および酔わすもの（食卓章 5:90-91）、血、スンナに則って屠されなかった動物の肉、アッラー以外に捧げられた食物。肉の規定は /dhabihah へ相互参照。`,
  ru: `Скоро: есть сидя, а не стоя (Муслим 2024), Бисмиллях перед и Альхамдулиллях после (Ибн Маджа 3286); если забыл в начале, "Бисмиллях авваляху ва ахираху" (Абу Дауд 3767); есть правой рукой (Муслим 2020); есть с ближней стороны блюда (аль-Бухари 5376); не критиковать пищу (аль-Бухари 3563); пить в три глотка (Муслим 2028); в целом не пить стоя (Муслим 2024); не наполнять желудок более трети едой, трети водой, трети воздухом (Тирмизи 2380); совместная трапеза как благо общины (Абу Дауд 3764); делить (порция на двоих хватит троим, Муслим 2059); использовать хлеб как ложку; есть пальцами; дуа за хозяина. Чего избегать: посуда из золота и серебра (аль-Бухари 5426), свинина и её производные, вино и опьяняющее (аль-Маида 5:90-91), кровь, мясо животного, забитого не по Сунне, пища, посвящённая не Аллаху. Правила по мясу, на /dhabihah.`,
  es: `Próximamente: comer sentado (no de pie, Muslim 2024), decir Bismil-lah antes y Alhamdulillah después (Ibn Maja 3286); si se olvidó al comienzo, «Bismil-lahi awwalahu wa akhirahu» (Abu Dawud 3767); comer con la mano derecha (Muslim 2020); comer lo que está cerca de uno del plato (al-Bukhari 5376); no criticar la comida (al-Bukhari 3563); beber en tres respiraciones (Muslim 2028); en general no beber de pie (Muslim 2024); no llenar el estómago más allá de un tercio comida, un tercio agua, un tercio aire (Tirmidhi 2380); comer juntos como bendición comunitaria (Abu Dawud 3764); compartir (la ración para dos basta a tres, Muslim 2059); usar el pan como cuchara; comer con los dedos; la du'a por el anfitrión; qué evitar, vasijas de oro y plata (al-Bukhari 5426), el cerdo y sus derivados, el vino y los embriagantes (al-Ma'ida 5:90-91), la sangre, la carne no sacrificada según la Sunna, la comida consagrada a otro que Al-lah. Enlace cruzado con /dhabihah para los fallos de la carne.`,
  ko: `공개 예정: 앉아서 먹기(서서 먹지 않음, 무슬림 2024), 먼저 비스밀라, 나중에 알함두 릴라(이븐 마자 3286); 처음에 잊었다면 "비스밀라히 아우왈라후 와 아키라후"(아부 다우드 3767); 오른손으로 먹기(무슬림 2020); 접시에서 자기에게 가까운 것을 먹기(알부카리 5376); 음식을 비판하지 않음(알부카리 3563); 세 번의 숨으로 마시기(무슬림 2028); 대체로 서서 마시지 않음(무슬림 2024); 위를 3분의 1은 음식, 3분의 1은 물, 3분의 1은 공기로 두기(티르미디 2380); 공동체 축복으로 함께 먹기(아부 다우드 3764); 나누기(둘의 분량이 셋에게 족함, 무슬림 2059); 빵을 숟가락처럼 사용; 손가락으로 먹기; 주인을 위한 두아. 피해야 할 것, 금·은 용기(알부카리 5426), 돼지와 그 부산물, 술과 취하게 하는 것(알마이다 5:90-91), 피, 순나대로 도축되지 않은 동물의 고기, 알라 외의 이름으로 봉헌된 음식. 육류 규정은 /dhabihah로 상호 링크.`,
  ta: `விரைவில் வரும்: நின்று அல்ல அமர்ந்து உண்ணுதல் (முஸ்லிம் 2024), முதலில் பிஸ்மில்லாஹ் மற்றும் பின்னர் அல்ஹம்துலில்லாஹ் (இப்னு மாஜா 3286); முதலில் மறந்தால் "பிஸ்மில்லாஹி அவ்வலஹு வ ஆகிரஹு" (அபூ தாவூத் 3767); வலது கையால் உண்ணுதல் (முஸ்லிம் 2020); தட்டில் தன் அருகிலுள்ளதிலிருந்து உண்ணுதல் (புகாரி 5376); உணவை விமர்சிக்காதிருத்தல் (புகாரி 3563); மூன்று மூச்சில் குடித்தல் (முஸ்லிம் 2028); பொதுவாக நின்று குடிக்காதிருத்தல் (முஸ்லிம் 2024); வயிற்றை மூன்றில் ஒரு பங்கு உணவு, மூன்றில் ஒரு பங்கு நீர், மூன்றில் ஒரு பங்கு காற்று மட்டுமே நிரப்புதல் (திர்மிதி 2380); சமூக ஆசீர்வாதமாக ஒன்றாக உண்ணுதல் (அபூ தாவூத் 3764); பகிர்தல் (இருவருக்கான உணவு மூவருக்கு போதும், முஸ்லிம் 2059); ரொட்டியை கரண்டியாக பயன்படுத்துதல்; விரல்களால் உண்ணுதல்; வீட்டுக்காரருக்கான பிரார்த்தனை. என்ன தவிர்க்க வேண்டும், தங்கம் மற்றும் வெள்ளிப் பாத்திரங்கள் (புகாரி 5426), பன்றி மற்றும் அதன் விளைபொருட்கள், மது மற்றும் போதைப்பொருள் (அல்-மாஇதா 5:90-91), இரத்தம், ஸுன்னாவின்படி அறுக்கப்படாத விலங்கின் இறைச்சி, அல்லாஹ்-அல்லாதவற்றிற்கு அர்ப்பணிக்கப்பட்ட உணவு. இறைச்சி விதிகளுக்கு /dhabihah க்கு குறுக்கு இணைப்பு.`,
  si: `ඉදිරියේදී: වාඩිවී ආහාර ගැනීම (නැඟී සිටිමින් නොව, මුස්ලිම් 2024), පෙර බිස්මිල්ලාහ් සහ පසුව අල්හම්දුලිල්ලාහ් කීම (ඉබ්න් මාජා 3286); ආරම්භයේදී අමතක වුවහොත් "බිස්මිල්ලාහි අව්වලහු ව ආඛිරහු" (අබූ දාවූද් 3767); දකුණු අතින් ආහාර ගැනීම (මුස්ලිම් 2020); පිඟානේ තමන් ළඟින්ම ඇති දෙයින් ආහාර ගැනීම (බුකාරි 5376); ආහාරය විවේචනය නොකිරීම (බුකාරි 3563); හුස්ම තුනකින් පානය කිරීම (මුස්ලිම් 2028); සාමාන්‍යයෙන් නැඟී සිටිමින් නොපානය කිරීම (මුස්ලිම් 2024); බඩ එක තුනක් ආහාරයෙන්, එක තුනක් වතුරෙන්, එක තුනක් වාතයෙන් පිරවීම (තිර්මිදි 2380); සාමූහික ආශිර්වාදයක් ලෙස එකට ආහාර ගැනීම (අබූ දාවූද් 3764); බෙදා ගැනීම (දෙදෙනෙකුට ප්‍රමාණවත් තුන්දෙනෙකුට ප්‍රමාණවත්, මුස්ලිම් 2059); පාන් හැන්දක් ලෙස භාවිතා කිරීම; ඇඟිලිවලින් ආහාර ගැනීම; සත්කාරකයාට දුආව. වළක්වා ගත යුතු දේ, රන් සහ රිදී භාජන (බුකාරි 5426), හූරන් සහ එහි නිෂ්පාදන, මත්පැන් සහ මත්කරන දේවල් (අල්-මාඉදා 5:90-91), රුධිරය, සුන්නාවට අනුව නොකැපූ සත්වයන්ගේ මස්, අල්ලාහ් හැර වෙනත් අයෙකුට කැප කරන ලද ආහාර. මස් නීති සඳහා /dhabihah වෙත ක්‍රොස්-ලින්ක්.`,
};

export function EatingEtiquetteContent() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="آدَابُ الطَّعَام"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />
      <div className="max-w-4xl mx-auto px-6 py-16">
        <UnderConstructionCallout topic={TOPIC} />
      </div>
    </>
  );
}
