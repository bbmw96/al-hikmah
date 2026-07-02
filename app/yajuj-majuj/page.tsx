import type { Metadata } from 'next';
import { YajujMajujContent } from '@/components/content/YajujMajujContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Ya\'juj and Ma\'juj (Gog and Magog) | Al-Hikmah',
  description:
    "A vast people descended from Nuh ﷺ through his son Yafith, walled behind the barrier of iron and molten copper built by Dhul-Qarnayn. When their release near the end of time comes, they will overrun the earth, drink up Lake Tiberias, and besiege the believers with 'Isa ﷺ, until Allah sends worms into their necks and destroys them all in a single night.",
};

export default function YajujMajujPage() {
  return <YajujMajujContent />;
}
