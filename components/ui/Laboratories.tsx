'use client';

import { LABORATORIES } from '@/lib/constants';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CONTAINER_VARIANTS, ITEM_VARIANTS } from '@/lib/constants';
import LaboratoriesItems from './LaboratoriesItems';


export default function Laboratories() {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-[32px] font-bold tracking-tight text-slate-700 sm:text-[42px] leading-tight mb-6 max-w-6xl mx-auto">
                        Consigue medicamentos de los mejores laboratorios veterinarios
                    </h2>
                    <p className="mx-auto max-w-6xl text-[19px] leading-relaxed text-slate-600 mb-16">
                        Contamos con uno de los portafolios más completos del mercado en Chiapas, representando a  laboratorios
                        farmacéuticos líderes en salud animal, lo que nos permite ofrecer soluciones terapéuticas de máxima
                        calidad para mascotas y animales de producción.
                    </p>
                </motion.div>
                
                <LaboratoriesItems />
            </div>
        </section>
    );
}