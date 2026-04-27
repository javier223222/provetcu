'use client';

interface SlideNavigationProps {
  count: number;
  current: number;
  onChange: (index: number) => void;
}

export default function SlideNavigation({
  count,
  current,
  onChange,
}: Readonly<SlideNavigationProps>) {
  return (
    <div className="flex gap-3 items-center">
      {Array.from({ length: count }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onChange(idx)}
          aria-label={`Ir a slide ${idx + 1}`}
          aria-current={idx === current ? 'true' : undefined}
          className={`h-2.5 rounded-full transition-all duration-300 ${
            idx === current ? 'w-8 bg-primary' : 'w-2.5 bg-white/50 hover:bg-white'
          }`}
        />
      ))}
    </div>
  );
}
