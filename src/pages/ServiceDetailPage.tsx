import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { navigate, useScrollReveal } from '@/lib/hooks';
import { SERVICES, type ServiceSlug, type ServiceItem } from '@/lib/site';
import { SectionHeading } from '@/components/SectionHeading';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBanner from '@/components/CtaBanner';
import PageHero from '@/components/PageHero';
import { ContactButtons } from '@/components/FloatingActions';

export default function ServiceDetailPage({ slug }: { slug: ServiceSlug }) {
  const service = SERVICES.find((s) => s.slug === slug)!;
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageHero
        eyebrow={service.title}
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Services', path: '/services' },
          { label: service.title },
        ]}
        title={<>{renderTitle(service)}</>}
        subtitle={service.description}
      >
        <ContactButtons />
      </PageHero>

      {/* Outcomes */}
      <section className="container-page py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="What You Get"
              title={<>Outcomes you can <span className="text-gradient">count on</span></>}
              subtitle="Every engagement is designed to deliver clear, measurable results for your business."
            />
            <ul className="reveal mt-8 space-y-4">
              {service.outcomes.map((o, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-2xl border border-ink-100 bg-white p-4 shadow-card transition-colors hover:border-brand-200"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                  <span className="text-sm text-ink-700">{o}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <div className="overflow-hidden rounded-4xl border border-ink-100 bg-gradient-to-br from-brand-600 to-brand-800 p-8 text-white shadow-glow">
              <service.icon className="h-10 w-10" />
              <h3 className="mt-5 text-xl font-bold text-white">{service.title} with IQRA ASSOCIATES</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-100">
                {service.short} Our team handles the full process end-to-end so you can focus on
                running your business with complete peace of mind.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <button onClick={() => navigate('/contact')} className="btn bg-white text-brand-700 hover:bg-brand-50">
                  Get Started <ArrowRight className="h-4 w-4" />
                </button>
                <ContactButtons />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ink-50/60 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Our Process"
            title={<>How we deliver <span className="text-gradient">{service.title}</span></>}
            subtitle="A clear, proven workflow that keeps everything on track and transparent."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <div
                key={i}
                className="reveal relative rounded-3xl border border-ink-100 bg-white p-6 shadow-card"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="text-4xl font-extrabold text-brand-100">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-base font-bold text-ink-950">{p.step}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-page py-20 sm:py-24">
        <SectionHeading
          eyebrow="FAQ"
          title={<>{service.title} <span className="text-gradient">questions answered</span></>}
          subtitle="The most common questions we hear about this service."
        />
        <div className="mt-12">
          <FaqAccordion items={service.faqs} />
        </div>
      </section>

      {/* Other services */}
      <section className="bg-ink-50/60 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Explore More"
            title={<>Other services you may <span className="text-gradient">need</span></>}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.filter((s) => s.slug !== slug).map((s, i) => (
              <button
                key={s.slug}
                onClick={() => navigate(`/services/${s.slug}`)}
                className="card reveal group flex items-center gap-4 p-5 text-left hover:-translate-y-1 hover:shadow-glow"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                  <s.icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <div className="text-sm font-bold text-ink-950">{s.title}</div>
                  <div className="text-xs text-ink-400">{s.short}</div>
                </div>
                <ArrowRight className="h-4 w-4 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-brand-600" />
              </button>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

function renderTitle(service: ServiceItem) {
  const map: Record<ServiceSlug, React.ReactNode> = {
    'gst-filing': <>GST Filing made <span className="text-gradient">simple &amp; accurate</span></>,
    'income-tax-return': <>Income Tax Returns filed <span className="text-gradient">right the first time</span></>,
    'tally-bookkeeping': <>Tally bookkeeping that keeps you <span className="text-gradient">audit-ready</span></>,
    'business-registration': <>Business registration <span className="text-gradient">without the hassle</span></>,
  };
  return map[service.slug];
}
