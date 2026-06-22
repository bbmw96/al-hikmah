import { cn } from '@/lib/utils';

interface ArabicTextProps {
  text: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showBismillah?: boolean;
}

const sizeClasses = {
  sm: 'arabic-sm',
  md: 'arabic',
  lg: 'arabic-lg',
  xl: 'arabic-xl',
};

export function ArabicText({ text, size = 'md', className, showBismillah }: ArabicTextProps) {
  return (
    <div className={cn('space-y-3', className)}>
      {showBismillah && (
        <p
          dir="rtl"
          lang="ar"
          className="arabic text-gold text-center opacity-80"
          aria-label="Bismillah ir-Rahman ir-Raheem"
        >
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
      )}
      <p
        dir="rtl"
        lang="ar"
        className={cn(sizeClasses[size], 'text-center')}
      >
        {text}
      </p>
    </div>
  );
}
