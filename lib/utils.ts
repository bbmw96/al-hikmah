import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English', nativeLabel: 'English', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', dir: 'rtl' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', dir: 'ltr' },
  { code: 'ms', label: 'Malay', nativeLabel: 'Bahasa Melayu', dir: 'ltr' },
  { code: 'zh-cmn', label: 'Mandarin', nativeLabel: '普通话', dir: 'ltr' },
  { code: 'zh-yue', label: 'Cantonese', nativeLabel: '粵語', dir: 'ltr' },
  { code: 'ja', label: 'Japanese', nativeLabel: '日本語', dir: 'ltr' },
] as const;

export type LanguageCode = typeof SUPPORTED_LANGUAGES[number]['code'];

export function getLanguageLabel(code: LanguageCode): string {
  return SUPPORTED_LANGUAGES.find(l => l.code === code)?.label ?? 'English';
}

export function getLanguageDir(code: LanguageCode): 'ltr' | 'rtl' {
  return SUPPORTED_LANGUAGES.find(l => l.code === code)?.dir ?? 'ltr';
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function formatHadithNumber(num: number): string {
  return num.toString().padStart(4, '0');
}

export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return `${text.slice(0, length).trimEnd()}...`;
}
