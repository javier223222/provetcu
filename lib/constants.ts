import { Variants } from "framer-motion";
import type { SlideData } from '@/components/layout/hero/types';
import { buildWhatsAppLink } from './whatsapp';

export type { SlideData };

export const NAV_ITEMS = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Marcas', href: '#marcas' },
    { name: 'Contacto', href: '#contacto' },
];

export const LABORATORIES = [
    { name: 'Andoci', logo: '/brands/andoci.png' },
    { name: 'Animal Care', logo: '/brands/animal_care.png' },
    { name: 'ifvc', logo: '/brands/ifv.png' },
    { name: 'wellco', logo: '/brands/wellco.avif' },
    { name: 'voltier', logo: '/brands/Voltier.png' },
    { name: 'Zoetis', logo: '/brands/zoetis.png' },
    { name: 'PiSA Agropecuaria', logo: '/brands/pisa.png' },
    { name: 'Lizort', logo: '/brands/lizort.png' },
    { name: 'Tornel', logo: '/brands/Tornel.png' },
    { name: 'Agricare', logo: '/brands/logo-agricare.svg' },
    { name: 'Companien', logo: '/brands/LogoCAP.png' },
    { name: 'opticare', logo: '/brands/opticare.png' },
];

export const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export const ITEM_VARIANTS: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export const HERO_SLIDES: SlideData[] = [
  {
    id: 'general',
    badgeText: 'Distribuidor Oficial · Chiapas',
    title: 'Aliados del bienestar animal ',
    highlightText: 'en Chiapas',
    description: 'Provetcu distribuye soluciones de salud y nutrición animal para el campo, granjas, empresas pecuarias, veterinarias y mascotas en Chiapas.',
    bgImage: '/assets/cows_ranch.jpg',
    ctaText: 'Ver Catálogo',
    ctaLink: '/catalogo',
    ctaVariant: 'primary',
    // stats: [
    //   { value: 'Entrega en todo Chiapas', label: 'Directo a tu rancho o negocio' },
    //   { value: 'Animal Care Products · IFV · más', label: '12 marcas líderes distribuidas' },
    //   { value: 'Respuesta rápida por WhatsApp', label: 'Asesoría técnica personalizada' },
    // ],
    secondaryCtaText: 'Cotizar por WhatsApp',
    secondaryCtaLink: buildWhatsAppLink('Hola, me interesa información sobre los productos veterinarios de Provetcu.'),
  },
  {
    id: 'ganaderia',
    badgeText: 'Línea Pecuaria',
    
    title: 'Salud y productividad para la ',
    highlightText: 'Ganadería',
    description: 'Vitaminas, desparasitantes y suplementos de marcas líderes que fortalecen la sanidad, el rendimiento y la rentabilidad del sector ganadero en Chiapas.',
    bgImage: '/assets/slider_cows.jpg',
    ctaText: 'Ver productos pecuarios',
    ctaLink: '/catalogo',
    ctaVariant: 'primary',
    secondaryCtaText: 'Cotizar por WhatsApp',
    secondaryCtaLink: buildWhatsAppLink('Hola, me interesa cotizar productos para ganadería bovina.'),
  },
  {
    id: 'porcicola',
    badgeText: 'Línea Porcícola',
    
    title: 'Producción porcina  ',  
    highlightText: 'Saludable y Rentable',
    description: 'impulsamos el bienestar animal con biológicos, antibióticos y nutrición especializada para cada etapa de la producción porcina.',
    bgImage: '/assets/slider_farm_pigs.jpg',
    ctaText: 'Ver productos porcinos',
    ctaLink: '/catalogo',
    ctaVariant: 'primary',
    secondaryCtaText: 'Cotizar por WhatsApp',
    secondaryCtaLink: buildWhatsAppLink('Hola, me interesa cotizar productos para granja porcina.'),
  },
  {
    id: 'mascotas',
    badgeText: 'Línea Mascotas',
   
    title: 'Nutrición súper premium para  ',
    highlightText: 'Mascotas',
    description: 'Distribuimos alimento de alta calidad en Chiapas, formulado para favorecer la digestión, nutrición y bienestar de perros y gatos.',
    bgImage: '/assets/slider_dog_family.jpg',
    ctaText: 'Ver productos para mascotas',
    ctaLink: '/catalogo',
    ctaVariant: 'primary',
    secondaryCtaText: 'Cotizar por WhatsApp',
    secondaryCtaLink: buildWhatsAppLink('Hola, me interesa el alimento OptiCare Pet Essentials para mascotas.'),
  },
];
