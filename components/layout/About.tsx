'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import StatCounter from '@/components/ui/StatCounter';
import { inViewItem } from '@/lib/animations';

const STATS = [
  { target: 10, prefix: '+', suffix: ' años', label: 'De experiencia en el Mercado', delay: 0 },
  { target: 8,  prefix: '+', suffix: '',       label: 'Laboratorios de primer nivel', delay: 0.35 },
  { target: 60, prefix: '+', suffix: '',       label: 'Productos en Catálogo',        delay: 0.7 },
] as const;

const TRAJECTORY_HIGHLIGHTS = [
  { eyebrow: 'Desde',    value: '2015',      label: 'Operando en Chiapas' },
  { eyebrow: 'Sectores', value: 'B2B + B2C', label: 'Granjas, clínicas y productores' },
] as const;

export default function About() {
  return (
    <section id="nosotros" className="bg-white py-16 sm:py-20 lg:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* items-stretch + h-full en la imagen + justify-between en la columna
            derecha alinean el pie de la card overlay con la fila de stats. */}
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-10 sm:gap-14 lg:gap-20 items-stretch">

          <motion.div
            {...inViewItem(0)}
            className="relative w-full max-w-md sm:max-w-lg mx-auto lg:max-w-none lg:mx-0 lg:-ml-4 xl:-ml-8 order-2 lg:order-1"
          >
            {/* Halo decorativo detrás de la imagen — solo desktop. Da profundidad
                sin agregar peso visual. */}
            <div
              aria-hidden="true"
              className="hidden lg:block pointer-events-none absolute -inset-6 bg-gradient-to-br from-primary/[0.06] via-transparent to-secondary/[0.06] blur-2xl"
            />

            <div className="relative w-full aspect-[4/5] sm:aspect-[5/4] lg:aspect-auto lg:h-full lg:min-h-[520px] rounded-2xl overflow-hidden ring-1 ring-gray-200/60 shadow-lg shadow-ink/5">
              <Image
                src="/assets/shapes.png"
                alt="Provetcu — Distribuidor veterinario en Chiapas"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
            </div>

            {/* Card de trayectoria — sello editorial premium.
                - Barra primary lateral: marca de la casa (mismo gesto que el eyebrow).
                - Hairline dorada bajo cada valor: el token `premium` del sistema
                  haciendo trabajo, separando esto de cualquier "stats card" genérica.
                - Tipografía display escalada con tracking-tight para confianza editorial. */}
            <motion.div
              {...inViewItem(0.2)}
              className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5 right-4 sm:right-5 flex overflow-hidden rounded-md bg-ink shadow-2xl shadow-ink/40"
            >
              <div aria-hidden="true" className="w-1 shrink-0 bg-primary" />

              <div className="flex-1 grid grid-cols-2 divide-x divide-white/[0.06]">
                {TRAJECTORY_HIGHLIGHTS.map((highlight) => (
                  <div key={highlight.label} className="px-4 py-4 sm:px-5 sm:py-5">
                    <p className="text-white/40 text-micro uppercase tracking-[0.2em] font-semibold mb-2.5">
                      {highlight.eyebrow}
                    </p>
                    <p className="text-white font-display text-2xl sm:text-3xl font-bold leading-none tracking-tight">
                      {highlight.value}
                    </p>
                    <span aria-hidden="true" className="mt-3 block h-px w-8 bg-premium" />
                    <p className="text-white/55 text-small mt-3 leading-snug">{highlight.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <div className="flex flex-col justify-between gap-10 sm:gap-12 lg:py-2 lg:pl-6 xl:pl-10 order-1 lg:order-2">

            <div className="flex flex-col gap-5">
              <motion.span
                {...inViewItem(0.1)}
                className="inline-flex items-center gap-3 text-micro uppercase tracking-widest text-primary font-semibold"
              >
                <span aria-hidden="true" className="inline-block h-px w-8 bg-primary" />
                Sobre Provetcu
              </motion.span>

              <motion.h2 {...inViewItem(0.18)} className="text-gray-900 max-w-xl">
                Una distribuidora chiapaneca construida sobre Confianza y Experiencia
              </motion.h2>

              <motion.p {...inViewItem(0.26)} className="text-gray-700 max-w-lg leading-relaxed">
                Conectamos laboratorios líderes en salud animal con el campo chiapaneco. Abastecemos a ganaderos, productores, veterinarios y mascotas con insumos de calidad, atención cercana y cobertura estatal.
              </motion.p>

              <motion.div {...inViewItem(0.32)}>
                <Link
                  href="#contacto"
                  className="group inline-flex items-center gap-2 text-gray-900 font-semibold text-small border-b-2 border-gray-900 pb-0.5 hover:text-primary hover:border-primary transition-colors duration-200"
                >
                  Conoce más sobre nosotros
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </motion.div>
            </div>

            <div className="flex flex-col gap-6">
              <motion.hr {...inViewItem(0.38)} className="border-gray-200" />

              <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:divide-x lg:divide-gray-200">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className={i > 0 ? 'lg:pl-6' : ''}>
                    <StatCounter {...stat} />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
