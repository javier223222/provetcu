'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Icon } from '@iconify/react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import { EXPO_OUT, EXPO_OUT_SOFT } from '@/lib/animations';
import type { SlideData } from './types';

const item = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: EXPO_OUT },
});

// Geometría compartida para los CTAs (primary + secondary).
// Idéntica distancia/duración/easing en ambas variantes para que entren como
// pareja sincronizada; lo único que cambia es el mecanismo de aparición.
const CTA_DISTANCE = 28;
const CTA_DURATION = 0.65;

// Primary CTA: fade + slide normal (sin backdrop-filter, opacity es seguro).
const itemCta = (delay: number) => ({
  initial: { opacity: 0, y: CTA_DISTANCE },
  animate: { opacity: 1, y: 0 },
  transition: { duration: CTA_DURATION, delay, ease: EXPO_OUT_SOFT },
});

// Secondary CTA (con backdrop-filter): animar opacity rompe el compositing del
// blur (el subárbol se renderiza offscreen y backdrop-filter no samplea el fondo
// real hasta que opacity llega a 1, produciendo un "pop"). Usamos visibility —
// binaria, no interpola — para ocultar durante el delay; el blur queda estable
// desde el frame en que aparece. Mismo recorrido que itemCta para sincronía.
const itemSolid = (delay: number) => ({
  initial: { y: CTA_DISTANCE, visibility: 'hidden' as const },
  animate: { y: 0, visibility: 'visible' as const },
  transition: { duration: CTA_DURATION, delay, ease: EXPO_OUT_SOFT },
});

interface HeroSlideProps {
  slide: Readonly<SlideData>;
}

export default function HeroSlide({ slide }: HeroSlideProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto px-4">
      <div className="w-full flex flex-col items-center">

        {slide.badgeText && (
          <motion.div {...itemSolid(0.04)} className="mb-6 flex items-center justify-center">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-[0.15em] shadow-xl isolate [transform:translateZ(0)] [backface-visibility:hidden]">
              {slide.sectorIcon && <Icon icon={slide.sectorIcon} className="w-4 h-4 text-white" />}
              {slide.badgeText}
            </span>
          </motion.div>
        )}

        {/* Título */}
        <motion.h1 {...item(0.10)}
          className="font-display text-[2.5rem] leading-[1.1] sm:text-5xl md:text-[4.5rem] lg:text-[5.5rem] md:leading-[1.05] text-white/70 font-medium mb-6 md:mb-8 text-shadow-xl tracking-tight"
        >
          {slide.title}
          <strong className="text-white font-extrabold block sm:inline mt-2 sm:mt-0 text-shadow-2xl">{slide.highlightText}</strong>
        </motion.h1>

        {/* Descripción */}
        <motion.p {...item(0.18)}
          className="font-body text-base sm:text-lg md:text-xl text-white/90 font-normal mb-8 md:mb-12 max-w-3xl text-shadow-lg leading-relaxed antialiased [backface-visibility:hidden]"
        >
          {slide.description}
        </motion.p>

        {/* Stats de confianza (solo slide general) */}
        {slide.stats && (
          <motion.div {...item(0.26)}
            className="flex flex-col sm:flex-row items-center sm:divide-x sm:divide-white/20 gap-4 sm:gap-0 mb-10"
          >
            {slide.stats.map((stat) => (
              <div key={stat.label} className="sm:px-6 first:sm:pl-0 last:sm:pr-0 text-center">
                <p className="text-white font-bold text-sm leading-snug text-shadow-lg">{stat.value}</p>
                <p className="text-white/90 text-micro mt-0.5 text-shadow-lg">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full max-w-sm sm:max-w-none">
          <motion.div {...itemCta(slide.stats ? 0.34 : 0.26)} className="w-full sm:w-auto">
            <Link
              href={slide.ctaLink}
              className="group inline-flex w-full sm:w-auto justify-between sm:justify-center items-center gap-5 rounded-full bg-primary pl-7 pr-2 py-2 text-[15px] font-semibold text-white transition-all hover:bg-primary-dark shadow-2xl hover:shadow-primary/40 ring-1 ring-primary/50"
            >
              <span>{slide.ctaText}</span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-primary transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight className="h-5 w-5" strokeWidth={2.5} />
              </span>
            </Link>
          </motion.div>

          {slide.secondaryCtaText && slide.secondaryCtaLink && (
            <motion.div {...itemSolid(slide.stats ? 0.34 : 0.26)} className="w-full sm:w-auto">
              <Link
                href={slide.secondaryCtaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-full sm:w-auto justify-between sm:justify-center items-center gap-5 rounded-full bg-white/5 backdrop-blur-md border border-white/20 pl-7 pr-2 py-2 text-[15px] font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30 shadow-2xl isolate [transform:translateZ(0)] [backface-visibility:hidden]"
              >
                <span>{slide.secondaryCtaText}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-success text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <WhatsAppIcon className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>
          )}
        </div>

      </div>
    </div>
  );
}
