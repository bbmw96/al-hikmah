import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SUPPORTED_LANGUAGES = [
  { code: 'en',  label: 'English',  nativeLabel: 'English',         dir: 'ltr', apiPrefix: 'eng' },
  { code: 'ms',  label: 'Malay',    nativeLabel: 'Bahasa Melayu',   dir: 'ltr', apiPrefix: 'ind' },
  { code: 'tur', label: 'Turkish',  nativeLabel: 'Türkçe',          dir: 'ltr', apiPrefix: 'tur' },
  { code: 'urd', label: 'Urdu',     nativeLabel: 'اردو',            dir: 'rtl', apiPrefix: 'urd' },
  { code: 'ben', label: 'Bengali',  nativeLabel: 'বাংলা',           dir: 'ltr', apiPrefix: 'ben' },
  { code: 'fas', label: 'Persian',  nativeLabel: 'فارسی',           dir: 'rtl', apiPrefix: 'fas' },
  { code: 'es',  label: 'Spanish',  nativeLabel: 'Español',         dir: 'ltr', apiPrefix: 'spa' },
  { code: 'ru',  label: 'Russian',  nativeLabel: 'Русский',         dir: 'ltr', apiPrefix: 'rus' },
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
