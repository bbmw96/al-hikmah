import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  arabicTitle?: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHeader({ title, arabicTitle, subtitle, className, children }: PageHeaderProps) {
  return (
    <section className={cn('page-header', className)}>
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-16 md:py-24">
        {arabicTitle && (
          <p
            dir="rtl"
            lang="ar"
            className="arabic text-gold/70 mb-3"
            aria-hidden="true"
          >
            {arabicTitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-garamond font-semibold text-cream mb-4 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-cream/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}
