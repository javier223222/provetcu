import { Variants } from "framer-motion";

export const NAV_ITEMS = [
    { name: 'Inicio', href: '#' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Contacto', href: '/contacto' },
];

export const LABORATORIES = [
    { name: 'Andoci', logo: '/brands/andoci.png' },
    { name: 'Animal Care', logo: '/brands/animal_care.png' },
    { name: 'ifvc', logo: '/brands/ifv.png' },
    { name: 'wellco', logo: '/brands/wellco.avif' },
    { name: 'voltier', logo: '/brands/Voltier.png' },
    { name: 'Zoetis', logo: '/brands/zoetis.png' },
    { name: 'PiSA Agropecuaria', logo: '/brands/pisa.png' },
    { name: 'Elanco', logo: '/brands/elanco.png' },
    { name: 'Tornel', logo: '/brands/Tornel.png' },
    { name: 'Agricare', logo: '/brands/logo-agricare.svg' },
    { name: 'Companien', logo: '/brands/LogoCAP.png' },
    { name: 'opticare', logo: '/brands/opticare.png' },
];
export const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" } 
  }
};