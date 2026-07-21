'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';

const NEW_CLOTHES_DUA_AR =
  'الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ.';
const NEW_CLOTHES_DUA_TR =
  "Alhamdulillahi-l ladhi kasani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah.";
const NEW_CLOTHES_DUA_EN =
  'All praise is due to Allah who has clothed me with this and provided it for me with no power or strength from myself.';

const TITLE: Record<string, string> = {
  en: `Adab al-Libas, The Etiquettes of Dressing`,
  ms: `Adab al-Libas, Adab Berpakaian`,
  tur: `Âdâbü'l-Libâs, Giyim Âdâbı`,
  urd: `آدابِ لباس، کپڑے پہننے کے آداب`,
  ben: `আদাব আল-লিবাস, পোশাকের আদব`,
  fas: `آداب لباس، آداب پوشش`,
  zh: `服饰之礼节，「阿达布·利巴斯」`,
  yue: `服飾之禮節，「阿達布·利巴斯」`,
  ja: `衣服の作法，アダーブ・アル＝リバース`,
  ru: `Этикет одежды, Адаб аль-Либас`,
  es: `Adab al-Libas, la etiqueta de vestirse`,
  ko: `의복의 예절, 아다브 알리바스`,
  ta: `ஆதாப் அல்-லிபாஸ், ஆடை உடையின் நடத்தை`,
  si: `අදාබ් අල්-ලිබාස්, ඇඳුම් අදාබ්`,
};

const SUBTITLE: Record<string, string> = {
  en: `The Sunnah of putting on and removing clothes, the du'a for new garments, the wisdom of modesty, and the specific rulings on what men and women may wear.`,
  ms: `Sunnah memakai dan menanggalkan pakaian, doa untuk pakaian baru, hikmah kesopanan, dan hukum khusus mengenai apa yang boleh dipakai oleh lelaki dan wanita.`,
  tur: `Elbise giyme ve çıkarmanın Sünneti, yeni bir elbise için okunacak duâ, hayâ ve tesettürün hikmeti ve erkek-kadın giyim hususunda özel hükümler.`,
  urd: `کپڑے پہننے اور اتارنے کی سنت، نئے کپڑے کی دعا، حیا و پردے کی حکمت، اور مرد و عورت کے مخصوص لباس کے احکام۔`,
  ben: `পোশাক পরা ও খোলার সুন্নাহ, নতুন কাপড়ের দোয়া, শালীনতার হিকমাহ, এবং পুরুষ ও নারীর নির্দিষ্ট পোশাকের বিধান।`,
  fas: `سنت پوشیدن و درآوردن لباس، دعای برای لباس نو، حکمت حجاب و حیا، و احکام ویژه‌ی پوشش مردان و زنان.`,
  zh: `穿脱衣服之圣行、着新衣之祷、羞耻与端庄之智慧，以及男女穿着之特定判决。`,
  yue: `穿脫衣服之聖行、著新衣之禱、羞恥同端莊之智慧，以及男女穿著之特定判決。`,
  ja: `衣服を着脱するスンナ、新しい衣服のための祈願、慎みの叡智、そして男女それぞれが着ることのできるものに関する具体的な規定。`,
  ru: `Сунна надевания и снятия одежды, дуа для новой одежды, мудрость скромности и особые правила о том, что могут носить мужчины и женщины.`,
  es: `La Sunna de vestirse y desvestirse, la du'a por una prenda nueva, la sabiduría del pudor, y los fallos específicos sobre lo que pueden vestir hombres y mujeres.`,
  ko: `옷을 입고 벗는 순나, 새 옷을 위한 두아, 정숙함의 지혜, 그리고 남녀 각자가 입을 수 있는 것에 관한 구체적 규정.`,
  ta: `ஆடை அணிதல் மற்றும் அகற்றுதலின் ஸுன்னா, புதிய ஆடைக்கான பிரார்த்தனை, தூய்மையின் ஞானம், மற்றும் ஆண்-பெண் ஆடையின் மீதான குறிப்பிட்ட விதிகள்.`,
  si: `ඇඳුම් ඇඳීමේ සහ ගැලවීමේ සුන්නාව, නව ඇඳුමකට දුආව, ලජ්ජාවේ ප්‍රඥාව, සහ පිරිමින්ට හා ගැහැනුන්ට ඇඳිය හැකි දේ පිළිබඳ නිශ්චිත නීති.`,
};

const TOPIC: Record<string, string> = {
  en: `Coming: the Sunnah of starting with the right side when putting clothes on and the left when removing them (Bukhari 168); the du'a for wearing a new garment "Al-hamdu lillahi alladhi kasani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah" (Abu Dawud 4023); the general obligation of covering the awrah for men (navel to knee) and women (all except face and hands per the majority); the ruling on isbal (letting the garment drag below the ankles out of pride, Bukhari 5787); dyed clothes; white as the most beloved colour to the Prophet ﷺ (Abu Dawud 4061); the ihram garments; the wisdom of dress as a marker of dignity and worship. Prohibited materials and colours are covered on a separate page.`,
  ms: `Akan datang: Sunnah memulakan dengan sebelah kanan ketika memakai dan sebelah kiri ketika menanggalkan (Bukhari 168); doa memakai pakaian baru "Alhamdulillahilladhi kasani hadha warazaqanihi min ghayri hawlin minni wa la quwwah" (Abu Dawud 4023); kewajipan umum menutup aurat lelaki (pusat ke lutut) dan wanita (semuanya kecuali muka dan tangan menurut majoriti); hukum isbal (menjulur pakaian di bawah buku lali kerana sombong, Bukhari 5787); pakaian berwarna; putih sebagai warna yang paling disukai Nabi ﷺ (Abu Dawud 4061); pakaian ihram; hikmah pakaian sebagai penanda kehormatan dan ibadah. Bahan dan warna yang diharamkan diliputi dalam halaman berasingan.`,
  tur: `Yakında: giyerken sağdan, çıkarırken soldan başlamanın Sünneti (Buhârî 168); yeni bir elbise için "el-Hamdü lillâhillezî kesânî hâzâ ve razakanîhi min ğayri havlin minnî ve lâ kuvveh" duâsı (Ebû Dâvud 4023); erkeğin (göbekten dize) ve kadının (yüz ve eller hariç, cumhura göre) avret örtme umum vecîbesi; kibirle eteğini topuklardan aşağı sarkıtmanın (isbâl) hükmü (Buhârî 5787); boyalı elbiseler; Hz. Peygamber'in ﷺ en sevdiği renk olan beyaz (Ebû Dâvud 4061); ihram elbisesi; kılık kıyafetin izzet ve ibadet nişanı olma hikmeti. Haram olan kumaş ve renkler ayrı bir sayfada ele alınır.`,
  urd: `آنے والا: پہنتے وقت دائیں طرف سے شروع کرنے اور اتارتے وقت بائیں سے شروع کرنے کی سنت (بخاری ۱۶۸)؛ نئے کپڑے پہننے کی دعا "الْحَمْدُ لِلَّهِ الَّذِي كَسَانِي هَذَا وَرَزَقَنِيهِ مِنْ غَيْرِ حَوْلٍ مِنِّي وَلَا قُوَّةٍ" (ابو داود ۴۰۲۳)؛ مرد (ناف سے گھٹنے تک) اور عورت (چہرے اور ہاتھوں کے علاوہ سب، جمہور کے مطابق) کے لیے ستر ڈھانپنے کی عام واجب؛ اسبال کا حکم (تکبر سے لباس ٹخنوں سے نیچے گھسیٹنا، بخاری ۵۷۸۷)؛ رنگین کپڑے؛ سفید نبی ﷺ کا سب سے محبوب رنگ (ابو داود ۴۰۶۱)؛ احرام کے کپڑے؛ لباس کی حکمت وقار اور عبادت کی نشانی کے طور پر۔ ممنوعہ مواد اور رنگ الگ صفحہ پر ہیں۔`,
  ben: `আসছে: পোশাক পরার সময় ডান পাশ ও খোলার সময় বাম পাশ থেকে শুরুর সুন্নাহ (বুখারি ১৬৮); নতুন কাপড় পরার দোয়া "আলহামদুলিল্লাহিল্লাযি কাসানি হাযা ওয়া রাযাকানিহি মিন গায়রি হাওলিন মিন্নি ওয়া লা কুওয়াহ" (আবু দাউদ ৪০২৩); পুরুষের (নাভি থেকে হাঁটু) ও নারীর (মুখমণ্ডল ও হাত ব্যতীত সব, সংখ্যাগরিষ্ঠ মতে) সতর ঢাকার সাধারণ ফরয; ইসবাল-এর বিধান (অহংকারে গোড়ালির নিচে কাপড় ঝুলিয়ে রাখা, বুখারি ৫৭৮৭); রঙিন পোশাক; নবী ﷺ-এর কাছে সবচেয়ে প্রিয় রঙ সাদা (আবু দাউদ ৪০৬১); ইহরামের পোশাক; পোশাকের হিকমাহ মর্যাদা ও ইবাদতের চিহ্ন হিসেবে। নিষিদ্ধ উপাদান ও রঙ পৃথক পৃষ্ঠায় রয়েছে।`,
  fas: `به‌زودی: سنت آغاز از سمت راست هنگام پوشیدن و از سمت چپ هنگام درآوردن (بخاری ۱۶۸)؛ دعای پوشش لباس نو «الحمد لله الذی کسانی هذا ورزقنیه من غیر حول منی ولا قوة» (ابوداود ۴۰۲۳)؛ وجوب پوشاندن عورت برای مرد (از ناف تا زانو) و زن (همه به‌جز صورت و دستان بنا بر مشهور)؛ حکم اسبال (کشیدن لباس از سر تکبر تا زیر قوزک، بخاری ۵۷۸۷)؛ لباس‌های رنگی؛ سفید محبوب‌ترین رنگ نزد پیامبر ﷺ (ابوداود ۴۰۶۱)؛ لباس احرام؛ حکمت لباس به‌عنوان نشانه‌ی وقار و عبادت. مواد و رنگ‌های ممنوع در صفحه‌ای جداگانه آمده است.`,
  zh: `即将推出：穿衣时从右起、脱衣时从左起之圣行（布哈里 168）；着新衣之祷「感赞真主，予我此衣，非以我力我能得之」（艾布·达乌德 4023）；男（脐至膝）女（依大多数派：面手之外皆是）遮盖羞体之通义务；「伊斯巴勒」（骄矜曳衣过踝）之判决（布哈里 5787）；染色之衣；先知 ﷺ 最爱之色为白（艾布·达乌德 4061）；受戒之衣（伊哈拉姆）；服饰作为尊严与拜功之标志的智慧。禁用之布料与颜色于另页详之。`,
  yue: `即將推出：穿衣時從右起、脫衣時從左起之聖行（布哈里 168）；著新衣之禱「感讚真主，予我此衣，非以我力我能得之」（艾布·達烏德 4023）；男（臍至膝）女（依大多數派：面手之外皆是）遮蓋羞體之通義務；「伊斯巴勒」（驕矜曳衣過踝）之判決（布哈里 5787）；染色之衣；先知 ﷺ 最愛之色為白（艾布·達烏德 4061）；受戒之衣（伊哈拉姆）；服飾作為尊嚴與拜功之標誌的智慧。禁用之布料與顏色喺另頁詳之。`,
  ja: `近日追加：衣服を着るときは右から、脱ぐときは左からのスンナ（ブハーリー 168）、新しい衣のための祈願「アルハムドゥ・リッラーヒル・ラズィー・カサーニー・ハーザー・ワ・ラザカニーヒ・ミン・ガイリ・ハウリン・ミンニー・ワ・ラー・クッワ」（アブー・ダーウード 4023）、男性はへそから膝まで、女性は多数派の見解で顔と手を除く全てのアウラを覆う一般義務、イスバール（傲慢から衣を踝より下に引きずること）の禁（ブハーリー 5787）、染色された衣服、預言者 ﷺ が最も愛された色である白（アブー・ダーウード 4061）、イフラームの衣、尊厳と崇拝の徴としての衣の叡智。禁じられる素材と色は別ページで扱う。`,
  ru: `Скоро: Сунна начинать с правой стороны при одевании и с левой при снятии одежды (аль-Бухари 168); дуа для новой одежды "Аль-хамду ли-лляхи ллязи касани хаза ва разакани-хи мин гайри хаулин минни ва ля кувва" (Абу Дауд 4023); общая обязанность закрывать аврат для мужчин (от пупка до колен) и для женщин (всё кроме лица и кистей по мнению большинства); правило исбал (высокомерное волочение одежды ниже щиколоток, аль-Бухари 5787); окрашенные одежды; белый как самый любимый цвет Пророка ﷺ (Абу Дауд 4061); одеяния ихрама; мудрость одежды как знака достоинства и поклонения. Запретные материалы и цвета, на отдельной странице.`,
  es: `Próximamente: la Sunna de comenzar por el lado derecho al vestirse y por el izquierdo al desvestirse (al-Bukhari 168); la du'a al ponerse una prenda nueva "Al-hamdu lil-lahi lladhi kasani hadha wa razaqanihi min ghayri hawlin minni wa la quwwah" (Abu Dawud 4023); la obligación general de cubrir la awrah para el varón (del ombligo a la rodilla) y para la mujer (todo excepto rostro y manos, según la mayoría); el fallo sobre el isbal (arrastrar la prenda por debajo de los tobillos por soberbia, al-Bukhari 5787); las prendas teñidas; el blanco como color más amado por el Profeta ﷺ (Abu Dawud 4061); las prendas del ihram; la sabiduría del vestir como signo de dignidad y adoración. Los materiales y colores prohibidos se tratan en una página aparte.`,
  ko: `공개 예정: 옷을 입을 때 오른쪽, 벗을 때 왼쪽부터 하는 순나(알부카리 168); 새 옷을 입을 때 두아 "알함두 릴라힐 라디 카사니 하다 와 라자카니히 민 가이린 하울린 민니 와 라 꾸와" (아부 다우드 4023); 남자의 아우라(배꼽~무릎)와 여자(다수설: 얼굴과 손 제외)의 일반적 가리는 의무; 이스발(교만하게 옷을 발목 아래로 끄는 것)의 규정(알부카리 5787); 염색한 옷; 예언자 ﷺ 께서 가장 사랑하신 흰색(아부 다우드 4061); 이흐람 옷; 존엄과 예배의 상징으로서 의복의 지혜. 금지된 재질과 색은 별도 페이지에서.`,
  ta: `விரைவில் வரும்: ஆடையை அணியும்போது வலப் புறத்திலிருந்தும் அகற்றும்போது இடப் புறத்திலிருந்தும் தொடங்கும் ஸுன்னா (புகாரி 168); புதிய ஆடையை அணியும்போது பிரார்த்தனை "அல்-ஹம்துலில்லாஹில்லதி கஸானி ஹதா வ ரஸகனிஹி மின் கைரி ஹவ்லின் மின்னி வ லா குவ்வா" (அபூ தாவூத் 4023); ஆண்களுக்கு (கொப்பூழ் முதல் முழங்கால் வரை) மற்றும் பெண்களுக்கு (பெரும்பான்மையினர் படி முகம், கைகள் தவிர அனைத்தும்) ஔராவை மறைக்கும் பொது கடமை; இஸ்பால் தீர்ப்பு (ஆடையை பெருமையால் கணுக்காலுக்குக் கீழே இழுத்தல், புகாரி 5787); வண்ணமிட்ட ஆடைகள்; நபி ﷺ க்கு மிக விருப்பமான வெண்மை (அபூ தாவூத் 4061); இஹ்ராம் ஆடைகள்; கண்ணியம் மற்றும் வணக்கத்தின் அடையாளமாக ஆடையின் ஞானம். தடைசெய்யப்பட்ட பொருட்கள் மற்றும் வண்ணங்கள் தனிப் பக்கத்தில் உள்ளன.`,
  si: `ඉදිරියේදී: ඇඳුම් ඇඳීමේදී දකුණු පැත්තෙන් සහ ගැලවීමේදී වම් පැත්තෙන් ආරම්භ කිරීමේ සුන්නාව (බුකාරි 168); නව ඇඳුම් ඇඳීමට දුආව "අල්-හම්දු ලිල්ලාහිල්ලදී කසානි හදා ව රසකනිහි මින් ගෛරි හව්ලින් මින්නී ව ලා කුව්වා" (අබූ දාවූද් 4023); පිරිමින්ට (බඩ සිට දණහිස දක්වා) සහ ගැහැනුන්ට (බහුතරයේ මතය අනුව මුහුණ සහ අත් හැර සියල්ල) ඖරා වැසීමේ පොදු බැඳීම; ඉස්බාල් නීතිය (ආඩම්බරයෙන් ඇඳුම වළලුකරට පහළින් ඇදගෙන යාම, බුකාරි 5787); පාට කළ ඇඳුම්; නබි ﷺ තුමන්ගේ ප්‍රියතම වර්ණය සුදු (අබූ දාවූද් 4061); ඉහ්‍රාම් ඇඳුම්; ගෞරවය සහ නමස්කාරයේ ලක්‍ෂණයක් ලෙස ඇඳුම්හි ප්‍රඥාව. තහනම් ද්‍රව්‍ය සහ වර්ණ වෙනම පිටුවක ඇත.`,
};

export function ClothingEtiquetteContent() {
  const { lang } = useLanguage();
  return (
    <>
      <PageHeader
        title={TITLE[lang] ?? TITLE.en}
        arabicTitle="آدَابُ اللِّبَاس"
        subtitle={SUBTITLE[lang] ?? SUBTITLE.en}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-12">
        {/* Awrah */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Purpose of Dress: Covering and Dignity
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              The Qur’an anchors the whole subject in one verse: <em>“O children of Adam, We have sent down to you clothing to conceal your private parts and as adornment, but the clothing of taqwa, that is best. That is from the signs of Allah, that they may remember.”</em> (al-A’raf 7:26).
            </p>
            <p className="text-forest/75 text-sm leading-relaxed">
              Islam’s teaching on clothing therefore serves two ends at once: to <strong>cover</strong> (the outward function) and to <strong>adorn with dignity</strong> (the inward function). Both are commanded, and both are worship.
            </p>
            <p className="text-forest/70 text-sm leading-relaxed">
              The obligatory covering (<em>awrah</em>) for men is from the navel to the knee. For women in the presence of non-mahram men, the majority position covers everything except the face and hands; the Hanbali and some others require the face too. All schools agree the covering must be loose, not transparent, and not designed to attract attention.
            </p>
          </article>
        </section>

        {/* Right side first */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            Right Side First When Putting On, Left When Removing
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              ‘Aisha (ra) said: <em>“The Prophet ﷺ used to love to begin with the right side in his purification, in combing his hair, and in putting on his shoes.”</em>
            </p>
            <p className="text-forest/75 text-sm leading-relaxed">
              For clothes: put on the right sleeve first, the right trouser-leg first, the right shoe first. When removing, do the reverse. This is one of the general rules of tayamun (preferring the right for what is honourable, and the left for what it is being removed from).
            </p>
            <p className="text-xs text-gold/60 italic">Source: al-Bukhari 168, Muslim 268; extended to clothing in Abu Dawud 4141.</p>
          </article>
        </section>

        {/* New clothes dua */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Du'a When Wearing a New Garment
          </h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={NEW_CLOTHES_DUA_AR} size="lg" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">Transliteration</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{NEW_CLOTHES_DUA_TR}</p>
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mt-3 mb-1">Meaning</p>
              <p className="text-forest/75 text-sm leading-relaxed">{NEW_CLOTHES_DUA_EN}</p>
            </div>
            <p className="text-forest/70 text-sm leading-relaxed">
              The Prophet ﷺ said: <em>“Whoever wears a new garment and says this, then takes off the old garment and gives it away in charity, he is under the protection of Allah in this world and the next.”</em>
            </p>
            <p className="text-xs text-gold/60 italic">Source: Abu Dawud 4020, al-Tirmidhi 1767 (Mu’adh ibn Anas), Hasan.</p>
          </article>
        </section>

        {/* White */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Colour White
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              The Prophet ﷺ said: <em>“Wear white clothes, for they are the best of your clothes, and shroud your dead in them.”</em>
            </p>
            <p className="text-forest/70 text-sm leading-relaxed">
              White is not the only permissible colour, the Prophet ﷺ himself wore red-and-black striped Yemeni cloaks (al-hulla al-hamra), a green Yemeni cloak, and black turbans. The point is that white is the most beloved, not that others are forbidden.
            </p>
            <p className="text-xs text-gold/60 italic">Source: Abu Dawud 3878, 4061, al-Tirmidhi 994.</p>
          </article>
        </section>

        {/* Isbal */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Ruling on Isbal, Dragging the Garment
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              The Prophet ﷺ said: <em>“Whatever of the lower garment is below the ankles is in the Fire.”</em> (al-Bukhari 5787).
            </p>
            <p className="text-forest/70 text-sm leading-relaxed">
              And: <em>“Three whom Allah will not speak to on the Day of Resurrection, nor look at, nor purify, and theirs is a painful punishment: the one who lets his garment drag below the ankles, the one who reminds others of his favours, and the one who sells goods with false oaths.”</em> (Muslim 106, Abu Dharr).
            </p>
            <p className="text-forest/70 text-sm leading-relaxed">
              When Abu Bakr al-Siddiq (ra) said his lower garment slipped below the ankles unless he was constantly aware of it, the Prophet ﷺ replied: <em>“You are not doing it out of pride.”</em> This anchors the majority interpretation: the sin is in the pride, not the fabric alone. But the safe practice, and the one closer to the Sunnah, is to keep the garment above the ankles.
            </p>
            <p className="text-xs text-gold/60 italic">Source: al-Bukhari 3665, 5788 for the Abu Bakr exception.</p>
          </article>
        </section>

        {/* No arrogance */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            No Arrogance in Dress
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              The Prophet ﷺ said: <em>“He who has an atom’s weight of pride in his heart will not enter Paradise.”</em> A man said, <em>“What if a man loves to have beautiful clothes and beautiful shoes?”</em> He ﷺ replied: <em>“Allah is beautiful and loves beauty. Pride is rejecting the truth and looking down on people.”</em>
            </p>
            <p className="text-forest/70 text-sm leading-relaxed">
              This hadith settles a common confusion: the Islamic warning is not against looking well but against wearing clothes to feel superior. Take care of appearance; drop the arrogance.
            </p>
            <p className="text-xs text-gold/60 italic">Source: Muslim 91 (Abdullah ibn Mas’ud).</p>
          </article>
        </section>

        {/* Ihram */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Ihram Garments
          </h2>
          <article className="card-islamic space-y-3">
            <p className="text-forest/75 text-sm leading-relaxed">
              For Hajj and Umrah, men enter ihram in two unstitched white pieces: an <em>izar</em> (wrap around the lower body) and a <em>rida</em> (draped over the upper body). No stitched clothes, no head-covering that touches the head, no scent applied after entering ihram, no sewn shoes for feet.
            </p>
            <p className="text-forest/75 text-sm leading-relaxed">
              Women wear their normal modest clothing in ihram, of any colour that meets the general awrah standards. They do not cover the face with a niqab attached to the head during ihram itself, but may drop the veil when non-mahram men approach.
            </p>
            <p className="text-forest/70 text-sm leading-relaxed">
              The wisdom is deep: at the greatest gathering of the servants, all outward markers of rank, wealth, and origin are stripped. Rich and poor, king and shepherd stand identically clothed, in the plain white that will one day be their shroud.
            </p>
            <p className="text-xs text-gold/60 italic">Cross-linked to /hajj-umrah for the full ihram rulings.</p>
          </article>
        </section>

        {/* Wisdom */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            The Wisdom of the Islamic Dress Code
          </h2>
          <article className="card-forest rounded-2xl p-6 space-y-3">
            <p className="text-cream/85 text-sm leading-relaxed">
              The Prophet ﷺ said: <em>“Eat and drink, and give charity and dress, without extravagance or arrogance.”</em> (al-Bukhari, ta’liq, and Ahmad 6695).
            </p>
            <p className="text-cream/85 text-sm leading-relaxed">
              Islam’s dress code sits at the intersection of five concerns: <strong>covering</strong> (satr al-‘awrah), <strong>modesty</strong> (haya), <strong>gender distinction</strong> (see /prohibited-clothing), <strong>avoidance of ostentation</strong>, and <strong>identification with the believing community</strong>. When these five are met, the door to how one dresses is open, colour, material, cut, and style, are largely a matter of local custom and personal taste.
            </p>
            <p className="text-cream/85 text-sm leading-relaxed">
              For the specific list of forbidden materials and colours (silk and gold for men, pure red in some views, imitation of the other gender, imitation of disbelievers in specifically religious dress), see the <a href="/prohibited-clothing" className="text-gold underline">Prohibited Clothing</a> page.
            </p>
          </article>
        </section>
      </div>
    </>
  );
}
