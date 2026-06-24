import type { Metadata } from 'next';
import { JumuahContent } from '@/components/content/JumuahContent';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Jumu'ah: The Friday Prayer | Al-Hikmah",
  description:
    "Jumu'ah is the congregational Friday Prayer  –  the weekly act of collective worship that distinguishes the Muslim community. Learn its Quranic command, who it is obligatory upon, the two khutbahs, the prayer's structure, etiquettes of the day, and the blessed moments unique to Friday.",
};

export default function JumuahPage() {
  return <JumuahContent />;
}
