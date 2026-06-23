import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryById } from '@/lib/data/duas';
import { DuasCategoryContent } from '@/components/content/DuasCategoryContent';

interface Props {
  params: Promise<{ category: string }>;
}

export const revalidate = 3600;
export const dynamicParams = true;

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
