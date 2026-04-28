'use client';

import { motion, type Variants } from 'framer-motion';
import LaboratoriesItems from './LaboratoriesItems';

const EXPO_OUT_SOFT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const headerStagger: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const headerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EXPO_OUT_SOFT } },
};

export default function Laboratories() {
  return (
    <section id="marcas" className="relative bg-gray-100 section-y overflow-hidden">
      {/* Mesh decorativo: orbes blur en los colores de marca para dar atmósfera
          sin distraer del contenido. opacity y blur extremos los mantienen como
          textura ambiental, no como elementos visuales. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[34rem] w-[34rem] rounded-full bg-primary/[0.06] blur-[120px]" />
        <div className="absolute -bottom-48 -right-32 h-[38rem] w-[38rem] rounded-full bg-secondary/[0.07] blur-[120px]" />
      </div>

      {/* Línea divisoria superior sutil — separa visualmente de la sección anterior. */}
      <div aria-hidden="true" className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-full max-w-7xl bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      <div className="relative">
        <motion.div
          className="section-x text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={headerStagger}
        >
          <motion.span
            variants={headerItem}
            className="text-small uppercase tracking-[0.22em] text-primary font-semibold"
          >
            Marcas que distribuimos
          </motion.span>

          <motion.h2
            variants={headerItem}
            className="mt-5 text-gray-900 max-w-5xl mx-auto"
          >
            Laboratorios líderes en salud animal, en un solo lugar
          </motion.h2>

          <motion.p
            variants={headerItem}
            className="mt-7 mx-auto max-w-4xl text-gray-700 leading-relaxed"
          >
            Representamos uno de los portafolios más completos de Chiapas: marcas farmacéuticas
            de referencia para mascotas y animales de producción, respaldadas por soporte técnico
            y disponibilidad regional.
          </motion.p>
        </motion.div>

        <LaboratoriesItems />
      </div>
    </section>
  );
}
