'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import WhatsAppIcon from '@/components/ui/WhatsAppIcon';
import type { SlideData } from './types';

interface HeroSlideProps {
  slide: Readonly<SlideData>;
}

export default function HeroSlide({ slide }: HeroSlideProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center w-full max-w-5xl mx-auto px-4">
      <div className="w-full flex flex-col items-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full bg-ink/40 px-4 py-1.5 text-micro text-white ring-1 ring-inset ring-white/20 mb-6 shadow-lg backdrop-blur-md"
        >
          {slide.sectorIcon ? (
            <Icon icon={slide.sectorIcon} className="h-4 w-4 text-premium" aria-hidden="true" />
          ) : (
            <ShieldCheck className="h-4 w-4 text-premium" strokeWidth={1.8} />
          )}
          <span className="uppercase tracking-wider font-semibold">{slide.badgeText}</span>
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-display font-black text-[2.5rem] leading-[1.1] sm:text-5xl md:text-hero text-white mb-4 md:mb-5 drop-shadow-2xl"
        >
          {slide.title}
          <strong className="text-premium font-black">{slide.highlightText}</strong>
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="font-body text-base sm:text-lg md:text-xl text-white/90 font-medium mb-6 md:mb-8 max-w-2xl drop-shadow-lg leading-relaxed"
        >
          {slide.description}
        </motion.p>

        {/* Stats de confianza (solo slide general) */}
        {slide.stats && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center sm:divide-x sm:divide-white/20 gap-4 sm:gap-0 mb-8"
          >
            {slide.stats.map((stat) => (
              <div key={stat.label} className="sm:px-6 first:sm:pl-0 last:sm:pr-0 text-center">
                <p className="text-white font-bold text-sm leading-snug">{stat.value}</p>
                <p className="text-white/50 text-micro mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        )}

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: slide.stats ? 0.5 : 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 w-full max-w-sm sm:max-w-none"
        >
          <Link
            href={slide.ctaLink}
            className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-primary px-8 py-4 text-[15px] font-bold text-white transition-all hover:bg-primary-dark hover:scale-105 shadow-xl hover:shadow-primary/30"
          >
            {slide.ctaText}
            <ArrowRight className="h-5 w-5" strokeWidth={2} />
          </Link>

          {slide.secondaryCtaText && slide.secondaryCtaLink && (
            <Link
              href={slide.secondaryCtaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto justify-center items-center gap-2 rounded-full bg-success px-8 py-4 text-[15px] font-bold text-white transition-all hover:opacity-90 hover:scale-105 shadow-xl hover:shadow-success/30"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {slide.secondaryCtaText}
            </Link>
          )}
        </motion.div>

      </div>
    </div>
  );
}
