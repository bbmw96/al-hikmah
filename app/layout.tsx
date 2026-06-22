import type { Metadata } from 'next';
import { EB_Garamond, Inter, Scheherazade_New } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Providers } from './providers';

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

const scheherazade = Scheherazade_New({
  variable: '--font-scheherazade',
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700'],
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
      className={`${ebGaramond.variable} ${inter.variable} ${scheherazade.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        <link rel="preconnect" href="https://fastly.jsdelivr.net" />
        <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
      </head>
      <body className="min-h-full flex flex-col bg-cream font-inter text-forest">
        <Providers>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
