import { Calculator, Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';
import { NAV_LINKS, SITE, whatsappLink } from '@/lib/site';
import { navigate } from '@/lib/hooks';

export default function Footer() {
  const go = (path: string) => navigate(path);

  return (
    <footer className="relative overflow-hidden bg-ink-950 text-ink-300">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[120%] -translate-x-1/2 bg-brand-600/20 blur-3xl" />
      <div className="relative container-page py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white">
                <Calculator className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="font-display text-lg font-extrabold text-white">
                IQRA <span className="text-brand-400">ASSOCIATES</span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              Smart accounting, GST and tax compliance for businesses across Ahmedabad and Gujarat.
              Trusted by 320+ businesses to keep their books clean and filings on time.
            </p>
            <div className="mt-6 flex gap-3">
              <a href={SITE.phoneHref} className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-800 bg-ink-900 text-ink-300 transition-colors hover:border-brand-500 hover:text-brand-400" aria-label="Call us">
                <Phone className="h-4 w-4" />
              </a>
              <a href={`mailto:${SITE.email}`} className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-800 bg-ink-900 text-ink-300 transition-colors hover:border-brand-500 hover:text-brand-400" aria-label="Email us">
                <Mail className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink('Hello IQRA ASSOCIATES, I would like to know more about your services.')}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-800 bg-ink-900 text-ink-300 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
                aria-label="WhatsApp us"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor"><path d="M17.47 14.38c-.3-.15-1.73-.86-2-.95-.27-.1-.46-.15-.66.15-.2.3-.76.95-.93 1.14-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.19-.24-.57-.48-.5-.66-.5-.17 0-.37-.02-.56-.02-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.73-.71 1.98-1.39.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.57-.35zM12 2a10 10 0 0 0-8.6 15.06L2 22l5.06-1.33A10 10 0 1 0 12 2z"/></svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h4>
            <ul className="mt-5 space-y-3 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <button onClick={() => go(link.path)} className="text-ink-400 transition-colors hover:text-brand-400">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><button onClick={() => go('/services/gst-filing')} className="text-ink-400 transition-colors hover:text-brand-400">GST Filing</button></li>
              <li><button onClick={() => go('/services/income-tax-return')} className="text-ink-400 transition-colors hover:text-brand-400">Income Tax Return</button></li>
              <li><button onClick={() => go('/services/tally-bookkeeping')} className="text-ink-400 transition-colors hover:text-brand-400">Tally Bookkeeping</button></li>
              <li><button onClick={() => go('/services/business-registration')} className="text-ink-400 transition-colors hover:text-brand-400">Business Registration</button></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Get in Touch</h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span className="text-ink-400">{SITE.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href={SITE.phoneHref} className="text-ink-400 transition-colors hover:text-brand-400">{SITE.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <a href={`mailto:${SITE.email}`} className="text-ink-400 transition-colors hover:text-brand-400">{SITE.email}</a>
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span className="text-ink-400">{SITE.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-7 text-xs text-ink-500 sm:flex-row">
          <p>© {new Date().getFullYear()} IQRA ASSOCIATES. All rights reserved.</p>
          <button onClick={() => go('/contact')} className="inline-flex items-center gap-1.5 text-ink-400 transition-colors hover:text-brand-400">
            Start a conversation <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
