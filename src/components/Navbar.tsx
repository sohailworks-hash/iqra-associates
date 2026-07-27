import { useEffect, useState } from 'react';
import { Menu, X, Calculator, Phone } from 'lucide-react';
import { NAV_LINKS, SITE, whatsappLink } from '@/lib/site';
import { useScrolled, navigate } from '@/lib/hooks';

export default function Navbar({ currentPath }: { currentPath: string }) {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(8);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (path: string) => {
    setOpen(false);
    navigate(path);
  };

  const isActive = (path: string) =>
    path === '/' ? currentPath === '/' : currentPath === path || currentPath.startsWith(path + '/');

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-ink-100 bg-white/85 backdrop-blur-xl shadow-soft'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-page flex h-16 items-center justify-between lg:h-20">
        <button onClick={() => go('/')} className="group flex items-center gap-2.5" aria-label="IQRA ASSOCIATES home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-800 text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
            <Calculator className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col leading-none">
            <span className={`font-display text-base font-extrabold tracking-tight ${scrolled ? 'text-ink-950' : 'text-ink-950'}`}>
              IQRA <span className="text-brand-600">ASSOCIATES</span>
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-ink-400">
              Accounting &amp; GST
            </span>
          </span>
        </button>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.path}>
              <button
                onClick={() => go(link.path)}
                className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.path) ? 'text-brand-700' : 'text-ink-600 hover:text-ink-950'
                }`}
              >
                {link.label}
                {isActive(link.path) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-600" />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a href={SITE.phoneHref} className="btn-secondary !px-4 !py-2.5 text-xs">
            <Phone className="h-4 w-4" /> Call
          </a>
          <a
            href={whatsappLink('Hello IQRA ASSOCIATES, I would like to know more about your services.')}
            target="_blank"
            rel="noreferrer"
            className="btn-whatsapp !px-4 !py-2.5 text-xs"
          >
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink-200 bg-white text-ink-700 lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`fixed inset-0 top-16 bg-ink-950/40 backdrop-blur-sm transition-opacity duration-300 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute inset-x-0 top-16 origin-top border-b border-ink-100 bg-white px-5 pb-6 pt-4 shadow-glow transition-all duration-300 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-3 opacity-0'
          }`}
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.path}>
                <button
                  onClick={() => go(link.path)}
                  className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-brand-50 text-brand-700'
                      : 'text-ink-700 hover:bg-ink-50'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-2.5">
            <a href={SITE.phoneHref} className="btn-secondary flex-1 !py-3 text-sm">
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={whatsappLink('Hello IQRA ASSOCIATES, I would like to know more about your services.')}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp flex-1 !py-3 text-sm"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
