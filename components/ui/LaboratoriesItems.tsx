import { ITEM_VARIANTS, LABORATORIES,CONTAINER_VARIANTS } from '@/lib/constants';
import Image from 'next/image';
import { motion } from 'framer-motion';


export default function LaboratoriesItems() {
    return (
        <motion.div 
                            variants={CONTAINER_VARIANTS}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-6"
                        >
        {LABORATORIES.map((lab: { name: string; logo: string; }, index: number) => (
                        <motion.div 
                            variants={ITEM_VARIANTS}
                            key={index} 
                            className="flex justify-center items-center h-20 transition-transform duration-300 hover:scale-110"
                        >
                            <Image src={lab.logo} alt={lab.name} width={120} height={80} className="object-contain" />
                        </motion.div>
                    ))}
        </motion.div>
    );
}