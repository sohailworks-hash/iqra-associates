import {
  Target,
  Eye,
  HeartHandshake,
  Award,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  TrendingUp,
  Users,
  CheckCircle2,
} from 'lucide-react';
import { useScrollReveal } from '@/lib/hooks';
import { SITE, STATS } from '@/lib/site';
import { SectionHeading } from '@/components/SectionHeading';
import CtaBanner from '@/components/CtaBanner';
import PageHero from '@/components/PageHero';

export default function AboutPage() {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref}>
      <PageHero
        eyebrow="About Us"
        breadcrumb={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
        title={<>A decade of trusted <span className="text-gradient">accounting excellence</span></>}
        subtitle="IQRA ASSOCIATES is an Ahmedabad-based accounting and compliance firm helping businesses across Gujarat stay compliant, save tax, and grow with confidence."
      />

      {/* Intro */}
      <section className="container-page py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title={<>Built on trust, precision and <span className="text-gradient">long-term relationships</span></>}
            />
            <div className="reveal mt-6 space-y-4 text-base leading-relaxed text-ink-600">
              <p>
                Founded in {SITE.founded}, IQRA ASSOCIATES began with a simple mission: to make
                accounting and tax compliance approachable, accurate and stress-free for every
                business we serve.
              </p>
              <p>
                Over the years, we have grown into a trusted partner for 320+ businesses across
                Ahmedabad and Gujarat — from sole proprietors and startups to established companies.
                Our team combines deep knowledge of GST, income tax and Tally with a genuinely
                personal approach to every client.
              </p>
              <p>
                We believe compliance should never be a burden. That is why we track every deadline,
                explain everything in plain language, and plan proactively through the year to
                keep your tax outgo as low as legally possible.
              </p>
            </div>
          </div>
          <div className="reveal grid grid-cols-2 gap-4" style={{ transitionDelay: '100ms' }}>
            {STATS.map((s, i) => (
              <div key={i} className="rounded-3xl border border-ink-100 bg-white p-6 text-center shadow-card">
                <div className="text-3xl font-extrabold text-brand-600 sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs font-medium uppercase tracking-wider text-ink-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-ink-50/60 py-20 sm:py-24">
        <div className="container-page">
          <SectionHeading
            eyebrow="What Drives Us"
            title={<>Our mission, vision and <span className="text-gradient">values</span></>}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <ValueCard icon={Target} title="Mission" text="To make accounting and tax compliance simple, accurate and affordable for every business — large or small." />
            <ValueCard icon={Eye} title="Vision" text="To be Gujarat's most trusted accounting partner, known for integrity, expertise and genuine client care." />
            <ValueCard icon={HeartHandshake} title="Values" text="Integrity, precision, transparency and a long-term commitment to every client we serve." />
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="container-page py-20 sm:py-24">
        <SectionHeading
          eyebrow="Why Businesses Choose Us"
          title={<>More than filings — a <span className="text-gradient">true partner</span></>}
          subtitle="We go beyond ticking boxes. Our clients value the proactive advice, clear communication and peace of mind we bring."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Award, title: 'Senior-Led Review', text: 'Every filing is reviewed by an experienced consultant before submission.' },
            { icon: ShieldCheck, title: 'Strict Confidentiality', text: 'Your financial data is handled with secure, access-controlled systems.' },
            { icon: TrendingUp, title: 'Proactive Tax Planning', text: 'We plan through the year to legally minimise your tax outgo.' },
            { icon: Briefcase, title: 'All-India Service', text: 'Based in Ahmedabad, serving businesses across Gujarat and India.' },
            { icon: GraduationCap, title: 'Expert Team', text: 'Qualified accountants with deep GST, income tax and Tally expertise.' },
            { icon: Users, title: 'Dedicated Advisor', text: 'A single point of contact who truly understands your business.' },
          ].map((c, i) => (
            <div key={i} className="card reveal group p-6 hover:-translate-y-1 hover:shadow-glow" style={{ transitionDelay: `${(i % 3) * 80}ms` }}>
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-base font-bold text-ink-950">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Approach */}
      <section className="bg-ink-50/60 py-20 sm:py-24">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                align="left"
                eyebrow="Our Approach"
                title={<>Clear, proactive and <span className="text-gradient">always on time</span></>}
                subtitle="We take ownership of your compliance so you can focus on running your business."
              />
              <ul className="reveal mt-8 space-y-4">
                {[
                  'We understand your business before we touch your books',
                  'We track every statutory deadline so you never pay a late fee',
                  'We explain tax matters in plain, simple language',
                  'We plan proactively to optimise your tax position',
                  'We keep your books audit-ready all year round',
                ].map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-ink-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal grid gap-4 sm:grid-cols-2" style={{ transitionDelay: '100ms' }}>
              {[
                { k: 'GST', v: 'Returns, refunds & notices' },
                { k: 'Income Tax', v: 'ITR filing & planning' },
                { k: 'Tally', v: 'Setup & bookkeeping' },
                { k: 'Registration', v: 'Company, LLP, GST' },
              ].map((b, i) => (
                <div key={i} className="rounded-3xl border border-ink-100 bg-white p-6 shadow-card">
                  <div className="text-2xl font-extrabold text-brand-600">{b.k}</div>
                  <div className="mt-1 text-sm text-ink-500">{b.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}

function ValueCard({ icon: Icon, title, text }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string }) {
  return (
    <div className="card reveal group p-7 hover:-translate-y-1 hover:shadow-glow">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft transition-transform group-hover:scale-105">
        <Icon className="h-7 w-7" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-ink-950">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
    </div>
  );
}
