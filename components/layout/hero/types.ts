export type CtaVariant = 'primary' | 'whatsapp';

export type SlideStat = {
  value: string;
  label: string;
};

export type SlideData = {
  id: string;
  badgeText: string;
  title: string;
  highlightText: string;
  description: string;
  bgImage: string;
  ctaText: string;
  ctaLink: string;
  ctaVariant: CtaVariant;
  sectorIcon?: string;
  stats?: SlideStat[];
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
};
