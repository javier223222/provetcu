'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
  >
    <path d="M11.99 2C6.47 2 2 6.48 2 12c0 1.84.5 3.56 1.34 5.06L2 22l5.06-1.34A9.95 9.95 0 0011.99 22c5.52 0 10-4.48 10-10s-4.48-10-10-10zm5.13 14.37c-.22.61-1.25 1.15-1.74 1.22-.45.06-1.05.15-3.32-.78-2.73-1.12-4.49-3.9-4.63-4.08-.14-.19-1.12-1.48-1.12-2.83s.7-2.03.95-2.29c.24-.26.54-.33.72-.33.19 0 .37 0 .52.01.17.01.38-.07.6.45.23.54.76 1.83.82 1.96.07.13.11.28.03.43-.08.15-.12.24-.25.38-.11.12-.24.27-.33.36-.11.11-.23.23-.1.45.13.22.58.95 1.25 1.54.85.75 1.56.98 1.78 1.09.22.11.35.09.48-.05.14-.15.61-.71.77-.96.16-.24.33-.21.53-.13.21.08 1.32.62 1.54.74.22.11.37.17.42.26.06.1.06.56-.16 1.17z" />
  </svg>
);

export default function Hero() {
  return (
    <div className="relative flex flex-col items-start justify-center min-h-[80vh] overflow-hidden">
      
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/assets/cows_ranch.jpg"
          alt="Vacas en las praderas"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-slate-900/20"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900/50 backdrop-blur-md px-4 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/20 mb-8 shadow-2xl">
            <ShieldCheck className="h-4 w-4 text-red-500" />
            <span>Distribuidor Oficial en todo Chiapas</span>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-5xl xl:text-[60px] leading-tight mb-8">
            Salud Integral Animal y Nutrición de <span className="text-red-500">Excelencia</span>
          </h1>

          <p className="text-lg md:text-xl leading-relaxed text-slate-300 mb-10 max-w-2xl">
            Abastecemos a clínicas, farmacias y productores con los mejores medicamentos veterinarios y alimento súper premium para mascotas, con entregas garantizadas a todos los municipios.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/catalogo"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-900/30 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Ver Catálogo Completo
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://wa.me/+5219611195080" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[15px] font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Hablar con un Asesor
            </Link>
          </div>

        </motion.div>
      </div>
    </div>
  );
}