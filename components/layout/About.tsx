'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
       <section className="bg-white py-20 lg:py-28" id="nosotros">
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"
        >
                <h2 className="text-[32px] font-bold tracking-tight text-slate-700 sm:text-[42px] leading-tight mb-6 max-w-6xl mx-auto">
                    Sobre Nosotros
                </h2>
                <p className="mx-auto max-w-6xl text-[19px] leading-relaxed text-slate-600 mb-16">
                   Somos una empresa chiapaneca con más de 25 años de experiencia en soluciones veterinarias, productos para animales de producción y compañía, y alimentos premium para mascotas.
                </p>
        </motion.div>
       </section>
    );
}