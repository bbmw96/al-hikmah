'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  arabicTitle?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

const EASE = [0.25, 0.1, 0.25, 1] as const;

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: EASE },
  };
}

export function PageHeader({ title, arabicTitle, subtitle, className, children }: PageHeaderProps) {
  return (
    <section className={cn('page-header', className)}>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-16 md:py-24">
        {arabicTitle && (
          <motion.p
            dir="rtl"
            lang="ar"
            className="arabic text-gold/70 mb-3"
            aria-hidden="true"
            {...fadeUp(0)}
          >
            {arabicTitle}
          </motion.p>
        )}
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-garamond font-semibold text-cream mb-4 leading-tight"
          {...fadeUp(arabicTitle ? 0.12 : 0)}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
            {...fadeUp(arabicTitle ? 0.24 : 0.12)}
          >
            {subtitle}
          </motion.p>
        )}
        {children && (
          <motion.div className="mt-6" {...fadeUp(0.32)}>
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
