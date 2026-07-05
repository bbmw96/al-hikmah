import type { Metadata } from 'next';
import { PropheticMedicineContent } from '@/components/content/PropheticMedicineContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Prophetic Medicine  –  Fruits, Vegetables, Plants and Healing',
  description:
    "Every fruit, vegetable, plant and remedy the Prophet ﷺ named or used  –  their properties, the reasons behind their recommendation, and the stories of their use in his ﷺ household.",
};

export default function PropheticMedicinePage() {
  return <PropheticMedicineContent />;
}
