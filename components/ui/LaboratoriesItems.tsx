import { LABORATORIES } from '@/lib/constants';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function LaboratoriesItems() {
  // Cuadruplicamos la lista para crear la ilusión de scroll infinito sin cortes incluso en pantallas 4K
  const duplicatedLaboratories = [...LABORATORIES, ...LABORATORIES, ...LABORATORIES, ...LABORATORIES];

  return (
    <div
      className="relative flex overflow-hidden w-full group pause-marquee mt-10 py-8"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1 }}
        className="animate-marquee flex items-center"
      >
        {duplicatedLaboratories.map((lab, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex justify-center items-center w-36 sm:w-48 md:w-56 h-24 mx-4 sm:mx-8 select-none"
          >
            <Image
              src={lab.logo}
              alt={lab.name}
              width={160}
              height={80}
              draggable={false}
              className="object-contain max-h-[60px] md:max-h-[80px] w-auto drop-shadow-sm pointer-events-none"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}