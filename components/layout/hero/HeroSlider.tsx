'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_SLIDES } from '@/lib/constants';
import { useCarousel } from '@/hooks/useCarousel';
import SlideBackground from './SlideBackground';
import HeroSlide from './HeroSlide';
import SlideNavigation from './SlideNavigation';

export default function HeroSlider() {
  const { currentIndex, next, prev, goTo, pause, resume } = useCarousel({
    count: HERO_SLIDES.length,
    interval: 6000,
  });

  const slide = HERO_SLIDES[currentIndex];

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  // Precarga del resto de fondos del hero. La primera imagen ya entra con
  // priority via SlideBackground; las demás cargan al cambiar de slide y eso
  // produce un "tirón" perceptible la primera vez que aparece cada una.
  // Decoding async asegura que no bloqueen el hilo principal.
  useEffect(() => {
    HERO_SLIDES.slice(1).forEach((s) => {
      const img = new window.Image();
      img.decoding = 'async';
      img.src = s.bgImage;
    });
  }, []);

  return (
    <div
      className="group relative w-full h-[calc(100svh-5rem)] md:min-h-[600px] overflow-hidden flex flex-col justify-center bg-ink touch-pan-y"
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
          transition={{ duration: 0.85, ease: 'easeOut' }}
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
      <div className="relative z-10 w-full pt-6 pb-24 sm:pt-10 sm:pb-28 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={false}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.32, ease: [0.4, 0, 0.2, 1] }}
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
