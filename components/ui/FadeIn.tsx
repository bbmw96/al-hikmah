'use client';

import { motion } from 'framer-motion';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  triggerOn?: 'mount' | 'scroll';
}

const EASE = [0.25, 0.1, 0.25, 1] as const;

const offsets: Record<NonNullable<FadeInProps['direction']>, { x: number; y: number }> = {
  up: { y: 28, x: 0 },
  down: { y: -28, x: 0 },
  left: { y: 0, x: 28 },
  right: { y: 0, x: -28 },
  none: { y: 0, x: 0 },
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.55,
  direction = 'up',
  className,
  triggerOn = 'scroll',
}: FadeInProps) {
  const { x, y } = offsets[direction];
  const hidden = { opacity: 0, x, y };
  const visible = { opacity: 1, x: 0, y: 0 };
  const transition = { duration, delay, ease: EASE };

  if (triggerOn === 'mount') {
    return (
      <motion.div
        className={className}
        initial={hidden}
        animate={visible}
        transition={transition}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={visible}
      transition={transition}
      viewport={{ once: true, margin: '-8%' }}
    >
      {children}
    </motion.div>
  );
}
