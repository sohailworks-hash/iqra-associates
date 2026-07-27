import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';
import { navigate } from '@/lib/hooks';

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  breadcrumb,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  breadcrumb?: { label: string; path?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-mesh pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-brand-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
      <div className="relative container-page">
        {breadcrumb && (
          <nav className="reveal mb-5 flex items-center gap-1.5 text-xs font-medium text-ink-400">
            {breadcrumb.map((b, i) => (
              <span key={i} className="flex items-center gap-1.5">
                {b.path ? (
                  <button onClick={() => navigate(b.path!)} className="transition-colors hover:text-brand-600">
                    {b.label}
                  </button>
                ) : (
                  <span className="text-ink-600">{b.label}</span>
                )}
                {i < breadcrumb.length - 1 && <ChevronRight className="h-3 w-3" />}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow reveal">{eyebrow}</span>}
        <h1 className="reveal mt-4 max-w-3xl text-4xl font-extrabold leading-[1.08] text-ink-950 sm:text-5xl lg:text-[3.25rem]" style={{ transitionDelay: '60ms' }}>
          {title}
        </h1>
        {subtitle && (
          <p className="reveal mt-5 max-w-2xl text-base leading-relaxed text-ink-500 sm:text-lg" style={{ transitionDelay: '120ms' }}>
            {subtitle}
          </p>
        )}
        {children && <div className="reveal mt-8" style={{ transitionDelay: '180ms' }}>{children}</div>}
      </div>
    </section>
  );
}
