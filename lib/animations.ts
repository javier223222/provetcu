// Curvas de easing compartidas. Centralizadas para mantener consistencia visual
// entre secciones (hero, about, futuras secciones scroll-triggered).
export const EXPO_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Cola de deceleración más larga — para entradas que no pueden usar opacity
// (p.ej. backdrop-filter), un final más suave compensa la falta de fade.
export const EXPO_OUT_SOFT: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Patrón "fade-up" disparado al entrar en viewport (scroll-triggered).
// Usar en secciones de la home. Para animaciones disparadas por mount/estado
// (ej. carrusel del hero), definir el variant localmente con `animate`.
export const inViewItem = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: EXPO_OUT, delay },
});
