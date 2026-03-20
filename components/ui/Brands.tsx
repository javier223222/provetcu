import { LABORATORIOS } from '@/lib/constants';
import Image from 'next/image';
export default function Brands() {
    return (
        <section className="bg-white py-20 lg:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-[32px] font-bold tracking-tight text-slate-700 sm:text-[42px] leading-tight mb-6 max-w-4xl mx-auto">
                    Consigue medicamentos de los mejores laboratorios veterinarios
                </h2>
                <p className="mx-auto max-w-4xl text-[19px] leading-relaxed text-slate-600 mb-16">
                    Contamos con uno de los portafolios más completos del mercado en Chiapas, representando a  laboratorios
                    farmacéuticos líderes en salud animal, lo que nos permite ofrecer soluciones terapéuticas de máxima
                    calidad para mascotas y animales de producción.
                </p>


                <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-6">
                    {LABORATORIOS.map((lab: { name: string; logo: string; }, index: number) => (
                        <div key={index} className="flex justify-center items-center h-20 transition-transform duration-300 hover:scale-105">
                            <Image src={lab.logo} alt={lab.name} width={120} height={80} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}