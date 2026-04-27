import { useState, useEffect, useCallback, useRef } from 'react';

interface UseCarouselOptions {
  count: number;
  interval?: number;
}

export function useCarousel({ count, interval = 6000 }: UseCarouselOptions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isPausedRef = useRef(false);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const pause = useCallback(() => { isPausedRef.current = true; }, []);
  const resume = useCallback(() => { isPausedRef.current = false; }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isPausedRef.current) next();
    }, interval);
    return () => clearInterval(timer);
  }, [next, interval]);

  return { currentIndex, next, prev, goTo, pause, resume };
}
