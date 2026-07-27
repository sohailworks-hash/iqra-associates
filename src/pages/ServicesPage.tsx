import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { navigate, useScrollReveal } from '@/lib/hooks';
import { SERVICES } from '@/lib/site';
import { SectionHeading } from '@/components/SectionHeading';
import CtaBanner from '@/components/CtaBanner';
import PageHero from '@/components/PageHero';

export default function ServicesPage() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Our Services"
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Services' }]}
        title={<>Comprehensive accounting &amp; <span className="text-gradient">compliance services</span></>}
        subtitle="From GST filing to business registration, we cover every aspect of your accounting and statutory compliance needs."
      />

      <section className="container-page py-20 sm:py-24">
        <div className="grid gap-6 lg:grid-cols-2">
          {SERVICES.map((s, i) => (
            <div
              key={s.slug}
              className="card reveal group flex flex-col p-7 hover:-translate-y-1 hover:shadow-glow sm:p-8"
              style={{ transitionDelay: `${(i % 2) * 80}ms` }}
            >
              <div className="flex items-start gap-5">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft transition-transform group-hover:scale-105">
                  <s.icon className="h-6 w-6" />
                </span>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-ink-950">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.description}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-2.5">
                {s.outcomes.slice(0, 4).map((o, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-ink-600">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {o}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate(`/services/${s.slug}`)}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
              >
                View {s.title} details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Other services */}
      <section className="bg-ink-50/60 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="Beyond The Core"
            title={<>Additional services we <span className="text-gradient">support</span></>}
            subtitle="Need something beyond GST, tax, Tally or registration? We likely handle that too."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'GST Notices & Appeals', text: 'Responses to show-cause notices, scrutiny, and appeals before authorities.' },
              { title: 'Tax Planning Advisory', text: 'Year-round structuring to legally minimise your tax liability.' },
              { title: 'Payroll & TDS', text: 'Salary processing, TDS deduction and quarterly TDS returns.' },
              { title: 'Audit Support', text: 'Statutory and tax audit preparation with full documentation.' },
              { title: 'MSME / Udyam', text: 'MSME registration and benefits under government schemes.' },
              { title: 'ROC Compliance', text: 'Annual MCA filings and company law compliance for companies.' },
            ].map((c, i) => (
              <div key={i} className="card reveal p-6 hover:-translate-y-1 hover:shadow-glow" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
                <h3 className="text-base font-bold text-ink-950">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
