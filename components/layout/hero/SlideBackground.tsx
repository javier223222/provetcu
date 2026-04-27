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
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-ink/30" />
    </>
  );
}
