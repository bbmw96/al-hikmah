import type { Metadata } from 'next';
import Link from 'next/link';
import { PageHeader } from '@/components/ui/PageHeader';
import { BookOpen, Globe, Shield, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About',
  description: 'About Al-Hikmah — a scholarly Islamic knowledge resource for Muslims and non-Muslims alike.',
};

const PRINCIPLES = [
  {
    icon: Shield,
    title: 'Scholarly Authenticity',
    description:
      "All hadith texts are sourced from established collections. Authenticity grades (sahih, hasan, da'if) are displayed alongside every tradition, following the methodology of classical hadith scholarship.",
  },
  {
    icon: Globe,
    title: 'Multi-Language Access',
    description:
      "Content is presented in Arabic alongside contextual — not literal — translations in English, Spanish, Mandarin, Cantonese, Japanese, and Malay, respecting the depth and nuance of each language.",
  },
  {
    icon: BookOpen,
    title: 'Open Knowledge',
    description:
      'Al-Hikmah is designed to be accessible to both Muslims deepening their understanding and non-Muslims seeking to understand the Islamic tradition. No prior knowledge is assumed.',
  },
  {
    icon: Heart,
    title: 'Respect for the Tradition',
    description:
      'Every piece of content is presented with the reverence owed to it. The Arabic original is always shown for hadith. The Prophet ﷺ is mentioned with his proper honorific.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Al-Hikmah"
        arabicTitle="حول الحكمة"
        subtitle="A scholarly resource for authentic Islamic knowledge — open to all who seek it."
      />

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-14">
        {/* Mission */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-6">
            Our Mission
          </h2>
          <div className="prose-islamic space-y-4">
            <p>
              Al-Hikmah — the Arabic word for wisdom — exists to make authentic Islamic knowledge accessible to every person who seeks it, regardless of their background or prior understanding of the religion.
            </p>
            <p>
              The Islamic scholarly tradition is one of the most meticulous in human history. For over 1,400 years, scholars have preserved the words and actions of the Prophet Muhammad ﷺ with extraordinary care — verifying chains of narration, scrutinising the character of every narrator, and cross-referencing traditions against one another. Al-Hikmah aims to bring that tradition to a modern audience.
            </p>
            <p>
              Every hadith presented here comes from established, authenticated collections. Every supplication (du'a) has a verified source. Every story of the prophets draws on classical scholarly commentary. Our goal is clarity, accuracy, and reverence for the tradition.
            </p>
          </div>
        </section>

        {/* Principles */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-8">
            Our Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {PRINCIPLES.map(p => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="card-islamic flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-forest flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-gold" aria-hidden="true" />
                  </div>
                  <h3 className="font-garamond text-lg font-semibold text-forest">{p.title}</h3>
                  <p className="text-forest/60 text-sm leading-relaxed">{p.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-6">
            Languages
          </h2>
          <p className="text-forest/70 leading-relaxed mb-6">
            Al-Hikmah provides contextual translations in seven languages. We use idiomatic, natural translations rather than word-for-word renderings, because Islamic texts — especially hadith — carry layers of meaning that literal translation often fails to convey. This is especially important for East Asian languages such as Japanese and Cantonese, where the grammatical structure and cultural context require a thoughtful approach.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {['Arabic', 'English', 'Spanish', 'Malay', 'Mandarin', 'Cantonese', 'Japanese'].map(lang => (
              <div key={lang} className="bg-gold/5 border border-gold/20 rounded-lg px-4 py-3 text-center">
                <span className="text-forest font-medium text-sm">{lang}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Sources */}
        <section>
          <h2 className="section-title font-garamond text-2xl font-semibold text-forest mb-6">
            Sources
          </h2>
          <div className="prose-islamic space-y-3">
            <p>
              Hadith texts are provided by the open-access Hadith API (fawazahmed0), which covers the major canonical collections. Scholarly metadata, biographical information, and commentary are compiled from classical works including:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-forest/70 text-sm">
              <li>Ibn Kathir's <em>Al-Bidayah wa al-Nihayah</em></li>
              <li>Al-Nawawi's <em>Riyadh al-Salihin</em> and <em>Commentary on Sahih Muslim</em></li>
              <li>Ibn Hajar al-Asqalani's <em>Fath al-Bari</em></li>
              <li>Ibn Hisham's <em>Sirat al-Nabawiyyah</em></li>
              <li>Al-Ghazali's <em>Ihya' Ulum al-Din</em></li>
              <li>Ibn al-Qayyim's <em>Zad al-Ma'ad</em></li>
            </ul>
          </div>
        </section>

        <div className="text-center pt-6">
          <Link href="/hadith" className="btn-primary text-base px-8 py-3.5">
            Begin Exploring
          </Link>
        </div>
      </div>
    </>
  );
}
