import { cn } from '@/lib/utils';

interface IslamicPatternProps {
  className?: string;
  opacity?: number;
}

export function IslamicPattern({ className, opacity = 0.07 }: IslamicPatternProps) {
  return (
    <div
      className={cn('absolute inset-0 pointer-events-none select-none', className)}
      aria-hidden="true"
      style={{ opacity }}
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="islamic-geo"
            x="0"
            y="0"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            {/* Eight-pointed star (khatim) pattern */}
            <g fill="none" stroke="#C9A84C" strokeWidth="0.8">
              {/* Outer octagon */}
              <polygon points="40,4 56,12 72,28 76,44 68,60 52,72 36,76 20,68 8,52 4,36 12,20 28,8" />
              {/* Inner star */}
              <polygon points="40,16 48,32 64,36 50,48 54,64 40,56 26,64 30,48 16,36 32,32" />
              {/* Cross lines */}
              <line x1="40" y1="4" x2="40" y2="76" />
              <line x1="4" y1="40" x2="76" y2="40" />
              <line x1="16" y1="16" x2="64" y2="64" />
              <line x1="64" y1="16" x2="16" y2="64" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#islamic-geo)" />
      </svg>
    </div>
  );
}
