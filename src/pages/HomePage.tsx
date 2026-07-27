import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
  Clock as ClockIcon,
  Receipt,
  FileText,
  BookOpen,
  Building2,
} from 'lucide-react';
import { navigate, useScrollReveal } from '@/lib/hooks';
import {
  SITE,
  SERVICES,
  STATS,
  VALUE_PROPS,
  TESTIMONIALS,
  FAQS,
  whatsappLink,
} from '@/lib/site';
import { ContactButtons } from '@/components/FloatingActions';
import { SectionHeading } from '@/components/SectionHeading';
import FaqAccordion from '@/components/FaqAccordion';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import CtaBanner from '@/components/CtaBanner';

export default function HomePage() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={ref}>
      <Hero />
      <Stats />
      <ValueProps />
      <ServicesPreview />
      <Process />
      <TestimonialsSection />
      <FaqSection />
      <ContactSection />
      <CtaBanner />
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="pointer-events-none absolute -right-32 -top-20 h-[28rem] w-[28rem] rounded-full bg-brand-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-40 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />

      <div className="relative container-page">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow reveal animate-fade-in">
              <span className="flex h-1.5 w-1.5 rounded-full bg-brand-500" />
              Ahmedabad&apos;s Trusted Accounting Firm
            </span>
            <h1 className="reveal mt-5 text-4xl font-extrabold leading-[1.06] text-ink-950 sm:text-5xl lg:text-[3.75rem]" style={{ transitionDelay: '60ms' }}>
              Smart Accounting<br />
              &amp; <span className="text-gradient">GST Solutions</span>
            </h1>
            <p className="reveal mt-6 max-w-xl text-base leading-relaxed text-ink-500 sm:text-lg" style={{ transitionDelay: '120ms' }}>
              We help businesses with GST Filing, Income Tax Returns, Tally Bookkeeping and
              Business Compliance — so you stay compliant, save tax, and focus on growth.
            </p>
            <div className="reveal mt-8 flex flex-wrap gap-3" style={{ transitionDelay: '180ms' }}>
              <button onClick={() => navigate('/services')} className="btn-primary">
                Explore Services <ArrowRight className="h-4 w-4" />
              </button>
              <ContactButtons />
            </div>
            <div className="reveal mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-500" style={{ transitionDelay: '240ms' }}>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-600" /> 10+ years experience</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-600" /> 320+ businesses served</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-600" /> 99.9% on-time filing</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCard() {
  const items = [
    { icon: Receipt, label: 'GST Filing', desc: 'Monthly & annual returns' },
    { icon: FileText, label: 'Income Tax Return', desc: 'ITR-1 to ITR-6 filing' },
    { icon: BookOpen, label: 'Tally Bookkeeping', desc: 'Audit-ready books' },
    { icon: Building2, label: 'Business Registration', desc: 'Company & LLP setup' },
  ];
  return (
    <div className="reveal relative mx-auto max-w-md" style={{ transitionDelay: '200ms' }}>
      <div className="absolute -right-4 -top-4 hidden h-full w-full rounded-4xl border border-brand-200/60 sm:block" />
      <div className="relative rounded-4xl border border-ink-100 bg-white p-6 shadow-glow sm:p-8">
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-600">Our Core Services</span>
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600">
            <ShieldCheck className="h-4 w-4" />
          </span>
        </div>
        <div className="mt-5 grid gap-3">
          {items.map((it, i) => (
            <button
              key={i}
              onClick={() => navigate(`/services/${it.label.toLowerCase().replace(/\s+/g, '-')}`)}
              className="group flex items-center gap-4 rounded-2xl border border-ink-100 bg-white p-4 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50/40 hover:shadow-soft"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft transition-transform group-hover:scale-105">
                <it.icon className="h-5 w-5" />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-semibold text-ink-900">{it.label}</span>
                <span className="block text-xs text-ink-400">{it.desc}</span>
              </span>
              <ArrowRight className="h-4 w-4 text-ink-300 transition-colors group-hover:text-brand-600" />
            </button>
          ))}
        </div>
        <div className="mt-5 rounded-2xl bg-ink-950 p-4 text-center">
          <p className="text-xs text-ink-300">
            <span className="font-semibold text-white">Free first consultation</span> — talk to a senior consultant today.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  return (
    <section className="container-page -mt-10 relative z-10">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-ink-100 bg-ink-100 shadow-card lg:grid-cols-4">
        {STATS.map((s, i) => (
          <div key={i} className="reveal bg-white p-6 text-center sm:p-8" style={{ transitionDelay: `${i * 70}ms` }}>
            <div className="text-3xl font-extrabold text-brand-600 sm:text-4xl">{s.value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-400">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Value Props ---------------- */
function ValueProps() {
  return (
    <section className="container-page py-20 sm:py-24">
      <SectionHeading
        eyebrow="Why Choose Us"
        title={<>Compliance handled with <span className="text-gradient">precision</span></>}
        subtitle="We combine deep tax expertise with proactive service so your filings are always accurate, timely and optimised."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {VALUE_PROPS.map((v, i) => (
          <div key={i} className="card reveal group p-6 hover:-translate-y-1 hover:shadow-glow" style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
              <v.icon className="h-6 w-6" />
            </span>
            <h3 className="mt-5 text-base font-bold text-ink-950">{v.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Services Preview ---------------- */
function ServicesPreview() {
  return (
    <section className="relative bg-ink-50/60 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Services"
          title={<>Everything your business needs, <span className="text-gradient">under one roof</span></>}
          subtitle="From routine filings to strategic tax planning — we cover the full spectrum of accounting and compliance."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((s, i) => (
            <button
              key={s.slug}
              onClick={() => navigate(`/services/${s.slug}`)}
              className="card reveal group flex items-start gap-5 p-6 text-left hover:-translate-y-1 hover:shadow-glow sm:p-7"
              style={{ transitionDelay: `${(i % 2) * 80}ms` }}
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft transition-transform group-hover:scale-105">
                <s.icon className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-ink-950">{s.title}</h3>
                  <ArrowRight className="h-5 w-5 text-ink-300 transition-all group-hover:translate-x-1 group-hover:text-brand-600" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.short}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-brand-600">
                  Learn more <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Process ---------------- */
function Process() {
  const steps = [
    { n: '01', title: 'Free Consultation', text: 'We understand your business, structure and compliance needs.' },
    { n: '02', title: 'Engagement Setup', text: 'You receive a clear scope, timeline and transparent pricing.' },
    { n: '03', title: 'Ongoing Compliance', text: 'We handle filings, bookkeeping and advisory — on time, every time.' },
    { n: '04', title: 'Review & Advisory', text: 'Regular reviews keep your tax optimised and books audit-ready.' },
  ];
  return (
    <section className="container-page py-20 sm:py-24">
      <SectionHeading
        eyebrow="How We Work"
        title={<>A simple, transparent <span className="text-gradient">4-step process</span></>}
        subtitle="No jargon, no surprises. Just clear, reliable service from day one."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={i} className="reveal relative rounded-3xl border border-ink-100 bg-white p-6 shadow-card" style={{ transitionDelay: `${i * 80}ms` }}>
            <span className="text-4xl font-extrabold text-brand-100">{s.n}</span>
            <h3 className="mt-3 text-base font-bold text-ink-950">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-500">{s.text}</p>
            {i < steps.length - 1 && (
              <span className="absolute right-5 top-7 hidden h-px w-12 bg-gradient-to-r from-brand-200 to-transparent lg:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
function TestimonialsSection() {
  return (
    <section className="relative bg-ink-50/60 py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Testimonials"
          title={<>Trusted by businesses <span className="text-gradient">across Gujarat</span></>}
          subtitle="Don't just take our word for it — here's what our clients have to say."
        />
        <div className="mt-12">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function FaqSection() {
  return (
    <section className="container-page py-20 sm:py-24">
      <SectionHeading
        eyebrow="FAQ"
        title={<>Answers to your <span className="text-gradient">common questions</span></>}
        subtitle="Everything you need to know about working with IQRA ASSOCIATES."
      />
      <div className="mt-12">
        <FaqAccordion items={FAQS} />
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function ContactSection() {
  return (
    <section id="contact" className="relative bg-ink-50/60 py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact Us"
              title={<>Let&apos;s talk about <span className="text-gradient">your business</span></>}
              subtitle="Share a few details and our team will reach out with a tailored proposal. Prefer to talk now? Use WhatsApp or call us directly."
            />
            <div className="reveal mt-8 space-y-4">
              <ContactInfoRow icon={MapPin} label="Visit Us" value={SITE.address} />
              <ContactInfoRow icon={Phone} label="Call Us" value={SITE.phone} href={SITE.phoneHref} />
              <ContactInfoRow icon={Mail} label="Email Us" value={SITE.email} href={`mailto:${SITE.email}`} />
              <ContactInfoRow icon={ClockIcon} label="Working Hours" value={SITE.hours} />
            </div>
            <div className="reveal mt-8">
              <ContactButtons />
            </div>
          </div>
          <div className="reveal" style={{ transitionDelay: '100ms' }}>
            <ContactForm />
          </div>
        </div>

        <div className="reveal mt-10 overflow-hidden rounded-3xl border border-ink-100 shadow-card">
          <MapPlaceholder />
        </div>
      </div>
    </section>
  );
}

function ContactInfoRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-ink-100 bg-white p-4 transition-colors hover:border-brand-200">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-ink-400">{label}</div>
        <div className="mt-0.5 text-sm font-medium text-ink-800">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block">{content}</a> : content;
}

function MapPlaceholder() {
  return (
    <div className="relative h-72 w-full bg-ink-100 sm:h-80">
      <iframe
        title="IQRA ASSOCIATES location"
        className="h-full w-full grayscale-[0.2]"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
      />
      <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-xs font-semibold text-ink-800 shadow-soft backdrop-blur">
        <MapPin className="h-4 w-4 text-brand-600" /> Ahmedabad, Gujarat
      </div>
    </div>
  );
}

