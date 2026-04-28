import Image from 'next/image';

interface SlideBackgroundProps {
  src: string;
  alt: string;
  priority?: boolean;
}

export default function SlideBackground({ src, alt, priority = false }: Readonly<SlideBackgroundProps>) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        quality={90}
        sizes="100vw"
        draggable={false}
        className="object-cover object-center select-none pointer-events-none [-webkit-touch-callout:none]"
      />
      <div className="absolute inset-0 bg-ink/50" />
    </>
  );
}
