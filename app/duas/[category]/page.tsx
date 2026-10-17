import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { DUA_CATEGORIES, getCategoryById } from '@/lib/data/duas';
import { DuasCategoryContent } from '@/components/content/DuasCategoryContent';

interface Props {
  params: Promise<{ category: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return DUA_CATEGORIES.map(c => ({ category: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryById(category);
  if (!cat) return {};
  return {
    title: cat.title,
    description: cat.description,
  };
}

export default async function DuasCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryById(category);
  if (!cat) notFound();

  return <DuasCategoryContent categoryId={category} />;
}
