import { useHashRoute } from '@/lib/hooks';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingActions from '@/components/FloatingActions';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ServicesPage from '@/pages/ServicesPage';
import ServiceDetailPage from '@/pages/ServiceDetailPage';
import ContactPage from '@/pages/ContactPage';
import type { ServiceSlug } from '@/lib/site';

const SERVICE_SLUGS: ServiceSlug[] = ['gst-filing', 'income-tax-return', 'tally-bookkeeping', 'business-registration'];

export default function App() {
  const path = useHashRoute();

  let page: React.ReactNode;
  if (path === '/') page = <HomePage />;
  else if (path === '/about') page = <AboutPage />;
  else if (path === '/services') page = <ServicesPage />;
  else if (path === '/contact') page = <ContactPage />;
  else if (path.startsWith('/services/')) {
    const slug = path.replace('/services/', '') as ServiceSlug;
    page = SERVICE_SLUGS.includes(slug) ? (
      <ServiceDetailPage slug={slug} />
    ) : (
      <NotFound />
    );
  } else {
    page = <NotFound />;
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar currentPath={path} />
      <main className="flex-1">{page}</main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

function NotFound() {
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center pt-24 text-center">
      <span className="text-7xl font-extrabold text-brand-100">404</span>
      <h1 className="mt-4 text-2xl font-bold text-ink-950">Page not found</h1>
      <p className="mt-2 text-sm text-ink-500">The page you are looking for doesn't exist or has moved.</p>
      <a href="#/" className="btn-primary mt-6">Back to Home</a>
    </section>
  );
}
