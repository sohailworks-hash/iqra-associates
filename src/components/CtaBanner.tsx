import { ArrowRight } from 'lucide-react';
import { navigate } from '@/lib/hooks';
import { ContactButtons } from '@/components/FloatingActions';

export default function CtaBanner({
  title = 'Ready to simplify your compliance?',
  subtitle = 'Get a free consultation today. Let us handle the filings while you focus on growing your business.',
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="container-page py-16 sm:py-20">
      <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-brand-700 via-brand-600 to-brand-800 px-6 py-14 text-center shadow-glow sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-brand-400/30 blur-3xl" />
        <div className="relative">
          <h2 className="reveal mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="reveal mx-auto mt-4 max-w-xl text-base text-brand-100" style={{ transitionDelay: '80ms' }}>
            {subtitle}
          </p>
          <div className="reveal mt-8 flex flex-wrap justify-center gap-3" style={{ transitionDelay: '140ms' }}>
            <button onClick={() => navigate('/contact')} className="btn bg-white text-brand-700 hover:bg-brand-50 active:scale-[0.98]">
              Book Free Consultation <ArrowRight className="h-4 w-4" />
            </button>
            <ContactButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
