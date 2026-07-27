import { Phone } from 'lucide-react';
import { useEffect, useState } from 'react';
import { SITE, whatsappLink } from '@/lib/site';

export default function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 320);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 transition-all duration-500 ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <a
        href={SITE.phoneHref}
        aria-label="Call IQRA ASSOCIATES"
        className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-glow transition-transform hover:scale-110 active:scale-95"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500/40" />
        <Phone className="relative h-5 w-5" />
      </a>
      <a
        href={whatsappLink('Hello IQRA ASSOCIATES, I would like to know more about your services.')}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-glow transition-transform hover:scale-110 active:scale-95"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]/40" />
        <svg viewBox="0 0 24 24" className="relative h-7 w-7" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.73-.86-2-.95-.27-.1-.46-.15-.66.15-.2.3-.76.95-.93 1.14-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.5-.17 0-.37-.02-.56-.02-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.33A10 10 0 1 0 12 2z"/></svg>
      </a>
    </div>
  );
}

/** Small inline WhatsApp + Call button pair used inside hero / CTAs. */
export function ContactButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <a
        href={whatsappLink('Hello IQRA ASSOCIATES, I would like to know more about your services.')}
        target="_blank"
        rel="noreferrer"
        className="btn-whatsapp"
      >
        <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.73-.86-2-.95-.27-.1-.46-.15-.66.15-.2.3-.76.95-.93 1.14-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.5-.17 0-.37-.02-.56-.02-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.33A10 10 0 1 0 12 2z"/></svg>
        WhatsApp Us
      </a>
      <a href={SITE.phoneHref} className="btn-secondary">
        <Phone className="h-4 w-4" /> Call Now
      </a>
    </div>
  );
}

