import type { Metadata } from 'next';
import { EB_Garamond, Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { LanguageProvider } from '@/lib/i18n/context';

const ebGaramond = EB_Garamond({
  variable: '--font-garamond',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Al-Hikmah',
    default: 'Al-Hikmah - Islamic Knowledge & Hadith Resource',
  },
  description:
    'A scholarly Islamic resource offering authentic hadith collections, stories of the prophets, supplications (duas), and guidance on worship - in Arabic, English, Malay, Turkish, Urdu, Bengali, and Persian.',
  keywords: ['Islam', 'hadith', 'quran', 'prophets', 'duas', 'hajj', 'umrah', 'Islamic knowledge'],
  openGraph: {
    title: 'Al-Hikmah - Islamic Knowledge & Hadith Resource',
    description:
      'Authentic hadith, stories of the prophets, duas, and guidance on Islamic worship - available in Arabic, English, Malay, Turkish, Urdu, Bengali, and Persian.',
    type: 'website',
    locale: 'en_GB',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en-GB"
      className={`${ebGaramond.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream font-inter text-forest">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
