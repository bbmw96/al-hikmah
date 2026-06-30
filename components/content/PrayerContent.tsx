'use client';

import { PageHeader } from '@/components/ui/PageHeader';
import { useLanguage } from '@/lib/i18n/context';
import { PRAYER_STEPS_CONTENT, type PrayerStepsContentKey } from '@/lib/i18n/content/prayer-steps-content';
import { PrayerTimesWidget } from '@/components/prayer/PrayerTimesWidget';
import { AdhanIqamahSection } from '@/components/prayer/AdhanIqamahSection';
import { FiveFardSection } from '@/components/prayer/FiveFardSection';
import { WuduSection } from '@/components/prayer/WuduSection';
import { PrayerStepsSection } from '@/components/prayer/PrayerStepsSection';
import { AfterPrayerSection } from '@/components/prayer/AfterPrayerSection';

export function PrayerContent() {
  const { lang } = useLanguage();
  const tc = (k: PrayerStepsContentKey): string => {
    const entry = PRAYER_STEPS_CONTENT[k] as Record<string, string | undefined>;
    return entry[lang] ?? entry.en ?? k;
  };

  return (
    <>
      <PageHeader
        title={tc('page_title')}
        arabicTitle="الصلاة"
        subtitle={tc('page_subtitle')}
      />

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        <PrayerTimesWidget />
        <AdhanIqamahSection />
        <FiveFardSection />
        <WuduSection />
        <PrayerStepsSection />
        <AfterPrayerSection />
      </div>
    </>
  );
}
