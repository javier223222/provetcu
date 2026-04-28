import { useEffect } from 'react';
import type { UseArrowKeyNavigationProps } from '../types/useArrowKeyNavigation';

export function useArrowKeyNavigation({
  onLeftArrow,
  onRightArrow,
}: UseArrowKeyNavigationProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') onLeftArrow();
      if (e.key === 'ArrowRight') onRightArrow();
    };

    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onLeftArrow, onRightArrow]);
}
