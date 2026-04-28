'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '@/lib/constants';
import { useCarousel } from '@/hooks/useCarousel';
import { useArrowKeyNavigation } from './hook/useArrowKeyNavigation';
import SlideBackground from '../SlideBackground';
import HeroSlide from '../HeroSlide';
import SlideNavigation from '../SlideNavigation';

export default function HeroSlider() {
  const { currentIndex, next, prev, goTo, pause, resume } = useCarousel({
    count: HERO_SLIDES.length,
    interval: 6000,
  });

  const slide = HERO_SLIDES[currentIndex];

  useArrowKeyNavigation({ onLeftArrow: prev, onRightArrow: next });

  return (
    <div
      className="group relative w-full h-[100svh] md:h-[85vh] min-h-[600px] overflow-hidden flex flex-col justify-center bg-ink"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onFocus={pause}
      onBlur={resume}
    >
      {/* Fondo con crossfade */}
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full"
        >
          <SlideBackground
            src={slide.bgImage}
            alt={slide.title}
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Contenido del slide */}
      <div className="relative z-10 w-full pt-10 pb-28 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <HeroSlide slide={slide} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Flechas laterales (desktop) */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center p-3 rounded-full bg-ink/20 text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-primary hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <button
        onClick={next}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center p-3 rounded-full bg-ink/20 text-white backdrop-blur-sm transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-primary hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Siguiente slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Navegación inferior */}
      <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center">
        <SlideNavigation
          count={HERO_SLIDES.length}
          current={currentIndex}
          onChange={goTo}
        />
      </div>
    </div>
  );
}
