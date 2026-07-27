import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export interface FaqItem {
  q: string;
  a: string;
}

export default function FaqAccordion({ items, light = false }: { items: FaqItem[]; light?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-ink-100 overflow-hidden rounded-3xl border border-ink-100 bg-white shadow-card">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className={`flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors sm:px-7 ${
                isOpen ? 'bg-brand-50/60' : 'hover:bg-ink-50'
              }`}
              aria-expanded={isOpen}
            >
              <span className={`text-sm font-semibold sm:text-base ${light ? 'text-white' : 'text-ink-900'}`}>
                {item.q}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                  isOpen ? 'rotate-180 bg-brand-600 text-white' : 'bg-ink-100 text-ink-600'
                }`}
              >
                {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-500 sm:px-7 sm:text-[15px]">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
