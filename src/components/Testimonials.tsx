import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/site';

export default function Testimonials() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {TESTIMONIALS.map((t, i) => (
        <figure
          key={i}
          className="card reveal group flex flex-col p-6 hover:-translate-y-1 hover:shadow-glow"
          style={{ transitionDelay: `${(i % 3) * 80}ms` }}
        >
          <div className="flex items-center justify-between">
            <div className="flex gap-0.5">
              {Array.from({ length: t.rating }).map((_, s) => (
                <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <Quote className="h-7 w-7 text-brand-100" />
          </div>
          <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">
            “{t.quote}”
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3 border-t border-ink-100 pt-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-bold text-white">
              {t.name.charAt(0)}
            </span>
            <span className="flex flex-col">
              <span className="text-sm font-semibold text-ink-900">{t.name}</span>
              <span className="text-xs text-ink-400">{t.role}</span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
