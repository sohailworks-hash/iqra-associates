import { MapPin, Phone, Mail, Clock as ClockIcon } from 'lucide-react';
import { useScrollReveal } from '@/lib/hooks';
import { SITE } from '@/lib/site';
import { SectionHeading } from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import { ContactButtons } from '@/components/FloatingActions';
import PageHero from '@/components/PageHero';

export default function ContactPage() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="Contact Us"
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'Contact' }]}
        title={<>Get in touch with <span className="text-gradient">IQRA ASSOCIATES</span></>}
        subtitle="Have a question or ready to get started? Reach out — we usually respond within one business day."
      >
        <ContactButtons />
      </PageHero>

      <section className="container-page py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Reach Us"
              title={<>We&apos;re here to <span className="text-gradient">help</span></>}
              subtitle="Visit our office in Ahmedabad, or reach out by phone, email or WhatsApp — whichever is easiest for you."
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

        <div className="reveal mt-12 overflow-hidden rounded-3xl border border-ink-100 shadow-card">
          <div className="relative h-80 w-full bg-ink-100">
            <iframe
              title="IQRA ASSOCIATES location"
              className="h-full w-full grayscale-[0.2]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`}
            />
            <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-xs font-semibold text-ink-800 shadow-soft backdrop-blur">
              <MapPin className="h-4 w-4 text-brand-600" /> C.G. Road, Navrangpura, Ahmedabad
            </div>
          </div>
        </div>
      </section>
    </div>
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

