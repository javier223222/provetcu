'use client';

import { animate, useInView, useMotionValue, type UseInViewOptions } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { EXPO_OUT } from '@/lib/animations';

interface UseCountUpOptions {
  target: number;
  duration?: number;
  delay?: number;
  margin?: UseInViewOptions['margin'];
}

export function useCountUp({
  target,
  duration = 2,
  delay = 0,
  margin = '-60px',
}: UseCountUpOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin });
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => motionVal.on('change', (v) => setDisplay(Math.round(v))), [motionVal]);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionVal, target, { duration, delay, ease: EXPO_OUT });
    return () => controls.stop();
  }, [isInView, motionVal, target, duration, delay]);

  return { ref, display, isInView };
}
