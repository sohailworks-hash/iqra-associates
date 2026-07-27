import type { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'center' | 'left';
  light?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
      {eyebrow && (
        <span className={`eyebrow reveal ${light ? '!border-brand-500/30 !bg-brand-500/10 !text-brand-300' : ''}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`section-title reveal mt-4 ${light ? '!text-white' : ''}`} style={{ transitionDelay: '60ms' }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`reveal mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-ink-300' : 'text-ink-500'}`} style={{ transitionDelay: '120ms' }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
