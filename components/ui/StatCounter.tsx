'use client';

import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { EXPO_OUT } from '@/lib/animations';

export interface StatCounterProps {
  target: number;
  label: string;
  prefix?: string;
  suffix?: string;
  delay?: number;
}

export default function StatCounter({
  target,
  label,
  prefix = '',
  suffix = '',
  delay = 0,
}: StatCounterProps) {
  const { ref, display, isInView } = useCountUp({ target, delay });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.7, ease: EXPO_OUT, delay }}
    >
      <p className="font-display text-2xl sm:text-3xl font-bold text-gray-900 leading-none">
        {prefix}{display}{suffix}
      </p>
      <p className="text-gray-500 text-small mt-2 leading-snug">
        {label}
      </p>
    </motion.div>
  );
}
