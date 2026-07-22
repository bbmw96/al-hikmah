'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { ArabicText } from '@/components/ui/ArabicText';
import { useLanguage } from '@/lib/i18n/context';
import { SALAWATS_CONTENT } from '@/lib/i18n/content/salawats-content';
import type { SalawatsContentKey } from '@/lib/i18n/content/salawats-content';

const ISTIKHARAH_DUA_AR =
  'اللَّهُمَّ إِنِّي أَسْتَخِيرُكَ بِعِلْمِكَ، وَأَسْتَقْدِرُكَ بِقُدْرَتِكَ، وَأَسْأَلُكَ مِنْ فَضْلِكَ الْعَظِيمِ، فَإِنَّكَ تَقْدِرُ وَلَا أَقْدِرُ، وَتَعْلَمُ وَلَا أَعْلَمُ، وَأَنْتَ عَلَّامُ الْغُيُوبِ. اللَّهُمَّ إِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ خَيْرٌ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاقْدُرْهُ لِي وَيَسِّرْهُ لِي ثُمَّ بَارِكْ لِي فِيهِ. وَإِنْ كُنْتَ تَعْلَمُ أَنَّ هَذَا الْأَمْرَ شَرٌّ لِي فِي دِينِي وَمَعَاشِي وَعَاقِبَةِ أَمْرِي، فَاصْرِفْهُ عَنِّي وَاصْرِفْنِي عَنْهُ، وَاقْدُرْ لِيَ الْخَيْرَ حَيْثُ كَانَ ثُمَّ أَرْضِنِي بِهِ.';
const ISTIKHARAH_DUA_TR =
  "Allahumma inni astakhiruka bi 'ilmika, wa astaqdiruka bi qudratika, wa as'aluka min fadlika-l 'azim, fa innaka taqdiru wa la aqdiru, wa ta'lamu wa la a'lamu, wa anta 'allamu-l ghuyub. Allahumma in kunta ta'lamu anna hadha-l amra khayrun li fi dini wa ma'ashi wa 'aqibati amri, faqdurhu li wa yassirhu li thumma barik li fih. Wa in kunta ta'lamu anna hadha-l amra sharrun li fi dini wa ma'ashi wa 'aqibati amri, fasrifhu 'anni wasrifni 'anhu, waqdur liya-l khayra haythu kana thumma ardini bih.";

const TAHAJJUD_OPEN_AR =
  'اللَّهُمَّ لَكَ الْحَمْدُ أَنْتَ نُورُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ قَيِّمُ السَّمَاوَاتِ وَالْأَرْضِ وَمَنْ فِيهِنَّ، وَلَكَ الْحَمْدُ أَنْتَ الْحَقُّ، وَوَعْدُكَ الْحَقُّ، وَقَوْلُكَ الْحَقُّ، وَلِقَاؤُكَ حَقٌّ، وَالْجَنَّةُ حَقٌّ، وَالنَّارُ حَقٌّ، وَالنَّبِيُّونَ حَقٌّ، وَمُحَمَّدٌ ﷺ حَقٌّ، وَالسَّاعَةُ حَقٌّ.';
const TAHAJJUD_OPEN_TR =
  "Allahumma laka-l hamd, anta nuru-s samawati wa-l ard wa man fihinna, wa laka-l hamd anta qayyimu-s samawati wa-l ard wa man fihinna, wa laka-l hamd anta-l haqq, wa wa'duka-l haqq, wa qawluka-l haqq, wa liqa'uka haqq, wa-l jannatu haqq, wa-n naru haqq, wa-n nabiyyuna haqq, wa Muhammadun sallallahu 'alayhi wa sallam haqq, wa-s sa'atu haqq.";

const DUHA_DUA_AR =
  'اللَّهُمَّ إِنَّ الضُّحَاءَ ضُحَاؤُكَ، وَالْبَهَاءَ بَهَاؤُكَ، وَالْجَمَالَ جَمَالُكَ، وَالْقُوَّةَ قُوَّتُكَ، وَالْقُدْرَةَ قُدْرَتُكَ، وَالْعِصْمَةَ عِصْمَتُكَ. اللَّهُمَّ إِنْ كَانَ رِزْقِي فِي السَّمَاءِ فَأَنْزِلْهُ، وَإِنْ كَانَ فِي الْأَرْضِ فَأَخْرِجْهُ، وَإِنْ كَانَ مُعَسَّرًا فَيَسِّرْهُ، وَإِنْ كَانَ حَرَامًا فَطَهِّرْهُ، وَإِنْ كَانَ بَعِيدًا فَقَرِّبْهُ، بِحَقِّ ضُحَائِكَ وَبَهَائِكَ وَجَمَالِكَ وَقُوَّتِكَ وَقُدْرَتِكَ، آتِنِي مَا آتَيْتَ عِبَادَكَ الصَّالِحِينَ.';
const DUHA_DUA_TR =
  "Allahumma inna-d duha'a duha'uka, wa-l baha'a baha'uka, wa-l jamala jamaluka, wa-l quwwata quwwatuka, wa-l qudrata qudratuka, wa-l 'ismata 'ismatuka. Allahumma in kana rizqi fi-s sama'i fa anzilhu, wa in kana fi-l ardi fa akhrijhu, wa in kana mu'assaran fa yassirhu, wa in kana haraman fa tahhirhu, wa in kana ba'idan fa qarribhu, bi haqqi duha'ika wa baha'ika wa jamalika wa quwwatika wa qudratika, atini ma atayta 'ibadaka-s salihin.";

export function SalawatsContent() {
  const { lang } = useLanguage();
  const tc = (key: SalawatsContentKey): string => {
    const entry = SALAWATS_CONTENT[key] as Record<string, string | undefined> | undefined;
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  };

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="الصَّلَوَاتُ الأُخْرَى"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-3xl mx-auto px-6 py-16 space-y-14">
        {/* Intro */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('intro_h')}
          </h2>
          <p className="text-forest/75 leading-relaxed">{tc('intro_p')}</p>
        </section>

        {/* Istikharah */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('istikharah_h')}
          </h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={ISTIKHARAH_DUA_AR} size="md" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('label_transliteration')}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{ISTIKHARAH_DUA_TR}</p>
            </div>
            <p className="text-forest/75 leading-relaxed text-sm">{tc('istikharah_p')}</p>
            <p className="text-xs text-gold/60 italic">{tc('istikharah_source')}</p>
          </article>
        </section>

        {/* Tahajjud */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('tahajjud_h')}
          </h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={TAHAJJUD_OPEN_AR} size="md" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('label_transliteration')}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{TAHAJJUD_OPEN_TR}</p>
            </div>
            <p className="text-forest/75 leading-relaxed text-sm">{tc('tahajjud_p')}</p>
            <p className="text-xs text-gold/60 italic">{tc('tahajjud_source')}</p>
          </article>
        </section>

        {/* Duha */}
        <section>
          <h2 className="section-title font-garamond text-2xl md:text-3xl font-semibold text-forest mb-4">
            {tc('duha_h')}
          </h2>
          <article className="card-islamic space-y-4">
            <ArabicText text={DUHA_DUA_AR} size="md" />
            <div className="border-t border-gold/10 pt-3">
              <p className="text-xs text-gold/70 font-medium uppercase tracking-wider mb-1">{tc('label_transliteration')}</p>
              <p className="text-forest/60 italic text-sm leading-relaxed">{DUHA_DUA_TR}</p>
            </div>
            <p className="text-forest/75 leading-relaxed text-sm">{tc('duha_p')}</p>
            <p className="text-xs text-gold/60 italic">{tc('duha_source_note')}</p>
          </article>
        </section>

        {/* In-Development notice */}
        <section>
          <article className="card-forest rounded-2xl p-6">
            <h3 className="font-garamond text-lg font-semibold text-gold mb-3">{tc('indev_h')}</h3>
            <p className="text-cream/85 leading-relaxed text-sm mb-3">{tc('indev_intro')}</p>
            <ul className="text-cream/70 text-sm space-y-1 list-disc list-inside">
              <li>{tc('indev_tarawih')}</li>
              <li>{tc('indev_musafir')}</li>
              <li>{tc('indev_kusuf')}</li>
              <li>{tc('indev_istisqa')}</li>
              <li>{tc('indev_hajah')}</li>
              <li>{tc('indev_tawbah')}</li>
              <li>{tc('indev_awwabin')}</li>
              <li>{tc('indev_tilawah')}</li>
              <li>{tc('indev_shukr')}</li>
            </ul>
          </article>
        </section>
      </div>
    </>
  );
}
